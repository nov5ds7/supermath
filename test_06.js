window.testBank = window.testBank || {};
window.testBank['test_06'] = {
    title: "Theory and Formulae Test - Trigonometry",
    category: "Theory and Formulae Tests",
    randomizePoolSize: 30,
    timeLimitMins: 10,
    questions: [
    {
        "type": "mcq",
        "text": "What is the value of $\\sin(18^\\circ)$?",
        "options": [
            "$\\frac{\\sqrt{5}-1}{4}$",
            "$\\frac{\\sqrt{5}+1}{4}$",
            "$\\frac{\\sqrt{10+2\\sqrt{5}}}{4}$",
            "$\\frac{\\sqrt{10-2\\sqrt{5}}}{4}$"
        ],
        "correctAnswer": 0,
        "solution": "The value is derived from the quadratic $4\\sin^2(18^\\circ) + 2\\sin(18^\\circ) - 1 = 0$, giving $\\frac{\\sqrt{5}-1}{4}$."
    },
    {
        "type": "mcq",
        "text": "The general solution of $\\sin\\theta = \\sin\\alpha$ is:",
        "options": [
            "$\\theta = 2n\\pi \\pm \\alpha$",
            "$\\theta = n\\pi + (-1)^n \\alpha$",
            "$\\theta = n\\pi + \\alpha$",
            "$\\theta = 2n\\pi + \\alpha$"
        ],
        "correctAnswer": 1,
        "solution": "The general solution for $\\sin\\theta = \\sin\\alpha$ is $\\theta = n\\pi + (-1)^n \\alpha$, where $n \\in \\mathbb{Z}$."
    },
    {
        "type": "mcq",
        "text": "What is the period of the function $f(x) = \\tan(x)$?",
        "options": [
            "$\\pi/2$",
            "$\\pi$",
            "$2\\pi$",
            "$4\\pi$"
        ],
        "correctAnswer": 1,
        "solution": "The tangent function repeats its values every $\\pi$ interval."
    }
]
};