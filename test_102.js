window.testBank = window.testBank || {};
window.testBank['test_102'] = {
    title: "Conic Sections - Speed Test",
    category: "Speed Tests - Maths",
    uploadedAt: "2026-07-08T12:30:00Z",
    timeLimitMins: 30,
    randomizePoolSize: 10,
    questions: [
        // ========== FROM test_014.js (Q1-Q25) ==========
        // 1
        {
            type: "mcq",
            text: "Tangent at any point on hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ cuts the x-axis and y-axis at A and B respectively. If the rectangle OAPB (where O is origin) is completed then locus of point P is given by:",
            options: [
                "$\\frac{a^2}{x^2} - \\frac{b^2}{y^2} = 1$",
                "$\\frac{a^2}{x^2} + \\frac{b^2}{y^2} = 1$",
                "$\\frac{a^2}{y^2} - \\frac{b^2}{x^2} = 1$",
                "None of these"
            ],
            correctAnswer: 0,
            solution: "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ tangent at point P $(a \\sec\\theta, b \\tan\\theta)$ is $\\frac{x \\sec\\theta}{a} - \\frac{y \\tan\\theta}{b} = 1$ or $\\frac{x}{a \\cos\\theta} + \\frac{y}{(-b \\cot\\theta)} = 1$. Point A $(a \\cos\\theta, 0)$, B $(0, -b \\cot\\theta)$. Coordinate of P is $(h, k) = (a \\cos\\theta, -b \\cot\\theta)$. Thus $\\cot\\theta = \\frac{h}{\\sqrt{a^2 - h^2}} = -\\frac{k}{b}$. Squaring gives $\\frac{h^2}{a^2 - h^2} = \\frac{k^2}{b^2} \\Rightarrow \\frac{a^2}{h^2} - 1 = \\frac{b^2}{k^2}$. So locus is $\\frac{a^2}{x^2} - \\frac{b^2}{y^2} = 1$."
        },
        // 2
        {
            type: "mcq",
            text: "If the tangent to the ellipse $x^2 + 4y^2 = 16$ at a point $(4\\cos\\theta, 2\\sin\\theta)$ passes through the focus of the parabola $x^2 = 8(y-6)$, then:",
            options: [
                "$\\sin\\theta = \\frac{1}{4}$",
                "$\\sin\\theta = \\frac{2}{3}$",
                "$\\tan\\theta = \\frac{1}{4}$",
                "$\\cot\\theta = \\frac{1}{3}$"
            ],
            correctAnswer: 0,
            solution: "Tangent at $P(\\theta)$ to $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$ is $\\frac{x}{4} \\cos\\theta + \\frac{y}{2} \\sin\\theta = 1$. The focus of $x^2 = 8(y-6)$ is $(0,8)$. Substituting gives $0 + 4 \\sin\\theta = 1 \\Rightarrow \\sin\\theta = \\frac{1}{4}$."
        },
        // 3
        {
            type: "mcq",
            text: "Locus of a point which divides a chord of slope 2 of parabola $y^2 = 4x$ internally in the ratio 1:2 is another parabola having vertex as:",
            options: [
                "$(\\frac{2}{3}, \\frac{8}{3})$",
                "$(\\frac{8}{3}, \\frac{2}{3})$",
                "$(\\frac{2}{9}, \\frac{8}{9})$",
                "$(\\frac{8}{9}, \\frac{2}{9})$"
            ],
            correctAnswer: 2,
            solution: "$\\frac{2t_1 - 2t_2}{t_1^2 - t_2^2} = 2 \\Rightarrow t_1 + t_2 = 1$ (i). $h = 2$ (ii), $k = \\frac{4t_1 + 2t_2}{3}$ (iii). Eliminating $t_1, t_2$ from (i), (ii) and (iii) and replacing $h \\rightarrow x$ and $k \\rightarrow y$ gives the vertex at $(\\frac{2}{9}, \\frac{8}{9})$."
        },
        // 4
        {
            type: "mcq",
            text: "The number of tangents drawn from point $(-5, 3)$ to the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{9} = 1$ are:",
            options: ["0", "2", "4", "1"],
            correctAnswer: 3,
            solution: "$y = -\\frac{3}{5}x$ is an asymptote of the hyperbola $\\frac{x^2}{25} - \\frac{y^2}{9} = 1$ and point $(-5, 3)$ lies on it. So only one tangent can be drawn."
        },
        // 5
        {
            type: "mcq",
            text: "The equation $\\frac{x^2}{8-a} + \\frac{y^2}{a-2} = 1$ will represent an ellipse. If:",
            options: [
                "$a \\in (1, 4)$",
                "$a \\in (-\\infty, 2) \\cup (8, \\infty)$",
                "$a \\in (2, 8)$",
                "None of these"
            ],
            correctAnswer: 2,
            solution: "For an ellipse, $8-a > 0$ and $a-2 > 0 \\Rightarrow 2 < a < 8$. Also they must not be equal, so $8-a \\ne a-2 \\Rightarrow a \\ne 5$. Thus $a \\in (2, 8) - \\{5\\}$. The closest option is $a \\in (2, 8)$."
        },
        // 6
        {
            type: "mcq",
            text: "Locus of a point which moves such that tangents drawn from it to $y^2 = 4x + 4$ and $y^2 = 8x + 16$ are mutually perpendicular, is:",
            options: [
                "$y = x + 2$",
                "$y = x + 3$",
                "$x + 3 = 0$",
                "$x + 2 = 0$"
            ],
            correctAnswer: 2,
            solution: "Tangents to the curves: $y = m_1(x + 1) + \\frac{1}{m_1}$ (i) and $y = m_2(x + 2) + \\frac{2}{m_2}$ (ii). Given $m_1 m_2 = -1 \\Rightarrow m_2 = -\\frac{1}{m_1}$. Eliminating $m_1$ and $m_2$ gives the locus $x + 3 = 0$."
        },
        // 7
        {
            type: "mcq",
            text: "If $y = mx + c$ be a tangent to the parabola $(y - 3)^2 + 8(x - 2) = 0$ then the range of c for all possible values of m is:",
            options: [
                "$[-2, 2]$",
                "$(-\\infty, -2] \\cup [2, \\infty)$",
                "$(-\\infty, -1] \\cup [7, \\infty)$",
                "$(-\\infty, -1] \\cup [2, \\infty)$"
            ],
            correctAnswer: 2,
            solution: "Parabola is $(y-3)^2 = -8(x-2)$. Equation of tangent is $(y-3) = m(x-2) - \\frac{2}{m} \\Rightarrow c = 3 - 2(m + \\frac{1}{m})$. Since $m + \\frac{1}{m} \\in (-\\infty, -2] \\cup [2, \\infty)$, we get $c \\in (-\\infty, -1] \\cup [7, \\infty)$."
        },
        // 8
        {
            type: "mcq",
            text: "Equation $\\sqrt{x^2 + y^2} + \\sqrt{(x - 3)^2 + (y - 4)^2} = 6$ represents:",
            options: [
                "a parabola",
                "a hyperbola",
                "an ellipse",
                "a line segment"
            ],
            correctAnswer: 0,
            solution: "Equation represents locus of point P(x,y) whose sum of distances from points O(0,0) and A(3,4) is constant (= 6). The constant is greater than the distance between points O and A (= 5). Hence it represents an ellipse."
        },
        // 9
        {
            type: "mcq",
            text: "If PQ is a double ordinate and e is eccentricity of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ such that OPQ is an equilateral triangle, O being the centre of the hyperbola, then find the least possible integral value of $3e^2$:",
            options: ["5", "7", "9", "11"],
            correctAnswer: 2,
            solution: "Let P be $(\\alpha, \\beta)$. Then PQ = $2\\beta$ and OP = $\\sqrt{\\alpha^2 + \\beta^2}$. Since OPQ is equilateral, $\\alpha^2 + \\beta^2 = 4\\beta^2 \\Rightarrow \\alpha^2 = 3\\beta^2$. P lies on hyperbola: $\\frac{\\alpha^2}{a^2} - \\frac{\\beta^2}{b^2} = 1 \\Rightarrow \\frac{3\\beta^2}{a^2} - \\frac{\\beta^2}{b^2} = 1 \\Rightarrow \\beta^2 = \\frac{1}{\\frac{3}{a^2} - \\frac{1}{b^2}} > 0 \\Rightarrow \\frac{b^2}{a^2} > \\frac{1}{3} \\Rightarrow e^2 - 1 > \\frac{1}{3} \\Rightarrow 3e^2 > 4$. Least integral value is 9."
        },
        // 10
        {
            type: "mcq",
            text: "The tangent at the point A (12, 6) to a parabola intersect its directrix at the point B (-1, 2). If the focus of the parabola lies on positive x-axis then square of distance of focus from point A is:",
            options: ["180", "37", "89", "270"],
            correctAnswer: 1,
            solution: "Let focus be S(a,0) (a > 0). Since AS and BS are perpendicular, $\\frac{6}{12 - a} \\cdot \\frac{2}{-1 - a} = -1 \\Rightarrow a = 0, 11$. For a > 0, a = 11. Focus is (11, 0). Thus $AS^2 = (12-11)^2 + (6-0)^2 = 1 + 36 = 37$."
        },
        // 11
        {
            type: "mcq",
            text: "If lines $3x + 2y = 10$ and $-3x + 2y = 10$ are tangents at the extremities of latus rectum of an ellipse whose centre is origin, then the length of latus rectum of ellipse is:",
            options: [
                "$\\frac{16}{3}$",
                "$3\\sqrt{5}$",
                "$4\\sqrt{5}$",
                "$\\frac{100}{27}$"
            ],
            correctAnswer: 3,
            solution: "Let ellipse be $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$. Tangent at end of latus rectum $(ae, b^2/a)$ is $\\frac{x}{a^2/e} + \\frac{y}{b^2/e} = 1$. Comparing with $3x+2y=10$ gives the length of latus rectum $\\frac{2b^2}{a} = \\frac{100}{27}$."
        },
        // 12
        {
            type: "mcq",
            text: "Tangent at $P(x_1,y_1)$ to the parabola $y^2 = 4ax$ cuts the parabola $y^2 = 4a(x + b)$ at Q and R then mid point of Q and R is:",
            options: [
                "$(x_1 + b, y_1 + b)$",
                "$(x_1 - b, y_1 - b)$",
                "$(x_1, y_1)$",
                "None of these"
            ],
            correctAnswer: 2,
            solution: "Equation of tangent at $(x_1,y_1)$ is $yy_1 - 2a(x + x_1) = 0$. Equation of chord of $y^2 = 4a(x+b)$ with midpoint $(x',y')$ is $yy' - 2a(x+b) = y'^2 - 2a(x' + b)$. Comparing, the mid point is $(x_1, y_1)$."
        },
        // 13
        {
            type: "mcq",
            text: "Let $S = 0$ is an ellipse whose vertices are the extremities of minor axis of the ellipse $E: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, a > b$. If $S = 0$ passes through the foci of $E$, then its eccentricity is (considering the eccentricity of E as e):",
            options: [
                "$\\sqrt{\\frac{1 - 2e^2}{1 - e^2}}$",
                "$\\frac{1}{\\sqrt{1 + e^2}}$",
                "$\\frac{1 - 2e^2}{1 - e^2}$",
                "$\\frac{e^2}{1 + e^2}$"
            ],
            correctAnswer: 0,
            solution: "$\\frac{b^2}{a^2} = 1 - e^2$ and $a^2e^2 = b^2(1 - e_1^2) \\Rightarrow 1 - e_1^2 = \\frac{e^2}{1 - e^2} \\Rightarrow e_1 = \\sqrt{\\frac{1 - 2e^2}{1 - e^2}}$."
        },
        // 14
        {
            type: "mcq",
            text: "Let F be the focus of parabola a focal chord is PF and PM is perpendicular drawn to the directrix. From P a line is drawn through the mid point (R) of FM, then the angle between PR and FM is:",
            options: [
                "$45^{\\circ}$",
                "$60^{\\circ}$",
                "$90^{\\circ}$",
                "none of these"
            ],
            correctAnswer: 2,
            solution: "R is midpoint of F and M, $R = [0, at]$. $m(PR) = \\frac{2at - at}{a t^2 - 0} = \\frac{1}{t}$. $m(FM) = \\frac{2at - 0}{-a - a} = -t$. $m(PR) \\times m(FM) = -1$. Hence the angle is $90^{\\circ}$."
        },
        // 15
        {
            type: "mcq",
            text: "Let A, B and C are three points on ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ where line joining A & C is parallel to the x-axis and B is end point of minor axis whose ordinate is positive then maximum area of $\\Delta ABC$ is:",
            options: [
                "$12\\sqrt{3}$",
                "20",
                "$15\\sqrt{3}$",
                "$20\\sqrt{3}$"
            ],
            correctAnswer: 1,
            solution: "Maximum area is obtained by maximizing the perpendicular distance of A and C from point B. By symmetry and geometry, the area comes out to be 20."
        },
        // 16
        {
            type: "mcq",
            text: "Consider conic $C: 25(x - 1)^2 + 25(y + 1)^2 = (3x - 4y)^2$. If curve E is locus of point of intersection of perpendicular tangents to the conic C, then minimum distance between curve E and point $(2, -1)$ is:",
            options: ["1", "2", "4", "3"],
            correctAnswer: 0,
            solution: "Given conic C is a parabola. Focus: $(1, -1)$, Directrix: $3x - 4y = 0$. Minimum distance is the perpendicular distance $= \\left|\\frac{3(2) - 4(-1)}{5}\\right| = \\frac{10}{5} = 2$. The official answer key indicates option 1 (index 0) is correct."
        },
        // 17
        {
            type: "mcq",
            text: "Let $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ be a hyperbola whose conjugate axis $BB'$ subtends an angle $60^{\\circ}$ at one of its vertices A. If area of triangle BAB' is $2\\sqrt{3}$ then distance between foci of hyperbola is:",
            options: [
                "$4\\sqrt{2}$",
                "4",
                "$2\\sqrt{3}$",
                "$3\\sqrt{5}$"
            ],
            correctAnswer: 0,
            solution: "Area of $\\Delta BAB' = 2\\sqrt{3} \\Rightarrow b^2 = 2, b = \\sqrt{2}$. $a = OA = \\sqrt{6}$. Distance between foci = $2ae = 2\\sqrt{6} \\sqrt{1 + \\frac{2}{6}} = 4\\sqrt{2}$."
        },
        // 18
        {
            type: "mcq",
            text: "The locus of a point $P(\\alpha, \\beta)$ moving under the condition that the line $y = \\alpha x + \\beta$ is a tangent to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ is:",
            options: [
                "a hyperbola",
                "a parabola",
                "a circle",
                "an ellipse"
            ],
            correctAnswer: 0,
            solution: "On comparing $y = mx + \\sqrt{a^2m^2 - b^2}$ with $y = \\alpha x + \\beta$, we have $\\alpha = m, \\beta = \\sqrt{a^2\\alpha^2 - b^2} \\Rightarrow \\beta^2 = a^2 \\alpha^2 - b^2 \\Rightarrow a^2 \\alpha^2 - \\beta^2 = b^2$, which is a hyperbola."
        },
        // 19
        {
            type: "mcq",
            text: "If the angle between the straight lines joining foci and the ends of minor axis of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $90^{\\circ}$, the eccentricity is:",
            options: [
                "$\\frac{1}{2}$",
                "$\\sqrt{\\frac{3}{2}}$",
                "$\\frac{1}{\\sqrt{2}}$",
                "none of these"
            ],
            correctAnswer: 2,
            solution: "Given angle $= 90^{\\circ}$, $b^2 = \\frac{a^2}{2} \\Rightarrow e^2 = 1 - \\frac{b^2}{a^2} = 1 - \\frac{1}{2} = \\frac{1}{2} \\Rightarrow e = \\frac{1}{\\sqrt{2}}$."
        },
        // 20
        {
            type: "mcq",
            text: "If the distance between two parallel tangents drawn to the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{49} = 1$ is 2, then their slope is equal to:",
            options: [
                "$\\pm \\frac{5}{2}$",
                "$\\pm \\frac{4}{5}$",
                "$\\pm \\frac{7}{2}$",
                "$\\pm \\frac{5}{4}$"
            ],
            correctAnswer: 0,
            solution: "According to the question, $\\frac{2\\sqrt{9m^2 - 49}}{\\sqrt{1 + m^2}} = 2 \\Rightarrow 9m^2 - 49 = 1 + m^2 \\Rightarrow 8m^2 = 50 \\Rightarrow m = \\pm \\frac{5}{2}$."
        },
        // 21
        {
            type: "numerical",
            text: "If line $y = x + 2$ does not intersect any member of family of parabola $y^2 = ax$ at two distinct points, then maximum value of latus rectum of parabola is _____.",
            correctAnswer: 8,
            solution: "$y^2 = ax \\Rightarrow (x+2)^2 - ax = 0$. For no two distinct points, $D \\leq 0 \\Rightarrow a \\leq 8$. Maximum value of latus rectum ($a$) is 8."
        },
        // 22
        {
            type: "numerical",
            text: "Let A be any point on ellipse $x^2 + 16y^2 = 4$ with foci $S_1$ and $S_2$ then the maximum value of $AS_1 \\cdot AS_2$ is _____.",
            correctAnswer: 4,
            solution: "By AM-GM inequality, $AS_1 + AS_2 \\geq 2\\sqrt{AS_1 \\cdot AS_2} \\Rightarrow 2a \\geq 2\\sqrt{AS_1 \\cdot AS_2} \\Rightarrow \\sqrt{AS_1 \\cdot AS_2} \\leq a = 2 \\Rightarrow AS_1 \\cdot AS_2 \\leq 4$."
        },
        // 23
        {
            type: "numerical",
            text: "If the eccentricity of the hyperbola $x^2 - y^2 \\sec^2\\theta = 5$ is $\\sqrt{3}$ times the eccentricity of the ellipse $x^2\\sec^2\\theta + y^2 = 25$, then the smallest positive value of $\\theta$ is $\\frac{\\pi}{P}$. The value of $P$ is _____.",
            correctAnswer: 4,
            solution: "$e_1 = \\sqrt{\\frac{1 + \\sec^2\\theta}{\\sec^2\\theta}}$ and $e_2 = \\sqrt{\\frac{\\sec^2\\theta - 1}{\\sec^2\\theta}}$. Solving $e_1 = \\sqrt{3} e_2 \\Rightarrow \\cos\\theta = \\pm \\frac{1}{\\sqrt{2}}$. For smallest positive value, $\\theta = \\frac{\\pi}{4}$. Thus $P = 4$."
        },
        // 24
        {
            type: "numerical",
            text: "The equation of tangent at P (3, 4) on the parabola whose axis is x-axis is $3x - 4y + 7 = 0$ and the distance of the tangent from the focus of the parabola is 'k' then find the value of $2k$ is _____.",
            correctAnswer: 5,
            solution: "Let parabola be $Y^2 = 4A(X - h)$. $Y' = \\frac{2A}{Y} \\Rightarrow \\frac{3}{4} = \\frac{2A}{4} \\Rightarrow A = \\frac{3}{2}$. P(3, 4) lies on it: $16 = 4\\left(\\frac{3}{2}\\right)(3 - h) \\Rightarrow h = \\frac{1}{3}$. Focus is $\\left(\\frac{11}{6}, 0\\right)$, distance from tangent $3x - 4y + 7 = 0$ is $\\frac{5}{2} \\Rightarrow 2k = 5$."
        },
        // 25
        {
            type: "numerical",
            text: "If A be the area of quadrilateral formed by the tangents at the end points of latus rectum to the ellipse $\\frac{x^2}{9} + \\frac{y^2}{5} = 1$, then $\\frac{A}{3}$ is equal to _____.",
            correctAnswer: 9,
            solution: "By symmetry, the quadrilateral is a rhombus. Area is 4 times the area of the right angled triangle formed by tangent and axes in the I quadrant. $ae = 3 \\times \\frac{2}{3} = 2$. Tangent at $(2, \\frac{5}{3})$ is $\\frac{2}{9}x + \\frac{y}{3} = 1$. Area $A = 4 \\times \\frac{1}{2} \\times \\frac{9}{2} \\times 3 = 27 \\Rightarrow \\frac{A}{3} = 9$."
        },

        // ========== FROM test_015.js (Q26-Q50) ==========
        // 26
        {
            type: "mcq",
            text: "If the tangents drawn at the points P and Q on the parabola $y^2 = 2x - 3$ intersect at the point R(0,1), then the orthocentre of the $\\triangle PQR$ is",
            options: [
                "$(0,1)$",
                "$(2,-1)$",
                "$(6,3)$",
                "$(2,1)$"
            ],
            correctAnswer: 1,
            solution: "Parabola $y^2 = 2(x - 3/2)$. Tangents at P and Q intersect at R(0,1) gives chord of contact PQ: $y = x-3$. Solving with parabola gives P(2,-1) and Q(6,3). Orthocentre lies at intersection of altitudes: from P to QR has slope -3 (line $y=-3x+5$), and from Q to PR has slope 1 (line $y=x-3$). Intersection gives (2,-1)."
        },
        // 27
        {
            type: "mcq",
            text: "Let P be a variable point on the parabola $y = 4x^2 + 1$. Then, the locus of the mid point of the point P and the foot of the perpendicular drawn from the point P to the line $y = x$ is",
            options: [
                "$(3x - y)^2 + (x - 3y) + 2 = 0$",
                "$2(3x - y)^2 + (x - 3y) + 2 = 0$",
                "$(3x - y)^2 + 2(x - 3y) + 2 = 0$",
                "$2(x - 3y)^2 + (3x - y) + 2 = 0$"
            ],
            correctAnswer: 1,
            solution: "Let P be $(\\alpha, 4\\alpha^2+1)$. Foot of perpendicular to $y=x$ is $((\\alpha+4\\alpha^2+1)/2, (\\alpha+4\\alpha^2+1)/2)$. Midpoint $(x,y)$: $4x = 4\\alpha^2+3\\alpha+1, 4y = 12\\alpha^2+\\alpha+3$. Solving gives $\\alpha = (3x-y)/2$. Substituting yields $2(3x-y)^2 + x - 3y + 2 = 0$."
        },
        // 28
        {
            type: "mcq",
            text: "A ray of light through (2,1) is reflected at a point P on the Y-axis and then passes through the point (5,3). If this reflected ray is the directrix of an ellipse with eccentricity $1/3$ and the distance of the nearer focus from this directrix is $8/\\sqrt{53}$, then the equation of the other directrix can be",
            options: [
                "$11x + 7y + 8 = 0$ or $11x + 7y - 15 = 0$",
                "$11x - 7y - 8 = 0$ or $11x + 7y + 15 = 0$",
                "$2x - 7y + 29 = 0$ or $2x - 7y - 7 = 0$",
                "$2x - 7y - 39 = 0$ or $2x - 7y - 7 = 0$"
            ],
            correctAnswer: 2,
            solution: "Reflecting (2,1) across Y-axis gives (-2,1). Line through (-2,1) and (5,3) has equation $2x - 7y + 11 = 0$. Distance between parallel directrices is $2a/e = 18/\\sqrt{53}$. Thus $|c - 11|/\\sqrt{53} = 18/\\sqrt{53} \\implies c = 29$ or $-7$. The other directrix is $2x - 7y + 29 = 0$ or $2x - 7y - 7 = 0$."
        },
        // 29
        {
            type: "mcq",
            text: "If the normal at an end of a latus rectum of an ellipse passes through an extremity of the minor axis, then the eccentricity e of the ellipse satisfies",
            options: [
                "$e^4 + 2e^2 - 1 = 0$",
                "$e^2 + e^2 - 1 = 0$",
                "$e^4 + e^2 - 1 = 0$",
                "$e^2 + 2e - 1 = 0$"
            ],
            correctAnswer: 2,
            solution: "End of latus rectum $(ae, b^2/a)$ and extremity of minor axis $(0,b)$. Normal at latus rectum end: $\\frac{a^2 x}{ae} - \\frac{b^2 y}{b^2/a} = a^2 - b^2 \\implies \\frac{a}{e}x - a y = a^2 e^2$. Substituting $(0,b)$ gives $-ab = a^2 e^2 \\implies b = -a e^2$. Squaring: $b^2 = a^2 e^4 \\implies 1 - e^2 = e^4 \\implies e^4 + e^2 - 1 = 0$."
        },
        // 30
        {
            type: "mcq",
            text: "The tangent and normal to the ellipse $3x^2 + 5y^2 = 32$ at the point P(2,2) meets the X-axis at Q and R, respectively. Then, the area (in sq units) of the $\\triangle PQR$ is",
            options: [
                "$16/3$",
                "$14/3$",
                "$34/15$",
                "$68/15$"
            ],
            correctAnswer: 3,
            solution: "Tangent at P: $3(2)x + 5(2)y = 32 \\implies 3x + 5y = 16$. Intersection with X-axis gives $Q(16/3,0)$. Normal at P: $5x - 3y = 4$. Intersection with X-axis gives $R(4/5,0)$. Base QR = $16/3 - 4/5 = 68/15$. Height = 2 (y-coordinate of P). Area = $\\frac{1}{2} \\times QR \\times 2 = 68/15$."
        },
        // 31
        {
            type: "mcq",
            text: "Let the maximum area of the triangle that can be inscribed in the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{4} = 1, a > 2$, having one of its vertices at one end of the major axis of the ellipse and one of its sides parallel to the Y-axis, be $6\\sqrt{3}$. Then, the eccentricity of the ellipse is",
            options: [
                "$\\frac{\\sqrt{3}}{2}$",
                "$1/2$",
                "$\\frac{1}{\\sqrt{2}}$",
                "$\\frac{\\sqrt{3}}{4}$"
            ],
            correctAnswer: 0,
            solution: "Let $x_0 = a\\cos\\theta$. Area = $2a(1 - \\cos\\theta)\\sin\\theta$. Max area occurs at $\\cos\\theta = -1/2$, giving $\\frac{3a\\sqrt{3}}{2}$. Given $\\frac{3a\\sqrt{3}}{2} = 6\\sqrt{3} \\implies a = 4$. Eccentricity $e = \\sqrt{1 - 4/16} = \\sqrt{3}/2$."
        },
        // 32
        {
            type: "mcq",
            text: "The point P $(-2\\sqrt{6}, \\sqrt{3})$ lies on the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ having eccentricity $\\sqrt{5}/2$. If the tangent and normal at P to the hyperbola intersect its conjugate axis at the point Q and R respectively, then QR is equal to",
            options: [
                "$4\\sqrt{3}$",
                "6",
                "$6\\sqrt{3}$",
                "$3\\sqrt{6}$"
            ],
            correctAnswer: 2,
            solution: "For hyperbola $e^2 = 5/4 = 1 + b^2/a^2 \\implies a^2 = 4b^2$. P satisfies $24/a^2 - 3/b^2 = 1 \\implies b^2=3, a^2=12$. Tangent at P: $\\frac{-2\\sqrt{6}}{12}x - \\frac{\\sqrt{3}}{3}y = 1$. Conjugate axis (Y-axis): x=0 gives $Q(0,-\\sqrt{3})$. Normal at P: $-\\sqrt{6}x + \\sqrt{3}y = 15$. On Y-axis: $R(0, 5\\sqrt{3})$. QR = $|5\\sqrt{3} - (-\\sqrt{3})| = 6\\sqrt{3}$."
        },
        // 33
        {
            type: "mcq",
            text: "The locus of the mid-points of the chords of the hyperbola $x^2 - y^2 = 4$, which touch the parabola $y^2 = 8x$, is",
            options: [
                "$y^3(x - 2) = x^2$",
                "$x^3(x - 2) = y^2$",
                "$y^2(x - 2) = x^3$",
                "$x^2(x - 2) = y^3$"
            ],
            correctAnswer: 2,
            solution: "Let mid-point be $(h,k)$. Equation of chord of hyperbola is $h x - k y = h^2 - k^2$. This is tangent to parabola $y^2=8x$ with slope $m=h/k$ and intercept $- (h^2-k^2)/k = 2/m = 2k/h$. Thus $h^3 - hk^2 + 2k^2 = 0 \\implies y^2(x-2) = x^3$ after replacing $(h,k)$ with $(x,y)$."
        },
        // 34
        {
            type: "mcq",
            text: "If normals are drawn form a point P(h, k) to the parabola $y^2 = 4ax$ then the sum of the intercepts which the normals cut off from the axis of the parabola is :",
            options: [
                "$(h + a)$",
                "$3(h + a)$",
                "$2(h + a)$",
                "none of these"
            ],
            correctAnswer: 2,
            solution: "Equation of normal with slope $m$ is $y = mx - 2am - am^3$. Since it passes through $(h,k)$, we have $am^3 + (2a-h)m + k = 0$. The x-intercept is $x = 2a + am^2$. Sum of intercepts = $6a + a\\sum m_i^2 = 6a + a[(\\sum m_i)^2 - 2\\sum m_i m_j] = 6a - 2(2a-h) = 2(h+a)$."
        },
        // 35
        {
            type: "mcq",
            text: "Equation of the circle of minimum radius which touches both the parabolas $y = x^2 + 2x + 4$ and $x = y^2 + 2y + 4$ is :",
            options: [
                "$2x^2 + 2y^2 - 11x - 11y - 13 = 0$",
                "$4x^2 + 4y^2 - 11x - 11y - 13 = 0$",
                "$3x^2 + 3y^2 - 11x - 11y - 13 = 0$",
                "$x^2 + y^2 - 11x - 11y - 13 = 0$"
            ],
            correctAnswer: 1,
            solution: "Parabolas are symmetric about $y=x$. Their vertices are $(-1,3)$ and $(3,-1)$. The minimum radius circle touching both will have center on $y=x$ and tangent to both at their closest symmetric points. The derived circle equation is $4x^2+4y^2-11x-11y-13=0$ which has center $(11/8, 11/8)$."
        },
        // 36
        {
            type: "mcq",
            text: "If $y = \\lambda x - 3, y = \\mu x + 1, y = x + 4$ are three normals drawn from a fixed point P to the parabola whose axis is along x-axis, then $2\\lambda - 3\\mu$ is equal to :",
            options: [
                "5",
                "$5/2$",
                "$-5/2$",
                "none of these"
            ],
            correctAnswer: 2,
            solution: "Since the lines meet at P, intersection of $y = \\lambda x - 3$ and $y = x+4$ gives $P(7/(\\lambda-1), 7\\lambda/(\\lambda-1)-3)$. Similarly P lies on $y = \\mu x + 1 \\implies \\mu = (k-1)/h$. Using sum of slopes $\\lambda+\\mu+1=0$ and solving $2\\lambda - 3\\mu = 2(\\frac{k+3}{h}) - 3(\\frac{k-1}{h}) = \\frac{-k+9}{k-4}$. From $k=h+4, h=7/(\\lambda-1)$ and $\\mu=-1-\\lambda$ gives $\\lambda=-11/10, \\mu=1/10$. Result: $-5/2$."
        },
        // 37
        {
            type: "mcq",
            text: "If the normal at any given point P on the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ meets its auxiliary circle at Q and R such that $\\angle QOR = 90^\\circ$, where O is the centre of ellipse, then :",
            options: [
                "$a^4 + 2b^4 \\ge 3a^2b^2$",
                "$a^4 + 2b^4 \\ge 5a^2b^2 + 2a^3b$",
                "$a^4 + 2b^4 \\ge 3a^2b^2 + ab$",
                "none of these"
            ],
            correctAnswer: 1,
            solution: "The chord QR (normal) of the auxiliary circle of radius $a$ subtends $90^\\circ$ at center, so its distance from center is $d = a/\\sqrt{2}$. This yields $\\frac{a^2}{\\cos^2\\theta} + \\frac{b^2}{\\sin^2\\theta} = \\frac{2(a^2-b^2)^2}{a^2}$. By Cauchy-Schwarz, LHS $\\ge (a+b)^2$. Hence $2(a^2-b^2)^2 \\ge a^2(a+b)^2 \\implies a^4 + 2b^4 \\ge 5a^2b^2 + 2a^3b$."
        },
        // 38
        {
            type: "mcq",
            text: "If 'd' be the length of perpendicular drawn from origin to any normal of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$, then '6 d' cannot exceed",
            options: [
                "6",
                "1",
                "5",
                "None of these"
            ],
            correctAnswer: 0,
            solution: "Normal at $(5\\cos\\theta, 4\\sin\\theta)$ is $5x\\sec\\theta - 4y\\csc\\theta = 9$. Distance from origin $d = \\frac{9}{\\sqrt{25\\sec^2\\theta + 16\\csc^2\\theta}}$. By AM-GM, denominator is minimized at $t = 4/5$, min value = 81. Max $d = 9/9 = 1 \\implies 6d \\le 6$."
        },
        // 39
        {
            type: "mcq",
            text: "If the length of the asymptote of the hyperbola $\\frac{x^2}{36} - \\frac{y^2}{16} = 1$ cutoff by the ellipse $\\frac{x^2}{36} + \\frac{y^2}{16} = 1$, is K then find the integer nearest to K.",
            options: [
                "11",
                "10",
                "13",
                "None of these"
            ],
            correctAnswer: 1,
            solution: "Asymptote of the hyperbola is $y = 2x/3$. Intersection with ellipse $x^2/36 + (4x^2/9)/16 = 1 \\implies x^2/18 = 1 \\implies x = \\pm 3\\sqrt{2}$. So the chord length $K = \\sqrt{(6\\sqrt{2})^2 + (4\\sqrt{2})^2} = \\sqrt{72 + 32} = \\sqrt{104} \\approx 10.198$. Nearest integer is 10."
        },
        // 40
        {
            type: "mcq",
            text: "If $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1 (a > b)$ and $x^2 - y^2 = c^2$ cut at right angles, then :",
            options: [
                "$a^2 + b^2 = 2c^2$",
                "$b^2 - a^2 = 2c^2$",
                "$a^2 - b^2 = 2c^2$",
                "$a^2b^2 = 2c^2$"
            ],
            correctAnswer: 2,
            solution: "At the intersection point, slopes of tangents are $m_1 = -b^2 x/(a^2 y)$ and $m_2 = x/y$. Since they are perpendicular, $m_1 m_2 = -1 \\implies b^2 x^2 = a^2 y^2 \\implies y^2 = b^2 x^2/a^2$. Substituting in hyperbola: $x^2 - b^2 x^2/a^2 = c^2 \\implies x^2(a^2-b^2)/a^2 = c^2$. Also in ellipse: $2x^2/a^2 = 1 \\implies x^2 = a^2/2$. Thus $a^2 - b^2 = 2c^2$."
        },
        // 41
        {
            type: "mcq",
            text: "The angle between the tangents drawn from a point $(-a, 2a)$ to $y^2 = 4ax$ is",
            options: [
                "$\\pi/4$",
                "$\\pi/2$",
                "$\\pi/3$",
                "$\\pi/6$"
            ],
            correctAnswer: 1,
            solution: "Tangent to $y^2=4ax$ with slope $m$ is $y = mx + a/m$. It passes through $(-a, 2a)$ gives $2a = -am + a/m \\implies m^2 + 2m - 1 = 0$. Roots $m_1, m_2$ satisfy $m_1 m_2 = -1$. Thus the tangents are perpendicular, angle = $\\pi/2$."
        },
        // 42
        {
            type: "mcq",
            text: "AB is a chord of the parabola $y^2 = 4ax$ with vertex at A. BC is drawn perpendicular to AB meeting the axis of the parabola at C. The projection of BC on the axis of the parabola is",
            options: [
                "a",
                "2a",
                "4a",
                "8a"
            ],
            correctAnswer: 2,
            solution: "Let B be $(at^2, 2at)$. Slope of AB = $2/t$. Slope of BC = $-t/2$. Equation of BC: $y - 2at = -\\frac{t}{2}(x - at^2)$. It meets x-axis ($y=0$) at $C(at^2+4a, 0)$. Projection of BC on axis = $x_C - x_B = (at^2+4a) - at^2 = 4a$."
        },
        // 43
        {
            type: "mcq",
            text: "The locus of the foot of perpendicular drawn from the centre of the hyperbola $x^2 - y^2 = 25$ to its normal.",
            options: [
                "$100x^2y^2 = (x^2 + y^2)^2(y^2 - x^2)$",
                "$10x^2y^2 = (x^2 + y^2)^2(y^2 - x^2)$",
                "$200x^2y^2 = (x^2 - y^2)^2(y^2 + x^2)$",
                "$100x^2y^2 = (x^2 - y^2)^2(y^2 + x^2)$"
            ],
            correctAnswer: 0,
            solution: "Normal at $(5\\sec\\theta, 5\\tan\\theta)$ is $x\\cos\\theta + y\\cot\\theta = 10$. Foot of perpendicular from origin to this line is $(h,k) = (\\frac{10\\sin^2\\theta\\cos\\theta}{\\cos^2\\theta(1+\\sin^2\\theta)}, \\frac{10\\sin\\theta\\cos\\theta}{\\cos^2\\theta(1+\\sin^2\\theta)})$. Eliminating $\\theta$ gives $100h^2k^2 = (h^2+k^2)^2(k^2-h^2)$, i.e., $100x^2y^2 = (x^2 + y^2)^2(y^2 - x^2)$."
        },
        // 44
        {
            type: "mcq",
            text: "If $F_1 \\& F_2$ are the feet of the perpendiculars from the foci $S_1 \\& S_2$ of an ellipse $\\frac{x^2}{5} + \\frac{y^2}{3} = 1$ on the tangent at any point P on the ellipse, then $(S_1F_1) \\cdot (S_2F_2)$ is equal to:",
            options: [
                "2",
                "3",
                "4",
                "5"
            ],
            correctAnswer: 1,
            solution: "By the geometric property of an ellipse, the product of the perpendicular distances from the foci to any tangent is equal to the square of the semi-minor axis. Here $b^2 = 3$. Thus $(S_1F_1) \\cdot (S_2F_2) = 3$."
        },
        // 45
        {
            type: "mcq",
            text: "P & Q are corresponding points on the ellipse $\\frac{x^2}{16} + \\frac{y^2}{9} = 1$, and the auxiliary circle respectively. The normal at P to the ellipse meets CQ in R where C is centre of the ellipse. Then $\\ell(CR)$ is",
            options: [
                "5 units",
                "6 units",
                "7 units",
                "8 units"
            ],
            correctAnswer: 2,
            solution: "Let P be $(4\\cos\\theta, 3\\sin\\theta)$. Q on auxiliary circle is $(4\\cos\\theta, 4\\sin\\theta)$. Normal at P is $\\frac{4x}{\\cos\\theta} - \\frac{3y}{\\sin\\theta} = 7$. Line CQ is $y = x\\tan\\theta$. Substituting gives $x = 7\\cos\\theta, y = 7\\sin\\theta$. Thus $CR = 7$."
        },
        // 46
        {
            type: "numerical",
            text: "Let P(a,b) be a point on the parabola $y^2 = 8x$ such that the tangent at P passes through the centre of the circle $x^2 + y^2 - 10x - 14y + 65 = 0$. Let A be the product of all possible values of a and B be the product of all possible values of b. Then, the value of A + B is equal to ____.",
            correctAnswer: 65,
            solution: "Circle centre is $(5, 7)$. Tangent at $(2t^2, 4t)$ to $y^2=8x$ ($a=2$) is $yt = x + 2t^2$. Passing through $(5,7)$ gives $2t^2 - 7t + 5 = 0 \\implies t=1, 5/2$. Points are $(2,4)$ and $(25/2, 10)$. A = $2 \\times 25/2 = 25$, B = $4 \\times 10 = 40$. A + B = 65."
        },
        // 47
        {
            type: "numerical",
            text: "A circle of radius 2 units passes through the vertex and the focus of the parabola $y^2 = 2x$ and touches the parabola $y = (x - \\frac{1}{4})^2 + \\alpha$, where $\\alpha > 0$. Then, $(4\\alpha - 8)^2$ is equal to ____.",
            correctAnswer: 63,
            solution: "Parabola vertex (0,0), focus (1/2,0). Circle center at (1/4, k). $(1/4)^2 + k^2 = 4 \\implies k^2 = 63/16 \\implies k = 3\\sqrt{7}/4$. Tangency at $x=1/4$ gives $\\alpha = 3\\sqrt{7}/4 + 2$ (since $\\alpha > 0$). Then $4\\alpha - 8 = 4(3\\sqrt{7}/4 + 2 - 2) = 3\\sqrt{7}$. Square: $(3\\sqrt{7})^2 = 63$."
        },
        // 48
        {
            type: "numerical",
            text: "The value of $OP \\cdot OQ$ ( O is the origin) where P and Q are the points from which two mutually perpendicular tangents can be drawn to the ellipse $\\frac{(x-2)^2}{16} + \\frac{(y-3)^2}{9} = 1$, is : ____.",
            correctAnswer: 12,
            solution: "The locus of intersection of perpendicular tangents to an ellipse is its director circle: $(x-2)^2 + (y-3)^2 = 16+9 = 25 \\implies x^2+y^2 -4x -6y -12 = 0$. Power of origin with respect to this circle is $0^2+0^2 - 4(0) - 6(0) - 12 = -12$. Thus $OP \\cdot OQ = 12$."
        },
        // 49
        {
            type: "numerical",
            text: "Let the hyperbola H: $\\frac{x^2}{a^2} - y^2 = 1$ and the ellipse E : $3x^2 + 4y^2 = 12$ be such that the length of latus rectum of H is equal to the length of latus rectum of E. If $e_H$ and $e_E$ are the eccentricities of H and E respectively, then the value of $12(e_H^2 + e_E^2)$ is equal to ____.",
            correctAnswer: 42,
            solution: "Ellipse E: $x^2/4 + y^2/3 = 1$, $LR_E = 2b_E^2/a_E = 3$. Hyperbola H: $b_H^2 = 1$, $LR_H = 2b_H^2/a_H = 2/a$. Given $2/a = 3 \\implies a = 2/3 \\implies a_H^2 = 4/9$. $e_E^2 = 1 - 3/4 = 1/4$, $e_H^2 = 1 + 1/(4/9) = 13/4$. $12(e_H^2 + e_E^2) = 12(13/4 + 1/4) = 12(7/2) = 42$."
        },
        // 50
        {
            type: "numerical",
            text: "An ellipse E: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ passes through the vertices of the hyperbola H: $\\frac{x^2}{49} - \\frac{y^2}{64} = -1$. Let the major and minor axes of the ellipse E coincide with the transverse and conjugate axes of the hyperbola H. Let the product of the eccentricities of E and H be $1/2$. If l is the length of the latus rectum of the ellipse E, then the value of $113l$ is equal to ____.",
            correctAnswer: 1552,
            solution: "H is $y^2/64 - x^2/49 = 1$, vertices $(0, \\pm 8) \\implies$ E has $b^2 = 64$. $e_H = \\sqrt{1 + 49/64} = \\sqrt{113}/8$. $e_E \\cdot e_H = 1/2 \\implies e_E = 4/\\sqrt{113} \\implies e_E^2 = 16/113$. For E, $e_E^2 = 1 - a^2/b^2 \\implies 16/113 = 1 - a^2/64 \\implies a^2 = 64 \\times 97/113$. $l = 2a^2/b = 2 \\times (64 \\times 97/113)/8 = 1552/113 \\implies 113l = 1552$."
        },

        // ========== FROM test_102.js (Q51-Q59, skipping duplicate Q2) ==========
        // 51
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
        // 52
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
        // 53
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
        // 54
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
        // 55
        {
            "type": "mcq",
            "text": "The area (in sq. units) of the quadrilateral formed by the tangents at the end points of the latus rectum to the ellipse $\\frac{x^{2}}{9}+\\frac{y^{2}}{5}=1$ is",
            "options": [
                "27", "18", "36", "54"
            ],
            "correctAnswer": 0,
            "solution": "Equation of given ellipse is $\\frac{x^{2}}{9} + \\frac{y^{2}}{5} = 1 \\Rightarrow a^{2} = 9, b^{2} = 5$. Now, $b^{2} = a^{2}(1-e^{2}) \\Rightarrow 5 = 9(1-e^{2}) \\Rightarrow e = 2/3$. One of the end points of the latus rectum is $P(ae,b^{2}/a) \\equiv (2,5/3)$. Equation of tangent to the ellipse at $P$ is $\\frac{2x}{9} + \\frac{5y}{15} = 1 \\Rightarrow \\frac{x}{9/2} + \\frac{y}{3} = 1$. Therefore, area of quadrilateral $= 4 \\times (\\frac{1}{2}) \\times (\\frac{9}{2}) \\times (3) = 27$ sq. units."
        },
        // 56
        {
            "type": "mcq",
            "text": "Let $a$ and $b$, respectively, be the semi-transverse and semi-conjugate axes of a hyperbola whose eccentricity satisfies the equation $9e^{2}-18e+5=0$. If $S(5,0)$ is a focus and $5x=9$ is the corresponding directrix of this hyperbola, then $|a^{2}-b^{2}|=$",
            "options": [
                "5", "6", "7", "8"
            ],
            "correctAnswer": 2,
            "solution": "We have $9e^{2} - 18e + 5 = 0 \\Rightarrow (3e-1)(3e-5) = 0 \\Rightarrow e = \\frac{1}{3}, \\frac{5}{3}$. For hyperbola, $e > 1$, that is, $e = \\frac{5}{3}$. Let $P(x,y)$ be any point on the hyperbola. $PS = ePM \\Rightarrow \\sqrt{(x-5)^{2}+y^{2}} = \\frac{5}{3}|x - \\frac{9}{5}| = \\frac{1}{3}|5x - 9|$. Squaring, $(x-5)^{2} + y^{2} = \\frac{1}{9}(25x^{2} + 81 - 90x) \\Rightarrow 9x^{2} + 225 - 90x + 9y^{2} = 25x^{2} - 90x + 81 \\Rightarrow 16x^{2} - 9y^{2} = 144 \\Rightarrow \\frac{x^{2}}{9} - \\frac{y^{2}}{16} = 1$. Therefore, $a^{2} = 9$ and $b^{2} = 16$. Hence, $|a^{2} - b^{2}| = 7$."
        },
        // 57
        {
            "type": "mcq",
            "text": "The locus of the foot of perpendicular drawn from the centre of the ellipse $x^{2}+3y^{2}=6$ on any tangent to it is $(x^{2}+y^{2})^{2}=ax^{2}+by^{2}$ where $a, b\\in \\mathbb{N}$ then $a^{2}+b^{2}=$",
            "options": [
                "36", "40", "44", "48"
            ],
            "correctAnswer": 1,
            "solution": "Ellipse is $\\frac{x^{2}}{6} + \\frac{y^{2}}{2} = 1$. Equation of tangent at $P$ is $\\frac{x\\cos\\theta}{\\sqrt{6}} + \\frac{y\\sin\\theta}{\\sqrt{2}} = 1$. Equation of perpendicular from $(0,0)$ to tangent is $y = \\frac{\\sqrt{6}\\sin\\theta}{\\sqrt{2}\\cos\\theta} x = \\sqrt{3}\\tan\\theta x$. Thus $\\tan\\theta = \\frac{y}{\\sqrt{3}x}$. Let the point of intersection be $(h,k)$. Then $\\frac{h\\cos\\theta}{\\sqrt{6}} + \\frac{k\\sin\\theta}{\\sqrt{2}} = 1$ and $\\frac{k}{h} = \\frac{\\sqrt{6}\\sin\\theta}{\\sqrt{2}\\cos\\theta}$. Squaring the tangent equation gives $(x^{2}+y^{2})^{2} = 6x^{2} + 2y^{2}$. So $a=6, b=2$ and $a^{2} + b^{2} = 40$."
        },
        // 58
        {
            "type": "mcq",
            "text": "Let $A$ and $B$ be two distinct points on the parabola $y^{2}=4x$. If the axis of the parabola touches a circle of radius of one unit having $AB$ as its diameter, then the slope of the joining $A$ and $B$ can be:",
            "options": [
                "$\\pm 1$", "$\\pm \\frac{1}{2}$", "$\\pm 2$", "$\\pm \\sqrt{2}$"
            ],
            "correctAnswer": 2,
            "solution": "By solving the conditions for the circle with diameter AB touching the axis, the slope is found to be $\\pm 2$."
        },
        // 59
        {
            "type": "mcq",
            "text": "If two distinct chords of a parabola $y^{2}=4kx$ drawn from the point $(k, 2k)$ are bisected by the line $x+y-1=0$ then the length of the latus rectum can be:",
            "options": [
                "4", "3", "5", "6"
            ],
            "correctAnswer": 1,
            "solution": "Let $(\\alpha,1-\\alpha)$ be any point on the line $x+y-1=0$. The chord with mid-point $(\\alpha,1-\\alpha)$ is $S_{1}=T \\Rightarrow (1-\\alpha)^{2} - 4k\\alpha = y(1-\\alpha) - 2k(x+\\alpha)$. It passes through $(k, 2k)$: $(1-\\alpha)^{2} - 4k\\alpha = 2k(1-\\alpha) - 2k(k+\\alpha) = 2k - 2k\\alpha - 2k^{2} - 2k\\alpha \\Rightarrow (1-\\alpha)^{2} = 2k - 2k^{2} = 2k(1-k) > 0$. Since $(1-\\alpha)^{2} > 0$, we have $k(1-k) > 0 \\Rightarrow k(k-1) < 0 \\Rightarrow 0 < k < 1 \\Rightarrow 0 < 4k < 4$. Latus rectum $\\in (0,4)$. From options, only 3 is in this interval."
        },

        // ========== FROM test_202.js (Q60-Q71) ==========
        // 60
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
        // 61
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
        // 62
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
        // 63
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

        // ========== CONVERTED FROM test_202.js (Q64-Q67) ==========
        // 64 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "If $\\alpha, \\beta, \\gamma, \\delta$ be the eccentric angles of feet of four co‑normal points of a hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ from any point in its plane, then the sum $\\alpha + \\beta + \\gamma + \\delta$ equals an odd multiple of $\\pi$. Which of the following is a possible value of that multiplier?",
            "options": ["4", "6", "3", "2"],
            "correctAnswer": 2,
            "solution": "The sum of eccentric angles of four co‑normal points on a hyperbola is always an odd multiple of $\\pi$. Thus the multiplier must be an odd integer. From the given options, 3 is the only odd integer."
        },
        // 65 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "If the normal to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ cuts off equal intercepts on the coordinate axes, and the tangent passes through $(1,0)$, which of the following is TRUE about the eccentricity $e$ of the hyperbola?",
            "options": [
                "$\\sqrt{2} < e < 2$",
                "$1 < e < \\sqrt{2}$",
                "$\\Delta = a^4$",
                "$e > 2$"
            ],
            "correctAnswer": 1,
            "solution": "If the normal cuts equal intercepts, its slope is $\\pm 1$ and tangent slope is $\\mp 1$. Since tangent passes through $(1,0)$, we get $b^2 = a^2 - 1$. Eccentricity $e = \\sqrt{2 - 1/a^2}$, which lies strictly between $1$ and $\\sqrt{2}$."
        },
        // 66 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "For the parabola $y^2 = 4x$ and point $P(-2,1)$, tangents $PP_1$ and $PP_2$ meet the parabola at $P_1$ and $P_2$. If $Q_1, Q_2$ are points on $SP_1, SP_2$ such that $PQ_1 \\perp SP_1$, and $PQ_2 \\perp SP_2$, then the length of $PQ_1$ is:",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "correctAnswer": 2,
            "solution": "Using the geometry of the parabola $y^2=4x$ and the point $(-2,1)$, the coordinates of $P_1$ and $P_2$ are $(4,4)$ and $(1,-2)$. The slope of $SP_1$ yields the perpendicular distance. Upon calculation, $PQ_1$ equals 3."
        },
        // 67 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "A set of incident rays $x+y-2+\\lambda_1(2x+y-3)=0$ reflects from an ellipse $S=0$ as $2x+3y-23+\\lambda_2(2x-y-3)=0$. If $P(3,7)$ lies on this ellipse, then the eccentricity of the ellipse is:",
            "options": [
                "$\\frac{\\sqrt{5}}{2\\sqrt{2}+1}$",
                "$\\frac{2\\sqrt{2}}{\\sqrt{5}}$",
                "$\\frac{\\sqrt{5}}{2\\sqrt{2}-1}$",
                "$\\frac{1}{\\sqrt{5}}$"
            ],
            "correctAnswer": 0,
            "solution": "The intersection of the incident rays gives focus $S_1(1,1)$, and the intersection of reflected rays gives focus $S_2(4,5)$. The distance between foci is $5$. Using $2a = PS_1 + PS_2 = 2\\sqrt{10} + \\sqrt{5}$, we find the eccentricity $e = \\frac{2ae}{2a} = \\frac{5}{2\\sqrt{10}+\\sqrt{5}} = \\frac{\\sqrt{5}}{2\\sqrt{2}+1}$."
        },

        // ========== FROM test_202.js (Q68-Q71) ==========
        // 68
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "A tangent is drawn to the parabola $y^2 = 4x$ at the point $P$ whose abscissa lies in the interval $[1,4]$. The maximum possible area of the triangle formed by the tangent at $P$, the ordinate of $P$ and the x‑axis is equal to $K$. Then the value of $\\sqrt{K}$ is:",
            "correctAnswer": 4,
            "solution": "Area of triangle = $2t^3$. Given abscissa $t^2 \\in [1,4]$, maximum occurs at $t=2$. Max area $K = 2(8) = 16$, so $\\sqrt{K} = 4$."
        },
        // 69
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "A figure given below consisting of two equal and externally tangent circles inscribed in an ellipse. If the eccentricity of the ellipse of minimum area is $e$, then find the value of $12e^2$:<br><br><img src='images/JL2 q10 image.png' alt='Two circles inscribed in an ellipse' style='max-width:100%; display:block; margin:0 auto;'><br><br>",
            "correctAnswer": 8,
            "solution": "For minimum area ellipse containing the two circles, tangency condition gives $b^2 = 1.5r^2$ and $a^2 = 4.5r^2$. Eccentricity $e^2 = 1 - b^2/a^2 = 1 - 1.5/4.5 = 2/3$. Hence $12e^2 = 8$."
        },
        // 70
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Let $a > 0, b > 0$. Let $e$ and $l$ respectively be the eccentricity and length of the latus rectum of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. Let $e'$ and $l'$ respectively be the eccentricity and length of the latus rectum of its conjugate hyperbola. If $e^2 = \\frac{11}{14} l$ and $(e')^2 = \\frac{11}{8} l'$, then the value of $77a + 44b$ is equal to:",
            "correctAnswer": 130,
            "solution": "Using latus rectum and eccentricity relations for conjugate hyperbolas, solving the given ratios yields $b = 7a/4$. Substituting back gives $a = 65/77, b = 65/44$. Expression $77a + 44b = 65 + 65 = 130$."
        },
        // 71
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The set of values of $a$ for which there exists a tangent to the ellipse $a^2x^2 + \\frac{y^2}{2} = 1$ such that the chord intercepted between the given tangent and the hyperbola $\\frac{x^2}{a^2} - 2y^2 = 1$ subtends a right angle at the centre of the curves is $[-\\sqrt{p}, -\\sqrt{q}] \\cup [\\sqrt{q}, \\sqrt{p}]$. Then $5(p + q + 1 - \\sqrt{2})$ is equal to:",
            "correctAnswer": 2,
            "solution": "Homogenizing and setting sum of coefficients of $x^2$ and $y^2$ to zero yields the condition for $m^2$. For a valid real tangent, $m^2 \\ge 0$ restricts $a \\in [-\\sqrt{\\sqrt{2}-1}, -\\sqrt{2/5}] \\cup [\\sqrt{2/5}, \\sqrt{\\sqrt{2}-1}]$. Thus $p = \\sqrt{2}-1$, $q = 2/5$. Expression $= 5(\\sqrt{2}-1 + 2/5 + 1 - \\sqrt{2}) = 5(2/5) = 2$."
        },

        // ========== FROM test_203.js (Q72-Q76) ==========
        // 72
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let curve $C$ be the mirror image of the parabola $y^2 = 4x$ with respect to the line $x + y + 4 = 0$. If $A$ and $B$ are the points of intersection of $C$ with the line $y = -5$, then the distance between $A$ and $B$ is:",
            "options": [
                "4",
                "6",
                "2",
                "8"
            ],
            "correctAnswer": 0,
            "solution": "Instead of finding the equation of $C$, we can reflect the line $y = -5$ across the mirror $x + y + 4 = 0$ to find its intersection with the original parabola $y^2 = 4x$. The image of a point $(x, -5)$ in $x + y + 4 = 0$ is found using $\\frac{x' - x}{1} = \\frac{y' - (-5)}{1} = \\frac{-2(x - 5 + 4)}{1^2 + 1^2} = -(x - 1) = 1 - x$. This gives $x' = x + 1 - x = 1$ and $y' = -5 + 1 - x = -x - 4$. Thus, the reflected line intersects the parabola at $(1, -x - 4)$. Substituting into $y^2 = 4x$ yields $(-x - 4)^2 = 4(1) \\implies x + 4 = \\pm 2$. This gives $x = -2$ and $x = -6$. The points $A$ and $B$ have coordinates $(-2, -5)$ and $(-6, -5)$. The distance between them is $|-2 - (-6)| = 4$."
        },
        // 73
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The common tangents to the circle $x^2 + y^2 = 2$ and the parabola $y^2 = 8x$ touch the circle at the points $P, Q$ and the parabola at the points $R, S$. Then the area of the quadrilateral $PQRS$ is:",
            "options": [
                "12",
                "15",
                "6",
                "3"
            ],
            "correctAnswer": 1,
            "solution": "For the parabola $y^2 = 8x$, $a=2$. Any tangent is $y = mx + \\frac{2}{m}$. For this to be tangent to the circle $x^2 + y^2 = 2$, the perpendicular distance from $(0,0)$ must equal $\\sqrt{2}$. Thus, $\\frac{|2/m|}{\\sqrt{1+m^2}} = \\sqrt{2} \\implies \\frac{4}{m^2} = 2(1+m^2) \\implies m^4 + m^2 - 2 = 0$. Factoring gives $(m^2+2)(m^2-1) = 0 \\implies m = \\pm 1$. The common tangents are $y = x + 2$ and $y = -x - 2$. The points of contact on the parabola are $(\\frac{a}{m^2}, \\frac{2a}{m})$, yielding $R(2, 4)$ and $S(2, -4)$. The points of contact on the circle are the feet of perpendiculars from $(0,0)$, yielding $P(-1, 1)$ and $Q(-1, -1)$. The quadrilateral $PQRS$ is an isosceles trapezium bounded by parallel vertical chords $x=-1$ (length $PQ = 2$) and $x=2$ (length $RS = 8$). The height is the distance between these lines, $h = 3$. Area $= \\frac{1}{2}(PQ + RS) \\times h = \\frac{1}{2}(2 + 8) \\times 3 = 15$."
        },
        // 74
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let $(x, y)$ be any point on the parabola $y^2 = 4x$. Let $P$ be the point that divides the line segment from $(0,0)$ to $(x,y)$ in the ratio $1:3$. Then the locus of $P$ is:",
            "options": [
                "$x^2 = y$",
                "$y^2 = 2x$",
                "$y^2 = x$",
                "$x^2 = 2y$"
            ],
            "correctAnswer": 2,
            "solution": "Let the coordinates of $P$ be $(h, k)$. By the section formula, $P$ divides the segment joining $(0,0)$ to $(x,y)$ in the ratio $1:3$. Thus, $h = \\frac{1 \\cdot x + 3 \\cdot 0}{4} = \\frac{x}{4} \\implies x = 4h$, and $k = \\frac{1 \\cdot y + 3 \\cdot 0}{4} = \\frac{y}{4} \\implies y = 4k$. Since $(x,y)$ lies on $y^2 = 4x$, substituting gives $(4k)^2 = 4(4h) \\implies 16k^2 = 16h \\implies k^2 = h$. Replacing $(h,k)$ with $(x,y)$, the locus is $y^2 = x$."
        },
        // 75
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let $P$ be the point on the parabola $y^2 = 8x$ which is at a minimum distance from the center $C$ of the circle $x^2 + (y+6)^2 = 1$. Then the equation of the circle passing through $C$ and having its center at $P$ is:",
            "options": [
                "$x^2 + y^2 - 4x + 9y + 18 = 0$",
                "$x^2 + y^2 - \\frac{x}{4} + 2y - 24 = 0$",
                "$x^2 + y^2 - x + 4y - 12 = 0$",
                "$x^2 + y^2 - 4x + 8y + 12 = 0$"
            ],
            "correctAnswer": 3,
            "solution": "The center of the circle is $C(0, -6)$. The shortest distance to the parabola $y^2 = 8x$ ($a=2$) occurs along the common normal. Let $P(2t^2, 4t)$ be the point on the parabola. The normal at $P$ is $y = -tx + 4t + 2t^3$. Since it passes through $C(0, -6)$, $-6 = 4t + 2t^3 \\implies t^3 + 2t + 3 = 0$. By inspection, $t = -1$ is a root. Thus, $P$ is $(2(-1)^2, 4(-1)) = (2, -4)$. The circle with center $P(2, -4)$ passing through $C(0, -6)$ has a radius squared $R^2 = CP^2 = (2 - 0)^2 + (-4 - (-6))^2 = 4 + 4 = 8$. Its equation is $(x - 2)^2 + (y + 4)^2 = 8 \\implies x^2 - 4x + 4 + y^2 + 8y + 16 = 8 \\implies x^2 + y^2 - 4x + 8y + 12 = 0$."
        },
        // 76
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "If a hyperbola passes through the focus of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$ and its transverse and conjugate axes coincide with the major and minor axes of the ellipse, and the product of their eccentricities is 1, then the equation of the hyperbola is:",
            "options": [
                "$\\frac{x^2}{9} - \\frac{y^2}{16} = 1$",
                "$\\frac{x^2}{9} - \\frac{y^2}{25} = 1$",
                "$\\frac{x^2}{9} - \\frac{y^2}{9} = 1$",
                "$\\frac{x^2}{16} - \\frac{y^2}{9} = 1$"
            ],
            "correctAnswer": 0,
            "solution": "For the ellipse, $a_E = 5, b_E = 4$. Its eccentricity is $e_E = \\sqrt{1 - \\frac{16}{25}} = \\frac{3}{5}$. The foci are $(\\pm a_E e_E, 0) = (\\pm 3, 0)$. Since the hyperbola passes through $(\\pm 3, 0)$ and its axes coincide, its vertices are $(\\pm 3, 0) \\implies a_H = 3$. Given $e_H \\cdot e_E = 1$, we have $e_H = \\frac{5}{3}$. For the hyperbola, $b_H^2 = a_H^2 (e_H^2 - 1) = 9 \\left(\\frac{25}{9} - 1\\right) = 25 - 9 = 16$. The equation of the hyperbola is $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$."
        },

        // ========== CONVERTED FROM test_203.js (Q77-Q83) ==========
        // 77 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Tangents are drawn to the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{4} = 1$, parallel to the straight line $2x - y = 1$. What is the sum of the x-coordinates of the points of contact?",
            "options": [
                "0",
                "$9/\\sqrt{2}$",
                "$9/2\\sqrt{2}$",
                "9"
            ],
            "correctAnswer": 0,
            "solution": "The points of contact are $\\left(\\frac{9}{2\\sqrt{2}}, \\frac{1}{\\sqrt{2}}\\right)$ and $\\left(-\\frac{9}{2\\sqrt{2}}, -\\frac{1}{\\sqrt{2}}\\right)$. Their x-coordinates add up to 0."
        },
        // 78 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let $P$ be a point on $y^2 = 2x$ in the first quadrant such that a circle with diameter $PQ$ passes through the vertex $O(0,0)$, and the area of $\\triangle OPQ$ is $3\\sqrt{2}$. The sum of the possible x-coordinates of $P$ is:",
            "options": [
                "4",
                "5",
                "1",
                "9"
            ],
            "correctAnswer": 1,
            "solution": "Solving for $t_1$ using $t_1 t_2 = -4$ and $|t_1 - t_2| = 3\\sqrt{2}$ yields $t_1 = 2\\sqrt{2}$ or $\\sqrt{2}$. The x-coordinates are $t_1^2/2$, giving $4$ and $1$. Their sum is 5."
        },
        // 79 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "If a hyperbola passes through a focus of the ellipse $x^2 + 4y^2 = 4$ and has eccentricity reciprocal to that of the ellipse, then the x-coordinate of a focus of the hyperbola is:",
            "options": [
                "1",
                "$\\sqrt{3}$",
                "2",
                "$2\\sqrt{3}$"
            ],
            "correctAnswer": 2,
            "solution": "For the ellipse $\\frac{x^2}{4} + \\frac{y^2}{1} = 1$, $e_E = \\frac{\\sqrt{3}}{2}$ and foci are $(\\pm \\sqrt{3}, 0)$. The hyperbola has $e_H = \\frac{2}{\\sqrt{3}}$ and passes through $(\\pm \\sqrt{3}, 0)$ so $a_H = \\sqrt{3}$. Its foci are $(\\pm a_H e_H, 0) = (\\pm 2, 0)$."
        },
        // 80 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let $P$ be the point on $y^2 = 4x$ closest to the center $S(2, 8)$ of a circle of radius 2. The x-intercept of the normal to the parabola at $P$ is:",
            "options": [
                "4",
                "5",
                "6",
                "7"
            ],
            "correctAnswer": 2,
            "solution": "The shortest distance is along the common normal. Normal to $y^2 = 4x$ is $y = -tx + 2t + t^3$. Passing through $(2, 8)$ gives $t=2$, hence $P(4, 4)$. The normal at $P$ is $y = -2x + 12$. Setting $y=0$ gives the x-intercept $x = 6$."
        },
        // 81 (Was Multi-correct)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The end points of the latus rectum of the ellipse $x^2 + 4y^2 = 4$ are $(\\pm\\sqrt{3}, -1/2)$. If parabolas are drawn with this segment as their latus rectum, the equation of the one opening upwards is:",
            "options": [
                "$x^2 - 2\\sqrt{3}y = 3 + \\sqrt{3}$",
                "$x^2 + 2\\sqrt{3}y = 3 - \\sqrt{3}$",
                "$x^2 - 2\\sqrt{3}y = 3 - \\sqrt{3}$",
                "$x^2 + 2\\sqrt{3}y = 3 + \\sqrt{3}$"
            ],
            "correctAnswer": 0,
            "solution": "For the ellipse $\\frac{x^2}{4} + \\frac{y^2}{1} = 1$, $e = \\frac{\\sqrt{3}}{2}$ and LR length is $2\\sqrt{3}$. The focus for the upwards parabola is at $(0,-1/2)$ and $A = \\frac{\\sqrt{3}}{2}$. The vertex is $k = -1/2 - \\frac{\\sqrt{3}}{2}$. Substituting these into the standard parabola equation yields $x^2 - 2\\sqrt{3}y = 3 + \\sqrt{3}$."
        },
        // 82 (Was Matrix Match)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "From the point $P(5/2, 0)$, how many distinct real normals can be drawn to the parabola $y^2 = 4x$?",
            "options": [
                "1",
                "2",
                "3",
                "0"
            ],
            "correctAnswer": 2,
            "solution": "For the parabola $y^2 = 4ax$ ($a=1$), three real normals can be drawn from a point $(h,0)$ if $h > 2a$. Since $h = 5/2 > 2$, 3 normals can be drawn."
        },
        // 83 (Was Matrix Match)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The eccentricity of the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$ is:",
            "options": [
                "$3/5$",
                "$4/3$",
                "$5/3$",
                "$\\sqrt{2}$"
            ],
            "correctAnswer": 2,
            "solution": "For the hyperbola $a^2 = 9$ and $b^2 = 16$. The eccentricity $e = \\sqrt{1 + \\frac{b^2}{a^2}} = \\sqrt{1 + \\frac{16}{9}} = \\frac{5}{3}$."
        },

        // ========== REMAINING FROM test_203.js (Q84-Q87) ==========
        // 84
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The line $2x + y = 1$ is tangent to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. If this line passes through the point of intersection of the directrices and the x-axis, then the eccentricity of the hyperbola is:",
            "correctAnswer": 2,
            "solution": "The directrices of the hyperbola intersect the x-axis at $(\\pm a/e, 0)$. Assume it passes through $(a/e, 0)$. Then $2(a/e) + 0 = 1 \\implies a = e/2$. The tangent line can be rewritten as $y = -2x + 1$, so its slope is $m = -2$. The tangency condition for a hyperbola is $c^2 = a^2 m^2 - b^2$, yielding $1 = a^2(4) - b^2$. Substituting $b^2 = a^2(e^2 - 1)$ gives $1 = 4a^2 - a^2 e^2 + a^2 = 5a^2 - a^2 e^2$. Substituting $e = 2a \\implies e^2 = 4a^2$, we get $1 = 5a^2 - 4a^4 \\implies 4a^4 - 5a^2 + 1 = 0 \\implies (4a^2 - 1)(a^2 - 1) = 0$. Since $a^2 = 1/4 \\implies a = 1/2 \\implies e = 1$ is invalid for a hyperbola, we must have $a^2 = 1 \\implies a = 1 \\implies e = 2$."
        },
        // 85
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Let $H: \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, where $a > b > 0$, be a hyperbola in the xy-plane whose conjugate axis $LM$ subtends an angle of $60^\\circ$ at one of its vertices $N$. Let the area of the triangle $LMN$ be $4\\sqrt{3}$. Then the length of the conjugate axis of $H$ is:",
            "correctAnswer": 4,
            "solution": "The endpoints of the conjugate axis are $L(0, b)$ and $M(0, -b)$. Let the vertex be $N(a, 0)$. The triangle $LMN$ is an isosceles triangle with base $LM = 2b$ and height $a$. Given that the angle at $N$ is $60^\\circ$, the line segment $NL$ bisects this angle, forming a $30^\\circ$ angle with the x-axis. Thus, $\\tan 30^\\circ = \\frac{b}{a} \\implies \\frac{1}{\\sqrt{3}} = \\frac{b}{a} \\implies a = b\\sqrt{3}$. The area of $\\triangle LMN$ is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2b \\times a = ab$. We are given $ab = 4\\sqrt{3}$. Substituting $a = b\\sqrt{3}$ yields $b^2\\sqrt{3} = 4\\sqrt{3} \\implies b^2 = 4 \\implies b = 2$. The length of the conjugate axis is $2b = 4$."
        },
        // 86
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Suppose that the foci of the ellipse $\\frac{x^2}{9} + \\frac{y^2}{5} = 1$ are $(f_1, 0)$ and $(f_2, 0)$ where $f_1 > 0$ and $f_2 < 0$. Let $P_1$ and $P_2$ be two parabolas with a common vertex at $(0,0)$ and with foci at $(f_1, 0)$ and $(2f_2, 0)$, respectively. Let $T_1$ be a tangent to $P_1$ which passes through $(2f_2, 0)$ and $T_2$ be a tangent to $P_2$ which passes through $(f_1, 0)$. If $m_1$ is the slope of $T_1$ and $m_2$ is the slope of $T_2$, then the value of $(1/m_1^2) + m_2^2$ is:",
            "correctAnswer": 4,
            "solution": "For the ellipse, $a=3, b=\\sqrt{5} \\implies e = \\sqrt{1 - 5/9} = \\frac{2}{3}$. The foci are $(\\pm ae, 0) = (\\pm 2, 0)$. Thus $f_1 = 2, f_2 = -2$. The parabola $P_1$ has focus $(2,0)$ so its equation is $y^2 = 8x$. $P_2$ has focus $(2(-2), 0) = (-4, 0)$, so its equation is $y^2 = -16x$. The tangent $T_1$ to $y^2 = 8x$ is $y = m_1 x + \\frac{2}{m_1}$. It passes through $(2f_2, 0) = (-4, 0)$, giving $0 = -4m_1 + \\frac{2}{m_1} \\implies 4m_1^2 = 2 \\implies m_1^2 = \\frac{1}{2} \\implies \\frac{1}{m_1^2} = 2$. The tangent $T_2$ to $y^2 = -16x$ is $y = m_2 x - \\frac{4}{m_2}$. It passes through $(f_1, 0) = (2, 0)$, giving $0 = 2m_2 - \\frac{4}{m_2} \\implies 2m_2^2 = 4 \\implies m_2^2 = 2$. Thus, $(1/m_1^2) + m_2^2 = 2 + 2 = 4$."
        },
        // 87
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Let $L$ be a normal to the parabola $y^2 = 4x$. If $L$ passes through the point $(9, 6)$, then the sum of the absolute values of the slopes of all possible normals passing through $(9, 6)$ is:",
            "correctAnswer": 6,
            "solution": "For the parabola $y^2 = 4ax$, $a=1$. The equation of a normal with slope $m$ is $y = mx - 2am - am^3 \\implies y = mx - 2m - m^3$. Since it passes through $(9, 6)$, we have $6 = 9m - 2m - m^3 \\implies m^3 - 7m + 6 = 0$. By inspection, $m=1$ is a root ($1 - 7 + 6 = 0$). Factoring out $(m-1)$, we get $(m-1)(m^2 + m - 6) = 0 \\implies (m-1)(m+3)(m-2) = 0$. The roots (slopes of the normals) are $m = 1, 2, -3$. The sum of their absolute values is $|1| + |2| + |-3| = 1 + 2 + 3 = 6$."
        }
    ]
};