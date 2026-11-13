window.testBank = window.testBank || {};
window.testBank['test_2003'] = {
  title: "2026 JAN 28 S-2(MAT)",
  category: "JEE MAIN PYQ FSTs - Mathematics",
  uploadedAt: "2026-11-13T14:30:00Z",
  timeLimitMins: 60,
  examPattern: "main",
  shuffleQuestions: false,
  randomizePoolSize: 0,
  questions: [
    // Q1 | JEE Main 28-Jan-2026 S2 (Evening) Math Q1 | Definite integral with greatest integer function
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "<div class='section-instruction'><h3>SECTION - A (Maximum Marks: 80)</h3><ul><li>This section contains <b>20 multiple choice questions</b>. Each question has four options (1), (2), (3) and (4), out of which <b>only one</b> is correct.</li></ul><div class='marking-box'>Correct answer: +4 &nbsp;|&nbsp; Incorrect answer: &minus;1 &nbsp;|&nbsp; Unattempted: 0</div></div>Let $[\\cdot]$ denote the greatest integer function. Then $\\displaystyle\\int_{-\\pi/2}^{\\pi/2}\\left(\\frac{12(3+[x])}{3+[\\sin x]+[\\cos x]}\\right)dx$ is equal to :",
          "options": [
                "$11\\pi+2$",
                "$12\\pi+5$",
                "$13\\pi+1$",
                "$15\\pi+4$"
          ],
          "solution": "Split at $-1,\\,0,\\,1$ (where $[x]$, $[\\sin x]$, $[\\cos x]$ change).<br>On $(-\\tfrac{\\pi}{2},-1)$: $[x]=-2,[\\sin x]=-1,[\\cos x]=0$ → integrand $=\\tfrac{12(1)}{2}=6$.<br>On $(-1,0)$: $[x]=-1$ → $\\tfrac{12\\cdot2}{2}=12$. On $(0,1)$: $[x]=0$ → $\\tfrac{36}{3}=12$. On $(1,\\tfrac{\\pi}{2})$: $[x]=1$ → $\\tfrac{48}{3}=16$.<br>Integral $=6(\\tfrac{\\pi}{2}-1)+12+12+16(\\tfrac{\\pi}{2}-1)=11\\pi+2$."
    },
    // Q2 | JEE Main 28-Jan-2026 S2 (Evening) Math Q2 | AP and quadratic roots
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "Let the arithmetic mean of $\\dfrac1a$ and $\\dfrac1b$ be $\\dfrac{5}{16}$, $a\\gt 2$. If $\\alpha$ is such that $a,4,\\alpha,b$ are in A.P., then the equation $\\alpha x^2-ax+2(\\alpha-2b)=0$ has :",
          "options": [
                "complex roots of magnitude less than $2$",
                "one root in $(0,2)$ and another in $(-4,-2)$",
                "one root in $(1,4)$ and another in $(-2,0)$",
                "both roots in the interval $(-2,0)$"
          ],
          "solution": "Common difference $d=4-a$, so $\\alpha=8-a$ and $b=a+3d=12-2a$.<br>$\\tfrac1a+\\tfrac1b=\\tfrac58\\Rightarrow \\tfrac1a+\\tfrac1{12-2a}=\\tfrac58\\Rightarrow 5a^2-34a+48=0\\Rightarrow a=2$ or $a=\\tfrac{24}{5}$; since $a\\gt 2$, $a=\\tfrac{24}{5}$, $b=\\tfrac{12}{5}$, $\\alpha=\\tfrac{16}{5}$.<br>Equation: $\\tfrac{16}{5}x^2-\\tfrac{24}{5}x-\\tfrac{16}{5}=0\\Rightarrow 2x^2-3x-2=0\\Rightarrow x=2,\\,-\\tfrac12$.<br>So one root in $(1,4)$ and the other in $(-2,0)$."
    },
    // Q3 | JEE Main 28-Jan-2026 S2 (Evening) Math Q3 | Inverse trigonometric functions
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "Considering the principal values of inverse trigonometric functions, the value of the expression $\\tan\\left(2\\sin^{-1}\\left(\\dfrac{2}{\\sqrt{13}}\\right)-2\\cos^{-1}\\left(\\dfrac{3}{\\sqrt{10}}\\right)\\right)$ is equal to :",
          "options": [
                "$\\dfrac{33}{56}$",
                "$\\dfrac{16}{63}$",
                "$-\\dfrac{16}{63}$",
                "$-\\dfrac{33}{56}$"
          ],
          "solution": "Let $\\theta=\\sin^{-1}\\tfrac{2}{\\sqrt{13}}$: $\\tan\\theta=\\tfrac23$, so $\\tan2\\theta=\\dfrac{4/3}{1-4/9}=\\tfrac{12}{5}$.<br>Let $\\phi=\\cos^{-1}\\tfrac{3}{\\sqrt{10}}$: $\\tan\\phi=\\tfrac13$, so $\\tan2\\phi=\\dfrac{2/3}{1-1/9}=\\tfrac34$.<br>$\\tan(2\\theta-2\\phi)=\\dfrac{\\tfrac{12}{5}-\\tfrac34}{1+\\tfrac{12}{5}\\cdot\\tfrac34}=\\dfrac{33/20}{14/5}=\\dfrac{33}{56}$."
    },
    // Q4 | JEE Main 28-Jan-2026 S2 (Evening) Math Q4 | Ellipse latus rectum
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "An ellipse has its center at $(1,-2)$, one focus at $(3,-2)$ and one vertex at $(5,-2)$. Then the length of its latus rectum is :",
          "options": [
                "$6$",
                "$4\\sqrt3$",
                "$\\dfrac{16}{\\sqrt3}$",
                "$6\\sqrt3$"
          ],
          "solution": "$ae=3-1=2$ and $a=5-1=4$, so $b^2=a^2-(ae)^2=16-4=12$.<br>Latus rectum $=\\dfrac{2b^2}{a}=\\dfrac{24}{4}=6$."
    },
    // Q5 | JEE Main 28-Jan-2026 S2 (Evening) Math Q5 | Ellipse and hyperbola with same foci
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "Let the ellipse $E:\\dfrac{x^2}{144}+\\dfrac{y^2}{169}=1$ and the hyperbola $H:\\dfrac{x^2}{16}-\\dfrac{y^2}{\\lambda^2}=-1$ have the same foci. If $e$ and $L$ respectively denote the eccentricity and the length of the latus rectum of $H$, then the value of $24(e+L)$ is :",
          "options": [
                "$148$",
                "$126$",
                "$67$",
                "$296$"
          ],
          "solution": "Ellipse: major axis along $y$, $c^2=169-144=25$, foci $(0,\\pm5)$.<br>$H:\\dfrac{y^2}{\\lambda^2}-\\dfrac{x^2}{16}=1$ has $c^2=\\lambda^2+16=25\\Rightarrow\\lambda=3$.<br>$e=\\dfrac{5}{3}$, $L=\\dfrac{2\\cdot16}{3}=\\dfrac{32}{3}$.<br>$24(e+L)=24\\cdot\\dfrac{37}{3}=296$."
    },
    // Q6 | JEE Main 28-Jan-2026 S2 (Evening) Math Q6 | Probability distribution, mean given
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "The probability distribution of a random variable $X$ is given below :<div style='overflow-x:auto;margin:10px 0;'><table border='1' cellpadding='6' style='border-collapse:collapse;text-align:center;'><tr><td>$X$</td><td>$4k$</td><td>$\\frac{30}{7}k$</td><td>$\\frac{32}{7}k$</td><td>$\\frac{34}{7}k$</td><td>$\\frac{36}{7}k$</td><td>$\\frac{38}{7}k$</td><td>$\\frac{40}{7}k$</td><td>$6k$</td></tr><tr><td>$P(X)$</td><td>$\\frac{2}{15}$</td><td>$\\frac{1}{15}$</td><td>$\\frac{2}{15}$</td><td>$\\frac{1}{5}$</td><td>$\\frac{1}{15}$</td><td>$\\frac{2}{15}$</td><td>$\\frac{1}{5}$</td><td>$\\frac{1}{15}$</td></tr></table></div>If $E(X)=\\dfrac{263}{15}$, then $P(X\\lt 20)$ is equal to :",
          "options": [
                "$\\dfrac35$",
                "$\\dfrac{14}{15}$",
                "$\\dfrac{8}{15}$",
                "$\\dfrac{11}{15}$"
          ],
          "solution": "$E(X)=k\\left[\\tfrac{8}{15}+\\tfrac{30}{105}+\\tfrac{64}{105}+\\tfrac{34}{35}+\\tfrac{36}{105}+\\tfrac{76}{105}+\\tfrac{40}{35}+\\tfrac{6}{15}\\right]=\\tfrac{526}{105}k$.<br>$\\tfrac{526}{105}k=\\tfrac{263}{15}\\Rightarrow k=\\tfrac72$.<br>Values of $X$: $14,15,16,17,18,19,20,21$ with probabilities $\\tfrac{2}{15},\\tfrac1{15},\\tfrac2{15},\\tfrac3{15},\\tfrac1{15},\\tfrac2{15},\\tfrac3{15},\\tfrac1{15}$.<br>$P(X\\lt 20)=\\tfrac{2+1+2+3+1+2}{15}=\\tfrac{11}{15}$."
    },
    // Q7 | JEE Main 28-Jan-2026 S2 (Evening) Math Q7 | Locus of intersection of chords (circle)
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "Let the circle $x^2+y^2=4$ intersect $x$-axis at the points $A(a,0),\\ a\\gt 0$ and $B(b,0)$. Let $P(2\\cos\\alpha,2\\sin\\alpha)$, $0\\lt \\alpha\\lt \\dfrac{\\pi}{2}$ and $Q(2\\cos\\beta,2\\sin\\beta)$ be two points such that $(\\alpha-\\beta)=\\dfrac{\\pi}{2}$. Then the point of intersection of $AQ$ and $BP$ lies on :",
          "options": [
                "$x^2+y^2-4x-4y=0$",
                "$x^2+y^2-4y-4=0$",
                "$x^2+y^2-4x-4y-4=0$",
                "$x^2+y^2-4x-4=0$"
          ],
          "solution": "$A(2,0)$, $B(-2,0)$. Let $t=\\tan\\tfrac{\\alpha}{2}$. Slope of $BP=\\tan\\tfrac{\\alpha}{2}=t$; slope of $AQ=-\\cot\\tfrac{\\beta}{2}=\\dfrac{1+t}{1-t}$ (as $\\beta=\\alpha-\\tfrac{\\pi}{2}$).<br>$BP:\\ y=t(x+2)$, $AQ:\\ y=\\dfrac{1+t}{1-t}(x-2)$. Solving: $x=\\dfrac{2+4t-2t^2}{1+t^2}$, $y=\\dfrac{4t+4t^2}{1+t^2}$.<br>Then $x^2+y^2=\\dfrac{4+16t+24t^2+16t^3+20t^4}{(1+t^2)^2}=4y+4$, i.e. the point lies on $x^2+y^2-4y-4=0$."
    },
    // Q8 | JEE Main 28-Jan-2026 S2 (Evening) Math Q8 | Range of sum of Sgn functions
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "The sum of all the elements in the range of $f(x)=\\mathrm{Sgn}(\\sin x)+\\mathrm{Sgn}(\\cos x)+\\mathrm{Sgn}(\\tan x)+\\mathrm{Sgn}(\\cot x)$, $x\\neq\\dfrac{n\\pi}{2},\\ n\\in\\mathbf Z$, where $\\mathrm{Sgn}(t)=\\begin{cases}1,&t\\gt 0\\\\-1,&t\\lt 0\\end{cases}$, is :",
          "options": [
                "$2$",
                "$4$",
                "$-2$",
                "$0$"
          ],
          "solution": "I quadrant: all $+$ → $4$. II quadrant: $\\sin+,\\cos-,\\tan-,\\cot-$ → $-2$. III quadrant: $\\sin-,\\cos-,\\tan+,\\cot+$ → $0$. IV quadrant: $\\sin-,\\cos+,\\tan-,\\cot-$ → $-2$.<br>Range $=\\{4,-2,0\\}$, sum $=2$."
    },
    // Q9 | JEE Main 28-Jan-2026 S2 (Evening) Math Q9 | Series summation
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "$\\dfrac{6}{3^{26}}+\\dfrac{10\\cdot1}{3^{25}}+\\dfrac{10\\cdot2}{3^{24}}+\\dfrac{10\\cdot2^2}{3^{23}}+\\ldots+\\dfrac{10\\cdot2^{24}}{3}$ is equal to :",
          "options": [
                "$2^{25}$",
                "$2^{26}$",
                "$3^{26}$",
                "$3^{25}$"
          ],
          "solution": "The terms after the first are $\\dfrac{10\\cdot2^k}{3^{25-k}}=\\dfrac{10\\cdot6^k}{3^{25}}$ for $k=0,\\dots,24$.<br>Sum $=\\dfrac{10}{3^{25}}\\cdot\\dfrac{6^{25}-1}{5}=2^{26}-\\dfrac{2}{3^{25}}$.<br>Adding the first term $\\dfrac{6}{3^{26}}=\\dfrac{2}{3^{25}}$ gives $2^{26}$."
    },
    // Q10 | JEE Main 28-Jan-2026 S2 (Evening) Math Q10 | Vectors, point equidistant from two lines
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "Let $P$ be a point in the plane of the vectors $\\overrightarrow{AB}=3\\hat i+\\hat j-\\hat k$ and $\\overrightarrow{AC}=\\hat i-\\hat j+3\\hat k$ such that $P$ is equidistant from the lines $AB$ and $AC$. If $|\\overrightarrow{AP}|=\\dfrac{\\sqrt5}{2}$, then the area of the triangle $ABP$ is :",
          "options": [
                "$2$",
                "$\\dfrac32$",
                "$\\dfrac{\\sqrt{26}}{4}$",
                "$\\dfrac{\\sqrt{30}}{4}$"
          ],
          "solution": "$|\\overrightarrow{AB}|=|\\overrightarrow{AC}|=\\sqrt{11}$, so $P$ lies on the bisector of angle $A$ along $\\overrightarrow{AB}+\\overrightarrow{AC}=(4,0,2)$.<br>$\\overrightarrow{AP}=\\dfrac{\\sqrt5}{2}\\cdot\\dfrac{(4,0,2)}{\\sqrt{20}}=\\left(1,0,\\tfrac12\\right)$.<br>$\\overrightarrow{AB}\\times\\overrightarrow{AP}=(3,1,-1)\\times(1,0,\\tfrac12)=\\left(\\tfrac12,-\\tfrac52,-1\\right)$, magnitude $=\\dfrac{\\sqrt{30}}{2}$.<br>Area $=\\tfrac12\\cdot\\dfrac{\\sqrt{30}}{2}=\\dfrac{\\sqrt{30}}{4}$."
    },
    // Q11 | JEE Main 28-Jan-2026 S2 (Evening) Math Q11 | Limit and continuity (statements)
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "Let $f(x)=\\displaystyle\\lim_{\\theta\\to0}\\left(\\frac{\\cos\\pi x-x^{\\left(\\frac2\\theta\\right)}\\sin(x-1)}{1+x^{\\left(\\frac2\\theta\\right)}(x-1)}\\right)$, $x\\in\\mathbf R$. Consider the following two statements :<br>(I) $f(x)$ is discontinuous at $x=1$.<br>(II) $f(x)$ is continuous at $x=-1$.<br>Then,",
          "options": [
                "Only (II) is True",
                "Only (I) is True",
                "Both (I) and (II) are True",
                "Neither (I) nor (II) is True"
          ],
          "solution": "For $|x|\\lt 1$: $x^{2/\\theta}\\to0$, so $f(x)=\\cos\\pi x$. For $|x|\\gt 1$: $x^{2/\\theta}\\to\\infty$, so $f(x)=-\\dfrac{\\sin(x-1)}{x-1}$.<br>At $x=1$: $f(1)=\\dfrac{\\cos\\pi}{1}=-1$, LHL $=\\cos\\pi=-1$, RHL $=-1$ → continuous, so (I) is false.<br>At $x=-1$: $x^{2/\\theta}$ is not defined (real) for $x=-1$, so $f(-1)$ does not exist; also LHL $=\\displaystyle\\lim_{x\\to-1^-}\\left(-\\dfrac{\\sin(x-1)}{x-1}\\right)=-\\dfrac{\\sin2}{2}\\ne-1=$ RHL $(=\\cos(-\\pi))$ → discontinuous, so (II) is false."
    },
    // Q12 | JEE Main 28-Jan-2026 S2 (Evening) Math Q12 | Area between parabolas
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "Let $P_1:y=4x^2$ and $P_2:y=x^2+27$ be two parabolas. If the area of the bounded region enclosed between $P_1$ and $P_2$ is six times the area of the bounded region enclosed between the line $y=\\alpha x,\\ \\alpha\\gt 0$ and $P_1$, then $\\alpha$ is equal to :",
          "options": [
                "$6$",
                "$15$",
                "$12$",
                "$8$"
          ],
          "solution": "$4x^2=x^2+27\\Rightarrow x=\\pm3$. Area between $P_1,P_2=\\displaystyle\\int_{-3}^{3}(27-3x^2)\\,dx=108$.<br>Line and $P_1$ meet at $x=0,\\tfrac{\\alpha}{4}$: area $=\\displaystyle\\int_0^{\\alpha/4}(\\alpha x-4x^2)\\,dx=\\dfrac{\\alpha^3}{96}$.<br>$108=6\\cdot\\dfrac{\\alpha^3}{96}\\Rightarrow\\alpha^3=1728\\Rightarrow\\alpha=12$."
    },
    // Q13 | JEE Main 28-Jan-2026 S2 (Evening) Math Q13 | Linear differential equation
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "Let $y=y(x)$ be the solution of the differential equation $x\\dfrac{dy}{dx}-y=x^2\\cot x,\\ x\\in(0,\\pi)$. If $y\\left(\\dfrac\\pi2\\right)=\\dfrac\\pi2$, then $6y\\left(\\dfrac\\pi6\\right)-8y\\left(\\dfrac\\pi4\\right)$ is equal to :",
          "options": [
                "$3\\pi$",
                "$\\pi$",
                "$-3\\pi$",
                "$-\\pi$"
          ],
          "solution": "$\\dfrac{d}{dx}\\left(\\dfrac yx\\right)=\\cot x\\Rightarrow\\dfrac yx=\\ln\\sin x+C$. Using $y(\\pi/2)=\\pi/2$: $1=0+C$, so $y=x(1+\\ln\\sin x)$.<br>$6y(\\pi/6)=\\pi(1-\\ln2)$, $8y(\\pi/4)=2\\pi\\left(1-\\tfrac12\\ln2\\right)=2\\pi-\\pi\\ln2$.<br>Difference $=\\pi-\\pi\\ln2-2\\pi+\\pi\\ln2=-\\pi$."
    },
    // Q14 | JEE Main 28-Jan-2026 S2 (Evening) Math Q14 | Indefinite integral by substitution
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "Let $f(x)=\\displaystyle\\int\\frac{dx}{x^{\\left(\\frac23\\right)}+2x^{\\left(\\frac12\\right)}}$ be such that $f(0)=-26+24\\log_e(2)$. If $f(1)=a+b\\log_e(3)$, where $a,b\\in\\mathbf Z$, then $a+b$ is equal to :",
          "options": [
                "$-11$",
                "$-26$",
                "$-5$",
                "$-18$"
          ],
          "solution": "Put $x=t^6$: $\\displaystyle\\int\\frac{6t^5\\,dt}{t^4+2t^3}=6\\int\\frac{t^2}{t+2}dt=6\\int\\left(t-2+\\frac{4}{t+2}\\right)dt=3t^2-12t+24\\ln(t+2)+C$.<br>At $x=0$ ($t=0$): $24\\ln2+C=-26+24\\ln2\\Rightarrow C=-26$.<br>At $x=1$ ($t=1$): $3-12+24\\ln3-26=-35+24\\ln3$, so $a=-35,\\ b=24$ and $a+b=-11$."
    },
    // Q15 | JEE Main 28-Jan-2026 S2 (Evening) Math Q15 | Binomial, sum of coefficients
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "The sum of the coefficients of $x^{499}$ and $x^{500}$ in $(1+x)^{1000}+x(1+x)^{999}+x^2(1+x)^{998}+\\ldots+x^{1000}$ is :",
          "options": [
                "$^{1002}C_{501}$",
                "$^{1002}C_{500}$",
                "$^{1001}C_{501}$",
                "$^{1000}C_{501}$"
          ],
          "solution": "The expression is a G.P. with ratio $\\tfrac{x}{1+x}$ and 1001 terms: sum $=(1+x)^{1001}-x^{1001}$.<br>Coefficient of $x^{499}$ + coefficient of $x^{500}$ $={}^{1001}C_{499}+{}^{1001}C_{500}={}^{1002}C_{500}$."
    },
    // Q16 | JEE Main 28-Jan-2026 S2 (Evening) Math Q16 | One-one / many-one (statements)
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "Given below are two statements :<br>Statement I: The function $f:\\mathbf R\\to\\mathbf R$ defined by $f(x)=\\dfrac{x}{1+|x|}$ is one-one.<br>Statement II: The function $f:\\mathbf R\\to\\mathbf R$ defined by $f(x)=\\dfrac{x^2+4x-30}{x^2-8x+18}$ is many-one.<br>In the light of the above statements, choose the correct answer from the options given below :",
          "options": [
                "Statement I is true but Statement II is false",
                "Statement I is false but Statement II is true",
                "Both Statement I and Statement II are true",
                "Both Statement I and Statement II are false"
          ],
          "solution": "I: $f'(x)=\\dfrac{1}{(1+|x|)^2}\\gt 0$, so $f$ is strictly increasing, hence one-one. True.<br>II: $f(0)=\\dfrac{-30}{18}=-\\dfrac53$ and $f\\left(\\tfrac72\\right)=\\dfrac{12.25+14-30}{12.25-28+18}=\\dfrac{-3.75}{2.25}=-\\dfrac53$. Two different inputs give the same value, so $f$ is many-one. True."
    },
    // Q17 | JEE Main 28-Jan-2026 S2 (Evening) Math Q17 | Complex numbers, maximum distance
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "Let $A=\\{z\\in\\mathbb C:|z-2|\\le4\\}$ and $B=\\{z\\in\\mathbb C:|z-2|+|z+2|=5\\}$. Then the maximum of $\\{|z_1-z_2|:z_1\\in A\\text{ and }z_2\\in B\\}$ is :",
          "options": [
                "$\\dfrac{15}{2}$",
                "$\\dfrac{17}{2}$",
                "$8$",
                "$9$"
          ],
          "solution": "$A$ is the disc with centre $2$ and radius $4$. $B$ is an ellipse with foci $\\pm2$ and $2a=5$ (semi-major axis $\\tfrac52$).<br>For $z_2\\in B$, the farthest point of $A$ is at distance $|z_2-2|+4$.<br>The largest $|z_2-2|$ on the ellipse is $a+c=\\tfrac52+2=\\tfrac92$ (at $z_2=-\\tfrac52$).<br>Maximum $=\\tfrac92+4=\\tfrac{17}{2}$."
    },
    // Q18 | JEE Main 28-Jan-2026 S2 (Evening) Math Q18 | Parabola, centroid of triangle
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 2,
          "text": "Let $A$ be the focus of the parabola $y^2=8x$. Let the line $y=mx+c$ intersect the parabola at two distinct points $B$ and $C$. If the centroid of the triangle $ABC$ is $\\left(\\dfrac73,\\dfrac43\\right)$, then $(BC)^2$ is equal to :",
          "options": [
                "$32$",
                "$41$",
                "$80$",
                "$89$"
          ],
          "solution": "$A=(2,0)$. Centroid: $x_B+x_C+2=7\\Rightarrow x_B+x_C=5$; $y_B+y_C=4$.<br>$y_B^2-y_C^2=8(x_B-x_C)\\Rightarrow y_B+y_C=\\dfrac8m\\Rightarrow m=2$.<br>Midpoint $\\left(\\tfrac52,2\\right)$ lies on the line: $2=5+c\\Rightarrow c=-3$.<br>$(2x-3)^2=8x\\Rightarrow4x^2-20x+9=0$: $(x_B-x_C)^2=25-9=16$.<br>$BC^2=(1+m^2)(x_B-x_C)^2=5\\cdot16=80$."
    },
    // Q19 | JEE Main 28-Jan-2026 S2 (Evening) Math Q19 | 3D, image of a point in a line
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 1,
          "text": "Let $Q(a,b,c)$ be the image of the point $P(3,2,1)$ in the line $\\dfrac{x-1}{1}=\\dfrac{y}{2}=\\dfrac{z-1}{1}$. Then the distance of $Q$ from the line $\\dfrac{x-9}{3}=\\dfrac{y-9}{2}=\\dfrac{z-5}{-2}$ is :",
          "options": [
                "$6$",
                "$7$",
                "$8$",
                "$5$"
          ],
          "solution": "Foot of perpendicular from $P$: take $(1+t,2t,1+t)$; $\\overrightarrow{PF}\\cdot(1,2,1)=0\\Rightarrow(t-2)+2(2t-2)+t=0\\Rightarrow t=1$, so $F=(2,2,2)$ and $Q=2F-P=(1,2,3)$.<br>Distance of $Q$ from the second line (point $(9,9,5)$, direction $(3,2,-2)$): $\\overrightarrow{M Q}=(-8,-7,-2)$.<br>$\\overrightarrow{MQ}\\times(3,2,-2)=(18,-22,5)$, magnitude $=\\sqrt{833}$, $|d|=\\sqrt{17}$.<br>Distance $=\\dfrac{\\sqrt{833}}{\\sqrt{17}}=7$."
    },
    // Q20 | JEE Main 28-Jan-2026 S2 (Evening) Math Q20 | Divisibility and integral part (statements)
    {
          "type": "mcq",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 3,
          "text": "Given below are two statements :<br><b>Statement I:</b> $25^{13}+20^{13}+8^{13}+3^{13}$ is divisible by $7$.<br><b>Statement II:</b> The integral part of $(7+4\\sqrt3)^{25}$ is an odd number.<br>In the light of the above statements, choose the correct answer from the options given below :",
          "options": [
                "Both Statement I and Statement II are false",
                "Statement I is false but Statement II is true",
                "Statement I is true but Statement II is false",
                "Both Statement I and Statement II are true"
          ],
          "solution": "I: mod $7$: $25\\equiv4,\\ 20\\equiv6,\\ 8\\equiv1,\\ 3\\equiv3$. $4^{13}\\equiv4$ (as $4^3\\equiv1$), $6^{13}\\equiv6$, $1$, $3^{13}\\equiv3$ (as $3^6\\equiv1$). Sum $\\equiv4+6+1+3=14\\equiv0$. True.<br>II: Let $N=(7+4\\sqrt3)^{25}+(7-4\\sqrt3)^{25}$, an even integer (twice a sum of integer terms). Since $0\\lt (7-4\\sqrt3)^{25}\\lt 1$, the integral part of $(7+4\\sqrt3)^{25}$ is $N-1$, which is odd. True."
    },
    // Q21 | JEE Main 28-Jan-2026 S2 (Evening) Math Q21 | Permutations (lift)
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 210,
          "text": "<div class='section-instruction'><h3>SECTION - B (Maximum Marks: 20)</h3><ul><li>This section contains <b>5 numerical value type questions</b>. The answer to each question is a numerical value (enter the value only).</li></ul><div class='marking-box'>Correct answer: +4 &nbsp;|&nbsp; Incorrect answer: &minus;1 &nbsp;|&nbsp; Unattempted: 0</div></div>Three persons enter in a lift at the ground floor. The lift will go up to $10^{\\text{th}}$ floor. The number of ways, in which the three persons can exit the lift at three different floors, if the lift does not stop at first, second and third floors, is equal to _______.",
          "solution": "The available floors are $4,5,\\ldots,10$, i.e. $7$ floors. Three persons exit at three different floors: ${}^7P_3=7\\cdot6\\cdot5=210$."
    },
    // Q22 | JEE Main 28-Jan-2026 S2 (Evening) Math Q22 | Integral equation, local extrema
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 9,
          "text": "Let $f$ be a differentiable function satisfying $f(x)=1-2x+\\displaystyle\\int_0^x e^{(x-t)}f(t)\\,dt,\\ x\\in\\mathbf R$ and let $g(x)=\\displaystyle\\int_0^x(f(t)+2)^{15}(t-4)^6(t+12)^{17}\\,dt,\\ x\\in\\mathbf R$. If $p$ and $q$ are respectively the points of local minima and local maxima of $g$, then the value of $|p+q|$ is equal to ____ .",
          "solution": "Write $f(x)=1-2x+e^x\\int_0^xe^{-t}f(t)dt$. Differentiating: $f'=2f+2x-3$, with $f(0)=1$. Solution: $f(x)=1-x$.<br>$g'(x)=(3-x)^{15}(x-4)^6(x+12)^{17}$. Sign: negative for $x\\lt -12$, positive on $(-12,3)$, negative for $x\\gt 3$ (the factor $(x-4)^6$ does not change sign).<br>Local minimum at $p=-12$, local maximum at $q=3$. $|p+q|=|-12+3|=9$."
    },
    // Q23 | JEE Main 28-Jan-2026 S2 (Evening) Math Q23 | Matrix power
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 0,
          "text": "Let $A=\\begin{bmatrix}3&-4\\\\1&-1\\end{bmatrix}$ and $B$ be two matrices such that $A^{100}=100B+I$. Then the sum of all the elements of $B^{100}$ is ____ .",
          "solution": "$A=I+N$ with $N=\\begin{bmatrix}2&-4\\\\1&-2\\end{bmatrix}$ and $N^2=O$. So $A^{100}=I+100N$, giving $B=N$.<br>$B^{100}=N^{100}=O$, so the sum of all elements is $0$."
    },
    // Q24 | JEE Main 28-Jan-2026 S2 (Evening) Math Q24 | 3D, distance along a direction
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 170,
          "text": "If the distance of the point $P(43,\\alpha,\\beta),\\ \\beta\\lt 0$, from the line $\\vec r=4\\hat i-\\hat k+\\mu(2\\hat i+3\\hat k),\\ \\mu\\in\\mathbf R$ along a line with direction ratios $3,-1,0$ is $13\\sqrt{10}$, then $\\alpha^2+\\beta^2$ is equal to ____ .",
          "solution": "Point on the given line: $(4+2\\mu,\\,0,\\,-1+3\\mu)$. Move from $P$ along $(3,-1,0)$ by parameter $s$ with $|s|\\sqrt{10}=13\\sqrt{10}$, so $s=\\pm13$: $(43+3s,\\ \\alpha-s,\\ \\beta)$.<br>$y=0\\Rightarrow\\alpha=s$. $s=13$: $x=82\\Rightarrow\\mu=39\\Rightarrow\\beta=116\\gt 0$ (rejected). $s=-13$: $x=4\\Rightarrow\\mu=0\\Rightarrow\\beta=-1$ (valid), $\\alpha=-13$.<br>$\\alpha^2+\\beta^2=169+1=170$."
    },
    // Q25 | JEE Main 28-Jan-2026 S2 (Evening) Math Q25 | Telescoping series
    {
          "type": "numerical",
          "marks": 4,
          "negativeMarks": -1,
          "correctAnswer": 976,
          "text": "If $\\displaystyle\\sum_{r=1}^{25}\\left(\\frac{r}{r^4+r^2+1}\\right)=\\frac pq$, where $p$ and $q$ are positive integers such that $\\gcd(p,q)=1$, then $p+q$ is equal to ____ .",
          "solution": "$r^4+r^2+1=(r^2-r+1)(r^2+r+1)$, so $\\dfrac{r}{r^4+r^2+1}=\\dfrac12\\left[\\dfrac1{r^2-r+1}-\\dfrac1{r^2+r+1}\\right]$.<br>The sum telescopes: $\\dfrac12\\left[1-\\dfrac1{651}\\right]=\\dfrac12\\cdot\\dfrac{650}{651}=\\dfrac{325}{651}$ (coprime, $651=3\\cdot7\\cdot31$).<br>$p+q=325+651=976$."
    }
  ]
};