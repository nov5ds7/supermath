window.testBank = window.testBank || {};
window.testBank['test_1501'] = {
    title: "Special DPP on P&C - DPP-1",
    category: "Special DPPs",
    uploadedAt: "2026-08-09T10:00:00Z",
    timeLimitMins: 600,
    randomizePoolSize: 0,
    shuffleQuestions: false,
    questions: [
        // ================================================================
        // DPP-1: Q1 to Q25
        // ================================================================

        // 1
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "In how many ways can clean & clouded (overcast) days occur in a week assuming that an entire day is either clean or clouded.",
            options: ["64", "128", "256", "49"],
            correctAnswer: 1,
            solution: "Each of the 7 days can be either clean or clouded. By the fundamental principle of counting, there are $2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 \\times 2 = 2^7 = 128$ ways."
        },
        // 2
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "Four visitors A, B, C & D arrive at a town which has 5 hotels. In how many ways can they disperse themselves among 5 hotels, if 4 hotels are used to accommodate them.",
            options: ["625", "120", "24", "60"],
            correctAnswer: 1,
            solution: "Choose 4 hotels out of 5: $^5C_4 = 5$ ways. Arrange the 4 distinct visitors into the chosen 4 hotels: $4! = 24$ ways. Total ways $= 5 \\times 24 = 120$."
        },
        // 3
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "If the letters of the word \"VARUN\" are written in all possible ways and then are arranged as in a dictionary, then the rank of the word VARUN is:",
            options: ["98", "99", "100", "101"],
            correctAnswer: 2,
            solution: "Dictionary order of letters: A, N, R, U, V. Words starting with A, N, R, U are $4 \\times 4! = 96$. Fix V A: remaining N, R, U. Words starting with V A N: $2! = 2$. Fix V A R: remaining N, U. Words starting with V A R N: $1! = 1$. Rank $= 96 + 2 + 1 + 1 = 100$."
        },
        // 4
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "How many natural numbers are their from 1 to 1000 which have none of their digits repeated.",
            options: ["648", "738", "800", "380"],
            correctAnswer: 1,
            solution: "1-digit: 9 numbers. 2-digit: $9 \\times 9 = 81$ numbers. 3-digit: $9 \\times 9 \\times 8 = 648$ numbers. 4-digit (1000 has repeated 0s, so none). Total $= 9 + 81 + 648 = 738$."
        },
        // 5
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "A man has 3 jackets, 10 shirts, and 5 pairs of slacks. If an outfit consists of a jacket, a shirt, and a pair of slacks, how many different outfits can the man make?",
            options: ["50", "150", "250", "300"],
            correctAnswer: 1,
            solution: "By the fundamental principle of counting, the number of outfits is $3 \\times 10 \\times 5 = 150$."
        },
        // 6
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "There are 6 roads between A & B and 4 roads between B & C.<br><br>(i) In how many ways can one drive from A to C by way of B?<br>(ii) In how many ways can one drive from A to C and back to A, passing through B on both trips?<br>(iii) In how many ways can one drive the circular trip described in (ii) without using the same road more than once.",
            options: [
                "24, 576, 360",
                "24, 144, 120",
                "10, 100, 80",
                "6, 24, 20"
            ],
            correctAnswer: 0,
            solution: "(i) $6 \\times 4 = 24$ ways. (ii) $6 \\times 4 \\times 4 \\times 6 = 576$ ways. (iii) $6 \\times 4 \\times 3 \\times 5 = 360$ ways."
        },
        // 7
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "(i) How many car number plates can be made if each plate contains 2 different letters of English alphabet, followed by 3 different digits.<br>(ii) Solve the problem, if the first digit cannot be 0.",
            options: [
                "468000, 421200",
                "468000, 468000",
                "456976, 410400",
                "None of these"
            ],
            correctAnswer: 0,
            solution: "(i) Letters: $26 \\times 25 = 650$. Digits: $10 \\times 9 \\times 8 = 720$. Total $= 650 \\times 720 = 468000$. (ii) Letters: 650. Digits: $9 \\times 9 \\times 8 = 648$. Total $= 650 \\times 648 = 421200$."
        },
        // 8
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "(i) Find the number of four letter word that can be formed from the letters of the word HISTORY. (each letter to be used at most once)<br>(ii) How many of them contain only consonants?<br>(iii) How many of them begin & end in a consonant?<br>(iv) How many of them begin with a vowel?<br>(v) How many contain the letters Y?<br>(vi) How many begin with T & end in a vowel?<br>(vii) How many begin with T & also contain S?<br>(viii) How many contain both vowels?",
            "options": [
                "840, 120, 400, 240, 480, 40, 60, 240",
                "840, 120, 360, 280, 360, 40, 60, 240",
                "840, 120, 400, 240, 480, 40, 120, 120",
                "840, 120, 400, 240, 480, 40, 60, 360"
            ],
            correctAnswer: 0,
            solution: "(i) $^7P_4 = 840$. (ii) 5 consonants $ \\implies$ $^5P_4 = 120$. (iii) $5 \\times 4 \\times ^5P_2 = 400$. (iv) $2 \\times ^6P_3 = 240$. (v) $4 \\times ^6P_3 = 480$. (vi) $1 \\times 2 \\times ^5P_2 = 40$. (vii) $3 \\times ^5P_2 = 60$. (viii) $^4C_2 \\times 2! \\times ^5P_2 = 240$."
        },
        // 9
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "If repetitions are not permitted:<br>(i) How many 3 digit numbers can be formed from the six digits 2, 3, 5, 6, 7 & 9?<br>(ii) How many of these are less than 400?<br>(iii) How many are even?<br>(iv) How many are odd?<br>(v) How many are multiples of 5?",
            options: [
                "120, 40, 40, 80, 20",
                "120, 40, 80, 40, 20",
                "216, 72, 108, 108, 36",
                "216, 72, 108, 108, 36"
            ],
            correctAnswer: 0,
            solution: "(i) $6 \\times 5 \\times 4 = 120$. (ii) First digit 2 or 3: $2 \\times 5 \\times 4 = 40$. (iii) Last digit 2 or 6: $2 \\times 5 \\times 4 = 40$. (iv) Last digit 3, 5, 7, 9: $4 \\times 5 \\times 4 = 80$. (v) Last digit 5: $1 \\times 5 \\times 4 = 20$."
        },
        // 10
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "In how many ways can 5 letters be mailed if there are 3 mailboxes available if each letter can be mailed in any mailbox.",
            options: ["15", "125", "243", "60"],
            correctAnswer: 2,
            solution: "Each of the 5 letters has 3 choices (which mailbox to go into). Total ways $= 3 \\times 3 \\times 3 \\times 3 \\times 3 = 3^5 = 243$."
        },
        // 11
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "Every telephone number consists of 7 digits. How many telephone numbers are there which do not include any other digits but 2, 3, 5 & 7?",
            options: ["2401", "16384", "$4^8$", "None of these"],
            correctAnswer: 1,
            solution: "Each of the 7 positions can be filled with any of the 4 digits (2, 3, 5, 7). Total numbers $= 4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 = 4^7 = 16384$."
        },
        // 12
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "(a) In how many ways can four passengers be accommodate in three railway carriages, if each carriage can accommodate any number of passengers.<br>(b) In how many ways four persons can be accommodated in 3 different chairs if each person can occupy only one chair.",
            options: [
                "$3^4, 24$",
                "$4^3, 24$",
                "$3^4, 12$",
                "$4^3, 12$"
            ],
            correctAnswer: 0,
            solution: "(a) Each passenger has 3 choices: $3 \\times 3 \\times 3 \\times 3 = 3^4$. (b) Each person occupies a distinct chair: $^3P_4$ is not possible, wait, 4 persons in 3 chairs. It's $^3P_4 = 0$. Actually, 4 persons in 3 chairs is impossible. The original PDF answer is 24. But 3 chairs and 4 persons means $4 \\times 3 \\times 2 = 24$ ways (arranging 4 people into 3 chairs, assigning one chair to one person). The given answer key says $3^4$ and $24$. So (a) $3^4$ (b) $4\\times3\\times2 = 24$."
        },
        // 13
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "How many of the arrangements of the letter of the word \"LOGARITHM\" begin with a vowel and end with a consonant?",
            options: ["90720", "100800", "57600", "40320"],
            correctAnswer: 0,
            solution: "LOGARITHM has 3 vowels (O, A, I) and 6 consonants (L, G, R, T, H, M). First letter: 3 choices. Last letter: 6 choices. Middle 7 letters from remaining 8: $^8P_7 = 8!$ (or $8 \\times 7 \\times 6 \\times 5 \\times 4 \\times 3 \\times 2 = 40320$). Total $= 3 \\times 6 \\times 40320 = 725760$? Wait, the given key is 90720. Let's check: $3 \\times 6 \\times 8! / 1!$? Actually, $^8P_7 = 40320$. $3 \\times 6 \\times 40320 = 725760$. The key says 90720. Possibly the formula was $3 \\times 6 \\times 7! = 3\\times6\\times5040 = 90720$. Maybe they meant 7 remaining letters to arrange in 7 spots, not 7 from 8. Since one letter is fixed at start and one at end, exactly 7 slots are left, which can be filled by the remaining 7 letters in $7! = 5040$ ways. So $3 \\times 6 \\times 7! = 3\\times6\\times5040 = 90720$."
        },
        // 14
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "How many four digit numbers are there all whose digits are odd, if repetition of digits is allowed.",
            options: ["625", "125", "1024", "500"],
            correctAnswer: 0,
            solution: "Odd digits are {1, 3, 5, 7, 9} (5 options). Since repetition is allowed and it's a 4-digit number, the first digit can be any of these 5 (cannot be 0, but 0 is not in the set anyway). So $5 \\times 5 \\times 5 \\times 5 = 625$."
        },
        // 15
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "How many four digit numbers are there which are divisible by 2.",
            options: ["4500", "9000", "5000", "4000"],
            correctAnswer: 0,
            solution: "Total 4-digit numbers = 9000. Half of them are divisible by 2, so $9000 / 2 = 4500$."
        },
        // 16
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "In a telephone system four different letter P, R, S, T and the four digits 3, 5, 7, 8 are used. Find the maximum number of \"telephone numbers\" the system can have if each consists of a letter followed by a four- digit number in which the digit may be repeated.",
            options: ["1024", "256", "4096", "512"],
            correctAnswer: 0,
            solution: "First position: 4 choices for a letter. Remaining 4 positions: each can be any of the 4 digits, so $4^4 = 256$ ways. Total $= 4 \\times 256 = 1024$."
        },
        // 17
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "Find the number of 5 lettered palindromes which can be formed using the letters from the English alphabets.",
            options: ["$26^5$", "$26^3$", "$26^4$", "$26^2$"],
            correctAnswer: 1,
            solution: "A 5-letter palindrome has the form ABCBA. 1st position: 26 ways. 2nd: 26 ways. 3rd: 26 ways. 4th is same as 2nd, 5th same as 1st. So $26 \\times 26 \\times 26 = 26^3$."
        },
        // 18
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "Number of ways in which 7 different colours in a rainbow can be arranged if green is always in the middle.",
            options: ["720", "120", "5040", "24"],
            correctAnswer: 0,
            solution: "Fix green in the middle (1 way). Arrange the remaining 6 different colours in the 6 spots: $6! = 720$."
        },
        // 19
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "Two cards are drawn one after the other & without replacement from a pack of 52 playing cards and then the outcome is noted. Then the total number of such possible outcomes is.",
            options: ["2652", "1326", "2704", "104"],
            correctAnswer: 0,
            solution: "First draw: 52 ways. Second draw: 51 ways (without replacement). Total ways $= 52 \\times 51 = 2652$."
        },
        // 20
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "It is required to seat 5 men and 4 women in a row so that the women occupy the even places. How many such arrangements are possible?",
            options: ["2880", "1440", "720", "120"],
            correctAnswer: 0,
            solution: "There are 9 seats. Even places are 2, 4, 6, 8 (4 seats). 4 women can be arranged in these 4 seats in $4! = 24$ ways. The 5 men can be arranged in the remaining 5 odd seats in $5! = 120$ ways. Total $= 24 \\times 120 = 2880$."
        },
        // 21
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "Numbers of words which can be formed using all the letters of the word \"AKSHI\", if each word begins with vowel or terminates in vowel.",
            options: ["84", "72", "96", "120"],
            correctAnswer: 0,
            solution: "AKSHI has 2 vowels (A, I) and 3 consonants (K, S, H). Total words = 5! = 120. Words starting with vowel: $2 \\times 4! = 48$. Words ending with vowel: $4! \\times 2 = 48$. Words starting AND ending with vowel: $2 \\times 3! \\times 1 = 12$. By principle of inclusion-exclusion, $48 + 48 - 12 = 84$."
        },
        // 22
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "A letter lock consists of three rings each marked with 10 different letters. Find the maximum possible number of unsuccessful attempts to open the lock.",
            options: ["1000", "999", "100", "900"],
            correctAnswer: 1,
            solution: "Total possible combinations $= 10 \\times 10 \\times 10 = 1000$. Exactly 1 of these will be the correct combination. Unsuccessful attempts $= 1000 - 1 = 999$."
        },
        // 23
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "How many 10 digit numbers can be made with odd digits so that no two consecutive digits are same.",
            options: ["$5^9$", "$5^{10}$", "$5.4^9$", "$4^{10}$"],
            correctAnswer: 2,
            solution: "First digit: 5 choices (1, 3, 5, 7, 9). Every subsequent digit: 4 choices (any odd digit except the one immediately before it). Total $= 5 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 \\times 4 = 5 \\times 4^9$."
        },
        // 24
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "If no two books are alike, in how many ways can 2 red, 3 green, and 4 blue books be arranged on a shelf so that all the books of the same colour are together?",
            options: ["1728", "864", "288", "144"],
            correctAnswer: 0,
            solution: "Treat each color group as a single block. 3 blocks can be arranged in $3! = 6$ ways. Within the blocks: 2 red books can be arranged in $2! = 2$ ways, 3 green in $3! = 6$ ways, 4 blue in $4! = 24$ ways. Total $= 6 \\times 2 \\times 6 \\times 24 = 1728$."
        },
        // 25
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "How many natural numbers are there with the property that they can be expressed as the sum of the cubes of two natural numbers in two different ways.",
            options: ["1", "2", "Infinitely many", "0"],
            correctAnswer: 2,
            solution: "This is a famous mathematical property related to Hardy-Ramanujan numbers. The smallest such number is $1729 = 1^3 + 12^3 = 9^3 + 10^3$. Because the set of natural numbers is infinite, there are infinitely many such numbers (Ramanujan-Nagell type solutions)."
        }
    ]
};