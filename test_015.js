window.testBank = window.testBank || {};
window.testBank['test_015'] = {
    "title": "Indefinite Integration(Theory Based)",
    "category": "Theory and Formulae Tests - Maths",
    uploadedAt: "2026-07-04T12:00:03Z",
    "timeLimitMins": 10,
    "randomizePoolSize": 30,
    "questions": [
        // 1
        {
            "type": "mcq",
            "text": "What is the general form of the indefinite integral of $x^n$ for n &ne; -1?",
            "options": [
                "$\\frac{x^{n+1}}{n+1} + C$",
                "$\\frac{x^{n-1}}{n-1} + C$",
                "$n x^{n-1} + C$",
                "$\\frac{x^{n}}{n} + C$"
            ],
            "correctAnswer": 0,
            "solution": "For n &ne; -1, $\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$."
        },
        // 2
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x}$?",
            "options": [
                "$\\ln |x| + C$",
                "$\\ln x + C$",
                "$\\frac{1}{x^2} + C$",
                "$e^x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x} \\, dx = \\ln |x| + C$."
        },
        // 3
        {
            "type": "mcq",
            "text": "What is the integral of $e^x$?",
            "options": [
                "$e^x + C$",
                "$\\ln x + C$",
                "$x e^x + C$",
                "$e^{x^2} + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int e^x \\, dx = e^x + C$."
        },
        // 4
        {
            "type": "mcq",
            "text": "What is the integral of $a^x$ where a > 0, a &ne; 1?",
            "options": [
                "$\\frac{a^x}{\\ln a} + C$",
                "$a^x \\ln a + C$",
                "$\\frac{a^x}{x} + C$",
                "$\\ln(a^x) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int a^x \\, dx = \\frac{a^x}{\\ln a} + C$."
        },
        // 5
        {
            "type": "mcq",
            "text": "What is the integral of $\\sin x$?",
            "options": [
                "$-\\cos x + C$",
                "$\\cos x + C$",
                "$\\sin x + C$",
                "$-\\sin x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sin x \\, dx = -\\cos x + C$."
        },
        // 6
        {
            "type": "mcq",
            "text": "What is the integral of $\\cos x$?",
            "options": [
                "$\\sin x + C$",
                "$-\\sin x + C$",
                "$\\cos x + C$",
                "$-\\cos x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\cos x \\, dx = \\sin x + C$."
        },
        // 7
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec^2 x$?",
            "options": [
                "$\\tan x + C$",
                "$\\sec x \\tan x + C$",
                "$\\ln |\\sec x + \\tan x| + C$",
                "$\\sec x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sec^2 x \\, dx = \\tan x + C$."
        },
        // 8
        {
            "type": "mcq",
            "text": "What is the integral of $\\csc^2 x$?",
            "options": [
                "$-\\cot x + C$",
                "$\\cot x + C$",
                "$\\csc x + C$",
                "$\\ln |\\csc x - \\cot x| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\csc^2 x \\, dx = -\\cot x + C$."
        },
        // 9
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec x \\tan x$?",
            "options": [
                "$\\sec x + C$",
                "$\\tan x + C$",
                "$\\sec x \\tan x + C$",
                "$\\ln |\\sec x + \\tan x| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sec x \\tan x \\, dx = \\sec x + C$."
        },
        // 10
        {
            "type": "mcq",
            "text": "What is the integral of $\\csc x \\cot x$?",
            "options": [
                "$-\\csc x + C$",
                "$\\csc x + C$",
                "$\\cot x + C$",
                "$\\ln |\\csc x - \\cot x| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\csc x \\cot x \\, dx = -\\csc x + C$."
        },
        // 11
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{1+x^2}$?",
            "options": [
                "$\\tan^{-1} x + C$",
                "$\\sin^{-1} x + C$",
                "$\\sec^{-1} x + C$",
                "$\\ln(1+x^2) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{1+x^2} \\, dx = \\tan^{-1} x + C$."
        },
        // 12
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{1-x^2}}$?",
            "options": [
                "$\\sin^{-1} x + C$",
                "$\\cos^{-1} x + C$",
                "$\\tan^{-1} x + C$",
                "$\\sec^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{1-x^2}} \\, dx = \\sin^{-1} x + C$."
        },
        // 13
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{x^2 - 1}}$?",
            "options": [
                "$\\sec^{-1} x + C$",
                "$\\sin^{-1} x + C$",
                "$\\tan^{-1} x + C$",
                "$\\csc^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x \\sqrt{x^2 - 1}} \\, dx = \\sec^{-1} x + C$."
        },
        // 14
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{a^2 + x^2}$?",
            "options": [
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{a^2 + x^2} \\, dx = \\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$."
        },
        // 15
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{a^2 - x^2}}$?",
            "options": [
                "$\\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\cos^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{a}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{a^2 - x^2}} \\, dx = \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$."
        },
        // 16
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - a^2}$?",
            "options": [
                "$\\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{x+a}{x-a} \\right| + C$",
                "$\\ln \\left| x^2 - a^2 \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x^2 - a^2} \\, dx = \\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$."
        },
        // 17
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - a^2}}$?",
            "options": [
                "$\\ln \\left| x + \\sqrt{x^2 - a^2} \\right| + C$",
                "$\\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\sec^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\ln \\left| x - \\sqrt{x^2 - a^2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 - a^2}} \\, dx = \\ln \\left| x + \\sqrt{x^2 - a^2} \\right| + C$."
        },
        // 18
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 + a^2}}$?",
            "options": [
                "$\\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 + a^2}} \\, dx = \\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$."
        },
        // 19
        {
            "type": "mcq",
            "text": "What is the integral of $\\tan x$?",
            "options": [
                "$\\ln |\\sec x| + C$",
                "$\\ln |\\sin x| + C$",
                "$\\sec^2 x + C$",
                "$-\\ln |\\cos x| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\tan x \\, dx = \\ln |\\sec x| + C$ (or $-\\ln |\\cos x| + C$)."
        },
        // 20
        {
            "type": "mcq",
            "text": "What is the integral of $\\cot x$?",
            "options": [
                "$\\ln |\\sin x| + C$",
                "$\\ln |\\cos x| + C$",
                "$-\\ln |\\sin x| + C$",
                "$\\csc^2 x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\cot x \\, dx = \\ln |\\sin x| + C$."
        },
        // 21
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec x$?",
            "options": [
                "$\\ln |\\sec x + \\tan x| + C$",
                "$\\ln |\\sec x - \\tan x| + C$",
                "$\\sec x \\tan x + C$",
                "$\\tan x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sec x \\, dx = \\ln |\\sec x + \\tan x| + C$."
        },
        // 22
        {
            "type": "mcq",
            "text": "What is the integral of $\\csc x$?",
            "options": [
                "$\\ln |\\csc x - \\cot x| + C$",
                "$\\ln |\\csc x + \\cot x| + C$",
                "$-\\ln |\\csc x + \\cot x| + C$",
                "$\\csc x \\cot x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\csc x \\, dx = \\ln |\\csc x - \\cot x| + C$."
        },
        // 23
        {
            "type": "mcq",
            "text": "What is the integral of $\\sin^2 x$?",
            "options": [
                "$\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$",
                "$\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$",
                "$\\frac{\\sin^3 x}{3} + C$",
                "$-\\cos^2 x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sin^2 x \\, dx = \\frac{x}{2} - \\frac{\\sin 2x}{4} + C$."
        },
        // 24
        {
            "type": "mcq",
            "text": "What is the integral of $\\cos^2 x$?",
            "options": [
                "$\\frac{x}{2} + \\frac{\\sin 2x}{4} + C$",
                "$\\frac{x}{2} - \\frac{\\sin 2x}{4} + C$",
                "$\\frac{\\sin^3 x}{3} + C$",
                "$\\sin^2 x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\cos^2 x \\, dx = \\frac{x}{2} + \\frac{\\sin 2x}{4} + C$."
        },
        // 25
        {
            "type": "mcq",
            "text": "What is the integral of $\\tan^2 x$?",
            "options": [
                "$\\tan x - x + C$",
                "$\\tan x + x + C$",
                "$\\sec^2 x + C$",
                "$\\ln |\\sec x| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Since $\\tan^2 x = \\sec^2 x - 1$, $\\int \\tan^2 x \\, dx = \\tan x - x + C$."
        },
        // 26
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{a^2 - x^2}$?",
            "options": [
                "$\\frac{1}{2a} \\ln \\left| \\frac{a+x}{a-x} \\right| + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{a-x}{a+x} \\right| + C$",
                "$\\ln \\left| \\frac{a+x}{a-x} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{a^2 - x^2} \\, dx = \\frac{1}{2a} \\ln \\left| \\frac{a+x}{a-x} \\right| + C$."
        },
        // 27
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + x + 1}$?",
            "options": [
                "$\\frac{2}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$",
                "$\\frac{1}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$",
                "$\\frac{2}{\\sqrt{3}} \\sin^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+x+1 = (x+1/2)^2 + 3/4$. Then $\\int \\frac{1}{(x+1/2)^2 + (\\sqrt{3}/2)^2} \\, dx = \\frac{1}{\\sqrt{3}/2} \\tan^{-1} \\left(\\frac{x+1/2}{\\sqrt{3}/2}\\right) + C = \\frac{2}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$."
        },
        // 28
        {
            "type": "mcq",
            "text": "What does the constant $C$ represent in an indefinite integral?",
            "options": [
                "An arbitrary constant of integration",
                "The value of the integral at $x=0$",
                "The constant term from the original function",
                "The derivative of the antiderivative"
            ],
            "correctAnswer": 0,
            "solution": "$C$ is the arbitrary constant of integration because differentiation of a constant is zero, so any constant can be added to an antiderivative."
        },
        // 29
        {
            "type": "mcq",
            "text": "Which of the following is the integration by parts formula?",
            "options": [
                "$\\int u \\, dv = uv - \\int v \\, du$",
                "$\\int u \\, dv = uv + \\int v \\, du$",
                "$\\int u \\, dv = u v - \\int u \\, dv$",
                "$\\int u \\, dv = \\frac{1}{2} (uv - \\int v \\, du)$"
            ],
            "correctAnswer": 0,
            "solution": "The integration by parts formula is $\\int u \\, dv = uv - \\int v \\, du$."
        },
        // 30
        {
            "type": "mcq",
            "text": "According to the ILATE rule, which function is chosen as $u$ first?",
            "options": [
                "Inverse trigonometric",
                "Logarithmic",
                "Algebraic",
                "Trigonometric"
            ],
            "correctAnswer": 0,
            "solution": "The ILATE order: Inverse trigonometric, Logarithmic, Algebraic, Trigonometric, Exponential. So Inverse functions are chosen first as $u$."
        },
        // 31
        {
            "type": "mcq",
            "text": "What is the integral of $\\ln x$?",
            "options": [
                "$x \\ln x - x + C$",
                "$\\frac{1}{x} + C$",
                "$x \\ln x + C$",
                "$\\ln x - x + C$"
            ],
            "correctAnswer": 0,
            "solution": "Using integration by parts with $u = \\ln x, dv = dx$, we get $\\int \\ln x \\, dx = x \\ln x - x + C$."
        },
        // 32
        {
            "type": "mcq",
            "text": "What is the integral of $x e^x$?",
            "options": [
                "$(x-1)e^x + C$",
                "$(x+1)e^x + C$",
                "$x e^x + C$",
                "$e^x(x+1) + C$"
            ],
            "correctAnswer": 0,
            "solution": "By parts: $u=x, dv=e^x dx$ gives $\\int x e^x \\, dx = x e^x - e^x + C = (x-1)e^x + C$."
        },
        // 33
        {
            "type": "mcq",
            "text": "What is the integral of $x \\sin x$?",
            "options": [
                "$-x \\cos x + \\sin x + C$",
                "$x \\cos x - \\sin x + C$",
                "$-x \\cos x - \\sin x + C$",
                "$x \\sin x + \\cos x + C$"
            ],
            "correctAnswer": 0,
            "solution": "By parts: $u=x, dv=\\sin x dx$ gives $\\int x \\sin x \\, dx = -x \\cos x + \\int \\cos x \\, dx = -x \\cos x + \\sin x + C$."
        },
        // 34
        {
            "type": "mcq",
            "text": "What is the integral of $x \\cos x$?",
            "options": [
                "$x \\sin x + \\cos x + C$",
                "$x \\sin x - \\cos x + C$",
                "$-x \\sin x + \\cos x + C$",
                "$x \\cos x + \\sin x + C$"
            ],
            "correctAnswer": 0,
            "solution": "By parts: $u=x, dv=\\cos x dx$ gives $\\int x \\cos x \\, dx = x \\sin x - \\int \\sin x \\, dx = x \\sin x + \\cos x + C$."
        },
        // 35
        {
            "type": "mcq",
            "text": "What is the integral of $e^x \\sin x$?",
            "options": [
                "$\\frac{e^x}{2}(\\sin x - \\cos x) + C$",
                "$\\frac{e^x}{2}(\\sin x + \\cos x) + C$",
                "$e^x \\sin x + C$",
                "$e^x \\cos x + C$"
            ],
            "correctAnswer": 0,
            "solution": "Using integration by parts twice: $\\int e^x \\sin x \\, dx = \\frac{e^x}{2}(\\sin x - \\cos x) + C$."
        },
        // 36
        {
            "type": "mcq",
            "text": "What is the integral of $e^x \\cos x$?",
            "options": [
                "$\\frac{e^x}{2}(\\sin x + \\cos x) + C$",
                "$\\frac{e^x}{2}(\\sin x - \\cos x) + C$",
                "$e^x \\sin x + C$",
                "$e^x \\cos x + C$"
            ],
            "correctAnswer": 0,
            "solution": "Using integration by parts twice: $\\int e^x \\cos x \\, dx = \\frac{e^x}{2}(\\sin x + \\cos x) + C$."
        },
        // 37
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec^3 x$?",
            "options": [
                "$\\frac{1}{2} \\sec x \\tan x + \\frac{1}{2} \\ln |\\sec x + \\tan x| + C$",
                "$\\sec x \\tan x + \\ln |\\sec x + \\tan x| + C$",
                "$\\frac{1}{2} \\sec x \\tan x - \\frac{1}{2} \\ln |\\sec x + \\tan x| + C$",
                "$\\sec^2 x \\tan x + C$"
            ],
            "correctAnswer": 0,
            "solution": "By reduction formula, $\\int \\sec^3 x \\, dx = \\frac{1}{2} \\sec x \\tan x + \\frac{1}{2} \\ln |\\sec x + \\tan x| + C$."
        },
        // 38
        {
            "type": "mcq",
            "text": "What is the integral of $\\sinh x$?",
            "options": [
                "$\\cosh x + C$",
                "$\\sinh x + C$",
                "$-\\cosh x + C$",
                "$\\frac{e^x}{2} + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sinh x \\, dx = \\cosh x + C$."
        },
        // 39
        {
            "type": "mcq",
            "text": "What is the integral of $\\cosh x$?",
            "options": [
                "$\\sinh x + C$",
                "$\\cosh x + C$",
                "$-\\sinh x + C$",
                "$\\frac{e^x}{2} + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\cosh x \\, dx = \\sinh x + C$."
        },
        // 40
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2+1}}$?",
            "options": [
                "$\\sinh^{-1} x + C$",
                "$\\cosh^{-1} x + C$",
                "$\\tan^{-1} x + C$",
                "$\\frac{1}{2} \\ln(x^2+1) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2+1}} \\, dx = \\sinh^{-1} x + C = \\ln(x + \\sqrt{x^2+1}) + C$."
        },
        // 41
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2-1}}$?",
            "options": [
                "$\\cosh^{-1} x + C$",
                "$\\sinh^{-1} x + C$",
                "$\\frac{1}{2} \\ln(x^2-1) + C$",
                "$\\sec^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2-1}} \\, dx = \\cosh^{-1} x + C = \\ln(x + \\sqrt{x^2-1}) + C$."
        },
        // 42
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2+a^2}}$ for $a > 0$?",
            "options": [
                "$\\sinh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\cosh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln |x^2+a^2| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2+a^2}} \\, dx = \\sinh^{-1} \\left(\\frac{x}{a}\\right) + C = \\ln \\left| x + \\sqrt{x^2+a^2} \\right| + C$."
        },
        // 43
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{x^2 + 1}}$?",
            "options": [
                "$\\frac{1}{\\sqrt{x^2+1}} + C$",
                "$-\\frac{1}{\\sqrt{x^2+1}} + C$",
                "$\\tan^{-1} x + C$",
                "$\\ln \\left| \\frac{\\sqrt{x^2+1}-1}{x} \\right| + C$"
            ],
            "correctAnswer": 3,
            "solution": "$\\int \\frac{1}{x \\sqrt{x^2 + 1}} \\, dx = \\ln \\left| \\frac{\\sqrt{x^2+1}-1}{x} \\right| + C$."
        },
        // 44
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{x^2 - 1}}$ for $x > 1$?",
            "options": [
                "$\\sec^{-1} x + C$",
                "$\\csc^{-1} x + C$",
                "$\\cosh^{-1} x + C$",
                "$\\ln |\\frac{\\sqrt{x^2-1}}{x}| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x \\sqrt{x^2 - 1}} \\, dx = \\sec^{-1} x + C$."
        },
        // 45
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + a^2}$ for $a > 0$?",
            "options": [
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$",
                "$\\frac{1}{a} \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x^2 + a^2} \\, dx = \\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$."
        },
        // 46
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - a^2}$ for $a > 0$?",
            "options": [
                "$\\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{x+a}{x-a} \\right| + C$",
                "$\\ln \\left| \\frac{x-a}{x+a} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x^2 - a^2} \\, dx = \\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$."
        },
        // 47
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{a^2 - x^2}}$ for $a > 0$?",
            "options": [
                "$\\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\cos^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{\\sqrt{a^2}} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{a^2 - x^2}} \\, dx = \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$."
        },
        // 48
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - a^2}}$ for $x > a > 0$?",
            "options": [
                "$\\cosh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\sinh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\sec^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\ln \\left| x + \\sqrt{x^2 - a^2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 - a^2}} \\, dx = \\cosh^{-1} \\left(\\frac{x}{a}\\right) + C = \\ln \\left| x + \\sqrt{x^2 - a^2} \\right| + C$."
        },
        // 49
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 + a^2}}$ for $a > 0$?",
            "options": [
                "$\\sinh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\cosh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 + a^2}} \\, dx = \\sinh^{-1} \\left(\\frac{x}{a}\\right) + C = \\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$."
        },
        // 50
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{a^2 - x^2}$ for $|x| < a$?",
            "options": [
                "$\\frac{1}{2a} \\ln \\left| \\frac{a+x}{a-x} \\right| + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{a-x}{a+x} \\right| + C$",
                "$\\frac{1}{a} \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{a^2 - x^2} \\, dx = \\frac{1}{2a} \\ln \\left| \\frac{a+x}{a-x} \\right| + C$."
        },
        // 51
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + a^2}$ for a &ne; 0?",
            "options": [
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\cot^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "The standard integral is $\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$."
        },
        // 52
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + a^2}$ when $a = 1$?",
            "options": [
                "$\\tan^{-1} x + C$",
                "$\\sin^{-1} x + C$",
                "$\\sec^{-1} x + C$",
                "$\\ln(x^2+1) + C$"
            ],
            "correctAnswer": 0,
            "solution": "When $a=1$, $\\int \\frac{1}{1+x^2} \\, dx = \\tan^{-1} x + C$."
        },
        // 53
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{1-x^2}}$ for $|x| < 1$?",
            "options": [
                "$\\sin^{-1} x + C$",
                "$\\cos^{-1} x + C$",
                "$\\tan^{-1} x + C$",
                "$\\sec^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "The standard integral is $\\sin^{-1} x + C$."
        },
        // 54
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - 1}}$ for $x > 1$?",
            "options": [
                "$\\cosh^{-1} x + C$",
                "$\\sinh^{-1} x + C$",
                "$\\ln(x + \\sqrt{x^2-1}) + C$",
                "$\\sec^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2-1}} \\, dx = \\cosh^{-1} x + C = \\ln(x + \\sqrt{x^2-1}) + C$."
        },
        // 55
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2+1}}$?",
            "options": [
                "$\\sinh^{-1} x + C$",
                "$\\cosh^{-1} x + C$",
                "$\\tan^{-1} x + C$",
                "$\\ln(x + \\sqrt{x^2+1}) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2+1}} \\, dx = \\sinh^{-1} x + C = \\ln(x + \\sqrt{x^2+1}) + C$."
        },
        // 56
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{x^2 - 1}}$ for $x > 1$?",
            "options": [
                "$\\sec^{-1} x + C$",
                "$\\csc^{-1} x + C$",
                "$\\cosh^{-1} x + C$",
                "$\\ln\\left| \\frac{\\sqrt{x^2-1}}{x} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x \\sqrt{x^2 - 1}} \\, dx = \\sec^{-1} x + C$."
        },
        // 57
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{x^2 + 1}}$?",
            "options": [
                "$\\frac{1}{\\sqrt{x^2+1}} + C$",
                "$-\\frac{1}{\\sqrt{x^2+1}} + C$",
                "$\\tan^{-1} x + C$",
                "$\\ln \\left| \\frac{\\sqrt{x^2+1}-1}{x} \\right| + C$"
            ],
            "correctAnswer": 3,
            "solution": "$\\int \\frac{1}{x \\sqrt{x^2 + 1}} \\, dx = \\ln \\left| \\frac{\\sqrt{x^2+1}-1}{x} \\right| + C$."
        },
        // 58
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{x^2+a^2}}$ for $a > 0$?",
            "options": [
                "$\\frac{1}{a} \\ln \\left| \\frac{\\sqrt{x^2+a^2}-a}{x} \\right| + C$",
                "$\\frac{1}{a} \\ln \\left| \\frac{\\sqrt{x^2+a^2}+a}{x} \\right| + C$",
                "$\\frac{1}{2a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\sin^{-1} \\left(\\frac{x}{a}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "Substitute $x = a \\tan \\theta$, $dx = a \\sec^2 \\theta d\\theta$. $\\int \\frac{1}{x \\sqrt{x^2+a^2}} \\, dx = \\frac{1}{a} \\ln \\left| \\frac{\\sqrt{x^2+a^2}-a}{x} \\right| + C$."
        },
        // 59
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - a^2}}$ for $|x| > a > 0$?",
            "options": [
                "$\\ln \\left| x + \\sqrt{x^2 - a^2} \\right| + C$",
                "$\\sin^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\sec^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\cosh^{-1} \\left(\\frac{x}{a}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 - a^2}} \\, dx = \\cosh^{-1} \\left(\\frac{x}{a}\\right) + C = \\ln \\left| x + \\sqrt{x^2 - a^2} \\right| + C$."
        },
        // 60
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 + a^2}}$ for $a > 0$?",
            "options": [
                "$\\sinh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\cosh^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{a} \\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 + a^2}} \\, dx = \\sinh^{-1} \\left(\\frac{x}{a}\\right) + C = \\ln \\left| x + \\sqrt{x^2 + a^2} \\right| + C$."
        },
        // 61
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{a^2 - x^2}$ for $|x| < a$?",
            "options": [
                "$\\frac{1}{2a} \\ln \\left| \\frac{a+x}{a-x} \\right| + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{a-x}{a+x} \\right| + C$",
                "$\\ln \\left| \\frac{a+x}{a-x} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{a^2 - x^2} \\, dx = \\frac{1}{2a} \\ln \\left| \\frac{a+x}{a-x} \\right| + C$."
        },
        // 62
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - a^2}$ for $|x| > a$?",
            "options": [
                "$\\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$",
                "$\\frac{1}{a} \\tan^{-1} \\left(\\frac{x}{a}\\right) + C$",
                "$\\frac{1}{2a} \\ln \\left| \\frac{x+a}{x-a} \\right| + C$",
                "$\\ln \\left| \\frac{x-a}{x+a} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{x^2 - a^2} \\, dx = \\frac{1}{2a} \\ln \\left| \\frac{x-a}{x+a} \\right| + C$."
        },
        // 63
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec x \\tan x$?",
            "options": [
                "$\\sec x + C$",
                "$\\tan x + C$",
                "$\\ln |\\sec x + \\tan x| + C$",
                "$\\sec^2 x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sec x \\tan x \\, dx = \\sec x + C$."
        },
        // 64
        {
            "type": "mcq",
            "text": "What is the integral of $\\csc x \\cot x$?",
            "options": [
                "$-\\csc x + C$",
                "$\\csc x + C$",
                "$\\ln |\\csc x - \\cot x| + C$",
                "$\\csc^2 x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\csc x \\cot x \\, dx = -\\csc x + C$."
        },
        // 65
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\ln x}$?",
            "options": [
                "$\\ln |\\ln x| + C$",
                "$\\frac{1}{\\ln x} + C$",
                "$\\ln x + C$",
                "$\\frac{1}{x} + C$"
            ],
            "correctAnswer": 0,
            "solution": "Substitute $u = \\ln x$, $du = \\frac{dx}{x}$, so $\\int \\frac{1}{x \\ln x} \\, dx = \\int \\frac{du}{u} = \\ln |u| + C = \\ln |\\ln x| + C$."
        },
        // 66
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\ln x}$ for $x > 1$?",
            "options": [
                "$\\ln(\\ln x) + C$",
                "$\\ln |\\ln x| + C$",
                "$\\frac{1}{\\ln x} + C$",
                "$\\ln x + C$"
            ],
            "correctAnswer": 0,
            "solution": "For $x > 1$, $\\ln x > 0$, so $\\int \\frac{1}{x \\ln x} \\, dx = \\ln(\\ln x) + C$."
        },
        // 67
        {
            "type": "mcq",
            "text": "What is the integral of $e^{ax}$ for a &ne; 0?",
            "options": [
                "$\\frac{e^{ax}}{a} + C$",
                "$a e^{ax} + C$",
                "$e^{ax} + C$",
                "$\\frac{e^{ax}}{x} + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int e^{ax} \\, dx = \\frac{e^{ax}}{a} + C$."
        },
        // 68
        {
            "type": "mcq",
            "text": "What is the integral of $a^{bx}$ for a > 0, a &ne; 1 and b &ne; 0?",
            "options": [
                "$\\frac{a^{bx}}{b \\ln a} + C$",
                "$\\frac{a^{bx}}{\\ln a} + C$",
                "$b a^{bx} \\ln a + C$",
                "$\\frac{a^{bx}}{b} + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int a^{bx} \\, dx = \\frac{a^{bx}}{b \\ln a} + C$."
        },
        // 69
        {
            "type": "mcq",
            "text": "What is the integral of $\\sin(ax+b)$?",
            "options": [
                "$-\\frac{1}{a} \\cos(ax+b) + C$",
                "$\\frac{1}{a} \\cos(ax+b) + C$",
                "$-\\cos(ax+b) + C$",
                "$\\frac{1}{a} \\sin(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sin(ax+b) \\, dx = -\\frac{1}{a} \\cos(ax+b) + C$."
        },
        // 70
        {
            "type": "mcq",
            "text": "What is the integral of $\\cos(ax+b)$?",
            "options": [
                "$\\frac{1}{a} \\sin(ax+b) + C$",
                "$-\\frac{1}{a} \\sin(ax+b) + C$",
                "$\\sin(ax+b) + C$",
                "$\\frac{1}{a} \\cos(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\cos(ax+b) \\, dx = \\frac{1}{a} \\sin(ax+b) + C$."
        },
        // 71
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec^2(ax+b)$?",
            "options": [
                "$\\frac{1}{a} \\tan(ax+b) + C$",
                "$\\tan(ax+b) + C$",
                "$\\frac{1}{a} \\sec(ax+b) + C$",
                "$\\sec(ax+b) \\tan(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sec^2(ax+b) \\, dx = \\frac{1}{a} \\tan(ax+b) + C$."
        },
        // 72
        {
            "type": "mcq",
            "text": "What is the integral of $\\csc^2(ax+b)$?",
            "options": [
                "$-\\frac{1}{a} \\cot(ax+b) + C$",
                "$\\frac{1}{a} \\cot(ax+b) + C$",
                "$-\\cot(ax+b) + C$",
                "$\\frac{1}{a} \\csc(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\csc^2(ax+b) \\, dx = -\\frac{1}{a} \\cot(ax+b) + C$."
        },
        // 73
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec(ax+b) \\tan(ax+b)$?",
            "options": [
                "$\\frac{1}{a} \\sec(ax+b) + C$",
                "$\\sec(ax+b) + C$",
                "$\\frac{1}{a} \\tan(ax+b) + C$",
                "$\\frac{1}{a} \\ln |\\sec(ax+b) + \\tan(ax+b)| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sec(ax+b) \\tan(ax+b) \\, dx = \\frac{1}{a} \\sec(ax+b) + C$."
        },
        // 74
        {
            "type": "mcq",
            "text": "What is the integral of $\\csc(ax+b) \\cot(ax+b)$?",
            "options": [
                "$-\\frac{1}{a} \\csc(ax+b) + C$",
                "$\\frac{1}{a} \\csc(ax+b) + C$",
                "$-\\csc(ax+b) + C$",
                "$\\frac{1}{a} \\cot(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\csc(ax+b) \\cot(ax+b) \\, dx = -\\frac{1}{a} \\csc(ax+b) + C$."
        },
        // 75
        {
            "type": "mcq",
            "text": "What is the integral of $\\tan(ax+b)$?",
            "options": [
                "$\\frac{1}{a} \\ln |\\sec(ax+b)| + C$",
                "$\\ln |\\sec(ax+b)| + C$",
                "$\\frac{1}{a} \\sec^2(ax+b) + C$",
                "$-\\frac{1}{a} \\ln |\\cos(ax+b)| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\tan(ax+b) \\, dx = \\frac{1}{a} \\ln |\\sec(ax+b)| + C = -\\frac{1}{a} \\ln |\\cos(ax+b)| + C$."
        },
        // 76
        {
            "type": "mcq",
            "text": "What is the integral of $\\cot(ax+b)$?",
            "options": [
                "$\\frac{1}{a} \\ln |\\sin(ax+b)| + C$",
                "$\\ln |\\sin(ax+b)| + C$",
                "$-\\frac{1}{a} \\ln |\\cos(ax+b)| + C$",
                "$\\frac{1}{a} \\csc^2(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\cot(ax+b) \\, dx = \\frac{1}{a} \\ln |\\sin(ax+b)| + C$."
        },
        // 77
        {
            "type": "mcq",
            "text": "What is the integral of $\\sec(ax+b)$?",
            "options": [
                "$\\frac{1}{a} \\ln |\\sec(ax+b) + \\tan(ax+b)| + C$",
                "$\\ln |\\sec(ax+b) + \\tan(ax+b)| + C$",
                "$\\frac{1}{a} \\sec(ax+b) \\tan(ax+b) + C$",
                "$\\frac{1}{a} \\tan(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\sec(ax+b) \\, dx = \\frac{1}{a} \\ln |\\sec(ax+b) + \\tan(ax+b)| + C$."
        },
        // 78
        {
            "type": "mcq",
            "text": "What is the integral of $\\csc(ax+b)$?",
            "options": [
                "$\\frac{1}{a} \\ln |\\csc(ax+b) - \\cot(ax+b)| + C$",
                "$\\ln |\\csc(ax+b) - \\cot(ax+b)| + C$",
                "$-\\frac{1}{a} \\ln |\\csc(ax+b) + \\cot(ax+b)| + C$",
                "$\\frac{1}{a} \\csc(ax+b) \\cot(ax+b) + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\csc(ax+b) \\, dx = \\frac{1}{a} \\ln |\\csc(ax+b) - \\cot(ax+b)| + C$."
        },
        // 79
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + a^2}$ when $a = 0$?",
            "options": [
                "It is undefined (division by zero)",
                "$-\\frac{1}{x} + C$",
                "$\\ln |x| + C$",
                "$\\frac{1}{x} + C$"
            ],
            "correctAnswer": 0,
            "solution": "When $a=0$, the integrand becomes $1/x^2$, whose integral is $-1/x + C$."
        },
        // 80
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - 1}$?",
            "options": [
                "$\\frac{1}{2} \\ln \\left| \\frac{x-1}{x+1} \\right| + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{x+1}{x-1} \\right| + C$",
                "$\\tan^{-1} x + C$",
                "$\\ln |x^2 - 1| + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=1$, $\\int \\frac{1}{x^2 - 1} \\, dx = \\frac{1}{2} \\ln \\left| \\frac{x-1}{x+1} \\right| + C$."
        },
        // 81
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - 1}}$?",
            "options": [
                "$\\ln |x + \\sqrt{x^2 - 1}| + C$",
                "$\\sin^{-1} x + C$",
                "$\\sec^{-1} x + C$",
                "$\\cosh^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 - 1}} \\, dx = \\ln |x + \\sqrt{x^2 - 1}| + C$."
        },
        // 82
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 + 1}}$?",
            "options": [
                "$\\ln |x + \\sqrt{x^2 + 1}| + C$",
                "$\\sin^{-1} x + C$",
                "$\\tan^{-1} x + C$",
                "$\\sinh^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{x^2 + 1}} \\, dx = \\ln |x + \\sqrt{x^2 + 1}| + C$."
        },
        // 83
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{1 - x^2}$?",
            "options": [
                "$\\frac{1}{2} \\ln \\left| \\frac{1+x}{1-x} \\right| + C$",
                "$\\tan^{-1} x + C$",
                "$\\sin^{-1} x + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{1-x}{1+x} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=1$, $\\int \\frac{1}{1 - x^2} \\, dx = \\frac{1}{2} \\ln \\left| \\frac{1+x}{1-x} \\right| + C$."
        },
        // 84
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{1 - x^2}}$?",
            "options": [
                "$\\sin^{-1} x + C$",
                "$\\cos^{-1} x + C$",
                "$\\tan^{-1} x + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{1+x}{1-x} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "$\\int \\frac{1}{\\sqrt{1 - x^2}} \\, dx = \\sin^{-1} x + C$."
        },
        // 85
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + x + 1}$?",
            "options": [
                "$\\frac{2}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$",
                "$\\tan^{-1} (2x+1) + C$",
                "$\\frac{1}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{x+1/2 - \\sqrt{3}/2}{x+1/2 + \\sqrt{3}/2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $(x+1/2)^2 + 3/4$, so integral = $\\frac{1}{\\sqrt{3}/2} \\tan^{-1} \\left(\\frac{x+1/2}{\\sqrt{3}/2}\\right) + C = \\frac{2}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$."
        },
        // 86
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - x + 1}$?",
            "options": [
                "$\\frac{2}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x-1}{\\sqrt{3}}\\right) + C$",
                "$\\frac{1}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x-1}{\\sqrt{3}}\\right) + C$",
                "$\\frac{2}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x+1}{\\sqrt{3}}\\right) + C$",
                "$\\ln |x^2 - x + 1| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $(x-1/2)^2 + 3/4$, so integral = $\\frac{1}{\\sqrt{3}/2} \\tan^{-1} \\left(\\frac{x-1/2}{\\sqrt{3}/2}\\right) + C = \\frac{2}{\\sqrt{3}} \\tan^{-1} \\left(\\frac{2x-1}{\\sqrt{3}}\\right) + C$."
        },
        // 87
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + 2x + 2}$?",
            "options": [
                "$\\tan^{-1} (x+1) + C$",
                "$\\frac{1}{2} \\tan^{-1} (x+1) + C$",
                "$\\sin^{-1} (x+1) + C$",
                "$\\ln |x^2 + 2x + 2| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+2x+2 = (x+1)^2 + 1$, so $\\int \\frac{1}{(x+1)^2+1} \\, dx = \\tan^{-1}(x+1) + C$."
        },
        // 88
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 + 2x + 2}}$?",
            "options": [
                "$\\ln |x+1 + \\sqrt{x^2+2x+2}| + C$",
                "$\\sin^{-1} (x+1) + C$",
                "$\\tan^{-1} (x+1) + C$",
                "$\\frac{1}{\\sqrt{2}} \\ln |x+1 + \\sqrt{x^2+2x+2}| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+2x+2 = (x+1)^2 + 1$, so $\\int \\frac{1}{\\sqrt{(x+1)^2+1}} \\, dx = \\ln |x+1 + \\sqrt{(x+1)^2+1}| + C = \\ln |x+1 + \\sqrt{x^2+2x+2}| + C$."
        },
        // 89
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - 2x + 2}}$?",
            "options": [
                "$\\ln |x-1 + \\sqrt{x^2 - 2x + 2}| + C$",
                "$\\sin^{-1} (x-1) + C$",
                "$\\tan^{-1} (x-1) + C$",
                "$\\cosh^{-1} (x-1) + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2 - 2x + 2 = (x-1)^2 + 1$, so $\\int \\frac{1}{\\sqrt{(x-1)^2+1}} \\, dx = \\ln |x-1 + \\sqrt{(x-1)^2+1}| + C = \\ln |x-1 + \\sqrt{x^2 - 2x + 2}| + C$."
        },
        // 90
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - 2x - 3}}$ for $x > 3$?",
            "options": [
                "$\\cosh^{-1} \\left(\\frac{x-1}{2}\\right) + C$",
                "$\\sinh^{-1} \\left(\\frac{x-1}{2}\\right) + C$",
                "$\\ln |x-1 + \\sqrt{x^2 - 2x - 3}| + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{x-3}{x+1} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2 - 2x - 3 = (x-1)^2 - 4$. For $x>3$, $x-1>2$, so $\\int \\frac{1}{\\sqrt{(x-1)^2 - 2^2}} \\, dx = \\cosh^{-1} \\left(\\frac{x-1}{2}\\right) + C = \\ln |x-1 + \\sqrt{x^2 - 2x - 3}| + C$."
        },
        // 91
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{4 - x^2}}$?",
            "options": [
                "$\\sin^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{2} \\sin^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{\\sqrt{4}} \\sin^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=2$, $\\int \\frac{1}{\\sqrt{4 - x^2}} \\, dx = \\sin^{-1} \\left(\\frac{x}{2}\\right) + C$."
        },
        // 92
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{9 - x^2}}$?",
            "options": [
                "$\\sin^{-1} \\left(\\frac{x}{3}\\right) + C$",
                "$\\frac{1}{3} \\sin^{-1} \\left(\\frac{x}{3}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{3}\\right) + C$",
                "$\\frac{1}{\\sqrt{9}} \\sin^{-1} x + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=3$, $\\int \\frac{1}{\\sqrt{9 - x^2}} \\, dx = \\sin^{-1} \\left(\\frac{x}{3}\\right) + C$."
        },
        // 93
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + 4}$?",
            "options": [
                "$\\frac{1}{2} \\tan^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{4} \\tan^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{2} \\sin^{-1} \\left(\\frac{x}{2}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=2$, $\\int \\frac{1}{x^2 + 4} \\, dx = \\frac{1}{2} \\tan^{-1} \\left(\\frac{x}{2}\\right) + C$."
        },
        // 94
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - 4}$?",
            "options": [
                "$\\frac{1}{4} \\ln \\left| \\frac{x-2}{x+2} \\right| + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{x-2}{x+2} \\right| + C$",
                "$\\frac{1}{4} \\tan^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\ln |x^2 - 4| + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=2$, $\\int \\frac{1}{x^2 - 4} \\, dx = \\frac{1}{4} \\ln \\left| \\frac{x-2}{x+2} \\right| + C$."
        },
        // 95
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 + 4}}$?",
            "options": [
                "$\\ln \\left| x + \\sqrt{x^2 + 4} \\right| + C$",
                "$\\sinh^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{2} \\ln \\left| x + \\sqrt{x^2 + 4} \\right| + C$",
                "$\\tan^{-1} \\left(\\frac{x}{2}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=2$, $\\int \\frac{1}{\\sqrt{x^2 + 4}} \\, dx = \\ln \\left| x + \\sqrt{x^2 + 4} \\right| + C = \\sinh^{-1} \\left(\\frac{x}{2}\\right) + C$."
        },
        // 96
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - 4}}$ for $x > 2$?",
            "options": [
                "$\\ln \\left| x + \\sqrt{x^2 - 4} \\right| + C$",
                "$\\cosh^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{2} \\ln \\left| x + \\sqrt{x^2 - 4} \\right| + C$",
                "$\\sec^{-1} \\left(\\frac{x}{2}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=2$, $\\int \\frac{1}{\\sqrt{x^2 - 4}} \\, dx = \\ln \\left| x + \\sqrt{x^2 - 4} \\right| + C = \\cosh^{-1} \\left(\\frac{x}{2}\\right) + C$."
        },
        // 97
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{x^2 - 4}}$ for $x > 2$?",
            "options": [
                "$\\frac{1}{2} \\sec^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\sec^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{2} \\cosh^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\ln \\left| \\frac{x}{2} + \\sqrt{\\frac{x^2}{4} - 1} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "With $a=2$, $\\int \\frac{1}{x \\sqrt{x^2 - 4}} \\, dx = \\frac{1}{2} \\sec^{-1} \\left(\\frac{x}{2}\\right) + C$."
        },
        // 98
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x \\sqrt{4 - x^2}}$ for $0 < x < 2$?",
            "options": [
                "$-\\frac{1}{2} \\ln \\left| \\frac{2 + \\sqrt{4 - x^2}}{x} \\right| + C$",
                "$\\frac{1}{2} \\sec^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$\\frac{1}{2} \\sin^{-1} \\left(\\frac{x}{2}\\right) + C$",
                "$-\\frac{1}{2} \\ln \\left| \\frac{2 - \\sqrt{4 - x^2}}{x} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Using substitution $x = 2 \\sin \\theta$, the integral simplifies to $-\\frac{1}{2} \\ln \\left| \\frac{2 + \\sqrt{4 - x^2}}{x} \\right| + C$."
        },
        // 99
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + 2x + 5}$?",
            "options": [
                "$\\frac{1}{2} \\tan^{-1} \\left(\\frac{x+1}{2}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x+1}{2}\\right) + C$",
                "$\\frac{1}{2} \\sin^{-1} \\left(\\frac{x+1}{2}\\right) + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{x+1-2}{x+1+2} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+2x+5 = (x+1)^2 + 4$. So $\\int \\frac{1}{(x+1)^2 + 2^2} \\, dx = \\frac{1}{2} \\tan^{-1} \\left(\\frac{x+1}{2}\\right) + C$."
        },
        // 100
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 + 2x + 5}}$?",
            "options": [
                "$\\ln \\left| x+1 + \\sqrt{x^2+2x+5} \\right| + C$",
                "$\\sin^{-1} \\left(\\frac{x+1}{2}\\right) + C$",
                "$\\frac{1}{2} \\ln \\left| x+1 + \\sqrt{x^2+2x+5} \\right| + C$",
                "$\\tan^{-1} \\left(\\frac{x+1}{2}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+2x+5 = (x+1)^2 + 4 = (x+1)^2 + 2^2$. So $\\int \\frac{1}{\\sqrt{(x+1)^2 + 2^2}} \\, dx = \\ln \\left| x+1 + \\sqrt{(x+1)^2 + 4} \\right| + C = \\ln \\left| x+1 + \\sqrt{x^2+2x+5} \\right| + C$."
        },
        // 101
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2 - 2x + 5}}$?",
            "options": [
                "$\\ln \\left| x-1 + \\sqrt{x^2-2x+5} \\right| + C$",
                "$\\sinh^{-1} \\left(\\frac{x-1}{2}\\right) + C$",
                "$\\frac{1}{2} \\ln \\left| x-1 + \\sqrt{x^2-2x+5} \\right| + C$",
                "$\\tan^{-1} \\left(\\frac{x-1}{2}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2-2x+5 = (x-1)^2 + 4$. So $\\int \\frac{1}{\\sqrt{(x-1)^2 + 2^2}} \\, dx = \\ln \\left| x-1 + \\sqrt{x^2-2x+5} \\right| + C$."
        },
        // 102
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{4x^2 + 1}}$?",
            "options": [
                "$\\frac{1}{2} \\ln \\left| 2x + \\sqrt{4x^2+1} \\right| + C$",
                "$\\sinh^{-1} (2x) + C$",
                "$\\frac{1}{2} \\sinh^{-1} (2x) + C$",
                "$\\ln \\left| x + \\sqrt{x^2 + 1/4} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Rewrite $4x^2+1 = (2x)^2 + 1^2$. So $\\int \\frac{1}{\\sqrt{(2x)^2 + 1}} \\, dx = \\frac{1}{2} \\ln \\left| 2x + \\sqrt{4x^2+1} \\right| + C$."
        },
        // 103
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{1 - 4x^2}}$?",
            "options": [
                "$\\frac{1}{2} \\sin^{-1} (2x) + C$",
                "$\\sin^{-1} (2x) + C$",
                "$\\frac{1}{2} \\cos^{-1} (2x) + C$",
                "$\\tan^{-1} (2x) + C$"
            ],
            "correctAnswer": 0,
            "solution": "Rewrite $1-4x^2 = 1 - (2x)^2$. So $\\int \\frac{1}{\\sqrt{1 - (2x)^2}} \\, dx = \\frac{1}{2} \\sin^{-1} (2x) + C$."
        },
        // 104
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + 2x + 10}$?",
            "options": [
                "$\\frac{1}{3} \\tan^{-1} \\left(\\frac{x+1}{3}\\right) + C$",
                "$\\tan^{-1} \\left(\\frac{x+1}{3}\\right) + C$",
                "$\\frac{1}{3} \\sin^{-1} \\left(\\frac{x+1}{3}\\right) + C$",
                "$\\frac{1}{3} \\ln \\left| \\frac{x+1-3}{x+1+3} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+2x+10 = (x+1)^2 + 9 = (x+1)^2 + 3^2$. So $\\int \\frac{1}{(x+1)^2 + 3^2} \\, dx = \\frac{1}{3} \\tan^{-1} \\left(\\frac{x+1}{3}\\right) + C$."
        },
        // 105
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2+2x+10}}$?",
            "options": [
                "$\\ln \\left| x+1 + \\sqrt{x^2+2x+10} \\right| + C$",
                "$\\sinh^{-1} \\left(\\frac{x+1}{3}\\right) + C$",
                "$\\frac{1}{3} \\ln \\left| x+1 + \\sqrt{x^2+2x+10} \\right| + C$",
                "$\\tan^{-1} \\left(\\frac{x+1}{3}\\right) + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+2x+10 = (x+1)^2 + 9$. So $\\int \\frac{1}{\\sqrt{(x+1)^2 + 3^2}} \\, dx = \\ln \\left| x+1 + \\sqrt{x^2+2x+10} \\right| + C$."
        },
        // 106
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - 2x - 3}$?",
            "options": [
                "$\\frac{1}{4} \\ln \\left| \\frac{x-3}{x+1} \\right| + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{x-3}{x+1} \\right| + C$",
                "$\\frac{1}{4} \\tan^{-1} \\left(\\frac{x-1}{2}\\right) + C$",
                "$\\ln \\left| \\frac{x-3}{x+1} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Factor: $x^2 - 2x - 3 = (x-3)(x+1)$. So $\\int \\frac{1}{(x-3)(x+1)} \\, dx = \\frac{1}{4} \\ln \\left| \\frac{x-3}{x+1} \\right| + C$."
        },
        // 107
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 + 4x + 5}$?",
            "options": [
                "$\\tan^{-1} (x+2) + C$",
                "$\\frac{1}{2} \\tan^{-1} (x+2) + C$",
                "$\\sin^{-1} (x+2) + C$",
                "$\\frac{1}{2} \\ln \\left| \\frac{x+2-1}{x+2+1} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+4x+5 = (x+2)^2 + 1$. So $\\int \\frac{1}{(x+2)^2 + 1} \\, dx = \\tan^{-1}(x+2) + C$."
        },
        // 108
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2+4x+5}}$?",
            "options": [
                "$\\ln \\left| x+2 + \\sqrt{x^2+4x+5} \\right| + C$",
                "$\\sinh^{-1} (x+2) + C$",
                "$\\tan^{-1} (x+2) + C$",
                "$\\frac{1}{2} \\ln \\left| x+2 + \\sqrt{x^2+4x+5} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2+4x+5 = (x+2)^2 + 1$. So $\\int \\frac{1}{\\sqrt{(x+2)^2 + 1}} \\, dx = \\ln \\left| x+2 + \\sqrt{x^2+4x+5} \\right| + C$."
        },
        // 109
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{x^2 - 4x + 5}$?",
            "options": [
                "$\\tan^{-1} (x-2) + C$",
                "$\\frac{1}{2} \\tan^{-1} (x-2) + C$",
                "$\\sin^{-1} (x-2) + C$",
                "$\\ln \\left| x-2 + \\sqrt{x^2-4x+5} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2-4x+5 = (x-2)^2 + 1$. So $\\int \\frac{1}{(x-2)^2 + 1} \\, dx = \\tan^{-1}(x-2) + C$."
        },
        // 110
        {
            "type": "mcq",
            "text": "What is the integral of $\\frac{1}{\\sqrt{x^2-4x+5}}$?",
            "options": [
                "$\\ln \\left| x-2 + \\sqrt{x^2-4x+5} \\right| + C$",
                "$\\sinh^{-1} (x-2) + C$",
                "$\\tan^{-1} (x-2) + C$",
                "$\\frac{1}{2} \\ln \\left| x-2 + \\sqrt{x^2-4x+5} \\right| + C$"
            ],
            "correctAnswer": 0,
            "solution": "Complete square: $x^2-4x+5 = (x-2)^2 + 1$. So $\\int \\frac{1}{\\sqrt{(x-2)^2 + 1}} \\, dx = \\ln \\left| x-2 + \\sqrt{x^2-4x+5} \\right| + C$."
        }
    ]
};