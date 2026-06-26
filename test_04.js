window.testBank = window.testBank || {};
window.testBank['test_04'] = {
    title: "UP MPT-05 22-06-2026",
    category: "Full Tests",

    timeLimitMins: 80,
    questions: [
    {
        "type": "mcq",
        "text": "Tangent at any point on hyperbola $x^2/a^2 - y^2/b^2 = 1$ cuts the x-axis and y-axis at A and B respectively. If the rectangle OAPB (where O is origin) is completed then locus of point P is given by:",
        "options": [
            "$a^2/x^2 - b^2/y^2 = 1$",
            "$a^2/x^2 + b^2/y^2 = 1$",
            "$a^2/y^2 - b^2/x^2 = 1$",
            "None of these"
        ],
        "correctAnswer": 0,
        "solution": "Let P be $(h,k)$. Tangent at $(a \\sec\\theta, b \\tan\\theta)$ is $(x \\sec\\theta)/a - (y \\tan\\theta)/b = 1$. The intercepts are $A(a/\\sec\\theta, 0)$ and $B(0, -b/\\tan\\theta)$. Thus $h = a/\\sec\\theta$ and $k = -b/\\tan\\theta$. Eliminating $\\theta$ gives the locus $a^2/x^2 - b^2/y^2 = 1$."
    },
    {
        "type": "mcq",
        "text": "If the tangent to the ellipse $x^2 + 4y^2 = 16$ at a point $(4\\cos\\theta, 2\\sin\\theta)$ passes through the focus of the parabola $x^2 = 8(y-6)$, then:",
        "options": [
            "$\\sin\\theta = 1/4$",
            "$\\sin\\theta = 2/3$",
            "$\\tan\\theta = 1/4$",
            "$\\cot\\theta = 1/3$"
        ],
        "correctAnswer": 0,
        "solution": "Focus of parabola $x^2 = 8(y-6)$ is $(0, 8)$. Tangent to ellipse is $(x \\cos\\theta)/4 + (y \\sin\\theta)/2 = 1$. Passing through $(0, 8)$ gives $4 \\sin\\theta = 1$, so $\\sin\\theta = 1/4$."
    },
    {
        "type": "mcq",
        "text": "Locus of a point which divides a chord of slope 2 of parabola $y^2 = 4x$ internally in the ratio 1:2 is another parabola having vertex as:",
        "options": [
            "$(2/3, 8/3)$",
            "$(8/3, 2/3)$",
            "$(2/9, 8/9)$",
            "$(8/9, 2/9)$"
        ],
        "correctAnswer": 2,
        "solution": "Using section formula and the property of chords with slope 2, the locus reduces to a parabola with vertex at $(2/9, 8/9)$."
    },
    {
        "type": "mcq",
        "text": "The number of tangents drawn from point $(-5, 3)$ to the hyperbola $x^2/25 - y^2/9 = 1$ are:",
        "options": [
            "0",
            "2",
            "4",
            "1"
        ],
        "correctAnswer": 3,
        "solution": "The point $(-5, 3)$ lies exactly on the asymptote $y = -3/5x$. Therefore, only 1 tangent can be drawn to the hyperbola from this point."
    },
    {
        "type": "mcq",
        "text": "The equation $x^2/(8-a) + y^2/(a-2) = 1$ will represent an ellipse. If:",
        "options": [
            "$a \\in (1,4)$",
            "$a \\in (-\\infty, 2) \\cup (8, \\infty)$",
            "$a \\in (2,8)$",
            "None of these"
        ],
        "correctAnswer": 3,
        "solution": "For an ellipse, $8-a > 0$ and $a-2 > 0$, which means $2 < a < 8$. Also, they must not be equal, so $8-a \\ne a-2 \\rightarrow a \\ne 5$. Thus $a \\in (2,8) - \\{5\\}$. The correct option is None of these."
    },
    {
        "type": "mcq",
        "text": "Locus of a point which moves such that tangents drawn from it to $y^2 = 4x + 4$ and $y^2 = 8x + 16$ are mutually perpendicular, is:",
        "options": [
            "$y = x + 2$",
            "$y = x + 3$",
            "$x + 3 = 0$",
            "$x + 2 = 0$"
        ],
        "correctAnswer": 2,
        "solution": "By finding the common locus of intersection of perpendicular tangents (related to their directrices), the equation simplifies to $x + 3 = 0$."
    },
    {
        "type": "mcq",
        "text": "If $y = mx + c$ be a tangent to the parabola $(y-3)^2 + 8(x-2) = 0$ then the range of c for all possible values of m is:",
        "options": [
            "$[-2, 2]$",
            "$(-\\infty, -2] \\cup [2, \\infty)$",
            "$(-\\infty, -1] \\cup [7, \\infty)$",
            "$(-\\infty, -1] \\cup [2, \\infty)$"
        ],
        "correctAnswer": 2,
        "solution": "Equation of tangent is $(y-3) = m(x-2) - 2/m$. This gives $y = mx + 3 - 2(m + 1/m)$. Since $m + 1/m \\in (-\\infty, -2] \\cup [2, \\infty)$, $c \\in (-\\infty, -1] \\cup [7, \\infty)$."
    },
    {
        "type": "mcq",
        "text": "Equation $\\sqrt{x^2+y^2} + \\sqrt{(x-3)^2+(y-4)^2} = 6$ represents:",
        "options": [
            "a parabola",
            "a hyperbola",
            "an ellipse",
            "a line segment"
        ],
        "correctAnswer": 2,
        "solution": "This represents the locus of a point whose sum of distances from $(0,0)$ and $(3,4)$ is 6. The distance between foci is 5. Since $6 > 5$, it is an ellipse."
    },
    {
        "type": "mcq",
        "text": "If PQ is a double ordinate and e is eccentricity of the hyperbola $x^2/a^2 - y^2/b^2 = 1$ such that OPQ is an equilateral triangle, O being the centre, then find the least possible integral value of $3e^2$.",
        "options": [
            "5",
            "7",
            "9",
            "11"
        ],
        "correctAnswer": 0,
        "solution": "For OPQ to be equilateral, the coordinates give a relation requiring $b^2/a^2 > 1/3$. Thus $e^2 - 1 > 1/3$, meaning $3e^2 > 4$. The least integer is 5."
    },
    {
        "type": "mcq",
        "text": "The tangent at the point A(12, 6) to a parabola intersect its directrix at the point B(-1, 2). If the focus of the parabola lies on positive x-axis then square of distance of focus from point A is:",
        "options": [
            "180",
            "37",
            "89",
            "270"
        ],
        "correctAnswer": 1,
        "solution": "The segment joining focus S to A is perpendicular to the segment joining focus to the intersection of tangent and directrix. Solving gives S(11, 0). $AS^2 = (12-11)^2 + (6-0)^2 = 37$."
    },
    {
        "type": "mcq",
        "text": "If lines $3x+2y=10$ and $-3x+2y=10$ are tangents at the extremities of latus rectum of an ellipse whose centre is origin, then the length of latus rectum of ellipse is:",
        "options": [
            "$16/3$",
            "$3\\sqrt{5}$",
            "$4\\sqrt{5}$",
            "$100/27$"
        ],
        "correctAnswer": 3,
        "solution": "From the tangent equations, we identify the focus and intercepts, leading to $a^2 = 500/81$ and $b = 10/3$. Latus rectum $2b^2/a = 100/27$."
    },
    {
        "type": "mcq",
        "text": "Tangent at $P(x_1,y_1)$ to the parabola $y^2=4ax$ cuts the parabola $y^2=4a(x+b)$ at Q and R then mid point of Q and R is:",
        "options": [
            "$(x_1+b, y_1+b)$",
            "$(x_1-b, y_1-b)$",
            "$(x_1, y_1)$",
            "None of these"
        ],
        "correctAnswer": 2,
        "solution": "The equation of the tangent matches the equation of the chord with a given midpoint (T=S1). Equating coefficients yields the midpoint as $(x_1, y_1)$."
    },
    {
        "type": "mcq",
        "text": "Let S=0 is an ellipse whose vertices are the extremities of minor axis of the ellipse E: $x^2/a^2+y^2/b^2=1$ (a>b). If S=0 passes through the foci of E, then its eccentricity is:",
        "options": [
            "$\\sqrt{\\frac{1-2e^2}{1-e^2}}$",
            "$1/\\sqrt{1+e^2}$",
            "$\\frac{1-2e^2}{1-e^2}$",
            "$\\frac{e^2}{1+e^2}$"
        ],
        "correctAnswer": 0,
        "solution": "Using the relations between the axes and passing through the foci, we solve for the new eccentricity $e_1 = \\sqrt{\\frac{1-2e^2}{1-e^2}}$."
    },
    {
        "type": "mcq",
        "text": "Let F be the focus of parabola, a focal chord is PF and PM is perpendicular drawn to the directrix. From P a line is drawn through the mid point (R) of FM, then the angle between PR and FM is:",
        "options": [
            "$45^\\circ$",
            "$60^\\circ$",
            "$90^\\circ$",
            "none of these"
        ],
        "correctAnswer": 2,
        "solution": "Calculating the slopes of PR and FM parametrically gives $m(PR) \\times m(FM) = -1$. Hence, the angle is $90^\\circ$."
    },
    {
        "type": "mcq",
        "text": "Let A, B and C are three points on ellipse $x^2/25+y^2/16=1$ where line joining A & C is parallel to the x-axis and B is end point of minor axis whose ordinate is positive then maximum area of $\\Delta ABC$ is:",
        "options": [
            "$12\\sqrt{3}$",
            "20",
            "$15\\sqrt{3}$",
            "$20\\sqrt{3}$"
        ],
        "correctAnswer": 2,
        "solution": "The area is $A = 0.5 \\cdot 10\\cos\\theta \\cdot (4+4\\sin\\theta)$. Maximizing with $dA/d\\theta = 0$ gives $\\theta = \\pi/6$, yielding Max Area = $15\\sqrt{3}$."
    },
    {
        "type": "mcq",
        "text": "Consider conic C: $25(x-1)^2+25(y+1)^2=(3x-4y)^2$. If curve E is locus of point of intersection of perpendicular tangents to the conic C, then minimum distance between curve E and point (2, -1) is:",
        "options": [
            "1",
            "2",
            "4",
            "3"
        ],
        "correctAnswer": 1,
        "solution": "Conic C is a parabola. Curve E is its directrix $3x-4y=0$. The distance from (2, -1) to $3x-4y=0$ is $|6+4|/5 = 2$."
    },
    {
        "type": "mcq",
        "text": "Let be a hyperbola whose conjugate axis BB' subtends an angle $60^\\circ$ at one of its vertices A. If area of triangle BAB' is $2\\sqrt{3}$ then distance between foci of hyperbola is:",
        "options": [
            "$4\\sqrt{2}$",
            "4",
            "$2\\sqrt{3}$",
            "$3\\sqrt{5}$"
        ],
        "correctAnswer": 0,
        "solution": "From the triangle, $a = b\\sqrt{3}$. Area gives $b = \\sqrt{2}$, $a = \\sqrt{6}$. Distance between foci is $2ae = 4\\sqrt{2}$."
    },
    {
        "type": "mcq",
        "text": "The locus of a point $P(\\alpha,\\beta)$ moving under the condition that the line $y=\\alpha x+\\beta$ is a tangent to the hyperbola $x^2/a^2 - y^2/b^2 = 1$ is:",
        "options": [
            "a hyperbola",
            "a parabola",
            "a circle",
            "an ellipse"
        ],
        "correctAnswer": 0,
        "solution": "Tangent condition is $\\beta^2 = a^2\\alpha^2 - b^2$, which rewrites to $a^2\\alpha^2 - \\beta^2 = b^2$. This is a hyperbola."
    },
    {
        "type": "mcq",
        "text": "If the angle between the straight lines joining foci and the ends of minor axis of the ellipse $x^2/a^2+y^2/b^2=1$ is $90^\\circ$, the eccentricity is:",
        "options": [
            "1/2",
            "$\\sqrt{3/2}$",
            "$1/\\sqrt{2}$",
            "$1/\\sqrt{3}$"
        ],
        "correctAnswer": 2,
        "solution": "Forming a right triangle with the axes, we get $b = ae$. Since $b^2 = a^2(1-e^2)$, solving gives $e = 1/\\sqrt{2}$."
    },
    {
        "type": "mcq",
        "text": "If the distance between two parallel tangents drawn to the hyperbola $x^2/9 - y^2/49 = 1$ is 2, then their slope is equal to:",
        "options": [
            "$\\pm 5/2$",
            "$\\pm 4/5$",
            "$\\pm 7/2$",
            "$\\pm 5/4$"
        ],
        "correctAnswer": 0,
        "solution": "Distance between parallel tangents is $2\\sqrt{9m^2-49}/\\sqrt{1+m^2} = 2$. Solving gives $8m^2 = 50$, so $m = \\pm 5/2$."
    },
    {
        "type": "numerical",
        "text": "If line y=x+2 do not intersect any member of family of parabola $y^2=ax$ ($a \\in R$) at two distinct points, then maximum value of latus rectum of parabola is:",
        "correctAnswer": "8",
        "solution": "Substitute y=x+2 into $y^2=ax$ to get a quadratic. For no two distinct real roots, Discriminant $\\le 0$. This gives $a \\le 8$. Latus rectum is $|a|$, so max is 8."
    },
    {
        "type": "numerical",
        "text": "Let A be any point on ellipse $x^2+16y^2=4$ with foci $S_1$ and $S_2$ then the maximum value of $AS_1 \\cdot AS_2$ is:",
        "correctAnswer": "4",
        "solution": "By AM-GM on $AS_1 + AS_2 = 2a = 4$, the maximum product is $(4/2)^2 = 4$."
    },
    {
        "type": "numerical",
        "text": "If the eccentricity of the hyperbola $x^2-y^2\\sec^2\\theta=5$ is $\\sqrt{3}$ times the eccentricity of the ellipse $x^2\\sec^2\\theta+y^2=25$. Then the smallest positive value of $\\theta$ is $\\pi/P$. The value of P is:",
        "correctAnswer": "4",
        "solution": "Calculating eccentricities and equating gives $\\cos\\theta = 1/\\sqrt{2}$. Thus $\\theta = \\pi/4$, making P = 4."
    },
    {
        "type": "numerical",
        "text": "The equation of tangent at P(3, 4) on the parabola whose axis is x-axis is 3x-4y+7=0 and the distance of the tangent from the focus of the parabola is 'k' then find the value of 2k.",
        "correctAnswer": "5",
        "solution": "Solving for the focus gives (11/6, 0). The perpendicular distance to 3x-4y+7=0 is 5/2. Thus 2k = 5."
    },
    {
        "type": "numerical",
        "text": "If A be the area of quadrilateral formed by the tangents at the end points of latus rectum to the ellipse $x^2/9 + y^2/5 = 1$, then A/3 is equal to:",
        "correctAnswer": "9",
        "solution": "The quadrilateral is a rhombus with area $2a^2/e$. Here a=3, e=2/3. Area A = 27. Thus A/3 = 9."
    }
]
};