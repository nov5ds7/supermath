window.testBank = window.testBank || {};
window.testBank['test_203'] = {
    title: "Conic Sections - JEE Advanced",
    category: "Full Tests - Maths",
    uploadedAt: "2026-07-04T12:10:18Z",
    timeLimitMins: 80,
    examPattern: "advance",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // ================================================================
        // SECTION 1 : Single Correct MCQ  (+3, –1, 0)
        // ================================================================
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>SECTION - I</h3><b>Single Correct Type</b><br><br>This section contains <b>5</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>Let curve $C$ be the mirror image of the parabola $y^2 = 4x$ with respect to the line $x + y + 4 = 0$. If $A$ and $B$ are the points of intersection of $C$ with the line $y = -5$, then the distance between $A$ and $B$ is:",
            "options": [
                "4",
                "6",
                "2",
                "8"
            ],
            "correctAnswer": 0,
            "solution": "Instead of finding the equation of $C$, we can reflect the line $y = -5$ across the mirror $x + y + 4 = 0$ to find its intersection with the original parabola $y^2 = 4x$. The image of a point $(x, -5)$ in $x + y + 4 = 0$ is found using $\\frac{x' - x}{1} = \\frac{y' - (-5)}{1} = \\frac{-2(x - 5 + 4)}{1^2 + 1^2} = -(x - 1) = 1 - x$. This gives $x' = x + 1 - x = 1$ and $y' = -5 + 1 - x = -x - 4$. Thus, the reflected line intersects the parabola at $(1, -x - 4)$. Substituting into $y^2 = 4x$ yields $(-x - 4)^2 = 4(1) \\implies x + 4 = \\pm 2$. This gives $x = -2$ and $x = -6$. The points $A$ and $B$ have coordinates $(-2, -5)$ and $(-6, -5)$. The distance between them is $|-2 - (-6)| = 4$."
        },
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

        // ================================================================
        // SECTION 2 : One or More Correct  (+4, –2, partial +1)
        // ================================================================
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "<div class='section-instruction'><h3>SECTION - II</h3><b>One or More Correct Type</b><br><br>This section contains <b>5</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four options may be correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Partial Marks :</b> +1 for each correct option chosen if two or more options are correct and NO incorrect option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>Tangents are drawn to the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{4} = 1$, parallel to the straight line $2x - y = 1$. The points of contact of the tangents on the hyperbola are:",
            "options": [
                "$(\\frac{9}{2\\sqrt{2}}, \\frac{1}{\\sqrt{2}})$",
                "$(-\\frac{9}{2\\sqrt{2}}, -\\frac{1}{\\sqrt{2}})$",
                "$(3\\sqrt{3}, -2\\sqrt{2})$",
                "$(-3\\sqrt{3}, 2\\sqrt{2})$"
            ],
            "correctAnswers": [0, 1],
            "solution": "The given line is $y = 2x - 1$, so the slope of the tangents is $m = 2$. For the hyperbola $a^2 = 9, b^2 = 4$, the equation of a tangent with slope $m$ is $y = mx \\pm \\sqrt{a^2 m^2 - b^2} = 2x \\pm \\sqrt{36 - 4} = 2x \\pm \\sqrt{32} = 2x \\pm 4\\sqrt{2}$. The point of contact is given by $(\\pm \\frac{a^2 m}{\\sqrt{a^2 m^2 - b^2}}, \\pm \\frac{b^2}{\\sqrt{a^2 m^2 - b^2}})$. Substituting the values yields $x = \\pm \\frac{9(2)}{4\\sqrt{2}} = \\pm \\frac{9}{2\\sqrt{2}}$ and $y = \\pm \\frac{4}{4\\sqrt{2}} = \\pm \\frac{1}{\\sqrt{2}}$. Hence, the points of contact are $(\\frac{9}{2\\sqrt{2}}, \\frac{1}{\\sqrt{2}})$ and $(-\\frac{9}{2\\sqrt{2}}, -\\frac{1}{\\sqrt{2}})$."
        },
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let $P$ and $Q$ be distinct points on the parabola $y^2 = 2x$ such that a circle with $PQ$ as diameter passes through the vertex $O$ of the parabola. If $P$ lies in the first quadrant and the area of the triangle $\\triangle OPQ$ is $3\\sqrt{2}$, then which of the following is/are the coordinates of $P$?",
            "options": [
                "$(4, 2\\sqrt{2})$",
                "$(9, 3\\sqrt{2})$",
                "$(\\frac{1}{4}, \\frac{1}{\\sqrt{2}})$",
                "$(1, \\sqrt{2})$"
            ],
            "correctAnswers": [0, 3],
            "solution": "For $y^2 = 2x$, $a = \\frac{1}{2}$. Let $P(\\frac{t_1^2}{2}, t_1)$ and $Q(\\frac{t_2^2}{2}, t_2)$. Since the circle with diameter $PQ$ passes through $O(0,0)$, $OP \\perp OQ \\implies \\frac{t_1}{t_1^2/2} \\cdot \\frac{t_2}{t_2^2/2} = -1 \\implies \\frac{4}{t_1 t_2} = -1 \\implies t_1 t_2 = -4$. The area of $\\triangle OPQ = \\frac{1}{2} |x_1 y_2 - x_2 y_1| = \\frac{1}{4} |t_1 t_2 (t_1 - t_2)| = |-1(t_1 - t_2)| = |t_1 - t_2|$. Given area is $3\\sqrt{2}$, so $|t_1 - t_2| = 3\\sqrt{2}$. Since $P$ is in the first quadrant, $t_1 > 0$ and $t_2 < 0$, meaning $t_1 - t_2 = 3\\sqrt{2}$. Also, $(t_1 + t_2)^2 = (t_1 - t_2)^2 + 4t_1 t_2 = 18 - 16 = 2 \\implies t_1 + t_2 = \\pm \\sqrt{2}$. Adding equations gives $2t_1 = 4\\sqrt{2} \\implies t_1 = 2\\sqrt{2}$ OR $2t_1 = 2\\sqrt{2} \\implies t_1 = \\sqrt{2}$. Thus, $P$ can be $(\\frac{8}{2}, 2\\sqrt{2}) = (4, 2\\sqrt{2})$ or $(\\frac{2}{2}, \\sqrt{2}) = (1, \\sqrt{2})$."
        },
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let the eccentricity of the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$ be reciprocal to that of the ellipse $x^2 + 4y^2 = 4$. If the hyperbola passes through a focus of the ellipse, then:",
            "options": [
                "The equation of the hyperbola is $\\frac{x^2}{3} - \\frac{y^2}{2} = 1$",
                "A focus of the hyperbola is $(2, 0)$",
                "The eccentricity of the hyperbola is $\\sqrt{\\frac{5}{3}}$",
                "The equation of the hyperbola is $x^2 - 3y^2 = 3$"
            ],
            "correctAnswers": [1, 3],
            "solution": "The ellipse is $\\frac{x^2}{4} + \\frac{y^2}{1} = 1 \\implies e_E = \\sqrt{1 - 1/4} = \\frac{\\sqrt{3}}{2}$. Its foci are $(\\pm \\sqrt{3}, 0)$. The hyperbola's eccentricity is $e_H = \\frac{2}{\\sqrt{3}}$. It passes through $(\\pm \\sqrt{3}, 0)$, so $a_H = \\sqrt{3}$. Also, $b_H^2 = a_H^2(e_H^2 - 1) = 3(\\frac{4}{3} - 1) = 1$. The hyperbola's equation is $\\frac{x^2}{3} - \\frac{y^2}{1} = 1 \\implies x^2 - 3y^2 = 3$. The foci of the hyperbola are $(\\pm a_H e_H, 0) = (\\pm \\sqrt{3} \\cdot \\frac{2}{\\sqrt{3}}, 0) = (\\pm 2, 0)$."
        },
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let $P$ be a point on the parabola $y^2 = 4x$ which is at the shortest distance from the center $S$ of the circle $x^2 + y^2 - 4x - 16y + 64 = 0$. Let $Q$ be the point on the circle dividing the line segment $SP$ internally. Then:",
            "options": [
                "$SP = 2\\sqrt{5}$",
                "$SQ : QP = (\\sqrt{5} + 1) : 2$",
                "The x-intercept of the normal to the parabola at $P$ is $6$",
                "The slope of the tangent to the circle at $Q$ is $\\frac{1}{2}$"
            ],
            "correctAnswers": [0, 2, 3],
            "solution": "The circle's center is $S(2, 8)$ and radius $R = \\sqrt{4 + 64 - 64} = 2$. The shortest distance is along the common normal. The normal to $y^2 = 4x$ is $y = -tx + 2t + t^3$. Since it passes through $(2, 8)$, $8 = -2t + 2t + t^3 \\implies t=2$. Thus $P(t^2, 2t) = (4, 4)$. $SP = \\sqrt{(4-2)^2 + (4-8)^2} = \\sqrt{4+16} = 2\\sqrt{5}$. Since $SQ = R = 2$, $QP = 2\\sqrt{5} - 2$. The ratio $SQ/QP = 2 / (2\\sqrt{5}-2) = 1/(\\sqrt{5}-1) = (\\sqrt{5}+1)/4 \\neq (\\sqrt{5}+1)/2$. The normal at $P$ ($t=2$) is $y = -2x + 12$. Its x-intercept is $x=6$. The slope of the normal $SP$ is $-t = -2$. The tangent to the circle at $Q$ is perpendicular to $SP$, so its slope is $1/2$."
        },
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let $P(x_1, y_1)$ and $Q(x_2, y_2)$, $y_1 < 0, y_2 < 0$, be the end points of the latus rectum of the ellipse $x^2 + 4y^2 = 4$. The equations of parabolas with latus rectum $PQ$ are:",
            "options": [
                "$x^2 + 2\\sqrt{3}y = 3 + \\sqrt{3}$",
                "$x^2 - 2\\sqrt{3}y = 3 + \\sqrt{3}$",
                "$x^2 + 2\\sqrt{3}y = 3 - \\sqrt{3}$",
                "$x^2 - 2\\sqrt{3}y = 3 - \\sqrt{3}$"
            ],
            "correctAnswers": [1, 2],
            "solution": "For the ellipse $\\frac{x^2}{4} + \\frac{y^2}{1} = 1$, $a=2, b=1$, and $e = \\frac{\\sqrt{3}}{2}$. The latus rectum endpoints are $(\\pm ae, \\pm \\frac{b^2}{a}) = (\\pm \\sqrt{3}, \\pm \\frac{1}{2})$. Since $y_1 < 0, y_2 < 0$, the segment $PQ$ is on the line $y = -1/2$. The length $PQ = 2\\sqrt{3}$. For the parabola, $4A = 2\\sqrt{3} \\implies A = \\frac{\\sqrt{3}}{2}$. The axis is the y-axis, and the focus is the midpoint of $PQ$, $(0, -1/2)$. The vertex $(0, k)$ is at a distance $A$ from the focus. If opening upwards, $k = -1/2 - \\frac{\\sqrt{3}}{2}$, yielding $x^2 = 4A(y - k) = 2\\sqrt{3}(y + \\frac{1}{2} + \\frac{\\sqrt{3}}{2}) \\implies x^2 - 2\\sqrt{3}y = 3 + \\sqrt{3}$. If opening downwards, $k = -1/2 + \\frac{\\sqrt{3}}{2}$, yielding $x^2 = -4A(y - k) = -2\\sqrt{3}(y + \\frac{1}{2} - \\frac{\\sqrt{3}}{2}) \\implies x^2 + 2\\sqrt{3}y = 3 - \\sqrt{3}$."
        },

        // ================================================================
        // SECTION 3 : Matrix Match  (+4, –2)
        // ================================================================
        {
            "type": "matrix_match",
            "marks": 4,
            "negativeMarks": -2,
            "text": "<div class='section-instruction'><h3>SECTION - III</h3><b>Matrix Match Type</b><br><br>This section contains <b>2</b> questions. Each question has <b>4</b> statements in <b>List-I</b> and <b>4</b> statements in <b>List-II</b>. Match the statements in List-I with the correct statements in List-II.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If all the matches are correct.</li><li><b>Partial Marks :</b> +1 For each correctly matched pair.</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>Match the number of real tangents/normals drawn to the respective conics:",
            "list1": [
                "(P) Number of distinct real normals to $y^2=4x$ from $(5/2, 0)$", 
                "(Q) Number of distinct real normals to $y^2=4x$ from $(1, 0)$", 
                "(R) Number of distinct real tangents to $y^2=4x$ from $(0, 1)$", 
                "(S) Number of distinct real tangents to $y^2=4x$ from $(1/2, 1/2)$"
            ],
            "list2": [
                "(1) 1", 
                "(2) 2", 
                "(3) 3", 
                "(4) 0"
            ],
            "correctMatches": {
                "0": 2, 
                "1": 0, 
                "2": 1, 
                "3": 3
            },
            "solution": "(P) For $y^2=4ax$, three real normals can be drawn from $(h,0)$ if $h > 2a$. Here $a=1, h=5/2 > 2$, so 3 normals (Matches 3). (Q) Here $h=1 \\not> 2$, so 1 normal (Matches 1). (R) The point $(0,1)$ is outside $y^2=4x$ since $1^2 - 4(0) = 1 > 0$, so 2 tangents (Matches 2). (S) The point $(1/2, 1/2)$ is inside since $(1/2)^2 - 4(1/2) = 1/4 - 2 < 0$, so 0 tangents (Matches 4)."
        },
        {
            "type": "matrix_match",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Match the specific characteristic values for the given standard conic sections:",
            "list1": [
                "(P) Eccentricity of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$", 
                "(Q) Eccentricity of the hyperbola $\\frac{x^2}{9} - \\frac{y^2}{16} = 1$", 
                "(R) Length of latus rectum of the parabola $x^2 = -12y$", 
                "(S) Length of latus rectum of the ellipse $\\frac{x^2}{25} + \\frac{y^2}{16} = 1$"
            ],
            "list2": [
                "(1) $5/3$", 
                "(2) $3/5$", 
                "(3) $32/5$", 
                "(4) $12$"
            ],
            "correctMatches": {
                "0": 1, 
                "1": 0, 
                "2": 3, 
                "3": 2
            },
            "solution": "(P) $e = \\sqrt{1 - 16/25} = 3/5$ (Matches 2). (Q) $e = \\sqrt{1 + 16/9} = 5/3$ (Matches 1). (R) LR length is $|4A| = 12$ (Matches 4). (S) LR length is $2b^2/a = 2(16)/5 = 32/5$ (Matches 3)."
        },

        // ================================================================
        // SECTION 4 : Numerical Value  (+4, 0)
        // ================================================================
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "<div class='section-instruction'><h3>SECTION - IV</h3><b>Numerical Answer Type</b><br><br>This section contains <b>4</b> questions. The answer to each question is a <b>POSITIVE INTEGER</b>. Enter the correct numerical value.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If the correct integer is entered.</li><li><b>Zero Marks :</b> 0 In all other cases.</li></ul></div><br>The line $2x + y = 1$ is tangent to the hyperbola $\\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$. If this line passes through the point of intersection of the directrices and the x-axis, then the eccentricity of the hyperbola is:",
            "correctAnswer": 2,
            "solution": "The directrices of the hyperbola intersect the x-axis at $(\\pm a/e, 0)$. Assume it passes through $(a/e, 0)$. Then $2(a/e) + 0 = 1 \\implies a = e/2$. The tangent line can be rewritten as $y = -2x + 1$, so its slope is $m = -2$. The tangency condition for a hyperbola is $c^2 = a^2 m^2 - b^2$, yielding $1 = a^2(4) - b^2$. Substituting $b^2 = a^2(e^2 - 1)$ gives $1 = 4a^2 - a^2 e^2 + a^2 = 5a^2 - a^2 e^2$. Substituting $e = 2a \\implies e^2 = 4a^2$, we get $1 = 5a^2 - 4a^4 \\implies 4a^4 - 5a^2 + 1 = 0 \\implies (4a^2 - 1)(a^2 - 1) = 0$. Since $a^2 = 1/4 \\implies a = 1/2 \\implies e = 1$ is invalid for a hyperbola, we must have $a^2 = 1 \\implies a = 1 \\implies e = 2$."
        },
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Let $H: \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1$, where $a > b > 0$, be a hyperbola in the xy-plane whose conjugate axis $LM$ subtends an angle of $60^\\circ$ at one of its vertices $N$. Let the area of the triangle $LMN$ be $4\\sqrt{3}$. Then the length of the conjugate axis of $H$ is:",
            "correctAnswer": 4,
            "solution": "The endpoints of the conjugate axis are $L(0, b)$ and $M(0, -b)$. Let the vertex be $N(a, 0)$. The triangle $LMN$ is an isosceles triangle with base $LM = 2b$ and height $a$. Given that the angle at $N$ is $60^\\circ$, the line segment $NL$ bisects this angle, forming a $30^\\circ$ angle with the x-axis. Thus, $\\tan 30^\\circ = \\frac{b}{a} \\implies \\frac{1}{\\sqrt{3}} = \\frac{b}{a} \\implies a = b\\sqrt{3}$. The area of $\\triangle LMN$ is $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 2b \\times a = ab$. We are given $ab = 4\\sqrt{3}$. Substituting $a = b\\sqrt{3}$ yields $b^2\\sqrt{3} = 4\\sqrt{3} \\implies b^2 = 4 \\implies b = 2$. The length of the conjugate axis is $2b = 4$."
        },
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Suppose that the foci of the ellipse $\\frac{x^2}{9} + \\frac{y^2}{5} = 1$ are $(f_1, 0)$ and $(f_2, 0)$ where $f_1 > 0$ and $f_2 < 0$. Let $P_1$ and $P_2$ be two parabolas with a common vertex at $(0,0)$ and with foci at $(f_1, 0)$ and $(2f_2, 0)$, respectively. Let $T_1$ be a tangent to $P_1$ which passes through $(2f_2, 0)$ and $T_2$ be a tangent to $P_2$ which passes through $(f_1, 0)$. If $m_1$ is the slope of $T_1$ and $m_2$ is the slope of $T_2$, then the value of $(1/m_1^2) + m_2^2$ is:",
            "correctAnswer": 4,
            "solution": "For the ellipse, $a=3, b=\\sqrt{5} \\implies e = \\sqrt{1 - 5/9} = \\frac{2}{3}$. The foci are $(\\pm ae, 0) = (\\pm 2, 0)$. Thus $f_1 = 2, f_2 = -2$. The parabola $P_1$ has focus $(2,0)$ so its equation is $y^2 = 8x$. $P_2$ has focus $(2(-2), 0) = (-4, 0)$, so its equation is $y^2 = -16x$. The tangent $T_1$ to $y^2 = 8x$ is $y = m_1 x + \\frac{2}{m_1}$. It passes through $(2f_2, 0) = (-4, 0)$, giving $0 = -4m_1 + \\frac{2}{m_1} \\implies 4m_1^2 = 2 \\implies m_1^2 = \\frac{1}{2} \\implies \\frac{1}{m_1^2} = 2$. The tangent $T_2$ to $y^2 = -16x$ is $y = m_2 x - \\frac{4}{m_2}$. It passes through $(f_1, 0) = (2, 0)$, giving $0 = 2m_2 - \\frac{4}{m_2} \\implies 2m_2^2 = 4 \\implies m_2^2 = 2$. Thus, $(1/m_1^2) + m_2^2 = 2 + 2 = 4$."
        },
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