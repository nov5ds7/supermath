window.testBank = window.testBank || {};
window.testBank['test_820'] = {
    title: "Pre-MCT-02(22.10.2026)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-10-20T01:30:00Z",
    timeLimitMins: 80,
    examPattern: "main",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // Q1 | Matrices (JEE Adv 2012)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - I (Maximum Marks: 80)</h3><b>Single Correct Answer Type</b><br><br>This section contains <b>20</b> questions. Each question has <b>4</b> options (1), (2), (3) and (4) for its answer, out of which <b>ONLY ONE</b> option can be correct.<br><br><b>Marking scheme:</b><ul><li><b>Full Marks:</b> +4 for correct answer</li><li><b>Zero Marks:</b> 0 if not attempted</li><li><b>Negative Marks:</b> -1 if not correct</li></ul></div><br>Let $P$ and $Q$ be $3\\times3$ matrices with $P \\neq Q$. If $P^3 = Q^3$ and $P^2Q = Q^2P$, then $\\det\\left(P^2 + Q^2\\right)$ is equal to",
            "options": [
                        "$-2$",
                        "$-1$",
                        "$0$",
                        "$1$"
            ],
            "solution": "$(P^2 + Q^2)(P - Q) = P^3 - P^2Q + Q^2P - Q^3 = (P^3 - Q^3) - (P^2Q - Q^2P) = O$.<br>Since $P \\neq Q$, the matrix $P - Q$ is a non-zero matrix. If $P^2 + Q^2$ were invertible, multiplying by its inverse would give $P - Q = O$, a contradiction.<br>Hence $P^2 + Q^2$ is singular and $\\det(P^2 + Q^2) = 0$."
        },
        // Q2 | Adjoint
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $A$ be a $3 \\times 3$ matrix with $|A| = 2$. Then $\\left|\\operatorname{adj}\\left(3\\,\\operatorname{adj}A\\right)\\right|$ is equal to",
            "options": [
                        "$5832$",
                        "$11664$",
                        "$23328$",
                        "$46656$"
            ],
            "solution": "For an $n \\times n$ matrix, $\\operatorname{adj}(kB) = k^{n-1}\\operatorname{adj}B$, so $\\operatorname{adj}(3\\operatorname{adj}A) = 9\\operatorname{adj}(\\operatorname{adj}A)$.<br>Also $\\operatorname{adj}(\\operatorname{adj}A) = |A|^{n-2}A = 2A$ for $n = 3$. Hence $\\operatorname{adj}(3\\operatorname{adj}A) = 18A$.<br>$|18A| = 18^3 |A| = 5832 \\times 2 = 11664$."
        },
        // Q3 | System of equations
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "The system of linear equations $kx + y + z = 1,\\; x + ky + z = 1,\\; x + y + kz = 1$ has <b>no solution</b> if and only if $k$ is equal to",
            "options": [
                        "$-2$",
                        "$-1$",
                        "$1$",
                        "$2$"
            ],
            "solution": "$\\Delta = \\begin{vmatrix} k & 1 & 1 \\\\ 1 & k & 1 \\\\ 1 & 1 & k \\end{vmatrix} = (k-1)^2(k+2)$.<br>If $k \\neq 1, -2$, the solution is unique. For $k = 1$ all three equations are identical, so there are infinitely many solutions.<br>For $k = -2$: adding the three equations gives $0 = 3$, which is impossible, so the system has no solution. Hence $k = -2$."
        },
        // Q4 | Cayley-Hamilton (JEE Adv 2019)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $M = \\begin{pmatrix} \\sin^4\\theta & -1-\\sin^2\\theta \\\\ 1+\\cos^2\\theta & \\cos^4\\theta \\end{pmatrix} = \\alpha I + \\beta M^{-1}$, where $\\alpha = \\alpha(\\theta)$ and $\\beta = \\beta(\\theta)$ are real numbers and $I$ is the $2\\times2$ identity matrix. If $\\alpha^*$ is the minimum of $\\{\\alpha(\\theta) : \\theta \\in [0, 2\\pi)\\}$ and $\\beta^*$ is the minimum of $\\{\\beta(\\theta) : \\theta \\in [0, 2\\pi)\\}$, then the value of $\\alpha^* + \\beta^*$ is",
            "options": [
                        "$-\\frac{37}{16}$",
                        "$-\\frac{31}{16}$",
                        "$-\\frac{29}{16}$",
                        "$-\\frac{17}{16}$"
            ],
            "solution": "By the Cayley-Hamilton theorem, $M^2 - (\\operatorname{tr}M)M + (\\det M)I = O$, so $M = (\\operatorname{tr}M)I - (\\det M)M^{-1}$. Hence $\\alpha = \\operatorname{tr}M$ and $\\beta = -\\det M$.<br>$\\alpha = \\sin^4\\theta + \\cos^4\\theta = 1 - \\frac12\\sin^2 2\\theta$, whose minimum is $\\alpha^* = \\frac12$.<br>Let $t = \\sin^2\\theta\\cos^2\\theta \\in \\left[0, \\frac14\\right]$. Then $\\det M = t^2 + (1+\\sin^2\\theta)(1+\\cos^2\\theta) = t^2 + 2 + t$, which is increasing in $t$ and has maximum $\\frac{1}{16} + \\frac14 + 2 = \\frac{37}{16}$. So $\\beta^* = -\\frac{37}{16}$.<br>$\\alpha^* + \\beta^* = \\frac{8}{16} - \\frac{37}{16} = -\\frac{29}{16}$."
        },
        // Q5 | Orthogonal matrix
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If $A = \\begin{pmatrix} 0 & 2q & r \\\\ p & q & -r \\\\ p & -q & r \\end{pmatrix}$ satisfies $AA^T = I_3$, then $|p|$ is equal to",
            "options": [
                        "$\\frac{1}{\\sqrt2}$",
                        "$\\frac{1}{\\sqrt3}$",
                        "$\\frac{1}{\\sqrt5}$",
                        "$\\frac{1}{\\sqrt6}$"
            ],
            "solution": "$AA^T = I$ means the rows are orthonormal.<br>Row 1 $\\cdot$ Row 2 $= 2q^2 - r^2 = 0 \\Rightarrow r^2 = 2q^2$. Row 1 has unit length: $4q^2 + r^2 = 1 \\Rightarrow 6q^2 = 1$, so $q^2 = \\frac16$ and $r^2 = \\frac13$.<br>Row 2 has unit length: $p^2 + q^2 + r^2 = 1 \\Rightarrow p^2 = 1 - \\frac16 - \\frac13 = \\frac12$. Hence $|p| = \\frac{1}{\\sqrt2}$."
        },
        // Q6 | Cayley-Hamilton
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Let $A = \\begin{pmatrix} 1 & -1 \\\\ 2 & 3 \\end{pmatrix}$. If $A^{-1} = xA + yI$, where $I$ is the identity matrix of order $2$, then $x + y$ is equal to",
            "options": [
                        "$-\\frac35$",
                        "$1$",
                        "$\\frac15$",
                        "$\\frac35$"
            ],
            "solution": "$\\operatorname{tr}A = 4$ and $|A| = 3 + 2 = 5$, so by the Cayley-Hamilton theorem $A^2 - 4A + 5I = O$.<br>Multiplying by $A^{-1}$: $A - 4I + 5A^{-1} = O \\Rightarrow A^{-1} = -\\frac15A + \\frac45I$.<br>So $x = -\\frac15$, $y = \\frac45$ and $x + y = \\frac35$."
        },
        // Q7 | Eigenvalue-type system
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The set of all values of $\\lambda$ for which the system of linear equations $2x_1 - 2x_2 + x_3 = \\lambda x_1,\\; 2x_1 - 3x_2 + 2x_3 = \\lambda x_2,\\; -x_1 + 2x_2 = \\lambda x_3$ has a non-trivial solution",
            "options": [
                        "contains exactly one element",
                        "is an empty set",
                        "contains more than two elements",
                        "contains exactly two elements"
            ],
            "solution": "The system is $(A - \\lambda I)X = 0$ with $A = \\begin{pmatrix} 2 & -2 & 1 \\\\ 2 & -3 & 2 \\\\ -1 & 2 & 0 \\end{pmatrix}$. A non-trivial solution exists iff $|A - \\lambda I| = 0$.<br>Expanding, $|A - \\lambda I| = -(\\lambda - 1)^2(\\lambda + 3)$.<br>So $\\lambda = 1$ (repeated) or $\\lambda = -3$: the set $\\{1, -3\\}$ contains exactly two elements."
        },
        // Q8 | Determinant of roots
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $a, b, c$ be the roots of $x^3 - 6x^2 + 11x - 6 = 0$. Then the value of $\\begin{vmatrix} a & b & c \\\\ b & c & a \\\\ c & a & b \\end{vmatrix}$ is",
            "options": [
                        "$18$",
                        "$-18$",
                        "$0$",
                        "$6$"
            ],
            "solution": "$\\begin{vmatrix} a & b & c \\\\ b & c & a \\\\ c & a & b \\end{vmatrix} = -(a^3 + b^3 + c^3 - 3abc) = -(a+b+c)\\left(a^2+b^2+c^2 - ab - bc - ca\\right)$.<br>Here $a + b + c = 6$, $ab + bc + ca = 11$, so $a^2 + b^2 + c^2 = 36 - 22 = 14$ and the second factor is $14 - 11 = 3$.<br>Value $= -6 \\times 3 = -18$."
        },
        // Q9 | Idempotent matrix
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "If $A$ is a square matrix such that $A^2 = A$, then $(I + A)^3 - 7A$ is equal to",
            "options": [
                        "$7A$",
                        "$I$",
                        "$I + A$",
                        "$A$"
            ],
            "solution": "Since $A^2 = A$, we get $A^3 = A^2 \\cdot A = A^2 = A$.<br>$(I + A)^3 = I + 3A + 3A^2 + A^3 = I + 3A + 3A + A = I + 7A$.<br>Hence $(I + A)^3 - 7A = I$."
        },
        // Q10 | Determinant equation
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "The number of real roots of the equation $\\begin{vmatrix} \\sin x & \\cos x & \\cos x \\\\ \\cos x & \\sin x & \\cos x \\\\ \\cos x & \\cos x & \\sin x \\end{vmatrix} = 0$ in the interval $\\left[-\\frac{\\pi}{4}, \\frac{\\pi}{4}\\right]$ is",
            "options": [
                        "$0$",
                        "$1$",
                        "$2$",
                        "$3$"
            ],
            "solution": "Applying $C_1 \\to C_1 + C_2 + C_3$ gives the factor $(\\sin x + 2\\cos x)$, and the remaining determinant equals $(\\sin x - \\cos x)^2$. So the determinant is $(\\sin x + 2\\cos x)(\\sin x - \\cos x)^2$.<br>$\\sin x = \\cos x \\Rightarrow x = \\frac{\\pi}{4}$, which lies in the interval.<br>$\\sin x + 2\\cos x = 0 \\Rightarrow \\tan x = -2$, which is impossible for $x \\in \\left[-\\frac\\pi4, \\frac\\pi4\\right]$ where $|\\tan x| \\leq 1$.<br>So there is exactly one root."
        },
        // Q11 | Straight lines (JEE Main 2020)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "A triangle has a vertex at $(1, 2)$ and the mid-points of the two sides through it are $(-1, 1)$ and $(2, 3)$. Then the centroid of this triangle is",
            "options": [
                        "$\\left(1, \\frac73\\right)$",
                        "$\\left(\\frac13, \\frac53\\right)$",
                        "$\\left(\\frac13, 2\\right)$",
                        "$\\left(1, \\frac13\\right)$"
            ],
            "solution": "Let $A = (1,2)$. If $(-1, 1)$ is the mid-point of $AB$, then $B = (-2-1, 2-2) = (-3, 0)$. If $(2, 3)$ is the mid-point of $AC$, then $C = (4-1, 6-2) = (3, 4)$.<br>Centroid $= \\left(\\frac{1 - 3 + 3}{3}, \\frac{2 + 0 + 4}{3}\\right) = \\left(\\frac13, 2\\right)$."
        },
        // Q12 | Straight lines (JEE Main 2023)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $A(a, b)$, $B(3, 4)$ and $C(-6, -8)$ respectively denote the centroid, circumcentre and orthocentre of a triangle. Then the distance of the point $P(2a + 3, 7b + 5)$ from the line $2x + 3y - 4 = 0$, measured parallel to the line $x - 2y - 1 = 0$, is",
            "options": [
                        "$\\frac{15\\sqrt5}{7}$",
                        "$\\frac{17\\sqrt5}{6}$",
                        "$\\frac{17\\sqrt5}{7}$",
                        "$\\frac{15\\sqrt5}{6}$"
            ],
            "solution": "The centroid divides the line joining the orthocentre $H$ and circumcentre $S$ in the ratio $2:1$ from $H$, i.e. $G = \\frac{2S + H}{3} = \\frac{(6, 8) + (-6, -8)}{3} = (0, 0)$. So $a = b = 0$ and $P = (3, 5)$.<br>The line $x - 2y - 1 = 0$ has direction $(2, 1)$. A point on the line through $P$ in this direction is $(3 + 2t, 5 + t)$. It lies on $2x + 3y - 4 = 0$ when $6 + 4t + 15 + 3t - 4 = 0$, i.e. $t = -\\frac{17}{7}$.<br>Required distance $= |t|\\sqrt{2^2 + 1^2} = \\frac{17\\sqrt5}{7}$."
        },
        // Q13 | Reflection
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "A ray of light along $x + \\sqrt3\\,y = \\sqrt3$ gets reflected upon reaching the $x$-axis. The equation of the reflected ray is",
            "options": [
                        "$y = x + \\sqrt3$",
                        "$\\sqrt3\\,y = x - \\sqrt3$",
                        "$y = \\sqrt3\\,x - \\sqrt3$",
                        "$\\sqrt3\\,y = x - 1$"
            ],
            "solution": "The incident ray meets the $x$-axis at $(\\sqrt3, 0)$. The reflected ray is the mirror image of the incident line in the $x$-axis, obtained by replacing $y$ by $-y$: $x - \\sqrt3\\,y = \\sqrt3$.<br>That is, $\\sqrt3\\,y = x - \\sqrt3$."
        },
        // Q14 | Family of lines
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "As $k$ varies over the real numbers, the image of the point $(2, 3)$ in the line $(2x - 3y + 4) + k(x - 2y + 3) = 0$ always lies on",
            "options": [
                        "a circle of radius $\\sqrt2$",
                        "a circle of radius $2$",
                        "a straight line parallel to the $x$-axis",
                        "a parabola"
            ],
            "solution": "Every line of the family passes through the intersection of $2x - 3y + 4 = 0$ and $x - 2y + 3 = 0$, which is $F(1, 2)$.<br>The image $P'$ of $P(2, 3)$ in any line through $F$ satisfies $FP' = FP = \\sqrt{(2-1)^2 + (3-2)^2} = \\sqrt2$.<br>So $P'$ lies on the circle with centre $(1, 2)$ and radius $\\sqrt2$ (the locus is this circle, apart from the single point corresponding to the excluded line $x - 2y + 3 = 0$)."
        },
        // Q15 | Orthocentre (JEE Main 2019)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Let the equations of two sides of a triangle be $3x - 2y + 6 = 0$ and $4x + 5y - 20 = 0$. If the orthocentre of this triangle is at $(1, 1)$, then the equation of its third side is",
            "options": [
                        "$122y - 26x - 1675 = 0$",
                        "$26x + 61y + 1675 = 0$",
                        "$122y + 26x + 1675 = 0$",
                        "$26x - 122y - 1675 = 0$"
            ],
            "solution": "Let the sides $AB: 3x - 2y + 6 = 0$ (slope $\\frac32$) and $AC: 4x + 5y - 20 = 0$ (slope $-\\frac45$), with orthocentre $H(1, 1)$.<br>The altitude from $B$ is perpendicular to $AC$: $y - 1 = \\frac54(x - 1)$. Meeting $AB$, it gives $B\\left(-13, -\\frac{33}{2}\\right)$.<br>The altitude from $C$ is perpendicular to $AB$: $y - 1 = -\\frac23(x - 1)$. Meeting $AC$, it gives $C\\left(\\frac{35}{2}, -10\\right)$.<br>Slope of $BC = \\frac{-10 + \\frac{33}{2}}{\\frac{35}{2} + 13} = \\frac{13}{61}$. So $y + \\frac{33}{2} = \\frac{13}{61}(x + 13)$, i.e. $122y + 2013 = 26x + 338$, which gives $26x - 122y - 1675 = 0$."
        },
        // Q16 | Orthocentre and circle (JEE Adv 2017)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Consider a triangle $\\Delta$ whose two sides lie on the $x$-axis and the line $x + y + 1 = 0$. If the orthocentre of $\\Delta$ is $(1, 1)$, then the equation of the circle passing through the vertices of the triangle $\\Delta$ is",
            "options": [
                        "$x^2 + y^2 - 3x + y = 0$",
                        "$x^2 + y^2 + x + 3y = 0$",
                        "$x^2 + y^2 + 2y - 1 = 0$",
                        "$x^2 + y^2 + x + y = 0$"
            ],
            "solution": "The two given sides meet at $P(-1, 0)$. Let the other vertices be $Q(q, 0)$ on the $x$-axis and $R(r, -1-r)$ on $x + y + 1 = 0$.<br>The altitude from $R$ is perpendicular to the $x$-axis, i.e. the line $x = 1$ through $H$, so $r = 1$ and $R = (1, -2)$.<br>The altitude from $Q$ is perpendicular to $PR$ (slope $-1$), so it has slope $1$: $y = x - q$ passes through $(1, 1)$, giving $q = 0$ and $Q = (0, 0)$.<br>(Check: $PH \\perp QR$, since $(2, 1)\\cdot(1, -2) = 0$.)<br>Circle through $(0,0), (-1,0), (1,-2)$: $x^2 + y^2 + Dx + Ey + F = 0$ with $F = 0$, $1 - D = 0 \\Rightarrow D = 1$, and for $(1,-2)$: $1 + 4 + D - 2E = 0 \\Rightarrow E = 3$. The circle is $x^2 + y^2 + x + 3y = 0$."
        },
        // Q17 | Pair of lines
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The lines $x^2 - 4xy + y^2 = 0$ and $x + y = 3$ form a triangle which is",
            "options": [
                        "scalene",
                        "right-angled isosceles",
                        "obtuse-angled isosceles",
                        "equilateral"
            ],
            "solution": "$x^2 - 4xy + y^2 = 0 \\Rightarrow m^2 - 4m + 1 = 0 \\Rightarrow m = 2 \\pm \\sqrt3$, i.e. $m = \\tan 75^\\circ$ and $\\tan 15^\\circ$. So the two lines through the origin make angles $15^\\circ$ and $75^\\circ$ with the $x$-axis, and $x + y = 3$ makes $135^\\circ$.<br>The three lines are inclined at $15^\\circ, 75^\\circ, 135^\\circ$, so the angles between them are $60^\\circ$, $60^\\circ$ and $60^\\circ$ (since $135^\\circ - 75^\\circ = 60^\\circ$ and $75^\\circ - 15^\\circ = 60^\\circ$).<br>Hence the triangle is equilateral. (Direct check: the three vertices are $(0,0)$ and the points where $y=(2\\pm\\sqrt3)x$ meets $x+y=3$; each side works out to $\\sqrt6$.)"
        },
        // Q18 | Concurrent lines
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If the lines $x + 2ay + a = 0$, $x + 3by + b = 0$ and $x + 4cy + c = 0$ are concurrent, then $a, b, c$ are in",
            "options": [
                        "Arithmetic progression",
                        "Geometric progression",
                        "Harmonic progression",
                        "Arithmetico-geometric progression"
            ],
            "solution": "For concurrency, $\\begin{vmatrix} 1 & 2a & a \\\\ 1 & 3b & b \\\\ 1 & 4c & c \\end{vmatrix} = 0$.<br>$R_2 \\to R_2 - R_1$, $R_3 \\to R_3 - R_1$: $(3b - 2a)(c - a) - (b - a)(4c - 2a) = 0$.<br>Expanding: $3bc - 3ab - 2ac + 2a^2 - 4bc + 2ab + 4ac - 2a^2 = 0 \\Rightarrow 2ac - ab - bc = 0 \\Rightarrow b = \\frac{2ac}{a + c}$.<br>So $b$ is the harmonic mean of $a$ and $c$: $a, b, c$ are in H.P."
        },
        // Q19 | Angle bisector
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The equation of the bisector of the angle between the lines $3x - 4y + 7 = 0$ and $12x + 5y - 2 = 0$ which contains the point $(1, 4)$ is",
            "options": [
                        "$21x + 77y - 101 = 0$",
                        "$11x + 3y - 9 = 0$",
                        "$99x - 27y + 121 = 0$",
                        "$11x - 3y + 9 = 0$"
            ],
            "solution": "Let $L_1 = 3x - 4y + 7$ and $L_2 = 12x + 5y - 2$. At $(1, 4)$: $L_1 = -6 \\lt  0$ and $L_2 = 30 \\gt  0$, so the point lies in the angle where $L_1$ and $L_2$ have opposite signs.<br>The bisector of that angle is $\\frac{L_1}{5} = -\\frac{L_2}{13}$, i.e. $13L_1 + 5L_2 = 0$: $39x - 52y + 91 + 60x + 25y - 10 = 0 \\Rightarrow 99x - 27y + 81 = 0 \\Rightarrow 11x - 3y + 9 = 0$.<br>(The other bisector, $13L_1 - 5L_2 = 0$, gives $21x + 77y - 101 = 0$ and bisects the supplementary angle.)"
        },
        // Q20 | Equilateral triangle
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "A straight line through the point $(2, 2)$ intersects the lines $\\sqrt3\\,x + y = 0$ and $\\sqrt3\\,x - y = 0$ at the points $A$ and $B$. The equation of the line $AB$ so that the triangle $OAB$ is equilateral is",
            "options": [
                        "$x - 2 = 0$",
                        "$y - 2 = 0$",
                        "$x + y - 4 = 0$",
                        "$2x + y - 6 = 0$"
            ],
            "solution": "The lines $\\sqrt3 x - y = 0$ and $\\sqrt3 x + y = 0$ have slopes $\\sqrt3$ and $-\\sqrt3$, i.e. they are inclined at $60^\\circ$ and $120^\\circ$ to the $x$-axis, and the angle between them is $60^\\circ$.<br>In an equilateral triangle $OAB$ with $OA$, $OB$ along these lines, $AB$ is perpendicular to the bisector of $\\angle AOB$, which is the $y$-axis. Hence $AB$ is parallel to the $x$-axis: $y = c$.<br>It passes through $(2, 2)$, so $AB$ is $y - 2 = 0$. (Check: $A = \\left(\\frac{2}{\\sqrt3}, 2\\right)$, $B = \\left(-\\frac{2}{\\sqrt3}, 2\\right)$ give $OA = OB = AB = \\frac{4}{\\sqrt3}$.)"
        },
        // Q21 | Matrices - counting
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "correctAnswer": 33,
            "text": "<div class='section-instruction'><h3>SECTION - II (Maximum Marks: 20)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>5</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b> (an integer). Enter the correct numerical value of the answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct numerical value is entered.</li><li><b>Zero Marks :</b> 0 In all other cases.</li></ul></div><br>The number of $2 \\times 2$ matrices with every entry from the set $\\{-1, 0, 1\\}$ and determinant equal to $0$ is",
            "solution": "For $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ the condition is $ad = bc$. Each of $ad$ and $bc$ takes values in $\\{-1, 0, 1\\}$.<br>Number of ways $ad = 0$: $9 - 4 = 5$ (out of 9 pairs $(a,d)$, only 4 have both non-zero), $ad = 1$: 2 ways, $ad = -1$: 2 ways. The same counts hold for $bc$.<br>Total $= 5 \\times 5 + 2 \\times 2 + 2 \\times 2 = 25 + 4 + 4 = 33$."
        },
        // Q22 | System of equations
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "correctAnswer": 18,
            "text": "If the system of linear equations $x + y + z = 5$, $x + 2y + 3z = 9$, $x + 3y + \\alpha z = \\beta$ has infinitely many solutions, then $\\alpha + \\beta$ is equal to",
            "solution": "Subtract: $R_2 - R_1$: $y + 2z = 4$. $R_3 - R_2$: $y + (\\alpha - 3)z = \\beta - 9$.<br>For infinitely many solutions this must be the same equation as $y + 2z = 4$: $\\alpha - 3 = 2 \\Rightarrow \\alpha = 5$ and $\\beta - 9 = 4 \\Rightarrow \\beta = 13$.<br>$\\alpha + \\beta = 18$."
        },
        // Q23 | Matrix powers
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "correctAnswer": 250,
            "text": "Let $A = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$ and $B = A + A^2 + A^3 + \\cdots + A^{20} = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$. Then $a + b + c + d$ is equal to",
            "solution": "By induction $A^n = \\begin{pmatrix} 1 & 0 \\\\ n & 1 \\end{pmatrix}$.<br>$B = \\begin{pmatrix} 20 & 0 \\\\ 1 + 2 + \\cdots + 20 & 20 \\end{pmatrix} = \\begin{pmatrix} 20 & 0 \\\\ 210 & 20 \\end{pmatrix}$.<br>$a + b + c + d = 20 + 0 + 210 + 20 = 250$."
        },
        // Q24 | Straight lines - lattice points
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "correctAnswer": 17,
            "text": "The number of points $(x, y)$ with integer coordinates lying strictly inside the triangle with vertices $(0, 0)$, $(8, 0)$ and $(0, 6)$ is",
            "solution": "The hypotenuse joining $(8, 0)$ and $(0, 6)$ is $3x + 4y = 24$ (i.e. $6x + 8y = 48$). Interior points satisfy $x \\geq 1$, $y \\geq 1$, $3x + 4y \\lt  24$.<br>For $y = 1$: $3x \\lt  20 \\Rightarrow x = 1, \\dots, 6$ (6 points). $y = 2$: $3x \\lt  16 \\Rightarrow x = 1, \\dots, 5$ (5). $y = 3$: $3x \\lt  12 \\Rightarrow x = 1, 2, 3$ (3). $y = 4$: $3x \\lt  8 \\Rightarrow x = 1, 2$ (2). $y = 5$: $3x \\lt  4 \\Rightarrow x = 1$ (1).<br>Total $= 6 + 5 + 3 + 2 + 1 = 17$. (Pick's theorem check: $A = 24$, boundary points $= 8 + 6 + 2 = 16$, $I = 24 - 8 + 1 = 17$.)"
        },
        // Q25 | Straight lines - area of region
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "correctAnswer": 64,
            "text": "The area (in square units) of the region bounded by the curve $|x + y| + |x - y| = 8$ is",
            "solution": "For any real $x, y$: $|x + y| + |x - y| = 2\\max\\{|x|, |y|\\}$ (if $|x| \\geq |y|$ the two terms add to $2|x|$; otherwise they add to $2|y|$).<br>So the curve is $\\max\\{|x|, |y|\\} = 4$, which is the square with vertices $(\\pm4, \\pm4)$ and side $8$.<br>Area $= 8^2 = 64$."
        }
    ]
};
