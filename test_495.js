window.testBank = window.testBank || {};
window.testBank['test_495'] = {
    title: "Permutations & Combinations",
    category: "Theory and Formulae Tests - Maths",
    timeLimitMins: 10,
    randomizePoolSize: 30,
    questions: [
        // ================= FUNDAMENTAL PRINCIPLES & FACTORIALS =================
        {
            "type": "mcq",
            "text": "According to the Fundamental Principle of Multiplication, if an operation can be performed in $m$ different ways, and following which a second operation can be performed in $n$ different ways, then the total number of ways of performing the two operations in succession is:",
            "options": [
                "$m \\times n$",
                "$m + n$",
                "$m^n$",
                "$n^m$"
            ],
            "correctAnswer": 0,
            "solution": "The multiplication principle states that if tasks are dependent/sequential (AND condition), their total ways are multiplied: $m \\times n$."
        },
        {
            "type": "mcq",
            "text": "According to the Fundamental Principle of Addition, if an operation can be performed in $m$ different ways and another independent operation can be performed in $n$ different ways, then the total number of ways of performing exactly one of these operations is:",
            "options": [
                "$m + n$",
                "$m \\times n$",
                "$m^n$",
                "$\\frac{m}{n}$"
            ],
            "correctAnswer": 0,
            "solution": "The addition principle states that for mutually exclusive/independent tasks (OR condition), their total ways are added: $m + n$."
        },
        {
            "type": "mcq",
            "text": "The value of $0!$ (zero factorial) is defined as:",
            "options": [
                "1",
                "0",
                "Undefined",
                "$\\infty$"
            ],
            "correctAnswer": 0,
            "solution": "By standard mathematical definition, $0! = 1$ to ensure consistency in combinatorial formulas."
        },
        {
            "type": "mcq",
            "text": "The recursive definition of factorial for any positive integer $n$ is:",
            "options": [
                "$n! = n \\times (n-1)!$",
                "$n! = (n-1) \\times n!$",
                "$n! = n \\times n!$",
                "$n! = (n-1) + n!$"
            ],
            "correctAnswer": 0,
            "solution": "The factorial of $n$ is the product of $n$ and the factorial of $(n-1)$: $n! = n(n-1)!$."
        },
        {
            "type": "mcq",
            "text": "Legendre's Formula for finding the highest power of a prime $p$ that divides $n!$ (exponent of $p$ in $n!$) is given by:",
            "options": [
                "$E_p(n!) = \\left\\lfloor \\frac{n}{p} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^2} \\right\\rfloor + \\left\\lfloor \\frac{n}{p^3} \\right\\rfloor + \\dots$",
                "$E_p(n!) = \\frac{n}{p} + \\frac{n}{p^2} + \\frac{n}{p^3} + \\dots$",
                "$E_p(n!) = \\left\\lfloor \\frac{n}{p} \\right\\rfloor \\times \\left\\lfloor \\frac{n}{p^2} \\right\\rfloor \\times \\dots$",
                "$E_p(n!) = \\left\\lfloor \\frac{n!}{p} \\right\\rfloor$"
            ],
            "correctAnswer": 0,
            "solution": "Legendre's formula sums the greatest integer functions of $n$ divided by successive powers of the prime $p$."
        },
        {
            "type": "mcq",
            "text": "To find the number of trailing zeros at the end of $n!$, we need to find the highest power of which number dividing $n!$?",
            "options": [
                "5",
                "10",
                "2",
                "2 and 5 both, but computing for 2 is sufficient"
            ],
            "correctAnswer": 0,
            "solution": "Trailing zeros are formed by pairs of $2$ and $5$. In $n!$, the power of $5$ is always less than the power of $2$, so computing the highest power of $5$ is sufficient."
        },

        // ================= PERMUTATIONS (LINEAR ARRANGEMENTS) =================
        {
            "type": "mcq",
            "text": "The number of permutations (arrangements) of $n$ distinct objects taken $r$ at a time, denoted by $^nP_r$, is given by the formula:",
            "options": [
                "$\\frac{n!}{(n-r)!}$",
                "$\\frac{n!}{r!(n-r)!}$",
                "$\\frac{n!}{r!}$",
                "$n^r$"
            ],
            "correctAnswer": 0,
            "solution": "The formula for linear arrangements of $r$ objects out of $n$ distinct objects is $^nP_r = \\frac{n!}{(n-r)!}$."
        },
        {
            "type": "mcq",
            "text": "What is the relation between permutations $^nP_r$ and combinations $^nC_r$?",
            "options": [
                "$^nP_r = r! \\times ^nC_r$",
                "$^nP_r = \\frac{^nC_r}{r!}$",
                "$^nC_r = r! \\times ^nP_r$",
                "$^nP_r = ^nC_r + r!$"
            ],
            "correctAnswer": 0,
            "solution": "Arranging $r$ objects out of $n$ involves selecting them ($^nC_r$) and then arranging the selected $r$ objects ($r!$). Thus, $^nP_r = r! \\times ^nC_r$."
        },
        {
            "type": "mcq",
            "text": "The value of $^nP_n$ (the number of ways to arrange all $n$ distinct objects) is:",
            "options": [
                "$n!$",
                "1",
                "$n$",
                "0"
            ],
            "correctAnswer": 0,
            "solution": "$^nP_n = \\frac{n!}{(n-n)!} = \\frac{n!}{0!} = n!$."
        },
        {
            "type": "mcq",
            "text": "The value of $^nP_0$ is:",
            "options": [
                "1",
                "0",
                "$n!$",
                "Undefined"
            ],
            "correctAnswer": 0,
            "solution": "$^nP_0 = \\frac{n!}{(n-0)!} = \\frac{n!}{n!} = 1$. There is exactly 1 way to arrange 0 objects (doing nothing)."
        },
        {
            "type": "mcq",
            "text": "The number of permutations of $n$ distinct objects taken $r$ at a time, when repetition of objects is allowed, is:",
            "options": [
                "$n^r$",
                "$r^n$",
                "$\\frac{n!}{(n-r)!}$",
                "$^nC_r \\times r^r$"
            ],
            "correctAnswer": 0,
            "solution": "For each of the $r$ positions, there are $n$ choices. By the multiplication principle, the total ways are $n \\times n \\times \\dots$ ($r$ times) $= n^r$."
        },
        {
            "type": "mcq",
            "text": "The number of permutations of $n$ distinct objects taken $r$ at a time, if $k$ particular objects must always be included in the arrangement, is:",
            "options": [
                "$^{n-k}C_{r-k} \\times r!$",
                "$^{n-k}P_{r-k}$",
                "$^nC_{r-k} \\times k!$",
                "$^{n-k}C_{r-k} \\times (r-k)!$"
            ],
            "correctAnswer": 0,
            "solution": "First, select the remaining $(r-k)$ objects from the remaining $(n-k)$ objects ($^{n-k}C_{r-k}$). Then arrange all $r$ chosen objects ($r!$)."
        },
        {
            "type": "mcq",
            "text": "The number of permutations of $n$ distinct objects taken $r$ at a time, if $k$ particular objects are never included, is:",
            "options": [
                "$^{n-k}P_r$",
                "$^nP_{r-k}$",
                "$^{n-k}C_r \\times (r-k)!$",
                "$^nC_{r-k} \\times r!$"
            ],
            "correctAnswer": 0,
            "solution": "Remove the $k$ specific objects entirely. Now select and arrange $r$ objects from the remaining $(n-k)$ objects, which is $^{n-k}P_r$."
        },
        {
            "type": "mcq",
            "text": "If we want to arrange $n$ objects in a row such that $k$ specific objects are always together (the Tie/String Method), we treat the $k$ objects as a single unit. The total number of arrangements is:",
            "options": [
                "$(n - k + 1)! \\times k!$",
                "$(n - k)! \\times k!$",
                "$(n - k + 1)!$",
                "$n! - (n - k + 1)! \\times k!$"
            ],
            "correctAnswer": 0,
            "solution": "Tie the $k$ objects into 1 unit. We now have $(n - k + 1)$ units to arrange, which gives $(n - k + 1)!$ ways. The $k$ objects can internally arrange in $k!$ ways."
        },
        {
            "type": "mcq",
            "text": "If we want to arrange $m$ men and $n$ women in a row such that no two women are together (the Gap Method), the number of ways is:",
            "options": [
                "$m! \\times ^{m+1}P_n$",
                "$m! \\times n!$",
                "$(m+n)! - m!n!$",
                "$m! \\times ^mP_n$"
            ],
            "correctAnswer": 0,
            "solution": "First arrange the $m$ men in $m!$ ways. This creates $(m+1)$ gaps. We then place the $n$ women in these gaps in $^{m+1}P_n$ ways."
        },
        {
            "type": "mcq",
            "text": "The number of permutations of $n$ objects where $p$ objects are identical and of one kind, $q$ objects are identical and of a second kind, and the rest are distinct, is:",
            "options": [
                "$\\frac{n!}{p! q!}$",
                "$\\frac{n!}{(p+q)!}$",
                "$n! - p! q!$",
                "$\\frac{n!}{p! + q!}$"
            ],
            "correctAnswer": 0,
            "solution": "To account for indistinguishable arrangements of identical objects, we divide the total permutations ($n!$) by the internal permutations of the alike groups ($p!$ and $q!$)."
        },
        {
            "type": "mcq",
            "text": "The number of ways to arrange $n$ identical objects of the same kind in a row is:",
            "options": [
                "1",
                "$n!$",
                "$n$",
                "0"
            ],
            "correctAnswer": 0,
            "solution": "If all objects are identical, swapping them does not create a new arrangement. Thus, there is exactly 1 way."
        },
        {
            "type": "mcq",
            "text": "The fundamental identity relating consecutive permutations is $^nP_r = n \\times {}^{(n-1)}P_{(r-1)}$. What is the analogous additive identity for permutations?",
            "options": [
                "$^nP_r = {}^{(n-1)}P_r + r \\cdot {}^{(n-1)}P_{(r-1)}$",
                "$^nP_r = {}^{(n-1)}P_r + {}^{(n-1)}P_{(r-1)}$",
                "$^nP_r = n \\cdot {}^{(n-1)}P_r + r \\cdot {}^{(n-1)}P_{(r-1)}$",
                "$^nP_r = {}^{(n-1)}P_r + n \\cdot {}^{(n-1)}P_{(r-1)}$"
            ],
            "correctAnswer": 0,
            "solution": "By fixing one specific element, either it is NOT selected (giving $^{n-1}P_r$ ways) or it IS selected and placed in one of the $r$ spots (giving $r \\times ^{n-1}P_{r-1}$ ways)."
        },
        {
            "type": "mcq",
            "text": "The ratio $\\frac{^nP_r}{^nP_{r-1}}$ evaluates to:",
            "options": [
                "$n - r + 1$",
                "$\\frac{n - r + 1}{r}$",
                "$n - r$",
                "$\\frac{n - r}{r}$"
            ],
            "correctAnswer": 0,
            "solution": "$\\frac{^nP_r}{^nP_{r-1}} = \\frac{n! / (n-r)!}{n! / (n-r+1)!} = \\frac{(n-r+1)!}{(n-r)!} = n - r + 1$."
        },
        
        // ================= CIRCULAR PERMUTATIONS =================
        {
            "type": "mcq",
            "text": "The number of circular permutations of $n$ distinct objects is:",
            "options": [
                "$(n - 1)!$",
                "$n!$",
                "$\\frac{n!}{2}$",
                "$\\frac{(n - 1)!}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "In a circle, there is no fixed starting point. Fixing one object and arranging the remaining $(n-1)$ objects linearly gives $(n-1)!$."
        },
        {
            "type": "mcq",
            "text": "The number of circular permutations of $n$ distinct objects when clockwise and anticlockwise arrangements are considered indistinguishable (e.g., beads on a necklace or flowers in a garland) is:",
            "options": [
                "$\\frac{(n - 1)!}{2}$",
                "$(n - 1)!$",
                "$\\frac{n!}{2}$",
                "$n!$"
            ],
            "correctAnswer": 0,
            "solution": "Because the necklace can be flipped over, clockwise and anticlockwise arrangements are the same. We divide the standard circular permutations by 2."
        },
        {
            "type": "mcq",
            "text": "The number of ways to arrange $n$ men and $n$ women around a circular table such that no two women sit together is:",
            "options": [
                "$(n - 1)! \\times n!$",
                "$(n - 1)! \\times (n - 1)!$",
                "$n! \\times n!$",
                "$2 \\times (n - 1)! \\times n!$"
            ],
            "correctAnswer": 0,
            "solution": "First, seat the $n$ men in a circle in $(n-1)!$ ways. This creates $n$ gaps. Place the $n$ women in these $n$ gaps in $n!$ ways."
        },
        {
            "type": "mcq",
            "text": "The number of circular permutations of $n$ distinct things taken $r$ at a time in a given direction is:",
            "options": [
                "$\\frac{^nP_r}{r}$",
                "$^nP_r$",
                "$\\frac{^nC_r}{r}$",
                "$(r-1)! \\times ^nC_r$"
            ],
            "correctAnswer": 0,
            "solution": "Select $r$ things in $^nC_r$ ways, and arrange them circularly in $(r-1)!$ ways. $^nC_r \\times (r-1)! = \\frac{n!}{r!(n-r)!} \\times (r-1)! = \\frac{^nP_r}{r}$."
        },

        // ================= COMBINATIONS (SELECTIONS) =================
        {
            "type": "mcq",
            "text": "The number of combinations (selections) of $n$ distinct objects taken $r$ at a time, denoted by $^nC_r$ or $\\binom{n}{r}$, is given by the formula:",
            "options": [
                "$\\frac{n!}{r!(n-r)!}$",
                "$\\frac{n!}{(n-r)!}$",
                "$\\frac{n!}{r!}$",
                "$n! - r!$"
            ],
            "correctAnswer": 0,
            "solution": "The standard combination formula divides the linear arrangements by $r!$ to remove the ordering: $^nC_r = \\frac{n!}{r!(n-r)!}$."
        },
        {
            "type": "mcq",
            "text": "The symmetry property of combinations states that $^nC_r$ is always equal to:",
            "options": [
                "$^nC_{n-r}$",
                "$^nC_{r-1}$",
                "$^{n-1}C_r$",
                "$^nC_{n+r}$"
            ],
            "correctAnswer": 0,
            "solution": "Selecting $r$ objects to keep is identical to selecting $(n-r)$ objects to reject. Thus, $^nC_r = ^nC_{n-r}$."
        },
        {
            "type": "mcq",
            "text": "Pascal's Rule (or Pascal's Identity) for combinations is:",
            "options": [
                "$^nC_r + ^nC_{r-1} = ^{n+1}C_r$",
                "$^nC_r + ^{n+1}C_r = ^{n+1}C_{r+1}$",
                "$^nC_r - ^nC_{r-1} = ^{n-1}C_r$",
                "$^nC_r + ^nC_{r-1} = ^nC_{r+1}$"
            ],
            "correctAnswer": 0,
            "solution": "Pascal's identity states that $^nC_r + ^nC_{r-1} = ^{n+1}C_r$. It is the basis for constructing Pascal's Triangle."
        },
        {
            "type": "mcq",
            "text": "The ratio $\\frac{^nC_r}{^nC_{r-1}}$ evaluates to:",
            "options": [
                "$\\frac{n - r + 1}{r}$",
                "$\\frac{n - r}{r}$",
                "$\\frac{r}{n - r + 1}$",
                "$n - r + 1$"
            ],
            "correctAnswer": 0,
            "solution": "Expanding the factorials: $\\frac{n!}{r!(n-r)!} \\times \\frac{(r-1)!(n-r+1)!}{n!} = \\frac{n - r + 1}{r}$."
        },
        {
            "type": "mcq",
            "text": "A standard absorption identity for combinations is $^nC_r = \\frac{n}{r} \\times \\dots$",
            "options": [
                "$^{n-1}C_{r-1}$",
                "$^nC_{r-1}$",
                "$^{n-1}C_r$",
                "$^{n+1}C_{r+1}$"
            ],
            "correctAnswer": 0,
            "solution": "$^nC_r = \\frac{n}{r} \\times ^{n-1}C_{r-1}$. This is commonly used in binomial summations to \"absorb\" variables."
        },
        {
            "type": "mcq",
            "text": "If $^nC_x = ^nC_y$ and $x \\ne y$, then the relationship between $n, x,$ and $y$ must be:",
            "options": [
                "$x + y = n$",
                "$x - y = n$",
                "$x \\times y = n$",
                "$x^2 = y^2$"
            ],
            "correctAnswer": 0,
            "solution": "Due to the symmetry property $^nC_r = ^nC_{n-r}$, if $x \\ne y$, then $x$ must equal $n-y$, meaning $x + y = n$."
        },
        {
            "type": "mcq",
            "text": "The sum of all combinations $^nC_0 + ^nC_1 + ^nC_2 + \\dots + ^nC_n$ is equal to:",
            "options": [
                "$2^n$",
                "$2^{n-1}$",
                "$2^n - 1$",
                "$n^2$"
            ],
            "correctAnswer": 0,
            "solution": "This represents the total number of subsets of a set with $n$ elements, which is $2^n$ (found by setting $x=1$ in $(1+x)^n$)."
        },
        {
            "type": "mcq",
            "text": "The sum of alternate (odd or even indexed) combinations, e.g., $^nC_0 + ^nC_2 + ^nC_4 + \\dots$ is equal to:",
            "options": [
                "$2^{n-1}$",
                "$2^n$",
                "$2^{n-1} - 1$",
                "$0$"
            ],
            "correctAnswer": 0,
            "solution": "Half of the subsets have an even number of elements and half have an odd number. Thus, both sums equal $2^{n-1}$."
        },
        {
            "type": "mcq",
            "text": "If $n$ is an even integer, the maximum value of $^nC_r$ occurs when $r$ is equal to:",
            "options": [
                "$\\frac{n}{2}$",
                "$\\frac{n - 1}{2}$",
                "$\\frac{n + 2}{2}$",
                "$n$"
            ],
            "correctAnswer": 0,
            "solution": "The binomial coefficients increase towards the middle. For even $n$, the absolute middle is at $r = \\frac{n}{2}$."
        },
        {
            "type": "mcq",
            "text": "If $n$ is an odd integer, the maximum value of $^nC_r$ occurs when $r$ is equal to:",
            "options": [
                "$\\frac{n-1}{2}$ and $\\frac{n+1}{2}$",
                "$\\frac{n}{2}$",
                "$1$ and $n-1$",
                "$\\frac{n-3}{2}$ and $\\frac{n+3}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "For odd $n$, there are two middle terms in the binomial expansion, occurring at $r = \\frac{n-1}{2}$ and $r = \\frac{n+1}{2}$."
        },
        {
            "type": "mcq",
            "text": "The total number of ways to select one or more objects from $n$ distinct objects is:",
            "options": [
                "$2^n - 1$",
                "$2^n$",
                "$2^{n-1}$",
                "$n^2 - 1$"
            ],
            "correctAnswer": 0,
            "solution": "Each object has 2 choices (selected or not selected). Total ways = $2^n$. Subtracting the 1 case where none are selected gives $2^n - 1$."
        },

        // ================= SELECTIONS FROM IDENTICAL OBJECTS =================
        {
            "type": "mcq",
            "text": "The number of ways to select $r$ objects out of $n$ identical objects is:",
            "options": [
                "1",
                "$^nC_r$",
                "$r$",
                "$n$"
            ],
            "correctAnswer": 0,
            "solution": "Since all objects are identical, any selection of $r$ objects looks exactly the same. Thus, there is only 1 way."
        },
        {
            "type": "mcq",
            "text": "The total number of ways to select zero or more objects from a group of $n$ identical objects is:",
            "options": [
                "$n + 1$",
                "$n$",
                "$2^n$",
                "$2^n - 1$"
            ],
            "correctAnswer": 0,
            "solution": "You can select 0 objects, 1 object, 2 objects, ..., up to $n$ objects. This gives exactly $n + 1$ total ways."
        },
        {
            "type": "mcq",
            "text": "The total number of ways to select one or more objects from a group of $p$ identical objects of one kind, $q$ identical objects of a second kind, and $r$ identical objects of a third kind is:",
            "options": [
                "$(p + 1)(q + 1)(r + 1) - 1$",
                "$p \\times q \\times r$",
                "$(p+q+r)^3 - 1$",
                "$2^{p+q+r} - 1$"
            ],
            "correctAnswer": 0,
            "solution": "For each group, we have (count + 1) choices (including taking 0). We multiply these choices and subtract 1 to exclude the case where 0 objects are chosen from all groups."
        },
        {
            "type": "mcq",
            "text": "If there are $p$ alike objects of type 1, $q$ alike objects of type 2, and $k$ distinct objects, the total number of ways to select at least one object is:",
            "options": [
                "$(p + 1)(q + 1)2^k - 1$",
                "$(p + 1)(q + 1)(k + 1) - 1$",
                "$(p \\times q)2^k - 1$",
                "$2^{p+q+k} - 1$"
            ],
            "correctAnswer": 0,
            "solution": "For alike objects, choices are $(p+1)$ and $(q+1)$. For the $k$ distinct objects, total selections (including empty) is $2^k$. Subtract 1 for the empty selection across all groups."
        },

        // ================= DIVISORS AND NUMBER THEORY =================
        {
            "type": "mcq",
            "text": "If a composite number $N$ is prime factorized as $N = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k}$, the total number of divisors of $N$ (including $1$ and $N$) is:",
            "options": [
                "$(a_1 + 1)(a_2 + 1) \\dots (a_k + 1)$",
                "$a_1 \\times a_2 \\times \\dots \\times a_k$",
                "$(a_1 - 1)(a_2 - 1) \\dots (a_k - 1)$",
                "$p_1 a_1 + p_2 a_2 + \\dots$"
            ],
            "correctAnswer": 0,
            "solution": "Selecting a divisor is equivalent to selecting zero or more of each prime factor. Thus, we have $(a_1+1)$ choices for $p_1$, $(a_2+1)$ choices for $p_2$, etc."
        },
        {
            "type": "mcq",
            "text": "If a composite number $N$ is prime factorized as $N = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k}$, the total number of proper divisors of $N$ (excluding $1$ and $N$) is:",
            "options": [
                "$(a_1 + 1)(a_2 + 1) \\dots (a_k + 1) - 2$",
                "$(a_1 + 1)(a_2 + 1) \\dots (a_k + 1) - 1$",
                "$(a_1)(a_2) \\dots (a_k) - 2$",
                "$\\frac{(a_1 + 1)(a_2 + 1) \\dots (a_k + 1)}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "We calculate total divisors and subtract 2 (one for $1$, and one for $N$)."
        },
        {
            "type": "mcq",
            "text": "If $N = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k}$, the sum of all divisors of $N$ is given by:",
            "options": [
                "$\\left(\\frac{p_1^{a_1+1}-1}{p_1-1}\\right) \\left(\\frac{p_2^{a_2+1}-1}{p_2-1}\\right) \\dots$",
                "$(a_1+1)(a_2+1)\\dots(a_k+1)$",
                "$(p_1^{a_1})(p_2^{a_2})\\dots$",
                "$\\left(\\frac{p_1^{a_1}-1}{p_1-1}\\right) \\left(\\frac{p_2^{a_2}-1}{p_2-1}\\right) \\dots$"
            ],
            "correctAnswer": 0,
            "solution": "The sum is the product of geometric progressions formed by the powers of each prime factor: $(1+p_1+\\dots+p_1^{a_1}) \\times \\dots$"
        },
        {
            "type": "mcq",
            "text": "The number of ways in which a natural number $N$ (which is NOT a perfect square) can be resolved as a product of two factors is:",
            "options": [
                "$\\frac{1}{2} \\times (\\text{Total number of divisors of } N)$",
                "Total number of divisors of $N$",
                "$\\frac{1}{2} \\times (\\text{Total number of divisors of } N) + 1$",
                "Total number of divisors of $N$ - 1"
            ],
            "correctAnswer": 0,
            "solution": "Since $N$ is not a square, divisors occur in distinct pairs $(d, N/d)$. The number of such pairs is exactly half the total number of divisors."
        },
        {
            "type": "mcq",
            "text": "The number of ways in which a natural number $N$ (which IS a perfect square) can be resolved as a product of two distinct factors is:",
            "options": [
                "$\\frac{1}{2} \\times (\\text{Total number of divisors of } N - 1)$",
                "$\\frac{1}{2} \\times (\\text{Total number of divisors of } N + 1)$",
                "$\\frac{1}{2} \\times (\\text{Total number of divisors of } N)$",
                "Total number of divisors of $N$"
            ],
            "correctAnswer": 0,
            "solution": "For a perfect square, the total divisors is an odd number. One pair is $(\\sqrt{N}, \\sqrt{N})$. Excluding this, there are (Total - 1)/2 distinct factor pairs."
        },
        {
            "type": "mcq",
            "text": "The number of ways to resolve $N = p_1^{a_1} p_2^{a_2} \\dots p_k^{a_k}$ into two factors that are coprime to each other is:",
            "options": [
                "$2^{k-1}$",
                "$2^k$",
                "$k^2$",
                "$2^{k+1}$"
            ],
            "correctAnswer": 0,
            "solution": "For the factors to be coprime, each prime base $p_i^{a_i}$ must go entirely to one factor or the other. For $k$ prime bases, there are $2^k$ assignments, forming $2^{k-1}$ unordered pairs."
        },

        // ================= DIVISION AND DISTRIBUTION (GROUPING) =================
        {
            "type": "mcq",
            "text": "The number of ways to divide $(m+n)$ distinct objects into two unequal groups containing $m$ and $n$ objects respectively is:",
            "options": [
                "$\\frac{(m+n)!}{m! n!}$",
                "$\\frac{(m+n)!}{m! n! 2!}$",
                "$\\frac{(m+n)!}{2!}$",
                "$^mC_n$"
            ],
            "correctAnswer": 0,
            "solution": "Selecting $m$ objects out of $(m+n)$ leaves $n$ objects for the second group. Total ways $= ^{m+n}C_m = \\frac{(m+n)!}{m! n!}$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to divide $2m$ distinct objects into two equal groups of $m$ objects each is:",
            "options": [
                "$\\frac{(2m)!}{(m!)^2 2!}$",
                "$\\frac{(2m)!}{(m!)^2}$",
                "$\\frac{(2m)!}{2!}$",
                "$\\frac{(2m)!}{(m!)}$"
            ],
            "correctAnswer": 0,
            "solution": "Because the groups are of equal size and unlabelled, swapping the two groups does not create a new division. We must divide by $2!$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to divide $3m$ distinct objects into three equal groups of $m$ objects each is:",
            "options": [
                "$\\frac{(3m)!}{(m!)^3 3!}$",
                "$\\frac{(3m)!}{(m!)^3}$",
                "$\\frac{(3m)!}{3!}$",
                "$\\frac{(3m)!}{m! 3!}$"
            ],
            "correctAnswer": 0,
            "solution": "Similar to two equal groups, for three unlabeled groups of the same size, we must divide by the number of permutations of the groups, which is $3!$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to distribute $(m+n)$ distinct objects to 2 persons such that they get $m$ and $n$ objects respectively is:",
            "options": [
                "$\\frac{(m+n)!}{m! n!} \\times 2!$",
                "$\\frac{(m+n)!}{m! n!}$",
                "$\\frac{(m+n)!}{2!}$",
                "$\\frac{(m+n)!}{m! n! 2!} \\times 2!$"
            ],
            "correctAnswer": 0,
            "solution": "If the group sizes are unequal, division is $\\frac{(m+n)!}{m! n!}$. Distributing to 2 distinct persons requires multiplying by $2!$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to distribute $2m$ distinct objects equally between 2 persons is:",
            "options": [
                "$\\frac{(2m)!}{(m!)^2}$",
                "$\\frac{(2m)!}{(m!)^2 2!}$",
                "$\\frac{(2m)!}{2!}$",
                "$\\frac{(2m)!}{m!}$"
            ],
            "correctAnswer": 0,
            "solution": "Division into two equal groups is $\\frac{(2m)!}{(m!)^2 2!}$. Distributing to 2 persons multiplies this by $2!$, effectively cancelling it out to yield $\\frac{(2m)!}{(m!)^2}$."
        },

        // ================= STARS AND BARS (IDENTICAL OBJECT DISTRIBUTION) =================
        {
            "type": "mcq",
            "text": "The total number of non-negative integral solutions (where zero is allowed) to the equation $x_1 + x_2 + \\dots + x_r = n$ is given by:",
            "options": [
                "$^{n+r-1}C_{r-1}$",
                "$^{n-1}C_{r-1}$",
                "$^{n+r-1}C_r$",
                "$n^r$"
            ],
            "correctAnswer": 0,
            "solution": "Using the Stars and Bars method for non-negative integer solutions (empty boxes allowed), we place $(r-1)$ partitions among $n$ objects, yielding $^{n+r-1}C_{r-1}$."
        },
        {
            "type": "mcq",
            "text": "The total number of positive integral solutions (where zero is NOT allowed) to the equation $x_1 + x_2 + \\dots + x_r = n$ (where $n \\ge r$) is given by:",
            "options": [
                "$^{n-1}C_{r-1}$",
                "$^{n+r-1}C_{r-1}$",
                "$^nC_{r-1}$",
                "$r^n$"
            ],
            "correctAnswer": 0,
            "solution": "Using Stars and Bars for positive integer solutions, we can only place the $(r-1)$ partitions in the $(n-1)$ gaps between the objects, yielding $^{n-1}C_{r-1}$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to distribute $n$ identical items into $r$ distinct boxes such that any box can contain any number of items (including zero) is equivalent to:",
            "options": [
                "The number of non-negative integral solutions of $x_1 + x_2 + \\dots + x_r = n$",
                "The number of positive integral solutions of $x_1 + x_2 + \\dots + x_r = n$",
                "$r^n$",
                "$n^r$"
            ],
            "correctAnswer": 0,
            "solution": "Distributing identical items with empty boxes allowed directly maps to finding non-negative integer solutions to $x_1 + \\dots + x_r = n$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to distribute $n$ identical items into $r$ distinct boxes such that no box remains empty is:",
            "options": [
                "$^{n-1}C_{r-1}$",
                "$^{n+r-1}C_{r-1}$",
                "$r^n$",
                "$r! \\times ^{n-1}C_{r-1}$"
            ],
            "correctAnswer": 0,
            "solution": "This maps to finding positive integer solutions. We give 1 item to each box first, leaving $n-r$ items to distribute into $r$ boxes (empty allowed): $^{(n-r)+r-1}C_{r-1} = ^{n-1}C_{r-1}$."
        },
        {
            "type": "mcq",
            "text": "If we want to find the number of ways to distribute identical objects into distinct boxes with an upper limit restriction (e.g., $x_1 + x_2 = n$ where $x_1 \\le 5$), the most systematic algebraic approach uses:",
            "options": [
                "Coefficients in polynomial/multinomial expansion",
                "Simple Stars and Bars without modification",
                "Division into equal groups",
                "Circular permutations"
            ],
            "correctAnswer": 0,
            "solution": "Upper bound restrictions require the multinomial theorem, extracting the coefficient of $x^n$ from expressions like $(x^0 + x^1 + \\dots + x^5)$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to distribute $n$ distinct objects into $r$ distinct boxes with no restrictions on the number of objects per box is:",
            "options": [
                "$r^n$",
                "$n^r$",
                "$^nC_r$",
                "$^{n+r-1}C_{r-1}$"
            ],
            "correctAnswer": 0,
            "solution": "Each of the $n$ distinct objects has $r$ distinct boxes it could be placed in. By the multiplication principle: $r \\times r \\times \\dots$ ($n$ times) $= r^n$."
        },
        {
            "type": "mcq",
            "text": "The number of functions from a set $A$ (with $m$ elements) to a set $B$ (with $n$ elements) is:",
            "options": [
                "$n^m$",
                "$m^n$",
                "$^nP_m$",
                "$^nC_m$"
            ],
            "correctAnswer": 0,
            "solution": "Each of the $m$ elements in the domain $A$ has $n$ choices for a mapping in the codomain $B$. Total functions $= n^m$."
        },
        {
            "type": "mcq",
            "text": "The number of injective (one-to-one) functions from a set $A$ (with $m$ elements) to a set $B$ (with $n$ elements), where $n \\ge m$, is:",
            "options": [
                "$^nP_m$",
                "$^nC_m$",
                "$n^m$",
                "$m! \\times ^nC_n$"
            ],
            "correctAnswer": 0,
            "solution": "The first element has $n$ choices, the second has $n-1$, etc., up to $m$ terms. This is exactly the formula for permutations: $^nP_m$."
        },

        // ================= DERANGEMENTS =================
        {
            "type": "mcq",
            "text": "A derangement is a permutation of elements such that:",
            "options": [
                "No element appears in its original (correct) position",
                "Exactly one element appears in its original position",
                "All elements appear in their original positions",
                "Elements are arranged in alternating order"
            ],
            "correctAnswer": 0,
            "solution": "By definition, a derangement requires that none of the objects occupy their correctly matched destinations."
        },
        {
            "type": "mcq",
            "text": "The explicit formula for the number of derangements of $n$ distinct objects, $D_n$, is:",
            "options": [
                "$n! \\left( 1 - \\frac{1}{1!} + \\frac{1}{2!} - \\frac{1}{3!} + \\dots + (-1)^n \\frac{1}{n!} \\right)$",
                "$n! \\left( 1 + \\frac{1}{1!} + \\frac{1}{2!} + \\dots + \\frac{1}{n!} \\right)$",
                "$(n-1)! \\left( 1 - \\frac{1}{1!} + \\dots + (-1)^n \\frac{1}{n!} \\right)$",
                "$\\frac{n!}{e}$ (exact for all $n$)"
            ],
            "correctAnswer": 0,
            "solution": "Using the Principle of Inclusion-Exclusion, the formula evaluates to $n! \\sum_{k=0}^n \\frac{(-1)^k}{k!}$."
        },
        {
            "type": "mcq",
            "text": "The value of $D_1$ (derangement of 1 object) is:",
            "options": [
                "0",
                "1",
                "-1",
                "Undefined"
            ],
            "correctAnswer": 0,
            "solution": "If there is only 1 object and 1 spot, it must go in its own spot. It cannot be deranged. Hence, $D_1 = 0$."
        },
        {
            "type": "mcq",
            "text": "The value of $D_2$ (derangement of 2 objects) is:",
            "options": [
                "1",
                "0",
                "2",
                "4"
            ],
            "correctAnswer": 0,
            "solution": "For items A and B, the only derangement is placing B in slot 1 and A in slot 2. So, $D_2 = 1$."
        },
        {
            "type": "mcq",
            "text": "The value of $D_3$ (derangement of 3 objects) is:",
            "options": [
                "2",
                "1",
                "3",
                "6"
            ],
            "correctAnswer": 0,
            "solution": "Using the formula $3! (1/2! - 1/3!) = 6(1/2 - 1/6) = 3 - 1 = 2$. Alternatively, for ABC, the derangements are BCA and CAB."
        },
        {
            "type": "mcq",
            "text": "The value of $D_4$ (derangement of 4 objects) is:",
            "options": [
                "9",
                "12",
                "24",
                "6"
            ],
            "correctAnswer": 0,
            "solution": "Using the formula $4! (1/2! - 1/3! + 1/4!) = 24 (1/2 - 1/6 + 1/24) = 12 - 4 + 1 = 9$."
        },
        {
            "type": "mcq",
            "text": "Which of the following is a valid recurrence relation for derangements $D_n$?",
            "options": [
                "$D_n = n D_{n-1} + (-1)^n$",
                "$D_n = n D_{n-1} - (-1)^n$",
                "$D_n = (n-1) D_{n-1} + (-1)^n$",
                "$D_n = D_{n-1} + D_{n-2}$"
            ],
            "correctAnswer": 0,
            "solution": "The standard first-order recurrence relation for derangements is $D_n = n D_{n-1} + (-1)^n$."
        },
        {
            "type": "mcq",
            "text": "Which of the following is a valid second-order recurrence relation for derangements $D_n$?",
            "options": [
                "$D_n = (n-1)(D_{n-1} + D_{n-2})$",
                "$D_n = n(D_{n-1} + D_{n-2})$",
                "$D_n = (n-1)(D_{n-1} - D_{n-2})$",
                "$D_n = n(D_{n-1} - D_{n-2})$"
            ],
            "correctAnswer": 0,
            "solution": "A common combinatorial proof establishes that $D_n = (n-1)(D_{n-1} + D_{n-2})$."
        },
        {
            "type": "mcq",
            "text": "The number of ways to arrange $n$ objects such that exactly $r$ objects are placed in wrong (deranged) positions and the rest are correctly placed is:",
            "options": [
                "$^nC_{n-r} \\times D_r$",
                "$^nP_r \\times D_r$",
                "$^nC_r \\times D_{n-r}$",
                "$D_r \\times D_{n-r}$"
            ],
            "correctAnswer": 0,
            "solution": "Select the $(n-r)$ objects to remain in their correct positions in $^nC_{n-r}$ ways. The remaining $r$ objects must be deranged in $D_r$ ways."
        },

        // ================= GEOMETRIC APPLICATIONS =================
        {
            "type": "mcq",
            "text": "The number of straight lines that can be formed by joining $n$ non-collinear points in a plane is:",
            "options": [
                "$^nC_2$",
                "$^nP_2$",
                "$n^2$",
                "$\\frac{n(n+1)}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "A unique straight line requires exactly 2 points. Selecting 2 points out of $n$ gives $^nC_2$ lines."
        },
        {
            "type": "mcq",
            "text": "If there are $n$ points in a plane out of which $m$ points are collinear, the total number of straight lines formed is:",
            "options": [
                "$^nC_2 - ^mC_2 + 1$",
                "$^nC_2 - ^mC_2$",
                "$^nC_2 + ^mC_2$",
                "$^nC_2 - m + 1$"
            ],
            "correctAnswer": 0,
            "solution": "We subtract the lines formed incorrectly by the collinear points ($^mC_2$) and add 1 back because those $m$ collinear points form exactly 1 straight line."
        },
        {
            "type": "mcq",
            "text": "The number of triangles that can be formed by joining $n$ non-collinear points in a plane is:",
            "options": [
                "$^nC_3$",
                "$^nP_3$",
                "$n^3$",
                "$^nC_2 \\times (n-2)$"
            ],
            "correctAnswer": 0,
            "solution": "A unique triangle requires exactly 3 non-collinear points. Selecting 3 points out of $n$ gives $^nC_3$ triangles."
        },
        {
            "type": "mcq",
            "text": "If there are $n$ points in a plane out of which $m$ points are collinear, the total number of triangles formed is:",
            "options": [
                "$^nC_3 - ^mC_3$",
                "$^nC_3 - ^mC_3 + 1$",
                "$^nC_3 - ^mC_2$",
                "$^nC_3 - m$"
            ],
            "correctAnswer": 0,
            "solution": "We subtract the invalid triangles that would have been formed by picking 3 points strictly from the collinear set ($^mC_3$). They do not form a single triangle, so we don't add 1."
        },
        {
            "type": "mcq",
            "text": "The number of diagonals in a convex polygon of $n$ sides is given by:",
            "options": [
                "$^nC_2 - n$",
                "$^nC_2 + n$",
                "$\\frac{n(n-1)}{2}$",
                "$^nC_3$"
            ],
            "correctAnswer": 0,
            "solution": "Joining any two of the $n$ vertices gives $^nC_2$ total lines. Subtracting the $n$ lines that form the outer boundary (sides) leaves the diagonals: $^nC_2 - n = \\frac{n(n-3)}{2}$."
        },
        {
            "type": "mcq",
            "text": "The maximum number of points of intersection of $n$ distinct straight lines in a plane (no two parallel, no three concurrent) is:",
            "options": [
                "$^nC_2$",
                "$2 \\times ^nC_2$",
                "$n^2$",
                "$\\frac{n(n+1)}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "Every pair of non-parallel lines intersects at exactly 1 point. Total intersections is the number of pairs: $^nC_2$."
        },
        {
            "type": "mcq",
            "text": "The maximum number of points of intersection of $n$ distinct circles in a plane is:",
            "options": [
                "$2 \\times ^nC_2$",
                "$^nC_2$",
                "$4 \\times ^nC_2$",
                "$n^2 - n$"
            ],
            "correctAnswer": 0,
            "solution": "Every pair of intersecting circles produces at most 2 points of intersection. Thus, total points = $2 \\times ^nC_2$."
        },
        {
            "type": "mcq",
            "text": "If there is a set of $m$ parallel lines intersected by another set of $n$ parallel lines, the total number of parallelograms formed is:",
            "options": [
                "$^mC_2 \\times ^nC_2$",
                "$^mC_2 + ^nC_2$",
                "$m \\times n$",
                "$\\frac{mn(m-1)(n-1)}{2}$"
            ],
            "correctAnswer": 0,
            "solution": "A parallelogram requires 2 lines from the first set and 2 lines from the second set. The number of ways to select these is $^mC_2 \\times ^nC_2$."
        },
        {
            "type": "mcq",
            "text": "The total number of rectangles (including squares) that can be formed on a standard $8 \\times 8$ chessboard is:",
            "options": [
                "$^9C_2 \\times ^9C_2$",
                "$^8C_2 \\times ^8C_2$",
                "$64^2$",
                "$8^4$"
            ],
            "correctAnswer": 0,
            "solution": "An $8 \\times 8$ board is formed by 9 vertical and 9 horizontal lines. A rectangle is formed by choosing 2 vertical and 2 horizontal lines: $^9C_2 \\times ^9C_2$."
        },
        {
            "type": "mcq",
            "text": "The total number of squares on a standard $n \\times n$ chessboard is given by:",
            "options": [
                "$\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}$",
                "$^nC_2 \\times ^nC_2$",
                "$n^2$",
                "$\\sum_{k=1}^n k^3$"
            ],
            "correctAnswer": 0,
            "solution": "There are $n^2$ squares of size $1\\times1$, $(n-1)^2$ of $2\\times2$, down to $1^2$ of size $n\\times n$. The total is the sum of squares up to $n^2$."
        },
        {
            "type": "mcq",
            "text": "The maximum number of regions into which a plane is divided by $n$ straight lines is:",
            "options": [
                "$\\frac{n(n+1)}{2} + 1$",
                "$\\frac{n(n-1)}{2} + 1$",
                "$^nC_2$",
                "$2^n$"
            ],
            "correctAnswer": 0,
            "solution": "The formula for the maximum number of regions created by $n$ lines (Lazy Caterer's sequence) is $1 + \\frac{n(n+1)}{2}$."
        },

        // ================= GRID WALKING AND MULTINOMIAL =================
        {
            "type": "mcq",
            "text": "The total number of shortest paths on a grid to go from the origin $(0, 0)$ to the point $(m, n)$ moving only Right or Up is:",
            "options": [
                "$^{m+n}C_m$",
                "$^mC_n$",
                "$(m+n)!$",
                "$m^n + n^m$"
            ],
            "correctAnswer": 0,
            "solution": "The path must consist of exactly $m$ Right moves and $n$ Up moves. The number of permutations of these $(m+n)$ moves is $\\frac{(m+n)!}{m! n!} = ^{m+n}C_m$."
        },
        {
            "type": "mcq",
            "text": "In the expansion of $(x_1 + x_2 + \\dots + x_k)^n$, the number of distinct terms is given by:",
            "options": [
                "$^{n+k-1}C_{k-1}$",
                "$k^n$",
                "$^nC_k$",
                "$^{n-1}C_{k-1}$"
            ],
            "correctAnswer": 0,
            "solution": "Finding distinct terms is equivalent to finding the number of non-negative integral solutions to $a_1 + a_2 + \\dots + a_k = n$, which is $^{n+k-1}C_{k-1}$."
        },
        
        // ================= ADVANCED COMBINATORIAL IDENTITIES =================
        {
            "type": "mcq",
            "text": "Vandermonde's Identity states that $\\sum_{k=0}^r {}^mC_k \\times {}^nC_{r-k}$ is equal to:",
            "options": [
                "$^{m+n}C_r$",
                "$^{m+n}C_{r-k}$",
                "$^mC_r + ^nC_r$",
                "$m \\times n \\times ^rC_k$"
            ],
            "correctAnswer": 0,
            "solution": "This identity represents selecting $r$ items from a combined pool of $m+n$ items by summing over all possible ways to take $k$ from the first pool and $(r-k)$ from the second."
        },
        {
            "type": "mcq",
            "text": "The sum $\\sum_{r=1}^n r \\times ^nC_r$ evaluates to:",
            "options": [
                "$n \\times 2^{n-1}$",
                "$2^n - 1$",
                "$n \\times 2^n$",
                "$n(n+1) 2^{n-2}$"
            ],
            "correctAnswer": 0,
            "solution": "Differentiating $(1+x)^n = \\sum ^nC_r x^r$ with respect to $x$ and then setting $x=1$ yields $n(1+1)^{n-1} = n 2^{n-1}$."
        },
        {
            "type": "mcq",
            "text": "The sum $\\sum_{r=0}^n \\frac{^nC_r}{r+1}$ evaluates to:",
            "options": [
                "$\\frac{2^{n+1} - 1}{n+1}$",
                "$\\frac{2^n}{n+1}$",
                "$\\frac{2^n - 1}{n}$",
                "$\\frac{2^{n+1}}{n+1}$"
            ],
            "correctAnswer": 0,
            "solution": "Integrating $(1+x)^n$ from 0 to 1 yields $\\left. \\frac{(1+x)^{n+1}}{n+1} \\right|_0^1 = \\frac{2^{n+1} - 1}{n+1}$."
        },
        {
            "type": "mcq",
            "text": "The coefficient of $x^n$ in the expansion of $(1+x)^{2n}$ is:",
            "options": [
                "$^{2n}C_n$",
                "$^nC_n$",
                "$2^n$",
                "$^{2n}P_n$"
            ],
            "correctAnswer": 0,
            "solution": "By the binomial theorem, the general term is $^{2n}C_r x^r$. For $x^n$, $r=n$, so the coefficient is $^{2n}C_n$."
        },
        {
            "type": "mcq",
            "text": "The total number of relations from a set $A$ containing $m$ elements to a set $B$ containing $n$ elements is:",
            "options": [
                "$2^{mn}$",
                "$m^n$",
                "$n^m$",
                "$2^{m+n}$"
            ],
            "correctAnswer": 0,
            "solution": "A relation is any subset of the Cartesian product $A \\times B$. Since $|A \\times B| = mn$, the number of subsets (relations) is $2^{mn}$."
        },
        {
            "type": "mcq",
            "text": "According to the Principle of Inclusion and Exclusion for three finite sets $A, B, C$, $|A \\cup B \\cup C|$ is equal to:",
            "options": [
                "$|A| + |B| + |C| - |A \\cap B| - |B \\cap C| - |C \\cap A| + |A \\cap B \\cap C|$",
                "$|A| + |B| + |C| - |A \\cap B \\cap C|$",
                "$|A| + |B| + |C| + |A \\cap B| + |B \\cap C| + |C \\cap A| - |A \\cap B \\cap C|$",
                "$|A \\cap B| + |B \\cap C| + |C \\cap A| - |A \\cap B \\cap C|$"
            ],
            "correctAnswer": 0,
            "solution": "This is the standard formulation of the PIE for 3 sets: Add individuals, subtract pairs, add back triples."
        },
        {
            "type": "mcq",
            "text": "The number of onto (surjective) functions from a set $A$ with $n$ elements to a set $B$ with $r$ elements ($n \\ge r$) can be found using:",
            "options": [
                "The Principle of Inclusion and Exclusion",
                "Straight Multiplication Principle ($r^n$)",
                "Permutations ($^nP_r$)",
                "Combinations ($^nC_r$)"
            ],
            "correctAnswer": 0,
            "solution": "Onto functions require every element in the codomain to be mapped to. This is solved by taking total functions ($r^n$) and using PIE to subtract functions missing 1 element, add functions missing 2, etc."
        }
    ]
};