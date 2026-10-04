window.testBank = window.testBank || {};
window.testBank['test_817'] = {
    title: "MPT-12 (05-10-2026) Pre-Test (Probability)",
    category: "Pre-Tests Maths",
    uploadedAt: "2026-10-03T12:30:00Z",
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
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - I</h3><b>Single Correct Answer Type</b><br><br>This section contains <b>20</b> questions. Each question has <b>4</b> options (1), (2), (3) and (4) for its answer, out of which <b>ONLY ONE</b> option can be correct.<br><br><b>Marking scheme:</b><ul><li><b>Full Marks:</b> +4 for correct answer</li><li><b>Zero Marks:</b> 0 if not attempted</li><li><b>Negative Marks:</b> -1 if not correct</li></ul></div><br>Entries of a $2 \\times 2$ determinant are chosen from the set $\\{-1, 1\\}$. The probability that determinant has zero value is",
            "options": [
                "$\\frac{1}{4}$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{2}$",
                "none of these"
            ],
            "solution": "Total possibilities = $2^4 = 16$. Determinant is $ad - bc$. It is zero when $ad = bc$. Since entries are $\\pm 1$, $ad$ can be $1$ or $-1$. For $ad=1$, $a$ and $d$ must be same (2 ways); $bc=1$ requires $b$ and $c$ same (2 ways). So 4 ways. For $ad=-1$, $a$ and $d$ opposite (2 ways); $bc=-1$ requires $b$ and $c$ opposite (2 ways). So 4 ways. Total favorable = 8. Probability = $8/16 = 1/2$."
        },
        // 2
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "A bag contains 7 tickets marked with the numbers 0,1,2,3,4,5,6 respectively. A ticket is drawn & replaced. Then the chance that after 4 drawings the sum of the numbers drawn is 8 is:",
            "options": [
                "$165/2401$",
                "$149/2401$",
                "$3/49$",
                "$1/49$"
            ],
            "solution": "Total outcomes = $7^4 = 2401$. Number of solutions to $x_1+x_2+x_3+x_4=8$ with $0 \\le x_i \\le 6$. Without upper bound: $\\binom{11}{3}=165$. Subtract cases where one variable $\\ge 7$: for each variable, let $x_i' = x_i - 7$, then sum = 1, solutions = $\\binom{4}{3}=4$, total 16. No overlap. Favorable = $165-16=149$. Probability = $149/2401$."
        },
        // 3
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "Pal's gardener is not dependable, the probability that he will forgot to water the rose bush is 2/3. The rose bush is in questionable condition. Any how if watered, the probability of its withering is 1/2 & if not watered then the probability of its withering is 3/4. Pal went out of station & after returning he finds that rose bush has withered. Then the probability that the gardener did not water the rose bush is.",
            "options": [
                "$3/4$",
                "$2/5$",
                "$1/4$",
                "$1/2$"
            ],
            "solution": "Let $W$ = watered, $NW$ = not watered, $D$ = withered. $P(NW)=2/3$, $P(W)=1/3$. $P(D|W)=1/2$, $P(D|NW)=3/4$. By Bayes: $P(NW|D) = \\frac{P(D|NW)P(NW)}{P(D|W)P(W)+P(D|NW)P(NW)} = \\frac{(3/4)(2/3)}{(1/2)(1/3)+(3/4)(2/3)} = \\frac{1/2}{1/6+1/2} = \\frac{1/2}{2/3} = \\frac{3}{4}$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 3,
            "text": "One ticket is selected at random from 50 tickets numbered 00,01,02,.....,49. Then the probability that the sum of the digits on the selected ticket is 8 , given that the product of these digits is zero, equal :",
            "options": [
                "$\\frac{1}{7}$",
                "$\\frac{5}{14}$",
                "$\\frac{1}{50}$",
                "$\\frac{1}{14}$"
            ],
            "solution": "Product of digits zero means at least one digit is zero. Tickets with product zero: 00-09 (10 tickets) and 10,20,30,40 (4 tickets) = 14 tickets. Sum of digits = 8 among these: only 08 (since 80 not in range). Favorable = 1. Probability = $1/14$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "A fair coin is tossed a fixed number of times. If the probability of getting seven heads is equal to that of getting nine heads then the probability of getting two heads is",
            "options": [
                "$\\frac{15}{2^8}$",
                "$\\frac{2}{15}$",
                "$\\frac{15}{2^{13}}$",
                "$\\frac{2}{31}$"
            ],
            "solution": "Let $n$ be number of tosses. $\\binom{n}{7} = \\binom{n}{9} \\implies n=16$. Probability of two heads = $\\frac{\\binom{16}{2}}{2^{16}} = \\frac{120}{65536} = \\frac{15}{8192} = \\frac{15}{2^{13}}$."
        },
        // 6
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "In a certain college, 25% of the students failed mathematics 15% failed chemistry and 10% failed both mathematics and chemistry. A student is selected at random. If the student failed chemistry then find probability that the student failed mathematics also.",
            "options": [
                "$\\frac{2}{9}$",
                "$\\frac{2}{3}$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{9}$"
            ],
            "solution": "$P(M)=0.25$, $P(C)=0.15$, $P(M \\cap C)=0.10$. $P(M|C) = \\frac{P(M \\cap C)}{P(C)} = \\frac{0.10}{0.15} = \\frac{2}{3}$."
        },
        // 7
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "In four throws of a fair die, what is the probability of getting a score of more than 4 at least once ?",
            "options": [
                "$\\frac{65}{81}$",
                "$\\frac{80}{81}$",
                "$\\frac{7}{9}$",
                "$\\frac{4}{7}$"
            ],
            "solution": "Probability of >4 in one throw = $2/6 = 1/3$. Probability of not >4 = $2/3$. At least once in 4 throws = $1 - (2/3)^4 = 1 - 16/81 = 65/81$."
        },
        // 8
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "$A = \\{1,2,3,...,9\\}$. If three numbers are selected from set A and are arranged, the probability that three numbers are either in increasing order or in decreasing order.",
            "options": [
                "$\\frac{1}{6}$",
                "$\\frac{2}{3}$",
                "$\\frac{1}{3}$",
                "$\\frac{1}{2}$"
            ],
            "solution": "Total arrangements = $^9P_3 = 504$. For any selection of 3 distinct numbers, there is exactly 1 increasing and 1 decreasing order. Number of selections = $^9C_3 = 84$. Favorable = $84 \\times 2 = 168$. Probability = $168/504 = 1/3$."
        },
            // 9
        {
        "type": "mcq",
        "marks": 4,
        "negativeMarks": -1,
        "correctAnswer": 0,
        "text": "Let A and B be two events such that $P(A) = 0.3$, $P(B) = 0.4$ and $P(A' \\cap B') = 0.4$. Which of the following is correct?",
        "options": [
            "$P(A/\\bar{B}) = \\frac{1}{3}$",
            "$P(B/\\bar{A}) = \\frac{4}{7}$",
            "A and B are independent events",
            "$P(A/\\bar{B}) = \\frac{1}{2}$"
        ],
        "solution": "$P(A' \\cap B') = 0.4 \\implies P(A \\cup B) = 0.6$. $P(A \\cap B) = 0.3 + 0.4 - 0.6 = 0.1$.<br>$P(A/\\bar{B}) = \\frac{P(A) - P(A \\cap B)}{1 - P(B)} = \\frac{0.3 - 0.1}{0.6} = \\frac{2}{6} = \\frac{1}{3}$.<br>Hence option (1) is correct."
        },
        // 10
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "A and B are two events such that $P(A) = 0.3$ and $P(B) = 0.25$ and $P(A \\cap B) = 0.2$ then $P\\left(\\frac{\\bar{A}}{\\bar{B}}\\right)$ is equal to",
            "options": [
                "$\\frac{12}{15}$",
                "$\\frac{13}{15}$",
                "$\\frac{14}{15}$",
                "$\\frac{11}{15}$"
            ],
            "solution": "$P\\left(\\frac{\\bar{A}}{\\bar{B}}\\right) = \\frac{P(\\bar{A} \\cap \\bar{B})}{P(\\bar{B})} = \\frac{1 - P(A \\cup B)}{1 - P(B)} = \\frac{1 - 0.35}{0.75} = \\frac{0.65}{0.75} = \\frac{13}{15}$."
        },
        // 11
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "64 players play in a knock out chess tournament assuming all the players are of equal strength the probability that $P_1$ losses to $P_2$ and $P_2$ becomes the eventual champion is",
            "options": [
                "$\\frac{1}{612}$",
                "$\\frac{1}{672}$",
                "$\\frac{1}{512}$",
                "$\\frac{1}{63 \\cdot 2^6}$"
            ],
            "solution": "For $P_2$ to win the tournament, he must win 6 matches: probability $= (1/2)^6 = 1/64$.<br>Given $P_2$ wins, the probability that $P_1$ was one of his 6 opponents $= 6/63 = 2/21$.<br>Required probability $= \\frac{1}{64} \\times \\frac{6}{63} = \\frac{6}{4032} = \\frac{1}{672}$."
        },
        // 12
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "John plays Cricket, Football and Basketball with probabilities $\\frac{1}{6}, \\frac{1}{2}$ and $\\frac{1}{3}$ respectively on a particular day his probabilities of not getting injured in Cricket, Football and Basketball are respectively 0.9, 0.8, 0.8. If he gets injured on that day then probability that he has played Football is",
            "options": [
                "$\\frac{1}{11}$",
                "$\\frac{6}{11}$",
                "$\\frac{5}{11}$",
                "$\\frac{24}{49}$"
            ],
            "solution": "Let C, F, B denote playing Cricket, Football, Basketball and I denote injury.<br>$P(I) = P(I|C)P(C) + P(I|F)P(F) + P(I|B)P(B)$<br>$= 0.1 \\times \\frac{1}{6} + 0.2 \\times \\frac{1}{2} + 0.2 \\times \\frac{1}{3} = \\frac{1}{60} + \\frac{1}{10} + \\frac{1}{15} = \\frac{11}{60}$.<br>$P(F|I) = \\frac{P(I|F)P(F)}{P(I)} = \\frac{0.2 \\times 1/2}{11/60} = \\frac{0.1}{11/60} = \\frac{6}{11}$."
        },
        // 13
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "3 different numbers are selected at random from the set $A = \\{1,2,3,.....,10\\}$. Then the probability that the product of two numbers equal to the third is $p/q$, where p & q are relatively prime positive integers, then the value of $(p + q)$ is",
            "options": [
                "39",
                "40",
                "41",
                "42"
            ],
            "solution": "Total ways = $^{10}C_3 = 120$.<br>Favorable triples: {2,3,6}, {2,4,8}, {2,5,10}. Total = 3.<br>Probability = $\\frac{3}{120} = \\frac{1}{40}$. So $p=1, q=40$, $p+q=41$."
        },
            // 64 (from image Q1)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "Let $\\omega$ be a complex cube root of unity with $\\omega \\neq 1$. A fair die is thrown three times. If $r_1, r_2$ and $r_3$ are the numbers obtained on the die, then the probability that $\\omega^{r_1} + \\omega^{r_2} + \\omega^{r_3} = 0$ is",
            "options": [
                "$\\frac{1}{18}$",
                "$\\frac{1}{9}$",
                "$\\frac{2}{9}$",
                "$\\frac{1}{36}$"
            ],
            "solution": "Given $\\omega^{r_1} + \\omega^{r_2} + \\omega^{r_3} = 0$.<br>Possibilities for $(r_1, r_2, r_3)$ are<br>$(1,2,6), (1,2,3), (4,5,6), (4,5,3), (2,4,3), (2,4,6), (5,1,3), (5,1,6)$<br>8 cases.<br>$\\therefore$ Number of ways of selecting $r_1, r_2, r_3 = 8 \\times 3!$<br>$n(S) = 6 \\times 6 \\times 6$<br>$\\therefore$ Required Probability = $\\frac{8 \\times 3!}{6 \\times 6 \\times 6} = \\frac{2}{9}$."
        },
        // 65 (from image Q2)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If X is a random variable with the following distribution<br><br><table style='width: 60%; border-collapse: collapse;'><tr><td style='border: 1px solid black; text-align: center;'>$X = x_i$</td><td style='border: 1px solid black; text-align: center;'>$a$</td><td style='border: 1px solid black; text-align: center;'>$b$</td></tr><tr><td style='border: 1px solid black; text-align: center;'>$P(X = x_i)$</td><td style='border: 1px solid black; text-align: center;'>$p$</td><td style='border: 1px solid black; text-align: center;'>$q$</td></tr></table><br>Where $p + q = 1$ then the variance of X is",
            "options": [
                "$ap + bq$",
                "$ap - bq$",
                "$pq(a - b)^2$",
                "$pq(a + b)^2$"
            ],
            "solution": "Mean of X = $\\sum x_i P(X = x_i) = ap + bq$<br>Variance of X = $\\sigma^2 = \\sum x_i^2 P(X = x_i) - \\mu^2 = a^2 p + b^2 q - (ap + bq)^2$<br>$= a^2 p(1-p) + b^2 q(1-q) - 2abpq = pq(a^2 + b^2 - 2ab) = pq(a-b)^2$."
        },
        // 66 (from image Q3)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "A tosses an unbiased coin 3 times. If he gets a head all the 3 times he is to get a prize of Rs. 160/- along with his entry fee of Rs.16/- otherwise he loses his entry fee. The mathematical expectation of his profit is",
            "options": [
                "20",
                "14",
                "6",
                "12"
            ],
            "solution": "P(all heads) = $\\frac{1}{8}$. Profit if all heads = 160 (since entry fee is returned).<br>P(not all heads) = $\\frac{7}{8}$. Profit if not all heads = -16.<br>Expected profit = $\\frac{1}{8}(160) + \\frac{7}{8}(-16) = 20 - 14 = 6$."
        },
        // 67 (from image Q4)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "Consider the system of equations $ax + by = 0, cx + dy = 0$ where $a,b,c,d \\in \\{0,1\\}$<br><br>Statement - I: The probability that the system of equations has unique solution is $\\frac{3}{8}$<br>Statement - II: The probability that the system of equations has a solution is 1",
            "options": [
                "Both the statements are true and the statement -2 is the correct explanation of statement-1",
                "Both the statements are true and the statement -2 is not the correct explanation of statement-1",
                "The statement-1 true but statement -2 is false",
                "The statement-1 false but statement -2 is true"
            ],
            "solution": "I: $\\Delta \\neq 0 \\implies ad - bc \\neq 0 \\iff ad = 1$ and $bc = 0$ (or $ad = 0$ and $bc = 1$).<br>Probability = $\\frac{6}{2^4} = \\frac{3}{8}$.<br>II: Either $\\Delta = 0$ or $\\Delta \\neq 0$, system always has a solution.<br>$\\therefore$ Probability = $\\frac{2^4}{2^4} = 1$.<br>Both statements are true, and II is not the correct explanation of I."
        },
        // 14 (PDF Q68)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 0,
            "text": "A card from a pack of 52 cards is lost. From the remaining 51 cards, n cards are drawn and are found to be spades. If the probability of the lost card to be a spade is $\\frac{11}{50}$, then n is equal to ___ .",
            "options": [
                "2",
                "3",
                "4",
                "5"
            ],
            "solution": "$P\\left(\\frac{\\text{Lost (space)}}{\\text{n cards are spade}}\\right) = \\frac{P\\left(\\frac{n}{L_s}\\right)P(L_s)}{P\\left(\\frac{n}{L_s}\\right)P(L_s) + P\\left(\\frac{n}{L_{\\bar{s}}}\\right)P(L_{\\bar{s}})}$<br>$= \\frac{\\frac{12C_n}{51C_n} \\times \\frac{1}{4}}{\\frac{12C_n}{51C_n} \\times \\frac{1}{4} + \\frac{3}{4} \\times \\frac{13C_n}{51C_n}} = \\frac{1}{1 + 3 \\cdot \\frac{13C_n}{12C_n}} = \\frac{13-n}{52-n}$<br>$\\Rightarrow \\frac{13-n}{52-n} = \\frac{11}{50} \\Rightarrow 650 - 50n = 572 - 11n \\Rightarrow 78 = 39n \\Rightarrow n = 2$."
        },
            // 69 (from image Q6)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 1,
            "text": "A person flips 4 fair coins and discards those which turn up tails. He again flips the remaining coins and then discards those which turn up tails. The probability that he discards at least 3 coins is",
            "options": [
                "$\\frac{135}{256}$",
                "$\\frac{189}{256}$",
                "$\\frac{27}{64}$",
                "$\\frac{198}{256}$"
            ],
            "solution": "4 coins tossed twice. X = no. of coins discarded.<br>Probability = $1 - P(X=0) - P(X=2)$<br>$= 1 - \\frac{1}{2^4} \\cdot \\frac{1}{2^4} - \\left[ \\frac{1}{2^4} \\binom{4}{1} \\frac{1}{2^3} + \\frac{1}{2^4} \\frac{1}{2^4} \\binom{4}{2} \\right] - \\left[ \\frac{1}{2^4} \\binom{6}{2} + \\frac{4}{2^4} \\binom{3}{2} + \\frac{6}{2^4} \\binom{2}{2} \\right] = 1 - \\frac{67}{256} = \\frac{189}{256}$."
        },
        // 70 (from image Q7)
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "If the letters of the word MATHEMATICS are arranged at random. The probability that C comes before E, E comes before H, H before I and I before S is",
            "options": [
                "$\\frac{1}{75}$",
                "$\\frac{1}{24}$",
                "$\\frac{1}{120}$",
                "$\\frac{1}{720}$"
            ],
            "solution": "MATHEMATICS has 11 letters with M(2), A(2), T(2), H, E, I, C, S.<br>Total arrangements = $\\frac{11!}{2!2!2!}$.<br>For the 5 letters C, E, H, I, S, there are 5! possible orders. Only 1 order is C < E < H < I < S.<br>So probability = $\\frac{1}{5!} = \\frac{1}{120}$."
        },
        // 21 (PDF Q71) - First Numerical Question
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 2,
            "text": "<div class='section-instruction'><h3>SECTION - II (Maximum Marks: 20)</h3><b>Numerical Value Answer Type</b><br><br>This section contains <b>5</b> questions. The answer to each question is a <b>NUMERICAL VALUE</b>. Enter the correct numerical value of the answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct numerical value is entered.</li><li><b>Zero Marks :</b> 0 If not attempted.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>If probability that exactly one of events A, B, C occurs, is 0.6 and probability that none of A, B, C occur is 0.2, then probability that atleast two of A, B, C occur is p then 10p is",
            "solution": "P(exactly one) = 0.6, P(none) = 0.2.<br>P(at least one) = 1 - 0.2 = 0.8.<br>P(at least two) = P(at least one) - P(exactly one) = 0.8 - 0.6 = 0.2.<br>So p = 0.2, and 10p = 2."
        },
        // 22 (PDF Q72)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 5,
            "text": "Some urns contain 4 white and 6 black balls each while one urn contains 5 white and 5 black balls. One urn is chosen at random from there and 2 balls are drawn from it and both are found to be black. The probability that 5 white and 3 black balls remain in the chosen urn is $\\frac{1}{7}$. The total number of urns is",
            "solution": "Let number of urns having 4 white & 6 black balls equal to n. Probability that 2 black balls came from urn containing 5 black and 5 white balls is<br>$\\frac{\\frac{1}{n+1}\\binom{5}{2}/\\binom{10}{2}}{\\frac{n}{n+1}\\binom{6}{2}/\\binom{10}{2} + \\frac{1}{n+1}\\binom{5}{2}/\\binom{10}{2}} = \\frac{10}{15n + 10} = \\frac{2}{3n+2} = \\frac{1}{7}$<br>$\\Rightarrow 14 = 3n + 2 \\Rightarrow n = 4$.<br>Therefore, total urns = 4 + 1 = 5."
        },
        // 73 (from image Q10) - Numerical
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 11,
            "text": "If the variance of 10 natural numbers 1,1,1,.....,1, k is less than 10, then the maximum possible value of k is ______",
            "solution": "We have, $\\sigma^2 = \\frac{\\sum x^2}{n} - \\left(\\frac{\\sum x}{n}\\right)^2 = \\frac{9 + k^2}{10} - \\left(\\frac{9 + k}{10}\\right)^2 < 10$<br>$\\Rightarrow 90 + 10k^2 - 81 - k^2 - 18k < 1000 \\Rightarrow 9k^2 - 18k - 991 < 0$<br>$\\Rightarrow (k-1)^2 < \\frac{1000}{9} \\Rightarrow k < \\frac{10\\sqrt{10}}{3} + 1 \\Rightarrow k \\leq 11$<br>Maximum value of k is 11."
        },
        // 74 (from image Q11) - Numerical
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 28,
            "text": "An electric instrument consists of two units. Each unit must function independently for the instrument to operate. The probability that the first unit functions is 0.9 and that of the second unit is 0.8. The instrument is switched on and it fails to operate. If the probability that only the first unit failed and second unit is functioning is p, then 98p is equal to",
            "solution": "$E_1$ = first unit is functioning, $E_2$ = second unit is functioning.<br>$P(E_1) = 0.9, P(E_2) = 0.8; P(\\bar{E_1}) = 0.1, P(\\bar{E_2}) = 0.2$<br>$P(\\text{Instrument not functioning}) = P(\\bar{E_1})P(\\bar{E_2}) + P(E_1)P(\\bar{E_2}) + P(\\bar{E_1})P(E_2) = 0.1 \\times 0.2 + 0.9 \\times 0.2 + 0.1 \\times 0.8$<br>$P(\\text{First unit failed and second unit functioning}) = P$<br>$\\therefore P = \\frac{0.8 \\times 0.1}{0.1 \\times 0.2 + 0.9 \\times 0.2 + 0.1 \\times 0.8} = \\frac{8}{28}$<br>$98P = \\frac{8}{28} \\times 98 = 28$."
        },
        // 23 (PDF Q75)
        {
            "type": "numerical",
            "marks": 4,
            "negativeMarks": -1,
            "correctAnswer": 4949,
            "text": "Three distinct numbers are selected randomly from the set {1,2,3, ...,40}. If the probability, that the selected numbers are in an increasing G.P., is $\\frac{m}{n}$, gcd(m,n) = 1, then m + n is equal to ___ .",
            "solution": "Total choices = $^{40}C_3 = 9880$.<br>Favorable cases for increasing GP: r=2 gives 10 sequences (10,20,40 etc.), r=3 gives 4, r=4 gives 2, r=5 gives 1, r=6 gives 1. Total = 18.<br>Required probability = $\\frac{18}{9880} = \\frac{9}{4940} = \\frac{m}{n}$.<br>$m + n = 9 + 4940 = 4949$."
        }
    ]
};
