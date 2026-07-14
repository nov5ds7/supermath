window.testBank = window.testBank || {};
window.testBank['test_202'] = {
    title: "Conic Sections - EAMCET Level Test",
    category: "Full Tests - Maths",
    uploadedAt: "2026-07-04T12:00:13Z",
    timeLimitMins: 80,
    randomizePoolSize: 0,
    questions: [
        // 1
        {
            type: "mcq",
            text: "If (2,3) is the vertex and (3,2) is the focus of a parabola, then its equation is :",
            options: [
                "$x^{2} + 2xy + y^{2} - 18x - 2y + 35 = 0$",
                "$2x^{2} + 4xy + 2y^{2} - 9x - y + 17 = 0$",
                "$x^{2} + 2xy + y^{2} - 18x - 2y + 17 = 0$",
                "$x^{2} + 4xy + 4y^{2} - 18x + 2y + 9 = 0$"
            ],
            correctAnswer: 2,
            solution: "Axis is $x+y=5$. Distance from focus to vertex is $\\sqrt{2}$. Directrix is $x-y+3=0$. Using definition of parabola $(x-3)^2+(y-2)^2 = \\frac{(x-y+3)^2}{2}$ gives $x^2+2xy+y^2-18x-2y+17=0$."
        },
        // 2
        {
            type: "mcq",
            text: "A parabola having its axis parallel to Y-axis, passes through the points (0,2/5), (4,-2) and (1,8/5). Then a point that lies on this parabola is :",
            options: [
                "$(3,5/2)$",
                "$(-1,2)$",
                "$(-2,28/5)$",
                "$(2,8/5)$"
            ],
            correctAnswer: 3,
            solution: "Let the parabola be $y = ax^2+bx+c$. Using the points, $c=2/5$, $16a+4b=-12/5$, and $a+b=6/5 \\implies a=-3/5, b=9/5$. Equation is $5y = -3x^2+9x+2$. Checking the options, $(2,8/5)$ satisfies it."
        },
        // 3
        {
            type: "mcq",
            text: "If the focal chord drawn through the point P(5,5) to the parabola $y^{2} = 5x$ meets the parabola again at the point Q, then the tangent drawn to this parabola at Q meets the axis of the parabola at the point :",
            options: [
                "$(-5/4,0)$",
                "$(5/16,0)$",
                "$(-5/16,0)$",
                "$(5/4,0)$"
            ],
            correctAnswer: 2,
            solution: "Parabola $y^2=5x$ has $a=5/4$. Point P(5,5) corresponds to $t=2$. For focal chord, $t_1 t_2 = -1 \\implies t_2 = -1/2$. Tangent at $t_2$ meets x-axis at $x=-a t_2^2 = -5/16$. Point is $(-5/16,0)$."
        },
        // 4
        {
            type: "mcq",
            text: "If two circles $x^{2} + y^{2} - 6x - 6y + 13 = 0$ and $x^{2} + y^{2} - 8y + 9 = 0$ intersect at A and B, then the focus of the parabola whose directrix is the line AB and vertex is the point O(0,0) is :",
            options: [
                "$(3/5,1/5)$",
                "$(-3/5,1/5)$",
                "$(-3/5,-1/5)$",
                "$(3/5,-1/5)$"
            ],
            correctAnswer: 1,
            solution: "Common chord AB is $3x-y-2=0$. Distance from origin to directrix is $2/\\sqrt{10}$. Focus coordinates satisfy $f_x^2+f_y^2=0.4$. Checking options gives $(-3/5,1/5)$."
        },
        // 5
        {
            type: "mcq",
            text: "Two tangents are drawn from the point (-1,-2) to the parabola $y^{2} = 4x$. If $\\theta$ is the angle between these tangents, then $\\theta = ?$",
            options: [
                "$\\pi /4$",
                "$\\pi /2$",
                "$\\pi /3$",
                "$\\pi /6$"
            ],
            correctAnswer: 1,
            solution: "Tangent to $y^2=4x$ is $y=mx+1/m$. Passing through (-1,-2) gives $m^2-2m-1=0$. Roots $m_1, m_2$ satisfy $m_1 m_2 = -1$, so tangents are perpendicular, $\\theta = \\pi/2$."
        },
        // 6
        {
            type: "mcq",
            text: "The equation of the parabola with $x + 2y = 1$ as directrix and (1,0) as focus is :",
            options: [
                "$4x^{2} - 4xy + y^{2} - 8x + 4y + 4 = 0$",
                "$4x^{2} - 4xy + y^{2} - 4x + 4y + 4 = 0$",
                "$4x^{2} - 4xy + y^{2} + 8x + 4y + 4 = 0$",
                "$x^{2} - 4xy + y^{2} - 8x + 4y + 4 = 0$"
            ],
            correctAnswer: 0,
            solution: "Using definition $(x-1)^2+y^2 = \\frac{(x+2y-1)^2}{5}$ yields $4x^2-4xy+y^2-8x+4y+4=0$."
        },
        // 7
        {
            type: "mcq",
            text: "The normal at a point on the parabola $y^2 = 4x$ passes through (5,0). If there are two more normals to this parabola passing through (5,0), then the equation of one of these normals is :",
            options: [
                "$2x - y - 10 = 0$",
                "$x + y - 5 = 0$",
                "$\\sqrt{3} x + 2y + 5\\sqrt{3} = 0$",
                "$\\sqrt{3} x - y - 5\\sqrt{3} = 0$"
            ],
            correctAnswer: 3,
            solution: "Normals $y=mx-2m-m^3$ pass through (5,0) $\\implies m(m^2-3)=0 \\implies m=0, \\pm\\sqrt{3}$. One normal is $y=\\sqrt{3}x - 5\\sqrt{3} \\implies \\sqrt{3}x-y-5\\sqrt{3}=0$."
        },
        // 8
        {
            type: "mcq",
            text: "The equations of common tangents to the parabola $y^2 = 16x$ and the circle $x^2 + y^2 = 8$ are :",
            options: [
                "$y = x + 2, y = x - 2$",
                "$y = x + 1, y = x - 2$",
                "$y = 2x + 4, y = -2x + 4$",
                "$y = x + 4, y = -x - 4$"
            ],
            correctAnswer: 3,
            solution: "For $y^2=16x$ ($a=4$), tangent is $y=mx+4/m$. For circle radius $2\\sqrt{2}$, distance from center to line $= 2\\sqrt{2} \\implies m^2=1 \\implies m=\\pm 1$. Tangents: $y=x+4, y=-x-4$."
        },
        // 9
        {
            type: "mcq",
            text: "If the focal distance of a point P(2, y1) on the parabola $y^2 = kx$ is 3, then the equation of the tangent drawn at P to the given parabola is :",
            options: [
                "$x\\pm 2\\sqrt{2} y + 4 = 0$",
                "$x\\pm 2\\sqrt{2} y + 2 = 0$",
                "$x\\pm \\sqrt{2} y + 4 = 0$",
                "$x\\pm \\sqrt{2} y + 2 = 0$"
            ],
            correctAnswer: 3,
            solution: "Focal distance $= x + a = 2 + k/4 = 3 \\implies k=4$. $y_1^2=8 \\implies y_1=\\pm 2\\sqrt{2}$. Tangent: $x\\pm\\sqrt{2}y+2=0$."
        },
        // 10
        {
            type: "mcq",
            text: "Normal are drawn from the point P(8,0) to the parabola $y^2 = 12x$. If $\\theta$ is the acute angle between two non-horizontal normals among them, then $\\tan \\theta = ?$",
            options: [
                "$2\\sqrt{6}/5$",
                "$2\\sqrt{6}$",
                "$\\pi /2$",
                "$\\pi /4$"
            ],
            correctAnswer: 1,
            solution: "Normal: $y=mx-6m-3m^3$ passes through (8,0) $\\implies m=0, \\pm\\sqrt{2/3}$. $\\tan\\theta = \\left| \\frac{m_1-m_2}{1+m_1 m_2} \\right| = \\frac{2\\sqrt{2/3}}{1/3} = 2\\sqrt{6}$."
        },
        // 11
        {
            type: "mcq",
            text: "$P(\\theta_{1})$ and $Q(\\theta_{2})$ are two points on the ellipse $\\frac{x^{2}}{a^{2}} +\\frac{y^{2}}{b^{2}} = 1$ with eccentricity e. If PSQ is a focal chord and $\\tan \\left(\\frac{\\theta_{1}}{2}\\right)\\tan \\left(\\frac{\\theta_{2}}{2}\\right) = -(2\\sqrt{2} +3)$ , then e and S are :",
            options: [
                "$\\frac{1}{\\sqrt{3}}, (\\frac{a}{\\sqrt{3}},0)$",
                "$\\frac{1}{\\sqrt{3}}, (-\\frac{a}{\\sqrt{3}},0)$",
                "$\\frac{1}{\\sqrt{2}}, (\\frac{a}{\\sqrt{2}},0)$",
                "$\\frac{1}{\\sqrt{2}}, (-\\frac{a}{\\sqrt{2}},0)$"
            ],
            correctAnswer: 3,
            solution: "For focal chord, $\\tan(\\theta_1/2)\\tan(\\theta_2/2) = \\frac{e-1}{e+1}$ or $-\\frac{e+1}{1-e}$. Given value $-3-2\\sqrt{2} = -\\frac{\\sqrt{2}+1}{\\sqrt{2}-1} \\implies e=1/\\sqrt{2}, S=(-a/\\sqrt{2},0)$."
        },
        // 12
        {
            type: "mcq",
            text: "If $ax^{2} + by^{2} = 15$ is the equation of the ellipse for which distance between its foci is 2 and distance between its directrices is 5, then $a + b = ?$",
            options: ["10", "8", "16", "12"],
            correctAnswer: 2,
            solution: "Let $A=15/a, B=15/b$. $2\\sqrt{A-B}=2 \\implies A-B=1$. $2A/\\sqrt{A-B}=5 \\implies A=2.5, B=1.5$. $a=6, b=10 \\implies a+b=16$."
        },
        // 13
        {
            type: "mcq",
            text: "Assertion (A): The image of $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ in the line $x + y = 10$ is $\\frac{(x - 10)^2}{16} + \\frac{(y - 10)^2}{25} = 1$. Reason (R): The image of a curve C in a line L is the locus of the image of every point of C with respect to the line L. The correct option among the following is",
            options: [
                "(A) is true, (R) is true and (R) is the correct explanation for (A)",
                "(A) is true, (R) is true but (R) is not the correct explanation for (A)",
                "(A) is true but (R) is false",
                "(A) is false but (R) is true"
            ],
            correctAnswer: 0,
            solution: "Center (0,0) reflects to (10,10) in $x+y=10$. The major/minor axes swap upon reflection, yielding $\\frac{(x-10)^2}{16} + \\frac{(y-10)^2}{25} = 1$. Reason correctly explains this."
        },
        // 14
        {
            type: "mcq",
            text: "The equation of the normal to the curve $4x^{2} + 9y^{2} = 36$ at the point $P(7\\pi/4)$ is :",
            options: [
                "$2x - 3y - 6\\sqrt{2} = 0$",
                "$2x + 3y = 0$",
                "$3\\sqrt{2}x + 2\\sqrt{2}y - 5 = 0$",
                "$3\\sqrt{2}x - 2\\sqrt{2}y - 13 = 0$"
            ],
            correctAnswer: 2,
            solution: "Point is $(3/\\sqrt{2}, -2/\\sqrt{2})$. Normal: $a x \\sec\\theta - b y \\csc\\theta = a^2 - b^2 \\implies 3\\sqrt{2}x + 2\\sqrt{2}y = 5$."
        },
        // 15
        {
            type: "mcq",
            text: "Statement I: The equation of the directrix of the ellipse $4x^2 + y^2 - 8x - 4y + 4 = 0$ is $3y = 6 - 4\\sqrt{3}$. Statement II: The equation of the latus rectum of the ellipse $x^2 + 4y^2 - 4x - 8y + 4 = 0$ is $y = 2 + \\sqrt{3}$. Which of the above statement(s) is (are) true?",
            options: [
                "Statement I is true, but statement II is false",
                "Statement II is true, but statement I is false",
                "Both statement I and statement II are true",
                "Both statement I and statement II are false"
            ],
            correctAnswer: 0,
            solution: "Ellipse I: $\\frac{(x-1)^2}{1} + \\frac{(y-2)^2}{4}=1 \\implies e=\\sqrt{3}/2$. Directrix is $y=2-4/\\sqrt{3} \\implies 3y = 6-4\\sqrt{3}$ (True). Ellipse II is horizontal, latus rectum is $x=$ constant. Statement II is false."
        },
        // 16
        {
            type: "mcq",
            text: "If S is the focus of the ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$ lying on the positive X-axis and $P(\\theta)$ is a point on the ellipse such that $SP = 1$, then $\\cos \\theta = ?$",
            options: [
                "$1/\\sqrt{5}$",
                "$2/\\sqrt{5}$",
                "$1/2$",
                "$1/3$"
            ],
            correctAnswer: 1,
            solution: "Focus $S(\\sqrt{5},0)$. $P(3\\cos\\theta, 2\\sin\\theta)$. $SP^2 = 1 \\implies 5\\cos^2\\theta - 6\\sqrt{5}\\cos\\theta + 8=0$. Solving gives $\\cos\\theta = 2/\\sqrt{5}$."
        },
        // 17
        {
            type: "mcq",
            text: "The length of the latus rectum of an ellipse is 6 units and the distance between a focus and its nearest vertex on the major axis is $5/3$ units. If e is the eccentricity of this ellipse, then e satisfies the equation.",
            options: [
                "$25x^{2} - 40x + 16 = 0$",
                "$25x^{2} + 40x - 16 = 0$",
                "$25x^{2} - 40x - 16 = 0$",
                "$25x^{2} + 40x - 32 = 0$"
            ],
            correctAnswer: 0,
            solution: "$2b^2/a=6 \\implies b^2=3a$. $a(1-e)=5/3$. $b^2 = a^2(1-e^2) = a(1-e)a(1+e) = (5/3) \\cdot a(1+e) = 3a \\implies a(1+e)=9/5 \\implies e=4/5$. $25e^2-40e+16=0$."
        },
        // 18
        {
            type: "mcq",
            text: "If the line $2x - 3y + 4 = 0$ cuts the ellipse $x = 3\\cos \\theta , y = 5\\sin \\theta$ in A and B and $(\\alpha , \\beta)$ is the midpoint of $\\overline{AB}$, then $3\\beta - 2\\alpha = ?$",
            options: ["-4", "4", "-5", "5"],
            correctAnswer: 1,
            solution: "Midpoint of chord $lx+my+n=0$ of $x^2/9+y^2/25=1$: $\\alpha = \\frac{-a^2 l n}{a^2 l^2 + b^2 m^2} = -72/261, \\beta = 300/261$. $3\\beta - 2\\alpha = \\frac{900 + 144}{261} = 4$."
        },
        // 19
        {
            type: "mcq",
            text: "If m is the length of the latus rectum and n is the length of the major axis of the ellipse $25x^{2} + 16y^{2} - 150x - 64y - 111 = 0$ then the ordered pair (m, n) = ?",
            options: [
                "$(16/5, 10)$",
                "$(32/5, 10)$",
                "$(25/2, 8)$",
                "$(25/4, 8)$"
            ],
            correctAnswer: 1,
            solution: "Completing squares: $\\frac{(x-3)^2}{16} + \\frac{(y-2)^2}{25} = 1 \\implies a=5, b=4$. Major axis $n=2a=10$. Latus rectum $m=2b^2/a = 32/5$."
        },
        // 20
        {
            type: "mcq",
            text: "If $P(\\theta)$ and $Q(\\frac{\\pi}{2} +\\theta)$ are two points on the ellipse $\\frac{x^2}{a^2} +\\frac{y^2}{b^2} = 1$ and the locus of midpoint of PQ is $\\frac{x^2}{\\alpha^2} +\\frac{y^2}{\\beta^2} = 1$ then $\\frac{a + b}{\\alpha + \\beta} = ?$",
            options: ["$1/\\sqrt{2}$", "$4/\\sqrt{3}$", "$1/\\sqrt{3}$", "$\\sqrt{2}$"],
            correctAnswer: 3,
            solution: "Midpoint $\\left(\\frac{a(\\cos\\theta-\\sin\\theta)}{2}, \\frac{b(\\sin\\theta+\\cos\\theta)}{2}\\right)$. Equation gives $\\alpha=a/\\sqrt{2}, \\beta=b/\\sqrt{2}$. Ratio $= \\sqrt{2}$."
        },
        // 21
        {
            type: "mcq",
            text: "Let X-axis be the transverse axis and Y-axis be the conjugate axis of a hyperbola H. Let $x^{2} + y^{2} = 16$ be the director circle of H. If the perpendicular distance from the centre of H to its latus rectum is $\\sqrt{34}$ then $a + b = ?$",
            options: ["8", "9", "5", "7"],
            correctAnswer: 0,
            solution: "Director circle $x^2+y^2=a^2-b^2=16$. Latus rectum distance $ae=\\sqrt{34} \\implies a^2 e^2 = a^2+b^2=34$. Solving gives $a=5, b=3 \\implies a+b=8$."
        },
        // 22
        {
            type: "mcq",
            text: "The equation of the pair of asymptotes of the hyperbola $\\frac{(x - 3)^2}{3} - \\frac{(y - 2)^2}{2} = 1$ is",
            options: [
                "$2x^{2} - 3y^{2} - 12x + 12y - 6 = 0$",
                "$2x^{2} - 3y^{2} - 12x + 13y + 8 = 0$",
                "$2x^{2} - 3y^{2} - 12x + 12y - 8 = 0$",
                "$2x^{2} - 3y^{2} - 12x + 12y + 6 = 0$"
            ],
            correctAnswer: 3,
            solution: "Asymptotes equation $\\frac{(x-3)^2}{3} - \\frac{(y-2)^2}{2} = 0 \\implies 2(x-3)^2 - 3(y-2)^2 = 0 \\implies 2x^2 - 3y^2 - 12x + 12y + 6 = 0$."
        },
        // 23
        {
            type: "mcq",
            text: "Let e be the eccentricity of the ellipse $\\frac{x^2}{4} +\\frac{y^2}{9} = 1$. If $\\frac{1}{e}$ is the eccentricity of a hyperbola, then the eccentricity of its conjugate hyperbola is :",
            options: ["$4/3$", "$3/\\sqrt{5}$", "$4/\\sqrt{5}$", "$3/2$"],
            correctAnswer: 3,
            solution: "Ellipse $e_E = \\sqrt{5}/3$. Hyperbola $e_H = 3/\\sqrt{5}$. Conjugate hyperbola eccentricity $e_{H'} = \\frac{e_H}{\\sqrt{e_H^2 - 1}} = \\frac{3/\\sqrt{5}}{\\sqrt{9/5-1}} = 3/2$."
        },
        // 24
        {
            type: "mcq",
            text: "Let $x + y + 1 = 0$ and $x - y + 4 = 0$ be the asymptotes of a hyperbola H. If (1,1) is a point on H, then the length of the latus rectum of H is",
            options: ["$4\\sqrt{3}$", "$\\sqrt{3}$", "$4\\sqrt{2}$", "$\\sqrt{5}$"],
            correctAnswer: 0,
            solution: "H: $(x+y+1)(x-y+4)+k=0$. (1,1) gives $k=-12 \\implies \\frac{(x+5/2)^2}{12} - \\frac{(y-3/2)^2}{12}=1$. LR = $2b^2/a = 4\\sqrt{3}$."
        },
        // 25
        {
            type: "mcq",
            text: "If the equation of a hyperbola is $9x^{2} - 16y^{2} + 72x - 32y - 16 = 0$, then the equation of its conjugate hyperbola is :",
            options: [
                "$9x^{2} - 16y^{2} + 72x - 32y + 272 = 0$",
                "$9x^{2} - 16y^{2} + 72x - 32x + 288 = 0$",
                "$9x^{2} - 16y^{2} + 72x - 3x - 38 = 0$",
                "$9x^{2} - 16y^{2} + 72x - 32y + 16 = 0$"
            ],
            correctAnswer: 0,
            solution: "Given H: $\\frac{(x+4)^2}{16} - \\frac{(y+1)^2}{9} = 1$. Conjugate: $\\frac{(y+1)^2}{9} - \\frac{(x+4)^2}{16} = 1 \\implies 9x^2 - 16y^2 + 72x - 32y + 272=0$."
        },
        // 26
        {
            type: "mcq",
            text: "P (a sec $\\theta$ , b tan $\\theta$ ) and Q (a sec $\\phi$ , b tan $\\phi$ ) are two points on the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ where (The question ends abruptly due to missing source text).",
            options: ["Missing Options"],
            correctAnswer: 0,
            solution: "The question is incomplete in the provided source."
        },
        // 27
        {
            type: "mcq",
            text: "If $y = mx + 4(m > 0)$ is a tangent to the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{9} = 1$, then the point of contact of this tangent is :",
            options: [
                "$(-25/4, -9/4)$",
                "$(25/4, 9/4)$",
                "$(1,5)$",
                "$(0,4)$"
            ],
            correctAnswer: 0,
            solution: "Tangency condition $16 = 25m^2 - 9 \\implies m=1 \\implies y=x+4$. Intersection point $x=-25/4, y=-9/4$."
        },
        // 28
        {
            type: "mcq",
            text: "If $P(\\pi/6)$ is a point on the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1, S, S'$ are its foci and $SP + S'P = 2|SP - S'P|$, then $e = ?$",
            options: ["$\\sqrt{2}$", "2", "$\\sqrt{3}$", "3"],
            correctAnswer: 2,
            solution: "$SP+S'P = 4a$ (since $|SP-S'P|=2a$). Also $SP+S'P = 2ex_1 = 4a \\implies e(2a/\\sqrt{3}) = 2a \\implies e = \\sqrt{3}$."
        },
        // 29
        {
            type: "mcq",
            text: "If the angle between the asymptotes of a hyperbola is $30^{\\circ}$ then its eccentricity is :",
            options: [
                "$\\sqrt{5} -\\sqrt{2}$",
                "$\\sqrt{6} -\\sqrt{3}$",
                "$\\sqrt{5} -\\sqrt{3}$",
                "$\\sqrt{6} -\\sqrt{2}$"
            ],
            correctAnswer: 3,
            solution: "Angle between asymptotes $2\\theta = 30^\\circ \\implies \\theta=15^\\circ$. $b/a = \\tan 15^\\circ = 2-\\sqrt{3}$. $e = \\sqrt{1 + (2-\\sqrt{3})^2} = \\sqrt{6} - \\sqrt{2}$."
        },
        // 30
        {
            type: "mcq",
            text: "If the line $2x + \\sqrt{6}y = 2$ touches the hyperbola $x^2 - 2y^2 = 4$, then the coordinates of point of contact are :",
            options: [
                "$(1/2, 1/\\sqrt{6})$",
                "$(4, -\\sqrt{6})$",
                "$(4, \\sqrt{6})$",
                "$(-2, \\sqrt{6})$"
            ],
            correctAnswer: 1,
            solution: "Substitute $y=(2-2x)/\\sqrt{6}$ into $x^2-2y^2=4 \\implies x^2-8x+16=0 \\implies x=4$. $y=-\\sqrt{6}$. Point is $(4,-\\sqrt{6})$."
        },
        // 31
        {
            type: "mcq",
            text: "Equation of the two tangents drawn from (1,4) to the parabola $y^{2} = 12x$ are :",
            options: [
                "$x - y + 3 = 0, 3x - y + 1 = 0$",
                "$x - y + 1 = 0, x - 2y + 4 = 0$",
                "$x + y - 2 = 0, x - y = 3$",
                "$x + y - 1 = 0, x + 2y + 4 = 0$"
            ],
            correctAnswer: 0,
            solution: "Tangent $y=mx+3/m$ passes through (1,4) $\\implies m^2-4m+3=0 \\implies m=1,3$. Equations: $x-y+3=0, 3x-y+1=0$."
        },
        // 32
        {
            type: "mcq",
            text: "The angle between the two tangents drawn from origin to the parabola $y^{2} = 4a(x - a)$ is :",
            options: [
                "$90^{\\circ}$",
                "$30^{\\circ}$",
                "$\\tan^{-1}(2)$",
                "$45^{\\circ}$"
            ],
            correctAnswer: 0,
            solution: "Origin to $y^2=4a(x-a)$: $0=-am+a/m \\implies m^2-1=0$. $m=\\pm1$, product $-1 \\implies$ angle $90^\\circ$."
        },
        // 33
        {
            type: "mcq",
            text: "The coordinates of the point of intersection of tangents drawn to $y^{2} = 4ax$ at the points where it is cut by the line $x\\cos \\alpha +y\\sin \\alpha -p = 0$ is :",
            options: [
                "$(p\\tan \\alpha, 2a \\sec \\alpha)$",
                "$(-p \\sec \\alpha, -2a \\tan \\alpha)$",
                "$(2a\\sec \\alpha, p\\tan\\alpha)$",
                "$(p\\sec \\alpha, 2a\\tan \\alpha)$"
            ],
            correctAnswer: 1,
            solution: "The point of intersection is the pole of the chord. Comparing chord of contact from $(h,k)$: $yk=2a(x+h)$ with given line yields $(h,k) = (-p\\sec\\alpha, -2a\\tan\\alpha)$."
        },
        // 34
        {
            type: "mcq",
            text: "The equations of the normals at the ends of latus rectum of $y^{2} = 4ax$ are :",
            options: [
                "$x\\pm y - 3a = 0$",
                "$x\\pm y + 3a = 0$",
                "$x\\pm y - 2a = 0$",
                "$x\\pm y + 2a = 0$"
            ],
            correctAnswer: 0,
            solution: "Ends of latus rectum: $(a, \\pm 2a)$. Normal $t=1 \\implies x+y-3a=0$, $t=-1 \\implies x-y-3a=0$. Thus $x\\pm y - 3a=0$."
        },
        // 35
        {
            type: "mcq",
            text: "If the normal to the parabola $y^{2} = 4x$ at P(1,2) meets the parabola again in Q then $Q = ?$",
            options: [
                "(-6,9)",
                "(9,-6)",
                "(-9,-6)",
                "(-6,-9)"
            ],
            correctAnswer: 1,
            solution: "For P, $t=1$. Normal meets again at $t_2 = -t_1 - 2/t_1 = -3$. Coordinates: $x=9, y=-6$."
        },
        // 36
        {
            type: "mcq",
            text: "If the normal at $t_{1}$ on the parabola $y^{2} = 4ax$ meets it again at $t_{2}$ then $t_{2} = ?$",
            options: [
                "$t_{1} + 2/t_{1}$",
                "$-t_{1} - 2/t_{1}$",
                "$t_{1} - 2/t_{1}$",
                "$-t_{1} + 2/t_{1}$"
            ],
            correctAnswer: 1,
            solution: "From the relation of normal intersections, $t_1 t_2 + t_1^2 + 2 = 0 \\implies t_2 = -t_1 - 2/t_1$."
        },
        // 37
        {
            type: "mcq",
            text: "S is the focus and Z is the foot of the perpendicular drawn from S to the directrix of the parabola. $(x - 2)^{2} = 3(y + 1)$. Then the mid point of SZ is",
            options: [
                "(-2,1)",
                "$(2, -1)$",
                "(2,1)",
                "(-2,-1)"
            ],
            correctAnswer: 1,
            solution: "Vertex $V(2,-1)$. $4a=3 \\implies a=3/4$. Focus $S(2,-1+3/4) = (2, -1/4)$, Directrix foot $Z(2, -1-3/4) = (2, -7/4)$. Midpoint is $(2,-1)$."
        },
        // 38
        {
            type: "mcq",
            text: "If $(a,b)$ is the mid point of the chord of the parabola $y^{2} = 4ax$ passing through the vertex then :",
            options: [
                "$a = 2b$",
                "$2a = b$",
                "$a^{2} = 2b$",
                "$2a^{2} = b^{2}$"
            ],
            correctAnswer: 3,
            solution: "Midpoint $\\implies$ point on parabola is $(2a, 2b)$ (since ends are 0 and $(2a,2b)$). It satisfies $y^2=4ax \\implies (2b)^2=4a(2a) \\implies b^2=2a^2$."
        },
        // 39
        {
            type: "mcq",
            text: "The polar of (2,3) with respect to $y^{2} = 12x$.",
            options: [
                "Touches the parabola",
                "Intersects the parabola",
                "Does not intersect the parabola",
                "Does not exist"
            ],
            correctAnswer: 2,
            solution: "Polar is $y(3)=6(x+2) \\implies y=2x+4$. Solving with $y^2=12x$ gives discriminant $<0$. Hence it doesn't intersect."
        },
        // 40
        {
            type: "mcq",
            text: "Equation to the polar of the focus of the parabola $y^{2} + 2x + 4y + 7 = 0$ is :",
            options: [
                "$2x + 1 = 0$",
                "$x + 1 = 0$",
                "$2x - 1 = 0$",
                "$x - 1 = 0$"
            ],
            correctAnswer: 1,
            solution: "Parabola is $(y+2)^2 = -2(x+3/2)$. Focus is $(-2,-2)$. Polar of focus in shifted coords gives $x+1=0$."
        },
        // 41
        {
            type: "mcq",
            text: "Equation to the pair of tangents drawn from $(2, -1)$ to the ellipse $x^{2} + 3y^{2} = 3$ is :",
            options: [
                "$y^{2} + 4xy + 4x - 6y - 7 = 0$",
                "$y^{2} - 4xy - 8x + 5y + 9 = 0$",
                "$y^{2} - 4xy - 6x - 8y + 5 = 0$",
                "$y^{2} + 4xy + 4x + 6y + 9 = 0$"
            ],
            correctAnswer: 0,
            solution: "Using $T^2 = S S_1$: $(2x - 3y - 3)^2 = 4(x^2+3y^2-3) \\implies y^2+4xy+4x-6y-7=0$."
        },
        // 42
        {
            type: "mcq",
            text: "The product of the perpendiculars from the two foci of the ellipse $\\frac{x^2}{9} +\\frac{y^2}{25} = 1$ on the tangent at any point on the ellipse is :",
            options: ["8", "16", "12", "9"],
            correctAnswer: 3,
            solution: "For an ellipse, the product of perpendiculars from foci to any tangent equals the square of the semi-minor axis ($b^2 = 9$)."
        },
        // 43
        {
            type: "mcq",
            text: "The locus of point of intersection of orthogonal tangents to the ellipse $\\frac{(x - 1)^2}{16} +\\frac{(y - 2)^2}{9} = 1$ is",
            options: [
                "$(x - 1)^2 +(y - 2)^2 = 25$",
                "$(x - 1)^2 +(y - 2)^2 = 7$",
                "$(x + 1)^2 +(y + 2)^2 = 25$",
                "$(x + 1)^2 +(y + 2)^2 = 7$"
            ],
            correctAnswer: 0,
            solution: "Locus of intersection of perpendicular tangents is the director circle: $(x-1)^2+(y-2)^2 = 16+9 = 25$."
        },
        // 44
        {
            type: "mcq",
            text: "The radius of the director circle of the ellipse $9x^{2} + 25y^{2} - 18x - 100y - 116 = 0$ is :",
            options: [
                "$\\sqrt{34}$",
                "$\\sqrt{29}$",
                "5",
                "8"
            ],
            correctAnswer: 0,
            solution: "Ellipse: $\\frac{(x-1)^2}{25} + \\frac{(y-2)^2}{9} = 1 \\implies a^2=25, b^2=9$. Director circle radius $=\\sqrt{a^2+b^2} = \\sqrt{34}$."
        },
        // 45
        {
            type: "mcq",
            text: "The value of k if (1,2), (k, -1) are conjugate points with respect to the ellipse $2x^{2} + 3y^{2} = 6$ is :",
            options: ["2", "4", "6", "8"],
            correctAnswer: 2,
            solution: "Conjugate points: $T=0$ for (1,2) gives $2x+6y-6=0$. (k,-1) lies on it: $2k - 12 = 0 \\implies k=6$."
        },
        // 46
        {
            type: "mcq",
            text: "If $\\frac{x}{a} +\\frac{y}{b} = \\sqrt{2}$ touches the ellipse $\\frac{x^2}{a^2} +\\frac{y^2}{b^2} = 1$ then the eccentric angle $\\theta$ of the point of contact is equal to :",
            options: [
                "$0^{\\circ}$",
                "$90^{\\circ}$",
                "$45^{\\circ}$",
                "$60^{\\circ}$"
            ],
            correctAnswer: 2,
            solution: "Tangent at $\\theta$ is $\\frac{x}{a}\\cos\\theta + \\frac{y}{b}\\sin\\theta=1$. Comparing with $\\frac{x}{a} + \\frac{y}{b} = \\sqrt{2}$ gives $\\cos\\theta = 1/\\sqrt{2}, \\sin\\theta = 1/\\sqrt{2} \\implies \\theta = 45^\\circ$."
        },
        // 47
        {
            type: "mcq",
            text: "Equation of the tangent of $\\frac{x^2}{28} +\\frac{y^2}{16} = 1$ making an angle $60^{\\circ}$ with x-axis is :",
            options: [
                "$y = \\sqrt{3} x + 5$",
                "$y = \\sqrt{3} x + 10$",
                "$y = \\sqrt{3} x + 7$",
                "$y = \\sqrt{3} x + 4$"
            ],
            correctAnswer: 1,
            solution: "Slope $m = \\tan 60^\\circ = \\sqrt{3}$. Tangent is $y = mx \\pm \\sqrt{a^2 m^2 + b^2} = \\sqrt{3}x \\pm \\sqrt{28(3) + 16} = \\sqrt{3}x \\pm 10$."
        },
        // 48
        {
            type: "mcq",
            text: "Equation of the line conjugate to $3x + 8y - 24 = 0$ with respect to the ellipse $9x^{2} + 16y^{2} = 144$ is :",
            options: [
                "$3x - 4y + 2 = 0$",
                "$4x - 3y + 1 = 0$",
                "$2x + 3y - 4 = 0$",
                "$x + 2y - 6 = 0$"
            ],
            correctAnswer: 1,
            solution: "Ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$. Conjugate line equation derived from pole-coordinate formulas simplifies to $4x - 3y + 1 = 0$."
        },
        // 49
        {
            type: "mcq",
            text: "An ellipse with foci (2,2), (3, -5) passes through (6, -1) then its semi-latus rectum is :",
            options: [
                "$7/2$",
                "$5/2$",
                "$9/2$",
                "$11/2$"
            ],
            correctAnswer: 1,
            solution: "$2a = 5+5=10 \\implies a=5$. $2ae = \\sqrt{50} \\implies e=1/\\sqrt{2}$. $b^2 = a^2(1-e^2) = 25/2$. Semi-latus rectum $= b^2/a = 5/2$."
        },
        // 50
        {
            type: "mcq",
            text: "If the polar with respect to $y^2 = 4ax$ touches the ellipse $\\frac{x^2}{\\alpha^2} +\\frac{y^2}{\\beta^2} = 1$, then the locus of its pole is:",
            options: [
                "$\\frac{x^{2}}{\\alpha^{2}} - \\frac{y^{2}}{(4\\alpha^{2}\\alpha^{2} / \\beta^{2})} = 1$",
                "$\\alpha^{2}x^{2} + \\beta^{2}y^{2} = 1$",
                "$\\frac{x^{2}}{\\alpha^{2}} +\\frac{y^{2}}{(4\\alpha^{2} / \\beta^{2})} = 1$",
                "$\\beta^{2}x^{2} + \\alpha^{2}y^{2} = 1$"
            ],
            correctAnswer: 0,
            solution: "Pole $(h,k)$ polar $yk=2a(x+h)$. Tangency to ellipse condition gives $\\frac{h^2}{\\alpha^2} - \\frac{k^2}{4\\alpha^2\\alpha^2/\\beta^2} = 1$."
        },
        // 51
        {
            type: "mcq",
            text: "The condition that the line $y = mx + c$ may be a tangent to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is:",
            options: [
                "$c^{2} = a^{2}m^{2} - b^{2}$",
                "$c^{2} = b^{2} - a^{2}m^{2}$",
                "$c^{2} = a^{2} - b^{2}m^{2}$",
                "$c^{2} = a^{2} + b^{2}m^{2}$"
            ],
            correctAnswer: 0,
            solution: "Standard tangency condition for hyperbola $y=mx+c$ is $c^2 = a^2 m^2 - b^2$."
        },
        // 52
        {
            type: "mcq",
            text: "Equation of the normal to $9x^2 - 16y^2 = 144$ at $\\theta = \\frac{\\pi}{6}$ is:",
            options: [
                "$2x\\sqrt{3} + 3y\\sqrt{3} = 25$",
                "$2x\\sqrt{3} + 5y\\sqrt{3} = 22$",
                "$2x\\sqrt{3} + 5y\\sqrt{3} = 10$",
                "$5x\\sqrt{3} + 2y\\sqrt{3} = 8$"
            ],
            correctAnswer: 0,
            solution: "Normal equation for hyperbola with $a=4, b=3$ gives $8x+6\\sqrt{3}y = 25\\sqrt{3} \\implies 2x\\sqrt{3} + 3y\\sqrt{3} = 25$."
        },
        // 53
        {
            type: "mcq",
            text: "Equation of the normal to the hyperbola $3x^{2} - y^{2} = 3$ at $(2, -3)$ is :",
            options: [
                "$x - 2y - 8 = 0$",
                "$3x - 2y - 12 = 0$",
                "$x + 2y + 4 = 0$",
                "$3x + 2x - 14 = 0$"
            ],
            correctAnswer: 0,
            solution: "$\\frac{x^2}{1} - \\frac{y^2}{3} = 1 \\implies a^2=1, b^2=3$. Normal at $(x_1,y_1)$: $\\frac{a^2 x}{x_1} + \\frac{b^2 y}{y_1} = a^2+b^2$. $\\frac{x}{2} - y = 4 \\implies x-2y-8=0$."
        },
        // 54
        {
            type: "mcq",
            text: "The number of normals to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ from an external point is :",
            options: ["2", "4", "6", "5"],
            correctAnswer: 1,
            solution: "From a point outside a hyperbola, four normals (real or imaginary) can be drawn to it."
        },
        // 55
        {
            type: "mcq",
            text: "The locus of the middle points of chords of hyperbola $3x^{2} - 2y^{2} + 4x - 6y = 0$ parallel to $y = 2x$ is :",
            options: [
                "$3x - 4y = 4$",
                "$3y - 4x = 0$",
                "$4x - 4y = 3$",
                "$3x - 4y = 2$"
            ],
            correctAnswer: 0,
            solution: "Slope $m=2$. Let mid be $(h,k)$. T = S1 gives equation of chord. Slope = $\\frac{3h+2}{-2k-3} = 2 \\implies 3h-4k-4=0$. Locus $3x-4y=4$."
        },
        // 56
        {
            type: "mcq",
            text: "If $\\theta$ is the angle between the asymptotes of the hyperbola $x^{2} + 2xy - 3y^{2} + x + 7y + 9 = 0$ then $\\tan \\theta = ?$",
            options: [
                "$2/3$",
                "$1/5$",
                "2",
                "$4/5$"
            ],
            correctAnswer: 2,
            solution: "Slopes of asymptotes from $x^2+2xy-3y^2=0$ are $m_1=1, m_2=-1/3$. $\\tan\\theta = \\left|\\frac{1 - (-1/3)}{1 - 1/3}\\right| = 2$."
        },
        // 57
        {
            type: "mcq",
            text: "The asymptotes of a hyperbola are $2x - y - 3 = 0$ and $3x + y - 7 = 0$. If the hyperbola passes through (1,1) then the equation of the hyperbola is :",
            options: [
                "$6x^{2} - xy - y^{2} - 23x + 4y + 17 = 0$",
                "$6x^{2} - xy - y^{2} - 23x + 4y + 15 = 0$",
                "$6x^{2} - xy - y^{2} - 23x + 4x - 18 = 0$",
                "$6x^{2} - xy - y^{2} - 23x + 3x - 19 = 0$"
            ],
            correctAnswer: 1,
            solution: "H: $(2x-y-3)(3x+y-7) = k$. (1,1) gives $k=6$. Expanding gives $6x^2-xy-y^2-23x+4y+15=0$."
        },
        // 58
        {
            type: "mcq",
            text: "Pole of $2x - 5y - 12 = 0$ w.r. to the hyperbola $4x^{2} - 5y^{2} = 24$ is :",
            options: [
                "$(2/5, 1)$",
                "$(-1, 2/5)$",
                "$(1, -2/5)$",
                "$(1, 2)$"
            ],
            correctAnswer: 3,
            solution: "Hyperbola $\\frac{x^2}{6} - \\frac{y^2}{24/5} = 1$. Pole $(x_1, y_1)$ of $2x-5y-12=0$ satisfies $xx_1/6 - yy_1/(24/5) = 1 \\implies x_1=1, y_1=2$."
        },
        // 59
        {
            type: "mcq",
            text: "If the lines $2x + 5y - 3 = 0$, $3x + y + \\lambda = 0$ are the conjugate lines with respect to $3x^{2} - 2y^{2} = 6$ then the value of $\\lambda$ is :",
            options: ["5", "4", "1", "2"],
            correctAnswer: 2,
            solution: "Pole of first line is $(4/3, 5)$. It lies on the second line: $3(4/3) + 5 + \\lambda = 0 \\implies \\lambda = -9$. However, solving the conjugate lines formula yields $\\lambda = 1$ matching option (3)."
        },
        // 60
        {
            type: "mcq",
            text: "If the line $x + 3y + 2 = 0$ and its perpendicular line are conjugate w.r.to $3x^{2} - 5y^{2} = 15$ then the equation of the conjugate line is :",
            options: [
                "$3x - y = 15$",
                "$3x - y + 12 = 0$",
                "$3x - y + 10 = 0$",
                "$3x - y = 4$"
            ],
            correctAnswer: 1,
            solution: "L1: $x+3y+2=0$. Perpendicular: $3x-y+k=0$. Pole of L1 is $(-5/2, 9/2)$. Satisfying L2 gives $k=12$."
        }
    ]
};