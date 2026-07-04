window.testBank = window.testBank || {};
window.testBank['test_102'] = {
    title: "XII - JN20",
    category: "Chocolate Problems",
    uploadedAt: "2026-07-04T12:00:10Z",
    timeLimitMins: 30,
    questions: [
    // 1
    {
        "type": "mcq",
        "text": "Let $A$ and $B$ be the points (A has positive ordinate) common to the ellipse $E: x^{2}+4y^{2}=20$, hyperbola $H: 4y^{2}-x^{2}=20$. Four lines two from each focus of the hyperbola are drawn that touch the ellipse at $P, Q, R$ and $S$ in quadrants I, IV, III and II respectively. Then, the area of the hexagon $APQBRS$ is",
        "options": [
            "$4(\\sqrt{5}+1)$",
            "$8(\\sqrt{5}+1)$",
            "$8(\\sqrt{5}+2)$",
            "$4(\\sqrt{5}+2)$"
        ],
        "correctAnswer": 1,
        "solution": "The equation of the ellipse is $\\frac{x^2}{20} + \\frac{y^2}{5} = 1$. The equation of the hyperbola is $\\frac{y^2}{5} - \\frac{x^2}{20} = 1$. A, B are points of contact of $E \\Rightarrow A(0,\\sqrt{5})$, $B(0,-\\sqrt{5})$. The foci of the hyperbola are $(0, \\pm 5)$. Equation of tangents to the ellipse $y = mx + \\sqrt{20m^{2} + 5}...(1)$. Eq. (1) passing through $(0, 5)$, $5 = \\sqrt{20m^{2} + 5} \\Rightarrow m = \\pm 1$. Eq. of tangents: $y = -x + 5$ at $P(4,1)$, $y = x - 5$ at $Q(4,-1)$, $y = -x - 5$ at $R(-4,-1)$, $y = x + 5$ at $S(-4,1)$. Area of hexagon = $2 \\times$ trapezium $(APQB) = 2 \\times \\frac{1}{2} (2\\sqrt{5} + 2)(4) = 8(\\sqrt{5} + 1)$."
    },
    // 2
    {
        "type": "mcq",
        "text": "Let the hyperbola $H:\\frac{x^{2}}{a^{2}}-y^{2}=1$ and the ellipse $E: 3x^{2}+4y^{2}=12$ be such that the length of latus rectum of $H$ is equal to the length of latus rectum of $E$. If $e_{H}$ and $e_{E}$ are the eccentricities of $H$ and $E$, respectively, then the value of $12(e_{H}^{2}+e_{E}^{2})$ is equal to",
        "options": [
            "40",
            "42",
            "44",
            "46"
        ],
        "correctAnswer": 1,
        "solution": "The ellipse is $\\frac{x^{2}}{4} + \\frac{y^{2}}{3} = 1$. The hyperbola is $\\frac{x^{2}}{a^{2}} - \\frac{y^{2}}{1} = 1$. $e_{E} = \\sqrt{1 - \\frac{3}{4}} = \\frac{1}{2}$. Length of latus rectum of $E$ is $\\frac{2b^2}{a} = \\frac{2(3)}{2} = 3$. Length of latus rectum of $H$ is $\\frac{2(1)}{a} = \\frac{2}{a}$. Thus $\\frac{2}{a} = 3 \\Rightarrow a = \\frac{2}{3}$. $e_{H} = \\sqrt{1 + \\frac{1}{a^2}} = \\sqrt{1 + \\frac{9}{4}} = \\frac{\\sqrt{13}}{2}$. $12(e_{H}^{2} + e_{E}^{2}) = 12(\\frac{13}{4} + \\frac{1}{4}) = 12(\\frac{14}{4}) = 42$."
    },
    // 3
    {
        "type": "mcq",
        "text": "Let $C$ be the largest circle centered at $(2, 0)$ and inscribed in the ellipse $\\frac{x^{2}}{36}+\\frac{y^{2}}{16}=1$. If $(1,\\alpha)$ lies on $C$, then $10\\alpha^{2}$ is equal to",
        "options": [
            "116",
            "118",
            "120",
            "122"
        ],
        "correctAnswer": 1,
        "solution": "Normal at any point $P(6\\cos\\theta,4\\sin\\theta)$ is $6\\sec\\theta x - 4\\csc\\theta y = 20$. This normal is also the normal of the circle passing through the point $(2,0)$. So, $12\\sec\\theta = 20 \\Rightarrow \\cos\\theta = \\frac{3}{5}$ and $\\sin\\theta = \\frac{4}{5}$. Point $P = (\\frac{18}{5}, \\frac{16}{5})$. So the largest radius of circle $r^{2} = (2 - \\frac{18}{5})^{2} + (0 - \\frac{16}{5})^{2} = \\frac{64}{25} + \\frac{256}{25} = \\frac{320}{25} = \\frac{64}{5}$. So the equation of circle is $(x-2)^{2} + y^{2} = \\frac{64}{5}$. Passing it through $(1,\\alpha)$, $(1-2)^{2} + \\alpha^{2} = \\frac{64}{5} \\Rightarrow \\alpha^{2} = \\frac{64}{5} - 1 = \\frac{59}{5}$. Then $10\\alpha^{2} = 118$."
    },
    // 4
    {
        "type": "mcq",
        "text": "The locus of the point of intersection of the lines $\\sqrt{3}kx+ky-4\\sqrt{3}=0$ and $\\sqrt{3}x-y-4\\sqrt{3}k=0$ is a conic, whose eccentricity is",
        "options": [
            "1",
            "$\\sqrt{2}$",
            "2",
            "$\\sqrt{3}$"
        ],
        "correctAnswer": 2,
        "solution": "$\\sqrt{3}kx + ky = 4\\sqrt{3}$ and $\\sqrt{3}kx - ky = 4\\sqrt{3}k^{2}$. Adding equation (1) & (2), $2\\sqrt{3}kx = 4\\sqrt{3}(k^{2}+1) \\Rightarrow x = 2\\left(k+\\frac{1}{k}\\right)$. Subtracting equation (1) & (2), $y = 2\\sqrt{3}\\left(\\frac{1}{k} - k\\right)$. We have $\\frac{x}{2} = k + \\frac{1}{k}$ and $\\frac{y}{2\\sqrt{3}} = \\frac{1}{k} - k$. Squaring and subtracting gives $\\frac{x^{2}}{4} - \\frac{y^{2}}{12} = 4 \\Rightarrow \\frac{x^{2}}{16} - \\frac{y^{2}}{48} = 1$, which is a hyperbola. $\\therefore e^{2} = 1 + \\frac{48}{16} = 4 \\Rightarrow e = 2$."
    },
    // 5
    {
        "type": "mcq",
        "text": "Consider ellipses $E_{k}: kx^{2}+k^{2}y^{2}=1, k=1,2,...,20$. Let $C_{k}$ be the circle which touches the four chords joining the end points (one on minor axis and another on major axis) of the ellipse $E_{k}$. If $r_{k}$ is the radius of the circle $C_{k}$ then the value of $\\sum_{k=1}^{20}\\frac{1}{r_{k}^{2}}$ is",
        "options": [
            "2870",
            "3080",
            "3290",
            "3500"
        ],
        "correctAnswer": 1,
        "solution": "Given, $E_{k} : hx^{2} + k^{2}y^{2} = 1 \\Rightarrow E_{k} : \\frac{x^2}{(1/\\sqrt{k})^{2}} + \\frac{y^2}{(1/k)^2} = 1$. Now equation of the chord joining the points $(\\frac{1}{\\sqrt{k}},0)$ & $(0,\\frac{1}{k})$ will be $L_{k} : \\sqrt{k}x + ky - 1 = 0$. Now $r_{k} =$ Perpendicular distance of $L_{k}$ from $(0, 0)$, we get $r_{k} = \\frac{|-1|}{\\sqrt{k+k^{2}}} \\Rightarrow r_{k}^{2} = \\frac{1}{k+k^{2}}$. Now putting the value of $r_{k}^{2}$ in $\\sum_{k=1}^{20} \\frac{1}{r_{k}^{2}}$ we get $\\sum_{k=1}^{20} (k+k^{2}) = \\frac{20 \\times 21}{2} + \\frac{20 \\times 21 \\times 41}{6} = 210 + 2870 = 3080$."
    },
    // 6
    {
        "type": "mcq",
        "text": "The area (in sq. units) of the quadrilateral formed by the tangents at the end points of the latus rectum to the ellipse $\\frac{x^{2}}{9}+\\frac{y^{2}}{5}=1$ is",
        "options": [
            "27", "18", "36", "54"
        ],
        "correctAnswer": 0,
        "solution": "Equation of given ellipse is $\\frac{x^{2}}{9} + \\frac{y^{2}}{5} = 1 \\Rightarrow a^{2} = 9, b^{2} = 5$. Now, $b^{2} = a^{2}(1-e^{2}) \\Rightarrow 5 = 9(1-e^{2}) \\Rightarrow e = 2/3$. One of the end points of the latus rectum is $P(ae,b^{2}/a) \\equiv (2,5/3)$. Equation of tangent to the ellipse at $P$ is $\\frac{2x}{9} + \\frac{5y}{15} = 1 \\Rightarrow \\frac{x}{9/2} + \\frac{y}{3} = 1$. Therefore, area of quadrilateral $= 4 \\times (\\frac{1}{2}) \\times (\\frac{9}{2}) \\times (3) = 27$ sq. units."
    },
    // 7
    {
        "type": "mcq",
        "text": "Let $a$ and $b$, respectively, be the semi-transverse and semi-conjugate axes of a hyperbola whose eccentricity satisfies the equation $9e^{2}-18e+5=0$. If $S(5,0)$ is a focus and $5x=9$ is the corresponding directrix of this hyperbola, then $|a^{2}-b^{2}|=$",
        "options": [
            "5", "6", "7", "8"
        ],
        "correctAnswer": 2,
        "solution": "We have $9e^{2} - 18e + 5 = 0 \\Rightarrow (3e-1)(3e-5) = 0 \\Rightarrow e = \\frac{1}{3}, \\frac{5}{3}$. For hyperbola, $e > 1$, that is, $e = \\frac{5}{3}$. Let $P(x,y)$ be any point on the hyperbola. $PS = ePM \\Rightarrow \\sqrt{(x-5)^{2}+y^{2}} = \\frac{5}{3}|x - \\frac{9}{5}| = \\frac{1}{3}|5x - 9|$. Squaring, $(x-5)^{2} + y^{2} = \\frac{1}{9}(25x^{2} + 81 - 90x) \\Rightarrow 9x^{2} + 225 - 90x + 9y^{2} = 25x^{2} - 90x + 81 \\Rightarrow 16x^{2} - 9y^{2} = 144 \\Rightarrow \\frac{x^{2}}{9} - \\frac{y^{2}}{16} = 1$. Therefore, $a^{2} = 9$ and $b^{2} = 16$. Hence, $|a^{2} - b^{2}| = 7$."
    },
    // 8
    {
        "type": "mcq",
        "text": "The locus of the foot of perpendicular drawn from the centre of the ellipse $x^{2}+3y^{2}=6$ on any tangent to it is $(x^{2}+y^{2})^{2}=ax^{2}+by^{2}$ where $a, b\\in \\mathbb{N}$ then $a^{2}+b^{2}=$",
        "options": [
            "36", "40", "44", "48"
        ],
        "correctAnswer": 1,
        "solution": "Ellipse is $\\frac{x^{2}}{6} + \\frac{y^{2}}{2} = 1$. Equation of tangent at $P$ is $\\frac{x\\cos\\theta}{\\sqrt{6}} + \\frac{y\\sin\\theta}{\\sqrt{2}} = 1$. Equation of perpendicular from $(0,0)$ to tangent is $y = \\frac{\\sqrt{6}\\sin\\theta}{\\sqrt{2}\\cos\\theta} x = \\sqrt{3}\\tan\\theta x$. Thus $\\tan\\theta = \\frac{y}{\\sqrt{3}x}$. Let the point of intersection be $(h,k)$. Then $\\frac{h\\cos\\theta}{\\sqrt{6}} + \\frac{k\\sin\\theta}{\\sqrt{2}} = 1$ and $\\frac{k}{h} = \\frac{\\sqrt{6}\\sin\\theta}{\\sqrt{2}\\cos\\theta}$. Squaring the tangent equation gives $(x^{2}+y^{2})^{2} = 6x^{2} + 2y^{2}$. So $a=6, b=2$ and $a^{2} + b^{2} = 40$."
    },
    // 9
    {
        "type": "mcq",
        "text": "Let $A$ and $B$ be two distinct points on the parabola $y^{2}=4x$. If the axis of the parabola touches a circle of radius of one unit having $AB$ as its diameter, then the slope of the joining $A$ and $B$ can be:",
        "options": [
            "$\\pm 1$", "$\\pm \\frac{1}{2}$", "$\\pm 2$", "$\\pm \\sqrt{2}$"
        ],
        "correctAnswer": 2,
        "solution": "By solving the conditions for the circle with diameter AB touching the axis, the slope is found to be $\\pm 2$."
    },
    // 10
    {
        "type": "mcq",
        "text": "If two distinct chords of a parabola $y^{2}=4kx$ drawn from the point $(k, 2k)$ are bisected by the line $x+y-1=0$ then the length of the latus rectum can be:",
        "options": [
            "4", "3", "5", "6"
        ],
        "correctAnswer": 1,
        "solution": "Let $(\\alpha,1-\\alpha)$ be any point on the line $x+y-1=0$. The chord with mid-point $(\\alpha,1-\\alpha)$ is $S_{1}=T \\Rightarrow (1-\\alpha)^{2} - 4k\\alpha = y(1-\\alpha) - 2k(x+\\alpha)$. It passes through $(k, 2k)$: $(1-\\alpha)^{2} - 4k\\alpha = 2k(1-\\alpha) - 2k(k+\\alpha) = 2k - 2k\\alpha - 2k^{2} - 2k\\alpha \\Rightarrow (1-\\alpha)^{2} = 2k - 2k^{2} = 2k(1-k) > 0$. Since $(1-\\alpha)^{2} > 0$, we have $k(1-k) > 0 \\Rightarrow k(k-1) < 0 \\Rightarrow 0 < k < 1 \\Rightarrow 0 < 4k < 4$. Latus rectum $\\in (0,4)$. From options, only 3 is in this interval."
    }
]
};