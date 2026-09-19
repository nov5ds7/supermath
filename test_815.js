window.testBank = window.testBank || {};
window.testBank['test_815'] = {
    title: "MPT-11 (21-09-2026) Pre-Test (Permutations & Combinations)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-09-19T12:30:00Z",
    timeLimitMins: 80,
    examPattern: "main",
    shuffleQuestions: false,
    randomizePoolSize: 0,
    questions: [
        // 1
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "<div class='section-instruction'><h3>SECTION - I</h3><b>Straight Objective Type</b><br><br>This section contains <b>20</b> multiple choice questions numbered 1 to 20. Each question has <b>4</b> choices (A), (B), (C) and (D), out of which <b>ONLY ONE</b> is correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>There are 2 identical white balls, 3 identical red balls and 4 green balls of different shades. The number of ways in which they can be arranged in a row so that atleast one ball is separated from the balls of the same colour, is :",
            "options": [
                "$6(7! - 4!)$",
                "$7(6! - 4!)$",
                "$8! - 5!$",
                "none"
            ],
            "solution": "Total number of ways of arranging 2 identical white balls, 3 identical red balls and 4 green balls of different shades is $\\frac{9!}{2!3!} = 6 \\cdot 7!$.<br>Number of ways when balls of same colour are together = $3! \\times 4! = 6 \\cdot 4!$.<br>Number of ways of arranging the balls when atleast one ball is separated from the balls of the same colour = $6 \\cdot 7! - 6 \\cdot 4! = 6(7! - 4!)$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Number of ways in which 2 Indians, 3 Americans, 3 Italians and 4 Frenchmen can be seated on a circle, if the people of the same nationality sit together, is:",
            "options": [
                "$2 \\cdot (4!)^2(3!)^2$",
                "$2 \\cdot (3!)^3 \\cdot 4!$",
                "$2 \\cdot (3!)(4!)^3$",
                "$2 \\cdot (3!)^2(4!)^3$"
            ],
            "solution": "Indians - 2, Americans - 3, Italians - 3, Frenchmen - 4.<br>Total number of arrangements of same nationality together = $3! \\times 2! \\times 3! \\times 3! \\times 4! = 2 \\cdot (3!)^3 \\cdot 4!$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "The number of words of 5 letters that can be made with the letters of the word \"PROPOSITION\".",
            "options": [
                "6890",
                "7000",
                "6800",
                "6900"
            ],
            "solution": "Word is PROPOSITION. Here P's = 2, O's = 3, I's = 2 and T, R, N, S = 1 each. We have to make 5 letter words.<br>Case I: When all 5 are different = $^7P_5 = \\frac{7!}{2!} = 2520$<br>Case II: When 2 alike, 3 different = $^3C_1 \\times ^6C_3 \\times \\frac{5!}{2!} = 3600$<br>Case III: When 2 alike, 2 alike, 1 different = $^3C_2 \\times ^5C_1 \\times \\frac{5!}{2!2!} = 450$<br>Case IV: When 3 alike, 2 different = $^1C_1 \\times ^6C_2 \\times \\frac{5!}{3!} = 300$<br>Case V: When 3 alike, 2 alike = $^1C_1 \\times ^2C_1 \\times \\frac{5!}{3!2!} = 20$<br>So total required number = $2520 + 3600 + 450 + 300 + 20 = 6890$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Group A consists of 7 boys and 3 girls, while group B consists of 6 boys and 5 girls. The number of ways, 4 boys and 4 girls can be invited for a picnic if 5 of them must be from group A and the remaining 3 from group B, is equal to :",
            "options": [
                "8925",
                "9100",
                "8575",
                "8750"
            ],
            "solution": "Group A: 7B, 3G. Group B: 6B, 5G.<br>We need to invite 5 from A and 3 from B, with total 4B and 4G.<br>C-I: (3G, 2B) from A & (1G, 2B) from B: $^3C_3 \\cdot ^7C_2 \\cdot ^5C_1 \\cdot ^6C_2 = 1 \\cdot 21 \\cdot 5 \\cdot 15 = 1575$<br>C-II: (2G, 3B) from A & (2G, 1B) from B: $^3C_2 \\cdot ^7C_3 \\cdot ^5C_2 \\cdot ^6C_1 = 3 \\cdot 35 \\cdot 10 \\cdot 6 = 6300$<br>C-III: (1G, 4B) from A & (3G, 0B) from B: $^3C_1 \\cdot ^7C_4 \\cdot ^5C_3 \\cdot ^6C_0 = 3 \\cdot 35 \\cdot 10 \\cdot 1 = 1050$<br>Total = $1575 + 6300 + 1050 = 8925$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "There are 10 red balls of different shades & 9 green balls of identical shades. Then the number of ways of arranging them in a row so that no two green balls are together is :",
            "options": [
                "$(10!). ^{11}P_9$",
                "$(10!). ^{11}C_9$",
                "$10!$",
                "$10! 9!$"
            ],
            "correctAnswer": 1,
            "solution": "Arrange the 10 distinct red balls: $10!$ ways. This creates 11 gaps. Choose 9 gaps for the 9 identical green balls: $^{11}C_9$ ways. Total = $10!.^{11}C_9$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "Number of ways of arranging 8 identical books into 4 identical shelves where any number of shelves may remain empty is equal to",
            "options": [
                "18",
                "16",
                "12",
                "15"
            ],
            "solution": "3 shelves empty: (8,0,0,0) → 1 way<br>2 shelves empty: (7,1,0,0), (6,2,0,0), (5,3,0,0), (4,4,0,0) → 4 ways<br>1 shelf empty: (6,1,1,0), (5,2,1,0), (4,3,1,0), (4,2,2,0), (3,3,2,0) → 5 ways<br>0 shelves empty: (5,1,1,1), (4,2,1,1), (3,3,1,1), (3,2,2,1), (2,2,2,2) → 5 ways<br>Total = $1 + 4 + 5 + 5 = 15$ ways."
        },
        // 7
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
        // 8
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "The number of ways of selecting two numbers a and b, $a \\in \\{2,4,6,...,100\\}$ and $b \\in \\{1,3,5,...,99\\}$ such that 2 is the remainder when $a + b$ is divided by 23 is",
            "options": ["186", "54", "108", "268"],
            "solution": "$a \\in \\{2,4,6,\\dots,100\\}$, $b \\in \\{1,3,5,\\dots,99\\}$. We need $a+b \\equiv 2 \\pmod{23}$.<br>The possible sums are 25, 71, 117, 163.<br>(i) $a+b=25$: 12 ordered pairs<br>(ii) $a+b=71$: 35 ordered pairs<br>(iii) $a+b=117$: 42 ordered pairs<br>(iv) $a+b=163$: 19 ordered pairs<br>Total = 12 + 35 + 42 + 19 = 108 pairs."
        },
        // 9
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Find the number of all whole numbers formed on the screen of a calculator which can be recognized as numbers with (unique) correct digits when they are read inverted. The greatest number formed on its screen is 999999.",
            "options": ["100844", "100843", "100840", "100833"],
            "solution": "The digits 0, 1, 2, 5, 6, 8, 9 can be recognized as digits when seen inverted, hence number can contain these digits only.<br>Note that number can be of 1 digit to 6 digit number. But in more than one digit numbers, 0 cannot come in first place and also in unit place (imagine inverted case).<br>Number of digits & Total numbers:<br>1 → 7<br>2 → $6 \\times 6 = 36$<br>3 → $6 \\times 7 \\times 6 = 252$<br>4 → $6 \\times 7^2 \\times 6 = 1764$<br>5 → $6 \\times 7^3 \\times 6 = 12348$<br>6 → $6 \\times 7^4 \\times 6 = 86436$<br>Total = $7 + 36 + 252 + 1764 + 12348 + 86436 = 100843$."
        },

        // 10
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The sum of all the four-digit numbers that can be formed using all the digits 2,1,2,3 is equal to .",
            "options": ["26666", "26665", "25666", "26664"],
            "solution": "Digits 2,1,2,3. Total arrangements = $\\frac{4!}{2!} = 12$.<br>Sum of digits at unit place = $3 \\times 1 + 6 \\times 2 + 3 \\times 3 = 24$.<br>Required sum = $24 \\times 1000 + 24 \\times 100 + 24 \\times 10 + 24 \\times 1 = 24 \\times 1111 = 26664$."
        },
        // 11
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "For how many ordered triplets (a, b, c) of positive integers less than 10 is the product $a \\times b \\times c$ divisible by 20?",
            "options": ["201", "102", "215", "105"],
            "solution": "Case 1: When two 5's occur, third number can be 4 or 8, so total ways = $2 \\times \\frac{3!}{2!} = 6$.<br>Case 2: When one digit is five, second digit (4 or 8), third digit is (1 or 3 or 7 or 9): total ways = $^2C_1 \\cdot ^4C_1 \\cdot 3! = 48$.<br>Case 3: When one digit is five and other two digits are from (2 or 4 or 6 or 8): total ways = $^3C_1 \\cdot 4 \\cdot 4 = 48$.<br>Total = 48 + 48 + 6 = 102."
        },
        // 12
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "We wish to select 6 persons from 8, but if the person A is chosen, then B must be chosen. In how many ways can the selection be made?",
            "options": ["15", "22", "7", "None of these"],
            "solution": "Case 1: A is taken, then B must be taken. Choose 4 from remaining 6: $^6C_4 = 15$.<br>Case 2: A is not taken. Choose 6 from remaining 7: $^7C_6 = 7$.<br>Total = 15 + 7 = 22."
        },
        // 13
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Total number of ways of selecting two distinct numbers from the set {1,2,3,...,90} so that their sum is divisible by 3, is",
            "options": ["885", "1335", "1770", "3670"],
            "solution": "$S_1 = \\{1,4,7,\\dots,88\\}$ (30 numbers)<br>$S_2 = \\{2,5,8,\\dots,89\\}$ (30 numbers)<br>$S_3 = \\{3,6,9,\\dots,90\\}$ (30 numbers)<br>Both from $S_3$ or one from $S_1$ and one from $S_2$: $^{30}C_1 \\cdot ^{30}C_1 + ^{30}C_2 = 900 + 435 = 1335$."
        },
        //14        
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "The number of ways, in which the letters A, B, C, D, E can be placed in the 8 boxes of the figure below so that no row remains empty and at most one letter can be placed in a box, is :<br><img src='images/PreMPT-11(11-09-2026)_Q5.png' alt='Diagram' style='max-width:100%;'>",
            "options": [
                "5880",
                "840",
                "960",
                "5760"
            ],
            "solution": "Let x, y, z be the number of boxes filled in the three rows.<br>$1 \\le x \\le 3, 1 \\le y \\le 3, 1 \\le z \\le 2$.<br>Number of ways to choose boxes for various (x, y, z) combinations equals 48.<br>Now to arrange A, B, C, D, E in these chosen boxes, number of ways = $48 \\times 5! = 48 \\times 120 = 5760$."
        },
        //15
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "In an examination of Mathematics paper, there are 20 questions of equal marks and the question paper is divided into three sections: A, B and C. A student is required to attempt total 15 questions taking at least 4 questions from each section. If section A has 8 questions, section B has 6 questions and section C has 6 questions, then the total number of ways a student can select 15 questions is",
            "options": [
                "11376",
                "37613",
                "11637",
                "None of these"
            ],
            "solution": "If 4 questions from each section are selected, remaining 3 questions can be selected either in (1,1,1) or (3,0,0) or (2,1,0).<br>Total ways = $^8C_5 \\cdot ^6C_5 \\cdot ^6C_5 + ^8C_6 \\cdot ^6C_5 \\cdot ^6C_4 \\times 2 + ^8C_5 \\cdot ^6C_6 \\cdot ^6C_4 \\times 2 + ^8C_4 \\cdot ^6C_6 \\cdot ^6C_5 \\times 2 + ^8C_7 \\cdot ^6C_4 \\cdot ^6C_4$<br>$= 56 \\cdot 6 \\cdot 6 + 28 \\cdot 6 \\cdot 15 \\cdot 2 + 56 \\cdot 1 \\cdot 15 \\cdot 2 + 70 \\cdot 1 \\cdot 6 \\cdot 2 + 8 \\cdot 15 \\cdot 15$<br>$= 2016 + 5040 + 1680 + 840 + 1800 = 11376$."
        },
        //16
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
        },
        // 17
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Boxes numbered 1, 2, 3, 4 and 5 are kept in a row, and they are necessarily to be filled with either a red or a blue ball, such that no two adjacent boxes can be filled with blue balls. Then how many different arrangements are possible, given that the balls of a given colour are exactly identical in all respects?",
            "options": ["8", "10", "13", "22"],
            "correctAnswer": 2,
            "solution": "Let the number of ways to fill $n$ boxes with no two blue balls adjacent be $f(n) = f(n-1) + f(n-2)$. $f(1) = 2, f(2) = 3 \\implies f(3) = 5, f(4) = 8, f(5) = 13$."
        },        
        // 18
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "How many seven-letters words can be formed by using the letter of the word SUCCESS so that no two C and no two S are together?",
            "options": ["9", "45", "108", "96"],
            "solution": "No two S's together = $\\frac{4!}{2!} \\times ^5C_3 = 12 \\times 10 = 120$.<br>No two S's together and two C's together = $3! \\times ^4C_3 = 6 \\times 4 = 24$.<br>Required = $120 - 24 = 96$."
        },
        // 19
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "In how many ways can the given figure be drawn starting at the point A without lifting the pen and without retracing any portion of the curve drawn already?<br><img src='images/PreMPT-11(11-09-2026)_Q19.png' alt='Diagram' style='max-width:100%;'>",
            "options": ["$2^{10} \\times 3^2$", "$2^{11} \\times 3^3$", "$2^{10} \\times 3^3$", "$2^{11} \\times 3^2$"],
            "solution": "The figure has 4 loops meeting at a central vertex and 2 loops at point B. The number of ways to draw it is $2^{11} \\times 3^2$ as per the official key."
        },
        // 20
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Convex polygons $P_1$ and $P_2$ are drawn in the same plane with $n_1$ and $n_2$ sides, respectively, $n_1 \\leq n_2$. If $P_1$ and $P_2$ do not have any line segment in common, then the maximum number of intersections of $P_1$ and $P_2$ is",
            "options": ["$2n_1$", "$2n_2$", "$n_1n_2$", "$n_1 + n_2$"],
            "solution": "Notice how $P_2$ can pass through each line segment of $P_1$ at most twice. To have more than two intersections, the line passing through $P_1$ would have a zigzag shape which is impossible for convex polygons. Therefore, the intersections does not depend on $P_2$ and the answer is $2n_1$."
        },
        // 21
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 670,
            "text": "<div class='section-instruction'><h3>SECTION - II</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>5</b> questions numbered from 21 to 25. The answer to each question is a Numerical value. If the Answer in the decimals, Round off to the nearest Integer only. Have to Answer all 5 questions and question will be evaluated according to the following marking scheme:<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct numerical value is entered.</li><li><b>Zero Marks :</b> 0 If not attempted.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>A four digit number plate of car is said to be lucky if sum of first two digit is equal to sum of last two digit. Then find the total number of such lucky plate. (Assume 0000, 0011, 0111, all are four digit numbers)",
            "solution": "Total number of lucky plates having sum of first two digits = 0 is $1^2$<br>= 1 is $2^2$<br>= 2 is $3^2$<br>= 9 is $10^2$<br>= 10 is $9^2$<br>= 18 is $1^2$<br>Total = $1^2 + 2^2 + \\dots + 9^2 + 10^2 + 9^2 + \\dots + 2^2 + 1^2 = 670$."
        },
        // 22
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 18,
            "text": "The number of ways, 5 boys and 4 girls can sit in a row so that either all the boys sit together or no two boys sit together is a five digit no. abcde find $a + b + c + d + e$",
            "solution": "A: number of ways that all boys sit together = $5! \\times 5!$<br>B: number of ways if no 2 boys sit together = $4! \\times 5!$<br>Required no. of ways = $5! \\times 5! + 4! \\times 5! = 120 \\times 120 + 24 \\times 120 = 14400 + 2880 = 17280$<br>So $a+b+c+d+e = 1+7+2+8+0 = 18$."
        },
        // 23
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 64,
            "text": "The number of natural numbers, between 212 and 999, such that the sum of their digits is 15, is .",
            "solution": "Let the number be $xyz$ where $x \\in \\{2,\\dots,9\\}$, $y,z \\in \\{0,\\dots,9\\}$ and $x+y+z=15$.<br>For $x=2$: $y+z=13$, 6 solutions<br>For $x=3$: $y+z=12$, 7 solutions<br>For $x=4$: $y+z=11$, 9 solutions<br>For $x=5$: $y+z=10$, 10 solutions<br>For $x=6$: $y+z=9$, 9 solutions<br>For $x=7$: $y+z=8$, 9 solutions<br>For $x=8$: $y+z=7$, 8 solutions<br>For $x=9$: $y+z=6$, 7 solutions<br>Total = 6 + 7 + 9 + 10 + 9 + 9 + 8 + 7 = 64."
        },
        // 24
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 6860,
            "text": "Suppose Anil's mother wants to give 5 whole fruits to Anil from a basket of 7 red apples, 5 white apples and 8 oranges. If in the selected 5 fruits, at least 2 orange, at least one red apple and at least one white apple must be given, then the number of ways, Anil's mother can offer 5 fruits to Anil is",
            "solution": "7 Red apples, 5 White apples, 8 Oranges. 5 fruits to be selected.<br>Possible selections: (2O, 1RA, 2WA) or (2O, 2RA, 1WA) or (3O, 1RA, 1WA)<br>$= ^8C_2 \\cdot ^7C_1 \\cdot ^5C_2 + ^8C_2 \\cdot ^7C_2 \\cdot ^5C_1 + ^8C_3 \\cdot ^7C_1 \\cdot ^5C_1$<br>$= 28 \\times 7 \\times 10 + 28 \\times 21 \\times 5 + 56 \\times 7 \\times 5 = 1960 + 2940 + 1960 = 6860$."
        },
        // 25
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 105,
            "text": "Number of integral solutions to the equation $x + y + z = 21$, where $x \\geq 1, y \\geq 3, z \\geq 4$, is equal to",
            "solution": "Let $x' = x-1 \\geq 0$, $y' = y-3 \\geq 0$, $z' = z-4 \\geq 0$. Then $x' + y' + z' = 21 - 1 - 3 - 4 = 13$.<br>Number of non-negative solutions = $^{13+3-1}C_{3-1} = ^{15}C_2 = \\frac{15 \\times 14}{2} = 105$."
        }
    ]
};