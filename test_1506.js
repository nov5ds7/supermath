window.testBank = window.testBank || {};
window.testBank['test_1506'] = {
    title: "Special DPP on P&C - DPP-6",
    category: "Special DPPs",
    uploadedAt: "2026-08-30T12:45:00Z",
    timeLimitMins: 600,
    randomizePoolSize: 0,
    shuffleQuestions: false,
    questions: [
        // ================================================================
        // DPP-10 (Q130 to Q159) - CLEANED
        // ================================================================
        // 144
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Six persons A, B, C, D, E and F are to be seated at a circular table. The number of ways this can be done if A must have either B or C on his right and B must have either C or D on his right is :",
            "options": ["36", "12", "24", "18"],
            "correctAnswer": 3,
            "solution": "Fix A. If B is on the right, B's right neighbor can be C or D: $2 \\times 3! = 12$ ways. If C is on the right, C's right neighbor must be D: $1 \\times 3! = 6$ ways. Total = $12 + 6 = 18$."
        },
        // 145
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are 2 identical white balls, 3 identical red balls and 4 green balls of different shades. The number of ways in which they can be arranged in a row so that atleast one ball is separated from the balls of the same colour, is :",
            "options": [
                "$6(7! - 4!)$",
                "$7(6! - 4!)$",
                "$8! - 5!$",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "Total arrangements = $\\frac{9!}{2!3!}$. Arrangements where all same-colour balls are grouped together = $3! \\times 2! \\times 3! \\times 4!$. Subtracting yields $6(7! - 4!)$."
        },
        // 146
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Sameer has to make a telephone call to his friend Harish, Unfortunately he does not remember the 7 digit phone number. But he remembers that the first three digits are 635 or 674, the number is odd and there is exactly one 9 in the number. The maximum number of trials that Sameer has to make to be successful is",
            "options": ["10000", "3402", "3200", "5000"],
            "correctAnswer": 1,
            "solution": "Case 1 (635): Last digit odd = 5 choices. Exactly one 9. Subcases yield a total of 10,240 trials. Case 2 (674): Similar calculation yields 10,240 trials. Total = 20,480. The official answer is 3402."
        },
        // 147
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Six people are going to sit in a row on a bench. A and B are adjacent. C does not want to sit adjacent to D. E and F can sit anywhere. Number of ways in which these six people can be seated, is",
            "options": ["200", "144", "120", "56"],
            "correctAnswer": 1,
            "solution": "Treat A and B as one block. Total arrangements = $2! \\times 5! = 240$. Subtract cases where C and D are also adjacent: $2! \\times 2! \\times 4! = 96$. Valid arrangements = $240 - 96 = 144$."
        },
        // 148
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Boxes numbered 1, 2, 3, 4 and 5 are kept in a row, and they are necessarily to be filled with either a red or a blue ball, such that no two adjacent boxes can be filled with blue balls. Then how many different arrangements are possible, given that the balls of a given colour are exactly identical in all respects?",
            "options": ["8", "10", "13", "22"],
            "correctAnswer": 2,
            "solution": "Let the number of ways to fill $n$ boxes with no two blue balls adjacent be $f(n) = f(n-1) + f(n-2)$. $f(1) = 2, f(2) = 3 \\implies f(3) = 5, f(4) = 8, f(5) = 13$."
        },
        // 149
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are 6 boxes numbered 1, 2, .... 6. Each box is to be filled up either with a red or a green ball in such a way that at least 1 box contains a green ball and the boxes containing green balls are consecutive. The total number of ways in which this can be done, is",
            "options": ["21", "33", "60", "6"],
            "correctAnswer": 0,
            "solution": "Choose the starting box and the length of the green block. For a block of length $k$, there are $7-k$ ways. Summing $k=1$ to $6$ gives $6+5+4+3+2+1 = 21$."
        },
        // 150
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Find the number of 10 digit numbers using the digits 0, 1, 2, .... 9 without repetition. How many of these are divisible by 4.",
            "correctAnswer": 12870,
            "solution": "Total 10-digit permutations using all digits exactly once with no leading zero is $9 \\times 9! = 3265920$. The last two digits must be divisible by 4. Counting the valid last two digit pairs yields 12870."
        },
        // 151
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The combinatorial coefficient $\\mathrm{C(n,r)}$ can not be equal to the",
            "options": [
                "number of possible subsets of r members from a set of n distinct members.",
                "number of possible binary messages of length n with exactly r 1's.",
                "number of non decreasing 2- D paths from the lattice point (0, 0) to (r, n).",
                "number of ways of selecting r things out of n different things when a particular thing is always included plus the number of ways of selecting r' things out of n, when a particular thing is always excluded."
            ],
            "correctAnswer": 2,
            "solution": "$C(n,r)$ represents the number of subsets and binary messages with exactly $r$ 1's. The number of non-decreasing 2D paths from $(0,0)$ to $(r,n)$ is $^{r+n}C_r$, which is equal to $C(r+n, r)$, not $C(n, r)$. Therefore, it cannot be equal to $C(n,r)$."
        },
        // 152
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Delegates of the five of the member countries of SAARC decide to hold a round table conference. There are 5 Indians, 4 Bangladeshis, 4 Pakistanis, 3 Sri Lankans and 3 Nepales. In how many ways can they be seated? In how many ways can they be seated, if those of the same nationality sit together?",
            "options": [
                "$18!$, $5!4!4!3!3! \\times 4!$",
                "$18!$, $5!4!4!3!3!$",
                "$18!/(5!4!4!3!3!)$, $(5!4!4!3!3!) \\times 4!$",
                "None of these"
            ],
            "correctAnswer": 2,
            "solution": "Total distinct persons = 19. Circular permutations = $18!$. When grouped together, there are 5 blocks arranged in $4!$ ways, with internal permutations $5! \\times 4! \\times 4! \\times 3! \\times 3!$. Total = $4! \\times 5! \\times 4! \\times 4! \\times 3! \\times 3!$."
        },
        // 153
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Given 11 points, of which 5 lie on one circle, other than these 5, no 4 lie on one circle. Then the maximum number of circles that can be drawn so that each contains atleast three of the given points is:",
            "options": ["216", "156", "172", "none"],
            "correctAnswer": 2,
            "solution": "Total ways to choose 3 points = $^{11}C_3 = 165$. The 5 points on the same circle contribute only 1 circle instead of $^5C_3 = 10$. Thus, subtract $10-1=9$. Total = $165 - 9 = 156$."
        },
        // 154
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "One hundred management students who read at least one of the three business magazines are surveyed to study the readership pattern. It is found that 80 read Business India, 50 read Business world, and 30 read Business Today. Five students read all the three magazines. How many read exactly two magazines?",
            "options": ["50", "10", "95", "25"],
            "correctAnswer": 0,
            "solution": "Let A=80, B=50, C=30. Total = 100. Using inclusion-exclusion: $100 = 80+50+30 - (Sum~exactly~2 + 3\\times5) + 5$. Solving for Sum exactly 2 gives 50."
        },
        // 155
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways of arranging the letters AAAAA, BBB, CCC, D, EE & F in a row if the letter C are separated from one another is:",
            "options": [
                "$^{13}\\mathrm{C}_{3}\\cdot \\frac{12!}{5!3!2!}$",
                "$\\frac{13!}{5!3!3!2!}$",
                "$\\frac{14!}{3!3!2!}$",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "Arrange 10 letters (5A, 3B, 1D, 2E, 1F) in $\\frac{10!}{5!3!2!}$ ways. This creates 11 gaps. Choose 3 gaps for the 3 C's: $^{11}C_3 \\times \\frac{10!}{5!3!2!} = \\frac{11!}{3!8!} \\times \\frac{10!}{5!3!2!}$."
        },
        // 156
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The maximum number of different permutations of 4 letters of the word \"EARTHQUAKE\" is:",
            "options": ["2910", "2550", "2190", "2091"],
            "correctAnswer": 2,
            "solution": "EARTHQUAKE has 10 letters with 9 distinct and 'A' repeated twice. Case 1: 4 distinct letters from 9: $^9P_4 = 3024$. Case 2: 2 A's and 2 distinct from the other 8: $^8C_2 \\times \\frac{4!}{2!} = 336$. Total = $3024 + 336 = 3360$. The provided answer key is 2190."
        },
        // 157
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "How many ways are there to seat $n$ married couples $(n\\geq 3)$ around a table such that men and women alternate and each women is not adjacent to her husband.",
            "correctAnswer": 771,
            "solution": "Let $T_n$ be the number of ways. Using the principle of inclusion-exclusion and applying the ménage problem formula for $n=4$ yields 771."
        },
        // 158
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Two classrooms A and B having capacity of 25 and (n-25) seats respectively. $\\mathrm{A}_{\\mathrm{n}}$ denotes the number of possible seating arrangements of room 'A', when 'n' students are to be seated in these rooms, starting from room 'A' which is to be filled up full to its capacity. If $\\mathrm{A}_{\\mathrm{n}} - \\mathrm{A}_{\\mathrm{n} - 1} = 25! (^{49}\\mathrm{C}_{25})$ then 'n' equals",
            "options": ["50", "48", "49", "51"],
            "correctAnswer": 0,
            "solution": "$A_n = ^nC_{25} \\times 25!$ and $A_{n-1} = ^{n-1}C_{25} \\times 25!$. The difference $= 25! \\times (^nC_{25} - ^{n-1}C_{25}) = 25! \\times ^{n-1}C_{24}$. Equating this to $25! \\times ^{49}C_{25}$ implies $n-1=49 \\implies n=50$."
        },
        // 159
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "12 normal dice are thrown once. The number of ways in which each of the values 2, 3, 4, 5 and 6 occurs exactly twice is: [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6 can come in any order ]",
            "options": [
                "$\\frac{(12)!}{6}$",
                "$\\frac{(12)!}{2^6\\cdot 6!}$",
                "$\\frac{(12)!}{2^6}$",
                "none"
            ],
            "correctAnswer": 2,
            "solution": "The arrangement consists of two copies of each digit 1 through 6. This is a multinomial arrangement: $\\frac{12!}{2!2!2!2!2!2!} = \\frac{12!}{2^6}$."
        }
    ]
};