window.testBank = window.testBank || {};
window.testBank['test_812'] = {
    title: "APT-5 (15-09-2026) Pre-Test",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-09-10T12:00:00Z",
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
            "correctAnswer": 0,
            "text": "<div class='section-instruction'><h3>SECTION - 1 (Maximum Marks: 24)</h3>This section contains <b>EIGHT (08)</b> questions.<br>Each question has <b>FOUR</b> options for correct answer(s). <b>ONLY ONE</b> of these four option is the correct answer.<br>For each question, choose the correct option corresponding to the correct answer.<br>Answer to each question will be evaluated according to the following marking scheme:<br><br><b>Full Marks :</b> +3 If only the correct option is chosen.<br><b>Zero Marks :</b> 0 If none of the option is chosen.(i.e the question is un answered)<br><b>Negative Marks:</b> -1 In all other cases.</div><br>Let $M = \\left\\{ A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} : a,b,c,d \\in \\{\\pm 3, \\pm 2, \\pm 1, 0\\} \\right\\}$. Define, as $f(A) = \\det(A)$, for all $A \\in M$, where $Z$ is set of all integers. Then the number of $A \\in M$ such that $f(A) = 15$ is equal to ____",
            "options": [
                "16",
                "2",
                "4",
                "8"
            ],
            "solution": "We need $ad - bc = 15$.<br>Maximum value of $ad$ is 9 and minimum value of $bc$ is -9.<br>Possible combinations for $(ad, bc)$ are $(9, -6)$ and $(6, -9)$.<br>For $(9, -6)$: $ad=9 \\implies (a,d) \\in \\{(3,3), (-3,-3)\\}$ (2 ways). $bc=-6 \\implies (b,c) \\in \\{(-2,3), (3,-2), (-3,2), (2,-3)\\}$ (4 ways). Total = 8.<br>For $(6, -9)$: $ad=6 \\implies (a,d) \\in \\{(-2,-3), (-3,-2), (2,3), (3,2)\\}$ (4 ways). $bc=-9 \\implies (b,c) \\in \\{(3,-3), (-3,3)\\}$ (2 ways). Total = 8.<br>Total number of matrices = $8 + 8 = 16$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let x, y, z be the roots (real or non-real) of the equation $t^3 - 3t^2 + t - 1 = 0$, then which of the following is NOT TRUE?",
            "options": [
                "$\\frac{\\begin{vmatrix} 1 & x & x^3 \\\\ 1 & y & y^3 \\\\ 1 & z & z^3 \\end{vmatrix}}{(x-y)(y-z)(z-x)} = 3$",
                "$\\frac{\\begin{vmatrix} 1 & x^2 & x^3 \\\\ 1 & y^2 & y^3 \\\\ 1 & z^2 & z^3 \\end{vmatrix}}{(x-y)(y-z)(z-x)} = 1$",
                "$\\begin{vmatrix} 1+x & 1 & 1 \\\\ 1 & 1+y & 1 \\\\ 1 & 1 & 1+z \\end{vmatrix} = 1$",
                "$\\frac{\\begin{vmatrix} 1 & x & x^2 \\\\ 1 & y & y^2 \\\\ 1 & z & z^2 \\end{vmatrix}}{(x-y)(y-z)(z-x)} = 1$"
            ],
            "solution": "For the given cubic, $x+y+z=3$, $xy+yz+zx=1$, $xyz=1$. Evaluating each option:<br>(A) $\\frac{\\begin{vmatrix} 1 & x & x^3 \\\\ 1 & y & y^3 \\\\ 1 & z & z^3 \\end{vmatrix}}{(x-y)(y-z)(z-x)} = x+y+z = 3$ (True)<br>(B) $\\frac{\\begin{vmatrix} 1 & x^2 & x^3 \\\\ 1 & y^2 & y^3 \\\\ 1 & z^2 & z^3 \\end{vmatrix}}{(x-y)(y-z)(z-x)} = xy+yz+zx = 1$ (True)<br>(C) $\\begin{vmatrix} 1+x & 1 & 1 \\\\ 1 & 1+y & 1 \\\\ 1 & 1 & 1+z \\end{vmatrix} = xyz+xy+yz+zx = 1+1=2$ (False)<br>(D) $\\frac{\\begin{vmatrix} 1 & x & x^2 \\\\ 1 & y & y^2 \\\\ 1 & z & z^2 \\end{vmatrix}}{(x-y)(y-z)(z-x)} = 1$ (True)."
        },
        // 3
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If A and B are any two different square matrices of order n with $A - B$ is non-singular, $A^{3} = B^{3}$ and $A(A(B)) = B(B(A))$, then",
            "options": [
                "$A^{2} + B^{2} = O$",
                "$A^{2} + B^{2} = I$",
                "$A^{2} + B^{3} = I$",
                "$A^{3} + B^{3} = O$"
            ],
            "solution": "$A^{3} = B^{3} \\quad \\dots (i)$<br>$A^{2}B = B^{2}A \\quad \\dots (ii)$<br>Subtracting (ii) from (i):<br>$(A^{2} + B^{2})(A - B) = O$<br>Since $|A - B| \\neq 0$, we get $A^{2} + B^{2} = O$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $\\Delta = \\begin{vmatrix} a & a+d & a+2d \\\\ a+d & a+2d & a \\\\ a+2d & a & a+d \\end{vmatrix}$, then",
            "options": [
                "$\\Delta$ depends on $a$",
                "$\\Delta$ depends on $d$",
                "$\\Delta$ is constant",
                "all the above"
            ],
            "solution": "Apply $C_{1} \\to C_{1} - C_{2}$ and $C_{2} \\to C_{2} - C_{3}$:<br>$\\Delta = \\begin{vmatrix} -d & -d & a+2d \\\\ -d & 2d & a \\\\ 2d & -d & a+d \\end{vmatrix} = -9(a+d)d^{2}$.<br>Hence, $\\Delta$ depends on both $a$ and $d$. Since the question is single correct, the most appropriate option is (B) $\\Delta$ depends on $d$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "It is given that three distinct points $(x_1, y_1), (x_2, y_2)$ and $(x_3, y_3)$ are collinear. Then a necessary and sufficient condition for $(x_2, y_2)$ to lie on the line segment joining $(x_3, y_3)$ to $(x_1, y_1)$ is-",
            "options": [
                "either $x_1 + y_1 < x_2 + y_2 < x_3 + y_3$ or $x_3 + y_3 < x_2 + y_2 < x_1 + y_1$",
                "either $x_1 - y_1 < x_2 - y_2 < x_3 - y_3$ or $x_3 - y_3 < x_2 - y_2 < x_1 - y_1$",
                "either $0 < \\frac{x_2 - x_3}{x_1 - x_3} < 1$ or $0 < \\frac{y_2 - y_3}{y_1 - y_3} < 1$",
                "none of the foregoing statements."
            ],
            "solution": "For $(x_2, y_2)$ to lie on the segment joining $(x_3, y_3)$ and $(x_1, y_1)$, the point must divide the segment internally. This is equivalent to the ratio $\\frac{x_2 - x_3}{x_1 - x_3}$ lying strictly between 0 and 1 (or the corresponding ratio in y). Hence, option (C) is the necessary and sufficient condition."
        },
        // 6
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "As shown in the diagram, region R in the plane has vertices at (0,0), (0,5), (4,5), (4,1), (9,1) and (9,0). There is a straight line $y = mx$ that partitions R into two subregions of equal area. The value of m equals to<br><img src='images/PreAPT-15-09-2026_Q5.png' alt='Diagram' style='max-width:100%;'>",
            "options": ["$\\frac{15}{16}$", "1", "$\\frac{5}{4}$", "$\\frac{4}{3}$"],
            "solution": "The line $y = mx$ passes through the origin and intersects the vertical line $x = 4$ at $(4, 4m)$. The area of region I (above the line and to the left of $x=4$) is $4(5 - 4m) + \\frac{1}{2}(4)(4m) = 20 - 16m + 8m = 20 - 8m$. The area of region II (below the line and to the right of $x=4$) is $\\frac{1}{2}(4)(4m) + 5 = 8m + 5$. Equating the areas gives $20 - 8m = 8m + 5 \\implies 16m = 15 \\implies m = \\frac{15}{16}$."
        },
        // 7
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<b>Paragraph for Q.7 and Q.8</b><br>Read the following write up carefully and answer the following questions:<br>Consider some special type of matrices. A square matrix is called idempotent matrix if $A^{2} = A$. A matrix A is called nilpotent matrix if $A^{k} = 0$, for some $k \\in N$. A square matrix is called involutory matrix if $A^{2} = I$.<br>Now consider the following matrices $A = \\begin{bmatrix} 2 & -3 & -5 \\\\ -1 & 4 & 5 \\\\ 1 & -3 & -4 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & -3 & -4 \\\\ -1 & 3 & 4 \\\\ 1 & -3 & -4 \\end{bmatrix}$, $C = \\begin{bmatrix} 0 & 1 & -1 \\\\ 4 & -3 & 4 \\\\ 3 & -3 & 4 \\end{bmatrix}$<br><br>Which one of the following is a nilpotent matrix?",
            "options": ["$A$", "$B$", "$C$", "$AC^{2}$"],
            "solution": "$|A| = 0 \\implies A$ is singular; $|B| = 0 \\implies B$ is singular; $|C| = -1 \\implies C$ is non-singular.<br>$A^{2} = A \\implies A$ is idempotent; $B^{2} = 0 \\implies B$ is nilpotent; $C^{2} = I \\implies C$ is involutory.<br>Hence, B is nilpotent."
        },
        // 8
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<b>Paragraph for Q.7 and Q.8</b><br>Read the following write up carefully and answer the following questions:<br>Consider some special type of matrices. A square matrix is called idempotent matrix if $A^{2} = A$. A matrix A is called nilpotent matrix if $A^{k} = 0$, for some $k \\in N$. A square matrix is called involutory matrix if $A^{2} = I$.<br>Now consider the following matrices $A = \\begin{bmatrix} 2 & -3 & -5 \\\\ -1 & 4 & 5 \\\\ 1 & -3 & -4 \\end{bmatrix}$, $B = \\begin{bmatrix} 1 & -3 & -4 \\\\ -1 & 3 & 4 \\\\ 1 & -3 & -4 \\end{bmatrix}$, $C = \\begin{bmatrix} 0 & 1 & -1 \\\\ 4 & -3 & 4 \\\\ 3 & -3 & 4 \\end{bmatrix}$<br><br>Which one of the following is not an idempotent matrix?",
            "options": ["$A^{3}C^{2}$", "$A^{2}C^{2}$", "$BC^{2}$", "$C^{2}A$"],
            "solution": "Since $A$ is idempotent, $A^{n} = A$ for $n \\ge 1$. Since $C^{2} = I$, we have $A^{3}C^{2} = A \\cdot I = A$ (idempotent), $A^{2}C^{2} = A \\cdot I = A$ (idempotent), $C^{2}A = I \\cdot A = A$ (idempotent). But $BC^{2} = B \\cdot I = B$, and since $B^{2} = 0 \\neq B$, $B$ is nilpotent, not idempotent. Hence, $BC^{2}$ is not an idempotent matrix."
        },
        // 9
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [1, 2],
            "text": "<div class='section-instruction'><h3>SECTION - 2 (Maximum Marks: 24)</h3>This section contains <b>SIX (06)</b> questions.<br>Each question has <b>FOUR</b> options for correct answer(s). <b>ONE OR MORE THAN ONE</b> of these four option(s) is (are) correct option(s).<br>For each question, choose the correct option(s) to answer the question.<br>Answer to each question will be evaluated according to the following marking scheme:<br><br><b>Full Marks :</b> +4 If only (all) the correct option(s) is (are) chosen.<br><b>Partial Marks :</b> +3 If all the four options are correct but ONLY three options are chosen.<br><b>Partial Marks :</b> +2 If three or more options are correct but ONLY two options are chosen, both of which are correct options.<br><b>Partial Marks :</b> +1 If two or more options are correct but ONLY one option is chosen and it is a correct option.<br><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).<br><b>Negative Marks:</b> -2 In all other cases.</div><br>If A and B are square matrices of order '3' such that $A \\text{ adj}(2B) = 16I_3$ and $\\det(B) = 2$ then which of the following is/are true (Where adj(X) denotes adjoint of matrix (X), $X^{-1}$ denotes inverse of matrix (X) and det(X) denotes determinant value of matrix (X)).",
            "options": [
                "$(A^{-1}(adj B))^{-1} = 4A^{2}$",
                "$(A^{-1}(adj B))^{-1} = B^{2}$",
                "$B(adj A) = 8I_{3}$",
                "$B(adj A) = 4I_{3}$"
            ],
            "solution": "$A \\cdot adj(2B) = 16I \\implies A(4 \\cdot adj B) = 16I \\implies A \\cdot adj B = 4I$<br>$\\implies A|B|B^{-1} = 4I \\implies AB^{-1} = 2I \\implies A = 2B$<br>$B \\cdot adj A = B \\cdot adj(2B) = 4B \\cdot adj B = 4|B|I_3 = 8I_3$<br>$A \\cdot adj B = 4I \\implies A^{-1} \\cdot A \\cdot adj B = 4A^{-1} \\implies adj B = 4A^{-1}$<br>$A^{-1} \\cdot adj B = A^{-1} \\cdot (4A^{-1}) = 4(A^{-1})^2$<br>$(A^{-1}(adj B))^{-1} = (4A^{-1}A^{-1})^{-1} = \\frac{1}{4}A^{2} = \\frac{1}{4}(2B)^{2} = B^{2}$"
        },
        // 10
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [0, 1],
            "text": "Let M and N be two $3 \\times 3$ matrices such that $MN = NM$. Further, if $M \\neq N^{2}$ and $M^{2} = N^{4}$, then",
            "options": [
                "determinant of $(M^{2} + MN^{2})$ is 0",
                "there is a $3 \\times 3$ non-zero matrix U such that $(M^{2} + MN^{2})U$ is the zero matrix",
                "determinant of $(M^{2} + MN^{2}) \\geq 1$",
                "for a $3 \\times 3$ matrix U, if $(M^{2} + MN^{2})U$ equals the zero matrix then U must be the zero matrix"
            ],
            "solution": "$M^{2} = N^{4} \\implies (M - N^{2})(M + N^{2}) = 0$ as M and N commute.<br>Since $M - N^{2} \\neq 0$, we have $\\det(M + N^{2}) = 0$.<br>Recall that if $AB = O$ and $A \\neq 0$, then $\\det B = 0$.<br>$\\det(M^{2} + MN^{2}) = \\det(M(M + N^{2})) = (\\det M)(\\det(M + N^{2})) = (\\det M) \\cdot 0 = 0$.<br>Also, if $\\det A = 0$, then $\\exists X \\neq 0$ such that $AX = 0$. Letting $M^{2} + MN^{2}$ play the role of A, we get $(M^{2} + MN^{2})U = O$ for some $3 \\times 3$ non-zero matrix U."
        },
        // 11
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [1, 2],
            "text": "Let $P = \\begin{bmatrix} 3 & -1 & -2 \\\\ 2 & 0 & \\alpha \\\\ 3 & -5 & 0 \\end{bmatrix}$, where $\\alpha \\in R$. Suppose $Q = [q_{ij}]$ is a matrix such that $PQ = kI$, where $k \\in R, k \\neq 0$ and I is the identity matrix of order 3. If $q_{23} = -\\frac{k}{8}$ and $\\det(Q) = \\frac{k^{2}}{2}$, then",
            "options": [
                "$\\alpha = 0, k = 8$",
                "$4\\alpha - k + 8 = 0$",
                "$\\det(P adj(Q)) = 2^{9}$",
                "$\\det(Q adj(P)) = 2^{13}$"
            ],
            "solution": "$PQ = kI \\implies Q = kP^{-1}I = \\frac{k}{\\det P}(adj P)$<br>$= \\frac{k}{20+12\\alpha}\\begin{bmatrix} 5\\alpha & 10 & -\\alpha \\\\ 3\\alpha & 6 & -(3\\alpha+4) \\\\ -10 & 12 & 2 \\end{bmatrix}$<br>As $q_{23} = -k/8$, we have $\\frac{k}{20+12\\alpha}(3\\alpha+4) = \\frac{k}{8}$.<br>As $k \\neq 0$, we have $2(3\\alpha+4) = 5+3\\alpha \\implies 6\\alpha + 8 = 5 + 3\\alpha \\implies \\alpha = -1$.<br>As $\\det Q = \\frac{k^3}{\\det P}$, we have $\\frac{k^2}{2} = \\frac{k^3}{20+12\\alpha} \\implies 2k = 20 + 12\\alpha \\implies k = 4$.<br>Thus, $4\\alpha - k + 8 = -4 - 4 + 8 = 0$.<br>$\\det(P adj Q) = \\det(P) \\cdot (\\det adj Q) = 2k \\cdot \\left(\\frac{k^2}{2}\\right)^2 = \\frac{k^5}{2} = \\frac{2^{10}}{2} = 2^9$."
        },
        // 12
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [0, 1, 2, 3],
            "text": "Consider a system of linear equations $3x + y - z = 0$, $x - \\frac{py}{4} + z = 2$ and $2x - y + 2z = q$ where $p, q \\in I$ and $p, q \\in [1, 10]$, then identify the correct statement(s)",
            "options": [
                "Number of ordered pairs $(p, q)$ for which system of equation has unique solution is 90",
                "Number of ordered pairs $(p, q)$ for which system of equation has no solution is 9",
                "Number of ordered pairs $(p, q)$ for which system of equation has infinite solution is 1",
                "Number of ordered pairs $(p, q)$ for which system of equation has at least one solution is 91"
            ],
            "solution": "$\\det = \\begin{vmatrix} 3 & 1 & -1 \\\\ 1 & -p/4 & 1 \\\\ 2 & -1 & 2 \\end{vmatrix} = 3\\left(-\\frac{p}{2} + 1\\right) - 1(2-2) + (-1)\\left(-1 + \\frac{p}{2}\\right) = 4 - 2p$.<br>For unique solution, $4 - 2p \\neq 0 \\implies p \\neq 2$. There are 9 values of $p$ (except 2) and 10 values of $q$, so 90 pairs. Option A is true.<br>For $p = 2$, the second equation multiplied by 2 gives $2x - y + 2z = 4$. Thus $q = 4$ gives infinite solutions and $q \\neq 4$ gives no solution. So for no solution, $p = 2, q \\neq 4$: 9 pairs. Option B is true.<br>For infinite solution, $p = 2, q = 4$: 1 pair. Option C is true.<br>At least one solution: $90 + 1 = 91$ pairs. Option D is true."
        },
        // 13
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [1, 2, 3],
            "text": "The equation of straight line with gradient 1, passing through $\\left(\\frac{m}{2}, \\frac{n}{2}\\right)$ where $m, n \\in R$, satisfies the equation $\\sec^{2}(n(m + 2)) + m^{2} = 1$ (where $n \\in \\left[-\\frac{\\pi}{2}, \\frac{\\pi}{2}\\right]$), can be",
            "options": [
                "$x + y = 0$",
                "$x - y = 0$",
                "$x - y + \\frac{\\pi}{4} = 0$",
                "$x - y - \\frac{\\pi}{4} = 0$"
            ],
            "solution": "The line has gradient 1, so its equation is $y - \\frac{n}{2} = 1 \\cdot (x - \\frac{m}{2}) \\implies x - y = \\frac{m - n}{2}$. The condition $\\sec^2(n(m+2)) + m^2 = 1$ gives $\\sec^2(n(m+2)) = 1 - m^2$. Since $\\sec^2 \\ge 1$, we need $1 - m^2 \\ge 1 \\implies m^2 \\le 0 \\implies m = 0$. Then $\\sec^2(2n) = 1 \\implies \\cos^2(2n) = 1 \\implies \\sin(2n) = 0 \\implies n = 0$ or $n = \\pm \\pi/2$. For $n = 0$, $m = 0$, the line is $x - y = 0$. For $n = \\pi/2$, the line is $x - y = -\\pi/4 \\implies x - y + \\pi/4 = 0$. For $n = -\\pi/2$, the line is $x - y = \\pi/4 \\implies x - y - \\pi/4 = 0$. Hence, options (B), (C), (D) are correct."
        },
        // 14
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [2, 3],
            "text": "If $(x_1 - x_2)^2 + (y_1 - y_2)^2 = 144$, $(x_2 - x_3)^2 + (y_2 - y_3)^2 = 25$ and $(x_3 - x_1)^2 + (y_3 - y_1)^2 = 169$, then the value of $\\begin{vmatrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix}$ can be",
            "options": ["30", "$30^2$", "60", "-60"],
            "solution": "The three points form a triangle with side lengths 12, 5, and 13. Since $12^2 + 5^2 = 13^2$, the triangle is right-angled, and its area is $\\frac{1}{2} \\times 12 \\times 5 = 30$. The determinant $\\begin{vmatrix} x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix}$ equals twice the signed area of the triangle, so its absolute value is $2 \\times 30 = 60$. Depending on the orientation, the value is either 60 or -60. Hence, options (C) and (D) are correct."
        },
        // 15
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 6,
            "text": "<div class='section-instruction'><h3>SECTION - 3 (Maximum Marks: 12)</h3>This section contains <b>FOUR (04)</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>.<br>For each question, enter the correct numerical value of the answer using the mouse and the on-screen virtual numeric keypad in the place designated to enter the answer. If the numerical value has more than two decimal places <b>truncate/round-off</b> the value to <b>TWO</b> decimal places.<br>Answer to each question will be evaluated according to the following marking scheme:<br><br><b>Full Marks :</b> +4 If only the correct numerical value is entered as answer.<br><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).<br><b>Negative Marks :</b> -1 In all other cases.</div><br>Find the distance of point (4,5) from the straight line joining the points (1,2) and (-2,3) measured parallel to the line $x + y + 1 = 0$",
            "solution": "Equation of line joining (1,2) and (-2,3) is $x + 3y - 7 = 0$. Equation of line through (4,5) parallel to $x + y + 1 = 0$ is $x + y - 9 = 0$. Solving these two equations gives the intersection point $(10, -1)$. Distance between (4,5) and (10,-1) is $\\sqrt{(10-4)^2 + (-1-5)^2} = \\sqrt{36 + 36} = \\sqrt{72} = 6\\sqrt{2}$. Hence, the value is $6\\sqrt{2}$, so the integer answer is 6."
        },
        // 16
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "$A(3,4), B(0,0)$ and $C(3,0)$ are vertices of $\\Delta ABC$. If 'P' is the point inside the $\\Delta ABC$, such that $d(P, BC) \\le \\min\\{d(P, AB), d(P, AC)\\}$. Then the maximum of $d(P, BC)$ is. (where $d(P, BC)$ represent distance between P and BC).",
            "solution": "Here BP and CP are angular bisectors. Maximum of $d(P, BC)$ occurs when P is incentre of $\\Delta ABC$. The sides of the triangle are 3, 4, 5. The inradius $r = \\frac{\\Delta}{s} = \\frac{6}{6} = 1$. Hence, the maximum value is 1."
        },
        // 17
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 6,
            "text": "For a point P in the plane, let $d_1(P)$ and $d_2(P)$ be the distance of the point P from the lines $x - y = 0$ and $x + y = 0$ respectively. The area of the region R consisting of all points P lying in the first quadrant of the plane and satisfying $2 \\le d_1(P) + d_2(P) \\le 4$, is",
            "solution": "Let $P(h, k)$. Then $2 \\le \\frac{|h-k|}{\\sqrt{2}} + \\frac{|h+k|}{\\sqrt{2}} \\le 4 \\implies 2\\sqrt{2} \\le |h-k| + |h+k| \\le 4\\sqrt{2}$. In the first quadrant, if $h \\ge k$, we get $\\sqrt{2} \\le x \\le 2\\sqrt{2}$. If $k > h$, we get $\\sqrt{2} \\le y \\le 2\\sqrt{2}$. The required area is $(2\\sqrt{2})^2 - (\\sqrt{2})^2 = 8 - 2 = 6$."
        },
        // 18
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 8,
            "text": "$A_1, A_2, ... A_n$ are points on the line $y = x$ lying in the first quadrant such that $OA_n = n OA_{n-1}$, O being the origin. If $OA_1 = 1$ then the coordinates of $A_6$ are $(3a\\sqrt{2}, 3a\\sqrt{2})$, then $\\frac{a}{15}$ is equal to",
            "solution": "$OA_n = n! OA_1 = n!$. For $n=6$, $OA_6 = 6! = 720$. Point $A_6$ lies on $y=x$, so $OA_6 = x_6 \\sqrt{2} = 720 \\implies x_6 = \\frac{720}{\\sqrt{2}} = 360\\sqrt{2}$. Given $3a\\sqrt{2} = 360\\sqrt{2} \\implies 3a = 360 \\implies a = 120$. Therefore, $\\frac{a}{15} = \\frac{120}{15} = 8$."
        }
    ]
};