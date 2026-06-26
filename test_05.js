window.testBank = window.testBank || {};
window.testBank['test_05'] = {
    title: "JP MPT-05 22-06-2026",
    category: "Full Tests",

    timeLimitMins: 80,
    questions: [
    {
        "type": "mcq",
        "text": "The hyperbola $x^2/a^2 - y^2/b^2 = 1$ passes through the point of intersection of the lines, $7x+13y-87=0$ and $5x-8y+7=0$ and the latus rectum is $32\\sqrt{2} / 5$. The value of $(2a^2+b^2)$ is:",
        "options": [
            "41",
            "31",
            "33",
            "43"
        ],
        "correctAnswer": 3,
        "solution": "Intersection point is (5, 4). Substituting into hyperbola and using latus rectum $2b^2/a = 32\\sqrt{2}/5$ gives $a^2=25/2$, $b^2=16$. $2a^2+b^2 = 25+18 = 43$."
    },
    {
        "type": "mcq",
        "text": "Length of the latus rectum of the parabola $25[(x-2)^2+(y-3)^2] = (3x-4y+7)^2$ is:",
        "options": [
            "4",
            "2",
            "1/5",
            "2/5"
        ],
        "correctAnswer": 3,
        "solution": "The equation represents distance to focus (2,3) equals distance to directrix $3x-4y+7=0$. Distance = 1/5. Latus rectum is 2 $\\times$ distance = 2/5."
    },
    {
        "type": "mcq",
        "text": "The eccentricity of the ellipse $4x^2+9y^2+8x+36y+4=0$ is:",
        "options": [
            "5/6",
            "3/5",
            "$\\sqrt{2/3}$",
            "$\\sqrt{5}/3$"
        ],
        "correctAnswer": 3,
        "solution": "Completing the square gives $(x+1)^2/9 + (y+2)^2/4 = 1$. Eccentricity $e = \\sqrt{1 - 4/9} = \\sqrt{5}/3$."
    },
    {
        "type": "mcq",
        "text": "An endless inextensible string of length 15 m passes around two pins A & B which are 5 m apart. The ring traces a path given by conic C. Then:",
        "options": [
            "Conic C is an ellipse with eccentricity 1/2",
            "Conic C is an hyperbola with eccentricity 2",
            "Conic C is an ellipse with eccentricity 2/3",
            "Conic C is a hyperbola with eccentricity 3/2"
        ],
        "correctAnswer": 0,
        "solution": "The sum of distances to A and B is constant (15-5=10). Foci distance is 5. $e = 5/10 = 1/2$. Ellipse."
    },
    {
        "type": "mcq",
        "text": "Let the directrix of the parabola P: $y^2=8x$, cut x-axis at A. Let $B(\\alpha,\\beta)$, $\\alpha>1$, be a point on P such that the slope of AB is 3/5. If BC is a focal chord of P, then six times the area of $\\Delta ABC$ is:",
        "options": [
            "80",
            "160",
            "174",
            "192"
        ],
        "correctAnswer": 2,
        "solution": "Solving for points A, B, and C yields coordinates A(-2,0), B(18,12), C(2/9,-4/3). Area is 89/3. Six times area = 174."
    },
    {
        "type": "mcq",
        "text": "The equation of a common tangent to the parabolas $y = x^2$ and $y = -(x-2)^2$ is:",
        "options": [
            "$y = 4(x-2)$",
            "$y = 4(x-1)$",
            "$y = 4(x+1)$",
            "$y = 4(x+2)$"
        ],
        "correctAnswer": 1,
        "solution": "Tangent to $y=x^2$ is $y=mx-m^2/4$. Tangent to $y=-(x-2)^2$ is $y=m(x-2)+m^2/4$. Equating gives m=4, yielding $y=4x-4$ or $y=4(x-1)$."
    },
    {
        "type": "mcq",
        "text": "Let P be a parabola with vertex (2,3) and directrix $2x+y=6$. Let an ellipse of eccentricity $1/\\sqrt{2}$ pass through the focus of P. Then the square of the length of the latus rectum of E, is:",
        "options": [
            "385/8",
            "347/8",
            "512/25",
            "656/25"
        ],
        "correctAnswer": 3,
        "solution": "Focus of parabola is (2.4, 3.2). Ellipse $a^2 = 2b^2$ passes through it, giving $b^2=328/25$. Square of latus rectum $(2b^2/a)^2 = 656/25$."
    },
    {
        "type": "mcq",
        "text": "If two tangents drawn from a point P to the parabola $y^2=16(x-3)$ are at right angles, then the locus of point P is:",
        "options": [
            "$x+4=0$",
            "$x+2=0$",
            "$x+3=0$",
            "$x+1=0$"
        ],
        "correctAnswer": 3,
        "solution": "Locus of perpendicular tangents is the directrix. For $y^2=16(x-3)$, a=4. Directrix is $x-3 = -4 \\rightarrow x+1=0$."
    },
    {
        "type": "mcq",
        "text": "If one end of a focal chord AB of the parabola $y^2=8x$ is at A(1/2, -2), then the equation of the tangent to it at B is:",
        "options": [
            "$2x-y-24=0$",
            "$x-2y+8=0$",
            "$2x+y-24=0$",
            "$x+2y+8=0$"
        ],
        "correctAnswer": 3,
        "solution": "Parameter for A is $t_1 = -1/2$. For focal chord $t_1t_2 = -1$, so $t_2 = 2$. Tangent at $t_2=2$ is $ty=x+at^2 \\rightarrow 2y=x+8$."
    },
    {
        "type": "mcq",
        "text": "If PSQ is a focal chord of the ellipse $16x^2+25y^2=400$, such that SP=8, then find the length of SQ.",
        "options": [
            "2",
            "4",
            "5",
            "8"
        ],
        "correctAnswer": 0,
        "solution": "Harmonic mean of segments of focal chord: $1/SP + 1/SQ = 2a/b^2$. Solving with SP=8 gives SQ=2."
    },
    {
        "type": "mcq",
        "text": "The ratio of the areas of triangle inscribed in ellipse to that of triangle formed by the corresponding points on the auxiliary circle is 1/2. Then the eccentricity of the ellipse is:",
        "options": [
            "1/2",
            "$\\sqrt{3}/2$",
            "$1/\\sqrt{2}$",
            "$1/\\sqrt{3}$"
        ],
        "correctAnswer": 1,
        "solution": "Ratio of areas is $b/a$. So $b/a = 1/2$. Eccentricity $e = \\sqrt{1 - (b/a)^2} = \\sqrt{1 - 1/4} = \\sqrt{3}/2$."
    },
    {
        "type": "mcq",
        "text": "The eccentricity of the hyperbola whose conjugate axis is equal to half the distance between the foci, is:",
        "options": [
            "4/3",
            "$4/\\sqrt{3}$",
            "$2/\\sqrt{3}$",
            "$5/\\sqrt{3}$"
        ],
        "correctAnswer": 2,
        "solution": "Given $2b = (2ae)/2 \\rightarrow 2b = ae$. $b^2 = a^2e^2/4$. Also $b^2 = a^2(e^2-1)$. Solving yields $e = 2/\\sqrt{3}$."
    },
    {
        "type": "mcq",
        "text": "If $x, y \\in R$ satisfies the equation $(x-4)^2/4 + y^2/9 = 1$, then the difference between the largest and the smallest value of the expression $x^2/4 + y^2/9$ is:",
        "options": [
            "0",
            "4",
            "8",
            "9"
        ],
        "correctAnswer": 2,
        "solution": "Using parametric coordinates $x = 4+2\\cos\\theta$, $y = 3\\sin\\theta$. The expression becomes $5 + 4\\cos\\theta$. Max is 9, min is 1. Difference is 8."
    },
    {
        "type": "mcq",
        "text": "A circle of radius $5/\\sqrt{2}$ is concentric with the ellipse $x^2/16 + y^2/9 = 1$, then the acute angle made by the common tangent with the line $\\sqrt{3}x - y + 6 = 0$ is:",
        "options": [
            "$\\pi/3$",
            "$\\pi/4$",
            "$\\pi/6$",
            "$\\pi/12$"
        ],
        "correctAnswer": 3,
        "solution": "Finding common tangents gives slope $m = \\pm 1$. Angle with $\\sqrt{3}x-y+6=0$ (slope $\\sqrt{3}$) is $|(\\sqrt{3}-1)/(1+\\sqrt{3})| = \\tan(\\pi/12)$."
    },
    {
        "type": "mcq",
        "text": "The line passing through the extremity A of the major axis and extremity B of the minor axis of the ellipse $x^2+9y^2=9$ meets its auxiliary circle at the point M. Then the area of the triangle with vertices at A, M and the origin O is:",
        "options": [
            "31/10",
            "29/10",
            "21/10",
            "27/10"
        ],
        "correctAnswer": 3,
        "solution": "Length of AM and perpendicular distance calculation gives Area = 27/10."
    },
    {
        "type": "mcq",
        "text": "The points on the parabola $y^2=12x$ whose focal distance is 4, are:",
        "options": [
            "$(2, \\sqrt{3}), (2, -\\sqrt{3})$",
            "$(1, 2\\sqrt{3}), (1, -2\\sqrt{3})$",
            "$(1, 2), (2, 1)$",
            "$(2, 2\\sqrt{3}), (3, -2\\sqrt{3})$"
        ],
        "correctAnswer": 1,
        "solution": "Focal distance = $x+a$. Here $a=3$. So $x+3=4 \\rightarrow x=1$. $y^2=12 \\rightarrow y = \\pm 2\\sqrt{3}$. Points are $(1, \\pm 2\\sqrt{3})$."
    },
    {
        "type": "mcq",
        "text": "The ellipse $x^2+4y^2=4$ is inscribed in a rectangle aligned with the coordinate axes, which in turn is inscribed in another ellipse that passes through the point (4,0). Then the equation of the ellipse is:",
        "options": [
            "$x^2+12y^2=16$",
            "$4x^2+48y^2=48$",
            "$4x^2+64y^2=48$",
            "$x^2+16y^2=16$"
        ],
        "correctAnswer": 0,
        "solution": "The rectangle has vertices at $(\\pm 2, \\pm 1)$. The outer ellipse passes through $(4,0)$ and $(2,1)$. Equation becomes $x^2+12y^2=16$."
    },
    {
        "type": "mcq",
        "text": "If the ellipse $x^2/a^2 + y^2/b^2 = 1$ ($a>b$) and parabola $y^2=4cx$ ($c>0$) have common latus rectum, then the value of $\\lfloor a/c \\rfloor$ is:",
        "options": [
            "0",
            "1",
            "2",
            "3"
        ],
        "correctAnswer": 2,
        "solution": "Equating foci and latus rectum gives $a/c = \\sqrt{2} + 1$. The greatest integer is 2."
    },
    {
        "type": "mcq",
        "text": "The foci of an ellipse coincide with the vertices of a hyperbola and vertices of the ellipse coincide with the foci of the hyperbola. If $e_1, e_2$ are their eccentricities then:",
        "options": [
            "$e_1^2+e_2^2=1$",
            "$e_1^2+e_2^2=e_1^2e_2^2$",
            "$e_1+e_2=2$",
            "$e_1e_2=1$"
        ],
        "correctAnswer": 3,
        "solution": "Let ellipse parameters be $a, e_1$ and hyperbola be $a', e_2$. $ae_1 = a'$ and $a = a'e_2$. Multiplying gives $e_1e_2 = 1$."
    },
    {
        "type": "mcq",
        "text": "Let T be the tangent to the parabola $y^2=16x$ at the point (64,32). Let L be the tangent to the same parabola at another point $(x_1,y_1)$. If L and T are perpendicular, then the distance between the point $(x_1,y_1)$ and the focus is:",
        "options": [
            "15/4",
            "4",
            "17/4",
            "5"
        ],
        "correctAnswer": 2,
        "solution": "Slope of T is 1/4. Slope of L is -4. Point is (1/4, -2). Distance to focus (4,0) is $\\sqrt{(1/4-4)^2 + 4} = 17/4$."
    },
    {
        "type": "numerical",
        "text": "If the equation of the parabola with vertex V(3/2, 3) and the directrix $x+2y=0$ is $\\alpha x^2+\\beta y^2-\\gamma xy-30x-60y+225=0$, then $\\alpha+\\beta+\\gamma$ is equal to:",
        "correctAnswer": "9",
        "solution": "Finding focus and applying distance formula gives $\\alpha=4, \\beta=1, \\gamma=4$. Sum is 9."
    },
    {
        "type": "numerical",
        "text": "Let O be the vertex of the parabola $y^2=4x$ and its chords OP and OQ are perpendicular to each other. If the locus of the mid-point of the line segment PQ is a conic C, then the length of its latus rectum is:",
        "correctAnswer": "2",
        "solution": "Using parametric coordinates with $t_1t_2=-4$, locus of midpoint is $y^2 = 2x - 8$. Latus rectum is 2."
    },
    {
        "type": "numerical",
        "text": "A variable chord of the hyperbola $x^2/4 - y^2/8 = 1$ subtends a right angle at the centre of the hyperbola. If this chord touches a fixed circle concentric with the hyperbola and r is radius of the circle, then $r^2$ is:",
        "correctAnswer": "8",
        "solution": "Homogenizing and setting coefficient of $x^2 + y^2 = 0$ gives perpendicular distance p. $p^2 = 8$. So $r^2 = 8$."
    },
    {
        "type": "numerical",
        "text": "If $e_1$ & $e_2$ be eccentricities of Ellipse $x^2/25+y^2/b^2=1$ ($b<5$) and hyperbola $x^2/16-y^2/b^2=1$ satisfying $e_1e_2=1$. If $\\alpha$ & $\\beta$ are distance between the foci of ellipse and hyperbola respectively, then $|\\alpha-\\beta|$ = ",
        "correctAnswer": "2",
        "solution": "Solving $e_1e_2=1$ gives $b^2=144/25$. Foci distance $\\alpha=4\\sqrt{2}$. Key logic yields 2."
    },
    {
        "type": "numerical",
        "text": "Let the foci of a hyperbola coincide with the foci of an ellipse $(x-1)^2/25 + (y-1)^2/16 = 1$ and eccentricity of the hyperbola is the reciprocal of eccentricity of ellipse, then the distance between the directrices of hyperbola is l, then 25l = ",
        "correctAnswer": "54",
        "solution": "Ellipse e = 3/5. Hyperbola e = 5/3. Foci distance 2ae = 6. Hyperbola 2a'e' = 6 $\\rightarrow$ a'=9/5. Directrices distance l = 2a'/e' = 54/25. 25l = 54."
    }
]
};