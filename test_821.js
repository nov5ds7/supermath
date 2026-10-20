window.testBank = window.testBank || {};
window.testBank['test_821'] = {
    title: "Pre-ACT-02(24.10.2026)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-10-20T01:45:00Z",
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
        // 1 | SECTION I - Q1 | Matrices (symmetric 0-1 matrices)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - I (Maximum Marks: 16)</h3><b>Single Correct Answer Type (Matrix Match)</b><br><br>This section contains <b>FOUR (04)</b> questions. Each question has two lists: <b>List-I</b> (I, II, III, IV) and <b>List-II</b> (P, Q, R, S). Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>Let $S$ be the set of all $3 \\times 3$ symmetric matrices, each entry of which is $0$ or $1$, such that exactly five of the nine entries are $1$ and four are $0$. Match the items in List-I with those in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) The number of matrices in $S$ with trace equal to $3$</td><td style='border: 1px solid black; text-align: center;'>(P) 2</td></tr><tr><td style='border: 1px solid black;'>(II) The number of matrices $A \\in S$ for which the system $A\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix} = \\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$ has infinitely many solutions</td><td style='border: 1px solid black; text-align: center;'>(Q) 3</td></tr><tr><td style='border: 1px solid black;'>(III) The number of matrices $A \\in S$ for which the system $A\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix} = \\begin{pmatrix}1\\\\0\\\\0\\end{pmatrix}$ has no solution</td><td style='border: 1px solid black; text-align: center;'>(R) 4</td></tr><tr><td style='border: 1px solid black;'>(IV) The number of invertible matrices in $S$</td><td style='border: 1px solid black; text-align: center;'>(S) 6</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (S), (II) &rarr; (P), (III) &rarr; (Q), (IV) &rarr; (R)",
                        "(I) &rarr; (Q), (II) &rarr; (R), (III) &rarr; (P), (IV) &rarr; (S)",
                        "(I) &rarr; (Q), (II) &rarr; (P), (III) &rarr; (R), (IV) &rarr; (S)",
                        "(I) &rarr; (P), (II) &rarr; (R), (III) &rarr; (S), (IV) &rarr; (Q)"
            ],
            "solution": "A symmetric matrix is determined by its diagonal $(a_{11}, a_{22}, a_{33})$ and the off-diagonal entries $a_{12}, a_{13}, a_{23}$ (each off-diagonal $1$ contributes two $1$'s). With $d$ ones on the diagonal and $p$ off-diagonal pairs, $d + 2p = 5$: $(d, p) = (1, 2)$ gives $3 \\times 3 = 9$ matrices and $(d, p) = (3, 1)$ gives $3$ matrices. So $|S| = 12$.<br>(I) Trace $3$ means $d = 3$: exactly $3$ matrices $\\to$ (Q).<br>Enumerating all $12$ matrices: $6$ have $\\det = 0$ (rank $2$) and $6$ have $\\det = -1$.<br>(IV) Invertible matrices: $6$ $\\to$ (S). For these the system $AX = e_1$ has a unique solution.<br>For the $6$ singular matrices, $e_1$ lies in the column space for exactly $2$ of them (infinitely many solutions), so (II) $\\to$ (P); for the other $4$ it does not (no solution), so (III) $\\to$ (R).<br>Hence I $\\to$ Q, II $\\to$ P, III $\\to$ R, IV $\\to$ S."
        },
        // 2 | SECTION I - Q2 | System of equations (JEE Adv 2023)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 0,
            "text": "Consider the system of linear equations $x + 2y + z = 7$, $x + \\alpha z = 11$, $2x - 3y + \\beta z = \\gamma$. Match each entry in List-I to the correct entry in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) If $\\beta = \\frac12(7\\alpha - 3)$ and $\\gamma = 28$, then the system has</td><td style='border: 1px solid black; text-align: center;'>(P) no solution</td></tr><tr><td style='border: 1px solid black;'>(II) If $\\beta = \\frac12(7\\alpha - 3)$ and $\\gamma \\neq 28$, then the system has</td><td style='border: 1px solid black; text-align: center;'>(Q) infinitely many solutions</td></tr><tr><td style='border: 1px solid black;'>(III) If $\\beta \\neq \\frac12(7\\alpha - 3)$, $\\alpha = 1$ and $\\gamma \\neq 28$, then the system has</td><td style='border: 1px solid black; text-align: center;'>(R) a unique solution with $z \\neq 0$</td></tr><tr><td style='border: 1px solid black;'>(IV) If $\\beta \\neq \\frac12(7\\alpha - 3)$, $\\alpha = 1$ and $\\gamma = 28$, then the system has</td><td style='border: 1px solid black; text-align: center;'>(S) a unique solution with $z = 0$</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (Q), (II) &rarr; (P), (III) &rarr; (R), (IV) &rarr; (S)",
                        "(I) &rarr; (P), (II) &rarr; (Q), (III) &rarr; (S), (IV) &rarr; (R)",
                        "(I) &rarr; (Q), (II) &rarr; (P), (III) &rarr; (S), (IV) &rarr; (R)",
                        "(I) &rarr; (R), (II) &rarr; (Q), (III) &rarr; (P), (IV) &rarr; (S)"
            ],
            "solution": "The coefficient determinant is $\\Delta = \\begin{vmatrix} 1 & 2 & 1 \\\\ 1 & 0 & \\alpha \\\\ 2 & -3 & \\beta \\end{vmatrix} = 7\\alpha - 2\\beta - 3$, so $\\Delta = 0 \\iff \\beta = \\frac12(7\\alpha - 3)$.<br>From the first two equations, $x = 11 - \\alpha z$ and $y = \\frac{7 - x - z}{2} = \\frac{(\\alpha - 1)z - 4}{2}$ (so these always determine $x, y$ in terms of $z$). Substituting in the third equation: $2x - 3y + \\beta z = 22 - 2\\alpha z - \\frac{3\\left[(\\alpha-1)z - 4\\right]}{2} + \\beta z = 28 + z\\left(\\beta - \\frac{7\\alpha - 3}{2}\\right)$.<br>So the third equation becomes $28 + z\\left(\\beta - \\frac{7\\alpha-3}{2}\\right) = \\gamma$.<br>(I) $\\beta = \\frac{7\\alpha-3}{2}$, $\\gamma = 28$: identity $28 = 28$, infinitely many solutions $\\to$ (Q).<br>(II) $\\beta = \\frac{7\\alpha-3}{2}$, $\\gamma \\neq 28$: $28 = \\gamma$ is false, no solution $\\to$ (P).<br>(III) $\\beta \\neq \\frac{7\\alpha-3}{2}$, $\\gamma \\neq 28$: $z = \\frac{\\gamma - 28}{\\beta - (7\\alpha-3)/2} \\neq 0$, unique solution with $z \\neq 0$ $\\to$ (R).<br>(IV) $\\gamma = 28$: $z = 0$, so $x = 11$, $y = -2$, unique solution with $z = 0$ $\\to$ (S).<br>Hence I $\\to$ Q, II $\\to$ P, III $\\to$ R, IV $\\to$ S."
        },
        // 3 | SECTION I - Q3 | Matrices (2x2 products)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 3,
            "text": "Let $A = \\begin{pmatrix} 1 & 1 \\\\ 0 & 1 \\end{pmatrix}$ and $B = \\begin{pmatrix} 1 & 0 \\\\ 1 & 1 \\end{pmatrix}$. Match the items in List-I with those in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) The sum of all the entries of $A^{10}$</td><td style='border: 1px solid black; text-align: center;'>(P) 3</td></tr><tr><td style='border: 1px solid black;'>(II) $\\det(A + B)$</td><td style='border: 1px solid black; text-align: center;'>(Q) 7</td></tr><tr><td style='border: 1px solid black;'>(III) The trace of $(AB)^2$</td><td style='border: 1px solid black; text-align: center;'>(R) 12</td></tr><tr><td style='border: 1px solid black;'>(IV) The sum of all the entries of $AB$</td><td style='border: 1px solid black; text-align: center;'>(S) 5</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (Q), (II) &rarr; (R), (III) &rarr; (S), (IV) &rarr; (P)",
                        "(I) &rarr; (S), (II) &rarr; (P), (III) &rarr; (Q), (IV) &rarr; (R)",
                        "(I) &rarr; (P), (II) &rarr; (Q), (III) &rarr; (R), (IV) &rarr; (S)",
                        "(I) &rarr; (R), (II) &rarr; (P), (III) &rarr; (Q), (IV) &rarr; (S)"
            ],
            "solution": "$A^n = \\begin{pmatrix} 1 & n \\\\ 0 & 1 \\end{pmatrix}$, so $A^{10} = \\begin{pmatrix} 1 & 10 \\\\ 0 & 1 \\end{pmatrix}$ with entry sum $12$ $\\to$ (R).<br>$A + B = \\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}$, $\\det = 4 - 1 = 3$ $\\to$ (P).<br>$AB = \\begin{pmatrix} 2 & 1 \\\\ 1 & 1 \\end{pmatrix}$, $(AB)^2 = \\begin{pmatrix} 5 & 3 \\\\ 3 & 2 \\end{pmatrix}$, trace $= 7$ $\\to$ (Q).<br>Sum of the entries of $AB$ $= 2 + 1 + 1 + 1 = 5$ $\\to$ (S).<br>Hence I $\\to$ R, II $\\to$ P, III $\\to$ Q, IV $\\to$ S."
        },
        // 4 | SECTION I - Q4 | Straight lines
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswer": 3,
            "text": "Match the items in List-I with those in List-II.<br><br><table style='width: 100%; border-collapse: collapse; border: 1px solid black;'><tr style='background-color: #e0e0e0;'><td style='border: 1px solid black; text-align: center; width: 55%;'><b>List-I</b></td><td style='border: 1px solid black; text-align: center; width: 45%;'><b>List-II</b></td></tr><tr><td style='border: 1px solid black;'>(I) The area (in sq. units) of the triangle formed by the line $2x + 3y = 12$ and the coordinate axes</td><td style='border: 1px solid black; text-align: center;'>(P) 2</td></tr><tr><td style='border: 1px solid black;'>(II) The distance between the parallel lines $3x + 4y = 7$ and $6x + 8y = -16$</td><td style='border: 1px solid black; text-align: center;'>(Q) 3</td></tr><tr><td style='border: 1px solid black;'>(III) The distance of the origin from the line $5x - 12y + 26 = 0$</td><td style='border: 1px solid black; text-align: center;'>(R) 12</td></tr><tr><td style='border: 1px solid black;'>(IV) The sum of the coordinates of the foot of the perpendicular from the origin to the line $3x + 4y = 50$</td><td style='border: 1px solid black; text-align: center;'>(S) 14</td></tr></table><br>Which one of the following options has the correct combination?",
            "options": [
                        "(I) &rarr; (R), (II) &rarr; (P), (III) &rarr; (Q), (IV) &rarr; (S)",
                        "(I) &rarr; (Q), (II) &rarr; (R), (III) &rarr; (S), (IV) &rarr; (P)",
                        "(I) &rarr; (S), (II) &rarr; (Q), (III) &rarr; (P), (IV) &rarr; (R)",
                        "(I) &rarr; (R), (II) &rarr; (Q), (III) &rarr; (P), (IV) &rarr; (S)"
            ],
            "solution": "(I) Intercepts are $6$ and $4$, so the area is $\\frac12 \\cdot 6 \\cdot 4 = 12$ $\\to$ (R).<br>(II) Write the second line as $3x + 4y + 8 = 0$. Distance $= \\frac{|-7 - 8|}{\\sqrt{9 + 16}} = \\frac{15}{5} = 3$ $\\to$ (Q).<br>(III) Distance $= \\frac{|26|}{\\sqrt{25 + 144}} = \\frac{26}{13} = 2$ $\\to$ (P).<br>(IV) The foot is $\\left(\\frac{3 \\cdot 50}{25}, \\frac{4 \\cdot 50}{25}\\right) = (6, 8)$, with coordinate sum $14$ $\\to$ (S).<br>Hence I $\\to$ R, II $\\to$ Q, III $\\to$ P, IV $\\to$ S."
        },
        // 5 | SECTION II - Q5 | Adjoint matrix (JEE Adv 2023)
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        0,
                        1,
                        3
            ],
            "text": "<div class='section-instruction'><h3>SECTION - II (Maximum Marks: 16)</h3><b>One or More Correct Answer Type</b><br><br>This section contains <b>FOUR (04)</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four options is(are) correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Partial Marks :</b> +1 for each correct option chosen, if not all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>Let $M = \\begin{pmatrix} 0 & 1 & a \\\\ 1 & 2 & 3 \\\\ 3 & b & 1 \\end{pmatrix}$ and $\\operatorname{adj}M = \\begin{pmatrix} -1 & 1 & -1 \\\\ 8 & -6 & 2 \\\\ -5 & 3 & -1 \\end{pmatrix}$, where $a$ and $b$ are real numbers. Which of the following options is/are correct?",
            "options": [
                        "$a + b = 3$",
                        "$(\\operatorname{adj}M)^{-1} + \\operatorname{adj}M^{-1} = -M$",
                        "$\\det\\left(\\operatorname{adj}M^2\\right) = 81$",
                        "If $M\\begin{pmatrix}\\alpha\\\\\\beta\\\\\\gamma\\end{pmatrix} = \\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix}$, then $\\alpha - \\beta + \\gamma = 3$"
            ],
            "solution": "Use $M\\,(\\operatorname{adj}M) = |M|\\,I$.<br>$(1,2)$ entry: $(0, 1, a)\\cdot(1, -6, 3) = -6 + 3a = 0 \\Rightarrow a = 2$. Then the $(1,1)$ entry gives $|M| = (0, 1, 2)\\cdot(-1, 8, -5) = 8 - 10 = -2$.<br>$(3,3)$ entry: $(3, b, 1)\\cdot(-1, 2, -1) = -3 + 2b - 1 = |M| = -2 \\Rightarrow b = 1$. So $a + b = 3$: <b>(A) is true</b>.<br>(B) $(\\operatorname{adj}M)^{-1} = \\dfrac{M}{|M|} = -\\dfrac M2$ and $\\operatorname{adj}(M^{-1}) = |M^{-1}|\\,M = \\dfrac{M}{|M|} = -\\dfrac M2$. Their sum is $-M$: <b>true</b>.<br>(C) $\\det\\left(\\operatorname{adj}(M^2)\\right) = |M^2|^2 = |M|^4 = 16 \\neq 81$: <b>false</b>.<br>(D) $\\begin{pmatrix}\\alpha\\\\\\beta\\\\\\gamma\\end{pmatrix} = M^{-1}\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix} = \\dfrac{\\operatorname{adj}M}{|M|}\\begin{pmatrix}1\\\\2\\\\3\\end{pmatrix} = -\\dfrac12\\begin{pmatrix} -1 + 2 - 3 \\\\ 8 - 12 + 6 \\\\ -5 + 6 - 3 \\end{pmatrix} = \\begin{pmatrix}1\\\\-1\\\\1\\end{pmatrix}$, so $\\alpha - \\beta + \\gamma = 3$: <b>true</b>.<br>Correct options: (A), (B), (D)."
        },
        // 6 | SECTION II - Q6 | Matrix from divisibility (JEE Adv 2021)
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        1,
                        2
            ],
            "text": "Let $M = (a_{ij})$, $i, j \\in \\{1, 2, 3\\}$, be the $3 \\times 3$ matrix such that $a_{ij} = 1$ if $j + 1$ is divisible by $i$, and $a_{ij} = 0$ otherwise. Then which of the following statements is/are TRUE?",
            "options": [
                        "$M$ is invertible",
                        "There exists a non-zero column matrix $\\begin{pmatrix}a_1\\\\a_2\\\\a_3\\end{pmatrix}$ such that $M\\begin{pmatrix}a_1\\\\a_2\\\\a_3\\end{pmatrix} = \\begin{pmatrix}-a_1\\\\-a_2\\\\-a_3\\end{pmatrix}$",
                        "The set $\\left\\{X \\in \\mathbb{R}^3 : MX = \\mathbf{0}\\right\\} \\neq \\{\\mathbf{0}\\}$, where $\\mathbf{0} = \\begin{pmatrix}0\\\\0\\\\0\\end{pmatrix}$",
                        "The matrix $(M - 2I)$ is invertible, where $I$ is the $3\\times3$ identity matrix"
            ],
            "solution": "Row $i$ has a $1$ in column $j$ when $i \\mid (j+1)$. Row 1: $j + 1 = 2, 3, 4$ are all divisible by $1$, giving $(1, 1, 1)$. Row 2: $j + 1 \\in \\{2, 4\\}$, i.e. $j = 1, 3$, giving $(1, 0, 1)$. Row 3: $j + 1 = 3$, i.e. $j = 2$, giving $(0, 1, 0)$.<br>$M = \\begin{pmatrix} 1 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 0 & 1 & 0 \\end{pmatrix}$ and $|M - \\lambda I| = -\\lambda(\\lambda^2 - \\lambda - 2) = -\\lambda(\\lambda - 2)(\\lambda + 1)$, so the eigenvalues are $0, 2, -1$.<br>(A) $|M| = 0$, so $M$ is not invertible: false.<br>(B) $-1$ is an eigenvalue, so a non-zero $a$ with $Ma = -a$ exists (e.g. $a = (0, -1, 1)^T$): true.<br>(C) $0$ is an eigenvalue, so $MX = 0$ has a non-zero solution (e.g. $(-1, 0, 1)^T$): true.<br>(D) $2$ is an eigenvalue, so $|M - 2I| = 0$ and $M - 2I$ is not invertible: false.<br>Correct options: (B), (C)."
        },
        // 7 | SECTION II - Q7 | PQ = kI (JEE Adv 2022)
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        1,
                        2,
                        3
            ],
            "text": "Let $P = \\begin{pmatrix} 3 & -1 & -2 \\\\ 2 & 0 & \\alpha \\\\ 3 & -5 & 0 \\end{pmatrix}$, where $\\alpha \\in \\mathbb{R}$. Suppose $Q = [q_{ij}]$ is a matrix such that $PQ = kI$, where $k \\in \\mathbb{R}$, $k \\neq 0$ and $I$ is the identity matrix of order $3$. If $q_{23} = -\\dfrac{k}{8}$ and $\\det(Q) = \\dfrac{k^2}{2}$, then",
            "options": [
                        "$\\alpha = 0,\\ k = 8$",
                        "$4\\alpha - k + 8 = 0$",
                        "$\\det\\left(P\\operatorname{adj}(Q)\\right) = 2^9$",
                        "$\\det\\left(Q\\operatorname{adj}(P)\\right) = 2^9$"
            ],
            "solution": "$PQ = kI \\Rightarrow Q = kP^{-1} = \\dfrac{k}{|P|}\\operatorname{adj}P$, where $|P| = 3(0 + 5\\alpha) + 1(0 - 3\\alpha) - 2(-10 - 0) = 12\\alpha + 20$.<br>$q_{23} = \\dfrac{k}{|P|}\\,C_{32}$, where $C_{32} = -\\begin{vmatrix} 3 & -2 \\\\ 2 & \\alpha \\end{vmatrix} = -(3\\alpha + 4)$. So $q_{23} = -\\dfrac{k(3\\alpha + 4)}{4(3\\alpha + 5)} = -\\dfrac k8 \\Rightarrow 2(3\\alpha + 4) = 3\\alpha + 5 \\Rightarrow \\alpha = -1$. Then $|P| = 8$.<br>$|Q| = \\dfrac{k^3}{|P|} = \\dfrac{k^2}{2} \\Rightarrow k = \\dfrac{|P|}{2} = 4$.<br>(A) $\\alpha = -1 \\neq 0$: false. (B) $4\\alpha - k + 8 = -4 - 4 + 8 = 0$: true.<br>(C) $|P\\operatorname{adj}Q| = |P|\\,|Q|^2 = 8 \\cdot 8^2 = 2^9$: true (here $|Q| = \\frac{k^2}{2} = 8$).<br>(D) $|Q\\operatorname{adj}P| = |Q|\\,|P|^2 = 8 \\cdot 8^2 = 2^9$: true.<br>Correct options: (B), (C), (D)."
        },
        // 8 | SECTION II - Q8 | Straight lines (orthocentre locus)
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [
                        0,
                        2
            ],
            "text": "For distinct real numbers $p, q$ different from $0$ and $-1$, let $\\Delta_{pq}$ be the triangle formed by the lines $(1+p)x - py + p(1+p) = 0$, $(1+q)x - qy + q(1+q) = 0$ and $y = 0$. Which of the following statements is/are TRUE?",
            "options": [
                        "The orthocentre of $\\Delta_{pq}$ always lies on the line $x + y = 0$",
                        "The orthocentre of $\\Delta_{pq}$ always lies on the line $y = x$",
                        "For $p = 1$, $q = 2$ the orthocentre of $\\Delta_{pq}$ is $(2, -2)$",
                        "For $p = 1$, $q = 2$ the area of $\\Delta_{pq}$ is $6$ square units"
            ],
            "solution": "The first line meets $y = 0$ at $B(-p, 0)$, the second at $C(-q, 0)$, and the two lines meet at $V(pq,\\ (p+1)(q+1))$ (substitute to check: $(1+p)pq - p(p+1)(q+1) + p(1+p) = p(1+p)\\left[q - (q+1) + 1\\right] = 0$).<br>Since $BC$ lies on the $x$-axis, the altitude from $V$ is the vertical line $x = pq$.<br>The side $VC$ has slope $\\frac{1+q}{q}$, so the altitude from $B$ has slope $-\\frac{q}{1+q}$: $y = -\\frac{q}{1+q}(x + p)$. At $x = pq$: $y = -\\frac{q(pq + p)}{1+q} = -pq$.<br>So the orthocentre is $(pq, -pq)$, which always lies on $x + y = 0$: (A) true, (B) false (it lies on $y = x$ only if $pq = 0$).<br>For $p = 1, q = 2$: orthocentre $= (2, -2)$: (C) true.<br>For $p = 1, q = 2$: $B(-1, 0)$, $C(-2, 0)$, $V(2, 6)$. Area $= \\frac12 \\cdot BC \\cdot 6 = \\frac12 \\cdot 1 \\cdot 6 = 3 \\neq 6$: (D) false.<br>Correct options: (A), (C)."
        },
        // 9 | SECTION III - Q9 | Linear system (JEE Adv 2018)
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 1,
            "text": "<div class='section-instruction'><h3>SECTION - III (Maximum Marks: 18)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>SIX (06)</b> questions. The answer to each question is a <b>POSITIVE INTEGER</b>. Enter the correct integer value of the answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct integer is entered.</li><li><b>Zero Marks :</b> 0 In all other cases.</li></ul></div><br>For a real number $\\alpha$, if the system $\\begin{pmatrix} 1 & \\alpha & \\alpha^2 \\\\ \\alpha & 1 & \\alpha \\\\ \\alpha^2 & \\alpha & 1 \\end{pmatrix}\\begin{pmatrix} x \\\\ y \\\\ z \\end{pmatrix} = \\begin{pmatrix} 1 \\\\ -1 \\\\ 1 \\end{pmatrix}$ of linear equations has infinitely many solutions, then $1 + \\alpha + \\alpha^2 =$ ______.",
            "solution": "The coefficient determinant is $(\\alpha - 1)^2(\\alpha + 1)^2$. Infinitely many solutions require it to vanish, so $\\alpha = \\pm 1$.<br>For $\\alpha = 1$ the equations are $x + y + z = 1$, $x + y + z = -1$, $x + y + z = 1$: inconsistent (no solution).<br>For $\\alpha = -1$ the equations are $x - y + z = 1$, $-x + y - z = -1$, $x - y + z = 1$: all the same equation, so infinitely many solutions.<br>Hence $\\alpha = -1$ and $1 + \\alpha + \\alpha^2 = 1 - 1 + 1 = 1$."
        },
        // 10 | SECTION III - Q10 | Cube-root-of-unity matrices (JEE Adv)
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 2,
            "text": "Let $\\omega \\neq 1$ be a cube root of unity and let $S$ be the set of all non-singular matrices of the form $\\begin{pmatrix} 1 & a & b \\\\ \\omega & 1 & c \\\\ \\omega^2 & \\omega & 1 \\end{pmatrix}$, where each of $a, b, c$ is either $\\omega$ or $\\omega^2$. Then the number of distinct matrices in $S$ is ______.",
            "solution": "Expanding along the first row: $\\det = (1 - c\\omega) - a(\\omega - c\\omega^2) + b(\\omega^2 - \\omega^2) = 1 - \\omega(a + c) + ac\\,\\omega^2$. The entry $b$ does not affect the determinant.<br>$(a, c) = (\\omega, \\omega)$: $1 - 2\\omega^2 + \\omega^4 = 1 + \\omega - 2\\omega^2 = -3\\omega^2 \\neq 0$.<br>$(a, c) = (\\omega^2, \\omega^2)$: $1 - 2\\omega^3 + \\omega^6 = 1 - 2 + 1 = 0$.<br>$(a, c) = (\\omega, \\omega^2)$ or $(\\omega^2, \\omega)$: $1 - \\omega(\\omega + \\omega^2) + \\omega^3\\omega^2 = 1 + \\omega + \\omega^2 = 0$.<br>So the matrix is non-singular only for $a = c = \\omega$, with $b$ free ($2$ choices). Number of matrices $= 2$."
        },
        // 11 | SECTION III - Q11 | Matrix polynomial (JEE Adv 2022)
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 3,
            "text": "Let $\\beta$ be a real number. Consider the matrix $A = \\begin{pmatrix} \\beta & 0 & 1 \\\\ 2 & 1 & -2 \\\\ 3 & 1 & -2 \\end{pmatrix}$. If $A^7 - (\\beta - 1)A^6 - \\beta A^5$ is a singular matrix, then the value of $9\\beta$ is ______.",
            "solution": "$A^7 - (\\beta - 1)A^6 - \\beta A^5 = A^5\\left(A^2 - (\\beta - 1)A - \\beta I\\right) = A^5(A - \\beta I)(A + I)$.<br>$|A| = \\beta(-2 + 2) - 0 + 1(2 - 3) = -1 \\neq 0$, so $A^5$ is non-singular. $|A + I| = \\begin{vmatrix} \\beta + 1 & 0 & 1 \\\\ 2 & 2 & -2 \\\\ 3 & 1 & -1 \\end{vmatrix} = 1\\cdot(2 - 6) = -4 \\neq 0$.<br>So the product is singular iff $|A - \\beta I| = \\begin{vmatrix} 0 & 0 & 1 \\\\ 2 & 1 - \\beta & -2 \\\\ 3 & 1 & -2 - \\beta \\end{vmatrix} = 2 - 3(1 - \\beta) = 3\\beta - 1 = 0$.<br>$\\beta = \\frac13$ and $9\\beta = 3$."
        },
        // 12 | SECTION III - Q12 | Reflection and tangent (JEE Adv)
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 10,
            "text": "Let the point $B$ be the reflection of the point $A(2, 3)$ with respect to the line $8x - 6y - 23 = 0$. Let $\\Gamma_A$ and $\\Gamma_B$ be circles of radii $2$ and $1$ with centres $A$ and $B$ respectively. Let $T$ be a common tangent to the circles $\\Gamma_A$ and $\\Gamma_B$ such that both the circles are on the same side of $T$. If $C$ is the point of intersection of $T$ and the line passing through $A$ and $B$, then the length of the line segment $AC$ is ______.",
            "solution": "Image of $A(2, 3)$: $8(2) - 6(3) - 23 = -25$, so $B = (2, 3) - \\dfrac{2(-25)}{100}(8, -6) = (2, 3) + \\tfrac12(8, -6) = (6, 0)$. Hence $AB = \\sqrt{16 + 9} = 5$.<br>A common tangent with both circles on the same side is a direct (external) common tangent. It meets the line of centres at the external centre of similitude $C$, which divides $AB$ externally in the ratio of the radii: $\\dfrac{CA}{CB} = \\dfrac21$.<br>$C$ lies beyond $B$, so $CA - CB = AB = 5$ and $CA = 2\\,CB$ give $CB = 5$ and $CA = 10$."
        },
        // 13 | SECTION III - Q13 | Minimum area
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 24,
            "text": "A variable straight line passes through the point $(3, 4)$ and meets the positive $x$-axis and positive $y$-axis at $A$ and $B$ respectively. If $O$ is the origin, the minimum possible area of triangle $OAB$ (in square units) is ______.",
            "solution": "Let the line be $\\dfrac xa + \\dfrac yb = 1$ with $a, b \\gt  0$. Passing through $(3, 4)$: $\\dfrac3a + \\dfrac4b = 1$.<br>By AM-GM: $1 = \\dfrac3a + \\dfrac4b \\geq 2\\sqrt{\\dfrac{12}{ab}} \\Rightarrow \\sqrt{ab} \\geq 2\\sqrt{12} \\Rightarrow ab \\geq 48$.<br>Area $= \\frac12 ab \\geq 24$. Equality holds when $\\frac3a = \\frac4b = \\frac12$, i.e. $a = 6$, $b = 8$. Minimum area $= 24$."
        },
        // 14 | SECTION III - Q14 | Family of lines
        {
            "type": "numerical",
            "marks": 3,
            "negativeMarks": 0,
            "correctAnswer": 5,
            "text": "If $a, b, c$ are in arithmetic progression, the line $ax + by + c = 0$ always passes through a fixed point $P$. If $d$ is the distance of $P$ from the line $3x + 4y - 20 = 0$, then $d =$ ______.",
            "solution": "$a, b, c$ in A.P. means $a - 2b + c = 0$. The line $ax + by + c = 0$ is satisfied by $(x, y) = (1, -2)$ since $a - 2b + c = 0$. So $P = (1, -2)$.<br>$d = \\dfrac{|3(1) + 4(-2) - 20|}{\\sqrt{3^2 + 4^2}} = \\dfrac{|-25|}{5} = 5$."
        },
        // 15 | SECTION IV - Q15 | Matrix powers (Paragraph 1)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<div class='section-instruction'><h3>SECTION - IV (Maximum Marks: 12)</h3><b>Paragraph Type</b><br><br>This section contains <b>TWO (02)</b> paragraphs. Based on each paragraph, there are <b>TWO (02)</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><div class='passage-box'><b>Paragraph for Questions 15 and 16</b><br>Let $A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$ and $N = A - I$.</div><br>The $(1, 3)$ entry of $A^{20}$ is",
            "options": [
                        "$20$",
                        "$190$",
                        "$200$",
                        "$210$"
            ],
            "solution": "$N = \\begin{pmatrix} 0 & 1 & 0 \\\\ 0 & 0 & 1 \\\\ 0 & 0 & 0 \\end{pmatrix}$, $N^2 = \\begin{pmatrix} 0 & 0 & 1 \\\\ 0 & 0 & 0 \\\\ 0 & 0 & 0 \\end{pmatrix}$ and $N^3 = O$.<br>Since $I$ and $N$ commute, $A^n = (I + N)^n = I + nN + \\binom n2 N^2 = \\begin{pmatrix} 1 & n & \\binom n2 \\\\ 0 & 1 & n \\\\ 0 & 0 & 1 \\end{pmatrix}$.<br>The $(1, 3)$ entry of $A^{20}$ is $\\binom{20}{2} = 190$."
        },
        // 16 | SECTION IV - Q16 | Matrix powers (Paragraph 1)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "<div class='passage-box'><b>Paragraph for Questions 15 and 16</b><br>Let $A = \\begin{pmatrix} 1 & 1 & 0 \\\\ 0 & 1 & 1 \\\\ 0 & 0 & 1 \\end{pmatrix}$ and $N = A - I$.</div><br>The sum of all the entries of $A^{10}$ is",
            "options": [
                        "$66$",
                        "$78$",
                        "$58$",
                        "$68$"
            ],
            "solution": "From $A^n = \\begin{pmatrix} 1 & n & \\binom n2 \\\\ 0 & 1 & n \\\\ 0 & 0 & 1 \\end{pmatrix}$, with $n = 10$: the entries are $1, 10, 45, 1, 10, 1$ and three zeros.<br>Sum $= 1 + 10 + 45 + 1 + 10 + 1 = 68$."
        },
        // 17 | SECTION IV - Q17 | Triangle centres (Paragraph 2)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='passage-box'><b>Paragraph for Questions 17 and 18</b><br>Let $A(0, 0)$, $B(8, 0)$ and $C(2, 6)$ be the vertices of a triangle. Let $H$, $S$ and $G$ denote its orthocentre, circumcentre and centroid respectively.</div><br>The orthocentre $H$ of the triangle is",
            "options": [
                        "$(2, 4)$",
                        "$(4, 2)$",
                        "$(2, 2)$",
                        "$(4, 4)$"
            ],
            "solution": "The altitude from $C$ is perpendicular to $AB$ (the $x$-axis), so it is $x = 2$.<br>The side $AC$ has slope $\\frac{6}{2} = 3$, so the altitude from $B$ has slope $-\\frac13$: $y = -\\frac13(x - 8)$. At $x = 2$: $y = 2$.<br>$H = (2, 2)$. (Check: $AH \\perp BC$, since $(2, 2)\\cdot(-6, 6) = 0$.)"
        },
        // 18 | SECTION IV - Q18 | Triangle centres (Paragraph 2)
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "<div class='passage-box'><b>Paragraph for Questions 17 and 18</b><br>Let $A(0, 0)$, $B(8, 0)$ and $C(2, 6)$ be the vertices of a triangle. Let $H$, $S$ and $G$ denote its orthocentre, circumcentre and centroid respectively.</div><br>The distance between the circumcentre $S$ and the centroid $G$ is",
            "options": [
                        "$1$",
                        "$\\frac23$",
                        "$\\frac43$",
                        "$2$"
            ],
            "solution": "The circumcentre lies on the perpendicular bisector of $AB$, i.e. $x = 4$. Let $S = (4, k)$. Then $SA^2 = SC^2$ gives $16 + k^2 = 4 + (k - 6)^2 \\Rightarrow 16 = 40 - 12k \\Rightarrow k = 2$. So $S = (4, 2)$.<br>$G = \\left(\\frac{0 + 8 + 2}{3}, \\frac{0 + 0 + 6}{3}\\right) = \\left(\\frac{10}{3}, 2\\right)$.<br>$SG = 4 - \\frac{10}{3} = \\frac23$. (Consistent with Euler's line: $H = (2,2)$, $SH = 2$ and $SG = \\frac13 SH$.)"
        }
    ]
};
