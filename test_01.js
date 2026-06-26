window.testBank = window.testBank || {};
window.testBank['test_01'] = {
    title: "Mock Test 1 (JN20)",
    category: "Full Tests",
    timeLimitMins: 30,
    questions: [
    {
        "type": "mcq",
        "text": "If $\\alpha$ and $\\beta$ are the roots of the equation $x^2 + px + 2 = 0$ and $\\frac{1}{\\alpha}$ and $\\frac{1}{\\beta}$ are the roots of the equation $2x^2 + 2qx + 1 = 0$, then $(\\alpha - \\frac{1}{\\alpha})(\\beta - \\frac{1}{\\beta})(\\alpha + \\frac{1}{\\beta})(\\beta + \\frac{1}{\\alpha})$ is equal to:",
        "options": [
            "$\\frac{9}{4}(9 + p^2)$",
            "$\\frac{9}{4}(9 - p^2)$",
            "$\\frac{9}{4}(9 + q^2)$",
            "$\\frac{9}{4}(9 - q^2)$"
        ],
        "correctAnswer": 1,
        "solution": "Given $\\alpha + \\beta = -p, \\alpha\\beta = 2$. Roots of 2nd eq are $1/\\alpha, 1/\\beta$, so $1/\\alpha + 1/\\beta = -q \\rightarrow -p/2 = -q \\rightarrow p=2q$. The expression simplifies to $(\\alpha\\beta - \\alpha/\\beta - \\beta/\\alpha + 1/(\\alpha\\beta))(\\alpha\\beta + \\alpha/\\alpha + \\beta/\\beta + 1/(\\alpha\\beta)) = (2 - \\frac{p^2-4}{2} + 1/2)(2 + 1 + 1 + 1/2) = \\frac{9}{4}(9-p^2)$."
    }
]
};