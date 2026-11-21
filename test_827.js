window.testBank = window.testBank || {};
window.testBank['test_827'] = {
  title: "Pre-APT-09(23.11.2026)",
  category: "Pre-Tests Maths",
  uploadedAt: "2026-11-21T00:30:00Z",
  timeLimitMins: 80,
  examPattern: "advance",
  markingSchemes: {
    mcq: [4, -2, 0],
    numerical: [3, 0, 0],
    multi_mcq: [4, 1, -2, 0],
    matrix_match: [8, 2, 0, 0]
  },
  shuffleQuestions: false,
  randomizePoolSize: 0,
  questions: [
    // Q1 | Replica of APT-07 Q1 (relations)
    {
          "type": "mcq",
          "correctAnswer": 0,
          "text": "<div class='section-instruction'><h3>SECTION - 1 (Maximum Marks: 24)</h3><ul><li>This section contains <b>SIX (06)</b> questions. Each question has FOUR options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.</li></ul><div class='marking-box'>Full marks: +4 if only the correct option is chosen &nbsp;|&nbsp; Incorrect: &minus;2 &nbsp;|&nbsp; Unattempted: 0</div></div>Let $A=\\{1,2,3,4\\}$. The number of relations on $A$ that are reflexive and symmetric but <b>not</b> transitive is:",
          "options": [
                "49",
                "64",
                "15",
                "51"
          ],
          "solution": "A reflexive and symmetric relation on $A$ is fixed by which of the $\\binom42=6$ unordered pairs $\\{a,b\\}$, $a\\ne b$, it contains: $2^6=64$ such relations.<br>A reflexive, symmetric and transitive relation is an equivalence relation, i.e. a partition of $A$. The number of partitions of a $4$-element set is the Bell number $B_4=15$.<br>Required number $=64-15=49$.<br><b>Answer: (A)</b>"
    },
    // Q2 | Replica of APT-07 Q2 (even/odd)
    {
          "type": "mcq",
          "correctAnswer": 2,
          "text": "The function $f(x)=\\dfrac{x}{3^{x}-1}+\\dfrac x2+x\\sin x$, $x\\ne0$, is:",
          "options": [
                "an odd function",
                "neither even nor odd",
                "an even function",
                "a periodic function"
          ],
          "solution": "Let $g(x)=\\dfrac{x}{3^x-1}+\\dfrac x2$. Then $g(-x)=\\dfrac{-x}{3^{-x}-1}-\\dfrac x2=\\dfrac{x\\cdot3^x}{3^x-1}-\\dfrac x2=x+\\dfrac{x}{3^x-1}-\\dfrac x2=g(x)$, so $g$ is even.<br>$x\\sin x$ is also even, hence $f$ is even. The domain $\\mathbb R-\\{0\\}$ is symmetric, and $f$ is not periodic because of the unbounded factor $x$. Hence $f$ is an even function.<br><b>Answer: (C)</b>"
    },
    // Q3 | Replica of APT-07 Q3 (domain, ITF)
    {
          "type": "mcq",
          "correctAnswer": 3,
          "text": "The domain of the function $f(x)=\\sin^{-1}\\!\\left(\\log_2\\dfrac{x^{2}}{2}\\right)+\\sqrt{2x+3}$ is:",
          "options": [
                "$[-2,-1]\\cup[1,2]$",
                "$\\left(-\\dfrac32,-1\\right)\\cup(1,2)$",
                "$[1,2]$",
                "$\\left[-\\dfrac32,-1\\right]\\cup[1,2]$"
          ],
          "solution": "$\\sin^{-1}$ needs $-1\\le\\log_2\\dfrac{x^2}2\\le1\\Rightarrow\\dfrac12\\le\\dfrac{x^2}2\\le2\\Rightarrow1\\le x^2\\le4$, i.e. $x\\in[-2,-1]\\cup[1,2]$.<br>$\\sqrt{2x+3}$ needs $x\\ge-\\dfrac32$.<br>Intersection: $\\left[-\\dfrac32,-1\\right]\\cup[1,2]$.<br><b>Answer: (D)</b>"
    },
    // Q4 | Replica of APT-07 Q4 (range, ITF)
    {
          "type": "mcq",
          "correctAnswer": 1,
          "text": "The range of the function $f(x)=\\sin^{-1}\\!\\left(\\dfrac{2x}{1+x^{2}}\\right)+\\cos^{-1}\\!\\left(\\dfrac{1-x^{2}}{1+x^{2}}\\right)$ is:",
          "options": [
                "$\\left[0,\\dfrac\\pi2\\right]$",
                "$[0,\\pi]$",
                "$[0,2\\pi]$",
                "$[-\\pi,\\pi]$"
          ],
          "solution": "Put $x=\\tan\\theta$, $\\theta\\in\\left(-\\dfrac\\pi2,\\dfrac\\pi2\\right)$. Then $\\dfrac{2x}{1+x^2}=\\sin2\\theta$ and $\\dfrac{1-x^2}{1+x^2}=\\cos2\\theta$, so $f=\\sin^{-1}(\\sin2\\theta)+\\cos^{-1}(\\cos2\\theta)$ with $2\\theta\\in(-\\pi,\\pi)$.<br>• $2\\theta\\in\\left[-\\dfrac\\pi2,\\dfrac\\pi2\\right]$: $\\sin^{-1}(\\sin2\\theta)=2\\theta$. • $2\\theta\\in\\left(\\dfrac\\pi2,\\pi\\right)$: $=\\pi-2\\theta$. • $2\\theta\\in\\left(-\\pi,-\\dfrac\\pi2\\right)$: $=-\\pi-2\\theta$.<br>$\\cos^{-1}(\\cos2\\theta)=|2\\theta|$ for $2\\theta\\in(-\\pi,\\pi)$.<br>Case $2\\theta\\in[0,\\pi/2]$: $f=4\\theta\\in[0,\\pi]$ (as $\\theta\\in[0,\\pi/4]$). Case $2\\theta\\in(\\pi/2,\\pi)$: $f=\\pi-2\\theta+2\\theta=\\pi$. Case $2\\theta\\in[-\\pi/2,0)$: $f=2\\theta-2\\theta=0$. Case $2\\theta\\in(-\\pi,-\\pi/2)$: $f=-\\pi-2\\theta-2\\theta=-\\pi-4\\theta\\in(0,\\pi)$.<br>The values taken are exactly $[0,\\pi]$.<br><b>Answer: (B)</b>"
    },
    // Q5 | Replica of APT-07 Q5/Q6 (fractional part, period)
    {
          "type": "mcq",
          "correctAnswer": 0,
          "text": "The fundamental period of the function $f(x)=\\{x\\}+\\left\\{x+\\dfrac13\\right\\}+\\left\\{x+\\dfrac23\\right\\}$, where $\\{\\cdot\\}$ denotes the fractional part function, is:",
          "options": [
                "$\\dfrac13$",
                "1",
                "$\\dfrac16$",
                "3"
          ],
          "solution": "Using $\\{t\\}=t-[t]$ and Hermite's identity $[x]+\\left[x+\\frac13\\right]+\\left[x+\\frac23\\right]=[3x]$:<br>$f(x)=\\left(3x+1\\right)-[3x]=\\{3x\\}+1$.<br>$\\{3x\\}$ has fundamental period $\\dfrac13$, so $f$ has fundamental period $\\dfrac13$.<br><b>Answer: (A)</b>"
    },
    // Q6 | Replica of APT-07 Q6 / Dirichlet-type function
    {
          "type": "mcq",
          "correctAnswer": 2,
          "text": "Let $f:\\mathbb R\\to\\mathbb R$ be defined by $f(x)=\\begin{cases}x,&x\\in\\mathbb Q\\\\1-x,&x\\notin\\mathbb Q\\end{cases}$. Then:",
          "options": [
                "$f$ is many-one and onto",
                "$f$ is one-one but not onto",
                "$f$ is one-one and onto, and $f(f(x))=x$ for all $x$",
                "$f$ is many-one and into"
          ],
          "solution": "If $x\\in\\mathbb Q$, then $f(x)=x\\in\\mathbb Q$, so $f(f(x))=x$. If $x\\notin\\mathbb Q$, then $f(x)=1-x\\notin\\mathbb Q$, so $f(f(x))=1-(1-x)=x$.<br>So $f\\circ f=I$ (identity). A function with a left inverse is one-one and one with a right inverse is onto; hence $f$ is a bijection with $f^{-1}=f$.<br><b>Answer: (C)</b>"
    },
    // Q7 | Replica of APT-07 Q7 (modulus equation)
    {
          "type": "multi_mcq",
          "correctAnswers": [
                1,
                2,
                3
          ],
          "text": "<div class='section-instruction'><h3>SECTION - 2 (Maximum Marks: 24)</h3><ul><li>This section contains <b>SIX (06)</b> questions. Each question has FOUR options (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four option(s) is(are) correct.</li></ul><div class='marking-box'>Full marks: +4 if only (all) the correct option(s) is (are) chosen &nbsp;|&nbsp; Partial: +1 for each correct option chosen if no incorrect option is chosen &nbsp;|&nbsp; Incorrect: &minus;2 &nbsp;|&nbsp; Unattempted: 0</div></div>Let $S$ be the set of all real solutions of $\\left|x^{2}-4\\right|=3|x|$. Then which of the following is/are correct?",
          "options": [
                "$S$ has exactly three elements",
                "The sum of all elements of $S$ is $0$",
                "The product of all elements of $S$ is $16$",
                "The difference between the greatest and the least element of $S$ is $8$"
          ],
          "solution": "The equation is even in $x$. For $x\\ge0$: $x^2-4=\\pm3x$. (i) $x^2-3x-4=0\\Rightarrow x=4$ (rejecting $-1$). (ii) $x^2+3x-4=0\\Rightarrow x=1$ (rejecting $-4$). Hence $S=\\{-4,-1,1,4\\}$.<br>(A) four elements, so false. (B) sum $=0$, true. (C) product $=(-4)(-1)(1)(4)=16$, true. (D) $4-(-4)=8$, true.<br><b>Answer: (B), (C), (D)</b>"
    },
    // Q8 | Replica of APT-07 Q8 (greatest integer function)
    {
          "type": "multi_mcq",
          "correctAnswers": [
                0,
                2
          ],
          "text": "Let $f(x)=[x]+[-x]$, where $[\\cdot]$ denotes the greatest integer function. Which of the following is/are correct?",
          "options": [
                "$f$ is an even function",
                "$f$ is an odd function",
                "$f$ is periodic with fundamental period $1$",
                "$f(x)=-1$ if and only if $x\\in\\mathbb Z$"
          ],
          "solution": "For $x\\in\\mathbb Z$: $f(x)=x-x=0$. For $x\\notin\\mathbb Z$: $[-x]=-[x]-1$, so $f(x)=-1$.<br>$f(-x)=[-x]+[x]=f(x)$, so $f$ is even (A true) and, being non-zero, not odd (B false). $f(x+1)=f(x)$, and for $0\\lt p\\lt1$: $f(p)=-1\\ne f(0)=0$, so $1$ is the fundamental period (C true). (D) is false: $f(x)=-1$ iff $x\\notin\\mathbb Z$.<br><b>Answer: (A), (C)</b>"
    },
    // Q9 | Replica of APT-07 Q9 (functional equation)
    {
          "type": "multi_mcq",
          "correctAnswers": [
                0,
                1,
                3
          ],
          "text": "Let $f$ be a function such that $f\\!\\left(x+\\dfrac1x\\right)=x^{3}+\\dfrac1{x^{3}}$ for every real $x\\ne0$. Which of the following is/are correct?",
          "options": [
                "$f(3)=18$",
                "$f$ is one-one",
                "The range of $f$ is $\\mathbb R$",
                "$f$ is an odd function"
          ],
          "solution": "Let $t=x+\\dfrac1x$, so $|t|\\ge2$. Then $x^3+\\dfrac1{x^3}=t^3-3t$, so $f(t)=t^3-3t$ on $(-\\infty,-2]\\cup[2,\\infty)$.<br>(A) $f(3)=27-9=18$, true. (B) $f'(t)=3(t^2-1)\\gt0$ for $|t|\\ge2$ and the domain splits into two branches mapped to $(-\\infty,-2]$ and $[2,\\infty)$ (disjoint), so $f$ is one-one, true. (C) The range is $(-\\infty,-2]\\cup[2,\\infty)\\ne\\mathbb R$ (e.g. $0$ is not attained), false. (D) The domain is symmetric and $f(-t)=-f(t)$, true.<br><b>Answer: (A), (B), (D)</b>"
    },
    // Q10 | Replica of APT-07 Q10 (types of relations)
    {
          "type": "multi_mcq",
          "correctAnswers": [
                0,
                2,
                3
          ],
          "text": "Let $R$ be the relation on $\\mathbb N$ defined by $a\\,R\\,b$ if and only if $a$ divides $b$. Which of the following is/are correct?",
          "options": [
                "$R$ is reflexive",
                "$R$ is symmetric",
                "$R$ is transitive",
                "$R$ is antisymmetric"
          ],
          "solution": "Reflexive: $a\\mid a$. Symmetric: $2\\mid4$ but $4\\nmid2$, so not symmetric. Transitive: $a\\mid b$ and $b\\mid c\\Rightarrow a\\mid c$. Antisymmetric: $a\\mid b$ and $b\\mid a$ with $a,b\\in\\mathbb N$ give $a=b$.<br><b>Answer: (A), (C), (D)</b>"
    },
    // Q11 | Replica of APT-07 Q11 (inverse function)
    {
          "type": "multi_mcq",
          "correctAnswers": [
                0,
                1,
                2
          ],
          "text": "Let $f:[2,\\infty)\\to[-3,\\infty)$ be defined by $f(x)=x^{2}-4x+1$. Which of the following is/are correct?",
          "options": [
                "$f$ is one-one and onto",
                "$f^{-1}(x)=2+\\sqrt{x+3}$",
                "$f^{-1}(-2)=3$",
                "The equation $f(x)=f^{-1}(x)$ has exactly two real solutions"
          ],
          "solution": "$f(x)=(x-2)^2-3$ is strictly increasing on $[2,\\infty)$ with range $[-3,\\infty)$, so it is a bijection. Solving $y=(x-2)^2-3$ with $x\\ge2$: $x=2+\\sqrt{y+3}$, so $f^{-1}(x)=2+\\sqrt{x+3}$. $f^{-1}(-2)=2+1=3$ (check: $f(3)=-2$).<br>(D) $f$ is increasing, so $f(x)=f^{-1}(x)\\Leftrightarrow f(x)=x$: $x^2-5x+1=0\\Rightarrow x=\\dfrac{5\\pm\\sqrt{21}}2$. Only $\\dfrac{5+\\sqrt{21}}2\\gt2$ lies in the domain, so there is exactly one solution; (D) is false.<br><b>Answer: (A), (B), (C)</b>"
    },
    // Q12 | Replica of APT-07 Q12 (inverse trigonometric function)
    {
          "type": "multi_mcq",
          "correctAnswers": [
                0,
                3
          ],
          "text": "Let $f(x)=\\cot^{-1}x+\\tan^{-1}\\dfrac1x$ for $x\\ne0$, where $\\cot^{-1}x\\in(0,\\pi)$. Which of the following is/are correct?",
          "options": [
                "$f(x)+f(-x)=\\pi$ for all $x\\ne0$",
                "$f$ is an odd function",
                "The range of $f$ is $[0,\\pi]$",
                "$f(x)=\\dfrac\\pi2$ has exactly two real solutions"
          ],
          "solution": "For $x\\gt0$: $\\cot^{-1}x=\\tan^{-1}\\dfrac1x$, so $f(x)=2\\tan^{-1}\\dfrac1x\\in(0,\\pi)$. For $x\\lt0$: $\\cot^{-1}x=\\pi+\\tan^{-1}\\dfrac1x$, so $f(x)=\\pi+2\\tan^{-1}\\dfrac1x\\in(0,\\pi)$.<br>For $x\\gt0$: $f(-x)=\\pi+2\\tan^{-1}\\!\\left(-\\dfrac1x\\right)=\\pi-f(x)$, so $f(x)+f(-x)=\\pi$ (A true). It is not odd since $f(x)\\gt0$ everywhere (B false). The range is $(0,\\pi)$, not $[0,\\pi]$ (C false). $f(x)=\\dfrac\\pi2\\Rightarrow\\tan^{-1}\\dfrac1x=\\dfrac\\pi4$ ($x\\gt0$) giving $x=1$, or $\\tan^{-1}\\dfrac1x=-\\dfrac\\pi4$ ($x\\lt0$) giving $x=-1$: exactly two solutions (D true).<br><b>Answer: (A), (D)</b>"
    },
    // Q13 | Replica of APT-07 Q13 (integers in range)
    {
          "type": "numerical",
          "correctAnswer": 13,
          "text": "<div class='section-instruction'><h3>SECTION - 3 (Maximum Marks: 18)</h3><ul><li>This section contains <b>SIX (06)</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>. Enter the value using the on-screen keypad (if the value has more than two decimal places, round it off to two decimal places).</li></ul><div class='marking-box'>Full marks: +3 if the correct numerical value is entered &nbsp;|&nbsp; No negative marking &nbsp;|&nbsp; Unattempted: 0</div></div>The number of integers in the range of the function $f(x)=\\dfrac{x^{2}-3x+3}{x^{2}+3x+3}$, $x\\in\\mathbb R$, is ____ .",
          "solution": "$x^2+3x+3\\gt0$ for all real $x$ (discriminant $9-12\\lt0$). Put $y=f(x)$: $(y-1)x^2+3(y+1)x+3(y-1)=0$. For $y\\ne1$ real $x$ requires $9(y+1)^2-12(y-1)^2\\ge0\\Rightarrow y^2-14y+1\\le0\\Rightarrow y\\in[7-4\\sqrt3,\\,7+4\\sqrt3]\\approx[0.072,\\,13.93]$. $y=1$ is attained at $x=0$.<br>Integers in the range: $1,2,\\ldots,13$, so the number is $13$.<br><b>Answer: 13</b>"
    },
    // Q14 | Replica of APT-07 Q14 (even function, GIF and fractional part)
    {
          "type": "numerical",
          "correctAnswer": 98,
          "text": "Let $f(x)=\\left([a]^{2}-7[a]+10\\right)x^{3}-\\left(6\\{a\\}^{2}-7\\{a\\}+2\\right)x-(\\sin x)\\,\\mathrm{sgn}(x)$ be an even function for all $x\\in\\mathbb R$, where $[\\cdot]$ and $\\{\\cdot\\}$ denote the greatest integer and fractional part functions. Then the sum of all possible values of $6a$ is ____ .",
          "solution": "$(\\sin x)\\,\\mathrm{sgn}(x)$ is a product of two odd functions, hence even. The terms with $x^3$ and $x$ are odd, so for $f$ to be even their coefficients must vanish.<br>$[a]^2-7[a]+10=0\\Rightarrow[a]=2$ or $5$. $6\\{a\\}^2-7\\{a\\}+2=(2\\{a\\}-1)(3\\{a\\}-2)=0\\Rightarrow\\{a\\}=\\dfrac12$ or $\\dfrac23$.<br>Possible $a$: $2.5,\\ 2\\tfrac23,\\ 5.5,\\ 5\\tfrac23$. Sum $=16\\tfrac13=\\dfrac{49}3$, so the sum of the values of $6a$ is $6\\cdot\\dfrac{49}3=98$.<br><b>Answer: 98</b>"
    },
    // Q15 | Replica of APT-07 Q15 (graphical solution count)
    {
          "type": "numerical",
          "correctAnswer": 11,
          "text": "The number of real solutions of the equation $|\\sin x|=\\dfrac{|x|}{10}$ is ____ .",
          "solution": "Both sides are even in $x$, so count solutions for $x\\gt0$ and double, then add $x=0$. Since $\\dfrac x{10}\\gt1$ for $x\\gt10$, only $0\\lt x\\le10$ matters, i.e. the humps of $|\\sin x|$ on $(0,\\pi),(\\pi,2\\pi),(2\\pi,3\\pi)$ and the start of $(3\\pi,4\\pi)$.<br>• $(0,\\pi)$: near $0$, $\\sin x\\gt\\dfrac x{10}$; at $\\pi$, $\\sin\\pi=0\\lt\\dfrac\\pi{10}$: one crossing. • $(\\pi,2\\pi)$: line is above $0$ at both ends, but the hump reaches $1$ at $\\dfrac{3\\pi}2\\approx4.71$ where the line is $0.47$: two crossings. • $(2\\pi,3\\pi)$: hump peak at $\\dfrac{5\\pi}2\\approx7.85$ where the line is $0.785\\lt1$: two crossings. • $(3\\pi,4\\pi)$ and beyond: peak $1$ at $\\dfrac{7\\pi}2\\approx10.99$, but line $\\gt1$ there, and at $3\\pi\\approx9.42$ line $=0.942\\gt0$: no crossing.<br>Positive solutions: $1+2+2=5$; negative: $5$; plus $x=0$. Total $=11$.<br><b>Answer: 11</b>"
    },
    // Q16 | Replica of APT-07 Q16 (counting functions)
    {
          "type": "numerical",
          "correctAnswer": 181,
          "text": "The number of one-one functions $f:\\{1,2,3,4\\}\\to\\{1,2,3,4,5,6\\}$ such that $f(i)\\ne i$ for every $i\\in\\{1,2,3,4\\}$ is ____ .",
          "solution": "Let $A_i$ be the set of one-one functions with $f(i)=i$. By inclusion–exclusion, $N=\\sum_{k=0}^{4}(-1)^k\\binom4k\\,P(6-k,\\,4-k)$ where $P(n,r)=\\dfrac{n!}{(n-r)!}$.<br>$=P(6,4)-4P(5,3)+6P(4,2)-4P(3,1)+P(2,0)=360-240+72-12+1=181$.<br><b>Answer: 181</b>"
    },
    // Q17 | Replica of signum function item
    {
          "type": "numerical",
          "correctAnswer": 9,
          "text": "Let $f(x)=\\mathrm{sgn}(x-1)+\\mathrm{sgn}(x-2)+\\mathrm{sgn}(x-3)+\\mathrm{sgn}(x-4)$, where $\\mathrm{sgn}$ denotes the signum function. The number of elements in the range of $f$ is ____ .",
          "solution": "The values of $f$ on the pieces of the real line: $x\\lt1$: $-4$; $x=1$: $0-3=-3$; $1\\lt x\\lt2$: $1-3=-2$; $x=2$: $-1$; $2\\lt x\\lt3$: $0$; $x=3$: $1$; $3\\lt x\\lt4$: $2$; $x=4$: $3$; $x\\gt4$: $4$.<br>Range $=\\{-4,-3,\\ldots,4\\}$, which has $9$ elements.<br><b>Answer: 9</b>"
    },
    // Q18 | Replica of APT-07 Q18 (functional symmetry sum)
    {
          "type": "numerical",
          "correctAnswer": 29,
          "text": "Let $f:[0,1]\\to\\mathbb R$ be defined by $f(x)=\\dfrac{9^{x}}{9^{x}+3}$. Then $f\\!\\left(\\dfrac1{60}\\right)+f\\!\\left(\\dfrac2{60}\\right)+f\\!\\left(\\dfrac3{60}\\right)+\\cdots+f\\!\\left(\\dfrac{59}{60}\\right)-f\\!\\left(\\dfrac12\\right)$ is equal to ____ .",
          "solution": "$f(1-x)=\\dfrac{9^{1-x}}{9^{1-x}+3}=\\dfrac{9}{9+3\\cdot9^{x}}=\\dfrac{3}{3+9^{x}}$, so $f(x)+f(1-x)=\\dfrac{9^x+3}{9^x+3}=1$.<br>Pair $k$ with $60-k$ for $k=1,\\ldots,29$: $29$ pairs, each summing to $1$. The middle term is $f\\!\\left(\\dfrac{30}{60}\\right)=f\\!\\left(\\dfrac12\\right)=\\dfrac36=\\dfrac12$.<br>Sum $=29+f\\!\\left(\\tfrac12\\right)$, so the required value is $29$.<br><b>Answer: 29</b>"
    }
  ]
};