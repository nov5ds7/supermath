window.testBank = window.testBank || {};
window.testBank['test_805'] = {
    "id": "test_805",
    "title": "MPT Pre-Test ( Trigonometric Ratios - 1)",
    "category": "Pre-Tests Maths",
    "uploadedAt": "2026-07-31T12:30:00Z",
    "timeLimitMins": 80,
    "shuffleQuestions": false,
    "randomizePoolSize": 0,
    "questions": [
        // 1
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $f(x) = \\frac{1 - \\sin 2x + \\cos 2x}{2 \\cos 2x}$, then the value of $f(16^{\\circ}) \\cdot f(29^{\\circ})$ is",
            "options": [
                "$\\frac{1}{2}$",
                "$\\frac{1}{4}$",
                "1",
                "$\\frac{3}{4}$"
            ],
            "correctAnswer": 0,
            "solution": "$f(x) = \\frac{1 - \\sin 2x + \\cos 2x}{2 \\cos 2x} = \\frac{1}{2} \\left[\\frac{(\\cos x - \\sin x)^2}{\\cos^2 x - \\sin^2 x} + 1\\right] = \\frac{1}{2}[\\tan(45^{\\circ} - x) + 1]$. Then $f(16^{\\circ}) = \\frac{1}{2}[\\tan 29^{\\circ} + 1]$ and $f(29^{\\circ}) = \\frac{1}{2}[\\tan 16^{\\circ} + 1]$. Multiplying, $f(16^{\\circ})f(29^{\\circ}) = \\frac{1}{4}[1 + \\tan 16^{\\circ} + \\tan 29^{\\circ} + \\tan 16^{\\circ}\\tan 29^{\\circ}]$. Since $16^{\\circ} + 29^{\\circ} = 45^{\\circ}$, $\\tan(45^{\\circ}) = \\frac{\\tan 16^{\\circ} + \\tan 29^{\\circ}}{1 - \\tan 16^{\\circ}\\tan 29^{\\circ}} = 1 \\implies \\tan 16^{\\circ} + \\tan 29^{\\circ} = 1 - \\tan 16^{\\circ}\\tan 29^{\\circ}$. Substituting yields $f(16^{\\circ})f(29^{\\circ}) = \\frac{1}{4}[1 + 1] = \\frac{1}{2}$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $P = (\\tan (3^{n+1}\\theta) - \\tan \\theta)$ and $Q = \\sum_{r=0}^{n} \\frac{\\sin (3^r \\theta)}{\\cos (3^{r+1}\\theta)}$, then",
            "options": [
                "$P = 2Q$",
                "$P = 3Q$",
                "$2P = Q$",
                "$3P = Q$"
            ],
            "correctAnswer": 0,
            "solution": "Consider the identity $\\frac{2\\sin x}{\\cos 3x} = \\tan 3x - \\tan x$. Applying this to the summation: $2Q = \\sum_{r=0}^{n} \\frac{2 \\sin (3^r \\theta)}{\\cos (3^{r+1}\\theta)} = \\sum_{r=0}^{n} [\\tan (3^{r+1}\\theta) - \\tan (3^r \\theta)]$. The sum telescopes to $2Q = \\tan (3^{n+1}\\theta) - \\tan \\theta = P$. Hence, $P = 2Q$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Given $A = \\sin^2 \\theta + \\cos^4 \\theta$ then for all real values of $\\theta$",
            "options": [
                "$1 \\le A \\le 2$",
                "$\\frac{13}{16} \\le A \\le 1$",
                "$\\frac{3}{4} \\le A \\le 1$",
                "$\\frac{3}{4} \\le A \\le \\frac{13}{16}$"
            ],
            "correctAnswer": 2,
            "solution": "$A = \\sin^2 \\theta + \\cos^4 \\theta = \\sin^2 \\theta + (1 - \\sin^2 \\theta)^2 = \\sin^4 \\theta - \\sin^2 \\theta + 1 = \\left(\\sin^2 \\theta - \\frac{1}{2}\\right)^2 + \\frac{3}{4}$. Since $0 \\le \\sin^2 \\theta \\le 1$, the minimum value of $A$ is $\\frac{3}{4}$ at $\\sin^2 \\theta = \\frac{1}{2}$, and the maximum value is $1$ at $\\sin^2 \\theta = 0$ or $1$. Thus, $\\frac{3}{4} \\le A \\le 1$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\cos (\\theta + \\phi) = m \\cos (\\theta - \\phi)$, then $\\tan \\theta$ is equal to :",
            "options": [
                "$\\frac{1 + m}{1 - m} \\tan \\phi$",
                "$\\frac{1 - m}{1 + m} \\tan \\phi$",
                "$\\frac{1 - m}{1 + m} \\cot \\phi$",
                "$\\frac{1 + m}{1 - m} \\cot \\phi$"
            ],
            "correctAnswer": 2,
            "solution": "Given $\\frac{\\cos(\\theta+\\phi)}{\\cos(\\theta-\\phi)} = m$. Applying componendo and dividendo: $\\frac{\\cos(\\theta+\\phi) - \\cos(\\theta-\\phi)}{\\cos(\\theta+\\phi) + \\cos(\\theta-\\phi)} = \\frac{m-1}{m+1}$. Using sum-to-product formulas: $\\frac{-2\\sin\\theta\\sin\\phi}{2\\cos\\theta\\cos\\phi} = \\frac{m-1}{m+1} \\implies -\\tan\\theta\\tan\\phi = \\frac{m-1}{m+1} \\implies \\tan\\theta = \\left(\\frac{1-m}{1+m}\\right)\\cot\\phi$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $2\\tan \\frac{\\alpha}{2} = \\tan \\frac{\\beta}{2}$, then $\\frac{3 + 5\\cos \\beta}{5 + 3\\cos \\beta}$ is equal to :",
            "options": [
                "$\\cos \\alpha$",
                "$\\cos \\beta$",
                "$\\sin \\alpha$",
                "$\\sin \\beta$"
            ],
            "correctAnswer": 0,
            "solution": "Using the formula $\\cos\\beta = \\frac{1-\\tan^2(\\beta/2)}{1+\\tan^2(\\beta/2)}$ and substituting $\\tan(\\beta/2) = 2\\tan(\\alpha/2)$, we get $\\frac{3+5\\cos\\beta}{5+3\\cos\\beta} = \\frac{3\\left(1+\\tan^2\\frac{\\beta}{2}\\right)+5\\left(1-\\tan^2\\frac{\\beta}{2}\\right)}{5\\left(1+\\tan^2\\frac{\\beta}{2}\\right)+3\\left(1-\\tan^2\\frac{\\beta}{2}\\right)} = \\frac{8-2\\tan^2\\frac{\\beta}{2}}{8+2\\tan^2\\frac{\\beta}{2}} = \\frac{4-4\\tan^2\\frac{\\alpha}{2}}{4+4\\tan^2\\frac{\\alpha}{2}} = \\frac{1-\\tan^2\\frac{\\alpha}{2}}{1+\\tan^2\\frac{\\alpha}{2}} = \\cos\\alpha$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $k_1 = \\tan 27\\theta - \\tan \\theta$ and $k_2 = \\frac{\\sin \\theta}{\\cos 3\\theta} + \\frac{\\sin 3\\theta}{\\cos 9\\theta} + \\frac{\\sin 9\\theta}{\\cos 27\\theta}$, then",
            "options": [
                "$k_1 = 2k_2$",
                "$k_1 = k_2 + 4$",
                "$k_1 = k_2$",
                "none of these"
            ],
            "correctAnswer": 0,
            "solution": "Using the identity $\\frac{2\\sin x}{\\cos 3x} = \\tan 3x - \\tan x$, we get $2k_2 = \\sum_{r=0}^{2} \\frac{2\\sin (3^r \\theta)}{\\cos (3^{r+1}\\theta)} = (\\tan 3\\theta - \\tan \\theta) + (\\tan 9\\theta - \\tan 3\\theta) + (\\tan 27\\theta - \\tan 9\\theta) = \\tan 27\\theta - \\tan \\theta = k_1$. Thus $k_1 = 2k_2$."
        },
        // 7
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $A, B, C, D$ are the angles of a quadrilateral, then $\\frac{\\tan A + \\tan B + \\tan C + \\tan D}{\\cot A + \\cot B + \\cot C + \\cot D}$ is equal to",
            "options": [
                "$\\tan A \\tan B \\tan C \\tan D$",
                "$\\cot A \\cot B \\cot C \\cot D$",
                "$\\tan^2 A + \\tan^2 B + \\tan^2 C + \\tan^2 D$",
                "$\\sum \\tan A \\tan B \\tan C$"
            ],
            "correctAnswer": 0,
            "solution": "Since $A + B = 2\\pi - (C + D)$, we have $\\tan(A+B) = -\\tan(C+D)$. Expanding both sides yields $\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B} = \\frac{-\\tan C - \\tan D}{1 - \\tan C \\tan D}$. Cross-multiplying and rearranging gives $\\tan A + \\tan B + \\tan C + \\tan D = \\tan A \\tan B \\tan C \\tan D (\\cot A + \\cot B + \\cot C + \\cot D)$. Therefore, the given fraction equals $\\tan A \\tan B \\tan C \\tan D$."
        },
        // 8
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\tan^2 \\theta = 2\\tan^2 \\phi + 1$, then the value of $\\cos 2\\theta + \\sin^2 \\phi$ is",
            "options": [
                "1",
                "2",
                "-1",
                "Independent of $\\phi$"
            ],
            "correctAnswer": 3,
            "solution": "Using $\\cos 2\\theta = \\frac{1-\\tan^2 \\theta}{1+\\tan^2 \\theta}$, we substitute $\\tan^2 \\theta = 2\\tan^2 \\phi + 1$. This gives $\\cos 2\\theta = \\frac{1 - (2\\tan^2 \\phi + 1)}{1 + (2\\tan^2 \\phi + 1)} = \\frac{-2\\tan^2 \\phi}{2(1+\\tan^2 \\phi)} = -\\sin^2 \\phi$. Therefore, $\\cos 2\\theta + \\sin^2 \\phi = -\\sin^2 \\phi + \\sin^2 \\phi = 0$, which is a constant and independent of $\\phi$."
        },
        // 9
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $A = \\tan 6^{\\circ} \\tan 42^{\\circ}$ and $B = \\cot 66^{\\circ} \\cot 78^{\\circ}$, then",
            "options": [
                "$A = 2B$",
                "$A = \\frac{1}{3}B$",
                "$A = B$",
                "$3A = 2B$"
            ],
            "correctAnswer": 2,
            "solution": "Using the identity $\\tan x \\tan(60^{\\circ}-x) \\tan(60^{\\circ}+x) = \\tan 3x$, we substitute $x=6^{\\circ}$ to get $\\tan 6^{\\circ} \\tan 66^{\\circ} = \\frac{\\tan 18^{\\circ}}{\\tan 54^{\\circ}}$. Substituting $x=18^{\\circ}$ gives $\\tan 42^{\\circ} \\tan 78^{\\circ} = \\frac{\\tan 54^{\\circ}}{\\tan 18^{\\circ}}$. Multiplying the two equations yields $\\tan 6^{\\circ} \\tan 42^{\\circ} \\tan 66^{\\circ} \\tan 78^{\\circ} = 1$. Thus $\\tan 6^{\\circ} \\tan 42^{\\circ} = \\frac{1}{\\tan 66^{\\circ} \\tan 78^{\\circ}} = \\cot 66^{\\circ} \\cot 78^{\\circ}$. Hence, $A = B$."
        },
        // 10
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The greatest and least value of $y = 10\\cos^2 x - 6\\sin x\\cos x + 2\\sin^2 x$ are respectively",
            "options": [
                "11, 1",
                "10, 2",
                "12, -4",
                "11, -1"
            ],
            "correctAnswer": 0,
            "solution": "Rewrite $y = 8\\cos^2 x + 2 - 3\\sin 2x = 4(1+\\cos 2x) + 2 - 3\\sin 2x = 4\\cos 2x - 3\\sin 2x + 6$. The maximum value of $4\\cos 2x - 3\\sin 2x$ is $\\sqrt{4^2 + 3^2} = 5$, and the minimum value is $-5$. Thus the greatest value of $y$ is $5 + 6 = 11$, and the least value is $-5 + 6 = 1$."
        },
        // 11
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $\\cos^2 \\alpha + p$ and $\\sin^2 \\alpha + p$ are the roots of the equation $x^2 + 4x + \\frac{61}{16} = 0$. The equation whose roots are $\\tan^2 \\alpha$ and $\\cot^2 \\alpha$ is",
            "options": [
                "$x^2 - 4x + 1 = 0$",
                "$x^2 - 10x + 1 = 0$",
                "$x^2 + 10x + 1 = 0$",
                "$x^2 - 14x + 1 = 0$"
            ],
            "correctAnswer": 3,
            "solution": "Sum of roots $= 1+2p = -4 \\implies p = -5/2$. Product of roots $= \\cos^2\\alpha\\sin^2\\alpha + p(1) + p^2 = 61/16$. Substituting $p$ gives $\\sin^2\\alpha\\cos^2\\alpha = 1/16$. The new roots are $\\tan^2\\alpha$ and $\\cot^2\\alpha$. Sum $= \\frac{\\sin^4\\alpha+\\cos^4\\alpha}{\\sin^2\\alpha\\cos^2\\alpha} = \\frac{1-2(1/16)}{1/16} = 14$. Product $= 1$. Thus the required equation is $x^2 - 14x + 1 = 0$."
        },
        // 12
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $A$ and $B$ denote the statements <br>$A: \\cos \\alpha + \\cos \\beta + \\cos \\gamma = 0$, <br>$B: \\sin \\alpha + \\sin \\beta + \\sin \\gamma = 0$. <br>If $\\cos (\\beta - \\gamma) + \\cos (\\gamma - \\alpha) + \\cos (\\alpha - \\beta) = -\\frac{3}{2}$, then",
            "options": [
                "$A$ is true and $B$ is false",
                "$A$ is false and $B$ is true",
                "Both $A$ and $B$ are true",
                "Both $A$ and $B$ are false"
            ],
            "correctAnswer": 2,
            "solution": "The given condition implies $2[\\cos(\\beta-\\gamma)+\\cos(\\gamma-\\alpha)+\\cos(\\alpha-\\beta)] + \\sum(\\sin^2\\alpha+\\cos^2\\alpha) = 0$. This simplifies to $(\\sin\\alpha+\\sin\\beta+\\sin\\gamma)^2 + (\\cos\\alpha+\\cos\\beta+\\cos\\gamma)^2 = 0$. Since squares cannot be negative, both the sum of sines and the sum of cosines must be equal to zero. Thus, both $A$ and $B$ are true."
        },
        // 13
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\cot \\alpha = 1$ and $\\sec \\beta = -\\frac{5}{3}$, where $\\pi < \\alpha < \\frac{3\\pi}{2}$ and $\\frac{\\pi}{2} < \\beta < \\pi$, then the value of $\\tan (\\alpha + \\beta)$ and the quadrant in which $\\alpha + \\beta$ lies, respectively are",
            "options": [
                "$-\\frac{1}{7}$ and IVth quadrant",
                "$7$ and Ist quadrant",
                "$-7$ and IVth quadrant",
                "$\\frac{1}{7}$ and Ist quadrant"
            ],
            "correctAnswer": 0,
            "solution": "$\\cot\\alpha = 1, \\alpha\\in(\\pi, 3\\pi/2) \\implies \\tan\\alpha = 1$. $\\sec\\beta = -5/3, \\beta\\in(\\pi/2, \\pi) \\implies \\cos\\beta = -3/5, \\sin\\beta = 4/5 \\implies \\tan\\beta = -4/3$. Therefore, $\\tan(\\alpha+\\beta) = \\frac{\\tan\\alpha + \\tan\\beta}{1 - \\tan\\alpha\\tan\\beta} = \\frac{1 - 4/3}{1 + 4/3} = -\\frac{1}{7}$. Since $\\alpha\\in(\\pi, 3\\pi/2)$ and $\\beta\\in(\\pi/2, \\pi)$, the sum $\\alpha+\\beta$ lies in the IVth quadrant."
        },
        // 14
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The value of $\\cot \\pi/24$ is",
            "options": [
                "$\\sqrt{2} + \\sqrt{3} + 2 - \\sqrt{6}$",
                "$\\sqrt{2} + \\sqrt{3} + 2 + \\sqrt{6}$",
                "$\\sqrt{2} - \\sqrt{3} - 2 + \\sqrt{6}$",
                "$3\\sqrt{2} - \\sqrt{3} - \\sqrt{6}$"
            ],
            "correctAnswer": 1,
            "solution": "Using $\\cot(\\theta/2) = \\frac{1+\\cos\\theta}{\\sin\\theta}$ for $\\theta=\\pi/12$, we have $\\cot(\\pi/24) = \\frac{1+\\cos(\\pi/12)}{\\sin(\\pi/12)}$. Substituting $\\cos(\\pi/12) = \\frac{\\sqrt{3}+1}{2\\sqrt{2}}$ and $\\sin(\\pi/12) = \\frac{\\sqrt{3}-1}{2\\sqrt{2}}$ and simplifying yields $\\sqrt{2} + \\sqrt{3} + 2 + \\sqrt{6}$."
        },
        // 15
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $15\\sin^4 \\alpha + 10\\cos^4 \\alpha = 6$, for some $\\alpha \\in R$, then the value of $27\\sec^6 \\alpha + 8\\csc^6 \\alpha$ is equal to",
            "options": [
                "350",
                "500",
                "400",
                "250"
            ],
            "correctAnswer": 3,
            "solution": "Using $\\sin^2\\alpha + \\cos^2\\alpha = 1$, $15\\sin^4\\alpha + 10\\cos^4\\alpha = 6(\\sin^2\\alpha + \\cos^2\\alpha)^2 \\implies 9\\sin^4\\alpha - 12\\sin^2\\alpha\\cos^2\\alpha + 4\\cos^4\\alpha = 0$. Thus $(3\\sin^2\\alpha - 2\\cos^2\\alpha)^2 = 0 \\implies \\tan^2\\alpha = 2/3$. Finally, $27\\sec^6\\alpha + 8\\csc^6\\alpha = 27(1+\\tan^2\\alpha)^3 + 8(1+\\cot^2\\alpha)^3 = 27(5/3)^3 + 8(5/2)^3 = 125 + 125 = 250$."
        },
        // 16
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If for $x \\in \\left(0, \\frac{\\pi}{3}\\right)$, $\\log_{10} \\sin x + \\log_{10} \\cos x = -1$ and $\\log_{10} (\\sin x + \\cos x) = \\frac{1}{2}(\\log_{10} n - 1), n > 0$, then the value of $n$ is equal to",
            "options": [
                "20",
                "12",
                "9",
                "16"
            ],
            "correctAnswer": 1,
            "solution": "From the first equation, $\\log_{10}(\\sin x \\cos x) = -1 \\implies \\sin x \\cos x = 1/10$. From the second equation, $2\\log_{10}(\\sin x + \\cos x) = \\log_{10} n - 1 = \\log_{10} n - \\log_{10} 10 = \\log_{10}(n/10)$. Squaring both sides of the argument gives $\\sin^2 x + \\cos^2 x + 2\\sin x\\cos x = n/10 \\implies 1 + 2(1/10) = n/10 \\implies 1 + 1/5 = n/10 \\implies n = 12$."
        },                
        // 17
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The value of $\\cos \\frac{\\pi}{2^2} \\cdot \\cos \\frac{\\pi}{2^3} \\cdot \\dots \\cdot \\cos \\frac{\\pi}{2^{10}} \\cdot \\sin \\frac{\\pi}{2^{10}}$ is",
            "options": [
                "$\\frac{1}{1024}$",
                "$\\frac{1}{2}$",
                "$\\frac{1}{512}$",
                "$\\frac{1}{256}$"
            ],
            "correctAnswer": 2,
            "solution": "Using the identity $\\cos\\alpha\\cdot\\cos 2\\alpha\\dots\\cos 2^{n-1}\\alpha = \\frac{\\sin 2^n\\alpha}{2^n\\sin\\alpha}$. Letting $\\alpha = \\frac{\\pi}{2^{10}}$ and $n=9$, the expression equals $\\frac{\\sin(2^9\\cdot\\frac{\\pi}{2^{10}})}{2^9\\sin(\\frac{\\pi}{2^{10}})} \\cdot \\sin(\\frac{\\pi}{2^{10}}) = \\frac{\\sin(\\pi/2)}{2^9} = \\frac{1}{512}$."
        },
        // 18
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $A + B + C = 4S$, then $\\cos(2S - A) + \\cos(2S - B) - \\cos(2S - C) - \\cos 2S =$",
            "options": [
                "$4\\cos\\frac{A}{2}\\cos\\frac{B}{2}\\cos\\frac{C}{2}$",
                "$4\\cos\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$",
                "$4\\sin\\frac{A}{2}\\cos\\frac{B}{2}\\sin\\frac{C}{2}$",
                "$4\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\cos\\frac{C}{2}$"
            ],
            "correctAnswer": 3,
            "solution": "Given $4S = A+B+C \\implies 2S = \\frac{A+B+C}{2}$. Let $E = \\cos(2S-A) + \\cos(2S-B) - \\cos(2S-C) - \\cos 2S$. Using sum-to-product formulas: $E = 2\\cos\\frac{4S-A-B}{2}\\cos\\frac{B-A}{2} - 2\\cos\\frac{4S-C}{2}\\cos\\frac{C}{2}$. Substituting $4S = A+B+C$ gives $E = 2\\cos\\frac{C}{2}\\cos\\frac{B-A}{2} - 2\\cos\\frac{A+B}{2}\\cos\\frac{C}{2} = 2\\cos\\frac{C}{2}\\left[\\cos\\frac{B-A}{2} - \\cos\\frac{A+B}{2}\\right]$. Applying $\\cos X - \\cos Y = -2\\sin\\frac{X+Y}{2}\\sin\\frac{X-Y}{2}$ yields $E = 2\\cos\\frac{C}{2}\\left[2\\sin\\frac{B}{2}\\sin\\frac{A}{2}\\right] = 4\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\cos\\frac{C}{2}$."
        },
        // 19
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "In a $\\Delta ABC$, if $\\cos A + \\cos B + \\cos C = a + b\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$, then $a + b =$",
            "options": [
                "3",
                "0",
                "1",
                "5"
            ],
            "correctAnswer": 3,
            "solution": "Using the identity $\\cos A + \\cos B + \\cos C = 1 + 4\\sin\\frac{A}{2}\\sin\\frac{B}{2}\\sin\\frac{C}{2}$. Comparing with the given expression yields $a=1$ and $b=4$. Therefore, $a + b = 5$."
        },
        // 20
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "$\\cos^4 \\frac{\\pi}{8} + \\cos^4 \\frac{2\\pi}{8} + \\cos^4 \\frac{3\\pi}{8} + \\cos^4 \\frac{4\\pi}{8} + \\cos^4 \\frac{5\\pi}{8} + \\cos^4 \\frac{6\\pi}{8} + \\cos^4 \\frac{7\\pi}{8} + \\cos^4 \\frac{8\\pi}{8} =$",
            "options": [
                "3",
                "-1",
                "1",
                "4"
            ],
            "correctAnswer": 0,
            "solution": "Using $\\cos^4 x = \\frac{3+4\\cos 2x + \\cos 4x}{8}$, the terms pair up symmetrically. $\\cos^4(\\pi/2)=0$ and $\\cos^4(\\pi)=1$. The remaining 6 terms sum to $2$. Thus the total value is $0+1+2=3$."
        },
        // 21
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The smallest integer $n$ such that $\\frac{1}{\\sin 45^{\\circ} \\sin 46^{\\circ}} + \\frac{1}{\\sin 47^{\\circ} \\sin 48^{\\circ}} + \\dots + \\frac{1}{\\sin 133^{\\circ} \\sin 134^{\\circ}} = \\frac{1}{\\sin(n^{\\circ})}$ is",
            "correctAnswer": 1,
            "solution": "Using the identity $\\frac{1}{\\sin x \\sin(x+1)} = \\frac{\\cot x - \\cot(x+1)}{\\sin 1}$, the sum telescopes to $\\frac{1}{\\sin 1}(\\cot 45^{\\circ} - \\cot 134^{\\circ})$ which evaluates to $\\frac{1}{\\sin 1^{\\circ}}$. Thus the smallest integer $n$ is $1$."
        },
        // 22
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The number of integral value(s) of 'p' for which the equation $99\\cos 2\\theta - 20\\sin 2\\theta = 20p + 35$, will have a solution is",
            "correctAnswer": 10,
            "solution": "The range of $99\\cos 2\\theta - 20\\sin 2\\theta$ is $[-\\sqrt{99^2+20^2}, \\sqrt{99^2+20^2}] = [-101, 101]$. Thus, $-101 \\le 20p+35 \\le 101 \\implies -136 \\le 20p \\le 66 \\implies -6.8 \\le p \\le 3.3$. The integer values of $p$ are $-6, -5, -4, -3, -2, -1, 0, 1, 2, 3$, which is a total of $10$ values."
        },
        // 23
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "If $x = \\tan \\frac{\\pi}{18}$, then $3x^{6} - 27x^{4} + 33x^{2}$ is equal to",
            "correctAnswer": 1,
            "solution": "We know $\\frac{\\pi}{6} = 3\\left(\\frac{\\pi}{18}\\right) \\implies \\tan\\frac{\\pi}{6} = \\frac{3x - x^3}{1 - 3x^2}$. Since $\\tan\\frac{\\pi}{6} = \\frac{1}{\\sqrt{3}}$, squaring both sides yields $\\frac{1}{3} = \\left(\\frac{3x - x^3}{1 - 3x^2}\\right)^2 \\implies 3x^6 - 27x^4 + 33x^2 = 1$."
        },
        // 24
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "$\\cos^2 5^{\\circ} + \\cos^2 10^{\\circ} + \\cos^2 15^{\\circ} + \\dots + \\cos^2 360^{\\circ} =$",
            "correctAnswer": 36,
            "solution": "The sum has 72 terms. Using $\\cos^2 x = \\frac{1 + \\cos 2x}{2}$, the sum becomes $\\frac{72}{2} + \\frac{1}{2}\\sum_{k=1}^{72} \\cos(10k^{\\circ})$. Since the cosine terms form two complete cycles, their sum is zero. Thus the total value is $36$."
        },
        // 25
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "For a positive integer $n$, let $f_n(\\theta) = \\left(\\tan \\frac{\\theta}{2}\\right)(1 + \\sec \\theta)(1 + \\sec 2\\theta)(1 + \\sec 2^2\\theta) \\dots (1 + \\sec 2^n\\theta)$, then $f_4\\left(\\frac{\\pi}{64}\\right) =$",
            "correctAnswer": 1,
            "solution": "Using the identity $\\left(\\tan\\frac{\\theta}{2}\\right)(1+\\sec\\theta) = \\tan\\theta$, the product telescopes to $\\tan\\theta \\cdot (1+\\sec 2\\theta) \\dots (1+\\sec 2^n\\theta) = \\tan(2^n\\theta)$. For $n=4$, $f_4(\\pi/64) = \\tan(2^4 \\cdot \\pi/64) = \\tan(\\pi/4) = 1$."
        }        
    ]
};