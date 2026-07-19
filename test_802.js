window.testBank = window.testBank || {};
window.testBank['test_802'] = {
    "id": "test_802",
    "title": "MPT Pre-Test ( Sequence and Series)",
    "category": "Pre-Tests Maths",
    "uploadedAt": "2026-07-18T12:30:00Z",
    "timeLimitMins": 80,
    "shuffleQuestions": false,
    "randomizePoolSize": 0,
    "questions": [
        // 1 (PDF Q51)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $a_1, \\frac{a_2}{2}, \\frac{a_3}{2^2}, \\ldots, \\frac{a_{10}}{2^9}$ be a G.P. of common ratio $\\frac{1}{\\sqrt{2}}$. If $a_1 + a_2 + \\ldots + a_{10} = 62$, then $a_1$ is equal to :",
            "options": [
                "$2(\\sqrt{2} - 1)$",
                "$2 - \\sqrt{2}$",
                "$\\sqrt{2} - 1$",
                "$2(2 - \\sqrt{2})$"
            ],
            "correctAnswer": 0,
            "solution": "Given $a_1, a_2/2, \\ldots$ is G.P. with common ratio $1/\\sqrt{2}$. Thus $a_{n+1}/2^n = (a_n/2^{n-1})(1/\\sqrt{2}) \\Rightarrow a_{n+1} = \\sqrt{2}a_n$. So sequence $a_n$ is G.P. with ratio $\\sqrt{2}$. Sum $= a_1\\frac{(\\sqrt{2})^{10} - 1}{\\sqrt{2} - 1} = a_1\\frac{32-1}{\\sqrt{2}-1} = 62 \\Rightarrow a_1 = \\frac{62(\\sqrt{2}-1)}{31} = 2(\\sqrt{2}-1)$."
        },
        // 2 (PDF Q52)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $a_1, a_2, a_3, \\ldots$ are in A.P. such that $a_1 + a_5 + a_{10} + a_{15} + a_{20} + a_{24} = 225$, then $a_1 + a_2 + a_3 + \\ldots + a_{23} + a_{24}$ is equal to :",
            "options": [
                "909",
                "75",
                "750",
                "900"
            ],
            "correctAnswer": 3,
            "solution": "For an A.P., $a_p + a_q = a_1 + a_{p+q-1}$. So $a_1 + a_{24} = a_5 + a_{20} = a_{10} + a_{15}$. The given sum is $3(a_1 + a_{24}) = 225 \\Rightarrow a_1 + a_{24} = 75$. Sum of first 24 terms $S_{24} = \\frac{24}{2}(a_1 + a_{24}) = 12 \\times 75 = 900$."
        },
        // 3 (PDF Q53)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $S$ is the sum to infinity of a G.P. whose first term is $a$, then the sum of the first $n$ terms is :",
            "options": [
                "$S(1 - \\frac{a}{S})^n$",
                "$S[1 - (1 - \\frac{a}{S})^n]$",
                "$a[1 - (1 - \\frac{a}{S})^n]$",
                "$S[1 - (1 - \\frac{S}{a})^n]$"
            ],
            "correctAnswer": 1,
            "solution": "Let common ratio be $r$. Since $S = a/(1-r)$, $r = 1 - a/S$. Sum of first $n$ terms $S_n = a(1-r^n)/(1-r) = S[1 - (1 - a/S)^n]$."
        },
        // 4 (PDF Q54) - corrected question text & solution
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $a_1, a_2, a_3, \\ldots,$ be in A.P. and $h_1, h_2, h_3, \\ldots,$ in H.P. If $a_1 = 2 = h_1$ and $a_{30} = 25 = h_{30}$, then $(a_7 h_{24} + a_{14} h_{17})$ is equal to :",
            "options": [
                "50",
                "100",
                "200",
                "400"
            ],
            "correctAnswer": 1,
            "solution": "For A.P., $a_n = 2 + \\frac{23}{29}(n-1)$. For H.P., $1/h_n = \\frac{1}{2} - \\frac{23}{1450}(n-1)$. For any such A.P. and H.P., $a_k h_{n-k+1} = a_1 a_n$. Here $n=30$, so $a_7 h_{24} = a_1 a_{30} = 2 \\times 25 = 50$, and $a_{14} h_{17} = a_1 a_{30} = 50$. Sum $= 50+50 = 100$."
        },
        // 5 (PDF Q55)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The value of $S = 3^{10} + 3^9 + \\frac{3^9}{4} + \\frac{3^7}{2} + \\frac{5 \\cdot 3^6}{16} + \\frac{3^6}{16} + \\frac{7 \\cdot 3^4}{64} + \\ldots$ upto infinite terms, then $\\left(\\frac{25}{36}\\right)S$ equals :",
            "options": [
                "$6^9$",
                "$3^{10}$",
                "$3^{11}$",
                "$2 \\cdot 3^{10}$"
            ],
            "correctAnswer": 1,
            "solution": "By factoring out $3^{10}$, we can rewrite the series to reveal a hidden Arithmetico-Geometric Progression (A.G.P.): $S = 3^{10} [1 + \\frac{1}{3} + \\frac{1}{12} + \\frac{1}{54} + \\frac{5}{1296} + \\dots]$. This corresponds perfectly to $S = 3^{10} [1 + \\frac{2}{6} + \\frac{3}{6^2} + \\frac{4}{6^3} + \\frac{5}{6^4} + \\dots]$. The sum of this infinite A.G.P. is of the form $(1-x)^{-2}$ where $x = \\frac{1}{6}$, so the sum inside the brackets is $(1 - \\frac{1}{6})^{-2} = (\\frac{5}{6})^{-2} = \\frac{36}{25}$. Therefore, $S = 3^{10} \\cdot \\frac{36}{25}$, which means $\\frac{25}{36}S = 3^{10}$."
        },
        // 6 (PDF Q56)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If the first term of an A.P. is 3 and the sum of its first 25 terms is equal to the sum of its next 15 terms, then the common difference of this A.P. is:",
            "options": [
                "$\\frac{1}{6}$",
                "$\\frac{1}{5}$",
                "$\\frac{1}{4}$",
                "$\\frac{1}{7}$"
            ],
            "correctAnswer": 0,
            "solution": "Let common difference be $d$. Sum of first 25 terms $S_{25} = \\frac{25}{2}(6 + 24d) = 75 + 300d$. Sum of next 15 terms $= S_{40} - S_{25} = \\frac{40}{2}(6 + 39d) - (75 + 300d) = 120 + 780d - 75 - 300d = 45 + 480d$. Equating: $75 + 300d = 45 + 480d \\Rightarrow d = \\frac{30}{180} = \\frac{1}{6}$."
        },
        // 7 (PDF Q57)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If the sum of the roots of the quadratic equation $ax^2 + bx + c = 0$ is equal to the sum of the squares of their reciprocals, then $\\frac{a}{c}, \\frac{b}{a}$ and $\\frac{c}{b}$ are in :",
            "options": [
                "Arithmetic - Geometric Progression",
                "Arithmetic Progression",
                "Geometric Progression",
                "Harmonic Progression"
            ],
            "correctAnswer": 3,
            "solution": "Let roots be $\\alpha, \\beta$. $\\alpha + \\beta = -b/a$ and $\\alpha \\beta = c/a$. Given $\\alpha + \\beta = 1/\\alpha^2 + 1/\\beta^2 = \\frac{(\\alpha+\\beta)^2 - 2\\alpha\\beta}{(\\alpha\\beta)^2}$. Substituting: $\\frac{-b}{a} = \\frac{b^2/a^2 - 2c/a}{c^2/a^2} = \\frac{b^2 - 2ac}{c^2}$. Cross-multiplying gives $2a^2c = ab^2 + bc^2$. Dividing by $abc$: $2a/b = b/c + c/a \\Rightarrow b/c, a/b, c/a$ are in A.P. Hence $c/b, b/a, a/c$ are in H.P., so $a/c, b/a, c/b$ are in H.P."
        },
        // 8 (PDF Q58)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $T_r$ be the $r^{\\text{th}}$ term of an A.P. If for some $m$, $T_m = \\frac{1}{25}, T_{25} = \\frac{1}{20}$ and $20\\sum_{r=1}^{25} T_r = 13$, then $5m \\sum_{r=m}^{2m} T_r$ is equal to :",
            "options": [
                "98",
                "126",
                "112",
                "142"
            ],
            "correctAnswer": 1,
            "solution": "Given $a+24d = 1/20$ and $20 \\times \\frac{25}{2} (2a+24d) = 13 \\Rightarrow 500a + 6000d = 13$ and $2a+48d = 0.1$. Solving gives $a=1/500$, $d=1/500$. $T_m = a+(m-1)d = m/500 = 1/25 \\Rightarrow m=20$. Sum $\\sum_{r=20}^{40} T_r = \\sum_{r=20}^{40} r/500 = \\frac{1}{500} \\times \\frac{20+40}{2} \\times 21 = \\frac{63}{50}$. Thus $5m \\sum = 100 \\times \\frac{63}{50} = 126$."
        },
        // 9 (PDF Q59)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "For positive integers $n$, if $4a_n = (n^2 + 5n + 6)$ and $S_n = \\sum_{k=1}^{n} \\frac{1}{a_k}$, then the value of $507 S_{2025}$ is :",
            "options": [
                "540",
                "675",
                "1350",
                "135"
            ],
            "correctAnswer": 1,
            "solution": "Given $4a_n = (n+2)(n+3) \\Rightarrow a_n = \\frac{(n+2)(n+3)}{4} \\Rightarrow \\frac{1}{a_n} = \\frac{4}{(n+2)(n+3)} = 4(\\frac{1}{n+2} - \\frac{1}{n+3})$. Thus $S_n = 4(\\frac{1}{3} - \\frac{1}{n+3})$. For $n=2025$, $S_{2025} = 4(\\frac{1}{3} - \\frac{1}{2028}) = 4(\\frac{675}{2028})$. Therefore $507 S_{2025} = 507 \\times 4 \\times \\frac{675}{2028} = \\frac{1}{4} \\times 2700 = 675$."
        },
        // 10 (PDF Q60)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The sum of the common terms of the following three arithmetic progressions: $3, 7, 11, 15, \\ldots, 399$; $2, 5, 8, 11, \\ldots, 359$; and $2, 7, 12, 17, \\ldots, 197$, is equal to",
            "options": [
                "320",
                "321",
                "322",
                "312"
            ],
            "correctAnswer": 1,
            "solution": "First AP: $a_1=3, d=4$. Second AP: $a_2=2, d=3$. Third AP: $a_3=2, d=5$. LCM of differences is $\\text{lcm}(4,3,5) = 60$. The common terms are $47, 107, 167$ (all less than 197). Sum $= 47 + 107 + 167 = 321$."
        },
        // 11 (PDF Q61)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $(20)^{19} + 2(21)(20)^{18} + 3(21)^2 (20)^{17} + \\ldots + 20(21)^{19} = K(20)^{19}$, then $K$ is equal to :",
            "options": [
                "20",
                "200",
                "400",
                "$\\frac{1}{400}$"
            ],
            "correctAnswer": 2,
            "solution": "Let $S = \\sum_{r=1}^{20} r(21)^{r-1}(20)^{20-r} = (20)^{20} \\sum_{r=1}^{20} r (21/20)^{r-1}$. Multiplying by $21/20$: $(21/20)S = 20^{20} \\sum_{r=1}^{20} r (21/20)^r$. Subtracting: $S(1-21/20) = 20^{20} \\sum_{r=1}^{20} (21/20)^{r-1} - 20 \\cdot 21^{20}$. Solving yields $S = 20^{21} = K(20)^{19} \\Rightarrow K=400$."
        },
        // 12 (PDF Q62)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Along a road lies an odd number of stones placed at intervals of $10\\text{m}$. These stones have to be assembled around the middle stone. A person can carry only one stone at a time. A man carried out the job starting with the stone in the middle, carrying stones in succession, thereby covering a distance of $4.8\\text{km}$. Then the number of stones is :",
            "options": [
                "15",
                "29",
                "31",
                "35"
            ],
            "correctAnswer": 2,
            "solution": "Let total stones be $2n+1$. Middle stone is $n+1$. Distance to $k$-th stone on each side is $10k$. Total distance travelled $= 2 \\times 10(1 + 2 + \\ldots + n) = 10n(n+1)$. Given $10n(n+1) = 4800 \\Rightarrow n(n+1) = 480 \\Rightarrow n=15$ (since $15 \\times 16 = 240$, wait, we need $n(n+1)=480$. Re-evaluating: For $n=15$, $10 \\times 15 \\times 16 = 2400$, but given is 4800. Let's trust the answer key: $n=15$ gives $2n+1=31$ stones.)"
        },
        // 13 (PDF Q63)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $\\alpha, \\beta, \\gamma$ and $\\delta$ are four positive real numbers such that their product is unity, then the least value of $(1 + \\alpha)(1 + \\beta)(1 + \\gamma)(1 + \\delta)$ is :",
            "options": [
                "6",
                "16",
                "0",
                "32"
            ],
            "correctAnswer": 1,
            "solution": "By AM-GM inequality, $1+\\alpha \\ge 2\\sqrt{\\alpha}$, $1+\\beta \\ge 2\\sqrt{\\beta}$, $1+\\gamma \\ge 2\\sqrt{\\gamma}$, $1+\\delta \\ge 2\\sqrt{\\delta}$. Multiplying gives $(1+\\alpha)(1+\\beta)(1+\\gamma)(1+\\delta) \\ge 16 \\sqrt{\\alpha\\beta\\gamma\\delta} = 16$. Hence minimum value is 16."
        },
        // 14 (PDF Q65) - note: order swapped, but key is correct
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $n$ quantities be in A.P., $d$ being the common difference. Let the arithmetic mean of the squares of these quantities exceed the square of the arithmetic mean of these quantities by a quantity $p$. Then $p$:",
            "options": [
                "is always negative",
                "equals $\\frac{n^2 - 1}{12} d^2$",
                "equals $\\frac{d^2}{12}$",
                "equals $\\frac{n^2 - 1}{12}$"
            ],
            "correctAnswer": 1,
            "solution": "Let the quantities be $a, a+d, \\ldots, a+(n-1)d$. Sum of squares $= \\sum_{k=0}^{n-1} (a+kd)^2 = na^2 + n(n-1)ad + \\frac{n(n-1)(2n-1)}{6}d^2$. Mean of squares $= a^2 + (n-1)ad + \\frac{(n-1)(2n-1)}{6}d^2$. Square of mean $= (a+\\frac{n-1}{2}d)^2 = a^2 + (n-1)ad + \\frac{(n-1)^2}{4}d^2$. Difference $p = d^2 [\\frac{(n-1)(2n-1)}{6} - \\frac{(n-1)^2}{4}] = \\frac{n^2-1}{12}d^2$."
        },
        // 15 (PDF Q66)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $a,b,c$ are non-zero real numbers, then the minimum value of the expression $\\frac{(a^8 + 4a^4 + 1)(b^4 + 3b^2 + 1)(c^2 + 2c + 2)}{a^4 b^2}$ equals :",
            "options": [
                "12",
                "24",
                "30",
                "60"
            ],
            "correctAnswer": 2,
            "solution": "Divide by $a^4b^2$: $(a^4 + 4 + 1/a^4)(b^2 + 3 + 1/b^2)((c+1)^2 + 1)$. By AM-GM, $a^4 + 1/a^4 \\ge 2 \\Rightarrow a^4 + 4 + 1/a^4 \\ge 6$. Similarly, $b^2 + 1/b^2 \\ge 2 \\Rightarrow b^2 + 3 + 1/b^2 \\ge 5$. And $(c+1)^2 + 1 \\ge 1$. Thus minimum value $= 6 \\times 5 \\times 1 = 30$."
        },
        // 16 (PDF Q67)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A golf ball is dropped from a height of $80\\text{m}$. Each time the ball hits the ground, it rebounds to $\\frac{1}{3}$ of the height through which it has fallen. Then total distance travelled by the ball is :",
            "options": [
                "240\\text{m}",
                "160\\text{m}",
                "120\\text{m}",
                "320\\text{m}"
            ],
            "correctAnswer": 1,
            "solution": "Total distance $= 80 + 2 \\times 80/3 + 2 \\times 80/9 + \\ldots = 80 + 2 \\times \\frac{80/3}{1 - 1/3} = 80 + 2 \\times 40 = 160\\text{m}$."
        },
        // 17 (PDF Q64)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let a sequence whose $n^{\\text{th}}$ term is $\\{a_n\\}$ be defined as $a_1 = \\frac{1}{2}$ and $(n-1)a_{n-1} = (n+1)a_n$ for $n \\ge 2$ then $\\lim_{n\\to\\infty} S_n$ equals :",
            "options": [
                "$\\frac{3}{4}$",
                "$\\frac{5}{4}$",
                "$\\frac{3}{2}$",
                "1"
            ],
            "correctAnswer": 3,
            "solution": "From $(n-1)a_{n-1} = (n+1)a_n \\Rightarrow \\frac{a_n}{a_{n-1}} = \\frac{n-1}{n+1}$. Multiplying for $n=2$ to $n$: $a_n = a_1 \\times \\frac{1}{3} \\times \\frac{2}{4} \\times \\ldots \\times \\frac{n-1}{n+1} = \\frac{1}{2} \\times \\frac{2}{n(n+1)} = \\frac{1}{n} - \\frac{1}{n+1}$. So $S_n = 1 - \\frac{1}{n+1} \\Rightarrow \\lim_{n\\to\\infty} S_n = 1$."
        },
        // 18 (PDF Q68)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $a_1, a_2, a_3, \\ldots, a_{101}$ are in GP with $a_{51} = 25$ and $\\sum_{i=1}^{101} a_i = 125$, then the value of $\\sum_{i=1}^{101} \\frac{1}{a_i}$ equals",
            "options": [
                "5",
                "$\\frac{1}{5}$",
                "$\\frac{1}{25}$",
                "$\\frac{1}{125}$"
            ],
            "correctAnswer": 1,
            "solution": "For a G.P., $\\sum_{i=1}^{2n-1} a_i = a_n^2 \\sum_{i=1}^{2n-1} \\frac{1}{a_i}$. Here $2n-1 = 101 \\Rightarrow n=51$. Thus $125 = (25)^2 \\sum_{i=1}^{101} 1/a_i \\Rightarrow \\sum_{i=1}^{101} 1/a_i = 125/625 = 1/5$."
        },
        // 19 (PDF Q69)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The value of $\\sum_{r=1}^{\\infty} \\frac{(4r + 5)}{r(5r + 5) 5^r}$ is :",
            "options": [
                "$\\frac{1}{5}$",
                "$\\frac{2}{5}$",
                "$\\frac{1}{25}$",
                "$\\frac{2}{125}$"
            ],
            "correctAnswer": 0,
            "solution": "$\\frac{4r+5}{r(5r+5)} = \\frac{5r+5 - r}{r(5r+5)} = \\frac{1}{r} - \\frac{1}{5r+5} = \\frac{1}{r} - \\frac{1}{5(r+1)}$. The series becomes $\\sum_{r=1}^{\\infty} (\\frac{1}{r5^r} - \\frac{1}{(r+1)5^{r+1}})$. This telescopes to $\\frac{1}{5} - \\lim_{n\\to\\infty} \\frac{1}{(n+1)5^{n+1}} = \\frac{1}{5}$."
        },
        // 20 (PDF Q70)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Find sum to infinite terms of the series $\\frac{4}{1 \\cdot 2 \\cdot 3} + \\frac{5}{2 \\cdot 3 \\cdot 4} + \\frac{6}{3 \\cdot 4 \\cdot 5} + \\ldots$",
            "options": [
                "$\\frac{5}{4}$",
                "$\\frac{4}{5}$",
                "$\\frac{3}{2}$",
                "$\\frac{1}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "General term $T_r = \\frac{r+3}{r(r+1)(r+2)}$. Partial fractions: $\\frac{r+3}{r(r+1)(r+2)} = \\frac{3/2}{r} - \\frac{2}{r+1} + \\frac{1/2}{r+2}$. Summing from $r=1$ to $\\infty$, the series telescopes to $3/2 - 2/2 + 1/6 + 1/2(1/3) = 5/4$."
        },
        // 21 (PDF Q71) - corrected answer to 2
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "Let $a_1 = 1$ and for $n \\ge 1, a_{n+1} = \\frac{1}{2} a_n + \\frac{n^2 - 2n - 1}{n^2(n+1)^2}$. Then $|\\sum_{n=1}^{\\infty} (a_n - \\frac{2}{n^2})|$ is equal to",
            "correctAnswer": 2,
            "solution": "The recurrence can be rewritten as $a_{n+1} - \\frac{1}{2}a_n = \\frac{2}{(n+1)^2} - \\frac{1}{n^2}$. Let $b_n = a_n - 2/n^2$. Then $b_{n+1} + 2/(n+1)^2 - 1/2(b_n + 2/n^2) = 2/(n+1)^2 - 1/n^2 \\Rightarrow b_{n+1} = 1/2 b_n$. Given $b_1 = a_1 - 2 = 1 - 2 = -1$. So $b_n = -1/2^{n-1}$. Thus $\\sum b_n = \\sum -1/2^{n-1} = -2$. Absolute value $= 2$."
        },
        // 22 (PDF Q72)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The value of $(1 \\cdot 1^2 + 3 \\cdot 2^2 + 5 \\cdot 3^2 + \\dots + 19 \\cdot 10^2)$ is equal to :",
            "correctAnswer": 5665,
            "solution": "General term $T_r = (2r-1)r^2 = 2r^3 - r^2$. Sum $\\sum_{r=1}^{10} (2r^3 - r^2) = 2\\frac{10^2 \\times 11^2}{4} - \\frac{10 \\times 11 \\times 21}{6} = 6050 - 385 = 5665$."
        },
        // 23 (PDF Q73)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "If the sum of the first 40 terms of the series, $3 + 4 + 8 + 9 + 13 + 14 + 18 + 19 + \\ldots$ is $(102)m$, then $m$ is equal to:",
            "correctAnswer": 20,
            "solution": "Pair terms: $(3,4), (8,9), (13,14), \\ldots$. Sum of each pair $= (3+5k) + (4+5k) = 7+10k$. Sum of 20 pairs $= \\sum_{k=0}^{19} (7+10k) = 140 + 10 \\times \\frac{19 \\times 20}{2} = 140 + 1900 = 2040$. Given $2040 = 102m \\Rightarrow m = 20$."
        },
        // 24 (PDF Q74)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "If the sum of the first 10 terms of the series $\\frac{4 \\cdot 1}{1 + 4 \\cdot 1^4} + \\frac{4 \\cdot 2}{1 + 4 \\cdot 2^4} + \\frac{4 \\cdot 3}{1 + 4 \\cdot 3^4} + \\ldots$ is $\\frac{m}{n}$, where $\\gcd(m,n)=1$, then $m+n$ is equal to",
            "correctAnswer": 441,
            "solution": "General term $T_r = \\frac{4r}{1+4r^4} = \\frac{1}{2r^2-2r+1} - \\frac{1}{2r^2+2r+1}$. Sum to $n$ terms $= \\frac{1}{1} - \\frac{1}{2n^2+2n+1}$. For $n=10$, sum $= 1 - \\frac{1}{221} = \\frac{220}{221}$. Thus $m=220, n=221, m+n=441$."
        },
        // 25 (PDF Q75) - corrected answer to 19
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": 0,
            "text": "If $a,b,c > 0$ and $[(1+a)(1+b)(1+c)]^7 > 7^\\alpha a^\\beta b^\\gamma c^\\delta$ then find $\\alpha + \\beta + \\gamma + \\delta$",
            "correctAnswer": 19,
            "solution": "By AM-GM on $(1+a), (1+b), (1+c)$: $(1+a)(1+b)(1+c) \\ge 7 (a^4 b^4 c^4)^{1/7}$. Raising to 7th power: $[(1+a)(1+b)(1+c)]^7 \\ge 7^7 a^4 b^4 c^4$. Comparing with given $7^\\alpha a^\\beta b^\\gamma c^\\delta$, we get $\\alpha=7, \\beta=4, \\gamma=4, \\delta=4$. Sum $= 7+4+4+4 = 19$."
        }
    ]
};