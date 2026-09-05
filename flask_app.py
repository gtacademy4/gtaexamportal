from flask import Flask, render_template, request, jsonify, session
import json
import os
import smtplib
import secrets
import random
import time
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.application import MIMEApplication
from datetime import datetime, timedelta
from werkzeug.security import generate_password_hash, check_password_hash

from supabase import create_client, Client

# 🔹 Supabase Credentials 🔹
SUPABASE_URL = "https://kdxbqjqyvlvxdbgyodju.supabase.co" # আপনার আসল URL
SUPABASE_KEY = "sb_publishable_TDZmN7COXs8UxsDCO95MmQ_UhYbIE_E" # আপনার আসল anon key দিন

supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# 🔹 Security Modules 🔹
from itsdangerous import URLSafeTimedSerializer, SignatureExpired, BadTimeSignature
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

app = Flask(__name__)

# 🔹 Limiter & Serializer Setup (Brute Force & Link Expiry Protection) 🔹
limiter = Limiter(
    get_remote_address,
    app=app,
    default_limits=["500 per day", "100 per hour"],
    storage_uri="memory://"
)
s = URLSafeTimedSerializer('gta_super_secret_key_2026') # Secret Key for Links

# 🔹 Fixed Secret Key 🔹
app.secret_key = 'gta_permanent_secret_key_2026_super_secure'
app.config['SESSION_COOKIE_HTTPONLY'] = True
app.config['SESSION_COOKIE_SAMESITE'] = 'Lax'

# 🔹 Global Error Handlers 🔹
@app.errorhandler(429)
def ratelimit_handler(e):
    return jsonify({"status": "error", "message": "খুব দ্রুত রিকোয়েস্ট পাঠাচ্ছেন! কিছুক্ষণ পর আবার চেষ্টা করুন।"}), 429

@app.errorhandler(500)
def internal_error(e):
    return jsonify({"status": "error", "message": "সার্ভারের ভেতরে সমস্যা হয়েছে! PythonAnywhere Error Log চেক করুন।"}), 500

@app.errorhandler(404)
def not_found_error(e):
    return jsonify({"status": "error", "message": "সঠিক API খুঁজে পাওয়া যায়নি!"}), 404

# Email Config
SENDER_EMAIL = "485huv0@gmail.com"
APP_PASSWORD = "oqgt ctej evpi nrwr"
RECEIVER_EMAIL = "485huv0@gmail.com"

THIS_FOLDER = os.path.dirname(os.path.abspath(__file__))
DB_FILE = os.path.join(THIS_FOLDER, 'database.json')

def load_db():
    db = {"users": [], "exams": [], "results": [], "pending_verifications": {}, "valid_students": [], "payment_requests": []}

    # 🔹 Safe File Reading Logic 🔹
    if os.path.exists(DB_FILE):
        try:
            with open(DB_FILE, 'r', encoding='utf-8') as f:
                content = f.read().strip()
                if content:
                    db = json.loads(content)
        except Exception as e:
            print("Database load warning:", e)

    needs_save = False

    # Default valid GTA Students
    if not db.get("valid_students"):
        db["valid_students"] = [
            {"id": "1001", "name": "Shuvo"},
            {"id": "1002", "name": "Rahim"}
        ]
        needs_save = True

    # Create Default Admin (যদি না থাকে)
    users = db.get("users", [])
    if not any(u.get("id") == "admin@gta.com" for u in users):
        users.append({
            "id": "admin@gta.com", "role": "admin", "name": "System Admin",
            "pass": generate_password_hash("2441139"), "uni": "GTA HQ",
            "is_verified": True, "favorites": [], "demerit_points": 0,
            "is_expelled": False, "is_gta_student": True, "language": "bn",
            "last_active": 0, "current_action": "Offline", "pdfs_downloaded": 0
        })
        needs_save = True
    db["users"] = users

    # Demo Exam Injection
    if not db.get("exams"):
        db["exams"] = [
            {
                "id": "demo_phy_mcq", "teacherId": "admin@gta.com", "teacherName": "System Admin",
                "category": "HSC Science", "subject": "Physics", "paper": "1st Paper",
                "topic": "Vector", "time": 15, "markPerQ": 1,
                "negativeMark": 0.25, "status": "approved", "scheduledTime": time.time() * 1000,
                "proctoring": True, "isDemo": True,
                "questions": [
                    {"type": "mcq", "source": "Dhaka Board 2023", "q": "নিচের কোনটি ভেক্টর রাশি?", "opts": ["ভর", "আয়তন", "বেগ", "তাপমাত্রা"], "ans": 2, "exp": "বেগের মান ও দিক উভয়ই আছে।"},
                    {"type": "mcq", "source": "BUET 2021", "q": "দুটি লম্ব ভেক্টরের ডট গুণন কত?", "opts": ["1", "0", "-1", "Infinity"], "ans": 1, "exp": "cos(90) = 0. তাই, A.B = 0."}
                ]
            }
        ]
        needs_save = True

    if "pending_verifications" not in db:
        db["pending_verifications"] = {}
        needs_save = True
    if "payment_requests" not in db:
        db["payment_requests"] = []
        needs_save = True

    if "qbank" not in db:
        db["qbank"] = []
        needs_save = True

    # 🔹 Data overwrite prevention logic 🔹
    if needs_save:
        save_db(db)

    return db

def save_db(data):
    with open(DB_FILE, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

def send_email(to_addr, subject, body, attachment_path=None):
    try:
        msg = MIMEMultipart()
        msg['From'] = SENDER_EMAIL
        msg['To'] = to_addr
        msg['Subject'] = subject
        msg.attach(MIMEText(body, 'plain'))
        if attachment_path:
            with open(attachment_path, 'rb') as f:
                part = MIMEApplication(f.read(), Name=os.path.basename(attachment_path))
            part['Content-Disposition'] = f'attachment; filename="{os.path.basename(attachment_path)}"'
            msg.attach(part)
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(SENDER_EMAIL, APP_PASSWORD)
        server.send_message(msg)
        server.quit()
    except Exception as e:
        print("Email error:", e)

@app.route('/')
def index():
    return render_template('index.html')

# ==========================================
# OTP & AUTHENTICATION API (Secure & Timed)
# ==========================================
@app.route('/api/send_otp', methods=['POST'])
@limiter.limit("3 per minute")
def send_otp():
    try:
        req = request.json
        email = req.get('id', '').strip().lower()
        role = req.get('role', 'student')
        student_id = req.get('student_id', '').strip()
        name = req.get('name', '').strip()

        if not email or '@' not in email:
            return jsonify({"status": "error", "message": "দয়া করে সঠিক ইমেইল ঠিকানা দিন!"}), 400

        db = load_db()

        # Check GTA Student Validity if Student ID is provided
        if role == 'student' and student_id:
            valid_student = next((s for s in db.get('valid_students', []) if s['id'] == student_id), None)
            if not valid_student:
                return jsonify({"status": "error", "message": "❌ এই স্টুডেন্ট আইডি/রোল নম্বরটি অনুমোদিত নয়!"}), 400
            if name and valid_student['name'].strip().lower() != name.strip().lower():
                return jsonify({"status": "error", "message": "❌ স্টুডেন্ট আইডি এবং নাম মিলছে না!"}), 400
            if any(u.get('student_id') == student_id for u in db['users']):
                return jsonify({"status": "error", "message": "❌ এই স্টুডেন্ট আইডি দিয়ে ইতিমধ্যে অ্যাকাউন্ট খোলা হয়েছে!"}), 400

        if any(u.get('id', '').lower() == email for u in db['users']):
            return jsonify({"status": "error", "message": "এই ইমেইল দিয়ে ইতিমধ্যে অ্যাকাউন্ট খোলা আছে!"}), 400

        otp_code = str(random.randint(100000, 999999))

        # 🔹 Save OTP with Timestamp for 10 Min Validation 🔹
        db['pending_verifications'][email] = {
            "otp": otp_code,
            "time": int(time.time())
        }
        save_db(db)

        body = f"Hello {name},\n\nআপনার GTA Exam Portal ভেরিফিকেশন কোড (OTP) হলো: {otp_code}\n\nএই কোডটি আগামী ১০ মিনিট পর্যন্ত কার্যকর থাকবে। এটি কারও সাথে শেয়ার করবেন না।"
        send_email(email, "GTA Exam Portal - OTP Verification", body)

        return jsonify({"status": "success", "message": "আপনার ইমেইলে ভেরিফিকেশন ওটিপি পাঠানো হয়েছে! (মেয়াদ: ১০ মিনিট)"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/verify_and_register', methods=['POST'])
def verify_and_register():
    try:
        req = request.json
        email = req.get('id', '').strip().lower()
        otp = req.get('otp', '').strip()
        password = req.get('pass', '').strip() # 🔹 Fixed Trailing Space Issue
        role = req.get('role')
        name = req.get('name', '').strip()
        student_id = req.get('student_id', '').strip()
        uni = req.get('uni', '').strip()
        version = req.get('version', 'bn').strip()
        academic_level = req.get('academic_level', '').strip()
        batch = req.get('batch', '').strip()

        db = load_db()
        verification_data = db['pending_verifications'].get(email)

        if not verification_data:
            return jsonify({"status": "error", "message": "❌ কোনো ওটিপি রিকোয়েস্ট পাওয়া যায়নি!"}), 400

        # 🔹 10 Minutes (600 Sec) OTP Validation Logic 🔹
        if isinstance(verification_data, dict):
            if int(time.time()) - verification_data.get('time', 0) > 600:
                db['pending_verifications'].pop(email, None)
                save_db(db)
                return jsonify({"status": "error", "message": "❌ ওটিপির মেয়াদ শেষ (১০ মিনিট পার হয়েছে)! নতুন করে রিকোয়েস্ট করুন।"}), 400

            if verification_data.get('otp') != otp:
                return jsonify({"status": "error", "message": "❌ ভুল ওটিপি! সঠিক ওটিপি দিন।"}), 400
        else:
            # Legacy Support
            if verification_data != otp:
                return jsonify({"status": "error", "message": "❌ ভুল ওটিপি! সঠিক ওটিপি দিন।"}), 400

        if len(password) < 8:
            return jsonify({"status": "error", "message": "পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে!"}), 400

        is_gta_student = False
        if role == 'student' and student_id:
            is_gta_student = True

        # ৭ দিনের ফ্রি প্রো ট্রায়াল (যদি GTA Student না হয়)
        trial_expiry = (datetime.now() + timedelta(days=7)).timestamp() * 1000

        db['users'].append({
            "id": email, "role": role, "name": name,
            "student_id": student_id if role == 'student' else '',
            "is_gta_student": is_gta_student,
            "uni": uni,
            "pass": generate_password_hash(password),
            "is_verified": (role != 'teacher'),
            "favorites": [],
            "pro_expiry": trial_expiry if not is_gta_student else 0,
            "demerit_points": 0,
            "is_expelled": False,
            "language": "en" if version == 'en' else "bn",
            "version": version,
            "last_active": int(time.time() * 1000),
            "current_action": "Registered",
            "pdfs_downloaded": 0,
            "academic_level": academic_level,
            "batch": batch
        })

        db['pending_verifications'].pop(email, None)
        save_db(db)
        return jsonify({"status": "success", "message": "অ্যাকাউন্ট সফলভাবে তৈরি হয়েছে!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/login', methods=['POST'])
@limiter.limit("5 per minute")
def login():
    try:
        req = request.json
        email = req.get('id', '').strip().lower()
        password = req.get('pass', '').strip() # 🔹 Fixed Trailing Space Issue
        req_role = req.get('role', '')

        db = load_db()
        user = next((u for u in db['users'] if u.get('id', '').lower() == email), None)

        if user:
            if user['role'] != 'admin' and req_role and user['role'] != req_role:
                return jsonify({"status": "error", "message": "❌ এই ইমেইলটি অন্য Role এ রেজিস্টার করা!"})

            if not user.get('is_verified', True):
                return jsonify({"status": "error", "message": "❌ আপনার টিচার অ্যাকাউন্টটি এখনও এডমিন কর্তৃক অ্যাপ্রুভ হয়নি!"})

            user_pass = user.get('pass', '')
            is_valid = check_password_hash(user_pass, password) if user_pass.startswith(('pbkdf2:', 'scrypt:', 'argon2:')) else (user_pass == password)

            if is_valid:
                session['user_id'] = user['id']
                session['role'] = user['role']
                user['last_active'] = int(time.time() * 1000)
                user['current_action'] = "Logged In"
                save_db(db)
                return jsonify({"status": "success", "user": format_user_data(user)})
        return jsonify({"status": "error", "message": "❌ ভুল ইমেইল বা পাসওয়ার্ড!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

def format_user_data(user):
    now = time.time() * 1000
    is_pro = user.get('is_gta_student', False) or (user.get('pro_expiry', 0) > now) or (user['role'] == 'admin')

    return {
        "id": user['id'], "role": user['role'], "name": user['name'],
        "student_id": user.get('student_id', ''), "uni": user.get('uni', ''),
        "is_gta_student": user.get('is_gta_student', False),
        "is_pro": is_pro,
        "pro_expiry": user.get('pro_expiry', 0),
        "demerit_points": user.get('demerit_points', 0),
        "is_expelled": user.get('is_expelled', False),
        "is_verified": user.get('is_verified', True),
        "favorites": user.get('favorites', []),
        "language": user.get('language', 'bn'),
        "version": user.get('version', 'bn'),
        "phone": user.get('phone', ''),
        "profilePic": user.get('profilePic', ''),
        "autoCoupon": user.get('autoCoupon', ''),
        "discountAmount": user.get('discountAmount', 0),
        "last_active": user.get('last_active', 0),
        "current_action": user.get('current_action', 'Offline'),
        "pdfs_downloaded": user.get('pdfs_downloaded', 0),
        "academic_level": user.get('academic_level', ''),
        "batch": user.get('batch', '')
    }

@app.route('/api/logout', methods=['POST'])
def logout():
    session.clear()
    return jsonify({"status": "success"})

@app.route('/api/me', methods=['GET'])
def get_me():
    if 'user_id' in session:
        db = load_db()
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)
        if user:
            user['last_active'] = int(time.time() * 1000)
            save_db(db)
            return jsonify({"status": "success", "user": format_user_data(user)})
    return jsonify({"status": "error"})

# ==========================================
# SYSTEM API (Exams, Results, Admin Controls)
# ==========================================
@app.route('/api/data', methods=['GET'])
def get_data():
    try:
        tables = ['users', 'exams', 'results', 'qbank', 'chapters', 'valid_students', 'payment_requests']
        response_data = {'status': 'success'}

        # 🔹 সব টেবিল থেকে ডেটা ফেচ করে ফ্রন্টএন্ডের জন্য সাজানো 🔹
        for table in tables:
            rows = supabase.table(table).select('data').execute().data
            response_data[table] = [row['data'] for row in rows if 'data' in row]

        return jsonify(response_data)
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

@app.route('/api/submit_exam', methods=['POST'])
def submit_exam():
    if 'user_id' not in session:
        return jsonify({"status": "error", "message": "Unauthorized"}), 401

    try:
        req = request.json
        exam_id = req.get('examId')
        student_id = req.get('studentId')
        time_taken = req.get('timeTaken', 0)
        answers_data = req.get('answersData', {})
        snapshots = req.get('snapshots', [])
        is_practice = req.get('isPractice', False)

        db = load_db()
        exam = next((e for e in db['exams'] if e['id'] == exam_id), None)
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)

        if not exam or not user:
            return jsonify({"status": "error", "message": "Exam or User not found"}), 404

        correct = 0
        wrong = 0
        questions = exam.get('questions', [])
        mark_per_q = float(exam.get('markPerQ', 1))
        neg_mark = float(exam.get('negativeMark', 0))

        for i, q in enumerate(questions):
            if q['type'] == 'mcq':
                ans_info = answers_data.get(str(i))
                if ans_info and 'selected' in ans_info:
                    if ans_info['selected'] == q.get('ans', -1):
                        correct += 1
                        answers_data[str(i)]['isCorrect'] = True
                    else:
                        wrong += 1
                        answers_data[str(i)]['isCorrect'] = False

        score = (correct * mark_per_q) - (wrong * neg_mark)
        time_str = f"{int(time_taken // 60):02d}:{int(time_taken % 60):02d}"

        result_obj = {
            "id": f"RES_{int(time.time() * 1000)}",
            "examId": exam_id,
            "subject": exam.get('subject', 'Exam'),
            "studentId": user['id'],
            "studentName": user['name'],
            "score": score,
            "correct": correct,
            "wrong": wrong,
            "timeSec": time_taken,
            "timeStr": time_str,
            "timestampStr": datetime.now().strftime('%d %b %Y, %I:%M %p'),
            "isPractice": is_practice,
            "cqGraded": False,
            "askedQuestions": questions,
            "answersData": answers_data,
            "snapshots": snapshots
        }

        db['results'].append(result_obj)
        save_db(db)

        return jsonify({
            "status": "success",
            "resultObj": result_obj
        })
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/save', methods=['POST'])
def save_data():
    req = request.json
    table_name = req.get('table')
    new_data_list = req.get('data')

    if not table_name or new_data_list is None:
        return jsonify({'status': 'error', 'message': 'Invalid request'})

    try:
        # 1. আগের সেভ থাকা আইডিগুলো বের করা
        existing_rows = supabase.table(table_name).select('id').execute().data
        existing_ids = {row['id'] for row in existing_rows}

        # 2. নতুন ডেটা প্রসেস করা
        formatted_data = []
        incoming_ids = set()

        for item in new_data_list:
            item_id = item.get('id')
            if item_id:
                incoming_ids.add(item_id)
                formatted_data.append({
                    'id': item_id,
                    'data': item
                })

        # 3. ডাটাবেস থেকে হারানো ডেটা ডিলিট করা
        ids_to_delete = existing_ids - incoming_ids
        for del_id in ids_to_delete:
            supabase.table(table_name).delete().eq('id', del_id).execute()

        # 4. নতুন বা আপডেট করা ডেটা সেভ (Upsert) করা
        if formatted_data:
            supabase.table(table_name).upsert(formatted_data).execute()

        return jsonify({'status': 'success'})
    except Exception as e:
        return jsonify({'status': 'error', 'message': str(e)})

# 🔹 নতুন সিকিউর কুপন API 🔹
@app.route('/api/claim_coupon', methods=['POST'])
def claim_coupon():
    if 'user_id' not in session:
        return jsonify({"status": "error"}), 401
    try:
        req = request.json
        db = load_db()
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)
        if user:
            user['autoCoupon'] = req.get('autoCoupon')
            user['discountAmount'] = req.get('discountAmount')
            save_db(db)
            return jsonify({"status": "success"})
        return jsonify({"status": "error"}), 404
    except Exception as e:
        return jsonify({"status": "error"}), 500

@app.route('/api/submit_payment', methods=['POST'])
def submit_payment():
    if 'user_id' not in session:
        return jsonify({"status": "error"}), 401
    try:
        req = request.json
        plan = req.get('plan')
        trx_id = req.get('trx_id', '').strip()
        if not trx_id:
            return jsonify({"status": "error", "message": "Transaction ID দিন!"}), 400

        db = load_db()
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)

        db['payment_requests'].append({
            "id": 'PAY_' + str(int(time.time())),
            "user_email": user['id'],
            "user_name": user['name'],
            "plan": plan,
            "trx_id": trx_id,
            "status": "pending",
            "date": datetime.now().strftime('%d %b %Y, %I:%M %p')
        })
        save_db(db)
        return jsonify({"status": "success", "message": "পেমেন্ট রিকোয়েস্ট জমা হয়েছে! এডমিন যাচাই করে আপনার অ্যাকাউন্ট প্রো আপগ্রেড করবেন।"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/admin_action', methods=['POST'])
def admin_action():
    if session.get('role') != 'admin':
        return jsonify({"status": "error", "message": "Unauthorized"}), 401
    try:
        req = request.json
        action = req.get('action')
        db = load_db()

        if action == 'verify_teacher':
            uid = req.get('uid')
            for u in db['users']:
                if u.get('id') == uid:
                    u['is_verified'] = True
                    u['is_gta_student'] = True # 🔹 Lifetime Premium Access Given
                    break

        elif action == 'add_teacher':
            t_id = req.get('id', '').strip().lower()
            t_name = req.get('name', '').strip()
            t_pass = req.get('pass', '').strip()
            t_uni = req.get('uni', '').strip()

            if any(u.get('id') == t_id for u in db['users']):
                return jsonify({"status": "error", "message": "এই ইমেইলটি ইতিমধ্যে ব্যবহৃত হচ্ছে!"}), 400

            db['users'].append({
                "id": t_id, "role": "teacher", "name": t_name,
                "student_id": "", "is_gta_student": True,
                "uni": t_uni, "pass": generate_password_hash(t_pass),
                "is_verified": True, "favorites": [],
                "pro_expiry": 0, "demerit_points": 0,
                "is_expelled": False, "language": "bn", "version": "bn",
                "last_active": 0, "current_action": "Offline", "pdfs_downloaded": 0
            })

        elif action == 'delete_exam':
            db['exams'] = [e for e in db['exams'] if e.get('id') != req.get('exam_id')]
            db['results'] = [r for r in db['results'] if r.get('examId') != req.get('exam_id')]

        elif action == 'approve_exam':
            for e in db['exams']:
                if e['id'] == req.get('exam_id'):
                    e['status'] = 'approved'
                    e['scheduledTime'] = req.get('scheduledTime')
                    break

        elif action == 'add_student':
            s_id = req.get('student_id', '').strip()
            s_name = req.get('student_name', '').strip()
            if s_id and s_name:
                valid_list = db.get('valid_students', [])
                if not any(s['id'] == s_id for s in valid_list):
                    valid_list.append({"id": s_id, "name": s_name})
                    db['valid_students'] = valid_list

        elif action == 'delete_student':
            del_id = req.get('student_id', '').strip()
            db['valid_students'] = [s for s in db.get('valid_students', []) if s['id'] != del_id]

        elif action == 'approve_payment':
            pay_id = req.get('pay_id')
            pay_req = next((p for p in db['payment_requests'] if p['id'] == pay_id), None)
            if pay_req and pay_req['status'] == 'pending':
                pay_req['status'] = 'approved'
                target_user = next((u for u in db['users'] if u['id'] == pay_req['user_email']), None)
                if target_user:
                    plan = pay_req['plan']
                    days_add = 30 if plan == '1m' else (90 if plan == '3m' else (180 if plan == '6m' else 365))
                    current_expiry = target_user.get('pro_expiry', 0)
                    base_time = max(current_expiry, time.time() * 1000)
                    target_user['pro_expiry'] = base_time + (days_add * 24 * 60 * 60 * 1000)

        elif action == 'reject_payment':
            pay_id = req.get('pay_id')
            pay_req = next((p for p in db['payment_requests'] if p['id'] == pay_id), None)
            if pay_req:
                pay_req['status'] = 'rejected'

        elif action == 'modify_pro':
            u_email = req.get('email')
            mod_type = req.get('mod_type')
            days = int(req.get('days', 0))
            target_user = next((u for u in db['users'] if u['id'] == u_email), None)

            if target_user:
                current_expiry = target_user.get('pro_expiry', 0)
                now = time.time() * 1000

                if mod_type == 'add':
                    base_time = max(current_expiry, now)
                    target_user['pro_expiry'] = base_time + (days * 24 * 60 * 60 * 1000)
                elif mod_type == 'remove':
                    new_expiry = max(current_expiry - (days * 24 * 60 * 60 * 1000), 0)
                    target_user['pro_expiry'] = new_expiry
                elif mod_type == 'lifetime':
                    target_user['is_gta_student'] = True
                elif mod_type == 'revoke':
                    target_user['is_gta_student'] = False
                    target_user['pro_expiry'] = 0

        elif action == 'toggle_expel':
            u_email = req.get('email')
            target_user = next((u for u in db['users'] if u['id'] == u_email), None)
            if target_user:
                target_user['is_expelled'] = not target_user.get('is_expelled', False)

        save_db(db)
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

@app.route('/api/record_cheating', methods=['POST'])
def record_cheating():
    if 'user_id' not in session:
        return jsonify({"status": "error"}), 401
    db = load_db()
    user = next((u for u in db['users'] if u['id'] == session['user_id']), None)
    if user:
        user['demerit_points'] = user.get('demerit_points', 0) + 1
        if user['demerit_points'] >= 10:
            user['is_expelled'] = True
        save_db(db)
        return jsonify({"status": "success", "demerit_points": user['demerit_points']})
    return jsonify({"status": "error"}), 404

@app.route('/api/update_profile', methods=['POST'])
def update_profile():
    if 'user_id' not in session:
        return jsonify({"status": "error"}), 401
    try:
        req = request.json
        db = load_db()
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)
        if not user:
            return jsonify({"status": "error"}), 404
        user['name'] = req.get('name', user['name'])
        user['uni'] = req.get('uni', user.get('uni', ''))
        save_db(db)
        return jsonify({"status": "success", "message": "✅ প্রোফাইল আপডেট হয়েছে!", "user": format_user_data(user)})
    except Exception as e:
        return jsonify({"status": "error"}), 500

@app.route('/api/toggle_language', methods=['POST'])
def toggle_language():
    if 'user_id' not in session:
        return jsonify({"status": "error"}), 401
    try:
        req = request.json
        lang = req.get('lang', 'bn')
        db = load_db()
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)
        if user:
            user['language'] = lang
            save_db(db)
            return jsonify({"status": "success", "language": lang})
        return jsonify({"status": "error"}), 404
    except Exception as e:
        return jsonify({"status": "error"}), 500

@app.route('/api/update_favorites', methods=['POST'])
def update_favorites():
    if 'user_id' not in session:
        return jsonify({"status": "error"}), 401
    try:
        req = request.json
        db = load_db()
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)
        if user:
            user['favorites'] = req.get('favorites', [])
            save_db(db)
            return jsonify({"status": "success"})
        return jsonify({"status": "error"}), 404
    except Exception as e:
        return jsonify({"status": "error"}), 500

@app.route('/api/change_password', methods=['POST'])
def change_password():
    if 'user_id' not in session:
        return jsonify({"status": "error"}), 401
    try:
        req = request.json
        old_pass = req.get('old_pass', '').strip()
        new_pass = req.get('new_pass', '').strip()
        if len(new_pass) < 8:
            return jsonify({"status": "error", "message": "নতুন পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে!"}), 400
        db = load_db()
        user = next((u for u in db['users'] if u['id'] == session['user_id']), None)
        user_pass = user.get('pass', '')
        is_valid = check_password_hash(user_pass, old_pass) if user_pass.startswith(('pbkdf2:', 'scrypt:', 'argon2:')) else (user_pass == old_pass)
        if not is_valid:
            return jsonify({"status": "error", "message": "❌ পুরোনো পাসওয়ার্ড সঠিক নয়!"}), 400
        user['pass'] = generate_password_hash(new_pass)
        save_db(db)
        return jsonify({"status": "success", "message": "✅ পাসওয়ার্ড সফলভাবে পরিবর্তন করা হয়েছে!"})
    except Exception as e:
        return jsonify({"status": "error"}), 500

@app.route('/api/send_backup', methods=['POST'])
def send_backup():
    if session.get('role') != 'admin':
        return jsonify({"status": "error", "message": "Only admins can request backup."}), 401
    try:
        send_email(RECEIVER_EMAIL, f"GTA Exam Portal Backup ({datetime.now().strftime('%Y-%m-%d %H:%M')})",
                   "আপনার ডেটাবেস ব্যাকআপ সংযুক্ত করা হলো।", attachment_path=DB_FILE)
        return jsonify({"status": "success", "message": "Backup sent!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

# ---------------------------------------------
# Forgot Password Link Generate (10 Min Expiry)
# ---------------------------------------------
@app.route('/api/forgot_password', methods=['POST'])
@limiter.limit("3 per minute")
def forgot_password():
    try:
        contact = request.json.get('id', '').strip().lower()
        db = load_db()
        user = next((u for u in db['users'] if u.get('id', '').lower() == contact), None)
        if not user:
            return jsonify({"status": "error", "message": "এই ইমেইল দিয়ে কোনো অ্যাকাউন্ট নেই!"}), 404

        # 🔹 Secure Token Generation 🔹
        token = s.dumps(contact, salt='reset-password')
        reset_link = f"{request.host_url}?reset_token={token}"

        body = f"Hello {user['name']},\n\nপাসওয়ার্ড রিসেট করতে নিচের লিংকে ক্লিক করুন:\n{reset_link}\n\nএই লিংকটির মেয়াদ ১০ মিনিট।"
        send_email(contact, "GTA Exam Portal - Password Reset Link", body)
        return jsonify({"status": "success", "message": "পাসওয়ার্ড রিসেট লিংক আপনার ইমেইলে পাঠানো হয়েছে! (মেয়াদ: ১০ মিনিট)"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

# ---------------------------------------------
# Reset Password Confirm
# ---------------------------------------------
@app.route('/api/reset_password_with_token', methods=['POST'])
def reset_password_with_token():
    try:
        req = request.json
        token = req.get('token')
        new_pass = req.get('new_pass', '').strip()

        if not token or not new_pass:
            return jsonify({"status": "error", "message": "Missing token or password."}), 400
        if len(new_pass) < 8:
            return jsonify({"status": "error", "message": "নতুন পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে!"}), 400

        try:
            # 🔹 Max Age = 600 Seconds (10 Minutes) 🔹
            email = s.loads(token, salt='reset-password', max_age=600)
        except SignatureExpired:
            return jsonify({"status": "error", "message": "❌ লিংকটির মেয়াদ শেষ (১০ মিনিট পার হয়েছে)! নতুন করে রিকোয়েস্ট করুন।"}), 400
        except BadTimeSignature:
            return jsonify({"status": "error", "message": "❌ লিংকটি ভুল বা অকার্যকর!"}), 400

        db = load_db()
        user = next((u for u in db['users'] if u.get('id', '').lower() == email.lower()), None)
        if not user:
            return jsonify({"status": "error", "message": "User not found!"}), 404

        user['pass'] = generate_password_hash(new_pass)

        # Clean up old manual tokens if any existed
        user.pop('reset_token', None)
        user.pop('reset_token_time', None)

        save_db(db)

        return jsonify({"status": "success", "message": "✅ পাসওয়ার্ড সফলভাবে রিসেট হয়েছে!"})
    except Exception as e:
        return jsonify({"status": "error", "message": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
