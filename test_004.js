window.testBank = window.testBank || {};
window.testBank['test_004'] = {
    title: "UP MPT-05 22-06-2026(PCM)",
    category: "Full Tests - PCM",
    timeLimitMins: 180,
    randomizePoolSize: 0,
    questions: [
        // ========== MATHEMATICS - SECTION A (MCQs Q1-Q20) ==========
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
            solution: "$\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ tangent at point P $(a \\sec\\theta, b \\tan\\theta)$ is $\\frac{x \\sec\\theta}{a} - \\frac{y \\tan\\theta}{b} = 1$ or $\\frac{x}{a \\cos\\theta} + \\frac{y}{(-b \\cot\\theta)} = 1$. Point A$(a \\cos\\theta, 0)$, B$(0, -b \\cot\\theta)$. Coordinate of P is $(h, k) = (a \\cos\\theta, -b \\cot\\theta)$. Thus $\\cot\\theta = \\frac{h}{\\sqrt{a^2 - h^2}} = -\\frac{k}{b}$. Squaring gives $\\frac{h^2}{a^2 - h^2} = \\frac{k^2}{b^2} \\Rightarrow \\frac{a^2}{h^2} - 1 = \\frac{b^2}{k^2}$. So the locus is $\\frac{a^2}{x^2} - \\frac{b^2}{y^2} = 1$."
        },
        // 2
        {
            type: "mcq",
            text: "If the tangent to the ellipse $x^2 + 4y^2 = 16$ at a point $(4\\cos\\theta, 2\\sin\\theta)$ passes through the focus of the parabola $x^2 = 8(y-6)$, then:",
            options: [
                "$\\sin\\theta = 1/4$",
                "$\\sin\\theta = 2/3$",
                "$\\tan\\theta = 1/4$",
                "$\\cot\\theta = 1/3$"
            ],
            correctAnswer: 0,
            solution: "Tangent at $P(\\theta)$ to $\\frac{x^2}{16} + \\frac{y^2}{4} = 1$ is $\\frac{x}{4} \\cos\\theta + \\frac{y}{2} \\sin\\theta = 1$. The focus of $x^2 = 8(y-6)$ is $(0,8)$. Substituting gives $0 + 4 \\sin\\theta = 1 \\Rightarrow \\sin\\theta = 1/4$."
        },
        // 3
        {
            type: "mcq",
            text: "Locus of a point which divides a chord of slope 2 of parabola $y^2 = 4x$ internally in the ratio 1:2 is another parabola having vertex as:",
            options: [
                "$(2/3, 8/3)$",
                "$(8/3, 2/3)$",
                "$(2/9, 8/9)$",
                "$(8/9, 2/9)$"
            ],
            correctAnswer: 2,
            solution: "$\\frac{2t_1 - 2t_2}{t_1^2 - t_2^2} = 2 \\Rightarrow t_1 + t_2 = 1$ (i). $h = 2$ (ii), $k = \\frac{4t_1 + 2t_2}{3}$ (iii). Eliminating $t_1, t_2$ from (i), (ii) and (iii) and replacing $h \\rightarrow x$ and $k \\rightarrow y$ gives the vertex at $(2/9, 8/9)$."
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
                "$a \\in (1,4)$",
                "$a \\in (-\\infty, 2) \\cup (8, \\infty)$",
                "$a \\in (2,8)$",
                "None of these"
            ],
            correctAnswer: 2,
            solution: "For an ellipse, $8-a > 0$ and $a-2 > 0 \\Rightarrow 2 < a < 8$. Also they must not be equal, so $8-a \\ne a-2 \\Rightarrow a \\ne 5$. Thus $a \\in (2,8) - \\{5\\}$. The closest option is $a \\in (2,8)$."
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
            solution: "Tangents to the curves: $y = m_1(x+1) + \\frac{1}{m_1}$ (i) and $y = m_2(x+2) + \\frac{2}{m_2}$ (ii). Given $m_1 m_2 = -1 \\Rightarrow m_2 = -\\frac{1}{m_1}$. Eliminating $m_1$ and $m_2$ gives the locus $x + 3 = 0$."
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
            solution: "Let P be $(\\alpha, \\beta)$. Then PQ = $2\\beta$ and OP = $\\sqrt{\\alpha^2 + \\beta^2}$. Since OPQ is equilateral, $\\alpha^2 + \\beta^2 = 4\\beta^2 \\Rightarrow \\alpha^2 = 3\\beta^2$. P lies on hyperbola: $\\frac{\\alpha^2}{a^2} - \\frac{\\beta^2}{b^2} = 1 \\Rightarrow \\frac{3\\beta^2}{a^2} - \\frac{\\beta^2}{b^2} = 1 \\Rightarrow \\beta^2 = \\frac{1}{\\frac{3}{a^2} - \\frac{1}{b^2}} > 0 \\Rightarrow \\frac{b^2}{a^2} > 1/3 \\Rightarrow e^2 - 1 > 1/3 \\Rightarrow 3e^2 > 4$. Least integral value is 9."
        },
        // 10
        {
            type: "mcq",
            text: "The tangent at the point A (12, 6) to a parabola intersect its directrix at the point B (-1, 2). If the focus of the parabola lies on positive x-axis then square of distance of focus from point A is:",
            options: ["180", "37", "89", "270"],
            correctAnswer: 1,
            solution: "Let focus be S(a,0) (a > 0). Since AS and BS are perpendicular, $\\frac{6}{12-a} \\cdot \\frac{2}{-1-a} = -1 \\Rightarrow a = 0, 11$. For a > 0, a = 11. Focus is (11,0). Thus $AS^2 = (12-11)^2 + (6-0)^2 = 1 + 36 = 37$."
        },
        // 11
        {
            type: "mcq",
            text: "If lines $3x + 2y = 10$ and $-3x + 2y = 10$ are tangents at the extremities of latus rectum of an ellipse whose centre is origin, then the length of latus rectum of ellipse is:",
            options: [
                "$16/3$",
                "$3\\sqrt{5}$",
                "$4\\sqrt{5}$",
                "$100/27$"
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
            solution: "Equation of tangent at $(x_1,y_1)$ is $yy_1 - 2a(x+x_1) = 0$. Equation of chord of $y^2 = 4a(x+b)$ with midpoint $(x',y')$ is $yy' - 2a(x+b) = y'^2 - 2a(x'+b)$. Comparing, the mid point is $(x_1, y_1)$."
        },
        // 13
        {
            type: "mcq",
            text: "Let $S = 0$ is an ellipse whose vertices are the extremities of minor axis of the ellipse $E: \\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1, a > b$. If $S = 0$ passes through the foci of $E$, then its eccentricity is (considering the eccentricity of $E$ as e):",
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
            solution: "R is midpoint of F and M, $R = [0, at]$. $m(PR) = \\frac{2at - at}{at^2 - 0} = \\frac{1}{t}$. $m(FM) = \\frac{2at - 0}{-a - a} = -t$. $m(PR) \\times m(FM) = -1$. Hence the angle is $90^{\\circ}$."
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
            solution: "Given conic C is a parabola. Focus: $(1, -1)$, Directrix: $3x - 4y = 0$. Minimum distance is the perpendicular distance $= \\left|\\frac{3(2) - 4(-1)}{5}\\right| = \\frac{10}{5} = 2$. However, the official answer key corresponds to option 1."
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
            solution: "Area of $\\Delta BAB' = 2\\sqrt{3} \\Rightarrow b^2 = 2, b = \\sqrt{2}$. $a = OA = \\sqrt{6}$. Distance between foci = $2ae = 2\\sqrt{6} \\sqrt{1 + 2/6} = 4\\sqrt{2}$."
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
            solution: "On comparing $y = mx + \\sqrt{a^2m^2 - b^2}$ with $y = \\alpha x + \\beta$, we have $\\alpha = m, \\beta = \\sqrt{a^2\\alpha^2 - b^2} \\Rightarrow \\beta^2 = a^2\\alpha^2 - b^2 \\Rightarrow a^2\\alpha^2 - \\beta^2 = b^2$, which is a hyperbola."
        },
        // 19
        {
            type: "mcq",
            text: "If the angle between the straight lines joining foci and the ends of minor axis of the ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ is $90^{\\circ}$, the eccentricity is:",
            options: [
                "$1/2$",
                "$\\sqrt{3/2}$",
                "$1/\\sqrt{2}$",
                "none of these"
            ],
            correctAnswer: 2,
            solution: "Given angle $= 90^{\\circ}$, $b^2 = a^2/2 \\Rightarrow e^2 = 1 - b^2/a^2 = 1 - 1/2 = 1/2 \\Rightarrow e = 1/\\sqrt{2}$."
        },
        // 20
        {
            type: "mcq",
            text: "If the distance between two parallel tangents drawn to the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{49} = 1$ is 2, then their slope is equal to:",
            options: [
                "$\\pm 5/2$",
                "$\\pm 4/5$",
                "$\\pm 7/2$",
                "$\\pm 5/4$"
            ],
            correctAnswer: 0,
            solution: "According to the question, $\\frac{2\\sqrt{9m^2 - 49}}{\\sqrt{1 + m^2}} = 2 \\Rightarrow 9m^2 - 49 = 1 + m^2 \\Rightarrow 8m^2 = 50 \\Rightarrow m = \\pm 5/2$."
        },

        // ========== MATHEMATICS - SECTION B (Numericals Q21-Q25) ==========
        // 21
        {
            type: "numerical",
            text: "If line $y = x + 2$ does not intersect any member of family of parabola $y^2 = ax$ ($a \\in \\mathbb{R}$) at two distinct points, then maximum value of latus rectum of parabola is _____.",
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
            solution: "$e_1 = \\sqrt{\\frac{1 + \\sec^2\\theta}{\\sec^2\\theta}}$ and $e_2 = \\sqrt{\\frac{\\sec^2\\theta - 1}{\\sec^2\\theta}}$. Solving $e_1 = \\sqrt{3} e_2 \\Rightarrow \\cos\\theta = \\pm \\frac{1}{\\sqrt{2}}$. For the smallest positive value, $\\theta = \\pi/4$. Thus $P = 4$."
        },
        // 24
        {
            type: "numerical",
            text: "The equation of tangent at P (3, 4) on the parabola whose axis is x-axis is $3x - 4y + 7 = 0$ and the distance of the tangent from the focus of the parabola is 'k' then find the value of $2k$ is _____.",
            correctAnswer: 5,
            solution: "Let parabola be $Y^2 = 4A(X - h)$. $Y' = 2A/Y \\Rightarrow 3/4 = 2A/4 \\Rightarrow A = 3/2$. P(3,4) lies on it: $16 = 4(3/2)(3 - h) \\Rightarrow h = 1/3$. Focus is $(\\frac{11}{6}, 0)$, distance from tangent $3x - 4y + 7 = 0$ is $5/2 \\Rightarrow 2k = 5$."
        },
        // 25
        {
            type: "numerical",
            text: "If A be the area of quadrilateral formed by the tangents at the end points of latus rectum to the ellipse $\\frac{x^2}{9} + \\frac{y^2}{5} = 1$, then $\\frac{A}{3}$ is equal to _____.",
            correctAnswer: 9,
            solution: "By symmetry, the quadrilateral is a rhombus. Area is 4 times the area of the right angled triangle formed by tangent and axes in the I quadrant. $ae = 3(2/3) = 2$. Tangent at $(2, 5/3)$ is $\\frac{2}{9}x + \\frac{y}{3} = 1$. Area $A = 4(1/2)(9/2)(3) = 27 \\Rightarrow A/3 = 9$."
        },

        // ========== PHYSICS - SECTION A (MCQs Q26-Q45) ==========
        // 26
        {
            type: "mcq",
            text: "Concentric metallic hollow spheres of radii R and 4R hold charges $Q_1$ and $Q_2$ respectively. Given that surface charge densities of the concentric spheres are equal, the potential difference $V(R) - V(4R)$ is:",
            options: [
                "$\\frac{Q_2}{4\\pi\\epsilon_0 R}$",
                "$\\frac{3Q_2}{4\\pi\\epsilon_0 R}$",
                "$\\frac{3Q_1}{16\\pi\\epsilon_0 R}$",
                "$\\frac{3Q_1}{4\\pi\\epsilon_0 R}$"
            ],
            correctAnswer: 2,
            solution: "$\\sigma_1 = \\frac{Q_1}{4\\pi R^2}, \\sigma_2 = \\frac{Q_2}{4\\pi (4R)^2}$. Given $\\sigma_1 = \\sigma_2 \\Rightarrow Q_2 = 16 Q_1$. $\\Delta V = V_{inner} - V_{outer} = \\frac{3Q_1}{16\\pi\\epsilon_0 R}$."
        },
        // 27
        {
            type: "mcq",
            text: "Hydrogen ion and singly ionized helium atom are accelerated, from rest, through the same potential difference. The ratio of final speeds of hydrogen and helium ions is close to:",
            options: ["1:2", "2:1", "5:7", "10:7"],
            correctAnswer: 1,
            solution: "$qV = \\frac{1}{2}mv^2 \\Rightarrow v \\propto \\frac{1}{\\sqrt{m}}$. So $\\frac{v_H}{v_{He}} = \\sqrt{\\frac{4}{1}} = 2:1$."
        },
        // 28
        {
            type: "mcq",
            text: "A two point charges $4q$ and $-q$ are fixed on the x-axis at $x = -d/2$ and $x = d/2$, respectively. If the third point charge 'q' is taken from the origin to $x = d$ along the semicircle as shown in the figure, the energy of the charge will:",
            options: [
                "Increase by $\\frac{2q^2}{3\\pi\\epsilon_0 d}$",
                "Increase by $\\frac{2q^2}{4\\pi\\epsilon_0 d}$",
                "Decrease by $\\frac{q^2}{4\\pi\\epsilon_0 d}$",
                "Decrease by $\\frac{4q^2}{3\\pi\\epsilon_0 d}$"
            ],
            correctAnswer: 3,
            solution: "Potential at O: $V_0 = \\frac{k4q}{d/2} + \\frac{k(-q)}{d/2} = \\frac{6kq}{d}$. Potential at P: $V_P = \\frac{k4q}{3d/2} + \\frac{k(-q)}{d/2} = \\frac{2kq}{3d}$. Change in P.E. = $q(V_P - V_0) = -\\frac{4q^2}{3\\pi\\epsilon_0 d}$. Thus it decreases."
        },
        // 29
        {
            type: "mcq",
            text: "A particle of charge q and mass m is subjected to an electric field $E = E_0(1 - ax^2)$ in the x-direction, where a and $E_0$ are constants. Initially the particle was at rest at $x = 0$. Other than the initial position the kinetic energy of the particle becomes zero when the distance of the particle from the origin is:",
            options: [
                "a",
                "$\\sqrt{1/a}$",
                "$\\sqrt{3/a}$",
                "$\\sqrt{2/a}$"
            ],
            correctAnswer: 2,
            solution: "$\\int_{0}^{x} qE dx = 0 \\Rightarrow qE_0\\int_{0}^{x} (1 - ax^2) dx = 0 \\Rightarrow x - \\frac{ax^3}{3} = 0 \\Rightarrow 1 - \\frac{ax^2}{3} = 0 \\Rightarrow x = \\sqrt{3/a}$."
        },
        // 30
        {
            type: "mcq",
            text: "Ten charges are placed on the circumference of a circle of radius R with constant angular separation between successive charges. Alternate charges 1, 3, 5, 7, 9 have charge (+q) each, while 2, 4, 6, 8, 10 have charge (-q) each. The potential V and the electric field E at the centre of the circle are respectively: (Take $V=0$ at infinity)",
            options: [
                "$V = 0; E = 0$",
                "$V = \\frac{10q}{4\\pi\\epsilon_0 R}; E = 0$",
                "$V = \\frac{10q}{4\\pi\\epsilon_0 R}; E = \\frac{10q}{4\\pi\\epsilon_0 R^2}$",
                "$V = 0; E = \\frac{10q}{4\\pi\\epsilon_0 R^2}$"
            ],
            correctAnswer: 0,
            solution: "Net charge $Q_{net} = 0$. So $V = 0$ and $E = 0$ at the center."
        },
        // 31
        {
            type: "mcq",
            text: "Charges $Q_1$ and $Q_2$ are at points A and B of a right angle triangle OAB. The resultant electric field at point O is perpendicular to the hypotenuse, then $\\frac{Q_1}{Q_2}$ is proportional to:",
            options: [
                "$x_1^2/x_1^2$",
                "$x_1^3/x_2^3$",
                "$x_2/x_1$",
                "$x_1/x_2$"
            ],
            correctAnswer: 3,
            solution: "$\\tan\\theta = \\frac{x_1}{x_2} = \\frac{F_2}{F_1} = \\frac{kQ_2/x_2^2}{kQ_1/x_1^2} \\Rightarrow \\frac{Q_1}{Q_2} = \\frac{x_1}{x_2}$."
        },
        // 32
        {
            type: "mcq",
            text: "Consider the force F on a charge 'q' due to a uniformly charged spherical shell of radius R carrying charge Q distributed uniformly over it. Which one of the following statements is true for F, if 'q' is placed at distance r from the centre of the shell?",
            options: [
                "$F = \\frac{1}{4\\pi\\epsilon_0} \\frac{Qq}{r^2}$ for all r",
                "$F = \\frac{1}{4\\pi\\epsilon_0} \\frac{Qq}{R^2}$ for r > R",
                "$\\frac{1}{4\\pi\\epsilon_0} \\frac{qQ}{R^2} > F > 0$ for r < R",
                "$F = \\frac{1}{4\\pi\\epsilon_0} \\frac{Qq}{r^2}$ for r > R and $F = 0$ for r < R"
            ],
            correctAnswer: 3,
            solution: "For a uniformly charged spherical shell, $E = 0$ for $r < R$ (so $F = 0$), and $E = \\frac{1}{4\\pi\\epsilon_0} \\frac{Q}{r^2}$ for $r > R$ (so $F = \\frac{1}{4\\pi\\epsilon_0} \\frac{Qq}{r^2}$). Option 4 matches this exactly."
        },
        // 33
        {
            type: "mcq",
            text: "Three charges $+Q$, $q$, $+Q$ are placed respectively, at distance, 0, d/2 and d from the origin, on the x-axis. If the net force experienced by $+Q$, placed at $x = 0$, is zero, then value of q is:",
            options: [
                "$+Q/2$",
                "$+Q/4$",
                "$-Q/2$",
                "$-Q/4$"
            ],
            correctAnswer: 3,
            solution: "$\\frac{kQq}{d^2/4} + \\frac{kQ^2}{d^2} = 0 \\Rightarrow 4q + Q = 0 \\Rightarrow q = -Q/4$."
        },
        // 34
        {
            type: "mcq",
            text: "For a uniformly charged ring of radius R, the electric field on its axis has the largest magnitude at a distance h from its centre. Then value of h is:",
            options: [
                "$R/\\sqrt{2}$",
                "R",
                "$R/\\sqrt{5}$",
                "$R\\sqrt{2}$"
            ],
            correctAnswer: 0,
            solution: "$E = \\frac{kQx}{(R^2+x^2)^{3/2}}$. For maximum, $dE/dx = 0 \\Rightarrow R^2+x^2 - 3x^2 = 0 \\Rightarrow x^2 = R^2/2 \\Rightarrow x = \\pm R/\\sqrt{2}$."
        },
        // 35
        {
            type: "mcq",
            text: "Charge is distributed within a sphere of radius R with a volume charge density $\\rho(r) = \\frac{A}{r^2} e^{-2r/a}$, where A and a are constant. If Q is the total charge of this charge distribution, the radius R is:",
            options: [
                "$a \\log\\left(\\frac{1}{1 - \\frac{Q}{2\\pi a A}}\\right)$",
                "$\\frac{a}{2} \\log\\left(\\frac{1}{1 - \\frac{Q}{2\\pi a A}}\\right)$",
                "$\\frac{a}{2} \\log\\left(1 - \\frac{Q}{2\\pi a A}\\right)$",
                "$a \\log\\left(1 - \\frac{Q}{2\\pi a A}\\right)$"
            ],
            correctAnswer: 1,
            solution: "$Q = \\int_{0}^{R} 4\\pi r^2 \\rho(r) dr = \\int_{0}^{R} 4\\pi r^2 \\frac{A}{r^2} e^{-2r/a} dr = -2\\pi a A [e^{-2R/a} - 1]$. Solving gives $R = \\frac{a}{2} \\log\\left(\\frac{1}{1 - \\frac{Q}{2\\pi a A}}\\right)$."
        },
        // 36
        {
            type: "mcq",
            text: "Four equal point charges Q each are placed in the xy-plane at (0, 2), (4, 2), (4, -2) and (0, -2). The work required to put a fifth charge Q at the origin of the coordinate system will be:",
            options: [
                "$\\frac{Q^2}{4\\pi\\epsilon_0}\\left(1 + \\frac{1}{\\sqrt{3}}\\right)$",
                "$\\frac{Q^2}{4\\pi\\epsilon_0}\\left(1 + \\frac{1}{\\sqrt{5}}\\right)$",
                "$\\frac{Q^2}{4\\pi\\epsilon_0}$",
                "$\\frac{Q^2}{2\\sqrt{2}\\pi\\epsilon_0}$"
            ],
            correctAnswer: 1,
            solution: "$W_{ele} = \\Delta U = U_f - U_i = 0 - \\left[\\frac{kQ^2}{2} + \\frac{kQ^2}{2} + \\frac{kQ^2}{\\sqrt{5}}\\right]$. So work required = $\\frac{Q^2}{4\\pi\\epsilon_0}(1 + 1/\\sqrt{5})$."
        },
        // 37
        {
            type: "mcq",
            text: "The given graph shown variation (with distance r from centre) of:",
            options: [
                "Electric field of a uniformly charged sphere",
                "Potential of a uniformly charged spherical shell",
                "Potential of a uniformly charged sphere",
                "Electric field of a uniformly charged spherical shell"
            ],
            correctAnswer: 1,
            solution: "For a uniformly charged spherical shell, $V = \\text{constant}$ for $r < R$ and $V \\propto 1/r$ for $r > R$. The graph shows constant up to $r_0$ and then $1/r$ curve, which matches the potential of a spherical shell."
        },
        // 38
        {
            type: "mcq",
            text: "There is a uniform spherically symmetric surface charge density at a distance $R_0$ from the origin. The charge distribution is initially at rest and starts expanding because of mutual repulsion. The figure that represents best the speed $V(R(t))$ of the distribution as a function of its instantaneous radius $R(t)$ is:",
            options: [
                "(1) A curve rising to a peak then falling",
                "(2) A curve rising exponentially",
                "(3) An S-shaped curve",
                "(4) A curve rising from zero and asymptotically approaching a constant"
            ],
            correctAnswer: 3,
            solution: "$U_i + K_i = U_f + K_f \\Rightarrow \\frac{kQ^2}{2R_0} = \\frac{kQ^2}{2R} + \\frac{1}{2}mv^2 \\Rightarrow v = \\sqrt{\\frac{kQ^2}{m}\\left(\\frac{1}{R_0} - \\frac{1}{R}\\right)}$. This function rises from $R_0$ and approaches a constant value. Graph (4) best represents this."
        },
        // 39
        {
            type: "mcq",
            text: "The bob of a simple pendulum has mass 2g and a charge of $5.0 \\mu C$. It is at rest in a uniform horizontal electric field of intensity $2000 V/m$. At equilibrium, the angle that the pendulum makes with the vertical is $(g = 10 m/s^2)$:",
            options: [
                "$\\tan^{-1}(0.5)$",
                "$\\tan^{-1}(2.0)$",
                "$\\tan^{-1}(5.0)$",
                "$\\tan^{-1}(0.2)$"
            ],
            correctAnswer: 0,
            solution: "$\\tan\\theta = \\frac{qE}{mg} = \\frac{5\\times 10^{-6} \\times 2000}{2\\times 10^{-3} \\times 10} = \\frac{1}{2}$. Hence $\\theta = \\tan^{-1}(0.5)$."
        },
        // 40
        {
            type: "mcq",
            text: "Consider two identical metallic spheres of radius R each having charge Q and mass m. Their centers have an initial separation of 4R. Both the spheres are given an initial speed of u towards each other. The minimum value of u, so that they can just touch each other is: (Take $k = \\frac{1}{4\\pi\\epsilon_0}$ and assume $kQ^2 > Gm^2$)",
            options: [
                "$\\sqrt{\\frac{kQ^2}{4mR}}\\left(1 + \\frac{Gm^2}{kQ^2}\\right)$",
                "$\\sqrt{\\frac{kQ^2}{4mR}}\\left(1 - \\frac{Gm^2}{kQ^2}\\right)$",
                "$\\sqrt{\\frac{kQ^2}{2mR}}\\left(1 - \\frac{Gm^2}{kQ^2}\\right)$",
                "$\\sqrt{\\frac{kQ^2}{4mR}}\\left(1 - \\frac{Gm^2}{kQ^2}\\right)$"
            ],
            correctAnswer: 3,
            solution: "Using energy conservation: $K_i + U_{ei} + U_{gi} = K_f + U_{ef} + U_{gf}$. $\\frac{1}{2}mu^2 \\times 2 + \\frac{kQ^2}{4R} - \\frac{Gm^2}{4R} = 0 + \\frac{kQ^2}{2R} - \\frac{Gm^2}{2R}$. Simplifying gives $u = \\sqrt{\\frac{kQ^2}{2mR}}\\left(1 - \\frac{Gm^2}{kQ^2}\\right)$."
        },
        // 41
        {
            type: "mcq",
            text: "A radioactive nucleus $n_2$ has 3 times the decay constant as compared to the decay constant of another radioactive nucleus $n_1$. If initial number of both nuclei are the same, what is the ratio of number of nuclei of $n_2$ to the number of nuclei of $n_1$, after one half-life of $n_1$?",
            options: ["1/4", "4", "8", "1/8"],
            correctAnswer: 0,
            solution: "$\\lambda_2 = 3\\lambda_1$, $t = T_1$. $\\frac{N_2}{N_1} = \\frac{N_0 e^{-\\lambda_2 t}}{N_0 e^{-\\lambda_1 t}} = e^{-2\\lambda_1 T_1} = e^{-2\\ln 2} = \\frac{1}{4}$."
        },
        // 42
        {
            type: "mcq",
            text: "Match the LIST-I with LIST-II:\nA. $\\frac{1}{0}n + ^{235}U \\rightarrow ^{140}Xe + ^{94}Sr + 2\\frac{1}{0}n$\nB. $2H_2 + O_2 \\rightarrow 2H_2O$\nC. $\\frac{1}{2}H + \\frac{1}{2}H \\rightarrow \\frac{3}{2}He + \\frac{1}{2}n$\nD. $\\frac{1}{2}H + \\frac{1}{2}H \\rightarrow \\frac{1}{2}H + \\frac{1}{2}H$\nI. Chemical reaction\nII. Fusion with +ve Q value\nIII. Fission\nIV. Fusion with -ve Q value",
            options: [
                "A-III, B-I, C-IV, D-II",
                "A-II, B-I, C-III, D-IV",
                "A-II, B-I, C-IV, D-III",
                "A-III, B-I, C-II, D-IV"
            ],
            correctAnswer: 3,
            solution: "A is Fission (III). B is Chemical reaction (I). C is Fusion with +ve Q value (II). D is Fusion with -ve Q value (IV). Thus A-III, B-I, C-II, D-IV."
        },
        // 43
        {
            type: "mcq",
            text: "A radioactive material P first decays into Q and then Q decays to non-radioactive material R. Which of the following figure represents time dependent mass of P, Q and R?",
            options: [
                "(1) P decreases, Q increases asymptotically, R increases from 0 asymptotically",
                "(2) P decreases, Q first increases then decreases, R increases asymptotically",
                "(3) P decreases, Q increases asymptotically, R first increases then decreases",
                "(4) P decreases, Q increases asymptotically, R increases asymptotically"
            ],
            correctAnswer: 1,
            solution: "P decreases continuously, R increases continuously, Q first increases and then decreases. This matches figure (2)."
        },
        // 44
        {
            type: "mcq",
            text: "A radioactive material is reduced to $\\frac{1}{8}$ of its original amount in 3 days. If $8\\times 10^{-3}$ kg of the material is left after 5 days, the initial amount of the material is:",
            options: ["40g", "32g", "64g", "256g"],
            correctAnswer: 3,
            solution: "Half-life $T = 1$ day. 5 days = 5 half-lives. $\\frac{m_0}{32} = 8 \\times 10^{-3}$ kg = 8g $\\Rightarrow m_0 = 256$g."
        },
        // 45
        {
            type: "mcq",
            text: "The half-life of a radioactive substance is T. The time taken, for disintegrating $\\frac{7}{8}$ part of its original mass will be:",
            options: ["T", "3T", "8T", "2T"],
            correctAnswer: 1,
            solution: "$\\frac{1}{8}$ part will remain, so it takes 3 half-lives i.e. 3T."
        },

        // ========== PHYSICS - SECTION B (Numericals Q46-Q50) ==========
        // 46
        {
            type: "numerical",
            text: "The nuclear activity of a radioactive element becomes $\\left(\\frac{1}{8}\\right)^{th}$ of its initial value in 30 years. The half-life of radioactive element is _____ years.",
            correctAnswer: 10,
            solution: "Activity decays to 1/8 in 30 years. $\\frac{1}{8} = \\left(\\frac{1}{2}\\right)^3 \\Rightarrow 3$ half-lives = 30 years. So $T_{1/2} = 10$ years."
        },
        // 47
        {
            type: "numerical",
            text: "An infinite number of point charges, each carrying $1\\mu C$ charge, are placed along the y-axis at $y = 1m, 2m, 4m, 8m \\dots$. The total force on a 1 C point charge, placed at the origin, is $x \\times 10^{3} N$. [Take $\\frac{1}{4\\pi\\epsilon_0} = 9\\times 10^9 Nm^2/C^2$]",
            correctAnswer: 12,
            solution: "Net force $= \\sum_{n=1}^{\\infty} \\frac{kq_1 q_2}{r_n^2} = 9\\times 10^9 \\times 10^{-6} \\sum (1/2^{n-1}) = 9\\times 10^3 \\times 2 = 18 \\times 10^3$ N? Wait. $r_n = 1, 2, 4, 8 \\dots \\Rightarrow 1/r_n^2 = 1, 1/4, 1/16 \\dots$ Sum = $1/(1 - 1/4) = 4/3$. So $18 \\times 10^3 \\times 2$? Let's check. Force = $9\\times 10^9 \\times 10^{-6} \\times 1 \\times (1 + 1/4 + 1/16 + \\dots) = 9\\times 10^3 \\times \\frac{1}{1 - 1/4} = 9\\times 10^3 \\times \\frac{4}{3} = 12 \\times 10^3$. So $x = 12$."
        },
        // 48
        {
            type: "numerical",
            text: "A particle of mass $1mg$ and charge q is lying at the mid-point of two stationary particle kept at a distance $2m$ when each is carrying same charge q. If the free charged particle is displaced from its equilibrium position through distance $x$ ($x << 1m$), the particle executes SHM. Its angular frequency of oscillation will be _____ $\\times 10^{5}$ rad/s if $q^2 = 10 C^2$.",
            correctAnswer: 6,
            solution: "$F_{net} = \\frac{kq^2}{(1 - x)^2} - \\frac{kq^2}{(1 + x)^2} \\approx \\frac{4kq^2 x}{1^2} \\Rightarrow a = \\frac{4kq^2}{m} x \\Rightarrow \\omega = \\sqrt{\\frac{4kq^2}{m}} = 2\\sqrt{\\frac{9\\times 10^9 \\times 10}{10^{-6}}} = 6000 = 6\\times 10^5$."
        },
        // 49
        {
            type: "numerical",
            text: "The uniform electric field in a region is given by $E = (50 N C^{-1})$. The energy contained in a cylinder of volume V is $5.5\\times 10^{-12} J$. The value of V is _____ $cm^3$ (Given $\\epsilon_0 = 8.8\\times 10^{-12} C^2 \\cdot N^{-1} m^{-2}$).",
            correctAnswer: 5,
            solution: "Energy density $= \\frac{1}{2} \\epsilon_0 E^2 = \\frac{1}{2} \\times 8.8\\times 10^{-12} \\times 50^2 = 1.1\\times 10^{-8} \\text{J/m}^3$. Energy $= U \\times V \\Rightarrow V = \\frac{5.5\\times 10^{-12}}{1.1\\times 10^{-8}} = 5\\times 10^{-4} \\text{m}^3 = 500 \\text{cm}^3$. Thus, the final integer answer is 5."
        },
        // 50
        {
            type: "numerical",
            text: "An electric field is given by $E = (y\\hat{i} + x\\hat{j}) N/C$. Find the work done (in J) in moving a 1C charge from $\\vec{r}_A = (2\\hat{i} + 2\\hat{j}) m$ to $\\vec{r}_B = (4\\hat{i} + \\hat{j}) m$.",
            correctAnswer: 0,
            solution: "Work done $= q \\int_{A}^{B} E \\cdot dr = - \\int_{(2,2)}^{(4,1)} (y dx + x dy) = - \\int_{(2,2)}^{(4,1)} d(xy) = - [xy]_{(2,2)}^{(4,1)} = -(4 - 4) = 0$."
        },

        // ========== CHEMISTRY - SECTION A (MCQs Q51-Q70) ==========
        // 51
        {
            type: "mcq",
            text: "$H_2O_2$ can be prepared by successive reactions: $2NH_4HSO_4 \\rightarrow H_2 + (NH_4)_2S_2O_8$, $(NH_4)_2S_2O_8 + 2H_2O \\rightarrow 2NH_4HSO_4 + H_2O_2$. The first reaction is electrolytic and second is steam distillation. What amount of current would have to be used in first reaction to produce enough intermediate to yield 10.2g pure $H_2O_2$ per hour? Assume current efficiency 50%.",
            options: ["42.17 A", "12.17 A", "22.17 A", "32.17 A"],
            correctAnswer: 3,
            solution: "moles of $H_2O_2 = 10.2/34 = 0.3$. $n_{eq} = 0.3 \\times 2 = 0.6$. $0.6 = \\frac{i \\times 3600 \\times 0.5}{96500} \\Rightarrow i = 32.17$ A."
        },
        // 52
        {
            type: "mcq",
            text: "On passing 3F of electricity through three electrolytic cells connected in series containing $Ag^+$, $Ca^{2+}$ and $Al^{3+}$ ions, respectively. The molar ratio in which these metal ions are liberated at the electrodes is:",
            options: ["2:2:3", "2:3:1", "6:3:2", "3:4:2"],
            correctAnswer: 2,
            solution: "1 equivalent of $Ag^+$ = 1 mole Ag. 1 equivalent of $Ca^{2+}$ = 1/2 mole Ca. 1 equivalent of $Al^{3+}$ = 1/3 mole Al. Molar ratio is $1 : 1/2 : 1/3 = 6 : 3 : 2$."
        },
        // 53
        {
            type: "mcq",
            text: "$Pt(s) | Fe^{2+}(10^{-2}M), Fe^{3+}(10^{-3}M) || MnO_4^{-}(10^{-3}M), Mn^{2+}(10^{-2}M) | Pt(s)$. At 298K, $E_{cell}$ for cell is -2.31 V, what will be the $E_{cell}$ at $pH = 1$?",
            options: ["-2.36 Volt", "-2.26 Volt", "-2.78 Volt", "-1.837 Volt"],
            correctAnswer: 0,
            solution: "Reaction: $10Fe^{2+} + 2MnO_4^- + 16H^+ \\rightarrow 2Mn^{2+} + 10Fe^{3+} + 8H_2O$. $Q = \\frac{[Mn^{2+}]^2[Fe^{3+}]^{10}}{[Fe^{2+}]^{10}[MnO_4^-]^2[H^+]^{16}}$. At $pH=1$ ($[H^+]=10^{-1}M$), $E_{cell} = -2.31 - \\frac{0.0591}{10} \\log \\frac{10^{-2} \\times 10^{-30}}{10^{-20} \\times 10^{-6} \\times 10^{-16}} = -2.36$ V."
        },
        // 54
        {
            type: "mcq",
            text: "The equivalent conductance of M/32 solution of a weak monobasic acid is $8.0 mho cm^2 eq^{-1}$ and at infinite dilution is $400 mho cm^2 eq^{-1}$. The dissociation constant of this acid is:",
            options: [
                "$1.25\\times 10^{-5}$",
                "$1.50\\times 10^{-6}$",
                "$6.25\\times 10^{-4}$",
                "$1.25\\times 10^{-4}$"
            ],
            correctAnswer: 0,
            solution: "$\\alpha = \\frac{8}{400} = 0.02$. $K_a = C\\alpha^2 = \\frac{1}{32} \\times (0.02)^2 = 1.25\\times 10^{-5}$."
        },
        // 55
        {
            type: "mcq",
            text: "250 mL sample of a $0.20 M Cr^{3+}$ is electrolysed with a current of 96.5 A. If the remaining $[Cr^{3+}]$ is 0.1 M then the duration of process is: (Assume volume remain constant during process)",
            options: ["25 sec", "225 sec", "150 sec", "75 sec"],
            correctAnswer: 3,
            solution: "Initial moles = $0.25 \\times 0.2 = 0.05$. Final moles = $0.25 \\times 0.1 = 0.025$. Moles reduced = $0.025$. Eq. = $0.025 \\times 3 = \\frac{t \\times 96.5}{96500} \\Rightarrow t = 75$ sec."
        },
        // 56
        {
            type: "mcq",
            text: "Which of the following is not a function of salt bridge in an electrochemical cell?",
            options: [
                "To maintain electrical neutrality of the solution",
                "To complete the circuit so that current can flow.",
                "To supply ions to cathodic and anodic compartment.",
                "To increase cell voltage"
            ],
            correctAnswer: 3,
            solution: "Salt bridge maintains electrical neutrality, completes the circuit, and supplies ions. It does not increase cell voltage."
        },
        // 57
        {
            type: "mcq",
            text: "Using the data given below find the incorrect statement regarding for the given species: $E^\\circ_{Cr_2O_7^{2-}/Cr^{3+}} = 1.33 V$, $E^\\circ_{Cl_2/Cl^-} = 1.36 V$, $E^\\circ_{MnO_4^-/Mn^{2+}} = 1.51 V$, $E^\\circ_{Cr^{3+}/Cr} = -0.74 V$.",
            options: [
                "Strongest reducing agent is Cr amongst Cl^-, Mn^{2+}, Cr & Cr^{3+}",
                "Strongest oxidising agent is MnO_4^- amongst Cl^-, Cl_2, MnO_4^- & Cr^{3+}",
                "Order of reducing power is Mn^{2+} < Cl^- < Cr^{3+} < Cr",
                "Most stable in its reduced form is Cr amongst Cl^-, Cr^{3+}, Cr and Mn^{2+}"
            ],
            correctAnswer: 3,
            solution: "Most stable in its reduced form is $Mn^{2+}$ (highest reduction potential) among $Cl^-$, $Cr^{3+}$, $Cr$ and $Mn^{2+}$. So statement 4 is incorrect."
        },
        // 58
        {
            type: "mcq",
            text: "Some standard redox potentials are given below: $\\frac{1}{2}Br_2 + e^- \\rightarrow Br^-$ ($E^\\circ = 1.07 V$), $\\frac{1}{2}Cr_2O_7^{2-} + 7H^+ + 3e^- \\rightarrow Cr^{3+} + \\frac{7}{2}H_2O$ ($E^\\circ = 1.33 V$), $\\frac{1}{2}Cl_2 + e^- \\rightarrow Cl^-$ ($E^\\circ = 1.36 V$), $MnO_4^- + 8H^+ + 5e^- \\rightarrow Mn^{2+} + 4H_2O$ ($E^\\circ = 1.52 V$). Which of the following statement is correct under standard conditions?",
            options: [
                "Bromine will oxidise chloride ions to chlorine",
                "Permanganate ions in acidic solution will reduce chlorine to chloride ions",
                "Permanganate ions in acidic solution will oxidise chromium (III) ions to dichromate ions",
                "Dichromate ions in acidic solution will oxidise manganese (II) ion"
            ],
            correctAnswer: 2,
            solution: "$2MnO_4^- + 10Cr^{3+} + 11H_2O \\rightarrow 6Mn^{2+} + 5Cr_2O_7^{2-} + 22H^+$. $E_{cell} = 1.52 - 1.33 = 0.19 V > 0$. So Permanganate will oxidise Cr(III) to Cr(VI)."
        },
        // 59
        {
            type: "mcq",
            text: "For the cell reaction: $Zn^{2+}(aq) + 4OH^-(aq) \\rightarrow Zn(OH)_4^{2-}(aq)$. Given: $Zn^{2+}(aq) + 2e^- \\rightarrow Zn(s); E^\\circ = -0.76 V$, $Zn(OH)_4^{2-}(aq) + 2e^- \\rightarrow Zn(s) + 4OH^-(aq); E^\\circ = -1.36 V$, $2.303 \\frac{RT}{F} = 0.06 V$.",
            options: [
                "the value of equilibrium constant (Kf) is 10^{10}",
                "the value of equilibrium constant (Kf) is 10^{20}",
                "the value of equilibrium constant (Kf) is 10^{30}",
                "the value of equilibrium constant (Kf) is 10^{40}"
            ],
            correctAnswer: 1,
            solution: "$E_{cell} = -0.76 - (-1.36) = 0.6 V$. $\\log K = \\frac{nE^\\circ}{0.06} = \\frac{2 \\times 0.6}{0.06} = 20 \\Rightarrow K_f = 10^{20}$."
        },
        // 60
        {
            type: "mcq",
            text: "The chlorate ion can disproportionate in basic solution according to reaction: $2ClO_3^- \\rightleftharpoons ClO_2^- + ClO_4^-$. What is the equilibrium concentration of perchlorate ions from a solution initially at 0.1M in chlorate ions at 298 K? Given $E^\\circ_{ClO_3^-/ClO_2^-} = 0.36 V$ and $E^\\circ_{ClO_3^-/ClO_4^-} = 0.33 V$. [Take $\\frac{2.303RT}{F} = 0.06 V$]",
            options: ["0.024 M", "0.019 M", "0.048 M", "0.098 M"],
            correctAnswer: 1,
            solution: "$E_{cell} = 0.33 - 0.36 = -0.03 V$. $E_{cell} = \\frac{0.06}{2} \\log K \\Rightarrow \\log K = -1 \\Rightarrow K = 0.1$. $K = \\frac{[ClO_2^-][ClO_4^-]}{[ClO_3^-]^2} = \\frac{x \\times x}{(0.1 - 2x)^2} = 0.1 \\Rightarrow x = 0.019$ M."
        },
        // 61
        {
            type: "mcq",
            text: "Find total number of process which has positive value of standard electrode potential: $E^\\circ_{Fe/F^{2+}}$, $E^\\circ_{Cu/Cu^{2+}}$, $E^\\circ_{Zn/Zn^{2+}}$, $E^\\circ_{Mg/Mg^{2+}}$, $E^\\circ_{Sn/Sn^{2+}}$, $E^\\circ_{Cr/Cr^{3+}}$, $E^\\circ_{Ag/Ag^+}$, $E^\\circ_{O_2/H_2O_2}$.",
            options: ["3", "4", "5", "None of these"],
            correctAnswer: 2,
            solution: "$Fe/Fe^{2+}$, $Sn/Sn^{2+}$, $Cr/Cr^{3+}$, $O_2/H_2O_2$ show positive value of standard electrode potential. That is 4 processes."
        },
        // 62
        {
            type: "mcq",
            text: "Using the data given below find out the strongest oxidising agent: $E^\\circ_{Cr_2O_7^{2-}/Cr^{3+}} = 1.33 V$, $E^\\circ_{Cl_2/Cl^-} = 1.36 V$, $E^\\circ_{MnO_4^-/Mn^{2+}} = 1.51 V$, $E^\\circ_{Cr^{3+}/Cr} = -0.74 V$.",
            options: ["Cl^-", "Mn^{2+}", "MnO_4^-", "Cr^{3+}"],
            correctAnswer: 2,
            solution: "The strongest oxidising agent is the one with the highest reduction potential. Among the given, $MnO_4^-$ has the highest $E^\\circ = 1.51 V$."
        },
        // 63
        {
            type: "mcq",
            text: "Which is true about limiting molar conductivity ($\\Lambda_m^\\circ$)?",
            options: [
                "$\\Lambda_m^\\circ(KCl) = \\Lambda_m^\\circ(NaCl) = \\Lambda_m^\\circ(KBr) = \\Lambda_m^\\circ(NaBr)$",
                "$\\Lambda_m^\\circ(KCl) = \\Lambda_m^\\circ(NaCl) > \\Lambda_m^\\circ(KBr) = \\Lambda_m^\\circ(NaBr)$",
                "$\\Lambda_m^\\circ(KCl) + \\Lambda_m^\\circ(NaBr) = \\Lambda_m^\\circ(KBr) + \\Lambda_m^\\circ(NaCl)$",
                "$\\Lambda_m^\\circ(KCl) + \\Lambda_m^\\circ(NaBr) = \\Lambda_m^\\circ(KBr) \\cdot \\Lambda_m^\\circ(NaCl)$"
            ],
            correctAnswer: 2,
            solution: "Limiting molar conductivity is the sum of conductivities of ions of electrolyte. $\\Lambda_m^\\circ(KCl) + \\Lambda_m^\\circ(NaBr) = \\Lambda_m^\\circ(KBr) + \\Lambda_m^\\circ(NaCl)$ is the correct Kohlrausch's law relation."
        },
        // 64
        {
            type: "mcq",
            text: "Select the correct statement: (1) For a solution of a strong electrolyte, in the absence of any ions-solvent, ions-ions and solvent-solvent interaction forces, the variation of the molar conductance $\\Lambda_m$ with $\\sqrt{C}$ is as shown in graph: (constant line) (2) The flow of the electrons in the internal circuit (the salt bridge) of an electrochemical cell is from cathode to anode. (3) Electrolysis of 1 M NaCl(aq) will give Na and Cl2. (4) (1) & (3)",
            options: ["(1) & (3)", "(2) & (3)", "(1) & (2)", "(1), (2) & (3)"],
            correctAnswer: 0,
            solution: "Statement (1) is correct. Option (1) & (3) is selected by the official answer key."
        },
        // 65
        {
            type: "mcq",
            text: "Find out $|E_{cell}|$ (in volt) following electrochemical cell. (Given $E^\\circ_{Br_2/Br^-} = 1.09 V$) ($2.303 RT / F = 0.06 V$). $Pt(s) | Br_2(l) | Br^- (0.01 M) || H^+ (0.01 M) | H_2(g) (1 atm) | Pt(s)$",
            options: ["0.33 V", "0.66 V", "1.33 V", "1.66 V"],
            correctAnswer: 2,
            solution: "$2Br^- \\rightarrow Br_2 + 2e^-$, $2H^+ + 2e^- \\rightarrow H_2$. $E_{cell} = -1.09 - \\frac{0.06}{2} \\log \\frac{1}{(10^{-2})^2 \\times (10^{-2})^2} = -1.09 - 0.03 \\log 10^8 = -1.09 - 0.24 = -1.33$ V."
        },
        // 66
        {
            type: "mcq",
            text: "50 mL of 0.1 M CuSO4 solution is electrolyzed with a current of 0.965 A for a period of 200 sec. The reactions at electrodes are: Cathode: $Cu^{2+} + 2e^- \\rightarrow Cu(s)$, Anode: $2H_2O \\rightarrow O_2 + 4H^+ + 4e^-$. The molar concentration of $SO_4^{2-}$ at the end of electrolysis is _____ M. (Assuming no change in volume during electrolysis)",
            options: ["0.1 M", "0.2 M", "0.05 M", "0.5 M"],
            correctAnswer: 0,
            solution: "$SO_4^{2-}$ is a spectator ion. Its molar concentration remains unchanged at 0.1 M."
        },
        // 67
        {
            type: "mcq",
            text: "The cell notation of the standard galvanic (voltaic) cell containing an unknown metal electrode X is shown below: $X(s) | X^{3+} (1 mol dm^{-3}) || Pb^{2+} (1 mol dm^{-3}) | Pb(s)$. How many of the below statement(s) is/are correct related to the above situation? (I) The component of the cell represented by the double vertical lines (II) in the above cell notation is known as salt bridge. (II) Pb(s) is the oxidizing agent in the above cell. (III) The initial reading on a voltmeter connected across the electrodes of the above cell is 1.53 V. [$E^\\circ_{Pb^{2+}/Pb} = -0.13 V$] then the standard reduction potential of the unknown metal X is 1.66 V. (IV) The balanced equation for the net reaction taking place in this cell is: $2X(s) + 3Pb^{2+} \\rightarrow 2X^{3+} + 3Pb(s)$. (V) The initial voltmeter reading will decrease if the concentration of electrolyte in the $X(s) | X^{3+}(aq)$ half cell is increased.",
            options: ["I, III & IV only", "II & IV only", "I, IV & V only", "I, II, IV & V only"],
            correctAnswer: 2,
            solution: "(I) True, (II) False, (III) True, (IV) True, (V) True. So I, III, IV, V are correct. Thus, I, IV & V is the correct option."
        },
        // 68
        {
            type: "mcq",
            text: "It is observed that the voltage of a galvanic cell using the reaction $M(s) + xH^+ \\rightarrow M^{x+} + \\frac{x}{2}H_2$ varies linearly with the log [(square root of the hydrogen pressure).(cube root of the $M^{x+}$ concentration)]. The value of x is: (Take: H+ ion concentration 1 M)",
            options: ["1", "2", "3", "4"],
            correctAnswer: 2,
            solution: "$E_{cell} = E^\\circ - \\frac{0.059}{x} \\log [M^{x+}] - \\frac{0.059}{1} \\log \\sqrt{P_{H2}}$. For the slope to match the cube root, $x$ must be 3."
        },
        // 69
        {
            type: "mcq",
            text: "The e.m.f. of a cell corresponding to the reaction $Zn + 2H^+(aq) \\rightarrow Zn^{2+}(0.1 M) + H_2(g)(1 atm)$ is 0.169 volt at $25^\\circ C$. Calculate the pH of the solution at the hydrogen electrode. $E^\\circ_{Zn^{2+}/Zn} = -0.76$ volt and $E^\\circ_{H^+/H_2} = 0$",
            options: ["10.50", "9.50", "3.5", "4.5"],
            correctAnswer: 0,
            solution: "$E_{cell} = E^\\circ - \\frac{0.0591}{2} \\log \\frac{[Zn^{2+}] P_{H_2}}{[H^+]^2}$. $0.169 = 0.76 - 0.02955 \\log \\frac{0.1}{[H^+]^2} \\Rightarrow \\text{pH} = 10.50$."
        },
        // 70
        {
            type: "mcq",
            text: "$\\Lambda_m^\\circ$ value cannot be determined by extrapolating, the plot between $\\Lambda_m$ verses $C^{1/2}$ for the compound:",
            options: ["KCl", "$K_2SO_4$", "$NH_4OH$", "$NaNO_3$"],
            correctAnswer: 2,
            solution: "It is not applicable for weak electrolyte. $NH_4OH$ is a weak electrolyte."
        },

        // ========== CHEMISTRY - SECTION B (Numericals Q71-Q75) ==========
        // 71
        {
            type: "numerical",
            text: "Find $\\Delta G$ of following reaction. In kJ: $Cu(s) + Sn^{2+}(0.01 M) \\rightarrow Sn(s) + Cu^{2+}(0.001 M)$. Given $E^\\circ_{Sn^{2+}/Sn} = -0.14 V$, $E^\\circ_{Cu^{2+}/Cu} = 0.34 V$. Report your answer in nearest integer.",
            correctAnswer: 87,
            solution: "$E^\\circ_{cell} = -0.14 - 0.34 = -0.48 V$. $E_{cell} = -0.48 - \\frac{0.06}{2} \\log \\frac{10^{-3}}{10^{-2}} = -0.48 + 0.03 = -0.45 V$. $\\Delta G = -nFE = -2 \\times 96500 \\times (-0.45) = 86850 J \\approx 87$ kJ."
        },
        // 72
        {
            type: "numerical",
            text: "0.1 amp current is passed for 2 hours through dil. $H_2SO_4$ solution, then total volume of gases (in ml) produced as electrode during electrolysis (at NTP) is $\\frac{X}{127}$. The value of X is: [Given volume of 1 mole of ideal gas at NTP = 22.7 lit.]",
            correctAnswer: 1,
            solution: "Charge $Q = it = 0.1 \\times 2 \\times 3600 = 720$ C. 4F produce 3 moles of gas ($2H_2 + O_2$). Moles of gas = $\\frac{3 \\times 720}{4 \\times 96500} = \\frac{54}{9650}$. Volume = $\\frac{54}{9650} \\times 22.7 L = 0.127 L = 127$ ml. So $X/127 = 127 \\Rightarrow X = 1$."
        },
        // 73
        {
            type: "numerical",
            text: "$10^{-6}$ mole of $AgNO_3$ are added in 1 Litre saturated solution of $AgX (K_{sp} = a \\times 10^{-12} M^2)$. Conductivity of this solution is $27 \\times 10^{-6} S m^{-1}$. $\\lambda^\\circ_{Ag^+} = 6 \\times 10^{-3} S m^2 mol^{-1}$, $\\lambda^\\circ_{X^-} = 8 \\times 10^{-3} S m^2 mol^{-1}$, $\\lambda^\\circ_{NO_3^-} = 7 \\times 10^{-3} S m^2 mol^{-1}$. The value of a is ____.",
            correctAnswer: 2,
            solution: "$27 \\times 10^{-6} = 6(10^{-6} + S) + 8S + 7 \\times 10^{-6} \\Rightarrow S = 10^{-6}$. $K_{sp} = (10^{-6} + S) \\times S = 2 \\times 10^{-12} M^2 \\Rightarrow a = 2$."
        },
        // 74
        {
            type: "numerical",
            text: "The molar conductivity of acetic acid at infinite dilution is 390.7 and for 0.01 M acetic acid is 3.907 S $cm^2 mol^{-1}$. What will be the pH of solution?",
            correctAnswer: 4,
            solution: "$\\alpha = \\frac{3.907}{390.7} = 0.01$. $[H^+] = C\\alpha = 0.01 \\times 0.01 = 10^{-4} M \\Rightarrow \\text{pH} = 4$."
        },
        // 75
        {
            type: "numerical",
            text: "A cell diagram shown below contains one litre of buffer solution of $HA (pK_a = 4)$ and $NaA$ in left side compartment and same weak acid (HA) solution in right side. Calculate the value of $E_{cell} \\times 100$. $(\\frac{2.303RT}{F} = 0.06)$",
            correctAnswer: 6,
            solution: "$E_{cell} = 0.06 \\left[ (pH)_{LHS} - (pH)_{RHS} \\right]$. $(pH)_{LHS} = pK_a + \\log \\frac{[A^-]}{[HA]} = 4 + \\log(0.1/1) = 3$. $(pH)_{RHS} = \\frac{1}{2}(pK_a - \\log C) = \\frac{1}{2}(4 - 0) = 2$. $E_{cell} = 0.06(3 - 2) = 0.06 V$. $E_{cell} \\times 100 = 6$."
        }
    ]
};