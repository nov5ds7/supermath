window.testBank = window.testBank || {};
window.testBank['test_1503'] = {
    title: "Special DPP on P&C - DPP-3",
    category: "Special DPPs",
    uploadedAt: "2026-08-09T10:02:00Z",
    timeLimitMins: 600,
    randomizePoolSize: 0,
    shuffleQuestions: false,
    questions: [
        // ================================================================
        // DPP-4 (Q50 to Q61)
        // ================================================================
        // 51
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The interior angles of a regular polygon measure $150^{\\circ}$ each. The number of diagonals of the polygon is",
            "options": [
                "35",
                "44",
                "54",
                "78"
            ],
            "correctAnswer": 2,
            "solution": "Each interior angle is $150^{\\circ}$, so the exterior angle is $30^{\\circ}$. The number of sides $n = \\frac{360}{30} = 12$. The number of diagonals is $\\frac{n(n-3)}{2} = \\frac{12 \\times 9}{2} = 54$."
        },
        // 52
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of different natural numbers which are smaller than two hundred million & using only the digits 1 or 2 is",
            "options": [
                "$3\\cdot 2^{8} - 2$",
                "$3 \\cdot 2^{8} - 1$",
                "$2(2^{9} - 1)$",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Numbers up to 8 digits: $2^1 + 2^2 + \\dots + 2^8 = 2^9 - 2 = 510$. 9-digit numbers: must start with 1, the remaining 8 digits can be 1 or 2: $1 \\times 2^8 = 256$. Total $= 510 + 256 = 766 = 3 \\times 2^8 - 2$."
        },
        // 53
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "5 Indian & 5 American couples meet at a party & shake hands. If no wife shakes hands with her own husband & no Indian wife shakes hands with a male, then the number of hand shakes that take place in the party is",
            "options": [
                "95",
                "110",
                "135",
                "150"
            ],
            "correctAnswer": 2,
            "solution": "Total handshakes $= ^{20}C_2 = 190$. Invalid: 10 husband-wife pairs. Also, 5 Indian wives shaking hands with 10 males = 50. Intersection: 5 Indian wives with their own husbands. Total invalid $= 10 + 50 - 5 = 55$. Valid $= 190 - 55 = 135$."
        },
        // 54
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of n digit numbers which consists of the digits 1 & 2 only if each digit is to be used at least once, is equal to 510 then $n$ is equal to:",
            "options": [
                "7",
                "8",
                "9",
                "10"
            ],
            "correctAnswer": 2,
            "solution": "Total n-digit numbers using digits 1 & 2 is $2^n$. The ones using only 1 or only 2 is 2. Numbers using at least once $= 2^n - 2 = 510 \\implies 2^n = 512 = 2^9 \\implies n = 9$."
        },
        // 55
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of six digit numbers which have 3 digits even & 3 digits odd, if each digit is to be used at most once is",
            "correctAnswer": 64800,
            "solution": "Total valid arrangements = $(^5C_3 \\times ^5C_3) \\times 6! - (^4C_2 \\times ^5C_3) \\times 5! = 10 \\times 10 \\times 720 - 6 \\times 10 \\times 120 = 72000 - 7200 = 64800$."
        },
        // 56
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The tamer of wild animals has to bring one by one 5 lions & 4 tigers to the circus arena. The number of ways this can be done if no two tigers immediately follow each other is",
            "correctAnswer": 43200,
            "solution": "Arrange 5 lions first: $5! = 120$ ways. There are 6 gaps. Choose 4 gaps for the 4 tigers: $^6C_4 = 15$ ways. Arrange the 4 tigers in the gaps: $4! = 24$ ways. Total $= 120 \\times 15 \\times 24 = 43200$."
        },
        // 57
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "18 points are indicated on the perimeter of a triangle ABC (see figure). How many triangles are there with vertices at these points?<br><br><img src='images/SpecialPC_DPP_4_Q8.png' alt='Triangle figure' style='max-width:100%;'>",
            "options": [
                "331",
                "408",
                "710",
                "711"
            ],
            "correctAnswer": 3,
            "solution": "Total points = 18. Total ways to choose 3 points $= ^{18}C_3 = 816$. Collinear points on each side = 7. Subtract 3 collinear sets: $3 \\times ^7C_3 = 105$. Valid triangles $= 816 - 105 = 711$."
        },
        // 58
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "An English school and a vernacular school are both under one superintendent. Suppose that the superintendentship, the four teachership of English and vernacular school each, are vacant, if there be altogether 11 candidates for the appointments, 3 of whom apply exclusively for the superintendentship and 2 exclusively for the appointment in the English school, the number of ways in which the different appointments can be disposed of is",
            "options": [
                "4320",
                "268",
                "1080",
                "25920"
            ],
            "correctAnswer": 3,
            "solution": "Sup: 3 ways. Eng school: 2 fixed, choose 2 from remaining 6: $^6C_2 \\times 4! = 360$ ways. vernacular: choose 4 from remaining 4: $^4C_4 \\times 4! = 24$ ways. Total $= 3 \\times 360 \\times 24 = 25920$."
        },
        // 59
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A committee of 5 is to be chosen from a group of 9 people. Number of ways in which it can be formed if two particular persons either serve together or not at all and two other particular persons refuse to serve with each other, is",
            "options": [
                "41",
                "36",
                "47",
                "76"
            ],
            "correctAnswer": 0,
            "solution": "Case 1: P1&P2 serve. Choose 3 from remaining 7 (P3,P4,P5..P9) excluding P3 and P4 together. $^5C_2+^5C_2+^5C_3 = 10+10+10=30$. Case 2: P1&P2 excluded. Choose 5 from remaining 7 with no P3+P4. $^5C_4+^5C_4+^5C_5 = 5+5+1=11$. Total $= 30+11=41$."
        },
        // 60
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A question paper on mathematics consists of twelve questions divided into three parts A, B and C, each containing four questions. In how many ways can an examinee answer five questions, selecting at least one from each part.",
            "options": [
                "624",
                "208",
                "2304",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "Distribute 5 questions into 3 parts: Case 1,1,3: $3 \\times (^4C_1 \\times ^4C_1 \\times ^4C_3) = 3 \\times 64 = 192$. Case 1,2,2: $3 \\times (^4C_1 \\times ^4C_2 \\times ^4C_2) = 3 \\times 144 = 432$. Total $= 192 + 432 = 624$."
        },
        // 61
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If $m$ denotes the number of 5 digit numbers if each successive digits are in their descending order of magnitude and $n$ is the corresponding figure when the digits and in their ascending order of magnitude then $(m - n)$ has the value",
            "options": [
                "$^{10}C_{4}$",
                "$^{9}C_{5}$",
                "$^{10}C_{3}$",
                "$^{9}C_{3}$"
            ],
            "correctAnswer": 1,
            "solution": "Descending: $m = ^{10}C_5 = 252$ (choose any 5 digits from 0-9, they will be in descending order). Ascending: $n = ^9C_5 = 126$ (choose 5 digits from 1-9, since 0 cannot be first). $m - n = 126 = ^9C_5$."
        },

        // ================================================================
        // DPP-5 (Q62 to Q74)
        // ================================================================

        // 62
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are m points on a straight line AB & n points on the line AC none of them being the point A and AB and AC are non-parallel. Triangles are formed with these points as vertices, when (i) A is excluded (ii) A is included. The ratio of number of triangles in the two cases is:",
            "options": [
                "$\\frac{m + n - 2}{m + n}$",
                "$\\frac{m + n - 2}{m - n - 1}$",
                "$\\frac{m + n - 2}{m + n + 2}$",
                "$\\frac{m(n - 1)}{(m + 1)(n + 1)}$"
            ],
            "correctAnswer": 0,
            "solution": "Let Total points = m+n. A excluded: $^{m+n}C_3 - ^mC_3 - ^nC_3 = \\frac{mn(m+n-2)}{2}$. A included: $^mC_1 \\times ^nC_1 = mn$. Ratio $= \\frac{mn(m+n-2)/2}{mn(m+n)/2} = \\frac{m+n-2}{m+n}$."
        },
        // 63
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of ways in which 9 different prizes be given to 5 students if one particular boy receives 4 prizes and the rest of the students can get any numbers of prizes, is :",
            "options": [
                "$^{9}\\mathrm{C}_{4}\\cdot 2^{10}$",
                "$^{9}\\mathrm{C}_{5}\\cdot 5^{4}$",
                "$4.4^5$",
                "none"
            ],
            "correctAnswer": 0,
            "solution": "Choose 4 prizes for the specific boy: $^9C_5$ ways. Remaining 5 prizes are given to 4 students: $4^5$ ways. Total $= ^9C_5 \\times 4^5$."
        },
        // 64
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "In a certain algebraical exercise book there are 4 examples on arithmetical progressions, 5 examples on permutation - combination and 6 examples on binomial theorem. Number of ways a teacher can select for his pupils atleast one but not more than 2 examples from each of these sets, is",
            "correctAnswer": 3150,
            "solution": "From AP: choose 1 or 2 out of 4 = $^4C_1 + ^4C_2 = 4+6=10$. From PC: $^5C_1 + ^5C_2 = 5+10=15$. From BT: $^6C_1 + ^6C_2 = 6+15=21$. Total ways $= 10 \\times 15 \\times 21 = 3150$."
        },
        // 65
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": 0,
            "text": "The kindergarten teacher has 25 kids in her class. She takes 5 of them at a time, to zoological garden as often as she can, without taking the same 5 kids more than once. The number of visits the teacher makes to the garden exceeds the number of visits made by a kid by.",
            "options": [
                "$^{25}C_{5}-^{24}C_{4}$",
                "$^{24}C_{5}-^{25}C_{4}$",
                "$^{25}C_{5}$",
                "None of these"
            ],
            "correctAnswer": 0,
            "solution": "Total visits = $^{25}C_5 = 53130$. Number of visits per kid = $^{24}C_4 = 10626$."
        },
        // 66
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are n persons and m monkeys $(m > n)$. Number of ways in which each person may become the owner of one monkey is",
            "options": [
                "$\\mathrm{n}^{\\mathrm{m}}$",
                "$\\mathrm{m}^{\\mathrm{n}}$",
                "$^{m}P_{\\mathrm{n}}$",
                "$\\mathrm{mn}$"
            ],
            "correctAnswer": 1,
            "solution": "Each of the n persons can be assigned any of the m monkeys. Total ways $= m \\times m \\times \\dots \\times m = m^n$."
        },
        // 67
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Seven different coins are to be divided amongst three persons. If no two of the persons receive the same number of coins but each receives atleast one coin & none is left over, then the number of ways in which the division may be made is :",
            "options": [
                "420",
                "630",
                "710",
                "none"
            ],
            "correctAnswer": 1,
            "solution": "The only partition of 7 into 3 distinct positive integers is $1, 2, 4$. Number of ways to assign these counts to 3 distinct persons: $3! = 6$. Number of ways to distribute 7 distinct coins into groups of 1, 2, 4: $\\frac{7!}{1!2!4!} = 105$. Total ways $= 6 \\times 105 = 630$."
        },
        // 68
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Let there be 9 fixed points on the circumference of a circle. Straight lines are drawn joining every pair of points of these 9 points. Then the number of points of intersection of these lines in the interior of the circle is",
            "options": [
                "126",
                "351",
                "756",
                "none of these"
            ],
            "correctAnswer": 0,
            "solution": "Any 4 points on the circumference of a circle will form a unique interior intersection point (the intersection of the diagonals of the quadrilateral formed). Number of ways to choose 4 points out of 9 = $^9C_4 = 126$."
        },
        // 69
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of 5 digit numbers such that the sum of their digits is even is :",
            "options": [
                "50000",
                "45000",
                "60000",
                "none"
            ],
            "correctAnswer": 1,
            "solution": "Total 5 digit numbers = $9 \\times 10^4 = 90000$. Exactly half of these will have an even sum of digits. $90000 / 2 = 45000$."
        },
        // 70
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A forecast is to be made of the results of five cricket matches, each of which can be win, a draw or a loss for Indian team. Find (i) the number of different possible forecasts",
            "options": [
                "243",
                "242",
                "244",
                "245"
            ],
            "correctAnswer": 0,
            "solution": "Each of the 5 matches has 3 possible outcomes. Total possible forecasts $= 3^5 = 243$."
        },
        // 71
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A forecast is to be made of the results of five cricket matches... Find (ii) the number of forecasts containing 0, 1, 2, 3, 4 and 5 errors respectively",
            "options": [
                "$(1, 10, 40, 80, 80, 32)$",
                "$(1, 10, 40, 80, 32, 80)$",
                "$(1, 40, 80, 80, 10, 32)$",
                "$(1, 20, 40, 80, 80, 32)$"
            ],
            "correctAnswer": 0,
            "solution": "0 errors: $^5C_0 \\times 1 = 1$. 1 error: $^5C_1 \\times 2^1 = 10$. 2 errors: $^5C_2 \\times 2^2 = 40$. 3 errors: $^5C_3 \\times 2^3 = 80$. 4 errors: $^5C_4 \\times 2^4 = 80$. 5 errors: $^5C_5 \\times 2^5 = 32$."
        },
        // 72
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of ways in which 8 non- identical apples can be distributed among 3 boys such that every boy should get atleast 1 apple & atmost 4 apples is $\\mathrm{K}\\cdot {}^{7}\\mathrm{P}_{3}$ where K has the value equal to :",
            "options": [
                "88",
                "66",
                "44",
                "22"
            ],
            "correctAnswer": 3,
            "solution": "Valid distributions: 1-3-4 (6 ways, $8!/1!3!4! = 280$), 2-2-4 (3 ways, $8!/2!2!4! = 420$), 2-3-3 (3 ways, $8!/2!3!3! = 560$). Total $= 6 \\times 280 + 3 \\times 420 + 3 \\times 560 = 4620$. $^7P_3 = 7 \\times 6 \\times 5 = 210$. $K = 4620 / 210 = 22$."
        },
        // 73
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A women has 11 close friends. Find the number of ways in which she can invite 5 of them to dinner, if two particular of them are not on speaking terms & will not attend together.",
            "options": [
                "378",
                "252",
                "384",
                "400"
            ],
            "correctAnswer": 0,
            "solution": "Total ways to invite 5 from 11 = $^{11}C_5 = 462$. Ways where both particular friends attend = $^9C_3 = 84$. Invalid = 84. Valid = $462 - 84 = 378$."
        },
        // 74
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A rack has 5 different pairs of shoes. The number of ways in which 4 shoes can be chosen from it so that there will be no complete pair is",
            "options": [
                "1920",
                "200",
                "110",
                "80"
            ],
            "correctAnswer": 3,
            "solution": "Choose 4 pairs out of the 5 available: $^5C_4 = 5$ ways. From each of these 4 chosen pairs, choose exactly 1 shoe: $2^4 = 16$ ways. Total ways $= 5 \\times 16 = 80$."
        },
        // 75
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Number of different ways in which 8 different books can be distributed among 3 students, if each student receives atleast 2 books is",
            "correctAnswer": 2940,
            "solution": "The students must receive (2, 2, 4) or (2, 3, 3) books. Selecting the groups: for (2, 2, 4): $\\frac{8!}{2!2!4!} \\times \\frac{3!}{2!} = 420 \\times 3 = 1260$. For (2, 3, 3): $\\frac{8!}{2!3!3!} \\times \\frac{3!}{2!} = 560 \\times 3 = 1680$. Total ways = $1260 + 1680 = 2940$."
        }              
    ]
};