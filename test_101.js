// Fuel File: test_04
window.testBank = window.testBank || {};

window.testBank['test_04'] = {
    title: "Theory and Formulae Test - Trigonometry",
    category: "Theory and Formulae Tests",
    randomizePoolSize: 30,
    timeLimitMins: 10,
    questions: [
        {
            "type": "mcq",
            "text": "What is the value of $\\sin(18^\\circ)$?",
            "options": ["$\\frac{\\sqrt{5}-1}{4}$", "$\\frac{\\sqrt{5}+1}{4}$", "$\\frac{\\sqrt{10+2\\sqrt{5}}}{4}$", "$\\frac{\\sqrt{10-2\\sqrt{5}}}{4}$"],
            "correctAnswer": 0,
            "solution": "The value of $\\sin(18^\\circ)$ is derived from the quadratic equation $4\\sin^2(18^\\circ) + 2\\sin(18^\\circ) - 1 = 0$, resulting in $\\frac{\\sqrt{5}-1}{4}$."
        },
        {
            "type": "mcq",
            "text": "Which of the following is the correct identity for $\\cos(2\\theta)$ in terms of $\\tan\\theta$?",
            "options": ["$\\frac{1-\\tan^2\\theta}{1+\\tan^2\\theta}$", "$\\frac{1+\\tan^2\\theta}{1-\\tan^2\\theta}$", "$\\frac{2\\tan\\theta}{1-\\tan^2\\theta}$", "$\\frac{2\\tan\\theta}{1+\\tan^2\\theta}$"],
            "correctAnswer": 0,
            "solution": "$$\\cos(2\\theta) = \\frac{1-\\tan^2\\theta}{1+\\tan^2\\theta}$$"
        },
        {
            "type": "mcq",
            "text": "The general solution of $\\sin\\theta = \\sin\\alpha$ is:",
            "options": ["$\\theta = 2n\\pi \\pm \\alpha$", "$\\theta = n\\pi + (-1)^n \\alpha$", "$\\theta = n\\pi + \\alpha$", "$\\theta = 2n\\pi + \\alpha$"],
            "correctAnswer": 1,
            "solution": "The general solution for $\\sin\\theta = \\sin\\alpha$ is $\\theta = n\\pi + (-1)^n \\alpha$, where $n \\in \\mathbb{Z}$."
        },
        {
            "type": "mcq",
            "text": "What is the period of the function $f(x) = \\tan(x)$?",
            "options": ["$\\pi/2$", "$\\pi$", "$2\\pi$", "$4\\pi$"],
            "correctAnswer": 1,
            "solution": "The tangent function repeats its values every $\\pi$ interval."
        },
        {
            "type": "mcq",
            "text": "What is the value of $\\cos(3\\theta)$?",
            "options": ["$3\\cos\\theta - 4\\cos^3\\theta$", "$4\\cos^3\\theta - 3\\cos\\theta$", "$3\\sin\\theta - 4\\sin^3\\theta$", "$4\\sin^3\\theta - 3\\sin\\theta$"],
            "correctAnswer": 1,
            "solution": "$$\\cos(3\\theta) = 4\\cos^3\\theta - 3\\cos\\theta$$"
        },
        {
            "type": "mcq",
            "text": "The condition for the equation $a\\cos\\theta + b\\sin\\theta = c$ to have a solution is:",
            "options": ["$c^2 \\le a^2 + b^2$", "$c^2 \\ge a^2 + b^2$", "$c^2 = a^2 + b^2$", "$c = a+b$"],
            "correctAnswer": 0,
            "solution": "Since the range of $a\\cos\\theta + b\\sin\\theta$ is $[-\\sqrt{a^2+b^2}, \\sqrt{a^2+b^2}]$, the equation has a solution if $|c| \\le \\sqrt{a^2+b^2}$, or $c^2 \\le a^2+b^2$."
        },
        {
            "type": "mcq",
            "text": "What is the value of $\\sin(A+B) \\cdot \\sin(A-B)$?",
            "options": ["$\\sin^2 A + \\sin^2 B$", "$\\sin^2 A - \\sin^2 B$", "$\\cos^2 A - \\cos^2 B$", "$\\cos^2 A - \\sin^2 B$"],
            "correctAnswer": 1,
            "solution": "$$\\sin(A+B)\\sin(A-B) = (\\sin A \\cos B + \\cos A \\sin B)(\\sin A \\cos B - \\cos A \\sin B) = \\sin^2 A \\cos^2 B - \\cos^2 A \\sin^2 B = \\sin^2 A - \\sin^2 B$$"
        },
        {
            "type": "mcq",
            "text": "What is the value of $\\tan(A+B)$?",
            "options": ["$\\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$", "$\\frac{\\tan A - \\tan B}{1 + \\tan A \\tan B}$", "$\\frac{1 - \\tan A \\tan B}{\\tan A + \\tan B}$", "$\\frac{\\tan A + \\tan B}{\\tan A \\tan B}$"],
            "correctAnswer": 0,
            "solution": "$$\\tan(A+B) = \\frac{\\tan A + \\tan B}{1 - \\tan A \\tan B}$$"
        },
        {
            "type": "mcq",
            "text": "The general solution of $\\tan\\theta = \\tan\\alpha$ is:",
            "options": ["$\\theta = n\\pi + \\alpha$", "$\\theta = 2n\\pi + \\alpha$", "$\\theta = n\\pi - \\alpha$", "$\\theta = 2n\\pi \\pm \\alpha$"],
            "correctAnswer": 0,
            "solution": "The general solution for $\\tan\\theta = \\tan\\alpha$ is $\\theta = n\\pi + \\alpha$."
        },
        {
            "type": "mcq",
            "text": "If $\\cos\\theta = 0$, then the general solution is:",
            "options": ["$\\theta = n\\pi$", "$\\theta = 2n\\pi + \\pi/2$", "$\\theta = (2n+1)\\pi/2$", "$\\theta = n\\pi + \\pi/2$"],
            "correctAnswer": 2,
            "solution": "$\\cos\\theta = 0$ when $\\theta$ is an odd multiple of $\\pi/2$, i.e., $\\theta = (2n+1)\\frac{\\pi}{2}$."
        },
        // [105 items would continue here...]
    ]
};