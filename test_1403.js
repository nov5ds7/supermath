window.testBank = window.testBank || {};

window.testBank['test_1403'] = {
    title: "Quadratic Equations - JEE Main PYQs",
    category: "Chapter-wise PYQs Maths",
    uploadedAt: "2026-07-15T12:33:00Z",
    timeLimitMins: 600,
    randomizePoolSize: 0,
    shuffleQuestions: false,
    questions: [
        //1
        {
            "type": "mcq",
            "text": "If the roots of the equation $bx^2+cx+a=0$ be imaginary, then for all real values of $x$, the expression $3b^2x^2+6bcx+2c^2$ is: [JEE Main 2009]",
            "options": [
                "Less than $4ab$",
                "Greater than $-4ab$",
                "Less than $-4ab$",
                "Greater than $4ab$"
            ],
            "correctAnswer": 1,
            "solution": "Given that the roots of $bx^2 + cx + a = 0$ are imaginary, its discriminant must be less than zero: $D = c^2 - 4ab < 0 \\implies c^2 < 4ab$.\n\nLet the given expression be $f(x) = 3b^2x^2 + 6bcx + 2c^2$. This is an upward-opening parabola since its leading coefficient $3b^2 > 0$.\nThe minimum value of a quadratic expression $Ax^2 + Bx + C$ is given by $-\\frac{D'}{4A}$.\nHere, $D' = (6bc)^2 - 4(3b^2)(2c^2) = 36b^2c^2 - 24b^2c^2 = 12b^2c^2$.\nMinimum value of $f(x) = -\\frac{12b^2c^2}{4(3b^2)} = -c^2$.\nSince $c^2 < 4ab$, multiplying by $-1$ gives $-c^2 > -4ab$.\nTherefore, the minimum value is greater than $-4ab$, meaning $f(x) \\ge -c^2 > -4ab$ for all real $x$."
        },
        //2
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^2-x+1=0$, then $\\alpha^{2009}+\\beta^{2009}$ is: [JEE Main 2010]",
            "options": [
                "-2",
                "-1",
                "1",
                "2"
            ],
            "correctAnswer": 2,
            "solution": "The roots of the equation $x^2 - x + 1 = 0$ are the complex cube roots of $-1$, which are $-\\omega$ and $-\\omega^2$.\nLet $\\alpha = -\\omega$ and $\\beta = -\\omega^2$.\nWe need to find $\\alpha^{2009} + \\beta^{2009} = (-\\omega)^{2009} + (-\\omega^2)^{2009} = -(\\omega^{2009} + \\omega^{4018})$.\nSince $\\omega^3 = 1$, we divide the powers by 3 to find the remainder:\n$2009 = 3 \\times 669 + 2 \\implies \\omega^{2009} = \\omega^2$.\n$4018 = 3 \\times 1339 + 1 \\implies \\omega^{4018} = \\omega^1$.\nTherefore, $-(\\omega^2 + \\omega)$.\nSince $1 + \\omega + \\omega^2 = 0 \\implies \\omega + \\omega^2 = -1$.\nSo, $-(-1) = 1$."
        },
        //3
        {
            "type": "mcq",
            "text": "Let for $a\\neq a_1\\neq 0$, $f(x)=ax^2+bx+c$, $g(x)=a_1x^2+b_1x+c_1$ and $p(x)=f(x)-g(x)$. If $p(x)=0$ only for $x=-1$ and $p(-2)=2$ then the value of $p(2)$ is: [JEE Main 2011]",
            "options": [
                "6",
                "18",
                "3",
                "9"
            ],
            "correctAnswer": 1,
            "solution": "Given $p(x) = f(x) - g(x) = (a-a_1)x^2 + (b-b_1)x + (c-c_1)$.\nSince $a \\neq a_1$, the leading coefficient $(a-a_1)$ is non-zero, making $p(x)$ a quadratic polynomial.\nIt is given that $p(x) = 0$ ONLY at $x = -1$. This means the quadratic equation has a repeated root at $x = -1$.\nHence, $p(x)$ can be written as $p(x) = k(x - (-1))^2 = k(x+1)^2$ for some constant $k$.\nWe are given $p(-2) = 2$. Substituting $x = -2$:\n$p(-2) = k(-2+1)^2 = k(-1)^2 = k \\implies k = 2$.\nTherefore, the polynomial is $p(x) = 2(x+1)^2$.\nTo find $p(2)$, substitute $x = 2$:\n$p(2) = 2(2+1)^2 = 2(3)^2 = 2 \\times 9 = 18$."
        },
        //4
        {
            "type": "mcq",
            "text": "Sachin and Rahul attempted to solve a quadratic equation. Sachin made a mistake in writing down the constant term and ended up with roots $(4, 3)$. Rahul made a mistake in writing down the coefficient of $x$ to get roots $(3, 2)$. The correct roots of the equation are: [JEE Main 2011]",
            "options": [
                "-6, -1",
                "-4, -3",
                "6, 1",
                "4, 3"
            ],
            "correctAnswer": 2,
            "solution": "Let the correct quadratic equation be $x^2 + px + q = 0$.\nSachin made a mistake in the constant term ($q$), meaning his coefficient of $x$ ($p$) was correct.\nSachin's roots are 4 and 3. Sum of roots = $4 + 3 = 7$. Thus, $-p = 7 \\implies p = -7$.\nRahul made a mistake in the coefficient of $x$ ($p$), meaning his constant term ($q$) was correct.\nRahul's roots are 3 and 2. Product of roots = $3 \\times 2 = 6$. Thus, $q = 6$.\nThe correct equation is $x^2 - 7x + 6 = 0$.\nFactoring this gives $(x - 6)(x - 1) = 0$, so the correct roots are $6, 1$."
        },
        //5
        {
            "type": "mcq",
            "text": "The real number $k$ for which the equation $2x^3+3x+k=0$ has two distinct real roots in $[0, 1]$: [JEE Main 2013]",
            "options": [
                "Lies between 1 and 2",
                "Lies between 2 and 3",
                "Lies between -1 and 0",
                "Does not exist"
            ],
            "correctAnswer": 3,
            "solution": "Let $f(x) = 2x^3 + 3x + k$.\nTo find the behavior of the function, take its first derivative:\n$f'(x) = 6x^2 + 3$.\nSince $x^2 \\ge 0$ for all real $x$, $6x^2 + 3 > 0$ for all $x \\in R$.\nThis means $f(x)$ is a strictly increasing function over the entire real line.\nA strictly increasing continuous function can cross the x-axis at most once, meaning it can have at most ONE real root.\nTherefore, it is impossible for the equation to have two distinct real roots in any interval, including $[0, 1]$. Such a $k$ does not exist."
        },
        //6
        {
            "type": "mcq",
            "text": "If the equations $x^2+2x+3=0$ and $ax^2+bx+c=0$, $a, b, c \\in R$, have a common root, then $a:b:c$ is: [JEE Main 2013]",
            "options": [
                "1:2:3",
                "3:2:1",
                "1:3:2",
                "3:1:2"
            ],
            "correctAnswer": 0,
            "solution": "First, analyze the roots of the given equation $x^2 + 2x + 3 = 0$.\nIts discriminant is $D = b^2 - 4ac = (2)^2 - 4(1)(3) = 4 - 12 = -8$.\nSince $D < 0$, the roots of this equation are imaginary (complex conjugates).\nBecause the coefficients $a, b, c$ of the second equation are real, imaginary roots must occur in conjugate pairs. \nTherefore, if the two equations share one complex root, they must share BOTH roots.\nWhen two quadratic equations share both roots, their coefficients must be proportional.\nThus, $\\frac{a}{1} = \\frac{b}{2} = \\frac{c}{3}$.\nThe ratio $a:b:c$ is $1:2:3$."
        },
        //7
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be the roots of equation $x^2-6x-2=0$. If $a_n=\\alpha^n-\\beta^n$, for $n\\ge 1$, then the value of $\\frac{a_{10}-2a_8}{2a_9}$ is equal to: [JEE Main 2015]",
            "options": [
                "-2",
                "-1",
                "3",
                "-3"
            ],
            "correctAnswer": 2,
            "solution": "Since $\\alpha$ and $\\beta$ are the roots of $x^2 - 6x - 2 = 0$, they satisfy the equation:\n$\\alpha^2 - 6\\alpha - 2 = 0$ and $\\beta^2 - 6\\beta - 2 = 0$.\nMultiply the first equation by $\\alpha^8$ and the second by $\\beta^8$:\n$\\alpha^{10} - 6\\alpha^9 - 2\\alpha^8 = 0 \\implies \\alpha^{10} - 2\\alpha^8 = 6\\alpha^9$.\n$\\beta^{10} - 6\\beta^9 - 2\\beta^8 = 0 \\implies \\beta^{10} - 2\\beta^8 = 6\\beta^9$.\nSubtracting the two resulting equations gives:\n$(\\alpha^{10} - \\beta^{10}) - 2(\\alpha^8 - \\beta^8) = 6(\\alpha^9 - \\beta^9)$.\nSubstituting the notation $a_n = \\alpha^n - \\beta^n$:\n$a_{10} - 2a_8 = 6a_9$.\nWe are asked to find the value of $\\frac{a_{10} - 2a_8}{2a_9}$.\nSubstituting $a_{10} - 2a_8 = 6a_9$, we get:\n$\\frac{6a_9}{2a_9} = 3$."
        },
        //8
        {
            "type": "mcq",
            "text": "The sum of all real values of $x$ satisfying the equation $(x^2-5x+5)^{x^2+4x-60}=1$ is: [JEE Main 2016]",
            "options": [
                "-4",
                "6",
                "5",
                "3"
            ],
            "correctAnswer": 3,
            "solution": "An equation of the form $A^B = 1$ holds true under three specific cases:\n**Case 1: $B = 0$ and $A \\neq 0$.**\n$x^2 + 4x - 60 = 0 \\implies (x+10)(x-6) = 0 \\implies x = 6, -10$.\nFor both $x = 6$ and $x = -10$, the base $A = x^2 - 5x + 5$ is non-zero, so these are valid solutions.\n**Case 2: $A = 1$.**\n$x^2 - 5x + 5 = 1 \\implies x^2 - 5x + 4 = 0 \\implies (x-1)(x-4) = 0 \\implies x = 1, 4$.\nBoth are valid solutions.\n**Case 3: $A = -1$ and $B$ is an even integer.**\n$x^2 - 5x + 5 = -1 \\implies x^2 - 5x + 6 = 0 \\implies (x-2)(x-3) = 0 \\implies x = 2, 3$.\nCheck if the exponent $B$ is even for these values:\nFor $x = 2$: $B = 2^2 + 4(2) - 60 = 4 + 8 - 60 = -48$ (Even, so $x=2$ is valid).\nFor $x = 3$: $B = 3^2 + 4(3) - 60 = 9 + 12 - 60 = -39$ (Odd, so $x=3$ is rejected).\n\nThe valid roots are $-10, 6, 1, 4, 2$.\nThe sum of these values is: $-10 + 6 + 1 + 4 + 2 = 3$."
        },
        //9
        {
            "type": "mcq",
            "text": "If, for a positive integer $n$, the quadratic equation, $x(x+1)+(x+1)(x+2)+...+(x+\\overline{n-1})(x+n)=10n$ has two consecutive integral solutions, then $n$ is equal to: [JEE Main 2017]",
            "options": [
                "9",
                "10",
                "11",
                "12"
            ],
            "correctAnswer": 2,
            "solution": "The $k$-th term of the series is $(x+k-1)(x+k) = x^2 + (2k-1)x + k(k-1)$.\nSumming from $k=1$ to $n$ gives the full left-hand side equation:\n$\\sum_{k=1}^n (x^2 + (2k-1)x + k(k-1)) = 10n$\n$n x^2 + x \\sum_{k=1}^n (2k-1) + \\sum_{k=1}^n (k^2-k) = 10n$\nThe sum of the first $n$ odd numbers is $n^2$, so $\\sum_{k=1}^n (2k-1) = n^2$.\n$\\sum_{k=1}^n (k^2-k) = \\frac{n(n+1)(2n+1)}{6} - \\frac{n(n+1)}{2} = \\frac{n(n^2-1)}{3}$.\nThe equation becomes $nx^2 + n^2x + \\frac{n(n^2-1)}{3} = 10n$.\nDividing by $n$ (since $n > 0$):\n$x^2 + nx + \\frac{n^2-1}{3} - 10 = 0 \\implies x^2 + nx + \\frac{n^2-31}{3} = 0$.\nLet the two consecutive integral solutions be $\\alpha$ and $\\alpha+1$.\nThe difference of roots is $|\\alpha - (\\alpha+1)| = 1$, which means $\\frac{\\sqrt{D}}{a} = 1 \\implies D = a^2 = 1^2 = 1$.\n$D = b^2 - 4ac = n^2 - 4(1)\\left(\\frac{n^2-31}{3}\\right) = 1$.\n$n^2 - \\frac{4n^2 - 124}{3} = 1 \\implies 3n^2 - 4n^2 + 124 = 3 \\implies -n^2 + 124 = 3 \\implies n^2 = 121$.\nSince $n$ is a positive integer, $n = 11$."
        },
        //10
        {
            "type": "mcq",
            "text": "Let $S=\\{x\\in R:x\\ge 0 \\text{ and } 2|\\sqrt{x}-3|+\\sqrt{x}(\\sqrt{x}-6)+6=0\\}$. Then $S$: [JEE Main 2018]",
            "options": [
                "Is an empty set",
                "Contains exactly one element",
                "Contains exactly two elements",
                "Contains exactly four elements"
            ],
            "correctAnswer": 2,
            "solution": "Let $y = \\sqrt{x} - 3$. Then $\\sqrt{x} = y + 3$.\nSubstitute this into the equation $2|\\sqrt{x}-3|+\\sqrt{x}(\\sqrt{x}-6)+6=0$:\n$2|y| + (y+3)((y+3)-6) + 6 = 0$\n$2|y| + (y+3)(y-3) + 6 = 0$\n$2|y| + y^2 - 9 + 6 = 0$\nSince $y^2 = |y|^2$, we can write:\n$|y|^2 + 2|y| - 3 = 0$.\nFactoring this quadratic in terms of $|y|$:\n$(|y| + 3)(|y| - 1) = 0$.\nSince $|y|$ must be non-negative, $|y| = -3$ is rejected.\nThis leaves $|y| = 1 \\implies y = 1$ or $y = -1$.\nSubstitute back $y = \\sqrt{x} - 3$:\nIf $y = 1 \\implies \\sqrt{x} - 3 = 1 \\implies \\sqrt{x} = 4 \\implies x = 16$.\nIf $y = -1 \\implies \\sqrt{x} - 3 = -1 \\implies \\sqrt{x} = 2 \\implies x = 4$.\nBoth $x = 16$ and $x = 4$ satisfy $x \\ge 0$.\nTherefore, the set $S = \\{4, 16\\}$, which contains exactly two elements."
        },
        // 11
        {
            "type": "mcq",
            "text": "If both the roots of the quadratic equation $x^2-mx+4=0$ are real and distinct and they lie in the interval $[1, 5]$ then $m$ lies in the interval: [JEE Main 2019]",
            "options": [
                "(-5,-4)",
                "(3,4)",
                "(4,5)",
                "(5,6)"
            ],
            "correctAnswer": 2,
            "solution": "Let $f(x) = x^2 - mx + 4$.\nFor both roots to be real, distinct, and in $[1, 5]$, the following conditions must hold:\n1) $D > 0 \\implies m^2 - 16 > 0 \\implies m < -4$ or $m > 4$.\n2) $f(1) \\ge 0 \\implies 1 - m + 4 \\ge 0 \\implies m \\le 5$.\n3) $f(5) \\ge 0 \\implies 25 - 5m + 4 \\ge 0 \\implies 5m \\le 29 \\implies m \\le 5.8$.\n4) The vertex must lie in the interval: $1 < -b/2a < 5 \\implies 1 < m/2 < 5 \\implies 2 < m < 10$.\nTaking the intersection of all these conditions:\nFrom (1) and (4), $m > 4$.\nFrom (2) and (3), $m \\le 5$.\nSo, $m \\in (4, 5]$. Since the options are given as open intervals, the best matching interval restricting the domain is $(4, 5)$."
        },
        // 12
        {
            "type": "mcq",
            "text": "The number of all possible positive integral values of $\\alpha$ for which the roots of the quadratic equation, $6x^2-11x+\\alpha=0$ are rational numbers is: [JEE Main 2019]",
            "options": [
                "4",
                "5",
                "2",
                "3"
            ],
            "correctAnswer": 3,
            "solution": "For a quadratic equation with integer coefficients to have rational roots, its discriminant must be a perfect square.\n$D = b^2 - 4ac = (-11)^2 - 4(6)(\\alpha) = 121 - 24\\alpha$.\nWe need $121 - 24\\alpha = k^2$ for some integer $k$. We check positive integral values for $\\alpha$:\nIf $\\alpha = 1$, $D = 121 - 24 = 97$ (Not a perfect square).\nIf $\\alpha = 2$, $D = 121 - 48 = 73$ (Not a perfect square).\nIf $\\alpha = 3$, $D = 121 - 72 = 49 = 7^2$ (Perfect square!).\nIf $\\alpha = 4$, $D = 121 - 96 = 25 = 5^2$ (Perfect square!).\nIf $\\alpha = 5$, $D = 121 - 120 = 1 = 1^2$ (Perfect square!).\nIf $\\alpha \\ge 6$, $D < 0$, yielding imaginary roots.\nThus, the valid positive integral values of $\\alpha$ are 3, 4, and 5. There are exactly 3 values."
        },
        // 13
        {
            "type": "mcq",
            "text": "Consider the quadratic equation $(c-5)x^2-2cx+(c-4)=0$, $c\\neq 5$. Let $S$ be the set of all integral values of $c$ for which one root of the equation lies in the interval $(0, 2)$ and its other root lies in the interval $(2, 3)$. Then the number of elements in $S$ is: [JEE Main 2019]",
            "options": [
                "11",
                "18",
                "12",
                "10"
            ],
            "correctAnswer": 0,
            "solution": "Let $f(x) = (c-5)x^2 - 2cx + (c-4)$.\nFor one root in $(0, 2)$, $f(0)f(2) < 0$.\n$f(0) = c-4$.\n$f(2) = (c-5)(4) - 4c + (c-4) = 4c - 20 - 4c + c - 4 = c - 24$.\n$f(0)f(2) < 0 \\implies (c-4)(c-24) < 0 \\implies c \\in (4, 24)$.\nFor the other root in $(2, 3)$, $f(2)f(3) < 0$.\n$f(3) = (c-5)(9) - 6c + c - 4 = 9c - 45 - 5c - 4 = 4c - 49$.\n$f(2)f(3) < 0 \\implies (c-24)(4c-49) < 0 \\implies c \\in (49/4, 24) = (12.25, 24)$.\nTaking the intersection, $c \\in (12.25, 24)$.\nThe integral values of $c$ are 13, 14, 15, ..., 23.\nThe number of integers is $23 - 13 + 1 = 11$."
        },
        // 14
        {
            "type": "mcq",
            "text": "The value of $\\lambda$ such that sum of the squares of the roots of the quadratic equation, $x^2+(3-\\lambda)x+2=\\lambda$ has the least value is: [JEE Main 2019]",
            "options": [
                "2",
                "1",
                "15/8",
                "4/9"
            ],
            "correctAnswer": 0,
            "solution": "Rewrite the equation: $x^2 + (3-\\lambda)x + (2-\\lambda) = 0$.\nLet the roots be $\\alpha$ and $\\beta$.\nThe sum of the squares of the roots is $S = \\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$.\nSubstitute sum $\\alpha+\\beta = \\lambda-3$ and product $\\alpha\\beta = 2-\\lambda$:\n$S = (\\lambda-3)^2 - 2(2-\\lambda) = \\lambda^2 - 6\\lambda + 9 - 4 + 2\\lambda = \\lambda^2 - 4\\lambda + 5$.\nThis is a quadratic function in $\\lambda$ representing an upward-opening parabola.\nIts minimum occurs at its vertex: $\\lambda = \\frac{-(-4)}{2(1)} = 2$."
        },
        // 15
        {
            "type": "mcq",
            "text": "If one real root of the quadratic equation $81x^2+kx+256=0$ is cube of the other root, then a value of $k$ is: [JEE Main 2019]",
            "options": [
                "-300",
                "144",
                "-81",
                "100"
            ],
            "correctAnswer": 0,
            "solution": "Let the roots be $\\alpha$ and $\\alpha^3$.\nThe product of the roots is $\\alpha \\cdot \\alpha^3 = \\frac{256}{81}$.\n$\\alpha^4 = (4/3)^4 \\implies \\alpha = \\pm 4/3$.\nCase 1: If $\\alpha = 4/3$, the roots are $4/3$ and $(4/3)^3 = 64/27$.\nSum of roots = $4/3 + 64/27 = \\frac{36+64}{27} = 100/27$.\nFrom the equation, sum of roots is $-k/81$.\nSo, $-k/81 = 100/27 \\implies -k = 300 \\implies k = -300$.\nCase 2: If $\\alpha = -4/3$, the roots are $-4/3$ and $-64/27$.\nSum of roots = $-100/27 \\implies -k/81 = -100/27 \\implies k = 300$.\nFrom the given options, $-300$ is the correct answer."
        },
        // 16
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be the roots of the quadratic equation $x^2\\sin\\theta-x(\\sin\\theta\\cos\\theta+1)+\\cos\\theta=0$ $(0<\\theta<45^\\circ)$ and $\\alpha<\\beta$. Then $\\sum_{n=0}^\\infty(\\alpha^n+\\frac{(-1)^n}{\\beta^n})$ is equal to: [JEE Main 2019]",
            "options": [
                "$\\frac{1}{1+\\cos\\theta} + \\frac{1}{1-\\sin\\theta}$",
                "$\\frac{1}{1-\\cos\\theta} + \\frac{1}{1+\\sin\\theta}$",
                "$\\frac{1}{1-\\cos\\theta} - \\frac{1}{1+\\sin\\theta}$",
                "$\\frac{1}{1+\\cos\\theta} - \\frac{1}{1-\\sin\\theta}$"
            ],
            "correctAnswer": 1,
            "solution": "Rewrite the equation: $x^2\\sin\\theta - x\\sin\\theta\\cos\\theta - x + \\cos\\theta = 0$.\nGroup terms: $x\\sin\\theta(x-\\cos\\theta) - 1(x-\\cos\\theta) = 0 \\implies (x\\sin\\theta - 1)(x-\\cos\\theta) = 0$.\nThe roots are $x = \\csc\\theta$ and $x = \\cos\\theta$.\nSince $0 < \\theta < 45^\\circ$, we have $0 < \\sin\\theta < 1/\\sqrt{2}$ and $1/\\sqrt{2} < \\cos\\theta < 1$.\nThus, $\\csc\\theta > \\sqrt{2} > 1$ and $\\cos\\theta < 1$. So $\\cos\\theta < \\csc\\theta$.\nGiven $\\alpha < \\beta$, we have $\\alpha = \\cos\\theta$ and $\\beta = \\csc\\theta = 1/\\sin\\theta$.\nThe expression is $\\sum_{n=0}^\\infty (\\cos^n\\theta + (-\\sin\\theta)^n)$.\nThese are infinite geometric series with $|\\cos\\theta| < 1$ and $|-\\sin\\theta| < 1$.\nSum = $\\frac{1}{1-\\cos\\theta} + \\frac{1}{1-(-\\sin\\theta)} = \\frac{1}{1-\\cos\\theta} + \\frac{1}{1+\\sin\\theta}$."
        },
        // 17
        {
            "type": "mcq",
            "text": "If $\\lambda$ be the ratio of the roots of the quadratic equation in $x$, $3m^2x^2+m(m-4)x+2=0$, then the least value of $m$ for which $\\lambda+\\frac{1}{\\lambda}=1$ is: [JEE Main 2019]",
            "options": [
                "$4-2\\sqrt{3}$",
                "$4-3\\sqrt{2}$",
                "$2-\\sqrt{3}$",
                "$-2+\\sqrt{2}$"
            ],
            "correctAnswer": 1,
            "solution": "Let roots be $\\alpha, \\beta$. Ratio $\\lambda = \\alpha/\\beta$.\n$\\lambda + \\frac{1}{\\lambda} = 1 \\implies \\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = 1 \\implies \\frac{\\alpha^2+\\beta^2}{\\alpha\\beta} = 1$.\n$(\\alpha+\\beta)^2 - 2\\alpha\\beta = \\alpha\\beta \\implies (\\alpha+\\beta)^2 = 3\\alpha\\beta$.\nFrom the equation: sum $\\alpha+\\beta = \\frac{-m(m-4)}{3m^2} = \\frac{-(m-4)}{3m}$ and product $\\alpha\\beta = \\frac{2}{3m^2}$.\nSubstitute into the relation: $\\left(\\frac{-(m-4)}{3m}\\right)^2 = 3\\left(\\frac{2}{3m^2}\\right)$.\n$\\frac{(m-4)^2}{9m^2} = \\frac{2}{m^2} \\implies (m-4)^2 = 18 \\implies m - 4 = \\pm\\sqrt{18} = \\pm 3\\sqrt{2}$.\n$m = 4 \\pm 3\\sqrt{2}$. The least value is $4 - 3\\sqrt{2}$."
        },
        // 18
        {
            "type": "mcq",
            "text": "The number of integral values of $m$ for which the quadratic expression, $(1+2m)x^2-2(1+3m)x+4(1+m)$, $x\\in R$, is always positive, is: [JEE Main 2019]",
            "options": [
                "8",
                "3",
                "6",
                "7"
            ],
            "correctAnswer": 3,
            "solution": "For the quadratic expression to be strictly positive $\\forall x \\in R$:\n1) $a > 0 \\implies 1+2m > 0 \\implies m > -1/2$.\n2) $D < 0 \\implies 4(1+3m)^2 - 16(1+2m)(1+m) < 0$.\nDivide by 4: $(1+3m)^2 - 4(1+2m)(1+m) < 0$.\n$1 + 9m^2 + 6m - 4(1 + 3m + 2m^2) < 0$.\n$1 + 9m^2 + 6m - 4 - 12m - 8m^2 < 0 \\implies m^2 - 6m - 3 < 0$.\nRoots of $m^2 - 6m - 3 = 0$ are $m = \\frac{6 \\pm \\sqrt{36 - 4(1)(-3)}}{2} = 3 \\pm 2\\sqrt{3}$.\nSo $m \\in (3 - 2\\sqrt{3}, 3 + 2\\sqrt{3}) \\approx (-0.464, 6.464)$.\nCombining with $m > -0.5$, the interval is $(-0.464, 6.464)$.\nThe integral values of $m$ are 0, 1, 2, 3, 4, 5, 6.\nThere are 7 such integers."
        },
        // 19
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ be the roots of the equation $x^2-2x+2=0$, then the least value of $n$ for which $(\\frac{\\alpha}{\\beta})^n=1$ is: [JEE Main 2019]",
            "options": [
                "4",
                "5",
                "3",
                "2"
            ],
            "correctAnswer": 0,
            "solution": "Solve $x^2-2x+2=0$ using the quadratic formula:\n$x = \\frac{2 \\pm \\sqrt{4 - 8}}{2} = \\frac{2 \\pm 2i}{2} = 1 \\pm i$.\nLet $\\alpha = 1+i$ and $\\beta = 1-i$.\n$\\frac{\\alpha}{\\beta} = \\frac{1+i}{1-i}$. Multiply numerator and denominator by $(1+i)$:\n$\\frac{(1+i)^2}{(1-i)(1+i)} = \\frac{1 + 2i + i^2}{1^2 + 1^2} = \\frac{2i}{2} = i$.\nWe need $(\\frac{\\alpha}{\\beta})^n = 1 \\implies i^n = 1$.\nThe least positive integer $n$ for which $i^n = 1$ is $n = 4$."
        },
        // 20
        {
            "type": "mcq",
            "text": "The sum of the solutions of the equation $|\\sqrt{x}-2|+\\sqrt{x}(\\sqrt{x}-4)+2=0, (x>0)$ is equal to: [JEE Main 2019]",
            "options": [
                "4",
                "10",
                "9",
                "12"
            ],
            "correctAnswer": 1,
            "solution": "Let $t = \\sqrt{x}$. Since $x>0$, $t > 0$.\nThe equation is $|t-2| + t^2 - 4t + 2 = 0$.\nNotice that $t^2 - 4t + 2 = (t-2)^2 - 2 = |t-2|^2 - 2$.\nLet $y = |t-2| \\ge 0$. Substitute into the equation:\n$y + y^2 - 2 = 0 \\implies y^2 + y - 2 = 0 \\implies (y+2)(y-1) = 0$.\nSince $y \\ge 0$, we reject $y = -2$. Thus, $y = 1$.\n$|t-2| = 1 \\implies t-2 = 1$ or $t-2 = -1$.\n$t = 3$ or $t = 1$.\nSubstitute $t = \\sqrt{x}$:\n$\\sqrt{x} = 3 \\implies x = 9$.\n$\\sqrt{x} = 1 \\implies x = 1$.\nBoth solutions satisfy $x > 0$. The sum of the solutions is $9 + 1 = 10$."
        },
        // 21
        {
            "type": "mcq",
            "text": "If three distinct numbers $a, b, c$ are in G.P. and the equations $ax^2+2bx+c=0$ and $dx^2+2ex+f=0$ have a common root, then which one of the following statements is correct? [JEE Main 2019]",
            "options": [
                "$d, e, f$ are in A.P.",
                "$\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in G.P.",
                "$\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in A.P.",
                "$d, e, f$ are in G.P."
            ],
            "correctAnswer": 2,
            "solution": "Since $a, b, c$ are in G.P., $b^2 = ac$.\nThe roots of $ax^2 + 2bx + c = 0$ are given by $x = \\frac{-2b \\pm \\sqrt{4b^2 - 4ac}}{2a}$. Since $b^2 = ac$, the discriminant is zero, giving a repeated root $x = -b/a$.\nThis must be the common root. Substitute $x = -b/a$ into $dx^2 + 2ex + f = 0$:\n$d(-b/a)^2 + 2e(-b/a) + f = 0 \\implies d(\\frac{b^2}{a^2}) - \\frac{2eb}{a} + f = 0$.\nSubstitute $b^2 = ac$:\n$d(\\frac{ac}{a^2}) - \\frac{2eb}{a} + f = 0 \\implies \\frac{dc}{a} - \\frac{2eb}{a} + f = 0$.\nDivide the entire equation by $c$:\n$\\frac{d}{a} - \\frac{2eb}{ac} + \\frac{f}{c} = 0 \\implies \\frac{d}{a} - \\frac{2eb}{b^2} + \\frac{f}{c} = 0 \\implies \\frac{d}{a} + \\frac{f}{c} = 2\\frac{e}{b}$.\nThis proves that $\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in A.P."
        },
        // 22
        {
            "type": "mcq",
            "text": "The number of integral values of $m$ for which the equation $(1+m^2)x^2-2(1+3m)x+(1+8m)=0$ has no real root is: [JEE Main 2019]",
            "options": [
                "Infinitely many",
                "3",
                "2",
                "1"
            ],
            "correctAnswer": 0,
            "solution": "For no real roots, the discriminant $D < 0$.\n$4(1+3m)^2 - 4(1+m^2)(1+8m) < 0$\n$(1 + 9m^2 + 6m) - (1 + 8m + m^2 + 8m^3) < 0$\n$-8m^3 + 8m^2 - 2m < 0$\n$-2m(4m^2 - 4m + 1) < 0 \\implies -2m(2m - 1)^2 < 0$.\nSince $(2m - 1)^2 \\ge 0$ for all real $m$, the inequality holds strictly when $m > 0$ and $m \\neq \\frac{1}{2}$.\nThe positive integral values of $m$ are $1, 2, 3, 4, \\dots$\nThus, there are infinitely many integral values."
        },
        // 23
        {
            "type": "mcq",
            "text": "Let $p, q\\in R$. If $2-\\sqrt{3}$ is a root of the quadratic equation, $x^2+px+q=0$ then: [JEE Main 2019]",
            "options": [
                "$q^2-4p-16=0$",
                "$p^2-4q+12=0$",
                "$p^2-4q-12=0$",
                "$q^2+4p+14=0$"
            ],
            "correctAnswer": 2,
            "solution": "Since the coefficients $p, q$ are real, irrational roots occur in conjugate pairs. If $2-\\sqrt{3}$ is a root, the other root is $2+\\sqrt{3}$.\nSum of roots: $(2-\\sqrt{3}) + (2+\\sqrt{3}) = 4 = -p \\implies p = -4$.\nProduct of roots: $(2-\\sqrt{3})(2+\\sqrt{3}) = 4 - 3 = 1 = q \\implies q = 1$.\nNow verify the options by substituting $p = -4$ and $q = 1$.\nTesting option C: $p^2 - 4q - 12 = (-4)^2 - 4(1) - 12 = 16 - 4 - 12 = 0$. This is correct."
        },
        // 24
        {
            "type": "mcq",
            "text": "If $m$ is chosen in the quadratic equation $(m^2+1)x^2-3x+(m^2+1)^2=0$ such that the sum of its roots is greatest, then the absolute difference of the cubes of its roots is: [JEE Main 2019]",
            "options": [
                "$8\\sqrt{3}$",
                "$10\\sqrt{5}$",
                "$4\\sqrt{3}$",
                "$8\\sqrt{5}$"
            ],
            "correctAnswer": 3,
            "solution": "Let roots be $\\alpha, \\beta$. The sum of the roots is $S = \\frac{3}{m^2+1}$.\nFor $S$ to be maximum, the denominator $m^2+1$ must be minimum. Since $m^2 \\ge 0$, the minimum is at $m = 0$, giving max sum $S = 3$.\nSubstitute $m = 0$ into the equation: $x^2 - 3x + 1 = 0$.\nRoots sum $\\alpha+\\beta = 3$ and product $\\alpha\\beta = 1$.\nWe need $|\\alpha^3 - \\beta^3| = |\\alpha - \\beta|(\\alpha^2 + \\alpha\\beta + \\beta^2) = \\sqrt{(\\alpha+\\beta)^2 - 4\\alpha\\beta} \\cdot ((\\alpha+\\beta)^2 - \\alpha\\beta)$.\n$= \\sqrt{3^2 - 4(1)} \\cdot (3^2 - 1) = \\sqrt{5} \\cdot 8 = 8\\sqrt{5}."
        },
        // 25
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $375x^2-25x-2=0$, then $\\lim_{n\\rightarrow\\infty}\\sum_{r=1}^n\\alpha^r+\\lim_{n\\rightarrow\\infty}\\sum_{r=1}^n\\beta^r$ is equal to: [JEE Main 2019]",
            "options": [
                "21/346",
                "7/116",
                "29/358",
                "1/12"
            ],
            "correctAnswer": 3,
            "solution": "The expression represents the sum of two infinite geometric series: $\\frac{\\alpha}{1-\\alpha} + \\frac{\\beta}{1-\\beta}$.\nCombine the terms: $\\frac{\\alpha(1-\\beta) + \\beta(1-\\alpha)}{(1-\\alpha)(1-\\beta)} = \\frac{\\alpha - \\alpha\\beta + \\beta - \\alpha\\beta}{1 - (\\alpha+\\beta) + \\alpha\\beta} = \\frac{(\\alpha+\\beta) - 2\\alpha\\beta}{1 - (\\alpha+\\beta) + \\alpha\\beta}$.\nFrom $375x^2 - 25x - 2 = 0$, sum $\\alpha+\\beta = \\frac{25}{375} = \\frac{1}{15}$ and product $\\alpha\\beta = \\frac{-2}{375}$.\nNumerator: $\\frac{1}{15} - 2(\\frac{-2}{375}) = \\frac{25}{375} + \\frac{4}{375} = \\frac{29}{375}$.\nDenominator: $1 - \\frac{25}{375} + \\frac{-2}{375} = \\frac{375 - 25 - 2}{375} = \\frac{348}{375}$.\nResult = $\\frac{29}{348} = \\frac{1}{12}$."
        },
        // 26
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ and $\\gamma$ are three consecutive terms of a non-constant G.P. such that the equations $\\alpha x^2+2\\beta x+\\gamma=0$ and $x^2+x-1=0$ have a common root, then $\\alpha(\\beta+\\gamma)$ is equal to: [JEE Main 2019]",
            "options": [
                "0",
                "$\\alpha\\gamma$",
                "$\\beta\\gamma$",
                "$\\alpha\\beta$"
            ],
            "correctAnswer": 2,
            "solution": "Since $\\alpha, \\beta, \\gamma$ are in G.P., $\\beta^2 = \\alpha\\gamma$.\nThe roots of $\\alpha x^2 + 2\\beta x + \\gamma = 0$ are given by $D = 4\\beta^2 - 4\\alpha\\gamma = 0$, yielding a repeated root $x = -\\beta/\\alpha$.\nSince the two equations share a root, $x = -\\beta/\\alpha$ must satisfy $x^2 + x - 1 = 0$.\n$(-\\beta/\\alpha)^2 - \\beta/\\alpha - 1 = 0 \\implies \\beta^2 - \\alpha\\beta - \\alpha^2 = 0$.\nWe need $\\alpha(\\beta+\\gamma) = \\alpha\\beta + \\alpha\\gamma = \\alpha\\beta + \\beta^2 = \\beta(\\alpha + \\beta)$.\nFrom $\\beta^2 - \\alpha\\beta - \\alpha^2 = 0$, we substitute $\\alpha^2$: this doesn't directly simplify. Let's substitute $\\alpha\\gamma$ for $\\beta^2$: $\\alpha\\gamma - \\alpha\\beta - \\alpha^2 = 0 \\implies \\gamma - \\beta - \\alpha = 0 \\implies \\alpha + \\beta = \\gamma$.\nThus, $\\beta(\\alpha + \\beta) = \\beta(\\gamma) = \\beta\\gamma$."
        },
        // 27
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be two real roots of the equation $(k+1)\\tan^2 x - \\sqrt{2}\\lambda \\tan x = (1-k)$ where $k(\\neq -1)$ and $\\lambda$ are real numbers. If $\\tan^2(\\alpha+\\beta)=50$, then a value of $\\lambda$ is: [JEE Main 2020]",
            "options": [
                "10",
                "$10\\sqrt{2}$",
                "5",
                "$5\\sqrt{2}$"
            ],
            "correctAnswer": 0,
            "solution": "Rewrite as a quadratic in $\\tan x$: $(k+1)\\tan^2 x - \\sqrt{2}\\lambda \\tan x + (k-1) = 0$.\nThe roots are $\\tan \\alpha$ and $\\tan \\beta$.\nSum of roots: $\\tan \\alpha + \\tan \\beta = \\frac{\\sqrt{2}\\lambda}{k+1}$.\nProduct of roots: $\\tan \\alpha \\tan \\beta = \\frac{k-1}{k+1}$.\nWe know $\\tan(\\alpha+\\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta} = \\frac{\\frac{\\sqrt{2}\\lambda}{k+1}}{1 - \\frac{k-1}{k+1}} = \\frac{\\sqrt{2}\\lambda}{(k+1) - (k-1)} = \\frac{\\sqrt{2}\\lambda}{2} = \\frac{\\lambda}{\\sqrt{2}}$.\nGiven $\\tan^2(\\alpha+\\beta) = 50 \\implies (\\frac{\\lambda}{\\sqrt{2}})^2 = 50 \\implies \\frac{\\lambda^2}{2} = 50 \\implies \\lambda^2 = 100 \\implies \\lambda = \\pm 10$."
        },
        // 28
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be the roots of the equation $x^2-x-1=0$. If $p_k=(\\alpha)^k+(\\beta)^k, k\\ge 1$, then which one of the following statements is not true? [JEE Main 2020]",
            "options": [
                "$p_3=p_5-p_4$",
                "$(p_1+p_2+p_3+p_4+p_5)=26$",
                "$p_5=11$",
                "$p_5=p_2\\cdot p_3$"
            ],
            "correctAnswer": 3,
            "solution": "By Newton's sums for $x^2 - x - 1 = 0$, $p_k = p_{k-1} + p_{k-2}$.\nCalculate initial values:\n$p_1 = \\alpha + \\beta = 1$.\n$p_2 = \\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = 1 - 2(-1) = 3$.\n$p_3 = p_2 + p_1 = 3 + 1 = 4$.\n$p_4 = p_3 + p_2 = 4 + 3 = 7$.\n$p_5 = p_4 + p_3 = 7 + 4 = 11$.\nCheck options:\nA) $p_5 - p_4 = 11 - 7 = 4 = p_3$. (True)\nB) $1 + 3 + 4 + 7 + 11 = 26$. (True)\nC) $p_5 = 11$. (True)\nD) $p_2 \\cdot p_3 = 3 \\cdot 4 = 12$. But $p_5 = 11$. Thus $11 \\neq 12$. (False, so this is the answer)."
        },
        // 29
        {
            "type": "mcq",
            "text": "Let $S$ be the set of all real roots of the equation, $3^x(3^x-1)+2=|3^x-1|+|3^x-2|$. Then $S$: [JEE Main 2020]",
            "options": [
                "Contains at least four elements",
                "Is a singleton",
                "Contains exactly two elements",
                "Is an empty set"
            ],
            "correctAnswer": 1,
            "solution": "Let $t = 3^x > 0$. The equation is $t^2 - t + 2 = |t-1| + |t-2|$.\nAnalyze intervals:\nCase 1: $t \\ge 2 \\implies t^2 - t + 2 = t - 1 + t - 2 = 2t - 3 \\implies t^2 - 3t + 5 = 0$. $D = 9 - 20 < 0$ (No real roots).\nCase 2: $1 \\le t < 2 \\implies t^2 - t + 2 = t - 1 - t + 2 = 1 \\implies t^2 - t + 1 = 0$. $D < 0$ (No real roots).\nCase 3: $0 < t < 1 \\implies t^2 - t + 2 = 1 - t + 2 - t = 3 - 2t \\implies t^2 + t - 1 = 0$.\nRoots are $t = \\frac{-1 \\pm \\sqrt{5}}{2}$. Since $t > 0$, we take $t = \\frac{\\sqrt{5}-1}{2} \\approx 0.618$, which is valid since it is $<1$.\nThus, $3^x = \\frac{\\sqrt{5}-1}{2} \\implies x = \\log_3(\\frac{\\sqrt{5}-1}{2})$. There is exactly one solution, making $S$ a singleton."
        },
        // 30
        {
            "type": "mcq",
            "text": "The number of real roots of the equation, $e^{4x}+e^{3x}-4e^{2x}+e^x+1=0$ is: [JEE Main 2020]",
            "options": [
                "4",
                "1",
                "3",
                "2"
            ],
            "correctAnswer": 3,
            "solution": "Divide the entire equation by $e^{2x}$:\n$e^{2x} + e^x - 4 + e^{-x} + e^{-2x} = 0$.\nGroup the terms: $(e^{2x} + e^{-2x}) + (e^x + e^{-x}) - 4 = 0$.\nLet $t = e^x + e^{-x}$. Since $e^x > 0$, by AM-GM, $t \\ge 2$. Also $e^{2x} + e^{-2x} = t^2 - 2$.\nSubstitute into the equation: $(t^2 - 2) + t - 4 = 0 \\implies t^2 + t - 6 = 0$.\nFactorizing yields $(t+3)(t-2) = 0$. The roots are $t = -3$ (rejected since $t \\ge 2$) and $t = 2$.\nFor $t = 2$, $e^x + e^{-x} = 2 \\implies (e^x - 1)^2 = 0 \\implies e^x = 1 \\implies x = 0$.\nThus, there is only 1 real root ($x=0$)."
        },
        // 31
        {
            "type": "mcq",
            "text": "Let $a, b \\in R, a \\ne 0$ be such that the equation $ax^2-2bx+5=0$ has a repeated root $\\alpha$, which is also a root of the equation $x^2-2bx-10=0$. If $\\beta$ is the other root of this equation, then $\\alpha^2+\\beta^2$ is equal to: [JEE Main 2020]",
            "options": [
                "25",
                "24",
                "26",
                "28"
            ],
            "correctAnswer": 0,
            "solution": "For $ax^2 - 2bx + 5 = 0$ to have a repeated root, $D = 4b^2 - 20a = 0 \\implies a = b^2/5$.\nThe repeated root is $\\alpha = -(-2b)/2a = b/a = b/(b^2/5) = 5/b$.\nSubstitute $\\alpha = 5/b$ into the second equation $x^2 - 2bx - 10 = 0$:\n$(5/b)^2 - 2b(5/b) - 10 = 0 \\implies 25/b^2 - 10 - 10 = 0 \\implies 25/b^2 = 20 \\implies b^2 = 5/4$.\nIn the second equation $x^2 - 2bx - 10 = 0$, the product of roots $\\alpha\\beta = -10$.\nSubstitute $\\alpha = 5/b$: $(5/b)\\beta = -10 \\implies \\beta = -2b$.\nWe need to find $\\alpha^2 + \\beta^2 = (5/b)^2 + (-2b)^2 = 25/b^2 + 4b^2$.\nSubstitute $b^2 = 5/4$: $\\alpha^2 + \\beta^2 = 25/(5/4) + 4(5/4) = 20 + 5 = 25$."
        },
        // 32
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be the roots of the equation $5x^2+6x-2=0$. If $S_n=\\alpha^n+\\beta^n, n=1,2,3...$ then: [JEE Main 2020]",
            "options": [
                "$5S_6+6S_5=2S_4$",
                "$6S_6+5S_5+2S_4=0$",
                "$6S_6+5S_5=2S_4$",
                "$5S_6+6S_5+2S_4=0$"
            ],
            "correctAnswer": 0,
            "solution": "By Newton's formulas, any power sum $S_n$ for the roots of $ax^2 + bx + c = 0$ satisfies the same recurrence relation as the polynomial: $a S_n + b S_{n-1} + c S_{n-2} = 0$.\nApplying this to $5x^2 + 6x - 2 = 0$, we get $5 S_n + 6 S_{n-1} - 2 S_{n-2} = 0$.\nFor $n = 6$, this gives $5S_6 + 6S_5 - 2S_4 = 0$, which rearranges to $5S_6 + 6S_5 = 2S_4$."
        },
        // 33
        {
            "type": "mcq",
            "text": "Let $f(x)$ be a quadratic polynomial such that $f(-1)+f(2)=0$. If one of the roots of $f(x)=0$ is 3, then its other root lies in: [JEE Main 2020]",
            "options": [
                "(-1,0)",
                "(-3,-1)",
                "(0,1)",
                "(1,3)"
            ],
            "correctAnswer": 0,
            "solution": "Let the roots be $3$ and $k$. The polynomial is $f(x) = a(x-3)(x-k)$.\nGiven $f(-1) + f(2) = 0$.\n$f(-1) = a(-4)(-1-k) = 4a(1+k)$.\n$f(2) = a(-1)(2-k) = -a(2-k)$.\nAdding them: $4a(1+k) - a(2-k) = 0$. Since $a \\neq 0$ for a quadratic, we divide by $a$:\n$4 + 4k - 2 + k = 0 \\implies 5k + 2 = 0 \\implies k = -2/5 = -0.4$.\nThe other root $-0.4$ lies in the interval $(-1, 0)$."
        },
        // 34
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^2+px+2=0$ and $1/\\alpha$ and $1/\\beta$ are the roots of the equation $2x^2+2qx+1=0$, then $(\\alpha-\\frac{1}{\\alpha})(\\beta-\\frac{1}{\\beta})(\\alpha+\\frac{1}{\\beta})(\\beta+\\frac{1}{\\alpha})$ is equal to: [JEE Main 2020]",
            "options": [
                "$\\frac{9}{4}(9-q^2)$",
                "$\\frac{9}{4}(9+p^2)$",
                "$\\frac{9}{4}(9+q^2)$",
                "$\\frac{9}{4}(9-p^2)$"
            ],
            "correctAnswer": 3,
            "solution": "From $x^2+px+2=0$, sum $\\alpha+\\beta = -p$ and product $\\alpha\\beta = 2$.\nThe roots of $2x^2+2qx+1=0$ are $1/\\alpha, 1/\\beta$. Sum $1/\\alpha + 1/\\beta = -q \\implies \\frac{\\alpha+\\beta}{\\alpha\\beta} = -q \\implies \\frac{-p}{2} = -q \\implies p = 2q$.\nEvaluate the requested expression $E = [(\\alpha-1/\\alpha)(\\beta-1/\\beta)] \\times [(\\alpha+1/\\beta)(\\beta+1/\\alpha)]$.\nFirst bracket: $\\alpha\\beta - \\alpha/\\beta - \\beta/\\alpha + 1/\\alpha\\beta = 2 - \\frac{\\alpha^2+\\beta^2}{\\alpha\\beta} + 1/2 = 5/2 - \\frac{p^2-4}{2} = \\frac{9-p^2}{2}$.\nSecond bracket: $\\alpha\\beta + \\alpha/\\alpha + \\beta/\\beta + 1/\\alpha\\beta = 2 + 1 + 1 + 1/2 = 9/2$.\nMultiplying them: $E = \\frac{9-p^2}{2} \\cdot \\frac{9}{2} = \\frac{9}{4}(9-p^2)$."
        },
        // 35
        {
            "type": "mcq",
            "text": "The set of all real values of $\\lambda$ for which the quadratic equations, $(\\lambda^2+1)x^2-4\\lambda x+2=0$ always have exactly one root in the interval $(0, 1)$ is: [JEE Main 2020]",
            "options": [
                "(-3,-1)",
                "(2, 4]",
                "(0,2)",
                "(1, 3]"
            ],
            "correctAnswer": 3,
            "solution": "Let $f(x) = (\\lambda^2+1)x^2 - 4\\lambda x + 2$. Since $\\lambda^2+1 > 0$, the parabola opens upwards.\nFor exactly one root in $(0, 1)$, $f(0) \\cdot f(1) < 0$ (ignoring boundaries momentarily).\n$f(0) = 2 > 0$.\n$f(1) = \\lambda^2+1 - 4\\lambda + 2 = \\lambda^2 - 4\\lambda + 3$.\nSo $f(1) < 0 \\implies \\lambda^2 - 4\\lambda + 3 < 0 \\implies (\\lambda-1)(\\lambda-3) < 0 \\implies \\lambda \\in (1, 3)$.\nChecking boundaries: If $\\lambda=1$, $f(x) = 2x^2-4x+2 = 2(x-1)^2$, root $x=1$ (not strictly in $(0,1)$).\nIf $\\lambda=3$, $f(x) = 10x^2-12x+2 = 2(5x-1)(x-1)$. Roots are $1/5$ and $1$. The root $1/5$ is strictly in $(0, 1)$, so $\\lambda=3$ is valid.\nThus, the correct interval is $(1, 3]$."
        },
        // 36
        {
            "type": "mcq",
            "text": "Let $\\lambda\\neq 0$ be in R. If $\\alpha$ and $\\beta$ are the roots of the equation, $x^2-x+2\\lambda=0$ and $\\alpha$ and $\\gamma$ are the roots of the equation, $3x^2-10x+27\\lambda=0$, then $\\frac{\\beta\\gamma}{\\lambda}$ is equal to: [JEE Main 2020]",
            "options": [
                "18",
                "9",
                "27",
                "36"
            ],
            "correctAnswer": 0,
            "solution": "Since $\\alpha$ is a root of both, we have:\n(1) $\\alpha^2 - \\alpha + 2\\lambda = 0 \\implies 3\\alpha^2 - 3\\alpha + 6\\lambda = 0$\n(2) $3\\alpha^2 - 10\\alpha + 27\\lambda = 0$\nSubtracting gives $7\\alpha - 21\\lambda = 0 \\implies \\alpha = 3\\lambda$.\nSubstitute $\\alpha=3\\lambda$ into (1): $(3\\lambda)^2 - 3\\lambda + 2\\lambda = 0 \\implies 9\\lambda^2 - \\lambda = 0$. Since $\\lambda \\neq 0$, $\\lambda = 1/9$, which means $\\alpha = 1/3$.\nFrom the first equation, product $\\alpha\\beta = 2\\lambda \\implies (1/3)\\beta = 2/9 \\implies \\beta = 2/3$.\nFrom the second equation, product $\\alpha\\gamma = 9\\lambda = 1 \\implies (1/3)\\gamma = 1 \\implies \\gamma = 3$.\nValue of $\\frac{\\beta\\gamma}{\\lambda} = \\frac{(2/3)(3)}{1/9} = \\frac{2}{1/9} = 18$."
        },
        // 37
        {
            "type": "mcq",
            "text": "The product of the roots of the equation $9x^2-18|x|+5=0$, is: [JEE Main 2020]",
            "options": [
                "25/9",
                "25/81",
                "5/9",
                "5/27"
            ],
            "correctAnswer": 1,
            "solution": "Since $x^2 = |x|^2$, the equation is $9|x|^2 - 18|x| + 5 = 0$.\nLet $t = |x|$. $9t^2 - 18t + 5 = 0$.\nFactorizing: $9t^2 - 15t - 3t + 5 = 0 \\implies 3t(3t-5) - 1(3t-5) = 0 \\implies (3t-1)(3t-5) = 0$.\nThus, $|x| = 1/3$ or $|x| = 5/3$.\nThe roots are $x = 1/3, -1/3, 5/3, -5/3$.\nThe product of all four roots is $(1/3)(-1/3)(5/3)(-5/3) = 25/81$."
        },
        // 38
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $7x^2-3x-2=0$, then the value of $\\frac{\\alpha}{1-\\alpha^2}+\\frac{\\beta}{1-\\beta^2}$ is equal to: [JEE Main 2020]",
            "options": [
                "1/24",
                "27/32",
                "3/8",
                "27/16"
            ],
            "correctAnswer": 3,
            "solution": "From $7x^2-3x-2=0$, $\\alpha+\\beta = 3/7$ and $\\alpha\\beta = -2/7$.\nThe expression is $\\frac{\\alpha(1-\\beta^2) + \\beta(1-\\alpha^2)}{(1-\\alpha^2)(1-\\beta^2)} = \\frac{\\alpha+\\beta - \\alpha\\beta(\\alpha+\\beta)}{1 - (\\alpha^2+\\beta^2) + (\\alpha\\beta)^2}$.\nNumerator: $(3/7) - (-2/7)(3/7) = 3/7 + 6/49 = 27/49$.\nDenominator: $\\alpha^2+\\beta^2 = (3/7)^2 - 2(-2/7) = 9/49 + 28/49 = 37/49$.\n$1 - 37/49 + (-2/7)^2 = 1 - 37/49 + 4/49 = 16/49$.\nRatio = $\\frac{27/49}{16/49} = \\frac{27}{16}$."
        },
        // 39
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ be two roots of the equation $x^2-64x+256=0$. Then the value of $(\\frac{\\alpha^3}{\\beta^5})^{1/8} + (\\frac{\\beta^3}{\\alpha^5})^{1/8}$ is: [JEE Main 2020]",
            "options": [
                "3",
                "2",
                "4",
                "1"
            ],
            "correctAnswer": 1,
            "solution": "From $x^2-64x+256=0$, sum $\\alpha+\\beta = 64$ and product $\\alpha\\beta = 256 = 2^8$.\nThe expression is $\\frac{\\alpha^{3/8}}{\\beta^{5/8}} + \\frac{\\beta^{3/8}}{\\alpha^{5/8}}$.\nTaking a common denominator gives $\\frac{\\alpha^{3/8}\\alpha^{5/8} + \\beta^{3/8}\\beta^{5/8}}{\\alpha^{5/8}\\beta^{5/8}} = \\frac{\\alpha + \\beta}{(\\alpha\\beta)^{5/8}}$.\nSubstitute the sum and product: $\\frac{64}{(2^8)^{5/8}} = \\frac{64}{2^5} = \\frac{64}{32} = 2$."
        },
        // 40
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $2x(2x+1)=1$, then $\\beta$ is equal to: [JEE Main 2020]",
            "options": [
                "$2\\alpha^2$",
                "$-2\\alpha(\\alpha+1)$",
                "$2\\alpha(\\alpha-1)$",
                "$2\\alpha(\\alpha+1)$"
            ],
            "correctAnswer": 1,
            "solution": "The equation expands to $4x^2 + 2x - 1 = 0$. Roots are $\\alpha, \\beta$.\nSum of roots $\\alpha+\\beta = -1/2$, so $\\beta = -1/2 - \\alpha$.\nSince $\\alpha$ is a root, $4\\alpha^2 + 2\\alpha - 1 = 0 \\implies 2\\alpha^2 + \\alpha - 1/2 = 0 \\implies -1/2 = -2\\alpha^2 - \\alpha$.\nSubstitute $-1/2$ into the equation for $\\beta$:\n$\\beta = (-2\\alpha^2 - \\alpha) - \\alpha = -2\\alpha^2 - 2\\alpha = -2\\alpha(\\alpha+1)$."
        },
        // 41
        {
            "type": "numerical",
            "text": "The least positive value of 'a' for which the equation, $2x^2+(a-10)x+\\frac{33}{2}=2a$ has real roots is: [JEE Main 2020]",
            "correctAnswer": 8,
            "solution": "Rearrange the equation: $2x^2 + (a-10)x + (\\frac{33}{2} - 2a) = 0$.\nFor real roots, $D \\ge 0 \\implies (a-10)^2 - 4(2)(\\frac{33}{2} - 2a) \\ge 0$.\n$a^2 - 20a + 100 - 8(\\frac{33}{2} - 2a) \\ge 0$\n$a^2 - 20a + 100 - 132 + 16a \\ge 0$\n$a^2 - 4a - 32 \\ge 0 \\implies (a-8)(a+4) \\ge 0$.\nThis means $a \\ge 8$ or $a \\le -4$. The least positive value satisfying this condition is $a = 8$."
        },
        // 42
        {
            "type": "mcq",
            "text": "The integer 'k', for which the inequality $x^2-2(3k-1)x+8k^2-7>0$ is valid for every x in R, is: [JEE Main 2021]",
            "options": [
                "2",
                "3",
                "4",
                "0"
            ],
            "correctAnswer": 1,
            "solution": "For the quadratic expression to be positive for all real $x$, the parabola must open upwards ($a=1>0$, which is true) and its discriminant must be negative ($D < 0$).\n$4(3k-1)^2 - 4(8k^2-7) < 0$\n$(9k^2 - 6k + 1) - (8k^2 - 7) < 0$\n$k^2 - 6k + 8 < 0 \\implies (k-2)(k-4) < 0$.\nThis yields $2 < k < 4$. The only integer in this interval is $k=3$."
        },
        // 43
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be the roots of $x^2-6x-2=0$. If $a_n=\\alpha^n-\\beta^n$ for $n\\ge 1$, then the value of $\\frac{a_{10}-2a_8}{3a_9}$ is: [JEE Main 2021]",
            "options": [
                "2",
                "4",
                "3",
                "1"
            ],
            "correctAnswer": 0,
            "solution": "By Newton's formula, the expression $a_n$ satisfies the original quadratic: $a_n - 6a_{n-1} - 2a_{n-2} = 0$.\nFor $n=10$, we get $a_{10} - 6a_9 - 2a_8 = 0 \\implies a_{10} - 2a_8 = 6a_9$.\nSubstitute this into the required expression: $\\frac{6a_9}{3a_9} = 2$."
        },
        // 44
        {
            "type": "numerical",
            "text": "Let $\\alpha$ and $\\beta$ be two real numbers such that $\\alpha+\\beta=1$ and $\\alpha\\beta=-1$. Let $p_n=(\\alpha)^n+(\\beta)^n, p_{n-1}=11$ and $p_{n+1}=29$ for some integer $n\\ge 1$. Then, the value of $p_n^2$ is: [JEE Main 2021]",
            "correctAnswer": 324,
            "solution": "The roots $\\alpha$ and $\\beta$ satisfy $x^2 - x - 1 = 0$. This gives the Newton sum recurrence $p_{n+1} = p_n + p_{n-1}$.\nWe are given $p_{n-1} = 11$ and $p_{n+1} = 29$.\nSubstitute into recurrence: $29 = p_n + 11 \\implies p_n = 18$.\nThe value of $p_n^2$ is $18^2 = 324$."
        },
        // 45
        {
            "type": "mcq",
            "text": "The value of $4 + \\frac{1}{5 + \\frac{1}{4 + \\dots \\infty}}$ is: [JEE Main 2021]",
            "options": [
                "$2+\\frac{4}{\\sqrt{5}}\\sqrt{30}$",
                "$2+\\frac{2}{5}\\sqrt{30}$",
                "$4+\\frac{4}{\\sqrt{5}}\\sqrt{30}$",
                "$5+\\frac{2}{5}\\sqrt{30}$"
            ],
            "correctAnswer": 1,
            "solution": "Let $x = 4 + \\frac{1}{5 + 1/x}$.\n$x - 4 = \\frac{1}{5 + 1/x} = \\frac{x}{5x+1}$.\nCross-multiply: $(x-4)(5x+1) = x \\implies 5x^2 + x - 20x - 4 = x \\implies 5x^2 - 20x - 4 = 0$.\nRoots are $x = \\frac{20 \\pm \\sqrt{400 - 4(5)(-4)}}{10} = \\frac{20 \\pm \\sqrt{480}}{10} = \\frac{20 \\pm 4\\sqrt{30}}{10} = 2 \\pm \\frac{2}{5}\\sqrt{30}$.\nSince $x$ is clearly positive, the answer is $2 + \\frac{2}{5}\\sqrt{30}$."
        },
        // 46
        {
            "type": "mcq",
            "text": "The value of $3 + \\frac{1}{4 + \\frac{1}{3 + \\dots \\infty}}$ is equal to: [JEE Main 2021]",
            "options": [
                "$2+\\sqrt{3}$",
                "$3+2\\sqrt{3}$",
                "$4+\\sqrt{3}$",
                "$1.5+\\sqrt{3}$"
            ],
            "correctAnswer": 3,
            "solution": "Let $y = 3 + \\frac{1}{4 + 1/y}$.\n$y - 3 = \\frac{y}{4y+1} \\implies (y-3)(4y+1) = y \\implies 4y^2 + y - 12y - 3 = y \\implies 4y^2 - 12y - 3 = 0$.\nRoots are $y = \\frac{12 \\pm \\sqrt{144 - 4(4)(-3)}}{8} = \\frac{12 \\pm \\sqrt{192}}{8} = \\frac{12 \\pm 8\\sqrt{3}}{8} = 1.5 \\pm \\sqrt{3}$.\nTaking the positive root, $y = 1.5 + \\sqrt{3}$."
        },
        // 47
        {
            "type": "numerical",
            "text": "The number of real roots of the equation $e^{6x}-e^{4x}-2e^{3x}-12e^{2x}+e^x+1=0$ is: [JEE Main 2021]",
            "correctAnswer": 2,
            "solution": "Let $t = e^x > 0$. The equation is $f(t) = t^6 - t^4 - 2t^3 - 12t^2 + t + 1 = 0$.\nBy Descartes' rule of signs, the coefficients are $+ - - - + +$. The signs change from $+$ to $-$ (1) and from $-$ to $+$ (2). There are exactly 2 sign changes, implying a maximum of 2 positive real roots.\nNote that $f(0) = 1 > 0$, $f(1) = -12 < 0$, and as $t \\rightarrow \\infty$, $f(t) \\rightarrow \\infty$.\nSince the function is continuous, it must cross the axis once in $(0, 1)$ and once in $(1, \\infty)$.\nThus there are exactly 2 positive roots for $t$, which correspond to 2 real roots for $x$."
        },
        // 48
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ are roots of the equation $x^2+5(\\sqrt{2})x+10=0, \\alpha>\\beta$ and $P_n=\\alpha^n-\\beta^n$ for each positive integer n, then the value of $(\\frac{P_{17}P_{20}+5\\sqrt{2}P_{17}P_{19}}{P_{18}P_{19}+5\\sqrt{2}P_{18}^2})$ is equal to: [JEE Main 2021]",
            "options": [
                "1",
                "2",
                "6",
                "4"
            ],
            "correctAnswer": 0,
            "solution": "From Newton's formula: $P_{n} + 5\\sqrt{2}P_{n-1} + 10P_{n-2} = 0$, giving $P_{n} + 5\\sqrt{2}P_{n-1} = -10P_{n-2}$.\nEvaluate the numerator: $P_{17}(P_{20} + 5\\sqrt{2}P_{19}) = P_{17}(-10P_{18})$.\nEvaluate the denominator: $P_{18}(P_{19} + 5\\sqrt{2}P_{18}) = P_{18}(-10P_{17})$.\nThe ratio is $\\frac{-10 P_{17} P_{18}}{-10 P_{17} P_{18}} = 1$."
        },
        // 49
        {
            "type": "mcq",
            "text": "The number of real solutions of the equation, $x^2-|x|-12=0$ is: [JEE Main 2021]",
            "options": [
                "4",
                "2",
                "1",
                "3"
            ],
            "correctAnswer": 1,
            "solution": "Substitute $x^2$ with $|x|^2$, making the equation a quadratic in terms of $|x|$: $|x|^2 - |x| - 12 = 0$.\nFactorizing gives $(|x| - 4)(|x| + 3) = 0$.\nThis yields $|x| = 4$ or $|x| = -3$.\nSince absolute value cannot be negative, we reject $|x| = -3$.\n$|x| = 4 \\implies x = 4, -4$. There are exactly 2 real solutions."
        },
        // 50
        {
            "type": "numerical",
            "text": "If $a+b+c=1$, $ab+bc+ca=2$ and $abc=3$, then the value of $a^4+b^4+c^4$ is equal to: [JEE Main 2021]",
            "correctAnswer": 13,
            "solution": "First find $a^2+b^2+c^2$: $(a+b+c)^2 - 2(ab+bc+ca) = 1^2 - 2(2) = -3$.\nNow square it: $(a^2+b^2+c^2)^2 = a^4+b^4+c^4 + 2(a^2b^2+b^2c^2+c^2a^2)$.\nWe need the term $a^2b^2+b^2c^2+c^2a^2 = (ab+bc+ca)^2 - 2abc(a+b+c) = 2^2 - 2(3)(1) = 4 - 6 = -2$.\nSubstitute back: $(-3)^2 = a^4+b^4+c^4 + 2(-2) \\implies 9 = a^4+b^4+c^4 - 4 \\implies a^4+b^4+c^4 = 13$."
        },
        // 51
        {
            "type": "mcq",
            "text": "Let $\\alpha, \\beta$ be two roots of the equation $x^2+(20)^{1/4}x+(5)^{1/2}=0$. Then $\\alpha^8+\\beta^8$ is equal to: [JEE Main 2021]",
            "options": [
                "160",
                "10",
                "50",
                "100"
            ],
            "correctAnswer": 2,
            "solution": "Sum of roots $\\alpha+\\beta = -20^{1/4}$, product $\\alpha\\beta = 5^{1/2}$.\n$\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = (-20^{1/4})^2 - 2(5^{1/2}) = \\sqrt{20} - 2\\sqrt{5} = 2\\sqrt{5} - 2\\sqrt{5} = 0$.\nNext, square again: $\\alpha^4+\\beta^4 = (\\alpha^2+\\beta^2)^2 - 2\\alpha^2\\beta^2 = 0^2 - 2(5^{1/2})^2 = -2(5) = -10$.\nSquare once more: $\\alpha^8+\\beta^8 = (\\alpha^4+\\beta^4)^2 - 2\\alpha^4\\beta^4 = (-10)^2 - 2(5^{1/2})^4 = 100 - 2(25) = 50$."
        },
        // 52
        {
            "type": "mcq",
            "text": "Let $\\alpha=\\max_{x\\in R}\\{8^{2\\sin 3x}\\cdot 4^{4\\cos 3x}\\}$ and $\\beta=\\min_{x\\in R}\\{8^{2\\sin 3x}\\cdot 4^{4\\cos 3x}\}$. If $8x^2+bx+c=0$ is a quadratic equation whose roots are $\\alpha^{1/5}$ and $\\beta^{1/5}$, then the value of $c-b$ is equal to: [JEE Main 2021]",
            "options": [
                "43",
                "42",
                "50",
                "47"
            ],
            "correctAnswer": 1,
            "solution": "Simplify the expression: $8^{2\\sin 3x} \\cdot 4^{4\\cos 3x} = 2^{6\\sin 3x} \\cdot 2^{8\\cos 3x} = 2^{6\\sin 3x + 8\\cos 3x}$.\nThe maximum and minimum values of $6\\sin 3x + 8\\cos 3x$ are $\\pm \\sqrt{6^2+8^2} = \\pm 10$.\nThus, $\\alpha = 2^{10}$ and $\\beta = 2^{-10}$.\nThe roots of the quadratic are $\\alpha^{1/5} = 2^2 = 4$ and $\\beta^{1/5} = 2^{-2} = 1/4$.\nSum of roots: $4 + 1/4 = 17/4$. Product of roots: $4 \\times 1/4 = 1$.\nThe equation is $x^2 - (17/4)x + 1 = 0 \\implies 4x^2 - 17x + 4 = 0 \\implies 8x^2 - 34x + 8 = 0$.\nMatching with $8x^2+bx+c=0$, we get $b = -34$ and $c = 8$.\nValue of $c - b = 8 - (-34) = 42$."
        },
        // 53
        {
            "type": "numerical",
            "text": "The number of real roots of the equation $e^{4x}-e^{3x}-4e^{2x}-e^x+1=0$ is equal to: [JEE Main 2021]",
            "correctAnswer": 2,
            "solution": "Divide by $e^{2x}$: $e^{2x} - e^x - 4 - e^{-x} + e^{-2x} = 0 \\implies (e^{2x}+e^{-2x}) - (e^x+e^{-x}) - 4 = 0$.\nLet $t = e^x+e^{-x}$. For real $x$, $t \\ge 2$. Thus, $e^{2x}+e^{-2x} = t^2-2$.\nSubstitute: $(t^2-2) - t - 4 = 0 \\implies t^2 - t - 6 = 0 \\implies (t-3)(t+2) = 0$.\nSince $t \\ge 2$, we reject $t = -2$ and take $t = 3$.\n$e^x + e^{-x} = 3 \\implies e^{2x} - 3e^x + 1 = 0$. Roots are $e^x = \\frac{3 \\pm \\sqrt{5}}{2}$. Both values are positive, yielding exactly 2 real roots for $x$."
        },
        // 54
        {
            "type": "numerical",
            "text": "The sum of all integral values of $k(k\\neq 0)$ for which the equation $\\frac{2}{x-1}-\\frac{1}{x-2}=\\frac{2}{k}$ in x has no real roots, is: [JEE Main 2021]",
            "correctAnswer": 66,
            "solution": "Simplify LHS: $\\frac{2(x-2) - (x-1)}{(x-1)(x-2)} = \\frac{x-3}{x^2-3x+2}$. Equate to $\\frac{2}{k}$ and cross-multiply:\n$k(x-3) = 2x^2 - 6x + 4 \\implies 2x^2 - (k+6)x + (3k+4) = 0$.\nFor no real roots, $D < 0 \\implies (k+6)^2 - 8(3k+4) < 0 \\implies k^2 - 12k + 4 < 0$.\nThe roots of the boundary are $6 \\pm 4\\sqrt{2}$, which is approximately $6 \\pm 5.65$. Thus $k \\in (0.35, 11.65)$.\nThe integral values in this range are $1, 2, \\dots, 11$. Sum = $11 \\times 12 / 2 = 66$."
        },
        // 55
        {
            "type": "numerical",
            "text": "Let $\\lambda\\neq 0$ be in R. If $\\alpha$ and $\\beta$ are the roots of the equation $x^2-x+2\\lambda=0$ and $\\alpha$ and $\\gamma$ are the roots of the equation $3x^2-10x+27\\lambda=0$, then $\\frac{\\beta\\gamma}{\\lambda}$ is equal to: [JEE Main 2021]",
            "correctAnswer": 18,
            "solution": "$\\alpha$ satisfies both: $\\alpha^2 - \\alpha + 2\\lambda = 0 \\implies 3\\alpha^2 - 3\\alpha + 6\\lambda = 0$.\nSubtract this from $3\\alpha^2 - 10\\alpha + 27\\lambda = 0$ to get $7\\alpha - 21\\lambda = 0 \\implies \\alpha = 3\\lambda$.\nSubstitute back: $(3\\lambda)^2 - 3\\lambda + 2\\lambda = 0 \\implies 9\\lambda^2 - \\lambda = 0 \\implies \\lambda = 1/9$, so $\\alpha = 1/3$.\nFrom the first eq, $\\alpha\\beta = 2\\lambda \\implies \\beta/3 = 2/9 \\implies \\beta = 2/3$.\nFrom the second eq, $\\alpha\\gamma = 27\\lambda/3 = 9\\lambda = 1 \\implies \\gamma/3 = 1 \\implies \\gamma = 3$.\nThe value $\\frac{\\beta\\gamma}{\\lambda} = \\frac{(2/3)(3)}{1/9} = 18$."
        },
        // 56
        {
            "type": "mcq",
            "text": "The set of all values of $k>-1$, for which the equation $(3x^2+4x+3)^2-(k+1)(3x^2+4x+3)(3x^2+4x+2)+k(3x^2+4x+2)^2=0$ has real roots, is: [JEE Main 2021]",
            "options": [
                "$(\\frac{1}{2},\\frac{3}{2}]-\\{1\\}$",
                "$[-\\frac{1}{2},1)$",
                "$[2, 3)$",
                "$(1,\\frac{5}{2}]$"
            ],
            "correctAnswer": 3,
            "solution": "Divide by $(3x^2+4x+2)^2$ and let $y = \\frac{3x^2+4x+3}{3x^2+4x+2} = 1 + \\frac{1}{3x^2+4x+2}$.\nThe equation becomes $y^2 - (k+1)y + k = 0 \\implies (y-k)(y-1) = 0$.\nIf $y=1$, then $\\frac{1}{3x^2+4x+2} = 0$, which has no real solution.\nSo $y=k$, which means $\\frac{1}{3x^2+4x+2} = k-1$.\nFor real roots, find the range of the quadratic denominator. Minimum of $3x^2+4x+2$ is at $x=-2/3$, giving $2/3$. Thus the denominator is $\\ge 2/3$.\nThe fraction $\\frac{1}{3x^2+4x+2}$ takes values in $(0, 3/2]$.\nThus $0 < k-1 \\le 3/2 \\implies 1 < k \\le 5/2$."
        },
        // 57
        {
            "type": "mcq",
            "text": "$\\csc 18^\\circ$ is a root of the equation: [JEE Main 2021]",
            "options": [
                "$x^2-2x+4=0$",
                "$x^2+2x-4=0$",
                "$x^2-2x-4=0$",
                "$4x^2+2x-1=0$"
            ],
            "correctAnswer": 2,
            "solution": "Evaluate the root: $\\csc 18^\\circ = \\frac{1}{\\sin 18^\\circ} = \\frac{1}{(\\sqrt{5}-1)/4} = \\frac{4}{\\sqrt{5}-1} = \\sqrt{5}+1$.\nLet $x = \\sqrt{5}+1 \\implies x - 1 = \\sqrt{5}$.\nSquare both sides: $x^2 - 2x + 1 = 5 \\implies x^2 - 2x - 4 = 0$."
        },
        // 58
        {
            "type": "mcq",
            "text": "The number of pairs (a, b) of real numbers, such that whenever $\\alpha$ is a root of the equation $x^2+ax+b=0$, $\\alpha^2-2$ is also a root of this equation, is: [JEE Main 2021]",
            "options": [
                "8",
                "4",
                "6",
                "2"
            ],
            "correctAnswer": 1,
            "solution": "Let roots be $\\alpha, \\beta$. The condition means the set $\{\\alpha^2-2, \\beta^2-2\}$ is the same as $\{\\alpha, \\beta\}$.\nCase 1: $\\alpha^2-2 = \\alpha$ and $\\beta^2-2 = \\beta$. Roots are $\\alpha, \\beta \\in \\{2, -1\\}$. The possible sets of roots are $(2, 2) \\implies a=-4, b=4$; $(-1, -1) \\implies a=2, b=1$; $(2, -1) \\implies a=-1, b=-2$.\nCase 2: $\\alpha^2-2 = \\beta$ and $\\beta^2-2 = \\alpha$. Subtracting gives $\\alpha^2-\\beta^2 = \\beta-\\alpha \\implies (\\alpha-\\beta)(\\alpha+\\beta+1)=0$. Assuming $\\alpha \\neq \\beta$, $\\alpha+\\beta=-1$. Substitute into first gives $\\alpha^2-2 = -1-\\alpha \\implies \\alpha^2+\\alpha-1=0$, yielding roots $\\frac{-1\\pm\\sqrt{5}}{2}$. The sum is $-1$ and product is $-1$, so $a=1, b=-1$.\nThere are exactly 4 pairs of $(a, b)$."
        },
        // 59
        {
            "type": "numerical",
            "text": "Let $f(x)$ be a polynomial of degree 3 such that $f(k)=-\\frac{2}{k}$ for $k=2,3,4,5$. Then the value of $52-10f(10)$ is equal to: [JEE Main 2021]",
            "correctAnswer": 26,
            "solution": "Rewrite the condition: $k f(k) + 2 = 0$ for $k=2,3,4,5$. Let $g(x) = x f(x) + 2$. Since $f$ is degree 3, $g$ is a polynomial of degree 4 with roots $2,3,4,5$.\n$g(x) = C(x-2)(x-3)(x-4)(x-5)$.\nTo find $C$, plug in $x=0$: $0 f(0) + 2 = C(-2)(-3)(-4)(-5) \\implies 2 = 120C \\implies C = 1/60$.\nWe need $10f(10)$: $g(10) = 10f(10) + 2 = \\frac{1}{60}(8)(7)(6)(5) = 28$.\n$10f(10) + 2 = 28 \\implies 10f(10) = 26$.\nFinally, $52 - 10f(10) = 52 - 26 = 26$."
        },
        // 60
        {
            "type": "mcq",
            "text": "If $\\alpha$ and $\\beta$ are the roots of the quadratic equation, $x^2+x\\sin\\theta-2\\sin\\theta=0$, $\\theta\\in(0,\\frac{\\pi}{2})$, then $\\frac{\\alpha^{12}+\\beta^{12}}{(\\alpha^{-12}+\\beta^{-12})\\cdot(\\alpha-\\beta)^{24}}$ is equal to: [JEE Main 2021]",
            "options": [
                "$\\frac{2^{12}}{(\\sin\\theta-8)^6}$",
                "$\\frac{2^{12}}{(\\sin\\theta-4)^{12}}$",
                "$\\frac{2^6}{(\\sin\\theta+8)^{12}}$",
                "$\\frac{2^{12}}{(\\sin\\theta+8)^{12}}$"
            ],
            "correctAnswer": 3,
            "solution": "Simplify the expression: $\\alpha^{-12}+\\beta^{-12} = \\frac{\\alpha^{12}+\\beta^{12}}{(\\alpha\\beta)^{12}}$.\nSubstitute this into the denominator: $\\frac{\\alpha^{12}+\\beta^{12}}{\\frac{\\alpha^{12}+\\beta^{12}}{(\\alpha\\beta)^{12}} ((\\alpha-\\beta)^2)^{12}} = \\frac{(\\alpha\\beta)^{12}}{((\\alpha+\\beta)^2 - 4\\alpha\\beta)^{12}} = \\left( \\frac{\\alpha\\beta}{(\\alpha+\\beta)^2 - 4\\alpha\\beta} \\right)^{12}$.\nFrom the equation: sum $\\alpha+\\beta = -\\sin\\theta$, product $\\alpha\\beta = -2\\sin\\theta$.\nSubstitute these into the expression: $\\left( \\frac{-2\\sin\\theta}{(-\\sin\\theta)^2 - 4(-2\\sin\\theta)} \\right)^{12} = \\left( \\frac{-2\\sin\\theta}{\\sin^2\\theta + 8\\sin\\theta} \\right)^{12} = \\left( \\frac{-2}{\\sin\\theta + 8} \\right)^{12} = \\frac{2^{12}}{(\\sin\\theta + 8)^{12}}$."
        },
        // 61
        {
            "type": "numerical",
            "text": "If for some p, q, $r\\in R$, not all have same sign, one of the roots of the equation $(p^2+q^2)x^2-2q(p+r)x+q^2+r^2=0$ is also a root of the equation $x^2+2x-8=0$, then $\\frac{q^2+r^2}{p^2}$ is equal to: [JEE Main 2022]",
            "correctAnswer": 272,
            "solution": "Rewrite the first equation as: $(p^2x^2 - 2pqx + q^2) + (q^2x^2 - 2qrx + r^2) = 0$.\nThis simplifies to $(px - q)^2 + (qx - r)^2 = 0$.\nSince $p, q, r \\in R$, both terms must be independently zero. Thus, $px - q = 0 \\implies x = q/p$ and $qx - r = 0 \\implies x = r/q$.\nThis means $q/p = r/q = x$, which implies $p, q, r$ are in Geometric Progression.\nSince $x$ is also a root of $x^2 + 2x - 8 = 0$, we factor it as $(x+4)(x-2) = 0$, so $x = -4$ or $x = 2$.\nIf $x = 2$, then $q/p = 2$ and $r/q = 2$, meaning $p, q, r$ must all have the same sign (which contradicts the problem statement).\nTherefore, $x = -4$. So, $q/p = -4 \\implies q = -4p$ and $r/q = -4 \\implies r = -4q = 16p$.\nWe need to find $\\frac{q^2+r^2}{p^2} = \\frac{(-4p)^2 + (16p)^2}{p^2} = \\frac{16p^2 + 256p^2}{p^2} = 272$."
        },
        // 62
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ are the roots of the equation $x^2-(5+3^{\\sqrt{\\log_3 5}}-5^{\\sqrt{\\log_5 3}})x+3(3^{(\\log_3 5)^{1/2}}-5^{(\\log_5 3)^{1/2}}-1)=0$, then the equation, whose roots are $\\alpha+\\frac{1}{\\beta}$ and $\\beta+\\frac{1}{\\alpha}$ is: [JEE Main 2022]",
            "options": [
                "$3x^2-20x-12=0$",
                "$3x^2-10x-4=0$",
                "$3x^2-10x+2=0$",
                "$3x^2-20x+16=0$"
            ],
            "correctAnswer": 1,
            "solution": "Let $A = 3^{\\sqrt{\\log_3 5}}$ and $B = 5^{\\sqrt{\\log_5 3}}$.\nTaking log base 3 of A: $\\log_3 A = \\sqrt{\\log_3 5}$.\nTaking log base 3 of B: $\\log_3 B = \\sqrt{\\log_5 3} \\log_3 5 = \\sqrt{\\frac{1}{\\log_3 5}} \\log_3 5 = \\sqrt{\\log_3 5}$.\nSince $\\log_3 A = \\log_3 B$, we have $A = B$. Thus, $3^{\\sqrt{\\log_3 5}} - 5^{\\sqrt{\\log_5 3}} = 0$.\nThe given equation simplifies directly to: $x^2 - (5 + 0)x + 3(0 - 1) = 0 \\implies x^2 - 5x - 3 = 0$.\nThe roots are $\\alpha, \\beta$, so $\\alpha+\\beta = 5$ and $\\alpha\\beta = -3$.\nWe need the equation with roots $\\alpha + 1/\\beta = \\frac{\\alpha\\beta+1}{\\beta} = \\frac{-2}{\\beta}$ and $\\beta + 1/\\alpha = \\frac{-2}{\\alpha}$.\nSum of new roots = $\\frac{-2}{\\alpha} + \\frac{-2}{\\beta} = -2 \\left( \\frac{\\alpha+\\beta}{\\alpha\\beta} \\right) = -2 \\left( \\frac{5}{-3} \\right) = \\frac{10}{3}$.\nProduct of new roots = $\\left( \\frac{-2}{\\alpha} \\right)\\left( \\frac{-2}{\\beta} \\right) = \\frac{4}{\\alpha\\beta} = \\frac{4}{-3} = -\\frac{4}{3}$.\nThe required equation is $x^2 - (10/3)x - 4/3 = 0 \\implies 3x^2 - 10x - 4 = 0$."
        },
        // 63
        {
            "type": "mcq",
            "text": "Let $\\alpha, \\beta$ be the roots of the equation $x^2-\\sqrt{2}x+\\sqrt{6}=0$ and $\\frac{1}{\\alpha^2}+1, \\frac{1}{\\beta^2}+1$ be the roots of the equation $x^2+ax+b=0$. Then the roots of the equation $x^2-(a+b-2)x+(a+b+2)=0$ are: [JEE Main 2022]",
            "options": [
                "non-real complex number",
                "real and both negative",
                "real and both positive",
                "real and exactly one of them is positive"
            ],
            "correctAnswer": 1,
            "solution": "From $x^2-\\sqrt{2}x+\\sqrt{6}=0$, we have $\\alpha+\\beta = \\sqrt{2}$ and $\\alpha\\beta = \\sqrt{6}$.\nFor $x^2+ax+b=0$, the roots are $\\frac{1}{\\alpha^2}+1$ and $\\frac{1}{\\beta^2}+1$.\nSum $-a = \\frac{1}{\\alpha^2} + \\frac{1}{\\beta^2} + 2 = \\frac{\\alpha^2+\\beta^2}{(\\alpha\\beta)^2} + 2 = \\frac{(\\sqrt{2})^2 - 2\\sqrt{6}}{6} + 2 = \\frac{2 - 2\\sqrt{6}}{6} + 2 = \\frac{1 - \\sqrt{6}}{3} + 2 = \\frac{7 - \\sqrt{6}}{3}$.\nProduct $b = (\\frac{1}{\\alpha^2}+1)(\\frac{1}{\\beta^2}+1) = \\frac{1}{\\alpha^2\\beta^2} + \\frac{1}{\\alpha^2} + \\frac{1}{\\beta^2} + 1 = \\frac{1}{6} + \\frac{1 - \\sqrt{6}}{3} + 1 = \\frac{1 + 2 - 2\\sqrt{6} + 6}{6} = \\frac{9 - 2\\sqrt{6}}{6}$.\nWe need the roots of $x^2 - (a+b-2)x + (a+b+2) = 0$.\nFirst calculate $a+b = -\\left(\\frac{14 - 2\\sqrt{6}}{6}\\right) + \\frac{9 - 2\\sqrt{6}}{6} = \\frac{-5}{6}$.\nThe new equation is $x^2 - (-5/6 - 2)x + (-5/6 + 2) = 0 \\implies x^2 + \\frac{17}{6}x + \\frac{7}{6} = 0 \\implies 6x^2 + 17x + 7 = 0$.\nFactorizing: $6x^2 + 14x + 3x + 7 = 0 \\implies 2x(3x+7) + 1(3x+7) = 0 \\implies (2x+1)(3x+7) = 0$.\nThe roots are $-1/2$ and $-7/3$. Both are real and negative."
        },
        // 64
        {
            "type": "mcq",
            "text": "Let $f(x)=ax^2+bx+c$ be such that $f(1)=3$, $f(-2)=\\lambda$ and $f(3)=4$. If $f(0)+f(1)+f(-2)+f(3)=14$, then $\\lambda$ is equal to: [JEE Main 2022]",
            "options": [
                "-4",
                "13/2",
                "23/2",
                "4"
            ],
            "correctAnswer": 3,
            "solution": "We are given $f(1)=3, f(-2)=\\lambda, f(3)=4$. Also $f(0) = c$.\n$f(0) + f(1) + f(-2) + f(3) = 14 \\implies c + 3 + \\lambda + 4 = 14 \\implies c = 7 - \\lambda$.\nSet up equations using $f(x) = ax^2+bx+c$:\n$f(1) = a + b + c = 3 \\implies a + b = 3 - c$.\n$f(3) = 9a + 3b + c = 4 \\implies 3a + b = \\frac{4-c}{3}$.\nSubtracting the first from the second: $2a = \\frac{4-c}{3} - (3-c) = \\frac{4 - c - 9 + 3c}{3} = \\frac{2c - 5}{3} \\implies a = \\frac{2c - 5}{6}$.\nThen $b = (3 - c) - a = \\frac{18 - 6c - 2c + 5}{6} = \\frac{23 - 8c}{6}$.\nSubstitute into $f(-2) = 4a - 2b + c = \\lambda$:\n$4\\left(\\frac{2c - 5}{6}\\right) - 2\\left(\\frac{23 - 8c}{6}\\right) + c = \\lambda$.\n$\\frac{8c - 20 - 46 + 16c + 6c}{6} = \\lambda \\implies \\frac{30c - 66}{6} = \\lambda \\implies 5c - 11 = \\lambda$.\nSubstitute $c = 7 - \\lambda$:\n$5(7 - \\lambda) - 11 = \\lambda \\implies 35 - 5\\lambda - 11 = \\lambda \\implies 24 = 6\\lambda \\implies \\lambda = 4$."
        },
        // 65
        {
            "type": "numerical",
            "text": "Let $\\alpha, \\beta(\\alpha>\\beta)$ be the roots of the quadratic equation $x^2-x-4=0$. If $P_n=\\alpha^n-\\beta^n$, $n\\in\\mathbb{N}$, then $\\frac{P_{15}P_{16}-P_{14}P_{16}-P_{15}^2+P_{14}P_{15}}{P_{13}P_{14}}$ is equal to: [JEE Main 2022]",
            "correctAnswer": 16,
            "solution": "Factor the numerator of the given expression:\n$P_{15}P_{16} - P_{14}P_{16} - P_{15}^2 + P_{14}P_{15} = P_{16}(P_{15} - P_{14}) - P_{15}(P_{15} - P_{14}) = (P_{16} - P_{15})(P_{15} - P_{14})$.\nSince $\\alpha$ and $\\beta$ are roots of $x^2 - x - 4 = 0$, by Newton's Formula: $P_n - P_{n-1} - 4P_{n-2} = 0 \\implies P_n - P_{n-1} = 4P_{n-2}$.\nApply this relation to the factored numerator:\n$P_{16} - P_{15} = 4P_{14}$\n$P_{15} - P_{14} = 4P_{13}$\nSubstitute these into the expression:\n$\\frac{(4P_{14})(4P_{13})}{P_{13}P_{14}} = 4 \\times 4 = 16$."
        },
        // 66
        {
            "type": "mcq",
            "text": "If the sum of the squares of the reciprocals of the roots $\\alpha$ and $\\beta$ of the equation $3x^2+\\lambda x-1=0$ is 15, then $6(\\alpha^3+\\beta^3)^2$ is equal to: [JEE Main 2022]",
            "options": [
                "18",
                "24",
                "36",
                "96"
            ],
            "correctAnswer": 1,
            "solution": "From $3x^2+\\lambda x-1=0$, sum $\\alpha+\\beta = -\\lambda/3$ and product $\\alpha\\beta = -1/3$.\nWe are given $\\frac{1}{\\alpha^2} + \\frac{1}{\\beta^2} = 15 \\implies \\frac{\\alpha^2+\\beta^2}{(\\alpha\\beta)^2} = 15$.\n$\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = (\\lambda^2/9) - 2(-1/3) = \\frac{\\lambda^2 + 6}{9}$.\nSubstituting into the condition: $\\frac{(\\lambda^2+6)/9}{1/9} = 15 \\implies \\lambda^2 + 6 = 15 \\implies \\lambda^2 = 9$.\nWe need to find $6(\\alpha^3+\\beta^3)^2$.\n$\\alpha^3+\\beta^3 = (\\alpha+\\beta)(\\alpha^2 - \\alpha\\beta + \\beta^2) = (-\\lambda/3) \\left( \\frac{\\lambda^2+6}{9} - (-\\frac{1}{3}) \\right) = (-\\lambda/3) \\left( \\frac{15}{9} + \\frac{3}{9} \\right) = (-\\lambda/3)(2) = -\\frac{2\\lambda}{3}$.\nSquare this: $(\\alpha^3+\\beta^3)^2 = \\frac{4\\lambda^2}{9}$.\nSince $\\lambda^2 = 9$, the value is $\\frac{4(9)}{9} = 4$.\nTherefore, $6(\\alpha^3+\\beta^3)^2 = 6 \\times 4 = 24$."
        },
        // 67
        {
            "type": "mcq",
            "text": "The sum of all the real roots of the equation $(e^{2x}-4)(6e^{2x}-5e^x+1)=0$ is: [JEE Main 2022]",
            "options": [
                "$\\log_e 3$",
                "$-\\log_e 3$",
                "$\\log_e 6$",
                "$-\\log_e 6$"
            ],
            "correctAnswer": 3,
            "solution": ""
        },
        // 68
        {
            "type": "mcq",
            "text": "Let $a, b\\in R$ be such that the equation $ax^2-2bx+15=0$ has a repeated root $\\alpha$. If $\\alpha$ and $\\beta$ are the roots of the equation $x^2-2bx+21=0$ then $\\alpha^2+\\beta^2$ is equal to: [JEE Main 2022]",
            "options": [
                "37",
                "58",
                "68",
                "92"
            ],
            "correctAnswer": 1,
            "solution": "For $ax^2-2bx+15=0$ to have a repeated root $\\alpha$, $D = 4b^2 - 60a = 0 \\implies b^2 = 15a$. The root is $\\alpha = \\frac{2b}{2a} = \\frac{b}{a}$.\nThis root $\\alpha$ also satisfies $x^2-2bx+21=0$, so $\\left(\\frac{b}{a}\\right)^2 - 2b\\left(\\frac{b}{a}\\right) + 21 = 0 \\implies \\frac{b^2}{a^2} - \\frac{2b^2}{a} + 21 = 0$.\nSubstitute $b^2 = 15a$: $\\frac{15a}{a^2} - \\frac{30a}{a} + 21 = 0 \\implies \\frac{15}{a} - 30 + 21 = 0 \\implies \\frac{15}{a} = 9 \\implies a = \\frac{5}{3}$.\nThen $b^2 = 15(5/3) = 25 \\implies b = \\pm 5$.\nThe repeated root is $\\alpha = b/a = \\pm 5 / (5/3) = \\pm 3$.\nFor $x^2-2bx+21=0$, product of roots $\\alpha\\beta = 21$. Since $\\alpha = \\pm 3$, $\\beta = 21/(\\pm 3) = \\pm 7$.\nRegardless of the sign, $\\alpha^2 + \\beta^2 = 3^2 + 7^2 = 9 + 49 = 58$."
        },
        // 69
        {
            "type": "numerical",
            "text": "The sum of the cubes of all the roots of the equation $x^4-3x^3-2x^2+3x+1=0$ is: [JEE Main 2022]",
            "correctAnswer": 36,
            "solution": "Divide the entire equation by $x^2$ (since $x=0$ is not a root):\n$x^2 - 3x - 2 + \\frac{3}{x} + \\frac{1}{x^2} = 0 \\implies \\left(x^2 + \\frac{1}{x^2}\\right) - 3\\left(x - \\frac{1}{x}\\right) - 2 = 0$.\nLet $t = x - \\frac{1}{x}$. Then $t^2 = x^2 - 2 + \\frac{1}{x^2} \\implies x^2 + \\frac{1}{x^2} = t^2 + 2$.\nSubstitute into the equation: $(t^2 + 2) - 3t - 2 = 0 \\implies t^2 - 3t = 0 \\implies t(t - 3) = 0$.\nCase 1: $t = 0 \\implies x - 1/x = 0 \\implies x^2 = 1 \\implies x = 1, -1$.\nThe sum of their cubes is $1^3 + (-1)^3 = 0$.\nCase 2: $t = 3 \\implies x - 1/x = 3 \\implies x^2 - 3x - 1 = 0$.\nLet the roots be $\\alpha, \\beta$. Sum $\\alpha+\\beta = 3$, product $\\alpha\\beta = -1$.\nThe sum of their cubes is $\\alpha^3 + \\beta^3 = (\\alpha+\\beta)^3 - 3\\alpha\\beta(\\alpha+\\beta) = (3)^3 - 3(-1)(3) = 27 + 9 = 36$.\nThe total sum of the cubes of all 4 roots is $0 + 36 = 36$."
        },
        // 70
        {
            "type": "numerical",
            "text": "Let p and q be two real numbers such that $p+q=3$ and $p^4+q^4=369$. Then $(\\frac{1}{p}+\\frac{1}{q})^{-2}$ is equal to: [JEE Main 2022]",
            "correctAnswer": 4,
            "solution": "We need to evaluate $(\\frac{1}{p}+\\frac{1}{q})^{-2} = \\left(\\frac{p+q}{pq}\\right)^{-2} = \\frac{(pq)^2}{(p+q)^2} = \\frac{p^2q^2}{9}$. Thus, we only need $pq$.\nWe know $p^2+q^2 = (p+q)^2 - 2pq = 9 - 2pq$.\n$p^4+q^4 = (p^2+q^2)^2 - 2p^2q^2 = (9 - 2pq)^2 - 2p^2q^2 = 81 - 36pq + 4p^2q^2 - 2p^2q^2 = 2p^2q^2 - 36pq + 81$.\nEquate this to 369: $2p^2q^2 - 36pq + 81 = 369 \\implies 2p^2q^2 - 36pq - 288 = 0 \\implies (pq)^2 - 18(pq) - 144 = 0$.\nFactorizing: $(pq - 24)(pq + 6) = 0 \\implies pq = 24$ or $pq = -6$.\nIf $pq = 24$, the roots $p, q$ satisfy $x^2 - 3x + 24 = 0$, which has $D = 9 - 96 < 0$ (not real numbers).\nSince $p, q$ must be real, $pq = -6$.\nThus, the required value is $\\frac{(-6)^2}{9} = \\frac{36}{9} = 4$."
        },
        // 71
        {
            "type": "numerical",
            "text": "If the sum of all the roots of the equation $e^{2x}-11e^x-45e^{-x}+\\frac{81}{2}=0$ is $\\log_e p$, then p is equal to: [JEE Main 2022]",
            "correctAnswer": 45,
            "solution": "Multiply the equation by $2e^x$ to remove negative exponents: $2e^{3x} - 22e^{2x} + 81e^x - 90 = 0$.\nLet $t = e^x$. This transforms into the cubic $2t^3 - 22t^2 + 81t - 90 = 0$.\nIf the roots for $x$ are $x_1, x_2, x_3$, then the corresponding roots for $t$ are $t_1, t_2, t_3$ where $x_i = \\ln(t_i)$.\nThe sum of the roots is $S_x = x_1 + x_2 + x_3 = \\ln(t_1) + \\ln(t_2) + \\ln(t_3) = \\ln(t_1 t_2 t_3)$.\nBy Vieta's formulas for a cubic, the product of the roots is $t_1 t_2 t_3 = -\\frac{d}{a} = -\\frac{-90}{2} = 45$.\nSo the sum of all roots is $\\ln(45)$.\nWe are given this equals $\\log_e p$, therefore $p = 45$."
        },
        // 72
        {
            "type": "numerical",
            "text": "Let $\\alpha, \\beta$ be the roots of the equation $x^2-4\\lambda x+5=0$ and $\\alpha, \\gamma$ be the roots of the equation $x^2-(3\\sqrt{2}+2\\sqrt{3})x+7+3\\lambda\\sqrt{3}=0$, $\\lambda>0$. If $\\beta+\\gamma=3\\sqrt{2}$, then $(\\alpha+2\\beta+\\gamma)^2$ is equal to: [JEE Main 2022]",
            "correctAnswer": 98,
            "solution": "From the sum of roots for both equations:\n1) $\\alpha + \\beta = 4\\lambda$\n2) $\\alpha + \\gamma = 3\\sqrt{2} + 2\\sqrt{3}$\nAdding these equations: $2\\alpha + \\beta + \\gamma = 4\\lambda + 3\\sqrt{2} + 2\\sqrt{3}$.\nWe are given $\\beta + \\gamma = 3\\sqrt{2}$. Substituting this gives: $2\\alpha + 3\\sqrt{2} = 4\\lambda + 3\\sqrt{2} + 2\\sqrt{3} \\implies 2\\alpha = 4\\lambda + 2\\sqrt{3} \\implies \\alpha = 2\\lambda + \\sqrt{3}$.\nSince $\\alpha$ is a root of $x^2 - 4\\lambda x + 5 = 0$, we substitute it in:\n$(2\\lambda + \\sqrt{3})^2 - 4\\lambda(2\\lambda + \\sqrt{3}) + 5 = 0 \\implies 4\\lambda^2 + 4\\sqrt{3}\\lambda + 3 - 8\\lambda^2 - 4\\sqrt{3}\\lambda + 5 = 0 \\implies -4\\lambda^2 + 8 = 0 \\implies \\lambda^2 = 2$.\nSince $\\lambda > 0$, $\\lambda = \\sqrt{2}$.\nWe need to find $(\\alpha + 2\\beta + \\gamma)^2$. This can be rewritten as $((\\alpha + \\beta) + (\\beta + \\gamma))^2$.\nSubstitute the known sums: $(4\\lambda + 3\\sqrt{2})^2 = (4\\sqrt{2} + 3\\sqrt{2})^2 = (7\\sqrt{2})^2 = 49 \\times 2 = 98$."
        },
        // 73
        {
            "type": "numerical",
            "text": "The number of real solutions of the equation $e^{4x}+4e^{3x}-58e^{2x}+4e^x+1=0$ is: [JEE Main 2022]",
            "correctAnswer": 2,
            "solution": "Divide the entire equation by $e^{2x}$: $e^{2x} + 4e^x - 58 + 4e^{-x} + e^{-2x} = 0$.\nGroup the terms: $(e^{2x} + e^{-2x}) + 4(e^x + e^{-x}) - 58 = 0$.\nLet $t = e^x + e^{-x}$. Since $e^x > 0$, $t \\ge 2$ by AM-GM. Then $e^{2x} + e^{-2x} = t^2 - 2$.\nSubstitute into the equation: $(t^2 - 2) + 4t - 58 = 0 \\implies t^2 + 4t - 60 = 0$.\nFactorizing gives $(t + 10)(t - 6) = 0$. Since $t \\ge 2$, we reject $t = -10$ and accept $t = 6$.\nNow solve for $x$: $e^x + e^{-x} = 6 \\implies e^{2x} - 6e^x + 1 = 0$.\nUsing the quadratic formula: $e^x = \\frac{6 \\pm \\sqrt{36 - 4}}{2} = 3 \\pm 2\\sqrt{2}$.\nSince $3 > 2\\sqrt{2}$, both roots $3 + 2\\sqrt{2}$ and $3 - 2\\sqrt{2}$ are strictly positive.\nTaking the natural log gives two distinct real solutions for $x$. There are exactly 2 real solutions."
        },
        // 74
        {
            "type": "mcq",
            "text": "Let $f(x)$ be a quadratic polynomial such that $f(-2)+f(3)=0$. If one of the roots of $f(x)=0$ is -1, then the sum of the roots of $f(x)=0$ is equal to: [JEE Main 2022]",
            "options": [
                "11/3",
                "13/3",
                "7/3",
                "14/3"
            ],
            "correctAnswer": 0,
            "solution": "Let the roots of the quadratic be $-1$ and $k$. Then $f(x) = a(x+1)(x-k)$ where $a \\neq 0$.\nGiven condition: $f(-2) + f(3) = 0$.\nEvaluate $f(-2) = a(-2+1)(-2-k) = a(-1)(-2-k) = a(k+2)$.\nEvaluate $f(3) = a(3+1)(3-k) = 4a(3-k) = 12a - 4ak$.\nSet the sum to 0: $a(k+2) + 12a - 4ak = 0$.\nSince $a \\neq 0$, divide by $a$: $k + 2 + 12 - 4k = 0 \\implies 14 - 3k = 0 \\implies 3k = 14 \\implies k = 14/3$.\nThe sum of the roots is $(-1) + k = -1 + 14/3 = 11/3$."
        },
        // 75
        {
            "type": "numerical",
            "text": "Let $f(x)$ and $g(x)$ be two real polynomials of degree 2 and 1 respectively. If $f(g(x))=8x^2-2x$ and $g(f(x))=4x^2+6x+1$, then the value of $f(2)+g(2)$ is: [JEE Main 2022]",
            "correctAnswer": 18,
            "solution": "Let $g(x) = cx + d$ ($c \\neq 0$).\n$g(f(x)) = c f(x) + d = 4x^2 + 6x + 1 \\implies f(x) = \\frac{4}{c}x^2 + \\frac{6}{c}x + \\frac{1-d}{c}$.\nNow evaluate $f(g(x)) = f(cx+d) = \\frac{4}{c}(cx+d)^2 + \\frac{6}{c}(cx+d) + \\frac{1-d}{c}$.\nExpand and collect terms:\n$x^2$ term: $\\frac{4}{c} c^2 x^2 = 4c x^2$. This must equal $8x^2$, so $4c = 8 \\implies c = 2$.\n$x$ term: $\\frac{4}{c}(2cd)x + \\frac{6}{c}(c)x = 8dx + 6x$. This must equal $-2x$, so $8d + 6 = -2 \\implies 8d = -8 \\implies d = -1$.\nSo $g(x) = 2x - 1$.\nSubstitute $c, d$ back into $f(x)$: $f(x) = \\frac{4}{2}x^2 + \\frac{6}{2}x + \\frac{1 - (-1)}{2} = 2x^2 + 3x + 1$.\nWe need $f(2) + g(2) = (2(2)^2 + 3(2) + 1) + (2(2) - 1) = (8 + 6 + 1) + (4 - 1) = 15 + 3 = 18$."
        },
        // 76
        {
            "type": "numerical",
            "text": "Let $f(x)$ be a quadratic polynomial with leading coefficient 1 such that $f(0)=p$, $p\\neq 0$, and $f(1)=\\frac{1}{3}$. If the equations $f(x)=0$ and $fofofof(x)=0$ have a common real root, then $f(-3)$ is equal to: [JEE Main 2022]",
            "correctAnswer": 25,
            "solution": "Let $f(x) = x^2 + bx + c$. Since $f(0) = p$, we have $c = p$.\n$f(1) = 1 + b + p = 1/3 \\implies b = -p - 2/3$.\nSo $f(x) = x^2 - (p + 2/3)x + p$.\nLet $\\alpha$ be the common root. Thus $f(\\alpha) = 0$.\nThe second equation is $f(f(f(f(\\alpha)))) = 0$. Since $f(\\alpha) = 0$, this becomes $f(f(f(0))) = 0$.\nWe know $f(0) = p$. So $f(f(p)) = 0$.\nEvaluate $f(p) = p^2 - (p + 2/3)p + p = p^2 - p^2 - 2p/3 + p = p/3$.\nNext, $f(p/3) = (p/3)^2 - (p + 2/3)(p/3) + p = p^2/9 - p^2/3 - 2p/9 + p = \\frac{p^2 - 3p^2 - 2p}{9} + p = \\frac{-2p^2}{9} + \\frac{7p}{9}$.\nSince $f(f(p)) = 0$, we have $\\frac{p(7 - 2p)}{9} = 0$. Since $p \\neq 0$, $7 - 2p = 0 \\implies p = 7/2$.\nSo $f(x) = x^2 - (7/2 + 2/3)x + 7/2 = x^2 - (25/6)x + 7/2$.\nWe need $f(-3) = (-3)^2 - (25/6)(-3) + 7/2 = 9 + 25/2 + 7/2 = 9 + 32/2 = 9 + 16 = 25$."
        },
        // 77
        {
            "type": "numerical",
            "text": "The sum of all real value of x for which $\\frac{3x^2-9x+17}{x^2+3x+10}=\\frac{5x^2-7x+19}{3x^2+5x+12}$ is equal to: [JEE Main 2022]",
            "correctAnswer": 6,
            "solution": "Subtract 1 from both sides of the equation:\n$\\frac{3x^2-9x+17 - (x^2+3x+10)}{x^2+3x+10} = \\frac{5x^2-7x+19 - (3x^2+5x+12)}{3x^2+5x+12}$\n$\\frac{2x^2-12x+7}{x^2+3x+10} = \\frac{2x^2-12x+7}{3x^2+5x+12}$.\nRearranging gives $(2x^2-12x+7) \\left[ \\frac{1}{x^2+3x+10} - \\frac{1}{3x^2+5x+12} \\right] = 0$.\nCase 1: $2x^2 - 12x + 7 = 0$. The roots are real (since $D = 144 - 56 > 0$). The sum of these roots is $-(-12)/2 = 6$.\nCase 2: $x^2+3x+10 = 3x^2+5x+12 \\implies 2x^2+2x+2 = 0 \\implies x^2+x+1 = 0$. The discriminant $D = 1 - 4 = -3 < 0$, so there are no real roots here.\nThus, the sum of all real values of $x$ is 6."
        },
        // 78
        {
            "type": "mcq",
            "text": "The minimum value of the sum of the squares of the roots of $x^2+(3-a)x+1=2a$ is: [JEE Main 2022]",
            "options": [
                "4",
                "5",
                "6",
                "8"
            ],
            "correctAnswer": 2,
            "solution": "Rewrite the equation: $x^2 + (3-a)x + (1-2a) = 0$.\nLet the roots be $\\alpha$ and $\\beta$. We want the minimum value of $S = \\alpha^2 + \\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta$.\nSubstitute sum $\\alpha+\\beta = a-3$ and product $\\alpha\\beta = 1-2a$:\n$S = (a-3)^2 - 2(1-2a) = a^2 - 6a + 9 - 2 + 4a = a^2 - 2a + 7$.\nComplete the square: $S = (a^2 - 2a + 1) + 6 = (a-1)^2 + 6$.\nSince $(a-1)^2 \\ge 0$, the minimum value of $S$ is 6, which occurs at $a = 1$."
        },
        // 79
        {
            "type": "numerical",
            "text": "Let $S=\\{\\alpha:\\log_{2}(9^{2\\alpha-4}+13)-\\log_{2}(\\frac{5}{2}\\cdot 3^{2\\alpha-4}+1)=2\\}$. Then the maximum value of $\\beta$ for which the equation $x^{2}-2(\\sum_{\\alpha\\in S}\\alpha)^{2}x+\\sum_{\\alpha\\in S}(\\alpha+1)^{2}\\beta=0$ has real roots, is: [JEE Main 2023]",
            "correctAnswer": 25,
            "solution": "Combine the logs: $\\log_2 \\left( \\frac{9^{2\\alpha-4} + 13}{\\frac{5}{2} 3^{2\\alpha-4} + 1} \\right) = 2 \\implies \\frac{9^{2\\alpha-4} + 13}{\\frac{5}{2} 3^{2\\alpha-4} + 1} = 2^2 = 4$.\nLet $t = 3^{2\\alpha-4}$. Then $9^{2\\alpha-4} = t^2$.\n$\\frac{t^2 + 13}{\\frac{5}{2}t + 1} = 4 \\implies t^2 + 13 = 10t + 4 \\implies t^2 - 10t + 9 = 0 \\implies (t-1)(t-9) = 0$.\nIf $t = 1 \\implies 3^{2\\alpha-4} = 3^0 \\implies 2\\alpha - 4 = 0 \\implies \\alpha = 2$.\nIf $t = 9 \\implies 3^{2\\alpha-4} = 3^2 \\implies 2\\alpha - 4 = 2 \\implies \\alpha = 3$.\nSo $S = \\{2, 3\\}$.\nSum of $\\alpha \\in S$ is $2 + 3 = 5$. Sum of $(\\alpha+1)^2$ is $(2+1)^2 + (3+1)^2 = 9 + 16 = 25$.\nThe quadratic is $x^2 - 2(5)^2 x + 25\\beta = 0 \\implies x^2 - 50x + 25\\beta = 0$.\nFor real roots, $D \\ge 0 \\implies 2500 - 100\\beta \\ge 0 \\implies 100\\beta \\le 2500 \\implies \\beta \\le 25$.\nThe maximum value of $\\beta$ is 25."
        },
        // 80
        {
            "type": "numerical",
            "text": "The number of points, where the curve $f(x)=e^{8x}-e^{6x}-3e^{4x}-e^{2x}+1$, $x\\in R$ cuts x axis, is equal to: [JEE Main 2023]",
            "correctAnswer": 2,
            "solution": "Setting $f(x) = 0$, divide by $e^{4x}$: $e^{4x} - e^{2x} - 3 - e^{-2x} + e^{-4x} = 0$.\nGroup the terms: $(e^{4x} + e^{-4x}) - (e^{2x} + e^{-2x}) - 3 = 0$.\nLet $t = e^{2x} + e^{-2x}$. By AM-GM, $t \\ge 2$. Also, $e^{4x} + e^{-4x} = t^2 - 2$.\nSubstitute into the equation: $(t^2 - 2) - t - 3 = 0 \\implies t^2 - t - 5 = 0$.\nThe roots are $t = \\frac{1 \\pm \\sqrt{1 + 20}}{2} = \\frac{1 \\pm \\sqrt{21}}{2}$.\nSince $t \\ge 2$, we reject $\\frac{1 - \\sqrt{21}}{2}$. Check if $t = \\frac{1 + \\sqrt{21}}{2} \\ge 2$. Since $\\sqrt{21} > 4.5$, $t > 5.5/2 = 2.75 > 2$.\nSo we have one valid value for $t$.\n$e^{2x} + e^{-2x} = t \\implies (e^{2x})^2 - t(e^{2x}) + 1 = 0$.\nSince $t > 2$, the discriminant $t^2 - 4 > 0$, and this gives two distinct real positive roots for $e^{2x}$.\nTaking the natural log gives two distinct real values for $x$. Hence, the curve cuts the x-axis at 2 points."
        },
        // 81
        {
            "type": "mcq",
            "text": "Let $\\alpha, \\beta$ be the roots of the quadratic equation $x^{2}+\\sqrt{6}x+3=0$ then $\\frac{\\alpha^{23}+\\beta^{23}+\\alpha^{14}+\\beta^{14}}{\\alpha^{15}+\\beta^{15}+\\alpha^{10}+\\beta^{10}}$ is equal to: [JEE Main 2023]",
            "options": [
                "729",
                "9",
                "81",
                "72"
            ],
            "correctAnswer": 2,
            "solution": ""
        },
        // 82
        {
            "type": "mcq",
            "text": "If $\\alpha, \\beta$ are the roots of the equation, $x^{2}-x-1=0$ and $S_{n}=2023 \\alpha^{n}+2024 \\beta^{n}$ then: [JEE Main 2024]",
            "options": [
                "$2S_{12}=S_{11}+S_{10}$",
                "$S_{11}=S_{10}+S_{12}$",
                "$2S_{11}=S_{12}+S_{10}$",
                "$S_{12}=S_{11}+S_{10}$"
            ],
            "correctAnswer": 3,
            "solution": "Since $\\alpha$ and $\\beta$ are roots of $x^2 - x - 1 = 0$, they satisfy $\\alpha^2 = \\alpha + 1$ and $\\beta^2 = \\beta + 1$.\nMultiply the first by $2023\\alpha^{n-2}$ and the second by $2024\\beta^{n-2}$:\n$2023\\alpha^n = 2023\\alpha^{n-1} + 2023\\alpha^{n-2}$\n$2024\\beta^n = 2024\\beta^{n-1} + 2024\\beta^{n-2}$\nAdding these two equations gives $S_n = S_{n-1} + S_{n-2}$.\nFor $n = 12$, we directly get $S_{12} = S_{11} + S_{10}$."
        },
        // 83
        {
            "type": "mcq",
            "text": "Let S be the set of positive integral values of a for which $\\frac{ax^{2}+2(a+1)x+9a+4}{x^{2}-8x+32}<0$, $\\forall x\\in R$. Then, the number of elements in S is: [JEE Main 2024]",
            "options": [
                "$\\infty$",
                "3",
                "0",
                "1"
            ],
            "correctAnswer": 2,
            "solution": "First analyze the denominator: $x^2 - 8x + 32$. Its discriminant is $D = 64 - 128 = -64 < 0$. Since the leading coefficient is 1 ($>0$), the denominator is strictly positive for all $x \\in R$.\nFor the fraction to be strictly negative for all $x$, the numerator must be strictly negative for all $x$.\nSo, $ax^2 + 2(a+1)x + 9a + 4 < 0$ $\\forall x \\in R$.\nThis requires the parabola to open downwards ($a < 0$) and not cross the x-axis ($D < 0$).\nThe set $S$ asks for POSITIVE integral values of $a$. However, our condition strictly requires $a < 0$.\nTherefore, there are NO positive integral values of $a$ that satisfy the condition. The set $S$ is empty, so it contains 0 elements."
        },
        // 84
        {
            "type": "mcq",
            "text": "Let $S=\\{x\\in R:(\\sqrt{3}+\\sqrt{2})^{x}+(\\sqrt{3}-\\sqrt{2})^{x}=10\\}$. Then the number of elements in S is: [JEE Main 2024]",
            "options": [
                "4",
                "0",
                "2",
                "1"
            ],
            "correctAnswer": 2,
            "solution": "Notice that $(\\sqrt{3}+\\sqrt{2})(\\sqrt{3}-\\sqrt{2}) = 3 - 2 = 1$, so they are reciprocals.\nLet $t = (\\sqrt{3}+\\sqrt{2})^x$. Then $(\\sqrt{3}-\\sqrt{2})^x = 1/t$.\nThe equation becomes $t + 1/t = 10 \\implies t^2 - 10t + 1 = 0$.\nUsing the quadratic formula: $t = \\frac{10 \\pm \\sqrt{100 - 4}}{2} = 5 \\pm 2\\sqrt{6}$.\nNotice that $5 + 2\\sqrt{6} = 3 + 2 + 2\\sqrt{3\\cdot 2} = (\\sqrt{3} + \\sqrt{2})^2$.\nSimilarly, $5 - 2\\sqrt{6} = (\\sqrt{3} - \\sqrt{2})^2 = (\\sqrt{3} + \\sqrt{2})^{-2}$.\nSo $t = (\\sqrt{3} + \\sqrt{2})^{\\pm 2}$.\nSince $t = (\\sqrt{3} + \\sqrt{2})^x$, we have $x = 2$ and $x = -2$.\nThere are exactly 2 elements in set S."
        },
        // 85
        {
            "type": "mcq",
            "text": "If 2 and 6 are the roots of the equation $ax^{2}+bx+1=0$, then the quadratic equation, whose roots are $\\frac{1}{2a+b}$ and $\\frac{1}{6a+b}$, is: [JEE Main 2024]",
            "options": [
                "$x^{2}+8x+12=0$",
                "$2x^{2}+11x+12=0$",
                "$x^{2}+10x+16=0$",
                "$4x^{2}+14x+12=0$"
            ],
            "correctAnswer": 0,
            "solution": "From $ax^2 + bx + 1 = 0$, the sum of roots is $-b/a = 2 + 6 = 8 \\implies b = -8a$.\nThe product of roots is $1/a = 2 \\times 6 = 12 \\implies a = 1/12$.\nSubstituting $a = 1/12$ into the sum relation gives $b = -8(1/12) = -2/3$.\nNow calculate the two new roots:\nFirst root: $R_1 = \\frac{1}{2a+b} = \\frac{1}{2(1/12) - 2/3} = \\frac{1}{1/6 - 4/6} = \\frac{1}{-3/6} = -2$.\nSecond root: $R_2 = \\frac{1}{6a+b} = \\frac{1}{6(1/12) - 2/3} = \\frac{1}{1/2 - 2/3} = \\frac{1}{-1/6} = -6$.\nThe quadratic equation with roots $-2$ and $-6$ is $x^2 - (R_1+R_2)x + R_1 R_2 = 0 \\implies x^2 - (-8)x + 12 = 0 \\implies x^2 + 8x + 12 = 0$."
        },
        // 86
        {
            "type": "mcq",
            "text": "Let the sum of the maximum and the minimum values of the function $f(x)=\\frac{2x^{2}-3x+8}{2x^{2}+3x+8}$ be $\\frac{m}{n}$ where $\\gcd(m,n)=1$. Then $m+n$ is equal to: [JEE Main 2024]",
            "options": [
                "201",
                "195",
                "217",
                "182"
            ],
            "correctAnswer": 0,
            "solution": "Let $y = \\frac{2x^2 - 3x + 8}{2x^2 + 3x + 8}$. Cross-multiplying gives $2yx^2 + 3yx + 8y = 2x^2 - 3x + 8$.\nRearrange to form a quadratic in $x$: $(2y - 2)x^2 + (3y + 3)x + (8y - 8) = 0$.\nFor real $x$, discriminant $D \\ge 0 \\implies (3y + 3)^2 - 4(2y - 2)(8y - 8) \\ge 0$.\n$9(y+1)^2 - 64(y-1)^2 \\ge 0 \\implies [3(y+1) - 8(y-1)][3(y+1) + 8(y-1)] \\ge 0$.\n$(11 - 5y)(11y - 5) \\ge 0 \\implies (5y - 11)(11y - 5) \\le 0$.\nThis means $5/11 \\le y \\le 11/5$. The minimum value is $5/11$ and the maximum is $11/5$.\nThe sum of max and min is $\\frac{11}{5} + \\frac{5}{11} = \\frac{121 + 25}{55} = \\frac{146}{55}$.\nSince $\\gcd(146, 55) = 1$, we have $m = 146$ and $n = 55$. The sum $m + n = 146 + 55 = 201$."
        },
        // 87
        {
            "type": "mcq",
            "text": "Let $\\alpha, \\beta$ be the distinct roots of the equation $x^{2}-(t^{2}-5t+6)x+1=0$, $t\\in R$ and $a_{n}=\\alpha^{n}+\\beta^{n}$. Then minimum value of $\\frac{a_{2023}+a_{2025}}{a_{2024}}$ is: [JEE Main 2024]",
            "options": [
                "$-1/2$",
                "$1/4$",
                "$-1/4$",
                "$1/2$"
            ],
            "correctAnswer": 2,
            "solution": "Using Newton's Formula on $x^2 - (t^2-5t+6)x + 1 = 0$, we have $a_n - (t^2-5t+6)a_{n-1} + a_{n-2} = 0$.\nFor $n = 2025$, this becomes $a_{2025} - (t^2-5t+6)a_{2024} + a_{2023} = 0$.\nRearranging gives $a_{2025} + a_{2023} = (t^2-5t+6)a_{2024}$.\nSo the expression $\\frac{a_{2023} + a_{2025}}{a_{2024}} = t^2 - 5t + 6$.\nThis is an upward-opening parabola in $t$. Its minimum value is $-\\frac{D}{4a} = -\\frac{(-5)^2 - 4(1)(6)}{4(1)} = -\\frac{25 - 24}{4} = -\\frac{1}{4}$."
        },
        // 88
        {
            "type": "numerical",
            "text": "Let $x_1, x_2, x_3, x_4$ be the solutions of the equation $4x^{4}+8x^{3}-17x^{2}-12x+9=0$ and $(4+x_{1}^{2})(4+x_{2}^{2})(4+x_{3}^{2})(4+x_{4}^{2})=\\frac{125}{16}m$. Then the value of m is: [JEE Main 2024]",
            "correctAnswer": 221,
            "solution": "Let $P(x) = 4x^4 + 8x^3 - 17x^2 - 12x + 9 = 4(x-x_1)(x-x_2)(x-x_3)(x-x_4)$.\nWe know $(4+x_i^2) = (x_i - 2i)(x_i + 2i)$.\nThus, $\\prod_{i=1}^4 (4+x_i^2) = \\prod (x_i - 2i) \\prod (x_i + 2i) = \\frac{P(2i)}{4} \\times \\frac{P(-2i)}{4} = \\frac{P(2i)P(-2i)}{16}$.\nEvaluate $P(2i)$: $4(2i)^4 + 8(2i)^3 - 17(2i)^2 - 12(2i) + 9 = 4(16) + 8(-8i) - 17(-4) - 24i + 9 = 64 - 64i + 68 - 24i + 9 = 141 - 88i$.\n$P(-2i)$ is its conjugate, $141 + 88i$.\n$P(2i)P(-2i) = 141^2 + 88^2 = 19881 + 7744 = 27625$.\nThe product is $\\frac{27625}{16}$. We are given this equals $\\frac{125}{16}m$.\nEquating numerators: $125m = 27625 \\implies m = 221$."
        },
        // 89
        {
            "type": "mcq",
            "text": "Let $\\alpha, \\beta$ be the roots of the equation $x^{2}+2\\sqrt{2}x-1=0$. The quadratic equation, whose roots are $\\alpha^{4}+\\beta^{4}$ and $\\frac{1}{10}(\\alpha^{6}+\\beta^{6})$ is: [JEE Main 2024]",
            "options": [
                "$x^{2}-190x+9466=0$",
                "$x^{2}-195x+9506=0$",
                "$x^{2}-195x+9466=0$",
                "$x^{2}-180x+9506=0$"
            ],
            "correctAnswer": 1,
            "solution": "From $x^2+2\\sqrt{2}x-1=0$, sum $\\alpha+\\beta = -2\\sqrt{2}$, product $\\alpha\\beta = -1$.\n$\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = (-2\\sqrt{2})^2 - 2(-1) = 8 + 2 = 10$.\n$\\alpha^4+\\beta^4 = (\\alpha^2+\\beta^2)^2 - 2\\alpha^2\\beta^2 = 100 - 2(-1)^2 = 98$. (This is the first root).\n$\\alpha^6+\\beta^6 = (\\alpha^2+\\beta^2)(\\alpha^4 - \\alpha^2\\beta^2 + \\beta^4) = 10(98 - 1) = 970$.\nThe second root is $\\frac{1}{10}(\\alpha^6+\\beta^6) = \\frac{970}{10} = 97$.\nThe new quadratic has roots 98 and 97.\nSum of roots = $98 + 97 = 195$.\nProduct of roots = $98 \\times 97 = (100-2)(100-3) = 10000 - 500 + 6 = 9506$.\nThe equation is $x^2 - 195x + 9506 = 0$."
        },
        // 90
        {
            "type": "numerical",
            "text": "If the equation $a(b-c)x^2 + b(c-a)x + c(a-b) = 0$ has equal roots, where $a+c=15$ and $b=\\frac{36}{5}$, then $a^2+c^2$ is equal to: [JEE Main 2025]",
            "correctAnswer": 117,
            "solution": "Notice that the sum of the coefficients is $a(b-c) + b(c-a) + c(a-b) = ab - ac + bc - ba + ca - cb = 0$.\nThis means $x = 1$ is always a root. Since the roots are equal, both roots must be 1.\nThe product of the roots is $1 \\times 1 = 1$, which is also $\\frac{c(a-b)}{a(b-c)}$.\nSo $\\frac{ca - cb}{ab - ac} = 1 \\implies ca - cb = ab - ac \\implies 2ac = ab + cb = b(a+c)$.\nThis implies $b = \\frac{2ac}{a+c}$, meaning $a, b, c$ are in Harmonic Progression.\nWe are given $a+c = 15$ and $b = 36/5$. Substitute these into the relation:\n$2ac = \\frac{36}{5} \\times 15 = 36 \\times 3 = 108 \\implies ac = 54$.\nWe need $a^2 + c^2 = (a+c)^2 - 2ac = 15^2 - 108 = 225 - 108 = 117$."
        },
        // 91
        {
            "type": "numerical",
            "text": "Let $\\alpha, \\beta$ be the roots of the equation $x^2-ax-b=0$ with $Im(\\alpha)<Im(\\beta)$. Let $P_n = \\alpha^n-\\beta^n$. If $P_3 = -5\\sqrt{7}i$, $P_4 = -3\\sqrt{7}i$, $P_5 = 11\\sqrt{7}i$ and $P_6 = 45\\sqrt{7}i$, then $|\\alpha^4+\\beta^4|$ is equal to: [JEE Main 2025]",
            "correctAnswer": 31,
            "solution": "By Newton's formula, $P_n - aP_{n-1} - bP_{n-2} = 0 \\implies P_n = aP_{n-1} + bP_{n-2}$.\nFor $n=5$: $11\\sqrt{7}i = a(-3\\sqrt{7}i) + b(-5\\sqrt{7}i) \\implies 11 = -3a - 5b$.\nFor $n=6$: $45\\sqrt{7}i = a(11\\sqrt{7}i) + b(-3\\sqrt{7}i) \\implies 45 = 11a - 3b$.\nSolve the system:\n1) $3a + 5b = -11 \\implies 9a + 15b = -33$\n2) $11a - 3b = 45 \\implies 55a - 15b = 225$\nAdd them: $64a = 192 \\implies a = 3$.\nSubstitute $a=3$ in (1): $3(3) + 5b = -11 \\implies 5b = -20 \\implies b = -4$.\nThe quadratic is $x^2 - 3x + 4 = 0$. Sum $\\alpha+\\beta = 3$, product $\\alpha\\beta = 4$.\n$\\alpha^2+\\beta^2 = 3^2 - 2(4) = 1$.\n$\\alpha^4+\\beta^4 = (\\alpha^2+\\beta^2)^2 - 2\\alpha^2\\beta^2 = 1^2 - 2(16) = 1 - 32 = -31$.\nThe absolute value is $|-31| = 31$."
        },
        // 92
        {
            "type": "mcq",
            "text": "The product of all the rational roots of the equation $(x^2-9x+11)^2 - (x-4)(x-5) = 3$ is equal to: [JEE Main 2025]",
            "options": [
                "14",
                "21",
                "28",
                "7"
            ],
            "correctAnswer": 0,
            "solution": "Expand the right part: $(x-4)(x-5) = x^2 - 9x + 20$.\nLet $t = x^2 - 9x + 11$. Then $x^2 - 9x + 20 = t + 9$.\nSubstitute into the equation: $t^2 - (t + 9) = 3 \\implies t^2 - t - 12 = 0 \\implies (t-4)(t+3) = 0$.\nCase 1: $t = 4 \\implies x^2 - 9x + 11 = 4 \\implies x^2 - 9x + 7 = 0$.\nThe discriminant is $D = 81 - 28 = 53$ (not a perfect square, so roots are irrational).\nCase 2: $t = -3 \\implies x^2 - 9x + 11 = -3 \\implies x^2 - 9x + 14 = 0$.\nThe discriminant is $D = 81 - 56 = 25$ (perfect square, rational roots).\nThe equation factors to $(x-2)(x-7) = 0$, so the roots are $2$ and $7$.\nThe product of the rational roots is $2 \\times 7 = 14$."
        },
        // 93
        {
            "type": "mcq",
            "text": "If $\\alpha+i\\beta$ and $\\gamma+i\\delta$ are the roots of $x^2-(3-2i)x-(2i-2)=0$, $i=\\sqrt{-1}$ then $\\alpha\\gamma+\\beta\\delta$ is equal to: [JEE Main 2025]",
            "options": [
                "2",
                "-2",
                "-6",
                "6"
            ],
            "correctAnswer": 0,
            "solution": "Let the roots be $z_1 = \\alpha+i\\beta$ and $z_2 = \\gamma+i\\delta$. Solve the quadratic using the formula: $D = (3-2i)^2 - 4(1)(-2i+2) = (9 - 12i - 4) + 8i - 8 = -3 - 4i$.\nWe need $\\sqrt{-3-4i}$. Let it be $x+iy$. $(x+iy)^2 = x^2-y^2 + 2ixy = -3 - 4i$. By inspection, $(1-2i)^2 = 1 - 4 - 4i = -3 - 4i$. Thus $\\sqrt{D} = 1-2i$.\nThe roots are $\\frac{(3-2i) \\pm (1-2i)}{2}$.\n$z_1 = \\frac{4-4i}{2} = 2-2i$. Thus $\\alpha=2, \\beta=-2$.\n$z_2 = \\frac{2}{2} = 1+0i$. Thus $\\gamma=1, \\delta=0$.\nThe requested value is $\\alpha\\gamma + \\beta\\delta = (2)(1) + (-2)(0) = 2$."
        },
        // 94
        {
            "type": "mcq",
            "text": "If the set of all $a\\in R$, for which the equation $2x^2+(a-5)x+15=3a$ has no real root, is the interval $(\\alpha, \\beta)$, and $X=\\{x\\in Z:\\alpha<x<\\beta\\}$, then $\\sum_{x\\in X}x^2$ is equal to: [JEE Main 2025]",
            "options": [
                "2139",
                "2129",
                "2109",
                "2119"
            ],
            "correctAnswer": 0,
            "solution": "Rewrite the equation: $2x^2 + (a-5)x + (15-3a) = 0$.\nFor no real roots, $D < 0 \\implies (a-5)^2 - 4(2)(15-3a) < 0$.\n$a^2 - 10a + 25 - 120 + 24a < 0 \\implies a^2 + 14a - 95 < 0$.\nFactorizing: $(a+19)(a-5) < 0 \\implies a \\in (-19, 5)$. So $\\alpha = -19, \\beta = 5$.\nThe set of integers is $X = \\{-18, -17, \\dots, 4\\}$.\nWe need the sum of their squares: $\\sum_{k=-18}^4 k^2 = \\sum_{k=1}^{18} k^2 + \\sum_{k=1}^4 k^2$.\nUsing $\\sum n^2 = \\frac{n(n+1)(2n+1)}{6}$:\n$\\frac{18(19)(37)}{6} + \\frac{4(5)(9)}{6} = 3(19)(37) + 30 = 2109 + 30 = 2139$."
        },
        // 95
        {
            "type": "numerical",
            "text": "If the set of all $a\\in R-\\{1\\}$ for which the roots of the equation $(1-a)x^2+2(a-3)x+9=0$ are positive is $(-\\infty,-\\alpha]\\cup[\\beta,\\gamma)$, then $2\\alpha+\\beta+\\gamma$ is equal to: [JEE Main 2025]",
            "correctAnswer": 7,
            "solution": "For both roots to be positive, we need: 1) $D \\ge 0$, 2) Product $> 0$, 3) Sum $> 0$.\n1) $D = 4(a-3)^2 - 36(1-a) \\ge 0 \\implies a^2 - 6a + 9 - 9 + 9a \\ge 0 \\implies a^2 + 3a \\ge 0 \\implies a \\in (-\\infty, -3] \\cup [0, \\infty)$.\n2) Product $= \\frac{9}{1-a} > 0 \\implies 1-a > 0 \\implies a < 1$.\n3) Sum $= \\frac{-2(a-3)}{1-a} > 0 \\implies \\frac{a-3}{a-1} > 0 \\implies a \\in (-\\infty, 1) \\cup (3, \\infty)$.\nIntersection: From (2), $a < 1$. Condition (3) is fully satisfied if $a < 1$. From (1), combining with $a < 1$, we get $a \\in (-\\infty, -3] \\cup [0, 1)$.\nMatching the given format $(-\\infty, -\\alpha] \\cup [\\beta, \\gamma)$, we have $-\\alpha = -3 \\implies \\alpha = 3$, $\\beta = 0$, and $\\gamma = 1$.\nThus, $2\\alpha + \\beta + \\gamma = 2(3) + 0 + 1 = 7$."
        },
        // 96
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be the roots of $x^2+\\sqrt{3}x-16=0$, and $\\gamma$ and $\\delta$ be the roots $x^2+3x-1=0$. If $P_n=\\alpha^n+\\beta^n$ and $Q_n=\\gamma^n+\\delta^n$ then $\\frac{P_{25}+\\sqrt{3}P_{24}}{2P_{23}}+\\frac{Q_{25}-Q_{23}}{Q_{24}}$ is equal to: [JEE Main 2025]",
            "options": [
                "3",
                "5",
                "7",
                "4"
            ],
            "correctAnswer": 1,
            "solution": "Apply Newton's formula to the first equation: $P_n + \\sqrt{3}P_{n-1} - 16P_{n-2} = 0$.\nFor $n=25$: $P_{25} + \\sqrt{3}P_{24} = 16P_{23}$.\nThe first fraction becomes $\\frac{16P_{23}}{2P_{23}} = 8$.\nApply Newton's formula to the second equation: $Q_n + 3Q_{n-1} - Q_{n-2} = 0 \\implies Q_n - Q_{n-2} = -3Q_{n-1}$.\nFor $n=25$: $Q_{25} - Q_{23} = -3Q_{24}$.\nThe second fraction becomes $\\frac{-3Q_{24}}{Q_{24}} = -3$.\nThe sum of the two terms is $8 + (-3) = 5$."
        },
        // 97
        {
            "type": "mcq",
            "text": "Consider the equation $x^2+4x-n=0$ where $n\\in[20,100]$ is a natural number. Then the number of all distinct values of $n$, for which the given equation has integral roots, is equal to: [JEE Main 2025]",
            "options": [
                "4",
                "5",
                "6",
                "7"
            ],
            "correctAnswer": 2,
            "solution": "For the equation $x^2 + 4x - n = 0$ to have integral roots, its discriminant must be a perfect square.\n$D = 16 - 4(-n) = 16 + 4n = 4(n+4)$. Let $4(n+4) = M^2$. Since 4 is a perfect square, $n+4$ must also be a perfect square. Let $n+4 = k^2 \\implies n = k^2 - 4$.\nWe are given $20 \\le n \\le 100$. Substitute $n$:\n$20 \\le k^2 - 4 \\le 100 \\implies 24 \\le k^2 \\le 104$.\nThe perfect squares in this range are $5^2=25, 6^2=36, 7^2=49, 8^2=64, 9^2=81, 10^2=100$.\nThere are exactly 6 such squares, yielding 6 distinct integer values for $n$."
        },
        // 98
        {
            "type": "mcq",
            "text": "If the range of the function $f(x)=\\frac{5-x}{x^2-3x+2}, x\\neq 1,2$, is $(-\\infty,\\alpha]\\cup[\\beta,\\infty)$ then $\\alpha^2+\\beta^2$ is equal to: [JEE Main 2025]",
            "options": [
                "190",
                "192",
                "188",
                "194"
            ],
            "correctAnswer": 3,
            "solution": "Let $y = \\frac{5-x}{x^2-3x+2}$. Cross-multiplying gives $y(x^2 - 3x + 2) = 5 - x \\implies yx^2 + (1 - 3y)x + 2y - 5 = 0$.\nFor real $x$, $D \\ge 0 \\implies (1 - 3y)^2 - 4y(2y - 5) \\ge 0$.\n$1 - 6y + 9y^2 - 8y^2 + 20y \\ge 0 \\implies y^2 + 14y + 1 \\ge 0$.\nThe roots of $y^2 + 14y + 1 = 0$ are $y = \\frac{-14 \\pm \\sqrt{196 - 4}}{2} = -7 \\pm \\sqrt{48} = -7 \\pm 4\\sqrt{3}$.\nThe inequality holds for $y \\le -7 - 4\\sqrt{3}$ or $y \\ge -7 + 4\\sqrt{3}$.\nSo $\\alpha = -7 - 4\\sqrt{3}$ and $\\beta = -7 + 4\\sqrt{3}$.\nWe need $\\alpha^2 + \\beta^2 = (-7 - 4\\sqrt{3})^2 + (-7 + 4\\sqrt{3})^2 = 2(49 + 48) = 2(97) = 194$."
        },
        // 99
        {
            "type": "mcq",
            "text": "Let $\\alpha$ and $\\beta$ be the roots of the equation $x^2+2ax+(3a+10)=0$ such that $\\alpha<1<\\beta$. Then the set of all possible values of $a$ is: [JEE Main 2026]",
            "options": [
                "$(-\\infty,\\frac{-11}{5})\\cup(5,\\infty)$",
                "$(-\\infty,-2)\\cup(5,\\infty)$",
                "$(-\\infty,-3)$",
                "$(-\\infty,\\frac{-11}{5})$"
            ],
            "correctAnswer": 3,
            "solution": "Let $f(x) = x^2 + 2ax + 3a + 10$. This is an upward-opening parabola since the leading coefficient is 1 ($>0$).\nFor the number 1 to lie strictly between the roots ($\\alpha < 1 < \\beta$), the function value at $x = 1$ must be negative.\nSo, $f(1) < 0 \\implies (1)^2 + 2a(1) + 3a + 10 < 0$.\n$1 + 5a + 10 < 0 \\implies 5a + 11 < 0 \\implies 5a < -11 \\implies a < -\\frac{11}{5}$.\nThis automatically guarantees that $D > 0$. The interval is $(-\\infty, -\\frac{11}{5})$."
        },
        // 100
        {
            "type": "mcq",
            "text": "The smallest positive integral value of $a$, for which all the roots of $x^4-ax^2+9=0$ are real and distinct, is equal to: [JEE Main 2026]",
            "options": [
                "9",
                "3",
                "4",
                "7"
            ],
            "correctAnswer": 3,
            "solution": "Let $t = x^2$. The equation becomes $t^2 - at + 9 = 0$.\nFor the original biquadratic to have 4 real distinct roots, the quadratic in $t$ must have 2 distinct positive roots (since $x^2 = t$ gives $x = \\pm\\sqrt{t}$, generating 2 real roots for each positive $t$).\nConditions for 2 distinct positive roots:\n1) $D > 0 \\implies a^2 - 36 > 0 \\implies a < -6$ or $a > 6$.\n2) Product of roots $> 0 \\implies 9 > 0$ (Always true).\n3) Sum of roots $> 0 \\implies a > 0$.\nTaking the intersection of all conditions, we get $a > 6$.\nThe smallest positive integer strictly greater than 6 is $a = 7$."
        }
    ]
};