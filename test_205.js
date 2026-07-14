window.testBank = window.testBank || {};
window.testBank['test_205'] = {
    title: "Conic Sections - JEE Main Pattern",
    category: "Full Tests - Maths",
    uploadedAt: "2026-07-04T12:00:07Z",
    timeLimitMins: 80,
    randomizePoolSize: 0,
    questions: [
        // ========== MCQ QUESTIONS (Q51 - Q70) ==========
        // 1
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
        // 2
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
        // 3
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
        // 4
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
        // 5
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
        // 6
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
        // 7
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
        // 8
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
        // 9
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
        // 10
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
        // 11
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
        // 12
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
        // 13
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
        // 14
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
        // 15
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
        // 16
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
        // 17
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
        // 18
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
        // 19
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
        // 20
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

        // ========== NUMERICAL QUESTIONS (Q71 - Q75) ==========
        // 21
        {
            type: "numerical",
            text: "Let P(a,b) be a point on the parabola $y^2 = 8x$ such that the tangent at P passes through the centre of the circle $x^2 + y^2 - 10x - 14y + 65 = 0$. Let A be the product of all possible values of a and B be the product of all possible values of b. Then, the value of A + B is equal to ____.",
            correctAnswer: 65,
            solution: "Circle centre is $(5, 7)$. Tangent at $(2t^2, 4t)$ to $y^2=8x$ ($a=2$) is $yt = x + 2t^2$. Passing through $(5,7)$ gives $2t^2 - 7t + 5 = 0 \\implies t=1, 5/2$. Points are $(2,4)$ and $(25/2, 10)$. A = $2 \\times 25/2 = 25$, B = $4 \\times 10 = 40$. A + B = 65."
        },
        // 22
        {
            type: "numerical",
            text: "A circle of radius 2 units passes through the vertex and the focus of the parabola $y^2 = 2x$ and touches the parabola $y = (x - \\frac{1}{4})^2 + \\alpha$, where $\\alpha > 0$. Then, $(4\\alpha - 8)^2$ is equal to ____.",
            correctAnswer: 63,
            solution: "Parabola vertex (0,0), focus (1/2,0). Circle center at (1/4, k). $(1/4)^2 + k^2 = 4 \\implies k^2 = 63/16 \\implies k = 3\\sqrt{7}/4$. Tangency at $x=1/4$ gives $\\alpha = 3\\sqrt{7}/4 + 2$ (since $\\alpha > 0$). Then $4\\alpha - 8 = 4(3\\sqrt{7}/4 + 2 - 2) = 3\\sqrt{7}$. Square: $(3\\sqrt{7})^2 = 63$."
        },
        // 23
        {
            type: "numerical",
            text: "The value of $OP \\cdot OQ$ ( O is the origin) where P and Q are the points from which two mutually perpendicular tangents can be drawn to the ellipse $\\frac{(x-2)^2}{16} + \\frac{(y-3)^2}{9} = 1$, is : ____.",
            correctAnswer: 12,
            solution: "The locus of intersection of perpendicular tangents to an ellipse is its director circle: $(x-2)^2 + (y-3)^2 = 16+9 = 25 \\implies x^2+y^2 -4x -6y -12 = 0$. Power of origin with respect to this circle is $0^2+0^2 - 4(0) - 6(0) - 12 = -12$. Thus $OP \\cdot OQ = 12$."
        },
        // 24
        {
            type: "numerical",
            text: "Let the hyperbola H: $\\frac{x^2}{a^2} - y^2 = 1$ and the ellipse E : $3x^2 + 4y^2 = 12$ be such that the length of latus rectum of H is equal to the length of latus rectum of E. If $e_H$ and $e_E$ are the eccentricities of H and E respectively, then the value of $12(e_H^2 + e_E^2)$ is equal to ____.",
            correctAnswer: 42,
            solution: "Ellipse E: $x^2/4 + y^2/3 = 1$, $LR_E = 2b_E^2/a_E = 3$. Hyperbola H: $b_H^2 = 1$, $LR_H = 2b_H^2/a_H = 2/a$. Given $2/a = 3 \\implies a = 2/3 \\implies a_H^2 = 4/9$. $e_E^2 = 1 - 3/4 = 1/4$, $e_H^2 = 1 + 1/(4/9) = 13/4$. $12(e_H^2 + e_E^2) = 12(13/4 + 1/4) = 12(7/2) = 42$."
        },
        // 25
        {
            type: "numerical",
            text: "An ellipse E: $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$ passes through the vertices of the hyperbola H: $\\frac{x^2}{49} - \\frac{y^2}{64} = -1$. Let the major and minor axes of the ellipse E coincide with the transverse and conjugate axes of the hyperbola H. Let the product of the eccentricities of E and H be $1/2$. If l is the length of the latus rectum of the ellipse E, then the value of $113l$ is equal to ____.",
            correctAnswer: 1552,
            solution: "H is $y^2/64 - x^2/49 = 1$, vertices $(0, \\pm 8) \\implies$ E has $b^2 = 64$. $e_H = \\sqrt{1 + 49/64} = \\sqrt{113}/8$. $e_E \\cdot e_H = 1/2 \\implies e_E = 4/\\sqrt{113} \\implies e_E^2 = 16/113$. For E, $e_E^2 = 1 - a^2/b^2 \\implies 16/113 = 1 - a^2/64 \\implies a^2 = 64 \\times 97/113$. $l = 2a^2/b = 2 \\times (64 \\times 97/113)/8 = 1552/113 \\implies 113l = 1552$."
        }
    ]
};