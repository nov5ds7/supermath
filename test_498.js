window.testBank = window.testBank || {};
window.testBank['test_498'] = {
    title: "Quadratic Equations",
    category: "Theory and Formulae Tests - Maths",
    uploadedAt: "2026-07-07T18:55:00Z",
    timeLimitMins: 10,
    randomizePoolSize: 40,
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
        },
        // ================= LECTURE 1: POLYNOMIAL BASICS =================
        {
            "type": "mcq",
            "text": "An algebraic expression $f(x) = a_0 + a_1x + a_2x^2 + \\dots + a_nx^n$ is called a polynomial in $x$ provided that all indices of $x$ are:",
            "options": [
                "Positive integers",
                "Non-negative integers",
                "Real numbers",
                "Rational numbers"
            ],
            "correctAnswer": 1,
            "solution": "By definition, a polynomial requires all exponents (indices) of the variable to be non-negative integers (0, 1, 2, ...)."
        },
        {
            "type": "mcq",
            "text": "In the polynomial $f(x) = a_0 + a_1x + a_2x^2 + \\dots + a_nx^n$, the term $a_n$ is called the leading coefficient. For the polynomial to have a degree of $n$, what must be true about $a_n$?",
            "options": [
                "$a_n > 0$",
                "$a_n = 1$",
                "$a_n$ &ne; 0",
                "$a_n$ must be an integer"
            ],
            "correctAnswer": 2,
            "solution": "The leading coefficient $a_n$ must be non-zero ($a_n$ &ne; 0) for the polynomial to maintain its degree $n$."
        },
        {
            "type": "mcq",
            "text": "A polynomial of the form $f(x) = a$ where a &ne; 0 is classified as a:",
            "options": [
                "Linear polynomial",
                "Monic polynomial",
                "Zero-degree polynomial",
                "Undefined polynomial"
            ],
            "correctAnswer": 2,
            "solution": "Any non-zero constant $a$ is a polynomial of degree zero because it can be written as $f(x) = ax^0$."
        },
        {
            "type": "mcq",
            "text": "Which of the following represents the general form of a biquadratic (or quartic) polynomial?",
            "options": [
                "$ax^2 + bx + c$, where a &ne; 0",
                "$ax^3 + bx^2 + cx + d$, where a &ne; 0",
                "$ax^4 + bx^3 + cx^2 + dx + e$, where a &ne; 0",
                "$ax^5 + bx^4 + cx^3 + dx^2 + e$, where a &ne; 0"
            ],
            "correctAnswer": 2,
            "solution": "A biquadratic (quartic) polynomial is a polynomial of degree four, having the general form $ax^4 + bx^3 + cx^2 + dx + e$."
        },
        {
            "type": "mcq",
            "text": "A monic polynomial is defined as a polynomial in which:",
            "options": [
                "The constant term is exactly 1",
                "All coefficients are equal to 1",
                "The degree of the polynomial is 1",
                "The leading coefficient is equal to 1"
            ],
            "correctAnswer": 3,
            "solution": "A monic polynomial has its highest-degree term's coefficient (leading coefficient) equal to 1."
        },
        {
            "type": "mcq",
            "text": "According to the fundamental identity theorem, if the quadratic equation $ax^2 + bx + c = 0$ is satisfied by more than two distinct values of $x$, then:",
            "options": [
                "$a = 0$ and $b = 0$, but c &ne; 0",
                "$a = b = c = 0$",
                "$D > 0$",
                "The roots must be complex"
            ],
            "correctAnswer": 1,
            "solution": "A quadratic equation can have at most two roots. If it is satisfied by more than two values, it is identically zero for all $x$, meaning $a = b = c = 0$."
        },
        {
            "type": "mcq",
            "text": "Based on the decision tree for classifying $ax^2 + bx + c = 0$, what does the equation represent if $a = 0, b = 0$, and c &ne; 0?",
            "options": [
                "A genuine quadratic with at most 2 roots",
                "A linear equation with exactly 1 root",
                "An identity true for all real $x$",
                "A contradiction with no solution"
            ],
            "correctAnswer": 3,
            "solution": "If $a = 0$ and $b = 0$, the equation reduces to $c = 0$. Since c &ne; 0, this is a logical contradiction and yields no solution."
        },

        // ================= LECTURE 2: RELATION OF ROOTS AND COEFFICIENTS =================
        {
            "type": "mcq",
            "text": "By Vieta's formulas, if $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$, the product of the roots ($\\alpha\\beta$) is:",
            "options": [
                "$\\frac{-b}{a}$",
                "$\\frac{c}{a}$",
                "$\\frac{-c}{a}$",
                "$\\frac{b}{a}$"
            ],
            "correctAnswer": 1,
            "solution": "Comparing coefficients of $ax^2 + bx + c = a(x - \\alpha)(x - \\beta)$ gives the product of roots $\\alpha\\beta = \\frac{c}{a}$."
        },
        {
            "type": "mcq",
            "text": "To build a quadratic equation from its known roots $\\alpha$ and $\\beta$, where $S = \\alpha + \\beta$ and $P = \\alpha\\beta$, the correct form is:",
            "options": [
                "$x^2 + Sx + P = 0$",
                "$x^2 - Px + S = 0$",
                "$x^2 - Sx + P = 0$",
                "$x^2 + Px - S = 0$"
            ],
            "correctAnswer": 2,
            "solution": "The generic construction of a monic quadratic from its roots is $x^2 - (\\text{Sum})x + (\\text{Product}) = 0$, which is $x^2 - Sx + P = 0$."
        },
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$, the symmetric expression $\\alpha^2 + \\beta^2$ evaluates to:",
            "options": [
                "$\\frac{b^2 + 2ac}{a^2}$",
                "$\\frac{b^2 - 4ac}{a^2}$",
                "$\\frac{b^2 - 2ac}{a^2}$",
                "$\\frac{b^2}{a^2}$"
            ],
            "correctAnswer": 2,
            "solution": "$\\alpha^2 + \\beta^2 = (\\alpha + \\beta)^2 - 2\\alpha\\beta = \\left(\\frac{-b}{a}\\right)^2 - 2\\left(\\frac{c}{a}\\right) = \\frac{b^2 - 2ac}{a^2}$."
        },
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$, the symmetric expression $\\alpha^3 + \\beta^3$ evaluates to:",
            "options": [
                "$\\frac{b^3 - 3abc}{a^3}$",
                "$\\frac{3abc - b^3}{a^3}$",
                "$\\frac{-b^3 - 3abc}{a^3}$",
                "$\\frac{3abc + b^3}{a^3}$"
            ],
            "correctAnswer": 1,
            "solution": "$\\alpha^3 + \\beta^3 = (\\alpha + \\beta)^3 - 3\\alpha\\beta(\\alpha + \\beta) = \\frac{-b^3}{a^3} - 3\\left(\\frac{c}{a}\\right)\\left(\\frac{-b}{a}\\right) = \\frac{3abc - b^3}{a^3}$."
        },
        {
            "type": "mcq",
            "text": "For the roots $\\alpha$ and $\\beta$ of $ax^2 + bx + c = 0$, the absolute difference $|\\alpha - \\beta|$ is given by:",
            "options": [
                "$\\frac{D}{a}$",
                "$\\frac{\\sqrt{D}}{|a|}$",
                "$\\frac{D}{a^2}$",
                "$\\frac{\\sqrt{D}}{a^2}$"
            ],
            "correctAnswer": 1,
            "solution": "$|\\alpha - \\beta| = \\sqrt{(\\alpha + \\beta)^2 - 4\\alpha\\beta} = \\sqrt{\\frac{b^2}{a^2} - \\frac{4c}{a}} = \\frac{\\sqrt{b^2 - 4ac}}{|a|} = \\frac{\\sqrt{D}}{|a|}$."
        },
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of $ax^2 + bx + c = 0$, the expression $\\frac{1}{\\alpha^2} + \\frac{1}{\\beta^2}$ simplifies to:",
            "options": [
                "$\\frac{b^2 - 2ac}{c^2}$",
                "$\\frac{b^2 - 4ac}{c^2}$",
                "$\\frac{b^2 - 2ac}{a^2}$",
                "$\\frac{c^2 - 2ab}{a^2}$"
            ],
            "correctAnswer": 0,
            "solution": "$\\frac{1}{\\alpha^2} + \\frac{1}{\\beta^2} = \\frac{\\alpha^2 + \\beta^2}{\\alpha^2\\beta^2} = \\frac{(b^2 - 2ac)/a^2}{(c/a)^2} = \\frac{b^2 - 2ac}{c^2}$."
        },
        {
            "type": "mcq",
            "text": "Newton's Formula defines power sums as $S_n = \\alpha^n + \\beta^n$. The general recurrence relation for $ax^2 + bx + c = 0$ is:",
            "options": [
                "$a S_n - b S_{n-1} + c S_{n-2} = 0$",
                "$a S_n + b S_{n-1} + c S_{n-2} = 0$",
                "$S_n = S_{n-1} + S_{n-2}$",
                "$a S_n + b S_{n-2} + c S_{n-1} = 0$"
            ],
            "correctAnswer": 1,
            "solution": "Multiplying the base equation by roots raised to $n-2$ and summing yields the recurrence $a S_n + b S_{n-1} + c S_{n-2} = 0$."
        },
        {
            "type": "mcq",
            "text": "In Newton's power sum formula $S_n = \\alpha^n + \\beta^n$, what is the exact value of $S_0$?",
            "options": [
                "0",
                "1",
                "2",
                "$\\frac{-b}{a}$"
            ],
            "correctAnswer": 2,
            "solution": "For $n = 0$, $S_0 = \\alpha^0 + \\beta^0$. Assuming non-zero roots, $1 + 1 = 2$."
        },
        {
            "type": "mcq",
            "text": "Using Newton's Formula for $ax^2 + bx + c = 0$, the value of $S_4 = \\alpha^4 + \\beta^4$ is:",
            "options": [
                "$\\frac{b^4 - 4ab^2c + 2a^2c^2}{a^4}$",
                "$\\frac{b^4 + 4ab^2c + 2a^2c^2}{a^4}$",
                "$\\frac{b^4 - 4ab^2c - 2a^2c^2}{a^4}$",
                "$\\frac{b^4 - 2a^2c^2}{a^4}$"
            ],
            "correctAnswer": 0,
            "solution": "Using $S_4 = p S_3 - q S_2$ where $p = -b/a$ and $q = c/a$, or squaring $\\alpha^2 + \\beta^2$, yields $\\frac{b^4 - 4ab^2c + 2a^2c^2}{a^4}$."
        },
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are roots of $ax^2 + bx + c = 0$, to find the equation whose roots are $k\\alpha$ and $k\\beta$, one must apply the transformation:",
            "options": [
                "$x \\rightarrow x - k$",
                "$x \\rightarrow kx$",
                "$x \\rightarrow \\frac{x}{k}$",
                "$x \\rightarrow x + k$"
            ],
            "correctAnswer": 2,
            "solution": "Let the new root be $y = k\\alpha$. Then $\\alpha = y/k$. Substituting back into the original equation means replacing $x$ with $x/k$."
        },
        {
            "type": "mcq",
            "text": "To find the equation whose roots are $\\frac{1}{\\alpha}$ and $\\frac{1}{\\beta}$ (where $\\alpha, \\beta$ are roots of $ax^2 + bx + c = 0$), substitute $x \\rightarrow \\frac{1}{x}$. The resulting equation is:",
            "options": [
                "$ax^2 + bx + c = 0$",
                "$cx^2 + bx + a = 0$",
                "$ax^2 - bx + c = 0$",
                "$cx^2 - bx + a = 0$"
            ],
            "correctAnswer": 1,
            "solution": "Substituting $1/x$ gives $a(1/x)^2 + b(1/x) + c = 0$. Multiplying by $x^2$ reverses the coefficients to $cx^2 + bx + a = 0$."
        },
        {
            "type": "mcq",
            "text": "If the roots of $ax^2 + bx + c = 0$ are $\\alpha$ and $\\beta$, the equation whose roots are $\\frac{\\alpha + 1}{\\alpha - 1}$ and $\\frac{\\beta + 1}{\\beta - 1}$ is found by substituting $x \\rightarrow$:",
            "options": [
                "$\\frac{x - 1}{x + 1}$",
                "$\\frac{x + 1}{x - 1}$",
                "$\\frac{1}{x}$",
                "$x - 1$"
            ],
            "correctAnswer": 1,
            "solution": "Let $y = \\frac{\\alpha+1}{\\alpha-1}$. Solving for $\\alpha$ gives $\\alpha = \\frac{y+1}{y-1}$. Thus, the substitution is $x \\rightarrow \\frac{x+1}{x-1}$."
        },

        // ================= LECTURE 3: THEORY OF EQUATIONS =================
        {
            "type": "mcq",
            "text": "For a cubic equation $ax^3 + bx^2 + cx + d = 0$ with roots $\\alpha, \\beta, \\gamma$, the sum of the products of roots taken two at a time ($\\sum \\alpha\\beta$) is:",
            "options": [
                "$\\frac{-b}{a}$",
                "$\\frac{c}{a}$",
                "$\\frac{-c}{a}$",
                "$\\frac{-d}{a}$"
            ],
            "correctAnswer": 1,
            "solution": "By Vieta's relations for higher degrees, $\\sum \\alpha_i \\alpha_j = (-1)^2 \\frac{a_{n-2}}{a_n} = \\frac{c}{a}$."
        },
        {
            "type": "mcq",
            "text": "For a quartic equation $ax^4 + bx^3 + cx^2 + dx + e = 0$, the product of all four roots ($\\alpha\\beta\\gamma\\delta$) is:",
            "options": [
                "$\\frac{-e}{a}$",
                "$\\frac{e}{a}$",
                "$\\frac{d}{a}$",
                "$\\frac{-d}{a}$"
            ],
            "correctAnswer": 1,
            "solution": "By Vieta's relations, the product of all roots is $(-1)^n \\frac{a_0}{a_n}$. Since $n=4$ (even), the product is $\\frac{e}{a}$."
        },
        {
            "type": "mcq",
            "text": "For a generic polynomial $P(x) = a_nx^n + \\dots + a_0 = 0$, the sum of the products of triplets of roots ($\\sum \\alpha_i \\alpha_j \\alpha_k$) is:",
            "options": [
                "$\\frac{-a_{n-3}}{a_n}$",
                "$\\frac{a_{n-3}}{a_n}$",
                "$\\frac{-a_{n-2}}{a_n}$",
                "$\\frac{a_{n-2}}{a_n}$"
            ],
            "correctAnswer": 0,
            "solution": "The sum of products of triplets involves three roots, so the sign is $(-1)^3 = -1$. The ratio is $-a_{n-3} / a_n$."
        },

        // ================= LECTURE 4: NATURE OF ROOTS =================
        {
            "type": "mcq",
            "text": "The roots of the quadratic equation $ax^2 + bx + c = 0$ are given by the formula:",
            "options": [
                "$x = \\frac{b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
                "$x = \\frac{-b \\pm \\sqrt{b^2 + 4ac}}{2a}$",
                "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$",
                "$x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{a}$"
            ],
            "correctAnswer": 2,
            "solution": "Completing the square yields the standard quadratic formula $x = \\frac{-b \\pm \\sqrt{b^2 - 4ac}}{2a}$."
        },
        {
            "type": "mcq",
            "text": "If the discriminant $D = 0$ for a quadratic equation, what is the exact value of the single repeated real root?",
            "options": [
                "$\\frac{b}{2a}$",
                "$\\frac{-b}{2a}$",
                "$\\frac{-b}{a}$",
                "$\\frac{c}{a}$"
            ],
            "correctAnswer": 1,
            "solution": "When $D = 0$, the square root vanishes from the quadratic formula, leaving a single repeated root $\\alpha = \\beta = \\frac{-b}{2a}$."
        },
        {
            "type": "mcq",
            "text": "If $a, b, c \\in \\mathbb{Q}$ and the discriminant $D > 0$ is a perfect square of a rational number, then the roots of the quadratic equation are:",
            "options": [
                "Rational",
                "Irrational",
                "Complex conjugates",
                "Equal"
            ],
            "correctAnswer": 0,
            "solution": "If $D$ is a perfect rational square, its square root is rational, so the entire quadratic formula evaluates to a rational number."
        },
        {
            "type": "mcq",
            "text": "If $a, b, c \\in \\mathbb{Q}$ and the discriminant $D > 0$ is NOT a perfect square of a rational number, the roots take the form $p \\pm q\\sqrt{d}$. These roots are:",
            "options": [
                "Rational",
                "Irrational conjugates",
                "Complex conjugates",
                "Transcendental"
            ],
            "correctAnswer": 1,
            "solution": "The presence of an un-simplifiable square root means the roots are irrational. They always appear in conjugate pairs $p \\pm q\\sqrt{d}$."
        },
        {
            "type": "mcq",
            "text": "If the leading coefficient $a = 1$, the remaining coefficients $b, c \\in \\mathbb{I}$ (integers), and $D$ is a perfect square, what can be concluded about the roots?",
            "options": [
                "The roots are irrational",
                "The roots are purely imaginary",
                "The roots are integers",
                "The roots are fractions but not integers"
            ],
            "correctAnswer": 2,
            "solution": "If a monic quadratic with integer coefficients has a perfect square discriminant, its rational roots must be integers."
        },

        // ================= LECTURE 5: GRAPH AND SIGN OF QUADRATIC =================
        {
            "type": "mcq",
            "text": "The graph of $y = ax^2 + bx + c$ represents a parabola. The direction the parabola opens is determined entirely by:",
            "options": [
                "The sign of $b$",
                "The sign of $c$",
                "The sign of $a$",
                "The discriminant $D$"
            ],
            "correctAnswer": 2,
            "solution": "If $a > 0$, the parabola opens upwards (U-shape). If $a < 0$, it opens downwards (inverted U-shape)."
        },
        {
            "type": "mcq",
            "text": "The coordinates of the vertex of the parabola $y = ax^2 + bx + c$ are:",
            "options": [
                "$(\\frac{b}{2a}, \\frac{D}{4a})$",
                "$(\\frac{-b}{2a}, \\frac{-D}{4a})$",
                "$(\\frac{-b}{a}, \\frac{-D}{2a})$",
                "$(\\frac{-b}{2a}, \\frac{D}{4a})$"
            ],
            "correctAnswer": 1,
            "solution": "Completing the square gives $y = a(x + b/2a)^2 - D/4a$, putting the vertex at $(-b/2a, -D/4a)$."
        },
        {
            "type": "mcq",
            "text": "The axis of symmetry for the parabola $y = ax^2 + bx + c$ is the vertical line defined by:",
            "options": [
                "$y = \\frac{-D}{4a}$",
                "$x = \\frac{b}{2a}$",
                "$x = \\frac{-b}{2a}$",
                "$x = \\frac{-b}{a}$"
            ],
            "correctAnswer": 2,
            "solution": "The axis of symmetry passes straight through the vertex, dividing the parabola into mirror images at $x = -b/2a$."
        },
        {
            "type": "mcq",
            "text": "Changing the coefficient $c$ in the quadratic expression $ax^2 + bx + c$ visually affects the graph by:",
            "options": [
                "Making the parabola wider or narrower",
                "Shifting the axis of symmetry horizontally",
                "Reflecting the parabola across the x-axis",
                "Shifting the parabola vertically without changing its shape"
            ],
            "correctAnswer": 3,
            "solution": "The constant $c$ is the y-intercept. Changing it simply translates the entire curve straight up or down."
        },
        {
            "type": "mcq",
            "text": "Identify the conditions for $a$ and $D$ for the quadratic function $y = ax^2 + bx + c$ represented by the following graph:<br><br><svg viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='200' x2='350' y2='200' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,50 Q 200,350 300,50' fill='none' stroke='blue' stroke-width='2'/><circle cx='142' cy='200' r='4'/><circle cx='258' cy='200' r='4'/></svg>",
            "options": [
                "$a > 0, D > 0$",
                "$a > 0, D < 0$",
                "$a < 0, D > 0$",
                "$a > 0, D = 0$"
            ],
            "correctAnswer": 0,
            "solution": "The parabola opens upwards, meaning $a > 0$. It crosses the x-axis twice, meaning there are two distinct real roots, so $D > 0$."
        },
        {
            "type": "mcq",
            "text": "Which of the following conditions correctly describes the parabola shown below?<br><br><svg viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='100' x2='350' y2='100' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,280 Q 200,120 300,280' fill='none' stroke='red' stroke-width='2'/></svg>",
            "options": [
                "$a > 0, D < 0$",
                "$a < 0, D > 0$",
                "$a < 0, D < 0$",
                "$a < 0, D = 0$"
            ],
            "correctAnswer": 2,
            "solution": "The parabola opens downwards ($a < 0$) and lies entirely below the x-axis without touching it, meaning there are no real roots ($D < 0$)."
        },
        {
            "type": "mcq",
            "text": "Identify the conditions for $a$ and $D$ for the quadratic function $y = ax^2 + bx + c$ represented by the following graph:<br><br><svg viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='250' x2='350' y2='250' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,50 Q 200,250 300,50' fill='none' stroke='blue' stroke-width='2'/><circle cx='200' cy='250' r='4'/></svg>",
            "options": [
                "$a < 0, D = 0$",
                "$a > 0, D = 0$",
                "$a > 0, D < 0$",
                "$a > 0, D > 0$"
            ],
            "correctAnswer": 1,
            "solution": "The parabola opens upwards ($a > 0$) and exactly touches the x-axis at one point, meaning it has a single repeated root ($D = 0$)."
        },
        {
            "type": "mcq",
            "text": "If $a < 0$ and $D > 0$, the quadratic expression $ax^2 + bx + c$ evaluates to a positive number:",
            "options": [
                "For all real values of $x$",
                "For no real values of $x$",
                "Only for $x$ outside the interval of the roots",
                "Only for $x$ strictly between the two roots"
            ],
            "correctAnswer": 3,
            "solution": "When $a < 0$ and $D > 0$, the parabola opens downwards and crosses the x-axis twice. It bulges above the x-axis solely between the two roots $\\alpha$ and $\\beta$."
        },
        {
            "type": "mcq",
            "text": "The test for definiteness states that $ax^2 + bx + c > 0$ for all real $x$ if and only if:",
            "options": [
                "$a > 0$ and $D > 0$",
                "$a < 0$ and $D < 0$",
                "$a > 0$ and $D < 0$",
                "$a > 0$ and $D \\le 0$"
            ],
            "correctAnswer": 2,
            "solution": "For the expression to be strictly positive everywhere, the parabola must open upwards ($a > 0$) and float entirely above the x-axis without crossing it ($D < 0$)."
        },
        {
            "type": "mcq",
            "text": "The test for definiteness states that $ax^2 + bx + c < 0$ for all real $x$ if and only if:",
            "options": [
                "$a < 0$ and $D < 0$",
                "$a > 0$ and $D < 0$",
                "$a < 0$ and $D > 0$",
                "$a < 0$ and $D \\le 0$"
            ],
            "correctAnswer": 0,
            "solution": "For the expression to be strictly negative everywhere, the parabola must open downwards ($a < 0$) and sit entirely below the x-axis without crossing it ($D < 0$)."
        },

        // ================= LECTURE 6 & 7: RANGE OF EXPRESSIONS =================
        {
            "type": "mcq",
            "text": "For the quadratic function $y = ax^2 + bx + c$, if $a > 0$ and $x \\in \\mathbb{R}$, what is the range of $y$?",
            "options": [
                "$\\left(-\\infty, \\frac{-D}{4a}\\right]$",
                "$\\left[\\frac{-D}{4a}, \\infty\\right)$",
                "$\\left[\\frac{D}{4a}, \\infty\\right)$",
                "$\\left(-\\infty, \\infty\\right)$"
            ],
            "correctAnswer": 1,
            "solution": "Because $a > 0$, the parabola has a minimum at the vertex. The minimum y-value is $-D/4a$, and it grows to infinity. Thus, the range is $[-D/4a, \\infty)$."
        },
        {
            "type": "mcq",
            "text": "For the quadratic function $y = ax^2 + bx + c$, if $a < 0$ and $x \\in \\mathbb{R}$, what is the range of $y$?",
            "options": [
                "$\\left[\\frac{-D}{4a}, \\infty\\right)$",
                "$\\left(-\\infty, \\infty\\right)$",
                "$\\left(-\\infty, \\frac{-D}{4a}\\right]$",
                "$\\left(-\\infty, \\frac{D}{4a}\\right]$"
            ],
            "correctAnswer": 2,
            "solution": "Because $a < 0$, the parabola has a maximum at the vertex. The maximum y-value is $-D/4a$, and it falls to negative infinity. Thus, the range is $(-\\infty, -D/4a]$."
        },
        {
            "type": "mcq",
            "text": "If we need to find the range of $f(x) = ax^2 + bx + c$ ($a > 0$) strictly on the closed interval $[k_1, k_2]$, and the vertex $x = -b/2a$ lies inside this interval, what are the minimum and maximum values?",
            "options": [
                "Min = $f(k_1)$, Max = $f(k_2)$",
                "Min = $f(-b/2a)$, Max = $\\max(f(k_1), f(k_2))$",
                "Min = $f(k_2)$, Max = $f(-b/2a)$",
                "Min = $\\min(f(k_1), f(k_2))$, Max = $f(-b/2a)$"
            ],
            "correctAnswer": 1,
            "solution": "When the vertex is inside $[k_1, k_2]$ and $a > 0$, the absolute minimum occurs at the vertex $-D/4a$. The maximum occurs at whichever endpoint is further vertically, $\\max(f(k_1), f(k_2))$."
        },
        {
            "type": "mcq",
            "text": "If we need to find the range of $f(x) = ax^2 + bx + c$ ($a > 0$) on the interval $[k_1, k_2]$, and the vertex $x = -b/2a$ lies strictly to the left of $k_1$, what are the minimum and maximum values?",
            "options": [
                "Min = $f(-b/2a)$, Max = $f(k_2)$",
                "Min = $f(k_1)$, Max = $f(k_2)$",
                "Min = $f(k_2)$, Max = $f(k_1)$",
                "Min = $f(-b/2a)$, Max = $\\max(f(k_1), f(k_2))$"
            ],
            "correctAnswer": 1,
            "solution": "If the vertex is to the left of $k_1$, the parabola is strictly increasing on $[k_1, k_2]$. Hence, the minimum is at the left endpoint $f(k_1)$ and maximum at the right endpoint $f(k_2)$."
        },
        {
            "type": "mcq",
            "text": "If the vertex $x = -b/2a$ lies strictly to the right of $k_2$ for $f(x) = ax^2 + bx + c$ ($a > 0$) on the interval $[k_1, k_2]$, what are the minimum and maximum values?",
            "options": [
                "Min = $f(k_1)$, Max = $f(k_2)$",
                "Min = $f(k_2)$, Max = $f(k_1)$",
                "Min = $f(-b/2a)$, Max = $f(k_1)$",
                "Min = $f(k_2)$, Max = $f(-b/2a)$"
            ],
            "correctAnswer": 1,
            "solution": "If the vertex is to the right of $k_2$, the parabola is strictly decreasing on $[k_1, k_2]$. Hence, the minimum is at the right endpoint $f(k_2)$ and the maximum is at the left endpoint $f(k_1)$."
        },
        {
            "type": "mcq",
            "text": "To find the range of a rational expression $y = \\frac{a_1x^2 + b_1x + c_1}{a_2x^2 + b_2x + c_2}$ for $x \\in \\mathbb{R}$, what is the critical secondary step after cross-multiplying to form a single quadratic equation in $x$?",
            "options": [
                "Set the leading coefficient to zero",
                "Find the roots using the quadratic formula",
                "Set the discriminant $D$ of the new quadratic to be $\\ge 0$ and solve for $y$",
                "Take the derivative and set it to zero"
            ],
            "correctAnswer": 2,
            "solution": "After cross-multiplying, we treat $y$ as a parameter. For the equation to have a real solution $x$ for a given $y$, the discriminant of the resulting quadratic in $x$ must be non-negative ($D \\ge 0$)."
        },

        // ================= LECTURE 8: LOCATION OF ROOTS =================
        {
            "type": "mcq",
            "text": "Assume $a > 0$ for $f(x) = ax^2 + bx + c$. What are the three necessary and sufficient conditions to ensure that BOTH roots are strictly greater than a real number $k$?",
            "options": [
                "$D \\ge 0$, $f(k) < 0$, $\\frac{-b}{2a} > k$",
                "$D \\ge 0$, $f(k) > 0$, $\\frac{-b}{2a} > k$",
                "$D \\ge 0$, $f(k) > 0$, $\\frac{-b}{2a} < k$",
                "$D > 0$, $f(k) < 0$, $\\frac{-b}{2a} < k$"
            ],
            "correctAnswer": 1,
            "solution": "The roots must be real ($D \\ge 0$), the parabola must be above the x-axis at $k$ ($f(k) > 0$), and the vertex must lie to the right of $k$ ($-b/2a > k$)."
        },
        {
            "type": "mcq",
            "text": "Assume $a > 0$. The following graph illustrates a scenario for the roots of $f(x) = ax^2 + bx + c$ relative to a real number $k$. Which set of conditions corresponds to this graph?<br><br><svg viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='200' x2='350' y2='200' stroke='black'/><path d='M 80,50 Q 150,300 220,50' fill='none' stroke='black' stroke-width='2'/><circle cx='105' cy='200' r='4'/><circle cx='195' cy='200' r='4'/><text x='100' y='220'>&alpha;</text><text x='190' y='220'>&beta;</text><line x1='280' y1='50' x2='280' y2='250' stroke='gray' stroke-dasharray='4'/><text x='275' y='220'>k</text></svg>",
            "options": [
                "$D \\ge 0, f(k) < 0, \\frac{-b}{2a} < k$",
                "$D \\ge 0, f(k) > 0, \\frac{-b}{2a} > k$",
                "$D \\ge 0, f(k) > 0, \\frac{-b}{2a} < k$",
                "$f(k) < 0$"
            ],
            "correctAnswer": 2,
            "solution": "The graph shows both roots $\\alpha$ and $\\beta$ lying strictly to the left of $k$. Therefore, $D \\ge 0$, $f(k)$ is positive, and the vertex $-b/2a$ is less than $k$."
        },
        {
            "type": "mcq",
            "text": "Assume $a > 0$ for $f(x) = ax^2 + bx + c$. If a real number $k$ lies strictly between the two roots $\\alpha$ and $\\beta$, what is the single elegant condition that guarantees this?",
            "options": [
                "$D > 0$ and $f(k) > 0$",
                "$f(k) < 0$",
                "$\\frac{-b}{2a} = k$",
                "$f(k) = 0$"
            ],
            "correctAnswer": 1,
            "solution": "For a parabola opening upwards ($a > 0$), it only dips below the x-axis between its roots. Therefore, if $f(k) < 0$, $k$ must lie strictly between the roots. (This automatically forces $D > 0$)."
        },
        {
            "type": "mcq",
            "text": "Assume $a > 0$. The graph below shows exactly one root of $f(x) = ax^2 + bx + c$ lying strictly between $k_1$ and $k_2$. What is the necessary and sufficient condition for this?<br><br><svg viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='black'/><path d='M 80,50 Q 200,350 320,50' fill='none' stroke='black' stroke-width='2'/><circle cx='127' cy='150' r='4'/><circle cx='273' cy='150' r='4'/><line x1='160' y1='50' x2='160' y2='250' stroke='gray' stroke-dasharray='4'/><text x='155' y='140'>k1</text><line x1='300' y1='50' x2='300' y2='250' stroke='gray' stroke-dasharray='4'/><text x='295' y='140'>k2</text></svg>",
            "options": [
                "$f(k_1) \\cdot f(k_2) > 0$",
                "$f(k_1) \\cdot f(k_2) < 0$",
                "$D \\ge 0$ and $f(k_1) < 0$",
                "$\\frac{-b}{2a} \\in (k_1, k_2)$"
            ],
            "correctAnswer": 1,
            "solution": "For exactly one root to lie strictly inside the interval $(k_1, k_2)$, the function must have opposite signs at the boundaries, crossing the axis once within the interval, meaning $f(k_1) \\cdot f(k_2) < 0$."
        },
        {
            "type": "mcq",
            "text": "Assume $a > 0$. What are the four conditions required to guarantee that BOTH roots $\\alpha$ and $\\beta$ of $f(x) = ax^2 + bx + c$ lie strictly inside the interval $(k_1, k_2)$?",
            "options": [
                "$D \\ge 0$, $f(k_1) < 0$, $f(k_2) < 0$, $k_1 < \\frac{-b}{2a} < k_2$",
                "$D > 0$, $f(k_1) \\cdot f(k_2) < 0$, $k_1 < \\frac{-b}{2a} < k_2$",
                "$D \\ge 0$, $f(k_1) > 0$, $f(k_2) > 0$, $k_1 < \\frac{-b}{2a} < k_2$",
                "$f(k_1) > 0$, $f(k_2) > 0$, $k_1 < \\frac{-b}{2a} < k_2$"
            ],
            "correctAnswer": 2,
            "solution": "Real roots must exist ($D \\ge 0$). The parabola must be above the axis outside the roots, so it must be positive at both boundaries ($f(k_1) > 0$, $f(k_2) > 0$). Finally, the vertex must be trapped inside the interval to prevent both roots from sitting entirely to the left or right ($k_1 < -b/2a < k_2$)."
        },

        // ================= LECTURE 9: PSEUDO QUADRATICS =================
        {
            "type": "mcq",
            "text": "A pseudo quadratic equation is of the form $af^2(x) + bf(x) + c = 0$. For a standard biquadratic $ax^4 + bx^2 + c = 0$, what substitution is made to solve it?",
            "options": [
                "$t = x$",
                "$t = x^2$",
                "$t = x^4$",
                "$t = \\sqrt{x}$"
            ],
            "correctAnswer": 1,
            "solution": "The standard substitution for biquadratic equations is $t = x^2$, which reduces it to the ordinary quadratic $at^2 + bt + c = 0$."
        },
        {
            "type": "mcq",
            "text": "In solving $ax^4 + bx^2 + c = 0$, we substitute $t = x^2$. If the resulting quadratic in $t$ yields a root $t > 0$, how many real values of $x$ does this specific $t$-root generate?",
            "options": [
                "0",
                "1",
                "2",
                "4"
            ],
            "correctAnswer": 2,
            "solution": "Since $x^2 = t$ and $t > 0$, taking the square root gives two distinct real solutions: $x = \\sqrt{t}$ and $x = -\\sqrt{t}$."
        },
        {
            "type": "mcq",
            "text": "In solving $ax^4 + bx^2 + c = 0$ via the substitution $t = x^2$, if a resulting root is $t < 0$, how many real values of $x$ does it generate?",
            "options": [
                "0",
                "1",
                "2",
                "Infinite"
            ],
            "correctAnswer": 0,
            "solution": "Since $x^2 = t$ and $t < 0$, there are no real numbers whose square is negative, yielding 0 real solutions."
        },

        // ================= LECTURE 10: COMMON ROOTS & GRAPHS =================
        {
            "type": "mcq",
            "text": "If two quadratic equations $a_1 x^2 + b_1 x + c_1 = 0$ and $a_2 x^2 + b_2 x + c_2 = 0$ share BOTH roots in common, what is the condition relating their coefficients?",
            "options": [
                "$a_1 b_2 = a_2 b_1$",
                "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$",
                "$\\frac{a_1}{b_1} = \\frac{a_2}{b_2}$",
                "$a_1 c_2 = a_2 c_1$"
            ],
            "correctAnswer": 1,
            "solution": "If they share both roots, the two equations are identical up to a scalar multiple, meaning their coefficients must be strictly proportional."
        },
        {
            "type": "mcq",
            "text": "Let $\\alpha$ be the single common root of $a_1 x^2 + b_1 x + c_1 = 0$ and $a_2 x^2 + b_2 x + c_2 = 0$. By applying cross-multiplication, the value of $\\alpha$ can be explicitly isolated as:",
            "options": [
                "$\\alpha = \\frac{a_1c_2 - a_2c_1}{a_2b_1 - a_1b_2}$",
                "$\\alpha = \\frac{b_1c_2 - b_2c_1}{a_1c_2 - a_2c_1}$",
                "Both of the above are valid expressions for $\\alpha$",
                "$\\alpha = \\frac{a_1b_2 - a_2b_1}{b_1c_2 - b_2c_1}$"
            ],
            "correctAnswer": 2,
            "solution": "Cross multiplication gives $\\frac{\\alpha^2}{b_1c_2-b_2c_1} = \\frac{\\alpha}{a_2c_1-a_1c_2} = \\frac{1}{a_1b_2-a_2b_1}$. Solving for $\\alpha$ yields both expressions depending on which pair of terms you isolate."
        },
        {
            "type": "mcq",
            "text": "The condition for exactly one common root between $a_1x^2 + b_1x + c_1 = 0$ and $a_2x^2 + b_2x + c_2 = 0$ can be written using cross-multiplication differences. If $A = a_1b_2 - a_2b_1$, $B = b_1c_2 - b_2c_1$, and $C = a_1c_2 - a_2c_1$, the condition is:",
            "options": [
                "$A \\cdot C = B^2$",
                "$A \\cdot B = C^2$",
                "$A^2 \\cdot B = C$",
                "$A \\cdot B = C$"
            ],
            "correctAnswer": 1,
            "solution": "The standard condition $(a_1 c_2 - a_2 c_1)^2 = (a_1 b_2 - a_2 b_1)(b_1 c_2 - b_2 c_1)$ can be written compactly as $C^2 = A \\cdot B$."
        },
        {
            "type": "mcq",
            "text": "Which of the following describes the end behavior of an odd-degree polynomial with a positive leading coefficient (e.g., $y = x^3$) as $x \\rightarrow -\\infty$ and $x \\rightarrow +\\infty$?",
            "options": [
                "$y \\rightarrow +\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow +\\infty$ as $x \\rightarrow +\\infty$",
                "$y \\rightarrow -\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow -\\infty$ as $x \\rightarrow +\\infty$",
                "$y \\rightarrow -\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow +\\infty$ as $x \\rightarrow +\\infty$",
                "$y \\rightarrow +\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow -\\infty$ as $x \\rightarrow +\\infty$"
            ],
            "correctAnswer": 2,
            "solution": "An odd-degree polynomial with a positive leading coefficient starts at negative infinity on the far left and rises to positive infinity on the far right."
        },
        {
            "type": "mcq",
            "text": "Which of the following describes the end behavior of an even-degree polynomial with a negative leading coefficient (e.g., $y = -x^4$) as $x \\rightarrow -\\infty$ and $x \\rightarrow +\\infty$?",
            "options": [
                "$y \\rightarrow +\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow +\\infty$ as $x \\rightarrow +\\infty$",
                "$y \\rightarrow -\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow -\\infty$ as $x \\rightarrow +\\infty$",
                "$y \\rightarrow -\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow +\\infty$ as $x \\rightarrow +\\infty$",
                "$y \\rightarrow +\\infty$ as $x \\rightarrow -\\infty$, and $y \\rightarrow -\\infty$ as $x \\rightarrow +\\infty$"
            ],
            "correctAnswer": 1,
            "solution": "An even-degree polynomial with a negative leading coefficient points downwards on both ends, approaching negative infinity on both the left and the right."
        },
        {
            "type": "mcq",
            "text": "Which of the following graphs represents the end behavior of an odd-degree polynomial with a positive leading coefficient (e.g., $y = x^3$)?<br><br><svg viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,280 Q 200,150 300,50' fill='none' stroke='blue' stroke-width='2'/></svg>",
            "options": [
                "Matches odd degree, negative leading coefficient",
                "Matches odd degree, positive leading coefficient",
                "Matches even degree, positive leading coefficient",
                "Matches even degree, negative leading coefficient"
            ],
            "correctAnswer": 1,
            "solution": "The graph starts deep in the third quadrant ($-\\infty$) and rises into the first quadrant ($+\\infty$), which is the signature of an odd degree with $a_n > 0$."
        },
        {
            "type": "mcq",
            "text": "If the first derivative $f'(x) > 0$ for all $x$ in an interval $(a, b)$, then the polynomial function $f(x)$ on that interval is:",
            "options": [
                "Strictly decreasing",
                "Constant",
                "Strictly increasing",
                "Concave down"
            ],
            "correctAnswer": 2,
            "solution": "A positive first derivative indicates a positive rate of change, meaning the function is strictly increasing."
        },
        {
            "type": "mcq",
            "text": "A critical point $x = c$ of a polynomial $f(x)$ occurs when:",
            "options": [
                "$f(c) = 0$",
                "$f'(c) = 0$",
                "$f''(c) = 0$",
                "$f''(c) > 0$"
            ],
            "correctAnswer": 1,
            "solution": "Critical points are candidates for local extrema or inflections, occurring precisely where the first derivative $f'(c) = 0$."
        },
        {
            "type": "mcq",
            "text": "According to the First Derivative Test, if $f'(x)$ changes sign from positive ($+$) to negative ($-$) as $x$ passes through a critical point $c$, then $f(x)$ has a:",
            "options": [
                "Local minimum at $c$",
                "Local maximum at $c$",
                "Point of inflection at $c$",
                "Vertical tangent at $c$"
            ],
            "correctAnswer": 1,
            "solution": "A change from increasing ($+$ slope) to decreasing ($-$ slope) forms a peak, identifying a local maximum."
        },
        {
            "type": "mcq",
            "text": "According to the First Derivative Test, if $f'(x)$ does not change sign as it passes through a critical point $c$ (e.g., goes from $+$ to $+$), then $f(x)$ has a:",
            "options": [
                "Local minimum at $c$",
                "Local maximum at $c$",
                "Horizontal point of inflection at $c$",
                "Global minimum at $c$"
            ],
            "correctAnswer": 2,
            "solution": "If the slope temporarily hits zero but doesn't change sign, the curve flattens out and continues in the same direction, forming an inflection point."
        },
        {
            "type": "mcq",
            "text": "According to the Second Derivative Test, if $f'(c) = 0$ and $f''(c) < 0$, the function has a:",
            "options": [
                "Local minimum at $c$",
                "Local maximum at $c$",
                "Point of inflection at $c$",
                "The test is inconclusive"
            ],
            "correctAnswer": 1,
            "solution": "A negative second derivative indicates the curve is concave down (resembling an inverted U), confirming a local maximum at the critical point."
        },
        {
            "type": "mcq",
            "text": "When sketching a polynomial graph, what is the very first step in the recommended procedure?",
            "options": [
                "Find the $y$-intercept by evaluating $f(0)$",
                "Compute $f'(x)$ to find critical points",
                "Identify the degree and leading coefficient to determine end behavior",
                "Find real $x$-intercepts by solving $f(x) = 0$"
            ],
            "correctAnswer": 2,
            "solution": "The first step is establishing the 'frame' of the graph by determining its end behavior using the degree and leading coefficient."
        }
    ]
};