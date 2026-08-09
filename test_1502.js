window.testBank = window.testBank || {};
window.testBank['test_1502'] = {
    title: "Special DPP on P&C - DPP-2",
    category: "Special DPPs",
    uploadedAt: "2026-08-09T10:01:00Z",
    timeLimitMins: 600,
    randomizePoolSize: 0,
    shuffleQuestions: false,
    questions: [
        // ================================================================
        // DPP-2 (Q26 to Q37)
        // ================================================================

        // 26
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of arrangements which can be made using all the letters of the word LAUGH if the vowels are adjacent is",
            "options": [
                "10",
                "24",
                "48",
                "120"
            ],
            "correctAnswer": 2,
            "solution": "Treat the two vowels 'A' and 'U' as a single block. This block, along with the 3 consonants L, G, H, makes 4 items which can be arranged in $4! = 24$ ways. The vowels inside the block can be arranged in $2! = 2$ ways. Total ways $= 24 \\times 2 = 48$."
        },
        // 27
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of natural numbers from 1000 to 9999 (both inclusive) that do not have all 4 different digits is",
            "options": [
                "4048",
                "4464",
                "4518",
                "4536"
            ],
            "correctAnswer": 1,
            "solution": "Total 4-digit numbers from 1000 to 9999 is $9000$. The number of these with all 4 distinct digits is $9 \\times 9 \\times 8 \\times 7 = 4536$. Therefore, the number that do not have all 4 different digits is $9000 - 4536 = 4464$."
        },
        // 28
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of different seven digit numbers that can be written using only three digits 1, 2 & 3 under the condition that the digit 2 occurs exactly twice in each number is:",
            "options": [
                "672",
                "640",
                "512",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "Select 2 positions out of 7 for the digit 2: $^7C_2 = 21$ ways. The remaining 5 positions can be filled with either 1 or 3, giving $2^5 = 32$ ways. Total numbers $= 21 \\times 32 = 672$."
        },
        // 29
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Out of seven consonants and four vowels, the number of words of six letters, formed by taking four consonants and two vowels is (Assume that each ordered group of letter is a word):",
            "options": [
                "210",
                "462",
                "151200",
                "332640"
            ],
            "correctAnswer": 2,
            "solution": "Choose 4 consonants from 7: $^7C_4 = 35$ ways. Choose 2 vowels from 4: $^4C_2 = 6$ ways. Arrange the 6 chosen letters: $6! = 720$ ways. Total words $= 35 \\times 6 \\times 720 = 151200$."
        },
        // 30
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "All possible three digits even numbers which can be formed with the condition that if 5 is one of the digit, then 7 is the next digit is:",
            "options": [
                "5",
                "325",
                "345",
                "365"
            ],
            "correctAnswer": 3,
            "solution": "Total 3-digit even numbers = $450$. The invalid ones have 5 not followed by 7. Invalid Case 1: 5 at the first position and 2nd digit $\\neq 7$. 2nd digit has 9 options ($0-9$ except 7), 3rd digit has 5 even options. $9 \\times 5 = 45$. Invalid Case 2: 5 at the second position. 1st digit has 8 options (cannot be 0 or 5), 3rd digit has 5 even options. $8 \\times 5 = 40$. Total invalid $= 85$. Valid even numbers $= 450 - 85 = 365$."
        },
        // 31
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "For some natural N, the number of positive integral 'x' satisfying the equation, $1! + 2! + 3! + \\ldots + (x)! = (N)^2$ is:",
            "options": [
                "none",
                "one",
                "two",
                "infinite"
            ],
            "correctAnswer": 2,
            "solution": "Let $S(x) = \\sum_{i=1}^{x} i!$. $S(1) = 1! = 1 = 1^2 \\implies x=1$ is a solution. $S(2) = 1+2=3$, $S(3) = 3+6=9 = 3^2 \\implies x=3$ is a solution. $S(4) = 9+24=33$ which is not a perfect square. Since all further factorials are multiples of 10, the sum will end in 3, which is never a perfect square. Hence, there are exactly 2 solutions ($x=1$ and $x=3$)."
        },
        // 32
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of six digit numbers that can be formed from the digits 1, 2, 3, 4, 5, 6 & 7 so that digits do not repeat and the terminal digits are even is:",
            "options": [
                "144",
                "72",
                "288",
                "720"
            ],
            "correctAnswer": 3,
            "solution": "The first and last digits must be even (choosing from 2, 4, 6). First digit: 3 ways. Last digit: 2 ways. The remaining 4 positions can be filled by any of the remaining 5 digits: $^5P_4 = 5 \\times 4 \\times 3 \\times 2 = 120$ ways. Total ways $= 3 \\times 2 \\times 120 = 720$."
        },
        // 33
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A new flag is to be designed with six vertical strips using some or all of the colour yellow, green, blue and red. Then, the number of ways this can be done such that no two adjacent strips have the same colour is",
            "options": [
                "$12\\times 81$",
                "$16\\times 192$",
                "$20\\times 125$",
                "$24\\times 216$"
            ],
            "correctAnswer": 0,
            "solution": "The first strip can be colored in 4 ways. Each subsequent strip can be colored in 3 ways (any color except the one used in the preceding strip). Total ways $= 4 \\times 3^5 = 4 \\times 243 = 972$. Since $12 \\times 81 = 972$, option (A) is correct."
        },
        // 34
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "In how many ways can 5 colours be selected out of 8 different colours including red, blue, and green:<br>(a) if blue and green are always to be included,<br>(b) if red is always excluded,<br>(c) if red and blue are always included but green excluded?",
            "options": [
                "20, 21, 10",
                "21, 20, 10",
                "10, 21, 20",
                "20, 10, 21"
            ],
            "correctAnswer": 0,
            "solution": "(a) Blue and Green are fixed. Choose 3 more from the remaining 6 colors: $^6C_3 = 20$. (b) Red is excluded. Choose 5 from the remaining 7 colors: $^7C_5 = 21$. (c) Red and Blue are fixed, Green is excluded. Choose 3 more from the remaining 5 colors: $^5C_3 = 10$."
        },
        // 35
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A 5 digit number divisible by 3 is to be formed using the numerals 0, 1, 2, 3, 4 & 5 without repetition. The total number of ways this can be done is:",
            "options": [
                "3125",
                "600",
                "240",
                "216"
            ],
            "correctAnswer": 3,
            "solution": "Sum of the 6 digits is $15$. To make the sum of 5 digits divisible by 3, we must remove a digit that is a multiple of 3 (i.e., 0 or 3). Case 1: 0 is removed. Remaining digits {1,2,3,4,5} can be arranged in $5! = 120$ ways. Case 2: 3 is removed. Remaining digits {0,1,2,4,5}. First digit cannot be 0, so $4 \\times 4! = 96$ ways. Total ways $= 120 + 96 = 216$."
        },
        // 36
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of 9 digits numbers divisible by nine using the digits from 0 to 9 if each digit is used at most once is $K \\times 8!$, then the value of $K$ is",
            "correctAnswer": 17,
            "solution": "The sum of all digits 0-9 is 45, which is divisible by 9. To form a 9-digit number, we must exclude one digit. To maintain divisibility by 9, the excluded digit must be 0 or 9. If 0 is excluded, the remaining digits {1,2,3,4,5,6,7,8,9} form $9!$ numbers. If 9 is excluded, the remaining digits {0,1,2,3,4,5,6,7,8} can form $8 \\times 8!$ numbers. Total $= 9! + 8 \\times 8! = 17 \\times 8!$. Hence, $K = 17$."
        },
        // 37
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of natural numbers less than 1000 and divisible by 5 can be formed with the ten digits, each digit not occurring more than once in each number is",
            "correctAnswer": 154,
            "solution": "1-digit numbers: Only 5 (1 number). 2-digit numbers: Ending in 0 (9 ways), ending in 5 (8 ways). Total $9+8=17$. 3-digit numbers: Ending in 0 ($9\\times8=72$), ending in 5 ($8\\times8=64$). Total $72+64=136$. Total numbers $= 1 + 17 + 136 = 154$."
        },
        // ================================================================
        // DPP-3 (Q38 to Q49)
        // ================================================================

        // 38
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Three men have 6 different trousers, 5 different shirts and 4 different caps. Number of different ways in which they can wear them is",
            "options": [
                "$^6P_3$ $\\times$ $^5P_3$ $\\times$ $^4P_3$",
                "$^6C_3$ $\\times$ $^5C_3$ $\\times$ $^4C_3$",
                "$6^3 \\times 5^3 \\times 4^3$",
                "$6! \\times 5! \\times 4!$"
            ],
            "correctAnswer": 0,
            "solution": "Since the 3 men are distinct, we assign 3 distinct trousers from the 6 available: $^6P_3$ ways. Similarly, assign 3 distinct shirts: $^5P_3$ ways, and 3 distinct caps: $^4P_3$ ways. Total ways $=^6P_3 \\times^5P_3\\times^4P_3$."
        },
        // 39
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of 9 digit numbers that can be formed by using the digits 1, 2, 3, 4 & 5 is :",
            "options": [
                "$9^{5}$",
                "$9!$",
                "$5^{9}$",
                "$^{9}P_{5}$"
            ],
            "correctAnswer": 2,
            "solution": "Since repetition of digits is allowed and we need a 9-digit number, each of the 9 places can be filled with any of the 5 available digits. Total ways = $5^9$."
        },
        // 40
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of arrangements of the letters 'a b c d' in which neither a, b nor c, d come together is:",
            "options": [
                "6",
                "12",
                "16",
                "none"
            ],
            "correctAnswer": 3,
            "solution": "Total arrangements = $4! = 24$. Let 'ab' be a single block: $3! \\times 2! = 12$ ways. Let 'cd' be a single block: $3! \\times 2! = 12$ ways. Both 'ab' and 'cd' as blocks: $2! \\times 2! \\times 2! = 8$ ways. Using inclusion-exclusion, valid arrangements = $24 - (12+12-8) = 8$. Since 8 is not in the first three options, Option (D) is correct."
        },
        // 41
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Find the number of ways in which letters of the word VALEDICTORY be arranged so that the vowels may never be separated.",
            "options": [
                "967680",
                "483840",
                "362880",
                "120960"
            ],
            "correctAnswer": 0,
            "solution": "VALEDICTORY has 4 vowels (A, E, I, O) and 7 consonants. Treat the 4 vowels as a single block. We now have 8 items to arrange (7 consonants + 1 vowel block), which can be done in $8!$ ways. The vowels inside the block can be arranged in $4!$ ways. Total ways = $8! \\times 4! = 40320 \\times 24 = 967680$."
        },
        // 42
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "How many numbers between 400 and 1000 (both exclusive) can be made with the digits 2, 3, 4, 5, 6, 0 if<br>(a) repetition of digits is not allowed.<br>(b) repetition of digits is allowed.",
            "options": [
                "60, 107",
                "108, 60",
                "60, 100",
                "100, 108"
            ],
            "correctAnswer": 0,
            "solution": "(a) The hundreds digit can be 4, 5, or 6. If it's 4, the remaining 2 digits are chosen from {0,2,3,5,6}: $5 \\times 4 = 20$ ways. Similarly for 5 and 6. Total = $3 \\times 20 = 60$ ways. (b) If repetition is allowed, for 4, the remaining 2 digits can be any of 6 digits (including 0): $6 \\times 6 = 36$ ways. Same for 5 and 6. Total = $3 \\times 36 = 108$ ways but 400 is to be excluded so number of such numbers is 107."
        },
        // 43
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $^{20}P_{r} = 13 \\times ^{20}P_{r - 1}$ , then the value of r is",
            "options": ["5", "6", "7", "8"],
            "correctAnswer": 3,
            "solution": "$\\frac{20!}{(20-r)!} = 13 \\times \\frac{20!}{(20-(r-1))!} \\implies \\frac{1}{(20-r)!} = \\frac{13}{(21-r)!} \\implies 21-r = 13 \\implies r = 8$."
        },
        // 44
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways in which 5 different books can be distributed among 10 people if each person can get at most one book is :",
            "options": [
                "252",
                "$10^{5}$",
                "$5^{10}$",
                "$^{10}C_{5} \\cdot 5!$"
            ],
            "correctAnswer": 3,
            "solution": "Select 5 people out of 10 to receive the books: $^{10}C_5$ ways. Distribute the 5 distinct books to these 5 selected people: $5!$ ways. Total ways $= ^{10}C_5 \\times 5!$."
        },
        // 45
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Mary typed a six- digit number, but the two 1's she typed didn't show. What appeared was 2006. Find the number of different six- digit numbers she would have typed.",
            "options": [
                "10",
                "15",
                "8",
                "12"
            ],
            "correctAnswer": 1,
            "solution": "The sequence is 2, 0, 0, 6. We need to insert two 1's into this sequence. There are 5 possible insertion spots (before 2, between 2 and 0, between 0 and 0, between 0 and 6, after 6). If the two 1's are together: 5 ways. If they are separated: $^5C_2 = 10$ ways. Total = $5 + 10 = 15$ ways."
        },
        // 46
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The 9 horizontal and 9 vertical lines on an $8\\times 8$ chessboard form R rectangles and S squares. The ratio $\\frac{S}{R}$ in its lowest terms is",
            "options": [
                "$\\frac{1}{6}$",
                "$\\frac{17}{108}$",
                "$\\frac{4}{27}$",
                "none"
            ],
            "correctAnswer": 1,
            "solution": "Number of rectangles $R = ^9C_2 \\times ^9C_2 = 36 \\times 36 = 1296$. Number of squares $S = \\sum_{n=1}^8 n^2 = \\frac{8 \\times 9 \\times 17}{6} = 204$. Ratio $\\frac{S}{R} = \\frac{204}{1296} = \\frac{17}{108}$."
        },
        // 47
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are 720 permutations of the digits 1, 2, 3, 4, 5, 6. Suppose these permutations are arranged from smallest to largest numerical values, beginning from 1 2 3 4 5 6 and ending with 6 5 4 3 2 1.<br><br>(a) What number falls on the $124^{\\text{th}}$ position?<br>(b) What is the position of the number 321546?",
            "options": [
                "213564, 267",
                "213564, 291",
                "214356, 267",
                "214356, 291"
            ],
            "correctAnswer": 0,
            "solution": "(a) $1 \\times 5! = 120$ numbers start with 1. The 124th starts with 2. Among those, the first 24 start with 21. The 4th number in the 213... block is 213564. (b) 1... (1-120), 2... (121-240). 31... (241-264). 32 1 4 5 6 is the 1st of the 321 block (265). 321546 is the 3rd, thus the 267th number."
        },
        // 48
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A student has to answer 10 out of 13 questions in an examination. The number of ways in which he can answer if he must answer at least 3 of the first five questions is :",
            "options": [
                "276",
                "267",
                "80",
                "1200"
            ],
            "correctAnswer": 0,
            "solution": "Case 1: 3 from first five, 7 from remaining 8: $^5C_3 \\times ^8C_7 = 10 \\times 8 = 80$. Case 2: 4 from first five, 6 from remaining 8: $^5C_4 \\times ^8C_6 = 5 \\times 28 = 140$. Case 3: 5 from first five, 5 from remaining 8: $^5C_5 \\times ^8C_5 = 1 \\times 56 = 56$. Total = $80 + 140 + 56 = 276$."
        },
        // 49
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of three digit numbers having only two consecutive digits identical is",
            "options": [
                "153",
                "162",
                "180",
                "161"
            ],
            "correctAnswer": 1,
            "solution": "The pattern must be AAB or BAA. Case AAB: 1st digit (1-9): 9 ways. 2nd digit same: 1 way. 3rd digit (0-9 except A): 9 ways. Total $9 \\times 9 = 81$. Case BAA: 1st digit (1-9): 9 ways. 2nd digit (0-9 except B): 9 ways. 3rd digit same: 1 way. Total $9 \\times 9 = 81$. Total numbers = $81 + 81 = 162$."
        },
        // 50
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A telegraph has x arms & each arm is capable of $(x - 1)$ distinct positions, including the position of rest. The total number of signals that can be made is",
            "options": [
                "$(x-1)^x - 1$",
                "$x^x - 1$",
                "$(x)^{x-1} - 1$",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Each of the $x$ arms has $(x-1)$ positions. Total signals $= (x-1)^x$. Excluding the 'all at rest' signal, the total is $(x-1)^x - 1$."
        }                
    ]
};