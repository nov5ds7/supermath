window.testBank = window.testBank || {};
window.testBank['test_811'] = {
    title: "ACT-I (31-08-2026) Pre-Test",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-08-30T12:40:00Z",
    timeLimitMins: 80,
    examPattern: "advance",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // 1
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "<div class='section-instruction'><h3>PART-I: MATHEMATICS</h3><br><b>SECTION - 1 : (Maximum Marks : 12)</b><br><br>This section contains <b>FOUR (04)</b> questions.<br>Each question has <b>FOUR</b> options <b>ONLY ONE</b> of these four options is the correct answer.<br>For each question, choose the correct option corresponding to the correct answer.<br>Answer to each question will be evaluated according to the following marking scheme:<ul><li><b>Full Marks</b> : <b>+3</b> If ONLY the correct option is chosen.</li><li><b>Zero Marks</b> : <b>0</b> If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks</b> : <b>-1</b> In all other cases.</li></ul></div><br>If $\\alpha, \\beta$ are the roots of the equation $x^{2} - 7x + 1 = 0$ then value of $\\left\\{\\frac{1}{(\\alpha - 7)^{2}} + \\frac{1}{(\\beta - 7)^{2}}\\right\\} - \\left\\{\\frac{\\alpha^{2} + 1}{\\beta^{2} + 1} + \\frac{\\beta^{2} + 1}{\\alpha^{2} + 1}\\right\\}$ is",
            "options": [
                "4",
                "3",
                "2",
                "0"
            ],
            "solution": "Given $\\alpha + \\beta = 7$ and $\\alpha \\beta = 1$.<br>First part: $\\alpha - 7 = -\\beta$ and $\\beta - 7 = -\\alpha$, so $\\frac{1}{(\\alpha - 7)^2} + \\frac{1}{(\\beta - 7)^2} = \\frac{1}{\\beta^2} + \\frac{1}{\\alpha^2} = \\frac{\\alpha^2 + \\beta^2}{\\alpha^2 \\beta^2} = \\alpha^2 + \\beta^2$.<br>Second part: $\\alpha^2 + 1 = \\alpha^2 + \\alpha\\beta = \\alpha(\\alpha + \\beta) = 7\\alpha$; similarly $\\beta^2 + 1 = 7\\beta$. Thus $\\frac{\\alpha^2 + 1}{\\beta^2 + 1} + \\frac{\\beta^2 + 1}{\\alpha^2 + 1} = \\frac{7\\alpha}{7\\beta} + \\frac{7\\beta}{7\\alpha} = \\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = \\frac{\\alpha^2 + \\beta^2}{\\alpha\\beta} = \\alpha^2 + \\beta^2$.<br>The expression becomes $(\\alpha^2 + \\beta^2) - (\\alpha^2 + \\beta^2) = 0$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If $\\alpha$ and $\\beta$ are the roots of equation $x^{2} - 3x + 1 = 0$ and $a_{n} = \\alpha^{n} + \\beta^{n}$ then value of $\\frac{a_{7} + a_{5}}{a_{6}} =$",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "solution": "Since $\\alpha + \\beta = 3$ and $\\alpha\\beta = 1$, the recurrence relation is $a_n = 3a_{n-1} - a_{n-2}$. Then $a_7 = 3a_6 - a_5$, so $a_7 + a_5 = 3a_6$. Thus $\\frac{a_7 + a_5}{a_6} = \\frac{3a_6}{a_6} = 3$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If $\\cos(\\alpha - \\beta) + \\cos(\\beta - \\gamma) + \\cos(\\gamma - \\alpha) = -\\frac{3}{2}$ then value of $\\left|\\cos\\frac{\\alpha - \\beta}{2}\\right|$ is",
            "options": [
                "1",
                "2",
                "$\\frac{1}{2}$",
                "$\\frac{1}{4}$"
            ],
            "solution": "Let $x = \\alpha - \\beta, y = \\beta - \\gamma, z = \\gamma - \\alpha$. Then $x + y + z = 0$. We are given $\\cos x + \\cos y + \\cos z = -\\frac{3}{2}$. The minimum value of this sum for $x+y+z=0$ is $-\\frac{3}{2}$, achieved when $\\cos x = \\cos y = \\cos z = -\\frac{1}{2}$. Thus $x = \\pm \\frac{2\\pi}{3}$. Then $\\left|\\cos\\frac{x}{2}\\right| = \\left|\\cos\\frac{\\pi}{3}\\right| = \\frac{1}{2}$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If $\\sin^{2}A = x$ and $\\prod_{r = 1}^{4}\\sin(rA) = ax^{2} + bx^{3} + cx^{4} + dx^{5}$ then value of $a + b + c + d$ is",
            "options": [
                "1",
                "-1",
                "0",
                "2"
            ],
            "solution": "Let $s = \\sin A$ and $x = s^2$. The product $\\sin A \\sin 2A \\sin 3A \\sin 4A = s \\cdot (2sc) \\cdot s(3-4s^2) \\cdot 4sc(1-2s^2) = 8s^4 c^2 (3-4s^2)(1-2s^2)$. Since $c^2 = 1-s^2$, this becomes $8x^2(1-x)(3-4x)(1-2x) = 24x^2 -104x^3 +144x^4 -64x^5$. Therefore $a=24, b=-104, c=144, d=-64$, and their sum is $24-104+144-64 = 0$."
        },
        // 5
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswers": [0, 1, 3],
            "text": "<div class='section-instruction'><h3>PART-I: MATHEMATICS</h3><br><b>SECTION - 2 : (Maximum Marks : 24)</b><br><br>This section contains <b>SIX (06)</b> questions.<br>Each question has <b>FOUR</b> options. <b>ONE OR MORE THAN ONE</b> of these four option(s) is (are) correct answer(s).<br>For each question, choose the option(s) corresponding to (all) the correct answer(s).<br>Answer to each question will be evaluated according to the following marking scheme:<ul><li><b>Full Marks</b> : <b>+4</b> If only (all) the correct option(s) is (are) chosen.</li><li><b>Partial Marks</b> : <b>+1</b> for each correct option chosen when not all the correct options are chosen and no incorrect option is chosen.</li><li><b>Zero Marks</b> : <b>0</b> If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks</b> : <b>-1</b> In all other cases.</li></ul></div><br>Which of the following is/are False.",
            "options": [
                "$\\log_{2} (6) < \\log_{1/2} (0.2)$",
                "$\\log_{2} 3 < \\log_{1/2} 5$",
                "$\\log_{7} 11 > \\log_{8} 5$",
                "$\\log_{3} (\\sqrt{2} + 1) > \\log_{3} \\frac{1}{\\sqrt{2} - 1}$"
            ],
            "solution": "C is true because $\\log_{7} 11 > \\log_{8} 5$. A is false because $\\log_{2} 6 > 0$ while $\\log_{1/2} 0.2 < 0$. B is false because $\\log_{2} 3 > 0$ while $\\log_{1/2} 5 < 0$. D is false because $\\sqrt{2} + 1 = \\frac{1}{\\sqrt{2} - 1}$, so LHS = RHS."
        },
        // 6
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswers": [0, 1, 2, 3],
            "text": "Which of the following is correct for the quadratic equation $x^{2} + 2(a - 1)x + a + 5 = 0$",
            "options": [
                "The equation has positive roots, if $a \\in (-5, -1)$",
                "The equation has roots of opposite sign, if $a \\in (-\\infty, -5)$",
                "The equation has negative roots, if $a \\in [4, \\infty)$",
                "The equation has non-real roots if $a \\in (-1, 4)$"
            ],
            "solution": "The discriminant $D = 4(a - 1)^2 - 4(a + 5) = 4(a + 1)(a - 4)$. $D \\ge 0$ for $a \\in (-\\infty, -1] \\cup [4, \\infty)$. For positive roots, $D \\ge 0, a+5 > 0, a-1 < 0 \\implies a \\in (-5, -1)$. For opposite signs, $D > 0$ and $a+5 < 0 \\implies a \\in (-\\infty, -5)$. For negative roots, $D \\ge 0$ and $a-1 > 0 \\implies a \\in [4, \\infty)$. For non-real roots, $D < 0 \\implies a \\in (-1, 4)$."
        },
        // 7
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswers": [0, 1, 3],
            "text": "If $\\alpha$ is one of the solution of inequality $(\\log_{10} 100x)^{2} + (\\log_{10} 10x)^{2} + \\log_{10} x \\le 14$ then $\\alpha$ can be",
            "options": [
                "$\\frac{7}{2}$",
                "$\\frac{19}{2}$",
                "$\\frac{21}{2}$",
                "$\\frac{23}{3}$"
            ],
            "solution": "Let $t = \\log_{10} x$. Then $(2 + t)^{2} + (1 + t)^{2} + t \\le 14 \\implies 2t^{2} + 7t - 9 \\le 0 \\implies (2t + 9)(t - 1) \\le 0 \\implies -\\frac{9}{2} \\le t \\le 1$. Thus $10^{-4.5} \\le x \\le 10$. $\\frac{7}{2}=3.5$, $\\frac{19}{2}=9.5$, and $\\frac{23}{3} \\approx 7.67$ are all in the range, while $\\frac{21}{2}=10.5$ is out of range."
        },
        // 8
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswers": [0],
            "text": "Let A be a $3 \\times 3$ diagonal matrix which commutes with every $3 \\times 3$ matrix. If $det(A) = 27$, then trace of matrix A is",
            "options": [
                "9",
                "3",
                "27",
                "81"
            ],
            "solution": "Since matrix A commutes with every $3 \\times 3$ matrix, it must be a scalar matrix $\\alpha I$. Thus $det(A) = \\alpha^{3} = 27 \\implies \\alpha = 3$. Therefore, $Tr(A) = 3 + 3 + 3 = 9$."
        },
        // 9
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswers": [1, 3],
            "text": "Let A, B, C, D be real matrices such that $A^{T} = BCD$ ; $B^{T} = CDA$ ; $C^{T} = DAB$ and $D^{T} = ABC$ for the matrix $M = ABCD$, then find $M^{2016}$ ?",
            "options": [
                "M",
                "$M^{2}$",
                "$M^{3}$",
                "$M^{4}$"
            ],
            "solution": "Since $M = A(BCD) = AA^{T}$, $M$ is symmetric. Also $M^{3} = (ABCD)(ABCD)(ABCD) = (ABC)(DAB)(CDA)(BCD) = D^{T}C^{T}B^{T}A^{T} = (BCD)^{T}A^{T} = AA^{T} = M$. Thus $M^{3} = M$, which implies $M^{2} = I$. Therefore $M^{2016} = (M^{2})^{1008} = I = M^{2} = M^{4}$."
        },
        // 10
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswers": [2, 3],
            "text": "For $3 \\times 3$ matrices M and N, which of the following statements is/are NOT correct?",
            "options": [
                "$N^{T}MN$ is symmetric or skew symmetric, according as M is symmetric or skew symmetric",
                "$MN - NM$ is skew symmetric for all symmetric matrices M and N",
                "MN is symmetric for all symmetric matrices M and N",
                "$(adj M) (adj N) = adj(MN)$ for all invertible matrices M and N"
            ],
            "solution": "Statement C is not correct because $(MN)^{T} = N^{T}M^{T} = NM \\neq MN$ in general for symmetric matrices. Statement D is not correct because the correct standard result is $adj(MN) = adj(N) adj(M)$."
        },
            // 11
    {
        "type": "numerical",
        "marks": 3,
        "negativeMarks": 0,
        "correctAnswer": 11.00,
        "text": "<div class='section-instruction'><h3>PART-I: MATHEMATICS</h3><br><b>SECTION - 3 : (Maximum Marks : 12)</b><br><br>This section contains <b>FOUR (04)</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>.<br><br>For each question, enter the correct numerical value of the answer in the place designated to enter the answer. If the numerical value has more than two decimal places, <b>truncate/round-off</b> the value to <b>TWO</b> decimal places.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct numerical value is entered.</li><li><b>Zero Marks :</b> 0 In all other cases.</li></ul></div><br>Number of integers satisfying the inequality $\\frac{(x + 2)^{10}(x - 1)^{4}(x - 11)^{3}}{x(x - 10)^{2}} \\leq 0$ is/are",
        "solution": "The critical points are $x = -2, 1, 11, 0, 10$. Sign analysis gives $x \\in (0, 10) \\cup (10, 11) \\cup \\{-2\\}$. The integers in this range are $1, 2, 3, 4, 5, 6, 7, 8, 9, 11, -2$. Thus, there are 11 integers."
    },
    // 12
    {
        "type": "numerical",
        "marks": 3,
        "negativeMarks": 0,
        "correctAnswer": 6.00,
        "text": "The sum of all real values of x for $\\frac{3x^{2} - 9x + 17}{x^{2} + 3x + 10} = \\frac{5x^{2} - 7x + 19}{3x^{2} + 5x + 12}$ which is equal to",
        "solution": "Subtracting 1 from both sides: $\\frac{2x^{2} - 12x + 7}{x^{2} + 3x + 10} = \\frac{2x^{2} - 12x + 7}{3x^{2} + 5x + 12}$. Either $2x^{2} - 12x + 7 = 0$ or $x^{2} + 3x + 10 = 3x^{2} + 5x + 12$. The first equation has real roots (sum = 6), the second has imaginary roots. So the sum of all real values of x is 6.00."
    },
    // 13
    {
        "type": "numerical",
        "marks": 3,
        "negativeMarks": 0,
        "correctAnswer": 9.00,
        "text": "Let $S = \\left\\{ \\theta \\in [-\\pi, \\pi] - \\left\\{ \\pm \\frac{\\pi}{2} \\right\\} : \\sin\\theta \\tan\\theta + \\tan\\theta = \\sin 2\\theta \\right\\}$. If $T = \\sum_{\\theta \\in S} \\cos 2\\theta$, then $T + n(S)$ is equal to :",
        "solution": "The equation simplifies to $\\tan\\theta (\\sin\\theta + 1 - 2\\cos^{2}\\theta) = 0$. This gives $\\theta = 0, \\pi, -\\pi, \\frac{\\pi}{6}, \\frac{5\\pi}{6}, -\\frac{\\pi}{6}, -\\frac{5\\pi}{6}$, so $n(S) = 5$. The sum $T$ of $\\cos 2\\theta$ is $1 + 1 + 1 + \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} + \\frac{1}{2} = 4$. Thus $T + n(S) = 4 + 5 = 9.00$."
    },
    // 14
    {
        "type": "numerical",
        "marks": 3,
        "negativeMarks": 0,
        "correctAnswer": 1.00,
        "text": "If $f(n) = \\alpha^{n} + \\beta^{n}$ and $\\begin{vmatrix} 3 & 1+f(1) & 1+f(2) \\\\ 1+f(1) & 1+f(2) & 1+f(3) \\\\ 1+f(2) & 1+f(3) & 1+f(4) \\end{vmatrix} = k(1-\\alpha)^{2}(1-\\beta)^{2}(\\alpha-\\beta)^{2}$ then k is",
        "solution": "Expressing the determinant in terms of $1, \\alpha, \\alpha^2$ and $1, \\beta, \\beta^2$, we get $\\Delta = (1-\\alpha)^{2}(1-\\beta)^{2}(\\alpha-\\beta)^{2}$. Therefore, $k = 1.00$."
    },
            // 15
    {
        "type": "mcq",
        "marks": 3,
        "negativeMarks": -1,
        "correctAnswer": 1,
        "text": "<div class='section-instruction'><h3>PART-I: MATHEMATICS</h3><br><b>SECTION - 3 : (Maximum Marks : 12)</b><br><br>This section contains <b>TWO (02)</b> paragraphs.<br>Each paragraph has <b>TWO (02)</b> questions.<br>Each question has <b>FOUR</b> options (A), (B), (C), (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><b>Paragraph for Q.15 and Q.16</b><br>If a polynomial is defined as $p(x) = 2x^{5} - ax^{4} + bx^{3} - cx^{2} + dx$ such that $p(1) = 1$, $p(2) = 4$, $p(3) = 9$, $p(4) = 16$. Match List I with List II and select the correct answer using the code given below the lists:<br><br><table style='width: 100%; border-collapse: collapse;'><tr><td style='text-align: left; width: 50%;'><b>List-I</b></td><td style='text-align: right; width: 50%;'><b>List-II</b></td></tr><tr><td style='text-align: left;'>(I) a is</td><td style='text-align: right;'>(P) 99</td></tr><tr><td style='text-align: left;'>(II) b is</td><td style='text-align: right;'>(Q) 48</td></tr><tr><td style='text-align: left;'>(III) c is</td><td style='text-align: right;'>(R) 70</td></tr><tr><td style='text-align: left;'>(IV) d is</td><td style='text-align: right;'>(S) 20</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(T) 35</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(U) 45</td></tr></table><br>Which of the following has the correct combination considering List-I and List-II?",
        "options": [
            "(I - P), (II - T)",
            "(I - S), (II - R)",
            "(I - U), (II - Q)",
            "(I - Q), (II - R)"
        ],
        "solution": "Given $p(1)=1, p(2)=4, p(3)=9, p(4)=16$, so $p(x) - x^2$ has roots 1, 2, 3, 4. Thus $p(x) - x^2 = 2(x-1)(x-2)(x-3)(x-4)(x-r)$. Since $p(0)=0$, we get $r=0$. Expanding gives $p(x) = 2x^5 - 20x^4 + 70x^3 - 99x^2 + 48x$. Comparing with $p(x) = 2x^5 - ax^4 + bx^3 - cx^2 + dx$, we get $a=20, b=70, c=99, d=48$. Hence (I - S), (II - R)."
    },
    // 16
    {
        "type": "mcq",
        "marks": 3,
        "negativeMarks": -1,
        "correctAnswer": 1,
        "text": "<b>Paragraph for Q.15 and Q.16</b><br>If a polynomial is defined as $p(x) = 2x^{5} - ax^{4} + bx^{3} - cx^{2} + dx$ such that $p(1) = 1$, $p(2) = 4$, $p(3) = 9$, $p(4) = 16$. Match List I with List II and select the correct answer using the code given below the lists:<br><br><table style='width: 100%; border-collapse: collapse;'><tr><td style='text-align: left; width: 50%;'><b>List-I</b></td><td style='text-align: right; width: 50%;'><b>List-II</b></td></tr><tr><td style='text-align: left;'>(I) a is</td><td style='text-align: right;'>(P) 99</td></tr><tr><td style='text-align: left;'>(II) b is</td><td style='text-align: right;'>(Q) 48</td></tr><tr><td style='text-align: left;'>(III) c is</td><td style='text-align: right;'>(R) 70</td></tr><tr><td style='text-align: left;'>(IV) d is</td><td style='text-align: right;'>(S) 20</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(T) 35</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(U) 45</td></tr></table><br>Which of the following has correct combination considering List-I and List-II?",
        "options": [
            "(III - Q), (II - R)",
            "(II - R), (III - P)",
            "(III - T), (IV - S)",
            "(III - T), (IV - T)"
        ],
        "solution": "From the expansion $p(x) = 2x^5 - 20x^4 + 70x^3 - 99x^2 + 48x$, we get $a=20, b=70, c=99, d=48$. Hence (II - R), (III - P)."
    },
    // 17
    {
        "type": "mcq",
        "marks": 3,
        "negativeMarks": -1,
        "correctAnswer": 0,
        "text": "<b>Paragraph for Q.17 and Q.18</b><br>Match list-I with list-II and select the correct answer using the code given below the lists:<br><br><table style='width: 100%; border-collapse: collapse;'><tr><td style='text-align: left; width: 50%;'><b>List-I</b></td><td style='text-align: right; width: 50%;'><b>List-II</b></td></tr><tr><td style='text-align: left;'>(I) If $\\begin{vmatrix} x & 3 & -2 \\\\ 2 & -3 & 1 \\\\ 1 & 3 & -2 \\end{vmatrix} = 0$ then x is</td><td style='text-align: right;'>(P) 0</td></tr><tr><td style='text-align: left;'>(II) If $(A + B)^{2} = A^{2} + B^{2}$ and $|A| = 2$, then $|B| = $ (where A and B are square matrices of order 3)</td><td style='text-align: right;'>(Q) 1</td></tr><tr><td style='text-align: left;'>(III) If $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 1 \\end{bmatrix}$ and a matrix C is defined as $C = (BAB^{-1})(B^{-1}A^{T}B)$, where $|C| = K^{2}(K \\in N)$, then K =</td><td style='text-align: right;'>(R) 2</td></tr><tr><td style='text-align: left;'>(IV) If $A = \\begin{bmatrix} 1 & 1 \\\\ -1 & 1 \\end{bmatrix}$ and $A^{4} = -\\lambda I$, then $\\lambda - 2$ is equal to</td><td style='text-align: right;'>(S) 4</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(T) 5</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(U) 6</td></tr></table><br>Which of the following has the correct combination considering List-I and List-II?",
        "options": [
            "(I - Q), (II - P)",
            "(I - P), (II - T)",
            "(I - U), (II - Q)",
            "(I - Q), (II - R)"
        ],
        "solution": "For (I), determinant is $3x - 3 = 0 \\implies x = 1$ (Q). For (II), $AB + BA = 0 \\implies AB = -BA$, taking determinant gives $|B| = 0$ (P). Hence (I - Q), (II - P)."
    },
    // 18
    {
        "type": "mcq",
        "marks": 3,
        "negativeMarks": -1,
        "correctAnswer": 3,
        "text": "<b>Paragraph for Q.17 and Q.18</b><br>Match list-I with list-II and select the correct answer using the code given below the lists:<br><br><table style='width: 100%; border-collapse: collapse;'><tr><td style='text-align: left; width: 50%;'><b>List-I</b></td><td style='text-align: right; width: 50%;'><b>List-II</b></td></tr><tr><td style='text-align: left;'>(I) If $\\begin{vmatrix} x & 3 & -2 \\\\ 2 & -3 & 1 \\\\ 1 & 3 & -2 \\end{vmatrix} = 0$ then x is</td><td style='text-align: right;'>(P) 0</td></tr><tr><td style='text-align: left;'>(II) If $(A + B)^{2} = A^{2} + B^{2}$ and $|A| = 2$, then $|B| = $ (where A and B are square matrices of order 3)</td><td style='text-align: right;'>(Q) 1</td></tr><tr><td style='text-align: left;'>(III) If $A = \\begin{bmatrix} 3 & 1 \\\\ -1 & 1 \\end{bmatrix}$ and a matrix C is defined as $C = (BAB^{-1})(B^{-1}A^{T}B)$, where $|C| = K^{2}(K \\in N)$, then K =</td><td style='text-align: right;'>(R) 2</td></tr><tr><td style='text-align: left;'>(IV) If $A = \\begin{bmatrix} 1 & 1 \\\\ -1 & 1 \\end{bmatrix}$ and $A^{4} = -\\lambda I$, then $\\lambda - 2$ is equal to</td><td style='text-align: right;'>(S) 4</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(T) 5</td></tr><tr><td style='text-align: left;'></td><td style='text-align: right;'>(U) 6</td></tr></table><br>Which of the following has correct combination considering List-I and List-II?",
        "options": [
            "(III - Q), (II - R)",
            "(II - R), (III - P)",
            "(III - T), (IV - S)",
            "(III - S), (IV - R)"
        ],
        "solution": "For (III), $|C| = |A|^2 = 4^2 = 16 = K^2 \\implies K = 4$ (S). For (IV), $A^4 = -4I \\implies \\lambda = 4$, so $\\lambda - 2 = 2$ (R). Hence (III - S), (IV - R)."
    }
    ]
};        
