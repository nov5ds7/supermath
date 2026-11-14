window.testBank = window.testBank || {};
window.testBank['test_826'] = {
  title: "RCT-03(16-11-2026) Pre-Test",
  category: "Pre-Tests Maths",
  uploadedAt: "2026-11-14T12:31:00Z",
  timeLimitMins: 80,
  examPattern: "main",
  shuffleQuestions: false,
  randomizePoolSize: 0,
  questions: [
    // Q1 | Mock Test (Maths Mixed) Q1
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "<div class='section-instruction'><h3>SECTION - A (Maximum Marks: 80)</h3><ul><li>This section contains <b>20 multiple choice questions</b>. Each question has four options (1), (2), (3) and (4), out of which <b>only one</b> is correct.</li></ul><div class='marking-box'>Correct answer: +4 &nbsp;|&nbsp; Incorrect answer: &minus;1 &nbsp;|&nbsp; Unattempted: 0</div></div>$\\displaystyle\\lim_{x\\to0}\\dfrac{1-\\cos x\\cos2x\\cos3x}{x^{2}}$ is equal to",
          "options": [
                "5",
                "6",
                "7",
                "14"
          ],
          "solution": "Write $1-\\cos x\\cos2x\\cos3x=1-\\prod(1-(1-\\cos kx))$. For small $x$, $1-\\cos kx\\approx\\frac{k^2x^2}2$, and products of such terms are $O(x^4)$, so $1-\\cos x\\cos2x\\cos3x\\approx\\frac{x^2}2(1+4+9)=7x^2$.<br>Limit $=7$.<br><b>Answer: (3)</b>"
    },
    // Q2 | Mock Test (Maths Mixed) Q2
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "If $a,b,c$ are the roots of $x^{3}+px+q=0$ (with $p,q\\ne0$), then $\\begin{vmatrix}a&b&c\\\\b&c&a\\\\c&a&b\\end{vmatrix}$ is equal to",
          "options": [
                "$p^3$",
                "0",
                "$-q^3$",
                "$3q$"
          ],
          "solution": "The cubic has no $x^2$ term, so $a+b+c=0$. Apply $C_1\\to C_1+C_2+C_3$: every entry of $C_1$ becomes $a+b+c=0$.<br>A zero column gives determinant $0$. (Equivalently the determinant is $-(a+b+c)(a^2+b^2+c^2-ab-bc-ca)=0$.)<br><b>Answer: (2)</b>"
    },
    // Q3 | Mock Test (Maths Mixed) Q3
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "The value of $\\cos\\left(\\sin^{-1}\\dfrac35+\\cos^{-1}\\dfrac5{13}\\right)$ is",
          "options": [
                "$\\frac{16}{65}$",
                "$\\frac{56}{65}$",
                "$-\\frac{16}{65}$",
                "$-\\frac{56}{65}$"
          ],
          "solution": "Let $A=\\sin^{-1}\\frac35$: $\\sin A=\\frac35$, $\\cos A=\\frac45$. Let $B=\\cos^{-1}\\frac5{13}$: $\\cos B=\\frac5{13}$, $\\sin B=\\frac{12}{13}$.<br>$\\cos(A+B)=\\cos A\\cos B-\\sin A\\sin B=\\frac45\\cdot\\frac5{13}-\\frac35\\cdot\\frac{12}{13}=\\frac{20-36}{65}=-\\frac{16}{65}$.<br><b>Answer: (3)</b>"
    },
    // Q4 | Mock Test (Maths Mixed) Q4
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "The domain of $f(x)=\\sqrt{\\log_{10}\\left(\\dfrac{5x-x^{2}}{4}\\right)}$ is",
          "options": [
                "$(1,4)$",
                "$[0,5]$",
                "$[1,4]$",
                "$(0,5)$"
          ],
          "solution": "Need $\\log_{10}\\frac{5x-x^2}4\\ge0\\Rightarrow\\frac{5x-x^2}4\\ge1\\Rightarrow x^2-5x+4\\le0\\Rightarrow(x-1)(x-4)\\le0\\Rightarrow1\\le x\\le4$.<br>For these $x$ the argument of the log is $\\ge1\\gt 0$, so it is automatically defined.<br>Domain $=[1,4]$.<br><b>Answer: (3)</b>"
    },
    // Q5 | Mock Test (Maths Mixed) Q5
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The area of the parallelogram whose diagonals are $3\\hat i+\\hat j-2\\hat k$ and $\\hat i-3\\hat j+4\\hat k$ is",
          "options": [
                "$10\\sqrt3$",
                "$5\\sqrt3$",
                "$5\\sqrt6$",
                "15"
          ],
          "solution": "Area $=\\frac12|\\vec d_1\\times\\vec d_2|$.<br>$\\vec d_1\\times\\vec d_2=\\big(1\\cdot4-(-2)(-3),\\ (-2)(1)-3\\cdot4,\\ 3(-3)-1\\cdot1\\big)=(-2,-14,-10)$.<br>Magnitude $=\\sqrt{4+196+100}=\\sqrt{300}=10\\sqrt3$. Area $=5\\sqrt3$.<br><b>Answer: (2)</b>"
    },
    // Q6 | Mock Test (Maths Mixed) Q6
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "If $\\alpha,\\beta$ are the roots of $x^{2}-2x+4=0$, then $\\alpha^{9}+\\beta^{9}$ is equal to",
          "options": [
                "512",
                "-512",
                "1024",
                "-1024"
          ],
          "solution": "$x=1\\pm i\\sqrt3=2e^{\\pm i\\pi/3}$. So $\\alpha^9+\\beta^9=2\\cdot2^9\\cos\\frac{9\\pi}3=2^{10}\\cos3\\pi=-1024$.<br><b>Answer: (4)</b>"
    },
    // Q7 | Mock Test (Maths Mixed) Q7
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "$\\displaystyle\\lim_{x\\to\\infty}\\left(\\dfrac{x^{2}+3x+1}{x^{2}-x+2}\\right)^{x}$ is equal to",
          "options": [
                "$e^3$",
                "$e^4$",
                "$e^{-1}$",
                "$e^2$"
          ],
          "solution": "Form $1^\\infty$: limit $=e^{L}$ with $L=\\lim x\\left(\\frac{x^2+3x+1}{x^2-x+2}-1\\right)=\\lim\\frac{x(4x-1)}{x^2-x+2}=4$.<br>Limit $=e^4$.<br><b>Answer: (2)</b>"
    },
    // Q8 | Mock Test (Maths Mixed) Q8
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "If $A$ is a $3\\times3$ non-singular matrix with $|A|=2$, then $\\left|3\\,\\mathrm{adj}\\left(2A^{-1}\\right)\\right|$ is equal to",
          "options": [
                "216",
                "864",
                "108",
                "432"
          ],
          "solution": "For an order-3 matrix, $\\mathrm{adj}(kB)=k^2\\,\\mathrm{adj}B$. So $\\mathrm{adj}(2A^{-1})=4\\,\\mathrm{adj}(A^{-1})=4|A^{-1}|(A^{-1})^{-1}=4\\cdot\\frac12\\cdot A=2A$.<br>$|3\\cdot2A|=|6A|=6^3|A|=216\\times2=432$.<br><b>Answer: (4)</b>"
    },
    // Q9 | Mock Test (Maths Mixed) Q9
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "Let $f:\\mathbb R\\setminus\\{0\\}\\to\\mathbb R$ satisfy $f(x)+2f\\left(\\dfrac1x\\right)=3x$. The number of real values of $x$ for which $f(x)=f(-x)$ is",
          "options": [
                "0",
                "1",
                "2",
                "4"
          ],
          "solution": "Replace $x\\to\\frac1x$: $f\\left(\\frac1x\\right)+2f(x)=\\frac3x$. Eliminate $f\\left(\\frac1x\\right)$: $f(x)+2\\left(\\frac3x-2f(x)\\right)=3x\\Rightarrow-3f(x)=3x-\\frac6x\\Rightarrow f(x)=\\frac2x-x$.<br>$f(x)=f(-x)\\Rightarrow\\frac2x-x=-\\frac2x+x\\Rightarrow\\frac4x=2x\\Rightarrow x^2=2\\Rightarrow x=\\pm\\sqrt2$: 2 values.<br><b>Answer: (3)</b>"
    },
    // Q10 | Mock Test (Maths Mixed) Q10
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "If $(\\alpha,\\beta,\\gamma)$ is the image of the point $(1,2,3)$ in the plane $2x+y-2z=7$, then $\\sqrt{\\alpha^{2}+\\beta^{2}+\\gamma^{2}}$ is equal to",
          "options": [
                "$\\sqrt{26}$",
                "$\\sqrt{42}$",
                "6",
                "$\\sqrt{50}$"
          ],
          "solution": "Normal $\\vec n=(2,1,-2)$, $|\\vec n|^2=9$. Value of the plane expression at $P$: $2+2-6-7=-9$.<br>Image $=P-2\\cdot\\frac{-9}9\\vec n=P+2\\vec n=(1+4,\\,2+2,\\,3-4)=(5,4,-1)$.<br>$\\sqrt{25+16+1}=\\sqrt{42}$.<br><b>Answer: (2)</b>"
    },
    // Q11 | Mock Test (Maths Mixed) Q11
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "If $A=\\dfrac13\\begin{pmatrix}1&2&2\\\\2&1&-2\\\\a&2&b\\end{pmatrix}$ is an orthogonal matrix, then $a+b$ is equal to",
          "options": [
                "3",
                "-1",
                "1",
                "-3"
          ],
          "solution": "The rows must be mutually orthogonal unit vectors.<br>Row 3 $\\cdot$ Row 1 $=0$: $a+4+2b=0$. Row 3 $\\cdot$ Row 2 $=0$: $2a+2-2b=0\\Rightarrow a=b-1$.<br>Then $3b+3=0\\Rightarrow b=-1$, $a=-2$. Check: $a^2+4+b^2=9$ ✓.<br>$a+b=-3$.<br><b>Answer: (4)</b>"
    },
    // Q12 | Mock Test (Maths Mixed) Q12
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "The value of $\\tan\\left(\\displaystyle\\sum_{r=1}^{10}\\tan^{-1}\\dfrac1{2r^{2}}\\right)$ is",
          "options": [
                "$\\frac{10}{11}$",
                "$\\frac9{10}$",
                "$\\frac{11}{12}$",
                "$\\frac{10}9$"
          ],
          "solution": "$\\tan^{-1}\\frac1{2r^2}=\\tan^{-1}\\frac r{r+1}-\\tan^{-1}\\frac{r-1}r$, because $\\frac{\\frac r{r+1}-\\frac{r-1}r}{1+\\frac r{r+1}\\cdot\\frac{r-1}r}=\\frac{\\frac1{r(r+1)}}{\\frac{2r}{r+1}}=\\frac1{2r^2}$.<br>The sum telescopes to $\\tan^{-1}\\frac{10}{11}-\\tan^{-1}0$, so the value is $\\frac{10}{11}$.<br><b>Answer: (1)</b>"
    },
    // Q13 | Mock Test (Maths Mixed) Q13
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "If the points $A(1,1,1)$, $B(2,3,2)$, $C(-1,0,3)$ and $D(\\lambda,\\lambda+1,2)$ are coplanar, then $\\lambda$ is equal to",
          "options": [
                "1",
                "3",
                "2",
                "-2"
          ],
          "solution": "Coplanar $\\iff[\\vec{AB}\\ \\vec{AC}\\ \\vec{AD}]=0$ with $\\vec{AB}=(1,2,1)$, $\\vec{AC}=(-2,-1,2)$, $\\vec{AD}=(\\lambda-1,\\lambda,1)$.<br>$\\begin{vmatrix}1&2&1\\\\-2&-1&2\\\\\\lambda-1&\\lambda&1\\end{vmatrix}=1(-1-2\\lambda)-2\\big(-2-2(\\lambda-1)\\big)+1\\big(-2\\lambda+(\\lambda-1)\\big)=\\lambda-2$.<br>So $\\lambda=2$.<br><b>Answer: (3)</b>"
    },
    // Q14 | Mock Test (Maths Mixed) Q14
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "Let $f:\\mathbb R\\to\\mathbb R$ be differentiable with $f(x+y)=f(x)f(y)$ for all $x,y$, $f(5)=2$ and $f'(0)=3$. Then $f'(5)$ equals",
          "options": [
                "5",
                "6",
                "2",
                "3"
          ],
          "solution": "$f(0)=1$ (since $f(5)=f(5)f(0)\\ne0$). $f'(x)=\\lim_{h\\to0}\\frac{f(x)f(h)-f(x)}h=f(x)\\lim\\frac{f(h)-1}h=f(x)f'(0)$.<br>$f'(5)=2\\times3=6$.<br><b>Answer: (2)</b>"
    },
    // Q15 | Mock Test (Maths Mixed) Q15
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "Let $A=\\{1,2,3,4\\}$ and $R=\\{(1,1),(2,2),(3,3),(1,2),(2,1),(2,3)\\}$. The minimum number of ordered pairs that must be added to $R$ so that it becomes an equivalence relation on $A$ is",
          "options": [
                "3",
                "4",
                "5",
                "6"
          ],
          "solution": "Reflexive: add $(4,4)$. Symmetric: add $(3,2)$. Now $1\\sim2\\sim3$, so transitivity forces $(1,3)$ and $(3,1)$.<br>The equivalence classes are $\\{1,2,3\\}$ and $\\{4\\}$, needing $9+1=10$ pairs; $R$ already has $6$.<br>Pairs to add: $(4,4),(3,2),(1,3),(3,1)=4$.<br><b>Answer: (2)</b>"
    },
    // Q16 | Mock Test (Maths Mixed) Q16
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The number of onto functions from the set $\\{1,2,3,4\\}$ to the set $\\{a,b,c\\}$ is",
          "options": [
                "24",
                "36",
                "81",
                "48"
          ],
          "solution": "By inclusion–exclusion: $3^4-\\binom31 2^4+\\binom32 1^4=81-48+3=36$. (Equivalently $\\binom42\\cdot3!=36$.)<br><b>Answer: (2)</b>"
    },
    // Q17 | Mock Test (Maths Mixed) Q17
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "Let $f(x)=\\begin{cases}ax^{2}+b,&|x|\\lt 1\\\\[2pt]\\dfrac1{|x|},&|x|\\ge1\\end{cases}$. If $f$ is differentiable at every real $x$, then $(a,b)$ is",
          "options": [
                "$\\left(\\frac12,\\frac12\\right)$",
                "$(-1,2)$",
                "$(1,0)$",
                "$\\left(-\\frac12,\\frac32\\right)$"
          ],
          "solution": "Continuity at $x=1$: $a+b=1$.<br>Derivative at $x=1$: left $=2a$, right $=\\frac{d}{dx}\\frac1x=-\\frac1{x^2}=-1$. So $2a=-1\\Rightarrow a=-\\frac12$, $b=\\frac32$.<br>$f$ is even, so the condition at $x=-1$ gives the same values.<br><b>Answer: (4)</b>"
    },
    // Q18 | Mock Test (Maths Mixed) Q18
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "If $z_1,z_2$ are complex numbers with $|z_1|=2$, $|z_2|=3$ and $|z_1+z_2|=4$, then $\\left|\\dfrac1{z_1}+\\dfrac1{z_2}\\right|$ is equal to",
          "options": [
                "$\\frac23$",
                "$\\frac56$",
                "$\\frac43$",
                "$\\frac12$"
          ],
          "solution": "$\\frac1{z_1}+\\frac1{z_2}=\\frac{z_1+z_2}{z_1z_2}$, so $\\left|\\frac1{z_1}+\\frac1{z_2}\\right|=\\frac{|z_1+z_2|}{|z_1||z_2|}=\\frac4{2\\cdot3}=\\frac23$.<br><b>Answer: (1)</b>"
    },
    // Q19 | Mock Test (Maths Mixed) Q19
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "$\\displaystyle\\lim_{x\\to0}\\dfrac{\\tan(\\tan x)-\\sin(\\sin x)}{\\tan x-\\sin x}$ is equal to",
          "options": [
                "1",
                "$\\frac12$",
                "2",
                "3"
          ],
          "solution": "$\\tan x=x+\\frac{x^3}3+\\dots$, so $\\tan(\\tan x)=x+\\frac{x^3}3+\\frac{x^3}3=x+\\frac{2x^3}3+\\dots$. $\\sin x=x-\\frac{x^3}6+\\dots$, so $\\sin(\\sin x)=x-\\frac{x^3}6-\\frac{x^3}6=x-\\frac{x^3}3+\\dots$.<br>Numerator $=x^3+\\dots$. Denominator: $\\tan x-\\sin x=\\frac{x^3}3+\\frac{x^3}6=\\frac{x^3}2+\\dots$.<br>Limit $=\\frac{x^3}{x^3/2}=2$.<br><b>Answer: (3)</b>"
    },
    // Q20 | Mock Test (Maths Mixed) Q20
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "The number of real solutions of $\\tan^{-1}\\sqrt{x(x+1)}+\\sin^{-1}\\sqrt{x^{2}+x+1}=\\dfrac\\pi2$ is",
          "options": [
                "0",
                "1",
                "4",
                "2"
          ],
          "solution": "Domain: $x^2+x\\ge0$ and $x^2+x+1\\le1$ (for $\\sin^{-1}$), i.e. $x^2+x\\le0$. Hence $x^2+x=0\\Rightarrow x=0$ or $x=-1$.<br>At both points $\\tan^{-1}0+\\sin^{-1}1=\\frac\\pi2$ ✓. So there are $2$ solutions.<br><b>Answer: (4)</b>"
    },
    // Q21 | Mock Test (Maths Mixed) Q21
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 6,
          "text": "<div class='section-instruction'><h3>SECTION - B (Maximum Marks: 20)</h3><ul><li>This section contains <b>5 numerical value type questions</b>. The answer to each question is a numerical value (enter the value only).</li></ul><div class='marking-box'>Correct answer: +4 &nbsp;|&nbsp; Incorrect answer: &minus;1 &nbsp;|&nbsp; Unattempted: 0</div></div>The value of $\\displaystyle\\lim_{n\\to\\infty}\\sum_{r=1}^{n}\\dfrac{12r}{r^{4}+r^{2}+1}$ is ____.",
          "solution": "$r^4+r^2+1=(r^2-r+1)(r^2+r+1)$ and $(r^2+r+1)-(r^2-r+1)=2r$, so $\\frac{12r}{r^4+r^2+1}=6\\left(\\frac1{r^2-r+1}-\\frac1{r^2+r+1}\\right)$.<br>Since $(r+1)^2-(r+1)+1=r^2+r+1$, the sum telescopes: $6\\left(1-\\frac1{n^2+n+1}\\right)\\to6$.<br><b>Answer: 6</b>"
    },
    // Q22 | Mock Test (Maths Mixed) Q22
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 31,
          "text": "The number of $2\\times2$ matrices with every entry from $\\{0,1,2\\}$ that have determinant zero is ____.",
          "solution": "$\\begin{vmatrix}a&b\\\\c&d\\end{vmatrix}=0\\iff ad=bc$. Number of pairs $(x,y)\\in\\{0,1,2\\}^2$ with product $0$: $5$; product $1$: $1$ (1,1); product $2$: $2$ ((1,2),(2,1)); product $4$: $1$ (2,2).<br>Count $=5^2+1^2+2^2+1^2=25+1+4+1=31$.<br><b>Answer: 31</b>"
    },
    // Q23 | Mock Test (Maths Mixed) Q23
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 83,
          "text": "Let $\\vec a,\\vec b,\\vec c$ be vectors with $\\vec a+\\vec b+\\vec c=\\vec0$, $|\\vec a|=3$, $|\\vec b|=5$ and $|\\vec c|=7$. Then $-2\\left(\\vec a\\cdot\\vec b+\\vec b\\cdot\\vec c+\\vec c\\cdot\\vec a\\right)$ is equal to ____.",
          "solution": "$|\\vec a+\\vec b+\\vec c|^2=0\\Rightarrow9+25+49+2(\\vec a\\cdot\\vec b+\\vec b\\cdot\\vec c+\\vec c\\cdot\\vec a)=0$.<br>So $\\vec a\\cdot\\vec b+\\vec b\\cdot\\vec c+\\vec c\\cdot\\vec a=-\\frac{83}2$ and the required value is $83$.<br><b>Answer: 83</b>"
    },
    // Q24 | Mock Test (Maths Mixed) Q24
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 81,
          "text": "Let $A=\\{1,2,3,4\\}$. The number of ordered pairs $(X,Y)$ of subsets of $A$ with $X\\cup Y=A$ is ____.",
          "solution": "Each element must be in $X$ only, $Y$ only, or both (never in neither): $3$ choices per element.<br>Total $=3^4=81$.<br><b>Answer: 81</b>"
    },
    // Q25 | Mock Test (Maths Mixed) Q25
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "The shortest distance between the lines $\\dfrac{x-1}2=\\dfrac{y-2}1=\\dfrac{z-3}2$ and $\\dfrac x1=\\dfrac{y-3}2=\\dfrac{z-8}{-2}$ is ____.",
          "solution": "$\\vec d_1\\times\\vec d_2=(2,1,2)\\times(1,2,-2)=(-6,6,3)$, magnitude $9$.<br>Joining vector of the points $(1,2,3)$ and $(0,3,8)$: $(-1,1,5)$.<br>Distance $=\\frac{|6+6+15|}9=\\frac{27}9=3$.<br><b>Answer: 3</b>"
    }
  ]
};