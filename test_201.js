window.testBank = window.testBank || {};
window.testBank['test_201'] = {
    title: "JEE Advanced Mock Test 01",
    category: "Full Tests - Advance",
    timeLimitMins: 60,
    examPattern: "advance",      
    randomizePoolSize: 6,        
    questions: [
        {
            "type": "mcq",
            "text": "The value of the integral $\\int_{0}^{\\pi/2} \\frac{\\sin x}{\\sin x + \\cos x} \\, dx$ is:",
            "options": ["$\\frac{\\pi}{4}$", "$\\frac{\\pi}{2}$", "0", "$\\pi$"],
            "correctAnswer": 0,
            "solution": "$\\int_{0}^{a} f(x) dx = \\int_{0}^{a} f(a-x) dx \\Rightarrow 2I = \\frac{\\pi}{2} \\Rightarrow I = \\frac{\\pi}{4}$."
        },
        {
            "type": "multi_mcq",
            "text": "Which of the following statements regarding the roots of $x^3 - 6x^2 + 11x - 6 = 0$ are correct?",
            "options": ["The roots are in A.P.", "The sum of the roots is 6", "The product of the roots is 6", "All roots are distinct"],
            "correctAnswers": [0, 1, 2, 3],
            "solution": "The polynomial factors to $(x-1)(x-2)(x-3)=0$. Roots are $1,2,3$. Sum = 6, Product = 6, they are in A.P., and are all distinct."
        },
        {
            "type": "matrix_match",
            "text": "Match the functions in List-I with their corresponding integrals in List-II:",
            "list1": ["(P) $\\int \\sec^2 x \\, dx$", "(Q) $\\int \\frac{1}{1+x^2} \\, dx$", "(R) $\\int \\sec x \\tan x \\, dx$"],
            "list2": ["(1) $\\tan x + C$", "(2) $\\tan^{-1} x + C$", "(3) $\\sec x + C$"],
            "correctMatches": {"0": 0, "1": 1, "2": 2},
            "solution": "(P) $\\to$ 1, (Q) $\\to$ 2, (R) $\\to$ 3."
        },
        // Passage Question 1
        {
            "passage_id": "passage_01",
            "passage_text": "Consider the quadratic equation $x^2 - (m-3)x + m = 0$ where $m \\in \\mathbb{R}$.",
            "type": "mcq",
            "text": "For what values of $m$ will the equation have real roots?",
            "options": ["$m \\le 1$", "$m \\ge 9$", "$m \\le 1$ or $m \\ge 9$", "$1 \\le m \\le 9$"],
            "correctAnswer": 2,
            "solution": "Discriminant $D = (m-3)^2 - 4m \\ge 0 \\Rightarrow m^2 - 10m + 9 \\ge 0 \\Rightarrow (m-1)(m-9) \\ge 0 \\Rightarrow m \\le 1$ or $m \\ge 9$."
        },
        // Passage Question 2 (Sharing the exact same passage_id keeps them consecutive)
        {
            "passage_id": "passage_01",
            "passage_text": "Consider the quadratic equation $x^2 - (m-3)x + m = 0$ where $m \\in \\mathbb{R}$.",
            "type": "multi_mcq",
            "text": "For which of the following values of $m$ are both roots positive?",
            "options": ["10", "1", "9", "0"],
            "correctAnswers": [0, 2],
            "solution": "For roots to be positive, Sum > 0 and Product > 0. Sum = m-3 > 0 (m>3). Product = m > 0 (m>0). $m \\ge 9$ satisfies this. Thus 10 and 9 are correct."
        }
    ]
};