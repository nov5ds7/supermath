window.testBank = window.testBank || {};
window.testBank['test_818'] = {
    title: "MCT-12 (22-10-2026) Pre-Test",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-10-19T12:30:00Z",
    timeLimitMins: 80,
    examPattern: "main",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // ================= SECTION I : SINGLE CORRECT (20 questions) =================
        // ---------- Complex Numbers ----------
        // 1
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<div class='section-instruction'><h3>SECTION - I</h3><b>Single Correct Answer Type</b><br><br>This section contains <b>20</b> questions. Each question has <b>4</b> options (1), (2), (3) and (4) for its answer, out of which <b>ONLY ONE</b> option can be correct.<br><br><b>Marking scheme:</b><ul><li><b>Full Marks:</b> +4 for correct answer</li><li><b>Zero Marks:</b> 0 if not attempted</li><li><b>Negative Marks:</b> -1 if not correct</li></ul></div><br>If $P$ and $Q$ are represented by complex numbers $z_1$ and $z_2$ such that $\\left|\\frac{1}{z_1} + \\frac{1}{z_2}\\right| = \\left|\\frac{1}{z_1} - \\frac{1}{z_2}\\right|$ then the circumcentre of $\\triangle OPQ$ ($O$ is origin) is",
            "options": [
                "$\\frac{z_1 - z_2}{2}$",
                "$\\frac{z_1 + z_2}{2}$",
                "$\\frac{z_1 + z_2}{3}$",
                "$z_1 + z_2$"
            ],
            "solution": "$\\left|\\frac{1}{z_1} + \\frac{1}{z_2}\\right| = \\left|\\frac{1}{z_1} - \\frac{1}{z_2}\\right| \\Rightarrow \\frac{|z_1 + z_2|}{|z_1 z_2|} = \\frac{|z_2 - z_1|}{|z_1 z_2|} \\Rightarrow |z_1 + z_2| = |z_2 - z_1|$.<br>Complete the parallelogram $OPRQ$, where $R$ represents $z_1 + z_2$. Then $OR = PQ$, i.e. the diagonals are equal, so $OPRQ$ is a rectangle and $\\angle POQ = 90^\\circ$.<br>The circumcentre of a right-angled triangle is the midpoint of its hypotenuse $PQ$, which is $\\frac{z_1 + z_2}{2}$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If $z_1, z_2, z_3$ are distinct complex numbers such that $\\frac{3}{|z_2 - z_3|} = \\frac{4}{|z_3 - z_1|} = \\frac{5}{|z_1 - z_2|}$, then the value of $\\frac{9}{z_2 - z_3} + \\frac{16}{z_3 - z_1} + \\frac{25}{z_1 - z_2}$ equals",
            "options": [
                "0",
                "3",
                "4",
                "5"
            ],
            "solution": "Let the common value of the three ratios be $\\lambda$. Then $|z_2 - z_3| = \\frac{3}{\\lambda}$, so $(z_2 - z_3)(\\bar{z}_2 - \\bar{z}_3) = \\frac{9}{\\lambda^2}$, which gives $\\frac{9}{z_2 - z_3} = \\lambda^2(\\bar{z}_2 - \\bar{z}_3)$.<br>Similarly, $\\frac{16}{z_3 - z_1} = \\lambda^2(\\bar{z}_3 - \\bar{z}_1)$ and $\\frac{25}{z_1 - z_2} = \\lambda^2(\\bar{z}_1 - \\bar{z}_2)$.<br>Adding: expression $= \\lambda^2\\left[(\\bar{z}_2 - \\bar{z}_3) + (\\bar{z}_3 - \\bar{z}_1) + (\\bar{z}_1 - \\bar{z}_2)\\right] = 0$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The locus of complex number $z = x + iy$ where $i = \\sqrt{-1}$ satisfying relation $\\arg(z - a) = \\frac{\\pi}{4}$ where $a \\in R$ is",
            "options": [
                "$x^2 - y^2 = a^2$",
                "$x^2 + y^2 = a^2$",
                "$x + y = a, y > 0$",
                "$x - y = a, y > 0$"
            ],
            "solution": "$z - a = (x - a) + iy$ and $\\arg(z - a) = \\frac{\\pi}{4}$.<br>$\\tan^{-1}\\left(\\frac{y}{x - a}\\right) = \\frac{\\pi}{4} \\Rightarrow y = x - a$, with $x - a > 0$ and $y > 0$.<br>So the locus is $x - y = a,\\ y > 0$ (a ray)."
        },
        // 4
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Let $\\bar{z}$ be complex conjugate of $z$ and $k \\in R$, then the curve represented by $\\text{Re}(\\bar{z}^2) = k^2$ can be a parabola, ellipse, hyperbola or a pair of straight lines. How many of these curves are possible ?",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "solution": "Let $z = x + iy$. Then $\\bar{z}^2 = (x - iy)^2 = x^2 - y^2 - 2ixy$, so $\\text{Re}(\\bar{z}^2) = x^2 - y^2$.<br>The curve is $x^2 - y^2 = k^2$.<br>For $k = 0$: $y = \\pm x$, a pair of straight lines. For $k \\neq 0$: a hyperbola.<br>A parabola or an ellipse is not possible, so exactly 2 curves are possible."
        },
        // 5
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "If $x^2 - x + 1 = 0$, then $\\displaystyle\\sum_{n=1}^{5} \\left(x^n + \\frac{1}{x^n}\\right)^2 =$",
            "options": [
                "8",
                "5",
                "12",
                "20"
            ],
            "solution": "$x^2 - x + 1 = 0 \\Rightarrow x = -\\omega$ or $-\\omega^2$, and $x + \\frac{1}{x} = 1$, $x^3 = -1$.<br>$n=1$: $\\left(x + \\frac{1}{x}\\right)^2 = 1$.<br>$n=2$: $x^2 + \\frac{1}{x^2} = 1 - 2 = -1$, square $= 1$.<br>$n=3$: $x^3 + \\frac{1}{x^3} = -1 - 1 = -2$, square $= 4$.<br>$n=4$: $x^4 + \\frac{1}{x^4} = -\\left(x + \\frac{1}{x}\\right) = -1$, square $= 1$.<br>$n=5$: $x^5 + \\frac{1}{x^5} = -\\left(x^2 + \\frac{1}{x^2}\\right) = 1$, square $= 1$.<br>Sum $= 1 + 1 + 4 + 1 + 1 = 8$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The real part of $(\\sin x + i\\cos x)^5$, where $i = \\sqrt{-1}$ is",
            "options": [
                "$-\\cos 5x$",
                "$-\\sin 5x$",
                "$\\cos 5x$",
                "$\\sin 5x$"
            ],
            "solution": "$\\sin x + i\\cos x = i(\\cos x - i\\sin x)$.<br>$(\\sin x + i\\cos x)^5 = i^5(\\cos x - i\\sin x)^5 = i(\\cos 5x - i\\sin 5x) = \\sin 5x + i\\cos 5x$.<br>Real part $= \\sin 5x$."
        },
        // 7
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "If $z_1, z_2$ and $z_3, z_4$ are two pairs of complex conjugate numbers, then $\\arg\\left(\\frac{z_1}{z_4}\\right) + \\arg\\left(\\frac{z_2}{z_3}\\right)$ can be",
            "options": [
                "$\\pi$",
                "$\\frac{\\pi}{2}$",
                "$\\frac{3\\pi}{2}$",
                "$0$"
            ],
            "solution": "Since $z_2 = \\bar{z}_1$ and $z_3 = \\bar{z}_4$, we get $\\frac{z_2}{z_3} = \\frac{\\bar{z}_1}{\\bar{z}_4} = \\overline{\\left(\\frac{z_1}{z_4}\\right)}$.<br>So the required sum is $\\arg(w) + \\arg(\\bar{w})$ where $w = \\frac{z_1}{z_4}$, which equals $0 + 2n\\pi$.<br>Among the options, it can be $0$."
        },
        // ---------- Permutations & Combinations ----------
        // 8
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Three straight lines $\\ell_1, \\ell_2, \\ell_3$ are parallel and lie in the same plane. 5 points are taken on $\\ell_1$, 6 points are taken on line $\\ell_2$ and 7 on line $\\ell_3$. What is the maximum number of triangles formed with the vertices at these points ?",
            "options": [
                "620",
                "746",
                "751",
                "781"
            ],
            "solution": "A triangle is formed in two types of cases.<br>Case I: two points on one line and one point on another line:<br>$^5C_2(6 + 7) + {}^6C_2(5 + 7) + {}^7C_2(5 + 6) = 130 + 180 + 231 = 541$.<br>Case II: one point on each line: $5 \\times 6 \\times 7 = 210$.<br>Total $= 541 + 210 = 751$."
        },
        // 9
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "In a group of 8 boys, two boys are brothers. In how many ways these 8 boys can sit so that the brothers are not to sit along with each other ?",
            "options": [
                "$2(6!)$",
                "$^7P_2 \\times 6!$",
                "$^7C_2 \\times 6!$",
                "$6!$"
            ],
            "solution": "First arrange the other 6 boys: $6!$ ways.<br>These 6 boys create 7 gaps (between them and at both ends). The 2 brothers must go into 2 different gaps: $^7P_2$ ways.<br>Total $= {}^7P_2 \\times 6!$."
        },
        // 10
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Consider arrangement of letters $AABBBCDE$. Then the number of words in which all $B$'s are together is",
            "options": [
                "720",
                "360",
                "120",
                "960"
            ],
            "solution": "Treat $BBB$ as a single block. Now we arrange 6 objects: $A, A, [BBB], C, D, E$, in which $A$ repeats twice.<br>Number of arrangements $= \\frac{6!}{2!} = 360$."
        },
        // 11
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $b_1b_2b_3b_4$ be a 4-element permutation with $b_i \\in \\{1, 2, 3, \\ldots, 100\\}$ for $1 \\le i \\le 4$ and $b_i \\neq b_j$ for $i \\neq j$ such that either $b_1, b_2, b_3$ are consecutive integers or $b_2, b_3, b_4$ are consecutive integers (in increasing order). Then the number of such permutations $b_1b_2b_3b_4$ is $k$, then $k/5$ is equal to",
            "options": [
                "3783",
                "7843",
                "8743",
                "4738"
            ],
            "solution": "There are 98 sets of 3 consecutive integers $(m, m+1, m+2)$ and 97 sets of 4 consecutive integers.<br>Case 1: $b_1, b_2, b_3$ consecutive: 98 ways, and $b_4$ can be any of the remaining 97 numbers, giving $98 \\times 97$ permutations.<br>Case 2: $b_2, b_3, b_4$ consecutive: similarly $98 \\times 97$ permutations.<br>Both together means $b_1, b_2, b_3, b_4$ are 4 consecutive integers: 97 permutations.<br>$k = 98 \\times 97 + 98 \\times 97 - 97 = 97 \\times 195 = 18915$.<br>$\\frac{k}{5} = 3783$."
        },
        // ---------- Probability ----------
        // 12
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If the letters of the word 'ATTEMPT' are written down at random then the probability that all the T's are consecutive is",
            "options": [
                "$\\frac{1}{42}$",
                "$\\frac{6}{7}$",
                "$\\frac{1}{7}$",
                "$\\frac{1}{6}$"
            ],
            "solution": "Total arrangements of $T, T, T, A, E, M, P$ $= \\frac{7!}{3!} = 840$.<br>When all three T's are together, treat them as one block: arrangements of 5 objects $= 5! = 120$.<br>Required probability $= \\frac{5!}{7!/3!} = \\frac{120}{840} = \\frac{1}{7}$."
        },
        // 13
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "A fair coin is tossed a fixed number of times. If the probability of getting seven heads is equal to that of getting nine heads then the probability of getting two heads is",
            "options": [
                "$\\frac{15}{2^8}$",
                "$\\frac{2}{15}$",
                "$\\frac{15}{2^{13}}$",
                "$\\frac{2}{31}$"
            ],
            "solution": "Let $n$ be the number of tosses. $^nC_7 \\left(\\frac{1}{2}\\right)^n = {}^nC_9 \\left(\\frac{1}{2}\\right)^n \\Rightarrow n = 7 + 9 = 16$.<br>Required probability $= {}^{16}C_2 \\left(\\frac{1}{2}\\right)^{16} = \\frac{120}{2^{16}} = \\frac{15}{2^{13}}$."
        },
        // 14
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "In four throws of a fair die, what is the probability of getting a score of more than 4 at least once ?",
            "options": [
                "$\\frac{65}{81}$",
                "$\\frac{80}{81}$",
                "$\\frac{7}{9}$",
                "$\\frac{4}{7}$"
            ],
            "solution": "Probability of a score more than 4 (i.e. 5 or 6) in one throw $= \\frac{2}{6} = \\frac{1}{3}$, so the probability of not getting it is $\\frac{2}{3}$.<br>Required probability $= 1 - \\left(\\frac{2}{3}\\right)^4 = 1 - \\frac{16}{81} = \\frac{65}{81}$."
        },
        // 15
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "The solution of differential equation $2x^{3}y dy + (1-y^{2})(x^{2}y^{2} + y^{2} - 1)dx = 0$ is:",
            "options": [
                "$x^{2}y^{2} = (cx + 1)(1 - y^{2})$",
                "$x^{2}y^{2} = (cx + 1)(1 + y^{2})$",
                "$x^{2}y^{2} = (cx - 1)(1 - y^{2})$",
                "none of these"
            ],
            "solution": "$2x^3y dy + (1-y^2)(x^2y^2+y^2-1)dx = 0$<br>$\\frac{2y}{(1-y^2)^2}\\frac{dy}{dx} + \\frac{y^2}{1-y^2}\\frac{1}{x} = \\frac{1}{x^3}$<br>Put $\\frac{y^2}{1-y^2} = u \\implies \\frac{2y}{(1-y^2)^2}\\frac{dy}{dx} = \\frac{du}{dx}$<br>$\\frac{du}{dx} + \\frac{u}{x} = \\frac{1}{x^3}$<br>IF $= e^{\\int \\frac{1}{x}dx} = x$<br>$ux = \\int x \\cdot \\frac{1}{x^3}dx = \\int \\frac{1}{x^2}dx = -\\frac{1}{x} + c$<br>$u = -\\frac{1}{x^2} + \\frac{c}{x} = \\frac{cx-1}{x^2}$<br>$\\frac{y^2}{1-y^2} = \\frac{cx-1}{x^2} \\implies x^2y^2 = (cx-1)(1-y^2)$"
        },
        // 16
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "A solution of the differential equation $\\left(\\frac{dy}{dx}\\right)^2 - \\frac{dy}{dx}(e^x + e^{-x}) + 1 = 0$ is given by",
            "options": [
                "$y + e^{-x} = C$",
                "$y - e^{-x} = C$",
                "$y + e^x = C$",
                "$y - e^{2x} = C$"
            ],
            "solution": "The equation is quadratic in $\\frac{dy}{dx}$. Discriminant $= (e^x + e^{-x})^2 - 4 = (e^x - e^{-x})^2$.<br>$\\frac{dy}{dx} = \\frac{(e^x + e^{-x}) \\pm (e^x - e^{-x})}{2} = e^x$ or $e^{-x}$.<br>For $\\frac{dy}{dx} = e^{-x}$, $y = -e^{-x} + C \\implies y + e^{-x} = C$."
        },
        // 17
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "In a certain college, 25% of the students failed mathematics 15% failed chemistry and 10% failed both mathematics and chemistry. A student is selected at random. If the student failed chemistry then find probability that the student failed mathematics also.",
            "options": [
                "$\\frac{2}{9}$",
                "$\\frac{2}{3}$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{9}$"
            ],
            "solution": "$P(M)=0.25$, $P(C)=0.15$, $P(M \\cap C)=0.10$. $P(M|C) = \\frac{P(M \\cap C)}{P(C)} = \\frac{0.10}{0.15} = \\frac{2}{3}$."
        },
        // 18
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "3 different numbers are selected at random from the set $A = \\{1,2,3,.....,10\\}$. Then the probability that the product of two numbers equal to the third is $p/q$, where p & q are relatively prime positive integers, then the value of $(p + q)$ is",
            "options": [
                "39",
                "40",
                "41",
                "42"
            ],
            "solution": "Total ways = $^{10}C_3 = 120$.<br>Favorable triples: {2,3,6}, {2,4,8}, {2,5,10}. Total = 3.<br>Probability = $\\frac{3}{120} = \\frac{1}{40}$. So $p=1, q=40$, $p+q=41$."
        },
        // 19
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Boxes numbered 1, 2, 3, 4 and 5 are kept in a row, and they are necessarily to be filled with either a red or a blue ball, such that no two adjacent boxes can be filled with blue balls. Then how many different arrangements are possible, given that the balls of a given colour are exactly identical in all respects?",
            "options": ["8", "10", "13", "22"],
            "correctAnswer": 2,
            "solution": "Let the number of ways to fill $n$ boxes with no two blue balls adjacent be $f(n) = f(n-1) + f(n-2)$. $f(1) = 2, f(2) = 3 \\implies f(3) = 5, f(4) = 8, f(5) = 13$."
        }, 
        // 20
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Total number of ways of selecting two distinct numbers from the set {1,2,3,...,90} so that their sum is divisible by 3, is",
            "options": ["885", "1335", "1770", "3670"],
            "solution": "$S_1 = \\{1,4,7,\\dots,88\\}$ (30 numbers)<br>$S_2 = \\{2,5,8,\\dots,89\\}$ (30 numbers)<br>$S_3 = \\{3,6,9,\\dots,90\\}$ (30 numbers)<br>Both from $S_3$ or one from $S_1$ and one from $S_2$: $^{30}C_1 \\cdot ^{30}C_1 + ^{30}C_2 = 900 + 435 = 1335$."
        },               



        // >>>>>>>>>> ADD THE 6 REMAINING SINGLE-CORRECT QUESTIONS HERE (to make 20) <<<<<<<<<<

        // ================= SECTION II : NUMERICAL / INTEGER (5 questions) =================
        // 21
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<div class='section-instruction'><h3>SECTION - II (Maximum Marks: 20)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>5</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>. Enter the correct numerical value of the answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct numerical value is entered.</li><li><b>Zero Marks :</b> 0 If not attempted.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>Find the number of complex numbers satisfying the equation $z^3 = \\bar{z}$ and $\\arg(z + 1) = \\frac{\\pi}{4}$ simultaneously.",
            "solution": "$z^3 = \\bar{z} \\Rightarrow |z|^3 = |z| \\Rightarrow |z| = 0$ or $1$.<br>$z = 0$ gives $\\arg(1) = 0 \\neq \\frac{\\pi}{4}$, so it is rejected.<br>For $|z| = 1$, $\\bar{z} = \\frac{1}{z}$, so $z^4 = 1 \\Rightarrow z = 1, -1, i, -i$.<br>Check $\\arg(z+1)$: $z = 1$ gives $0$; $z = -1$ gives $z + 1 = 0$ (undefined); $z = -i$ gives $-\\frac{\\pi}{4}$; $z = i$ gives $\\arg(1 + i) = \\frac{\\pi}{4}$.<br>Only $z = i$ satisfies both conditions, so the number of complex numbers is 1."
        },
        // 22
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 8,
            "text": "Let $z$ and $w$ be non-zero complex numbers such that $zw = |z|^2$ and $|z - \\bar{z}| + |w + \\bar{w}| = 4$. If $w$ varies, then find the area enclosed by the locus of $z$.",
            "solution": "$zw = |z|^2 \\Rightarrow |z||w| = |z|^2 \\Rightarrow |w| = |z|$.<br>Also $zw = z\\bar{z}$ gives $w = \\bar{z}$. (Equivalently, if $z = re^{i\\theta}$ then $w = re^{-i\\theta} = \\bar{z}$.)<br>Let $z = x + iy$. Then $|z - \\bar{z}| = 2|y|$ and $|w + \\bar{w}| = |\\bar{z} + z| = 2|x|$.<br>$2|y| + 2|x| = 4 \\Rightarrow |x| + |y| = 2$.<br>This is a square with diagonals of length 4, so its area $= \\frac{4^2}{2} = 8$."
        },
        // 23
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Find the number of zeros at the end of $^{100}C_{30}$.",
            "solution": "Exponent of 5 in $30! = 6 + 1 = 7$.<br>Exponent of 5 in $70! = 14 + 2 = 16$.<br>Exponent of 5 in $100! = 20 + 4 = 24$.<br>Exponent of 5 in $^{100}C_{30} = \\frac{100!}{30!\\,70!}$ is $24 - 7 - 16 = 1$.<br>Exponent of 2 in $^{100}C_{30}$ is $97 - 26 - 67 = 4$.<br>Number of zeros at the end $= \\min(4, 1) = 1$."
        },
        // 24
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 17,
            "text": "If $\\frac{dy}{dx} + \\frac{2023y}{x(x^{2023} + 1)} = \\frac{(x^{2023} + 1)^2}{x^{2025}}$ and $1011\\,y(1) = -2021$ and the solution of the equation is of the form $\\frac{x^n}{n} - \\frac{1}{x}\\left(1 - \\frac{1}{n}\\right) - \\frac{1}{x^{n+2}}$ where $n \\in N$, then the largest positive prime factor of $n + 1$ is",
            "solution": "Integrating factor: $\\int \\frac{2023}{x(x^{2023} + 1)}dx$. Put $t = x^{2023}$, so $\\frac{2023\\,dx}{x} = \\frac{dt}{t}$ and the integral is $\\int \\frac{dt}{t(t+1)} = \\ln\\frac{t}{t+1}$. Hence IF $= \\frac{x^{2023}}{x^{2023} + 1}$.<br>$y \\cdot \\frac{x^{2023}}{x^{2023}+1} = \\int \\frac{x^{2023}}{x^{2023}+1} \\cdot \\frac{(x^{2023}+1)^2}{x^{2025}}dx + c = \\int \\left(x^{2021} + x^{-2}\\right)dx + c = \\frac{x^{2022}}{2022} - \\frac{1}{x} + c$.<br>So $y = \\frac{x^{2023}+1}{x^{2023}}\\left(\\frac{x^{2022}}{2022} - \\frac{1}{x} + c\\right)$.<br>At $x = 1$: $y(1) = -\\frac{2021}{1011}$ gives $2\\left(\\frac{1}{2022} - 1 + c\\right) = -\\frac{2021}{1011}$, so $c = 0$.<br>Then $y = \\frac{x^{2022}}{2022} - \\frac{1}{x}\\left(1 - \\frac{1}{2022}\\right) - \\frac{1}{x^{2024}}$. Comparing with the given form, $n = 2022$.<br>$n + 1 = 2023 = 7 \\times 17^2$, so the largest prime factor is 17."
        },
        // 25
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 12,
            "text": "Solution of differential equation $\\sin y \\cdot \\frac{dy}{dx} + \\frac{1}{x}\\cos y = x^4\\cos^2 y$ is $\\alpha x \\sec y = x^{\\beta} + C$. Find $\\alpha + \\beta =$",
            "solution": "Divide by $\\cos^2 y$: $\\frac{\\sin y}{\\cos^2 y}\\frac{dy}{dx} + \\frac{1}{x\\cos y} = x^4$.<br>Let $\\sec y = t$, then $\\sec y \\tan y \\frac{dy}{dx} = \\frac{dt}{dx} \\implies \\frac{\\sin y}{\\cos^2 y}\\frac{dy}{dx} = \\frac{dt}{dx}$.<br>The equation becomes $\\frac{dt}{dx} + \\frac{1}{x}t = x^4$. IF $= x$.<br>$t \\cdot x = \\int x^5 dx = \\frac{x^6}{6} + C \\implies x\\sec y = \\frac{x^6}{6} + C$.<br>Multiply by 6: $6x\\sec y = x^6 + 6C$. So $\\alpha = 6, \\beta = 6$. $\\alpha + \\beta = 12$."
        }


        // >>>>>>>>>> ADD THE 1 REMAINING NUMERICAL QUESTION HERE (to make 5). Put a comma after the previous question's closing brace. <<<<<<<<<<
    ]
};

