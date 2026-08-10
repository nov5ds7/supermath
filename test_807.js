window.testBank = window.testBank || {};
window.testBank['test_807'] = {
    "id": "test_807",
    "title": "MCT-2(JP) Pre-Test",
    "category": "Pre-Tests Maths",
    "uploadedAt": "2026-08-11T12:45:00Z",
    "timeLimitMins": 80,
    "shuffleQuestions": false,
    "randomizePoolSize": 0,
    "questions": [
        // 1 (Q51)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Considering only the principal values of the inverse trigonometric functions, the value of <br> $\\frac{3}{2} \\cos^{-1} \\sqrt{\\frac{2}{2+\\pi^2}} + \\frac{1}{4} \\sin^{-1} \\frac{2\\sqrt{2}\\pi}{2+\\pi^2} + \\tan^{-1} \\frac{\\sqrt{2}}{\\pi}$ is",
            "options": [
                "$\\frac{\\pi}{4}$",
                "$\\frac{3\\pi}{4}$",
                "$2\\pi$",
                "0"
            ],
            "correctAnswer": 1,
            "solution": "$\\frac{3}{2} \\tan^{-1} \\frac{\\pi}{\\sqrt{2}} + \\frac{1}{4} \\sin^{-1} \\left( \\frac{2 \\frac{\\pi}{\\sqrt{2}}}{1 + \\left(\\frac{\\pi}{\\sqrt{2}}\\right)^2} \\right) + \\cot^{-1} \\left( \\frac{\\pi}{\\sqrt{2}} \\right)$ $= \\frac{\\pi}{2} + \\frac{1}{2} \\tan^{-1} \\frac{\\pi}{\\sqrt{2}} + \\frac{1}{4} \\sin^{-1} \\left( \\frac{2 \\frac{\\pi}{\\sqrt{2}}}{1 + \\left(\\frac{\\pi}{\\sqrt{2}}\\right)^2} \\right)$. Let $\\tan^{-1} \\frac{\\pi}{\\sqrt{2}} = \\theta \\Rightarrow \\tan \\theta = \\frac{\\pi}{\\sqrt{2}}$. The expression becomes $\\frac{\\pi}{2} + \\frac{1}{2} \\theta + \\frac{1}{4} \\sin^{-1} (\\sin 2\\theta) = \\frac{\\pi}{2} + \\frac{1}{2} \\theta + \\frac{1}{4} (\\pi - 2\\theta) = \\frac{3\\pi}{4}$."
        },
        // 2 (Q52)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "$F_1, F_2$ are left and right focus points of the hyperbola $C: \\frac{x^2}{a^2} - \\frac{y^2}{b^2} = 1 (a > 0, b > 0)$. Point $O$ is the origin of the coordinate, $M$ is an arbitrary point on $C$ and above the $x$-axis. $H$ is a point of $MF_1$. Given that $MF_2 \\perp F_1F_2, MF_1 \\perp OH, |OH| = \\lambda|OF_2|$, where $\\lambda \\in \\left(\\frac{1}{3}, \\frac{1}{2}\\right)$. Find the range of the eccentricity of the hyperbola $C$.",
            "options": [
                "$(1, \\sqrt{3})$",
                "$(1, \\sqrt{2})$",
                "$(\\sqrt{2}, \\sqrt{3})$",
                "$(\\sqrt{2}, 2)$"
            ],
            "correctAnswer": 2,
            "solution": "Given $MF_2 \\perp F_1F_2$, point $M$ is $\\left(ae, \\frac{b^2}{a}\\right)$. Equation of line $HF_1: y = \\frac{b^2}{a(2ae)}(x + ae)$. Since $MF_1 \\perp OH$, the distance $p = OH = \\frac{ae b^2}{\\sqrt{b^4 + 4a^4 e^2}}$. Thus, $\\lambda = \\frac{OH}{OF_2} = \\frac{b^2}{ae \\sqrt{b^4 + 4a^4 e^2}}$. Substituting $b^2 = a^2(e^2 - 1)$, we get $\\lambda = \\frac{e^2 - 1}{e^2 + 1}$. Given $\\frac{1}{3} < \\lambda < \\frac{1}{2} \\Rightarrow \\frac{1}{3} < \\frac{e^2 - 1}{e^2 + 1} < \\frac{1}{2}$. Solving the inequalities gives $e^2 > 2$ and $e^2 < 3 \\Rightarrow \\sqrt{2} < e < \\sqrt{3}$."
        },
        // 3 (Q53)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $f$ and $g$ be defined such that $f'(x) = f^2(x) + g^2(x)$ and $g'(x) = 2f(x)g(x) + 1$. If $f(0) = \\frac{1}{5}, g(0) = \\frac{4}{5}$, then the value of $f\\left(\\frac{\\pi}{12}\\right) + g\\left(\\frac{\\pi}{12}\\right)$ equals:",
            "options": [
                "0",
                "$\\frac{\\sqrt{3}}{2}$",
                "$\\sqrt{3}$",
                "$\\frac{1}{\\sqrt{3}}$"
            ],
            "correctAnswer": 2,
            "solution": "Adding the two given equations, we get $f'(x) + g'(x) = (f(x) + g(x))^2 + 1$. Integrating both sides: $\\int \\frac{d(f(x)+g(x))}{(f(x)+g(x))^2 + 1} = \\int 1 \\cdot dx \\Rightarrow \\tan^{-1} (f(x) + g(x)) = x + C$. Putting $x = 0, f(0)+g(0) = 1/5+4/5 = 1$, we get $\\tan^{-1}(1) = 0 + C \\Rightarrow C = \\frac{\\pi}{4}$. Thus $f(x) + g(x) = \\tan\\left(x + \\frac{\\pi}{4}\\right)$. At $x = \\frac{\\pi}{12}, f\\left(\\frac{\\pi}{12}\\right) + g\\left(\\frac{\\pi}{12}\\right) = \\tan\\left(\\frac{\\pi}{12} + \\frac{\\pi}{4}\\right) = \\tan\\left(\\frac{\\pi}{3}\\right) = \\sqrt{3}$."
        },
        // 4 (Q54)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Function $f(x)$ is defined such that $f(x) = \\begin{cases} \\int_0^x (5 + |1-t|)dt, & x > 2 \\\\ 5x + 1, & x \\leq 2 \\end{cases}$ then identify the INCORRECT option?",
            "options": [
                "$f(x)$ is non-differentiable at $x = 2$",
                "$f(x)$ is continuous at $x = 2$",
                "$f(x)$ is increasing at $x = 2$",
                "$\\int_0^3 f(x)dx = \\frac{140}{3}$"
            ],
            "correctAnswer": 3,
            "solution": "For $x > 2, f(x) = \\int_0^1 (5 + 1 - t)dt + \\int_1^x (5 + t - 1)dt = \\frac{x^2}{2} + 4x + 1$. At $x=2$, both parts yield $11$, so continuous (Option 2 is true). Left derivative $= 5$, right derivative $= 6$, so non-differentiable (Option 1 is true) and increasing (Option 3 is true). Evaluating $\\int_0^3 f(x)dx = \\int_0^2 (5x+1)dx + \\int_2^3 (\\frac{x^2}{2} + 4x + 1)dx = \\frac{157}{6}$. Hence, Option 4 is incorrect because $157/6 \\neq 140/3$."
        },
        // 5 (Q55)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\int \\frac{\\sec x - \\tan x}{\\sqrt{\\sin^2 x - \\sin x}} dx = k \\ln |f(x) + \\sqrt{2}\\sqrt{\\tan x(\\tan x - \\sec x)}| + c$, where $c$ is arbitrary constant and $k$ is fixed constants then",
            "options": [
                "$k = \\sqrt{2}, f(x) = \\tan x - \\sec x$",
                "$k = \\frac{1}{\\sqrt{2}}, f(x) = \\sqrt{\\tan x + \\sec x}$",
                "$f(x) = \\tan x + \\sec x, k = \\sqrt{3}$",
                "$f(x) = \\sqrt{\\tan x + \\sec x}, k = 2$"
            ],
            "correctAnswer": 0,
            "solution": "$I = \\int \\frac{\\sec x - \\tan x}{\\sqrt{\\sin^2 x - \\sin x}} dx = \\int \\frac{\\sec x (\\sec x - \\tan x)}{\\sqrt{\\tan^2 x - \\tan x \\sec x}} dx$. Put $\\tan x - \\sec x = t \\Rightarrow \\sec x(\\sec x - \\tan x)dx = dt$. Also $(\\tan x - \\sec x)^2 = t^2 \\Rightarrow 2\\tan^2 x - 2\\sec x \\tan x + 1 = t^2 \\Rightarrow \\tan^2 x - \\sec x \\tan x = \\frac{1}{2}(t^2 - 1)$. $\\Rightarrow I = \\int \\frac{dt}{\\sqrt{\\frac{1}{2}(t^2 - 1)}} = \\sqrt{2} \\int \\frac{dt}{\\sqrt{t^2 - 1}} = \\sqrt{2} \\ln |t + \\sqrt{t^2 - 1}| + c$. Substituting $t$ back: $I = \\sqrt{2} \\ln |(\\tan x - \\sec x) + \\sqrt{2}\\sqrt{\\tan x(\\tan x - \\sec x)}| + c$. Therefore, $k = \\sqrt{2}$ and $f(x) = \\tan x - \\sec x$."
        },
                // 6 (Q56)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $\\int \\frac{\\sin^2 x \\cdot \\sec^2 x + 2\\sqrt{1-x^2} \\tan x \\cdot \\sin^{-1} x}{\\sqrt{1-x^2}(1+\\tan^2 x)} dx = f(x) + c$, where $f(0) = 0$, then -",
            "options": [
                "$f(x) = (\\sin^{-1} x) \\cos^2 x$",
                "$f(x) = (\\sin^{-1} x) \\tan^2 x$",
                "Range of $f(x)$ is $\\left[-\\frac{\\pi}{2} \\cos^2 1, \\frac{\\pi}{2} \\cos^2 1\\right]$",
                "Range of $f(x)$ is $\\left[-\\frac{\\pi}{2} \\sin^2 1, \\frac{\\pi}{2} \\sin^2 1\\right]$"
            ],
            "correctAnswer": 3,
            "solution": "Simplify the integral: $I_1 = \\int \\left( \\frac{\\sin^2 x}{\\sqrt{1-x^2}} + \\sin 2x \\cdot \\sin^{-1} x \\right) dx$. By integrating by parts for the second term, we get $f(x) = (\\sin^2 x)(\\sin^{-1} x)$. The domain is $x \\in [-1, 1]$. Since $f'(x) = \\frac{\\sin^2 x}{\\sqrt{1-x^2}} + \\sin 2x \\sin^{-1} x > 0 \\;\\; \\forall x \\in [-1, 1]$, the function is strictly increasing. Thus, its range is $\\left[ -\\frac{\\pi}{2} \\sin^2 1, \\frac{\\pi}{2} \\sin^2 1 \\right]$."
        },
        // 7 (Q57) - CORRECTED
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Suppose that $f: R \\to R$ is a continuous function and satisfies the equation $f(x)f(f(x)) = 1$ for all $x \\in R$. Further, if $f(1000) = 999$, then which of the following options are necessarily true?<br>1. $f(500) = \\frac{1}{500}$<br>2. $f(199) = \\frac{1}{199}$<br>3. $f(2000) = \\frac{1}{2000}$<br>4. $f(235) = \\frac{1}{235}$<br>5. $f(1099) = \\frac{1}{1099}$<br>6. $f(x) = \\frac{1}{x} \\;\\; \\forall x \\in R - \\{0, 1000\\}$<br>7. No such function exists<br>Enter the product of the number of all correct options. For example, if correct options are 2 and 3, then enter 6.",
            "options": [
                "2",
                "4",
                "6",
                "8"
            ],
            "correctAnswer": 3,
            "solution": "For all $y$ in the range of $f$, we have $y f(y) = 1$, so $f(y) = \\frac{1}{y}$. Since $999$ is in the range of $f$, $f(999) = \\frac{1}{999}$. Thus, $\\frac{1}{999}$ is in the range of $f$. By the intermediate value theorem, the range of $f$ contains $\\left[\\frac{1}{999}, 999\\right]$. Therefore, for all $y$ in $\\left[\\frac{1}{999}, 999\\right]$, $f(y) = \\frac{1}{y}$. Hence, statements 1, 2, and 4 are necessarily true. On the other hand, constructing $g(x)$ through $(999, 1/999)$ and $(1000, 999)$ shows that statements 3, 5, 6, and 7 are not necessarily true. Since the correct options are 1, 2, and 4, the product of these numbers is $1 \\times 2 \\times 4 = 8$."
        },
        // 8 (Q58)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $f(x) = ([a]^2 - 5[a] + 4)x^3 - (6\\{a\\}^2 - 5\\{a\\} + 1)x - (\\tan x) \\text{sgn}(x)$ be an even function $\\forall x \\in R$, then the sum of all possible values of $3a$ is (where $[.]$ denotes G.I. F and $\\{\\}$ fractional part function)",
            "options": [
                "35",
                "34",
                "36",
                "40"
            ],
            "correctAnswer": 0,
            "solution": "For $f(x)$ to be an even function, the coefficients of $x^3$ and $x$ must be zero. Thus, $[a]^2 - 5[a] + 4 = 0 \\Rightarrow [a] = 1$ or $4$. And $6\\{a\\}^2 - 5\\{a\\} + 1 = 0 \\Rightarrow (3\\{a\\}-1)(2\\{a\\}-1) = 0 \\Rightarrow \\{a\\} = 1/3$ or $1/2$. Combining these gives $a = 1+1/2, 4+1/2, 1+1/3, 4+1/3 \\Rightarrow a = 3/2, 9/2, 4/3, 13/3$. Calculating $3a$ for each: $3a = 9/2, 27/2, 4, 13$. Sum of all possible values of $3a = 9/2 + 27/2 + 4 + 13 = 18 + 17 = 35$. This matches Option 1."
        },
        // 9 (Q59)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A variable chord PQ of $y^2 = 4ax$ subtends a right angle at its vertex then the locus of point of intersection of normals at P and Q will be",
            "options": [
                "$y^2 = 4a(x - a)$",
                "$y^2 = 8a(x - 4a)$",
                "$y^2 = 12a(x - 8a)$",
                "$y^2 = 16a(x - 6a)$"
            ],
            "correctAnswer": 3,
            "solution": "Let the coordinates of P and Q be $(at_1^2, 2at_1)$ and $(at_2^2, 2at_2)$. Since chord PQ subtends a right angle at the origin, $m_{OP} \\cdot m_{OQ} = -1 \\Rightarrow \\frac{2}{t_1} \\cdot \\frac{2}{t_2} = -1 \\Rightarrow t_1t_2 = -4$. The equations of the normals at P and Q are $y + t_1x = 2at_1 + at_1^3$ and $y + t_2x = 2at_2 + at_2^3$. Solving for the intersection point $(X, Y)$: $X = a(t_1^2 + t_2^2 + t_1t_2) + 2a = a((t_1+t_2)^2 - t_1t_2) + 2a = a(t_1+t_2)^2 + 6a$. And $Y = -at_1t_2(t_1+t_2) = 4a(t_1+t_2)$. Substituting $(t_1+t_2)^2 = Y^2/(16a^2)$ into the X equation yields $Y^2 = 16a(X-6a)$. Hence the locus is $y^2 = 16a(x - 6a)$."
        },
        // 10 (Q60)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A curve in the $x-y$ plane is given by the parametric equation $x = t^2 + t + 1, y = t^2 - t + 1$, where parameter $t$ varies over all real numbers then the number of straight line passing through $(0,0)$ which are tangent to the curve are $n$ and sum of slopes of these tangents is $k$ then $n + k$ is equal to",
            "options": [
                "3",
                "4",
                "$\\frac{11}{2}$",
                "$\\frac{16}{3}$"
            ],
            "correctAnswer": 3,
            "solution": "The slope of the tangent to the curve at parameter $t$ is $\\frac{dy}{dx} = \\frac{2t-1}{2t+1}$. The tangent passes through $(0,0)$ and a point $(t^2+t+1, t^2-t+1)$ on the curve. Equating slopes leads to $(-t^2+t-1)(2t+1) = (2t-1)(t^2+t+1) \\Rightarrow 2t^2 = 2 \\Rightarrow t^2 = 1 \\Rightarrow t = 1, -1$. Thus, there are $n=2$ tangents. Their slopes are $k_1 = \\frac{2(1)-1}{2(1)+1} = \\frac{1}{3}$ and $k_2 = \\frac{2(-1)-1}{2(-1)+1} = 3$. Sum of slopes $k = \\frac{1}{3} + 3 = \\frac{10}{3}$. Therefore, $n+k = 2 + \\frac{10}{3} = \\frac{16}{3}$, matching Option 4."
        },
        // 11 (Q61)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The eccentricity of ellipse $14x^2 - 4xy + 11y^2 = 60$ will be equal to",
            "options": [
                "$\\frac{1}{\\sqrt{3}}$",
                "$\\frac{1}{\\sqrt{2}}$",
                "$\\frac{1}{2}$",
                "$\\frac{\\sqrt{3}}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "The center of the ellipse is at $(0,0)$. Using parametric equations $x = r\\cos\\theta$ and $y = r\\sin\\theta$, we substitute into the ellipse equation: $r^2(1 + \\cos^2\\theta - 4\\sin\\theta\\cos\\theta + 11\\sin^2\\theta) = 60$. Simplifying this yields $r^2 = \\frac{120}{3\\cos 2\\theta - 4\\sin 2\\theta + 25}$. The maximum value of $r^2$ occurs when the denominator is minimized, giving $a^2 = 6$. The minimum value of $r^2$ occurs when the denominator is maximized, giving $b^2 = 4$. Thus, $a = \\sqrt{6}$ and $b = 2$, so the eccentricity is $e = \\sqrt{1 - \\frac{b^2}{a^2}} = \\sqrt{1 - \\frac{4}{6}} = \\frac{1}{\\sqrt{3}}$."
        },
        // 12 (Q62)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let P is a point on the ellipse $\\frac{x^2}{16} + \\frac{y^2}{1} = 1$ and Q is a corresponding point on its auxiliary circle. If angle between the tangents at these points is $\\alpha$, then greatest value of $\\tan \\alpha$ is",
            "options": [
                "1",
                "$\\frac{3}{4}$",
                "2",
                "$\\frac{1}{2}$"
            ],
            "correctAnswer": 1,
            "solution": "The equation of the tangent to the ellipse at a parameter $\\theta$ is $T_E: \\frac{x\\cos\\theta}{4} + y\\sin\\theta = 1$, whose slope is $M_E = \\frac{-\\cos\\theta}{4\\sin\\theta} = \\frac{-\\cot\\theta}{4}$. The equation of the tangent to the auxiliary circle is $T_C: x\\cos\\theta + y\\sin\\theta = 4$, whose slope is $M_C = -\\cot\\theta$. The angle between these tangents is $\\tan\\alpha = \\left|\\frac{M_C - M_E}{1 + M_C M_E}\\right| = \\frac{3\\cot\\theta}{4 + \\cot^2\\theta} = \\frac{3}{\\cot\\theta + 4\\tan\\theta}$. By the AM-GM inequality, the maximum value of $\\tan\\alpha$ is $\\frac{3}{4}$."
        },
        // 13 (Q63)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Tangents are drawn from point $(0, -3)$ to the parabola $x^2 = 4y$ then radius of the smallest circle touching both tangents and directrix of given parabola is.",
            "options": [
                "$\\frac{2}{3}$",
                "$\\frac{1}{3}$",
                "1",
                "$\\frac{1}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "For the parabola $x^2 = 4y$, the directrix is $y = -1$. The equation of a tangent with slope $m$ is $y = mx - m^2$. Since it passes through $(0,-3)$, we get $-3 = -m^2 \\Rightarrow m = \\pm\\sqrt{3}$. Thus, the tangents are $y = \\sqrt{3}x - 3$ and $y = -\\sqrt{3}x - 3$. The triangle formed by these tangents and the directrix is an equilateral triangle. The side length $a$ of this triangle is $\\frac{4}{\\sqrt{3}}$. The radius $r$ of the incircle (smallest circle touching the boundaries) is given by $r = \\frac{\\Delta}{s} = \\frac{\\frac{\\sqrt{3}}{4} a^2}{\\frac{3a}{2}} = \\frac{\\sqrt{3}}{6}a = \\frac{\\sqrt{3}}{6} \\times \\frac{4}{\\sqrt{3}} = \\frac{2}{3}$."
        },
        // 14 (Q64)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A variable line given by $(x+y-7) + t(4x-3y) = 0$ ($t$ being a parameter) cuts a parabola at P&Q such that tangent at these points intersect at right angles on the line $3x+4y+25=0$, then identify incorrect option.",
            "options": [
                "Axis of parabola is $4x = 3y$",
                "Focus of parabola is $(3,4)$",
                "Vertex of parabola is $(0,0)$",
                "Length of latus rectum of parabola is 10"
            ],
            "correctAnswer": 3,
            "solution": "The family of lines passes through the point of intersection $(3,4)$. Since the tangents at P and Q intersect at right angles, their intersection point lies on the directrix. Thus, $3x+4y+25=0$ is the directrix. The focus is $S(3,4)$. The perpendicular distance from the focus to the directrix is $2a = \\frac{|3(3)+4(4)+25|}{5} = \\frac{50}{5} = 10 \\Rightarrow a = 5$. Therefore, the length of the latus rectum is $4a = 20$. The option stating the length of the latus rectum is 10 is incorrect."
        },
        // 15 (Q65)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $I_1 = \\int_0^{\\pi/2} \\frac{x}{\\sin x} dx$ and $I_2 = \\int_0^1 \\frac{\\tan^{-1} x}{x} dx$, then the value of $\\frac{I_1}{I_2}$ is",
            "options": [
                "1",
                "2",
                "$\\frac{1}{2}$",
                "3"
            ],
            "correctAnswer": 1,
            "solution": "To evaluate $I_2$, we substitute $\\tan^{-1} x = t \\Rightarrow x = \\tan t, dx = \\sec^2 t dt$. When $x \\to 0, t \\to 0$ and when $x \\to 1, t \\to \\pi/4$. $I_2 = \\int_0^{\\pi/4} \\frac{t}{\\tan t} \\sec^2 t dt = \\int_0^{\\pi/4} \\frac{2t}{\\sin 2t} dt$. Let $2t = z \\Rightarrow dt = dz/2$. $I_2 = \\frac{1}{2} \\int_0^{\\pi/2} \\frac{z}{\\sin z} dz = \\frac{1}{2} I_1$. Therefore, $\\frac{I_1}{I_2} = 2$."
        },
        // 16 (Q66)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Given : $f(x) = \\begin{cases} x, & 0 \\leq x < \\frac{1}{2} \\\\ \\frac{1}{2}, & x = \\frac{1}{2} \\\\ 1-x, & \\frac{1}{2} < x \\leq 1 \\end{cases}$ and $g(x) = \\left(x - \\frac{1}{2}\\right)^2, x \\in R$. Then the area (in sq.units) of the region bounded by the curves, $y=f(x)$ and $y=g(x)$ between the lines, $2x = 1$ and $2x = \\sqrt{3}$, is -",
            "options": [
                "$\\frac{1}{2} - \\frac{\\sqrt{3}}{4}$",
                "$\\frac{1}{3} + \\frac{\\sqrt{3}}{4}$",
                "$\\frac{1}{2} + \\frac{\\sqrt{3}}{4}$",
                "$\\frac{\\sqrt{3}}{4} - \\frac{1}{3}$"
            ],
            "correctAnswer": 3,
            "solution": "Required area = Area of trapezium ABCD $- \\int_{1/2}^{\\sqrt{3}/2} \\left(x - \\frac{1}{2}\\right)^2 dx$ $= \\frac{1}{2} \\left( \\frac{\\sqrt{3}-1}{2} \\right) \\left( \\frac{1}{2} + 1 - \\frac{\\sqrt{3}}{2} \\right) - \\frac{1}{3} \\left( \\left(x - \\frac{1}{2}\\right)^3 \\right)_{1/2}^{\\sqrt{3}/2}$ $= \\frac{\\sqrt{3}}{4} - \\frac{1}{3}$."
        },
        // 17 (Q67)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $I = \\int_{-20\\pi}^{20\\pi} |\\sin x|[\\sin x]dx$ (where $[ \\cdot ]$ denotes the greatest integer function), then the value of $I$ is -",
            "options": [
                "$-40$",
                "40",
                "20",
                "$-20$"
            ],
            "correctAnswer": 0,
            "solution": "$I = \\int_{-20\\pi}^{20\\pi} |\\sin x|[\\sin x] dx = \\int_{0}^{20\\pi} |\\sin x|([\\sin x] + [-\\sin x]) dx$ $= -20 \\int_{0}^{\\pi} (\\sin x) dx = -20 (-\\cos x)_0^{\\pi} = 20(-2) = -40$."
        },
        // 18 (Q68)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $u_n = \\int_{0}^{\\pi/2} x^n \\sin x dx$, then the value of $u_{10} + 90 u_8$ is -",
            "options": [
                "$9 \\left(\\frac{\\pi}{2}\\right)^8$",
                "$\\left(\\frac{\\pi}{2}\\right)^9$",
                "$10 \\left(\\frac{\\pi}{2}\\right)^9$",
                "$9 \\left(\\frac{\\pi}{2}\\right)^9$"
            ],
            "correctAnswer": 2,
            "solution": "$U_{10} = \\left(-x^{10} \\cos x\\right)_0^{\\pi/2} + \\int_{0}^{\\pi/2} 10 x^9 \\cos x dx$ $= 10 \\left[ x^9 \\sin x \\right]_0^{\\pi/2} - 10 \\times 9 \\int_{0}^{\\pi/2} x^8 \\sin x dx$ $U_{10} + 90 U_8 = \\frac{10 \\cdot \\pi^9}{2^9}$."
        },
        // 19 (Q69)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $f: R \\to R$ be a differential function and $f(1) = 4$. Then, the value of $\\lim_{x \\to 1} \\int_{4}^{f(x)} \\frac{2t}{x-1} dt$ is -",
            "options": [
                "$f'(1)$",
                "$2f'(1)$",
                "$4f'(1)$",
                "$8f'(1)$"
            ],
            "correctAnswer": 3,
            "solution": "$\\lim_{x \\to 1} \\left| \\frac{t^2}{x-1} \\right|_4^{f(x)} = \\lim_{x \\to 1} \\frac{[f(x)]^2 - 16}{x-1}$ $= \\lim_{x \\to 1} [f(x) + 4] \\lim_{x \\to 1} \\frac{f(x) - 4}{x-1}$ $= \\lim_{x \\to 1} [f(x) + 4] \\lim_{x \\to 1} \\frac{f(x) - f(1)}{x-1}$ $[ \\because f(1) = 4 ] = [f(1) + 4] f'(1) = (4+4) f'(1) = 8f'(1)$."
        },
        // 20 (Q70) - Corrected Solution
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $f(x) = |x - 2|$ and $g(x) = f(f(x)), x \\in [0, 4]$. Then $\\int_{0}^{3} (g(x) - f(x)) dx$ is equal to -",
            "options": [
                "0",
                "$\\frac{1}{2}$",
                "$\\frac{3}{2}$",
                "1"
            ],
            "correctAnswer": 3,
            "solution": "$f(x) = |x - 2| = \\begin{cases} 2 - x, & x < 2 \\\\ x - 2, & x \\geq 2 \\end{cases}$. $g(x) = f(f(x)) = \\begin{cases} 2 - f(x), & f(x) < 2 \\\\ f(x) - 2, & f(x) \\geq 2 \\end{cases} = \\begin{cases} x, & 0 < x < 2 \\\\ 4 - x, & 2 \\leq x < 4 \\end{cases} \\text{ for } x \\in [0,4]$. $\\int_{0}^{3} (g(x) - f(x)) dx = \\int_{0}^{2} x dx + \\int_{2}^{3} (4 - x) dx - \\int_{0}^{3} |x - 2| dx = 2 + \\frac{3}{2} - \\frac{5}{2} = 1$."
        },
        // 21 (Q71)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "$\\lim_{n\\to\\infty} \\frac{n}{3} \\left[ \\left( \\frac{3}{n} + \\frac{9}{n^2} \\right)^2 + \\left( \\frac{3}{n} + \\frac{18}{n^2} \\right)^2 + \\left( \\frac{3}{n} + \\frac{27}{n^2} \\right)^2 + \\dots + \\left( \\frac{3}{n} + \\frac{9n}{n^2} \\right)^2 \\right]$ is equal to _____.",
            "correctAnswer": 21,
            "solution": "$\\lim_{n\\to\\infty} \\sum_{r=1}^n \\frac{n}{3} \\left( \\frac{3}{n} + \\frac{9r}{n^2} \\right)^2 = 3 \\int_{0}^{1} (1+3x)^2 dx = \\frac{(1+3x)^3}{3} \\Big|_{0}^{1} = \\frac{64}{3} - \\frac{1}{3} = 21$."
        },
        // 22 (Q72)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The area enclosed between the curves $y = \\log_e(x+e), x = \\log_e\\left(\\frac{1}{y}\\right)$ and the x-axis is _____.",
            "correctAnswer": 2,
            "solution": "$y = \\log_e(x+e) \\Rightarrow e^y = x+e \\Rightarrow x = e^y - e$. $x = \\log_e\\left(\\frac{1}{y}\\right) \\Rightarrow e^x = \\frac{1}{y} \\Rightarrow y = e^{-x}$. Area $= \\int_{1-e}^{0} \\log_e(x+e) dx + \\int_{0}^{\\infty} e^{-x} dx$. Substituting $t = x+e$ in the first integral: $\\int_{1}^{e} \\ln t \\, dt = (t\\ln t - t)_{1}^{e} = (e-e) - (0-1) = 1$. Second integral: $(-e^{-x})_{0}^{\\infty} = 0 - (-1) = 1$. Total area $= 1+1 = 2$."
        },
        // 23 (Q73)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $f(x) = \\sqrt{\\sin^{-1}(\\cos(\\tan^{-1}x)) + \\cos^{-1}(\\sin(\\cot^{-1}x))}$ and $\\int_{\\frac{-\\pi}{\\sqrt{2}}}^{\\frac{\\pi}{\\sqrt{2}}} f(x)dx = k$. Then $\\frac{11k}{\\pi}$ is equal to _____.",
            "correctAnswer": 11,
            "solution": "Using the interconversion and $\\sin^{-1}x + \\cos^{-1}x = \\frac{\\pi}{2}$, we get $f(x) = \\sqrt{\\frac{\\pi}{2} - \\tan^{-1}x + \\frac{\\pi}{2} - \\cot^{-1}x} = \\sqrt{\\pi - (\\tan^{-1}x + \\cot^{-1}x)} = \\sqrt{\\pi - \\frac{\\pi}{2}} = \\sqrt{\\frac{\\pi}{2}}$. Thus, $k = \\int_{-\\pi/\\sqrt{2}}^{\\pi/\\sqrt{2}} \\sqrt{\\frac{\\pi}{2}} dx = \\sqrt{\\frac{\\pi}{2}} \\cdot \\frac{2\\pi}{\\sqrt{2}} = \\pi$. Therefore, $\\frac{11k}{\\pi} = 11$."
        },
        // Q24 (Q74)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "An equilateral triangle $ABC$ is inscribed in the parabola $y = x^2$ and one of the sides of the equilateral triangle has the gradient 2. If the sum of x-coordinates of all the vertices of the triangle is expressed in the form of $\\frac{p}{q}$ (where $p$ $\\&$ $q$ are co prime natural number), then the value of $|p - q|$ is",
            "correctAnswer": 8,
            "solution": "$y = x^2$. To find: $t_1 + t_2 + t_3 = ?$\nLet the slopes of the sides be $m_1, m_2, m_3$.\n$m_1 = \\frac{t_2^2 - t_1^2}{t_2 - t_1} = t_2 + t_1 = 2$.\nSimilarly, $m_2 = t_2 + t_3$ and $m_3 = t_3 + t_1$.\nHence, $t_1 + t_2 + t_3 = \\frac{m_1 + m_2 + m_3}{2}$.\nThe angle between the sides of an equilateral triangle is $60^\\circ$.\n$\\tan 60^\\circ = \\left| \\frac{m-2}{1+2m} \\right| \\Rightarrow \\pm\\sqrt{3}(1+2m) = m - 2$.\nTaking the positive sign gives $m_2 = \\frac{-(2+\\sqrt{3})}{2\\sqrt{3}-1}$.\nTaking the negative sign gives $m_3 = \\frac{2-\\sqrt{3}}{2\\sqrt{3}+1}$.\nGiven $m_1 = 2$.\nSum of slopes: $m_1 + m_2 + m_3 = \\frac{-(2+\\sqrt{3})}{2\\sqrt{3}-1} + \\frac{2-\\sqrt{3}}{2\\sqrt{3}+1} + 2 = \\frac{-5\\sqrt{3}-8+5\\sqrt{3}-8}{11} + 2 = \\frac{-16}{11} + \\frac{22}{11} = \\frac{6}{11}$.\n$\\sum_{i=1}^{3} t_r = \\frac{m_1 + m_2 + m_3}{2} = \\frac{6/11}{2} = \\frac{3}{11} = \\frac{p}{q}$.\nThus, $p=3$ and $q=11$.\n$|p - q| = |3 - 11| = 8$."
        },
        // 25 (Q75)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $\\{x\\}$ and $[x]$ denote the fractional part of x and the greatest integer $\\le$ x respectively of a real number x. If $\\int_{0}^{n} \\{x\\}dx, \\int_{0}^{n} [x]dx$ and $10(n^2-n), (n \\in N, n > 1)$ are three consecutive terms of a G.P. then n is equal to _____.",
            "correctAnswer": 21,
            "solution": "$\\int_{0}^{n} \\{x\\}dx = n \\int_{0}^{1} x dx = \\frac{n}{2}$. $\\int_{0}^{n} [x]dx = \\int_{0}^{n} (x-\\{x\\})dx = \\frac{n^2}{2} - \\frac{n}{2} = \\frac{n^2-n}{2}$. Since $\\frac{n}{2}, \\frac{n^2-n}{2}, 10(n^2-n)$ are in G.P., $\\left(\\frac{n^2-n}{2}\\right)^2 = \\frac{n}{2} \\cdot 10(n^2-n) \\Rightarrow \\frac{n^2(n-1)^2}{4} = 5n^2(n-1) \\Rightarrow n-1=20 \\Rightarrow n=21$."
        }         
    ]
};                