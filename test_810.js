window.testBank = window.testBank || {};
window.testBank['test_810'] = {
    title: "APT Pre-Test (Trigonometry)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-08-20T12:40:00Z",
    timeLimitMins: 80,
    examPattern: "advance",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // ================================================================
        // SECTION 1 : Single Correct MCQ  (+3, –1, 0)
        // ================================================================
        // 1
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>SECTION - 1</h3><b>Single Correct Type</b><br><br>This section contains <b>SIX (06)</b> questions. Each question has <b>FOUR</b> options. <b>ONLY ONE</b> of these four options is the correct answer.<br><br>For each question, choose the option corresponding to the correct answer.<br><br><b>Marking Scheme :</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>The value of $\\cos (-89^{\\circ}) + \\cos (-87^{\\circ}) + \\cos (-85^{\\circ}) + \\dots + \\cos (85^{\\circ}) + \\cos (87^{\\circ}) + \\cos (89^{\\circ})$ is equal to",
            "options": [
                "$\\csc 1^{\\circ}$",
                "$\\sec 1^{\\circ}$",
                "$2\\sec 1^{\\circ}$",
                "$2\\csc 1^{\\circ}$"
            ],
            "correctAnswer": 0,
            "solution": "The sum is $2(\\cos 1^\\circ + \\cos 3^\\circ + \\dots + \\cos 89^\\circ)$. Using the sum of cosine series in AP, this simplifies to $2 \\frac{\\sin 45^\\circ}{\\sin 1^\\circ} \\cos 45^\\circ = \\frac{2 \\sin 45^\\circ \\cos 45^\\circ}{\\sin 1^\\circ} = \\frac{\\sin 90^\\circ}{\\sin 1^\\circ} = \\csc 1^\\circ$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Which of following is correct ?",
            "options": [
                "$\\sin 1 < \\sin 3$",
                "$\\sin 1 > \\sin 2$",
                "$\\sin 4 < \\sin 5$",
                "$\\sin 5 < \\sin 6$"
            ],
            "correctAnswer": 3,
            "solution": "<br><img src='images/APT-Pre-Test-Trigo_Q2.png' alt='Circuit Diagram' style='max-width:100%;'><br>From the graph of $\\sin x$, between $0$ and $\\pi$, the function increases then decreases. Between $\\pi$ and $2\\pi$, it increases in magnitude negatively. Specifically, $\\sin 1 > \\sin 3$, $\\sin 1 < \\sin 2$, $\\sin 4 > \\sin 5$, and $\\sin 5 < \\sin 6$. Thus, option (D) is correct."
        },
        // 3
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Solution set of the inequation $\\sin x\\cos x + \\frac{1}{2}\\tan x \\ge 1$ is",
            "options": [
                "$[n\\pi + \\frac{\\pi}{4}, n\\pi + \\frac{\\pi}{2}], n \\in Z$",
                "$[n\\pi + \\frac{\\pi}{3}, n\\pi + \\frac{\\pi}{2}], n \\in Z$",
                "$[n\\pi + \\frac{\\pi}{4}, n\\pi + \\frac{\\pi}{2}), n \\in Z$",
                "$[n\\pi + \\frac{\\pi}{6}, n\\pi + \\frac{\\pi}{2}), n \\in Z$"
            ],
            "correctAnswer": 2,
            "solution": "The inequality $\\sin x \\cos x + \\frac{1}{2} \\tan x \\ge 1$ simplifies to $\\tan^3 x - 2 \\tan^2 x + 3 \\tan x - 2 \\ge 0$. Factoring gives $(\\tan x - 1)(\\tan^2 x - \\tan x + 2) \\ge 0$. Since $\\tan^2 x - \\tan x + 2 > 0$ for all real $x$, we have $\\tan x \\ge 1$. Thus $x \\in [n\\pi + \\frac{\\pi}{4}, n\\pi + \\frac{\\pi}{2}), n \\in Z$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The minimum value of $6(2\\sin x + 3\\cos x) - 8(2\\sin^3 x + 3\\cos^3 x) + 5$ is",
            "options": [
                "$2 - \\sqrt{13}$",
                "$-2\\sqrt{13}$",
                "$4 - 2\\sqrt{13}$",
                "$5 - 2\\sqrt{13}$"
            ],
            "correctAnswer": 3,
            "solution": "Let $t = 2\\sin x + 3\\cos x$. The given expression simplifies to $2t^2 - 8t + 5$. The minimum value of this quadratic occurs at $t=2$, giving a minimum value of $5 - 2\\sqrt{13}$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Number of solutions of the trigonometric equation $\\cos^2 \\left(\\frac{\\pi}{4} (\\cos x + \\sin x)\\right) - \\tan^2 \\left(x + \\frac{\\pi}{4} \\tan^2 x\\right) = 1$ in $(-2\\pi, 2\\pi)$ is $n$ then find $\\frac{136}{n}$.",
            "options": [
                "15",
                "16",
                "34",
                "36"
            ],
            "correctAnswer": 2,
            "solution": "The given equation is $\\cos^2(\\frac{\\pi}{4}(\\cos x + \\sin x)) = 1 + \\tan^2(x + \\frac{\\pi}{4}\\tan^2 x)$. Since RHS $\\ge 1$ and LHS $\\le 1$, both must be equal to $1$. This implies $\\cos x + \\sin x = 0$ and $\\tan^2 x = 0$. Solving yields $\\tan x = -1 \\implies x = n\\pi - \\frac{\\pi}{4}$. The number of solutions in $(-2\\pi, 2\\pi)$ is $4$. Thus $n=4$, and $\\frac{136}{4} = 34$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The solution of inequality $4^{\\tan x} - 3.2^{\\tan x} + 2 \\le 0$ is",
            "options": [
                "$x \\in [n\\pi, n\\pi + \\frac{\\pi}{4}]; n \\in I$",
                "$x \\in [n\\pi, n\\pi - \\frac{\\pi}{4}]; n \\in I$",
                "$x \\in [n\\pi, n\\pi + \\frac{\\pi}{6}]; n \\in I$",
                "$x \\in [n\\pi, n\\pi - \\frac{\\pi}{6}]; n \\in I$"
            ],
            "correctAnswer": 0,
            "solution": "Let $t = 2^{\\tan x}$. The inequality transforms to $t^2 - 3t + 2 \\le 0 \\implies 1 \\le t \\le 2$. This implies $0 \\le \\tan x \\le 1$. Therefore, the general solution is $x \\in [n\\pi, n\\pi + \\frac{\\pi}{4}], n \\in I$."
        },
        // ================================================================
        // SECTION 2 : Multiple Correct MCQ  (+4, –2, partial +1)
        // ================================================================
        // 7
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "<div class='section-instruction'><h3>SECTION - 2</h3><b>One or More Correct Type</b><br><br>This section contains <b>SIX (06)</b> questions. Each question has <b>FOUR</b> options (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four options is(are) correct.<br><br>For each question, choose the option(s) corresponding to (all) the correct answer(s).<br><br><b>Marking scheme :</b><ul><li><b>Full Marks :</b> +4 If only (all) the correct option(s) is (are) chosen.</li><li><b>Partial Marks :</b> +1 If two or more options are correct but ONLY one option is chosen and it is a correct option.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>If $\\frac{\\sin^4 x}{2} + \\frac{\\cos^4 x}{3} = \\frac{1}{5}$, then",
            "options": [
                "$\\tan^2 x = \\frac{2}{3}$",
                "$\\frac{\\sin^8 x}{8} + \\frac{\\cos^8 x}{27} = \\frac{1}{125}$",
                "$\\tan^2 x = \\frac{1}{3}$",
                "$\\frac{\\sin^8 x}{8} + \\frac{\\cos^8 x}{27} = \\frac{2}{125}$"
            ],
            "correctAnswers": [0, 1],
            "solution": "Let $\\sin^2 x = t$ and $\\cos^2 x = 1-t$. Substituting into the equation yields $\\frac{t^2}{2} + \\frac{(1-t)^2}{3} = \\frac{1}{5} \\implies 5t^2 - 4t + 1 = 0 \\implies t = \\frac{2}{5}$. Thus $\\sin^2 x = \\frac{2}{5}, \\cos^2 x = \\frac{3}{5}$, and $\\tan^2 x = \\frac{2}{3}$. Evaluating the second expression gives $\\frac{\\sin^8 x}{8} + \\frac{\\cos^8 x}{27} = \\frac{(2/5)^4}{8} + \\frac{(3/5)^4}{27} = \\frac{1}{125}$."
        },
        // 8
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "For $0 < \\theta < \\frac{\\pi}{2}$, the solution(s) of $\\sum_{m=1}^{6} \\csc\\left(\\theta + \\frac{(m-1)\\pi}{4}\\right) \\csc\\left(\\theta + \\frac{m\\pi}{4}\\right) = 4\\sqrt{2}$ is(are)",
            "options": [
                "$\\frac{\\pi}{4}$",
                "$\\frac{\\pi}{6}$",
                "$\\frac{\\pi}{12}$",
                "$\\frac{5\\pi}{12}$"
            ],
            "correctAnswers": [2, 3],
            "solution": "Using the telescoping identity $\\csc A \\csc B = \\frac{\\cot A - \\cot B}{\\sin(B-A)}$, the sum simplifies to $\\sqrt{2} \\sum_{m=1}^{6} \\left[\\cot\\left(\\theta + \\frac{(m-1)\\pi}{4}\\right) - \\cot\\left(\\theta + \\frac{m\\pi}{4}\\right)\\right] = \\sqrt{2} \\left(\\cot\\theta - \\cot(\\theta + \\frac{3\\pi}{2})\\right) = \\sqrt{2}(\\cot\\theta + \\tan\\theta)$. Setting $\\sqrt{2} \\cdot \\frac{2}{\\sin 2\\theta} = 4\\sqrt{2} \\implies \\sin 2\\theta = 1/2$. Since $0 < \\theta < \\pi/2$, we get $\\theta = \\pi/12, 5\\pi/12$."
        },
        // 9
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "If $\\sin x + \\sin y = a$ & $\\cos x + \\cos y = b$, then which of the following may be true.",
            "options": [
                "$\\sin(x+y) = \\frac{2ab}{a^2+b^2}$",
                "$\\tan \\frac{x-y}{2} = \\sqrt{\\frac{4-a^2-b^2}{a^2+b^2}}$",
                "$\\tan \\frac{x-y}{2} = -\\sqrt{\\frac{4-a^2-b^2}{a^2+b^2}}$",
                "$\\cos(x+y) = \\frac{2ab}{a^2+b^2}$"
            ],
            "correctAnswers": [0, 1, 2],
            "solution": "From sum-to-product formulas, $a^2+b^2 = 2 + 2\\cos(x-y) \\implies \\cos(x-y) = \\frac{a^2+b^2-2}{2}$. Then $\\tan\\frac{x-y}{2} = \\pm\\sqrt{\\frac{1-\\cos(x-y)}{1+\\cos(x-y)}} = \\pm\\sqrt{\\frac{4-a^2-b^2}{a^2+b^2}}$. Also, $\\frac{a}{b} = \\tan\\frac{x+y}{2} \\implies \\sin(x+y) = \\frac{2\\tan\\frac{x+y}{2}}{1+\\tan^2\\frac{x+y}{2}} = \\frac{2ab}{a^2+b^2}$."
        },
        // 10
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let $\\alpha$ and $\\beta$ be non-zero real numbers such that $2(\\cos \\beta - \\cos \\alpha) + \\cos \\alpha \\cos \\beta = 1$. Then, which of the following is/are true?",
            "options": [
                "$\\sqrt{3}\\tan \\left(\\frac{\\alpha}{2}\\right) - \\tan \\left(\\frac{\\beta}{2}\\right) = 0$",
                "$\\tan \\left(\\frac{\\alpha}{2}\\right) - \\sqrt{3}\\tan \\left(\\frac{\\beta}{2}\\right) = 0$",
                "$\\tan \\left(\\frac{\\alpha}{2}\\right) + \\sqrt{3}\\tan \\left(\\frac{\\beta}{2}\\right) = 0$",
                "$\\sqrt{3}\\tan \\left(\\frac{\\alpha}{2}\\right) + \\tan \\left(\\frac{\\beta}{2}\\right) = 0$"
            ],
            "correctAnswers": [1, 2],
            "solution": "Let $t_1 = \\tan(\\alpha/2)$ and $t_2 = \\tan(\\beta/2)$. Substituting the half-angle formulas into the equation yields $2\\left(\\frac{1-t_2^2}{1+t_2^2} - \\frac{1-t_1^2}{1+t_1^2}\\right) + \\frac{1-t_1^2}{1+t_1^2} \\cdot \\frac{1-t_2^2}{1+t_2^2} = 1$. Simplifying this algebra gives $t_1^2 = 3t_2^2 \\implies t_1 = \\pm\\sqrt{3} t_2$. Thus, $\\tan(\\alpha/2) - \\sqrt{3}\\tan(\\beta/2) = 0$ and $\\tan(\\alpha/2) + \\sqrt{3}\\tan(\\beta/2) = 0$ both hold true."
        },
        // 11
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let $a = \\sum_{r=1}^{11} \\tan^2 \\left(\\frac{r\\pi}{24}\\right)$ and $b = \\sum_{r=1}^{11} (-1)^{r-1} \\tan^2 \\left(\\frac{r\\pi}{24}\\right)$. Which is correct :",
            "options": [
                "$a$ and $b$ are rational numbers",
                "$a$ is rational but $b$ is irrational number",
                "$(2a - b)$ is a perfect square of an integer",
                "$3(a - b) = 110$"
            ],
            "correctAnswers": [0, 2],
            "solution": "Using the standard result $\\sum_{r=1}^{n-1} \\tan^2 \\left(\\frac{r\\pi}{2n}\\right) = \\frac{(n-1)(2n-1)}{3}$ with $n=12$, we get $a = \\frac{253}{3}$, which is rational. Separating odd and even terms for $b$ yields $b = \\frac{77}{3}$, also rational. Consequently, $2a - b = 2(253/3) - 77/3 = 143 = 11 \\times 13$, which is a perfect square of an integer."
        },
        // 12 (This is a Single Correct MCQ)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "If $\\sqrt{4 + \\sqrt{8 - \\sqrt{32 + \\sqrt{768}}}} = a\\sqrt{2}\\cos\\left(\\frac{11\\pi}{b}\\right)$, where $a$ and $b$ are natural numbers then $(b - a)$ is divisible by",
            "options": [
                "2",
                "23",
                "69",
                "46"
            ],
            "correctAnswer": 1,
            "solution": "Simplifying the nested radicals step-by-step: $\\sqrt{768} = 16\\sqrt{3}$, $\\sqrt{32+16\\sqrt{3}} = 2\\sqrt{6}+2\\sqrt{2}$. Then $\\sqrt{8 - (2\\sqrt{6}+2\\sqrt{2})}$ equals $\\sqrt{6}-\\sqrt{2}$. Finally, the full expression simplifies to $\\sqrt{2} \\cos\\left(\\frac{11\\pi}{24}\\right)$. Comparing this to $a\\sqrt{2}\\cos\\left(\\frac{11\\pi}{b}\\right)$ gives $a=1$ and $b=24$. Hence, $b-a = 23$, which is divisible by 23."
        },
        // ================================================================
        // SECTION 3 : Numerical Value  (+4, 0)
        // ================================================================

        // 13
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "<div class='section-instruction'><h3>SECTION - 3</h3><b>Numerical Value Type</b><br><br>This section contains <b>SIX (06)</b> question stems. The answer to each question is a <b>NUMERICAL VALUE</b>.<br><br>For each question, enter the correct numerical value of the answer using the mouse and the on-screen virtual numeric keypad in the place designated to enter the answer. If the numerical value has more than two decimal places, <b>truncate/round-off</b> the value to <b>TWO decimal places</b>.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If only (all) the correct option(s) is (are) chosen.</li><li><b>Negative Marks :</b> 0 In all other cases.</li></ul></div><br>The number of solutions $x \\in (0, \\pi)$ satisfying the equation $\\prod_{r=1}^{12} \\sin rx = 0$ is $p$. The value of $\\frac{1}{4}(50 - p)$ is:",
            "correctAnswer": 1,
            "solution": "The product is zero if $\\sin rx = 0$ for any $r \\in \\{1, 2, \\dots, 12\\}$. This implies $x = \\frac{m\\pi}{r}$. The number of distinct solutions in $(0, \\pi)$ is given by the cardinality of the union $\\bigcup_{r=1}^{12} \\{\\frac{\\pi}{r}, \\frac{2\\pi}{r}, \\dots, \\frac{(r-1)\\pi}{r}\\}$. By inclusion-exclusion, the total number of distinct solutions is $p = 46$. Therefore, $\\frac{1}{4}(50 - p) = \\frac{1}{4}(50 - 46) = 1$."
        },
        // 14
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "If equation $\\sin^4 x - (k + 2)\\sin^2 x - (k + 3) = 0$ possesses a solution then numerical value of sum of all possible integral values of $k$ is _____.",
            "correctAnswer": 5,
            "solution": "Let $t = \\sin^2 x$. Since $\\sin^2 x \\in [0, 1]$, we have $0 \\le t \\le 1$. The quadratic equation is $t^2 - (k+2)t - (k+3) = 0$. Factoring gives $(t + 1)(t - (k+3)) = 0$. Since $t \\ge 0$, the only valid root is $t = k+3$. For a solution to exist, $0 \\le k+3 \\le 1 \\implies -3 \\le k \\le -2$. The integral values of $k$ are $-3$ and $-2$. Their numerical sum is $|-3 + (-2)| = 5$."
        },
        // 15
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Let $0 < \\theta_1 < \\theta_2 < \\theta_3 < \\dots$ denote the positive solution of the equation $3 + 3\\cos \\theta = 2\\sin^2 \\theta$. If $\\theta_3 + \\theta_7 = a\\pi$, where $a$ is an integer, then $a$ is equal to _____.",
            "correctAnswer": 6,
            "solution": "The equation simplifies to $2\\cos^2\\theta + 3\\cos\\theta + 1 = 0$, which factors to $(2\\cos\\theta + 1)(\\cos\\theta + 1) = 0$. Thus, $\\cos\\theta = -1/2$ or $\\cos\\theta = -1$. The general solutions are $\\theta = 2n\\pi + \\frac{2\\pi}{3}, 2n\\pi + \\frac{4\\pi}{3}$ and $\\theta = (2n+1)\\pi$. Arranging these in ascending order: $\\theta_1 = \\frac{2\\pi}{3}$, $\\theta_2 = \\frac{4\\pi}{3}$, $\\theta_3 = \\pi$, $\\theta_4 = 2\\pi$, $\\theta_5 = \\frac{8\\pi}{3}$, $\\theta_6 = \\frac{10\\pi}{3}$, $\\theta_7 = 5\\pi$. Hence, $\\theta_3 + \\theta_7 = \\pi + 5\\pi = 6\\pi$, so $a = 6$."
        },
        // 16
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "If the product $(\\cos 1^{\\circ})(\\cos 3^{\\circ})(\\cos 5^{\\circ})(\\cos 7^{\\circ}) \\dots \\dots (\\cos 89^{\\circ}) = \\frac{1}{2^n}$, then the value of $2n$ is",
            "correctAnswer": 89,
            "solution": "Let $P = \\cos 1^{\\circ}\\cos 3^{\\circ}\\dots\\cos 89^{\\circ}$. Multiply numerator and denominator by $\\cos 2^{\\circ}\\cos 4^{\\circ}\\dots\\cos 88^{\\circ}$ to get $P = \\frac{\\cos 1^{\\circ}\\cos 2^{\\circ}\\dots\\cos 89^{\\circ}}{\\cos 2^{\\circ}\\cos 4^{\\circ}\\dots\\cos 88^{\\circ}}$. Grouping the numerator as $(\\cos 1^{\\circ}\\cos 2^{\\circ}\\dots\\cos 44^{\\circ})(\\cos 46^{\\circ}\\dots\\cos 89^{\\circ})\\cos 45^{\\circ}$, and using $\\cos(90^{\\circ}-x) = \\sin x$, the numerator becomes $(\\cos 1^{\\circ}\\sin 1^{\\circ})(\\cos 2^{\\circ}\\sin 2^{\\circ})\\dots(\\cos 44^{\\circ}\\sin 44^{\\circ})\\cos 45^{\\circ} = \\frac{1}{2^{44}}(\\sin 2^{\\circ}\\sin 4^{\\circ}\\dots\\sin 88^{\\circ})\\frac{1}{\\sqrt{2}}$. Substituting back, $P = \\frac{1}{2^{44}\\sqrt{2}} \\cdot \\frac{\\sin 2^{\\circ}\\sin 4^{\\circ}\\dots\\sin 88^{\\circ}}{\\cos 2^{\\circ}\\cos 4^{\\circ}\\dots\\cos 88^{\\circ}}$. Since $\\sin 2^{\\circ} = \\cos 88^{\\circ}$, $\\sin 4^{\\circ} = \\cos 86^{\\circ}$, etc., the fraction simplifies to $1$. Therefore, $P = \\frac{1}{2^{44}\\sqrt{2}} = \\frac{1}{2^{89/2}}$. Comparing with $\\frac{1}{2^n}$ gives $n = \\frac{89}{2}$. Hence, $2n = 89$."
        },
        // 17
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "If the arithmetic mean of the roots of the equation $4\\cos^3 x - 4\\cos^2 x - \\cos(\\pi + x) - 1 = 0$ in the interval $[0, 315]$ is equal to $k\\pi$, then find the value of $k$.",
            "correctAnswer": 50,
            "solution": "The equation simplifies to $4\\cos^3 x - 4\\cos^2 x + \\cos x - 1 = 0$. Factoring yields $(\\cos x - 1)(4\\cos^2 x + 1) = 0$. Since $4\\cos^2 x + 1 > 0$, we have $\\cos x = 1 \\implies x = 2n\\pi$. In the interval $[0, 315]$, the values of $n$ are $0, 1, \\dots, 50$, giving $51$ roots. The sum of these roots is $\\sum_{n=0}^{50} 2n\\pi = 2550\\pi$. The arithmetic mean is $\\frac{2550\\pi}{51} = 50\\pi$. Therefore, $k = 50$."
        },
        // 18
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The general solution of the equation $\\cos^2 \\theta + \\cos^2 2\\theta + \\cos^2 3\\theta = 1$ is $\\theta = \\frac{(2n+1)\\pi}{k}$, $n \\in I$, then the value of $k$ is:",
            "correctAnswer": 8,
            "solution": "Using the identity $\\cos^2 A = \\frac{1+\\cos 2A}{2}$, the equation becomes $3 + (\\cos 2\\theta + \\cos 4\\theta + \\cos 6\\theta) = 2 \\implies \\cos 2\\theta + \\cos 4\\theta + \\cos 6\\theta = -1$. Applying sum-to-product: $2\\cos 4\\theta \\cos 2\\theta + \\cos 4\\theta = -1 \\implies \\cos 4\\theta (2\\cos 2\\theta + 1) = -1$. Solving the resulting trigonometric equations gives $\\theta = \\frac{(2m+1)\\pi}{8}$ and $\\theta = \\frac{(2m+1)\\pi}{4}$. Considering the required general form, the value of $k$ is $8$."
        }        
    ]
};