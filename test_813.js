window.testBank = window.testBank || {};
window.testBank['test_813'] = {
    title: "APT-8 (15-09-2026) Pre-Test",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-09-11T12:00:00Z",
    timeLimitMins: 80,
    examPattern: "advance",
    markingSchemes: {
    mcq: [3, -1, 0],              // [Full, Incorrect, Unattempted]
    numerical: [4, 0, 0],         // [Full, Incorrect, Unattempted]
    multi_mcq: [4, 1, -2, 0],     // [Full, Partial, Incorrect, Unattempted]
    matrix_match: [8, 2, 0, 0]    // [Full, Partial, Incorrect, Unattempted]
    },    

    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // ================================================================
        // SECTION 1 : Single Correct MCQ  (+3, -1, 0)
        // ================================================================
        // 1
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - 1 (Maximum Marks: 18)</h3>This section contains <b>SIX (06)</b> questions.<br>Each question has <b>FOUR</b> options for correct answer(s). <b>ONLY ONE</b> of these four option is the correct answer.<br>For each question, choose the correct option corresponding to the correct answer.<br>Answer to each question will be evaluated according to the following marking scheme:<br><br><b>Full Marks :</b> +3 If only the correct option is chosen.<br><b>Zero Marks :</b> 0 If none of the option is chosen.(i.e the question is un answered)<br><b>Negative Marks:</b> -1 In all other cases.</div><br>If $y_1(x)$ and $y_2(x)$ are two solutions of $\\frac{dy}{dx} + f(x)y = r(x)$ then $y_1(x) + y_2(x)$ is solution of:",
            "options": [
                "$\\frac{dy}{dx} + f(x)y = 0$",
                "$\\frac{dy}{dx} + 2f(x)y = r(x)$",
                "$\\frac{dy}{dx} + f(x)y = 2r(x)$",
                "$\\frac{dy}{dx} + 2f(x)y = 2r(x)$"
            ],
            "solution": "$\\frac{dy_1}{dx} + f y_1 = r$<br>$\\frac{dy_2}{dx} + f y_2 = r$<br>Add: $\\frac{d}{dx}(y_1 + y_2) + f(y_1 + y_2) = 2r$<br>Hence, $y_1 + y_2$ is solution of $\\frac{dy}{dx} + f(x)y = 2r(x)$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 3,
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
        // 3
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "The number of integers greater than 6,000 that can be formed, using the digits 3,5,6,7 and 8, without repetition, is:",
            "options": [
                "216",
                "192",
                "120",
                "72"
            ],
            "solution": "5-digit numbers: $5! = 120$.<br>4-digit numbers: First digit can be 6, 7, or 8 (3 choices). Remaining 3 digits from remaining 4: $^4P_3 = 24$. Total $= 3 \\times 24 = 72$.<br>Total $= 120 + 72 = 192$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 3,
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
        // 5
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "There are 50 persons among whom 2 are brothers. The number of ways they can be arranged in a circle, if there is exactly one person between the two brothers is",
            "options": [
                "$47!$",
                "$48!$",
                "$2 \\cdot 48!$",
                "$2 \\cdot 47!$"
            ],
            "solution": "Treat the two brothers and the person between them as a single block. Number of ways to choose the person between them is 48.<br>The block and the remaining 47 persons form 48 entities. Circular arrangement of 48 entities is $(48-1)! = 47!$.<br>The two brothers can be arranged in 2 ways. Total $= 2 \\times 48 \\times 47! = 2 \\times 48!$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "A class contains 4 boys and g girls. Every Sunday five students, including at least three boys go for a picnic to Appu Ghar, a different group being sent every week. During, the picnic, the class teacher gives a doll to each girl in the group. If the total number of dolls distributed was 85, then value of g is",
            "options": [
                "15",
                "12",
                "8",
                "5"
            ],
            "solution": "Total dolls = (number of groups with 3 boys and 2 girls) $\\times$ 2 + (number of groups with 4 boys and 1 girl) $\\times$ 1.<br>$= {}^4C_3 \\cdot {}^gC_2 \\cdot 2 + {}^4C_4 \\cdot {}^gC_1 \\cdot 1 = 4 \\cdot \\frac{g(g-1)}{2} \\cdot 2 + g = 4g(g-1) + g = 4g^2 - 3g$.<br>Given $4g^2 - 3g = 85 \\implies 4g^2 - 3g - 85 = 0 \\implies (4g + 17)(g - 5) = 0 \\implies g = 5$."
        },

        // ================================================================
        // SECTION 2 : Multi Correct MCQ  (+4, -2, partial +1)
        // ================================================================
        //7
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [0, 3],
            "text": "<div class='section-instruction'><h3>SECTION - 2 (Maximum Marks: 24)</h3>This section contains <b>SIX (06)</b> questions.<br>Each question has <b>FOUR</b> options for correct answer(s). <b>ONE OR MORE THAN ONE</b> of these four option(s) is (are) correct option(s).<br>For each question, choose the correct option(s) to answer the question.<br>Answer to each question will be evaluated according to the following marking scheme:<br><br><b>Full Marks :</b> +4 If only (all) the correct option(s) is (are) chosen.<br><b>Partial Marks :</b> +3 If all the four options are correct but ONLY three options are chosen.<br><b>Partial Marks :</b> +2 If three or more options are correct but ONLY two options are chosen, both of which are correct options.<br><b>Partial Marks :</b> +1 If two or more options are correct but ONLY one option is chosen and it is a correct option.<br><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).<br><b>Negative Marks:</b> -2 In all other cases.</div><br>A differentiable function satisfies equation $f(x) = \\int_{0}^{x} (f(t)\\cos t - \\cos(t - x))dt$ then",
            "options": [
                "$f''\\left(\\frac{\\pi}{2}\\right) = e$",
                "$\\lim_{x \\to -\\infty} f(x) = 1$",
                "$f(x)$ has minimum value $1 - e^{-1}$",
                "$f'(0) = -1$"
            ],
            "solution": "$f(x) = \\int_0^x f(t)\\cos t \\, dt - \\int_0^x \\cos(t-x) \\, dt$<br>$f(x) = \\int_0^x f(t)\\cos t \\, dt - \\int_0^x \\cos t \\, dt$<br>$f'(x) = f(x)\\cos x - \\cos x \\implies \\frac{dy}{dx} = y\\cos x - \\cos x$<br>$\\frac{dy}{dx} - y\\cos x = -\\cos x$<br>IF $= e^{-\\sin x}$<br>$y \\cdot e^{-\\sin x} = \\int -e^{-\\sin x}\\cos x \\, dx = e^{-\\sin x} + c$<br>$y = ce^{\\sin x} + 1$<br>$y=0$ when $x=0 \\implies c = -1$<br>$f(x) = 1 - e^{\\sin x}$<br>$f'(0) = f(0) - 1 = -1$<br>$f''(x) = f(x)(-\\sin x) + \\cos x \\cdot f'(x) + \\sin x$<br>$f''\\left(\\frac{\\pi}{2}\\right) = -f\\left(\\frac{\\pi}{2}\\right) + 1 = -1 + e + 1 = e$"
        },
        //8
        {
        "type": "multi_mcq",
        "marks": 4,
        "negativeMarks": -2,
        "correctAnswers": [0, 1, 2, 3],
        "text": "Which of the following statements is/are correct?",
        "options": [
            "If $T_n$ is the number of all possible triangles formed by joining vertices of an $n$-sided regular polygon and $T_{n+1} - T_n = 10$, then $n = 5$.",
            "Number of words each consisting of two vowels and two consonants which can be made out of the letters of the word 'DEVASTATION' is 1638.",
            "The total number of words that can be made by writing the letters of the word 'PARAMETER' so that none of the vowel lies between the two consonants is 1800.",
            "Number of different ways in which 8 different books can be distributed among 3 students, if each student receives at least 2 books is 2940."
        ],
        "solution": "(A) $T_n = {}^nC_3$. $T_{n+1} - T_n = {}^{n+1}C_3 - {}^nC_3 = {}^nC_2 = \\frac{n(n-1)}{2} = 10 \\implies n^2 - n - 20 = 0 \\implies n = 5$. True.<br>(B) DEVASTATION: vowels (A,A,E,I,O), consonants (D,V,S,T,T,N). Count of 4-letter words with 2 vowels and 2 consonants is 1638. True.<br>(C) PARAMETER: Count of words with no vowel between two consonants is 1800. True.<br>(D) Distribution of 8 distinct books among 3 students each getting at least 2: Cases (4,2,2) and (3,3,2). Total $= 1260 + 1680 = 2940$. True."
        },
        // 9
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [0, 2],
            "text": "For any real numbers $\\alpha$ and $\\beta$, let $y_{\\alpha,\\beta}(x)$, $x \\in R$, be the solution of the differential equation $\\frac{dy}{dx} + \\alpha y = xe^{\\beta x}$, $y(1) = 1$. Let $S = \\{y_{\\alpha,\\beta}(x): \\alpha, \\beta \\in R\\}$ Then, which of the following functions belong(s) to the set $S$?",
            "options": [
                "$f(x) = \\frac{x^2}{2}e^{-x} + \\left(e - \\frac{1}{2}\\right)e^{-x}$",
                "$f(x) = -\\frac{x^2}{2}e^{-x} + \\left(e + \\frac{1}{2}\\right)e^{-x}$",
                "$f(x) = \\frac{e^x}{2}\\left(x - \\frac{1}{2}\\right) + \\left(e - \\frac{e^2}{4}\\right)e^{-x}$",
                "$f(x) = \\frac{e^x}{2}\\left(\\frac{1}{2} - x\\right) + \\left(e + \\frac{e^2}{4}\\right)e^{-x}$"
            ],
            "solution": "Given $\\frac{dy}{dx} + \\alpha y = x e^{\\beta x}$, IF $= e^{\\alpha x}$.<br>Solution: $y \\cdot e^{\\alpha x} = \\int x e^{(\\alpha+\\beta)x}dx$<br>Case I: If $\\alpha + \\beta = 0$<br>$ye^{\\alpha x} = \\int x dx = \\frac{x^2}{2} + C$<br>Given $y(1)=1$: $e^{\\alpha} = \\frac{1}{2} + C \\implies C = e^{\\alpha} - \\frac{1}{2}$<br>For $\\alpha=1$: $y = \\frac{x^2}{2}e^{-x} + (e - \\frac{1}{2})e^{-x}$ (Option A)<br>Case II: If $\\alpha + \\beta \\neq 0$<br>$y = \\frac{e^{\\beta x}}{\\alpha+\\beta}\\left(x - \\frac{1}{\\alpha+\\beta}\\right) + c_1 e^{-\\alpha x}$<br>Putting $\\alpha=\\beta=1$: $y = \\frac{e^x}{2}\\left(x - \\frac{1}{2}\\right) + c_1 e^{-x}$<br>Given $y(1)=1$: $c_1 = e - \\frac{e^2}{4}$<br>So $y = \\frac{e^x}{2}\\left(x - \\frac{1}{2}\\right) + \\left(e - \\frac{e^2}{4}\\right)e^{-x}$ (Option C)"
        },
        // 10
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [0, 2],
            "text": "The equation of the curve passing through the point $(1, \\pi/4)$ and having slope of tangent at any $(x, y)$ as $\\frac{y}{x} - \\cos^{2}\\left(\\frac{y}{x}\\right)$ is equal to:",
            "options": [
                "$x = e^{1-\\tan(y/x)}$",
                "$y = x\\tan^{-1}(\\log x/e)$",
                "$y = x\\tan^{-1}\\log(e/x)$",
                "$x = e^{1+\\cot(y/2)}$"
            ],
            "solution": "Let $v = y/x$. Then $\\frac{dy}{dx} = v + x\\frac{dv}{dx} = v - \\cos^2 v \\implies x\\frac{dv}{dx} = -\\cos^2 v$<br>$\\sec^2 v \\, dv = -\\frac{dx}{x}$<br>Integrating: $\\tan v = -\\ln|x| + C$<br>At $x=1, v=\\pi/4$: $\\tan(\\pi/4)=1 \\implies C=1$<br>$\\tan(y/x) = 1 - \\ln x = \\ln(e/x) \\implies y = x\\tan^{-1}\\ln(e/x)$<br>Also $x = e^{1-\\tan(y/x)}$ is equivalent."
        },
        // 11
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [0, 2, 3],
            "text": "Let $\\Delta PQR$ be a triangle. Let $\\vec{a} = \\vec{QR}, \\vec{b} = \\vec{RP}$ and $\\vec{c} = \\vec{PQ}$. If $|\\vec{a}| = 12, |\\vec{b}| = 4\\sqrt{3}$ and $\\vec{b} \\cdot \\vec{c} = 24$, then which of the following is(are) true?",
            "options": [
                "$\\frac{|\\vec{c}|^2}{2} - |\\vec{a}| = 12$",
                "$\\frac{|\\vec{c}|^2}{2} + |\\vec{a}| = 30$",
                "$|\\vec{a} \\times \\vec{b} + \\vec{c} \\times \\vec{a}| = 48\\sqrt{3}$",
                "$\\vec{a} \\cdot \\vec{b} = -72$"
            ],
            "solution": "$\\vec{a} + \\vec{b} + \\vec{c} = 0 \\implies \\vec{c} = -(\\vec{a} + \\vec{b})$.<br>$\\vec{b} \\cdot \\vec{c} = 24 \\implies \\vec{b} \\cdot (-(\\vec{a} + \\vec{b})) = 24 \\implies -\\vec{a} \\cdot \\vec{b} - |\\vec{b}|^2 = 24 \\implies -\\vec{a} \\cdot \\vec{b} - 48 = 24 \\implies \\vec{a} \\cdot \\vec{b} = -72$.<br>$|\\vec{c}|^2 = |\\vec{a} + \\vec{b}|^2 = |\\vec{a}|^2 + |\\vec{b}|^2 + 2\\vec{a} \\cdot \\vec{b} = 144 + 48 - 144 = 48$.<br>(A) $48/2 - 12 = 24 - 12 = 12$. True.<br>(B) $48/2 + 12 = 24 + 12 = 36 \\neq 30$. False.<br>(C) $|\\vec{a} \\times \\vec{b} + \\vec{c} \\times \\vec{a}| = |\\vec{a} \\times \\vec{b} + (-(\\vec{a} + \\vec{b})) \\times \\vec{a}| = |\\vec{a} \\times \\vec{b} + \\vec{a} \\times \\vec{b}| = 2|\\vec{a} \\times \\vec{b}| = 2\\sqrt{|\\vec{a}|^2|\\vec{b}|^2 - (\\vec{a} \\cdot \\vec{b})^2} = 2\\sqrt{144 \\cdot 48 - 5184} = 2\\sqrt{1728} = 48\\sqrt{3}$. True.<br>(D) $\\vec{a} \\cdot \\vec{b} = -72$. True."
        },
        // 12 (Multi Correct Question based on the provided image)
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "correctAnswers": [0, 2],
            "text": "Different words are formed by arranging the letters of the word \"SUCCESS\", then",
            "options": [
                "The number of words in which C are together but S's are separated, is 24",
                "The number of words in which no two C's and no two S's are together is 96",
                "The number of words in which the consonants appear in alphabetic order is 42",
                "None of these"
            ],
            "solution": "(A) Let C be together (CC). We have {CC, U, E} to arrange first. Number of ways = 3! = 6. This creates 4 gaps: _ X _ X _ X _. We need to place 3 S's in these 4 gaps such that no two S's are together. Number of ways = ^4C_3 = 4. Total words = 6 × 4 = 24. True.<br>(B) Total arrangements of SUCCESS = 7!/(3!2!) = 420. Number of words where no two C's and no two S's are together is not 96. (Calculated value is 30). False.<br>(C) The consonants in SUCCESS are C, C, S, S, S. In any arrangement of all letters, the relative order of these 5 consonants can be any of 5!/(3!2!) = 10 ways. Since all are equally likely, the number of words with consonants in alphabetical order (C, C, S, S, S) is 420/10 = 42. True.<br>(D) Since (A) and (C) are true, (D) is false. (Note: Official key marks only (A), but (C) is mathematically correct)."
        },
        // ================================================================
        // SECTION 3 : Numerical Value  (+4, -1, 0)
        // ================================================================
        // 13
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - 3 (Maximum Marks: 24)</h3>This section contains <b>SIX (06)</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>.<br>For each question, enter the correct numerical value of the answer using the mouse and the on-screen virtual numeric keypad in the place designated to enter the answer. If the numerical value has more than two decimal places <b>truncate/round-off</b> the value to <b>TWO</b> decimal places.<br>Answer to each question will be evaluated according to the following marking scheme:<br><br><b>Full Marks :</b> +4 If only the correct numerical value is entered as answer.<br><b>Zero Marks :</b> 0 If none of the options is chosen (i.e. the question is unanswered).<br><b>Negative Marks :</b> -1 In all other cases.</div><br>If the solution of $x\\frac{d^{2}y}{dx^{2}} + \\frac{dy}{dx} = \\ln x$, where at $x = 1$ the value of $y = 1$ and $\\frac{dy}{dx} = -1$, is $y = x\\ln x - px + 3$, then find $p$.",
            "solution": "$\\frac{d}{dx}\\left(x\\frac{dy}{dx}\\right) = \\log x$<br>$x\\frac{dy}{dx} = x\\log x - x + c \\implies (1)(-1) = 0 - 1 + c \\implies c = 0$<br>$x\\frac{dy}{dx} = x\\log x - x \\implies dy = (\\log x - 1)dx$<br>$y = x\\log x - x - x + c_1 \\implies c_1 = 3$<br>So $p = 2$"
        },
        // 14
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If solution of the differential equation $\\frac{dy}{dx} = \\frac{1}{x\\cos y + \\sin 2y}$ is $x = ce^{\\sin y} - k(1 + \\sin y)$, then $k =$",
            "solution": "$\\frac{dy}{dx} = \\frac{1}{x\\cos y + 2\\sin y \\cos y}$<br>$\\frac{dx}{dy} = x\\cos y + 2\\sin y \\cos y$<br>$\\frac{dx}{dy} + (-\\cos y)x = 2\\sin y \\cos y$<br>IF $= e^{-\\int \\cos y \\, dy} = e^{-\\sin y}$<br>$x \\cdot e^{-\\sin y} = 2\\int e^{-\\sin y} \\sin y \\cos y \\, dy = -2\\sin y e^{-\\sin y} - 2\\int (-e^{-\\sin y})\\cos y \\, dy$<br>$= -2\\sin y e^{-\\sin y} + 2\\int e^{-\\sin y}\\cos y \\, dy = -2\\sin y e^{-\\sin y} - 2e^{-\\sin y} + c$<br>$x = ce^{\\sin y} - 2(1 + \\sin y)$<br>Comparing gives $k = 2$"
        },
        // 15
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Let $y'(x) + y(x)g'(x) = g(x)g'(x)$, $y(0) = 0$, $x \\in R$, where $f'(x)$ denotes $\\frac{df(x)}{dx}$ and $g(x)$ is a given non-constant differentiable function on $R$ with $g(0) = g(2) = 0$. Then, the value of $y(2)$ is ......",
            "solution": "$\\frac{dy}{dx} + y \\cdot g'(x) = g(x)g'(x)$<br>IF $= e^{\\int g'(x)dx} = e^{g(x)}$<br>Solution: $y(e^{g(x)}) = \\int g(x) \\cdot g'(x) \\cdot e^{g(x)}dx + C$<br>Put $g(x) = t$, $g'(x)dx = dt$<br>$y(e^{g(x)}) = \\int t \\cdot e^t dt + C = t \\cdot e^t - \\int 1 \\cdot e^t dt + C = t \\cdot e^t - e^t + C$<br>$y e^{g(x)} = (g(x)-1)e^{g(x)} + C$<br>Given $y(0)=0, g(0)=g(2)=0$<br>$0 = (-1) \\cdot 1 + C \\implies C = 1$<br>At $x=2$: $y(2) \\cdot e^0 = (0-1)e^0 + 1 = -1 + 1 = 0$"
        },
        // 16
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 4,
            "text": "If $\\vec{a}$ and $\\vec{b}$ are vectors such that $|\\vec{a} + \\vec{b}| = \\sqrt{29}$ and $\\vec{a} \\times (2\\hat{i} + 3\\hat{j} + 4\\hat{k}) = (2\\hat{i} + 3\\hat{j} + 4\\hat{k}) \\times \\vec{b}$, then a possible value of $(\\vec{a} + \\vec{b}) \\cdot (-7\\hat{i} + 2\\hat{j} + 3\\hat{k})$ is",
            "solution": "$\\vec{a} \\times \\vec{v} = \\vec{v} \\times \\vec{b} \\implies \\vec{a} \\times \\vec{v} + \\vec{b} \\times \\vec{v} = 0 \\implies (\\vec{a} + \\vec{b}) \\times \\vec{v} = 0$. So $(\\vec{a} + \\vec{b})$ is parallel to $\\vec{v} = 2\\hat{i} + 3\\hat{j} + 4\\hat{k}$.<br>$|\\vec{a} + \\vec{b}| = \\sqrt{29}$ and $|\\vec{v}| = \\sqrt{4+9+16} = \\sqrt{29}$. So $\\vec{a} + \\vec{b} = \\pm \\vec{v}$.<br>$(\\vec{a} + \\vec{b}) \\cdot (-7\\hat{i} + 2\\hat{j} + 3\\hat{k}) = \\pm (2(-7) + 3(2) + 4(3)) = \\pm(-14 + 6 + 12) = \\pm 4$. Possible value is 4."
        },
        // 17
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 7350,
            "text": "How many different permutations are possible using all the letters of the word MISSISSIPPI, if no two I's are together?",
            "solution": "The word MISSISSIPPI has 11 letters: M(1), I(4), S(4), P(2).<br>Arrange the 7 non-I letters: $\\frac{7!}{4!2!} = 105$. There are 8 gaps. Choose 4 gaps for the 4 I's: $^8C_4 = 70$.<br>Total permutations $= 105 \\times 70 = 7350$."
        },
        // 18
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 12,
            "text": "Solution of differential equation $\\sin y \\cdot \\frac{dy}{dx} + \\frac{1}{x}\\cos y = x^4\\cos^2 y$ is $\\alpha x \\sec y = x^{\\beta} + C$. Find $\\alpha + \\beta =$",
            "solution": "Divide by $\\cos^2 y$: $\\frac{\\sin y}{\\cos^2 y}\\frac{dy}{dx} + \\frac{1}{x\\cos y} = x^4$.<br>Let $\\sec y = t$, then $\\sec y \\tan y \\frac{dy}{dx} = \\frac{dt}{dx} \\implies \\frac{\\sin y}{\\cos^2 y}\\frac{dy}{dx} = \\frac{dt}{dx}$.<br>The equation becomes $\\frac{dt}{dx} + \\frac{1}{x}t = x^4$. IF $= x$.<br>$t \\cdot x = \\int x^5 dx = \\frac{x^6}{6} + C \\implies x\\sec y = \\frac{x^6}{6} + C$.<br>Multiply by 6: $6x\\sec y = x^6 + 6C$. So $\\alpha = 6, \\beta = 6$. $\\alpha + \\beta = 12$."
        }

    ]
};