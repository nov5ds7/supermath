window.testBank = window.testBank || {};
window.testBank['test_823'] = {
    title: "RCT-01(02-11-2026) Pre-Test",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-10-31T12:31:00Z",
    timeLimitMins: 80,
    examPattern: "main",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // Q1 | (was Q13) 3D - intersecting lines, distance [source PDF Q62]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - A (Maximum Marks: 80)</h3><b>Single Correct Answer Type</b><br><br>This section contains <b>20</b> questions. Each question has <b>4</b> options (1), (2), (3) and (4) for its answer, out of which <b>ONLY ONE</b> option can be correct.<br><br><b>Marking scheme:</b><ul><li><b>Full Marks:</b> +4 for correct answer</li><li><b>Zero Marks:</b> 0 if not attempted</li><li><b>Negative Marks:</b> -1 if not correct</li></ul></div><br>Let the line passing through the points $(-1,2,1)$ and parallel to the line $\\dfrac{x-1}{2}=\\dfrac{y+1}{3}=\\dfrac z4$ intersect the line $\\dfrac{x+2}{3}=\\dfrac{y-3}{2}=\\dfrac{z-4}{1}$ at the point $P$. Then the distance of $P$ from the point $Q(4,-5,1)$ is",
            "options": [
                        "$5\\sqrt6$",
                        "$5$",
                        "$5\\sqrt5$",
                        "$10$"
            ],
            "solution": "First line: $(-1+2t,\\ 2+3t,\\ 1+4t)$. Second line: $(-2+3s,\\ 3+2s,\\ 4+s)$.<br>$-1+2t=-2+3s$ and $2+3t=3+2s$ give $t=1,\\ s=1$; check $z$: $1+4=5=4+1$ &#10003;.<br>$P=(1,5,5)$. $PQ=\\sqrt{(4-1)^2+(-5-5)^2+(1-5)^2}=\\sqrt{9+100+16}=\\sqrt{125}=5\\sqrt5$."
        },
        // Q2 | (was Q18) Vectors - reciprocal system [source PDF Q56]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If $\\vec p=\\dfrac{\\vec b\\times\\vec c}{[\\vec a\\ \\vec b\\ \\vec c]},\\ \\vec q=\\dfrac{\\vec c\\times\\vec a}{[\\vec a\\ \\vec b\\ \\vec c]},\\ \\vec r=\\dfrac{\\vec a\\times\\vec b}{[\\vec a\\ \\vec b\\ \\vec c]}$, where $\\vec a,\\vec b,\\vec c$ are three non coplanar vectors, then the value of the expression $(\\vec a+\\vec b+\\vec c)\\cdot(\\vec p+\\vec q+\\vec r)$ is",
            "options": [
                        "$3$",
                        "$6$",
                        "$8$",
                        "$10$"
            ],
            "solution": "$\\vec a\\cdot\\vec p=\\dfrac{\\vec a\\cdot(\\vec b\\times\\vec c)}{[\\vec a\\ \\vec b\\ \\vec c]}=1$; similarly $\\vec b\\cdot\\vec q=1$ and $\\vec c\\cdot\\vec r=1$.<br>Cross terms vanish: e.g. $\\vec a\\cdot\\vec q=\\dfrac{\\vec a\\cdot(\\vec c\\times\\vec a)}{[\\vec a\\ \\vec b\\ \\vec c]}=0$ (scalar triple product with a repeated vector).<br>So the expression $=1+1+1=3$."
        },
        // Q3 | (was Q5) Vectors - sum of dot products [source PDF Q51]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $\\vec a,\\vec b,\\vec c$ are non-zero vectors such that $\\vec a+\\vec b+\\vec c=\\vec 0$ and $m=\\vec a\\cdot\\vec b+\\vec b\\cdot\\vec c+\\vec a\\cdot\\vec c$ then which of the following is correct?",
            "options": [
                        "$m\\lt 0$",
                        "$m\\gt 0$",
                        "$m=0$",
                        "$m$ cannot be determined"
            ],
            "solution": "$|\\vec a+\\vec b+\\vec c|^2=0\\Rightarrow|\\vec a|^2+|\\vec b|^2+|\\vec c|^2+2m=0$.<br>So $m=-\\dfrac{|\\vec a|^2+|\\vec b|^2+|\\vec c|^2}{2}\\lt 0$, as the vectors are non-zero."
        },
        // Q4 | (was Q10) Sets & Relations - counting relations [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $A=\\{1,2,3,4\\}$. How many relations on $A$ are simultaneously reflexive and symmetric?",
            "options": [
                        "$1024$",
                        "$4096$",
                        "$64$",
                        "$16$"
            ],
            "solution": "A reflexive relation must contain all four pairs $(x,x)$. For a symmetric relation, each of the $\\binom42=6$ unordered pairs $\\{x,y\\}$ with $x\\neq y$ is either present as both $(x,y),(y,x)$ or absent, giving $2$ choices each.<br>Number $=2^6=64$."
        },
        // Q5 | (was Q14) Vectors - intersection of planes, angle [source PDF Q66]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Let $\\vec a$ be a non-zero vector parallel to the line of intersection of the two planes described by $\\hat i+\\hat j,\\ \\hat i+\\hat k$ and $\\hat i-\\hat j,\\ \\hat j-\\hat k$. If $\\theta$ is the angle between the vector $\\vec a$ and the vector $\\vec b=2\\hat i-2\\hat j+\\hat k$ and $\\vec a\\cdot\\vec b=6$, then ordered pair $(\\theta,|\\vec a\\times\\vec b|)$ is equal to:",
            "options": [
                        "$\\left(\\dfrac\\pi3,6\\right)$",
                        "$\\left(\\dfrac\\pi4,3\\sqrt6\\right)$",
                        "$\\left(\\dfrac\\pi3,3\\sqrt6\\right)$",
                        "$\\left(\\dfrac\\pi4,6\\right)$"
            ],
            "solution": "Normal of the first plane: $(\\hat i+\\hat j)\\times(\\hat i+\\hat k)=\\hat i-\\hat j-\\hat k$. Normal of the second: $(\\hat i-\\hat j)\\times(\\hat j-\\hat k)=\\hat i+\\hat j+\\hat k$.<br>The line of intersection is along $(1,-1,-1)\\times(1,1,1)=(0,-2,2)\\parallel(0,-1,1)$. Let $\\vec a=\\lambda(0,-1,1)$.<br>$\\vec a\\cdot\\vec b=\\lambda(2+1)=3\\lambda=6\\Rightarrow\\lambda=2$, so $\\vec a=(0,-2,2)$, $|\\vec a|=2\\sqrt2$, $|\\vec b|=3$.<br>$\\cos\\theta=\\dfrac{6}{2\\sqrt2\\cdot3}=\\dfrac1{\\sqrt2}\\Rightarrow\\theta=\\dfrac\\pi4$ and $|\\vec a\\times\\vec b|=|\\vec a||\\vec b|\\sin\\theta=2\\sqrt2\\cdot3\\cdot\\dfrac1{\\sqrt2}=6$."
        },
        // Q6 | (was Q2) Sets & Relations - divisibility relation [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $A=\\{1,2,3,4,5,6\\}$ and $R=\\{(x,y): x,y\\in A,\\ x \\text{ divides } y\\}$. Then $R$ is",
            "options": [
                        "an equivalence relation",
                        "reflexive and symmetric only",
                        "reflexive and transitive but not symmetric",
                        "symmetric and transitive but not reflexive"
            ],
            "solution": "Reflexive: every $x$ divides itself, so $(x,x)\\in R$ for all $x\\in A$.<br>Not symmetric: $(1,2)\\in R$ (as $1\\mid2$) but $(2,1)\\notin R$.<br>Transitive: if $x\\mid y$ and $y\\mid z$ then $x\\mid z$.<br>Hence $R$ is reflexive and transitive but not symmetric."
        },
        // Q7 | (was Q15) Vectors - unit vectors, sum of squares [source PDF Q55]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $\\vec x,\\vec y$ and $\\vec z$ be unit vectors such that $|\\vec x-\\vec y|^2+|\\vec y-\\vec z|^2+|\\vec z-\\vec x|^2=9$. Then $|\\vec x+\\vec y-\\vec z|^2-4\\,\\vec x\\cdot\\vec y=$",
            "options": [
                        "$4$",
                        "$6$",
                        "$8$",
                        "$10$"
            ],
            "solution": "$|\\vec x-\\vec y|^2+|\\vec y-\\vec z|^2+|\\vec z-\\vec x|^2=6-2(\\vec x\\cdot\\vec y+\\vec y\\cdot\\vec z+\\vec z\\cdot\\vec x)=9$, so $\\sum\\vec x\\cdot\\vec y=-\\tfrac32$.<br>Then $|\\vec x+\\vec y+\\vec z|^2=3+2\\left(-\\tfrac32\\right)=0$, so $\\vec x+\\vec y=-\\vec z$ and $|\\vec x+\\vec y|=1$.<br>$|\\vec x+\\vec y|^2=2+2\\vec x\\cdot\\vec y=1\\Rightarrow\\vec x\\cdot\\vec y=-\\tfrac12$.<br>$\\vec x+\\vec y-\\vec z=-\\vec z-\\vec z=-2\\vec z$, so $|\\vec x+\\vec y-\\vec z|^2=4$.<br>Required value $=4-4\\left(-\\tfrac12\\right)=4+2=6$."
        },
        // Q8 | (was Q11) Complex numbers - locus line, minimum distance [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If a complex number $z$ satisfies $|z-3|=|z+3i|$, then the minimum value of $|z-(1+2i)|$ is",
            "options": [
                        "$\\dfrac{3}{\\sqrt2}$",
                        "$3\\sqrt2$",
                        "$\\dfrac32$",
                        "$3$"
            ],
            "solution": "$|z-3|=|z+3i|$ says $z$ is equidistant from $3$ and $-3i$, i.e. $z$ lies on the perpendicular bisector of the points $(3,0)$ and $(0,-3)$.<br>With $z=x+iy$: $(x-3)^2+y^2=x^2+(y+3)^2\\Rightarrow -6x+9=6y+9\\Rightarrow x+y=0$.<br>$|z-(1+2i)|$ is the distance of $z$ from $(1,2)$. Its minimum is the perpendicular distance from $(1,2)$ to $x+y=0$: $\\dfrac{|1+2|}{\\sqrt2}=\\dfrac{3}{\\sqrt2}$."
        },
        // Q9 | (was Q17) Sets - chains of subsets [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $S=\\{1,2,3,4\\}$. The number of ordered triples $(A,B,C)$ of subsets of $S$ such that $A\\subseteq B\\subseteq C$ is",
            "options": [
                        "$81$",
                        "$125$",
                        "$256$",
                        "$1024$"
            ],
            "solution": "Look at each element of $S$ separately. Relative to $A\\subseteq B\\subseteq C$, an element can be: in none of them, in $C$ only, in $B$ and $C$ only, or in all three. That is $4$ choices per element.<br>The choices for different elements are independent, so the number of triples is $4^4=256$."
        },
        // Q10 | (was Q7) 3D - equidistant point, triangle [source PDF Q63]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $A(x,y,z)$ be a point in $xy$-plane, which is equidistant from three points $(0,3,2),(2,0,3)$ and $(0,0,1)$. Let $B=(1,4,-1)$ and $C=(2,0,-2)$. Then among the statements<br>(S1): $\\triangle ABC$ is an isosceles right angled triangle, and<br>(S2): the area of $\\triangle ABC$ is $\\dfrac{9\\sqrt2}{2}$,",
            "options": [
                        "Both are false",
                        "Only (S2) is true",
                        "Only (S1) is true",
                        "Both are true"
            ],
            "solution": "$A=(x,y,0)$. Equal distances from $(0,3,2)$ and $(0,0,1)$: $x^2+(y-3)^2+4=x^2+y^2+1\\Rightarrow y=2$. Equal distances from $(2,0,3)$ and $(0,0,1)$: $(x-2)^2+y^2+9=x^2+y^2+1\\Rightarrow x=3$. So $A=(3,2,0)$.<br>$\\overrightarrow{AB}=(-2,2,-1)$, $|AB|=3$; $\\overrightarrow{AC}=(-1,-2,-2)$, $|AC|=3$; $\\overrightarrow{AB}\\cdot\\overrightarrow{AC}=2-4+2=0$.<br>So $\\triangle ABC$ is right angled and isosceles at $A$: (S1) is true. Area $=\\tfrac12\\cdot3\\cdot3=\\tfrac92\\neq\\tfrac{9\\sqrt2}{2}$, so (S2) is false."
        },
        // Q11 | (was Q20) Vectors - vector in a plane, projection [source PDF Q68]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $\\vec a=\\hat i+\\hat j+\\hat k,\\ \\vec b=\\hat i-\\hat j+\\hat k$ and $\\vec c=\\hat i-\\hat j-\\hat k$ be three vectors. A vector $\\vec v$ in the plane of $\\vec a$ and $\\vec b$, whose projection on $\\vec c$ is $\\dfrac1{\\sqrt3}$, is given by",
            "options": [
                        "$\\hat i-3\\hat j+3\\hat k$",
                        "$-3\\hat i-3\\hat j-\\hat k$",
                        "$3\\hat i-\\hat j+3\\hat k$",
                        "$\\hat i+3\\hat j-3\\hat k$"
            ],
            "solution": "$\\vec v=x\\vec a+y\\vec b=(x+y)\\hat i+(x-y)\\hat j+(x+y)\\hat k$: the coefficients of $\\hat i$ and $\\hat k$ are equal. Only option (3) has this form.<br>Check the projection for $\\vec v=3\\hat i-\\hat j+3\\hat k$: $\\dfrac{\\vec v\\cdot\\vec c}{|\\vec c|}=\\dfrac{3+1-3}{\\sqrt3}=\\dfrac1{\\sqrt3}$ &#10003;."
        },
        // Q12 | (was Q8) Complex numbers - square, rotation [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "$ABCD$ is a square in the Argand plane, taken in the anticlockwise order, with its centre at the point $1-i$. If the vertex $A$ represents the complex number $4+i$, then the vertex $D$ represents the complex number",
            "options": [
                        "$-1+2i$",
                        "$-2-3i$",
                        "$3-4i$",
                        "$4+i$"
            ],
            "solution": "Take the centre $c=1-i$. Then $A-c=(4+i)-(1-i)=3+2i$.<br>The vertices are obtained by rotating $A$ about the centre through $90^\\circ$ at a time (anticlockwise: $A\\to B\\to C\\to D$). So $D-c=(A-c)\\,e^{-i\\pi/2}=-i(3+2i)=2-3i$.<br>$D=(1-i)+(2-3i)=3-4i$."
        },
        // Q13 | (was Q9) Complex numbers - principal argument [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "The principal argument of the complex number $\\dfrac{(\\sqrt3+i)^{5}}{(1-i)^{3}}$ is",
            "options": [
                        "$\\dfrac{5\\pi}{12}$",
                        "$-\\dfrac{5\\pi}{12}$",
                        "$\\dfrac{19\\pi}{12}$",
                        "$\\dfrac{7\\pi}{12}$"
            ],
            "solution": "$\\sqrt3+i=2e^{i\\pi/6}$, so $(\\sqrt3+i)^5=32\\,e^{i5\\pi/6}$. $1-i=\\sqrt2\\,e^{-i\\pi/4}$, so $(1-i)^3=2\\sqrt2\\,e^{-i3\\pi/4}$.<br>Quotient $=8\\sqrt2\\;e^{i\\left(\\frac{5\\pi}{6}+\\frac{3\\pi}{4}\\right)}=8\\sqrt2\\;e^{i\\,19\\pi/12}$.<br>$\\dfrac{19\\pi}{12}\\gt \\pi$, so the principal argument (in $(-\\pi,\\pi]$) is $\\dfrac{19\\pi}{12}-2\\pi=-\\dfrac{5\\pi}{12}$."
        },
        // Q14 | (was Q19) Complex numbers - statements on modulus/argument [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "For two non-zero complex numbers $z_1$ and $z_2$, consider the statements:<br>(A) If $|z_1+z_2|=|z_1-z_2|$, then $\\dfrac{z_1}{z_2}$ is purely imaginary.<br>(B) If $|z_1+z_2|=|z_1|+|z_2|$, then $\\arg z_1=\\arg z_2$ (principal arguments).<br>(C) If $z_1^2$ is purely imaginary, then $\\operatorname{Re}(z_1)=\\operatorname{Im}(z_1)$.<br>(D) $\\arg(\\bar z_1)=-\\arg(z_1)$ (principal argument) for every non-zero $z_1$.<br>Choose the correct option:",
            "options": [
                        "Only (A) and (B) are true",
                        "Only (B) and (C) are true",
                        "Only (C) and (D) are true",
                        "Only (A) and (D) are true"
            ],
            "solution": "(A) $|z_1+z_2|^2=|z_1-z_2|^2\\Rightarrow\\operatorname{Re}(z_1\\bar z_2)=0\\Rightarrow\\dfrac{z_1}{z_2}=\\dfrac{z_1\\bar z_2}{|z_2|^2}$ is purely imaginary. True.<br>(B) Equality in the triangle inequality holds only when $\\dfrac{z_1}{z_2}$ is a positive real, so the arguments are equal. True.<br>(C) $z_1=x+iy$, $z_1^2=x^2-y^2+2ixy$ purely imaginary $\\Rightarrow x^2=y^2$, i.e. $x=\\pm y$, not necessarily $x=y$ (e.g. $z_1=1-i$). False.<br>(D) For $z_1=-1$: $\\arg z_1=\\pi$ and $\\arg\\bar z_1=\\pi\\neq-\\pi$. False.<br>Only (A) and (B) are true."
        },
        // Q15 | (was Q12) Sets & Relations - relation on N x N [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $R$ be a relation on $\\mathbb N\\times\\mathbb N$ defined by $(a,b)\\,R\\,(c,d)$ if and only if $ad(b-c)=bc(a-d)$. Then $R$ is",
            "options": [
                        "symmetric only",
                        "reflexive only",
                        "transitive only",
                        "an equivalence relation"
            ],
            "solution": "Expanding $ad(b-c)=bc(a-d)$: $abd-acd=abc-bcd\\Rightarrow bd(a+c)=ac(b+d)$. Dividing by $abcd$: $\\dfrac1a+\\dfrac1c=\\dfrac1b+\\dfrac1d$.<br>Symmetric: the condition is unchanged on swapping $(a,b)\\leftrightarrow(c,d)$. So $R$ is symmetric.<br>Not reflexive: $(a,b)R(a,b)$ needs $\\dfrac2a=\\dfrac2b$, false for $a\\neq b$, e.g. $(1,2)$.<br>Not transitive: $(1,2)\\,R\\,(2,1)$ since $1+\\tfrac12=\\tfrac12+1$, and $(2,1)\\,R\\,(1,2)$ likewise, but $(1,2)\\,R\\,(1,2)$ is false (it is not reflexive). So transitivity fails.<br>Hence $R$ is symmetric only."
        },
        // Q16 | (was Q1) 3D - foot of perpendicular, area [source PDF Q60]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $P$ be the foot of the perpendicular from the point $Q(10,-3,-1)$ on the line $\\dfrac{x-3}{7}=\\dfrac{y-2}{-1}=\\dfrac{z+1}{-2}$. Then the area of the right angled triangle $PQR$, where $R$ is the point $(3,-2,1)$, is",
            "options": [
                        "$\\sqrt{30}$",
                        "$9\\sqrt{15}$",
                        "$3\\sqrt{30}$",
                        "$8\\sqrt{15}$"
            ],
            "solution": "A general point of the line is $(3+7t,\\,2-t,\\,-1-2t)$. $\\overrightarrow{QP}\\cdot(7,-1,-2)=0$: $(7t-7)\\cdot7+(-t+5)(-1)+(-2t)(-2)=0\\Rightarrow 54t-54=0$, so $t=1$ and $P=(10,1,-3)$.<br>$\\overrightarrow{QP}=(0,4,-2)$, $\\overrightarrow{QR}=(-7,1,2)$ and $\\overrightarrow{QP}\\cdot\\overrightarrow{QR}=4-4=0$, so the right angle is at $Q$.<br>Area $=\\tfrac12|QP||QR|=\\tfrac12\\sqrt{20}\\sqrt{54}=\\tfrac12\\sqrt{1080}=3\\sqrt{30}$."
        },
        // Q17 | (was Q16) Complex numbers - region (ellipse) [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $S$ be the set of all points $z=x+iy$ of the Argand plane for which $|z-1|+|z+1|\\leq4$. In terms of $x$ and $y$, the set $S$ is described by",
            "options": [
                        "$3x^2+4y^2\\leq12$",
                        "$4x^2+3y^2\\leq12$",
                        "$3x^2+4y^2\\geq12$",
                        "$x^2+y^2\\leq4$"
            ],
            "solution": "$|z-1|+|z+1|\\leq4$ means the sum of the distances of $z$ from the foci $(1,0)$ and $(-1,0)$ is at most $4$: the region inside and on the ellipse with $2a=4$, $c=1$.<br>$a=2$, $b^2=a^2-c^2=3$. Ellipse: $\\dfrac{x^2}{4}+\\dfrac{y^2}{3}=1$.<br>Region: $\\dfrac{x^2}{4}+\\dfrac{y^2}{3}\\leq1\\iff3x^2+4y^2\\leq12$."
        },
        // Q18 | (was Q3) Sets & Relations - coprime relation, count [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $A=\\{1,2,3,4,5,6\\}$ and let $R$ be the relation on $A$ defined by $x\\,R\\,y$ if and only if $\\gcd(x,y)=1$. Let $m$ be the number of elements in $R$ and $n$ be the minimum number of elements of $A\\times A$ that must be added to $R$ to make it reflexive. Then $m+n$ is equal to",
            "options": [
                        "$26$",
                        "$28$",
                        "$30$",
                        "$23$"
            ],
            "solution": "Count ordered pairs $(x,y)$ with $\\gcd(x,y)=1$ for each $x$:<br>$x=1$: $y\\in\\{1,\\dots,6\\}$ gives $6$; $x=2$: $y\\in\\{1,3,5\\}$ gives $3$; $x=3$: $y\\in\\{1,2,4,5\\}$ gives $4$; $x=4$: $y\\in\\{1,3,5\\}$ gives $3$; $x=5$: $y\\in\\{1,2,3,4,6\\}$ gives $5$; $x=6$: $y\\in\\{1,5\\}$ gives $2$.<br>$m=6+3+4+3+5+2=23$.<br>$\\gcd(x,x)=x$, so only $(1,1)\\in R$. The pairs $(2,2),(3,3),(4,4),(5,5),(6,6)$ must be added: $n=5$.<br>$m+n=28$."
        },
        // Q19 | (was Q4) Complex numbers - cube roots of unity [new]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $\\omega$ be a non-real cube root of unity. Then $\\left(1+\\omega-\\omega^{2}\\right)^{7}+\\left(1-\\omega+\\omega^{2}\\right)^{7}$ is equal to",
            "options": [
                        "$-128$",
                        "$64$",
                        "$128$",
                        "$256$"
            ],
            "solution": "Using $1+\\omega+\\omega^2=0$: $1+\\omega-\\omega^2=-2\\omega^2$ and $1-\\omega+\\omega^2=-2\\omega$.<br>$(-2\\omega^2)^7=-128\\,\\omega^{14}=-128\\,\\omega^{2}$ and $(-2\\omega)^7=-128\\,\\omega^{7}=-128\\,\\omega$.<br>Sum $=-128(\\omega+\\omega^2)=-128(-1)=128$."
        },
        // Q20 | (was Q6) 3D - shortest distance [source PDF Q57]
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "The shortest distance between the lines $\\dfrac{x-3}{2}=\\dfrac{y-2}{3}=\\dfrac{z-1}{-1}$ and $\\dfrac{x+3}{2}=\\dfrac{y-6}{1}=\\dfrac{z-5}{3}$, is",
            "options": [
                        "$\\dfrac{18}{\\sqrt5}$",
                        "$\\dfrac{22}{3\\sqrt5}$",
                        "$\\dfrac{46}{3\\sqrt5}$",
                        "$6\\sqrt3$"
            ],
            "solution": "Directions $\\vec d_1=(2,3,-1)$, $\\vec d_2=(2,1,3)$. $\\vec d_1\\times\\vec d_2=(10,-8,-4)$, $|\\vec d_1\\times\\vec d_2|=\\sqrt{180}=6\\sqrt5$.<br>Points $(3,2,1)$ and $(-3,6,5)$ give $\\vec w=(-6,4,4)$. $\\vec w\\cdot(10,-8,-4)=-60-32-16=-108$.<br>Shortest distance $=\\dfrac{108}{6\\sqrt5}=\\dfrac{18}{\\sqrt5}$."
        },
        // Q21 | (was Q24) Vectors - triple product expression [source PDF Q75]
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 5,
            "text": "<div class='section-instruction'><h3>SECTION - B (Maximum Marks: 20)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>5</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>. Enter the correct numerical value of the answer, rounded off to the nearest integer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct numerical value is entered.</li><li><b>Zero Marks :</b> 0 If not attempted.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>If $\\vec a$ and $\\vec b$ are vectors in space given by $\\vec a=\\dfrac{\\hat i-2\\hat j}{\\sqrt5}$ and $\\vec b=\\dfrac{2\\hat i+\\hat j+3\\hat k}{\\sqrt{14}}$, then the value of $(2\\vec a+\\vec b)\\cdot\\left[(\\vec a\\times\\vec b)\\times(\\vec a-2\\vec b)\\right]$ is",
            "solution": "$\\vec a\\cdot\\vec b=\\dfrac{2-2}{\\sqrt{70}}=0$ and $|\\vec a|=|\\vec b|=1$.<br>Use $(\\vec u\\times\\vec v)\\times\\vec w=(\\vec u\\cdot\\vec w)\\vec v-(\\vec v\\cdot\\vec w)\\vec u$: $(\\vec a\\times\\vec b)\\times\\vec a=(\\vec a\\cdot\\vec a)\\vec b-(\\vec b\\cdot\\vec a)\\vec a=\\vec b$ and $(\\vec a\\times\\vec b)\\times\\vec b=(\\vec a\\cdot\\vec b)\\vec b-(\\vec b\\cdot\\vec b)\\vec a=-\\vec a$.<br>So $(\\vec a\\times\\vec b)\\times(\\vec a-2\\vec b)=\\vec b+2\\vec a$.<br>$(2\\vec a+\\vec b)\\cdot(2\\vec a+\\vec b)=4|\\vec a|^2+|\\vec b|^2+4\\vec a\\cdot\\vec b=4+1+0=5$."
        },
        // Q22 | (was Q23) Sets & Relations - symmetric, transitive, not reflexive [new]
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 10,
            "text": "Let $T=\\{1,2,3\\}$. Exactly how many relations on $T$ can be formed that are symmetric and transitive, yet fail to be reflexive?",
            "solution": "A symmetric and transitive relation is an equivalence relation on the subset $T=\\{x:(x,x)\\in R\\}$, and no pair involves an element outside $T$ (if $(x,y)\\in R$ then $(x,x)\\in R$ and $(y,y)\\in R$ by symmetry and transitivity).<br>Count by $|T|$:<br>$|T|=0$: $1$ relation (empty). $|T|=1$: $3$ choices. $|T|=2$: $3$ subsets, each has $2$ equivalence relations, $6$. $|T|=3$: $5$ equivalence relations on $\\{1,2,3\\}$ (this is the reflexive case).<br>Total symmetric and transitive $=1+3+6+5=15$.<br>Not reflexive (exclude $|T|=3$): $15-5=10$."
        },
        // Q23 | (was Q25) 3D - line, area of triangle [source PDF Q59, asked as numerical]
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 136,
            "text": "Let a line pass through two distinct points $P(-2,-1,3)$ and $Q$, and be parallel to the vector $3\\hat i+2\\hat j+2\\hat k$. If the distance of the point $Q$ from the point $R(1,3,3)$ is $5$, then the square of the area of $\\triangle PQR$ is equal to",
            "solution": "$Q=P+s(3,2,2)=(-2+3s,\\,-1+2s,\\,3+2s)$ with $s\\neq0$. $\\overrightarrow{RQ}=(3s-3,\\,2s-4,\\,2s)$.<br>$|RQ|^2=25$: $9(s-1)^2+4(s-2)^2+4s^2=25\\Rightarrow17s^2-34s=0\\Rightarrow s=2$ (as $s\\neq0$). So $Q=(4,3,7)$.<br>$\\overrightarrow{PQ}=(6,4,4)$, $\\overrightarrow{PR}=(3,4,0)$, $\\overrightarrow{PQ}\\times\\overrightarrow{PR}=(-16,12,12)$, $|\\cdot|^2=256+144+144=544$.<br>(Area)$^2=\\dfrac{544}{4}=136$."
        },
        // Q24 | (was Q21) Complex numbers - powers purely imaginary [new]
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 4,
            "text": "The number of positive integers $n\\leq50$ for which $\\left(\\dfrac{1+i\\sqrt3}{1-i}\\right)^{n}$ is purely imaginary is",
            "solution": "$1+i\\sqrt3=2e^{i\\pi/3}$ and $1-i=\\sqrt2\\,e^{-i\\pi/4}$, so $\\dfrac{1+i\\sqrt3}{1-i}=\\sqrt2\\,e^{i\\,7\\pi/12}$.<br>The $n$-th power has argument $\\dfrac{7n\\pi}{12}$ and is purely imaginary when $\\dfrac{7n\\pi}{12}=\\dfrac\\pi2+k\\pi$, i.e. $7n=6+12k$, i.e. $7n\\equiv6\\pmod{12}$.<br>Since $7\\cdot7=49\\equiv1\\pmod{12}$, multiply by $7$: $n\\equiv42\\equiv6\\pmod{12}$. So $n=6,18,30,42$ (next is $54\\gt 50$).<br>Number of values $=4$."
        },
        // Q25 | (was Q22) 3D - image of a point in a line [source PDF Q71]
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 9,
            "text": "If the image of the point $(4,4,3)$ in the line $\\dfrac{x-1}{2}=\\dfrac{y-2}{1}=\\dfrac{z-1}{3}$ is $(\\alpha,\\beta,\\gamma)$, then $\\alpha+\\beta+\\gamma$ is equal to",
            "solution": "Foot of the perpendicular $F(1+2t,\\,2+t,\\,1+3t)$. $\\overrightarrow{PF}\\cdot(2,1,3)=0$ where $P=(4,4,3)$: $2(2t-3)+(t-2)+3(3t-2)=14t-14=0\\Rightarrow t=1$, so $F=(3,3,4)$.<br>$F$ is the midpoint of $P$ and its image: image $=2F-P=(2,2,5)$.<br>$\\alpha+\\beta+\\gamma=2+2+5=9$."
        }
    ]
};
