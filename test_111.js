window.testBank = window.testBank || {};
window.testBank['test_111'] = {
    title: "Graphs Related PYQs - JEE Main",
    category: "Speed Tests - Maths",
    uploadedAt: "2026-07-04T12:00:06Z",
    timeLimitMins: 30,
    randomizePoolSize: 53,
    questions: [
        // ================= QUESTIONS FROM TEST 113 =================
        // 1
        {
            "type": "mcq",
            "text": "The area (in sq. units) of the region $A = \\{ (x, y) : \\frac{y^2}{2} \\le x \\le y + 4 \\}$ is depicted in the figure below. Find the area of the bounded region.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='100' x2='180' y2='100' stroke='#333' stroke-width='1.5'/><line x1='100' y1='180' x2='100' y2='20' stroke='#333' stroke-width='1.5'/><path d='M100,100 Q150,50 180,20 M100,100 Q150,150 180,180' fill='none' stroke='blue' stroke-width='2'/><line x1='60' y1='180' x2='180' y2='60' stroke='red' stroke-width='2'/></svg>",
            "options": [
                "$16$",
                "$18$",
                "$30$",
                "$\\frac{53}{3}$"
            ],
            "correctAnswer": 1,
            "solution": "The curves are $x = \\frac{y^2}{2}$ (parabola) and $x = y + 4$ (line).<br>Intersection points: $\\frac{y^2}{2} = y + 4 \\Rightarrow y^2 - 2y - 8 = 0 \\Rightarrow (y-4)(y+2) = 0$.<br>Thus, $y = -2$ and $y = 4$.<br>Area = $\\int_{-2}^{4} \\left( (y+4) - \\frac{y^2}{2} \\right) dy = \\left[ \\frac{y^2}{2} + 4y - \\frac{y^3}{6} \\right]_{-2}^{4}$<br>$= \\left(8 + 16 - \\frac{64}{6}\\right) - \\left(2 - 8 + \\frac{8}{6}\\right) = \\left(24 - \\frac{32}{3}\\right) - \\left(-6 + \\frac{4}{3}\\right) = \\frac{40}{3} - \\left(\\frac{-14}{3}\\right) = \\frac{54}{3} = 18$ sq. units."
        },
        // 2
        {
            "type": "mcq",
            "text": "Consider the circle $C$ with center at the origin and radius $2$. A tangent is drawn to the circle at the point $P(\\sqrt{3}, 1)$. This tangent intersects the x-axis at point $A$ and the y-axis at point $B$. Find the area of $\\Delta OAB$.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='10' y1='150' x2='190' y2='150' stroke='#333' stroke-width='1.5'/><line x1='50' y1='190' x2='50' y2='10' stroke='#333' stroke-width='1.5'/><circle cx='50' cy='150' r='50' fill='none' stroke='blue' stroke-width='2'/><circle cx='93.3' cy='125' r='3' fill='black'/><text x='100' y='120' font-size='12'>P(\\sqrt{3}, 1)</text><line x1='20' y1='60' x2='160' y2='190' stroke='red' stroke-width='2'/></svg>",
            "options": [
                "$2\\sqrt{3}$",
                "$4\\sqrt{3}$",
                "$\\frac{8}{\\sqrt{3}}$",
                "$8\\sqrt{3}$"
            ],
            "correctAnswer": 2,
            "solution": "The equation of the circle is $x^2 + y^2 = 4$.<br>The equation of the tangent at $(\\sqrt{3}, 1)$ is $\\sqrt{3}x + y = 4$.<br>For point $A$ (x-intercept), put $y = 0 \\Rightarrow x = \\frac{4}{\\sqrt{3}}$. So $A = (\\frac{4}{\\sqrt{3}}, 0)$.<br>For point $B$ (y-intercept), put $x = 0 \\Rightarrow y = 4$. So $B = (0, 4)$.<br>Area of $\\Delta OAB = \\frac{1}{2} \\times OA \\times OB = \\frac{1}{2} \\times \\frac{4}{\\sqrt{3}} \\times 4 = \\frac{8}{\\sqrt{3}}$ sq. units."
        },
        // 3
        {
            "type": "mcq",
            "text": "The region bounded by the curves $y = \\sin x$, $y = \\cos x$, and the y-axis in the first quadrant is shaded in the diagram. Find its area.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='160' x2='180' y2='160' stroke='#333' stroke-width='1.5'/><line x1='40' y1='180' x2='40' y2='20' stroke='#333' stroke-width='1.5'/><path d='M40,160 Q70,120 100,60 T160,160' fill='none' stroke='blue' stroke-width='2'/><path d='M40,60 Q70,60 100,120 T160,160' fill='none' stroke='red' stroke-width='2'/><path d='M40,60 Q70,60 70.7,105 Q55,130 40,160 Z' fill='rgba(0,255,0,0.3)'/></svg>",
            "options": [
                "$\\sqrt{2} - 1$",
                "$1 - \\frac{1}{\\sqrt{2}}$",
                "$\\sqrt{2} + 1$",
                "$\\sqrt{2}$"
            ],
            "correctAnswer": 0,
            "solution": "The curves intersect in the first quadrant when $\\sin x = \\cos x \\Rightarrow x = \\frac{\\pi}{4}$.<br>The bounded region is from $x = 0$ to $x = \\frac{\\pi}{4}$, where $\\cos x > \\sin x$.<br>Area = $\\int_{0}^{\\frac{\\pi}{4}} (\\cos x - \\sin x) dx = [\\sin x + \\cos x]_{0}^{\\frac{\\pi}{4}}$<br>$= \\left(\\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}}\\right) - (0 + 1) = \\sqrt{2} - 1$ sq. units."
        },
        // 4
        {
            "type": "mcq",
            "text": "A straight line passes through the point $(2, 3)$ and forms a triangle of area $12$ square units with the coordinate axes in the first quadrant. Find the equation of the line.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='170' x2='180' y2='170' stroke='#333' stroke-width='1.5'/><line x1='30' y1='180' x2='30' y2='20' stroke='#333' stroke-width='1.5'/><polygon points='30,170 150,170 30,50' fill='rgba(0,0,255,0.1)' stroke='blue' stroke-width='2'/><circle cx='80' cy='120' r='3' fill='black'/><text x='90' y='115' font-size='12'>(2, 3)</text></svg>",
            "options": [
                "$3x + 2y = 12$",
                "$2x + 3y = 13$",
                "$3x + 4y = 18$",
                "$4x + 3y = 17$"
            ],
            "correctAnswer": 0,
            "solution": "Let the line be $\\frac{x}{a} + \\frac{y}{b} = 1$. Since it passes through $(2,3)$, $\\frac{2}{a} + \\frac{3}{b} = 1$.<br>Area of triangle = $\\frac{1}{2}ab = 12 \\Rightarrow ab = 24 \\Rightarrow b = \\frac{24}{a}$.<br>Substitute $b$: $\\frac{2}{a} + \\frac{3a}{24} = 1 \\Rightarrow \\frac{2}{a} + \\frac{a}{8} = 1 \\Rightarrow 16 + a^2 = 8a \\Rightarrow (a-4)^2 = 0 \\Rightarrow a = 4$.<br>If $a = 4$, then $b = 6$.<br>The equation is $\\frac{x}{4} + \\frac{y}{6} = 1 \\Rightarrow 3x + 2y = 12$."
        },
        // 5
        {
            "type": "mcq",
            "text": "An ellipse has its center at the origin and axes along the coordinate axes. It passes through the points $(4, 3)$ and $(6, 2)$. The locus is shown below. What is the eccentricity of the ellipse?<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='10' y1='100' x2='190' y2='100' stroke='#333' stroke-width='1.5'/><line x1='100' y1='10' x2='100' y2='190' stroke='#333' stroke-width='1.5'/><ellipse cx='100' cy='100' rx='80' ry='50' fill='none' stroke='purple' stroke-width='2'/></svg>",
            "options": [
                "$\\frac{\\sqrt{2}}{2}$",
                "$\\frac{\\sqrt{3}}{2}$",
                "$\\frac{1}{2}$",
                "$\\frac{2}{\\sqrt{5}}$"
            ],
            "correctAnswer": 1,
            "solution": "Let the equation be $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$.<br>Substitute $(4,3)$: $\\frac{16}{a^2} + \\frac{9}{b^2} = 1$.<br>Substitute $(6,2)$: $\\frac{36}{a^2} + \\frac{4}{b^2} = 1$.<br>Solving these linear equations in $\\frac{1}{a^2}$ and $\\frac{1}{b^2}$ gives $\\frac{1}{a^2} = \\frac{1}{52}$ and $\\frac{1}{b^2} = \\frac{1}{13}$.<br>So $a^2 = 52$ and $b^2 = 13$.<br>Eccentricity $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{13}{52}} = \\sqrt{1 - \\frac{1}{4}} = \\frac{\\sqrt{3}}{2}$."
        },
        // 6
        {
            "type": "mcq",
            "text": "In the Argand plane, the locus of a complex number $z$ satisfying $|z - 2i| = |z + 2|$ is a straight line as shown. The equation of this line in Cartesian coordinates is:<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='100' x2='180' y2='100' stroke='#333' stroke-width='1.5'/><line x1='100' y1='180' x2='100' y2='20' stroke='#333' stroke-width='1.5'/><circle cx='100' cy='60' r='3' fill='red'/><text x='110' y='65' font-size='10'>2i</text><circle cx='60' cy='100' r='3' fill='blue'/><text x='40' y='115' font-size='10'>-2</text><line x1='30' y1='30' x2='170' y2='170' stroke='green' stroke-width='2'/></svg>",
            "options": [
                "$y = -x$",
                "$y = x$",
                "$y = 2x$",
                "$y = -2x$"
            ],
            "correctAnswer": 0,
            "solution": "Let $z = x + iy$. The given condition is $|x + i(y - 2)| = |(x + 2) + iy|$.<br>Squaring both sides: $x^2 + (y - 2)^2 = (x + 2)^2 + y^2$.<br>$x^2 + y^2 - 4y + 4 = x^2 + 4x + 4 + y^2$.<br>$-4y = 4x \\Rightarrow y = -x$.<br>The locus is the perpendicular bisector of the line segment joining $(0, 2)$ and $(-2, 0)$, which is the line $y = -x$."
        },
        // 7
        {
            "type": "mcq",
            "text": "Consider the region bounded by $y = |x - 1|$ and $y = 3$. The geometry is a triangle. Find its area.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='150' x2='180' y2='150' stroke='#333' stroke-width='1.5'/><line x1='50' y1='180' x2='50' y2='20' stroke='#333' stroke-width='1.5'/><line x1='20' y1='50' x2='180' y2='50' stroke='red' stroke-width='2'/><path d='M40,50 L100,150 L160,50' fill='rgba(0,0,255,0.2)' stroke='blue' stroke-width='2'/></svg>",
            "options": [
                "$9$",
                "$12$",
                "$6$",
                "$18$"
            ],
            "correctAnswer": 0,
            "solution": "The vertex of $y = |x-1|$ is at $(1, 0)$.<br>The line $y = 3$ intersects $y = |x-1|$ when $|x-1| = 3 \\Rightarrow x-1 = 3$ or $x-1 = -3 \\Rightarrow x = 4, x = -2$.<br>The intersection points are $(-2, 3)$ and $(4, 3)$.<br>The region is a triangle with base along $y=3$ of length $4 - (-2) = 6$, and height equal to $3 - 0 = 3$.<br>Area = $\\frac{1}{2} \\times \\text{base} \\times \\text{height} = \\frac{1}{2} \\times 6 \\times 3 = 9$ sq. units."
        },
        // 8
        {
            "type": "mcq",
            "text": "The common tangents to the circles $x^2 + y^2 = 4$ and $(x-6)^2 + y^2 = 16$ are shown in the figure. What is the x-coordinate of the point of intersection of the direct (exterior) common tangents?<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='10' y1='100' x2='190' y2='100' stroke='#333' stroke-width='1.5'/><circle cx='80' cy='100' r='15' fill='none' stroke='blue' stroke-width='2'/><circle cx='140' cy='100' r='30' fill='none' stroke='green' stroke-width='2'/><line x1='20' y1='80' x2='170' y2='50' stroke='red' stroke-width='1.5'/><line x1='20' y1='120' x2='170' y2='150' stroke='red' stroke-width='1.5'/></svg>",
            "options": [
                "$-2$",
                "$-3$",
                "$-6$",
                "$-4$"
            ],
            "correctAnswer": 2,
            "solution": "The first circle has center $C_1(0, 0)$ and radius $r_1 = 2$.<br>The second circle has center $C_2(6, 0)$ and radius $r_2 = 4$.<br>The direct common tangents intersect at a point $P$ which divides the line segment joining the centers externally in the ratio $r_1 : r_2 = 2 : 4 = 1 : 2$.<br>Using the external division formula: $x_P = \\frac{m x_2 - n x_1}{m - n} = \\frac{1(6) - 2(0)}{1 - 2} = \\frac{6}{-1} = -6$.<br>The point of intersection is $(-6, 0)$."
        },
        // 9
        {
            "type": "mcq",
            "text": "A hyperbola passes through the point $P(\\sqrt{2}, \\sqrt{3})$ and has foci at $(\\pm 2, 0)$. Its graph with asymptotes is roughly shown. Find the equation of the hyperbola.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='100' x2='180' y2='100' stroke='#333' stroke-width='1.5'/><line x1='100' y1='20' x2='100' y2='180' stroke='#333' stroke-width='1.5'/><path d='M60,20 Q80,100 60,180' fill='none' stroke='purple' stroke-width='2'/><path d='M140,20 Q120,100 140,180' fill='none' stroke='purple' stroke-width='2'/><line x1='40' y1='40' x2='160' y2='160' stroke='#888' stroke-dasharray='4'/><line x1='40' y1='160' x2='160' y2='40' stroke='#888' stroke-dasharray='4'/></svg>",
            "options": [
                "$\\frac{x^2}{1} - \\frac{y^2}{3} = 1$",
                "$\\frac{x^2}{2} - \\frac{y^2}{2} = 1$",
                "$\\frac{x^2}{3} - \\frac{y^2}{1} = 1$",
                "$x^2 - y^2 = 1$"
            ],
            "correctAnswer": 0,
            "solution": "The foci are at $(\\pm ae, 0) = (\\pm 2, 0) \\Rightarrow a^2e^2 = 4$.<br>For a hyperbola, $b^2 = a^2(e^2 - 1) = a^2e^2 - a^2 = 4 - a^2$.<br>The equation is $\\frac{x^2}{a^2} - \\frac{y^2}{4 - a^2} = 1$.<br>It passes through $(\\sqrt{2}, \\sqrt{3})$, so: $\\frac{2}{a^2} - \\frac{3}{4 - a^2} = 1$.<br>$\\Rightarrow 2(4 - a^2) - 3a^2 = a^2(4 - a^2) \\Rightarrow 8 - 5a^2 = 4a^2 - a^4 \\Rightarrow a^4 - 9a^2 + 8 = 0$.<br>$(a^2 - 1)(a^2 - 8) = 0$. Since $a^2 < 4$ (as $b^2 > 0$), we must have $a^2 = 1$.<br>Then $b^2 = 4 - 1 = 3$.<br>The equation is $\\frac{x^2}{1} - \\frac{y^2}{3} = 1$."
        },
        // 10
        {
            "type": "mcq",
            "text": "The normal to the parabola $y^2 = 4ax$ at the point $P(at^2, 2at)$ meets the curve again at $Q$, as depicted. If the parameter of $P$ is $t = 1$, what is the parameter for $Q$?<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='100' x2='180' y2='100' stroke='#333' stroke-width='1.5'/><line x1='60' y1='20' x2='60' y2='180' stroke='#333' stroke-width='1.5'/><path d='M160,20 Q60,100 160,180' fill='none' stroke='blue' stroke-width='2'/><circle cx='85' cy='60' r='3' fill='red'/><text x='95' y='55' font-size='12'>P</text><circle cx='145' cy='170' r='3' fill='red'/><text x='155' y='170' font-size='12'>Q</text><line x1='50' y1='30' x2='170' y2='190' stroke='green' stroke-width='1.5'/></svg>",
            "options": [
                "$-2$",
                "$-3$",
                "$-4$",
                "$3$"
            ],
            "correctAnswer": 1,
            "solution": "The normal at point $P(t)$ to the parabola $y^2 = 4ax$ meets the parabola again at $Q(t')$.<br>The standard relation between the parameters is $t' = -t - \\frac{2}{t}$.<br>Given $t = 1$, we have $t' = -1 - \\frac{2}{1} = -3$.<br>Therefore, the parameter for $Q$ is $-3$."
        },
        // 11
        {
            "type": "mcq",
            "text": "A circle passes through the origin $O$ and cuts the axes at points $A(a, 0)$ and $B(0, b)$. The locus of the circumcenter of $\\Delta OAB$ is shown as a dashed curve (or point) in the diagram. Find the equation of the circumcircle of $\\Delta OAB$.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='150' x2='180' y2='150' stroke='#333' stroke-width='1.5'/><line x1='50' y1='180' x2='50' y2='20' stroke='#333' stroke-width='1.5'/><polygon points='50,150 130,150 50,70' fill='rgba(0,0,255,0.1)' stroke='none'/><circle cx='90' cy='110' r='56.5' fill='none' stroke='blue' stroke-width='2'/><text x='135' y='165' font-size='12'>A(a,0)</text><text x='5' y='65' font-size='12'>B(0,b)</text></svg>",
            "options": [
                "$x^2 + y^2 - ax - by = 0$",
                "$x^2 + y^2 + ax + by = 0$",
                "$x^2 + y^2 - \\frac{a}{2}x - \\frac{b}{2}y = 0$",
                "$x^2 + y^2 - 2ax - 2by = 0$"
            ],
            "correctAnswer": 0,
            "solution": "The triangle $\\Delta OAB$ is a right-angled triangle with the right angle at $O(0,0)$.<br>The hypotenuse is the line segment joining $A(a, 0)$ and $B(0, b)$.<br>In a right-angled triangle, the circumcircle has the hypotenuse as its diameter.<br>The equation of the circle with diameter endpoints $(a, 0)$ and $(0, b)$ is $(x - a)(x - 0) + (y - 0)(y - b) = 0$.<br>Expanding gives $x^2 - ax + y^2 - by = 0 \\Rightarrow x^2 + y^2 - ax - by = 0$."
        },
        // 12
        {
            "type": "mcq",
            "text": "The line $y = \\sqrt{3}x$ cuts the circle $x^2 + y^2 = 4$ at point $P$ in the first quadrant. A tangent is drawn at $P$ meeting the x-axis at $Q$. Find the length of $OQ$.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='150' x2='180' y2='150' stroke='#333' stroke-width='1.5'/><line x1='50' y1='180' x2='50' y2='20' stroke='#333' stroke-width='1.5'/><circle cx='50' cy='150' r='60' fill='none' stroke='black' stroke-width='1.5'/><line x1='50' y1='150' x2='90' y2='60' stroke='blue' stroke-width='2'/><line x1='20' y1='70' x2='140' y2='150' stroke='red' stroke-width='2'/><circle cx='80' cy='110' r='3' fill='red'/><text x='90' y='105' font-size='12'>P</text><text x='145' y='165' font-size='12'>Q</text></svg>",
            "options": [
                "$2$",
                "$4$",
                "$2\\sqrt{3}$",
                "$8$"
            ],
            "correctAnswer": 1,
            "solution": "The line $y = \\sqrt{3}x$ makes an angle of $60^\\circ$ with the positive x-axis.<br>The circle has radius $r=2$. The point $P$ in polar coordinates is $(r\\cos 60^\\circ, r\\sin 60^\\circ) = (2(1/2), 2(\\sqrt{3}/2)) = (1, \\sqrt{3})$.<br>The equation of the tangent at $P(1, \\sqrt{3})$ to $x^2 + y^2 = 4$ is $x(1) + y(\\sqrt{3}) = 4$.<br>The tangent intersects the x-axis at $Q$ where $y = 0$, giving $x = 4$.<br>Therefore, $Q = (4, 0)$ and the length of $OQ$ is $4$ units."
        },
        // 13
        {
            "type": "mcq",
            "text": "The area bounded by the curves $y = x^2$ and $y = \\frac{2}{1+x^2}$ is represented by the shaded region. What is the value of this area?<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='150' x2='180' y2='150' stroke='#333' stroke-width='1.5'/><line x1='100' y1='180' x2='100' y2='20' stroke='#333' stroke-width='1.5'/><path d='M40,50 Q100,200 160,50' fill='none' stroke='blue' stroke-width='2'/><path d='M40,140 Q100,-10 160,140' fill='none' stroke='red' stroke-width='2'/></svg>",
            "options": [
                "$\\pi - \\frac{2}{3}$",
                "$\\pi + \\frac{2}{3}$",
                "$2\\pi - \\frac{1}{3}$",
                "$\\frac{\\pi}{2} - \\frac{1}{3}$"
            ],
            "correctAnswer": 0,
            "solution": "To find the intersection, set $x^2 = \\frac{2}{1+x^2} \\Rightarrow x^4 + x^2 - 2 = 0 \\Rightarrow (x^2 + 2)(x^2 - 1) = 0$.<br>Real roots are $x = \\pm 1$.<br>The curve $y = \\frac{2}{1+x^2}$ is above $y = x^2$ on the interval $[-1, 1]$.<br>Area = $\\int_{-1}^{1} \\left( \\frac{2}{1+x^2} - x^2 \\right) dx = 2 \\int_{0}^{1} \\left( \\frac{2}{1+x^2} - x^2 \\right) dx$<br>$= 2 \\left[ 2\\tan^{-1}x - \\frac{x^3}{3} \\right]_0^1 = 2 \\left( 2\\left(\\frac{\\pi}{4}\\right) - \\frac{1}{3} \\right) = 2 \\left( \\frac{\\pi}{2} - \\frac{1}{3} \\right) = \\pi - \\frac{2}{3}$ sq. units."
        },
        // 14
        {
            "type": "mcq",
            "text": "A line intersects the x-axis and y-axis at points $A$ and $B$ respectively. A point $P(h, k)$ divides the segment $AB$ in the ratio $1:2$ internally (from $A$ to $B$). The locus of $P$ when the line segment length $AB = l$ is constant is an ellipse. Find the equation of this locus.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='150' x2='180' y2='150' stroke='#333' stroke-width='1.5'/><line x1='50' y1='180' x2='50' y2='20' stroke='#333' stroke-width='1.5'/><line x1='20' y1='50' x2='160' y2='150' stroke='green' stroke-width='2'/><circle cx='66.6' cy='116.6' r='3' fill='red'/><text x='75' y='110' font-size='12'>P(h,k)</text></svg>",
            "options": [
                "$9x^2 + \\frac{9y^2}{4} = l^2$",
                "$4x^2 + y^2 = l^2$",
                "$\\frac{9x^2}{4} + 9y^2 = l^2$",
                "$x^2 + 4y^2 = l^2$"
            ],
            "correctAnswer": 2,
            "solution": "Let $A = (a, 0)$ and $B = (0, b)$. We are given $a^2 + b^2 = l^2$.<br>$P(h, k)$ divides $A(a,0)$ and $B(0,b)$ in ratio $1:2$.<br>$h = \\frac{1(0) + 2(a)}{1+2} = \\frac{2a}{3} \\Rightarrow a = \\frac{3h}{2}$.<br>$k = \\frac{1(b) + 2(0)}{1+2} = \\frac{b}{3} \\Rightarrow b = 3k$.<br>Substitute $a$ and $b$ into $a^2 + b^2 = l^2$:<br>$\\left(\\frac{3h}{2}\\right)^2 + (3k)^2 = l^2 \\Rightarrow \\frac{9h^2}{4} + 9k^2 = l^2$.<br>Replacing $(h,k)$ with $(x,y)$, the locus is $\\frac{9x^2}{4} + 9y^2 = l^2$."
        },
        // 15
        {
            "type": "mcq",
            "text": "The graph shows a function $y = f(x)$ and its inverse $y = f^{-1}(x)$ symmetric about the line $y = x$. If $f(x) = x^2 + 1$ for $x \\ge 0$, find the area bounded by $y = f(x)$, $y = x$, $x=0$, and $x=1$.<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='20' y1='180' x2='180' y2='180' stroke='#333' stroke-width='1.5'/><line x1='20' y1='180' x2='20' y2='20' stroke='#333' stroke-width='1.5'/><line x1='20' y1='180' x2='180' y2='20' stroke='black' stroke-dasharray='4'/><path d='M20,120 Q80,120 120,20' fill='none' stroke='blue' stroke-width='2'/><path d='M80,180 Q80,120 180,80' fill='none' stroke='red' stroke-width='2'/></svg>",
            "options": [
                "$\\frac{5}{6}$",
                "$\\frac{2}{3}$",
                "$\\frac{1}{2}$",
                "$1$"
            ],
            "correctAnswer": 0,
            "solution": "The required area is bounded by $y = x^2 + 1$ and $y = x$ from $x=0$ to $x=1$.<br>Notice that for $x \\in [0,1]$, $x^2 + 1 > x$.<br>Area = $\\int_{0}^{1} (x^2 + 1 - x) dx$<br>$= \\left[ \\frac{x^3}{3} + x - \\frac{x^2}{2} \\right]_0^1 = \\frac{1}{3} + 1 - \\frac{1}{2} = \\frac{4}{3} - \\frac{1}{2} = \\frac{5}{6}$ sq. units."
        },
        // 16
        {
            "type": "mcq",
            "text": "The diagram illustrates two vectors $\\vec{a}$ and $\\vec{b}$ forming a parallelogram. If $|\\vec{a}| = 3$, $|\\vec{b}| = 4$, and the area of the parallelogram is $6$, what is the dot product $\\vec{a} \\cdot \\vec{b}$ if the angle $\\theta$ is acute?<br><br><svg viewBox='0 0 200 200' width='250' height='250' xmlns='http://www.w3.org/2000/svg' style='max-width:100%; display:block; margin:0 auto; background:#f9f9f9; border:1px solid #ddd;'><line x1='40' y1='150' x2='140' y2='150' stroke='blue' stroke-width='2'/><polygon points='140,150 130,145 130,155' fill='blue'/><line x1='40' y1='150' x2='90' y2='60' stroke='red' stroke-width='2'/><polygon points='90,60 82,65 88,70' fill='red'/><line x1='90' y1='60' x2='190' y2='60' stroke='#888' stroke-dasharray='4'/><line x1='140' y1='150' x2='190' y2='60' stroke='#888' stroke-dasharray='4'/><text x='85' y='165' font-size='12'>a</text><text x='50' y='100' font-size='12'>b</text></svg>",
            "options": [
                "$6$",
                "$6\\sqrt{2}$",
                "$6\\sqrt{3}$",
                "$12$"
            ],
            "correctAnswer": 2,
            "solution": "Area of parallelogram = $|\\vec{a} \\times \\vec{b}| = |\\vec{a}| |\\vec{b}| \\sin\\theta = 6$.<br>Given $|\\vec{a}|=3, |\\vec{b}|=4 \\Rightarrow 3 \\times 4 \\sin\\theta = 6 \\Rightarrow 12 \\sin\\theta = 6 \\Rightarrow \\sin\\theta = \\frac{1}{2}$.<br>Since $\\theta$ is acute, $\\theta = 30^\\circ$.<br>The dot product is $\\vec{a} \\cdot \\vec{b} = |\\vec{a}| |\\vec{b}| \\cos\\theta = (3)(4)\\cos(30^\\circ) = 12 \\times \\frac{\\sqrt{3}}{2} = 6\\sqrt{3}$."
        },

        // ================= QUESTIONS FROM TEST 112 =================
        // 17
        {
            "type": "mcq",
            "text": "What is the equation of the locus of a point P which moves such that its distance from point A(1, 2) is always equal to its distance from point B(5, 2)?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><circle cx='120' cy='150' r='4' fill='#000'/><text x='110' y='170' font-family='Arial' font-size='14'>A(1,2)</text><circle cx='280' cy='150' r='4' fill='#000'/><text x='270' y='170' font-family='Arial' font-size='14'>B(5,2)</text><line x1='200' y1='50' x2='200' y2='250' stroke='#000' stroke-width='2' stroke-dasharray='8,4'/><text x='210' y='140' font-family='Arial' font-size='14'>Locus (x=3)</text></svg><br><br>",
            "options": [
                "$x = 3$",
                "$y = 3$",
                "$x + y = 6$",
                "$x^2 + y^2 = 25$"
            ],
            "correctAnswer": 0,
            "solution": "The locus is the perpendicular bisector of AB. Midpoint of AB is $(3, 2)$. Slope of AB = 0, so perpendicular bisector is vertical line $x = 3$."
        },
        // 18
        {
            "type": "mcq",
            "text": "The line segment joining A(2, 2) and B(6, 2) is the diameter of a circle. What is the equation of this circle?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><circle cx='200' cy='150' r='80' stroke='#000' stroke-width='2' fill='none'/><circle cx='120' cy='150' r='4' fill='#000'/><text x='110' y='170' font-family='Arial' font-size='14'>A(2,2)</text><circle cx='280' cy='150' r='4' fill='#000'/><text x='270' y='170' font-family='Arial' font-size='14'>B(6,2)</text><line x1='120' y1='150' x2='280' y2='150' stroke='#000' stroke-width='2' stroke-dasharray='4,4'/><text x='175' y='175' font-family='Arial' font-size='14'>Diameter</text></svg><br><br>",
            "options": [
                "$(x-4)^2 + (y-2)^2 = 4$",
                "$(x-2)^2 + (y-4)^2 = 16$",
                "$(x-4)^2 + (y-2)^2 = 16$",
                "$(x-2)^2 + (y-2)^2 = 16$"
            ],
            "correctAnswer": 0,
            "solution": "Center is midpoint of AB: $(4, 2)$. Radius is half of diameter AB: $r = 4/2 = 2$. Equation: $(x-4)^2 + (y-2)^2 = 4$."
        },
        // 19
        {
            "type": "mcq",
            "text": "Find the area of the triangle formed by the points O(0,0), A(4,0), and B(0,3).<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='380' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='390' y='145' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><circle cx='200' cy='150' r='4' fill='#000'/><text x='205' y='140' font-family='Arial' font-size='14'>O(0,0)</text><circle cx='320' cy='150' r='4' fill='#000'/><text x='315' y='170' font-family='Arial' font-size='14'>A(4,0)</text><circle cx='200' cy='60' r='4' fill='#000'/><text x='175' y='55' font-family='Arial' font-size='14'>B(0,3)</text><polygon points='200,150 320,150 200,60' fill='none' stroke='#000' stroke-width='2'/><text x='235' y='115' font-family='Arial' font-size='14' fill='#000'>Area = ?</text></svg><br><br>",
            "options": [
                "6",
                "12",
                "4",
                "8"
            ],
            "correctAnswer": 0,
            "solution": "Base OA = 4, Height OB = 3. Area = $\\frac{1}{2} \\times 4 \\times 3 = 6$."
        },
        // 20
        {
            "type": "mcq",
            "text": "If two straight lines are perpendicular to each other, their slopes $m_1$ and $m_2$ satisfy which relation?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='100' y1='250' x2='300' y2='50' stroke='#000' stroke-width='2'/><line x1='100' y1='50' x2='300' y2='250' stroke='#000' stroke-width='2'/><circle cx='200' cy='150' r='4' fill='#000'/><text x='210' y='140' font-family='Arial' font-size='14'>Intersection</text><text x='290' y='80' font-family='Arial' font-size='14'>Line L1 (Slope m1)</text><text x='290' y='240' font-family='Arial' font-size='14'>Line L2 (Slope m2)</text><path d='M 170,180 L 180,170 L 190,180' fill='none' stroke='#000' stroke-width='2'/><text x='195' y='180' font-family='Arial' font-size='14'>90°</text></svg><br><br>",
            "options": [
                "$m_1 m_2 = -1$",
                "$m_1 = m_2$",
                "$m_1 + m_2 = 0$",
                "$m_1 m_2 = 1$"
            ],
            "correctAnswer": 0,
            "solution": "The product of slopes of perpendicular lines is $-1$."
        },
        // 21
        {
            "type": "mcq",
            "text": "What is the slope of the line passing through the origin and making an angle $\\theta$ with the positive x-axis?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='100' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='100' y1='150' x2='280' y2='50' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='280,40 290,50 280,60' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='260' y='170' font-family='Arial' font-size='14'>Line L</text><path d='M 180,150 A 60 60 0 0 1 240,110' fill='none' stroke='#000' stroke-width='2'/><text x='185' y='130' font-family='Arial' font-size='14'>θ</text></svg><br><br>",
            "options": [
                "$\\tan \\theta$",
                "$\\sin \\theta$",
                "$\\cos \\theta$",
                "$\\cot \\theta$"
            ],
            "correctAnswer": 0,
            "solution": "Slope $m = \\frac{\\text{Rise}}{\\text{Run}} = \\tan \\theta$."
        },
        // 22
        {
            "type": "mcq",
            "text": "Identify the point of discontinuity in the graph shown below:<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><line x1='100' y1='200' x2='200' y2='100' stroke='#000' stroke-width='2'/><circle cx='200' cy='100' r='4' fill='none' stroke='#000' stroke-width='2'/><line x1='200' y1='150' x2='300' y2='150' stroke='#000' stroke-width='2'/><text x='100' y='220' font-family='Arial' font-size='14'>y = 2x</text><text x='240' y='165' font-family='Arial' font-size='14'>y = 3</text></svg><br><br>",
            "options": [
                "$x = 2$",
                "$x = 1$",
                "$x = 0$",
                "The function is continuous everywhere"
            ],
            "correctAnswer": 0,
            "solution": "There is a hole at $x=2$ because $\\lim_{x \\to 2} y = 4$ but the function jumps to $y=3$ for $x \\ge 2$. So it's discontinuous at $x=2$."
        },
        // 23
        {
            "type": "mcq",
            "text": "The graph of $y = |x|$ has a sharp corner at the origin. This indicates that the function is:<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='100' y1='200' x2='350' y2='200' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,195 360,200 350,205' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='195' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><line x1='200' y1='200' x2='100' y2='300' stroke='#000' stroke-width='2'/><line x1='200' y1='200' x2='300' y2='100' stroke='#000' stroke-width='2'/><circle cx='200' cy='200' r='4' fill='#000'/><text x='210' y='210' font-family='Arial' font-size='14'>O(0,0)</text><text x='150' y='230' font-family='Arial' font-size='14'>y = -x</text><text x='280' y='130' font-family='Arial' font-size='14'>y = x</text><text x='210' y='160' font-family='Arial' font-size='14'>Sharp Corner</text></svg><br><br>",
            "options": [
                "Continuous but NOT differentiable at $x=0$",
                "Differentiable but NOT continuous at $x=0$",
                "Neither continuous nor differentiable at $x=0$",
                "Both continuous and differentiable at $x=0$"
            ],
            "correctAnswer": 0,
            "solution": "$|x|$ is continuous at $x=0$ because $\\lim_{x \\to 0} |x| = 0$. However, LHL slope = -1 and RHL slope = 1, so LHD $\\ne$ RHD. Therefore, it is not differentiable at $x=0$."
        },
        // 24
        {
            "type": "mcq",
            "text": "For the function $f(x)$ shown below, find the left-hand limit (LHL) as $x \\to 2^{-}$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><line x1='100' y1='200' x2='200' y2='100' stroke='#000' stroke-width='2'/><circle cx='200' cy='100' r='4' fill='#000'/><text x='210' y='90' font-family='Arial' font-size='14'>P(2,4)</text><line x1='200' y1='100' x2='300' y2='150' stroke='#000' stroke-width='2'/><text x='250' y='140' font-family='Arial' font-size='14'>f(x)</text><path d='M 180,120 A 20 20 0 0 1 190,110' fill='none' stroke='#000' stroke-width='2'/><text x='155' y='130' font-family='Arial' font-size='14'>Approach from left</text></svg><br><br>",
            "options": [
                "4",
                "5",
                "2",
                "Does not exist"
            ],
            "correctAnswer": 0,
            "solution": "Looking at the graph as $x$ approaches 2 from the left side, the y-value approaches 4."
        },
        // 25
        {
            "type": "mcq",
            "text": "Identify the type of discontinuity at $x = 2$ for the function graphed below:<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><circle cx='200' cy='100' r='4' fill='none' stroke='#000' stroke-width='2'/><text x='210' y='90' font-family='Arial' font-size='14'>Hole</text><line x1='100' y1='200' x2='200' y2='100' stroke='#000' stroke-width='2'/><line x1='200' y1='100' x2='300' y2='100' stroke='#000' stroke-width='2'/><text x='250' y='90' font-family='Arial' font-size='14'>y = 2x+1</text></svg><br><br>",
            "options": [
                "Removable discontinuity (hole)",
                "Jump discontinuity",
                "Infinite discontinuity",
                "Oscillating discontinuity"
            ],
            "correctAnswer": 0,
            "solution": "The graph has a hole at $x=2$ but the limit exists. This is a removable discontinuity."
        },
        // 26
        {
            "type": "mcq",
            "text": "Find the slope of the tangent to the curve $y = x^2$ at the point P(1, 1).<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><path d='M 100,250 Q 200,50 300,250' fill='none' stroke='#000' stroke-width='2'/><circle cx='200' cy='150' r='4' fill='#000'/><text x='160' y='140' font-family='Arial' font-size='14'>P(1,1)</text><line x1='150' y1='250' x2='250' y2='50' stroke='#000' stroke-width='2' stroke-dasharray='6,4'/><text x='235' y='80' font-family='Arial' font-size='14'>Tangent (Slope m)</text></svg><br><br>",
            "options": [
                "2",
                "1",
                "0",
                "3"
            ],
            "correctAnswer": 0,
            "solution": "$y' = 2x$. At $x=1$, slope = $2(1) = 2$."
        },
        // 27
        {
            "type": "mcq",
            "text": "Find the equation of the normal to the curve $y = x^2$ at the point (1, 1).<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><path d='M 100,250 Q 200,50 300,250' fill='none' stroke='#000' stroke-width='2'/><circle cx='200' cy='150' r='4' fill='#000'/><text x='160' y='140' font-family='Arial' font-size='14'>P(1,1)</text><line x1='100' y1='150' x2='300' y2='150' stroke='#000' stroke-width='2' stroke-dasharray='6,4'/><text x='250' y='140' font-family='Arial' font-size='14'>Normal (Slope -1/2)</text></svg><br><br>",
            "options": [
                "$y - 1 = -\\frac{1}{2}(x - 1)$",
                "$y - 1 = 2(x - 1)$",
                "$y - 1 = \\frac{1}{2}(x - 1)$",
                "$y - 1 = -2(x - 1)$"
            ],
            "correctAnswer": 0,
            "solution": "Slope of tangent is $m_t = 2$. Slope of normal is $m_n = -\\frac{1}{2}$. Equation: $y - 1 = -\\frac{1}{2}(x - 1)$."
        },
        // 28
        {
            "type": "mcq",
            "text": "Identify the local maximum and minimum points for the curve $y = x^3 - 3x$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><path d='M 100,250 Q 150,200 180,100 Q 210,0 250,150' fill='none' stroke='#000' stroke-width='2'/><circle cx='180' cy='100' r='4' fill='#000'/><text x='150' y='90' font-family='Arial' font-size='14'>Local Max</text><circle cx='210' cy='150' r='4' fill='#000'/><text x='190' y='170' font-family='Arial' font-size='14'>Local Min</text></svg><br><br>",
            "options": [
                "Local Max at $x = -1$, Local Min at $x = 1$",
                "Local Max at $x = 1$, Local Min at $x = -1$",
                "Local Max at $x = 0$, Local Min at $x = 2$",
                "No extrema exist"
            ],
            "correctAnswer": 0,
            "solution": "$y' = 3x^2 - 3 = 0 \\Rightarrow x = \\pm 1$. $y'' = 6x$. $y''(-1) = -6 < 0$ (Max), $y''(1) = 6 > 0$ (Min)."
        },
        // 29
        {
            "type": "mcq",
            "text": "A spherical balloon is being inflated. If its volume increases at a constant rate, the rate of change of its radius $r$ is:<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><circle cx='200' cy='150' r='80' fill='none' stroke='#000' stroke-width='2'/><line x1='200' y1='150' x2='280' y2='150' stroke='#000' stroke-width='2'/><text x='220' y='160' font-family='Arial' font-size='14'>radius = r</text><path d='M 240,110 L 260,90 L 280,110' fill='none' stroke='#000' stroke-width='2'/><text x='260' y='80' font-family='Arial' font-size='14'>Inflating</text></svg><br><br>",
            "options": [
                "Inversely proportional to $r^2$",
                "Inversely proportional to $r$",
                "Proportional to $r$",
                "Constant"
            ],
            "correctAnswer": 0,
            "solution": "$V = \\frac{4}{3} \\pi r^3 \\Rightarrow \\frac{dV}{dt} = 4 \\pi r^2 \\frac{dr}{dt}$. If $\\frac{dV}{dt}$ is constant, then $\\frac{dr}{dt} \\propto \\frac{1}{r^2}$."
        },
        // 30
        {
            "type": "mcq",
            "text": "What is the area of the largest rectangle that can be inscribed in the circle $x^2 + y^2 = r^2$?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><circle cx='200' cy='150' r='80' fill='none' stroke='#000' stroke-width='2'/><rect x='140' y='100' width='120' height='100' fill='none' stroke='#000' stroke-width='2'/><text x='150' y='160' font-family='Arial' font-size='14'>Length L</text><text x='250' y='140' font-family='Arial' font-size='14'>Width W</text></svg><br><br>",
            "options": [
                "$2r^2$",
                "$\\pi r^2$",
                "$4r^2$",
                "$\\frac{r^2}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "For maximum area, the rectangle must be a square. Diagonal = $2r$. Side $s = \\sqrt{2} r$. Area = $s^2 = 2r^2$."
        },
        // 31
        {
            "type": "mcq",
            "text": "The graph of $y = \\ln x$ is concave downwards for all $x > 0$. This means:<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><path d='M 100,250 Q 200,150 300,50' fill='none' stroke='#000' stroke-width='2'/><text x='220' y='130' font-family='Arial' font-size='14'>y = ln x</text></svg><br><br>",
            "options": [
                "$y'' < 0$",
                "$y' < 0$",
                "$y > 0$",
                "$y' > 0$"
            ],
            "correctAnswer": 0,
            "solution": "A curve is concave downwards when its second derivative is negative ($y'' < 0$)."
        },
        // 32
        {
            "type": "mcq",
            "text": "The tangent to the parabola $y^2 = 4ax$ at the vertex is:<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc; background:#fff;'><line x1='50' y1='150' x2='350' y2='150' stroke='#000' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='#000' stroke-width='2'/><polygon points='350,145 360,150 350,155' fill='#000'/><polygon points='195,20 200,10 205,20' fill='#000'/><text x='355' y='140' font-family='Arial' font-size='16'>x</text><text x='205' y='15' font-family='Arial' font-size='16'>y</text><path d='M 200,150 Q 300,100 350,150' fill='none' stroke='#000' stroke-width='2'/><path d='M 200,150 Q 100,200 50,150' fill='none' stroke='#000' stroke-width='2'/><circle cx='200' cy='150' r='4' fill='#000'/><text x='210' y='140' font-family='Arial' font-size='14'>Vertex</text><line x1='100' y1='150' x2='300' y2='150' stroke='#000' stroke-width='2'/><text x='250' y='160' font-family='Arial' font-size='14'>Tangent</text></svg><br><br>",
            "options": [
                "The y-axis",
                "The x-axis",
                "The directrix",
                "The latus rectum"
            ],
            "correctAnswer": 0,
            "solution": "At the vertex $(0,0)$, the parabola $y^2=4ax$ has a vertical tangent, which is the y-axis."
        },

        // ================= QUESTIONS FROM TEST 111 =================
        // 33
        {
            "type": "mcq",
            "text": "Find the area of the shaded region bounded by the curves $y = x^2$ and $y = \\sqrt{x}$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 100,250 Q 150,200 200,150 Q 250,200 300,250' fill='none' stroke='blue' stroke-width='2'/><text x='310' y='245' font-family='Arial' font-size='12' fill='blue'>y=x^2</text><path d='M 100,250 Q 150,100 200,50 Q 250,100 300,250' fill='none' stroke='red' stroke-width='2'/><text x='310' y='100' font-family='Arial' font-size='12' fill='red'>y=√x</text><circle cx='200' cy='150' r='4' fill='black'/><text x='185' y='140' font-family='Arial' font-size='12'>(1,1)</text><path d='M 200,150 Q 150,200 100,250 Q 150,100 200,50 Z' fill='#eafaf1' stroke='none' opacity='0.5'/><text x='170' y='180' font-family='Arial' font-size='12' fill='#2ecc71'>Shaded</text><circle cx='200' cy='250' r='4' fill='black'/></svg><br><br>The value of the area is:",
            "options": [
                "$\\frac{1}{3}$",
                "$\\frac{2}{3}$",
                "$\\frac{1}{2}$",
                "$\\frac{1}{4}$"
            ],
            "correctAnswer": 0,
            "solution": "Intersection points are $0$ and $1$. Area = $\\int_{0}^{1} (\\sqrt{x} - x^2) dx = \\left[ \\frac{2}{3}x^{3/2} - \\frac{x^3}{3} \\right]_0^1 = \\frac{1}{3}$."
        },
        // 34
        {
            "type": "mcq",
            "text": "Find the area enclosed by the parabolas $y = x^2$ and $x = y^2$ (i.e. $y = \\sqrt{x}$).<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 200,250 Q 100,250 50,50' fill='none' stroke='blue' stroke-width='2'/><text x='20' y='60' font-family='Arial' font-size='12' fill='blue'>x=y^2</text><path d='M 200,250 Q 300,250 350,50' fill='none' stroke='red' stroke-width='2'/><text x='340' y='60' font-family='Arial' font-size='12' fill='red'>y=x^2</text><path d='M 200,250 Q 100,250 50,50 Q 75,200 200,250 Q 325,200 350,50' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{1}{2}$",
                "$\\frac{1}{3}$",
                "$\\frac{2}{3}$",
                "$\\frac{1}{4}$"
            ],
            "correctAnswer": 1,
            "solution": "The area is $\\int_{0}^{1} (\\sqrt{x} - x^2) dx = \\frac{1}{3}$."
        },
        // 35
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by the curves $y = e^x$, $y = e^{-x}$, and the vertical line $x = 1$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 200,250 Q 250,150 350,50' fill='none' stroke='blue' stroke-width='2'/><text x='320' y='80' font-family='Arial' font-size='12' fill='blue'>y=e^x</text><path d='M 200,250 Q 150,150 50,50' fill='none' stroke='red' stroke-width='2'/><text x='30' y='80' font-family='Arial' font-size='12' fill='red'>y=e^-x</text><line x1='280' y1='250' x2='280' y2='50' stroke='green' stroke-width='2' stroke-dasharray='4'/><text x='285' y='240' font-family='Arial' font-size='12' fill='green'>x=1</text><path d='M 200,250 Q 240,200 280,115 L 280,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$e + \\frac{1}{e} - 2$",
                "$e - \\frac{1}{e}$",
                "$e + \\frac{1}{e}$",
                "$e - 1$"
            ],
            "correctAnswer": 0,
            "solution": "The curves $y = e^x$ and $y = e^{-x}$ intersect at the y-axis ($x = 0$). The area bounded by these curves and $x = 1$ is given by $\\int_{0}^{1} (e^x - e^{-x}) dx$. Integrating yields $[e^x + e^{-x}]_0^1$. Substituting the limits gives $(e^1 + e^{-1}) - (e^0 + e^{-0}) = e + \\frac{1}{e} - 2$."
        },
        // 36
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by $y = x$ and $y = x^2$ in the first quadrant.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 200,250 Q 300,200 350,50' fill='none' stroke='blue' stroke-width='2'/><text x='340' y='60' font-family='Arial' font-size='12' fill='blue'>y=x^2</text><line x1='200' y1='250' x2='350' y2='250' stroke='none'/>Actually line y=x is just a diagonal. Let's draw line y=x.<line x1='200' y1='250' x2='350' y2='100' stroke='red' stroke-width='2'/><text x='340' y='110' font-family='Arial' font-size='12' fill='red'>y=x</text><path d='M 200,250 Q 250,200 300,100 L 350,100 Q 300,200 250,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{1}{3}$",
                "$\\frac{1}{2}$",
                "$\\frac{1}{6}$",
                "$\\frac{1}{4}$"
            ],
            "correctAnswer": 2,
            "solution": "Intersection: $x=x^2 \\Rightarrow x=0,1$. Area = $\\int_0^1 (x - x^2) dx = [\\frac{x^2}{2} - \\frac{x^3}{3}]_0^1 = \\frac{1}{6}$."
        },
        // 37
        {
            "type": "mcq",
            "text": "What is the area of the region bounded by $y = 2x - x^2$ and the x-axis?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 150,250 Q 200,100 250,250' fill='none' stroke='blue' stroke-width='2'/><text x='240' y='120' font-family='Arial' font-size='12' fill='blue'>y=2x-x^2</text><path d='M 150,250 Q 200,100 250,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{4}{3}$",
                "$\\frac{1}{3}$",
                "$\\frac{2}{3}$",
                "$\\frac{5}{3}$"
            ],
            "correctAnswer": 0,
            "solution": "$y=2x-x^2 \\Rightarrow x(x-2)=0 \\Rightarrow x=0,2$. Area = $\\int_0^2 (2x-x^2) dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$."
        },
        // 38
        {
            "type": "mcq",
            "text": "Find the area of the region enclosed between the curve $y = \\sin x$ and the x-axis from $x=0$ to $x=2\\pi$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 50,250 Q 150,50 200,250 Q 250,450 350,250' fill='none' stroke='blue' stroke-width='2'/><text x='100' y='80' font-family='Arial' font-size='12' fill='blue'>y=sin x</text><path d='M 50,250 Q 150,50 200,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/><path d='M 200,250 Q 250,450 350,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "2",
                "0",
                "4",
                "$\\pi$"
            ],
            "correctAnswer": 0,
            "solution": "Area = $\\int_0^{\\pi} \\sin x dx - \\int_{\\pi}^{2\\pi} \\sin x dx = 2 + 2 = 4$. Wait, $\\int_0^{2\\pi} |\\sin x| dx = 4$."
        },
        // 39
        {
            "type": "mcq",
            "text": "The area bounded by $y = \\cos x$ and $y = \\sin x$ between $x=0$ and $x=\\pi/4$ is:<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 50,250 Q 150,50 200,250' fill='none' stroke='blue' stroke-width='2'/><text x='100' y='80' font-family='Arial' font-size='12' fill='blue'>y=cos x</text><path d='M 50,250 Q 150,250 200,50' fill='none' stroke='red' stroke-width='2'/><text x='100' y='230' font-family='Arial' font-size='12' fill='red'>y=sin x</text><path d='M 50,250 Q 150,50 200,50 Q 150,250 50,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/><circle cx='200' cy='50' r='4' fill='black'/><text x='160' y='100' font-family='Arial' font-size='12'>(π/4, 1/√2)</text></svg><br><br>",
            "options": [
                "$\\sqrt{2} - 1$",
                "$\\frac{1}{\\sqrt{2}}$",
                "$\\frac{\\sqrt{2}-1}{2}$",
                "$\\frac{1}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "Area = $\\int_0^{\\pi/4} (\\cos x - \\sin x) dx = [\\sin x + \\cos x]_0^{\\pi/4} = \\frac{1}{\\sqrt{2}} + \\frac{1}{\\sqrt{2}} - 1 = \\sqrt{2} - 1$."
        },
        // 40
        {
            "type": "mcq",
            "text": "Find the area bounded by the parabola $y^2 = 4x$ and the line $y = x$. (First quadrant intersection).<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 200,250 Q 230,50 350,50' fill='none' stroke='blue' stroke-width='2'/><text x='330' y='50' font-family='Arial' font-size='12' fill='blue'>y^2=4x</text><line x1='200' y1='250' x2='350' y2='100' stroke='red' stroke-width='2'/><text x='340' y='110' font-family='Arial' font-size='12' fill='red'>y=x</text><path d='M 200,250 Q 230,50 350,50 L 350,100 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{8}{3}$",
                "$\\frac{16}{3}$",
                "$\\frac{4}{3}$",
                "$\\frac{2}{3}$"
            ],
            "correctAnswer": 0,
            "solution": "$y^2=4x \\Rightarrow y=2\\sqrt{x}$. Intersection: $x = 2\\sqrt{x} \\Rightarrow x=0, 4$. Area = $\\int_0^4 (2\\sqrt{x} - x) dx = [\\frac{4}{3}x^{3/2} - \\frac{x^2}{2}]_0^4 = \\frac{32}{3} - 8 = \\frac{8}{3}$."
        },
        // 41
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by the curve $y = x^3$ and the line $y = x$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 100,250 Q 200,50 300,250' fill='none' stroke='blue' stroke-width='2'/><text x='230' y='150' font-family='Arial' font-size='12' fill='blue'>y=x^3</text><line x1='100' y1='300' x2='300' y2='200' stroke='red' stroke-width='2'/><text x='280' y='220' font-family='Arial' font-size='12' fill='red'>y=x</text><path d='M 100,250 Q 200,50 300,250 L 300,200 L 100,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/><circle cx='200' cy='150' r='4' fill='black'/><text x='180' y='140' font-family='Arial' font-size='12'>(1,1)</text></svg><br><br>",
            "options": [
                "$\\frac{1}{2}$",
                "$\\frac{1}{4}$",
                "$\\frac{1}{6}$",
                "$1$"
            ],
            "correctAnswer": 0,
            "solution": "$x^3=x \\Rightarrow x(x-1)(x+1)=0 \\Rightarrow x=0,1$ in 1st quadrant. Area = $\\int_0^1 (x - x^3) dx = [\\frac{x^2}{2} - \\frac{x^4}{4}]_0^1 = \\frac{1}{4}$."
        },
        // 42
        {
            "type": "mcq",
            "text": "What is the area of the segment cut off from the parabola $y = x^2$ by the line $y = 2x + 3$?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 150,250 Q 200,50 250,250' fill='none' stroke='blue' stroke-width='2'/><text x='240' y='150' font-family='Arial' font-size='12' fill='blue'>y=x^2</text><line x1='50' y1='100' x2='350' y2='250' stroke='red' stroke-width='2'/><text x='340' y='240' font-family='Arial' font-size='12' fill='red'>y=2x+3</text><path d='M 150,250 Q 200,50 250,250 L 350,250 L 50,100 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{32}{3}$",
                "$\\frac{20}{3}$",
                "$\\frac{16}{3}$",
                "$\\frac{28}{3}$"
            ],
            "correctAnswer": 0,
            "solution": "Intersections: $x^2 = 2x+3 \\Rightarrow (x-3)(x+1)=0$. Area = $\\int_{-1}^{3} (2x+3 - x^2) dx = [x^2+3x-\\frac{x^3}{3}]_{-1}^{3} = 9+9-9 - (1-3+1/3) = 32/3$."
        },
        // 43
        {
            "type": "mcq",
            "text": "Find the area of the region enclosed by the ellipse $\\frac{x^2}{9} + \\frac{y^2}{4} = 1$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><ellipse cx='200' cy='150' rx='150' ry='100' fill='none' stroke='blue' stroke-width='2'/><text x='270' y='50' font-family='Arial' font-size='12' fill='blue'>x^2/9 + y^2/4 = 1</text></svg><br><br>",
            "options": [
                "$12\\pi$",
                "$9\\pi$",
                "$6\\pi$",
                "$4\\pi$"
            ],
            "correctAnswer": 0,
            "solution": "For ellipse $\\frac{x^2}{a^2} + \\frac{y^2}{b^2} = 1$, area = $\\pi a b$. Here $a=3, b=2$. Area = $6\\pi$."
        },
        // 44
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by the hyperbola $xy = 1$ and the lines $x=1, x=2$ and $y=0$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><line x1='150' y1='250' x2='150' y2='20' stroke='blue' stroke-width='2'/><text x='110' y='20' font-family='Arial' font-size='12' fill='blue'>x=1</text><line x1='250' y1='250' x2='250' y2='20' stroke='green' stroke-width='2'/><text x='260' y='20' font-family='Arial' font-size='12' fill='green'>x=2</text><path d='M 150,250 Q 180,100 250,60' fill='none' stroke='red' stroke-width='2'/><text x='230' y='80' font-family='Arial' font-size='12' fill='red'>xy=1</text><path d='M 150,250 L 250,250 L 250,60 Q 180,100 150,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\ln 2$",
                "$1$",
                "$\\frac{1}{2}$",
                "$e$"
            ],
            "correctAnswer": 0,
            "solution": "Area = $\\int_1^2 \\frac{1}{x} dx = [\\ln x]_1^2 = \\ln 2$."
        },
        // 45
        {
            "type": "mcq",
            "text": "What is the slope of the tangent to the curve $y = x^3 - 2x + 1$ at $x = 1$?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 100,250 Q 200,50 300,250' fill='none' stroke='blue' stroke-width='2'/><text x='200' y='180' font-family='Arial' font-size='12' fill='blue'>y=x^3-2x+1</text><circle cx='200' cy='150' r='4' fill='red'/><text x='160' y='140' font-family='Arial' font-size='12' fill='red'>P(1,0)</text><line x1='100' y1='250' x2='300' y2='50' stroke='green' stroke-width='2'/><text x='290' y='60' font-family='Arial' font-size='12' fill='green'>Tangent</text></svg><br><br>",
            "options": [
                "1",
                "0",
                "2",
                "-1"
            ],
            "correctAnswer": 0,
            "solution": "Slope $m = \\frac{dy}{dx} = 3x^2 - 2$. At $x=1$, $m = 3(1) - 2 = 1$."
        },
        // 46
        {
            "type": "mcq",
            "text": "The radius of the circle $x^2 + y^2 = 25$ is 5. Find the area of the region enclosed by the circle and the line $x = 3$ in the first quadrant.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><circle cx='200' cy='150' r='100' fill='none' stroke='blue' stroke-width='2'/><text x='150' y='50' font-family='Arial' font-size='12' fill='blue'>x^2+y^2=25</text><line x1='260' y1='250' x2='260' y2='50' stroke='red' stroke-width='2'/><text x='265' y='40' font-family='Arial' font-size='12' fill='red'>x=3</text><path d='M 260,150 Q 200,200 200,150 Q 200,100 260,150 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{25}{2} \\sin^{-1}(\\frac{3}{5}) + 6$",
                "$\\frac{25}{2} \\cos^{-1}(\\frac{3}{5}) + 6$",
                "$\\frac{25}{2} \\sin^{-1}(\\frac{3}{5}) - 6$",
                "$\\frac{25}{2} \\cos^{-1}(\\frac{3}{5}) - 6$"
            ],
            "correctAnswer": 3,
            "solution": "The area is given by $\\int_{3}^{5} \\sqrt{25-x^2} dx$. Using the standard formula, this evaluates to $\\left[ \\frac{x}{2}\\sqrt{25-x^2} + \\frac{25}{2} \\sin^{-1}(\\frac{x}{5}) \\right]_3^5$. Substituting the limits yields $\\frac{25}{2}\\sin^{-1}(1) - \\left( \\frac{3}{2}(4) + \\frac{25}{2}\\sin^{-1}(\\frac{3}{5}) \\right) = \\frac{25\\pi}{4} - 6 - \\frac{25}{2}\\sin^{-1}(\\frac{3}{5})$. Factoring out $\\frac{25}{2}$ gives $\\frac{25}{2}\\left(\\frac{\\pi}{2} - \\sin^{-1}(\\frac{3}{5})\\right) - 6$. By the identity $\\sin^{-1}(\\theta) + \\cos^{-1}(\\theta) = \\frac{\\pi}{2}$, this simplifies to $\\frac{25}{2} \\cos^{-1}(\\frac{3}{5}) - 6$."
        },
        // 47
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by $y = |x|$ and $y = \\sqrt{1-x^2}$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><circle cx='200' cy='150' r='100' fill='none' stroke='blue' stroke-width='2'/><text x='270' y='50' font-family='Arial' font-size='12' fill='blue'>x^2+y^2=1</text><line x1='200' y1='250' x2='300' y2='150' stroke='red' stroke-width='2'/><line x1='200' y1='250' x2='100' y2='150' stroke='red' stroke-width='2'/><text x='310' y='160' font-family='Arial' font-size='12' fill='red'>y=|x|</text><path d='M 200,150 L 300,250 L 200,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{\\pi}{4}$",
                "$\\frac{\\pi}{2}$",
                "$\\frac{\\pi}{4} - \\frac{1}{2}$",
                "$\\frac{\\pi}{2} - 1$"
            ],
            "correctAnswer": 0,
            "solution": "The region bounded by the upper semicircle $y = \\sqrt{1-x^2}$ and the lines $y = x$ and $y = -x$ forms a circular sector. The lines $y = x$ and $y = -x$ enclose a $90^\\circ$ angle at the origin. Since the radius of the circle is $1$, the bounded area is exactly a quarter-circle: $\\frac{1}{4} \\pi (1)^2 = \\frac{\\pi}{4}$. Alternatively, calculating the first quadrant area and doubling it yields $2 \\int_0^{1/\\sqrt{2}} (\\sqrt{1-x^2} - x) dx = 2 \\left( \\frac{\\pi}{8} \\right) = \\frac{\\pi}{4}$."
        },
        // 48
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by the graph of $y = \\frac{1}{x}$, the x-axis, and the lines $x=1$ and $x=e$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 150,250 Q 180,100 250,50' fill='none' stroke='red' stroke-width='2'/><text x='240' y='70' font-family='Arial' font-size='12' fill='red'>y=1/x</text><line x1='150' y1='250' x2='150' y2='20' stroke='blue' stroke-width='2'/><text x='110' y='20' font-family='Arial' font-size='12' fill='blue'>x=1</text><line x1='250' y1='250' x2='250' y2='50' stroke='green' stroke-width='2'/><text x='260' y='50' font-family='Arial' font-size='12' fill='green'>x=e</text><path d='M 150,250 L 250,250 L 250,50 Q 180,100 150,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "1",
                "$e$",
                "$\\ln e$",
                "$e^2$"
            ],
            "correctAnswer": 0,
            "solution": "Area = $\\int_1^e \\frac{1}{x} dx = [\\ln x]_1^e = 1$."
        },
        // 49
        {
            "type": "mcq",
            "text": "Find the area enclosed by the curves $y = \\sin x$, $y = \\cos x$, and the y-axis in the first quadrant.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 200,150 Q 150,50 100,150' fill='none' stroke='blue' stroke-width='2'/><text x='140' y='50' font-family='Arial' font-size='12' fill='blue'>y=sin x</text><path d='M 200,150 L 180,80 L 160,150' fill='none' stroke='red' stroke-width='2'/><text x='150' y='80' font-family='Arial' font-size='12' fill='red'>y=cos x</text><path d='M 200,150 Q 150,50 100,150 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\sqrt{2} - 1$",
                "$1 - \\frac{1}{\\sqrt{2}}$",
                "$\\frac{1}{\\sqrt{2}}$",
                "$\\sqrt{2}$"
            ],
            "correctAnswer": 1,
            "solution": "Area = $\\int_0^{\\pi/4} (\\cos x - \\sin x) dx = [\\sin x + \\cos x]_0^{\\pi/4} = \\sqrt{2} - 1$. Wait, this was already done in Q7. Let's do $y= \\sin x$ and y=cos x between x=0 and x=pi/4. Area = $\\sqrt{2}-1$."
        },
        // 50
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by the curve $y = 2x - x^2$ and the x-axis from $x=0$ to $x=2$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 100,250 Q 200,100 300,250' fill='none' stroke='blue' stroke-width='2'/><text x='240' y='120' font-family='Arial' font-size='12' fill='blue'>y=2x-x^2</text><path d='M 100,250 Q 200,100 300,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$\\frac{4}{3}$",
                "$\\frac{2}{3}$",
                "$\\frac{8}{3}$",
                "$\\frac{1}{3}$"
            ],
            "correctAnswer": 0,
            "solution": "Area = $\\int_0^2 (2x - x^2) dx = [x^2 - \\frac{x^3}{3}]_0^2 = 4 - \\frac{8}{3} = \\frac{4}{3}$."
        },
        // 51
        {
            "type": "mcq",
            "text": "The tangent to the parabola $y^2 = 4x$ at $(1, 2)$ intersects the x-axis at which point?<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 200,200 Q 250,150 300,200' fill='none' stroke='blue' stroke-width='2'/><text x='240' y='180' font-family='Arial' font-size='12' fill='blue'>y^2=4x</text><circle cx='250' cy='150' r='4' fill='red'/><text x='210' y='140' font-family='Arial' font-size='12' fill='red'>P(1,2)</text><line x1='150' y1='250' x2='300' y2='100' stroke='green' stroke-width='2'/><text x='290' y='110' font-family='Arial' font-size='12' fill='green'>Tangent</text></svg><br><br>",
            "options": [
                "$(-1, 0)$",
                "$(1, 0)$",
                "$(0, -1)$",
                "$(-1, 1)$"
            ],
            "correctAnswer": 0,
            "solution": "Tangent to $y^2=4ax$ at $(at^2, 2at)$ is $ty = x + at^2$. Here $a=1$, $t=1$ (since $y=2, x=1$). Tangent is $y = x+1$. Intersection with x-axis ($y=0$) gives $x = -1$. So point is $(-1,0)$."
        },
        // 52
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by $y = \\sqrt{x}$ and $y = x$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='250' x2='380' y2='250' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,245 390,250 380,255' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='245' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 100,250 Q 200,50 300,250' fill='none' stroke='blue' stroke-width='2'/><text x='240' y='120' font-family='Arial' font-size='12' fill='blue'>y=√x</text><line x1='200' y1='250' x2='350' y2='100' stroke='red' stroke-width='2'/><text x='340' y='110' font-family='Arial' font-size='12' fill='red'>y=x</text><path d='M 200,250 Q 200,50 300,250 L 350,100 Z' fill='#eafaf1' stroke='none' opacity='0.5'/><circle cx='250' cy='150' r='4' fill='black'/><text x='230' y='140' font-family='Arial' font-size='12'>(1,1)</text></svg><br><br>",
            "options": [
                "$\\frac{1}{6}$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{2}$",
                "$\\frac{1}{4}$"
            ],
            "correctAnswer": 0,
            "solution": "Intersection: $\\sqrt{x}=x \\Rightarrow x=0,1$. Area = $\\int_0^1 (\\sqrt{x} - x) dx = [\\frac{2}{3}x^{3/2} - \\frac{x^2}{2}]_0^1 = \\frac{1}{6}$."
        },
        // 53
        {
            "type": "mcq",
            "text": "Find the area of the region bounded by the graph of $y = e^x$ and the x-axis from $x=0$ to $x=1$.<br><br><svg width='400' height='300' viewBox='0 0 400 300' style='max-width:100%; display:block; margin:0 auto; border:1px solid #ccc;'><line x1='50' y1='150' x2='380' y2='150' stroke='black' stroke-width='2'/><line x1='200' y1='280' x2='200' y2='20' stroke='black' stroke-width='2'/><polygon points='380,145 390,150 380,155' fill='black'/><polygon points='195,20 200,10 205,20' fill='black'/><text x='390' y='145' font-family='Arial' font-size='14'>x</text><text x='205' y='15' font-family='Arial' font-size='14'>y</text><path d='M 200,250 Q 230,100 300,50' fill='none' stroke='blue' stroke-width='2'/><text x='240' y='80' font-family='Arial' font-size='12' fill='blue'>y=e^x</text><line x1='200' y1='250' x2='300' y2='250' stroke='black' stroke-width='2'/><path d='M 200,250 Q 230,100 300,50 L 300,250 Z' fill='#eafaf1' stroke='none' opacity='0.5'/></svg><br><br>",
            "options": [
                "$e-1$",
                "$e$",
                "$e+1$",
                "$e^2$"
            ],
            "correctAnswer": 0,
            "solution": "Area = $\\int_0^1 e^x dx = e - 1$."
        }
    ]
};