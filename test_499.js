window.testBank = window.testBank || {};
window.testBank['test_499'] = {
    title: "Straight Lines & Circles - Pure Theory & Formulae",
    category: "Theory and Formulae Tests",
    timeLimitMins: 10,
    randomizePoolSize: 30,
    questions: [
        // ================= STRAIGHT LINES - PURE THEORY =================
        {
            "type": "mcq",
            "text": "The distance formula between two points $(x_1, y_1)$ and $(x_2, y_2)$ is given by:",
            "options": [
                "$\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$",
                "$(x_2 - x_1)^2 + (y_2 - y_1)^2$",
                "$\\sqrt{(x_2 + x_1)^2 + (y_2 + y_1)^2}$",
                "$\\sqrt{x_2^2 + y_2^2} - \\sqrt{x_1^2 + y_1^2}$"
            ],
            "correctAnswer": 0,
            "solution": "The standard distance formula is $\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$."
        },
        {
            "type": "mcq",
            "text": "The formula for the coordinates of a point dividing the line segment joining $(x_1, y_1)$ and $(x_2, y_2)$ internally in the ratio $m:n$ is:",
            "options": [
                "$\\left(\\frac{m x_2 + n x_1}{m+n}, \\frac{m y_2 + n y_1}{m+n}\\right)$",
                "$\\left(\\frac{m x_1 + n x_2}{m+n}, \\frac{m y_1 + n y_2}{m+n}\\right)$",
                "$\\left(\\frac{m x_1 - n x_2}{m-n}, \\frac{m y_1 - n y_2}{m-n}\\right)$",
                "$\\left(\\frac{m x_1 x_2}{m+n}, \\frac{m y_1 y_2}{m+n}\\right)$"
            ],
            "correctAnswer": 0,
            "solution": "The internal section formula is $\\left(\\frac{m x_2 + n x_1}{m+n}, \\frac{m y_2 + n y_1}{m+n}\\right)$."
        },
        {
            "type": "mcq",
            "text": "The coordinates of the centroid of a triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ are given by:",
            "options": [
                "$\\left(\\frac{x_1+x_2+x_3}{3}, \\frac{y_1+y_2+y_3}{3}\\right)$",
                "$\\left(\\frac{x_1+x_2}{2}, \\frac{y_1+y_2}{2}\\right)$",
                "$\\left(\\frac{x_1+x_2+x_3}{2}, \\frac{y_1+y_2+y_3}{2}\\right)$",
                "$\\left(\\frac{x_1-x_2+x_3}{3}, \\frac{y_1-y_2+y_3}{3}\\right)$"
            ],
            "correctAnswer": 0,
            "solution": "The centroid is the arithmetic mean of the coordinates of the vertices."
        },
        {
            "type": "mcq",
            "text": "The area of a triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ is given by the formula:",
            "options": [
                "$\\frac{1}{2} |x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$",
                "$|x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$",
                "$\\frac{1}{3} |x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2)|$",
                "$\\frac{1}{2} |x_1(y_2+y_3) + x_2(y_3+y_1) + x_3(y_1+y_2)|$"
            ],
            "correctAnswer": 0,
            "solution": "The area formula uses the determinant of the vertices divided by 2."
        },
        {
            "type": "mcq",
            "text": "Three points $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$ are collinear if:",
            "options": [
                "$x_1(y_2-y_3) + x_2(y_3-y_1) + x_3(y_1-y_2) = 0$",
                "$x_1(y_2+y_3) + x_2(y_3+y_1) + x_3(y_1+y_2) = 0$",
                "$x_1 x_2 x_3 + y_1 y_2 y_3 = 0$",
                "$x_1^2 + y_1^2 = x_2^2 + y_2^2 = x_3^2 + y_3^2$"
            ],
            "correctAnswer": 0,
            "solution": "Collinearity condition is determined when the area of the triangle is zero."
        },
        {
            "type": "mcq",
            "text": "The slope of a line passing through points $(x_1, y_1)$ and $(x_2, y_2)$ is defined as:",
            "options": [
                "$\\frac{y_2 - y_1}{x_2 - x_1}$",
                "$\\frac{x_2 - x_1}{y_2 - y_1}$",
                "$\\frac{y_1 - y_2}{x_1 - x_2}$",
                "$\\frac{y_2 + y_1}{x_2 + x_1}$"
            ],
            "correctAnswer": 0,
            "solution": "Slope $m = \\frac{\\text{Rise}}{\\text{Run}} = \\frac{y_2 - y_1}{x_2 - x_1}$."
        },
        {
            "type": "mcq",
            "text": "What is the slope of a line parallel to the x-axis?",
            "options": ["0", "1", "$\\infty$", "-1"],
            "correctAnswer": 0,
            "solution": "The x-axis has a constant y-value, so its slope is 0."
        },
        {
            "type": "mcq",
            "text": "What is the slope of a line perpendicular to the x-axis (parallel to the y-axis)?",
            "options": ["$\\infty$", "0", "1", "-1"],
            "correctAnswer": 0,
            "solution": "A vertical line has an undefined slope, often represented as $\\infty$."
        },
        {
            "type": "mcq",
            "text": "What is the condition for two straight lines with slopes $m_1$ and $m_2$ to be parallel?",
            "options": ["$m_1 = m_2$", "$m_1 m_2 = -1$", "$m_1 + m_2 = 0$", "$m_1 - m_2 = 1$"],
            "correctAnswer": 0,
            "solution": "Parallel lines have equal slopes ($m_1 = m_2$)."
        },
        {
            "type": "mcq",
            "text": "What is the condition for two straight lines with slopes $m_1$ and $m_2$ to be perpendicular?",
            "options": ["$m_1 m_2 = -1$", "$m_1 = m_2$", "$m_1 + m_2 = 1$", "$m_1 - m_2 = 0$"],
            "correctAnswer": 0,
            "solution": "The product of slopes of perpendicular lines is $-1$."
        },
        {
            "type": "mcq",
            "text": "The slope-intercept form of a straight line with slope $m$ and y-intercept $c$ is:",
            "options": ["$y = mx + c$", "$y = mx - c$", "$x = my + c$", "$x = -my + c$"],
            "correctAnswer": 0,
            "solution": "Slope-intercept form is $y = mx + c$."
        },
        {
            "type": "mcq",
            "text": "The intercept form of a straight line with x-intercept $a$ and y-intercept $b$ is:",
            "options": ["$\\frac{x}{a} + \\frac{y}{b} = 1$", "$\\frac{x}{a} - \\frac{y}{b} = 1$", "$ax + by = 1$", "$\\frac{a}{x} + \\frac{b}{y} = 1$"],
            "correctAnswer": 0,
            "solution": "The intercept form is $\\frac{x}{a} + \\frac{y}{b} = 1$."
        },
        {
            "type": "mcq",
            "text": "The normal form of a line, where $p$ is the perpendicular distance from the origin and $\\alpha$ is the angle made by the normal with the x-axis, is:",
            "options": ["$x \\cos\\alpha + y \\sin\\alpha = p$", "$x \\sin\\alpha + y \\cos\\alpha = p$", "$x \\cos\\alpha - y \\sin\\alpha = p$", "$x \\sin\\alpha - y \\cos\\alpha = p$"],
            "correctAnswer": 0,
            "solution": "Normal form is $x \\cos\\alpha + y \\sin\\alpha = p$."
        },
        {
            "type": "mcq",
            "text": "The angle $\\theta$ between two lines with slopes $m_1$ and $m_2$ is given by the formula:",
            "options": [
                "$\\tan \\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$",
                "$\\tan \\theta = \\left|\\frac{m_1 + m_2}{1 - m_1 m_2}\\right|$",
                "$\\cos \\theta = \\frac{m_1 m_2}{\\sqrt{m_1^2 + m_2^2}}$",
                "$\\sin \\theta = \\frac{m_1 - m_2}{\\sqrt{m_1^2 + m_2^2}}$"
            ],
            "correctAnswer": 0,
            "solution": "The angle formula is $\\tan \\theta = \\left|\\frac{m_1 - m_2}{1 + m_1 m_2}\\right|$."
        },
        {
            "type": "mcq",
            "text": "What is the condition for the lines $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$ to be parallel?",
            "options": [
                "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$",
                "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$",
                "$a_1 a_2 + b_1 b_2 = 0$",
                "$a_1 b_2 + a_2 b_1 = 0$"
            ],
            "correctAnswer": 0,
            "solution": "For parallel lines, coefficients of x and y must be proportional, but constant terms must not."
        },
        {
            "type": "mcq",
            "text": "What is the condition for the lines $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$ to represent the same line?",
            "options": [
                "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} = \\frac{c_1}{c_2}$",
                "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2} \\ne \\frac{c_1}{c_2}$",
                "$a_1 a_2 + b_1 b_2 = 0$",
                "$a_1 b_2 - a_2 b_1 = 0$"
            ],
            "correctAnswer": 0,
            "solution": "For coincident lines, all three ratios must be equal."
        },
        {
            "type": "mcq",
            "text": "What is the condition for the lines $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$ to be perpendicular?",
            "options": ["$a_1 a_2 + b_1 b_2 = 0$", "$\\frac{a_1}{a_2} = \\frac{b_1}{b_2}$", "$a_1 b_2 - a_2 b_1 = 0$", "$a_1 b_2 + a_2 b_1 = 0$"],
            "correctAnswer": 0,
            "solution": "Perpendicular condition is $a_1 a_2 + b_1 b_2 = 0$."
        },
        {
            "type": "mcq",
            "text": "The distance of a point $(x_1, y_1)$ from the line $Ax + By + C = 0$ is given by the formula:",
            "options": [
                "$\\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}$",
                "$\\frac{|A x_1 + B y_1|}{\\sqrt{A^2 + B^2}}$",
                "$\\frac{|A x_1 + B y_1 + C|}{A^2 + B^2}$",
                "$\\frac{A x_1 + B y_1 + C}{\\sqrt{A^2 + B^2}}$"
            ],
            "correctAnswer": 0,
            "solution": "Distance formula is $\\frac{|A x_1 + B y_1 + C|}{\\sqrt{A^2 + B^2}}$."
        },
        {
            "type": "mcq",
            "text": "The distance between two parallel lines $Ax + By + C_1 = 0$ and $Ax + By + C_2 = 0$ is:",
            "options": [
                "$\\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$",
                "$\\frac{|C_1 + C_2|}{\\sqrt{A^2 + B^2}}$",
                "$\\frac{|C_1 - C_2|}{A^2 + B^2}$",
                "$\\frac{|C_1 C_2|}{\\sqrt{A^2 + B^2}}$"
            ],
            "correctAnswer": 0,
            "solution": "The formula is $\\frac{|C_1 - C_2|}{\\sqrt{A^2 + B^2}}$."
        },
        {
            "type": "mcq",
            "text": "The equation of a straight line passing through the origin and making an angle $\\theta$ with the x-axis is:",
            "options": ["$y = (\\tan \\theta) x$", "$y = (\\cot \\theta) x$", "$x = y \\tan \\theta$", "$x = (\\sin \\theta) y$"],
            "correctAnswer": 0,
            "solution": "Slope is $\\tan\\theta$, so $y = \\tan\\theta \\cdot x$."
        },
        {
            "type": "mcq",
            "text": "The equation of a straight line passing through a point $(x_1, y_1)$ with slope $m$ is:",
            "options": ["$y - y_1 = m(x - x_1)$", "$y = mx + c$", "$x - x_1 = m(y - y_1)$", "$y + y_1 = m(x + x_1)$"],
            "correctAnswer": 0,
            "solution": "This is the point-slope form: $y - y_1 = m(x - x_1)$."
        },
        {
            "type": "mcq",
            "text": "The family of lines passing through the intersection of two given lines $L_1 = 0$ and $L_2 = 0$ is given by:",
            "options": ["$L_1 + \\lambda L_2 = 0$", "$L_1 - \\lambda L_2 = 0$", "$L_1 L_2 = 0$", "$L_1 + L_2 = 0$"],
            "correctAnswer": 0,
            "solution": "The family of lines through the intersection point is $L_1 + \\lambda L_2 = 0$."
        },
        {
            "type": "mcq",
            "text": "The condition for three lines $a_1x+b_1y+c_1=0$, $a_2x+b_2y+c_2=0$, $a_3x+b_3y+c_3=0$ to be concurrent is:",
            "options": [
                "$\\begin{vmatrix} a_1 & b_1 & c_1 \\\\ a_2 & b_2 & c_2 \\\\ a_3 & b_3 & c_3 \\end{vmatrix} = 0$",
                "$a_1 b_2 c_3 = a_3 b_2 c_1$",
                "$a_1 + b_1 + c_1 = 0$",
                "$a_1 b_1 + a_2 b_2 + a_3 b_3 = 0$"
            ],
            "correctAnswer": 0,
            "solution": "The determinant of the coefficients must be zero for concurrency."
        },
        {
            "type": "mcq",
            "text": "The equations of the angle bisectors of two lines $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$ are given by:",
            "options": [
                "$\\frac{a_1 x + b_1 y + c_1}{\\sqrt{a_1^2 + b_1^2}} = \\pm \\frac{a_2 x + b_2 y + c_2}{\\sqrt{a_2^2 + b_2^2}}$",
                "$\\frac{a_1 x + b_1 y + c_1}{a_1^2 + b_1^2} = \\pm \\frac{a_2 x + b_2 y + c_2}{a_2^2 + b_2^2}$",
                "$(a_1 x + b_1 y + c_1) = \\pm (a_2 x + b_2 y + c_2)$",
                "$\\frac{a_1 x + b_1 y}{\\sqrt{a_1^2 + b_1^2}} = \\pm \\frac{a_2 x + b_2 y}{\\sqrt{a_2^2 + b_2^2}}$"
            ],
            "correctAnswer": 0,
            "solution": "Angle bisectors use the normalized equation of the lines with square roots."
        },
        {
            "type": "mcq",
            "text": "The foot of the perpendicular from a point $(x_1, y_1)$ to the line $Ax + By + C = 0$ is found using:",
            "options": [
                "$\\frac{x - x_1}{A} = \\frac{y - y_1}{B} = -\\frac{A x_1 + B y_1 + C}{A^2 + B^2}$",
                "$\\frac{x - x_1}{B} = \\frac{y - y_1}{A} = -\\frac{A x_1 + B y_1 + C}{A^2 + B^2}$",
                "$\\frac{x}{A} = \\frac{y}{B} = \\frac{A x_1 + B y_1 + C}{A^2 + B^2}$",
                "$\\frac{x - x_1}{-B} = \\frac{y - y_1}{A} = -\\frac{A x_1 + B y_1 + C}{A^2 + B^2}$"
            ],
            "correctAnswer": 0,
            "solution": "The formula is $\\frac{x - x_1}{A} = \\frac{y - y_1}{B} = -\\frac{A x_1 + B y_1 + C}{A^2 + B^2}$."
        },
        {
            "type": "mcq",
            "text": "The area of the triangle formed by the coordinate axes and the line $\\frac{x}{a} + \\frac{y}{b} = 1$ is:",
            "options": ["$\\frac{1}{2} ab$", "$ab$", "$\\frac{1}{2} a^2 b^2$", "$\\frac{1}{2} (a+b)$"],
            "correctAnswer": 0,
            "solution": "The intercepts are $a$ and $b$, so the area is $\\frac{1}{2} ab$."
        },
        {
            "type": "mcq",
            "text": "The locus of a point equidistant from two fixed points is:",
            "options": ["The perpendicular bisector of the segment", "A circle", "A parabola", "A hyperbola"],
            "correctAnswer": 0,
            "solution": "The perpendicular bisector is the locus of points equidistant from the two endpoints."
        },
        {
            "type": "mcq",
            "text": "When the origin is shifted to a new point $(h, k)$ without rotating the axes, the new coordinates $(X, Y)$ are related to old coordinates $(x, y)$ by:",
            "options": ["$X = x - h, \\quad Y = y - k$", "$X = x + h, \\quad Y = y + k$", "$X = x h, \\quad Y = y k$", "$X = x/h, \\quad Y = y/k$"],
            "correctAnswer": 0,
            "solution": "Translation of origin gives $X = x - h, Y = y - k$."
        },
        {
            "type": "mcq",
            "text": "The line $y = mx$ always passes through which fixed point regardless of the value of $m$?",
            "options": ["The origin $(0,0)$", "$(1, 1)$", "$(0, 1)$", "$(1, 0)$"],
            "correctAnswer": 0,
            "solution": "When $x=0$, $y=0$, so it always passes through the origin."
        },
        {
            "type": "mcq",
            "text": "The slope of the line represented by $Ax + By + C = 0$ is:",
            "options": ["$-\\frac{A}{B}$", "$\\frac{A}{B}$", "$-\\frac{B}{A}$", "$\\frac{B}{A}$"],
            "correctAnswer": 0,
            "solution": "Rewriting as $y = -\\frac{A}{B}x - \\frac{C}{B}$, the slope is $-\\frac{A}{B}$."
        },
        {
            "type": "mcq",
            "text": "The general equation $Ax + By + C = 0$ represents a line parallel to the y-axis if:",
            "options": ["$B = 0$", "$A = 0$", "$C = 0$", "$A = B$"],
            "correctAnswer": 0,
            "solution": "If $B=0$, the equation becomes $x = -C/A$, which is vertical (parallel to y-axis)."
        },
        {
            "type": "mcq",
            "text": "The general equation $Ax + By + C = 0$ represents a line parallel to the x-axis if:",
            "options": ["$A = 0$", "$B = 0$", "$C = 0$", "$A = B$"],
            "correctAnswer": 0,
            "solution": "If $A=0$, the equation becomes $y = -C/B$, which is horizontal (parallel to x-axis)."
        },
        {
            "type": "mcq",
            "text": "The condition for the pair of lines $ax^2 + 2hxy + by^2 = 0$ to be real and distinct is:",
            "options": ["$h^2 > ab$", "$h^2 = ab$", "$h^2 < ab$", "$a + b = 0$"],
            "correctAnswer": 0,
            "solution": "For real and distinct lines, $h^2 > ab$."
        },
        {
            "type": "mcq",
            "text": "The angle between the pair of lines represented by $x^2 - y^2 = 0$ is:",
            "options": ["$90^{\\circ}$", "$45^{\\circ}$", "$60^{\\circ}$", "$0^{\\circ}$"],
            "correctAnswer": 0,
            "solution": "$x^2 = y^2$ gives $y = \\pm x$. Slopes are $1$ and $-1$. Their product is $-1$, so they are perpendicular ($90^{\\circ}$)."
        },
        {
            "type": "mcq",
            "text": "What is the reflection of a point $(x, y)$ about the x-axis?",
            "options": ["$(x, -y)$", "$(-x, y)$", "$(-x, -y)$", "$(y, x)$"],
            "correctAnswer": 0,
            "solution": "Reflection about the x-axis changes the sign of the y-coordinate."
        },
        {
            "type": "mcq",
            "text": "What is the reflection of a point $(x, y)$ about the y-axis?",
            "options": ["$(-x, y)$", "$(x, -y)$", "$(-x, -y)$", "$(y, -x)$"],
            "correctAnswer": 0,
            "solution": "Reflection about the y-axis changes the sign of the x-coordinate."
        },
        {
            "type": "mcq",
            "text": "The transformation for rotation of axes by an angle $\\theta$ is given by:",
            "options": [
                "$x = X \\cos\\theta - Y \\sin\\theta$, $y = X \\sin\\theta + Y \\cos\\theta$",
                "$x = X \\cos\\theta + Y \\sin\\theta$, $y = X \\sin\\theta - Y \\cos\\theta$",
                "$x = X \\sec\\theta + Y \\csc\\theta$, $y = X \\csc\\theta + Y \\sec\\theta$",
                "$x = X \\sin\\theta - Y \\cos\\theta$, $y = X \\cos\\theta + Y \\sin\\theta$"
            ],
            "correctAnswer": 0,
            "solution": "The rotation matrix formula is $x = X \\cos\\theta - Y \\sin\\theta$, $y = X \\sin\\theta + Y \\cos\\theta$."
        },
        
        // ================= CIRCLES - PURE THEORY =================
        {
            "type": "mcq",
            "text": "The center-radius form of a circle with center $(h, k)$ and radius $r$ is:",
            "options": [
                "$(x - h)^2 + (y - k)^2 = r^2$",
                "$(x + h)^2 + (y + k)^2 = r^2$",
                "$x^2 + y^2 + h^2 + k^2 = r^2$",
                "$x^2 + y^2 = r^2$"
            ],
            "correctAnswer": 0,
            "solution": "The standard center-radius form is $(x - h)^2 + (y - k)^2 = r^2$."
        },
        {
            "type": "mcq",
            "text": "For the general equation of a circle $x^2 + y^2 + 2gx + 2fy + c = 0$, the coordinates of the center are:",
            "options": ["$(-g, -f)$", "$(g, f)$", "$(-f, -g)$", "$(g, -f)$"],
            "correctAnswer": 0,
            "solution": "The center is $(-g, -f)$."
        },
        {
            "type": "mcq",
            "text": "For the general equation of a circle $x^2 + y^2 + 2gx + 2fy + c = 0$, the radius $r$ is given by:",
            "options": [
                "$\\sqrt{g^2 + f^2 - c}$",
                "$\\sqrt{g^2 + f^2 + c}$",
                "$g^2 + f^2 - c$",
                "$g + f - c$"
            ],
            "correctAnswer": 0,
            "solution": "The radius is $r = \\sqrt{g^2 + f^2 - c}$."
        },
        {
            "type": "mcq",
            "text": "If the endpoints of a diameter of a circle are $(x_1, y_1)$ and $(x_2, y_2)$, the equation of the circle is:",
            "options": [
                "$(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$",
                "$(x - x_1)(y - y_1) + (x - x_2)(y - y_2) = 0$",
                "$(x + x_1)(x + x_2) + (y + y_1)(y + y_2) = 0$",
                "$\\frac{x - x_1}{x_2 - x_1} + \\frac{y - y_1}{y_2 - y_1} = 1$"
            ],
            "correctAnswer": 0,
            "solution": "The diameter form is $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$."
        },
        {
            "type": "mcq",
            "text": "What is the condition for a general second-degree equation $ax^2 + by^2 + 2hxy + 2gx + 2fy + c = 0$ to represent a circle?",
            "options": ["$a = b$ and $h = 0$", "$a = b$ and $h \\ne 0$", "$a = -b$ and $h = 0$", "$a = b$ and $h = 0$ and $g = f = 0$"],
            "correctAnswer": 0,
            "solution": "For a circle, the $x^2$ and $y^2$ coefficients must be equal ($a=b$) and the $xy$ term must be absent ($h=0$)."
        },
        {
            "type": "mcq",
            "text": "The power of a point $(x_1, y_1)$ with respect to the circle $S = x^2 + y^2 + 2gx + 2fy + c = 0$ is defined as:",
            "options": [
                "$S_1 = x_1^2 + y_1^2 + 2g x_1 + 2f y_1 + c$",
                "$S_1 = x_1^2 + y_1^2 - 2g x_1 - 2f y_1 + c$",
                "$S_1 = x_1^2 + y_1^2 + g^2 + f^2 - c$",
                "$S_1 = x_1 + y_1 + g + f + c$"
            ],
            "correctAnswer": 0,
            "solution": "Power is simply the value obtained by substituting the point into the circle's equation: $S_1$."
        },
        {
            "type": "mcq",
            "text": "The length of the tangent drawn from an external point $(x_1, y_1)$ to the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ is:",
            "options": [
                "$\\sqrt{x_1^2 + y_1^2 + 2g x_1 + 2f y_1 + c}$",
                "$x_1^2 + y_1^2 + 2g x_1 + 2f y_1 + c$",
                "$\\sqrt{x_1^2 + y_1^2 - 2g x_1 - 2f y_1 - c}$",
                "$\\sqrt{g^2 + f^2 - c}$"
            ],
            "correctAnswer": 0,
            "solution": "Length of tangent is $\\sqrt{S_1}$."
        },
        {
            "type": "mcq",
            "text": "The equation of the tangent to the circle $x^2 + y^2 = a^2$ at the point $(x_1, y_1)$ on it is:",
            "options": ["$x x_1 + y y_1 = a^2$", "$x x_1 - y y_1 = a^2$", "$x y_1 + y x_1 = a^2$", "$x x_1 + y y_1 = a$"],
            "correctAnswer": 0,
            "solution": "The tangent at $(x_1, y_1)$ to $x^2+y^2=a^2$ is $x x_1 + y y_1 = a^2$."
        },
        {
            "type": "mcq",
            "text": "The equation of the normal to the circle $x^2 + y^2 = a^2$ at the point $(x_1, y_1)$ is:",
            "options": ["$y x_1 - x y_1 = 0$", "$x x_1 + y y_1 = a^2$", "$x y_1 - y x_1 = 0$", "$x x_1 - y y_1 = a^2$"],
            "correctAnswer": 0,
            "solution": "The normal passes through the center $(0,0)$, so its equation is $y x_1 - x y_1 = 0$."
        },
        {
            "type": "mcq",
            "text": "What is the condition for the line $y = mx + c$ to be a tangent to the circle $x^2 + y^2 = a^2$?",
            "options": ["$c^2 = a^2 (1 + m^2)$", "$c = a m$", "$c^2 = a^2 (1 - m^2)$", "$c = a^2 m^2$"],
            "correctAnswer": 0,
            "solution": "The tangency condition is $c^2 = a^2 (1 + m^2)$."
        },
        {
            "type": "mcq",
            "text": "The chord of contact of tangents drawn from an external point $(x_1, y_1)$ to the circle $x^2 + y^2 = a^2$ is given by:",
            "options": ["$x x_1 + y y_1 = a^2$", "$x x_1 - y y_1 = a^2$", "$x y_1 + y x_1 = a^2$", "$x + y = a^2$"],
            "correctAnswer": 0,
            "solution": "The chord of contact is $x x_1 + y y_1 = a^2$."
        },
        {
            "type": "mcq",
            "text": "The director circle of the circle $x^2 + y^2 = a^2$ (locus of intersection of perpendicular tangents) is:",
            "options": ["$x^2 + y^2 = 2a^2$", "$x^2 + y^2 = a^2$", "$x^2 + y^2 = a$", "$x^2 + y^2 = a^2 + 1$"],
            "correctAnswer": 0,
            "solution": "The director circle is $x^2 + y^2 = 2a^2$."
        },
        {
            "type": "mcq",
            "text": "Two circles with centers $(x_1, y_1)$ and $(x_2, y_2)$ and radii $r_1, r_2$ intersect orthogonally if the distance $d$ between their centers satisfies:",
            "options": ["$d^2 = r_1^2 + r_2^2$", "$d^2 = r_1^2 - r_2^2$", "$d = r_1 + r_2$", "$d = |r_1 - r_2|$"],
            "correctAnswer": 0,
            "solution": "Orthogonal intersection requires $d^2 = r_1^2 + r_2^2$."
        },
        {
            "type": "mcq",
            "text": "What is the condition for the circles $x^2 + y^2 + 2g_1x + 2f_1y + c_1 = 0$ and $x^2 + y^2 + 2g_2x + 2f_2y + c_2 = 0$ to intersect orthogonally?",
            "options": [
                "$2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$",
                "$g_1 g_2 + f_1 f_2 = c_1 - c_2$",
                "$g_1^2 + g_2^2 + f_1^2 + f_2^2 = c_1 + c_2$",
                "$2g_1 g_2 - 2f_1 f_2 = c_1 - c_2$"
            ],
            "correctAnswer": 0,
            "solution": "Condition for orthogonal intersection is $2g_1 g_2 + 2f_1 f_2 = c_1 + c_2$."
        },
        {
            "type": "mcq",
            "text": "The equation of the radical axis (common chord) of two circles $S_1 = 0$ and $S_2 = 0$ is:",
            "options": ["$S_1 - S_2 = 0$", "$S_1 + S_2 = 0$", "$S_1 S_2 = 0$", "$S_1 - S_2 = c$"],
            "correctAnswer": 0,
            "solution": "The radical axis is $S_1 - S_2 = 0$."
        },
        {
            "type": "mcq",
            "text": "The family of circles passing through the intersection points of two given circles $S_1 = 0$ and $S_2 = 0$ is given by:",
            "options": ["$S_1 + \\lambda S_2 = 0$", "$S_1 - \\lambda S_2 = 0$", "$S_1 S_2 = \\lambda$", "$S_1 + S_2 = \\lambda$"],
            "correctAnswer": 0,
            "solution": "Family of circles is $S_1 + \\lambda S_2 = 0$."
        },
        {
            "type": "mcq",
            "text": "The equation of a circle passing through the origin and touching the x-axis at the origin is of the form:",
            "options": ["$x^2 + y^2 + 2fy = 0$", "$x^2 + y^2 + 2gx = 0$", "$x^2 + y^2 = 0$", "$x^2 + y^2 + 2gx + 2fy = 0$"],
            "correctAnswer": 0,
            "solution": "It touches the x-axis at origin, so center is $(0, -f)$, giving $x^2 + y^2 + 2fy = 0$."
        },
        {
            "type": "mcq",
            "text": "The equation of a circle passing through the origin and touching the y-axis at the origin is of the form:",
            "options": ["$x^2 + y^2 + 2gx = 0$", "$x^2 + y^2 + 2fy = 0$", "$x^2 + y^2 = 0$", "$x^2 + y^2 + 2gx + 2fy = 0$"],
            "correctAnswer": 0,
            "solution": "It touches the y-axis at origin, so center is $(-g, 0)$, giving $x^2 + y^2 + 2gx = 0$."
        },
        {
            "type": "mcq",
            "text": "The circle $x^2 + y^2 + 2gx + 2fy + c = 0$ will touch the x-axis if:",
            "options": ["$g^2 = c$", "$f^2 = c$", "$g^2 = f^2$", "$g = f$"],
            "correctAnswer": 0,
            "solution": "For touching the x-axis, the distance from center to x-axis ($|f|$) equals the radius. Squaring gives $g^2 = c$."
        },
        {
            "type": "mcq",
            "text": "The circle $x^2 + y^2 + 2gx + 2fy + c = 0$ will touch the y-axis if:",
            "options": ["$f^2 = c$", "$g^2 = c$", "$g = f$", "$g^2 = f^2$"],
            "correctAnswer": 0,
            "solution": "For touching the y-axis, the distance from center to y-axis ($|g|$) equals the radius. Squaring gives $f^2 = c$."
        },
        {
            "type": "mcq",
            "text": "The locus of the centers of all circles passing through two fixed points $A$ and $B$ is:",
            "options": ["The perpendicular bisector of $AB$", "A circle", "A line parallel to $AB$", "The line $AB$"],
            "correctAnswer": 0,
            "solution": "Any point on the perpendicular bisector of $AB$ is equidistant from $A$ and $B$, making it the center of such a circle."
        },
        {
            "type": "mcq",
            "text": "The equation of a circle passing through the origin and having intercepts $a$ and $b$ on the x-axis and y-axis respectively is:",
            "options": ["$x^2 + y^2 - ax - by = 0$", "$x^2 + y^2 + ax + by = 0$", "$x^2 + y^2 - ax + by = 0$", "$x^2 + y^2 + ax - by = 0$"],
            "correctAnswer": 0,
            "solution": "Substituting $(a,0)$ and $(0,b)$ into the general circle equation gives $x^2+y^2-ax-by=0$."
        },
        {
            "type": "mcq",
            "text": "The eccentricity of a circle is:",
            "options": ["0", "1", "2", "$\\frac{1}{2}$"],
            "correctAnswer": 0,
            "solution": "A circle is a special ellipse where $a=b$, so $e = \\sqrt{1 - b^2/a^2} = 0$."
        },
        {
            "type": "mcq",
            "text": "The distance from the center of a circle to its chord of contact for an external point $(x_1, y_1)$ is given by:",
            "options": [
                "$\\frac{a^2}{\\sqrt{x_1^2 + y_1^2}}$",
                "$\\frac{\\sqrt{x_1^2 + y_1^2}}{a^2}$",
                "$a^2$",
                "$\\frac{x_1^2 + y_1^2}{a^2}$"
            ],
            "correctAnswer": 0,
            "solution": "The chord of contact is $x x_1 + y y_1 = a^2$, so its distance from origin is $\\frac{a^2}{\\sqrt{x_1^2 + y_1^2}}$."
        },
        {
            "type": "mcq",
            "text": "If a circle is a 'point circle', what is its radius?",
            "options": ["0", "1", "2", "Infinite"],
            "correctAnswer": 0,
            "solution": "A point circle has a radius of 0."
        },
        {
            "type": "mcq",
            "text": "The length of the intercept cut by the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ on the x-axis is given by:",
            "options": ["$2\\sqrt{g^2 - c}$", "$2\\sqrt{f^2 - c}$", "$\\sqrt{g^2 - c}$", "$\\sqrt{f^2 - c}$"],
            "correctAnswer": 0,
            "solution": "Substituting $y=0$ and solving the quadratic in $x$ gives the chord length $2\\sqrt{g^2 - c}$."
        },
        {
            "type": "mcq",
            "text": "The length of the intercept cut by the circle $x^2 + y^2 + 2gx + 2fy + c = 0$ on the y-axis is given by:",
            "options": ["$2\\sqrt{f^2 - c}$", "$2\\sqrt{g^2 - c}$", "$\\sqrt{f^2 - c}$", "$\\sqrt{g^2 - c}$"],
            "correctAnswer": 0,
            "solution": "Substituting $x=0$ and solving the quadratic in $y$ gives the chord length $2\\sqrt{f^2 - c}$."
        }
    ]
};