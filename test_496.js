window.testBank = window.testBank || {};
window.testBank['test_496'] = {
    title: "Sequence and Series",
    category: "Theory and Formulae Tests - Maths",
    timeLimitMins: 10,
    randomizePoolSize: 30,
    questions: [
        // ================= ARITHMETIC PROGRESSION (AP) =================
        {
            "type": "mcq",
            "text": "The $n$th term of an Arithmetic Progression (AP) with first term $a$ and common difference $d$ is given by:",
            "options": [
                "$a + (n - 1)d$",
                "$a + nd$",
                "$a + (n + 1)d$",
                "$a - (n - 1)d$"
            ],
            "correctAnswer": 0,
            "solution": "The general term formula for an AP is $T_n = a + (n - 1)d$."
        },
        {
            "type": "mcq",
            "text": "The sum of the first $n$ terms of an AP with first term $a$ and common difference $d$ is:",
            "options": [
                "$\\frac{n}{2} [2a + (n - 1)d]$",
                "$\\frac{n}{2} [a + (n - 1)d]$",
                "$n [2a + (n - 1)d]$",
                "$\\frac{n}{2} [2a + nd]$"
            ],
            "correctAnswer": 0,
            "solution": "The sum to $n$ terms is $S_n = \\frac{n}{2} [2a + (n - 1)d]$."
        },
        {
            "type": "mcq",
            "text": "If the first term of an AP is $a$ and the last term is $l$, the sum of its $n$ terms is:",
            "options": [
                "$\\frac{n}{2} (a + l)$",
                "$n (a + l)$",
                "$\\frac{n}{2} (a - l)$",
                "$\\frac{n}{2} (2a + l)$"
            ],
            "correctAnswer": 0,
            "solution": "When the last term is known, $S_n = \\frac{n}{2} (a + l)$."
        },
        {
            "type": "mcq",
            "text": "Three non-zero numbers $a, b, c$ are in Arithmetic Progression if and only if:",
            "options": [
                "$2b = a + c$",
                "$b^2 = ac$",
                "$b = \\frac{2ac}{a + c}$",
                "$a + b + c = 0$"
            ],
            "correctAnswer": 0,
            "solution": "For an AP, the common difference is constant: $b - a = c - b$, which simplifies to $2b = a + c$."
        },
        {
            "type": "mcq",
            "text": "The relationship between the $n$th term $T_n$ and the sum of the first $n$ terms $S_n$ of a sequence is:",
            "options": [
                "$T_n = S_n - S_{n-1}$",
                "$T_n = S_n + S_{n-1}$",
                "$T_n = S_{n-1} - S_n$",
                "$T_n = \\frac{S_n}{S_{n-1}}$"
            ],
            "correctAnswer": 0,
            "solution": "The $n$th term is the difference between the sum to $n$ terms and the sum to $(n-1)$ terms: $T_n = S_n - S_{n-1}$."
        },
        {
            "type": "mcq",
            "text": "If a constant $k$ is added to each term of an AP, the resulting sequence is:",
            "options": [
                "An AP with the same common difference",
                "An AP with a new common difference $d + k$",
                "A GP with common ratio $k$",
                "Not an AP"
            ],
            "correctAnswer": 0,
            "solution": "Adding a constant to all terms shifts the sequence but does not change the difference between consecutive terms."
        },
        {
            "type": "mcq",
            "text": "If each term of an AP with common difference $d$ is multiplied by a non-zero constant $k$, the resulting sequence is:",
            "options": [
                "An AP with common difference $kd$",
                "An AP with common difference $d$",
                "An AP with common difference $d + k$",
                "A GP with common ratio $k$"
            ],
            "correctAnswer": 0,
            "solution": "Multiplying each term by $k$ scales the common difference by $k$, forming an AP with common difference $kd$."
        },
        {
            "type": "mcq",
            "text": "To select three terms in an AP such that their sum is easily calculated, the standard assumption is:",
            "options": [
                "$a - d, a, a + d$",
                "$a, a + d, a + 2d$",
                "$a - 2d, a, a + 2d$",
                "$a, ar, ar^2$"
            ],
            "correctAnswer": 0,
            "solution": "Assuming the terms as $a - d, a, a + d$ cancels out the common difference $d$ when summing."
        },
        {
            "type": "mcq",
            "text": "To select four terms in an AP for symmetric calculations, the standard assumption is:",
            "options": [
                "$a - 3d, a - d, a + d, a + 3d$",
                "$a - 2d, a - d, a, a + d$",
                "$a - 1.5d, a - 0.5d, a + 0.5d, a + 1.5d$",
                "$a - 4d, a - 2d, a + 2d, a + 4d$"
            ],
            "correctAnswer": 0,
            "solution": "The standard symmetric four terms are $a - 3d, a - d, a + d, a + 3d$, which has a common difference of $2d$."
        },
        {
            "type": "mcq",
            "text": "What is the common difference of the standard four symmetric terms in AP $a - 3d, a - d, a + d, a + 3d$?",
            "options": [
                "$2d$",
                "$d$",
                "$3d$",
                "$4d$"
            ],
            "correctAnswer": 0,
            "solution": "The difference between consecutive terms $(a - d) - (a - 3d)$ is $2d$."
        },
        {
            "type": "mcq",
            "text": "If the sum of $n$ terms of a sequence is a quadratic expression $S_n = An^2 + Bn$, the sequence is:",
            "options": [
                "An AP with common difference $2A$",
                "An AP with common difference $A$",
                "A GP with common ratio $A$",
                "An HP"
            ],
            "correctAnswer": 0,
            "solution": "For $S_n = An^2 + Bn$, $T_n = S_n - S_{n-1} = 2An + (B - A)$. This is linear, making it an AP with common difference $2A$."
        },
        {
            "type": "mcq",
            "text": "If the $n$th term of a sequence is a linear expression $T_n = An + B$, the sequence is:",
            "options": [
                "An AP with common difference $A$",
                "An AP with common difference $B$",
                "An AP with common difference $A + B$",
                "A GP with common ratio $A$"
            ],
            "correctAnswer": 0,
            "solution": "A linear general term defines an AP. The common difference is $T_n - T_{n-1} = A$."
        },
        {
            "type": "mcq",
            "text": "In a finite AP, the sum of terms equidistant from the beginning and the end is:",
            "options": [
                "Constant and equal to the sum of the first and last terms",
                "Variable depending on the number of terms",
                "Equal to twice the middle term always",
                "Equal to the product of the first and last terms"
            ],
            "correctAnswer": 0,
            "solution": "For any AP, $T_k + T_{n-k+1} = a + l$, which is constant."
        },
        {
            "type": "mcq",
            "text": "If the $p$th term of an AP is $q$ and the $q$th term is $p$ (where $p \\ne q$), then its $(p+q)$th term is:",
            "options": [
                "0",
                "$p + q$",
                "$p - q$",
                "1"
            ],
            "correctAnswer": 0,
            "solution": "Given $a + (p-1)d = q$ and $a + (q-1)d = p$. Subtracting gives $d = -1$. Substituting back yields $T_{p+q} = 0$."
        },
        {
            "type": "mcq",
            "text": "If the sum of the first $p$ terms of an AP is $q$ and the sum of the first $q$ terms is $p$, then the sum of the first $(p+q)$ terms is:",
            "options": [
                "$-(p + q)$",
                "$0$",
                "$p + q$",
                "$pq$"
            ],
            "correctAnswer": 0,
            "solution": "This is a standard property of APs: $S_p = q, S_q = p \\implies S_{p+q} = -(p + q)$."
        },
        {
            "type": "mcq",
            "text": "If $m$ times the $m$th term of an AP is equal to $n$ times the $n$th term (where $m \\ne n$), then the $(m+n)$th term is:",
            "options": [
                "0",
                "$m + n$",
                "$m - n$",
                "$mn$"
            ],
            "correctAnswer": 0,
            "solution": "Solving $m(a + (m-1)d) = n(a + (n-1)d)$ simplifies to $a + (m+n-1)d = 0$, thus $T_{m+n} = 0$."
        },
        {
            "type": "mcq",
            "text": "If the ratio of the sums of $n$ terms of two APs is given as a function of $n$, the ratio of their $n$th terms is found by replacing $n$ with:",
            "options": [
                "$2n - 1$",
                "$\\frac{n+1}{2}$",
                "$n^2$",
                "$2n + 1$"
            ],
            "correctAnswer": 0,
            "solution": "To transition from ratio of sums to ratio of terms, we substitute $n \\to 2n - 1$."
        },
        {
            "type": "mcq",
            "text": "If the ratio of the $n$th terms of two APs is given as a function of $n$, the ratio of their sums of $n$ terms is found by replacing $n$ with:",
            "options": [
                "$\\frac{n+1}{2}$",
                "$2n - 1$",
                "$n - 1$",
                "$\\frac{n}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "To transition from ratio of terms to ratio of sums, we substitute $n \\to \\frac{n+1}{2}$."
        },
        {
            "type": "mcq",
            "text": "If the sum of $n$ terms of an AP is $S_n$, then $S_3 = 3(S_2 - S_1)$ is a valid identity. This is known as:",
            "options": [
                "A standard identity for any AP",
                "True only if the first term is 0",
                "True only if the common difference is 0",
                "An identity for GP, not AP"
            ],
            "correctAnswer": 0,
            "solution": "For any AP, $S_n = \\frac{n}{2}(2a+(n-1)d)$. Substituting $n=1,2,3$ verifies $S_3 = 3(S_2 - S_1)$."
        },
        {
            "type": "mcq",
            "text": "If $S_m = S_n$ for an AP (where $m \\ne n$), then the sum of its first $(m+n)$ terms is:",
            "options": [
                "0",
                "$m + n$",
                "$-(m + n)$",
                "$\\frac{m+n}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "If $S_m = S_n$, equating and simplifying yields $2a + (m+n-1)d = 0$, meaning $S_{m+n} = 0$."
        },

        // ================= GEOMETRIC PROGRESSION (GP) =================
        {
            "type": "mcq",
            "text": "The $n$th term of a Geometric Progression (GP) with first term $a$ and common ratio $r$ is:",
            "options": [
                "$a r^{n-1}$",
                "$a r^n$",
                "$a (r - 1)^n$",
                "$a r^{n+1}$"
            ],
            "correctAnswer": 0,
            "solution": "The general term formula for a GP is $T_n = a r^{n-1}$."
        },
        {
            "type": "mcq",
            "text": "The sum of the first $n$ terms of a GP with first term $a$ and common ratio $r$ (where $r \\ne 1$) is:",
            "options": [
                "$a \\frac{r^n - 1}{r - 1}$",
                "$a \\frac{r^{n-1} - 1}{r - 1}$",
                "$a \\frac{1 - r^{n-1}}{1 - r}$",
                "$\\frac{a (r^n + 1)}{r + 1}$"
            ],
            "correctAnswer": 0,
            "solution": "The sum to $n$ terms of a GP is $S_n = a \\frac{r^n - 1}{r - 1}$."
        },
        {
            "type": "mcq",
            "text": "The sum of an infinite GP with first term $a$ and common ratio $r$ exists if and only if:",
            "options": [
                "$|r| < 1$",
                "$|r| > 1$",
                "$r = 1$",
                "$r > 0$"
            ],
            "correctAnswer": 0,
            "solution": "An infinite GP converges to a finite sum only when the common ratio satisfies $-1 < r < 1$."
        },
        {
            "type": "mcq",
            "text": "The sum of an infinite GP with first term $a$ and common ratio $r$ (where $|r| < 1$) is given by:",
            "options": [
                "$\\frac{a}{1 - r}$",
                "$\\frac{a}{r - 1}$",
                "$\\frac{1 - r}{a}$",
                "$a(1 - r)$"
            ],
            "correctAnswer": 0,
            "solution": "As $n \\to \\infty$, $r^n \\to 0$, reducing the sum formula to $S_\\infty = \\frac{a}{1 - r}$."
        },
        {
            "type": "mcq",
            "text": "Three non-zero numbers $a, b, c$ are in Geometric Progression if and only if:",
            "options": [
                "$b^2 = ac$",
                "$2b = a + c$",
                "$b = \\frac{2ac}{a + c}$",
                "$b = \\sqrt{a^2 + c^2}$"
            ],
            "correctAnswer": 0,
            "solution": "For a GP, the ratio is constant: $\\frac{b}{a} = \\frac{c}{b}$, which cross-multiplies to $b^2 = ac$."
        },
        {
            "type": "mcq",
            "text": "If each term of a GP is multiplied by a non-zero constant $k$, the resulting sequence is:",
            "options": [
                "A GP with the same common ratio",
                "A GP with common ratio $kr$",
                "An AP with common difference $k$",
                "Not a GP"
            ],
            "correctAnswer": 0,
            "solution": "Multiplying each term by $k$ scales the terms but preserves the ratio between adjacent terms."
        },
        {
            "type": "mcq",
            "text": "If each term of a GP with common ratio $r$ is raised to the power $k$, the resulting sequence is:",
            "options": [
                "A GP with common ratio $r^k$",
                "A GP with common ratio $kr$",
                "A GP with common ratio $r^{1/k}$",
                "An AP"
            ],
            "correctAnswer": 0,
            "solution": "Raising $(a r^{n-1})^k$ yields $a^k (r^k)^{n-1}$, which is a GP with common ratio $r^k$."
        },
        {
            "type": "mcq",
            "text": "If the terms of a GP with positive elements are replaced by their logarithms, the resulting sequence is:",
            "options": [
                "An AP",
                "A GP",
                "An HP",
                "An AGP"
            ],
            "correctAnswer": 0,
            "solution": "If $T_n = a r^{n-1}$, then $\\log(T_n) = \\log(a) + (n-1)\\log(r)$, which is an AP with common difference $\\log(r)$."
        },
        {
            "type": "mcq",
            "text": "The reciprocals of the terms of a GP with common ratio $r$ form:",
            "options": [
                "A GP with common ratio $\\frac{1}{r}$",
                "An AP with common difference $\\frac{1}{r}$",
                "An HP",
                "A GP with common ratio $r$"
            ],
            "correctAnswer": 0,
            "solution": "The reciprocal of $a r^{n-1}$ is $\\frac{1}{a} \\left(\\frac{1}{r}\\right)^{n-1}$, which is a GP with ratio $1/r$."
        },
        {
            "type": "mcq",
            "text": "To select three terms in a GP for symmetric product calculations, the standard assumption is:",
            "options": [
                "$\\frac{a}{r}, a, ar$",
                "$a, ar, ar^2$",
                "$\\frac{a}{r^2}, a, ar^2$",
                "$a - d, a, a + d$"
            ],
            "correctAnswer": 0,
            "solution": "Using $\\frac{a}{r}, a, ar$ makes the product $a^3$, completely eliminating the common ratio $r$."
        },
        {
            "type": "mcq",
            "text": "To select four terms in a GP for symmetric product calculations, the standard assumption is:",
            "options": [
                "$\\frac{a}{r^3}, \\frac{a}{r}, ar, ar^3$",
                "$\\frac{a}{r^2}, \\frac{a}{r}, a, ar$",
                "$a, ar, ar^2, ar^3$",
                "$\\frac{a}{r^4}, \\frac{a}{r^2}, ar^2, ar^4$"
            ],
            "correctAnswer": 0,
            "solution": "The symmetric four terms are $\\frac{a}{r^3}, \\frac{a}{r}, ar, ar^3$. Their product is $a^4$."
        },
        {
            "type": "mcq",
            "text": "What is the common ratio of the standard four symmetric terms in GP $\\frac{a}{r^3}, \\frac{a}{r}, ar, ar^3$?",
            "options": [
                "$r^2$",
                "$r$",
                "$r^3$",
                "$\\frac{1}{r}$"
            ],
            "correctAnswer": 0,
            "solution": "The ratio between consecutive terms, for instance $\\frac{a/r}{a/r^3}$, is $r^2$."
        },
        {
            "type": "mcq",
            "text": "In a finite GP, the product of terms equidistant from the beginning and the end is:",
            "options": [
                "Constant and equal to the product of the first and last terms",
                "Variable depending on the number of terms",
                "Equal to the square of the middle term always",
                "Equal to the sum of the first and last terms"
            ],
            "correctAnswer": 0,
            "solution": "For any GP, $T_k \\cdot T_{n-k+1} = a \\cdot l$, which is constant."
        },
        {
            "type": "mcq",
            "text": "If two GPs are multiplied term by term, the resulting sequence is:",
            "options": [
                "A GP",
                "An AP",
                "An HP",
                "An AGP"
            ],
            "correctAnswer": 0,
            "solution": "Let GPs be $a_1 r_1^{n-1}$ and $a_2 r_2^{n-1}$. Their product is $(a_1 a_2)(r_1 r_2)^{n-1}$, which is a GP."
        },
        {
            "type": "mcq",
            "text": "If two GPs are added term by term, the resulting sequence is:",
            "options": [
                "Generally not a GP",
                "Always a GP",
                "An AP",
                "An HP"
            ],
            "correctAnswer": 0,
            "solution": "The sum of two GPs with different common ratios cannot be factored into a single GP format."
        },
        {
            "type": "mcq",
            "text": "If $x, y, z$ are in GP, then $x^2 + y^2, xy + yz, y^2 + z^2$ are in:",
            "options": [
                "GP",
                "AP",
                "HP",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Substituting $y = xr$ and $z = xr^2$, we find the terms form a GP with common ratio $r$."
        },
        {
            "type": "mcq",
            "text": "If $a, b, c$ are in GP, then the roots of the quadratic equation $ax^2 + 2bx + c = 0$ are:",
            "options": [
                "Real and equal",
                "Real and distinct",
                "Imaginary",
                "Rational"
            ],
            "correctAnswer": 0,
            "solution": "The discriminant is $\\Delta = 4b^2 - 4ac$. Since $b^2 = ac$ for a GP, $\\Delta = 0$, meaning roots are real and equal."
        },

        // ================= HARMONIC PROGRESSION (HP) =================
        {
            "type": "mcq",
            "text": "A sequence is said to be in Harmonic Progression (HP) if:",
            "options": [
                "The reciprocals of its terms form an AP",
                "The reciprocals of its terms form a GP",
                "The differences of consecutive terms form a GP",
                "The logarithms of its terms form an AP"
            ],
            "correctAnswer": 0,
            "solution": "By definition, an HP is formed by the reciprocals of the terms of an AP."
        },
        {
            "type": "mcq",
            "text": "The $n$th term of a Harmonic Progression formed from an AP with first term $a$ and common difference $d$ is:",
            "options": [
                "$\\frac{1}{a + (n - 1)d}$",
                "$a + (n - 1)d$",
                "$\\frac{1}{a} + (n - 1)d$",
                "$\\frac{1}{a + nd}$"
            ],
            "correctAnswer": 0,
            "solution": "Since the reciprocals form an AP, the $n$th term of the HP is the reciprocal of the $n$th term of the AP."
        },
        {
            "type": "mcq",
            "text": "Three non-zero numbers $a, b, c$ are in Harmonic Progression if and only if:",
            "options": [
                "$b = \\frac{2ac}{a + c}$",
                "$b = \\frac{a + c}{2}$",
                "$b^2 = ac$",
                "$b = \\sqrt{\\frac{a^2 + c^2}{2}}$"
            ],
            "correctAnswer": 0,
            "solution": "Since $1/a, 1/b, 1/c$ are in AP, $\\frac{2}{b} = \\frac{1}{a} + \\frac{1}{c}$. Solving for $b$ gives $b = \\frac{2ac}{a + c}$."
        },
        {
            "type": "mcq",
            "text": "Can a term of a Harmonic Progression be equal to zero?",
            "options": [
                "No, no term of an HP can be zero",
                "Yes, if the corresponding AP has a zero term",
                "Yes, the first term can be zero",
                "Yes, if the common difference is zero"
            ],
            "correctAnswer": 0,
            "solution": "If a term in HP were 0, the corresponding term in AP would be $1/0$, which is undefined. Hence, no term can be zero."
        },
        {
            "type": "mcq",
            "text": "If $a, b, c$ are in HP, then which of the following proportions holds true?",
            "options": [
                "$\\frac{a}{c} = \\frac{a - b}{b - c}$",
                "$\\frac{a}{c} = \\frac{b - a}{c - b}$",
                "$\\frac{a}{b} = \\frac{b}{c}$",
                "$a - b = b - c$"
            ],
            "correctAnswer": 0,
            "solution": "From $\\frac{1}{b} - \\frac{1}{a} = \\frac{1}{c} - \\frac{1}{b}$, we get $\\frac{a - b}{ab} = \\frac{b - c}{bc}$. Multiplying by $b$ gives $\\frac{a - b}{a} = \\frac{b - c}{c}$, or $\\frac{a}{c} = \\frac{a - b}{b - c}$."
        },
        {
            "type": "mcq",
            "text": "If $a, b, c$ are in HP, then $\\frac{a}{b+c}, \\frac{b}{c+a}, \\frac{c}{a+b}$ are in:",
            "options": [
                "HP",
                "AP",
                "GP",
                "AGP"
            ],
            "correctAnswer": 0,
            "solution": "This is a standard property. Adding 1 to each term gives $\\frac{a+b+c}{b+c}$, etc. Since $1/a, 1/b, 1/c$ are in AP, dividing by $a+b+c$ shows they are in HP."
        },

        // ================= MEANS AND INEQUALITIES (AM, GM, HM) =================
        {
            "type": "mcq",
            "text": "The single Arithmetic Mean (AM) between two numbers $a$ and $b$ is:",
            "options": [
                "$\\frac{a + b}{2}$",
                "$\\sqrt{ab}$",
                "$\\frac{2ab}{a + b}$",
                "$\\frac{a - b}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "The arithmetic mean is defined as $A = \\frac{a + b}{2}$."
        },
        {
            "type": "mcq",
            "text": "The single Geometric Mean (GM) between two positive numbers $a$ and $b$ is:",
            "options": [
                "$\\sqrt{ab}$",
                "$\\frac{a + b}{2}$",
                "$\\frac{2ab}{a + b}$",
                "$ab$"
            ],
            "correctAnswer": 0,
            "solution": "The geometric mean is defined as $G = \\sqrt{ab}$."
        },
        {
            "type": "mcq",
            "text": "The single Harmonic Mean (HM) between two numbers $a$ and $b$ is:",
            "options": [
                "$\\frac{2ab}{a + b}$",
                "$\\frac{a + b}{2ab}$",
                "$\\sqrt{ab}$",
                "$\\frac{a + b}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "The harmonic mean is defined as $H = \\frac{2ab}{a + b}$."
        },
        {
            "type": "mcq",
            "text": "The relationship between the AM ($A$), GM ($G$), and HM ($H$) of two positive unequal numbers is:",
            "options": [
                "$G^2 = AH$",
                "$A^2 = GH$",
                "$H^2 = AG$",
                "$G = A + H$"
            ],
            "correctAnswer": 0,
            "solution": "Calculating $AH = (\\frac{a+b}{2})(\\frac{2ab}{a+b}) = ab = G^2$. Thus, $G^2 = AH$."
        },
        {
            "type": "mcq",
            "text": "For any two distinct positive numbers, the inequality relating their AM ($A$), GM ($G$), and HM ($H$) is:",
            "options": [
                "$A > G > H$",
                "$A < G < H$",
                "$A = G = H$",
                "$G > A > H$"
            ],
            "correctAnswer": 0,
            "solution": "By AM-GM-HM inequality for distinct positive numbers, $A > G > H$."
        },
        {
            "type": "mcq",
            "text": "If the AM, GM, and HM of two positive numbers are equal ($A = G = H$), then the two numbers must be:",
            "options": [
                "Equal to each other",
                "Reciprocals of each other",
                "One is twice the other",
                "Zero"
            ],
            "correctAnswer": 0,
            "solution": "Equality in the AM-GM-HM inequality holds true if and only if all the numbers are equal."
        },
        {
            "type": "mcq",
            "text": "The quadratic equation whose roots are two positive numbers with Arithmetic Mean $A$ and Geometric Mean $G$ is:",
            "options": [
                "$x^2 - 2Ax + G^2 = 0$",
                "$x^2 - Ax + G = 0$",
                "$x^2 + 2Ax + G^2 = 0$",
                "$x^2 - G^2 x + 2A = 0$"
            ],
            "correctAnswer": 0,
            "solution": "Let roots be $a, b$. Sum $a+b = 2A$, product $ab = G^2$. Equation is $x^2 - (a+b)x + ab = 0 \\implies x^2 - 2Ax + G^2 = 0$."
        },
        {
            "type": "mcq",
            "text": "If $n$ Arithmetic Means are inserted between two numbers $a$ and $b$, the common difference of the resulting AP is:",
            "options": [
                "$\\frac{b - a}{n + 1}$",
                "$\\frac{b - a}{n}$",
                "$\\frac{a + b}{n + 1}$",
                "$\\frac{b - a}{n - 1}$"
            ],
            "correctAnswer": 0,
            "solution": "The sequence has $n+2$ terms. $b = a + (n+2-1)d \\implies d = \\frac{b - a}{n + 1}$."
        },
        {
            "type": "mcq",
            "text": "The sum of $n$ Arithmetic Means inserted between two numbers $a$ and $b$ is equal to:",
            "options": [
                "$n$ times the single AM between $a$ and $b$",
                "The single AM between $a$ and $b$",
                "$n^2$ times the single AM between $a$ and $b$",
                "The sum of $a$ and $b$"
            ],
            "correctAnswer": 0,
            "solution": "Sum $= \\frac{n}{2}(A_1 + A_n) = \\frac{n}{2}(a + b) = n \\left(\\frac{a+b}{2}\\right)$, which is $n$ times the single AM."
        },
        {
            "type": "mcq",
            "text": "If $n$ Geometric Means are inserted between two positive numbers $a$ and $b$, the common ratio of the resulting GP is:",
            "options": [
                "$\\left(\\frac{b}{a}\\right)^{\\frac{1}{n+1}}$",
                "$\\left(\\frac{b}{a}\\right)^{\\frac{1}{n}}$",
                "$\\left(\\frac{a}{b}\\right)^{\\frac{1}{n+1}}$",
                "$\\left(\\frac{b}{a}\\right)^{n+1}$"
            ],
            "correctAnswer": 0,
            "solution": "The sequence has $n+2$ terms. $b = a r^{n+1} \\implies r = \\left(\\frac{b}{a}\\right)^{\\frac{1}{n+1}}$."
        },
        {
            "type": "mcq",
            "text": "The product of $n$ Geometric Means inserted between two positive numbers $a$ and $b$ is equal to:",
            "options": [
                "The $n$th power of the single GM between $a$ and $b$",
                "The single GM between $a$ and $b$",
                "The product of $a$ and $b$",
                "$n$ times the single GM between $a$ and $b$"
            ],
            "correctAnswer": 0,
            "solution": "Product $= (G_1 G_2 \\dots G_n) = (ab)^{n/2} = (\\sqrt{ab})^n = G^n$."
        },
        {
            "type": "mcq",
            "text": "If $n$ Harmonic Means are inserted between two numbers $a$ and $b$, the common difference $d$ of the corresponding AP is:",
            "options": [
                "$\\frac{a - b}{ab(n + 1)}$",
                "$\\frac{b - a}{ab(n + 1)}$",
                "$\\frac{ab}{a - b}$",
                "$\\frac{a - b}{n + 1}$"
            ],
            "correctAnswer": 0,
            "solution": "The AP has terms $1/a, \dots, 1/b$. So, $1/b = 1/a + (n+1)d \\implies d = \\frac{1/b - 1/a}{n+1} = \\frac{a - b}{ab(n + 1)}$."
        },
        {
            "type": "mcq",
            "text": "The sum of the reciprocals of $n$ Harmonic Means inserted between $a$ and $b$ is equal to:",
            "options": [
                "$n$ times the reciprocal of the single HM between $a$ and $b$",
                "The reciprocal of the single HM between $a$ and $b$",
                "$n$ times the single HM between $a$ and $b$",
                "The sum of the reciprocals of $a$ and $b$"
            ],
            "correctAnswer": 0,
            "solution": "The sum of reciprocals forms an AP sum: $\\frac{n}{2}(\\frac{1}{a} + \\frac{1}{b}) = n \\left( \\frac{a+b}{2ab} \\right)$, which is $n \\times (1/H)$."
        },
        {
            "type": "mcq",
            "text": "The expression $\\frac{a^{n+1} + b^{n+1}}{a^n + b^n}$ represents the Arithmetic Mean (AM) between $a$ and $b$ when $n$ is equal to:",
            "options": [
                "0",
                "1",
                "-1",
                "1/2"
            ],
            "correctAnswer": 0,
            "solution": "Substituting $n=0$ yields $\\frac{a^1 + b^1}{a^0 + b^0} = \\frac{a+b}{2}$, which is the AM."
        },
        {
            "type": "mcq",
            "text": "The expression $\\frac{a^{n+1} + b^{n+1}}{a^n + b^n}$ represents the Geometric Mean (GM) between $a$ and $b$ when $n$ is equal to:",
            "options": [
                "$-1/2$",
                "0",
                "1/2",
                "-1"
            ],
            "correctAnswer": 0,
            "solution": "Substituting $n=-1/2$ simplifies the expression to $\\sqrt{ab}$, which is the GM."
        },
        {
            "type": "mcq",
            "text": "The expression $\\frac{a^{n+1} + b^{n+1}}{a^n + b^n}$ represents the Harmonic Mean (HM) between $a$ and $b$ when $n$ is equal to:",
            "options": [
                "-1",
                "0",
                "1",
                "-1/2"
            ],
            "correctAnswer": 0,
            "solution": "Substituting $n=-1$ yields $\\frac{a^0 + b^0}{a^{-1} + b^{-1}} = \\frac{2}{1/a + 1/b} = \\frac{2ab}{a+b}$, which is the HM."
        },
        {
            "type": "mcq",
            "text": "For $n$ positive real numbers, the condition for the Weighted AM-GM inequality to hold with equality is:",
            "options": [
                "All the numbers must be equal",
                "All the weights must be equal",
                "The numbers must be in GP",
                "The weights must be in AP"
            ],
            "correctAnswer": 0,
            "solution": "Like the standard AM-GM inequality, the weighted AM-GM inequality holds with equality if and only if all the variable values are identical."
        },

        // ================= SPECIAL SERIES & AGP =================
        {
            "type": "mcq",
            "text": "The sum of the first $n$ natural numbers $\\sum_{k=1}^n k$ is:",
            "options": [
                "$\\frac{n(n + 1)}{2}$",
                "$\\frac{n(n - 1)}{2}$",
                "$n(n + 1)$",
                "$\\frac{n(n + 1)(2n + 1)}{6}$"
            ],
            "correctAnswer": 0,
            "solution": "The standard formula for the sum of the first $n$ natural numbers is $\\frac{n(n + 1)}{2}$."
        },
        {
            "type": "mcq",
            "text": "The sum of the squares of the first $n$ natural numbers $\\sum_{k=1}^n k^2$ is:",
            "options": [
                "$\\frac{n(n + 1)(2n + 1)}{6}$",
                "$\\left[\\frac{n(n + 1)}{2}\\right]^2$",
                "$\\frac{n(n + 1)(n + 2)}{6}$",
                "$\\frac{n^2(n + 1)^2}{4}$"
            ],
            "correctAnswer": 0,
            "solution": "The standard formula for the sum of squares is $\\frac{n(n + 1)(2n + 1)}{6}$."
        },
        {
            "type": "mcq",
            "text": "The sum of the cubes of the first $n$ natural numbers $\\sum_{k=1}^n k^3$ is:",
            "options": [
                "$\\left[\\frac{n(n + 1)}{2}\\right]^2$",
                "$\\frac{n(n + 1)(2n + 1)}{6}$",
                "$\\frac{n(n + 1)}{2}$",
                "$\\frac{n^2(n + 1)^2}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "The standard formula for the sum of cubes is $\\left[\\frac{n(n + 1)}{2}\\right]^2$, which is also $(\\sum k)^2$."
        },
        {
            "type": "mcq",
            "text": "The relationship between the sum of the cubes of the first $n$ natural numbers and the sum of the first $n$ natural numbers is:",
            "options": [
                "$\\sum k^3 = (\\sum k)^2$",
                "$\\sum k^3 = \\sum k^2 + \\sum k$",
                "$\\sum k^3 = 2 \\sum k$",
                "$\\sum k^3 = (\\sum k)^3$"
            ],
            "correctAnswer": 0,
            "solution": "Since $\\sum k^3 = \\left[\\frac{n(n + 1)}{2}\\right]^2$ and $\\sum k = \\frac{n(n + 1)}{2}$, it follows that $\\sum k^3 = (\\sum k)^2$."
        },
        {
            "type": "mcq",
            "text": "The sum of the first $n$ odd natural numbers $1 + 3 + 5 + \\dots + (2n - 1)$ is:",
            "options": [
                "$n^2$",
                "$n(n + 1)$",
                "$n^2 + 1$",
                "$\\frac{n(n + 1)}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "This is an AP with $a=1, d=2$. $S_n = \\frac{n}{2}(2(1) + (n-1)2) = n^2$."
        },
        {
            "type": "mcq",
            "text": "The sum of the first $n$ even natural numbers $2 + 4 + 6 + \\dots + 2n$ is:",
            "options": [
                "$n(n + 1)$",
                "$n^2$",
                "$2n^2$",
                "$\\frac{n(n + 1)}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "This is an AP with $a=2, d=2$. $S_n = 2(1 + 2 + \\dots + n) = 2 \\frac{n(n+1)}{2} = n(n + 1)$."
        },
        {
            "type": "mcq",
            "text": "The general term of an Arithmetico-Geometric Progression (AGP) with AP part $(a, d)$ and GP part $(1, r)$ is:",
            "options": [
                "$[a + (n - 1)d] r^{n-1}$",
                "$[a + nd] r^n$",
                "$a r^{n-1} + d r^n$",
                "$[a + (n - 1)d] r^n$"
            ],
            "correctAnswer": 0,
            "solution": "The $n$th term of an AGP is the product of the $n$th term of the AP and the $n$th term of the GP: $T_n = [a + (n - 1)d] r^{n-1}$."
        },
        {
            "type": "mcq",
            "text": "The sum to infinity of an Arithmetico-Geometric Progression (AGP) $a + (a+d)r + (a+2d)r^2 + \\dots$ (where $|r| < 1$) is:",
            "options": [
                "$\\frac{a}{1 - r} + \\frac{dr}{(1 - r)^2}$",
                "$\\frac{a}{1 - r} + \\frac{d}{(1 - r)^2}$",
                "$\\frac{a}{1 - r} + \\frac{dr}{1 - r}$",
                "$\\frac{a}{(1 - r)^2} + \\frac{dr}{1 - r}$"
            ],
            "correctAnswer": 0,
            "solution": "Using the standard derivation (multiply by $r$ and subtract), the infinite sum evaluates to $\\frac{a}{1 - r} + \\frac{dr}{(1 - r)^2}$."
        },
        {
            "type": "mcq",
            "text": "The standard method to find the sum of $n$ terms of an AGP $S_n$ with common ratio $r$ is to compute:",
            "options": [
                "$S_n - r S_n$",
                "$S_n + r S_n$",
                "$\\frac{S_n}{r}$",
                "$S_n - S_{n-1}$"
            ],
            "correctAnswer": 0,
            "solution": "The core technique for AGP is to multiply the series by $r$ and subtract it from the original series, computing $S_n - r S_n$."
        },
        {
            "type": "mcq",
            "text": "In the Method of Differences, if the differences of consecutive terms of a sequence form an AP, the $n$th term of the original sequence is of the form:",
            "options": [
                "$a n^2 + b n + c$",
                "$a n^3 + b n^2 + c n + d$",
                "$a r^n + b n + c$",
                "$a n + b$"
            ],
            "correctAnswer": 0,
            "solution": "If the first differences form an AP (linear), then taking the sum (integration analog) makes the general term a quadratic in $n$."
        },
        {
            "type": "mcq",
            "text": "In the Method of Differences, if the differences of consecutive terms of a sequence form a GP with common ratio $r$, the $n$th term of the original sequence is of the form:",
            "options": [
                "$A r^n + B n + C$",
                "$A r^{n-1}$",
                "$A n^2 + B n + C$",
                "$A r^n + B r^{-n}$"
            ],
            "correctAnswer": 0,
            "solution": "If first differences are in GP, summing them leaves a GP term plus a linear constant term, yielding $A r^n + B n + C$ (often just $a r^n + b$)."
        },
        {
            "type": "mcq",
            "text": "Using the Method of Differences (telescoping series), the sum $\\sum_{k=1}^n \\frac{1}{k(k+1)}$ evaluates to:",
            "options": [
                "$\\frac{n}{n + 1}$",
                "$\\frac{1}{n + 1}$",
                "$1 - \\frac{1}{n}$",
                "$\\frac{n - 1}{n}$"
            ],
            "correctAnswer": 0,
            "solution": "Since $\\frac{1}{k(k+1)} = \\frac{1}{k} - \\frac{1}{k+1}$, telescoping sum cancels all intermediate terms, leaving $1 - \\frac{1}{n+1} = \\frac{n}{n+1}$."
        },
        {
            "type": "mcq",
            "text": "The telescoping $V_n$ method relies on expressing the general term $T_r$ in the form:",
            "options": [
                "$V_r - V_{r-1}$",
                "$V_r + V_{r-1}$",
                "$V_r \\cdot V_{r-1}$",
                "$\\frac{V_r}{V_{r-1}}$"
            ],
            "correctAnswer": 0,
            "solution": "The $V_n$ method splits the term into a difference $T_r = V_r - V_{r-1}$ (or $V_{r-1} - V_r$) so that terms cancel upon summation."
        },
        {
            "type": "mcq",
            "text": "The infinite series $\\frac{1}{1 \\cdot 2} + \\frac{1}{2 \\cdot 3} + \\frac{1}{3 \\cdot 4} + \\dots$ converges to:",
            "options": [
                "1",
                "0",
                "$\\infty$",
                "$\\frac{1}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "The sum is $\\lim_{n \\to \\infty} \\left(1 - \\frac{1}{n+1}\\right) = 1$."
        },
        {
            "type": "mcq",
            "text": "To find the sum of the series $1 \\cdot 2 \\cdot 3 + 2 \\cdot 3 \\cdot 4 + \\dots + n(n+1)(n+2)$, the general term $T_k$ is modified by multiplying and dividing by:",
            "options": [
                "$4$",
                "$3$",
                "$k$",
                "$(k+3) - (k-1)$"
            ],
            "correctAnswer": 0,
            "solution": "The standard trick for $T_k = k(k+1)(k+2)$ is to write it as $\\frac{1}{4} k(k+1)(k+2) [(k+3) - (k-1)]$ to telescope."
        },

        // ================= ADVANCED/MIXED PROPERTIES =================
        {
            "type": "mcq",
            "text": "If $a^2, b^2, c^2$ are in AP, then which of the following sequences is also in AP?",
            "options": [
                "$\\frac{1}{b+c}, \\frac{1}{c+a}, \\frac{1}{a+b}$",
                "$a, b, c$",
                "$\\frac{1}{a}, \\frac{1}{b}, \\frac{1}{c}$",
                "$b+c, c+a, a+b$"
            ],
            "correctAnswer": 0,
            "solution": "This is a classic standard result. If $a^2, b^2, c^2$ in AP, adding $ab+bc+ca$ and factoring proves $\\frac{1}{b+c}, \\frac{1}{c+a}, \\frac{1}{a+b}$ are in AP."
        },
        {
            "type": "mcq",
            "text": "If $\\frac{1}{b+c}, \\frac{1}{c+a}, \\frac{1}{a+b}$ are in AP, then which of the following is in AP?",
            "options": [
                "$a^2, b^2, c^2$",
                "$a, b, c$",
                "$a^3, b^3, c^3$",
                "$\\sqrt{a}, \\sqrt{b}, \\sqrt{c}$"
            ],
            "correctAnswer": 0,
            "solution": "This is the converse of the standard result: multiplying by $(a+b)(b+c)(c+a)$ and simplifying proves $a^2, b^2, c^2$ are in AP."
        },
        {
            "type": "mcq",
            "text": "If $a, b, c$ are simultaneously in AP, GP, and HP, then:",
            "options": [
                "$a = b = c$",
                "$a + b + c = 0$",
                "$a, b, c$ are roots of unity",
                "This is impossible for real numbers"
            ],
            "correctAnswer": 0,
            "solution": "Since they are in GP, $b^2 = ac$. In AP, $b = (a+c)/2$. Substituting gives $(a-c)^2 = 0 \\implies a = c$, which implies $a = b = c$."
        },
        {
            "type": "mcq",
            "text": "If $a, b, c$ are in AP; $b, c, d$ are in GP; and $c, d, e$ are in HP, then $a, c, e$ are in:",
            "options": [
                "GP",
                "AP",
                "HP",
                "AGP"
            ],
            "correctAnswer": 0,
            "solution": "We have $2b = a+c$, $c^2 = bd$, and $d = 2ce/(c+e)$. Eliminating $b$ and $d$ gives $c^2 = (\\frac{a+c}{2})(\\frac{2ce}{c+e})$. Simplifying yields $c^2 = ae$, so $a, c, e$ are in GP."
        },
        {
            "type": "mcq",
            "text": "The sum of the products of the first $n$ natural numbers taken two at a time is given by:",
            "options": [
                "$\\frac{(\\sum n)^2 - \\sum n^2}{2}$",
                "$\\frac{(\\sum n^2)^2 - \\sum n^3}{2}$",
                "$(\\sum n)^2 - \\sum n^2$",
                "$\\frac{(\\sum n)^2 + \\sum n^2}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "Using the algebraic identity $(x_1 + x_2 + \\dots + x_n)^2 = \\sum x_i^2 + 2 \\sum_{i < j} x_i x_j$, we rearrange to find the sum of products taken two at a time."
        },
        {
            "type": "mcq",
            "text": "If $x, y, z$ are in GP and $a^x = b^y = c^z$, then $\\log_b a, \\log_c b, \\log_a c$ are in:",
            "options": [
                "GP",
                "AP",
                "HP",
                "AGP"
            ],
            "correctAnswer": 0,
            "solution": "Let $a^x = b^y = c^z = k$. Taking logs gives $x = \\log_a k$, etc. Since $x, y, z$ are in GP, substituting shows the resulting log expressions form a GP."
        },
        {
            "type": "mcq",
            "text": "If the roots of the cubic equation $x^3 - px^2 + qx - r = 0$ are in AP, then the relation between $p, q, r$ is:",
            "options": [
                "$2p^3 - 9pq + 27r = 0$",
                "$p^3 - 4pq + 8r = 0$",
                "$p^2 = 3q$",
                "$q^3 - p^2r = 0$"
            ],
            "correctAnswer": 0,
            "solution": "Let roots be $a-d, a, a+d$. Sum $= 3a = p \\implies a = p/3$. Since $a$ is a root, $(p/3)^3 - p(p/3)^2 + q(p/3) - r = 0$, giving $2p^3 - 9pq + 27r = 0$."
        },
        {
            "type": "mcq",
            "text": "If the roots of the cubic equation $x^3 - px^2 + qx - r = 0$ are in GP, then the relation between $p, q, r$ is:",
            "options": [
                "$p^3 r = q^3$",
                "$q^3 r = p^3$",
                "$p^2 = 3q$",
                "$p^3 - 3pq + r = 0$"
            ],
            "correctAnswer": 0,
            "solution": "Let roots be $a/k, a, ak$. Product $= a^3 = r \\implies a = r^{1/3}$. Since $a$ is a root, substitute $a$ to find $r - p r^{2/3} + q r^{1/3} - r = 0$, leading to $p^3 r = q^3$."
        },
        {
            "type": "mcq",
            "text": "In an AP, if the sum of the first $n$ terms is maximum, then:",
            "options": [
                "The $n$th term is the last positive term (or zero)",
                "The common difference must be positive",
                "The first term must be negative",
                "The $(n+1)$th term is positive"
            ],
            "correctAnswer": 0,
            "solution": "For the sum to be maximum in an AP (with $a > 0$ and $d < 0$), we sum all non-negative terms. Thus, the $n$th term is the last term $\\ge 0$."
        },
        {
            "type": "mcq",
            "text": "In a GP, if $p$th, $q$th, $r$th terms are $a, b, c$ respectively, then the value of $a^{q-r} b^{r-p} c^{p-q}$ is:",
            "options": [
                "1",
                "0",
                "abc",
                "$pqr$"
            ],
            "correctAnswer": 0,
            "solution": "This is a standard identity. Substituting $a = A R^{p-1}$, $b = A R^{q-1}$, $c = A R^{r-1}$ into the expression simplifies identically to $1$."
        },
        {
            "type": "mcq",
            "text": "In an AP, if $p$th, $q$th, $r$th terms are $a, b, c$ respectively, then the value of $a(q-r) + b(r-p) + c(p-q)$ is:",
            "options": [
                "0",
                "1",
                "$abc$",
                "$pqr$"
            ],
            "correctAnswer": 0,
            "solution": "Substituting $a = A + (p-1)D$, $b = A + (q-1)D$, $c = A + (r-1)D$ makes all terms cancel out, equating to $0$."
        },
        {
            "type": "mcq",
            "text": "The infinite product $x^{1/2} \\cdot x^{1/4} \\cdot x^{1/8} \\dots$ converges to:",
            "options": [
                "$x$",
                "$x^2$",
                "$\\sqrt{x}$",
                "1"
            ],
            "correctAnswer": 0,
            "solution": "The product is $x^{1/2 + 1/4 + 1/8 + \\dots}$. The exponent is an infinite GP with $a=1/2$, $r=1/2$, sum $S = \\frac{1/2}{1 - 1/2} = 1$. So, it converges to $x^1 = x$."
        },
        {
            "type": "mcq",
            "text": "If $S_n$ denotes the sum of $n$ terms of a GP, then $S_n, S_{2n} - S_n, S_{3n} - S_{2n}$ are in:",
            "options": [
                "GP",
                "AP",
                "HP",
                "AGP"
            ],
            "correctAnswer": 0,
            "solution": "These represent the sums of consecutive blocks of $n$ terms. Factoring out $r^n$ from each block shows they form a GP with common ratio $r^n$."
        },
        {
            "type": "mcq",
            "text": "If $a_1, a_2, \\dots, a_n$ are in AP, then the expression $\\frac{1}{\\sqrt{a_1} + \\sqrt{a_2}} + \\frac{1}{\\sqrt{a_2} + \\sqrt{a_3}} + \\dots + \\frac{1}{\\sqrt{a_{n-1}} + \\sqrt{a_n}}$ evaluates to:",
            "options": [
                "$\\frac{n-1}{\\sqrt{a_1} + \\sqrt{a_n}}$",
                "$\\frac{n}{\\sqrt{a_1} + \\sqrt{a_n}}$",
                "$\\frac{n-1}{\\sqrt{a_n} - \\sqrt{a_1}}$",
                "$\\frac{n}{\\sqrt{a_n} - \\sqrt{a_1}}$"
            ],
            "correctAnswer": 0,
            "solution": "Rationalizing each term gives $\\frac{\\sqrt{a_2} - \\sqrt{a_1}}{d}$. Summing causes telescoping cancellation, leaving $\\frac{\\sqrt{a_n} - \\sqrt{a_1}}{d}$. Multiplying by conjugate yields $\\frac{n-1}{\\sqrt{a_1} + \\sqrt{a_n}}$."
        },
        {
            "type": "mcq",
            "text": "If $\\log_x a, \\log_x b, \\log_x c$ are in AP, then $a, b, c$ are in:",
            "options": [
                "GP",
                "AP",
                "HP",
                "AGP"
            ],
            "correctAnswer": 0,
            "solution": "Since they are in AP, $2 \\log_x b = \\log_x a + \\log_x c \\implies \\log_x (b^2) = \\log_x (ac) \\implies b^2 = ac$. Thus, they are in GP."
        }
    ]
};