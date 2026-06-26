window.testBank = window.testBank || {};
window.testBank['test_04'] = {
    title: "UP MPT-05 22-06-2026",
    category: "Full Tests",
    timeLimitMins: 80,
    questions: [
    {
        "type": "mcq",
        "text": "Tangent at any point on hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ cuts the axes at A and B. Locus of point P for rectangle OAPB is:",
        "options": [
            "$\\frac{a^2}{x^2} - \\frac{b^2}{y^2} = 1$",
            "$\\frac{a^2}{x^2} + \\frac{b^2}{y^2} = 1$",
            "$\\frac{a^2}{y^2} - \\frac{b^2}{x^2} = 1$",
            "None of these"
        ],
        "correctAnswer": 0,
        "solution": "Let P be $(h,k)$. Tangent is $\\frac{x\\sec\\theta}{a} - \\frac{y\\tan\\theta}{b} = 1$. Intercepts are $h = a/\\sec\\theta$ and $k = -b/\\tan\\theta$. Eliminating $\\theta$ gives locus $\\frac{a^2}{x^2} - \\frac{b^2}{y^2} = 1$."
    }
]
};