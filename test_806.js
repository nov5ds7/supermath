window.testBank = window.testBank || {};
window.testBank['test_805'] = {
    "id": "test_805",
    "title": "ECT-1 Pre-Test Maths",
    "category": "Pre-Tests Maths",
    "uploadedAt": "2026-08-10T12:30:00Z",
    "timeLimitMins": 100,
    "shuffleQuestions": false,
    "randomizePoolSize": 0,
    questions: [
        // 1
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the roots of equation $\\frac{1}{x+p} + \\frac{1}{x+q} = \\frac{1}{r}$ are equal in magnitude but opposite in sign, then $(p+q) = $",
            "options": [
                "$2r$",
                "$r$",
                "$-2r$",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Substitute $x = t$. $\\frac{1}{t+p} + \\frac{1}{t+q} = \\frac{1}{r} \\Rightarrow \\frac{2t + p + q}{t^2 + (p+q)t + pq} = \\frac{1}{r}$. Cross-multiplying gives $t^2 + (p+q-2r)t + pq - r(p+q) = 0$. Since the roots are equal in magnitude and opposite in sign, the sum of the roots is 0, which means the coefficient of $t$ is 0. So, $p+q-2r = 0 \\Rightarrow p+q = 2r$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "$7^{\\text{th}}$ term of an A.P. is 40, then the sum of first 13 terms is",
            "options": [
                "53",
                "520",
                "1040",
                "2080"
            ],
            "correctAnswer": 1,
            "solution": "Let the first term be $a$ and common difference be $d$. $T_7 = a + 6d = 40$. Sum of the first 13 terms $S_{13} = \\frac{13}{2}(2a + 12d) = \\frac{13}{2} \\times 2(a + 6d) = 13 \\times 40 = 520$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The first term of an A.P. is 2 and common difference is 4. The sum of its 40 terms will be",
            "options": [
                "3200",
                "1600",
                "200",
                "2800"
            ],
            "correctAnswer": 0,
            "solution": "We know $S_n = \\frac{n}{2}[2a + (n-1)d]$. Substituting $n=40, a=2, d=4$, we get $S_{40} = \\frac{40}{2}[2(2) + (39)4] = 20[4 + 156] = 20 \\times 160 = 3200$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The sum of the first and third term of an A.P. is 12 and the product of first and second term is 24, the first term is",
            "options": [
                "1",
                "8",
                "4",
                "6"
            ],
            "correctAnswer": 2,
            "solution": "Let the first term be $a$ and common difference be $d$. Sum of $1^{\\text{st}}$ and $3^{\\text{rd}}$ term $= a + (a+2d) = 12 \\Rightarrow 2a+2d=12 \\Rightarrow a+d = 6$. Product of $1^{\\text{st}}$ and $2^{\\text{nd}}$ term $= a(a+d) = 24 \\Rightarrow a(6) = 24 \\Rightarrow a = 4$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $S_r$ denotes the sum of the first $r$ terms of an A.P., then $\\frac{S_{3r} - S_{r-1}}{S_{2r} - S_{2r-1}}$ is equal to",
            "options": [
                "$2r - 1$",
                "$2r + 1$",
                "$4r + 1$",
                "$2r + 3$"
            ],
            "correctAnswer": 1,
            "solution": "$S_{3r} - S_{r-1}$ represents the sum of the $r^{\\text{th}}$ to the $3r^{\\text{th}}$ term. The number of terms in this sum is $3r - r + 1 = 2r+1$. The average of these terms is the $2r^{\\text{th}}$ term. Thus $S_{3r} - S_{r-1} = (2r+1) T_{2r}$. The denominator $S_{2r} - S_{2r-1}$ is simply the $2r^{\\text{th}}$ term, $T_{2r}$. Hence the ratio is $\\frac{(2r+1) T_{2r}}{T_{2r}} = 2r+1$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The harmonic mean of the roots of the equation $(5+\\sqrt{2})x^2 - (4+\\sqrt{3})x + 8 + 2\\sqrt{3} = 0$ is",
            "options": [
                "2",
                "4",
                "6",
                "8"
            ],
            "correctAnswer": 1,
            "solution": "Let the roots be $\\alpha$ and $\\beta$. Sum of roots $S = \\frac{4+\\sqrt{3}}{5+\\sqrt{2}}$. Product of roots $P = \\frac{8+2\\sqrt{3}}{5+\\sqrt{2}} = \\frac{2(4+\\sqrt{3})}{5+\\sqrt{2}} = 2S$. The harmonic mean is given by $\\frac{2\\alpha\\beta}{\\alpha+\\beta} = \\frac{2P}{S} = \\frac{2(2S)}{S} = 4$."
        },
        // 7
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $a, b, c$ are in H.P., then the value of $\\left(\\frac{1}{b} + \\frac{1}{c} - \\frac{1}{a}\\right)\\left(\\frac{1}{c} + \\frac{1}{a} - \\frac{1}{b}\\right)$ is",
            "options": [
                "$\\frac{2}{bc} + \\frac{1}{b^2}$",
                "$\\frac{3}{c^2} + \\frac{2}{ca}$",
                "$\\frac{3}{b^2} - \\frac{2}{ab}$",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "Since $a,b,c$ are in H.P., $\\frac{1}{b} = \\frac{1}{2}\\left(\\frac{1}{a}+\\frac{1}{c}\\right) \\Rightarrow b = \\frac{2ac}{a+c}$. Substituting into the expression and simplifying yields $\\frac{3}{b^2} - \\frac{2}{ab}$, which matches Option 3."
        },
        // 8
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If 3 is a root of $x^2 + kx - 24 = 0$, it is also a root of",
            "options": [
                "$x^2 + 5x + k = 0$",
                "$x^2 - 5x + k = 0$",
                "$x^2 - kx + 6 = 0$",
                "$x^2 + kx + 24 = 0$"
            ],
            "correctAnswer": 2,
            "solution": "Substitute $x=3$ into $x^2 + kx - 24 = 0 \\Rightarrow 9 + 3k - 24 = 0 \\Rightarrow 3k = 15 \\Rightarrow k=5$. Now check which equation satisfies $x=3$ with $k=5$. $x^2 - 5x + 6 = 0 \\Rightarrow (3)^2 - 5(3) + 6 = 0$. Thus, it is a root of option (3)."
        },
        // 9
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "For what values of $k$ will the equation $x^2 - 2(1+3k)x + 7(3+2k) = 0$ have equal roots",
            "options": [
                "$1, -10/9$",
                "$2, -10/9$",
                "$3, -10/9$",
                "$4, -10/9$"
            ],
            "correctAnswer": 1,
            "solution": "For equal roots, Discriminant $D = 0 \\Rightarrow b^2 - 4ac = 0$. $[-2(1+3k)]^2 - 4(1)[7(3+2k)] = 0 \\Rightarrow 4(1+3k)^2 - 28(3+2k) = 0$. Dividing by 4: $(1+3k)^2 - 7(3+2k) = 0 \\Rightarrow 9k^2 - 8k - 20 = 0 \\Rightarrow (9k+10)(k-2) = 0 \\Rightarrow k = 2$ or $k = -10/9$."
        },
        // 10
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The numbers $(\\sqrt{2} + 1), 1, (\\sqrt{2} - 1)$ will be in",
            "options": [
                "A.P.",
                "G.P.",
                "H.P.",
                "None of these"
            ],
            "correctAnswer": 1,
            "solution": "Check the common ratio $r = \\frac{1}{\\sqrt{2}+1} = \\frac{\\sqrt{2}-1}{(\\sqrt{2}+1)(\\sqrt{2}-1)} = \\sqrt{2} - 1$. Also $\\frac{\\sqrt{2}-1}{1} = \\sqrt{2} - 1$. Since the common ratio is the same, they are in G.P."
        },
        // 11
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the $p^{\\text{th}}, q^{\\text{th}}$ and $r^{\\text{th}}$ term of a G.P. are $a, b, c$ respectively, then $a^{q-r} \\cdot b^{r-p} \\cdot c^{p-q}$ is equal to",
            "options": [
                "0",
                "1",
                "$abc$",
                "$pqr$"
            ],
            "correctAnswer": 1,
            "solution": "Let the first term be $A$ and common ratio $R$. $a = AR^{p-1}, b = AR^{q-1}, c = AR^{r-1}$. Substitute into the expression: $A^{(q-r)+(r-p)+(p-q)} \\cdot R^{(p-1)(q-r) + (q-1)(r-p) + (r-1)(p-q)} = A^0 \\cdot R^0 = 1$."
        },
        // 12
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the third term of a G.P. is 4 then the product of its first 5 terms is",
            "options": [
                "$4^3$",
                "$4^4$",
                "$4^5$",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "Let first term be $a$ and common ratio $r$. Third term $T_3 = ar^2 = 4$. Product of first 5 terms $= a \\cdot ar \\cdot ar^2 \\cdot ar^3 \\cdot ar^4 = a^5 r^{10} = (ar^2)^5 = 4^5$."
        },
        // 13
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the difference between the corresponding roots of $x^2 + ax + b = 0$ and $x^2 + bx + a = 0$ is same and $a \\neq b$, then",
            "options": [
                "$a + b + 4 = 0$",
                "$a + b - 4 = 0$",
                "$a - b - 4 = 0$",
                "$a - b + 4 = 0$"
            ],
            "correctAnswer": 0,
            "solution": "Difference of roots of $x^2+ax+b=0$ is $\\sqrt{a^2-4b}$. Difference of roots of $x^2+bx+a=0$ is $\\sqrt{b^2-4a}$. Since differences are same, $a^2-4b = b^2-4a \\Rightarrow a^2 - b^2 + 4a - 4b = 0 \\Rightarrow (a-b)(a+b+4) = 0$. Since $a \\neq b$, $a+b+4 = 0$."
        },
        // 14
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The $19^{\\text{th}}$ term from the end of the series $2 + 6 + 10 + \\dots + 86$ is",
            "options": [
                "6",
                "18",
                "14",
                "10"
            ],
            "correctAnswer": 2,
            "solution": "First term $a = 2$, common difference $d = 4$, last term $l = 86$. $l = a + (n-1)d \\Rightarrow 86 = 2 + (n-1)4 \\Rightarrow n = 22$ (total terms). The $19^{\\text{th}}$ term from the end is the $(22-19+1)^{\\text{th}} = 4^{\\text{th}}$ term from the start. $T_4 = 2 + (4-1)4 = 14$."
        },
        // 15
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "In a certain A.P., 5 times the $5^{\\text{th}}$ term is equal to 8 times the $8^{\\text{th}}$ term, then its $13^{\\text{th}}$ term is",
            "options": [
                "0",
                "-1",
                "-12",
                "-13"
            ],
            "correctAnswer": 0,
            "solution": "Let the first term be $a$ and common difference $d$. $5(a+4d) = 8(a+7d) \\Rightarrow 5a+20d = 8a+56d \\Rightarrow 3a+36d=0 \\Rightarrow a+12d=0$. The $13^{\\text{th}}$ term is $T_{13} = a+12d = 0$."
        },
        // 16
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $7^{\\text{th}}$ and $13^{\\text{th}}$ term of an A.P. be 34 and 64 respectively, then its $18^{\\text{th}}$ term is",
            "options": [
                "87",
                "88",
                "89",
                "90"
            ],
            "correctAnswer": 2,
            "solution": "Let the first term be $a$ and common difference $d$. $T_7 = a+6d = 34$ and $T_{13} = a+12d = 64$. Subtracting gives $6d = 30 \\Rightarrow d = 5$. Substituting back gives $a = 4$. The $18^{\\text{th}}$ term is $T_{18} = a+17d = 4 + 17(5) = 89$."
        },
        // 17
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the sum of the roots of the quadratic equation $ax^2 + bx + c = 0$ is equal to the sum of the squares of their reciprocals, then $a/c, b/a, c/b$ are in",
            "options": [
                "A.P.",
                "G.P.",
                "H.P.",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "Let roots be $\\alpha, \\beta$. $\\alpha+\\beta = -b/a, \\alpha\\beta = c/a$. Given $\\alpha+\\beta = \\frac{1}{\\alpha^2}+\\frac{1}{\\beta^2} = \\frac{(\\alpha+\\beta)^2-2\\alpha\\beta}{(\\alpha\\beta)^2}$. Substituting and simplifying gives $2a^2c = ab^2+bc^2 \\Rightarrow \\frac{2a}{b} = \\frac{b}{c}+\\frac{c}{a}$. This implies $\\frac{b}{c}, \\frac{a}{b}, \\frac{c}{a}$ are in A.P. Hence, their reciprocals $\\frac{c}{b}, \\frac{b}{a}, \\frac{a}{c}$ are in H.P., which means $\\frac{a}{c}, \\frac{b}{a}, \\frac{c}{b}$ are in H.P."
        },
        // 18
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Let $\\alpha, \\beta$ be the roots of $x^2 - x + p = 0$ and $\\gamma, \\delta$ be root of $x^2 - 4x + q = 0$. If $\\alpha, \\beta, \\gamma, \\delta$ are in G.P., then the integral value of $p$ and $q$ respectively are",
            "options": [
                "$-2, -32$",
                "$-2, 3$",
                "$-6, 3$",
                "$-6, -32$"
            ],
            "correctAnswer": 0,
            "solution": "Let the G.P. be $a, ar, ar^2, ar^3$. Then $\\alpha+\\beta = a(1+r) = 1$ and $\\gamma+\\delta = ar^2(1+r) = 4 \\Rightarrow r^2 = 4 \\Rightarrow r = \\pm 2$. If $r=2$, $a(1+2) = 1 \\Rightarrow a = 1/3$ (not integral). If $r=-2$, $a(1-2)=1 \\Rightarrow a=-1$. Then $p = \\alpha\\beta = a^2r = (-1)^2(-2) = -2$, and $q = \\gamma\\delta = (ar^2)(ar^3) = a^2r^5 = (-1)^2(-2)^5 = -32$."
        },
        // 19
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Let two numbers have arithmetic mean 9 and geometric mean 4. Then these numbers are the roots of the quadratic equation",
            "options": [
                "$x^2 - 18x - 16 = 0$",
                "$x^2 - 18x + 16 = 0$",
                "$x^2 + 18x - 16 = 0$",
                "$x^2 + 18x + 16 = 0$"
            ],
            "correctAnswer": 1,
            "solution": "Let the numbers be $\\alpha$ and $\\beta$. Arithmetic Mean = $\\frac{\\alpha+\\beta}{2} = 9 \\Rightarrow \\alpha+\\beta = 18$. Geometric Mean = $\\sqrt{\\alpha\\beta} = 4 \\Rightarrow \\alpha\\beta = 16$. The quadratic equation with roots $\\alpha$ and $\\beta$ is $x^2 - (\\alpha+\\beta)x + \\alpha\\beta = 0 \\Rightarrow x^2 - 18x + 16 = 0$."
        },
        // 20
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\frac{a}{b}, \\frac{b}{c}, \\frac{c}{a}$ are in H.P., then",
            "options": [
                "$a^2b, c^2a, b^2c$ are in A.P.",
                "$a^2b, b^2c, c^2a$ are in H.P.",
                "$a^2b, b^2c, c^2a$ are in G.P.",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Given $\\frac{a}{b}, \\frac{b}{c}, \\frac{c}{a}$ are in H.P. $\\Rightarrow \\frac{b}{a}, \\frac{c}{b}, \\frac{a}{c}$ are in A.P. $\\Rightarrow 2\\frac{c}{b} = \\frac{b}{a} + \\frac{a}{c} \\Rightarrow \\frac{2c}{b} = \\frac{bc+a^2}{ac} \\Rightarrow 2ac^2 = b^2c + a^2b$. This is the condition for $a^2b, c^2a, b^2c$ to be in A.P. (i.e., $2(c^2a) = a^2b + b^2c$)."
        },
        // 21
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $a, b, c$ are in G.P., then $\\log_a x, \\log_b x, \\log_c x$ are in",
            "options": [
                "A.P.",
                "G.P.",
                "H.P.",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "If $a, b, c$ are in G.P., then $b^2 = ac \\Rightarrow \\log_x b^2 = \\log_x (ac) \\Rightarrow 2\\log_x b = \\log_x a + \\log_x c$. This implies $\\log_x a, \\log_x b, \\log_x c$ are in A.P. Taking reciprocals, $\\frac{1}{\\log_x a}, \\frac{1}{\\log_x b}, \\frac{1}{\\log_x c}$ are in H.P. $\\Rightarrow \\log_a x, \\log_b x, \\log_c x$ are in H.P."
        },
        // 22
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The sum to $n$ terms of the series $1+3+7+15+31+\\dots$ is",
            "options": [
                "$2^{n+1} - n$",
                "$2^{n+1} - n - 2$",
                "$2^{n} - n - 2$",
                "None of these"
            ],
            "correctAnswer": 1,
            "solution": "The series can be written as $S_n = (2^1-1) + (2^2-1) + (2^3-1) + \\dots + (2^n-1) = (2+2^2+2^3+\\dots+2^n) - n = \\frac{2(2^n-1)}{2-1} - n = 2^{n+1} - 2 - n$. Therefore $S_n = 2^{n+1} - n - 2$."
        },
        // 23
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the roots of the equation $x^2 - 5x + 16 = 0$ are $\\alpha, \\beta$ and the roots of equation $x^2 + px + q = 0$ are $\\alpha^2 + \\beta^2$, $\\alpha\\beta / 2$, then",
            "options": [
                "$p = 1, q = -56$",
                "$p = -1, q = -56$",
                "$p = 1, q = 56$",
                "$p = -1, q = 56$"
            ],
            "correctAnswer": 1,
            "solution": "For $x^2 - 5x + 16 = 0$, $\\alpha+\\beta = 5$ and $\\alpha\\beta = 16$. The new roots are $\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = 25 - 32 = -7$ and $\\frac{\\alpha\\beta}{2} = \\frac{16}{2} = 8$. Sum of new roots $= -7 + 8 = 1 \\Rightarrow p = -1$. Product of new roots $= (-7) \\times 8 = -56 \\Rightarrow q = -56$."
        },
        // 24
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\alpha \\neq \\beta$, but $\\alpha^2 = 5\\alpha - 3, \\beta^2 = 5\\beta - 3$, then the equation whose roots are $\\frac{\\alpha}{\\beta}$ and $\\frac{\\beta}{\\alpha}$ is",
            "options": [
                "$x^2 - 5x - 3 = 0$",
                "$3x^2 - 19x + 3 = 0$",
                "$3x^2 + 12x + 3 = 0$",
                "None of these"
            ],
            "correctAnswer": 1,
            "solution": "This implies $\\alpha, \\beta$ are the roots of $x^2 - 5x + 3 = 0$. So, $\\alpha+\\beta = 5$ and $\\alpha\\beta = 3$. The new roots are $\\frac{\\alpha}{\\beta}$ and $\\frac{\\beta}{\\alpha}$. Sum of new roots $= \\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = \\frac{\\alpha^2+\\beta^2}{\\alpha\\beta} = \\frac{(\\alpha+\\beta)^2-2\\alpha\\beta}{\\alpha\\beta} = \\frac{25-6}{3} = \\frac{19}{3}$. Product of new roots $= 1$. Equation: $x^2 - \\frac{19}{3}x + 1 = 0 \\Rightarrow 3x^2 - 19x + 3 = 0$."
        },
        // 25
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Let $\\alpha, \\beta$ be the roots of the equation $(x-a)(x-b) = c, c \\neq 0$, then the roots of the equation $(x-\\alpha)(x-\\beta) + c = 0$ are",
            "options": [
                "$a, c$",
                "$b, c$",
                "$a, b$",
                "$a, d$"
            ],
            "correctAnswer": 2,
            "solution": "The first equation is $x^2 - (a+b)x + ab - c = 0$. Its roots are $\\alpha, \\beta$, so $\\alpha+\\beta = a+b$ and $\\alpha\\beta = ab-c$. Substituting these into the second equation $(x-\\alpha)(x-\\beta) + c = 0 \\Rightarrow x^2 - (\\alpha+\\beta)x + \\alpha\\beta + c = 0 \\Rightarrow x^2 - (a+b)x + ab = 0$. The roots of this equation are $a$ and $b$."
        },
        // 26
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\alpha$ and $\\beta$ are roots of the equation $x^2 - ax + b = 0$ and $V_n = \\alpha^n + \\beta^n$, then",
            "options": [
                "$V_{n+1} = aV_n - bV_{n-1}$",
                "$V_{n+1} = bV_n - aV_{n-1}$",
                "$V_{n+1} = aV_n + bV_{n-1}$",
                "$V_{n+1} = bV_n + aV_{n-1}$"
            ],
            "correctAnswer": 0,
            "solution": "Since $\\alpha$ is a root, $\\alpha^2 - a\\alpha + b = 0 \\Rightarrow \\alpha^2 = a\\alpha - b$. Multiplying both sides by $\\alpha^{n-1}$ gives $\\alpha^{n+1} = a\\alpha^n - b\\alpha^{n-1}$. Similarly for $\\beta$: $\\beta^{n+1} = a\\beta^n - b\\beta^{n-1}$. Adding both equations gives $V_{n+1} = aV_n - bV_{n-1}$."
        },
        // 27
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Let $T_r$ be $r$ the term of an A.P. whose first term is $a$ and common difference is $d$. If for some positive integers $m, n, m \\neq n, T_m = \\frac{1}{n}$ and $T_n = \\frac{1}{m}$, then $a - d$ equals",
            "options": [
                "$\\frac{1}{m} + \\frac{1}{n}$",
                "$1$",
                "$\\frac{1}{mn}$",
                "$0$"
            ],
            "correctAnswer": 3,
            "solution": "Given $a + (m-1)d = \\frac{1}{n}$ and $a + (n-1)d = \\frac{1}{m}$. Subtracting the two equations gives $(m-n)d = \\frac{1}{n} - \\frac{1}{m} = \\frac{m-n}{mn} \\Rightarrow d = \\frac{1}{mn}$. Substituting $d$ back into the first equation gives $a + (m-1)\\frac{1}{mn} = \\frac{1}{n} \\Rightarrow a + \\frac{1}{n} - \\frac{1}{mn} = \\frac{1}{n} \\Rightarrow a = \\frac{1}{mn}$. Therefore, $a - d = \\frac{1}{mn} - \\frac{1}{mn} = 0$."
        },
        // 28
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the ratio of H.M. and G.M. of two quantities is $12:13$, then the ratio of the numbers is",
            "options": [
                "$1:2$",
                "$2:3$",
                "$3:4$",
                "None of these"
            ],
            "correctAnswer": 3,
            "solution": "Let numbers be $a$ and $b$. $H.M. = \\frac{2ab}{a+b}$ and $G.M. = \\sqrt{ab}$. Given $\\frac{HM}{GM} = \\frac{2\\sqrt{ab}}{a+b} = \\frac{12}{13} \\Rightarrow 13(2\\sqrt{ab}) = 12(a+b) \\Rightarrow 13\\sqrt{ab} = 6(a+b)$. Let $a = t^2 b$. Then $13t = 6(t^2+1) \\Rightarrow 6t^2 - 13t + 6 = 0 \\Rightarrow (3t-2)(2t-3) = 0 \\Rightarrow t = 2/3$ or $t = 3/2$. So $a:b = 4:9$ or $9:4$, which is not in the given options."
        },
        // 29
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the A.M. of two numbers is greater than G.M. of the numbers by 2 and the ratio of the numbers is $4:1$, then the numbers are",
            "options": [
                "$4, 1$",
                "$12, 3$",
                "$16, 4$",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "Let the numbers be $4x$ and $x$. A.M. $= \\frac{4x+x}{2} = \\frac{5x}{2}$. G.M. $= \\sqrt{4x^2} = 2x$. Given A.M. - G.M. $= 2 \\Rightarrow \\frac{5x}{2} - 2x = 2 \\Rightarrow \\frac{x}{2} = 2 \\Rightarrow x = 4$. The numbers are $4(4) = 16$ and $4$."
        },
        // 30
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The sum of the series $3+33+333+\\dots+n$ terms is",
            "options": [
                "$\\frac{1}{27}(10^{n+1} + 9n - 28)$",
                "$\\frac{1}{27}(10^{n+1} - 9n - 10)$",
                "$\\frac{1}{27}(10^{n+1} + 10n - 9)$",
                "None of these"
            ],
            "correctAnswer": 1,
            "solution": "$S_n = 3(1 + 11 + 111 + \\dots + n \\text{ terms}) = \\frac{3}{9}(9 + 99 + 999 + \\dots + n \\text{ terms}) = \\frac{1}{3}[(10-1) + (10^2-1) + (10^3-1) + \\dots + (10^n-1)]$. $S_n = \\frac{1}{3}[\\frac{10(10^n-1)}{9} - n] = \\frac{1}{27}(10^{n+1} - 10 - 9n) = \\frac{1}{27}(10^{n+1} - 9n - 10)$."
        },
                // 31
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The sum of $n$ terms of the following series $1 + (1+x) + (1+x+x^2) + \\dots$ will be",
            "options": [
                "$\\frac{1-x^n}{1-x}$",
                "$\\frac{x(1-x^n)}{1-x}$",
                "$\\frac{n(1-x)-x(1-x^n)}{(1-x)^2}$",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "$S_n = \\sum_{k=1}^n \\frac{1-x^k}{1-x} = \\frac{1}{1-x} \\left( \\sum_{k=1}^n 1 - \\sum_{k=1}^n x^k \\right) = \\frac{1}{1-x} \\left( n - \\frac{x(1-x^n)}{1-x} \\right) = \\frac{n(1-x)-x(1-x^n)}{(1-x)^2}$."
        },
        // 32
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $a,b,c$ are in H.P., then which one of the following is true",
            "options": [
                "$\\frac{1}{b-a} + \\frac{1}{b-c} = \\frac{1}{b}$",
                "$\\frac{ac}{a+c} = b$",
                "$\\frac{b+a}{b-a} + \\frac{b+c}{b-c} = 1$",
                "None of these"
            ],
            "correctAnswer": 3,
            "solution": "Since $a,b,c$ are in H.P., $\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$ are in A.P., so $\\frac{2}{b} = \\frac{1}{a}+\\frac{1}{c} \\Rightarrow b = \\frac{2ac}{a+c}$. Substituting this into the options proves that none of the first three statements are true."
        },
        // 33
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Let $a_n$ be the $n^{\\text{th}}$ term of the G.P. of positive numbers. Let $\\sum_{n=1}^{100} a_{2n} = \\alpha$ and $\\sum_{n=1}^{100} a_{2n-1} = \\beta$, such that $\\alpha \\neq \\beta$, then the common ratio is",
            "options": [
                "$\\frac{\\alpha}{\\beta}$",
                "$\\frac{\\beta}{\\alpha}$",
                "$\\sqrt{\\frac{\\alpha}{\\beta}}$",
                "$\\sqrt{\\frac{\\beta}{\\alpha}}$"
            ],
            "correctAnswer": 0,
            "solution": "Sum of even terms: $\\alpha = a_2 + a_4 + \\dots + a_{200}$. Sum of odd terms: $\\beta = a_1 + a_3 + \\dots + a_{199}$. Since $\\frac{a_2}{a_1} = \\frac{a_4}{a_3} = \\dots = r$ (common ratio), $\\alpha = r(a_1 + a_3 + \\dots + a_{199}) = r\\beta \\Rightarrow r = \\frac{\\alpha}{\\beta}$."
        },
        // 34
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $x = \\log_5 3 + \\log_7 5 + \\log_9 7$ then",
            "options": [
                "$x \\ge \\frac{3}{2}$",
                "$x \\ge \\frac{1}{\\sqrt[3]{2}}$",
                "$x \\ge \\frac{3}{\\sqrt[3]{2}}$",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "Applying A.M. $\\ge$ G.M.: $x \\ge 3 \\sqrt[3]{\\log_5 3 \\cdot \\log_7 5 \\cdot \\log_9 7} = 3 \\sqrt[3]{\\log_9 3} = 3 \\sqrt[3]{1/2} = \\frac{3}{\\sqrt[3]{2}}$."
        },
        // 35
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the sum of the first $2n$ terms of $2,5,8\\dots$ is equal to the sum of the first $n$ terms of $57,59,61\\dots$, then $n$ is equal to",
            "options": [
                "10",
                "12",
                "11",
                "13"
            ],
            "correctAnswer": 2,
            "solution": "Sum of $2n$ terms of the first AP: $S_{2n} = \\frac{2n}{2}[2(2) + (2n-1)3] = n(6n+1)$. Sum of $n$ terms of the second AP: $S_n = \\frac{n}{2}[2(57) + (n-1)2] = n(n+56)$. Equating both: $n(6n+1) = n(n+56) \\Rightarrow 6n+1 = n+56 \\Rightarrow 5n = 55 \\Rightarrow n=11$."
        },
        // 36
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the sum of the first 10 terms of an A.P. is 4 times to the sum of its first 5 terms, then the ratio of first term and common difference is",
            "options": [
                "$1:2$",
                "$2:1$",
                "$2:3$",
                "$3:2$"
            ],
            "correctAnswer": 0,
            "solution": "$S_{10} = 4 S_5 \\Rightarrow \\frac{10}{2}[2a + 9d] = 4 \\times \\frac{5}{2}[2a + 4d] \\Rightarrow 5(2a+9d) = 10(2a+4d) \\Rightarrow 2a+9d = 4a+8d \\Rightarrow d = 2a \\Rightarrow \\frac{a}{d} = \\frac{1}{2}$. So the ratio is 1:2."
        },
        // 37
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If one root of the equation $x^2 + px + q = 0$ is the square of the other, then",
            "options": [
                "$p^3 + q^2 - q(3p+1) = 0$",
                "$p^3 + q^2 + q(1+3p) = 0$",
                "$p^3 + q^2 + q(3p-1) = 0$",
                "$p^3 + q^2 + q(1-3p) = 0$"
            ],
            "correctAnswer": 3,
            "solution": "Let roots be $\\alpha$ and $\\alpha^2$. $\\alpha + \\alpha^2 = -p$ and $\\alpha^3 = q \\Rightarrow \\alpha = q^{1/3}$. Substituting $\\alpha$ into the sum: $q^{1/3} + q^{2/3} = -p$. Cubing both sides gives $q + q^2 + 3q(q^{1/3} + q^{2/3}) = -p^3 \\Rightarrow p^3 + q^2 + q - 3pq = 0 \\Rightarrow p^3 + q^2 + q(1-3p) = 0$."
        },
        // 38
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The sum of first two terms of a G.P. is 1 and every term of this series is twice of its previous term, then the first term will be",
            "options": [
                "$\\frac{1}{4}$",
                "$\\frac{1}{3}$",
                "$\\frac{2}{3}$",
                "$\\frac{3}{4}$"
            ],
            "correctAnswer": 1,
            "solution": "Sum of first two terms = $a + ar = 1$. Since every term is twice its previous term, $r=2$. So $a + 2a = 1 \\Rightarrow 3a = 1 \\Rightarrow a = \\frac{1}{3}$."
        },
        // 39
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $a,b,c$ are in A.P., then $\\frac{1}{bc}, \\frac{1}{ca}, \\frac{1}{ab}$ will be in",
            "options": [
                "A.P.",
                "G.P.",
                "H.P.",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Since $a,b,c$ are in A.P., $2b = a+c$. Let $x = \\frac{1}{bc}, y = \\frac{1}{ca}, z = \\frac{1}{ab}$. Then $2y = \\frac{2}{ac} = \\frac{a+c}{abc} = \\frac{2b}{abc} = \\frac{1}{bc} + \\frac{1}{ab} = x+z$. Hence, $x, y, z$ are in A.P."
        },
        // 40
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\log 2, \\log(2^n - 1)$ and $\\log(2^n + 3)$ are in A.P., then $n =$",
            "options": [
                "$5/2$",
                "$\\log_2 5$",
                "$\\log_3 5$",
                "$\\frac{3}{2}$"
            ],
            "correctAnswer": 1,
            "solution": "For A.P., $2\\log(2^n - 1) = \\log 2 + \\log(2^n + 3) \\Rightarrow \\log((2^n-1)^2) = \\log(2(2^n+3)) \\Rightarrow (2^n-1)^2 = 2\\cdot 2^n + 6$. Let $t = 2^n \\Rightarrow t^2 - 2t + 1 = 2t + 6 \\Rightarrow t^2 - 4t - 5 = 0 \\Rightarrow (t-5)(t+1) = 0 \\Rightarrow t=5$. So $2^n = 5 \\Rightarrow n = \\log_2 5$."
        },
                // 41
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If one root of a quadratic equation is $\\frac{1}{2+\\sqrt{5}}$, then the equation is",
            "options": [
                "$x^2+4x+1=0$",
                "$x^2+4x-1=0$",
                "$x^2-4x+1=0$",
                "None of these"
            ],
            "correctAnswer": 1,
            "solution": "Root $\\alpha = \\frac{1}{2+\\sqrt{5}} = \\frac{2-\\sqrt{5}}{4-5} = \\sqrt{5}-2$. The other root must be $-\\sqrt{5}-2$ (since sum of roots is $-4$, product is $-1$). Equation: $x^2 - (\\text{sum})x + (\\text{product}) = 0 \\Rightarrow x^2 - (-4)x + (-1) = 0 \\Rightarrow x^2+4x-1=0$."
        },
        // 42
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If one of the roots of the equation $x^2+ax+b=0$ and $x^2+bx+a=0$ is coincident. Then the numerical value of $(a+b)$ is",
            "options": [
                "0",
                "-1",
                "1",
                "5"
            ],
            "correctAnswer": 1,
            "solution": "Let the common root be $\\alpha$. $\\alpha^2+a\\alpha+b=0$ and $\\alpha^2+b\\alpha+a=0$. Subtracting gives $(a-b)\\alpha + (b-a) = 0 \\Rightarrow (a-b)(\\alpha-1) = 0$. Since $a \\neq b$ (otherwise they are identical), $\\alpha=1$. Substitute $\\alpha=1$ into the first equation: $1+a+b=0 \\Rightarrow a+b=-1$."
        },
        // 43
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $a,b,c$ are in G.P. then the equations $ax^2+2bx+c=0$ and $dx^2+2ex+f=0$ have a common root if $\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in",
            "options": [
                "A.P.",
                "G.P.",
                "H.P.",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Since $a,b,c$ are in G.P., $b^2 = ac$. The first equation is $ax^2+2bx+c=0$, whose roots are equal, $x=-b/a$. For the second equation to have this common root, substituting $x=-b/a$ gives $d(b^2/a^2) - 2e(b/a) + f = 0 \\Rightarrow d(c/a) - 2e(b/a) + f = 0$. Dividing by $c$ gives $\\frac{d}{a} - \\frac{2e}{b} + \\frac{f}{c} = 0 \\Rightarrow \\frac{d}{a} + \\frac{f}{c} = \\frac{2e}{b}$. This means $\\frac{d}{a}, \\frac{e}{b}, \\frac{f}{c}$ are in A.P."
        },
        // 44
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The first term of an infinite geometric progression is $x$ and its sum is 5. The",
            "options": [
                "$0 \\le x \\le 10$",
                "$0 < x < 10$",
                "$-10 < x < 0$",
                "$x > 10$"
            ],
            "correctAnswer": 1,
            "solution": "Infinite GP sum $S = \\frac{a}{1-r} = \\frac{x}{1-r} = 5 \\Rightarrow x = 5(1-r) \\Rightarrow r = 1 - \\frac{x}{5}$. Since $|r| < 1$, $-1 < 1 - \\frac{x}{5} < 1 \\Rightarrow -2 < -\\frac{x}{5} < 0 \\Rightarrow 0 < \\frac{x}{5} < 2 \\Rightarrow 0 < x < 10$."
        },
        // 45
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $x$ be real, then the minimum value of $x^2-8x+17$ is",
            "options": [
                "-1",
                "0",
                "1",
                "2"
            ],
            "correctAnswer": 2,
            "solution": "Let $f(x) = x^2-8x+17 = (x-4)^2 + 1$. Since $(x-4)^2 \\ge 0$ for all real $x$, the minimum value of $f(x)$ is $0 + 1 = 1$."
        },
        // 46
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The sum of $1^3+2^3+3^3+4^3+\\dots+15^3$ is",
            "options": [
                "22000",
                "10000",
                "14400",
                "15000"
            ],
            "correctAnswer": 2,
            "solution": "Sum of cubes of first $n$ natural numbers $= \\left[\\frac{n(n+1)}{2}\\right]^2$. For $n=15$, Sum $= \\left[\\frac{15 \\times 16}{2}\\right]^2 = [15 \\times 8]^2 = 120^2 = 14400$."
        },
        // 47
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "A series whose $n^{\\text{th}}$ term is $\\left(\\frac{n}{x}\\right)+y$, the sum of $r$ terms will be",
            "options": [
                "$\\frac{r(r+1)}{2x}+ry$",
                "$\\frac{r(r-1)}{2x}+ry$",
                "$\\frac{r(r-1)}{2x}-ry$",
                "$\\frac{r(r+1)}{2x}-rx$"
            ],
            "correctAnswer": 0,
            "solution": "Sum $S_r = \\sum_{n=1}^r \\left(\\frac{n}{x}+y\\right) = \\frac{1}{x} \\sum_{n=1}^r n + y \\sum_{n=1}^r 1 = \\frac{1}{x} \\cdot \\frac{r(r+1)}{2} + y \\cdot r = \\frac{r(r+1)}{2x} + ry$."
        },
        // 48
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If the first two terms of an H.P. be $\\frac{2}{5}$ and $\\frac{12}{23}$ then the largest positive term of the progression is the",
            "options": [
                "6th term",
                "7th term",
                "5th term",
                "8th term"
            ],
            "correctAnswer": 2,
            "solution": "H.P. terms: $2/5, 12/23$. A.P. of reciprocals: $5/2, 23/12$. First term $A = 5/2$, common difference $D = 23/12 - 5/2 = -7/12$. $A_n = 5/2 + (n-1)(-7/12) = \\frac{37 - 7n}{12}$. For positive H.P. terms, $A_n > 0 \\Rightarrow 37 - 7n > 0 \\Rightarrow n \\le 5$. The 5th term is $\\frac{37-35}{12} = \\frac{1}{6}$, so the H.P. 5th term is $6$, which is the largest positive term."
        },
        // 49
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The $5^{\\text{th}}$ term of the series $\\frac{10}{9}, \\frac{1}{3}, \\sqrt{\\frac{20}{3}}, \\frac{2}{3}, \\dots$ is",
            "options": [
                "$\\frac{1}{3}$",
                "1",
                "$\\frac{2}{5}$",
                "$\\sqrt{\\frac{2}{3}}$"
            ],
            "correctAnswer": 1,
            "solution": "Looking closely at the sequence with denominator 9: $10/9, 3/9, \\sqrt{60}/9, 6/9$. The sequence of numerators reduces nicely to $10, 3, ?, 6, 9$. The consistent algebraic pattern suggests the 5th term is $9/9 = 1$."
        },
        // 50
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\alpha, \\beta(\\alpha < \\beta)$ are roots of the equation $x^2+bx+c=0$ where $(c<0<b)$ then",
            "options": [
                "$0<\\alpha<\\beta$",
                "$\\alpha<0<\\beta<|\\alpha|$",
                "$\\alpha<\\beta<0$",
                "$\\alpha<0<|\\alpha|<\\beta$"
            ],
            "correctAnswer": 1,
            "solution": "Given $c<0$, product of roots $\\alpha\\beta = c < 0$, so they have opposite signs. Since $\\alpha < \\beta$, $\\alpha$ is negative and $\\beta$ is positive. So $\\alpha < 0 < \\beta$. Sum of roots $\\alpha+\\beta = -b$. Since $b>0$, $-b < 0 \\Rightarrow \\alpha+\\beta < 0 \\Rightarrow |\\alpha| > \\beta$. Thus $\\alpha < 0 < \\beta < |\\alpha|$."
        },
                // 51
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $x\\cos \\theta = y\\cos \\left(\\theta + \\frac{2\\pi}{3}\\right) = z\\cos \\left(\\theta + \\frac{4\\pi}{3}\\right)$ then $\\frac{1}{x} + \\frac{1}{y} + \\frac{1}{z} = $",
            "options": [
                "1",
                "2",
                "0",
                "3"
            ],
            "correctAnswer": 2,
            "solution": "Let the common value be $k$. Then $1/x = \\cos\\theta/k$, $1/y = \\cos(\\theta+120^\\circ)/k$, and $1/z = \\cos(\\theta+240^\\circ)/k$. Sum $= \\frac{1}{k}[\\cos\\theta + \\cos(\\theta+120^\\circ) + \\cos(\\theta+240^\\circ)]$. Using sum-to-product formulas, this sum evaluates to $0$."
        },
        // 52
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $0 \\le \\theta \\le 2\\pi, 0 \\le \\alpha \\le 2\\pi$ and $\\sec^{2018} \\theta + \\operatorname{cosec}^{2018} \\alpha = 2$ then the value of $\\cos^{2020} \\theta + \\sin^{2020} \\alpha = $",
            "options": [
                "$\\frac{3}{2}$",
                "$\\frac{1}{2^{2020}}$",
                "1",
                "2"
            ],
            "correctAnswer": 3,
            "solution": "Since $\\sec\\theta \\ge 1$ and $\\operatorname{cosec}\\alpha \\ge 1$, their 2018th powers are $\\ge 1$. The minimum possible sum is 2 (which occurs when $\\sec\\theta=1$ and $\\operatorname{cosec}\\alpha=1$). Thus $\\cos\\theta=1$ and $\\sin\\alpha=1$. The required expression equals $1^{2020} + 1^{2020} = 2$."
        },
        // 53
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Determine the value of $a$ in $\\tan 70^\\circ - \\tan 20^\\circ = a \\cdot \\tan 50^\\circ$ ?",
            "options": [
                "-4",
                "4",
                "-2",
                "2"
            ],
            "correctAnswer": 3,
            "solution": "$\\tan 70^\\circ - \\tan 20^\\circ = \\frac{\\sin(70^\\circ-20^\\circ)}{\\cos 70^\\circ \\cos 20^\\circ} = \\frac{\\sin 50^\\circ}{\\cos 70^\\circ \\cos 20^\\circ}$. Using $\\cos 70^\\circ \\cos 20^\\circ = \\frac{\\cos 90^\\circ + \\cos 50^\\circ}{2} = \\frac{\\cos 50^\\circ}{2}$. The expression evaluates to $\\frac{\\sin 50^\\circ}{\\cos 50^\\circ/2} = 2\\tan 50^\\circ$. Therefore, $a=2$."
        },
        // 54
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "$\\sin^2 5^\\circ + \\sin^2 10^\\circ + \\sin^2 15^\\circ + \\dots + \\sin^2 90^\\circ = $",
            "options": [
                "$8\\frac{1}{2}$",
                "9",
                "$9\\frac{1}{2}$",
                "$4\\frac{1}{2}$"
            ],
            "correctAnswer": 2,
            "solution": "Pair the terms using $\\sin^2 x + \\sin^2(90^\\circ-x) = 1$. The series has 8 such pairs, plus $\\sin^2 45^\\circ = 1/2$, plus $\\sin^2 90^\\circ = 1$. Total sum $= 8(1) + 1/2 + 1 = 9\\frac{1}{2}$."
        },
        // 55
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Minimum value of $5\\tan^2 \\alpha + \\frac{9}{\\tan^2 \\alpha} + 4\\sec^2 \\alpha$ is",
            "options": [
                "24",
                "22",
                "32",
                "28"
            ],
            "correctAnswer": 1,
            "solution": "$4\\sec^2\\alpha = 4(1+\\tan^2\\alpha) = 4+4\\tan^2\\alpha$. The total expression becomes $9\\tan^2\\alpha + \\frac{9}{\\tan^2\\alpha} + 4$. By AM-GM inequality, $9\\tan^2\\alpha + \\frac{9}{\\tan^2\\alpha} \\ge 2\\sqrt{9\\times 9} = 18$. Hence, the minimum value is $18 + 4 = 22$."
        },
        // 56
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "$\\cos^2 10^\\circ + \\cos^2 50^\\circ - \\sin 40^\\circ \\sin 80^\\circ = $",
            "options": [
                "$\\frac{1}{4}$",
                "$\\frac{1}{2}$",
                "$\\frac{4}{3}$",
                "$\\frac{3}{4}$"
            ],
            "correctAnswer": 3,
            "solution": "Using $\\cos^2 x = \\frac{1+\\cos 2x}{2}$ and $\\sin A \\sin B = \\frac{\\cos(A-B)-\\cos(A+B)}{2}$, the expression simplifies to $1 + \\frac{1}{2}\\cos 40^\\circ - (\\frac{1}{2}\\cos 40^\\circ + \\frac{1}{4}) = 1 - \\frac{1}{4} = \\frac{3}{4}$."
        },
        // 57
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\frac{\\sin 1^\\circ}{\\sin x^\\circ \\sin (x+1)^\\circ} = \\cot x^\\circ - \\cot (x+1)^\\circ$, then $\\frac{1}{\\sin 45^\\circ \\sin 46^\\circ} + \\frac{1}{\\sin 46^\\circ \\sin 47^\\circ} + \\dots + \\frac{1}{\\sin 89^\\circ \\sin 90^\\circ}$ is",
            "options": [
                "$\\sin 1^\\circ$",
                "$\\cot 1^\\circ$",
                "$-\\cot 1^\\circ$",
                "$\\operatorname{cosec} 1^\\circ$"
            ],
            "correctAnswer": 3,
            "solution": "Sum $= \\frac{1}{\\sin 1^\\circ} \\sum_{x=45}^{89} [\\cot x^\\circ - \\cot (x+1)^\\circ]$. This is a telescoping sum $= \\frac{1}{\\sin 1^\\circ} [\\cot 45^\\circ - \\cot 90^\\circ] = \\frac{1}{\\sin 1^\\circ} [1 - 0] = \\operatorname{cosec} 1^\\circ$."
        },
        // 58
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If in a triangle $ABC$, suppose none of the angles are multiples of $\\pi/2$, then $\\cot A \\cot B + \\cot B \\cot C + \\cot A \\cot C = $",
            "options": [
                "$\\infty$",
                "1",
                "-1",
                "0"
            ],
            "correctAnswer": 1,
            "solution": "In a triangle, $A+B+C=\\pi$. $\\tan(A+B+C)=0$. This leads to $\\tan A + \\tan B + \\tan C = \\tan A \\tan B \\tan C$. Dividing by $\\tan A \\tan B \\tan C$ gives $\\cot B \\cot C + \\cot A \\cot C + \\cot A \\cot B = 1$."
        },
        // 59
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\alpha = \\frac{180^\\circ}{7}$, then $3\\sin \\alpha - 4\\sin^3 \\alpha$ is equal to",
            "options": [
                "$\\cos 4\\alpha$",
                "$\\sin 3\\alpha$",
                "$\\cos 3\\alpha$",
                "0"
            ],
            "correctAnswer": 1,
            "solution": "Using the triple-angle identity for sine, $\\sin 3\\alpha = 3\\sin\\alpha - 4\\sin^3\\alpha$. Therefore, the given expression is directly equal to $\\sin 3\\alpha$."
        },
        // 60
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The larger of $\\cos (\\log \\theta)$ and $\\log (\\cos \\theta)$ if $e^{-\\pi/2} < \\theta < \\pi/2$ is",
            "options": [
                "$\\cos (\\log \\theta)$",
                "$\\log (\\cos \\theta)$",
                "None of function is larger",
                "One of the two function is undefined on domain even to compare."
            ],
            "correctAnswer": 0,
            "solution": "In the given range, $\\theta > 0$ and $\\cos\\theta > 0$, so both functions are defined. However, $\\log(\\cos\\theta) \\le 0$ (since $\\cos\\theta \\le 1$), whereas $\\cos(\\log\\theta) > 0$ (since $\\log\\theta$ is in the range $(-\\pi/2, \\pi/2)$). Therefore, $\\cos(\\log\\theta) > \\log(\\cos\\theta)$."
        },
                // 61
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "In a triangle $ABC$, $\\tan \\frac{A}{2} \\tan \\frac{B}{2} + \\tan \\frac{B}{2} \\tan \\frac{C}{2} + \\tan \\frac{C}{2} \\tan \\frac{A}{2} =$",
            "options": [
                "0",
                "1",
                "$\\frac{1}{2}$",
                "$\\pi$"
            ],
            "correctAnswer": 1,
            "solution": "In $\\triangle ABC$, $\\frac{A}{2} + \\frac{B}{2} + \\frac{C}{2} = \\frac{\\pi}{2}$. We know $\\tan(\\frac{A}{2} + \\frac{B}{2}) = \\cot(\\frac{C}{2})$. Substituting $\\tan(\\frac{A}{2} + \\frac{B}{2})$ formula and cross-multiplying leads to $\\tan\\frac{A}{2} \\tan\\frac{C}{2} + \\tan\\frac{B}{2} \\tan\\frac{C}{2} + \\tan\\frac{A}{2} \\tan\\frac{B}{2} = 1$."
        },
        // 62
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "Let $\\alpha, \\beta$ be two real number such that $\\pi < (\\alpha - \\beta) < 3\\pi$. If $\\sin \\alpha + \\sin \\beta = \\frac{-21}{65}$ and $\\cos \\alpha + \\cos \\beta = -\\frac{27}{65}$, then $\\cos \\left(\\frac{\\beta - \\alpha}{2}\\right) =$",
            "options": [
                "$\\frac{3}{\\sqrt{130}}$",
                "$\\frac{-3}{\\sqrt{130}}$",
                "$\\frac{130}{\\sqrt{3}}$",
                "$\\frac{-\\sqrt{130}}{3}$"
            ],
            "correctAnswer": 1,
            "solution": "Using $\\sin\\alpha+\\sin\\beta = 2\\sin(\\frac{\\alpha+\\beta}{2})\\cos(\\frac{\\alpha-\\beta}{2})$ and $\\cos\\alpha+\\cos\\beta = 2\\cos(\\frac{\\alpha+\\beta}{2})\\cos(\\frac{\\alpha-\\beta}{2})$, square and add. $4\\cos^2(\\frac{\\alpha-\\beta}{2}) = (-21/65)^2 + (-27/65)^2 = 18/65 \\Rightarrow \\cos^2(\\frac{\\alpha-\\beta}{2}) = 9/130$. Since $\\pi < \\alpha-\\beta < 3\\pi$, the cosine is negative. So $\\cos(\\frac{\\alpha-\\beta}{2}) = -\\frac{3}{\\sqrt{130}}$. Since $\\cos(-\\theta) = \\cos(\\theta)$, the answer is $-\\frac{3}{\\sqrt{130}}$."
        },
        // 63
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The value of $\\cos^4 x$ is",
            "options": [
                "$\\frac{3}{8} + \\frac{1}{2} \\cos 2x + \\frac{1}{8} \\cos 4x$",
                "$\\frac{3}{8} - \\frac{1}{2} \\cos 2x + \\frac{1}{8} \\cos 4x$",
                "$\\frac{3}{8} - \\frac{1}{8} \\cos 4x + \\frac{1}{2} \\cos 2x$",
                "$\\frac{1}{8} \\cos 4x + \\frac{1}{2} \\cos 2x - \\frac{3}{8}$"
            ],
            "correctAnswer": 0,
            "solution": "$\\cos^4 x = (\\frac{1+\\cos 2x}{2})^2 = \\frac{1 + 2\\cos 2x + \\cos^2 2x}{4} = \\frac{1 + 2\\cos 2x + \\frac{1+\\cos 4x}{2}}{4} = \\frac{3}{8} + \\frac{1}{2}\\cos 2x + \\frac{1}{8}\\cos 4x$."
        },
        // 64
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "In $\\triangle ABC$, if $3\\sin A + 4\\cos B = 6$ and $4\\sin B + 3\\cos A = 1$, then the angle $C$ is",
            "options": [
                "$\\frac{\\pi}{2}$",
                "$\\frac{\\pi}{3}$",
                "$\\frac{\\pi}{4}$",
                "$\\frac{\\pi}{6}$"
            ],
            "correctAnswer": 3,
            "solution": "Square and add: $9\\sin^2 A + 16\\cos^2 B + 24\\sin A\\cos B + 16\\sin^2 B + 9\\cos^2 A + 24\\sin B\\cos A = 37 \\Rightarrow 25 + 24\\sin(A+B) = 37 \\Rightarrow \\sin(A+B) = 1/2$. Since $A+B+C=\\pi$, $\\sin(A+B) = \\sin C$. Therefore $\\sin C = 1/2 \\Rightarrow C = \\pi/6$ or $5\\pi/6$. $C=5\\pi/6$ is impossible as $A+B = \\pi/6$ would imply $3\\sin A + 4\\cos B$ can't be 6. So $C = \\pi/6$."
        },
        // 65
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "In a triangle $ABC$, $\\sin 2A + \\sin 2B + \\sin 2C =$",
            "options": [
                "$4\\sin A \\sin B \\sin C$",
                "$2\\sin A \\sin B \\sin C$",
                "$4\\cos A \\cos B \\cos C$",
                "$2\\sin A \\cos B \\cos C$"
            ],
            "correctAnswer": 0,
            "solution": "Using the standard identity for angles of a triangle: $\\sin 2A + \\sin 2B + \\sin 2C = 4\\sin A \\sin B \\sin C$."
        },
        // 66
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The common solution set of the equations $2\\sin^2 x + \\sin^2 2x = 2$ and $\\sin 2x + \\cos 2x = \\tan x$ is",
            "options": [
                "$\\{x \\in R: x = (2n+1)\\frac{\\pi}{4}, n \\in Z\\}$",
                "$\\{x \\in R: x = (4n+1)\\frac{\\pi}{8}, n \\in Z\\}$",
                "$\\{x \\in R: x = (3n+1)\\frac{\\pi}{4}, n \\in Z\\}$",
                "$\\{x \\in R: x = (4n-1)\\frac{\\pi}{8}, n \\in Z\\}$"
            ],
            "correctAnswer": 0,
            "solution": "From $2\\sin^2 x + \\sin^2 2x = 2 \\Rightarrow 2\\sin^2 x + 4\\sin^2 x\\cos^2 x = 2 \\Rightarrow \\sin^2 x (1 + 2\\cos^2 x) = 1 \\Rightarrow \\sin^2 x = 1/2$. Thus $x = n\\pi \\pm \\pi/4$. If $x = n\\pi + \\pi/4$, $\\tan x = 1$, $2x = 2n\\pi + \\pi/2 \\Rightarrow \\sin 2x + \\cos 2x = 1 + 0 = 1$. This matches both. This set is exactly $\\{x \\in R: x = (2n+1)\\pi/4, n \\in Z\\}$."
        },
        // 67
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "For $0 \\leq x \\leq \\pi$, if $81^{\\sin^2 x} + 81^{\\cos^2 x} = 30$, then $x =$",
            "options": [
                "$\\frac{\\pi}{6}$",
                "$\\frac{\\pi}{4}$",
                "$\\frac{\\pi}{15}$",
                "$\\frac{\\pi}{8}$"
            ],
            "correctAnswer": 0,
            "solution": "Let $y = 81^{\\sin^2 x}$. Then $y + \\frac{81}{y} = 30 \\Rightarrow y^2 - 30y + 81 = 0 \\Rightarrow (y-3)(y-27) = 0$. If $y=3 \\Rightarrow 81^{\\sin^2 x} = 3 \\Rightarrow \\sin^2 x = 1/4 \\Rightarrow x = \\pi/6$. If $y=27 \\Rightarrow \\sin^2 x = 3/4 \\Rightarrow x = \\pi/3$. So $x = \\pi/6$ or $\\pi/3$. Options match $\\pi/6$."
        },
        // 68
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\sin^{10} x - \\cos^{10} x = 1$ then $x =$",
            "options": [
                "$n\\pi$",
                "$2n\\pi + \\pi/2$",
                "$(2n+1)\\pi/2$",
                "$n\\pi/2$"
            ],
            "correctAnswer": 2,
            "solution": "Since $\\sin^{10} x \\leq 1$ and $\\cos^{10} x \\geq 0$, the only way their difference can be 1 is if $\\sin^{10} x = 1$ and $\\cos^{10} x = 0$. This implies $\\sin x = \\pm 1$ and $\\cos x = 0$, which means $x = n\\pi + \\pi/2 = (2n+1)\\pi/2$."
        },
        // 69
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\sqrt{\\sin x} + \\cos x = 0$ then $\\sin x =$",
            "options": [
                "$\\frac{\\sqrt{5}+1}{2}$",
                "$\\frac{\\sqrt{5}+1}{8}$",
                "$\\frac{\\sqrt{5}-1}{8}$",
                "$\\frac{\\sqrt{5}-1}{2}$"
            ],
            "correctAnswer": 3,
            "solution": "$\\sqrt{\\sin x} = -\\cos x$. Squaring gives $\\sin x = \\cos^2 x = 1 - \\sin^2 x \\Rightarrow \\sin^2 x + \\sin x - 1 = 0$. Solving gives $\\sin x = \\frac{-1 \\pm \\sqrt{5}}{2}$. Since $\\sin x \\ge 0$, $\\sin x = \\frac{\\sqrt{5} - 1}{2}$."
        },
        // 70
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $3\\cos 2\\theta + 2 = 7\\sin \\theta$ then $\\theta =$",
            "options": [
                "$n\\pi + (-1)^n \\frac{\\pi}{4} : n \\in Z$",
                "$n\\pi + (-1)^n \\frac{\\pi}{6} : n \\in Z$",
                "$n\\pi + (-1)^{n+1}\\frac{\\pi}{6} : n \\in Z$ or $n\\pi + (-1)^n\\frac{\\pi}{3} : n \\in Z$",
                "$n\\pi + (-1)^n \\frac{\\pi}{2} : n \\in Z$ or $n\\pi + (-1)^n \\frac{\\pi}{6} : n \\in Z$"
            ],
            "correctAnswer": 1,
            "solution": "$3(1 - 2\\sin^2 \\theta) + 2 = 7\\sin \\theta \\Rightarrow 6\\sin^2 \\theta + 7\\sin \\theta - 5 = 0 \\Rightarrow (3\\sin\\theta + 5)(2\\sin\\theta - 1) = 0$. $\\sin\\theta = 1/2$ (since $-5/3$ is impossible). Therefore, the general solution is $\\theta = n\\pi + (-1)^n \\frac{\\pi}{6}, n \\in Z$."
        },
                // 71
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The solution set of $\\tan^2 \\theta - (1+\\sqrt{3}) \\tan \\theta + \\sqrt{3} = 0$ is",
            "options": [
                "$\\{n\\pi + \\frac{\\pi}{3} : n \\in Z\\} \\cup \\{n\\pi + \\frac{\\pi}{4} : n \\in Z\\}$",
                "$\\{n\\pi + \\frac{\\pi}{4} : n \\in Z\\} \\cup \\{n\\pi + \\frac{\\pi}{6} : n \\in Z\\}$",
                "$\\{n\\pi + \\frac{\\pi}{6} : n \\in Z\\}$",
                "$\\{n\\pi + \\frac{5\\pi}{24} : n \\in Z\\}$"
            ],
            "correctAnswer": 0,
            "solution": "Let $y = \\tan \\theta$. Then $y^2 - (1+\\sqrt{3})y + \\sqrt{3} = 0 \\Rightarrow (y-1)(y-\\sqrt{3}) = 0 \\Rightarrow y = 1$ or $y = \\sqrt{3}$. If $\\tan\\theta = 1 \\Rightarrow \\theta = n\\pi + \\pi/4$. If $\\tan\\theta = \\sqrt{3} \\Rightarrow \\theta = n\\pi + \\pi/3$. Combining gives the solution set $\\{n\\pi + \\pi/3\\} \\cup \\{n\\pi + \\pi/4\\}$."
        },
        // 72
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The values of $x$ in the first quadrant $\\frac{2\\tan x}{1-\\tan^2 x}$ is positive is",
            "options": [
                "$x \\in (0, \\pi/4)$",
                "$x \\in (0, \\pi/2)$",
                "$\\pi/2, \\pi/6$",
                "No solution"
            ],
            "correctAnswer": 0,
            "solution": "The expression is $\\tan 2x$. Since $x$ is in the first quadrant, $0 < x < \\pi/2 \\Rightarrow 0 < 2x < \\pi$. For $\\tan 2x$ to be positive, $2x$ must be in the first quadrant, i.e., $0 < 2x < \\pi/2 \\Rightarrow 0 < x < \\pi/4$."
        },
        // 73
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\tan \\alpha = m/(m+1)$, $\\tan \\beta = 1/(2m+1)$, then $\\alpha + \\beta =$",
            "options": [
                "$n\\pi + \\pi/2$",
                "$n\\pi + \\pi/3$",
                "$n\\pi - \\pi/4$",
                "$n\\pi + \\pi/4$"
            ],
            "correctAnswer": 3,
            "solution": "Using the tangent addition formula: $\\tan(\\alpha+\\beta) = \\frac{\\frac{m}{m+1} + \\frac{1}{2m+1}}{1 - \\frac{m}{(m+1)(2m+1)}} = \\frac{m(2m+1) + (m+1)}{(m+1)(2m+1) - m} = \\frac{2m^2 + 2m + 1}{2m^2 + 2m + 1} = 1$. Thus $\\tan(\\alpha+\\beta) = 1 \\Rightarrow \\alpha+\\beta = n\\pi + \\pi/4$."
        },
        // 74
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\sin^3 x + \\sin x \\cdot \\cos x + \\cos^3 x = 1$ then $x =$",
            "options": [
                "$2n\\pi + \\frac{\\pi}{2} : n \\in Z$ or $2n\\pi : n \\in Z$",
                "$n\\pi \\pm \\frac{\\pi}{6} : n \\in Z$ or $n\\pi \\pm \\frac{\\pi}{3} : n \\in Z$",
                "$n\\pi \\pm \\frac{\\pi}{3} : n \\in Z$ or $n\\pi \\pm \\frac{\\pi}{2} : n \\in Z$",
                "$2n\\pi + \\frac{\\pi}{4} : n \\in Z$ or $2n\\pi : n \\in Z$"
            ],
            "correctAnswer": 0,
            "solution": "Let $s = \\sin x, c = \\cos x$. The equation is $s^3 + c^3 + sc = 1$. Using $s^2 + c^2 = 1$ and the identity $s^3 + c^3 = (s+c)^3 - 3sc(s+c)$, we get $(s+c)^3 - 3sc(s+c) + sc = 1$. If $s+c = 1$, then $1 - 3sc + sc = 1 \\Rightarrow 2sc = 0 \\Rightarrow sc = 0$. From $s+c=1$ and $sc=0$, we get $(s,c) = (1,0)$ or $(0,1)$. This implies $\\sin x = 1, \\cos x = 0$ or $\\sin x = 0, \\cos x = 1$. The general solutions are $x = 2n\\pi + \\frac{\\pi}{2}$ and $x = 2n\\pi$."
        },        
        // 75
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\cos m\\theta = \\sin n\\theta$, then $\\theta =$",
            "options": [
                "$\\frac{k\\pi + \\pi/2}{m \\pm n}$",
                "$\\frac{k\\pi \\pm \\pi/3}{m \\pm n}$",
                "$\\frac{2k\\pi \\pm \\pi/2}{m \\pm n}$",
                "none"
            ],
            "correctAnswer": 2,
            "solution": "$\\sin n\\theta = \\cos(\\pi/2 - n\\theta)$. Thus $\\cos m\\theta = \\cos(\\pi/2 - n\\theta) \\Rightarrow m\\theta = 2k\\pi \\pm (\\pi/2 - n\\theta)$. Solving for $\\theta$ gives $\\theta = \\frac{2k\\pi \\pm \\pi/2}{m \\pm n}$."
        },
        // 76
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The equation $\\sqrt{3} \\sin x + \\cos x = 4$ has",
            "options": [
                "Only one solutions",
                "Two solutions",
                "Infinitely many solutions",
                "No solution"
            ],
            "correctAnswer": 3,
            "solution": "The maximum value of $\\sqrt{3} \\sin x + \\cos x$ is $\\sqrt{(\\sqrt{3})^2 + 1^2} = 2$. Since $2 < 4$, the given equation has no solution."
        },
        // 77
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $\\sec x + \\operatorname{cosec} x = 2\\sqrt{2}$ then $\\theta =$",
            "options": [
                "$2n\\pi - \\frac{\\pi}{4} : n \\in Z$ or $\\frac{2n\\pi}{3} - \\frac{\\pi}{4} : n \\in Z$",
                "$2n\\pi + \\frac{\\pi}{2} : n \\in Z$ or $2n\\pi - \\frac{\\pi}{3} : n \\in Z$",
                "$2n\\pi + \\frac{\\pi}{4} : n \\in Z$",
                "$2n\\pi + \\frac{\\pi}{12} : n \\in Z$ or $2n\\pi + \\frac{5\\pi}{12} : n \\in Z$"
            ],
            "correctAnswer": 2,
            "solution": "$\\sec x + \\operatorname{cosec} x = 2\\sqrt{2} \\Rightarrow \\frac{\\sin x + \\cos x}{\\sin x \\cos x} = 2\\sqrt{2} \\Rightarrow \\sin x + \\cos x = \\sqrt{2} \\sin 2x \\Rightarrow \\sqrt{2}\\sin(x+\\pi/4) = \\sqrt{2}\\sin 2x \\Rightarrow \\sin(x+\\pi/4) = \\sin 2x$. Solving this yields $x = 2n\\pi + \\pi/4$."
        },
        // 78
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "If $4(\\sin 2x \\sin 4x + \\sin^2 x) = 3$ then $x =$",
            "options": [
                "$\\frac{2n\\pi}{3} \\pm \\frac{\\pi}{9}, n \\in Z$",
                "$\\frac{n\\pi}{3} \\pm \\frac{\\pi}{9}, n \\in Z$",
                "$\\frac{n\\pi}{3} + (-1)^n \\frac{\\pi}{9}, n \\in Z$",
                "$\\frac{n\\pi}{3} + (-1)^n \\frac{2\\pi}{9}, n \\in Z$"
            ],
            "correctAnswer": 1,
            "solution": "$4\\sin 2x \\sin 4x + 4\\sin^2 x = 3 \\Rightarrow 2(\\cos 2x - \\cos 6x) + 2(1-\\cos 2x) = 3 \\Rightarrow -2\\cos 6x + 2 = 3 \\Rightarrow \\cos 6x = -1/2$. $6x = 2n\\pi \\pm 2\\pi/3 \\Rightarrow x = \\frac{n\\pi}{3} \\pm \\frac{\\pi}{9}$."
        },
        // 79
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The most general value of $\\theta$ satisfying both the equations $\\sin \\theta = 1/2, \\tan \\theta = 1/\\sqrt{3}$ is",
            "options": [
                "$2n\\pi + \\frac{\\pi}{6}$",
                "$2n\\pi - \\frac{7\\pi}{6}$",
                "$2n\\pi + \\frac{5\\pi}{6}$",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "Both $\\sin \\theta$ and $\\tan \\theta$ are positive, so $\\theta$ lies in the first quadrant. $\\sin \\theta = 1/2 \\Rightarrow \\theta = \\pi/6$ or $5\\pi/6$. $\\tan \\theta = 1/\\sqrt{3} \\Rightarrow \\theta = \\pi/6$ or $7\\pi/6$. The common value is $\\pi/6$, giving the general solution $2n\\pi + \\pi/6$."
        },
        // 80
        {
            "type": "mcq",
            "marks": 1,
            "negativeMarks": 0,
            "text": "The solution set of $\\sin 2\\theta = -1/\\sqrt{2}$ is",
            "options": [
                "$\\{\\frac{n\\pi}{2} + (-1)^{n+1} \\frac{\\pi}{6} : n \\in Z\\}$",
                "$\\{\\frac{n\\pi}{2} + (-1)^n \\frac{\\pi}{12} : n \\in Z\\}$",
                "$\\{\\frac{n\\pi}{3} + (-1)^n \\frac{2\\pi}{15} : n \\in Z\\}$",
                "$\\{\\frac{n\\pi}{2} + (-1)^{n+1} \\frac{\\pi}{8} : n \\in Z\\}$"
            ],
            "correctAnswer": 3,
            "solution": "$\\sin 2\\theta = -1/\\sqrt{2} \\Rightarrow 2\\theta = n\\pi + (-1)^n (-\\pi/4) \\Rightarrow \\theta = \\frac{n\\pi}{2} - \\frac{(-1)^n \\pi}{8} = \\frac{n\\pi}{2} + \\frac{(-1)^{n+1} \\pi}{8}$."
        }                        
    ]
}; 
    