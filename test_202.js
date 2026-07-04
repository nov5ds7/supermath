window.testBank = window.testBank || {};
window.testBank['test_202'] = {
    title: "JL2 – Chocolate Problems",
    category: "Chocolate Problems",
    uploadedAt: "2026-07-04T12:00:14Z",
    examPattern: "advance",
    timeLimitMins: 60,
    randomizePoolSize: 12,
    questions: [
        // ================================================================
        // SECTION 1 : Single Correct MCQ  (+3, –1, 0)
        // ================================================================
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Length of the focal chord of the parabola $y^2 = 4ax$ at a distance $p$ from the vertex is:",
            "options": [
                "$\\frac{2a^2}{p}$",
                "$\\frac{a^3}{p^2}$",
                "$\\frac{4a^3}{p^2}$",
                "$\\frac{p^2}{a}$"
            ],
            "correctAnswer": 2,
            "solution": "$L = 4a \\csc^2 \\theta$ and $p = a \\sin \\theta \\Rightarrow \\csc^2 \\theta = \\frac{a^2}{p^2}$. Hence $L = \\frac{4a^3}{p^2}$."
        },
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Coordinates of the vertices B and C of a triangle ABC are $(2,0)$ and $(8,0)$ respectively. The vertex A is varying in such a way that $4\\tan\\frac{B}{2} \\cdot \\tan\\frac{C}{2} = 1$. Then locus of A is:",
            "options": [
                "$\\frac{(x-5)^2}{25} + \\frac{y^2}{16} = 1$",
                "$\\frac{(x-5)^2}{16} + \\frac{y^2}{25} = 1$",
                "$\\frac{(x-5)^2}{25} + \\frac{y^2}{9} = 1$",
                "$\\frac{(x-5)^2}{9} + \\frac{y^2}{25} = 1$"
            ],
            "correctAnswer": 0,
            "solution": "Using $4 \\cdot \\frac{s-a}{s} = 1 \\Rightarrow 3s = 4a$. Since $a = 6, s = 8, b+c = 10$. Sum of distances from A to B and C is constant 10. Locus is an ellipse with centre $(5,0)$, $2a=10, 2ae=6 \\Rightarrow a=5, b=4$. Equation: $\\frac{(x-5)^2}{25} + \\frac{y^2}{16} = 1$."
        },
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Consider a branch of the hyperbola $x^2 - 2y^2 - 2\\sqrt{2}x - 4\\sqrt{2}y - 6 = 0$ with vertex at the point A. Let B be one of the end points of its latus rectum. If C is the focus of the hyperbola nearest to the point A, then the area of $\\Delta ABC$ is:",
            "options": [
                "$1 - \\sqrt{2/3}$ sq unit",
                "$\\sqrt{3/2} - 1$ sq unit",
                "$1 + \\sqrt{2/3}$ sq unit",
                "$\\sqrt{3/2} + 1$ sq unit"
            ],
            "correctAnswer": 1,
            "solution": "Completing square: $\\frac{(x-\\sqrt{2})^2}{4} - \\frac{(y+\\sqrt{2})^2}{2} = 1$. Here $a=2, b=\\sqrt{2}, e=\\sqrt{3/2}$. $AC = a(e-1) = 2(\\sqrt{3/2}-1)$. Semi-latus rectum $CB = \\frac{b^2}{a} = 1$. Area $= \\frac{1}{2} \\times AC \\times CB = \\sqrt{3/2} - 1$."
        },
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Consider a hyperbola $H$ having centre at the origin and foci on the X-axis. Let $C_1$ be the circle touching the hyperbola $H$ and having the centre at the origin. Let $C_2$ be the circle touching the hyperbola $H$ at its vertex and having the centre at one of its foci. If areas (in sq units) of $C_1$ and $C_2$ are $36\\pi$ and $4\\pi$ respectively, then the length of latus rectum of $H$ is:",
            "options": [
                "$\\frac{14}{3}$",
                "$\\frac{28}{3}$",
                "$\\frac{11}{3}$",
                "$\\frac{10}{3}$"
            ],
            "correctAnswer": 1,
            "solution": "First circle touches hyperbola at vertices, centre at origin, so $r_1 = a = 6$. Second circle touches vertex, centre at focus, so $r_2 = a(e-1)$. Area $4\\pi \\Rightarrow a(e-1) = 2 \\Rightarrow e = 4/3$. Latus rectum $= 2a(e^2-1) = 12(16/9 - 1) = 28/3$."
        },

        // ================================================================
        // SECTION 2 : One or More Correct  (+4, –2, partial +1)
        // ================================================================
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "If $\\alpha, \\beta, \\gamma$ & $\\delta$ be the eccentric angles of feet of four co‑normal points of a hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ from any point in its plane, then $\\alpha + \\beta + \\gamma + \\delta$ is $n\\pi$. The possible values of $n$ is/are:",
            "options": ["3", "4", "5", "6"],
            "correctAnswers": [0, 2],
            "solution": "The sum of eccentric angles of four co‑normal points on a hyperbola is always an odd multiple of $\\pi$. Thus $n$ must be an odd integer. Possible values are 3 and 5."
        },
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let $a$ and $b$ be positive real numbers such that $a > 1$ and $b < a$. Let $P$ be a point in the first quadrant that lies on the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Suppose the tangent to the hyperbola at $P$ passes through $(1,0)$, and the normal at $P$ cuts off equal intercepts on the coordinate axes. Let $\\Delta$ denote the area of the triangle formed by the tangent at $P$, the normal at $P$ and the X‑axis. If $e$ denotes the eccentricity of the hyperbola, then which of the following statements is/are TRUE?",
            "options": [
                "$1 < e < \\sqrt{2}$",
                "$\\sqrt{2} < e < 2$",
                "$\\Delta = a^4$",
                "$\\Delta = b^4$"
            ],
            "correctAnswers": [0, 3],
            "solution": "Normal makes equal intercepts, so slope is $\\pm 1$; tangent slope is $\\mp 1$. Tangent through $(1,0)$ gives $b^2 = a^2 - 1$. Eccentricity $e = \\sqrt{2 - 1/a^2}$, so $1 < e < \\sqrt{2}$. Area $\\Delta$ evaluates to $b^4$."
        },
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Consider the parabola $y^2 = 4x$. Let $S$ be the focus. A pair of tangents drawn to the parabola from $P = (-2,1)$ meet the parabola at $P_1$ and $P_2$. Let $Q_1$ and $Q_2$ be points on the lines $SP_1$ and $SP_2$ respectively such that $PQ_1 \\perp SP_1$ and $PQ_2 \\perp SP_2$. Then which of the following is/are TRUE?",
            "options": [
                "$SQ_1 = 2$",
                "$Q_1Q_2 = \\frac{3\\sqrt{10}}{5}$",
                "$PQ_1 = 3$",
                "$SQ_2 = 1$"
            ],
            "correctAnswers": [1, 2, 3],
            "solution": "Intersection of tangents from P gives $P_1(4,4)$ and $P_2(1,-2)$. Focus S is $(1,0)$. $PQ_1 = 3, SQ_1 = 1, PQ_2 = 3, SQ_2 = 1$. By similar triangles, $Q_1Q_2 = \\frac{3\\sqrt{10}}{5}$."
        },
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "A set of lines $x + y - 2 + \\lambda_1(2x + y - 3) = 0$ represents incident rays on an ellipse $S = 0$, and $2x + 3y - 23 + \\lambda_2(2x - y - 3) = 0$ represents the set of reflective rays from the ellipse, where $\\lambda_1,\\lambda_2 \\in \\mathbb{R}$. If $P(3,7)$ is a point on the ellipse, normal at which meets the major axis at $N$, then which of the following is/are TRUE?",
            "options": [
                "Eccentricity of ellipse is $\\frac{\\sqrt{5}}{2\\sqrt{2} + 1}$",
                "$N$ divides the line segment joining the two foci in the ratio $2\\sqrt{2}:1$",
                "Area of triangle formed by point $P$ and the two foci is 5",
                "Eccentricity of ellipse is $\\frac{\\sqrt{5}}{2\\sqrt{2} - 1}$"
            ],
            "correctAnswers": [0, 1, 2],
            "solution": "Intersection of incident rays gives focus $S_1(1,1)$; reflected rays gives focus $S_2(4,5)$. Distance between foci $2ae = 5$. Using $2a = PS_1 + PS_2$ with $P(3,7)$, $2a = 2\\sqrt{10} + \\sqrt{5}$. Eccentricity $e = \\frac{5}{2\\sqrt{10} + \\sqrt{5}} = \\frac{\\sqrt{5}}{2\\sqrt{2} + 1}$. Normal bisects internal angle, dividing base in ratio of focal radii $2\\sqrt{2}:1$."
        },

        // ================================================================
        // SECTION 3 : Numerical Value  (+4, 0)
        // ================================================================
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "A tangent is drawn to the parabola $y^2 = 4x$ at the point $P$ whose abscissa lies in the interval $[1,4]$. The maximum possible area of the triangle formed by the tangent at $P$, the ordinate of $P$ and the x‑axis is equal to $K$. Then the value of $\\sqrt{K}$ is:",
            "correctAnswer": 4,
            "solution": "Area of triangle = $2t^3$. Given abscissa $t^2 \\in [1,4]$, maximum occurs at $t=2$. Max area $K = 2(8) = 16$, so $\\sqrt{K} = 4$."
        },
                {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "A figure given below consisting of two equal and externally tangent circles inscribed in an ellipse. If the eccentricity of the ellipse of minimum area is $e$, then find the value of $12e^2$:<br><br><img src='images/JL2 q10 image.png' alt='Two circles inscribed in an ellipse' style='max-width:100%; display:block; margin:0 auto;'><br><br>",
            "correctAnswer": 8,
            "solution": "For minimum area ellipse containing the two circles, tangency condition gives $b^2 = 1.5r^2$ and $a^2 = 4.5r^2$. Eccentricity $e^2 = 1 - b^2/a^2 = 1 - 1.5/4.5 = 2/3$. Hence $12e^2 = 8$."
        },
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Let $a > 0, b > 0$. Let $e$ and $l$ respectively be the eccentricity and length of the latus rectum of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Let $e'$ and $l'$ respectively be the eccentricity and length of the latus rectum of its conjugate hyperbola. If $e^2 = \\frac{11}{14} l$ and $(e')^2 = \\frac{11}{8} l'$, then the value of $77a + 44b$ is equal to:",
            "correctAnswer": 130,
            "solution": "Using latus rectum and eccentricity relations for conjugate hyperbolas, solving the given ratios yields $b = 7a/4$. Substituting back gives $a = 65/77, b = 65/44$. Expression $77a + 44b = 65 + 65 = 130$."
        },
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The set of values of $a$ for which there exists a tangent to the ellipse $a^2x^2 + \\frac{y^2}{2} = 1$ such that the chord intercepted between the given tangent and the hyperbola $\\frac{x^2}{a^2} - 2y^2 = 1$ subtends a right angle at the centre of the curves is $[-\\sqrt{p}, -\\sqrt{q}] \\cup [\\sqrt{q}, \\sqrt{p}]$. Then $5(p + q + 1 - \\sqrt{2})$ is equal to:",
            "correctAnswer": 2,
            "solution": "Homogenizing and setting sum of coefficients of $x^2$ and $y^2$ to zero yields the condition for $m^2$. For a valid real tangent, $m^2 \\ge 0$ restricts $a \\in [-\\sqrt{\\sqrt{2}-1}, -\\sqrt{2/5}] \\cup [\\sqrt{2/5}, \\sqrt{\\sqrt{2}-1}]$. Thus $p = \\sqrt{2}-1$, $q = 2/5$. Expression $= 5(\\sqrt{2}-1 + 2/5 + 1 - \\sqrt{2}) = 5(2/5) = 2$."
        }
    ]
};