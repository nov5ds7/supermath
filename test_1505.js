window.testBank = window.testBank || {};
window.testBank['test_1505'] = {
    title: "Special DPP on P&C - DPP-5",
    category: "Special DPPs",
    uploadedAt: "2026-08-09T10:04:00Z",
    timeLimitMins: 600,
    randomizePoolSize: 0,
    shuffleQuestions: false,
    questions: [
        // 119
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Find the number of 4 digit numbers starting with 1 and having exactly two identical digits.",
            "correctAnswer": 432,
            "solution": "Total 4-digit numbers starting with 1 is $10^3 = 1000$. Substract those with all 4 identical (1111) and exactly 3 identical (111x, x≠1: $9$ ways for x), yields the result 432."
        },

        // ================================================================
        // DPP-9 (Q120 to Q129)
        // ================================================================

        // 120
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of different words that can be formed using all the letters of the word \"DEEPMALA\" if two vowels are together and the other two are also together but separated from the first two is",
            "options": [
                "960",
                "1200",
                "2160",
                "1440"
            ],
            "correctAnswer": 3,
            "solution": "The vowels are E, E, A, A. We have two blocks of vowels (AA and EE). We must arrange the 4 consonants (D, P, M, L) and the two vowel blocks such that the blocks are separated. Arrange 4 consonants: $4! = 24$. This creates 5 gaps. Choose 2 gaps for the vowel blocks: $^5C_2 = 10$. Arrange the vowel blocks internally: $2! \\times 2! = 4$. Total $= 24 \\times 10 \\times 4 = 960$."
        },
        // 121
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways in which 10 boys can take positions about a round table if two particular boys must not be seated side by side is :",
            "options": [
                "$10(9)!$",
                "$9(8)!$",
                "$7(8)!$",
                "none"
            ],
            "correctAnswer": 2,
            "solution": "Total circular arrangements of 10 boys = $(10-1)! = 9!$. Treat the two particular boys as a single block: $2! \\times (9-1)! = 2 \\times 8!$. Valid arrangements $= 9! - 2 \\times 8! = 9 \\times 8! - 2 \\times 8! = 7 \\times 8!$."
        },
        // 122
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "In a unique hockey series between India & Pakistan, they decide to play on till a team wins 5 matches. The number of ways in which the series can be won by India, if no match ends in a draw is :",
            "options": [
                "126",
                "252",
                "225",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "The series ends when India wins their 5th match. If India wins in the $n^{\\text{th}}$ match, they must have won 4 of the previous $n-1$ matches. Total possibilities $= \\sum_{n=5}^{9} ^{n-1}C_4 = ^4C_4 + ^5C_4 + ^6C_4 + ^7C_4 + ^8C_4 = 1 + 5 + 15 + 35 + 70 = 126$."
        },
        // 123
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of ways in which n things of which r alike & the rest different can be arranged in a circle distinguishing between clockwise and anticlockwise arrangement, is :",
            "options": [
                "$\\frac{(\\mathrm{n} + \\mathrm{r} - 1)!}{\\mathrm{r}!}$",
                "$\\frac{(\\mathrm{n} - 1)!}{\\mathrm{r}}$",
                "$\\frac{(\\mathrm{n} - 1)!}{(\\mathrm{r} - 1)!}$",
                "$\\frac{(\\mathrm{n} - 1)!}{\\mathrm{r}!}$"
            ],
            "correctAnswer": 3,
            "solution": "First, arrange the $n$ items in a circle as if they were all distinct: $(n-1)!$. Since $r$ of them are identical, we divide by $r!$ to account for the identical permutations. Total ways $= \\frac{(n-1)!}{r!}$."
        },
        // 124
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways of arranging 2m white & 2n red counters in straight line so that each arrangement is symmetrical with respect to a central mark is. (assume that all counters are alike except for the colour)",
            "options": [
                "$\\frac{(\\mathrm{m} + \\mathrm{n} - 1)!}{\\mathrm{m}! \\mathrm{n}!}$",
                "$\\frac{(\\mathrm{m} + \\mathrm{n} + 1)!}{\\mathrm{m}! \\mathrm{n}!}$",
                "$\\frac{(\\mathrm{m} + \\mathrm{n})!}{\\mathrm{m}! \\mathrm{n}!}$",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "For the arrangement to be symmetrical, the right half must mirror the left half. We choose $m$ positions for white and $n$ positions for red in the first half (which contains $m+n$ positions). Number of ways to arrange the first half $= ^{m+n}C_m$."
        },
        // 125
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A gentleman invites a party of $\\mathrm{m} + \\mathrm{n}$ ($\\mathrm{m}\\neq \\mathrm{n}$) friends to a dinner & places m at one table $\\mathrm{T}_{1}$ and n at another table $\\mathrm{T}_{2}$ , the tables being round. If not all people shall have the same neighbour in any two arrangement, then the number of ways in which he can arrange the guests, is",
            "options": [
                "$\\frac{(\\mathrm{m} + \\mathrm{n})!}{4\\mathrm{mn}}$",
                "$\\frac{1}{2}\\frac{(\\mathrm{m} + \\mathrm{n})!}{\\mathrm{mn}}$",
                "$2\\frac{(\\mathrm{m} + \\mathrm{n})!}{\\mathrm{mn}}$",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "Grouping the people in groups of m and n: $^{m+n}C_m$. Arrange them in a round table: $(m-1)!$. Arrange the rest in Table 2: $(n-1)!$. As no one should have the same neighbours in any two arrangements, clockwise and anticlockwise arrangements are considered same. Total ways = $\\frac{(m+n)!}{m! n!} \\times \\frac{(m-1)!}{2} \\times \\frac{(n-1)!}{2} = \\frac{(m+n)!}{4m n}$."
        },
        // 126
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Delegates from 9 countries(one from each) include countries A, B, C, D are to be seated in a row. The number of possible seating arrangements, when the delegates of the countries A and B are to be seated next to each other and the delegates of the countries C and D are not to be seated next to each other is :",
            "options": [
                "10080",
                "5040",
                "3360",
                "60480"
            ],
            "correctAnswer": 3,
            "solution": "Treat A and B as a single block. Total items = 8. Arrangements = $8! \\times 2! = 80640$. Subtract cases where C and D are also together: Treat block AB and block CD as items. Arrangements = $7! \\times 2! \\times 2! = 20160$. Valid arrangements = $80640 - 20160 = 60480$."
        },
        // 127
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are 12 guests at a dinner party. Supposing that the master and mistress of the house have fixed seats opposite one another, and that there are two specified guests who must always be placed next to one another; the number of ways in which the company can be placed, is:",
            "options": [
                "$20 \\cdot 10!$",
                "$22 \\cdot 10!$",
                "$24 \\cdot 10!$",
                "none"
            ],
            "correctAnswer": 2,
            "solution": "Master and mistress are fixed opposite each other. There are 12 remaining seats. The two specified guests must be adjacent. Treat them as one block. The block can be placed in 12 positions. They can be arranged in $2!$ ways. The remaining 10 guests can be arranged in $10!$ ways. Total ways $= 12 \\times 2! \\times 10! = 24 \\times 10!$."
        },
        // 128
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let $\\mathrm{P}_{\\mathrm{n}}$ denotes the number of ways of selecting 3 people out of 'n' sitting in a row, if no two of them are consecutive and $\\mathrm{Q}_{\\mathrm{n}}$ is the corresponding figure when they are in a circle. If $\\mathrm{P}_{\\mathrm{n}} - \\mathrm{Q}_{\\mathrm{n}} = 6$ , then 'n' is equal to",
            "options": [
                "8",
                "9",
                "10",
                "12"
            ],
            "correctAnswer": 1,
            "solution": "$P_n = ^{n-2}C_3$ and $Q_n = \\frac{^nC_1 \\times ^{n-2}C_2}{3} $."
        },
        // 129
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Define a 'good word' as a sequence of letters that consists only of the letters A, B and C and in which A never immediately followed by B, B is never immediately followed by C, and C is never immediately followed by A. If the number of n- letter good words is 384, find the value of n.",
            "correctAnswer": 8,
            "solution": "Let $a_n, b_n, c_n$ be the number of good words ending in A, B, C respectively. $a_n = a_{n-1} + c_{n-1}$; $b_n = a_{n-1} + b_{n-1}$; $c_n = b_{n-1} + c_{n-1}$. Summing them yields $T_n = 2T_{n-1}$. Solving the recurrence with $T_2 = 6$ gives $T_n = 3 \\times 2^{n-1}$. Equating $3 \\times 2^{n-1} = 384$ gives $2^{n-1} = 128 \\implies n=8$."
        },
        // 130
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Six married couple are sitting in a room. Find the number of ways in which 4 people can be selected so that (a) they do not form a couple (b) they form exactly one couple (c) they form at least one couple (d) they form atmost one couple",
            "options": [
                "255, 240, 255, 480",
                "240, 240, 255, 480",
                "240, 255, 255, 480",
                "255, 240, 240, 480"
            ],
            "correctAnswer": 0,
            "solution": "Total ways to select 4 people from 12 is $^{12}C_4 = 495$. Number of ways to select no couples: $^{12}C_4 - 6 \\times (^{10}C_2 - 5) = 255$. Number of ways to select exactly one couple: $6 \\times (^{10}C_2 - 5) = 240$. Number of ways to select at least one couple: $495 - 255 = 240$. Number of ways to select at most one couple: $255 + 240 = 480$."
        },
        // 131
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Find the number of different permutations of the letters of the word \"BOMBAY\" taken four at a time.",
            "correctAnswer": 192,
            "solution": "For BOMBAY (6 letters, B repeated twice): 4-letter permutations with B repeated are $^4C_2 \\times ^4P_2 = 6 \\times 12 = 72$. 4-letter permutations with all distinct letters are $^5C_4 \\times 4! = 120$. Total = 192."
        },
        // 132
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Fifty college teachers are surveyed as to their possession of car, home and motorbike. Of them, 22 own car, 15 own home and 14 own motorbike. Nine of these college teachers own exactly two items out of car, home and motorbike; and, one college teacher owns all three. how many of the 50 college teachers own none of three, car, home or motorbike?",
            "options": ["4", "9", "10", "11"],
            "correctAnswer": 1,
            "solution": "Let A=22, B=15, C=14. $|A \\cup B \\cup C| = 22+15+14 - 9 - 2(1) = 41$. Teachers owning none = $50 - 41 = 9$."
        },
        // 133
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A road network as shown in the figure connect four cities. In how many ways can you start from any city (say A) and come back to it without travelling on the same road more than once?<br><br><img src='images/SpecialPC_DPP_5_Q133.png' alt='Road network diagram' style='max-width:100%;'>",
            "options": ["8", "9", "12", "16"],
            "correctAnswer": 0,
            "solution": "Choices from A: 3, from B: 3, from C: 3 and from D: 3. Routes: AB(ABC(ABCA, ABCDA), ABD(ABDA, ABDCA)), AC(ACB(ACBA, ACBDA), ACD(ACDA, ACDBA)), AD(ADB(ADBA, ADBCA), ADC(ADCA, ADCBA))."
        },
        // 134
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are $(p + q)$ different books on different topics in Mathematics p &ne; q. If $\\mathbf{L} =$ The number of ways in which these books are distributed between two students X and Y such that X get p books and Y gets q books. $\\mathbf{M} =$ The number of ways in which these books are distributed between two students X and Y such that one of them gets p books and another gets q books. $\\mathbf{N} =$ The number of ways in which these books are divided into two groups of p books and q books then,",
            "options": [
                "$\\mathbf{L} = \\mathbf{M} = \\mathbf{N}$",
                "$\\mathbf{L} = 2\\mathbf{M} = 2\\mathbf{N}$",
                "$2\\mathbf{L} = \\mathbf{M} = 2\\mathbf{N}$",
                "$\\mathbf{L} = \\mathbf{M} = 2\\mathbf{N}$"
            ],
            "correctAnswer": 2,
            "solution": "$\\mathbf{L} = ^{p+q}C_p$, $\\mathbf{M} = 2!\\times^{p+q}C_p$, $\\mathbf{N} = ^{p+q}C_p$. Hence $\\mathbf{2L} = \\mathbf{M} = \\mathbf{2N}$."
        },
        // 135
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "On a Railway route from Kota to Bhopal there are 12 stations. A booking clerk is to be deputed for each of these stations out of 12 candidates of whom five are Marathis, four are Oriyas and the rest are Bengalis. The number of ways of deputing the persons on these stations so that no two Bengali's serve on two consecutive stations, is (Persons of the same religion are not to be distinguished).",
            "correctAnswer": 15120,
            "solution": "The problem is to arrange 5 As, 4 Bs and 3 Cs so that no two Cs are together. i.e. using gap method $\\frac{9!}{5!4!} \\times ^{10}C_3$."
        },
        // 136
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let m denote the number of ways in which 4 different books are distributed among 10 persons, each receiving none or one only and let n denote the number of ways of distribution if the books are all alike. Then",
            "options": [
                "$m = 4n$",
                "$n = 4m$",
                "$m = 24n$",
                "none"
            ],
            "correctAnswer": 2,
            "solution": "$m = ^{10}P_4 = 5040$. $n = ^{10}C_4 = 210$. $m / n = 5040 / 210 = 24$, so $m = 24n$."
        },
        // 137
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways in which we can arrange n ladies & n gentlemen at a round table so that 2 ladies or 2 gentlemen may not sit next to one another is :",
            "options": [
                "$(n-1)!(n-2)!$",
                "$(n)!(n-1)!$",
                "$(n+1)!(n)!$",
                "none"
            ],
            "correctAnswer": 1,
            "solution": "Arrange n ladies at the round table in $(n-1)!$ ways. The n gentlemen must be placed in the n gaps between the ladies, which can be done in $n!$ ways. Total arrangements = $(n-1)! \\times n!$."
        },
        // 138
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways in which 10 identical apples can be distributed among 6 children so that each child receives atleast one apple is :",
            "options": ["126", "252", "378", "120"],
            "correctAnswer": 0,
            "solution": "Distribute one apple to each first and then distributing remaining 4 among 6 children, the number of ways is: number of non-negative integral solutions of $u + v + w + x + y + z = 4$ <br> which is $^{4+6-1}C_{4} = ^9C_5 = 126$."
        },
        // 139
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of all possible selections of one or more questions from 10 given questions, each question having an alternative is :",
            "options": [
                "$3^{10}$",
                "$2^{10} - 1$",
                "$3^{10} - 1$",
                "$2^{10}$"
            ],
            "correctAnswer": 2,
            "solution": "Each question has 3 statuses: not selected, selected with alternative 1, selected with alternative 2. Total ways $= 3^{10}$. Excluding the single case where none are selected yields $3^{10} - 1$."
        },
        // 140
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways in which 14 men be partitioned into 6 committees where two of the committees contain 3 men & the others contain 2 men each is :",
            "options": [
                "$\\frac{14!}{(3!)^2 (2!)^4}$",
                "$\\frac{14!}{(3!)^2 (2!)^5}$",
                "$\\frac{14!}{4!(3!)^2\\cdot(2!)^4}$",
                "$\\frac{14!}{(2!)^5\\cdot(3!)^2\\cdot4!}$"
            ],
            "correctAnswer": 3,
            "solution": "The partitions are 3, 3, 2, 2, 2, 2. Since the two 3-member committees are identical and the four 2-member committees are identical, the number of ways is $\\frac{14!}{(3!)^2 (2!)^4 \\times 2! \\times 4!}$."
        },
        // 141
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of divisors of the number 21600 is",
            "correctAnswer": 72,
            "solution": "The prime factorization is $21600 = 2^5 \\cdot 3^3 \\cdot 5^2$. The number of divisors is $(5+1)(3+1)(2+1) = 72$."
        },
        // 142
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "10 IIT & 2 NIT students sit in a row. The number of ways in which exactly 3 IIT students sit between 2 NIT student is $16.k!$ then the value of $k$ is",
            "correctAnswer": 10,
            "solution": "Consider a block of 5 students in which there are 3 selected IIT students with the two NIT students at the ends of the block, now this block and remaining 7 IIT students can be arranged in $^{10}C_3 \\times 8! \\times 3! \\times 2!$ ways."
        },
        // 143
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways of choosing a committee of 2 women & 3 men from 5 women & 6 men, if Mr. A refuses to serve on the committee if Mr. B is a member & Mr. B can only serve, if Miss C is the member of the committee, is :",
            "options": ["60", "84", "124", "none"],
            "correctAnswer": 2,
            "solution": "Case 1: Miss C is included. Mr. B can be included. Total = $^4C_1 \\times (^6C_3 - ^4C_1) = 64$. Case 2: Miss C is excluded (Mr. B is excluded). Total = $^4C_2 \\times ^5C_3 = 60$. Total valid committees = $64 + 60 = 124$."
        }                        
    ]
};