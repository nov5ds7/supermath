window.testBank = window.testBank || {};
window.testBank['test_819'] = {
    title: "Pre-ACT-03(24.10.2026)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-10-20T00:30:00Z",
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
        // 1 | SECTION I - Q1 | Matrices and Determinants
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 1,
            "text": "<div class='section-instruction'><h3>SECTION - I (Maximum Marks: 16)</h3><b>Single Correct Answer Type (Matrix Match)</b><br><br>This section contains <b>FOUR (04)</b> questions. Each question has two lists: <b>List-I</b> (I, II, III, IV) and <b>List-II</b> (P, Q, R, S). Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>Let $S$ be the set of all $3 \\times 3$ matrices, each of whose entries is either $0$ or $1$. Match the items in List-I with those in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) The number of matrices $M \\in S$ with $\\det M \\neq 0$</td><td style='border: 1px solid black; text-align: center;'>(P) 1</td></tr><tr><td style='border: 1px solid black;'>(II) The number of symmetric matrices in $S$</td><td style='border: 1px solid black; text-align: center;'>(Q) 3</td></tr><tr><td style='border: 1px solid black;'>(III) The number of skew-symmetric matrices in $S$</td><td style='border: 1px solid black; text-align: center;'>(R) 64</td></tr><tr><td style='border: 1px solid black;'>(IV) The number of matrices $M \\in S$ with $\\det M = 2$</td><td style='border: 1px solid black; text-align: center;'>(S) 174</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (R), (II) &rarr; (S), (III) &rarr; (P), (IV) &rarr; (Q)",
                        "(I) &rarr; (S), (II) &rarr; (R), (III) &rarr; (P), (IV) &rarr; (Q)",
                        "(I) &rarr; (S), (II) &rarr; (R), (III) &rarr; (Q), (IV) &rarr; (P)",
                        "(I) &rarr; (P), (II) &rarr; (R), (III) &rarr; (S), (IV) &rarr; (Q)"
            ],
            "solution": "(I) The determinant of a $0$-$1$ matrix of order 3 takes only the values $0, \\pm1, \\pm2$. Enumerating all $2^9 = 512$ matrices gives $\\det = 0$ for 338 matrices, $\\det = \\pm 1$ for 84 matrices each and $\\det = \\pm 2$ for 3 matrices each. So $\\det M \\neq 0$ for $84+84+3+3 = 174$ matrices $\\to$ (S).<br>(II) A symmetric matrix is fixed by its 6 entries on and above the diagonal: $2^6 = 64$ $\\to$ (R).<br>(III) $a_{ij} = -a_{ji}$ with entries in $\\{0,1\\}$ forces every entry to be 0, so only the zero matrix: 1 $\\to$ (P).<br>(IV) $\\det M = 2$ occurs only when the rows are $(1,1,0), (0,1,1), (1,0,1)$ in a cyclic (even) order, i.e. 3 matrices $\\to$ (Q).<br>Hence I $\\to$ S, II $\\to$ R, III $\\to$ P, IV $\\to$ Q."
        },
        // 2 | SECTION I - Q2 | Complex Numbers
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 3,
            "text": "Let $\\alpha = e^{2\\pi i/7}$. Match the items in List-I with those in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) $|\\alpha + \\alpha^2 + \\alpha^4|^2$</td><td style='border: 1px solid black; text-align: center;'>(P) 1</td></tr><tr><td style='border: 1px solid black;'>(II) $\\displaystyle\\prod_{k=1}^{6}(1-\\alpha^k)$</td><td style='border: 1px solid black; text-align: center;'>(Q) 2</td></tr><tr><td style='border: 1px solid black;'>(III) $\\displaystyle\\prod_{k=1}^{6}(1+\\alpha^k)$</td><td style='border: 1px solid black; text-align: center;'>(R) 3</td></tr><tr><td style='border: 1px solid black;'>(IV) $\\displaystyle\\sum_{k=1}^{6}\\frac{1}{1-\\alpha^k}$</td><td style='border: 1px solid black; text-align: center;'>(S) 7</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (Q), (II) &rarr; (S), (III) &rarr; (R), (IV) &rarr; (P)",
                        "(I) &rarr; (S), (II) &rarr; (Q), (III) &rarr; (P), (IV) &rarr; (R)",
                        "(I) &rarr; (P), (II) &rarr; (S), (III) &rarr; (Q), (IV) &rarr; (R)",
                        "(I) &rarr; (Q), (II) &rarr; (S), (III) &rarr; (P), (IV) &rarr; (R)"
            ],
            "solution": "Let $s = \\alpha+\\alpha^2+\\alpha^4$ and $t = \\alpha^3+\\alpha^5+\\alpha^6 = \\bar{s}$. Then $s + t = -1$ and $st = (\\alpha+\\alpha^2+\\alpha^4)(\\alpha^3+\\alpha^5+\\alpha^6) = 3 + (\\alpha + \\alpha^2 + \\dots + \\alpha^6) = 3 - 1 = 2$. So $|s|^2 = s\\bar{s} = st = 2$ $\\to$ (Q).<br>(II) $\\prod_{k=1}^{6}(x - \\alpha^k) = 1 + x + \\dots + x^6$. Put $x = 1$: $7$ $\\to$ (S).<br>(III) $\\prod_{k=1}^{6}(1+\\alpha^k) = (-1)^6\\prod_{k=1}^{6}(-1-\\alpha^k)$, which is the value of $1 + x + \\dots + x^6$ at $x = -1$, i.e. $1$ $\\to$ (P).<br>(IV) Pair $k$ with $7-k$: $\\frac{1}{1-\\alpha^k} + \\frac{1}{1-\\alpha^{-k}} = \\frac{1}{1-\\alpha^k} + \\frac{\\alpha^k}{\\alpha^k - 1} = 1$. Three pairs give $3$ $\\to$ (R).<br>Hence I $\\to$ Q, II $\\to$ S, III $\\to$ P, IV $\\to$ R."
        },
        // 3 | SECTION I - Q3 | Vectors
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 0,
            "text": "Let $\\vec{a} = \\hat{i} + 2\\hat{j} + 2\\hat{k}$, $\\vec{b} = 2\\hat{i} + \\hat{j} - 2\\hat{k}$ and $\\vec{c} = \\vec{a} \\times \\vec{b}$. Match the items in List-I with those in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) $|\\vec{a} \\times \\vec{b}|$</td><td style='border: 1px solid black; text-align: center;'>(P) 0</td></tr><tr><td style='border: 1px solid black;'>(II) The scalar triple product $[\\vec{a}\\ \\vec{b}\\ \\vec{c}]$</td><td style='border: 1px solid black; text-align: center;'>(Q) 99</td></tr><tr><td style='border: 1px solid black;'>(III) $(\\vec{a} \\times \\vec{b}) \\cdot (\\vec{b} \\times \\vec{c})$</td><td style='border: 1px solid black; text-align: center;'>(R) 9</td></tr><tr><td style='border: 1px solid black;'>(IV) $|\\vec{a} + \\vec{b} + \\vec{c}|^2$</td><td style='border: 1px solid black; text-align: center;'>(S) 81</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (R), (II) &rarr; (S), (III) &rarr; (P), (IV) &rarr; (Q)",
                        "(I) &rarr; (R), (II) &rarr; (S), (III) &rarr; (Q), (IV) &rarr; (P)",
                        "(I) &rarr; (S), (II) &rarr; (R), (III) &rarr; (P), (IV) &rarr; (Q)",
                        "(I) &rarr; (R), (II) &rarr; (Q), (III) &rarr; (P), (IV) &rarr; (S)"
            ],
            "solution": "$|\\vec{a}| = |\\vec{b}| = 3$ and $\\vec{a}\\cdot\\vec{b} = 2 + 2 - 4 = 0$, so $\\vec{a} \\perp \\vec{b}$. Also $\\vec{c} = \\vec{a}\\times\\vec{b} = -6\\hat{i} + 6\\hat{j} - 3\\hat{k}$ with $|\\vec{c}| = 9$, and $\\vec{c} \\perp \\vec{a}, \\vec{b}$.<br>(I) $|\\vec{a}\\times\\vec{b}| = |\\vec{a}||\\vec{b}|\\sin 90^\\circ = 9$ $\\to$ (R).<br>(II) $[\\vec{a}\\ \\vec{b}\\ \\vec{c}] = (\\vec{a}\\times\\vec{b})\\cdot\\vec{c} = |\\vec{c}|^2 = 81$ $\\to$ (S).<br>(III) $\\vec{b}\\times\\vec{c} = \\vec{b}\\times(\\vec{a}\\times\\vec{b}) = \\vec{a}(\\vec{b}\\cdot\\vec{b}) - \\vec{b}(\\vec{a}\\cdot\\vec{b}) = 9\\vec{a}$, so $(\\vec{a}\\times\\vec{b})\\cdot(\\vec{b}\\times\\vec{c}) = 9\\,\\vec{c}\\cdot\\vec{a} = 0$ $\\to$ (P).<br>(IV) The three vectors are mutually perpendicular, so $|\\vec{a}+\\vec{b}+\\vec{c}|^2 = 9 + 9 + 81 = 99$ $\\to$ (Q).<br>Hence I $\\to$ R, II $\\to$ S, III $\\to$ P, IV $\\to$ Q."
        },
        // 4 | SECTION I - Q4 | Probability
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 2,
            "text": "Two football teams $T_1$ and $T_2$ play a series of games. In each game, $T_1$ wins with probability $\\frac{1}{2}$, $T_2$ wins with probability $\\frac{1}{4}$ and the game is drawn with probability $\\frac{1}{4}$; games are independent. The winner of a game scores 5 points and the loser 0; in a drawn game each team scores 2 points. Let $X_n$ and $Y_n$ be the total points scored by $T_1$ and $T_2$ respectively after $n$ games. Match the items in List-I with those in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) $P(X_2 \\geq Y_2)$</td><td style='border: 1px solid black; text-align: center;'>(P) $\\frac{19}{32}$</td></tr><tr><td style='border: 1px solid black;'>(II) $P(X_2 \\gt  Y_2)$</td><td style='border: 1px solid black; text-align: center;'>(Q) $\\frac{13}{16}$</td></tr><tr><td style='border: 1px solid black;'>(III) $P(X_3 = Y_3)$</td><td style='border: 1px solid black; text-align: center;'>(R) $\\frac{13}{64}$</td></tr><tr><td style='border: 1px solid black;'>(IV) $P(X_3 \\gt  Y_3)$</td><td style='border: 1px solid black; text-align: center;'>(S) $\\frac{1}{2}$</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (Q), (II) &rarr; (S), (III) &rarr; (P), (IV) &rarr; (R)",
                        "(I) &rarr; (S), (II) &rarr; (Q), (III) &rarr; (R), (IV) &rarr; (P)",
                        "(I) &rarr; (Q), (II) &rarr; (S), (III) &rarr; (R), (IV) &rarr; (P)",
                        "(I) &rarr; (P), (II) &rarr; (S), (III) &rarr; (R), (IV) &rarr; (Q)"
            ],
            "solution": "In one game the point difference $(T_1 - T_2)$ is $+5$ with probability $\\frac12$, $-5$ with probability $\\frac14$, and $0$ with probability $\\frac14$ (draw).<br>After 2 games the difference is $+10$ w.p. $\\frac14$, $+5$ w.p. $2\\cdot\\frac12\\cdot\\frac14 = \\frac14$, $0$ w.p. $\\frac{1}{16} + 2\\cdot\\frac12\\cdot\\frac14 = \\frac{5}{16}$, $-5$ w.p. $\\frac18$, $-10$ w.p. $\\frac1{16}$.<br>(I) $P(X_2 \\geq Y_2) = \\frac14 + \\frac14 + \\frac5{16} = \\frac{13}{16}$ $\\to$ (Q). (II) $P(X_2 \\gt  Y_2) = \\frac12$ $\\to$ (S).<br>After 3 games let $T_1$ win $W$, lose $L$ and draw $D$ games ($W + L + D = 3$). (III) $X_3 = Y_3$ iff $W = L$: $(0,0,3)$ gives $\\frac1{64}$ and $(1,1,1)$ gives $6\\cdot\\frac12\\cdot\\frac14\\cdot\\frac14 = \\frac{12}{64}$; total $\\frac{13}{64}$ $\\to$ (R).<br>(IV) $X_3 \\gt  Y_3$ iff $W \\gt  L$: $(3,0,0)$: $\\frac18$; $(2,1,0)$: $3\\cdot\\frac14\\cdot\\frac14 = \\frac3{16}$; $(2,0,1)$: $3\\cdot\\frac14\\cdot\\frac14 = \\frac3{16}$; $(1,0,2)$: $3\\cdot\\frac12\\cdot\\frac1{16} = \\frac3{32}$. Sum $= \\frac{4+6+6+3}{32} = \\frac{19}{32}$ $\\to$ (P).<br>Hence I $\\to$ Q, II $\\to$ S, III $\\to$ R, IV $\\to$ P."
        },
        // 5 | SECTION II - Q5 | Complex Numbers
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        1,
                        2
            ],
            "text": "<div class='section-instruction'><h3>SECTION - II (Maximum Marks: 16)</h3><b>One or More Correct Answer Type</b><br><br>This section contains <b>FOUR (04)</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four options is(are) correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Partial Marks :</b> +1 for each correct option chosen, if not all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>Let $S = \\{z \\in \\mathbb{C} : |z^2 + z + 1| = 1\\}$. Then which of the following statements is/are TRUE?",
            "options": [
                        "$\\left|z + \\frac{1}{2}\\right| \\leq \\frac{1}{2}$ for all $z \\in S$",
                        "$|z| \\leq 2$ for all $z \\in S$",
                        "$\\left|z + \\frac{1}{2}\\right| \\geq \\frac{1}{2}$ for all $z \\in S$",
                        "The set $S$ has exactly four elements"
            ],
            "solution": "Put $w = z + \\frac12$. Then $z^2 + z + 1 = w^2 + \\frac34$, so the condition is $\\left|w^2 + \\frac34\\right| = 1$.<br>By the triangle inequality, $|w|^2 \\geq \\left|\\,|w^2 + \\tfrac34| - \\tfrac34\\right| = \\frac14$, so $|w| \\geq \\frac12$: (C) is true.<br>(A) is false: $z = -\\frac12 + \\frac{i\\sqrt7}{2}$ lies in $S$ (here $w^2 = -\\frac74$) and has $|z + \\frac12| = \\frac{\\sqrt7}{2} \\gt  \\frac12$.<br>Also $|w|^2 \\leq 1 + \\frac34 = \\frac74$, so $|z| \\leq |w| + \\frac12 \\leq \\frac{\\sqrt7 + 1}{2} \\lt  2$: (B) is true.<br>(D) is false: $S$ is a closed curve (an oval), hence an infinite set.<br>Correct options: (B) and (C)."
        },
        // 6 | SECTION II - Q6 | Probability
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        0,
                        1,
                        3
            ],
            "text": "Three bags $B_1, B_2, B_3$ contain balls as follows: $B_1$ has 5 red and 5 green balls, $B_2$ has 3 red and 5 green balls, $B_3$ has 5 red and 3 green balls. The bags $B_1, B_2, B_3$ are chosen with probabilities $\\frac{3}{10}, \\frac{3}{10}, \\frac{4}{10}$ respectively. A bag is chosen and a ball is drawn from it at random. Then which of the following is/are correct?",
            "options": [
                        "The probability that the ball is green, given that $B_3$ is selected, equals $\\frac{3}{8}$",
                        "The probability that the ball is green equals $\\frac{39}{80}$",
                        "The probability that the selected bag is $B_3$, given that the ball is green, equals $\\frac{5}{13}$",
                        "The probability that the selected bag is $B_3$ and the ball is green equals $\\frac{3}{20}$"
            ],
            "solution": "(A) $B_3$ has 3 green balls out of 8, so $P(G \\mid B_3) = \\frac38$. True.<br>(B) $P(G) = \\frac{3}{10}\\cdot\\frac12 + \\frac{3}{10}\\cdot\\frac58 + \\frac{4}{10}\\cdot\\frac38 = \\frac{3}{20} + \\frac{3}{16} + \\frac{3}{20} = \\frac{39}{80}$. True.<br>(C) $P(B_3 \\mid G) = \\frac{P(B_3)P(G \\mid B_3)}{P(G)} = \\frac{3/20}{39/80} = \\frac{4}{13} \\neq \\frac{5}{13}$. False.<br>(D) $P(B_3 \\cap G) = \\frac{4}{10}\\cdot\\frac38 = \\frac{3}{20}$. True.<br>Correct options: (A), (B) and (D)."
        },
        // 7 | SECTION II - Q7 | Differential Equations
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        0,
                        1
            ],
            "text": "Let $f : (0, \\infty) \\to \\mathbb{R}$ be a differentiable function such that $f'(x) = 2 - \\dfrac{f(x)}{x}$ for all $x \\in (0, \\infty)$ and $f(1) \\neq 1$. Then which of the following is/are correct?",
            "options": [
                        "$\\displaystyle\\lim_{x \\to 0^+} f'\\!\\left(\\frac{1}{x}\\right) = 1$",
                        "$\\displaystyle\\lim_{x \\to 0^+} x\\, f\\!\\left(\\frac{1}{x}\\right) = 1$",
                        "$\\displaystyle\\lim_{x \\to 0^+} x^2 f'(x) = 0$",
                        "$|f(x)| \\leq 2$ for all $x \\in (0, 2)$"
            ],
            "solution": "The equation is $f' + \\frac{f}{x} = 2$, so $(xf)' = 2x$ and $xf = x^2 + C$, i.e. $f(x) = x + \\frac{C}{x}$. Since $f(1) = 1 + C \\neq 1$, we have $C \\neq 0$.<br>(A) $f'(x) = 1 - \\frac{C}{x^2}$, so $f'(1/x) = 1 - Cx^2 \\to 1$. True.<br>(B) $x f(1/x) = x\\left(\\frac1x + Cx\\right) = 1 + Cx^2 \\to 1$. True.<br>(C) $x^2 f'(x) = x^2 - C \\to -C \\neq 0$. False.<br>(D) $|f(x)| = \\left|x + \\frac Cx\\right| \\to \\infty$ as $x \\to 0^+$. False.<br>Correct options: (A) and (B)."
        },
        // 8 | SECTION II - Q8 | Determinants and Methods of Differentiation
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        1,
                        2
            ],
            "text": "Let $f(x) = \\begin{vmatrix} \\cos 2x & \\cos 2x & \\sin 2x \\\\ -\\cos x & \\cos x & -\\sin x \\\\ \\sin x & \\sin x & \\cos x \\end{vmatrix}$. Then which of the following is/are correct?",
            "options": [
                        "$f'(x) = 0$ at exactly three points in $(-\\pi, \\pi)$",
                        "$f'(x) = 0$ at more than three points in $(-\\pi, \\pi)$",
                        "$f(x)$ attains its maximum at $x = 0$",
                        "$f(x)$ attains its minimum at $x = 0$"
            ],
            "solution": "Apply $C_2 \\to C_2 - C_1$: the second column becomes $(0,\\ 2\\cos x,\\ 0)^T$. Expanding along it, $f(x) = 2\\cos x\\,(\\cos 2x \\cos x - \\sin 2x \\sin x) = 2\\cos x \\cos 3x = \\cos 2x + \\cos 4x$.<br>$f'(x) = -2\\sin 2x - 4\\sin 4x = -2\\sin 2x\\,(1 + 4\\cos 2x)$.<br>$\\sin 2x = 0$ gives $x = 0, \\pm\\frac{\\pi}{2}$ in $(-\\pi, \\pi)$, and $\\cos 2x = -\\frac14$ gives four more points. So $f'(x) = 0$ at 7 points: (B) is true and (A) is false.<br>With $c = \\cos 2x$, $f = 2c^2 + c - 1 \\leq 2$ with equality at $c = 1$ (e.g. $x = 0$), so the maximum is at $x = 0$: (C) is true. The minimum value is $-\\frac98$ (at $\\cos 2x = -\\frac14$), not attained at $x = 0$: (D) is false.<br>Correct options: (B) and (C)."
        },
        // 9 | SECTION III - Q9 | Matrices
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 123,
            "text": "<div class='section-instruction'><h3>SECTION - III (Maximum Marks: 18)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>SIX (06)</b> questions. The answer to each question is a <b>POSITIVE INTEGER</b>. Enter the correct integer value of the answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct integer is entered.</li><li><b>Zero Marks :</b> 0 In all other cases.</li></ul></div><br>Let $P = \\begin{bmatrix} 1 & 0 & 0 \\\\ 4 & 1 & 0 \\\\ 16 & 4 & 1 \\end{bmatrix}$ and $I$ be the identity matrix of order 3. If $Q = [q_{ij}]$ is a matrix such that $P^{60} - Q = I$, then $\\dfrac{q_{31} + q_{32}}{q_{21}}$ is equal to",
            "solution": "Write $P = I + N$ with $N = \\begin{bmatrix} 0 & 0 & 0 \\\\ 4 & 0 & 0 \\\\ 16 & 4 & 0 \\end{bmatrix}$. Then $N^2 = \\begin{bmatrix} 0 & 0 & 0 \\\\ 0 & 0 & 0 \\\\ 16 & 0 & 0 \\end{bmatrix}$ and $N^3 = O$.<br>$P^{60} = I + 60N + \\binom{60}{2}N^2 = I + 60N + 1770N^2$, so $Q = 60N + 1770N^2$.<br>$q_{21} = 240$, $q_{32} = 240$, $q_{31} = 60 \\cdot 16 + 1770 \\cdot 16 = 29280$.<br>$\\dfrac{q_{31} + q_{32}}{q_{21}} = \\dfrac{29280 + 240}{240} = 123$."
        },
        // 10 | SECTION III - Q10 | Complex Numbers
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 3,
            "text": "Let $\\omega \\neq 1$ be a cube root of unity. Then the minimum value of the set $\\left\\{ |a + b\\omega + c\\omega^2|^2 : a, b, c \\text{ distinct non-zero integers} \\right\\}$ equals",
            "solution": "$|a + b\\omega + c\\omega^2|^2 = a^2 + b^2 + c^2 - ab - bc - ca = \\frac12\\left[(a-b)^2 + (b-c)^2 + (c-a)^2\\right]$.<br>Let the distinct integers in increasing order be $p \\lt  q \\lt  r$. Then $q - p \\geq 1$, $r - q \\geq 1$ and $r - p \\geq 2$, so the bracket is at least $1 + 1 + 4 = 6$ and the expression is at least $3$.<br>Equality holds for $(a, b, c) = (1, 2, 3)$, which are non-zero. Minimum value $= 3$."
        },
        // 11 | SECTION III - Q11 | Differential Equations
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 16,
            "text": "Let $y(x)$, $x \\in \\mathbb{R}$, be the solution of the differential equation $(x^2 - 5)\\dfrac{dy}{dx} - 2xy = -2x(x^2 - 5)^2$ with $y(2) = 7$. Then the maximum value of the function $y(x)$ is",
            "solution": "Divide by $(x^2 - 5)$: $\\dfrac{dy}{dx} - \\dfrac{2x}{x^2 - 5}\\,y = -2x(x^2 - 5)$. Integrating factor $= \\dfrac{1}{x^2 - 5}$.<br>$\\dfrac{y}{x^2 - 5} = \\displaystyle\\int -2x\\,dx = -x^2 + C$. Using $y(2) = 7$: $\\dfrac{7}{-1} = -4 + C \\Rightarrow C = -3$.<br>$y = (x^2 - 5)(-x^2 - 3) = -x^4 + 2x^2 + 15$.<br>$y' = -4x(x^2 - 1) = 0 \\Rightarrow x = 0, \\pm 1$. $y(\\pm 1) = -1 + 2 + 15 = 16$ is the maximum ($y(0) = 15$ is a local minimum and $y \\to -\\infty$ as $|x| \\to \\infty$)."
        },
        // 12 | SECTION III - Q12 | Permutations and Combinations
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 625,
            "text": "The number of 5-digit numbers which are divisible by 4, with digits from the set $\\{1, 2, 3, 4, 5\\}$ and the repetition of digits being allowed, is",
            "solution": "A number is divisible by 4 iff the number formed by its last two digits is divisible by 4. Using digits 1 to 5, the possible last two digits are $12, 24, 32, 44, 52$: 5 ways.<br>The first three digits can each be chosen in 5 ways: $5^3 = 125$.<br>Total $= 125 \\times 5 = 625$."
        },
        // 13 | SECTION III - Q13 | Probability
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 61,
            "text": "Three numbers are chosen at random, one after another with replacement, from the set $\\{1, 2, 3, \\ldots, 100\\}$. Let $p_1$ be the probability that the maximum of the chosen numbers is at least $81$. Then $125\\,p_1$ is equal to",
            "solution": "The maximum is less than 81 iff all three numbers are $\\leq 80$: probability $\\left(\\frac{80}{100}\\right)^3 = \\frac{64}{125}$.<br>$p_1 = 1 - \\frac{64}{125} = \\frac{61}{125}$, so $125\\,p_1 = 61$."
        },
        // 14 | SECTION III - Q14 | 3D Geometry
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 108,
            "text": "Let $L_1 : \\vec{r} = \\lambda(\\hat{i} + 2\\hat{j} + 2\\hat{k})$ and $L_2 : \\vec{r} = 9\\hat{j} + \\mu(2\\hat{i} + \\hat{j} - 2\\hat{k})$ be two lines, where $\\lambda, \\mu$ are real parameters. The common perpendicular to $L_1$ and $L_2$ meets $L_1$ at $P$ and $L_2$ at $Q$. If $O$ is the origin, then $OP^2 + OQ^2$ is equal to",
            "solution": "Take $P = (\\lambda, 2\\lambda, 2\\lambda)$ and $Q = (2\\mu, 9 + \\mu, -2\\mu)$, so $\\overrightarrow{PQ} = (2\\mu - \\lambda,\\ 9 + \\mu - 2\\lambda,\\ -2\\mu - 2\\lambda)$.<br>$\\overrightarrow{PQ} \\cdot (1,2,2) = 18 - 9\\lambda = 0 \\Rightarrow \\lambda = 2$.<br>$\\overrightarrow{PQ} \\cdot (2,1,-2) = 9\\mu + 9 = 0 \\Rightarrow \\mu = -1$.<br>$P = (2, 4, 4)$ and $Q = (-2, 8, 2)$. $OP^2 = 36$, $OQ^2 = 72$.<br>$OP^2 + OQ^2 = 108$. (Check: $PQ = 6$, which equals the shortest distance $\\frac{|(0,9,0)\\cdot(-6,6,-3)|}{9} = 6$.)"
        },
        // 15 | SECTION IV - Q15 | Methods of Differentiation (Paragraph 1)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<div class='section-instruction'><h3>SECTION - IV (Maximum Marks: 12)</h3><b>Paragraph Type</b><br><br>This section contains <b>TWO (02)</b> paragraphs. Based on each paragraph, there are <b>TWO (02)</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><div class='passage-box'><b>Paragraph for Questions 15 and 16</b><br>Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a differentiable function satisfying $f(x + y) = f(x) + f(y) + 3xy(x + y)$ for all real $x, y$, and $f'(0) = 2$. Let $g$ be the inverse function of $f$.</div><br>The value of $g'(3)$ is",
            "options": [
                        "$\\frac{1}{3}$",
                        "$\\frac{1}{5}$",
                        "$\\frac{1}{2}$",
                        "$\\frac{3}{5}$"
            ],
            "solution": "Putting $x = y = 0$ gives $f(0) = 0$. Differentiating the given relation with respect to $y$ and then putting $y = 0$: $f'(x) = f'(0) + 3x^2 = 2 + 3x^2 \\gt  0$. So $f$ is strictly increasing (hence invertible) and $f(x) = x^3 + 2x$.<br>$f(1) = 3$, so $g(3) = 1$. $g'(3) = \\dfrac{1}{f'(g(3))} = \\dfrac{1}{f'(1)} = \\dfrac{1}{5}$."
        },
        // 16 | SECTION IV - Q16 | Methods of Differentiation (Paragraph 1)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='passage-box'><b>Paragraph for Questions 15 and 16</b><br>Let $f : \\mathbb{R} \\to \\mathbb{R}$ be a differentiable function satisfying $f(x + y) = f(x) + f(y) + 3xy(x + y)$ for all real $x, y$, and $f'(0) = 2$. Let $g$ be the inverse function of $f$.</div><br>The value of $g''(3)$ is",
            "options": [
                        "$\\frac{6}{125}$",
                        "$-\\frac{6}{25}$",
                        "$-\\frac{6}{125}$",
                        "$-\\frac{3}{125}$"
            ],
            "solution": "Putting $x = y = 0$ gives $f(0) = 0$. Differentiating the given relation with respect to $y$ and then putting $y = 0$: $f'(x) = f'(0) + 3x^2 = 2 + 3x^2 \\gt  0$. So $f$ is strictly increasing (hence invertible) and $f(x) = x^3 + 2x$.<br>$g'(y) = \\dfrac{1}{f'(g(y))}$, so $g''(y) = -\\dfrac{f''(g(y))\\,g'(y)}{[f'(g(y))]^2} = -\\dfrac{f''(g(y))}{[f'(g(y))]^3}$.<br>At $y = 3$: $g(3) = 1$, $f''(x) = 6x \\Rightarrow f''(1) = 6$ and $f'(1) = 5$. So $g''(3) = -\\dfrac{6}{125}$."
        },
        // 17 | SECTION IV - Q17 | Permutations and Combinations (Paragraph 2)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "<div class='passage-box'><b>Paragraph for Questions 17 and 18</b><br>All the $120$ five-digit numbers that can be formed using each of the digits $1, 2, 3, 4, 5$ exactly once are written in ascending order.</div><br>How many of these numbers are divisible by $4$?",
            "options": [
                        "12",
                        "18",
                        "30",
                        "24"
            ],
            "solution": "A number is divisible by 4 iff its last two digits form a multiple of 4. Using two distinct digits from $1$ to $5$, the possible endings are $12, 24, 32, 52$: 4 ways. The remaining three digits can be arranged in $3! = 6$ ways. Total $= 4 \\times 6 = 24$."
        },
        // 18 | SECTION IV - Q18 | Permutations and Combinations (Paragraph 2)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<div class='passage-box'><b>Paragraph for Questions 17 and 18</b><br>All the $120$ five-digit numbers that can be formed using each of the digits $1, 2, 3, 4, 5$ exactly once are written in ascending order.</div><br>The $50^{\\text{th}}$ number in the list is",
            "options": [
                        "31245",
                        "31254",
                        "31452",
                        "32145"
            ],
            "solution": "Numbers beginning with $1$: $4! = 24$ (positions 1 to 24). Numbers beginning with $2$: another 24 (positions 25 to 48). Numbers beginning with $3$ start from position 49.<br>Among them, the smallest is $31245$ (49th) and the next is $31254$ (50th)."
        }
    ]
};
