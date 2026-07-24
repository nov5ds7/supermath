window.testBank = window.testBank || {};
window.testBank['test_804'] = {
    title: "APT Pre-Test (QE+S&S)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-07-24T12:00:00Z",
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
            "text": "Let $f(r) = \\sum_{j=2}^{2008} \\frac{1}{j^r} = \\frac{1}{2^r} + \\frac{1}{3^r} + \\dots + \\frac{1}{2008^r}$. Find $\\sum_{k=2}^{\\infty} f(k)$",
            "options": [
                "$\\frac{1}{2007}$",
                "$\\frac{2007}{2008}$",
                "$\\frac{1}{2008}$",
                "$\\frac{2008}{2009}$"
            ],
            "correctAnswer": 1,
            "solution": "$\\sum_{k=2}^{\\infty} f(k) = f(2) + f(3) + f(4) + \\dots$\n$= \\left(\\frac{1}{2^2} + \\frac{1}{3^2} + \\dots + \\frac{1}{2008^2}\\right) + \\left(\\frac{1}{2^3} + \\frac{1}{3^3} + \\dots + \\frac{1}{2008^3}\\right) + \\dots$\nGrouping terms with the same base:\n$= \\frac{1/2^2}{1 - 1/2} + \\frac{1/3^2}{1 - 1/3} + \\dots + \\frac{1/2008^2}{1 - 1/2008}$\n$= \\sum_{r=2}^{2008} \\frac{1/r^2}{1 - 1/r} = \\sum_{r=2}^{2008} \\frac{1}{r(r-1)}$\n$= \\sum_{r=2}^{2008} \\left(\\frac{1}{r-1} - \\frac{1}{r}\\right)$\n$= \\left(1 - \\frac{1}{2}\\right) + \\left(\\frac{1}{2} - \\frac{1}{3}\\right) + \\dots + \\left(\\frac{1}{2007} - \\frac{1}{2008}\\right)$\n$= 1 - \\frac{1}{2008} = \\frac{2007}{2008}$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The sides of a right angled triangle are in arithmetic progression. If the triangle has area 24, then what is the length of its smallest side?",
            "options": [
                "4",
                "10",
                "6",
                "9"
            ],
            "correctAnswer": 2,
            "solution": "Let the sides of the right-angled triangle be $a-d$, $a$, and $a+d$ with $d > 0$.\nBy the Pythagorean theorem: $(a-d)^2 + a^2 = (a+d)^2$\n$a^2 - 2ad + d^2 + a^2 = a^2 + 2ad + d^2 \\implies a^2 - 4ad = 0 \\implies a = 4d$.\nThe sides are $3d$, $4d$, and $5d$.\nThe area of the triangle is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2}(3d)(4d) = 6d^2$.\nGiven the area is 24, $6d^2 = 24 \\implies d^2 = 4 \\implies d = 2$.\nThe smallest side is $3d = 3(2) = 6$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let $p$ and $q$ be real numbers such that $p \\neq 0$, $p^3 \\neq q$ and $p^3 \\neq -q$. If $\\alpha$ and $\\beta$ are non-zero complex numbers satisfying $\\alpha+\\beta=-p$ and $\\alpha^3+\\beta^3=q$, then a quadratic equation having $\\frac{\\alpha}{\\beta}$ and $\\frac{\\beta}{\\alpha}$ as its roots is",
            "options": [
                "$(p^3+q)x^2 - (p^3+2q)x + (p^3+q) = 0$",
                "$(p^3+q)x^2 - (p^3-2q)x + (p^3+q) = 0$",
                "$(p^3-q)x^2 - (5p^3-2q)x + (p^3-q) = 0$",
                "$(p^3-q)x^2 - (5p^3+2q)x + (p^3-q) = 0$"
            ],
            "correctAnswer": 1,
            "solution": "We are given $\\alpha+\\beta = -p$ and $\\alpha^3+\\beta^3 = q$.\n$(\\alpha+\\beta)^3 = \\alpha^3+\\beta^3 + 3\\alpha\\beta(\\alpha+\\beta)$\n$(-p)^3 = q + 3\\alpha\\beta(-p) \\implies -p^3 = q - 3p\\alpha\\beta \\implies \\alpha\\beta = \\frac{p^3+q}{3p}$.\nWe also need $\\alpha^2+\\beta^2 = (\\alpha+\\beta)^2 - 2\\alpha\\beta = p^2 - 2\\left(\\frac{p^3+q}{3p}\\right) = \\frac{3p^3 - 2p^3 - 2q}{3p} = \\frac{p^3-2q}{3p}$.\nThe required roots are $\\frac{\\alpha}{\\beta}$ and $\\frac{\\beta}{\\alpha}$.\nSum of roots = $\\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = \\frac{\\alpha^2+\\beta^2}{\\alpha\\beta} = \\frac{\\frac{p^3-2q}{3p}}{\\frac{p^3+q}{3p}} = \\frac{p^3-2q}{p^3+q}$.\nProduct of roots = $\\frac{\\alpha}{\\beta} \\cdot \\frac{\\beta}{\\alpha} = 1$.\nThe quadratic equation is $x^2 - (\\text{Sum})x + (\\text{Product}) = 0$\n$x^2 - \\left(\\frac{p^3-2q}{p^3+q}\\right)x + 1 = 0 \\implies (p^3+q)x^2 - (p^3-2q)x + (p^3+q) = 0$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "An infinite geometric series has sum 2008. A new series obtained by squaring the terms of the original series, has 8 times the sum of the original series. The common ratio of the original series is $m/n$ where $m$ and $n$ are relatively prime integers. The value of $(m+n)$ is equal to",
            "options": [
                "4016",
                "251",
                "252",
                "2008"
            ],
            "correctAnswer": 1,
            "solution": "Let the original geometric series have first term $a$ and common ratio $r$. Sum $S = \\frac{a}{1-r} = 2008$.\nThe series formed by squaring the terms has first term $a^2$ and common ratio $r^2$. Sum $S' = \\frac{a^2}{1-r^2}$.\nGiven $S' = 8S$, so $\\frac{a^2}{1-r^2} = 8 \\times 2008$.\nThis can be written as $\\left(\\frac{a}{1-r}\\right) \\left(\\frac{a}{1+r}\\right) = 8 \\times 2008$.\nSubstitute $\\frac{a}{1-r} = 2008$ to get $2008 \\left(\\frac{a}{1+r}\\right) = 8 \\times 2008 \\implies \\frac{a}{1+r} = 8$.\nDividing the two sum expressions:\n$\\frac{a/(1-r)}{a/(1+r)} = \\frac{2008}{8} = 251 \\implies \\frac{1+r}{1-r} = 251$.\n$1+r = 251 - 251r \\implies 252r = 250 \\implies r = \\frac{250}{252} = \\frac{125}{126}$.\nSince $m=125$ and $n=126$ are relatively prime, $m+n = 125+126 = 251$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let $a_n = 16, 4, 1, \\dots$ be a geometric sequence. Define $P_n$ as the product of the first $n$ terms. The value of $\\sum_{n=1}^{\\infty} \\sqrt[n]{P_n}$ is",
            "options": [
                "8",
                "16",
                "32",
                "64"
            ],
            "correctAnswer": 2,
            "solution": "The geometric sequence has first term $a = 16$ and common ratio $r = \\frac{1}{4}$.\nThe product of the first $n$ terms is $P_n = a^n r^{\\frac{n(n-1)}{2}} = 16^n \\left(\\frac{1}{4}\\right)^{\\frac{n(n-1)}{2}}$.\nTaking the $n$-th root gives $\\sqrt[n]{P_n} = 16 \\left(\\frac{1}{4}\\right)^{\\frac{n-1}{2}} = 16 \\left(\\frac{1}{2}\\right)^{n-1}$.\nThe summation is $\\sum_{n=1}^{\\infty} 16 \\left(\\frac{1}{2}\\right)^{n-1}$.\nThis is an infinite geometric series with first term $16$ and common ratio $1/2$.\nSum = $\\frac{16}{1 - 1/2} = 32$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The harmonic mean of the roots of the equation $(5+\\sqrt{2})x^2 - (4+\\sqrt{5})x + 8 + 2\\sqrt{5} = 0$ is",
            "options": [
                "4",
                "2",
                "3",
                "1"
            ],
            "correctAnswer": 0,
            "solution": "Let the roots be $\\alpha$ and $\\beta$.\nSum of roots: $\\alpha+\\beta = \\frac{4+\\sqrt{5}}{5+\\sqrt{2}}$.\nProduct of roots: $\\alpha\\beta = \\frac{8+2\\sqrt{5}}{5+\\sqrt{2}}$.\nThe harmonic mean of the roots is $HM = \\frac{2\\alpha\\beta}{\\alpha+\\beta}$.\n$HM = \\frac{2 \\left( \\frac{8+2\\sqrt{5}}{5+\\sqrt{2}} \\right)}{\\frac{4+\\sqrt{5}}{5+\\sqrt{2}}} = \\frac{2(8+2\\sqrt{5})}{4+\\sqrt{5}} = \\frac{4(4+\\sqrt{5})}{4+\\sqrt{5}} = 4$."
        },
        // 7
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "For the series $2+(\\sqrt{2}+\\frac{1}{\\sqrt{2}})+((2\\sqrt{2}-1)+\\frac{1}{2})+((3\\sqrt{2}-2)+\\frac{1}{2\\sqrt{2}})+\\dots$",
            "options": [
                "$T_n = \\sqrt{2}(\\sqrt{2}+n-1)-n+\\left(\\frac{2^{n/2}-1}{(\\sqrt{2}-1)^{\\frac{n-1}{2}}}\\right)$",
                "$T_n = \\sqrt{2}(\\sqrt{2}+n-1)-n+\\left(\\frac{1}{2}\\right)^{\\frac{n-1}{2}}$",
                "$S_n = \\frac{n}{2}(3+(n-1)\\sqrt{2}-n)+\\left(\\frac{2^{n/2}-1}{(\\sqrt{2}-1)^{\\frac{n-1}{2}}}\\right)$",
                "$S_n = \\frac{n}{2}(3+(n-1)\\sqrt{2}-n)+\\left[\\frac{2^{n/2}-1}{(\\sqrt{2}-1)2^{\\frac{n-1}{2}}}\\right]$"
            ],
            "correctAnswers": [1, 3],
            "solution": "The series is the sum of an arithmetic progression (A.P.) and a geometric progression (G.P.).\nFirst term: $T_1 = 1 + 1$\nSecond term: $T_2 = \\sqrt{2} + \\frac{1}{\\sqrt{2}}$\nThird term: $T_3 = (2\\sqrt{2}-1) + \\frac{1}{2}$\nFourth term: $T_4 = (3\\sqrt{2}-2) + \\frac{1}{2\\sqrt{2}}$\nThe A.P. is $1, \\sqrt{2}, 2\\sqrt{2}-1, 3\\sqrt{2}-2, \\dots$ with first term $a=1$ and common difference $d = \\sqrt{2}-1$.\nIts $n$-th term is $1 + (n-1)(\\sqrt{2}-1) = \\sqrt{2}(n-1) - n + 2 = \\sqrt{2}(\\sqrt{2}+n-1) - n$.\nThe G.P. is $1, \\frac{1}{\\sqrt{2}}, \\frac{1}{2}, \\frac{1}{2\\sqrt{2}}, \\dots$ with first term $a=1$ and common ratio $R = \\frac{1}{\\sqrt{2}}$.\nIts $n$-th term is $\\left(\\frac{1}{\\sqrt{2}}\\right)^{n-1} = \\left(\\frac{1}{2}\\right)^{\\frac{n-1}{2}}$.\nThus, $T_n = \\sqrt{2}(\\sqrt{2}+n-1)-n+\\left(\\frac{1}{2}\\right)^{\\frac{n-1}{2}}$.\nSum of $n$ terms $S_n = \\text{Sum of A.P.} + \\text{Sum of G.P.}$\n$S_n = \\frac{n}{2}[2(1) + (n-1)(\\sqrt{2}-1)] + \\frac{1 - (1/\\sqrt{2})^n}{1 - 1/\\sqrt{2}}$\n$= \\frac{n}{2}[3 + (n-1)\\sqrt{2} - n] + \\frac{\\sqrt{2}(2^{n/2}-1)}{(\\sqrt{2}-1)2^{n/2}} = \\frac{n}{2}[3 + (n-1)\\sqrt{2} - n] + \\frac{2^{n/2}-1}{(\\sqrt{2}-1)2^{\\frac{n-1}{2}}}$."
        },
        // 8
        {
            "type": "multi_mcq",
            "marks": 4,
            negativeMarks: -2,
            text: "Let $S$ be the set of all non-zero real numbers $\\alpha$ such that the quadratic equation $\\alpha x^2-x+\\alpha=0$ has two distinct real roots $x_1$ and $x_2$ satisfying the inequality $|x_1-x_2|<1$. Which of the following interval(s) is/are a subset of $S$?",
            "options": [
                "$\\left(-\\frac{1}{2}, -\\frac{1}{\\sqrt{5}}\\right)$",
                "$\\left(-\\frac{1}{\\sqrt{5}}, 0\\right)$",
                "$\\left(0, \\frac{1}{\\sqrt{5}}\\right)$",
                "$\\left(\\frac{1}{\\sqrt{5}}, \\frac{1}{2}\\right)$"
            ],
            "correctAnswers": [0, 3],
            "solution": "From the quadratic equation, sum of roots $x_1+x_2 = \\frac{1}{\\alpha}$ and product $x_1x_2 = 1$.\nWe are given $|x_1-x_2| < 1 \\implies (x_1-x_2)^2 < 1$.\nSubstituting $(x_1+x_2)^2 - 4x_1x_2 < 1$ gives $\\frac{1}{\\alpha^2} - 4 < 1 \\implies \\frac{1}{\\alpha^2} < 5 \\implies 5\\alpha^2 - 1 > 0$.\nSolving this inequality yields $\\alpha \\in \\left(-\\infty, -\\frac{1}{\\sqrt{5}}\\right) \\cup \\left(\\frac{1}{\\sqrt{5}}, \\infty\\right)$.\nAdditionally, for two distinct real roots, the discriminant $D > 0 \\implies 1 - 4\\alpha^2 > 0 \\implies 4\\alpha^2 < 1 \\implies \\alpha \\in \\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$.\nTaking the intersection of the two conditions yields $\\alpha \\in \\left(-\\frac{1}{2}, -\\frac{1}{\\sqrt{5}}\\right) \\cup \\left(\\frac{1}{\\sqrt{5}}, \\frac{1}{2}\\right)$."
        },
        // 9
        {
            "type": "multi_mcq",
            "marks": 4,
            negativeMarks: -2,
            text: "If $S_n = \\sum_{k=1}^{4n} (-1)^{\\frac{k(k+1)}{2}} k^2$. Then, $S_n$ can take value(s)",
            "options": [
                "1056",
                "1088",
                "1120",
                "1332"
            ],
            "correctAnswers": [0, 3],
            "solution": "$S_n = \\sum_{k=1}^{4n} (-1)^{\\frac{k(k+1)}{2}} k^2 = -1^2 - 2^2 + 3^2 + 4^2 - 5^2 - 6^2 + 7^2 + 8^2 - \\dots + (4n)^2$.\nGrouping the terms in pairs:\n$S_n = (3^2 - 1^2) + (4^2 - 2^2) + (7^2 - 5^2) + (8^2 - 6^2) + \\dots$\n$= 2(4 + 12 + 20 + \\dots + \\text{n terms}) + 2(6 + 14 + 22 + \\dots + \\text{n terms})$.\nBoth groups are arithmetic progressions with $n$ terms and a common difference of 8.\n$S_n = 2 \\left[ \\frac{n}{2}(2(4) + (n-1)8) \\right] + 2 \\left[ \\frac{n}{2}(2(6) + (n-1)8) \\right]$\n$= n(8 + 8n - 8) + n(12 + 8n - 8) = 8n^2 + n(8n + 4) = 16n^2 + 4n = 4n(4n+1)$.\nChecking the given options:\n(A) $4n(4n+1) = 1056 \to n(4n+1) = 264 = 8 \\times 33 \\implies n=8$.\n(B) $4n(4n+1) = 1088 \\to n(4n+1) = 272$ (No integer solution).\n(C) $4n(4n+1) = 1120 \\to n(4n+1) = 280$ (No integer solution).\n(D) $4n(4n+1) = 1332 \\to n(4n+1) = 333 = 9 \\times 37 \\implies n=9$.\nThus, $S_n$ can take the values 1056 and 1332."
        },
        // 10
        {
            "type": "multi_mcq",
            "marks": 4,
            negativeMarks: -2,
            text: "If the equation $\\left(\\frac{x}{1+x^2}\\right)^2 + a\\left(\\frac{x}{1+x^2}\\right) + 3 = 0$ has exactly two real roots which are distinct, then the set of possible real values of $a$ is",
            "options": [
                "$\\left(\\frac{-13}{2}, 0\\right)$",
                "$\\left(-\\infty, -\\frac{13}{2}\\right)$",
                "$\\left(\\frac{-13}{2}, \\frac{13}{2}\\right)$",
                "$\\left(\\frac{13}{2}, \\infty\\right)$"
            ],
            "correctAnswers": [1, 3],
            "solution": "Let $t = \\frac{x}{1+x^2}$. For real $x$, using AM-GM or differentiation, $t \\in \\left[-\\frac{1}{2}, \\frac{1}{2}\\right]$.\nThe equation becomes a quadratic in $t$: $f(t) = t^2 + at + 3 = 0$.\nNotice that for a given $t \\in \\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$, $t \\neq 0$, the equation $x^2 - \frac{x}{t} + 1 = 0$ has two distinct real roots for $x$.\nThus, for the original equation to have exactly two distinct real roots, the quadratic $f(t)$ must have exactly one real root in the interval $\\left(-\\frac{1}{2}, \\frac{1}{2}\\right)$.\nThis occurs if $f\\left(\\frac{-1}{2}\\right) \\cdot f\\left(\\frac{1}{2}\\right) < 0$.\n$f\\left(\\frac{1}{2}\\right) = \\frac{1}{4} + \\frac{a}{2} + 3 = \\frac{a}{2} + \\frac{13}{4}$.\n$f\\left(\\frac{-1}{2}\\right) = \\frac{1}{4} - \\frac{a}{2} + 3 = -\\frac{a}{2} + \\frac{13}{4}$.\n$\\left(\\frac{13}{4} + \\frac{a}{2}\\right)\\left(\\frac{13}{4} - \\frac{a}{2}\\right) < 0 \\implies \\frac{169}{16} - \\frac{a^2}{4} < 0 \\implies a^2 > \\frac{169}{4}$.\nThus, $a \\in \\left(-\\infty, -\\frac{13}{2}\\right) \\cup \\left(\\frac{13}{2}, \\infty\\right)$."
        },
        // 11
        {
            "type": "multi_mcq",
            "marks": 4,
            negativeMarks: -2,
            text: "If $a, b, c$ are positive then which of the following holds good?",
            "options": [
                "$b^2c^2+c^2a^2+a^2b^2 \\ge abc(a+b+c)$",
                "$\\frac{bc}{a}+\\frac{ca}{b}+\\frac{ab}{c} \\ge a+b+c$",
                "$\\frac{bc}{a^3}+\\frac{ca}{b^3}+\\frac{ab}{c^3} \\ge \\frac{1}{a}+\\frac{1}{b}+\\frac{1}{c}$",
                "$\\frac{1}{a}+\\frac{1}{b}+\\frac{1}{c} \\ge \\frac{1}{\\sqrt{bc}}+\\frac{1}{\\sqrt{ca}}+\\frac{1}{\\sqrt{ab}}$"
            ],
            "correctAnswers": [0, 1, 2, 3],
            "solution": "All of these follow from the AM-GM inequality:\n(A) $b^2c^2+c^2a^2 \\ge 2\\sqrt{b^2c^4a^2} = 2abc^2$. By applying this to all pairs and adding, $2(b^2c^2+c^2a^2+a^2b^2) \\ge 2abc^2+2ab^2c+2a^2bc = 2abc(a+b+c)$.\n(B) $\\frac{bc}{a} + \\frac{ca}{b} \\ge 2\\sqrt{\\frac{bc}{a} \\cdot \\frac{ca}{b}} = 2c$. Adding symmetrically gives $2\\left(\\frac{bc}{a}+\\frac{ca}{b}+\\frac{ab}{c}\\right) \\ge 2(a+b+c)$.\n(C) $\\frac{bc}{a^3} + \\frac{ca}{b^3} \\ge 2\\sqrt{\\frac{c^2ab}{a^3b^3}} = \\frac{2c}{ab}$. Thus, $\\sum \\frac{bc}{a^3} \\ge \\sum \\frac{c}{ab}$. Furthermore, $\\frac{c}{ab} + \\frac{b}{ac} \\ge 2\\sqrt{\\frac{cb}{a^2bc}} = \\frac{2}{a}$. Hence, $\\sum \\frac{c}{ab} \\ge \\sum \\frac{1}{a}$.\n(D) $\\frac{1}{a} + \\frac{1}{b} \\ge 2\\sqrt{\\frac{1}{ab}}$. Adding all similar pairs yields the final inequality."
        },
        // 12
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The arithmetic mean of the nine numbers in the given set $\\{9, 99, 999, \\dots, 999999999\\}$ is a 9 digit number $N$, all whose digits are distinct. The number $N$ does not contain the digit",
            "options": [
                "0",
                "2",
                "5",
                "9"
            ],
            "correctAnswer": 0,
            "solution": "The sum of the series is $S = (10-1) + (10^2-1) + \\dots + (10^9-1)$.\n$S = (10 + 10^2 + \\dots + 10^9) - 9 = \\frac{10(10^9-1)}{10-1} - 9 = \\frac{10^{10}-10}{9} - 9 = \\frac{10^{10}-91}{9}$.\nThe sum $S = \\frac{10000000000-91}{9} = \\frac{9999999909}{9} = 1111111101$.\nThe arithmetic mean $N = \\frac{S}{9} = \\frac{1111111101}{9} = 123456789$.\nThe digits are 1, 2, 3, 4, 5, 6, 7, 8, 9. The number $N$ does not contain the digit 0."
        },
        // 13
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "text": "If $S_n$ denotes the sum of first $n$ terms of an A.P., then $S_{n+3}-3S_{n+2}+3S_{n+1}-S_n$ is equal to",
            "correctAnswer": 0,
            "solution": "Let $T_k$ be the $k$-th term of the A.P. We know that $S_k - S_{k-1} = T_k$.\nGroup the expression: $(S_{n+3} - S_{n+2}) - 2(S_{n+2} - S_{n+1}) + (S_{n+1} - S_n)$.\nThis simplifies to $T_{n+3} - 2T_{n+2} + T_{n+1}$.\nSince $T_k$ is an arithmetic progression, the difference between consecutive terms is constant: $T_{n+3} - T_{n+2} = T_{n+2} - T_{n+1} = d$.\nThus, $(T_{n+3} - T_{n+2}) - (T_{n+2} - T_{n+1}) = d - d = 0$."
        },
        // 14
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "text": "Consider the pattern shown below:<br>Row I: 1<br>Row II: 3, 5<br>Row III: 7, 9, 11<br>Row IV: 13, 15, 17, 19, etc.<br>The number at the end of row 60 is",
            "correctAnswer": 3659,
            "solution": "Row $n$ contains $n$ consecutive odd numbers.\nThe total number of terms up to the end of Row $n$ is $1 + 2 + 3 + \\dots + n = \\frac{n(n+1)}{2}$.\nThe number at the end of Row 60 will be the $k$-th odd number, where $k = \\frac{60(61)}{2} = 1830$.\nThe formula for the $k$-th odd number is $2k - 1$.\nThus, the number is $2(1830) - 1 = 3660 - 1 = 3659$."
        },
        // 15
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "text": "If the $n^{\\text{th}}$ term of the series $3\\frac{1}{3}, 2, 1\\frac{3}{7}, 1\\frac{1}{9}, \\dots$ is $\\frac{an+10}{bn+c}$, $n \\in \\mathbb{N}$, then find the value of $(a+b+c)$.",
            "correctAnswer": 3,
            "solution": "Convert the mixed numbers into improper fractions:\n$T_1 = 3\\frac{1}{3} = \\frac{10}{3}$\n$T_2 = 2 = \\frac{10}{5}$\n$T_3 = 1\\frac{3}{7} = \\frac{10}{7}$\n$T_4 = 1\\frac{1}{9} = \\frac{10}{9}$\nThe general term can be observed as $T_n = \\frac{10}{2n+1}$.\nComparing this with $T_n = \\frac{an+10}{bn+c}$, we can see that $a=0$, $b=2$, and $c=1$.\nTherefore, $(a+b+c) = 0 + 2 + 1 = 3$."
        },
        // 16
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "text": "Let $a_1, a_2, \\dots, a_{2024}$ be an Arithmetic Progression such that $a_1 + (a_5 + a_{10} + a_{15} + \\dots + a_{2020}) + a_{2024} = 2233$. Then $\\frac{1}{100}(a_1 + a_2 + a_3 + \\dots + a_{2024})$ is equal to",
            "correctAnswer": 111.32,
            "solution": "In an Arithmetic Progression, the sum of terms equidistant from the ends is constant: $a_k + a_{n-k+1} = a_1 + a_n$.\nThe sequence inside the parentheses is $a_5, a_{10}, a_{15}, \\dots, a_{2020}$. These are terms with indices that are multiples of 5. The number of such terms is $2020 / 5 = 404$.\nWe can pair them up from the ends: $(a_5 + a_{2020}) + (a_{10} + a_{2015}) + \\dots$\nThere are $404 / 2 = 202$ such pairs. Each pair sums to $a_1 + a_{2024}$.\nSo the given equation becomes: $(a_1 + a_{2024}) + 202(a_1 + a_{2024}) = 2233 \\implies 203(a_1 + a_{2024}) = 2233 \\implies a_1 + a_{2024} = 11$.\nThe total sum of the progression is $S_{2024} = \\frac{2024}{2} (a_1 + a_{2024}) = 1012(11) = 11132$.\nThe desired value is $\\frac{11132}{100} = 111.32$."
        },
        // 17
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "text": "$\\alpha, \\beta$ are roots of the equation $\\lambda(x^2-x)+x+5=0$. If $\\lambda_1$ and $\\lambda_2$ are the two values of $\\lambda$ for which the roots $\\alpha, \\beta$ are connected by the relation $\\frac{\\alpha}{\\beta} + \\frac{\\beta}{\\alpha} = 4$, then the value of $\\frac{1}{14} \\left( \\frac{\\lambda_1}{\\lambda_2} + \\frac{\\lambda_2}{\\lambda_1} \\right)$ is",
            "correctAnswer": 73,
            "solution": "Rewrite the equation: $\\lambda x^2 + (1-\\lambda)x + 5 = 0$.\nSum of roots $\\alpha+\\beta = \\frac{\\lambda-1}{\\lambda}$, and product $\\alpha\\beta = \\frac{5}{\\lambda}$.\nThe given relation is $\\frac{\\alpha^2+\\beta^2}{\\alpha\\beta} = 4 \\implies (\\alpha+\\beta)^2 - 2\\alpha\\beta = 4\\alpha\\beta \\implies (\\alpha+\\beta)^2 = 6\\alpha\\beta$.\nSubstitute sum and product: $\\left(\\frac{\\lambda-1}{\\lambda}\\right)^2 = 6 \\left(\\frac{5}{\\lambda}\\right) = \\frac{30}{\\lambda}$.\n$\\frac{(\\lambda-1)^2}{\\lambda^2} = \\frac{30}{\\lambda} \\implies \\lambda^2 - 2\\lambda + 1 = 30\\lambda \\implies \\lambda^2 - 32\\lambda + 1 = 0$.\nThe roots of this equation are $\\lambda_1, \\lambda_2$, giving $\\lambda_1+\\lambda_2 = 32$ and $\\lambda_1\\lambda_2 = 1$.\nWe need $\\frac{1}{14} \\left( \\frac{\\lambda_1^2 + \\lambda_2^2}{\\lambda_1\\lambda_2} \\right) = \\frac{1}{14} \\left( \\frac{(\\lambda_1+\\lambda_2)^2 - 2\\lambda_1\\lambda_2}{\\lambda_1\\lambda_2} \\right) = \\frac{1}{14} \\left( \\frac{32^2 - 2(1)}{1} \\right) = \\frac{1024 - 2}{14} = \\frac{1022}{14} = 73$."
        },
        // 18
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "text": "Find the sum of the infinitely decreasing G.P. whose third term, three times the product of the first and fourth term and second term form an A.P. in the indicated order, with common difference equal to $1/8$.",
            "correctAnswer": 2,
            "solution": "Let the G.P. be $a, ar, ar^2, ar^3, \\dots$\nThe terms in the A.P. are $ar^2$, $3(a)(ar^3) = 3a^2r^3$, and $ar$.\nGiven common difference is $1/8$, we have:\n$3a^2r^3 - ar^2 = 1/8$ and $ar - 3a^2r^3 = 1/8$.\nAdding these equations: $ar - ar^2 = 1/4 \\implies a = \\frac{1}{4r(1-r)}$.\nSubstitute $a$ into $ar - 3a^2r^3 = 1/8$:\n$\\frac{r}{4r(1-r)} - 3 \\left(\\frac{1}{4r(1-r)}\\right)^2 r^3 = 1/8 \\implies \\frac{1}{4(1-r)} - \\frac{3r}{16(1-r)^2} = \\frac{1}{8}$.\nMultiply by $16(1-r)^2$:\n$4(1-r) - 3r = 2(1-r)^2 \\implies 4 - 7r = 2 - 4r + 2r^2 \\implies 2r^2 + 3r - 2 = 0$.\nFactorizing: $(2r-1)(r+2) = 0$. Since it's a decreasing G.P., $|r| < 1$, so $r = 1/2$.\nFind $a = \\frac{1}{4(1/2)(1-1/2)} = \\frac{1}{4(1/4)} = 1$.\nThe sum to infinity is $S = \\frac{a}{1-r} = \\frac{1}{1 - 1/2} = 2$."
        },
        // 19
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "text": "If the biquadratic $x^4+4x^3+6px^2+4qx+r$ is divisible by $x^3+3x^2+9x+3$, then find the value of $(p+q)r$.",
            "correctAnswer": 15,
            "solution": "Let the biquadratic be $P(x) = (x^3+3x^2+9x+3)(x-k)$.\nComparing coefficients of $x^3$: $-k + 3 = 4 \\implies k = -1$.\nThus $P(x) = (x^3+3x^2+9x+3)(x+1) = x^4 + x^3 + 3x^3 + 3x^2 + 9x^2 + 9x + 3x + 3 = x^4 + 4x^3 + 12x^2 + 12x + 3$.\nEquating coefficients with $x^4+4x^3+6px^2+4qx+r$:\n$6p = 12 \\implies p = 2$.\n$4q = 12 \\implies q = 3$.\n$r = 3$.\nWe need $(p+q)r = (2+3)3 = 15$."
        }
    ]
};