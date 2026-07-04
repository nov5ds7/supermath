window.testBank = window.testBank || {};
window.testBank['test_498'] = {
    title: "Quadratic Equations",
    category: "Theory and Formulae Tests - Maths",
    uploadedAt: "2026-07-04T12:00:02Z",
    timeLimitMins: 10,
    randomizePoolSize: 35,
    questions: [
        // ================= POLYNOMIAL BASICS (L1) =================
        // 1
        {
            "type": "mcq",
            "text": "A polynomial $f(x) = a_0 + a_1x + a_2x^2 + \\dots + a_nx^n$ is defined if all indices of $x$ are:",
            "options": [
                "Non-negative integers",
                "Positive integers",
                "Real numbers",
                "Rational numbers"
            ],
            "correctAnswer": 0,
            "solution": "A polynomial requires that the exponents of $x$ must be non-negative integers."
        },
        // 2
        {
            "type": "mcq",
            "text": "The degree of a non-zero constant polynomial (e.g., $f(x) = 5$) is:",
            "options": ["0", "1", "Undefined", "$\\infty$"],
            "correctAnswer": 0,
            "solution": "A non-zero constant is a polynomial of degree zero, as it can be written as $5x^0$."
        },
        // 3
        {
            "type": "mcq",
            "text": "The general form of a quadratic polynomial is:",
            "options": [
                "$ax^2 + bx + c$, where a  &ne;  0",
                "$ax + b$, where a  &ne;  0",
                "$ax^3 + bx^2 + cx + d$, where a  &ne;  0",
                "$ax^4 + bx^3 + cx^2 + dx + e$, where a  &ne;  0"
            ],
            "correctAnswer": 0,
            "solution": "A polynomial of degree 2 is a quadratic polynomial, with general form $ax^2 + bx + c$ (a  &ne;  0)."
        },
        // 4
        {
            "type": "mcq",
            "text": "What is a monic polynomial?",
            "options": [
                "A polynomial whose leading coefficient is 1.",
                "A polynomial whose constant term is 1.",
                "A polynomial of degree 1.",
                "A polynomial with only one term."
            ],
            "correctAnswer": 0,
            "solution": "A monic polynomial is one where the highest degree term has a coefficient of 1."
        },
        // 5
        {
            "type": "mcq",
            "text": "If $ax^2 + bx + c = 0$ is satisfied by more than two distinct values of $x$, then which of the following is true?",
            "options": [
                "$a = b = c = 0$",
                "a  &ne;  0",
                "$b = 0$",
                "$c = 0$"
            ],
            "correctAnswer": 0,
            "solution": "A polynomial of degree 2 can have at most 2 roots. If it is satisfied by more than 2 distinct values, it must be an identity, meaning all coefficients are zero ($a=b=c=0$)."
        },
        // 6
        {
            "type": "mcq",
            "text": "If $ax^2 + bx + c = 0$ is an identity in $x$, then the value of $a, b, c$ must be:",
            "options": ["0, 0, 0", "1, 0, 0", "1, 1, 1", "0, 1, 0"],
            "correctAnswer": 0,
            "solution": "For an equation to be an identity (true for all $x$), the coefficients of each power of $x$ must be zero."
        },
        // 7
        {
            "type": "mcq",
            "text": "The graph of a cubic polynomial $ax^3 + bx^2 + cx + d$ (a  &ne;  0) is a curve that intersects the x-axis at a maximum of:",
            "options": ["3 points", "2 points", "1 point", "0 points"],
            "correctAnswer": 0,
            "solution": "By the Fundamental Theorem of Algebra, a cubic polynomial has at most 3 real roots, thus intersecting the x-axis at a maximum of 3 points."
        },
        // 8
        {
            "type": "mcq",
            "text": "The degree of the polynomial $f(x) = (x^2 - 1)(x^3 + 2x)$ is:",
            "options": ["5", "6", "4", "3"],
            "correctAnswer": 0,
            "solution": "Multiplying the highest powers: $x^2 \\cdot x^3 = x^5$. Therefore, the degree is 5."
        },

        // ================= VIETA'S RELATIONS & SYMMETRIC EXPRESSIONS (L2) =================
        // 9
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of the quadratic equation $ax^2 + bx + c = 0$, what is the sum of the roots ($\\alpha + \\beta$)?",
            "options": ["$\\frac{-b}{a}$", "$\\frac{b}{a}$", "$\\frac{-c}{a}$", "$\\frac{c}{a}$"],
            "correctAnswer": 0,
            "solution": "By Vieta's formulas, the sum of the roots is $\\frac{-b}{a}$."
        },
        // 10
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$, what is the product of the roots ($\\alpha \\beta$)?",
            "options": ["$\\frac{c}{a}$", "$\\frac{-c}{a}$", "$\\frac{b}{a}$", "$\\frac{-b}{a}$"],
            "correctAnswer": 0,
            "solution": "By Vieta's formulas, the product of the roots is $\\frac{c}{a}$."
        },
        // 11
        {
            "type": "mcq",
            "text": "A quadratic equation whose sum of roots is $S$ and product of roots is $P$ is given by:",
            "options": ["$x^2 - Sx + P = 0$", "$x^2 + Sx + P = 0$", "$x^2 - Sx - P = 0$", "$x^2 + Sx - P = 0$"],
            "correctAnswer": 0,
            "solution": "The standard form is $x^2 - (\\text{sum of roots})x + (\\text{product of roots}) = 0$, i.e., $x^2 - Sx + P = 0$."
        },
        // 12
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are roots of $ax^2 + bx + c = 0$, then the expression $\\alpha^2 + \\beta^2$ is equal to:",
            "options": [
                "$\\frac{b^2 - 2ac}{a^2}$",
                "$\\frac{b^2 + 2ac}{a^2}$",
                "$\\frac{b^2}{a^2}$",
                "$\\frac{b^2 - 4ac}{a^2}$"
            ],
            "correctAnswer": 0,
            "solution": "$\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\frac{b^2}{a^2} - \\frac{2c}{a} = \\frac{b^2 - 2ac}{a^2}$."
        },
        // 13
        {
            "type": "mcq",
            "text": "The value of $\\alpha^3 + \\beta^3$ for the roots of $ax^2 + bx + c = 0$ is:",
            "options": [
                "$\\frac{3abc - b^3}{a^3}$",
                "$\\frac{b^3 - 3abc}{a^3}$",
                "$\\frac{b^3 + 3abc}{a^3}$",
                "$\\frac{3abc + b^3}{a^3}$"
            ],
            "correctAnswer": 0,
            "solution": "$\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta) = \\frac{-b^3}{a^3} + \\frac{3bc}{a^2} = \\frac{3abc - b^3}{a^3}$."
        },
        // 14
        {
            "type": "mcq",
            "text": "For the roots $\\alpha$ and $\\beta$ of $ax^2 + bx + c = 0$, what is the value of $|\\alpha - \\beta|$?",
            "options": [
                "$\\frac{\\sqrt{D}}{|a|}$",
                "$\\frac{-b}{a}$",
                "$\\frac{c}{a}$",
                "$\\frac{D}{a^2}$"
            ],
            "correctAnswer": 0,
            "solution": "$|\\alpha - \\beta| = \\frac{\\sqrt{b^2 - 4ac}}{|a|} = \\frac{\\sqrt{D}}{|a|}$, where $D$ is the discriminant."
        },
        // 15
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ are roots of $ax^2+bx+c=0$, then the value of $\\frac{1}{\\alpha} + \\frac{1}{\\beta}$ is:",
            "options": ["$\\frac{-b}{c}$", "$\\frac{b}{c}$", "$\\frac{-c}{b}$", "$\\frac{c}{b}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{1}{\\alpha} + \\frac{1}{\\beta} = \\frac{\\alpha+\\beta}{\\alpha\\beta} = \\frac{-b/a}{c/a} = \\frac{-b}{c}$."
        },

        // ================= NEWTON'S FORMULAE & TRANSFORMATION (L2, L3) =================
        // 16
        {
            "type": "mcq",
            "text": "According to Newton's formula for a quadratic, the power sum $S_n = \\alpha^n + \\beta^n$ satisfies the recurrence relation:",
            "options": [
                "$S_n = (\\alpha + \\beta)S_{n-1} - \\alpha \\beta S_{n-2}$",
                "$S_n = \\alpha\\beta S_{n-1} - (\\alpha+\\beta) S_{n-2}$",
                "$S_n = S_{n-1} - S_{n-2}$",
                "$S_n = S_{n-1} \\times S_{n-2}$"
            ],
            "correctAnswer": 0,
            "solution": "Newton's formula states $S_n = (\\alpha + \\beta)S_{n-1} - \\alpha \\beta S_{n-2}$ for $n \\geq 2$."
        },
        // 17
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ are roots of $x^2 - px + q = 0$, what is the value of $S_5 = \\alpha^5 + \\beta^5$?",
            "options": [
                "$p^5 - 5p^3q + 5pq^2$",
                "$p^5 + 5p^3q + 5pq^2$",
                "$p^5 - 5p^3q - 5pq^2$",
                "$p^5 + 5p^3q - 5pq^2$"
            ],
            "correctAnswer": 0,
            "solution": "Using Newton's recurrence, $S_5 = pS_4 - qS_3$, which simplifies to $p^5 - 5p^3q + 5pq^2$."
        },
        // 18
        {
            "type": "mcq",
            "text": "If the roots of $ax^2 + bx + c = 0$ are $\\alpha$ and $\\beta$, the equation whose roots are $2\\alpha$ and $2\\beta$ is obtained by substituting $x \\rightarrow$:",
            "options": ["$\\frac{x}{2}$", "$2x$", "$x-2$", "$x+2$"],
            "correctAnswer": 0,
            "solution": "To double the roots, replace $x$ with $\\frac{x}{2}$ in the original equation."
        },
        // 19
        {
            "type": "mcq",
            "text": "If the roots of $ax^2 + bx + c = 0$ are $\\alpha$ and $\\beta$, the equation whose roots are $-\\alpha$ and $-\\beta$ is obtained by replacing $x$ with:",
            "options": ["$-x$", "$x$", "$\\frac{1}{x}$", "$x+1$"],
            "correctAnswer": 0,
            "solution": "To change signs of the roots, replace $x$ by $-x$ in the original equation."
        },
        // 20
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ are roots of $ax^2 + bx + c = 0$, the equation whose roots are $\\frac{1}{\\alpha}$ and $\\frac{1}{\\beta}$ is obtained by substituting $x$ with:",
            "options": ["$\\frac{1}{x}$", "$-x$", "$x+1$", "$x-1$"],
            "correctAnswer": 0,
            "solution": "Substitute $x \\rightarrow \\frac{1}{x}$ to invert the roots, resulting in $cx^2 + bx + a = 0$."
        },
        // 21
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ are roots of $ax^2 + bx + c = 0$, the equation whose roots are $\\alpha^2$ and $\\beta^2$ is:",
            "options": [
                "$a^2 x^2 + (2ac - b^2)x + c^2 = 0$",
                "$a^2 x^2 + (b^2 - 2ac)x - c^2 = 0$",
                "$a x^2 + b x + c = 0$",
                "$a^2 x^2 + b^2 x + c^2 = 0$"
            ],
            "correctAnswer": 0,
            "solution": "This transformation is derived from the table, resulting in $a^2 x^2 + (2ac - b^2)x + c^2 = 0$."
        },
        // 22
        {
            "type": "mcq",
            "text": "What is the transformed equation whose roots are $\\alpha + k$ and $\\beta + k$ (where $\\alpha, \\beta$ are roots of $ax^2 + bx + c = 0$)?",
            "options": [
                "$a(x - k)^2 + b(x - k) + c = 0$",
                "$a(x + k)^2 + b(x + k) + c = 0$",
                "$ax^2 + bx + c = k$",
                "$a(x - k)^2 - b(x - k) - c = 0$"
            ],
            "correctAnswer": 0,
            "solution": "Replacing $x$ with $x - k$ in the original equation shifts the roots by $+k$."
        },

        // ================= NATURE OF ROOTS (L4) =================
        // 23
        {
            "type": "mcq",
            "text": "The discriminant $D$ of the quadratic equation $ax^2 + bx + c = 0$ is given by:",
            "options": ["$b^2 - 4ac$", "$b^2 + 4ac$", "$4ac - b^2$", "$b^2 - ac$"],
            "correctAnswer": 0,
            "solution": "The discriminant is defined as $D = b^2 - 4ac$."
        },
        // 24
        {
            "type": "mcq",
            "text": "If the discriminant $D > 0$ for the quadratic equation $ax^2 + bx + c = 0$, then the roots are:",
            "options": [
                "Real and distinct",
                "Real and equal",
                "Imaginary (complex conjugates)",
                "Purely imaginary"
            ],
            "correctAnswer": 0,
            "solution": "A positive discriminant indicates two distinct real roots."
        },
        // 25
        {
            "type": "mcq",
            "text": "If the discriminant $D = 0$, the roots of the quadratic equation are:",
            "options": ["Real and equal", "Real and distinct", "Complex", "Irrational"],
            "correctAnswer": 0,
            "solution": "When $D = 0$, the square root term vanishes, resulting in a single repeated real root."
        },
        // 26
        {
            "type": "mcq",
            "text": "If the discriminant $D < 0$ for a quadratic equation with real coefficients, the roots are:",
            "options": [
                "A pair of complex conjugate roots",
                "Two distinct real roots",
                "Two equal real roots",
                "One real and one complex root"
            ],
            "correctAnswer": 0,
            "solution": "A negative discriminant implies imaginary roots, which occur as complex conjugates $p \\pm qi$."
        },
        // 27
        {
            "type": "mcq",
            "text": "If the coefficients $a, b, c$ are rational and $D$ is a perfect square of a rational number, the roots of $ax^2 + bx + c = 0$ are:",
            "options": [
                "Rational",
                "Irrational",
                "Complex",
                "Imaginary"
            ],
            "correctAnswer": 0,
            "solution": "If $D$ is a perfect rational square, the square root term is rational, thus the roots are rational."
        },
        // 28
        {
            "type": "mcq",
            "text": "If $a=1$ and $b, c$ are integers, and $D$ is a perfect square, the roots of $x^2 + bx + c = 0$ are:",
            "options": ["Integers", "Rational", "Irrational", "Complex"],
            "correctAnswer": 0,
            "solution": "If $a=1$ and $b, c \\in \\mathbb{Z}$, a perfect square discriminant implies integer roots."
        },
        // 29
        {
            "type": "mcq",
            "text": "If $D > 0$ but $D$ is not a perfect square of a rational number, the roots are of the form:",
            "options": ["$p \\pm q \\sqrt{d}$", "$p \\pm qi$", "$p/q$", "$\\pm \\sqrt{p}$"],
            "correctAnswer": 0,
            "solution": "The roots are irrational conjugates: $p + q\\sqrt{d}$ and $p - q\\sqrt{d}$."
        },

        // ================= GRAPHS, SIGNS, MAX/MIN (L5, L6) =================
        // 30
        {
            "type": "mcq",
            "text": "The graph of $y = ax^2 + bx + c$ is a parabola that opens upwards if:",
            "options": ["$a > 0$", "$a < 0$", "$b > 0$", "$b < 0$"],
            "correctAnswer": 0,
            "solution": "When the coefficient of $x^2$ ($a$) is positive, the parabola opens upwards (U-shape)."
        },
        // 31
        {
            "type": "mcq",
            "text": "The x-coordinate of the vertex of the parabola $y = ax^2 + bx + c$ is given by:",
            "options": ["$\\frac{-b}{2a}$", "$\\frac{b}{2a}$", "$\\frac{-b}{a}$", "$\\frac{-D}{4a}$"],
            "correctAnswer": 0,
            "solution": "The vertex is located at $x = \\frac{-b}{2a}$."
        },
        // 32
        {
            "type": "mcq",
            "text": "The y-coordinate of the vertex of the parabola $y = ax^2 + bx + c$ is given by:",
            "options": ["$\\frac{-D}{4a}$", "$\\frac{D}{4a}$", "$\\frac{b^2 - 4ac}{2a}$", "$\\frac{b}{2a}$"],
            "correctAnswer": 0,
            "solution": "The y-coordinate of the vertex is $\\frac{-D}{4a}$, where $D$ is the discriminant."
        },
        // 33
        {
            "type": "mcq",
            "text": "If $a > 0$ and $D < 0$ for $y = ax^2 + bx + c$, then $y$ is:",
            "options": [
                "Positive for all real $x$",
                "Negative for all real $x$",
                "Positive only between the roots",
                "Zero for all real $x$"
            ],
            "correctAnswer": 0,
            "solution": "When $a > 0$ and $D < 0$, the parabola lies entirely above the x-axis."
        },
        // 34
        {
            "type": "mcq",
            "text": "If $a < 0$ and $D < 0$ for $y = ax^2 + bx + c$, then $y$ is:",
            "options": [
                "Negative for all real $x$",
                "Positive for all real $x$",
                "Positive only between the roots",
                "Negative only between the roots"
            ],
            "correctAnswer": 0,
            "solution": "When $a < 0$ and $D < 0$, the parabola opens downward and lies entirely below the x-axis."
        },
        // 35
        {
            "type": "mcq",
            "text": "If $a > 0$, the range of $y = ax^2 + bx + c$ for $x \\in \\mathbb{R}$ is:",
            "options": [
                "$\\left[\\frac{-D}{4a}, \\infty\\right)$",
                "$\\left(-\\infty, \\frac{-D}{4a}\\right]$",
                "$\\left(\\frac{-D}{4a}, \\infty\\right)$",
                "$(-\\infty, \\infty)$"
            ],
            "correctAnswer": 0,
            "solution": "For a > 0, the vertex represents the minimum value, so the range is $\\left[\\frac{-D}{4a}, \\infty\\right)$."
        },
        // 36
        {
            "type": "mcq",
            "text": "If $a < 0$, the range of $y = ax^2 + bx + c$ for $x \\in \\mathbb{R}$ is:",
            "options": [
                "$\\left(-\\infty, \\frac{-D}{4a}\\right]$",
                "$\\left[\\frac{-D}{4a}, \\infty\\right)$",
                "$\\left(\\frac{-D}{4a}, \\infty\\right)$",
                "All real numbers"
            ],
            "correctAnswer": 0,
            "solution": "For a < 0, the vertex represents the maximum value, so the range is $\\left(-\\infty, \\frac{-D}{4a}\\right]$."
        },
        // 37
        {
            "type": "mcq",
            "text": "The axis of symmetry of the parabola $y = ax^2 + bx + c$ is:",
            "options": [
                "$x = \\frac{-b}{2a}$",
                "$y = \\frac{-b}{2a}$",
                "$x = \\frac{b}{2a}$",
                "$y = \\frac{D}{4a}$"
            ],
            "correctAnswer": 0,
            "solution": "The vertical line passing through the vertex, $x = -b/2a$, is the axis of symmetry."
        },
        // 38
        {
            "type": "mcq",
            "text": "The y-intercept of the quadratic polynomial $f(x) = ax^2 + bx + c$ is:",
            "options": ["$c$", "$b$", "$a$", "$-c$"],
            "correctAnswer": 0,
            "solution": "The y-intercept is found by setting $x=0$, giving $y = c$."
        },

        // ================= LOCATION OF ROOTS (L7) =================
        // 39
        {
            "type": "mcq",
            "text": "If $k$ lies strictly between the two real roots of $f(x) = ax^2 + bx + c$ ($a > 0$), then the condition is:",
            "options": ["$f(k) < 0$", "$f(k) > 0$", "$f(k) = 0$", "$D < 0$"],
            "correctAnswer": 0,
            "solution": "Since $a > 0$, the parabola is negative between its roots. Thus, $f(k) < 0$ indicates $k$ lies between the roots."
        },
        // 40
        {
            "type": "mcq",
            "text": "For both roots of $f(x) = ax^2 + bx + c$ ($a > 0$) to be greater than a real number $k$, the required conditions are:",
            "options": [
                "$D \\geq 0, f(k) > 0, \\frac{-b}{2a} > k$",
                "$D \\geq 0, f(k) < 0, \\frac{-b}{2a} > k$",
                "$D \\geq 0, f(k) > 0, \\frac{-b}{2a} < k$",
                "$D \\geq 0, f(k) < 0, \\frac{-b}{2a} < k$"
            ],
            "correctAnswer": 0,
            "solution": "For both roots > $k$, the discriminant must be $\\geq 0$, the parabola must be above the x-axis at $k$ ($f(k) > 0$), and the vertex must be to the right of $k$ ($\\frac{-b}{2a} > k$)."
        },
        // 41
        {
            "type": "mcq",
            "text": "If exactly one root of $f(x) = ax^2 + bx + c$ ($a > 0$) lies in the interval $(k_1, k_2)$, the condition is:",
            "options": ["$f(k_1) \\cdot f(k_2) < 0$", "$f(k_1) \\cdot f(k_2) > 0$", "$f(k_1) = 0$", "$f(k_2) = 0$"],
            "correctAnswer": 0,
            "solution": "If the function changes sign at the boundaries, there is exactly one root in the interval. $f(k_1) \\cdot f(k_2) < 0$."
        },
        // 42
        {
            "type": "mcq",
            "text": "What condition ensures that both roots of $ax^2 + bx + c = 0$ lie in the interval $(k_1, k_2)$?",
            "options": [
                "$D \\geq 0$, $f(k_1) > 0$, $f(k_2) > 0$, $k_1 < \\frac{-b}{2a} < k_2$",
                "$D \\geq 0$, $f(k_1) < 0$, $f(k_2) < 0$, $k_1 < \\frac{-b}{2a} < k_2$",
                "$f(k_1) \\cdot f(k_2) < 0$",
                "$D < 0$"
            ],
            "correctAnswer": 0,
            "solution": "This requires four conditions: real roots ($D \\geq 0$), function positive at boundaries ($f(k_1) > 0, f(k_2) > 0$), and vertex inside the interval."
        },
        // 43
        {
            "type": "mcq",
            "text": "If both roots of a quadratic equation are of opposite signs, the condition on the product of roots is:",
            "options": [
                "$\\alpha \\beta < 0$",
                "$\\alpha \\beta > 0$",
                "$\\alpha \\beta = 0$",
                "$\\alpha + \\beta = 0$"
            ],
            "correctAnswer": 0,
            "solution": "If roots have opposite signs, their product must be negative ($\\frac{c}{a} < 0$)."
        },
        // 44
        {
            "type": "mcq",
            "text": "If $x^2 + bx + c = 0$ has roots equal in magnitude and opposite in sign, the sum of the roots is zero. This implies:",
            "options": ["$b = 0$", "$c = 0$", "$b = c$", "$b = -c$"],
            "correctAnswer": 0,
            "solution": "The sum of roots is $-b$. If they are equal and opposite ($\\alpha + (-\\alpha) = 0$), then $-b = 0 \\Rightarrow b = 0$."
        },
        // 45
        {
            "type": "mcq",
            "text": "If $1$ lies between the roots of $f(x) = x^2 + bx + c = 0$, the condition is:",
            "options": ["$f(1) < 0$", "$f(1) > 0$", "$f(1) = 0$", "$D < 0$"],
            "correctAnswer": 0,
            "solution": "Since $a > 0$, $f(1) < 0$ guarantees $1$ lies between the two real roots."
        },

        // ================= PSEUDO QUADRATICS & BIQUADRATICS (L8) =================
        // 46
        {
            "type": "mcq",
            "text": "An equation of the form $ax^4 + bx^2 + c = 0$ can be solved by substituting:",
            "options": ["$t = x^2$", "$t = \\frac{1}{x}$", "$t = x^3$", "$t = x-1$"],
            "correctAnswer": 0,
            "solution": "Pseudo-quadratic equations like biquadratics are solved by substituting $t = x^2$ to form a standard quadratic."
        },
        // 47
        {
            "type": "mcq",
            "text": "If the roots of the auxiliary quadratic $t^2 + bt + c = 0$ are $t_1$ and $t_2$, then the equation $x^4 + bx^2 + c = 0$ will have $4$ real solutions if:",
            "options": [
                "$t_1 > 0$ and $t_2 > 0$",
                "$t_1 t_2 < 0$",
                "$t_1 = 0$ and $t_2 > 0$",
                "$t_1 < 0$ and $t_2 < 0$"
            ],
            "correctAnswer": 0,
            "solution": "Each positive t-root gives two real x-values ($\\pm\\sqrt{t}$). So $4$ real solutions require two distinct positive t-roots."
        },
        // 48
        {
            "type": "mcq",
            "text": "The equation $(x^2 - x)^2 - 5(x^2 - x) + 6 = 0$ is a pseudo-quadratic solved by substituting:",
            "options": ["$t = x^2 - x$", "$t = x$", "$t = x^2$", "$t = x + 1$"],
            "correctAnswer": 0,
            "solution": "Here the function $f(x) = x^2 - x$ is repeated, so $t = x^2 - x$ is the correct substitution."
        },
        // 49
        {
            "type": "mcq",
            "text": "For a pseudo-quadratic $a(f(x))^2 + b(f(x)) + c = 0$, to find the original roots, we solve $f(x) = t$ after finding the t-roots. If $t < 0$, then:",
            "options": ["No real solution exists for $x$", "$x = 0$", "$x = \\pm \\sqrt{t}$", "$x = -t$"],
            "correctAnswer": 0,
            "solution": "If the substituted value $t$ is negative, the equation $f(x) = t$ yields no real solution for $x$."
        },
        // 50
        {
            "type": "mcq",
            "text": "The equation $x^2 + 2x = \\sqrt{x^2 + 2x - 2}$ can be simplified into a quadratic by first substituting:",
            "options": ["$t = x^2 + 2x - 2$", "$t = x^2 + 2x$", "$t = x$", "$t = \\sqrt{x}$"],
            "correctAnswer": 0,
            "solution": "If we set $t = x^2 + 2x - 2$, the equation becomes $t + 2 = \\sqrt{t}$, which turns into a quadratic after squaring."
        },

        // ================= COMMON ROOTS (L9) =================
        // 51
        {
            "type": "mcq",
            "text": "If two quadratic equations $a_1 x^2 + b_1 x + c_1 = 0$ and $a_2 x^2 + b_2 x + c_2 = 0$ have both roots common, the condition is:",
            "options": [
                "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$",
                "$a_1 b_2 = a_2 b_1$",
                "$b_1 c_2 = b_2 c_1$",
                "$a_1 c_2 = a_2 c_1$"
            ],
            "correctAnswer": 0,
            "solution": "If they share both roots, they are identical equations, meaning their coefficients must be proportional."
        },
        // 52
        {
            "type": "mcq",
            "text": "The condition for one common root of the equations $a_1 x^2 + b_1 x + c_1 = 0$ and $a_2 x^2 + b_2 x + c_2 = 0$ is:",
            "options": [
                "$(a_1 c_2 - a_2 c_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$",
                "$a_1 b_2 = a_2 b_1$",
                "$c_1 b_2 = c_2 b_1$",
                "$a_1 c_2 = a_2 c_1$"
            ],
            "correctAnswer": 0,
            "solution": "By eliminating the common root $\\alpha$, the condition for one common root is $(a_1 c_2 - a_2 c_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$."
        },
        // 53
        {
            "type": "mcq",
            "text": "If the equations $x^2 + ax + b = 0$ and $x^2 + bx + a = 0$ (a  &ne;  b) have a common root, then the value of the common root is:",
            "options": ["1", "0", "-1", "a"],
            "correctAnswer": 0,
            "solution": "Subtracting the equations gives $(a-b)x + (b-a) = 0 \\Rightarrow x = 1$."
        },
        // 54
        {
            "type": "mcq",
            "text": "If two quadratic equations have real coefficients and share one complex root, then they:",
            "options": [
                "Must also share the conjugate complex root (have both roots common)",
                "Have no other common roots",
                "Share only one root",
                "Do not have any common root"
            ],
            "correctAnswer": 0,
            "solution": "Complex roots for real polynomials occur in conjugate pairs. If they share one complex root, they automatically share its conjugate, meaning both roots are common."
        },

        // ================= POLYNOMIAL GRAPHS & CALCULUS (L10) =================
        // 55
        {
            "type": "mcq",
            "text": "The end behavior of a polynomial is determined by which two factors?",
            "options": [
                "The degree and the leading coefficient",
                "The constant term and the degree",
                "The x-intercepts and the y-intercept",
                "The coefficient of $x$ and the constant term"
            ],
            "correctAnswer": 0,
            "solution": "The leading term ($a_n x^n$) dictates the end behavior, driven by the degree $n$ and the sign of $a_n$."
        },
        // 56
        {
            "type": "mcq",
            "text": "For an odd-degree polynomial with a positive leading coefficient, as $x \\rightarrow +\\infty$ and $x \\rightarrow -\\infty$, the values of $y$ tend to:",
            "options": [
                "$y \\rightarrow +\\infty$ and $y \\rightarrow -\\infty$ respectively",
                "$y \\rightarrow -\\infty$ and $y \\rightarrow +\\infty$ respectively",
                "$y \\rightarrow +\\infty$ in both cases",
                "$y \\rightarrow -\\infty$ in both cases"
            ],
            "correctAnswer": 0,
            "solution": "Odd degree, positive leading coefficient falls to $-\\infty$ on the left and rises to $+\\infty$ on the right."
        },
        // 57
        {
            "type": "mcq",
            "text": "For an even-degree polynomial with a negative leading coefficient, the ends of the graph:",
            "options": [
                "Point downwards on both sides",
                "Point upwards on both sides",
                "Point upwards on the left and downwards on the right",
                "Point downwards on the left and upwards on the right"
            ],
            "correctAnswer": 0,
            "solution": "Even degree, negative leading coefficient opens downwards on both ends (like an inverted U)."
        },
        // 58
        {
            "type": "mcq",
            "text": "To find the increasing and decreasing intervals of a polynomial, the first step is to:",
            "options": [
                "Find $f'(x)$ and solve for critical points where $f'(x) = 0$",
                "Find the x-intercepts",
                "Find the y-intercept",
                "Compute the second derivative"
            ],
            "correctAnswer": 0,
            "solution": "Monotonicity is determined by the sign of the first derivative, so we compute $f'(x)$ and find where it is zero."
        },
        // 59
        {
            "type": "mcq",
            "text": "If the first derivative $f'(x)$ changes sign from positive to negative as $x$ passes through a critical point $c$, then $f(x)$ has a:",
            "options": [
                "Local maximum at $c$",
                "Local minimum at $c$",
                "Point of inflection at $c$",
                "No extreme point at $c$"
            ],
            "correctAnswer": 0,
            "solution": "Using the first derivative test, a change from $+$ to $-$ indicates a local maximum."
        },
        // 60
        {
            "type": "mcq",
            "text": "If $f'(c) = 0$ and $f''(c) > 0$, the function has a:",
            "options": [
                "Local minimum at $x = c$",
                "Local maximum at $x = c$",
                "Point of inflection at $x = c$",
                "No extreme point"
            ],
            "correctAnswer": 0,
            "solution": "By the second derivative test, a positive second derivative ($f''(c) > 0$) indicates a local minimum."
        },
        // 61
        {
            "type": "mcq",
            "text": "If $f'(c) = 0$ and $f''(c) < 0$, the function has a:",
            "options": [
                "Local maximum at $x = c$",
                "Local minimum at $x = c$",
                "Point of inflection at $x = c$",
                "Vertical tangent"
            ],
            "correctAnswer": 0,
            "solution": "A negative second derivative ($f''(c) < 0$) indicates a local maximum."
        },
        // 62
        {
            "type": "mcq",
            "text": "If $f'(x)$ does not change sign at a critical point $c$, then $x=c$ is a:",
            "options": [
                "Point of inflection",
                "Local maximum",
                "Local minimum",
                "Global maximum"
            ],
            "correctAnswer": 0,
            "solution": "If the derivative does not change sign, the critical point is a horizontal point of inflection."
        },
        // 63
        {
            "type": "mcq",
            "text": "To find the number of real roots of $f(x) = k$ where $f(x)$ is a cubic, you must:",
            "options": [
                "Find the local maxima and minima and see if $k$ lies between or outside them",
                "Set $f(x) = 0$",
                "Find the y-intercept",
                "Find the vertex"
            ],
            "correctAnswer": 0,
            "solution": "The line $y = k$ will intersect the cubic graph based on whether $k$ is between, equal to, or outside the local extrema."
        },
        // 64
        {
            "type": "mcq",
            "text": "For the cubic $f(x) = x^3 - 3x^2 + 2$, the local minimum and maximum values are $-2$ and $2$. For the equation $f(x) = k$ to have exactly 1 real root, $k$ must be:",
            "options": ["$k > 2$ or $k < -2$", "$-2 < k < 2$", "$k = 2$", "$k = -2$"],
            "correctAnswer": 0,
            "solution": "If the line $y = k$ is strictly above the local max or strictly below the local min, it intersects the graph exactly once."
        },
        // 65
        {
            "type": "mcq",
            "text": "For a cubic polynomial, if a horizontal line $y = k$ passes exactly through the local maximum or minimum, the total number of distinct real roots is:",
            "options": ["2 (one repeated root)", "3", "1", "0"],
            "correctAnswer": 0,
            "solution": "If the line touches the local extremum, it intersects at that point (double root) and crosses once more elsewhere, totaling 2 distinct real roots."
        },
        // 66
        {
            "type": "mcq",
            "text": "What is the first step to sketch the graph of a polynomial?",
            "options": [
                "Identify the degree and leading coefficient to determine end behavior",
                "Find the derivative",
                "Find the x-intercepts",
                "Find the y-intercepts"
            ],
            "correctAnswer": 0,
            "solution": "The end behavior provides the overall framework for the graph, so identifying the degree and leading coefficient is the first step."
        },
        // 67
        {
            "type": "mcq",
            "text": "For a rational function like $y = \\frac{ax^2 + bx + c}{dx^2 + ex + f}$, if the numerator and denominator are both degree 2, the equation can be cross-multiplied to form:",
            "options": [
                "A quadratic in $x$ that allows finding the range of $y$",
                "A linear equation",
                "A cubic equation",
                "A biquadratic equation"
            ],
            "correctAnswer": 0,
            "solution": "Cross-multiplying $y = \\frac{P(x)}{Q(x)}$ yields $(dy - a)x^2 + (ey - b)x + (fy - c) = 0$. For $x$ to be real, the discriminant in $x$ must be $\\geq 0$, which provides the range of $y$."
        },
        // 68
        {
            "type": "mcq",
            "text": "To find the maximum or minimum value of a quadratic function $f(x)$ over a closed interval $[k_1, k_2]$, what must be evaluated?",
            "options": [
                "The endpoints $f(k_1)$, $f(k_2)$ and the vertex if it lies inside the interval",
                "Only the vertex",
                "Only the endpoints",
                "The x-intercepts"
            ],
            "correctAnswer": 0,
            "solution": "For restricted domains, evaluate the function at the endpoints and at the vertex (only if it lies within the interval) to determine the range."
        },
        // 69
        {
            "type": "mcq",
            "text": "If the roots of a cubic $ax^3 + bx^2 + cx + d = 0$ are $\\alpha, \\beta, \\gamma$, the sum of the roots taken two at a time ($\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha$) is equal to:",
            "options": ["$\\frac{c}{a}$", "$\\frac{-b}{a}$", "$\\frac{-d}{a}$", "$\\frac{b}{a}$"],
            "correctAnswer": 0,
            "solution": "By Vieta's formulas for a cubic, $\\alpha\\beta + \\beta\\gamma + \\gamma\\alpha = \\frac{c}{a}$."
        },
        // 70
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta, \\gamma$ are roots of a cubic $ax^3 + bx^2 + cx + d = 0$, the product of all three roots ($\\alpha\\beta\\gamma$) is:",
            "options": ["$\\frac{-d}{a}$", "$\\frac{d}{a}$", "$\\frac{-c}{a}$", "$\\frac{c}{a}$"],
            "correctAnswer": 0,
            "solution": "By Vieta's formulas for a cubic, $\\alpha\\beta\\gamma = \\frac{-d}{a}$."
        },
        // 71
        {
            "type": "mcq",
            "text": "If the roots of a quartic equation $ax^4 + bx^3 + cx^2 + dx + e = 0$ are $\\alpha, \\beta, \\gamma, \\delta$, the sum of the roots taken three at a time ($\\Sigma\\alpha\\beta\\gamma$) is:",
            "options": ["$\\frac{-d}{a}$", "$\\frac{d}{a}$", "$\\frac{c}{a}$", "$\\frac{-c}{a}$"],
            "correctAnswer": 0,
            "solution": "For a quartic, $\\Sigma\\alpha\\beta\\gamma = \\frac{-d}{a}$."
        }
    ]
};