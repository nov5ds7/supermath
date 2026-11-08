window.testBank = window.testBank || {};
window.testBank['test_824'] = {
    title: "RCT-01 (09-11-2026) Pre-test",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-11-08T12:30:00Z",
    timeLimitMins: 80,
    examPattern: "main",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // Q1 | Functions | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "<div class='section-instruction'><h3>SECTION - I (Maximum Marks: 80)</h3><b>Single Correct Answer Type</b><br><br>This section contains <b>20</b> questions. Each question has <b>4</b> options (1), (2), (3) and (4) for its answer, out of which <b>ONLY ONE</b> option can be correct.<br><br><b>Marking scheme:</b><ul><li><b>Full Marks:</b> +4 for correct answer</li><li><b>Zero Marks:</b> 0 if not attempted</li><li><b>Negative Marks:</b> -1 if not correct</li></ul></div><br>The number of one-one functions $f:\\{1,2,3,4\\}\\to\\{1,2,3,4,5,6\\}$ such that $f(i)\\neq i$ for every $i\\in\\{1,2,3,4\\}$ is",
            "options": [
                        "$181$",
                        "$360$",
                        "$180$",
                        "$240$"
            ],
            "solution": "Let $P_i$ be the property $f(i)=i$. By inclusion-exclusion, the required number is $\\sum_{k=0}^{4}(-1)^k\\binom4k\\,{}^{6-k}P_{4-k}$.<br>$k=0$: ${}^6P_4=360$. $k=1$: $4\\cdot{}^5P_3=240$. $k=2$: $6\\cdot{}^4P_2=72$. $k=3$: $4\\cdot{}^3P_1=12$. $k=4$: $1$.<br>Total $=360-240+72-12+1=181$."
        },
        // Q2 | Sets & Relations | PYQ replica
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $A=\\{2,3,4,\\dots,30\\}$ and let $\\simeq$ be the equivalence relation on $A\\times A$ defined by $(a,b)\\simeq(c,d)$ if and only if $ad=bc$. Then the number of ordered pairs in $A\\times A$ which are related to $(4,3)$ is",
            "options": [
                        "$6$",
                        "$7$",
                        "$8$",
                        "$9$"
            ],
            "solution": "$(c,d)\\simeq(4,3)\\iff4d=3c$. Hence $c=4k$, $d=3k$ for a positive integer $k$.<br>Both $c,d$ must lie in $\\{2,\\dots,30\\}$: $c=4k\\le30\\Rightarrow k\\le7$, and $d=3k\\ge2$ holds for all $k\\ge1$.<br>So $k=1,2,\\dots,7$ and the number of pairs is $7$."
        },
        // Q3 | Matrices & Determinants | PYQ replica
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Let $A$ and $B$ be symmetric matrices of order $3$. Consider the statements:<br>(i) $AB-BA$ is skew-symmetric.<br>(ii) $AB+BA$ is symmetric.<br>(iii) $|AB-BA|=0$.<br>(iv) $AB$ is symmetric.<br>Which statements are always true?",
            "options": [
                        "Only (i) and (ii)",
                        "Only (i) and (iii)",
                        "(i), (ii) and (iv)",
                        "(i), (ii) and (iii)"
            ],
            "solution": "$(AB-BA)^T=B^TA^T-A^TB^T=BA-AB=-(AB-BA)$: skew-symmetric. (i) True.<br>$(AB+BA)^T=BA+AB$: symmetric. (ii) True.<br>A skew-symmetric matrix of odd order has zero determinant ($|S|=|S^T|=|-S|=(-1)^3|S|$), so (iii) True.<br>$(AB)^T=BA$, which equals $AB$ only when $A$ and $B$ commute, so (iv) is not always true.<br>Correct: (i), (ii) and (iii)."
        },
        // Q4 | Vector Algebra | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $\\vec a,\\vec b$ be vectors with $|\\vec a|=2$, $|\\vec b|=3$ and the angle between them equal to $\\frac{\\pi}{3}$. Then $\\left|(2\\vec a-\\vec b)\\times(\\vec a+3\\vec b)\\right|$ is equal to",
            "options": [
                        "$21\\sqrt3$",
                        "$14\\sqrt3$",
                        "$7\\sqrt3$",
                        "$42$"
            ],
            "solution": "Expand using $\\vec a\\times\\vec a=\\vec b\\times\\vec b=\\vec0$ and $\\vec b\\times\\vec a=-\\vec a\\times\\vec b$:<br>$(2\\vec a-\\vec b)\\times(\\vec a+3\\vec b)=6\\,\\vec a\\times\\vec b-\\vec b\\times\\vec a=6\\,\\vec a\\times\\vec b+\\vec a\\times\\vec b=7\\,\\vec a\\times\\vec b$.<br>$|\\vec a\\times\\vec b|=|\\vec a||\\vec b|\\sin\\frac\\pi3=2\\cdot3\\cdot\\frac{\\sqrt3}{2}=3\\sqrt3$.<br>Hence the required value is $7\\cdot3\\sqrt3=21\\sqrt3$."
        },
        // Q5 | Complex Numbers | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "If $z$ is a complex number with $|z|=2$, then the point $z+\\dfrac1z$ lies on",
            "options": [
                        "a circle of radius $\\frac52$",
                        "a parabola",
                        "an ellipse of eccentricity $\\frac35$",
                        "an ellipse of eccentricity $\\frac45$"
            ],
            "solution": "Since $|z|=2$, $\\frac1z=\\frac{\\bar z}{|z|^2}=\\frac{\\bar z}{4}$. Let $z=x+iy$ with $x^2+y^2=4$.<br>$z+\\frac1z=\\left(x+\\frac x4\\right)+i\\left(y-\\frac y4\\right)=\\frac{5x}{4}+i\\,\\frac{3y}{4}=X+iY$.<br>Then $x=\\frac{4X}{5}$, $y=\\frac{4Y}{3}$ and $\\frac{16X^2}{25}+\\frac{16Y^2}{9}=4\\Rightarrow\\frac{X^2}{25/4}+\\frac{Y^2}{9/4}=1$, an ellipse with $a=\\frac52,\\ b=\\frac32$.<br>$e=\\sqrt{1-\\frac{b^2}{a^2}}=\\sqrt{1-\\frac{9}{25}}=\\frac45$."
        },
        // Q6 | Matrices & Determinants | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $A$ be a $3\\times3$ real matrix such that $AA^{T}=I$. Then $\\left|A^2-I\\right|$ is equal to",
            "options": [
                        "$0$",
                        "$2$",
                        "$-2$",
                        "$|A|$"
            ],
            "solution": "$AA^T=I\\Rightarrow|A|^2=1\\Rightarrow|A|=\\pm1$, and $A^2-I=(A-I)(A+I)$.<br>If $|A|=1$: $|A-I|=|A-AA^T|=|A|\\,|I-A^T|=|I-A|=(-1)^3|A-I|=-|A-I|$, so $|A-I|=0$.<br>If $|A|=-1$: $|A+I|=|A+AA^T|=|A|\\,|I+A^T|=-|A+I|$, so $|A+I|=0$.<br>In either case $|A^2-I|=|A-I|\\,|A+I|=0$."
        },
        // Q7 | Sets & Relations | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "The number of integers $n$ with $1\\le n\\le100$ that are divisible by <b>exactly one</b> of the numbers $2,3,5$ is",
            "options": [
                        "$41$",
                        "$44$",
                        "$48$",
                        "$52$"
            ],
            "solution": "Let $A,B,C$ be the sets of multiples of $2,3,5$: $n(A)=50,\\ n(B)=33,\\ n(C)=20$; $n(A\\cap B)=16,\\ n(B\\cap C)=6,\\ n(A\\cap C)=10$; $n(A\\cap B\\cap C)=3$.<br>Exactly one $=\\sum n(\\cdot)-2\\sum n(\\text{pairs})+3\\,n(A\\cap B\\cap C)=103-2(32)+3(3)=103-64+9=48$."
        },
        // Q8 | Vector Algebra | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Let $\\vec a,\\vec b,\\vec c$ be vectors with $|\\vec a|=3$, $|\\vec b|=5$, $|\\vec c|=7$ and $\\vec a+\\vec b+\\vec c=\\vec 0$. Then $|\\vec a\\times\\vec b|+|\\vec b\\times\\vec c|+|\\vec c\\times\\vec a|$ is equal to",
            "options": [
                        "$\\frac{15\\sqrt3}{2}$",
                        "$\\frac{15\\sqrt3}{4}$",
                        "$15\\sqrt3$",
                        "$\\frac{45\\sqrt3}{2}$"
            ],
            "solution": "$\\vec c=-(\\vec a+\\vec b)\\Rightarrow49=9+25+2\\,\\vec a\\cdot\\vec b\\Rightarrow\\vec a\\cdot\\vec b=\\frac{15}{2}$, so $\\cos\\theta_{ab}=\\frac{15/2}{15}=\\frac12$ and $|\\vec a\\times\\vec b|=15\\sin60^\\circ=\\frac{15\\sqrt3}{2}$.<br>From $\\vec a+\\vec b+\\vec c=\\vec0$: crossing with $\\vec a$ gives $\\vec a\\times\\vec b=\\vec c\\times\\vec a$; crossing with $\\vec b$ gives $\\vec a\\times\\vec b=\\vec b\\times\\vec c$. So all three cross products are the same vector.<br>Required sum $=3\\cdot\\frac{15\\sqrt3}{2}=\\frac{45\\sqrt3}{2}$. (The area of the triangle with sides $3,5,7$ is half of one cross product, i.e. $\\frac{15\\sqrt3}{4}$ - a distractor.)"
        },
        // Q9 | Complex Numbers | PYQ replica (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $z_1,z_2$ be complex numbers such that $z_1+z_2=5$ and $z_1^3+z_2^3=20+15i$. Then $\\left|z_1^4+z_2^4\\right|$ is equal to",
            "options": [
                        "$75$",
                        "$15\\sqrt{15}$",
                        "$50$",
                        "$25\\sqrt3$"
            ],
            "solution": "$z_1^3+z_2^3=(z_1+z_2)^3-3z_1z_2(z_1+z_2)=125-15z_1z_2=20+15i\\Rightarrow z_1z_2=7-i$.<br>$z_1^2+z_2^2=25-2(7-i)=11+2i$.<br>$z_1^4+z_2^4=\\left(z_1^2+z_2^2\\right)^2-2(z_1z_2)^2=(117+44i)-2(48-14i)=21+72i$.<br>$\\left|z_1^4+z_2^4\\right|=\\sqrt{21^2+72^2}=\\sqrt{5625}=75$."
        },
        // Q10 | Functions | PYQ replica
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "The range of the function $f(x)=\\dfrac{1}{1-2\\cos x}$ is",
            "options": [
                        "$\\left[-1,\\frac13\\right]$",
                        "$\\left(-\\infty,-1\\right]\\cup\\left[3,\\infty\\right)$",
                        "$\\left(-\\infty,-1\\right]\\cup\\left[\\frac13,\\infty\\right)$",
                        "$\\left[\\frac13,1\\right]$"
            ],
            "solution": "Let $t=1-2\\cos x$. Since $-1\\le\\cos x\\le1$, $t\\in[-1,3]$, and $t\\neq0$ (for $f$ to be defined).<br>For $t\\in[-1,0)$: $\\frac1t\\in(-\\infty,-1]$. For $t\\in(0,3]$: $\\frac1t\\in\\left[\\frac13,\\infty\\right)$.<br>Range $=(-\\infty,-1]\\cup\\left[\\frac13,\\infty\\right)$."
        },
        // Q11 | Matrices & Determinants | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $A=\\begin{pmatrix}\\frac{\\sqrt3}{2}&-\\frac12\\\\[2pt]\\frac12&\\frac{\\sqrt3}{2}\\end{pmatrix}$. Then the sum of all the entries of $A^{2023}$ is",
            "options": [
                        "$\\sqrt3$",
                        "$-\\sqrt3$",
                        "$1$",
                        "$-1$"
            ],
            "solution": "Write $A=\\begin{pmatrix}\\cos\\frac\\pi6&-\\sin\\frac\\pi6\\\\\\sin\\frac\\pi6&\\cos\\frac\\pi6\\end{pmatrix}$. Using the addition formulas for $\\sin$ and $\\cos$ and induction, $A^n=\\begin{pmatrix}\\cos\\frac{n\\pi}{6}&-\\sin\\frac{n\\pi}{6}\\\\\\sin\\frac{n\\pi}{6}&\\cos\\frac{n\\pi}{6}\\end{pmatrix}$.<br>Sum of entries of $A^n=2\\cos\\frac{n\\pi}{6}$. For $n=2023$: $\\frac{2023\\pi}{6}=337\\pi+\\frac\\pi6$, and $337$ is odd, so $\\cos\\left(337\\pi+\\frac\\pi6\\right)=-\\cos\\frac\\pi6=-\\frac{\\sqrt3}{2}$.<br>Sum $=-\\sqrt3$."
        },
        // Q12 | 3D Geometry | PYQ replica
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If the direction cosines $l,m,n$ of a line satisfy $l+m+n=0$ and $l^2+m^2-n^2=0$, then the acute angle between the two such lines is",
            "options": [
                        "$\\frac{\\pi}{6}$",
                        "$\\frac{\\pi}{4}$",
                        "$\\frac{\\pi}{3}$",
                        "$\\frac{\\pi}{2}$"
            ],
            "solution": "$n=-(l+m)\\Rightarrow l^2+m^2=(l+m)^2\\Rightarrow lm=0$.<br>If $l=0$: $n=-m$ and $m^2+n^2=1$, so the direction is $\\left(0,\\frac1{\\sqrt2},-\\frac1{\\sqrt2}\\right)$. If $m=0$: $n=-l$ and the direction is $\\left(\\frac1{\\sqrt2},0,-\\frac1{\\sqrt2}\\right)$.<br>$\\cos\\theta=\\left|0+0+\\frac12\\right|=\\frac12\\Rightarrow\\theta=\\frac\\pi3$."
        },
        // Q13 | Sets & Relations | PYQ replica (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $R$ be a relation on the set $\\mathbb N\\times\\mathbb N$ defined by $(a,b)\\,R\\,(c,d)$ if and only if $ad(b-c)=bc(a-d)$. Then $R$ is",
            "options": [
                        "symmetric only",
                        "reflexive only",
                        "transitive only",
                        "an equivalence relation"
            ],
            "solution": "<b>Symmetric:</b> if $ad(b-c)=bc(a-d)$, then for $(c,d)R(a,b)$ we need $cb(d-a)=da(c-b)$, which is the same equation multiplied by $-1$. So $R$ is symmetric.<br><b>Reflexive:</b> $(a,b)R(a,b)$ requires $ab(b-a)=ba(a-b)$, i.e. $2ab(b-a)=0$, which fails for $a\\neq b$, e.g. $(1,2)$. Not reflexive.<br><b>Transitive:</b> $(1,2)R(2,1)$? $1\\cdot1\\cdot(2-2)=0$ and $2\\cdot2\\cdot(1-1)=0$: yes. $(2,1)R(1,2)$ by symmetry, but $(1,2)R(1,2)$ fails; so transitivity fails.<br>Hence $R$ is symmetric only."
        },
        // Q14 | 3D Geometry | PYQ replica (moderate)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "The line through the point $(1,1,1)$ which is perpendicular to both the lines $\\dfrac{x}{1}=\\dfrac{y}{2}=\\dfrac{z}{3}$ and $\\dfrac{x-1}{2}=\\dfrac{y}{1}=\\dfrac{z+2}{-1}$ is",
            "options": [
                        "$\\dfrac{x-1}{5}=\\dfrac{y-1}{7}=\\dfrac{z-1}{3}$",
                        "$\\dfrac{x-1}{5}=\\dfrac{y-1}{-7}=\\dfrac{z-1}{3}$",
                        "$\\dfrac{x-1}{5}=\\dfrac{y-1}{7}=\\dfrac{z-1}{-3}$",
                        "$\\dfrac{x-1}{1}=\\dfrac{y-1}{2}=\\dfrac{z-1}{3}$"
            ],
            "solution": "The direction ratios of the two given lines are $(1,2,3)$ and $(2,1,-1)$. A line perpendicular to both has direction $(1,2,3)\\times(2,1,-1)=\\begin{vmatrix}\\hat i&\\hat j&\\hat k\\\\1&2&3\\\\2&1&-1\\end{vmatrix}=-5\\hat i+7\\hat j-3\\hat k$, i.e. direction ratios $(5,-7,3)$.<br>Through $(1,1,1)$: $\\dfrac{x-1}{5}=\\dfrac{y-1}{-7}=\\dfrac{z-1}{3}$."
        },
        // Q15 | Complex Numbers | PYQ replica
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $z_1,z_2,z_3$ be the vertices of an equilateral triangle whose circumcentre is the point $1+i$. If $z_1=4+5i$, then $|z_2-z_3|$ is equal to",
            "options": [
                        "$5$",
                        "$5\\sqrt2$",
                        "$5\\sqrt3$",
                        "$10$"
            ],
            "solution": "The circumradius is $R=|z_1-(1+i)|=|3+4i|=5$.<br>In an equilateral triangle the side is $a=\\sqrt3\\,R$ (since $R=\\frac{a}{\\sqrt3}$).<br>Hence $|z_2-z_3|=5\\sqrt3$."
        },
        // Q16 | Sets & Relations | New (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The number of relations on the set $\\{1,2,3,4\\}$ which are reflexive and symmetric but <b>not</b> transitive is",
            "options": [
                        "$15$",
                        "$64$",
                        "$34$",
                        "$49$"
            ],
            "solution": "A reflexive and symmetric relation is determined by choosing, for each of the $\\binom42=6$ unordered pairs $\\{a,b\\}$, whether $(a,b),(b,a)$ are both in it: $2^6=64$ such relations.<br>Those that are also transitive are exactly the equivalence relations, which correspond to partitions of the set. Partitions of a $4$-element set: one block $1$; two blocks $\\binom41+\\binom42\\cdot\\frac12=4+3=7$; three blocks $\\binom42=6$; four blocks $1$; total $15$.<br>Not transitive: $64-15=49$."
        },
        // Q17 | Vector Algebra | PYQ replica (moderate-tough)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $\\vec a=2\\hat i+\\hat j-\\hat k$, $\\vec b=\\hat i+2\\hat j+\\hat k$ and $\\vec c=\\hat i+\\hat j+\\hat k$. If a vector $\\vec x$ satisfies $\\vec x\\times\\vec a=\\vec b\\times\\vec a$ and $\\vec x\\cdot\\vec c=0$, then $|\\vec x|^2$ is equal to",
            "options": [
                        "$9$",
                        "$18$",
                        "$27$",
                        "$36$"
            ],
            "solution": "$\\vec x\\times\\vec a-\\vec b\\times\\vec a=(\\vec x-\\vec b)\\times\\vec a=\\vec0$, so $\\vec x-\\vec b$ is parallel to $\\vec a$: $\\vec x=\\vec b+\\lambda\\vec a$.<br>$\\vec x\\cdot\\vec c=0\\Rightarrow\\vec b\\cdot\\vec c+\\lambda\\,\\vec a\\cdot\\vec c=0\\Rightarrow4+2\\lambda=0\\Rightarrow\\lambda=-2$.<br>$\\vec x=(1,2,1)-2(2,1,-1)=(-3,0,3)$, so $|\\vec x|^2=9+0+9=18$."
        },
        // Q18 | 3D Geometry | New (moderate)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The shortest distance between the lines $\\dfrac{x}{1}=\\dfrac{y-1}{2}=\\dfrac{z+1}{2}$ and $\\dfrac{x-1}{2}=\\dfrac{y-4}{1}=\\dfrac{z+2}{-2}$ is",
            "options": [
                        "$1$",
                        "$\\frac43$",
                        "$2$",
                        "$\\frac53$"
            ],
            "solution": "$\\vec a_1=(0,1,-1)$, $\\vec d_1=(1,2,2)$; $\\vec a_2=(1,4,-2)$, $\\vec d_2=(2,1,-2)$.<br>$\\vec d_1\\times\\vec d_2=\\begin{vmatrix}\\hat i&\\hat j&\\hat k\\\\1&2&2\\\\2&1&-2\\end{vmatrix}=-6\\hat i+6\\hat j-3\\hat k$, so $|\\vec d_1\\times\\vec d_2|=\\sqrt{36+36+9}=9$.<br>$\\vec a_2-\\vec a_1=(1,3,-1)$ and $(1,3,-1)\\cdot(-6,6,-3)=-6+18+3=15$.<br>Shortest distance $=\\dfrac{15}{9}=\\dfrac53$ (non-zero, so the lines are skew)."
        },
        // Q19 | Matrices & Determinants | PYQ replica
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Consider the system $2x+3y+5z=9,\\ 7x+3y-5z=8,\\ 2x+3y+\\lambda z=\\mu$. Which of the following statements are correct?<br>(i) If $\\lambda\\neq5$, the system has a unique solution.<br>(ii) If $\\lambda=5$ and $\\mu=9$, the system has infinitely many solutions.<br>(iii) If $\\lambda=5$ and $\\mu\\neq9$, the system has no solution.",
            "options": [
                        "Only (i) and (ii)",
                        "Only (i) and (iii)",
                        "(i), (ii) and (iii)",
                        "Only (ii) and (iii)"
            ],
            "solution": "Subtract Eq.1 from Eq.3: $(\\lambda-5)z=\\mu-9$.<br>(i) If $\\lambda\\neq5$, this gives a unique $z$. Then the first two equations, $2x+3y=9-5z$ and $7x+3y=8+5z$, give a unique $x$ (subtract: $5x=-1+10z$) and then a unique $y$. True.<br>(ii) If $\\lambda=5$ and $\\mu=9$, Eq.3 is identical to Eq.1, and Eq.1, Eq.2 are not proportional, so two independent equations in three unknowns: infinitely many solutions. True.<br>(iii) If $\\lambda=5$ and $\\mu\\neq9$, Eq.3 reads $2x+3y+5z=\\mu$, which contradicts Eq.1 ($2x+3y+5z=9$): no solution. True.<br>All three statements are correct."
        },
        // Q20 | Functions | PYQ replica
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $f:\\mathbb R\\to\\mathbb R$ be defined by $f(x)=\\dfrac{x}{1+x^2}$. Then $f$ is",
            "options": [
                        "one-one and onto",
                        "neither one-one nor onto",
                        "one-one but not onto",
                        "onto but not one-one"
            ],
            "solution": "<b>Not one-one:</b> $f(2)=\\frac25=f\\left(\\frac12\\right)$ although $2\\neq\\frac12$.<br><b>Not onto:</b> since $1+x^2\\ge2|x|$, we get $|f(x)|\\le\\frac12$ for all $x$, so the range is $\\left[-\\frac12,\\frac12\\right]\\neq\\mathbb R$ (for example, $f(x)=1$ has no solution).<br>Hence $f$ is neither one-one nor onto."
        },
        // Q21 | Vector Algebra | New
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 14,
            "text": "<div class='section-instruction'><h3>SECTION - II (Maximum Marks: 20)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>5</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b> (an integer). Enter the correct numerical value of the answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct numerical value is entered.</li><li><b>Zero Marks :</b> 0 If not attempted.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>Let $\\vec a=\\hat i+2\\hat j+6\\hat k$ and $\\vec b=\\hat i+\\hat j+\\hat k$. If $t$ is a real number, then the minimum value of $\\left|\\vec a+t\\vec b\\right|^2$ is",
            "solution": "$|\\vec a|^2=41$, $\\vec a\\cdot\\vec b=9$, $|\\vec b|^2=3$.<br>$\\left|\\vec a+t\\vec b\\right|^2=3t^2+18t+41=3(t+3)^2+14$.<br>The minimum value is $14$ (at $t=-3$)."
        },
        // Q22 | 3D Geometry | PYQ replica
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 52,
            "text": "Let $Q$ be the image of the point $P(1,6,3)$ in the line $\\dfrac{x}{1}=\\dfrac{y-1}{2}=\\dfrac{z-2}{3}$. Then $PQ^2$ is equal to",
            "solution": "A point on the line is $F(\\lambda,\\,1+2\\lambda,\\,2+3\\lambda)$. $\\overrightarrow{PF}=(\\lambda-1,\\,2\\lambda-5,\\,3\\lambda-1)$ must be perpendicular to $(1,2,3)$: $(\\lambda-1)+2(2\\lambda-5)+3(3\\lambda-1)=14\\lambda-14=0\\Rightarrow\\lambda=1$.<br>So the foot is $F(1,3,5)$ and $PF^2=0+9+4=13$.<br>$F$ is the mid-point of $PQ$, so $PQ=2PF$ and $PQ^2=4\\cdot13=52$."
        },
        // Q23 | Complex Numbers | PYQ replica
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 100,
            "text": "If $1\\cdot i+2\\cdot i^2+3\\cdot i^3+\\cdots+100\\cdot i^{100}=a+ib$, then $a-b$ is equal to",
            "solution": "Group four consecutive terms, starting at $k=4m+1$ (so $i^k=i$, $i^{k+1}=-1$, $i^{k+2}=-i$, $i^{k+3}=1$):<br>$ki-(k+1)-(k+2)i+(k+3)=2-2i$, independent of $m$.<br>There are $25$ such groups, so the sum is $50-50i$, i.e. $a=50$, $b=-50$.<br>$a-b=100$."
        },
        // Q24 | Matrices & Determinants | PYQ replica (modified)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 45,
            "text": "If the system $x+ky+3z=0,\\ 3x+ky-2z=0,\\ 2x+3y-4z=0$ has a non-trivial solution $(x,y,z)$, then $\\dfrac{2xz}{y^2}$ is equal to",
            "solution": "Subtract the second equation from the first: $-2x+5z=0\\Rightarrow x=\\frac{5z}{2}$.<br>Put this in the third equation: $5z+3y-4z=0\\Rightarrow z=-3y$, so $x=-\\frac{15y}{2}$ (and $y\\neq0$, otherwise the solution is trivial).<br>Put into the first equation: $-\\frac{15y}{2}+ky-9y=0\\Rightarrow k=\\frac{33}{2}$ (this is the value of $k$ that allows a non-trivial solution).<br>$\\dfrac{2xz}{y^2}=2\\left(-\\frac{15}{2}\\right)(-3)=45$."
        },
        // Q25 | Functions | PYQ replica
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 230,
            "text": "Let $f:\\mathbb R\\to\\mathbb R$ satisfy $f(x)f(y)-f(xy)=x+y$ for all real $x,y$, and $f(1)=2$. Then $\\displaystyle\\sum_{k=1}^{20}f(k)$ is equal to",
            "solution": "Put $y=1$: $f(x)\\cdot f(1)-f(x)=x+1\\Rightarrow2f(x)-f(x)=x+1\\Rightarrow f(x)=x+1$.<br>(Check: $(x+1)(y+1)-(xy+1)=x+y$.)<br>$\\sum_{k=1}^{20}(k+1)=\\frac{20\\cdot21}{2}+20=230$."
        }
    ]
};