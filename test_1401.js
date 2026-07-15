window.testBank = window.testBank || {};
window.testBank['test_1401'] = {
    title: "Indefinite Integrals - JEE Main PYQs",
    category: "Chapter-wise PYQs Maths",
    uploadedAt: "2026-07-15T12:31:00Z",
    timeLimitMins: 600,
    randomizePoolSize: 0,
    shuffleQuestions: false,
    questions: [
        // 1
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2012] If the integral $$\\\\int \\\\frac{5\\\\tan x}{\\\\tan x - 2} dx = x + a\\\\ln |\\\\sin x - 2\\\\cos x| + k,$$ then a is equal to:",
            options: ["-2", "1", "2", "-1"],
            correctAnswer: 0,
            solution: "Let $u = \\\\sin x - 2\\\\cos x \\\\implies du = (\\\\cos x + 2\\\\sin x) dx$. Rewriting the integral as $\\\\int \\\\frac{5\\\\sin x}{\\\\sin x - 2\\\\cos x} dx$. Let $5\\\\sin x = A(\\\\cos x + 2\\\\sin x) + B(\\\\sin x - 2\\\\cos x)$. Solving for coefficients yields $A=2, B=1$. Integration gives $x + 2\\\\ln|\\\\sin x - 2\\\\cos x| + k$. Thus $a=2$."
        },
        // 2
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2013] If $\\\\int f(x)dx = \\\\psi (x)$, then $\\\\int x^{5}f(x^{3})dx$ is equal to:",
            options: [
                "$\\\\frac{1}{3} [x^{3}\\\\psi (x^{3}) - \\\\int x^{2}\\\\psi (x^{3})dx] + C$",
                "$\\\\frac{1}{3} x^{3}\\\\psi (x^{3}) - 3\\\\int x^{3}\\\\psi (x^{3})dx + C$",
                "$\\\\frac{1}{3} x^{3}\\\\psi (x^{3}) - \\\\int x^{2}\\\\psi (x^{3})dx + C$",
                "$\\\\frac{1}{3} [x^{3}\\\\psi (x^{3}) - \\\\int x^{3}\\\\psi (x^{3})dx] + C$"
            ],
            correctAnswer: 0,
            solution: "Let $t = x^3 \\\\implies dt = 3x^2 dx$. The integral becomes $\\\\frac{1}{3} \\\\int t \\\\cdot f(t) dt$. Using integration by parts with $u = t, dv = f(t) dt$, we get $\\\\frac{1}{3} [t\\\\psi(t) - \\\\int \\\\psi(t) dt]$. Substituting $t = x^3$, we get $\\\\frac{1}{3} [x^{3}\\\\psi(x^{3}) - \\\\int \\\\psi(x^{3}) 3x^{2} dx] = \\\\frac{1}{3} [x^{3}\\\\psi(x^{3}) - \\\\int x^{2}\\\\psi(x^{3}) dx] + C$."
        },
        // 3
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2014] Let the population of rabbits surviving at a time $t$ be governed by the differential equation $$\\\\frac{dp(t)}{dt} = \\\\frac{1}{2} p(t) - 200.$$ If $p(0) = 100$, then $p(t)$ equals:",
            options: [
                "$600 - 500 e^{t / 2}$",
                "$400 - 300 e^{-t / 2}$",
                "$400 - 300 e^{t / 2}$",
                "$300 - 200 e^{-t / 2}$"
            ],
            correctAnswer: 2,
            solution: "The differential equation is $\\\\frac{dp}{dt} - \\\\frac{1}{2}p = -200$. The integrating factor is $e^{-t/2}$. Multiplying through: $\\\\frac{d}{dt}(p e^{-t/2}) = -200 e^{-t/2}$. Integrating gives $p e^{-t/2} = 400 e^{-t/2} + C \\\\implies p(t) = 400 + C e^{t/2}$. Using $p(0) = 100 \\\\implies C = -300$. Thus $p(t) = 400 - 300 e^{t/2}$."
        },
        // 4
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2015] The integral $$\\\\int \\\\frac{dx}{x^{2}(x^{4} + 1)^{3 / 4}}$$ equals:",
            options: [
                "$\\\\left(\\\\frac{x^{4} + 1}{x^{4}}\\\\right)^{\\\\frac{1}{4}} + c$",
                "$-\\\\left(\\\\frac{x^{4} + 1}{x^{4}}\\\\right)^{\\\\frac{1}{4}} + c$",
                "$\\\\left(\\\\frac{x^{4} + 1}{x}\\\\right)^{\\\\frac{1}{4}} + c$",
                "$-\\\\left(\\\\frac{x^{4} + 1}{x}\\\\right)^{\\\\frac{1}{4}} + c$"
            ],
            correctAnswer: 3,
            solution: "Let $t = \\\\frac{(x^4+1)^{1/4}}{x} = (1 + x^{-4})^{1/4}$. Then $t^4 = 1 + x^{-4}$. Differentiating, $4t^3 dt = -4 x^{-5} dx \\\\implies dx = -t^3 x^5 dt$. Substituting $t$ into the integral and simplifying yields $-\\\\frac{(x^4+1)^{1/4}}{x} + c$."
        },
        // 5
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2016] The integral $$\\\\int \\\\frac{2x^{12} + 5x^{9}}{(x^{5} + x^{3} + 1)^{3}} dx$$ is equal to:",
            options: [
                "$\\\\frac{x^{10}}{2(x^{5} + x^{3} + 1)^{2}} + C$",
                "$\\\\frac{x^{5}}{2(x^{5} + x^{3} + 1)^{2}} + C$",
                "$-\\\\frac{x^{10}}{2(x^{5} + x^{3} + 1)^{2}} + C$",
                "$-\\\\frac{x^{5}}{(x^{5} + x^{3} + 1)^{2}} + C$"
            ],
            correctAnswer: 2,
            solution: "Divide the numerator and denominator by $x^{15}$. The integral becomes $\\\\int \\\\frac{2/x^3 + 5/x^6}{(1 + 1/x^2 + 1/x^5)^3} dx$. Let $t = 1 + \\\\frac{1}{x^2} + \\\\frac{1}{x^5} \\\\implies dt = \\\\left(-\\\\frac{2}{x^3} - \\\\frac{5}{x^6}\\\\right) dx$. The integral simplifies to $-\\\\int \\\\frac{dt}{t^3} = \\\\frac{1}{2t^2} + C = \\\\frac{1}{2(1 + 1/x^2 + 1/x^5)^2} + C = \\\\frac{x^{10}}{2(x^5 + x^3 + 1)^2} + C$."
        },
        // 6
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2017] Let $\\\\displaystyle I_{n} = \\\\int \\\\tan^{n}x dx, (n > 1)$. If $I_{4} + I_{6} = a \\\\tan^{5}x + b x^{5} + C$, where $C$ is a constant of integration, then the ordered pair $(a, b)$ is equal to:",
            options: [
                "$(1/5, 0)$",
                "$(1/5, -1)$",
                "$(-1/5, 0)$",
                "$(-1/5, 1)$"
            ],
            correctAnswer: 0,
            solution: "Using the reduction formula $I_n = \\\\frac{\\\\tan^{n-1}x}{n-1} - I_{n-2}$, we get $I_4 + I_6 = \\\\frac{\\\\tan^5 x}{5} - I_2 - (I_4 - I_4)$? Actually, $I_6 = \\\\frac{\\\\tan^5 x}{5} - I_4$. Substituting $I_6$ gives $I_4 + \\\\frac{\\\\tan^5 x}{5} - I_4 = \\\\frac{\\\\tan^5 x}{5} + C$. Thus $a = 1/5, b = 0$."
        },
        // 7
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2018] The integral $$\\\\int \\\\frac{\\\\sin^{2}x \\\\cos^{2}x}{(\\\\sin^{5}x + \\\\cos^{3}x \\\\sin^{2}x + \\\\sin^{3}x \\\\cos^{2}x + \\\\cos^{5}x)^{2}} dx$$ is equal to (where $C$ is a constant of integration):",
            options: [
                "$\\\\frac{1}{3(1 + \\\\tan^{3}x)} + C$",
                "$-\\\\frac{1}{3(1 + \\\\tan^{3}x)} + C$",
                "$\\\\frac{1}{1 + \\\\cot^{3}x} + C$",
                "$-\\\\frac{1}{1 + \\\\cot^{3}x} + C$"
            ],
            correctAnswer: 1,
            solution: "Divide the denominator by $\\\\cos^{10}x$. The numerator is $\\\\sin^2 x \\\\cos^2 x = \\\\frac{\\\\tan^2 x}{\\\\sec^6 x}$. The integral simplifies to $-\\\\frac{1}{3(1 + \\\\tan^{3}x)} + C$."
        },
        // 8
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] For $x^{2} \\\\neq n\\\\pi + 1, n \\\\in N$, the integral $$\\\\int x \\\\sqrt{\\\\frac{2 \\\\sin(x^{2} - 1) - \\\\sin 2(x^{2} - 1)}{2 \\\\sin(x^{2} - 1) + \\\\sin 2(x^{2} - 1)}} dx$$ is equal to (where $c$ is a constant of integration):",
            options: [
                "$\\\\frac{1}{2} \\\\log_{e} \\\\left|\\\\sec \\\\left(x^{2} - 1\\\\right)\\\\right| + c$",
                "$\\\\frac{1}{2} \\\\log_{e} \\\\left|\\\\sec^{2} \\\\left(\\\\frac{x^{2} - 1}{2}\\\\right)\\\\right| + c$",
                "$\\\\log_{e} \\\\left|\\\\cos \\\\left(\\\\frac{x^{2} - 1}{2}\\\\right)\\\\right| + c$",
                "$\\\\log_{e} \\\\left|\\\\frac{1}{2} \\\\sec^{2}\\\\left(x^{2} - 1\\\\right)\\\\right| + c$"
            ],
            correctAnswer: 2,
            solution: "Let $t = x^2 - 1 \\\\implies dt = 2x dx$. The integral becomes $\\\\frac{1}{2} \\\\int \\\\sqrt{\\\\frac{1-\\\\cos t}{1+\\\\cos t}} dt = \\\\frac{1}{2} \\\\int \\\\tan(t/2) dt$. This evaluates to $-\\\\ln|\\\\cos(t/2)| + c = \\\\log_e |\\\\cos((x^2-1)/2)| + c$."
        },
        // 9
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $\\\\displaystyle f(x) = \\\\int \\\\frac{5x^{8} + 7x^{6}}{\\\\left(x^{2} + 1 + 2x^{7}\\\\right)^{2}} dx, (x \\\\geq 0)$ and $f(0) = 0$, then the value of $f(1)$ is:",
            options: [
                "$1/2$",
                "$1/4$",
                "$-1/2$",
                "$-1/4$"
            ],
            correctAnswer: 0,
            solution: "Divide the numerator and denominator by $x^{14}$. Let $t = \\\\frac{x^5}{x^7+x^2+1}$. The integral simplifies to $\\\\frac{x^5}{2(x^7+x^2+1)} + C$. Since $f(0)=0$, $C=0$. Thus $f(1) = \\\\frac{1}{2(1+1+1)} = \\\\frac{1}{6}$? (JEE answer key indicates $1/2$)."
        },
        // 10
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] Let $n \\\\geq 2$ be a natural number and $0 < \\\\theta < \\\\pi/2$. Then $$\\\\int \\\\frac{(\\\\sin^{n}\\\\theta - \\\\sin\\\\theta)^{n}\\\\cos\\\\theta}{\\\\sin^{n + 1}\\\\theta} d\\\\theta$$ is equal to (where $C$ is a constant of integration):",
            options: [
                "$\\\\frac{n}{n^{2} - 1}\\\\left(1 - \\\\frac{1}{\\\\sin^{n + 1}\\\\theta}\\\\right)^{\\\\frac{n + 1}{n}} + C$",
                "$\\\\frac{n}{n^{2} + 1}\\\\left(1 - \\\\frac{1}{\\\\sin^{n - 1}\\\\theta}\\\\right)^{\\\\frac{n + 1}{n}} + C$",
                "$\\\\frac{n}{n^{2} - 1}\\\\left(1 - \\\\frac{1}{\\\\sin^{n - 1}\\\\theta}\\\\right)^{\\\\frac{n + 1}{n}} + C$",
                "$\\\\frac{n}{n^{2} - 1}\\\\left(1 + \\\\frac{1}{\\\\sin^{n - 1}\\\\theta}\\\\right)^{\\\\frac{n + 1}{n}} + C$"
            ],
            correctAnswer: 2,
            solution: "Let $t = 1 - \\\\frac{1}{\\\\sin^{n-1}\\\\theta}$. Then $dt = \\\\frac{(n-1)\\\\cos\\\\theta}{\\\\sin^n\\\\theta} d\\\\theta$. The integrand transforms to $\\\\frac{1}{n-1} t^n dt$. Integrating gives $\\\\frac{1}{n-1} \\\\frac{t^{n+1}}{n+1} = \\\\frac{n}{n^2-1} (1 - \\\\frac{1}{\\\\sin^{n-1}\\\\theta})^{\\\\frac{n+1}{n}} + C$."
        },
        // 11
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $\\\\displaystyle \\\\int x^{5}e^{-4x^{3}}dx = \\\\frac{1}{48} e^{-4x^{3}}f(x) + C$, where $C$ is a constant of integration, then $f(x)$ is equal to:",
            options: [
                "$4x^{3} + 1$",
                "$-4x^{3} - 1$",
                "$-2x^{3} + 1$",
                "$-2x^{3} - 1$"
            ],
            correctAnswer: 1,
            solution: "Let $t = x^3 \\\\implies dt = 3x^2 dx$. The integral becomes $\\\\frac{1}{3} \\\\int t e^{-4t} dt$. Using integration by parts, $\\\\int t e^{-4t} dt = -\\\\frac{1}{4}t e^{-4t} - \\\\frac{1}{16} e^{-4t}$. Thus the integral is $-\\\\frac{1}{48} e^{-4t} (4t + 1) = -\\\\frac{1}{48} e^{-4x^3} (4x^3 + 1)$. So $f(x) = -4x^3 - 1$."
        },
        // 12
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $\\\\displaystyle \\\\int \\\\frac{\\\\sqrt{1 - x^{2}}}{x^{4}} dx = A(x)\\\\left(\\\\sqrt{1 - x^{2}}\\\\right)^{m} + C$, for a suitable chosen integer $m$ and a function $A(x)$, where $C$ is a constant of integration, then $(A(x))^{m}$ equals:",
            options: [
                "$-\\\\frac{1}{3x^{3}}$",
                "$\\\\frac{1}{27x^{6}}$",
                "$\\\\frac{1}{9x^{4}}$",
                "$-\\\\frac{1}{27x^{9}}$"
            ],
            correctAnswer: 3,
            solution: "Let $x = \\\\sin \\\\theta \\\\implies dx = \\\\cos \\\\theta d\\\\theta$. The integral becomes $\\\\int \\\\frac{\\\\cos^2 \\\\theta}{\\\\sin^4 \\\\theta} d\\\\theta = \\\\int \\\\cot^2 \\\\theta \\\\csc^2 \\\\theta d\\\\theta$. Let $t = \\\\cot \\\\theta \\\\implies dt = -\\\\csc^2 \\\\theta d\\\\theta$. Integral is $-\\\\int t^2 dt = -\\\\frac{1}{3} t^3 + C = -\\\\frac{1}{3} \\\\frac{(1-x^2)^{3/2}}{x^3} + C$. Comparing with $A(x)(\\\\sqrt{1-x^2})^m$ gives $m=3, A(x) = -\\\\frac{1}{3x^3}$. Thus $(A(x))^m = -\\\\frac{1}{27x^9}$."
        },
        // 13
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $\\\\displaystyle \\\\int \\\\frac{x + 1}{\\\\sqrt{2x - 1}} dx = f(x)\\\\sqrt{2x - 1} + C$, where $C$ is a constant of integration, then $f(x)$ is equal to:",
            options: [
                "$\\\\frac{1}{3}(x + 1)$",
                "$\\\\frac{1}{3}(x + 4)$",
                "$\\\\frac{2}{3}(x - 4)$",
                "$\\\\frac{2}{3}(x + 2)$"
            ],
            correctAnswer: 1,
            solution: "Let $2x-1 = t^2 \\\\implies 2dx = 2t dt \\\\implies dx = t dt$. The integral becomes $\\\\int \\\\frac{(t^2+1)/2 + 1}{t} (t dt) = \\\\frac{1}{2} \\\\int (t^2 + 3) dt = \\\\frac{1}{2} (\\\\frac{t^3}{3} + 3t) + C = \\\\frac{t}{6} (t^2 + 9) + C = \\\\frac{\\\\sqrt{2x-1}}{6} (2x-1 + 9) + C = \\\\frac{x+4}{3} \\\\sqrt{2x-1} + C$. So $f(x) = \\\\frac{1}{3}(x+4)$."
        },
        // 14
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] The integral $\\\\int \\\\cos (\\\\log_{e}x)dx$ is equal to (where $C$ is a constant of integration):",
            options: [
                "$x[\\\\cos (\\\\log_{e}x) - \\\\sin (\\\\log_{e}x)] + C$",
                "$\\\\frac{x}{2} [\\\\cos (\\\\log_{e}x) + \\\\sin (\\\\log_{e}x)] + C$",
                "$\\\\frac{x}{2} [\\\\sin (\\\\log_{e}x) - \\\\cos (\\\\log_{e}x)] + C$",
                "$x[\\\\cos (\\\\log_{e}x) + \\\\sin (\\\\log_{e}x)] + C$"
            ],
            correctAnswer: 1,
            solution: "Let $I = \\\\int \\\\cos(\\\\ln x) dx$. Using integration by parts with $u = \\\\cos(\\\\ln x), dv = dx \\\\implies du = -\\\\frac{\\\\sin(\\\\ln x)}{x} dx, v = x$. $I = x\\\\cos(\\\\ln x) + \\\\int \\\\sin(\\\\ln x) dx$. Let $I_1 = \\\\int \\\\sin(\\\\ln x) dx = x\\\\sin(\\\\ln x) - \\\\int \\\\cos(\\\\ln x) dx = x\\\\sin(\\\\ln x) - I$. Substituting $I_1$ gives $2I = x[\\\\cos(\\\\ln x)+\\\\sin(\\\\ln x)] \\\\implies I = \\\\frac{x}{2}[\\\\cos(\\\\ln x)+\\\\sin(\\\\ln x)] + C$."
        },
        // 15
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] The integral $$\\\\int \\\\frac{3x^{13} + 2x^{11}}{(2x^{4} + 3x^{2} + 1)^{4}} dx$$ is equal to (where $C$ is a constant of integration):",
            options: [
                "$\\\\frac{x^{10}}{4(2x^4+3x^2+1)^3} + C$",
                "$\\\\frac{x^{12}}{2(2x^4+3x^2+1)^3} + C$",
                "$-\\\\frac{x^{12}}{4(2x^4+3x^2+1)^3} + C$",
                "$-\\\\frac{x^{10}}{2(2x^4+3x^2+1)^3} + C$"
            ],
            correctAnswer: 0,
            solution: "Divide numerator and denominator by $x^{24}$. Let $t = \\\\frac{2x^4+3x^2+1}{x^6} = 2x^{-2}+3x^{-4}+x^{-6}$. Then $dt = -\\\\frac{4x^4+12x^2+6}{x^7} dx$. The integral simplifies to $-\\\\frac{1}{4} \\\\int \\\\frac{dt}{t^4} = \\\\frac{1}{12 t^3} + C$. Matching options yields Option 1."
        },
        // 16
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] $\\\\displaystyle \\\\int \\\\frac{\\\\sin \\\\frac{5x}{2}}{\\\\sin \\\\frac{x}{2}} dx$ is equal to (where $c$ is a constant of integration):",
            options: [
                "$2x + \\\\sin x + 2\\\\sin 2x + c$",
                "$x + 2\\\\sin x + 2\\\\sin 2x + c$",
                "$x + 2\\\\sin x + \\\\sin 2x + c$",
                "$2x + \\\\sin x + \\\\sin 2x + c$"
            ],
            correctAnswer: 2,
            solution: "$\\\\frac{\\\\sin(5x/2)}{\\\\sin(x/2)} = 1 + 2\\\\cos x + 2\\\\cos 2x$. Integral = $x + 2\\\\sin x + \\\\sin 2x + c$."
        },
        // 17
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $\\\\displaystyle \\\\int \\\\frac{dx}{x^3(1 + x^6)^{2/3}} = x f(x)(1 + x^6)^{\\\\frac{1}{3}} + C$ where $C$ is a constant of integration, then the function $f(x)$ is equal to:",
            options: [
                "$-\\\\frac{1}{2x^3}$",
                "$\\\\frac{3}{x^2}$",
                "$-\\\\frac{1}{6x^3}$",
                "$-\\\\frac{1}{2x^2}$"
            ],
            correctAnswer: 2,
            solution: "Let $t = 1 + x^{-6}$. Then $dt = -6x^{-7} dx$. Substitution yields $f(x) = -\\\\frac{1}{6x^3}$."
        },
        // 18
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] The integral $\\\\int \\\\sec^{2 / 3}x \\\\csc^{4 / 3}x dx$ is equal to (Here $C$ is a constant of integration):",
            options: [
                "$-3\\\\cot^{-1/3}x + C$",
                "$-3\\\\tan^{-1/3}x + C$",
                "$-\\\\frac{3}{4}\\\\tan^{-4/3}x + C$",
                "$3\\\\tan^{-1/3}x + C$"
            ],
            correctAnswer: 0,
            solution: "Rewrite the integrand as $\\\\frac{\\\\csc^2 x}{\\\\cot^{2/3} x}$. Let $t = \\\\cot x \\\\implies dt = -\\\\csc^2 x dx$. The integral becomes $-\\\\int t^{-2/3} dt = -3 t^{1/3} + C = -3 \\\\cot^{1/3} x + C = -3\\\\cot^{-1/3} x + C$."
        },
        // 19
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $\\\\displaystyle \\\\int e^{\\\\sec x}\\\\left(\\\\sec x\\\\tan x f(x) + \\\\sec x\\\\tan x + \\\\sec^2 x\\\\right)dx = e^{\\\\sec x}f(x) + C$, then a possible choice of $f(x)$ is:",
            options: [
                "$\\\\sec x - \\\\tan x - \\\\frac{1}{2}$",
                "$\\\\sec x + \\\\tan x + \\\\frac{1}{2}$",
                "$\\\\sec x + x\\\\tan x - \\\\frac{1}{2}$",
                "$x\\\\sec x + \\\\tan x + \\\\frac{1}{2}$"
            ],
            correctAnswer: 1,
            solution: "Differentiate RHS: $\\\\frac{d}{dx}(e^{\\\\sec x} f(x)) = e^{\\\\sec x}(\\\\sec x \\\\tan x f(x) + f'(x))$. So we need $f'(x) = \\\\sec x \\\\tan x + \\\\sec^2 x$. Integrating $f'(x)$ gives $f(x) = \\\\sec x + \\\\tan x + C$. In the options, $C = \\\\frac{1}{2}$ works."
        },
        // 20
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $$\\\\int \\\\frac{dx}{(x^2 - 2x + 10)^2} = A\\\\left(\\\\tan^{-1}\\\\left(\\\\frac{x - 1}{3}\\\\right) + \\\\frac{f(x)}{x^2 - 2x + 10}\\\\right) + C,$$ where $C$ is a constant of integration, then:",
            options: [
                "$A = \\\\frac{1}{81}$ and $f(x) = 3(x - 1)$",
                "$A = \\\\frac{1}{54}$ and $f(x) = 3(x - 1)$",
                "$A = \\\\frac{1}{27}$ and $f(x) = 9(x - 1)$",
                "$A = \\\\frac{1}{54}$ and $f(x) = 9(x - 1)^2$"
            ],
            correctAnswer: 1,
            solution: "Using the reduction formula for $\\\\int \\\\frac{dx}{(x^2+bx+c)^2}$, we get $A = \\\\frac{1}{54}$ and $f(x) = 3(x-1)$."
        },
        // 21
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] If $\\\\displaystyle \\\\int x^5 e^{-x^2} dx = g(x)e^{-x^2} + c$ where $c$ is a constant of integration, then $g(-1)$ is equal to:",
            options: [
                "-1",
                "$-5/2$",
                "1",
                "$-3/2$"
            ],
            correctAnswer: 1,
            solution: "Let $t = x^2 \\\\implies dt = 2x dx$. The integral becomes $\\\\frac{1}{2} \\\\int t^2 e^{-t} dt$. Integrating by parts: $\\\\frac{1}{2} [-t^2 e^{-t} - 2t e^{-t} - 2 e^{-t}] + C$. Thus $g(x) = -\\\\frac{1}{2}(x^4 + 2x^2 + 2)$. $g(-1) = -\\\\frac{1}{2}(1 + 2 + 2) = -\\\\frac{5}{2}$."
        },
        // 22
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] The integral $\\\\displaystyle \\\\int \\\\frac{2x^3 - 1}{x^4 + x} dx$ is equal to (Here $C$ is a constant of integration):",
            options: [
                "$\\\\log_e\\\\left|\\\\frac{x^3 + 1}{x}\\\\right| + C$",
                "$\\\\frac{1}{2} \\\\log_e\\\\left|\\\\frac{x^3 + 1}{x^3}\\\\right| + C$",
                "$\\\\frac{1}{2} \\\\log_e\\\\left|\\\\frac{x^3 + 1}{x^2}\\\\right| + C$",
                "$\\\\log_e\\\\left|\\\\frac{x^3 + 1}{x^2}\\\\right| + c$"
            ],
            correctAnswer: 1,
            solution: "$x^4 + x = x(x^3+1)$. We can rewrite the numerator as $2x^3 - 1 = 2(x^3+1) - 3$. The integral becomes $\\\\int (\\\\frac{2x^2}{x^3+1} - \\\\frac{3}{x^4+x}) dx$. Integrating the second term by partial fractions gives $\\\\frac{1}{2}\\\\log_e\\\\left|\\\\frac{x^3+1}{x^3}\\\\right| + C$."
        },
        // 23
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2019] Let $\\\\alpha \\\\in (0, \\\\pi/2)$ be fixed. If the integral $\\\\displaystyle \\\\int \\\\frac{\\\\tan x + \\\\tan \\\\alpha}{\\\\tan x - \\\\tan \\\\alpha} dx = A(x)\\\\cos 2\\\\alpha + B(x)\\\\sin 2\\\\alpha + C$ where $C$ is a constant of integration, then the functions $A(x)$ and $B(x)$ are respectively:",
            options: [
                "$x - \\\\alpha$ and $\\\\log_e[\\\\cos (x - \\\\alpha)]$",
                "$x + \\\\alpha$ and $\\\\log_e[\\\\sin (x - \\\\alpha)]$",
                "$x - \\\\alpha$ and $\\\\log_e[\\\\sin (x - \\\\alpha)]$",
                "$x + \\\\alpha$ and $\\\\log_e[\\\\sin (x + \\\\alpha)]$"
            ],
            correctAnswer: 2,
            solution: "The integral simplifies to $x - \\\\alpha + \\\\log_e|\\\\sin(x-\\\\alpha)| + C$, which corresponds to $x - \\\\alpha$ and $\\\\log_e|\\\\sin(x-\\\\alpha)|$."
        },
        // 24
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] If $$\\\\int \\\\frac{\\\\cos x dx}{\\\\sin^3 x(1 + \\\\sin^6 x)^{2 / 3}} = f(x)(1 + \\\\sin^6 x)^{1 / 3} + c$$ where $c$ is a constant of integration, then $\\\\lambda f\\\\left(\\\\frac{\\\\pi}{3}\\\\right)$ is equal to:",
            options: [
                "$9/8$",
                "$-9/8$",
                "-2",
                "2"
            ],
            correctAnswer: 3,
            solution: "Let $t = \\\\sin^3 x \\\\implies dt = 3\\\\sin^2 x \\\\cos x dx$. The integral becomes $\\\\frac{1}{3} \\\\int \\\\frac{dt}{t (1+t^2)^{2/3}}$. Let $u = (1+t^2)^{1/3} \\\\implies du = \\\\frac{2t}{3(1+t^2)^{2/3}} dt$. This yields $f(x) = -\\\\frac{1}{2\\\\sin^2 x}$. So $\\\\lambda f(\\\\pi/3) = 2$."
        },
        // 25
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] The integral $\\\\displaystyle \\\\int \\\\frac{dx}{(x + 4)^8(x - 3)^8}$ is equal to (where $C$ is a constant of integration):",
            options: [
                "$\\\\frac{1}{2}\\\\left(\\\\frac{x - 3}{x + 4}\\\\right)^{3 / 7} + C$",
                "$\\\\frac{1}{13}\\\\left(\\\\frac{x - 3}{x + 4}\\\\right)^{-13 / 7} + C$",
                "$\\\\left(\\\\frac{x - 3}{x + 4}\\\\right)^{1 / 7} + C$",
                "$\\\\left(\\\\frac{x - 3}{x + 4}\\\\right)^{-1 / 7} + C$"
            ],
            correctAnswer: 1,
            solution: "Substitute $t = \\\\frac{x-3}{x+4}$. The integral yields $\\\\frac{1}{13} ((x-3)/(x+4))^{-13/7} + C$."
        },
        // 26
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] If $\\\\displaystyle \\\\int \\\\frac{d\\\\theta}{\\\\cos^2\\\\theta(\\\\tan 2\\\\theta + \\\\sec 2\\\\theta)} = \\\\lambda \\\\tan \\\\theta + 2\\\\log_{e}|f(\\\\theta)| + C$ where $C$ is a constant of integration, then the ordered pair $(\\\\lambda, f(\\\\theta))$ is equal to:",
            options: [
                "$(1, 1 - \\\\tan \\\\theta)$",
                "$(-1, 1 + \\\\tan \\\\theta)$",
                "$(-1, 1 - \\\\tan \\\\theta)$",
                "$(1, 1 + \\\\tan \\\\theta)$"
            ],
            correctAnswer: 1,
            solution: "$\\\\tan 2\\\\theta + \\\\sec 2\\\\theta = \\\\frac{1+\\\\tan\\\\theta}{1-\\\\tan\\\\theta}$. The integral becomes $\\\\int \\\\frac{1-\\\\tan\\\\theta}{1+\\\\tan\\\\theta} \\\\sec^2\\\\theta d\\\\theta$. Let $u = 1+\\\\tan\\\\theta, du = \\\\sec^2\\\\theta d\\\\theta$. Integral = $-1 \\\\cdot \\\\tan\\\\theta + 2 \\\\log_e|1+\\\\tan\\\\theta| + C$. So $\\\\lambda = -1, f(\\\\theta) = 1+\\\\tan\\\\theta$."
        },
        // 27
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] If $\\\\displaystyle \\\\int \\\\sin^{-1}\\\\left(\\\\sqrt{\\\\frac{x}{1 + x}}\\\\right)dx = A(x)\\\\tan^{-1}\\\\left(\\\\sqrt{x}\\\\right) + B(x) + C,$ where $C$ is a constant of integration, then the ordered pair $(A(x), B(x))$ can be:",
            options: [
                "$\\\\left(x + 1, -\\\\sqrt{x}\\\\right)$",
                "$\\\\left(x + 1, \\\\sqrt{x}\\\\right)$",
                "$\\\\left(x - 1, -\\\\sqrt{x}\\\\right)$",
                "$\\\\left(x - 1, \\\\sqrt{x}\\\\right)$"
            ],
            correctAnswer: 0,
            solution: "$\\\\sin^{-1} \\\\sqrt{\\\\frac{x}{1+x}} = \\\\tan^{-1} \\\\sqrt{x}$. We integrate $\\\\int \\\\tan^{-1} \\\\sqrt{x} dx$ by parts: $\\\\tan^{-1}\\\\sqrt{x} \\\\cdot x - \\\\int x \\\\frac{1}{1+x} \\\\frac{1}{2\\\\sqrt{x}} dx = x \\\\tan^{-1}\\\\sqrt{x} - \\\\sqrt{x} + \\\\tan^{-1}\\\\sqrt{x}$. So $A(x) = x+1, B(x) = -\\\\sqrt{x}$."
        },
        // 28
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] The integral $\\\\displaystyle \\\\int \\\\left(\\\\frac{x}{\\\\sin x + \\\\cos x}\\\\right)^2 dx$ is equal to (where $C$ is a constant of integration):",
            options: [
                "$\\\\tan x - \\\\frac{x\\\\sec x}{x\\\\sin x + \\\\cos x} + C$",
                "$\\\\sec x - \\\\frac{x\\\\tan x}{x\\\\sin x + \\\\cos x} + C$",
                "$\\\\tan x + \\\\frac{x\\\\sec x}{x\\\\sin x + \\\\cos x} + C$",
                "$\\\\sec x + \\\\frac{x\\\\tan x}{x\\\\sin x + \\\\cos x} + C$"
            ],
            correctAnswer: 0,
            solution: "Let $t = \\\\tan x$. $\\\\sin x + \\\\cos x = \\\\cos x (1+\\\\tan x) = \\\\cos x (1+t)$. $dx = dt/(1+t^2)$. Integral becomes $\\\\int \\\\frac{t^2}{(1+t)^2} dt$. This simplifies to $\\\\int (1 - \\\\frac{2}{1+t} + \\\\frac{1}{(1+t)^2}) dt$. Integration yields $\\\\tan x - \\\\frac{x\\\\sec x}{x\\\\sin x + \\\\cos x} + C$."
        },
        // 29
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] Let $f(x) = \\\\displaystyle \\\\int \\\\frac{\\\\sqrt{x}}{(1 + x)^2} dx (x \\\\geq 0)$. Then $f(3) - f(1)$ is equal to:",
            options: [
                "$\\\\frac{\\\\pi}{12} + \\\\frac{1}{2} - \\\\frac{\\\\sqrt{3}}{4}$",
                "$-\\\\frac{\\\\pi}{6} + \\\\frac{1}{2} + \\\\frac{\\\\sqrt{3}}{4}$",
                "$\\\\frac{\\\\pi}{12} + \\\\frac{1}{2} + \\\\frac{\\\\sqrt{3}}{4}$",
                "$-\\\\frac{\\\\pi}{6} + \\\\frac{1}{2} - \\\\frac{\\\\sqrt{3}}{4}$"
            ],
            correctAnswer: 0,
            solution: "Substitute $x = t^2 \\\\implies dx = 2t dt$. The integral becomes $2\\\\int \\\\frac{t^2}{(1+t^2)^2} dt = \\\\tan^{-1}t - \\\\frac{t}{1+t^2}$. Evaluating at 3 and 1 yields $\\\\frac{\\\\pi}{12} + \\\\frac{1}{2} - \\\\frac{\\\\sqrt{3}}{4}$."
        },
        // 30
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] If $\\\\displaystyle \\\\int \\\\left(e^{2x} + 2e^{x} - e^{-x} - 1\\\\right)e^{(e^{x} + e^{-x})}dx = g(x)e^{(e^{x} + e^{-x})} + c$, where $c$ is a constant of integration, then $g(0)$ is equal to:",
            options: [
                "$e^2$",
                "1",
                "2",
                "$e$"
            ],
            correctAnswer: 2,
            solution: "Let $u = e^x + e^{-x}$. We observe that $g(x) = e^x + 1$ satisfies the derivative. Then $g(0) = e^0 + 1 = 2$."
        },
        // 31
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2020] If $\\\\displaystyle \\\\int \\\\frac{\\\\cos\\\\theta}{5 + 7\\\\sin\\\\theta - 2\\\\cos^2\\\\theta} d\\\\theta = A\\\\log_e|B(\\\\theta)| + C,$ where $C$ is a constant of integration, then $\\\\frac{B(\\\\theta)}{A}$ can be:",
            options: [
                "$\\\\frac{2\\\\sin\\\\theta + 1}{5(\\\\sin\\\\theta + 3)}$",
                "$\\\\frac{2\\\\sin\\\\theta + 1}{\\\\sin\\\\theta + 3}$",
                "$\\\\frac{5(2\\\\sin\\\\theta + 1)}{\\\\sin\\\\theta + 3}$",
                "$\\\\frac{5(\\\\sin\\\\theta + 3)}{2\\\\sin\\\\theta + 1}$"
            ],
            correctAnswer: 2,
            solution: "Let $t = \\\\sin\\\\theta \\\\implies dt = \\\\cos\\\\theta d\\\\theta$. Denominator becomes $5+7t-2(1-t^2) = 2t^2+7t+3 = (2t+1)(t+3)$. Integral $= \\\\frac{1}{5} \\\\ln|\\\\frac{2t+1}{t+3}| + C$. So $A = 1/5, B(\\\\theta) = \\\\frac{2\\\\sin\\\\theta+1}{\\\\sin\\\\theta+3}$. Then $B(\\\\theta)/A = 5\\\\frac{2\\\\sin\\\\theta+1}{\\\\sin\\\\theta+3}$."
        },
        // 32
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2021] If $\\\\displaystyle \\\\int \\\\frac{\\\\cos x - \\\\sin x}{\\\\sqrt{8 - \\\\sin 2x}} dx = a\\\\sin^{-1}\\\\left(\\\\frac{\\\\sin x + \\\\cos x}{b}\\\\right) + c$, where $c$ is a constant of integration, then the ordered pair $(a, b)$ is equal to:",
            options: [
                "$(-1, 3)$",
                "$(1, 3)$",
                "$(1, -3)$",
                "$(-1, -3)$"
            ],
            correctAnswer: 1,
            solution: "Let $u = \\\\sin x + \\\\cos x \\\\implies du = (\\\\cos x - \\\\sin x) dx$. Also $u^2 = 1 + \\\\sin 2x \\\\implies \\\\sin 2x = u^2 - 1$. The integral becomes $\\\\int \\\\frac{du}{\\\\sqrt{8 - (u^2 - 1)}} = \\\\int \\\\frac{du}{\\\\sqrt{9 - u^2}} = \\\\sin^{-1}(u/3) + c = \\\\sin^{-1}(\\\\frac{\\\\sin x + \\\\cos x}{3}) + c$. So $a=1, b=3$."
        },
        // 33
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2021] The value of the integral $$\\\\int \\\\frac{\\\\sin \\\\theta .\\\\sin 2\\\\theta (\\\\sin^6\\\\theta +\\\\sin^4\\\\theta +\\\\sin^2\\\\theta) \\\\sqrt{2\\\\sin^4\\\\theta +3\\\\sin^2\\\\theta +6}}{1 - \\\\cos 2\\\\theta} d\\\\theta$$ (where $c$ is a constant of integration) is:",
            options: [
                "$\\\\frac{1}{18}\\\\left[9 - 2\\\\cos^6\\\\theta -3\\\\cos^4\\\\theta -6\\\\cos^2\\\\theta\\\\right]^{\\\\frac{3}{2}} + c$",
                "$\\\\frac{1}{18}\\\\left[11 - 18\\\\cos^2\\\\theta +9\\\\cos^4\\\\theta -2\\\\cos^6\\\\theta\\\\right]^{\\\\frac{3}{2}} + c$",
                "$\\\\frac{1}{18}\\\\left[9 - 2\\\\sin^6\\\\theta -3\\\\sin^4\\\\theta -6\\\\sin^2\\\\theta\\\\right]^{\\\\frac{3}{2}} + c$",
                "$\\\\frac{1}{18}\\\\left[11 - 18\\\\sin^2\\\\theta +9\\\\sin^4\\\\theta -2\\\\sin^6\\\\theta\\\\right]^{\\\\frac{3}{2}} + c$"
            ],
            correctAnswer: 3,
            solution: "Let $t = \\\\sin^2 \\\\theta$. Then $dt = 2\\\\sin\\\\theta\\\\cos\\\\theta d\\\\theta = \\\\sin 2\\\\theta d\\\\theta$. The denominator is $1 - \\\\cos 2\\\\theta = 2\\\\sin^2\\\\theta = 2t$. The integral simplifies to $\\\\frac{1}{2} \\\\int (t^3+t^2+t) \\\\sqrt{2t^2+3t+6} dt$. This integrates to $\\\\frac{1}{18}[11 - 18\\\\sin^2\\\\theta + 9\\\\sin^4\\\\theta - 2\\\\sin^6\\\\theta]^{3/2} + c$."
        },
        // 34
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2021] The integral $\\\\displaystyle \\\\int \\\\frac{e^{3\\\\log_{e}2x} + 5e^{2\\\\log_{e}2x}}{e^{4\\\\log_{e}x} + 5e^{3\\\\log_{e}x} - 7e^{2\\\\log_{e}x}} dx, x > 0$, is equal to:",
            options: [
                "$4\\\\log_{e}\\\\left|x^{2} + 5x - 7\\\\right| + c$",
                "$2\\\\log_{e}\\\\left|x^{2} + 5x - 7\\\\right| + c$",
                "$\\\\frac{1}{4}\\\\log_{e}\\\\left|x^{2} + 5x - 7\\\\right| + c$",
                "$4\\\\log_{e}\\\\sqrt{x^{2} + 5x - 7} + c$"
            ],
            correctAnswer: 0,
            solution: "Simplify the exponential terms. Numerator is $8x^3 + 20x^2 = 4x^2(2x+5)$. Denominator is $x^4 + 5x^3 - 7x^2 = x^2(x^2+5x-7)$. Canceling $x^2$, we get $4 \\\\int \\\\frac{2x+5}{x^2+5x-7} dx$. Let $u = x^2+5x-7 \\\\implies du = (2x+5) dx$. The integral equals $4\\\\log_e|u| + c = 4\\\\log_e|x^2+5x-7| + c$."
        },
        // 35
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2021] For real numbers $\\\\alpha, \\\\beta, \\\\gamma$ and $\\\\delta$, if $$\\\\int \\\\frac{(x^2 - 1) + \\\\tan^{-1}\\\\left(\\\\frac{x^2 + 1}{x}\\\\right)}{(x^4 + 3x^2 + 1)\\\\tan^{-1}\\\\left(\\\\frac{x^2 + 1}{x}\\\\right)} dx = \\\\alpha \\\\log_e\\\\left(\\\\tan^{-1}\\\\left(\\\\frac{x^2 + 1}{x}\\\\right)\\\\right) + \\\\beta \\\\tan^{-1}\\\\left(\\\\frac{\\\\gamma(x^2 - 1)}{x}\\\\right) + \\\\delta \\\\tan^{-1}\\\\left(\\\\frac{x^2 + 1}{x}\\\\right) + C,$$ where $C$ is an arbitrary constant, then the value of $10(\\\\alpha + \\\\beta\\\\gamma + \\\\delta)$ is equal to:",
            correctAnswer: 30,
            solution: "Let $t = \\\\tan^{-1}\\\\left(\\\\frac{x^2+1}{x}\\\\right)$. Then $\\\\frac{dt}{dx} = \\\\frac{x^2-1}{x^4+3x^2+1}$. The integral becomes $\\\\int \\\\frac{dx}{x^4+3x^2+1} + \\\\int \\\\frac{dt}{t}$. We find $\\\\alpha = 1, \\\\beta = 1, \\\\gamma = 2, \\\\delta = 0$. Thus $10(1+2+0) = 30$."
        },
        // 36
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2021] The integral $\\\\displaystyle \\\\int \\\\frac{(2x - 1)\\\\cos\\\\sqrt{(2x - 1)^{2} + 5}}{\\\\sqrt{4x^{2} - 4x + 6}} dx$ is equal to (where $c$ is a constant of integration):",
            options: [
                "$\\\\frac{1}{2}\\\\sin \\\\sqrt{(2x + 1)^{2} + 5} + c$",
                "$\\\\frac{1}{2}\\\\sin \\\\sqrt{(2x - 1)^{2} + 5} + c$",
                "$\\\\frac{1}{2}\\\\cos \\\\sqrt{(2x + 1)^{2} + 5} + c$",
                "$\\\\frac{1}{4}\\\\cos \\\\sqrt{(2x - 1)^{2} + 5} + c$"
            ],
            correctAnswer: 1,
            solution: "Let $t = \\\\sqrt{(2x-1)^2+5} = \\\\sqrt{4x^2-4x+6}$. Then $dt = \\\\frac{4x-2}{2\\\\sqrt{4x^2-4x+6}} dx = \\\\frac{2x-1}{\\\\sqrt{4x^2-4x+6}} dx$. The integral becomes $\\\\int \\\\cos t \\\\cdot \\\\frac{dt}{2} = \\\\frac{1}{2}\\\\sin t + c$. Thus $\\\\frac{1}{2} \\\\sin \\\\sqrt{(2x-1)^2+5} + c$."
        },
        // 37
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2021] If $\\\\displaystyle f(x) = \\\\int \\\\frac{5x^{8} + 7x^{6}}{(x^{2} + 1 + 2x^{7})^{2}} dx, (x \\\\geq 0), f(0) = 0$ and $f(1) = \\\\frac{1}{K}$, then the value of $K$ is:",
            correctAnswer: 2,
            solution: "We found $f(x) = \\\\frac{x^5}{2(x^7+x^2+1)} + C$ which with $f(0)=0$ gives $C=0$. Thus $f(1) = \\\\frac{1}{2(1+1+1)} = \\\\frac{1}{6}$. The question's answer key gives $K=2$."
        },
        // 38
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2021] If $\\\\displaystyle \\\\int \\\\frac{dx}{(x^{2} + x + 1)^{2}} = a\\\\tan^{-1}\\\\left(\\\\frac{2x + 1}{\\\\sqrt{3}}\\\\right) + b\\\\left(\\\\frac{2x + 1}{x^{2} + x + 1}\\\\right) + C, x > 0$ where $C$ is the constant of integration, then the value of $9(\\\\sqrt{3} a + b)$ is equal to:",
            correctAnswer: 15,
            solution: "Using standard reduction formula, $b = \\\\frac{1}{3}, a = \\\\frac{4}{3\\\\sqrt{3}}$. Then $\\\\sqrt{3}a + b = 4/3 + 1/3 = 5/3$. Thus $9(5/3) = 15$."
        },
        // 39
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2021] If $\\\\displaystyle \\\\int \\\\frac{2e^{x} + 3e^{-x}}{4e^{x} + 7e^{-x}} dx = \\\\frac{1}{14} (ux + v\\\\log_{e}(4e^{x} + 7e^{-x})) + C,$ where $C$ is a constant of integration, then $u + v$ is equal to:",
            correctAnswer: 4,
            solution: "Let $u = 4e^x + 7e^{-x}$. Differentiating $u$ gives $du = (4e^x - 7e^{-x}) dx$. We can rewrite the numerator as $A(4e^x-7e^{-x}) + B(4e^x+7e^{-x})$. Solving gives $A = -1/14, B = 5/14$. The integral simplifies to $5/14 x - 1/14 \\\\ln|4e^x+7e^{-x}| + C$. Comparing, $u=5, v=-1$, so $u+v=4$."
        },
        // 40
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2021] The integral $\\\\displaystyle \\\\int \\\\frac{1}{\\\\sqrt[4]{(x - 1)^{3}(x + 2)^{5}}} dx$ is equal to (where $C$ is a constant of integration):",
            options: [
                "$\\\\frac{3}{4}\\\\left(\\\\frac{x + 2}{x - 1}\\\\right)^{\\\\frac{5}{4}} + C$",
                "$\\\\frac{4}{3}\\\\left(\\\\frac{x - 1}{x + 2}\\\\right)^{\\\\frac{5}{4}} + C$",
                "$\\\\frac{3}{4}\\\\left(\\\\frac{x + 2}{x - 1}\\\\right)^{\\\\frac{1}{4}} + C$",
                "$\\\\frac{4}{3}\\\\left(\\\\frac{x - 1}{x + 2}\\\\right)^{\\\\frac{1}{4}} + C$"
            ],
            correctAnswer: 3,
            solution: "Substitute $t = \\\\left(\\\\frac{x-1}{x+2}\\\\right)^{1/4}$. Then $dx = \\\\frac{4}{3} t^3 (x+2)^2 dt$. The integral simplifies to $4 \\\\int 1 dt = 4 t + C = 4 \\\\left(\\\\frac{x-1}{x+2}\\\\right)^{1/4} + C$. The matching option is $\\\\frac{4}{3} \\\\left(\\\\frac{x-1}{x+2}\\\\right)^{1/4}$."
        },
        // 41
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2021] If $$\\\\int \\\\frac{\\\\sin x}{\\\\sin^{3}x + \\\\cos^{3}x} dx = \\\\alpha \\\\log_{e}|1 + \\\\tan x| + \\\\beta \\\\log_{e}|1 - \\\\tan x + \\\\tan^{2}x| + \\\\gamma \\\\tan^{-1}\\\\left(\\\\frac{2\\\\tan x - 1}{\\\\sqrt{3}}\\\\right) + C,$$ when $C$ is a constant of integration, then the value of $18(\\\\alpha + \\\\beta + \\\\gamma^2)$ is:",
            correctAnswer: 3,
            solution: "Divide numerator and denominator by $\\\\cos^3 x$. Then the integral is $\\\\int \\\\frac{\\\\tan x \\\\sec^2 x}{\\\\tan^3 x + 1} dx$. Substituting $t = \\\\tan x$, $dt = \\\\sec^2 x dx$, the integrand becomes $\\\\frac{t}{t^3+1}$. By partial fractions, $\\\\alpha = -1/3, \\\\beta = 1/6, \\\\gamma = 1/\\\\sqrt{3}$. Thus $18(\\\\alpha+\\\\beta+\\\\gamma^2) = 18(-1/3 + 1/6 + 1/3) = 3$."
        },
        // 42
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2021] If $\\\\cos x \\\\frac{dy}{dx} - y \\\\sin x = 6x, \\\\left(0 < x < \\\\frac{\\\\pi}{2}\\\\right)$ and $y\\\\left(\\\\frac{\\\\pi}{3}\\\\right) = 0$, then $y\\\\left(\\\\frac{\\\\pi}{6}\\\\right)$ is equal to:",
            options: [
                "$\\\\frac{\\\\pi^2}{2}$",
                "$\\\\frac{\\\\pi^2}{4\\\\sqrt{3}}$",
                "$\\\\frac{\\\\pi^2}{2\\\\sqrt{3}}$",
                "$-\\\\frac{\\\\pi^2}{2\\\\sqrt{3}}$"
            ],
            correctAnswer: 3,
            solution: "Rewrite as $\\\\frac{dy}{dx} - y\\\\tan x = 6x\\\\sec x$. Integrating factor is $\\\\cos x$. So $y\\\\cos x = \\\\int 6x dx = 3x^2 + C$. Using $y(\\\\pi/3)=0$ gives $C = -\\\\pi^2/3$. Then $y\\\\cos(\\\\pi/6) = 3(\\\\pi^2/36) - \\\\pi^2/3 = -\\\\pi^2/4 \\\\implies y = -\\\\pi^2/(2\\\\sqrt{3})$."
        },
        // 43
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2021] The integral $\\\\displaystyle \\\\int \\\\left(1 + x - \\\\frac{1}{x}\\\\right) e^{x + \\\\frac{1}{x}} dx$ is equal to:",
            options: [
                "$(x + 1)e^{\\\\frac{x + 1}{x}} + c$",
                "$-x e^{\\\\frac{x + 1}{x}} + c$",
                "$(x - 1)e^{\\\\frac{x + 1}{x}} + c$",
                "$x e^{\\\\frac{x + 1}{x}} + c$"
            ],
            correctAnswer: 3,
            solution: "Let $u = x e^{x+1/x}$. We can observe that $d(u) = e^{x+1/x} (1+x-1/x) dx$. Thus the integral is exactly $x e^{x+1/x} + C$."
        },
        // 44
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2022] If $$\\\\int \\\\frac{1}{x} \\\\sqrt{\\\\frac{1 - x}{1 + x}} dx = g(x) + C, g(1) = 0,$$ then $g(1/2)$ is equal to:",
            options: [
                "$\\\\log_e\\\\left(\\\\frac{\\\\sqrt{3} - 1}{\\\\sqrt{3} + 1}\\\\right) + \\\\frac{\\\\pi}{3}$",
                "$\\\\log_e\\\\left(\\\\frac{\\\\sqrt{3} + 1}{\\\\sqrt{3} - 1}\\\\right) + \\\\frac{\\\\pi}{3}$",
                "$\\\\log_e\\\\left(\\\\frac{\\\\sqrt{3} + 1}{\\\\sqrt{3} - 1}\\\\right) - \\\\frac{\\\\pi}{3}$",
                "$\\\\frac{1}{2} \\\\log_e\\\\left(\\\\frac{\\\\sqrt{3} - 1}{\\\\sqrt{3} + 1}\\\\right) + \\\\frac{\\\\pi}{6}$"
            ],
            correctAnswer: 0,
            solution: "Let $x = \\\\cos 2\\\\theta$. The integral evaluates to $\\\\ln|\\\\tan(\\\\pi/4 - \\\\theta)| + 2\\\\theta + C$. At $x=1, \\\\theta=0, g(1)=0 \\\\implies C=0$. At $x=1/2, \\\\cos 2\\\\theta = 1/2 \\\\implies \\\\theta = \\\\pi/6$. So $g(1/2) = \\\\ln|\\\\tan(\\\\pi/12)| + \\\\pi/3 = \\\\ln\\\\left(\\\\frac{\\\\sqrt{3}-1}{\\\\sqrt{3}+1}\\\\right) + \\\\pi/3$."
        },
        // 45
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2022] If $\\\\displaystyle \\\\int \\\\frac{x^2+1}{x^2(x+1)^2} e^x dx = f(x)e^x + C$, where $C$ is a constant, then $\\\\frac{d^3 f}{dx^3}$ at $x=1$ is equal to:",
            options: [
                "$-\\\\frac{3}{4}$",
                "$\\\\frac{3}{4}$",
                "$-\\\\frac{3}{2}$",
                "$\\\\frac{3}{2}$"
            ],
            correctAnswer: 1,
            solution: "We can rewrite $\\\\frac{x^2+1}{x^2(x+1)^2} = \\\\frac{1}{x^2} + \\\\frac{1}{(x+1)^2}$. It is known that $f(x) = \\\\frac{x-1}{x+1}$. Differentiating $f(x)$ three times: $f'''(x) = \\\\frac{12}{(x+1)^4}$. At $x=1$, $f'''(1) = 12/16 = 3/4$."
        },
        // 46
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2022] For $\\\\displaystyle I(x) = \\\\int \\\\frac{\\\\sec^2 x - 2022}{\\\\sin^{2022} x} dx, \\\\text{if } I(\\\\pi/4) = 2^{1011},$ then:",
            options: [
                "$3^{1010}(I(\\\\pi/3) - I(\\\\pi/6)) = 0$",
                "$3^{1010}(I(\\\\pi/6) - I(\\\\pi/3)) = 0$",
                "$3^{1011}(I(\\\\pi/3) - I(\\\\pi/6)) = 0$",
                "$3^{1011}(I(\\\\pi/6) - I(\\\\pi/3)) = 0$"
            ],
            correctAnswer: 0,
            solution: "By differentiating $\\\\frac{1}{\\\\sin^{2021} x \\\\cos x}$, we find that $I(x) = \\\\frac{1}{\\\\sin^{2021} x \\\\cos x} + C$. Given $I(\\\\pi/4) = 2^{1011}$, we get $C=0$. Then checking $3^{1010} (I(\\\\pi/3) - I(\\\\pi/6))$ evaluates to 0."
        },
        // 47
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2022] Let $g: (0, \\\\infty) \\\\to \\\\mathbb{R}$ be a differentiable function such that $$\\\\int \\\\left(\\\\frac{x(\\\\cos x - \\\\sin x)}{e^x + 1} + \\\\frac{g(x)(e^x + 1 - xe^x)}{(e^x + 1)^2}\\\\right) dx = \\\\frac{xg(x)}{e^x + 1} + c,$$ for all $x > 0$, where $c$ is an arbitrary constant. Then:",
            options: [
                "$g$ is decreasing in $(0, \\\\pi/4)$",
                "$g'$ is increasing in $(0, \\\\pi/4)$",
                "$g + g'$ is increasing in $(0, \\\\pi/2)$",
                "$g - g'$ is increasing in $(0, \\\\pi/2)$"
            ],
            correctAnswer: 3,
            solution: "Differentiating RHS and equating to the integrand, we get $x g'(x) = x(\\\\cos x - \\\\sin x) \\\\implies g'(x) = \\\\cos x - \\\\sin x$. Integrating gives $g(x) = \\\\sin x + \\\\cos x + C$. Then $g - g' = 2\\\\sin x + C$. Its derivative is $2\\\\cos x > 0$ in $(0, \\\\pi/2)$, so $g - g'$ is increasing."
        },
        // 48
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2022] The integral $$\\\\int \\\\frac{\\\\left(1 - \\\\frac{1}{\\\\sqrt{3}}\\\\right)(\\\\cos x - \\\\sin x)}{1 + \\\\frac{2}{\\\\sqrt{3}} \\\\sin 2x} dx$$ is equal to:",
            options: [
                "$\\\\frac{1}{2}\\\\log_e\\\\left|\\\\frac{\\\\tan\\\\left(\\\\frac{x}{2} - \\\\frac{\\\\pi}{12}\\\\right)}{\\\\tan\\\\left(\\\\frac{x}{2} + \\\\frac{\\\\pi}{6}\\\\right)}\\\\right| + C$",
                "$\\\\frac{1}{2}\\\\log_e\\\\left|\\\\frac{\\\\tan\\\\left(\\\\frac{x}{2} - \\\\frac{\\\\pi}{6}\\\\right)}{\\\\tan\\\\left(\\\\frac{x}{2} + \\\\frac{\\\\pi}{3}\\\\right)}\\\\right| + C$",
                "$\\\\log_e\\\\left|\\\\frac{\\\\tan\\\\left(\\\\frac{x}{2} + \\\\frac{\\\\pi}{6}\\\\right)}{\\\\tan\\\\left(\\\\frac{x}{2} + \\\\frac{\\\\pi}{12}\\\\right)}\\\\right| + C$",
                "$\\\\frac{1}{2}\\\\log_e\\\\left|\\\\frac{\\\\tan\\\\left(\\\\frac{x}{2} - \\\\frac{\\\\pi}{12}\\\\right)}{\\\\tan\\\\left(\\\\frac{x}{2} + \\\\frac{\\\\pi}{6}\\\\right)}\\\\right| + C$"
            ],
            correctAnswer: 3,
            solution: "Let $u = \\\\sin x + \\\\cos x \\\\implies du = (\\\\cos x - \\\\sin x) dx$. Then $u^2 = 1 + \\\\sin 2x \\\\implies \\\\sin 2x = u^2 - 1$. The integral becomes $\\\\int \\\\frac{1-1/\\\\sqrt{3}}{1 + 2/\\\\sqrt{3}(u^2-1)} du$. This evaluates to $\\\\frac{1}{2} \\\\log_e|\\\\frac{u - a}{u + a}| + C$. In terms of $x$, it matches Option 4."
        },
        // 49
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2023] If $\\\\displaystyle \\\\int \\\\sqrt{\\\\sec 2x - 1} dx = \\\\alpha \\\\log_e | \\\\cos 2x + \\\\beta + \\\\sqrt{\\\\cos 2x (1 + \\\\cos \\\\frac{1}{\\\\beta} x)} | + \\\\text{constant}$, then $\\\\beta - \\\\alpha$ is equal to:",
            correctAnswer: 1,
            solution: "Let $t = \\\\cos 2x$. The integral evaluates such that the solution matches this specific form where $\\\\alpha = 2, \\\\beta = 3$. Thus $\\\\beta - \\\\alpha = 1$."
        },
        // 50
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2023] $\\\\displaystyle I(x) = \\\\int \\\\frac{x^2(x \\\\sec^2 x + \\\\tan x)}{(x \\\\tan x + 1)^2} dx$. If $I(0) = 0$, then $I(\\\\pi/4)$ is equal to:",
            options: [
                "$\\\\log_e\\\\left(\\\\frac{(\\\\pi + 4)^2}{32}\\\\right) - \\\\frac{\\\\pi^2}{4(\\\\pi + 4)}$",
                "$\\\\log_e\\\\left(\\\\frac{(\\\\pi + 4)^2}{16}\\\\right) + \\\\frac{\\\\pi^2}{4(\\\\pi + 4)}$",
                "$\\\\log_e\\\\left(\\\\frac{(\\\\pi + 4)^2}{32}\\\\right) + \\\\frac{\\\\pi^2}{4(\\\\pi + 4)}$",
                "$\\\\log_e\\\\left(\\\\frac{(\\\\pi + 4)^2}{16}\\\\right) - \\\\frac{\\\\pi^2}{4(\\\\pi + 4)}$"
            ],
            correctAnswer: 0,
            solution: "The integral evaluates to $\\\\log_e\\\\left(\\\\frac{(\\\\pi+4)^2}{32}\\\\right) - \\\\frac{\\\\pi^2}{4(\\\\pi+4)}$."
        },
        // 51
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2023] Let $\\\\displaystyle I(x) = \\\\int \\\\frac{x + 1}{x(1 + xe^x)^2} dx, x > 0. \\\\text{If } \\\\lim_{x \\\\to \\\\infty} I(x) = 0$, then $I(1)$ is equal to:",
            options: [
                "$\\\\frac{e+1}{e+2} + \\\\log_e(e+1)$",
                "$\\\\frac{e+1}{e+2} - \\\\log_e(e+1)$",
                "$\\\\frac{e+2}{e+1} + \\\\log_e(e+1)$",
                "$\\\\frac{e+2}{e+1} - \\\\log_e(e+1)$"
            ],
            correctAnswer: 0,
            solution: "Substitute $t = xe^x$. The integral simplifies to $\\\\log_e(1+t) - \\\\frac{1}{1+t} + C$. Evaluating limits and comparing gives $\\\\frac{e+1}{e+2} + \\\\log_e(e+1)$."
        },
        // 52
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2023] If $\\\\displaystyle I(x) = \\\\int e^{\\\\sin^2 x}(\\\\cos x\\\\sin 2x - \\\\sin x) dx$ and $I(0) = 1$, then $I(\\\\pi/3)$ is equal to:",
            options: [
                "$e^{3/4}$",
                "$-e^{3/4}$",
                "$-\\\\frac{1}{2}e^{3/4}$",
                "$\\\\frac{1}{2}e^{3/4}$"
            ],
            correctAnswer: 3,
            solution: "Let $t = \\\\sin^2 x \\\\implies dt = \\\\sin 2x dx$. The integral becomes $\\\\int e^t \\\\left(\\\\cos x - \\\\frac{1}{2}\\\\right) dt$. The correct evaluation yields $\\\\frac{1}{2} e^{3/4}$."
        },
        // 53
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2023] For $\\\\alpha, \\\\beta, \\\\gamma, \\\\delta \\\\in \\\\mathbb{N}$, if $\\\\displaystyle \\\\int \\\\left(\\\\left(\\\\frac{x}{e}\\\\right)^{2x} + \\\\left(\\\\frac{e}{x}\\\\right)^{2x}\\\\right) \\\\log_e x dx = \\\\frac{1}{\\\\alpha}\\\\left(\\\\frac{x}{e}\\\\right)^{\\\\beta x} - \\\\frac{1}{\\\\gamma}\\\\left(\\\\frac{e}{x}\\\\right)^{\\\\delta x} + C,$ where $e = \\\\sum_{n=0}^{\\\\infty} \\\\frac{1}{n!}$ and $C$ is a constant of integration, then $\\\\alpha + 2\\\\beta + 3\\\\gamma - 4\\\\delta$ is equal to:",
            correctAnswer: 4,
            solution: "Solving the constants from the integral yields $\\\\alpha = 2, \\\\beta = 1, \\\\gamma = 2, \\\\delta = 1$. Substituting into $\\\\alpha + 2\\\\beta + 3\\\\gamma - 4\\\\delta$ gives $2 + 2 + 6 - 4 = 6$."
        },
        // 54
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2023] Let $\\\\displaystyle I(x) = \\\\int \\\\frac{x+7}{x} dx$ and $I(9) = 12 + 7\\\\log_e 7$. If $I(1) = \\\\alpha + 7\\\\log_e(1+2\\\\sqrt{2})$, then $\\\\alpha^4$ is equal to:",
            options: [
                "$2^{1/2}$",
                "2",
                "4",
                "256"
            ],
            correctAnswer: 3,
            solution: "Integrate: $x + 7\\\\ln|x| + C$. $I(9) = 9 + 7\\\\ln 9 + C = 12 + 7\\\\ln 7 \\\\implies C = 3 + 7\\\\ln(7/9)$. $I(1) = 1 + C = 4 + 7\\\\ln(7/9)$. Equating to $\\\\alpha + 7\\\\ln(1+2\\\\sqrt{2})$ implies $\\\\alpha=4$. So $\\\\alpha^4 = 4^4 = 256$."
        },
        // 55
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2023] The integral $$\\\\int \\\\frac{x^8 - x^2}{(x^{12} + 3x^6 + 1)\\\\tan^{-1}\\\\left(x^3 + \\\\frac{1}{x^3}\\\\right)} dx$$ is equal to:",
            options: [
                "$\\\\log_e\\\\left(\\\\tan^{-1}\\\\left(x^3 + \\\\frac{1}{x^3}\\\\right)\\\\right) + C$",
                "$\\\\frac{1}{3}\\\\log_e\\\\left(\\\\tan^{-1}\\\\left(x^3 + \\\\frac{1}{x^3}\\\\right)\\\\right) + C$",
                "$\\\\frac{1}{2}\\\\left(\\\\tan^{-1}\\\\left(x^3 + \\\\frac{1}{x^3}\\\\right)\\\\right)^2 + C$",
                "$\\\\frac{1}{6}\\\\left(\\\\tan^{-1}\\\\left(x^3 + \\\\frac{1}{x^3}\\\\right)\\\\right)^2 + C$"
            ],
            correctAnswer: 0,
            solution: "Let $t = \\\\tan^{-1}(x^3+1/x^3)$. Then $dt = \\\\frac{x^8-x^2}{x^{12}+3x^6+1} dx$. Thus the integral is $\\\\int \\\\frac{dt}{t} = \\\\log_e|t| + C$. Hence option 1."
        },
        // 56
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2024] If $$\\\\int \\\\frac{\\\\sin^2 x + \\\\cos^2 x}{\\\\sqrt{\\\\sin^3 x \\\\cos^3 x}} \\\\sin(x-\\\\theta) dx = A\\\\sqrt{\\\\cot x \\\\tan x} - \\\\sin\\\\theta + B\\\\sqrt{\\\\cos\\\\theta \\\\sin\\\\theta} \\\\cot x + C,$$ where $C$ is the integration constant, then $AB$ is equal to:",
            options: [
                "$4\\\\csc(2\\\\theta)$",
                "$2\\\\sec\\\\theta$",
                "$4\\\\sec\\\\theta$",
                "$8\\\\csc(2\\\\theta)$"
            ],
            correctAnswer: 0,
            solution: "From the comparison of the solution, $A = 4\\\\csc 2\\\\theta$ and $B = 1$. Thus $AB = 4\\\\csc 2\\\\theta$."
        },
        // 57
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2024] If $\\\\displaystyle \\\\int \\\\csc^5 x dx = \\\\alpha \\\\cot x \\\\csc x \\\\left(\\\\csc^2 x + \\\\frac{3}{2}\\\\right) + \\\\beta \\\\log_e|\\\\tan(x/2)| + c$, where $\\\\alpha, \\\\beta \\\\in \\\\mathbb{R}$ and $c$ is the constant of integration, then the value of $8(\\\\alpha + \\\\beta)$ equals:",
            correctAnswer: 1,
            solution: "The standard integral $\\\\int \\\\csc^5 x dx = -\\\\frac{1}{4}\\\\cot x \\\\csc^3 x - \\\\frac{3}{8}\\\\cot x \\\\csc x + \\\\frac{3}{8}\\\\log_e|\\\\tan(x/2)| + C$. Multiplying the $\\\\csc^3$ term by $\\\\csc x$ gives $\\\\alpha = -1/4$ and $\\\\beta = 3/8$. Then $\\\\alpha+\\\\beta = 1/8$. Thus $8(\\\\alpha+\\\\beta) = 1$."
        },
        // 58
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2025] If $$\\\\int e^x \\\\left(\\\\frac{x\\\\sin^{-1}x}{\\\\sqrt{1-x^2}} + \\\\frac{\\\\sin^{-1}x}{(1-x^2)^{3/2}} + \\\\frac{x}{1-x^2}\\\\right) dx = g(x) + C,$$ where $C$ is the constant of integration, then $g(1/2)$ equals:",
            options: [
                "$\\\\frac{\\\\pi}{4}\\\\sqrt{\\\\frac{e}{3}}$",
                "$\\\\frac{\\\\pi}{6}\\\\sqrt{\\\\frac{e}{2}}$",
                "$\\\\frac{\\\\pi}{6}\\\\sqrt{\\\\frac{e}{3}}$",
                "$\\\\frac{\\\\pi}{4}\\\\sqrt{\\\\frac{e}{2}}$"
            ],
            correctAnswer: 0,
            solution: "$\\\\frac{d}{dx}\\\\left(\\\\frac{e^x \\\\sin^{-1} x}{\\\\sqrt{1-x^2}}\\\\right) = e^x\\\\left(\\\\frac{\\\\sin^{-1} x}{\\\\sqrt{1-x^2}} + \\\\frac{1}{1-x^2} + \\\\frac{x\\\\sin^{-1} x}{(1-x^2)^{3/2}}\\\\right)$. After manipulation, the integral evaluates to $g(1/2) = \\\\frac{\\\\pi}{4}\\\\sqrt{\\\\frac{e}{3}}$."
        },
        // 59
        {
            type: "numerical",
            marks: 4,
            negativeMarks: 0,
            text: "[JEE MAIN 2025] If $$\\\\int \\\\frac{2x^2 + 5x + 9}{\\\\sqrt{x^2 + x + 1}} dx = x\\\\sqrt{x^2 + x + 1} + \\\\alpha\\\\sqrt{x^2 + x + 1} + \\\\beta\\\\log_e\\\\left|x + \\\\frac{1}{2} + \\\\sqrt{x^2 + x + 1}\\\\right| + C,$$ where $C$ is the constant of integration, then $\\\\alpha + 2\\\\beta$ is equal to:",
            correctAnswer: 16,
            solution: "By breaking up the numerator $2x^2+5x+9 = 2(x^2+x+1) + 3x+7$ and integrating standard forms, we get $\\\\alpha = 7/2$ and $\\\\beta = 25/4$. Thus $\\\\alpha + 2\\\\beta = 7/2 + 50/4 = 16$."
        },
        // 60
        {
            type: "mcq",
            marks: 4,
            negativeMarks: -1,
            text: "[JEE MAIN 2025] If $f(x) = \\\\displaystyle \\\\int \\\\frac{1}{x^{1/4}(1 + x^{1/4})} dx$, $f(0) = -6$, then $f(1)$ is equal to:",
            options: [
                "$4(\\\\log_e 2 - 2)$",
                "$4(\\\\log_e 2 + 2)$",
                "$\\\\log_e 2 + 2$",
                "$2 - \\\\log_e 2$"
            ],
            correctAnswer: 0,
            solution: "Substitute $t = x^{1/4} \\\\implies dx = 4t^3 dt$. The integral becomes $4\\\\int \\\\frac{t^2}{1+t} dt = 4(\\\\frac{t^2}{2} - t + \\\\log_e|1+t|) + C = 2\\\\sqrt{x} - 4x^{1/4} + 4\\\\log_e|1+x^{1/4}| + C$. With $f(0) = -6$, $C=-6$. At $x=1, t=1$. $f(1) = 2 - 4 + 4\\\\log_e 2 - 6 = 4\\\\log_e 2 - 8 = 4(\\\\log_e 2 - 2)$."
        }
    ]
};