window.testBank = window.testBank || {};
window.testBank['test_814'] = {
    title: "MPT-6 (21-09-2026) Pre-Test (Straight Lines)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-09-20T12:00:00Z",
    timeLimitMins: 80,
    examPattern: "main",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // ================================================================
        // SECTION 1 : Single Correct MCQ  (+4, -1, 0)
        // ================================================================
        // 1
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - I (Maximum Marks: 80)</h3><b>Single Correct Answer Type</b><br><br>This section contains <b>20</b> multiple choice questions. Each question has 4 options (1), (2), (3) and (4) for its answer, out of which <b>ONLY ONE</b> option can be correct.<br><br><b>Marking scheme:</b><ul><li><b>Full Marks:</b> +4 for correct answer</li><li><b>Zero Marks:</b> 0 if not attempted</li><li><b>Negative Marks:</b> -1 if not correct</li></ul></div><br>The line joining two points $A(2,0)$ and $B(3,1)$ is rotated about $A$ in the anticlockwise direction through an angle of $15^{\\circ}$. The equation of the line in the new position is :",
            "options": [
                "$x - \\sqrt{3}y - 2 = 0$",
                "$x - 2y - 2 = 0$",
                "$\\sqrt{3}x - y - 2\\sqrt{3} = 0$",
                "$\\sqrt{2}x - y - 2\\sqrt{2} = 0$"
            ],
            "solution": "Slope of AB = 1, angle = 45°. After anticlockwise rotation by 15°, new angle = 60°. Line through A(2,0) with slope tan60° = √3: y = √3(x-2) → √3x - y - 2√3 = 0."
        },
        // 2
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "The set of values of 'b' for which the origin and the point (1,1) lie on the same side of the straight line, $a^{2}x + aby + 1 = 0$ $\\forall a \\in R, b > 0$ are :",
            "options": [
                "$b \\in (2,4)$",
                "$b \\in (0,2)$",
                "$b \\in [0,2]$",
                "$b \\in (2,\\infty)$"
            ],
            "solution": "For origin: 1 > 0. For (1,1): $a^2 + ab + 1 > 0$ for all $a \\in R$. This requires discriminant $b^2 - 4 < 0 \\implies -2 < b < 2$. Since $b > 0$, $b \\in (0,2)$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "The equations of the perpendicular bisectors of the sides AB and AC of a $\\Delta ABC$ are $x - y + 5 = 0$ and $x + 2y = 0$ respectively. If the point A is (1,-2), then the equation of the line BC is :",
            "options": [
                "$14x + 23y = 40$",
                "$14x - 23y = 40$",
                "$23x + 14y = 40$",
                "$23x - 14y = 40$"
            ],
            "solution": "Reflection of A(1,-2) over $x-y+5=0$ gives B(-7,6). Reflection over $x+2y=0$ gives C(11/5, 2/5). Line BC: slope = -14/23. Equation: 14x + 23y = 40."
        },
        // 4
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Consider the family of lines $5x + 3y - 2 + \\lambda_{1}(3x - y - 4) = 0$ and $x - y + 1 + \\lambda_{2}(2x - y - 2) = 0$. Equation of a straight line that belong to both families is -",
            "options": [
                "$25x - 62y + 86 = 0$",
                "$62x - 25y + 86 = 0$",
                "$25x - 62y = 86$",
                "$5x - 2y - 7 = 0$"
            ],
            "solution": "Solving the radical axes of both families: For first family, radical axis is $3x-y-4=0$ and $5x+3y-2=0$ giving $(1,-1)$. For second family, radical axis is $x-y+1=0$ and $2x-y-2=0$ giving $(3,4)$. The common line must pass through both centers. Line through (1,-1) and (3,4): slope = 5/2. Equation: $5x - 2y - 7 = 0$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "The locus of the mid-point of the perpendiculars drawn from points on the line, $x = 2y$ to the line $x = y$ is:",
            "options": [
                "$3x - 2y = 0$",
                "$3x - 3y = 0$",
                "$5x - 7y = 0$",
                "$7x - 5y = 0$"
            ],
            "solution": "Let point on $x=2y$ be $P(2t, t)$. Foot of perpendicular to $x-y=0$ is $Q((2t+t)/2, (2t+t)/2) = (3t/2, 3t/2)$. Midpoint of PQ is $(7t/4, 5t/4)$. Locus: $5x - 7y = 0$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "A straight line L at a distance of 4 units from the origin makes positive intercepts on the coordinate axes and the perpendicular from the origin to this line makes an angle of 60° with the line $x + y = 0$. Then an equation of the line L is -",
            "options": [
                "$(\\sqrt{3} + 1)x + (\\sqrt{3} - 1)y = 8\\sqrt{2}$",
                "$(\\sqrt{3} - 1)x + (\\sqrt{3} + 1)y = 8\\sqrt{2}$",
                "$\\sqrt{3}x + y = 8$",
                "$x + \\sqrt{3}y = 8$"
            ],
            "solution": "Normal angle $\\theta = 75°$. $\\cos 75° = (\\sqrt{3}-1)/(2\\sqrt{2})$, $\\sin 75° = (\\sqrt{3}+1)/(2\\sqrt{2})$. Equation: $x\\cos\\theta + y\\sin\\theta = 4 \\implies (\\sqrt{3}-1)x + (\\sqrt{3}+1)y = 8\\sqrt{2}$."
        },
        // 7
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "If $A(x_{1},y_{1}), B(x_{2},y_{2}), C(x_{3},y_{3})$ are the vertices of the triangle then find equation of median through A.",
            "options": [
                "$\\begin{vmatrix} x & y & 1 \\\\ x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\end{vmatrix} - \\begin{vmatrix} x & y & 1 \\\\ x_1 & y_1 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix} = 0$",
                "$\\begin{vmatrix} x & y & 1 \\\\ x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\end{vmatrix} + \\begin{vmatrix} x & y & 1 \\\\ x_1 & y_1 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix} = 0$",
                "$\\begin{vmatrix} x & y & 1 \\\\ x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\end{vmatrix} + \\begin{vmatrix} x & y & 1 \\\\ x_3 & y_3 & 1 \\\\ x_1 & y_1 & 1 \\end{vmatrix} = 0$",
                "None of these"
            ],
            "solution": "Median through A passes through A and midpoint of BC. Equation: $\\begin{vmatrix} x & y & 1 \\\\ x_1 & y_1 & 1 \\\\ x_2 & y_2 & 1 \\end{vmatrix} + \\begin{vmatrix} x & y & 1 \\\\ x_1 & y_1 & 1 \\\\ x_3 & y_3 & 1 \\end{vmatrix} = 0$."
        },
        // 8
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The point $P(\\alpha, \\alpha + 1)$ will lie inside the triangle with vertices A(0,3), B(-2,0) and C(6,1) if",
            "options": [
                "$\\alpha = -1$",
                "$\\alpha = 2$",
                "$-\\frac{3}{4} < \\alpha < \\frac{2}{7}$",
                "$-\\frac{6}{7} < \\alpha < \\frac{3}{2}$"
            ],
            "solution": "For inside, point must be on same side as third vertex for each side. Side AB: $\\alpha > -4$. Side BC: $\\alpha > -6/7$. Side CA: $\\alpha < 3/2$. Intersection: $-6/7 < \\alpha < 3/2$."
        },
        // 9
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let A and B be two points on positive x-axis and positive y-axis respectively, O being origin. If sides OA and OB, each equal to 'a' are produced to P and Q respectively such that $AP \\cdot BQ = OA \\cdot OB$ then the line PQ always passes through the fixed point",
            "options": [
                "$(a,a)$",
                "$\\left(\\frac{a}{3}, \\frac{a}{3}\\right)$",
                "$\\left(\\frac{a}{2}, \\frac{a}{2}\\right)$",
                "$(2a, 2a)$"
            ],
            "solution": "A(a,0), B(0,a). Let P = (a+p, 0), Q = (0, a+q). AP = p, BQ = q. $pq = a^2$. Line PQ: $\\frac{x}{a+p} + \\frac{y}{a+q} = 1$. Simplifying gives fixed point (a,a)."
        },
        // 10
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "If the three distinct points $(t_{i}, 2at_{i} + at_{i}^{3})$ for i = 1,2,3 are collinear then the sum of the abscissae of the points is",
            "options": [
                "-1",
                "0",
                "1",
                "3"
            ],
            "solution": "Points lie on $y = 2ax + ax^3$. For three collinear points on this curve, the sum of x-coordinates is 0 (coefficient of $x^2$ is 0)."
        },
        // 11
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Equation of straight line $ax + by + c = 0$, where $3a + 4b + c = 0$, which is at maximum distance from (1,-2), is",
            "options": [
                "$3x + y - 17 = 0$",
                "$4x + 3y - 24 = 0$",
                "$3x + 4y - 25 = 0$",
                "$x + 3y - 15 = 0$"
            ],
            "solution": "Line passes through (3,4). Distance maximized when line is perpendicular to line joining (3,4) and (1,-2). Slope of joining = 3, so required slope = -1/3. Equation: $x + 3y - 15 = 0$."
        },
        // 12
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "m, n are integers with $0 < n < m$. A is the point (m, n) on the cartesian plane. B is the reflection of A in the line $y = x$. C is the reflection of B in the Y-axis. D is the reflection of C in the X-axis and E is the reflection of D in the Y-axis. The area of the pentagon ABCDE, is",
            "options": [
                "$2m(m + n)$",
                "$m(m + 3n)$",
                "$m(2m + 3n)$",
                "None of these"
            ],
            "solution": "A = (m, n). B = (n, m). C = (-n, m). D = (-n, -m). E = (n, -m).<br>Area of pentagon = Area of rectangle formed by B, D extended + triangles = $m(m+3n)$."
        },
        // 13
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $A(1,1)$ and $B(3,2)$ be two points. If C is a point on X-axis such that $AC + BC$ is minimum, then the coordinates are",
            "options": [
                "$\\left(\\frac{5}{3}, 0\\right)$",
                "$\\left(\\frac{1}{3}, 0\\right)$",
                "$(3, 0)$",
                "None of these"
            ],
            "solution": "Reflect A(1,1) over x-axis to A'(1,-1). Line A'B intersects x-axis at C. Slope = 3/2. Equation: y+1 = (3/2)(x-1). At y=0: x = 5/3. So C = (5/3, 0)."
        },
        // 14
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let A and B have coordinates $(x_1, y_1)$ and $(x_2, y_2)$, respectively. We define the distance between A and B as $d(A,B) = \\max\\{|x_2 - x_1|, |y_2 - y_1|\\}$. If $d(O,A) = 1$, where O is origin, then the locus of A is",
            "options": [
                "a square",
                "pair of parallel lines",
                "a square of area 2 sq units",
                "a square of area 8 sq units"
            ],
            "solution": "$\\max\\{|x|, |y|\\} = 1$ gives the boundary of a square with vertices (±1, ±1). Area = 4 sq units, but the locus is a square. Hence, option (A)."
        },
        // 15
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "The distance between the two parallel lines is 1 unit. A point A is chosen to lie between the lines at a distance d from one of them. $\\Delta ABC$ is equilateral with B on one line and C on the other parallel line. Then, length of the side of the equilateral triangle is",
            "options": [
                "$\\frac{2}{3}\\sqrt{d^2 + d + 1}$",
                "$2\\sqrt{\\frac{d^2 - d + 1}{3}}$",
                "$2\\sqrt{d^2 + d + 1}$",
                "$\\sqrt{d^2 - d + 1}$"
            ],
            "solution": "Using coordinate geometry setup, the side length of the equilateral triangle is $2\\sqrt{\\frac{d^2 - d + 1}{3}}$."
        },
        // 16
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Number of values of $\\lambda$ such that $(\\lambda^2 + 1, \\lambda)$ is the mirror image of $(\\lambda, \\lambda + 1)$ w.r.t. $x + 2y - 1 = 0$",
            "options": ["0", "1", "2", "3"],
            "solution": "The midpoint must satisfy the line and the line joining them must be perpendicular."
        },
        // 17
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "The number of triangles having two vertices as (1,2) and (6,2) and incentre (4,6), is",
            "options": ["2", "1", "infinite", "0"],
            "solution": "The two given vertices lie on the horizontal line y=2. The incentre (4,6) is above. For the incentre to be equidistant from all three sides, there are exactly 2 possible positions for the third vertex (symmetric about the perpendicular bisector). Hence, 2 triangles."
        },
        // 18
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If AD, BE and CF are the altitudes of $\\Delta ABC$ whose vertex A is the point (-4,5). The coordinates of the points E and F are (4,1) and (-1,-4) respectively. Then, equation of BC is",
            "options": [
                "$3x - 4y - 28 = 0$",
                "$4x + 3y + 28 = 0$",
                "$3x - 4y + 28 = 0$",
                "$x + 2y + 7 = 0$"
            ],
            "solution": "Line AB: 3x+y+7=0; Line AC: x+2y-6=0. Altitude CF ⊥ AB through F(-1,-4) is x-3y-11=0. Altitude BE ⊥ AC through E(4,1) is 2x-y-7=0. C = AC ∩ CF = (8,-1), B = AB ∩ BE = (0,-7). Line BC through B and C: 3x - 4y - 28 = 0."
        },
        // 19
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "The vertices of a triangle are $A(m, n)$, $B(12, 19)$ and $C(23, 20)$, where m and n are integers. If its area is 70 sq units and the slope of the median through A is -5, then the last digit of $(m + n)$ is",
            "options": ["3", "5", "7", "8"],
            "solution": "Midpoint of BC = (35/2, 39/2). Slope of median = (n - 39/2)/(m - 35/2) = -5. Area = 70. Solving gives m = 8, n = 9. m + n = 17, last digit = 7."
        },
        // 20
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If the centroid and circumcentre of a triangle are (3,3) and (6,2) respectively, then the orthocentre is",
            "options": ["(-3,5)", "(-3,1)", "(3,-1)", "(9,5)"],
            "solution": "Using Euler's line: Orthocentre H, centroid G, circumcentre O satisfy H = 3G - 2O = 3(3,3) - 2(6,2) = (9,9) - (12,4) = (-3,5)."
        },

        // ================================================================
        // SECTION 2 : Numerical Value  (+4, -1, 0)
        // ================================================================
        // 21
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<div class='section-instruction'><h3>SECTION - II (Maximum Marks: 20)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>5</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>.<br>For each question, enter the correct numerical value of the answer using the mouse and the on-screen virtual numeric keypad in the place designated to enter the answer. If the numerical value has more than two decimal places <b>truncate/round-off</b> the value to <b>TWO</b> decimal places.<br><br><b>Marking scheme:</b><ul><li><b>Full Marks:</b> +4 for correct answer</li><li><b>Zero Marks:</b> 0 if not attempted</li><li><b>Negative Marks:</b> -1 if not correct</li></ul></div><br>Let a ray of light passing through the point (3,10) reflects on the line $2x + y = 6$ and the reflected ray passes through the point (7,2). If the equation of the incident ray is $ax + by + 1 = 0$, then $a^{2} + b^{2} + 3ab$ is equal to",
            "solution": "Image of P(3,10) over line $2x+y=6$ is (-5,6). Reflected ray passes through (-5,6) and (7,2). Slope = -1/3. Equation: $x+3y-13=0$. Intersection with $2x+y=6$ gives Q(1,4). Incident ray through P(3,10) and Q(1,4): $3x-y+1=0$. a=3, b=-1. $a^2+b^2+3ab = 9+1-9 = 1$."
        },
        // 22
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 36,
            "text": "Let ABC be an isosceles triangle in which A is at (-1,0), $\\angle A = \\frac{2\\pi}{3}$, AB = AC and B is on the positive X-axis. If $BC = 4\\sqrt{3}$ and the line BC intersects the line $y = x + 3$ at $(\\alpha, \\beta)$, then $\\frac{\\beta^{4}}{\\alpha^{2}}$ is",
            "solution": "AB=AC=s, B=(-1+s, 0), C=(-1-s/2, s√3/2). BC²=3s²=48 → s=4. B(3,0), C(-3,2√3). Line BC: x+√3y-3=0. Intersection with y=x+3: α=3√3-6, β=3√3-3. β⁴/α² = 36."
        },
// 23
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 48,
            "text": "Consider the triangles with vertices A(2,1), B(0,0) and C(t,4), $t \\in [0,4]$. If the maximum and the minimum perimeters of such triangles are obtained at $t = \\alpha$ and $t = \\beta$ respectively, then $6\\alpha + 21\\beta$ is equal to",
            "solution": "Perimeter $P(t) = AB + BC + CA = \\sqrt{5} + \\sqrt{t^2 + 16} + \\sqrt{(t-2)^2 + 9}$. The minimum of $BC + CA$ occurs when $C(t,4)$ lies on the segment joining $B(0,0)$ and the reflection of $A(2,1)$ across $y = 4$, which is $A'(2,7)$. Line $BA'$ is $y = \\frac{7}{2}x$. At $y = 4$, $t = \\frac{8}{7}$, so $\\beta = \\frac{8}{7}$. Evaluating the boundary points gives $P(0) = \\sqrt{5} + 4 + \\sqrt{13} \\approx 9.84$ and $P(4) = \\sqrt{5} + 4\\sqrt{2} + \\sqrt{13} \\approx 11.50$, so the maximum occurs at $t = 4$, giving $\\alpha = 4$. Therefore, $6\\alpha + 21\\beta = 6(4) + 21\\left(\\frac{8}{7}\\right) = 24 + 24 = 48$."
        },
        // 24
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 348,
            "text": "If the line $l_{1}: 3y - 2x = 3$ is the angular bisector of the lines $l_{2}: x - y + 1 = 0$ and $l_{3}: \\alpha x + \\beta y + 17 = 0$, then $\\alpha^{2} + \\beta^{2} - \\alpha - \\beta$ is equal to",
            "solution": "The intersection of $l_1: 3y - 2x = 3$ and $l_2: x - y + 1 = 0$ is $(0,1)$. Since $l_1$ bisects the angle between $l_2$ and $l_3$, $(0,1)$ must lie on $l_3 \\implies \\alpha(0) + \\beta(1) + 17 = 0 \\implies \\beta = -17$. Taking the point $(-1,0)$ on $l_2$, its reflection $(h,k)$ across $l_1: 2x - 3y + 3 = 0$ satisfies $\\frac{h+1}{2} = \\frac{k-0}{-3} = -2\\frac{2(-1) - 3(0) + 3}{2^2 + (-3)^2} = -\\frac{2}{13} \\implies (h,k) = \\left(-\\frac{17}{13}, \\frac{6}{13}\\right)$. This point lies on $l_3 \\implies \\alpha\\left(-\\frac{17}{13}\\right) - 17\\left(\\frac{6}{13}\\right) + 17 = 0 \\implies \\alpha = 7$. Thus, $\\alpha^2 + \\beta^2 - \\alpha - \\beta = 7^2 + (-17)^2 - 7 - (-17) = 49 + 289 - 7 + 17 = 348$."
        },
        // 25
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 31,
            "text": "A ray of light passing through the point P(2,3) reflects on the X-axis at point A and the reflected ray passes through the point Q(5,4). Let R be the point that divides the line segment AQ internally into the ratio 2:1. Let the co-ordinates of the foot of the perpendicular M from R on the bisector of the angle PAQ be $(\\alpha, \\beta)$. Then, the value of $7\\alpha + 3\\beta$ is equal to",
            "solution": "Reflection of $P(2,3)$ across the x-axis is $P'(2,-3)$. The line connecting $P'$ and $Q(5,4)$ has equation $y + 3 = \\frac{4 - (-3)}{5 - 2}(x - 2) \\implies 7x - 3y - 23 = 0$. The reflection point on the x-axis is $A\\left(\\frac{23}{7}, 0\\right)$. The angle bisector of $\\angle PAQ$ is the normal to the reflecting surface at $A$, which is the vertical line $x = \\frac{23}{7}$. $R$ divides $AQ$ in ratio $2:1$: $R = \\left(\\frac{2(5) + 1(23/7)}{3}, \\frac{2(4) + 1(0)}{3}\\right) = \\left(\\frac{31}{7}, \\frac{8}{3}\\right)$. The foot of the perpendicular $M(\\alpha, \\beta)$ from $R$ to the line $x = \\frac{23}{7}$ is $\\left(\\frac{23}{7}, \\frac{8}{3}\\right)$. Hence, $7\\alpha + 3\\beta = 7\\left(\\frac{23}{7}\\right) + 3\\left(\\frac{8}{3}\\right) = 23 + 8 = 31$."
        }
    ]
};