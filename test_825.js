window.testBank = window.testBank || {};
window.testBank['test_825'] = {
  title: "MPT-9 (16-11-2026) Pre-Test (FOM-II, Relations & Functions)",
  category: "Pre-Tests Maths",
  uploadedAt: "2026-11-14T12:30:00Z",
  timeLimitMins: 80,
  examPattern: "main",
  shuffleQuestions: false,
  randomizePoolSize: 0,
  questions: [
    // Q1 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "<div class='section-instruction'><h3>SECTION - A (Maximum Marks: 80)</h3><ul><li>This section contains <b>20 multiple choice questions</b>. Each question has four options (1), (2), (3) and (4), out of which <b>only one</b> is correct.</li></ul><div class='marking-box'>Correct answer: +4 &nbsp;|&nbsp; Incorrect answer: &minus;1 &nbsp;|&nbsp; Unattempted: 0</div></div>The solution set of the equation $|x-1|+|x-3|=|2x-4|$ is:",
          "options": [
                "$[1,3]$",
                "$\\mathbb R$",
                "$\\{1,3\\}$",
                "$(-\\infty,1]\\cup[3,\\infty)$"
          ],
          "solution": "Let $a=x-1$, $b=x-3$; then $a+b=2x-4$. $|a|+|b|=|a+b|$ holds iff $ab\\ge0$.<br>$(x-1)(x-3)\\ge0\\Rightarrow x\\le1$ or $x\\ge3$.<br><b>Answer: (4)</b>"
    },
    // Q2 | APT-07 (17-11-2025) Q7
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "If $a$ and $b$ $(a\\gt b)$ are the solutions of the equation $\\log_5\\left(\\log_{64}|x|-\\dfrac12+25^{x}\\right)=2x$, then $a-b$ is equal to:",
          "options": [
                "16",
                "8",
                "64",
                "128"
          ],
          "solution": "$\\log_5(\\cdot)=2x\\Rightarrow\\log_{64}|x|-\\frac12+25^x=5^{2x}=25^x\\Rightarrow\\log_{64}|x|=\\frac12\\Rightarrow|x|=64^{1/2}=8$.<br>Check the argument of $\\log_5$ is positive: $25^{x}\\gt 0$ at both $x=\\pm8$. So $a=8$, $b=-8$ and $a-b=16$.<br><b>Answer: (1)</b>"
    },
    // Q3 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "The number of integers $x$ satisfying $\\big||x-2|-3\\big|\\lt 2$ is:",
          "options": [
                "4",
                "5",
                "6",
                "7"
          ],
          "solution": "$-2\\lt |x-2|-3\\lt 2\\Rightarrow1\\lt |x-2|\\lt 5$.<br>$|x-2|\\gt 1\\Rightarrow x\\lt 1$ or $x\\gt 3$; $|x-2|\\lt 5\\Rightarrow-3\\lt x\\lt 7$. So $x\\in(-3,1)\\cup(3,7)$.<br>Integers: $-2,-1,0$ and $4,5,6$: total $6$.<br><b>Answer: (3)</b>"
    },
    // Q4 | APT-07 (17-11-2025) Q13
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The number of integers in the range of the function $f(x)=\\dfrac{x^{3}+2x^{2}+3x+2}{x^{3}+2x^{2}+2x+1}$, $x\\in\\mathbb R-\\{0\\}$, is:",
          "options": [
                "1",
                "0",
                "2",
                "3"
          ],
          "solution": "Factor: $x^3+2x^2+3x+2=(x+1)(x^2+x+2)$ and $x^3+2x^2+2x+1=(x+1)(x^2+x+1)$. So $f$ is defined for $x\\ne-1$ and there $f(x)=\\dfrac{x^2+x+2}{x^2+x+1}=1+\\dfrac1{x^2+x+1}$.<br>$x^2+x+1\\ge\\frac34$ (minimum at $x=-\\frac12$), so $0\\lt \\frac1{x^2+x+1}\\le\\frac43$ and $f\\in(1,\\frac73]$.<br>The only integer in $(1,\\frac73]$ is $2$, which needs $x^2+x+1=1\\Rightarrow x=0$ or $x=-1$. Both are excluded ($x\\ne0$ is given, $x=-1$ is outside the domain), so $2$ is not attained.<br>Number of integers in the range $=0$.<br><b>Answer: (2)</b>"
    },
    // Q5 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "The equation $|x^{2}-4x+3|=m$ has exactly four distinct real solutions if and only if:",
          "options": [
                "$0\\lt m\\lt 1$",
                "$0\\lt m\\le1$",
                "$m\\gt 1$",
                "$0\\le m\\lt 1$"
          ],
          "solution": "Graph of $y=|x^2-4x+3|=|(x-1)(x-3)|$: the part of the parabola below the $x$-axis (between $1$ and $3$) is reflected upward, giving an inverted arch with peak $y=1$ at $x=2$, and the outer arms rising from $(1,0)$ and $(3,0)$.<br>A horizontal line $y=m$ cuts it in: $2$ points for $m=0$ ($x=1,3$); $4$ points for $0\\lt m\\lt 1$; $3$ points for $m=1$ ($x=2,\\,2\\pm\\sqrt2$); $2$ points for $m\\gt 1$; none for $m\\lt 0$.<br>So exactly four solutions iff $0\\lt m\\lt 1$.<br><b>Answer: (1)</b>"
    },
    // Q6 | MPT-07 (10-11-2025) Q67
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The domain of the function $f(x)=\\log_e\\big(\\sin(x-3)\\big)+\\sqrt{16-x^{2}}$ is:",
          "options": [
                "$[-4,4]$",
                "$(3-2\\pi,\\,3-\\pi)\\cup(3,\\,4]$",
                "$[3,4]$",
                "$(0,3)$"
          ],
          "solution": "$\\sqrt{16-x^2}$: $-4\\le x\\le4$. $\\log(\\sin(x-3))$: $\\sin(x-3)\\gt 0\\Rightarrow2n\\pi\\lt x-3\\lt (2n+1)\\pi$.<br>With $x-3\\in[-7,1]$: $n=-1$ gives $(-2\\pi,-\\pi)$ i.e. $x\\in(3-2\\pi,3-\\pi)\\approx(-3.28,-0.14)$ (inside $[-4,4]$); $n=0$ gives $x-3\\in(0,\\pi)\\cap(-\\infty,1]$, i.e. $x\\in(3,4]$.<br><b>Answer: (2)</b>"
    },
    // Q7 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "The graph of a function $y=f(x)$ is shown below.<div style='margin:10px 0;'><img src='data:image/png;base64,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' alt='graph' style='max-width:380px;width:100%;height:auto;'></div>Then $f(x)$ is equal to:",
          "options": [
                "$|x-1|+|x-3|$",
                "$\\big||x-1|-|x-3|\\big|$",
                "$|x-2|+1$",
                "$|x+1|+|x+3|$"
          ],
          "solution": "The graph is flat ($y=2$) between $x=1$ and $x=3$ and has slope $-2$ to the left of $1$ and $+2$ to the right of $3$ (through $(0,4)$ and $(4,4)$).<br>$|x-1|+|x-3|$: for $1\\le x\\le3$ it equals $(x-1)+(3-x)=2$; for $x\\lt 1$ it is $4-2x$ (at $x=0$: 4); for $x\\gt 3$ it is $2x-4$ (at $x=4$: 4). This matches.<br>The other options give a different flat part or kink positions.<br><b>Answer: (1)</b>"
    },
    // Q8 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "The domain of the function $f(x)=\\dfrac{1}{\\sqrt{[x]^{2}-[x]-6}}$, where $[\\,\\cdot\\,]$ denotes the greatest integer function, is:",
          "options": [
                "$(-\\infty,-2)\\cup[4,\\infty)$",
                "$(-\\infty,-2]\\cup[4,\\infty)$",
                "$(-\\infty,-2)\\cup(3,\\infty)$",
                "$(-2,3)$"
          ],
          "solution": "Need $[x]^2-[x]-6\\gt 0\\Rightarrow([x]-3)([x]+2)\\gt 0$, so $[x]\\gt 3$ or $[x]\\lt -2$.<br>$[x]\\gt 3\\Rightarrow[x]\\ge4\\Rightarrow x\\ge4$. $[x]\\lt -2\\Rightarrow[x]\\le-3\\Rightarrow x\\lt -2$.<br>Domain $=(-\\infty,-2)\\cup[4,\\infty)$. (At $x=-2$, $[x]=-2$ gives $4+2-6=0$, not allowed.)<br><b>Answer: (1)</b>"
    },
    // Q9 | MPT-07 (10-11-2025) Q66
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "If $x\\in\\mathbb R^{+}$, then the range of $f(x)=\\dfrac{(1+x+x^{2})(x^{4}+1)}{x^{3}}$ is:",
          "options": [
                "$[6,\\infty)$",
                "$[3,\\infty)$",
                "$[5,\\infty)$",
                "$[12,\\infty)$"
          ],
          "solution": "$f(x)=\\dfrac{1+x+x^2}{x}\\cdot\\dfrac{x^4+1}{x^2}=\\left(x+\\dfrac1x+1\\right)\\left(x^2+\\dfrac1{x^2}\\right)$.<br>For $x\\gt 0$ (AM–GM): $x+\\frac1x\\ge2$ and $x^2+\\frac1{x^2}\\ge2$, both with equality at $x=1$, so $f\\ge3\\cdot2=6$.<br>$f\\to\\infty$ as $x\\to0^+$ or $\\infty$, and $f$ is continuous: range $=[6,\\infty)$.<br><b>Answer: (1)</b>"
    },
    // Q10 | MPT-07 (10-11-2025) Q70
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The range of the function $f(x)=\\sqrt{3-x}+\\sqrt{2+x}$ is:",
          "options": [
                "$[2\\sqrt2,\\sqrt{11}]$",
                "$[\\sqrt5,\\sqrt{10}]$",
                "$[\\sqrt5,\\sqrt{13}]$",
                "$[\\sqrt2,\\sqrt7]$"
          ],
          "solution": "Domain: $-2\\le x\\le3$. $f^2=5+2\\sqrt{(3-x)(x+2)}=5+2\\sqrt{-x^2+x+6}$.<br>$-x^2+x+6$ ranges over $[0,\\frac{25}4]$ on $[-2,3]$ (zero at the ends, maximum at $x=\\frac12$), so $f^2\\in[5,\\,5+5]=[5,10]$.<br>Range $=[\\sqrt5,\\sqrt{10}]$.<br><b>Answer: (1)</b>"
    },
    // Q11 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The range of the function $f(x)=\\dfrac{1}{2-\\{x\\}}$, where $\\{\\,\\cdot\\,\\}$ denotes the fractional part function, is:",
          "options": [
                "$\\left(\\dfrac12,\\,1\\right]$",
                "$\\left[\\dfrac12,\\,1\\right)$",
                "$\\left[\\dfrac12,\\,1\\right]$",
                "$\\left(\\dfrac12,\\,1\\right)$"
          ],
          "solution": "$0\\le\\{x\\}\\lt 1\\Rightarrow1\\lt 2-\\{x\\}\\le2\\Rightarrow\\dfrac12\\le\\dfrac1{2-\\{x\\}}\\lt 1$.<br>The value $\\frac12$ occurs when $\\{x\\}=0$; the value $1$ would need $\\{x\\}=1$, which is impossible.<br>Range $=\\left[\\frac12,1\\right)$.<br><b>Answer: (2)</b>"
    },
    // Q12 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "The graph of $y=\\big||x|-2\\big|$ is shown below.<div style='margin:10px 0;'><img src='data:image/png;base64,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' alt='graph' style='max-width:380px;width:100%;height:auto;'></div>The equation $\\big||x|-2\\big|=k$ has exactly three distinct real solutions for $k$ equal to:",
          "options": [
                "0",
                "1",
                "3",
                "2"
          ],
          "solution": "From the graph, the horizontal line $y=k$ meets the curve in: $2$ points for $k=0$ ($x=\\pm2$), $4$ points for $0\\lt k\\lt 2$, $3$ points for $k=2$ (at $x=0,\\pm4$) and $2$ points for $k\\gt 2$.<br>Check $k=2$: $|x|-2=\\pm2\\Rightarrow|x|=4$ or $|x|=0\\Rightarrow x=-4,0,4$.<br><b>Answer: (4)</b>"
    },
    // Q13 | MPT-07 (10-11-2025) Q61
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "The domain of the function $f(x)=\\dfrac{1}{\\sqrt{|x|-x}}$ is:",
          "options": [
                "$(-\\infty,\\infty)$",
                "$(0,\\infty)$",
                "$(-\\infty,0)$",
                "$(-\\infty,\\infty)-\\{0\\}$"
          ],
          "solution": "Need $|x|-x\\gt 0\\Rightarrow|x|\\gt x$. For $x\\ge0$, $|x|=x$ (fails); for $x\\lt 0$, $|x|=-x\\gt x$ (true).<br>Domain $=(-\\infty,0)$.<br><b>Answer: (3)</b>"
    },
    // Q14 | MPT-07 (10-11-2025) Q51
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "Find the domain of the function $f(x)=\\dfrac{3}{\\sqrt{4-x^{2}}}\\,\\log_e(x^{3}-x)$.",
          "options": [
                "$(-1,0)\\cup(1,2)$",
                "$(-2,0)\\cup(1,2)$",
                "$(-2,-1)\\cup(0,1)$",
                "$(-1,0)\\cup(1,\\infty)$"
          ],
          "solution": "$\\sqrt{4-x^2}$ in the denominator needs $4-x^2\\gt 0\\Rightarrow-2\\lt x\\lt 2$.<br>$\\log(x^3-x)$ needs $x(x-1)(x+1)\\gt 0\\Rightarrow x\\in(-1,0)\\cup(1,\\infty)$.<br>Intersection: $(-1,0)\\cup(1,2)$.<br><b>Answer: (1)</b>"
    },
    // Q15 | APT-07 (17-11-2025) Q15
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "The number of real solutions of the equation $|\\cos x|=2[x]$, where $[\\,\\cdot\\,]$ denotes the greatest integer function, is:",
          "options": [
                "1",
                "2",
                "0",
                "Infinite"
          ],
          "solution": "$0\\le|\\cos x|\\le1$, so $2[x]\\in\\{0\\}$ (an even integer in $[0,1]$), i.e. $[x]=0\\Rightarrow x\\in[0,1)$.<br>Then we need $|\\cos x|=0$, i.e. $x=\\frac\\pi2+k\\pi$; none of these lies in $[0,1)$ (the first is $\\frac\\pi2\\approx1.57$).<br>So the equation has no solution.<br><b>Answer: (3)</b>"
    },
    // Q16 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The number of real solutions of the equation $x|x|-5|x+2|+6=0$ is:",
          "options": [
                "2",
                "3",
                "4",
                "1"
          ],
          "solution": "<b>$x\\ge0$:</b> $x^2-5x-10+6=0\\Rightarrow x^2-5x-4=0\\Rightarrow x=\\frac{5\\pm\\sqrt{41}}2$; only $\\frac{5+\\sqrt{41}}2$ is $\\ge0$ → 1 solution.<br><b>$-2\\le x\\lt 0$:</b> $-x^2-5x-10+6=0\\Rightarrow x^2+5x+4=0\\Rightarrow x=-1,-4$; only $x=-1$ lies in $[-2,0)$ → 1 solution.<br><b>$x\\lt -2$:</b> $-x^2+5x+10+6=0\\Rightarrow x^2-5x-16=0\\Rightarrow x=\\frac{5\\pm\\sqrt{89}}2$; only $\\frac{5-\\sqrt{89}}2\\approx-2.22\\lt -2$ → 1 solution.<br>Total $=3$.<br><b>Answer: (2)</b>"
    },
    // Q17 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "The range of the function $f(x)=[x]-2\\left[\\dfrac x2\\right]$, where $[\\,\\cdot\\,]$ denotes the greatest integer function, is:",
          "options": [
                "$\\{0\\}$",
                "$\\{0,1,2\\}$",
                "$\\{0,1\\}$",
                "$[0,1]$"
          ],
          "solution": "For $x\\in[2k,2k+1)$: $[x]=2k$, $[x/2]=k\\Rightarrow f=0$. For $x\\in[2k+1,2k+2)$: $[x]=2k+1$, $[x/2]=k\\Rightarrow f=1$.<br>(Same pattern for negative $x$.) Range $=\\{0,1\\}$.<br><b>Answer: (3)</b>"
    },
    // Q18 | Original
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "The domain of the function $f(x)=\\sqrt{\\dfrac{|x|-3}{|x|-1}}$ is:",
          "options": [
                "$(-\\infty,-3]\\cup[3,\\infty)$",
                "$(-\\infty,-3]\\cup[-1,1]\\cup[3,\\infty)$",
                "$(-3,-1)\\cup(1,3)$",
                "$(-\\infty,-3]\\cup(-1,1)\\cup[3,\\infty)$"
          ],
          "solution": "Put $t=|x|\\ge0$: $\\dfrac{t-3}{t-1}\\ge0$ with $t\\ne1\\Rightarrow t\\lt 1$ or $t\\ge3$, i.e. $0\\le t\\lt 1$ or $t\\ge3$.<br>$|x|\\lt 1\\Rightarrow x\\in(-1,1)$; $|x|\\ge3\\Rightarrow x\\le-3$ or $x\\ge3$.<br>Domain $=(-\\infty,-3]\\cup(-1,1)\\cup[3,\\infty)$.<br><b>Answer: (4)</b>"
    },
    // Q19 | MPT-07 (10-11-2025) Q60
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "The range of the function $f(x)=\\dfrac{(x-2)^{2}}{(x-1)(x-3)}$ is:",
          "options": [
                "$(1,\\infty)$",
                "$(-\\infty,1)$",
                "$\\mathbb R-(0,1]$",
                "$(0,1]$"
          ],
          "solution": "Let $y=\\dfrac{(x-2)^2}{(x-1)(x-3)}$. Then $(1-y)x^2+4(y-1)x+(4-3y)=0$. For $y=1$: $x^2-4x+4=x^2-4x+3$ gives $4=3$, impossible, so $y\\ne1$.<br>For $y\\ne1$ the discriminant $16(y-1)^2-4(1-y)(4-3y)=4(1-y)\\big[4(1-y)-(4-3y)\\big]=4(1-y)(-y)=4y(y-1)\\ge0\\Rightarrow y\\le0$ or $y\\gt 1$.<br>Range $=(-\\infty,0]\\cup(1,\\infty)=\\mathbb R-(0,1]$.<br><b>Answer: (3)</b>"
    },
    // Q20 | APT-07 (17-11-2025) Q8
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "If $[2\\cos x]+[\\sin x]=-3$, where $[\\,\\cdot\\,]$ denotes the greatest integer function, then the range of the function $f(x)=\\sin x+\\sqrt3\\cos x$ for such $x\\in[0,2\\pi]$ is:",
          "options": [
                "$[-2,\\,-\\sqrt3]$",
                "$[-3,\\,-1]$",
                "$[-\\sqrt3,\\,\\sqrt3)$",
                "$[-2,\\,-\\sqrt3)$"
          ],
          "solution": "$[2\\cos x]\\ge-2$ and $[\\sin x]\\ge-1$, so the sum $-3$ needs $[2\\cos x]=-2$ and $[\\sin x]=-1$.<br>$[\\sin x]=-1\\Rightarrow\\sin x\\in[-1,0)\\Rightarrow x\\in(\\pi,2\\pi)$. $[2\\cos x]=-2\\Rightarrow2\\cos x\\in[-2,-1)\\Rightarrow\\cos x\\in[-1,-\\frac12)\\Rightarrow x\\in\\left(\\frac{2\\pi}3,\\frac{4\\pi}3\\right)$ (at $x=\\frac{4\\pi}3$, $\\cos x=-\\frac12$ gives $[2\\cos x]=-1$, so it is excluded).<br>Intersecting with $(\\pi,2\\pi)$: $x\\in\\left(\\pi,\\frac{4\\pi}3\\right)$.<br>$f(x)=2\\sin\\left(x+\\frac\\pi3\\right)$ with $x+\\frac\\pi3\\in\\left(\\frac{4\\pi}3,\\frac{5\\pi}3\\right)$: $\\sin$ goes from $-\\frac{\\sqrt3}2$ (excluded) down to $-1$ (at $\\frac{3\\pi}2$, included) and back to $-\\frac{\\sqrt3}2$ (excluded).<br>Range $=[-2,-\\sqrt3)$.<br><b>Answer: (4)</b>"
    },
    // Q21 | MPT-07 (10-11-2025) Q72
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 18,
          "text": "<div class='section-instruction'><h3>SECTION - B (Maximum Marks: 20)</h3><ul><li>This section contains <b>5 numerical value type questions</b>. The answer to each question is a numerical value (enter the value only).</li></ul><div class='marking-box'>Correct answer: +4 &nbsp;|&nbsp; Incorrect answer: &minus;1 &nbsp;|&nbsp; Unattempted: 0</div></div>If the domain of the function $f(x)=\\log_7\\big(1-\\log_4(x^{2}-9x+18)\\big)$ is $(\\alpha,\\beta)\\cup(\\gamma,\\delta)$, then $\\alpha+\\beta+\\gamma+\\delta$ is equal to ____.",
          "solution": "Need $x^2-9x+18\\gt 0$ and $1-\\log_4(x^2-9x+18)\\gt 0$, i.e. $0\\lt x^2-9x+18\\lt 4$.<br>$x^2-9x+18\\gt 0\\Rightarrow x\\lt 3$ or $x\\gt 6$. $x^2-9x+14\\lt 0\\Rightarrow2\\lt x\\lt 7$.<br>Domain $=(2,3)\\cup(6,7)$: $\\alpha+\\beta+\\gamma+\\delta=2+3+6+7=18$.<br><b>Answer: 18</b>"
    },
    // Q22 | MPT-07 (10-11-2025) Q74
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 194,
          "text": "If the range of the function $f(x)=\\dfrac{5-x}{x^{2}-3x+2}$, $x\\ne1,2$, is $(-\\infty,\\alpha]\\cup[\\beta,\\infty)$, then $\\alpha^{2}+\\beta^{2}$ is equal to ____.",
          "solution": "$y(x^2-3x+2)=5-x\\Rightarrow yx^2+(1-3y)x+(2y-5)=0$. ($x=1$ or $2$ would make the left side $0$ and the right side $4$ or $3$, so they are never attained.)<br>Real $x$ requires $(1-3y)^2-4y(2y-5)\\ge0\\Rightarrow y^2+14y+1\\ge0$ (for $y=0$, $x=5$ works).<br>Roots: $y=-7\\pm4\\sqrt3$, so $\\alpha=-7-4\\sqrt3$, $\\beta=-7+4\\sqrt3$.<br>$\\alpha^2+\\beta^2=(\\alpha+\\beta)^2-2\\alpha\\beta=196-2(1)=194$.<br><b>Answer: 194</b>"
    },
    // Q23 | APT-07 (17-11-2025) Q16
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 21,
          "text": "Let $S$ be the set of all integer values of $p$ for which the equation $\\left|x+\\dfrac1x-3\\right|=p-3$ has exactly two distinct real solutions. Then the sum of all elements of $S$ is ____.",
          "solution": "Let $c=p-3\\ge0$. For $x\\gt 0$: $x+\\frac1x\\ge2$, so $g=x+\\frac1x-3\\ge-1$ with $g=-1$ only at $x=1$. For $x\\lt 0$: $x+\\frac1x\\le-2$, so $g\\le-5$ and $|g|\\ge5$.<br>Number of solutions of $|g|=c$: $c=0$: $2$; $0\\lt c\\lt 1$: $4$; $c=1$: $3$; $1\\lt c\\lt 5$: $2$; $c=5$: $3$; $c\\gt 5$: $4$.<br>Exactly two solutions: $c=0$ or $1\\lt c\\lt 5$, i.e. $p=3$ or $4\\lt p\\lt 8$, so $p\\in\\{3,5,6,7\\}$.<br>Sum $=3+5+6+7=21$.<br><b>Answer: 21</b>"
    },
    // Q24 | Original
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 5,
          "text": "Let $S$ be the set of all real solutions of the equation $4\\{x\\}=x+[x]$, where $[\\,\\cdot\\,]$ and $\\{\\,\\cdot\\,\\}$ denote the greatest integer and fractional part functions. If $\\Sigma$ is the sum of the elements of $S$, then $3\\Sigma$ equals ____.",
          "solution": "Write $x=n+f$, $n=[x]\\in\\mathbb Z$, $f=\\{x\\}\\in[0,1)$. Then $4f=(n+f)+n\\Rightarrow3f=2n\\Rightarrow f=\\frac{2n}3$.<br>$0\\le\\frac{2n}3\\lt 1\\Rightarrow n=0$ or $n=1$.<br>$n=0$: $x=0$. $n=1$: $f=\\frac23$, $x=\\frac53$.<br>$\\Sigma=0+\\frac53=\\frac53$, so $3\\Sigma=5$.<br><b>Answer: 5</b>"
    },
    // Q25 | Original
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 18,
          "text": "The area (in square units) of the region enclosed by the curve $|x-2|+|y+1|=3$ is ____.",
          "solution": "Shift the origin to $(2,-1)$: $|X|+|Y|=3$ is a square (rhombus) with vertices $(\\pm3,0)$, $(0,\\pm3)$.<br>Its diagonals are $6$ and $6$, so area $=\\frac12\\cdot6\\cdot6=18$.<br><b>Answer: 18</b>"
    }
  ]
};