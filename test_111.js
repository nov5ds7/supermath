window.testBank['test_111'] = {
    title: "JEE Main 2026 – Mock Test 1",
    category: "Full Tests",
    timeLimitMins: 30,
    randomizePoolSize: 0,   // Use all 3 questions exactly as listed

    questions: [
        {
            type: "mcq",
            text: "If \( \\sin \\theta = \\frac{3}{5} \\), what is \( \\cos \\theta \) ?",
            options: ["\( \\frac{3}{4} \)", "\( \\frac{4}{5} \)", "\( \\frac{5}{3} \)", "\( \\frac{2}{5} \)"],
            correctAnswer: 1,
            solution: `<b>Using identity:</b> \( \\sin^2 \\theta + \\cos^2 \\theta = 1 \).<br>
                        \( \\cos \\theta = \\sqrt{1 - \\frac{9}{25}} = \\sqrt{\\frac{16}{25}} = \\frac{4}{5} \).<br>
                        <b>Answer:</b> Option B.`
        },
        {
            type: "numerical",
            text: "Evaluate \( \\int_0^1 (2x + 1) \\, dx \).",
            correctAnswer: "2",
            tolerance: 0.001,
            solution: `<b>Step 1:</b> Integrate: \( [x^2 + x]_0^1 \).<br>
                        <b>Step 2:</b> Apply limits: \( (1^2 + 1) - (0) = 2 \).<br>
                        <b>Answer:</b> 2`
        },
        {
            type: "mcq",
            text: "Which of the following is a prime number?",
            options: ["21", "23", "27", "33"],
            correctAnswer: 1,
            solution: `<b>Check divisibility:</b> 23 is only divisible by 1 and itself.<br>
                        <b>Answer:</b> Option B.`
        }
    ]
};