window.testBank = window.testBank || {};
window.testBank['test_808'] = {
    "id": "test_808",
    "title": "MCT-1(JB) Pre-Test",
    "category": "Pre-Tests Maths",
    "uploadedAt": "2026-08-11T12:50:00Z",
    "timeLimitMins": 80,
    "shuffleQuestions": false,
    "randomizePoolSize": 0,
    "questions": [
        // 1 (Q52)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "For any $\\theta \\in \\left(\\frac{\\pi}{4}, \\frac{\\pi}{2}\\right)$, the expression $3(\\sin \\theta - \\cos \\theta)^4 + 6(\\sin \\theta + \\cos \\theta)^2 + 4\\sin^6 \\theta$ equals :",
            "options": [
                "$13 - 4\\cos^4 \\theta + 2\\sin^2 \\theta \\cos^2 \\theta$",
                "$13 - 4\\cos^4 \\theta + 6\\sin^2 \\theta \\cos^2 \\theta$",
                "$13 - 4\\cos^6 \\theta$",
                "$13 - 4\\cos^2 \\theta + 6\\cos^4 \\theta$"
            ],
            "correctAnswer": 2,
            "solution": "$3(\\sin \\theta - \\cos \\theta)^4 + 6(\\sin \\theta + \\cos \\theta)^2 + 4\\sin^6 \\theta = 3(1 - \\sin 2\\theta)^2 + 6(1 + \\sin 2\\theta) + 4(1 - \\cos^2 \\theta)^3 = 3(1 - 2\\sin 2\\theta + \\sin^2 2\\theta) + 6 + 6\\sin 2\\theta + 4(1 - 3\\cos^2 \\theta + 3\\cos^4 \\theta - \\cos^6 \\theta) = 13 + 3\\sin^2 2\\theta + 12\\cos^2 \\theta(\\cos^2 \\theta - 1) - 4\\cos^6 \\theta = 13 + 12\\sin^2 \\theta \\cos^2 \\theta - 12\\sin^2 \\theta \\cos^2 \\theta - 4\\cos^6 \\theta = 13 - 4\\cos^6 \\theta$."
        },
        // 2 (Q54)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The sum of all values of $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$ satisfying $\\sin^2 2\\theta + \\cos^4 2\\theta = \\frac{3}{4}$ is :",
            "options": [
                "$\\pi$",
                "$\\frac{\\pi}{2}$",
                "$\\frac{3\\pi}{8}$",
                "$\\frac{5\\pi}{4}$"
            ],
            "correctAnswer": 1,
            "solution": "$\\sin^2 2\\theta + \\cos^4 2\\theta = \\frac{3}{4} \\Rightarrow 1 - \\cos^2 2\\theta + \\cos^4 2\\theta = \\frac{3}{4} \\Rightarrow \\cos^4 2\\theta - \\cos^2 2\\theta + \\frac{1}{4} = 0 \\Rightarrow \\left(\\cos^2 2\\theta - \\frac{1}{2}\\right)^2 = 0 \\Rightarrow \\cos^2 2\\theta = \\frac{1}{2} \\Rightarrow 2\\cos^2 2\\theta - 1 = 0 \\Rightarrow \\cos 4\\theta = 0 \\Rightarrow 4\\theta = (2n+1)\\frac{\\pi}{2} \\Rightarrow \\theta = (2n+1)\\frac{\\pi}{8} \\in \\left[0, \\frac{\\pi}{2}\\right] \\Rightarrow \\theta = \\frac{\\pi}{8}, \\frac{3\\pi}{8}. \\text{Sum of values of } \\theta \\text{ is } \\frac{\\pi}{2}$."
        },
        // 3 (Q56)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The maximum value of $\\frac{1}{10 + 3\\cos \\theta + 5\\sin\\left(\\theta - \\frac{\\pi}{6}\\right)}$ for any real value of $\\theta$ is :",
            "options": [
                "$\\frac{\\sqrt{79}}{2}$",
                "$\\frac{1}{10 - \\sqrt{19}}$",
                "$\\frac{1}{10 + \\sqrt{19}}$",
                "$\\sqrt{34}$"
            ],
            "correctAnswer": 1,
            "solution": "$10 + 3\\cos \\theta + 5\\sin\\left(\\theta - \\frac{\\pi}{6}\\right) = 10 + 3\\cos \\theta + 5\\left(\\sin \\theta \\cos \\frac{\\pi}{6} - \\cos \\theta \\sin \\frac{\\pi}{6}\\right) = 10 + 3\\cos \\theta + \\frac{5\\sqrt{3}}{2}\\sin \\theta - \\frac{5}{2}\\cos \\theta = 10 + \\frac{1}{2}\\cos \\theta + \\frac{5\\sqrt{3}}{2}\\sin \\theta$. The maximum value of $\\frac{1}{2}\\cos \\theta + \\frac{5\\sqrt{3}}{2}\\sin \\theta$ is $\\sqrt{\\left(\\frac{1}{2}\\right)^2 + \\left(\\frac{5\\sqrt{3}}{2}\\right)^2} = \\sqrt{\\frac{1}{4} + \\frac{75}{4}} = \\sqrt{19}$. The minimum value of the denominator is $10 - \\sqrt{19}$. Hence, the maximum value of the fraction is $\\frac{1}{10 - \\sqrt{19}}$."
        },
        // 4 (Q59)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The value of $\\sin 10^\\circ \\sin 30^\\circ \\sin 50^\\circ \\sin 70^\\circ$ is :",
            "options": [
                "$\\frac{1}{18}$",
                "$\\frac{1}{32}$",
                "$\\frac{1}{16}$",
                "$\\frac{1}{36}$"
            ],
            "correctAnswer": 2,
            "solution": "$\\sin 10^\\circ \\sin 30^\\circ \\sin 50^\\circ \\sin 70^\\circ = \\frac{1}{2} \\sin 10^\\circ \\left(\\frac{1}{2}\\right) (2\\sin 50^\\circ \\sin 70^\\circ) = \\frac{1}{4} \\sin 10^\\circ (\\cos 20^\\circ - \\cos 120^\\circ) = \\frac{1}{4} \\sin 10^\\circ \\left(\\cos 20^\\circ + \\frac{1}{2}\\right) = \\frac{1}{4} \\sin 10^\\circ \\cos 20^\\circ + \\frac{1}{8} \\sin 10^\\circ = \\frac{1}{8} (2\\sin 10^\\circ \\cos 20^\\circ) + \\frac{1}{8} \\sin 10^\\circ = \\frac{1}{8} (\\sin 30^\\circ - \\sin 10^\\circ) + \\frac{1}{8} \\sin 10^\\circ = \\frac{1}{8} \\times \\frac{1}{2} = \\frac{1}{16}$."
        },
        // 5 (Q60)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of solutions of $\\sin 3x = \\cos 2x$, in the interval $\\left(\\frac{\\pi}{2}, \\pi\\right)$ is :",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "correctAnswer": 0,
            "solution": "$\\sin 3x = \\cos 2x \\Rightarrow \\sin 3x = \\sin\\left(\\frac{\\pi}{2} - 2x\\right) \\Rightarrow 3x = n\\pi + (-1)^n \\left(\\frac{\\pi}{2} - 2x\\right)$. If $n$ is even ($2k$): $5x = 2k\\pi + \\frac{\\pi}{2} \\Rightarrow x = \\frac{2k\\pi}{5} + \\frac{\\pi}{10}$. In the interval $\\left(\\frac{\\pi}{2}, \\pi\\right)$, $k=2$ gives $x = \\frac{9\\pi}{10}$ (valid). If $n$ is odd ($2k+1$): $x = (2k+1)\\pi - \\frac{\\pi}{2}$. In the given interval, only $k=0$ gives $x = \\frac{\\pi}{2}$ (which is the endpoint and excluded). Therefore, there is exactly 1 solution."
        },
        // 6 (Q61)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "$\\alpha = \\sin 36^\\circ$ is a root of which of the following equation",
            "options": [
                "$16x^4 - 10x^2 - 5 = 0$",
                "$16x^4 + 20x^2 - 5 = 9$",
                "$16x^4 - 20x^2 + 5 = 0$",
                "$16x^4 - 10x^2 + 5 = 0$"
            ],
            "correctAnswer": 2,
            "solution": "$\\alpha = \\sin 36^\\circ \\Rightarrow \\alpha^2 = \\sin^2 36^\\circ = \\frac{1 - \\cos 72^\\circ}{2} = \\frac{1 - \\frac{\\sqrt{5}-1}{4}}{2} = \\frac{5-\\sqrt{5}}{8}$. Substituting $\\alpha^2 = k = \\frac{5-\\sqrt{5}}{8}$ into the options: $16k^2 - 20k + 5 = 0$ yields $16\\left(\\frac{15-5\\sqrt{5}}{32}\\right) - 20\\left(\\frac{5-\\sqrt{5}}{8}\\right) + 5 = \\frac{15-5\\sqrt{5}}{2} - \\frac{25-5\\sqrt{5}}{2} + 5 = -5 + 5 = 0$. Thus, $16x^4 - 20x^2 + 5 = 0$ is the correct equation."
        },
        // 7 (Q51)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $a, b$ and $c$ are distinct real numbers, then the number of real solutions of the equation<br> $\\frac{(x-a)(x-b)}{(c-a)(c-b)}+\\frac{(x-b)(x-c)}{(a-b)(a-c)}+\\frac{(x-c)(x-a)}{(b-c)(b-a)}+1=2$ is",
            "options": [
                "0",
                "1",
                "2",
                "infinite"
            ],
            "correctAnswer": 3,
            "solution": "The LHS is a quadratic polynomial $f(x)$. At $x=a,b,c$, we can see $f(x)=1$. Since a quadratic polynomial cannot take the same value at three distinct points unless it is an identity, $f(x)=1$ for all $x \\in R$. Thus the equation $f(x)+1=2 \\Rightarrow 1+1=2$ is satisfied by all real $x$. Therefore, it has infinitely many solutions."
        },
        // 8 (Q53)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $x \\in R$, the numbers $5^{1+x}+5^{1-x}, a/2, 25^x + 25^{-x}$ form an A.P. then $a$ must lie in the interval:",
            "options": [
                "$[1,5]$",
                "$[2,5]$",
                "$[5,12]$",
                "$[12, \\infty)$"
            ],
            "correctAnswer": 3,
            "solution": "Let $t = 5^x + 5^{-x}$. Since $x \\in R$, by AM-GM inequality, $t \\ge 2$. The terms of the A.P. are $5t, a/2, t^2-2$. For an A.P., $2(a/2) = a = 5t + t^2 - 2$. The function $a(t) = t^2+5t-2$ is strictly increasing for $t \\ge 2$. The minimum value of $a(t)$ occurs at $t=2$, giving $4+10-2 = 12$. As $t \\to \\infty, a \\to \\infty$. Hence $a \\in [12, \\infty)$."
        },
        // 9 (Q63)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $a_1, a_2, a_3, \\dots$ be a G. P. of increasing positive numbers. Let the sum of its $6^{\\text{th}}$ and $8^{\\text{th}}$ terms be 2 and the product of its $3^{\\text{rd}}$ and $5^{\\text{th}}$ terms be $\\frac{1}{9}$. Then $6(a_2+a_4)(a_4+a_6)$ is equal to",
            "options": [
                "2",
                "3",
                "$3\\sqrt{3}$",
                "$2\\sqrt{2}$"
            ],
            "correctAnswer": 1,
            "solution": "Let the first term be $a$ and common ratio be $r$ ($r>1$). Given $a_6+a_8 = ar^5(1+r^2) = 2$ and $a_3 a_5 = a^2 r^6 = 1/9 \\Rightarrow a r^3 = 1/3$. Since $a_6+a_8 = a r^3 \\cdot r^2 (1+r^2) = \\frac{r^2}{3}(1+r^2) = 2 \\Rightarrow r^2(1+r^2) = 6 \\Rightarrow r^4+r^2-6=0 \\Rightarrow (r^2+3)(r^2-2)=0 \\Rightarrow r^2=2$. Consequently, $ar = \\frac{1}{6}, ar^3 = \\frac{1}{3}, ar^5 = \\frac{2}{3}$. Thus, $a_2+a_4 = ar+ar^3 = \\frac{1}{2}$ and $a_4+a_6 = ar^3+ar^5 = 1$. The expression $6(a_2+a_4)(a_4+a_6) = 6 \\times \\frac{1}{2} \\times 1 = 3$."
        },
        // 10 (Q64)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Out of all the patients in a hospital 89% are found to be suffering from heart ailment and 98% are suffering from lungs infection. If K% of them are suffering from both ailments, then K can not belong to the set :",
            "options": [
                "$\\{80, 83, 86, 89\\}$",
                "$\\{84, 87, 90, 93\\}$",
                "$\\{79, 81, 83, 85\\}$",
                "$\\{84, 86, 88, 90\\}$"
            ],
            "correctAnswer": 2,
            "solution": "Let $A$ be the set of patients with heart ailment and $B$ be the set with lungs infection. $P(A) = 0.89, P(B) = 0.98$. Since $P(A \\cup B) \\le 1 \\Rightarrow 0.89+0.98 - P(A \\cap B) \\le 1 \\Rightarrow P(A \\cap B) \\ge 0.87 \\Rightarrow K \\ge 87$. Also, $P(A \\cap B) \\le \\min(P(A), P(B)) = 0.89 \\Rightarrow K \\le 89$. Therefore, $K \\in [87, 89]$. Option (3) contains no values in this interval, so K can not belong to this set."
        },
        // 11 (Q67)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The general solution of $\\sin x - \\cos x = \\sqrt{2}$ for any integer $n$ is :",
            "options": [
                "$n\\pi$",
                "$2n\\pi + \\frac{3\\pi}{4}$",
                "$2n\\pi$",
                "$(2n+1)\\pi$"
            ],
            "correctAnswer": 1,
            "solution": "$\\sin x - \\cos x = \\sqrt{2} \\Rightarrow \\sqrt{2} \\sin \\left(x - \\frac{\\pi}{4}\\right) = \\sqrt{2} \\Rightarrow \\sin \\left(x - \\frac{\\pi}{4}\\right) = 1$. Thus, $x - \\frac{\\pi}{4} = 2n\\pi + \\frac{\\pi}{2} \\Rightarrow x = 2n\\pi + \\frac{3\\pi}{4}, n \\in Z$."
        },
        // 12 (Q68)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $m$ and $M$ are the minimum and the maximum values of $4 + \\frac{1}{2} \\sin^2 2x - 2 \\cos^4 x$, $x \\in R$, then $M - m$ is equal to",
            "options": [
                "$\\frac{7}{4}$",
                "$\\frac{15}{4}$",
                "$\\frac{9}{4}$",
                "$\\frac{1}{4}$"
            ],
            "correctAnswer": 2,
            "solution": "Let $y = 4 + 2\\sin^2 x \\cos^2 x - 2\\cos^4 x = 4 - 2\\cos^2 x (\\cos^2 x - \\sin^2 x) = 4 - 2\\cos^2 x \\cos 2x$. Let $t = \\cos^2 x \\in [0, 1]$, then $\\cos 2x = 2t-1$. So $y = 4 - 2t(2t-1) = -4t^2 + 2t + 4$. Maximum $M$ occurs at $t = 1/4 \\Rightarrow M = 17/4$. Minimum $m$ occurs at $t = 1 \\Rightarrow m = 2$. $M - m = 17/4 - 8/4 = 9/4$."
        },
        // 13 (Q69)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If both the roots of the quadratic equation $x^2 - mx + 4 = 0$ are real and distinct and they lie in the interval $[1, 5]$, then $m$ lies in the interval :",
            "options": [
                "$(5, 6)$",
                "$(4, 5)$",
                "$(3, 4)$",
                "$(-5, -4)$"
            ],
            "correctAnswer": 1,
            "solution": "Let $f(x) = x^2 - mx + 4$. For roots to be real and distinct: $D > 0 \\Rightarrow m^2 > 16 \\Rightarrow m > 4$ or $m < -4$. For both roots to lie in $[1, 5]$ and be distinct: $1 < m/2 < 5 \\Rightarrow 2 < m < 10$ and $f(1) \\ge 0, f(5) \\ge 0$. From $f(1) = 1 - m + 4 \\ge 0 \\Rightarrow m \\le 5$. Intersection of all conditions gives $4 < m \\le 5$. Option (2) matches this interval."
        },
        // Q14(Q56 - New Paper Source)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\alpha, \\beta$ are roots of $a(x^2-1)+2bx=0$ then which one of the following are the roots of same equation.",
            "options": [
                "$\\alpha+\\beta, \\alpha-\\beta$",
                "$2\\alpha+\\frac{1}{\\beta}, 2\\beta+\\frac{1}{\\alpha}$",
                "$\\alpha+\\frac{1}{\\beta}, \\beta-\\frac{1}{\\alpha}$",
                "$\\alpha+\\frac{1}{2\\beta}, \\beta-\\frac{1}{2\\alpha}$"
            ],
            "correctAnswer": 1,
            "solution": "The equation is $ax^2 + 2bx - a = 0$. Since $\\alpha, \\beta$ are roots, $\\alpha+\\beta = -\\frac{2b}{a}$ and $\\alpha\\beta = -1 \\Rightarrow \\frac{1}{\\beta} = -\\alpha$ and $\\frac{1}{\\alpha} = -\\beta$. Checking Option (2): $2\\alpha + \\frac{1}{\\beta} = 2\\alpha - \\alpha = \\alpha$ and $2\\beta + \\frac{1}{\\alpha} = 2\\beta - \\beta = \\beta$. These are the original roots. Hence option (2) is correct."
        },
        //Q15 (Q61 - New Paper Source)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\alpha, \\beta, \\gamma$ are the roots of the cubic $2009x^3+2x^2+1=0$, then the value of $\\alpha^{-2}+\\beta^{-2}+\\gamma^{-2}$ is equal to",
            "options": [
                "4",
                "-2",
                "2",
                "-4"
            ],
            "correctAnswer": 3,
            "solution": "For the cubic $2009x^3+2x^2+1=0$, we have $\\alpha+\\beta+\\gamma = -\\frac{2}{2009}$, $\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha = 0$, and $\\alpha\\beta\\gamma = -\\frac{1}{2009}$. $\\alpha^{-2}+\\beta^{-2}+\\gamma^{-2} = \\frac{\\beta^2\\gamma^2 + \\alpha^2\\gamma^2 + \\alpha^2\\beta^2}{(\\alpha\\beta\\gamma)^2} = \\frac{(\\alpha\\beta+\\beta\\gamma+\\gamma\\alpha)^2 - 2\\alpha\\beta\\gamma(\\alpha+\\beta+\\gamma)}{(\\alpha\\beta\\gamma)^2} = \\frac{0 - 2\\left(-\\frac{1}{2009}\\right)\\left(-\\frac{2}{2009}\\right)}{\\left(-\\frac{1}{2009}\\right)^2} = \\frac{-\\frac{4}{2009^2}}{\\frac{1}{2009^2}} = -4$."
        },
                // (Q66 - New Source)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The values of $k$, for which the equation $x^2 + 2(k-1)x + k + 5 = 0$ possess at least one positive root, are $(-\\infty, -b]$. Find value of $b$.",
            "options": [
                "1",
                "2",
                "3",
                "5"
            ],
            "correctAnswer": 0,
            "solution": "Let $S = \\alpha + \\beta$ and $P = \\alpha \\beta$. $S = -2(k-1), P = k+5$. Roots are real if $\\Delta \\ge 0 \\Rightarrow k \\le -1$ or $k \\ge 4$. For $k \\ge 4$, $S < 0$ and $P > 0$ implies both roots are negative. For $k \\le -1$, $S > 0$. Subcases: $k = -5 \\Rightarrow P = 0$ (one positive root, one zero). $k < -5 \\Rightarrow P < 0$ (roots have opposite signs, one positive). $-5 < k \\le -1 \\Rightarrow P > 0, S > 0$ (both roots positive). Thus, for $k \\le -1$, there is always at least one positive root. So $(-\\infty, -1] = (-\\infty, -b] \\Rightarrow b = 1$."
        },
        // (Q68 - New Source)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $A_1$ and $A_2$ be two arithmetic means and $G_1, G_2, G_3$ be three geometric means of two distinct positive numbers. Then $G_1^4 + G_2^4 + G_3^4 + G_1^2 G_3^2$ is equal to",
            "options": [
                "$2(A_1 + A_2)G_1 G_3$",
                "$(A_1 + A_2)^2 G_1 G_3$",
                "$2(A_1 + A_2)G_1^2 G_3^2$",
                "$(A_1 + A_2)G_1^2 G_3^2$"
            ],
            "correctAnswer": 1,
            "solution": "Let the numbers be $a$ and $b$. $G_1 G_3 = G_2^2 = ab$. Therefore, $G_2^4 = G_1^2 G_3^2$. The given expression simplifies to $G_1^4 + G_3^4 + 2G_1^2 G_3^2 = (G_1^2 + G_3^2)^2$. Also, $A_1 + A_2 = a+b$. It is a standard identity that $G_1^2 + G_3^2 = (a+b)\\sqrt{G_1 G_3} = (A_1+A_2)\\sqrt{G_1 G_3}$. Squaring both sides yields $(G_1^2 + G_3^2)^2 = (A_1 + A_2)^2 G_1 G_3$."
        },
        // (Q63 - New Source)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\alpha$ and $\\beta$ are the roots of the quadratic equation, $x^2 + x \\sin \\theta - 2 \\sin \\theta = 0$, $\\theta \\in \\left(0, \\frac{\\pi}{2}\\right)$, then $\\frac{\\alpha^{12} + \\beta^{12}}{(\\alpha^{-12} + \\beta^{-12})(\\alpha - \\beta)^{24}}$ is equal to :",
            "options": [
                "$\\frac{2^{12}}{(\\sin \\theta - 8)^6}$",
                "$\\frac{2^{12}}{(\\sin \\theta + 8)^{12}}$",
                "$\\frac{2^{12}}{(\\sin \\theta - 4)^{12}}$",
                "$\\frac{2^6}{(\\sin \\theta + 8)^{12}}$"
            ],
            "correctAnswer": 1,
            "solution": "For the equation $x^2 + x \\sin \\theta - 2\\sin \\theta = 0$, $\\alpha + \\beta = -\\sin \\theta$ and $\\alpha \\beta = -2\\sin \\theta$. The discriminant gives $(\\alpha - \\beta)^2 = \\sin^2 \\theta - 4(-2\\sin \\theta) = \\sin^2 \\theta + 8\\sin \\theta = \\sin \\theta (\\sin \\theta + 8)$. Substituting into the expression yields $\\frac{\\alpha^{12} + \\beta^{12}}{(\\alpha^{-12} + \\beta^{-12})(\\alpha-\\beta)^{24}} = \\frac{(\\alpha\\beta)^{12}}{(\\alpha-\\beta)^{24}} = \\left(\\frac{\\alpha\\beta}{(\\alpha-\\beta)^2}\\right)^{12} = \\left(\\frac{-2\\sin\\theta}{\\sin\\theta(\\sin\\theta+8)}\\right)^{12} = \\frac{2^{12}}{(\\sin\\theta+8)^{12}}$."
        },
                // Q.69
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $5\\sin x\\cos y = 1$ and $4\\tan x = \\tan y$, then",
            "options": [
                "$x = (m + 2n)\\frac{\\pi}{2} + \\frac{\\pi}{4} + (-1)^m \\frac{1}{2} \\sin^{-1} \\left(-\\frac{3}{5}\\right); m, n \\in Z$",
                "$y = (2n - m)\\frac{\\pi}{3} + \\frac{\\pi}{4} + (-1)^{m+1} \\frac{1}{2} \\sin^{-1} \\left(-\\frac{3}{5}\\right); m, n \\in Z$",
                "$x = (m + n)\\frac{\\pi}{2} + \\frac{\\pi}{4} + (-1)^m \\frac{1}{2} \\sin^{-1} \\left(-\\frac{3}{5}\\right); m, n \\in Z$",
                "$y = (n - m)\\frac{\\pi}{2} + \\frac{\\pi}{4} + (-1)^{m+1} \\frac{1}{2} \\sin^{-1} \\left(-\\frac{3}{5}\\right); m, n \\in Z$"
            ],
            "correctAnswer": 0,
            "solution": "Given $5\\sin x \\cos y = 1$ and $4\\tan x = \\tan y \\Rightarrow \\cos x \\sin y = \\frac{4}{5}$. Adding the equations gives $\\sin(x+y) = 1$, and subtracting gives $\\sin(x-y) = -\\frac{3}{5}$. Thus, $x+y = 2n\\pi + \\frac{\\pi}{2}$ and $x-y = m\\pi + (-1)^m \\sin^{-1}\\left(-\\frac{3}{5}\\right)$. Solving for $x$ yields $x = \\frac{m+2n}{2}\\pi + \\frac{\\pi}{4} + \\frac{(-1)^m}{2} \\sin^{-1}\\left(-\\frac{3}{5}\\right)$, which corresponds to Option (1)."
        },
        // Q.70
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The solution of inequality $\\sqrt{5 - 2\\sin x} \\ge 6\\sin x - 1$ is",
            "options": [
                "$[\\pi(12n - 7)/6, \\pi(12n + 7)/6](n \\in Z)$",
                "$[\\pi(12n - 7)/6, \\pi(12n + 1)/6](n \\in Z)$",
                "$[\\pi(2n - 7)/6, \\pi(2n + 1)/6](n \\in Z)$",
                "$[\\pi(12n - 7)/3, \\pi(12n + 1)/3](n \\in Z)$"
            ],
            "correctAnswer": 1,
            "solution": "Let $\\sin x = t$. We have $\\sqrt{5 - 2t} \\ge 6t - 1$. Case 1: $6t - 1 < 0 \\Rightarrow t < 1/6$ (always true since LHS $\\ge 0$). Case 2: $t \\ge 1/6$, squaring gives $5 - 2t \\ge 36t^2 - 12t + 1 \\Rightarrow 36t^2 - 10t - 4 \\le 0 \\Rightarrow -2/9 \\le t \\le 1/2$. Intersecting with $t \\ge 1/6$ gives $1/6 \\le t \\le 1/2$. The union of both cases gives $t \\le 1/2$. The general solution for $\\sin x \\le 1/2$ is $x \\in \\left[\\frac{(12n-7)\\pi}{6}, \\frac{(12n+1)\\pi}{6}\\right], n \\in Z$, which matches Option (2)."
        },
        // Q.71
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of equations of the form $ax^2 + bx + 1 = 0$, where $a, b \\in \\{1, 2, 3, 4\\}$, having real roots is",
            "correctAnswer": 7,
            "solution": "Condition for real roots: $D \\ge 0 \\Rightarrow b^2 - 4a \\ge 0 \\Rightarrow b^2 \\ge 4a$. Checking possible pairs $(a, b)$: $a=1 \\Rightarrow b \\in \\{2, 3, 4\\}$ (3 equations), $a=2 \\Rightarrow b \\in \\{3, 4\\}$ (2 equations), $a=3 \\Rightarrow b \\in \\{4\\}$ (1 equation), $a=4 \\Rightarrow b \\in \\{4\\}$ (1 equation). Total count = $3 + 2 + 1 + 1 = 7$."
        },
        // Q.72
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $a, b, c$ and $d$ be positive real numbers such that $a + b + c + d = 11$. If the maximum value of $a^5 b^3 c^2 d$ is $3750\\beta$, then the value of $\\beta$ is :",
            "correctAnswer": 90,
            "solution": "Using weighted AM-GM inequality: $\\frac{5\\cdot \\frac{a}{5} + 3\\cdot \\frac{b}{3} + 2\\cdot \\frac{c}{2} + 1\\cdot d}{5 + 3 + 2 + 1} \\ge \\left( \\left(\\frac{a}{5}\\right)^5 \\cdot \\left(\\frac{b}{3}\\right)^3 \\cdot \\left(\\frac{c}{2}\\right)^2 \\cdot d \\right)^{\\frac{1}{11}}$. Substituting $a+b+c+d=11$ gives $1 \\ge \\left( \\frac{a^5 b^3 c^2 d}{5^5 \\cdot 3^3 \\cdot 2^2} \\right)^{\\frac{1}{11}} \\Rightarrow a^5 b^3 c^2 d \\le 337500$. Given $337500 = 3750\\beta \\Rightarrow \\beta = 90$."
        },
        // Q.73
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If one real root of the quadratic equation $81x^2 + kx + 256 = 0$ is cube of the other root, then a value of $600 - k$ is (where k is positive)",
            "correctAnswer": 300,
            "solution": "Let roots be $r$ and $r^3$. Product of roots: $r^4 = \\frac{256}{81} = \\left(\\frac{4}{3}\\right)^4 \\Rightarrow r = \\pm\\frac{4}{3}$. Since $k>0$, sum of roots is negative: $-\\frac{k}{81} < 0$. Thus, $r = -\\frac{4}{3}$ and $r^3 = -\\frac{64}{27}$. Sum of roots: $\\frac{-4}{3} - \\frac{64}{27} = -\\frac{100}{27} = -\\frac{k}{81} \\Rightarrow k = 300$. Therefore, $600 - k = 300$."
        },
        // Q.74
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\tan A$ and $\\tan B$ are the roots of the quadratic equation, $3x^2 - 10x - 25 = 0$, then the value of $50 + 3\\sin^2(A+B) - 10\\sin(A+B)\\cos(A+B) - 25\\cos^2(A+B)$ is :",
            "correctAnswer": 25,
            "solution": "Sum of roots $\\tan A + \\tan B = \\frac{10}{3}$, Product $\\tan A \\tan B = -\\frac{25}{3}$. $\\tan(A+B) = \\frac{\\frac{10}{3}}{1 - (-\\frac{25}{3})} = \\frac{5}{14}$. Divide the expression by $\\cos^2(A+B)$: $50(1+t^2) + 3t^2 - 10t - 25$ where $t = \\frac{5}{14}$. Simplifying the numerator gives $\\frac{5525}{196}$ and the denominator $1+t^2 = \\frac{221}{196}$. The final value is $\\frac{5525}{221} = 25$."
        },
        // Q.75
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $S = \\left\\{ x : x \\in R \\text{ and } (\\sqrt{3}+\\sqrt{2})^{x^2-4} + (\\sqrt{3}-\\sqrt{2})^{x^2-4} = 10 \\right\\}$. Then $n(S)$ is equal to",
            "correctAnswer": 4,
            "solution": "Let $y = (\\sqrt{3}+\\sqrt{2})^{x^2-4}$, so $y + \\frac{1}{y} = 10 \\Rightarrow y^2 - 10y + 1 = 0 \\Rightarrow y = 5 \\pm 2\\sqrt{6} = (\\sqrt{3} \\pm \\sqrt{2})^2$. Thus, $x^2 - 4 = 2 \\Rightarrow x^2 = 6 \\Rightarrow x = \\pm\\sqrt{6}$ and $x^2 - 4 = -2 \\Rightarrow x^2 = 2 \\Rightarrow x = \\pm\\sqrt{2}$. There are 4 distinct solutions, so $n(S) = 4$."
        }        
    ]
};