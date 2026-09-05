// File Name: mcq_math_matrix.js

var STATIC_MCQ_MATH_MATRIX = {
    category: "HSC Science",            // হুবহু ড্রপডাউনের মত বানান হতে হবে
    subject: "Higher Mathematics",      // হুবহু ড্রপডাউনের মত বানান হতে হবে
    paper: "1st Paper",
    topic: "Matrix",
    subTopic1: "Chapter 1.1",
    subTopic2: "Types of Matrices",
    questions: [
    {
        "type": "mcq",
        "source": "সি. বো. '২৩",
        "board": "Sylhet Board 2023",
        "q": "যদি \\( \\begin{bmatrix} 1 & 2 \\\\ 3 & 2a \\end{bmatrix} \\) ম্যাট্রিক্সের ট্রেস 7 হয়, তবে a এর মান কত?",
        "q_en": "If the trace of the matrix \\( \\begin{bmatrix} 1 & 2 \\\\ 3 & 2a \\end{bmatrix} \\) is 7, then what is the value of a?",
        "opts": [
            "\\( -1 \\)",
            "\\( 1/3 \\)",
            "\\( 2 \\)",
            "\\( 3 \\)"
        ],
        "opts_en": [
            "\\( -1 \\)",
            "\\( 1/3 \\)",
            "\\( 2 \\)",
            "\\( 3 \\)"
        ],
        "ans": 3,
        "exp": "ম্যাট্রিক্সের ট্রেস = ম্যাট্রিক্সের মুখ্য কর্ণের ভুক্তিগুলোর যোগফল। প্রশ্নমতে, \\( 1 + 2a = 7 \\Rightarrow 2a = 6 \\Rightarrow a = 3 \\)",
        "exp_en": "Trace of a matrix = Sum of the entries of its principal diagonal. According to the question, \\( 1 + 2a = 7 \\Rightarrow 2a = 6 \\Rightarrow a = 3 \\)"
    },
    {
        "type": "mcq",
        "source": "কু. বো. '২২",
        "board": "Cumilla Board 2022",
        "q": "নিচের কোনটি সমঘাতী ম্যাট্রিক্স?",
        "q_en": "Which of the following is an idempotent matrix?",
        "opts": [
            "\\( \\begin{bmatrix} -2 & -1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -1 \\\\ 2 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -1 \\\\ -2 & 1 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} -2 & -1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -1 \\\\ 2 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -1 \\\\ -2 & 1 \\end{bmatrix} \\)"
        ],
        "ans": 2,
        "exp": "সমঘাতী ম্যাট্রিক্স A এর ক্ষেত্রে \\( A^2 = A \\) হয়। গ নং অপশনের ক্ষেত্রে, \\( A^2 = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = \\begin{bmatrix} 4-2 & 2-1 \\\\ -4+2 & -2+1 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = A \\)। অতএব এটি একটি সমঘাতী ম্যাট্রিক্স।",
        "exp_en": "For an idempotent matrix A, \\( A^2 = A \\). For option (c), \\( A^2 = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = \\begin{bmatrix} 4-2 & 2-1 \\\\ -4+2 & -2+1 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = A \\). Therefore, it is an idempotent matrix."
    },
    {
        "type": "mcq",
        "source": "সি. বো. '২৩",
        "board": "Sylhet Board 2023",
        "q": "\\( A = \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} \\) হলে, \\( A^2 \\) একটি-",
        "q_en": "If \\( A = \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} \\), then \\( A^2 \\) is a/an-",
        "opts": [
            "সমঘাতী ম্যাট্রিক্স",
            "শূন্যঘাতী ম্যাট্রিক্স",
            "অভেদক ম্যাট্রিক্স",
            "অতিক্রমী ম্যাট্রিক্স"
        ],
        "opts_en": [
            "Idempotent matrix",
            "Nilpotent matrix",
            "Identity matrix",
            "Singular matrix"
        ],
        "ans": 1,
        "exp": "দেওয়া আছে, \\( A = \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} \\), \\( A^2 = A \\cdot A = \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} = \\begin{bmatrix} a^2-a^2 & a^2-a^2 \\\\ -a^2+a^2 & -a^2+a^2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = 0 \\)। শূন্যঘাতী ম্যাট্রিক্স (Nilpotent Matrix): একটি বর্গ ম্যাট্রিক্স A এর জন্য \\( A^n = 0 \\) হলে ম্যাট্রিক্সটিকে শূন্যঘাতী ম্যাট্রিক্স বলা হয়। তাই এটি একটি শূন্যঘাতী ম্যাট্রিক্স।",
        "exp_en": "Given, \\( A = \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} \\), \\( A^2 = A \\cdot A = \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} \\begin{bmatrix} a & a \\\\ -a & -a \\end{bmatrix} = \\begin{bmatrix} a^2-a^2 & a^2-a^2 \\\\ -a^2+a^2 & -a^2+a^2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = 0 \\). Nilpotent Matrix: For a square matrix A, if \\( A^n = 0 \\), the matrix is called a nilpotent matrix. So, it is a nilpotent matrix."
    },
    {
        "type": "mcq",
        "source": "চ. বো. '২২",
        "board": "Chattogram Board 2022",
        "q": "যদি A একটি বর্গ ম্যাট্রিক্স এবং \\( A^2 = I \\) হয়, তবে A কে বলা হয়-",
        "q_en": "If A is a square matrix and \\( A^2 = I \\), then A is called a/an-",
        "opts": [
            "শূন্যঘাতী ম্যাট্রিক্স",
            "অভেদঘাতী ম্যাট্রিক্স",
            "সমঘাতী ম্যাট্রিক্স",
            "স্কেলার ম্যাট্রিক্স"
        ],
        "opts_en": [
            "Nilpotent matrix",
            "Involutory matrix",
            "Idempotent matrix",
            "Scalar matrix"
        ],
        "ans": 1,
        "exp": "অভেদঘাতী ম্যাট্রিক্স (Involutory Matrix): একটি বর্গ ম্যাট্রিক্স A কে অভেদঘাতী ম্যাট্রিক্স বলা হবে যদি \\( A^2 = I \\) হয়।",
        "exp_en": "Involutory Matrix: A square matrix A is called an involutory matrix if \\( A^2 = I \\)."
    },
    {
        "type": "mcq",
        "source": "ঢা. বো. '২৩",
        "board": "Dhaka Board 2023",
        "q": "\\( \\begin{bmatrix} p & 2 & -3 \\\\ -2 & 0 & x \\\\ 3 & -5 & 0 \\end{bmatrix} \\) ম্যাট্রিক্সটি বক্র প্রতিসম হলে, \\( p+x = ? \\)",
        "q_en": "If the matrix \\( \\begin{bmatrix} p & 2 & -3 \\\\ -2 & 0 & x \\\\ 3 & -5 & 0 \\end{bmatrix} \\) is skew-symmetric, then \\( p+x = ? \\)",
        "opts": [
            "\\( -5 \\)",
            "\\( 2 \\)",
            "\\( 5 \\)",
            "\\( -3 \\)"
        ],
        "opts_en": [
            "\\( -5 \\)",
            "\\( 2 \\)",
            "\\( 5 \\)",
            "\\( -3 \\)"
        ],
        "ans": 0,
        "exp": "বক্র প্রতিসম ম্যাট্রিক্স হবে যদি \\( A^T = -A \\) হয়। শর্তমতে তুলনা করলে, \\( p = -p \\Rightarrow 2p = 0 \\Rightarrow p = 0 \\) এবং \\( -x = -5 \\Rightarrow x = 5 \\)। অতএব, \\( p + x = 0 + 5 = 5 \\)।",
        "exp_en": "A matrix is skew-symmetric if \\( A^T = -A \\). Comparing according to the condition, \\( p = -p \\Rightarrow 2p = 0 \\Rightarrow p = 0 \\) and \\( -x = -5 \\Rightarrow x = 5 \\). Therefore, \\( p + x = 0 + 5 = 5 \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "\\( A \\) ম্যাট্রিক্সের ক্রম \\( 4 \\times 3 \\) এবং \\( B \\) ম্যাট্রিক্সের ক্রম \\( 3 \\times 2 \\) হলে, \\( AB \\) ম্যাট্রিক্সের ক্রম কত?",
        "q_en": "If the order of matrix \\( A \\) is \\( 4 \\times 3 \\) and the order of matrix \\( B \\) is \\( 3 \\times 2 \\), what is the order of matrix \\( AB \\)?",
        "opts": [
            "\\( 4 \\times 3 \\)",
            "\\( 3 \\times 3 \\)",
            "\\( 4 \\times 2 \\)",
            "\\( 3 \\times 2 \\)"
        ],
        "opts_en": [
            "\\( 4 \\times 3 \\)",
            "\\( 3 \\times 3 \\)",
            "\\( 4 \\times 2 \\)",
            "\\( 3 \\times 2 \\)"
        ],
        "ans": 2,
        "exp": "ম্যাট্রিক্সের গুণের নিয়ম অনুসারে, প্রথম ম্যাট্রিক্সের কলাম সংখ্যা ও দ্বিতীয় ম্যাট্রিক্সের সারি সংখ্যা সমান হতে হবে এবং গুণফল ম্যাট্রিক্সের মাত্রা হবে (প্রথম ম্যাট্রিক্সের সারি \\( \\times \\) দ্বিতীয় ম্যাট্রিক্সের কলাম)। অর্থাৎ, \\( 4 \\times 2 \\)।",
        "exp_en": "According to the rules of matrix multiplication, the number of columns in the first matrix must equal the number of rows in the second matrix, and the order of the product matrix will be (rows of the first matrix \\( \\times \\) columns of the second matrix). That is, \\( 4 \\times 2 \\)."
    },
    {
        "type": "mcq",
        "source": "দি. বো. '২৩",
        "board": "Dinajpur Board 2023",
        "q": "যদি \\( \\begin{bmatrix} 0 & 5 \\\\ -5 & 0 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} -20 \\\\ 15 \\end{bmatrix} \\) হয় তবে \\( (x, y) = ? \\)",
        "q_en": "If \\( \\begin{bmatrix} 0 & 5 \\\\ -5 & 0 \\end{bmatrix} \\begin{bmatrix} x \\\\ y \\end{bmatrix} = \\begin{bmatrix} -20 \\\\ 15 \\end{bmatrix} \\), then \\( (x, y) = ? \\)",
        "opts": [
            "\\( (-3, -4) \\)",
            "\\( (-3, 4) \\)",
            "\\( (3, -4) \\)",
            "\\( (3, 4) \\)"
        ],
        "opts_en": [
            "\\( (-3, -4) \\)",
            "\\( (-3, 4) \\)",
            "\\( (3, -4) \\)",
            "\\( (3, 4) \\)"
        ],
        "ans": 0,
        "exp": "সমীকরণ থেকে পাই, \\( 5y = -20 \\Rightarrow y = -4 \\) এবং \\( -5x = 15 \\Rightarrow x = -3 \\)। সুতরাং \\( (x, y) = (-3, -4) \\)।",
        "exp_en": "From the equation, we get \\( 5y = -20 \\Rightarrow y = -4 \\) and \\( -5x = 15 \\Rightarrow x = -3 \\). Therefore, \\( (x, y) = (-3, -4) \\)."
    },
    {
        "type": "mcq",
        "source": "ম. বো. '২২",
        "board": "Mymensingh Board 2022",
        "q": "\\( A^2 = A \\) হলে A ম্যাট্রিক্সটি-",
        "q_en": "If \\( A^2 = A \\), then matrix A is-",
        "opts": [
            "সমঘাতী",
            "অভেদঘাতী",
            "শূন্যঘাতী",
            "স্কেলার"
        ],
        "opts_en": [
            "Idempotent",
            "Involutory",
            "Nilpotent",
            "Scalar"
        ],
        "ans": 0,
        "exp": "সমঘাতী বা একক্ষম ম্যাট্রিক্স (Idempotent Matrix): কোনো ম্যাট্রিক্সের বর্গ ঐ ম্যাট্রিক্সের সমান হলে তাকে সমঘাতী ম্যাট্রিক্স বলে। \\( A^2 = A \\) হলে A একটি সমঘাতী ম্যাট্রিক্স।",
        "exp_en": "Idempotent Matrix: If the square of a matrix is equal to the matrix itself, it is called an idempotent matrix. If \\( A^2 = A \\), then A is an idempotent matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি প্রতিসম ম্যাট্রিক্স?",
        "q_en": "Which of the following is a symmetric matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 0 & a \\\\ -a & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & 0 \\\\ 0 & -a \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & a \\\\ a & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & a \\\\ a & -a \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 0 & a \\\\ -a & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & 0 \\\\ 0 & -a \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & a \\\\ a & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & a \\\\ a & -a \\end{bmatrix} \\)"
        ],
        "ans": 2,
        "exp": "প্রতিসম ম্যাট্রিক্সের ক্ষেত্রে \\( A = A^T \\) হয়। গ নং অপশনের ক্ষেত্রে, \\( A = \\begin{bmatrix} 0 & a \\\\ a & 0 \\end{bmatrix} \\) এবং \\( A^T = \\begin{bmatrix} 0 & a \\\\ a & 0 \\end{bmatrix} \\)। যেহেতু \\( A = A^T \\), তাই এটি প্রতিসম ম্যাট্রিক্স।",
        "exp_en": "For a symmetric matrix, \\( A = A^T \\). For option (c), \\( A = \\begin{bmatrix} 0 & a \\\\ a & 0 \\end{bmatrix} \\) and \\( A^T = \\begin{bmatrix} 0 & a \\\\ a & 0 \\end{bmatrix} \\). Since \\( A = A^T \\), it is a symmetric matrix."
    },
    {
        "type": "mcq",
        "source": "রা. বো. '১৭",
        "board": "Rajshahi Board 2017",
        "q": "a-এর মান কত হলে \\( \\begin{bmatrix} -4 & 0 & -2 \\\\ 0 & 5 & a \\\\ -2 & 4 & 0 \\end{bmatrix} \\) ম্যাট্রিক্সটি প্রতিসম হবে?",
        "q_en": "For what value of a will the matrix \\( \\begin{bmatrix} -4 & 0 & -2 \\\\ 0 & 5 & a \\\\ -2 & 4 & 0 \\end{bmatrix} \\) be symmetric?",
        "opts": [
            "\\( -4 \\)",
            "\\( -2 \\)",
            "\\( 0 \\)",
            "\\( 4 \\)"
        ],
        "opts_en": [
            "\\( -4 \\)",
            "\\( -2 \\)",
            "\\( 0 \\)",
            "\\( 4 \\)"
        ],
        "ans": 3,
        "exp": "প্রতিসম ম্যাট্রিক্সের ক্ষেত্রে \\( A = A^T \\) বা \\( a_{ij} = a_{ji} \\) হয়। এখানে \\( a_{23} = a \\) এবং \\( a_{32} = 4 \\)। শর্তমতে, \\( a_{23} = a_{32} \\Rightarrow a = 4 \\)।",
        "exp_en": "For a symmetric matrix, \\( A = A^T \\) or \\( a_{ij} = a_{ji} \\). Here, \\( a_{23} = a \\) and \\( a_{32} = 4 \\). According to the condition, \\( a_{23} = a_{32} \\Rightarrow a = 4 \\)."
    },
    {
        "type": "mcq",
        "source": "সি. বো. '১৯",
        "board": "Sylhet Board 2019",
        "q": "\\( \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\) একটি-",
        "q_en": "\\( \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\) is a/an-",
        "opts": [
            "স্কেলার ম্যাট্রিক্স",
            "কর্ণ ম্যাট্রিক্স",
            "অভেদক ম্যাট্রিক্স",
            "ব্যতিক্রমী ম্যাট্রিক্স"
        ],
        "opts_en": [
            "Scalar matrix",
            "Diagonal matrix",
            "Identity matrix",
            "Singular matrix"
        ],
        "ans": 0,
        "exp": "যে কর্ণ ম্যাট্রিক্সের অশূন্য ভুক্তিগুলো অর্থাৎ প্রধান কর্ণের ভুক্তিগুলো সমান তাকে স্কেলার ম্যাট্রিক্স বলে।",
        "exp_en": "A diagonal matrix whose non-zero entries, i.e., the entries of the principal diagonal, are equal is called a scalar matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "A ও B দুটি \\( 3 \\times 3 \\) ক্রমের ম্যাট্রিক্স এবং \\( AB = 0 \\) হলে-",
        "q_en": "If A and B are two matrices of order \\( 3 \\times 3 \\) and \\( AB = 0 \\), then-",
        "opts": [
            "\\( A=0 \\) এবং \\( B=0 \\)",
            "\\( |A|=0 \\) বা \\( |B|=0 \\)",
            "\\( |A|=0 \\) এবং \\( |B|=0 \\)",
            "\\( A=B \\)"
        ],
        "opts_en": [
            "\\( A=0 \\) and \\( B=0 \\)",
            "\\( |A|=0 \\) or \\( |B|=0 \\)",
            "\\( |A|=0 \\) and \\( |B|=0 \\)",
            "\\( A=B \\)"
        ],
        "ans": 1,
        "exp": "দুটি ম্যাট্রিক্সের গুণফল শূন্য হলে ম্যাট্রিক্স দুটির অন্তত একটির নির্ণায়কের মান শূন্য হবে। অর্থাৎ \\( |A|=0 \\) বা \\( |B|=0 \\)।",
        "exp_en": "If the product of two matrices is zero, the determinant of at least one of the matrices must be zero. That is, \\( |A|=0 \\) or \\( |B|=0 \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "\\( A = \\begin{bmatrix} 2 & 3 & 5 \\\\ 0 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\) হলে \\( A \\) এর ট্রান্সপোজ (Transpose) ম্যাট্রিক্স কোনটি?",
        "q_en": "If \\( A = \\begin{bmatrix} 2 & 3 & 5 \\\\ 0 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\), which of the following is the transpose matrix of \\( A \\)?",
        "opts": [
            "\\( \\begin{bmatrix} 2 & 0 & 5 \\\\ 3 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3 & 5 \\\\ 0 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 5 & 1 & 2 \\\\ 0 & -2 & 1 \\\\ 2 & 3 & 5 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 5 & 0 & 2 \\\\ 1 & -2 & 3 \\\\ 2 & 1 & 5 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 2 & 0 & 5 \\\\ 3 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3 & 5 \\\\ 0 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 5 & 1 & 2 \\\\ 0 & -2 & 1 \\\\ 2 & 3 & 5 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 5 & 0 & 2 \\\\ 1 & -2 & 3 \\\\ 2 & 1 & 5 \\end{bmatrix} \\)"
        ],
        "ans": 0,
        "exp": "ট্রান্সপোজ ম্যাট্রিক্স (Transpose Matrix): কোনো ম্যাট্রিক্সের সারিগুলোকে কলামে বা কলামগুলোকে সারিতে পরিণত করলে যে নতুন ম্যাট্রিক্স পাওয়া যায়। \\( A^T = \\begin{bmatrix} 2 & 0 & 5 \\\\ 3 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\)।",
        "exp_en": "Transpose Matrix: The new matrix obtained by interchanging the rows into columns or columns into rows of a matrix. \\( A^T = \\begin{bmatrix} 2 & 0 & 5 \\\\ 3 & -2 & 1 \\\\ 5 & 1 & 2 \\end{bmatrix} \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "\\( \\begin{bmatrix} 2 & 3 \\\\ 3 & -4 \\end{bmatrix} \\) ম্যাট্রিক্সটি-",
        "q_en": "The matrix \\( \\begin{bmatrix} 2 & 3 \\\\ 3 & -4 \\end{bmatrix} \\) is-",
        "opts": [
            "প্রতিসম",
            "বক্র প্রতিসম",
            "স্কেলার",
            "অভেদক"
        ],
        "opts_en": [
            "Symmetric",
            "Skew-symmetric",
            "Scalar",
            "Identity"
        ],
        "ans": 0,
        "exp": "যে ম্যাট্রিক্সের সারিকে কলামে এবং কলামকে সারিতে রূপান্তর করলে ম্যাট্রিক্সের কোনো পরিবর্তন হয় না তাকে প্রতিসম ম্যাট্রিক্স বলে। এখানে \\( A = A^T \\), তাই এটি প্রতিসম ম্যাট্রিক্স।",
        "exp_en": "A matrix that remains unchanged when its rows are converted to columns and columns to rows is called a symmetric matrix. Here \\( A = A^T \\), so it is a symmetric matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি সমঘাতী ম্যাট্রিক্স?",
        "q_en": "Which of the following is an idempotent matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 2 & -1 \\\\ -2 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -1 \\\\ 2 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -1 \\\\ -2 & -1 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 2 & -1 \\\\ -2 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -1 \\\\ 2 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -1 \\\\ -2 & -1 \\end{bmatrix} \\)"
        ],
        "ans": 2,
        "exp": "সমঘাতী ম্যাট্রিক্স A এর ক্ষেত্রে, \\( A^2 = A \\) হয়। গ নং অপশনের ক্ষেত্রে, \\( A^2 = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = A \\)।",
        "exp_en": "For an idempotent matrix A, \\( A^2 = A \\). For option (c), \\( A^2 = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = A \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "শূন্যঘাতী ম্যাট্রিক্স কোনটি?",
        "q_en": "Which of the following is a nilpotent matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & 2 \\\\ -2 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -2 \\\\ -2 & 2 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 2 & 2 \\\\ 2 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & 2 \\\\ -2 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -2 \\\\ -2 & 2 \\end{bmatrix} \\)"
        ],
        "ans": 1,
        "exp": "শূন্যঘাতী ম্যাট্রিক্স (Nilpotent Matrix): একটি বর্গ ম্যাট্রিক্স A এর জন্য \\( A^n = 0 \\) হলে ম্যাট্রিক্সটিকে শূন্যঘাতী ম্যাট্রিক্স বলে। খ নং অপশনের ক্ষেত্রে, \\( A^2 = \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = 0 \\)।",
        "exp_en": "Nilpotent Matrix: For a square matrix A, if \\( A^n = 0 \\), the matrix is called a nilpotent matrix. For option (b), \\( A^2 = \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = 0 \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি অভেদঘাতী ম্যাট্রিক্স?",
        "q_en": "Which of the following is an involutory matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -3 \\\\ -1 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & -2 \\\\ 2 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -2 & -3 \\\\ -1 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & -2 \\\\ 2 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & -3 \\\\ -1 & 2 \\end{bmatrix} \\)"
        ],
        "ans": 0,
        "exp": "অভেদঘাতী ম্যাট্রিক্স (Involutory Matrix): একটি বর্গ ম্যাট্রিক্স A কে অভেদঘাতী ম্যাট্রিক্স বলা হবে যদি \\( A^2 = I \\) হয়। ক নং অপশনের ক্ষেত্রে, \\( A^2 = \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I \\)।",
        "exp_en": "Involutory Matrix: A square matrix A is called an involutory matrix if \\( A^2 = I \\). For option (a), \\( A^2 = \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি প্রতিসম ম্যাট্রিক্স?",
        "q_en": "Which of the following is a symmetric matrix?",
        "opts": [
            "\\( \\begin{bmatrix} -1 & 0 & 1 \\\\ 2 & 3 & 0 \\\\ 4 & 1 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 0 & -1 \\\\ 0 & 3 & 1 \\\\ -1 & 1 & 4 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & 2 & 4 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 0 & -1 \\\\ 0 & 3 & 1 \\\\ 1 & -1 & 4 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} -1 & 0 & 1 \\\\ 2 & 3 & 0 \\\\ 4 & 1 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 0 & -1 \\\\ 0 & 3 & 1 \\\\ -1 & 1 & 4 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & 2 & 4 \\\\ 0 & 3 & 1 \\\\ 1 & 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 0 & -1 \\\\ 0 & 3 & 1 \\\\ 1 & -1 & 4 \\end{bmatrix} \\)"
        ],
        "ans": 1,
        "exp": "প্রতিসম ম্যাট্রিক্সের ক্ষেত্রে \\( A = A^T \\) হয়। খ নং অপশনের ক্ষেত্রে, \\( A = A^T = \\begin{bmatrix} 2 & 0 & -1 \\\\ 0 & 3 & 1 \\\\ -1 & 1 & 4 \\end{bmatrix} \\)। তাই এটি প্রতিসম ম্যাট্রিক্স।",
        "exp_en": "For a symmetric matrix, \\( A = A^T \\). For option (b), \\( A = A^T = \\begin{bmatrix} 2 & 0 & -1 \\\\ 0 & 3 & 1 \\\\ -1 & 1 & 4 \\end{bmatrix} \\). So, it is a symmetric matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "\\( A = \\begin{bmatrix} -1 & -2 & 4 \\\\ 2 & 3 & 0 \\\\ -4 & 1 & 3 \\end{bmatrix} \\) হলে, A ম্যাট্রিক্সের ট্রান্সপোজ ম্যাট্রিক্স কোনটি?",
        "q_en": "If \\( A = \\begin{bmatrix} -1 & -2 & 4 \\\\ 2 & 3 & 0 \\\\ -4 & 1 & 3 \\end{bmatrix} \\), which of the following is the transpose matrix of A?",
        "opts": [
            "\\( \\begin{bmatrix} -1 & 2 & -4 \\\\ -2 & 3 & 1 \\\\ 4 & 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & -2 & 4 \\\\ 2 & 3 & 0 \\\\ -4 & 1 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & 2 & 4 \\\\ -2 & 3 & 1 \\\\ 4 & 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 2 & -4 \\\\ -2 & -3 & 0 \\\\ 4 & -1 & -3 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} -1 & 2 & -4 \\\\ -2 & 3 & 1 \\\\ 4 & 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & -2 & 4 \\\\ 2 & 3 & 0 \\\\ -4 & 1 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & 2 & 4 \\\\ -2 & 3 & 1 \\\\ 4 & 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 2 & -4 \\\\ -2 & -3 & 0 \\\\ 4 & -1 & -3 \\end{bmatrix} \\)"
        ],
        "ans": 0,
        "exp": "ট্রান্সপোজ ম্যাট্রিক্স নির্ণয়ের জন্য সারিগুলোকে কলামে রূপান্তর করতে হয়। \\( A^T = \\begin{bmatrix} -1 & 2 & -4 \\\\ -2 & 3 & 1 \\\\ 4 & 0 & 3 \\end{bmatrix} \\)।",
        "exp_en": "To find the transpose matrix, rows must be converted into columns. \\( A^T = \\begin{bmatrix} -1 & 2 & -4 \\\\ -2 & 3 & 1 \\\\ 4 & 0 & 3 \\end{bmatrix} \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি স্কেলার ম্যাট্রিক্স?",
        "q_en": "Which of the following is a scalar matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 0 \\\\ 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & 2 \\\\ 3 & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 0 \\\\ 0 & 3 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & 2 \\\\ 3 & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 0 \\\\ 0 & 2 \\end{bmatrix} \\)"
        ],
        "ans": 3,
        "exp": "স্কেলার ম্যাট্রিক্স (Scalar Matrix): যে কর্ণ ম্যাট্রিক্সের অশূন্য ভুক্তিগুলো সমান তাকে স্কেলার ম্যাট্রিক্স বলে।",
        "exp_en": "Scalar Matrix: A diagonal matrix whose non-zero entries are equal is called a scalar matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোন ম্যাট্রিক্সটি প্রতিসম ম্যাট্রিক্স?",
        "q_en": "Which of the following matrices is a symmetric matrix?",
        "opts": [
            "\\( \\begin{bmatrix} a & h & g \\\\ h & b & f \\\\ g & f & c \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & h & g \\\\ -h & 0 & f \\\\ -g & -f & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & b & c \\\\ b & d & e \\\\ f & e & f \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & b & c \\\\ b & c & a \\\\ c & a & d \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} a & h & g \\\\ h & b & f \\\\ g & f & c \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & h & g \\\\ -h & 0 & f \\\\ -g & -f & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & b & c \\\\ b & d & e \\\\ f & e & f \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} a & b & c \\\\ b & c & a \\\\ c & a & d \\end{bmatrix} \\)"
        ],
        "ans": 0,
        "exp": "প্রতিসম ম্যাট্রিক্স (Symmetric Matrix): কোনো বর্গ ম্যাট্রিক্স A এর জন্য যদি \\( A = A^T \\) হয়, তবে তাকে প্রতিসম ম্যাট্রিক্স বলে। ক নং অপশনের ক্ষেত্রে \\( A^T = A \\)।",
        "exp_en": "Symmetric Matrix: For any square matrix A, if \\( A = A^T \\), then it is called a symmetric matrix. For option (a), \\( A^T = A \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "a এর মান কত হলে \\( \\begin{bmatrix} p & 0 & t \\\\ a & b & v \\\\ 0 & w & c \\end{bmatrix} \\) ম্যাট্রিক্সটি একটি ঊর্ধ্ব-ত্রিভুজাকার (Upper Triangular) ম্যাট্রিক্স হবে?",
        "q_en": "For what value of a will the matrix \\( \\begin{bmatrix} p & 0 & t \\\\ a & b & v \\\\ 0 & w & c \\end{bmatrix} \\) be an upper triangular matrix?",
        "opts": [
            "\\( 0 \\)",
            "\\( p \\)",
            "\\( w \\)",
            "\\( v \\)"
        ],
        "opts_en": [
            "\\( 0 \\)",
            "\\( p \\)",
            "\\( w \\)",
            "\\( v \\)"
        ],
        "ans": 0,
        "exp": "ঊর্ধ্ব ত্রিভুজাকার ম্যাট্রিক্স: কোনো বর্গ ম্যাট্রিক্সের প্রধান কর্ণের নিচের ভুক্তিগুলো শূন্য হলে তাকে ঊর্ধ্ব ত্রিভুজাকার ম্যাট্রিক্স বলে। সুতরাং, ম্যাট্রিক্সটি ঊর্ধ্ব ত্রিভুজাকার হতে হলে a = 0 হতে হবে।",
        "exp_en": "Upper Triangular Matrix: If the entries below the principal diagonal of a square matrix are zero, it is called an upper triangular matrix. Therefore, for the matrix to be upper triangular, 'a' must be 0."
    },
    {
        "type": "mcq",
        "source": "ব. বো. '২৩",
        "board": "Barishal Board 2023",
        "q": "\\( \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{bmatrix} \\) এটি কোন ধরনের ম্যাট্রিক্স?",
        "q_en": "What kind of matrix is \\( \\begin{bmatrix} 1 & 2 & 3 \\\\ 0 & 4 & 5 \\\\ 0 & 0 & 6 \\end{bmatrix} \\)?",
        "opts": [
            "স্কেলার",
            "ঊর্ধ্ব ত্রিভুজাকার",
            "নিম্ন ত্রিভুজাকার",
            "কর্ণ"
        ],
        "opts_en": [
            "Scalar",
            "Upper triangular",
            "Lower triangular",
            "Diagonal"
        ],
        "ans": 1,
        "exp": "ঊর্ধ্ব ত্রিভুজাকার ম্যাট্রিক্স (Upper Triangular Matrix): কোনো বর্গ ম্যাট্রিক্সের প্রধান বা মুখ্য কর্ণের নিম্নস্থ সবগুলি ভুক্তি শূন্য (0) হলে, তাকে ঊর্ধ্ব ত্রিভুজাকার ম্যাট্রিক্স বলা হয়।",
        "exp_en": "Upper Triangular Matrix: If all the entries below the principal or main diagonal of a square matrix are zero (0), it is called an upper triangular matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "বক্র প্রতিসম ম্যাট্রিক্সের ক্ষেত্রে কোনটি সত্য?",
        "q_en": "Which of the following is true for a skew-symmetric matrix?",
        "opts": [
            "\\( a_{ij} = a_{ji} \\)",
            "\\( a_{ij} = 0 \\)",
            "\\( a_{ij} = -a_{ji} \\)",
            "\\( a_{ii} = a_{jj} \\)"
        ],
        "opts_en": [
            "\\( a_{ij} = a_{ji} \\)",
            "\\( a_{ij} = 0 \\)",
            "\\( a_{ij} = -a_{ji} \\)",
            "\\( a_{ii} = a_{jj} \\)"
        ],
        "ans": 2,
        "exp": "বক্র প্রতিসম ম্যাট্রিক্স (Skew Symmetric Matrix): একটি বর্গ ম্যাট্রিক্স \\( A = [a_{ij}] \\) কে বক্র প্রতিসম ম্যাট্রিক্স বলা হবে যদি \\( A^T = -A \\) অর্থাৎ \\( a_{ij} = -a_{ji} \\) হয়।",
        "exp_en": "Skew Symmetric Matrix: A square matrix \\( A = [a_{ij}] \\) is called a skew-symmetric matrix if \\( A^T = -A \\), i.e., \\( a_{ij} = -a_{ji} \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "\\( A = \\begin{bmatrix} 0 & 1 & -4 \\\\ -1 & 0 & 3 \\\\ a & -3 & 0 \\end{bmatrix} \\) হলে a এর কোন মানের জন্য A একটি বক্র প্রতিসম ম্যাট্রিক্স (Skew Symmetric Matrix)?",
        "q_en": "For what value of a is the matrix \\( A = \\begin{bmatrix} 0 & 1 & -4 \\\\ -1 & 0 & 3 \\\\ a & -3 & 0 \\end{bmatrix} \\) a skew-symmetric matrix?",
        "opts": [
            "\\( a = 1 \\)",
            "\\( a = -1 \\)",
            "\\( a = 0 \\)",
            "\\( a = 4 \\)"
        ],
        "opts_en": [
            "\\( a = 1 \\)",
            "\\( a = -1 \\)",
            "\\( a = 0 \\)",
            "\\( a = 4 \\)"
        ],
        "ans": 3,
        "exp": "বক্র প্রতিসম ম্যাট্রিক্সের ক্ষেত্রে, \\( A^T = -A \\) বা \\( a_{ij} = -a_{ji} \\)। এখানে \\( a_{31} = a \\) এবং \\( a_{13} = -4 \\)। শর্তমতে, \\( a_{31} = -a_{13} \\Rightarrow a = -(-4) = 4 \\)।",
        "exp_en": "For a skew-symmetric matrix, \\( A^T = -A \\) or \\( a_{ij} = -a_{ji} \\). Here, \\( a_{31} = a \\) and \\( a_{13} = -4 \\). According to the condition, \\( a_{31} = -a_{13} \\Rightarrow a = -(-4) = 4 \\)."
    },
    {
        "type": "mcq",
        "source": "চুয়েট '২৩",
        "board": "CUET 2023",
        "q": "\\( \\begin{bmatrix} 4 & 0 & -2 \\\\ 0 & 5 & m \\\\ -2 & 4 & 5 \\end{bmatrix} \\) ম্যাট্রিক্সটি প্রতিসম হলে, m = কত?",
        "q_en": "If the matrix \\( \\begin{bmatrix} 4 & 0 & -2 \\\\ 0 & 5 & m \\\\ -2 & 4 & 5 \\end{bmatrix} \\) is symmetric, then m = ?",
        "opts": [
            "\\( -2 \\)",
            "\\( 0 \\)",
            "\\( 4 \\)",
            "\\( 5 \\)"
        ],
        "opts_en": [
            "\\( -2 \\)",
            "\\( 0 \\)",
            "\\( 4 \\)",
            "\\( 5 \\)"
        ],
        "ans": 2,
        "exp": "প্রতিসম ম্যাট্রিক্সের ক্ষেত্রে \\( A = A^T \\) বা \\( a_{ij} = a_{ji} \\)। এখানে \\( a_{23} = m \\) এবং \\( a_{32} = 4 \\)। শর্তমতে, \\( a_{23} = a_{32} \\Rightarrow m = 4 \\)।",
        "exp_en": "For a symmetric matrix, \\( A = A^T \\) or \\( a_{ij} = a_{ji} \\). Here, \\( a_{23} = m \\) and \\( a_{32} = 4 \\). According to the condition, \\( a_{23} = a_{32} \\Rightarrow m = 4 \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি শূন্যঘাতী ম্যাট্রিক্স (Nilpotent Matrix)?",
        "q_en": "Which of the following is a nilpotent matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 1 & -1 \\\\ 1 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & 1 \\\\ 1 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 1 & -1 \\\\ 1 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -1 & 1 \\\\ 1 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 3 & 4 \\\\ 1 & 2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 0 \\\\ 0 & 2 \\end{bmatrix} \\)"
        ],
        "ans": 0,
        "exp": "শূন্যঘাতী ম্যাট্রিক্স: একটি বর্গ ম্যাট্রিক্স A এর জন্য \\( A^n = 0 \\) হলে তাকে শূন্যঘাতী ম্যাট্রিক্স বলে। ক নং অপশনের ক্ষেত্রে, \\( A^2 = \\begin{bmatrix} 1 & -1 \\\\ 1 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & -1 \\\\ 1 & -1 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = 0 \\)।",
        "exp_en": "Nilpotent Matrix: For a square matrix A, if \\( A^n = 0 \\), it is called a nilpotent matrix. For option (a), \\( A^2 = \\begin{bmatrix} 1 & -1 \\\\ 1 & -1 \\end{bmatrix} \\begin{bmatrix} 1 & -1 \\\\ 1 & -1 \\end{bmatrix} = \\begin{bmatrix} 0 & 0 \\\\ 0 & 0 \\end{bmatrix} = 0 \\)."
    },
    {
        "type": "mcq",
        "source": "চ. বো. '২৩",
        "board": "Chattogram Board 2023",
        "q": "\\( A = \\begin{bmatrix} 2 & 3+2i \\\\ 1+2i & i-2 \\end{bmatrix} \\) ম্যাট্রিক্সের অনুবন্ধী (Conjugate) ম্যাট্রিক্স কোনটি?",
        "q_en": "Which of the following is the conjugate matrix of \\( A = \\begin{bmatrix} 2 & 3+2i \\\\ 1+2i & i-2 \\end{bmatrix} \\)?",
        "opts": [
            "\\( \\begin{bmatrix} 2 & 3+2i \\\\ 1-2i & i+2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3-2i \\\\ 1-2i & -i-2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3-2i \\\\ 1+2i & i-2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 3-2i & 2 \\\\ 1-2i & -i-2 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 2 & 3+2i \\\\ 1-2i & i+2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3-2i \\\\ 1-2i & -i-2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3-2i \\\\ 1+2i & i-2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 3-2i & 2 \\\\ 1-2i & -i-2 \\end{bmatrix} \\)"
        ],
        "ans": 1,
        "exp": "অনুবন্ধী ম্যাট্রিক্স: কোনো ম্যাট্রিক্সের উপাদানগুলো জটিল সংখ্যা হলে, প্রত্যেক উপাদানকে তার অনুবন্ধী জটিল সংখ্যা দ্বারা প্রতিস্থাপন করলে যে নতুন ম্যাট্রিক্স পাওয়া যায় তাকে অনুবন্ধী ম্যাট্রিক্স বলে। \\( \\bar{A} = \\begin{bmatrix} 2 & 3-2i \\\\ 1-2i & -i-2 \\end{bmatrix} \\)।",
        "exp_en": "Conjugate Matrix: If the elements of a matrix are complex numbers, the new matrix obtained by replacing each element with its complex conjugate is called a conjugate matrix. \\( \\bar{A} = \\begin{bmatrix} 2 & 3-2i \\\\ 1-2i & -i-2 \\end{bmatrix} \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "\\( A = \\begin{bmatrix} 3 & -4 & 2 \\\\ -2 & 1 & 0 \\\\ -1 & -1 & 1 \\end{bmatrix} \\) ম্যাট্রিক্স এর (1, 3) তম ভুক্তি ও (3, 3) তম ভুক্তির যোগফল x + 3 হলে, x এর মান কত?",
        "q_en": "If the sum of the (1, 3)th entry and the (3, 3)th entry of the matrix \\( A = \\begin{bmatrix} 3 & -4 & 2 \\\\ -2 & 1 & 0 \\\\ -1 & -1 & 1 \\end{bmatrix} \\) is x + 3, what is the value of x?",
        "opts": [
            "\\( 2 \\)",
            "\\( 1 \\)",
            "\\( 3 \\)",
            "\\( 0 \\)"
        ],
        "opts_en": [
            "\\( 2 \\)",
            "\\( 1 \\)",
            "\\( 3 \\)",
            "\\( 0 \\)"
        ],
        "ans": 3,
        "exp": "ম্যাট্রিক্সটির (1, 3) তম ভুক্তি হলো 2 এবং (3, 3) তম ভুক্তি হলো 1। এদের যোগফল = 2 + 1 = 3। প্রশ্নমতে, \\( x + 3 = 3 \\Rightarrow x = 0 \\)।",
        "exp_en": "The (1, 3)th entry of the matrix is 2 and the (3, 3)th entry is 1. Their sum = 2 + 1 = 3. According to the question, \\( x + 3 = 3 \\Rightarrow x = 0 \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "যদি a = b = c = 0 এবং \\( A = \\begin{bmatrix} a & h & g \\\\ -h & b & f \\\\ -g & -f & c \\end{bmatrix} \\) ম্যাট্রিক্সটি কোন ধরণের ম্যাট্রিক্স?",
        "q_en": "If a = b = c = 0, then what type of matrix is \\( A = \\begin{bmatrix} a & h & g \\\\ -h & b & f \\\\ -g & -f & c \\end{bmatrix} \\)?",
        "opts": [
            "কর্ণ ম্যাট্রিক্স",
            "বক্র প্রতিসম ম্যাট্রিক্স",
            "প্রতিসম ম্যাট্রিক্স",
            "শূন্য ম্যাট্রিক্স"
        ],
        "opts_en": [
            "Diagonal matrix",
            "Skew-symmetric matrix",
            "Symmetric matrix",
            "Zero matrix"
        ],
        "ans": 1,
        "exp": "দেওয়া আছে, a = b = c = 0। \\( \\therefore A = \\begin{bmatrix} 0 & h & g \\\\ -h & 0 & f \\\\ -g & -f & 0 \\end{bmatrix} \\)। এখানে \\( A^T = -A \\)। সুতরাং, A ম্যাট্রিক্সটি বক্র প্রতিসম।",
        "exp_en": "Given, a = b = c = 0. \\( \\therefore A = \\begin{bmatrix} 0 & h & g \\\\ -h & 0 & f \\\\ -g & -f & 0 \\end{bmatrix} \\). Here, \\( A^T = -A \\). Therefore, matrix A is skew-symmetric."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি সঠিক?",
        "q_en": "Which of the following is correct?",
        "opts": [
            "ম্যাট্রিক্স ও নির্ণায়ক একি",
            "ম্যাট্রিক্সের মান আছে, নির্ণায়কের মান নেই",
            "ম্যাট্রিক্সের মান নেই, নির্ণায়কের মান আছে",
            "ম্যাট্রিক্স ও নির্ণায়ক উভয়েরই মান আছে"
        ],
        "opts_en": [
            "Matrix and determinant are the same",
            "Matrix has a value, determinant does not",
            "Matrix has no value, determinant has a value",
            "Both matrix and determinant have values"
        ],
        "ans": 2,
        "exp": "ম্যাট্রিক্স হলো কেবল তথ্য বা উপাত্তের আয়তাকার সাজানো রূপ যার কোনো নির্দিষ্ট মান নেই। অন্যদিকে, নির্ণায়কের নির্দিষ্ট মান আছে।",
        "exp_en": "A matrix is simply a rectangular arrangement of information or data which has no specific value. On the other hand, a determinant has a specific value."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোনটি প্রতিসম ম্যাট্রিক্স?",
        "q_en": "Which of the following is a symmetric matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 0 & b \\\\ -b & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & -b \\\\ b & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} b & 0 \\\\ 0 & -b \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & b \\\\ b & 0 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 0 & b \\\\ -b & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & -b \\\\ b & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} b & 0 \\\\ 0 & -b \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & b \\\\ b & 0 \\end{bmatrix} \\)"
        ],
        "ans": 3,
        "exp": "প্রতিসম ম্যাট্রিক্সের ক্ষেত্রে \\( A = A^T \\) হয়। ঘ নং অপশনের ক্ষেত্রে, \\( A = \\begin{bmatrix} 0 & b \\\\ b & 0 \\end{bmatrix} \\) এবং \\( A^T = \\begin{bmatrix} 0 & b \\\\ b & 0 \\end{bmatrix} \\)। যেহেতু \\( A = A^T \\), তাই এটি প্রতিসম ম্যাট্রিক্স।",
        "exp_en": "For a symmetric matrix, \\( A = A^T \\). For option (d), \\( A = \\begin{bmatrix} 0 & b \\\\ b & 0 \\end{bmatrix} \\) and \\( A^T = \\begin{bmatrix} 0 & b \\\\ b & 0 \\end{bmatrix} \\). Since \\( A = A^T \\), it is a symmetric matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "কোনটি বিপরীত ম্যাট্রিক্সের বৈশিষ্ট্য নয়?",
        "q_en": "Which one is not a property of an inverse matrix?",
        "opts": [
            "\\( (A^{-1})^{-1} = A \\)",
            "\\( (A^T)^{-1} = (A^{-1})^T \\)",
            "\\( (AB)^{-1} = A^{-1}B^{-1} \\)",
            "\\( (BA)A^{-1} = B \\)"
        ],
        "opts_en": [
            "\\( (A^{-1})^{-1} = A \\)",
            "\\( (A^T)^{-1} = (A^{-1})^T \\)",
            "\\( (AB)^{-1} = A^{-1}B^{-1} \\)",
            "\\( (BA)A^{-1} = B \\)"
        ],
        "ans": 2,
        "exp": "বিপরীত ম্যাট্রিক্সের প্রপার্টি অনুসারে, \\( (AB)^{-1} = B^{-1}A^{-1} \\)। তাই \\( (AB)^{-1} = A^{-1}B^{-1} \\) বৈশিষ্ট্যটি সঠিক নয়।",
        "exp_en": "According to the properties of inverse matrices, \\( (AB)^{-1} = B^{-1}A^{-1} \\). Therefore, the property \\( (AB)^{-1} = A^{-1}B^{-1} \\) is not correct."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "কর্ণ ম্যাট্রিক্সের অশূন্য ভুক্তিগুলো সমান হলে তাকে কী ম্যাট্রিক্স বলে?",
        "q_en": "If the non-zero entries of a diagonal matrix are equal, what is it called?",
        "opts": [
            "সারি ম্যাট্রিক্স",
            "শূন্য ম্যাট্রিক্স",
            "স্কেলার ম্যাট্রিক্স",
            "কলাম ম্যাট্রিক্স"
        ],
        "opts_en": [
            "Row matrix",
            "Zero matrix",
            "Scalar matrix",
            "Column matrix"
        ],
        "ans": 2,
        "exp": "যে কর্ণ ম্যাট্রিক্সের অশূন্য ভুক্তিগুলো অর্থাৎ প্রধান কর্ণের ভুক্তিগুলো সমান তাকে স্কেলার ম্যাট্রিক্স বলে।",
        "exp_en": "A diagonal matrix whose non-zero entries, i.e., the principal diagonal entries, are equal is called a scalar matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "শূন্যঘাতী ম্যাট্রিক্স-",
        "q_en": "Nilpotent matrix-",
        "opts": [
            "\\( \\begin{bmatrix} a & 0 \\\\ 0 & a \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & a \\\\ 0 & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & 0 \\\\ a & 0 \\end{bmatrix} \\)",
            "খ ও গ উভয়েই"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} a & 0 \\\\ 0 & a \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & a \\\\ 0 & 0 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 0 & 0 \\\\ a & 0 \\end{bmatrix} \\)",
            "Both b and c"
        ],
        "ans": 3,
        "exp": "যে বর্গ ম্যাট্রিক্সের জন্য \\( A^n = 0 \\) (যেখানে n স্বাভাবিক সংখ্যা) তাকে শূন্যঘাতী ম্যাট্রিক্স বলে। খ ও গ উভয় ম্যাট্রিক্সের বর্গ করলে শূন্য ম্যাট্রিক্স পাওয়া যায়। তাই সঠিক উত্তর (ঘ)।",
        "exp_en": "A square matrix for which \\( A^n = 0 \\) (where n is a natural number) is called a nilpotent matrix. Squaring both matrices (b) and (c) yields a zero matrix. Therefore, the correct answer is (d)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "কোন কর্ণ ম্যাট্রিক্সের কর্ণের উপাদানসমূহ 1 হলে তাকে কী ম্যাট্রিক্স বলে?",
        "q_en": "If the diagonal elements of a diagonal matrix are 1, what is it called?",
        "opts": [
            "স্কেলার ম্যাট্রিক্স",
            "প্রতিসম ম্যাট্রিক্স",
            "অভেদক ম্যাট্রিক্স",
            "শূন্য ম্যাট্রিক্স"
        ],
        "opts_en": [
            "Scalar matrix",
            "Symmetric matrix",
            "Identity matrix",
            "Zero matrix"
        ],
        "ans": 2,
        "exp": "অভেদক বা একক ম্যাট্রিক্স (Identity Matrix): যে কর্ণ ম্যাট্রিক্সের প্রধান কর্ণের উপাদানসমূহ 1 এবং বাকি সকল উপাদান 0 তাকে অভেদক ম্যাট্রিক্স বলে।",
        "exp_en": "Identity Matrix: A diagonal matrix whose principal diagonal elements are 1 and all other elements are 0 is called an identity matrix."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "কোনটি অভেদঘাতী ম্যাট্রিক্স?",
        "q_en": "Which of the following is an involutory matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 3 & 4 \\\\ 1 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -7 & 16 \\\\ -3 & 7 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -7 & 16 \\\\ 3 & 7 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 5 & 7 \\\\ 10 & 0 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 3 & 4 \\\\ 1 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -7 & 16 \\\\ -3 & 7 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} -7 & 16 \\\\ 3 & 7 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 5 & 7 \\\\ 10 & 0 \\end{bmatrix} \\)"
        ],
        "ans": 1,
        "exp": "অভেদঘাতী ম্যাট্রিক্স (Involutory Matrix): একটি বর্গ ম্যাট্রিক্স A কে অভেদঘাতী ম্যাট্রিক্স বলা হয় যদি \\( A^2 = I \\) হয়। খ নং অপশনের ক্ষেত্রে, \\( A^2 = \\begin{bmatrix} -7 & 16 \\\\ -3 & 7 \\end{bmatrix} \\begin{bmatrix} -7 & 16 \\\\ -3 & 7 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I \\)।",
        "exp_en": "Involutory Matrix: A square matrix A is called an involutory matrix if \\( A^2 = I \\). For option (b), \\( A^2 = \\begin{bmatrix} -7 & 16 \\\\ -3 & 7 \\end{bmatrix} \\begin{bmatrix} -7 & 16 \\\\ -3 & 7 \\end{bmatrix} = \\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix} = I \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "কোনটি স্কেলার ম্যাট্রিক্সের বৈশিষ্ট্য?",
        "q_en": "Which of the following is a characteristic of a scalar matrix?",
        "opts": [
            "সারি ও কলামের সংখ্যা সমান",
            "সারি ও কলামের সংখ্যা অসমান",
            "একটি মাত্র সারি থাকে",
            "কর্ণ ম্যাট্রিক্সের অশূন্য ভুক্তিগুলো সমান"
        ],
        "opts_en": [
            "Number of rows and columns are equal",
            "Number of rows and columns are unequal",
            "Has only one row",
            "The non-zero entries of the diagonal matrix are equal"
        ],
        "ans": 3,
        "exp": "স্কেলার ম্যাট্রিক্সের প্রধান কর্ণ বরাবর ভুক্তিগুলো সমান ও বাকী ভুক্তিগুলো শূন্য। অর্থাৎ এটি একটি বিশেষ ধরনের কর্ণ ম্যাট্রিক্স যার অশূন্য ভুক্তিগুলো সমান।",
        "exp_en": "The entries along the principal diagonal of a scalar matrix are equal and the rest are zero. That is, it is a special type of diagonal matrix whose non-zero entries are equal."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "নিচের কোন ম্যাট্রিক্সটি সমঘাতী ম্যাট্রিক্স?",
        "q_en": "Which of the following matrices is an idempotent matrix?",
        "opts": [
            "\\( \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} \\)",
            "কোনোটিই নয়"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 2 & -2 \\\\ 2 & -2 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 2 & 3 \\\\ -1 & -2 \\end{bmatrix} \\)",
            "None of these"
        ],
        "ans": 1,
        "exp": "সমঘাতী বা একক্ষম ম্যাট্রিক্স (Idempotent Matrix): কোনো ম্যাট্রিক্সের বর্গ ঐ ম্যাট্রিক্সের সমান হলে তাকে সমঘাতী ম্যাট্রিক্স বলে। অর্থাৎ \\( A^2 = A \\) হলে। খ নং অপশনের ক্ষেত্রে, \\( A^2 = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = A \\)।",
        "exp_en": "Idempotent Matrix: If the square of a matrix is equal to the matrix itself, it is called an idempotent matrix. That is, if \\( A^2 = A \\). For option (b), \\( A^2 = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = \\begin{bmatrix} 2 & 1 \\\\ -2 & -1 \\end{bmatrix} = A \\)."
    },
    {
        "type": "mcq",
        "source": "",
        "board": "",
        "q": "\\( A = \\begin{bmatrix} 3 & 5 & 1 \\\\ 4 & 0 & 2 \\\\ 1 & 6 & 4 \\end{bmatrix} \\) হলে, \\( A + 2I = ? \\)",
        "q_en": "If \\( A = \\begin{bmatrix} 3 & 5 & 1 \\\\ 4 & 0 & 2 \\\\ 1 & 6 & 4 \\end{bmatrix} \\), then \\( A + 2I = ? \\)",
        "opts": [
            "\\( \\begin{bmatrix} 5 & 5 & 1 \\\\ 4 & 2 & 2 \\\\ 1 & 6 & 6 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 3 & -1 & 1 \\\\ 4 & 0 & 2 \\\\ 1 & 6 & 4 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 4 & 0 & 2 \\\\ 1 & 6 & 4 \\\\ 3 & 5 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 5 & 1 \\\\ 4 & -2 & 2 \\\\ 1 & 6 & 2 \\end{bmatrix} \\)"
        ],
        "opts_en": [
            "\\( \\begin{bmatrix} 5 & 5 & 1 \\\\ 4 & 2 & 2 \\\\ 1 & 6 & 6 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 3 & -1 & 1 \\\\ 4 & 0 & 2 \\\\ 1 & 6 & 4 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 4 & 0 & 2 \\\\ 1 & 6 & 4 \\\\ 3 & 5 & 1 \\end{bmatrix} \\)",
            "\\( \\begin{bmatrix} 1 & 5 & 1 \\\\ 4 & -2 & 2 \\\\ 1 & 6 & 2 \\end{bmatrix} \\)"
        ],
        "ans": 0,
        "exp": "\\( 2I = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\)। সুতরাং \\( A + 2I = \\begin{bmatrix} 3+2 & 5 & 1 \\\\ 4 & 0+2 & 2 \\\\ 1 & 6 & 4+2 \\end{bmatrix} = \\begin{bmatrix} 5 & 5 & 1 \\\\ 4 & 2 & 2 \\\\ 1 & 6 & 6 \\end{bmatrix} \\)।",
        "exp_en": "\\( 2I = \\begin{bmatrix} 2 & 0 & 0 \\\\ 0 & 2 & 0 \\\\ 0 & 0 & 2 \\end{bmatrix} \\). Therefore, \\( A + 2I = \\begin{bmatrix} 3+2 & 5 & 1 \\\\ 4 & 0+2 & 2 \\\\ 1 & 6 & 4+2 \\end{bmatrix} = \\begin{bmatrix} 5 & 5 & 1 \\\\ 4 & 2 & 2 \\\\ 1 & 6 & 6 \\end{bmatrix} \\)."
    }
]
}
;