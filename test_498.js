window.testBank = window.testBank || {};
window.testBank['test_498'] = {
    title: "Quadratic Equations",
    category: "Theory and Formulae Tests - Maths",
    uploadedAt: "2026-07-08T12:15:00Z",
    timeLimitMins: 10,
    randomizePoolSize: 30,
    questions: [
        // ================= LECTURE 1: POLYNOMIAL BASICS =================
        // 1
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
        // 2
        {
            "type": "mcq",
            "text": "In the polynomial $f(x) = a_0 + a_1x + a_2x^2 + \\dots + a_nx^n$, the term $a_n$ is called the leading coefficient. For the polynomial to have a degree of $n$, what must be true about $a_n$?",
            "options": [
                "$a_n > 0$",
                "$a_n = 1$",
                "$a_n$ &ne; $0$",
                "$a_n$ must be an integer"
            ],
            "correctAnswer": 2,
            "solution": "The leading coefficient $a_n$ must be non-zero ($a_n$ &ne; $0$) for the polynomial to maintain its degree $n$."
        },
        // 3
        {
            "type": "mcq",
            "text": "A polynomial of the form $f(x) = a$ where $a$ &ne; $0$ is classified as a:",
            "options": [
                "Linear polynomial",
                "Monic polynomial",
                "Zero-degree polynomial",
                "Undefined polynomial"
            ],
            "correctAnswer": 2,
            "solution": "Any non-zero constant $a$ is a polynomial of degree zero because it can be written as $f(x) = ax^0$."
        },
        // 4
        {
            "type": "mcq",
            "text": "Which of the following represents the general form of a biquadratic polynomial?",
            "options": [
                "$ax^2 + bx + c$, where $a$ &ne; $0$",
                "$ax^3 + bx^2 + cx + d$, where $a$ &ne; $0$",
                "$ax^4 + bx^3 + cx^2 + dx + e$, where $a$ &ne; $0$",
                "$ax^5 + bx^4 + cx^3 + dx^2 + e$, where $a$ &ne; $0$"
            ],
            "correctAnswer": 2,
            "solution": "A biquadratic polynomial is a polynomial of degree four, having the general form $ax^4 + bx^3 + cx^2 + dx + e$."
        },
        // 5
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
        // 6
        {
            "type": "mcq",
            "text": "According to the fundamental identity theorem, if the quadratic equation $ax^2 + bx + c = 0$ is satisfied by more than two distinct values of $x$, then:",
            "options": [
                "$a = 0$ and $b = 0$, but $c$ &ne; $0$",
                "$a = b = c = 0$",
                "$D > 0$",
                "The roots must be complex"
            ],
            "correctAnswer": 1,
            "solution": "A quadratic equation can have at most two roots. If it is satisfied by more than two values, it is identically zero for all $x$, meaning $a = b = c = 0$."
        },
        // 7
        {
            "type": "mcq",
            "text": "Based on the decision tree for classifying $ax^2 + bx + c = 0$, what does the equation represent if $a = 0, b = 0$, and $c$ &ne; $0$?",
            "options": [
                "A genuine quadratic with at most 2 roots",
                "A linear equation with exactly 1 root",
                "An identity true for all real $x$",
                "A contradiction with no solution"
            ],
            "correctAnswer": 3,
            "solution": "If $a = 0$ and $b = 0$, the equation reduces to $c = 0$. Since $c$ &ne; $0$, this is a logical contradiction and yields no solution."
        },

        // ================= LECTURE 2: RELATION OF ROOTS AND COEFFICIENTS =================
        // 8
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
        // 9
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
        // 10
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
        // 11
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
        // 12
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
        // 13
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
        // 14
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
        // 15
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
        // 16
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
        // 17
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
        // 18
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
        // 19
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
        // 20
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
        // 21
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
        // 22
        {
            "type": "mcq",
            "text": "For a general polynomial $P(x) = a_nx^n + \\dots + a_0 = 0$, the sum of the products of triplets of roots ($\\sum \\alpha_i \\alpha_j \\alpha_k$) is:",
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
        // 23
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
        // 24
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
        // 25
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
        // 26
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
        // 27
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
        // 28
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
        // 29
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
        // 30
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
        // 31
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
        // 32
        {
            "type": "mcq",
            "text": "Identify the conditions for $a$ and $D$ for the quadratic function $y = ax^2 + bx + c$ represented by the following graph:<br><br><svg width='200' height='150' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='200' x2='350' y2='200' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,50 Q 200,450 300,50' fill='none' stroke='blue' stroke-width='2'/><circle cx='150' cy='200' r='4' fill='red'/><circle cx='250' cy='200' r='4' fill='red'/></svg>",
            "options": [
                "$a > 0, D > 0$",
                "$a > 0, D < 0$",
                "$a < 0, D > 0$",
                "$a > 0, D = 0$"
            ],
            "correctAnswer": 0,
            "solution": "The parabola opens upwards, meaning $a > 0$. It cleanly crosses the x-axis twice, meaning there are two distinct real roots, so $D > 0$."
        },
        // 33
        {
            "type": "mcq",
            "text": "Which of the following conditions correctly describes the parabola shown below?<br><br><svg width='200' height='150' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='100' x2='350' y2='100' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,280 Q 200,20 300,280' fill='none' stroke='red' stroke-width='2'/></svg>",
            "options": [
                "$a > 0, D < 0$",
                "$a < 0, D > 0$",
                "$a < 0, D < 0$",
                "$a < 0, D = 0$"
            ],
            "correctAnswer": 2,
            "solution": "The parabola opens downwards ($a < 0$) and lies entirely below the x-axis without touching it, meaning there are no real roots ($D < 0$)."
        },
        // 34
        {
            "type": "mcq",
            "text": "Identify the conditions for $a$ and $D$ for the quadratic function $y = ax^2 + bx + c$ represented by the following graph:<br><br><svg width='200' height='150' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='250' x2='350' y2='250' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,50 Q 200,450 300,50' fill='none' stroke='blue' stroke-width='2'/><circle cx='200' cy='250' r='4' fill='red'/></svg>",
            "options": [
                "$a < 0, D = 0$",
                "$a > 0, D = 0$",
                "$a > 0, D < 0$",
                "$a > 0, D > 0$"
            ],
            "correctAnswer": 1,
            "solution": "The parabola opens upwards ($a > 0$) and exactly touches the x-axis at one point, meaning it has a single repeated root ($D = 0$)."
        },
        // 35
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
        // 36
        {
            "type": "mcq",
            "text": "$ax^2 + bx + c > 0$ for all real $x$ if and only if:",
            "options": [
                "$a > 0$ and $D > 0$",
                "$a < 0$ and $D < 0$",
                "$a > 0$ and $D < 0$",
                "$a > 0$ and $D \\le 0$"
            ],
            "correctAnswer": 2,
            "solution": "For the expression to be strictly positive everywhere, the parabola must open upwards ($a > 0$) and float entirely above the x-axis without crossing it ($D < 0$)."
        },
        // 37
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
        // 38
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
        // 39
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
        // 40
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
        // 41
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
        // 42
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
        // 43
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
        // 44
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
        // 45
        {
            "type": "mcq",
            "text": "Assume $a > 0$. The following graph illustrates a scenario for the roots of $f(x) = ax^2 + bx + c$ relative to a real number $k$. Which set of conditions corresponds to this graph?<br><br><svg width='200' height='150' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='200' x2='350' y2='200' stroke='black'/><line x1='280' y1='50' x2='280' y2='250' stroke='gray' stroke-dasharray='4'/><text x='275' y='270' font-family='sans-serif' font-size='16'>k</text><path d='M 50,50 Q 150,350 250,50' fill='none' stroke='blue' stroke-width='2' stroke-dasharray='5,5'/><circle cx='150' cy='200' r='4' fill='blue'/><path d='M 50,50 Q 150,450 250,50' fill='none' stroke='red' stroke-width='2'/><circle cx='100' cy='200' r='4' fill='red'/><circle cx='200' cy='200' r='4' fill='red'/></svg>",
            "options": [
                "$D \\ge 0, f(k) < 0, \\frac{-b}{2a} < k$",
                "$D \\ge 0, f(k) > 0, \\frac{-b}{2a} > k$",
                "$D \\ge 0, f(k) > 0, \\frac{-b}{2a} < k$",
                "$f(k) < 0$"
            ],
            "correctAnswer": 2,
            "solution": "The graph shows two valid $a>0$ parabolas (one cutting, one touching) where all roots lie strictly to the left of $k$. Therefore, $D \\ge 0$, $f(k)$ is positive, and the vertex $-b/2a$ is less than $k$."
        },
        // 46
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
        // 47
        {
            "type": "mcq",
            "text": "Assume $a > 0$. The graph below shows exactly one root of $f(x) = ax^2 + bx + c$ lying strictly between $k_1$ and $k_2$. What is the necessary and sufficient condition for this?<br><br><svg width='200' height='150' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='200' x2='350' y2='200' stroke='black'/><path d='M 100,50 Q 200,450 300,50' fill='none' stroke='red' stroke-width='2'/><circle cx='150' cy='200' r='4' fill='red'/><circle cx='250' cy='200' r='4' fill='red'/><line x1='100' y1='50' x2='100' y2='280' stroke='gray' stroke-dasharray='4'/><text x='90' y='295' font-family='sans-serif' font-size='16'>k1</text><line x1='200' y1='50' x2='200' y2='280' stroke='gray' stroke-dasharray='4'/><text x='190' y='295' font-family='sans-serif' font-size='16'>k2</text></svg>",
            "options": [
                "$f(k_1) \\cdot f(k_2) > 0$",
                "$f(k_1) \\cdot f(k_2) < 0$",
                "$D \\ge 0$ and $f(k_1) < 0$",
                "$\\frac{-b}{2a} \\in (k_1, k_2)$"
            ],
            "correctAnswer": 1,
            "solution": "For exactly one root to lie strictly inside the interval $(k_1, k_2)$, the function must have opposite signs at the boundaries, crossing the axis once within the interval, meaning $f(k_1) \\cdot f(k_2) < 0$."
        },
        // 48
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
        // 49
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
        // 50
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
        // 51
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
        // 52
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
        // 53
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
        // 54
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
        // 55
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
        // 56
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
        // 57
        {
            "type": "mcq",
            "text": "Which of the following graphs represents the end behavior of an odd-degree polynomial with a positive leading coefficient (e.g., $y = x^3$)?<br><br><svg width='200' height='150' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:auto; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='black'/><line x1='200' y1='50' x2='200' y2='280' stroke='black'/><path d='M 100,280 Q 150,150 200,150 T 300,20' fill='none' stroke='blue' stroke-width='2'/></svg>",
            "options": [
                "Matches odd degree, negative leading coefficient",
                "Matches odd degree, positive leading coefficient",
                "Matches even degree, positive leading coefficient",
                "Matches even degree, negative leading coefficient"
            ],
            "correctAnswer": 1,
            "solution": "The graph starts deep in the third quadrant ($-\\infty$) and rises into the first quadrant ($+\\infty$), passing through an inflection point. This is the signature of an odd degree with $a_n > 0$."
        },
        // 58
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
        // 59
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
        // 60
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
        // 61
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
        // 62
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
        // 63
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