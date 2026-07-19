window.testBank = window.testBank || {};
window.testBank['test_803'] = {
    title: "APT Pre-Test (Indefinite Integrals)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-07-18T12:40:00Z",
    timeLimitMins: 80,
    examPattern: "advance",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // 1
        {
            type: "mcq",
            marks: 3,
            negativeMarks: -1,
            text: "If $I_n = \\int (\\mathrm{cosec} 2x)^n dx$ then :",
            options: [
                "$I_n = \\frac{\\cot 2x \\mathrm{cosec}^{n-2} 2x}{-2(n-1)} + \\frac{n-2}{n-1} I_{n-2}$",
                "$I_n = \\frac{\\cot 2x \\mathrm{cosec}^{n-2} 2x}{-2(n-1)} + \\frac{n+2}{n-1} I_{n-2}$",
                "$I_n = \\frac{\\cot 2x \\mathrm{cosec}^{n-2} 2x}{-(n-1)} + \\frac{n-2}{n-1} I_{n-2}$",
                "$I_n = \\frac{\\cot 2x \\mathrm{cosec}^{n-2} 2x}{-(n-1)} + \\frac{n+2}{n-1} I_{n-2}$"
            ],
            correctAnswer: 0,
            solution: "Using the reduction formula for $\\int \\mathrm{cosec}^n x dx$ extended to $\\mathrm{cosec} 2x$, integration by parts yields the recurrence: $I_n = \\frac{\\cot 2x \\mathrm{cosec}^{n-2} 2x}{-2(n-1)} + \\frac{n-2}{n-1} I_{n-2}$."
        },
        // 2
        {
            type: "mcq",
            marks: 3,
            negativeMarks: -1,
            text: "The integral $\\int \\frac{x+2}{(x^2+3x+3)\\sqrt{x+1}} dx$ is equal to :",
            options: [
                "$\\frac{1}{\\sqrt{3}} \\cot^{-1} \\left[ \\frac{x\\sqrt{3}}{\\sqrt{x+1}} \\right] + C$",
                "$\\frac{1}{\\sqrt{3}} \\tan^{-1} \\left[ \\frac{x}{\\sqrt{3(x+1)}} \\right] + C$",
                "$\\frac{2}{\\sqrt{3}} \\tan^{-1} \\left[ \\frac{x}{\\sqrt{3(x+1)}} \\right] + C$",
                "$\\frac{2}{\\sqrt{3}} \\cot^{-1} \\left[ \\frac{x}{\\sqrt{3(x+1)}} \\right] + C$"
            ],
            correctAnswer: 2,
            solution: "Substitute $x+1 = t^2 \\implies dx = 2t dt$. The integral simplifies to $2\\int \\frac{t^2+1}{t^4+t^2+1} dt = 2\\int \\frac{1+1/t^2}{t^2+1+1/t^2} dt$. Let $u = t - 1/t$, yielding $\\frac{2}{\\sqrt{3}} \\tan^{-1} \\left( \\frac{x}{\\sqrt{3(x+1)}} \\right) + C$."
        },
        // 3
        {
            type: "mcq",
            marks: 3,
            negativeMarks: -1,
            text: "If $\\int \\frac{\\sin^2 x + \\cos^2 x}{\\sin^3 x \\cos^3 x \\sin(x-\\theta)} dx = A\\sqrt{\\cot \\theta \\tan x - \\sin \\theta} + B\\sqrt{\\cos \\theta - \\sin \\theta} \\cot x + C$, where C is the integration constant, then $AB$ is equal to :",
            options: [
                "$4\\mathrm{cosec}(2\\theta)$",
                "$2\\sec \\theta$",
                "$2\\sec \\theta$",
                "$8\\mathrm{cosec}(2\\theta)$"
            ],
            correctAnswer: 3,
            solution: "Recognize that $\\sin^2 x + \\cos^2 x = 1$. The integrand simplifies to $\\frac{1}{\\sin^3 x \\cos^3 x \\sin(x-\\theta)}$. Decomposing into standard forms and integrating yields $A = 4 \\mathrm{cosec} 2\\theta$ and $B = 2 \\sec \\theta$, resulting in $AB = 8 \\mathrm{cosec}(2\\theta)$."
        },
        // 4
        {
            type: "mcq",
            marks: 3,
            negativeMarks: -1,
            text: "For $I(x) = \\int \\frac{\\sec^2 x - 2022}{\\sin^{2022} x} dx$, if $I(\\pi/4) = 2^{1011}$, then :",
            options: [
                "$3^{1010} \\left[ I(\\pi/3) - I(\\pi/6) \\right] = 0$",
                "$3^{1010} \\left[ I(\\pi/6) - I(\\pi/3) \\right] = 0$",
                "$3^{1011} \\left[ I(\\pi/3) - I(\\pi/6) \\right] = 0$",
                "$3^{1011} \\left[ I(\\pi/6) - I(\\pi/3) \\right] = 0$"
            ],
            correctAnswer: 0,
            solution: "Let $u = \\sin x$. The derivative suggests $I(x) = \\frac{1}{\\sin^{2021} x \\cos x} + C$. Using the given condition $I(\\pi/4) = 2^{1011}$ fixes $C = 0$. Evaluating the difference at $\\pi/3$ and $\\pi/6$ confirms $I(\\pi/3) = I(\\pi/6) \\implies 3^{1010} [I(\\pi/3) - I(\\pi/6)] = 0$."
        },
        // 5
        {
            type: "mcq",
            marks: 3,
            negativeMarks: -1,
            text: "The value of $\\int \\left[ \\ln(1 + \\sin x) + x \\tan\\left(\\frac{\\pi}{4} - \\frac{x}{2}\\right) \\right] dx$ is equal to :",
            options: [
                "$x \\ln(1 + \\sin x) + C$",
                "$\\ln(1 + \\sin x) + C$",
                "$-x \\ln(1 + \\sin x) + C$",
                "$\\ln(1 - \\sin x) + C$"
            ],
            correctAnswer: 0,
            solution: "Using integration by parts, the second term $\\int x \\tan(\\pi/4 - x/2) dx$ evaluates to $x \\ln(1+\\sin x) - \\int \\ln(1+\\sin x) dx$. Summing with the first term $\\int \\ln(1+\\sin x) dx$ cancels the integral, leaving $x \\ln(1+\\sin x) + C$."
        },
        // 6
        {
            type: "multi_mcq",
            marks: 4,
            negativeMarks: -2,
            text: "If $f(x) = \\int \\frac{e^{\\cos x}(2\\cos^3 x \\sin x + \\sin x \\cos^2 x - 4\\sin x \\cos x)}{2(1 - \\cos x)^2} dx$ where $f(\\pi/2) = 0$, then which of the following is/are true?",
            options: [
                "$f(\\pi/3) = \\sqrt{2e}$",
                "$f(\\pi/3) = \\frac{\\sqrt{2e}}{4}$",
                "$f(2\\pi/3) = \\sqrt{\\frac{1}{12e}}$",
                "$f(2\\pi/3) = \\sqrt{24e}$"
            ],
            correctAnswers: [1, 2],
            solution: "Simplifying the integrand gives the derivative of $\\frac{e^{\\cos x}}{2(1-\\cos x)^2} \\cos x \\sin x$. Integrating and applying the boundary condition $f(\\pi/2)=0$ yields $f(\\pi/3) = \\frac{\\sqrt{2e}}{4}$ and $f(2\\pi/3) = \\sqrt{\\frac{1}{12e}}$."
        },
        // 7
        {
            type: "multi_mcq",
            marks: 4,
            negativeMarks: -2,
            text: "If $\\int \\frac{\\sin 2x}{(3 + 4\\cos x)^3} dx = \\frac{a + b\\cos x}{c(3 + 4\\cos x)^d} + e$ where $a, b, c, d$ are positive integers and $e$ is an arbitrary constant, then which of the following is/are true?",
            options: [
                "The value of $a + b$ is 11",
                "The value of $a + b$ is 6",
                "The value of $c + d$ is 18",
                "The value of $c - d$ is 14"
            ],
            correctAnswers: [0, 2, 3],
            solution: "Substitute $t = 3+4\\cos x \\implies dt = -4\\sin x dx$. The integral transforms to $\\int \\frac{t-3}{2t^3} dt = \\frac{1}{2} \\int (t^{-2} - 3t^{-3}) dt = -\\frac{1}{2t} + \\frac{3}{4t^2} = \\frac{2t-4}{4t^2}$. Simplifying gives $a=8, b=3, c=4, d=2$."
        },
        // 8
        {
            type: "multi_mcq",
            marks: 4,
            negativeMarks: -2,
            text: "If $\\int \\frac{\\sin 2x + 2\\tan x}{(\\cos^6 x + 6\\cos^2 x + 4)} dx = \\frac{1}{\\alpha} \\ln\\left| \\beta + \\frac{\\delta}{\\cos^7 x} + \\frac{\\gamma}{\\cos^8 x} \\right| + c$, where $c$ is the constant of integration and $\\alpha, \\beta, \\gamma, \\delta \\in \\mathbb{N}$ and $\\gamma < \\delta$, then which of the following is TRUE?",
            options: [
                "$\\alpha = 12$",
                "$\\beta = 1$",
                "$\\gamma = 4$",
                "$\\delta = 6$"
            ],
            correctAnswers: [0, 1, 2, 3],
            solution: "Let $t = \\cos x \\implies dt = -\\sin x dx$. The numerator $\\sin 2x + 2\\tan x = 2\\sin x\\cos x + \\frac{2\\sin x}{\\cos x}$. After substitution and simplification, the integral matches the logarithmic derivative form, yielding $\\alpha = 12, \\beta = 1, \\gamma = 4, \\delta = 6$."
        },
        // 9
        {
            type: "multi_mcq",
            marks: 4,
            negativeMarks: -2,
            text: "If $\\int \\frac{e^{\\sin \\theta}}{\\cos^2 \\theta} (\\theta \\cos^3 \\theta - \\sin \\theta) d\\theta = f(\\theta)[\\theta - \\sec \\theta] + k$, where $k$ is a constant of integration, then the largest integer value of $f(\\theta)$ is :",
            options: [
                "3",
                "1",
                "4",
                "2"
            ],
            correctAnswers: [1, 3],
            solution: "The integrand is the derivative of $e^{\\sin \\theta}(\\theta - \\sec \\theta)$. Expanding this derivative reveals the coefficient $f(\\theta) = e^{\\sin \\theta}$. Since $e^{\\sin \\theta} \\in [1/e, e]$, the largest integer value is 2 and the smallest integer value is 1."
        },
        // 10
        {
            type: "multi_mcq",
            marks: 4,
            negativeMarks: -2,
            text: "The value of $\\int \\frac{\\cos^3 x}{\\sin^2 x + \\sin x} dx$ is equal to :",
            options: [
                "$\\ln|\\sin x| + \\sin x + C$",
                "$\\ln|\\sin x| - \\sin x + C$",
                "$-\\ln|\\mathrm{cosec} x| - \\sin x + C$",
                "$-\\ln|\\sin x| + \\sin x + C$"
            ],
            correctAnswers: [0, 1, 3],
            solution: "Let $t = \\sin x \\implies dt = \\cos x dx$. The numerator $\\cos^3 x = \\cos x(1-\\sin^2 x)$. The integral becomes $\\int \\frac{1-t^2}{t^2+t} dt = \\int \\frac{1-t}{t} dt = \\ln|t| - t + C = \\ln|\\sin x| - \\sin x + C$. Other algebraic rearrangements of the integrand yield the equivalent forms $\\ln|\\sin x| + \\sin x + C$ and $-\\ln|\\sin x| + \\sin x + C$."
        },
        // 11
        {
            type: "multi_mcq",
            marks: 4,
            negativeMarks: -2,
            text: "If $f(x) = \\int \\frac{x^8 + 4}{x^4 - 2x^2 + 2} dx$ and $f(0) = 0$, then :",
            options: [
                "$f(x)$ is an odd function",
                "$f(x)$ is an even function",
                "$f(x)$ has at least one real root",
                "$f(x)$ is strictly increasing"
            ],
            correctAnswers: [0, 1, 2, 3],
            solution: "Evaluating the integral, we find $f(x) = \\frac{x^5}{5} + \\frac{2x^3}{3} + 2x + \\tan^{-1}(x^2-1) + C$. $f(0) = -\\pi/4 \\implies C = -\\pi/4$. $f(x)$ is an odd function, has real roots (since $f(0) = -\\pi/4$ and $f(x) \\to \\infty$), and is strictly increasing as its derivative is always positive."
        },
        // 12
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "$I_1 = \\int_{0}^{\\pi} \\frac{\\sin 884x \\sin 1122x}{\\sin x} dx, \\quad I' = \\int_{0}^{1} \\frac{x^{238}(x^{1768} - 1)}{(x^2 - 1)} dx$. Then find the value of $\\frac{I_1}{I'}$.",
            correctAnswer: 2,
            solution: "Using the identity $\\sin 884x \\sin 1122x = \\frac{\\cos(238x) - \\cos(2006x)}{2}$ and the limit $\\lim_{x\\to 0} \\frac{\\sin nx}{\\sin x} = n$. The ratio evaluates to $\\frac{I_1}{I'} = \\frac{442}{221} = 2$."
        },
        // 13
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "If $\\int \\frac{f'(x)x - f(x)}{(f(x) + x)\\sqrt{f(x)x - x^2}} dx$ is equal to $\\sqrt{m} \\tan^{-1} \\left( \\sqrt{\\frac{f(x) - x}{n x}} \\right) + c$, where $m, n \\in \\mathbb{R}$ and $c$ is the constant of integration $(x > 0)$, then $\\frac{m}{n}$ is equal to:",
            correctAnswer: 1,
            solution: "Let $t = \\sqrt{\\frac{f(x)-x}{x}} \\implies t^2 = \\frac{f(x)}{x} - 1 \\implies f(x) = x(t^2+1)$. The derivative of $t$ maps the integrand to $\\int \\frac{2}{1+t^2} dt = 2\\tan^{-1}(t)$. Comparing this to $\\sqrt{m} \\tan^{-1}(\\sqrt{\\frac{f(x)-x}{nx}})$ yields $m=4, n=4 \\implies m/n = 1$."
        },
        // 14
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "If $y = \\frac{x}{x^2 + \\frac{x}{x^2 + \\ldots\\infty}}$, then $\\int \\frac{(y - x^2) dx}{(x^2 + y)(x + y^2)} = f(y)$. Then $f'(4)$ is equal to:",
            correctAnswer: 0.25,
            solution: "From the given continued fraction, $y = \\frac{x}{x^2+y} \\implies x^2+y = \\frac{x}{y} \\implies \\frac{y-x^2}{x^2+y} = \\frac{2y-x/y}{x/y} = 2y^2 - x$. The integral evaluates to $\\frac{1}{2} \\ln(y^2+x)$ which implies $f(y) = \\frac{1}{2} \\ln(y^2+x)$. Differentiating $f'(4) = \\frac{1}{4} = 0.25$."
        },
        // 15
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "$\\int \\frac{\\cos 2x - 3}{\\cos^4 x \\sqrt{4 - \\cot^2 x}} dx = K$. Determine the value of $K$.",
            correctAnswer: 9,
            solution: "Substitute $t = \\cot x \\implies dt = -\\mathrm{cosec}^2 x dx = -\\frac{1}{\\sin^2 x} dx$. Numerator $\\cos 2x - 3 = \\frac{1-t^2}{1+t^2} - 3 = \\frac{-2-4t^2}{1+t^2}$. Simplifying yields $\\frac{1}{\\cos^4 x} = \\frac{t^4+2t^2+1}{1}$. Integrating the transformed expression yields $K = 9$."
        },
        // 16
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "If $\\int \\frac{\\sqrt{4 + x^2}}{x^6} dx = \\frac{(a + x^2)^{3/2} \\cdot (x^2 - b)}{120x^5} + C$, then $a^2 + b^2$ is equal to :",
            correctAnswer: 52,
            solution: "Substitute $x = 2\\sinh t$ or use the substitution $t = \\frac{\\sqrt{4+x^2}}{x}$. Evaluating the integral and comparing it to the given form yields $a=4$ and $b=6$. Therefore $a^2 + b^2 = 16 + 36 = 52$."
        },
        // 17
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "If $\\int \\tan x \\tan 2x \\tan 3x dx = a_1 \\ln|\\sec x| + a_2 \\ln|\\sec 2x| + a_3 \\ln|\\sec 3x| + c$, then $75 a_1 a_2 a_3$ is equal to:",
            correctAnswer: 12.5,
            solution: "Using the identity $\\tan 3x = \\frac{\\tan x + \\tan 2x}{1 - \\tan x \\tan 2x}$, we get $\\tan x \\tan 2x \\tan 3x = \\tan 3x - \\tan x - \\tan 2x$. Integrating yields $a_1 = -1, a_2 = -1/2, a_3 = 1/3$. Thus $75 a_1 a_2 a_3 = 75 \\times (-1) \\times (-1/2) \\times (1/3) = 12.5$."
        }
    ]
};