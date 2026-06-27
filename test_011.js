window.testBank = window.testBank || {};
window.testBank['test_011'] = {
    title: "Demo Speed Test",
    category: "Speed Tests - Maths",
    timeLimitMins: 30,
    questions: [
        {
            "type": "mcq",
            "text": "If $f(x) = \\int_{0}^{x} \\frac{\\sin t}{t} dt$, then $f'(x)$ is equal to:",
            "options": [
                "$\\frac{\\sin x}{x}$",
                "$\\frac{\\cos x}{x}$",
                "$\\sin x$",
                "$\\cos x$"
            ],
            "correctAnswer": 0,
            "solution": "By the Fundamental Theorem of Calculus, $f'(x) = \\frac{\\sin x}{x}$."
        },
        {
            "type": "mcq",
            "text": "The value of $\\int_{0}^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} dx$ is:",
            "options": [
                "0",
                "$\\frac{\\pi}{2}$",
                "$\\frac{\\pi}{4}$",
                "1"
            ],
            "correctAnswer": 2,
            "solution": "Using the property $\\int_{0}^{a} f(x) dx = \\int_{0}^{a} f(a-x) dx$, $2I = \\int_{0}^{\\pi/2} 1 dx = \\frac{\\pi}{2}$, so $I = \\frac{\\pi}{4}$."
        },
        {
            "type": "mcq",
            "text": "The slope of the tangent to the curve $y = x^3 - x$ at $x = 2$ is:",
            "options": [
                "10",
                "11",
                "12",
                "13"
            ],
            "correctAnswer": 1,
            "solution": "$\\frac{dy}{dx} = 3x^2 - 1$. At $x = 2$, $3(4) - 1 = 11$."
        },
        {
            "type": "mcq",
            "text": "If $\\omega$ is a complex cube root of unity, then $1 + \\omega + \\omega^2$ equals:",
            "options": [
                "1",
                "0",
                "$\\omega$",
                "$\\omega^2$"
            ],
            "correctAnswer": 1,
            "solution": "The sum of the roots of $z^3 - 1 = 0$ is $1 + \\omega + \\omega^2 = 0$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to arrange the letters of the word 'APPLE' is:",
            "options": [
                "60",
                "120",
                "240",
                "30"
            ],
            "correctAnswer": 0,
            "solution": "Total letters = 5, 'P' repeats 2 times. Ways = $5! / 2! = 120 / 2 = 60$."
        },
        {
            "type": "mcq",
            "text": "If $A$ and $B$ are square matrices of the same order, then $(AB)^{-1}$ is:",
            "options": [
                "$A^{-1}B^{-1}$",
                "$B^{-1}A^{-1}$",
                "$AB^{-1}$",
                "$A^{-1}B$"
            ],
            "correctAnswer": 1,
            "solution": "By matrix inversion property, $(AB)^{-1} = B^{-1}A^{-1}$."
        },
        {
            "type": "mcq",
            "text": "The domain of $\\sin^{-1} x$ is:",
            "options": [
                "$(-\\infty, \\infty)$",
                "$[0, 1]$",
                "$[-1, 1]$",
                "$[0, \\pi]$"
            ],
            "correctAnswer": 2,
            "solution": "The inverse sine function is defined for inputs in $[-1, 1]$."
        },
        {
            "type": "mcq",
            "text": "If $y = e^x$, then $d^2y/dx^2$ is:",
            "options": [
                "$e^x$",
                "$x e^x$",
                "$e^{x-1}$",
                "$1$"
            ],
            "correctAnswer": 0,
            "solution": "The derivative of $e^x$ is $e^x$, so the second derivative is also $e^x$."
        },
        {
            "type": "mcq",
            "text": "The value of $\\log_2 8$ is:",
            "options": [
                "2",
                "3",
                "4",
                "8"
            ],
            "correctAnswer": 1,
            "solution": "Since $2^3 = 8$, $\\log_2 8 = 3$."
        },
        {
            "type": "mcq",
            "text": "The derivative of $\\tan x$ is:",
            "options": [
                "$\\cot x$",
                "$-\\cot x$",
                "$\\sec^2 x$",
                "$-\\sec^2 x$"
            ],
            "correctAnswer": 2,
            "solution": "The standard derivative of $\\tan x$ is $\\sec^2 x$."
        }
    ]
};