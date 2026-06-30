window.testBank = window.testBank || {};
window.testBank['test_494'] = {
    "title": "Differentiation",
    "category": "Theory and Formulae Tests - Maths",
    "timeLimitMins": 10,
    "randomizePoolSize": 30,
    "questions": [
        // 1
        {
            "type": "mcq",
            "text": "What is the value of $\\frac{d}{dx}[c]$, where $c$ is a constant?",
            "options": ["0", "1", "$c$", "$x$"],
            "correctAnswer": 0,
            "solution": "The derivative of any constant is $0$."
        },
        // 2
        {
            "type": "mcq",
            "text": "If $c$ is a constant and $u(x)$ is a differentiable function, what is the rule for $\\frac{d}{dx}[c \\cdot u(x)]$?",
            "options": ["$c \\cdot u'(x)$", "$u'(x) / c$", "$c + u'(x)$", "$(u'(x))^c$"],
            "correctAnswer": 0,
            "solution": "The constant multiple rule states $\\frac{d}{dx}[c \\cdot u(x)] = c \\cdot u'(x)$."
        },
        // 3
        {
            "type": "mcq",
            "text": "Which of the following correctly represents the Product Rule for differentiation of $u(x)$ and $v(x)$?",
            "options": ["$\\frac{u}{v}$", "$u'v + uv'$", "$u'v - uv'$", "$u'v'$"],
            "correctAnswer": 1,
            "solution": "The Product Rule is $\\frac{d}{dx}[uv] = u'v + uv'$."
        },
        // 4
        {
            "type": "mcq",
            "text": "What is the correct formula for the Quotient Rule when differentiating $\\frac{u}{v}$?",
            "options": ["$\\frac{u'v - uv'}{v}$", "$\\frac{u'v - uv'}{v^2}$", "$\\frac{u'v + uv'}{v^2}$", "$\\frac{u'}{v'}$"],
            "correctAnswer": 1,
            "solution": "The Quotient Rule formula is $\\frac{d}{dx}\\left[\\frac{u}{v}\\right] = \\frac{u'v - uv'}{v^2}$."
        },
        // 5
        {
            "type": "mcq",
            "text": "For a composite function $f(g(x))$, how is the derivative expressed via the Chain Rule?",
            "options": ["$f'(g(x))$", "$f'(g(x)) \\cdot g'(x)$", "$f(g'(x)) \\cdot g(x)$", "$f'(x) \\cdot g'(x)$"],
            "correctAnswer": 1,
            "solution": "The Chain Rule is $\\frac{d}{dx}[f(g(x))] = f'(g(x)) \\cdot g'(x)$."
        },
        // 6
        {
            "type": "mcq",
            "text": "What is the general Power Rule for finding $\\frac{d}{dx}[x^n]$, where n &ne; -1?",
            "options": ["$n x^{n-1}$", "$(n-1)x^n$", "$n x^{n+1}$", "$\\frac{x^{n+1}}{n+1}$"],
            "correctAnswer": 0,
            "solution": "The Power Rule states $\\frac{d}{dx}[x^n] = n x^{n-1}$."
        },
        // 7
        {
            "type": "mcq",
            "text": "What is the derivative of $\\frac{1}{x}$?",
            "options": ["$\\frac{1}{x^2}$", "$-\\frac{1}{x^2}$", "$-\\frac{1}{x}$", "$\\ln |x|$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}\\left[\\frac{1}{x}\\right] = -\\frac{1}{x^2}$."
        },
        // 8
        {
            "type": "mcq",
            "text": "What is the derivative of $\\sqrt{x}$?",
            "options": ["$\\frac{1}{2\\sqrt{x}}$", "$\\frac{1}{\\sqrt{x}}$", "$\\frac{1}{2x}$", "$\\frac{1}{2x^2}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2\\sqrt{x}}$."
        },
        // 9
        {
            "type": "mcq",
            "text": "What is the derivative of the exponential function $e^x$?",
            "options": ["$x e^{x-1}$", "$e^x$", "$e^x \\ln x$", "$\\frac{1}{x}$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[e^x] = e^x$."
        },
        // 10
        {
            "type": "mcq",
            "text": "What is the derivative of $a^x$, where a > 0 and a &ne; 1?",
            "options": ["$a^x$", "$a^x \\ln a$", "$x a^{x-1}$", "$\\frac{a^x}{\\ln a}$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[a^x] = a^x \\ln a$."
        },
        // 11
        {
            "type": "mcq",
            "text": "What is the derivative of $\\ln |x|$?",
            "options": ["$\\frac{1}{|x|}$", "$\\frac{1}{x}$", "$e^x$", "$\\ln x$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[\\ln |x|] = \\frac{1}{x}$."
        },
        // 12
        {
            "type": "mcq",
            "text": "What is the derivative of $\\log_a x$?",
            "options": ["$\\frac{1}{x \\ln a}$", "$\\frac{1}{x}$", "$\\frac{\\ln a}{x}$", "$\\frac{1}{\\ln a}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$."
        },
        // 13
        {
            "type": "mcq",
            "text": "What is the derivative of $\\sin x$?",
            "options": ["$\\cos x$", "$-\\cos x$", "$\\sec^2 x$", "$\\sin x$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\sin x] = \\cos x$."
        },
        // 14
        {
            "type": "mcq",
            "text": "What is the derivative of $\\cos x$?",
            "options": ["$\\cos x$", "$-\\cos x$", "$\\sin x$", "$-\\sin x$"],
            "correctAnswer": 3,
            "solution": "$\\frac{d}{dx}[\\cos x] = -\\sin x$."
        },
        // 15
        {
            "type": "mcq",
            "text": "What is the derivative of $\\tan x$?",
            "options": ["$\\sec^2 x$", "$\\csc^2 x$", "$\\sec x \\tan x$", "$-\\csc x \\cot x$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\tan x] = \\sec^2 x$."
        },
        // 16
        {
            "type": "mcq",
            "text": "What is the derivative of $\\cot x$?",
            "options": ["$\\sec^2 x$", "$\\csc^2 x$", "$-\\csc^2 x$", "$\\sec x \\tan x$"],
            "correctAnswer": 2,
            "solution": "$\\frac{d}{dx}[\\cot x] = -\\csc^2 x$."
        },
        // 17
        {
            "type": "mcq",
            "text": "Which function's derivative is $\\sec x \\tan x$?",
            "options": ["$\\sec x$", "$\\tan x$", "$\\csc x$", "$\\cot x$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\sec x] = \\sec x \\tan x$."
        },
        // 18
        {
            "type": "mcq",
            "text": "What is the derivative of $\\csc x$?",
            "options": ["$\\csc x \\cot x$", "$-\\csc x \\cot x$", "$\\csc^2 x$", "$-\\sec x \\tan x$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[\\csc x] = -\\csc x \\cot x$."
        },
        // 19
        {
            "type": "mcq",
            "text": "What is the derivative of $\\sin^{-1} x$?",
            "options": ["$\\frac{1}{\\sqrt{1-x^2}}$", "$-\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$", "$\\frac{1}{|x|\\sqrt{x^2-1}}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\sin^{-1} x] = \\frac{1}{\\sqrt{1-x^2}}$."
        },
        // 20
        {
            "type": "mcq",
            "text": "What is the derivative of $\\cos^{-1} x$?",
            "options": ["$\\frac{1}{\\sqrt{1-x^2}}$", "$-\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$", "$-\\frac{1}{1+x^2}$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[\\cos^{-1} x] = -\\frac{1}{\\sqrt{1-x^2}}$."
        },
        // 21
        {
            "type": "mcq",
            "text": "What is the derivative of $\\tan^{-1} x$?",
            "options": ["$\\frac{1}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$", "$-\\frac{1}{1+x^2}$", "$\\frac{x}{1+x^2}$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[\\tan^{-1} x] = \\frac{1}{1+x^2}$."
        },
        // 22
        {
            "type": "mcq",
            "text": "What is the derivative of $\\cot^{-1} x$?",
            "options": ["$\\frac{1}{1+x^2}$", "$-\\frac{1}{1+x^2}$", "$\\frac{1}{\\sqrt{1-x^2}}$", "$-\\frac{1}{\\sqrt{1-x^2}}$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[\\cot^{-1} x] = -\\frac{1}{1+x^2}$."
        },
        // 23
        {
            "type": "mcq",
            "text": "What is the derivative of $\\sec^{-1} x$?",
            "options": ["$\\frac{1}{|x|\\sqrt{x^2-1}}$", "$-\\frac{1}{|x|\\sqrt{x^2-1}}$", "$\\frac{1}{x\\sqrt{x^2-1}}$", "$\\frac{1}{1+x^2}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\sec^{-1} x] = \\frac{1}{|x|\\sqrt{x^2-1}}$."
        },
        // 24
        {
            "type": "mcq",
            "text": "What is the derivative of $\\csc^{-1} x$?",
            "options": ["$\\frac{1}{|x|\\sqrt{x^2-1}}$", "$-\\frac{1}{|x|\\sqrt{x^2-1}}$", "$\\frac{1}{x\\sqrt{x^2-1}}$", "$-\\frac{1}{1+x^2}$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[\\csc^{-1} x] = -\\frac{1}{|x|\\sqrt{x^2-1}}$."
        },
        // 25
        {
            "type": "mcq",
            "text": "What is the sum of the derivatives $\\frac{d}{dx}[\\sin^{-1} x] + \\frac{d}{dx}[\\cos^{-1} x]$?",
            "options": ["0", "$1$", "$\\frac{2}{\\sqrt{1-x^2}}$", "$\\frac{1}{1+x^2}$"],
            "correctAnswer": 0,
            "solution": "Since $\\frac{d}{dx}[\\sin^{-1} x] = \\frac{1}{\\sqrt{1-x^2}}$ and $\\frac{d}{dx}[\\cos^{-1} x] = -\\frac{1}{\\sqrt{1-x^2}}$, their sum is $0$."
        },
        // 26
        {
            "type": "mcq",
            "text": "What is the sum of the derivatives $\\frac{d}{dx}[\\tan^{-1} x] + \\frac{d}{dx}[\\cot^{-1} x]$?",
            "options": ["0", "$1$", "$\\frac{2}{1+x^2}$", "$\\frac{1}{\\sqrt{1-x^2}}$"],
            "correctAnswer": 0,
            "solution": "Since $\\frac{d}{dx}[\\tan^{-1} x] = \\frac{1}{1+x^2}$ and $\\frac{d}{dx}[\\cot^{-1} x] = -\\frac{1}{1+x^2}$, their sum is $0$."
        },
        // 27
        {
            "type": "mcq",
            "text": "For $y = f(x)^{g(x)}$, what is the correct first step for Logarithmic Differentiation?",
            "options": ["Take $\\ln$ on both sides: $\\ln y = g(x) \\ln f(x)$", "Apply Product Rule directly", "Apply Quotient Rule directly", "Take the square root on both sides"],
            "correctAnswer": 0,
            "solution": "Logarithmic Differentiation involves taking the natural logarithm on both sides: $\\ln y = g(x) \\ln f(x)$, then differentiating."
        },
        // 28
        {
            "type": "mcq",
            "text": "For a parametric equation $x = f(t)$ and $y = g(t)$, how do you find $\\frac{dy}{dx}$?",
            "options": ["$\\frac{dx/dt}{dy/dt}$", "$\\frac{dy/dt}{dx/dt}$", "$\\frac{d}{dt}(xy)$", "$\\frac{d}{dx}(f(t) + g(t))$"],
            "correctAnswer": 1,
            "solution": "In parametric form, $\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{g'(t)}{f'(t)}$."
        },
        // 29
        {
            "type": "mcq",
            "text": "What is the formula for the second derivative $\\frac{d^2y}{dx^2}$ of a parametric equation $x = f(t)$ and $y = g(t)$?",
            "options": ["$\\frac{d^2y/dt^2}{d^2x/dt^2}$", "$\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{dt}{dx}$", "$\\frac{d^2y}{dt^2} \\cdot \\frac{dx}{dt}$", "$\\frac{d}{dx}\\left(\\frac{dy}{dt}\\right)$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d^2y}{dx^2} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) \\cdot \\frac{dt}{dx} = \\frac{d}{dt}\\left(\\frac{dy}{dx}\\right) / \\frac{dx}{dt}$."
        },
        // 30
        {
            "type": "mcq",
            "text": "For an implicitly defined function $f(x, y) = 0$, how is $\\frac{dy}{dx}$ found?",
            "options": ["$\\frac{\\partial f/\\partial x}{\\partial f/\\partial y}$", "$-\\frac{\\partial f/\\partial x}{\\partial f/\\partial y}$", "$\\frac{\\partial f/\\partial y}{\\partial f/\\partial x}$", "$f_x \\cdot f_y$"],
            "correctAnswer": 1,
            "solution": "The formula for implicit differentiation is $\\frac{dy}{dx} = -\\frac{\\partial f/\\partial x}{\\partial f/\\partial y} = -\\frac{f_x}{f_y}$."
        },
        // 31
        {
            "type": "mcq",
            "text": "If you need to find the derivative of $u(x)$ with respect to $v(x)$, what is the correct method?",
            "options": ["$\\frac{du}{dv} = \\frac{du/dx}{dv/dx}$", "$\\frac{du}{dv} = \\frac{dv/dx}{du/dx}$", "$\\frac{du}{dv} = \\frac{d}{dx}(uv)$", "$\\frac{du}{dv} = \\frac{du}{dx} \\cdot \\frac{dv}{dx}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d(u)}{d(v)} = \\frac{du/dx}{dv/dx}$, provided dv/dx &ne; 0."
        },
        // 32
        {
            "type": "mcq",
            "text": "If $y = f^{-1}(x)$, what is the formula for its derivative $\\frac{dy}{dx}$?",
            "options": ["$f'(x)$", "$\\frac{1}{f'(x)}$", "$\\frac{1}{f'(y)}$", "$f'(y)$"],
            "correctAnswer": 2,
            "solution": "For an inverse function, $\\frac{dy}{dx} = \\frac{1}{f'(y)}$, where f'(y) &ne; 0."
        },
        // 33
        {
            "type": "mcq",
            "text": "According to the Leibniz rule (Newton-Leibniz formula), what is $\\frac{d}{dx} \\int_{v(x)}^{u(x)} f(t) \\, dt$?",
            "options": ["$f(u(x))$", "$f(u(x))u'(x) - f(v(x))v'(x)$", "$f(u(x)) - f(v(x))$", "$f(u(x))u'(x) + f(v(x))v'(x)$"],
            "correctAnswer": 1,
            "solution": "The Leibniz rule states $\\frac{d}{dx} \\int_{v(x)}^{u(x)} f(t) \\, dt = f(u(x))u'(x) - f(v(x))v'(x)$."
        },
        // 34
        {
            "type": "mcq",
            "text": "What is the derivative of a composite function $f(x) = \\ln(g(x))$?",
            "options": ["$\\frac{1}{g(x)}$", "$\\frac{g'(x)}{g(x)}$", "$g'(x) \\cdot g(x)$", "$\\frac{g(x)}{g'(x)}$"],
            "correctAnswer": 1,
            "solution": "Using the chain rule, $\\frac{d}{dx}[\\ln(g(x))] = \\frac{1}{g(x)} \\cdot g'(x) = \\frac{g'(x)}{g(x)}$."
        },
        // 35
        {
            "type": "mcq",
            "text": "Which substitution is ideal for simplifying an expression containing $\\sqrt{a^2 - x^2}$?",
            "options": ["$x = a \\sin \\theta$", "$x = a \\tan \\theta$", "$x = a \\sec \\theta$", "$x = a \\cos 2\\theta$"],
            "correctAnswer": 0,
            "solution": "The standard substitution for $\\sqrt{a^2 - x^2}$ is $x = a \\sin \\theta$ (or $a \\cos \\theta$)."
        },
        // 36
        {
            "type": "mcq",
            "text": "Which substitution is ideal for simplifying an expression containing $\\sqrt{a^2 + x^2}$?",
            "options": ["$x = a \\sin \\theta$", "$x = a \\tan \\theta$", "$x = a \\sec \\theta$", "$x = a \\cos 2\\theta$"],
            "correctAnswer": 1,
            "solution": "The standard substitution for $\\sqrt{a^2 + x^2}$ is $x = a \\tan \\theta$ (or $a \\cot \\theta$)."
        },
        // 37
        {
            "type": "mcq",
            "text": "Which substitution is ideal for simplifying an expression containing $\\sqrt{x^2 - a^2}$?",
            "options": ["$x = a \\sin \\theta$", "$x = a \\tan \\theta$", "$x = a \\sec \\theta$", "$x = a \\cos 2\\theta$"],
            "correctAnswer": 2,
            "solution": "The standard substitution for $\\sqrt{x^2 - a^2}$ is $x = a \\sec \\theta$ (or $a \\csc \\theta$)."
        },
        // 38
        {
            "type": "mcq",
            "text": "Which substitution is used to simplify expressions of the form $\\sqrt{\\frac{a-x}{a+x}}$ or $\\sqrt{\\frac{a+x}{a-x}}$?",
            "options": ["$x = a \\sin \\theta$", "$x = a \\tan \\theta$", "$x = a \\sec \\theta$", "$x = a \\cos 2\\theta$"],
            "correctAnswer": 3,
            "solution": "For $\\sqrt{\\frac{a-x}{a+x}}$ or $\\sqrt{\\frac{a+x}{a-x}}$, the standard substitution is $x = a \\cos 2\\theta$."
        },
        // 39
        {
            "type": "mcq",
            "text": "What is the appropriate substitution to simplify the expression $\\frac{2x}{1 - x^2}$?",
            "options": ["$x = \\sin \\theta$", "$x = \\cos \\theta$", "$x = \\tan \\theta$", "$x = \\sec \\theta$"],
            "correctAnswer": 2,
            "solution": "Substituting $x = \\tan \\theta$ resolves $\\frac{2x}{1 - x^2}$ to $\\tan 2\\theta$."
        },
        // 40
        {
            "type": "mcq",
            "text": "What is the appropriate substitution to simplify the expression $3x - 4x^3$?",
            "options": ["$x = \\sin \\theta$", "$x = \\cos \\theta$", "$x = \\tan \\theta$", "$x = \\sec \\theta$"],
            "correctAnswer": 0,
            "solution": "Substituting $x = \\sin \\theta$ resolves $3x - 4x^3$ to $\\sin 3\\theta$."
        },
        // 41
        {
            "type": "mcq",
            "text": "What is the appropriate substitution to simplify the expression $4x^3 - 3x$?",
            "options": ["$x = \\sin \\theta$", "$x = \\cos \\theta$", "$x = \\tan \\theta$", "$x = \\sec \\theta$"],
            "correctAnswer": 1,
            "solution": "Substituting $x = \\cos \\theta$ resolves $4x^3 - 3x$ to $\\cos 3\\theta$."
        },
        // 42
        {
            "type": "mcq",
            "text": "What is the appropriate substitution to simplify the expression $\\frac{3x - x^3}{1 - 3x^2}$?",
            "options": ["$x = \\sin \\theta$", "$x = \\cos \\theta$", "$x = \\tan \\theta$", "$x = \\sec \\theta$"],
            "correctAnswer": 2,
            "solution": "Substituting $x = \\tan \\theta$ resolves $\\frac{3x - x^3}{1 - 3x^2}$ to $\\tan 3\\theta$."
        },
        // 43
        {
            "type": "mcq",
            "text": "What is $\\frac{d}{dx}[f(x)^2]$ using the Chain Rule?",
            "options": ["$2f(x)$", "$2f(x)f'(x)$", "$f'(x)^2$", "$f(x^2)$"],
            "correctAnswer": 1,
            "solution": "By the Chain Rule, $\\frac{d}{dx}[f(x)^2] = 2f(x) \\cdot f'(x)$."
        },
        // 44
        {
            "type": "mcq",
            "text": "What is $\\frac{d}{dx}[e^{g(x)}]$ using the Chain Rule?",
            "options": ["$e^{g(x)}$", "$e^{g(x)} \\cdot g'(x)$", "$g'(x) \\cdot e^x$", "$\\frac{e^{g(x)}}{g'(x)}$"],
            "correctAnswer": 1,
            "solution": "By the Chain Rule, $\\frac{d}{dx}[e^{g(x)}] = e^{g(x)} \\cdot g'(x)$."
        },
        // 45
        {
            "type": "mcq",
            "text": "What is the derivative of $\\sin(g(x))$ using the Chain Rule?",
            "options": ["$\\cos(g(x))$", "$\\cos(g(x)) \\cdot g'(x)$", "$-\\sin(g(x)) \\cdot g'(x)$", "$g'(x) \\cdot \\sin(g(x))$"],
            "correctAnswer": 1,
            "solution": "By the Chain Rule, $\\frac{d}{dx}[\\sin(g(x))] = \\cos(g(x)) \\cdot g'(x)$."
        },
        // 46
        {
            "type": "mcq",
            "text": "What is the derivative of $\\sin^{-1}(g(x))$ using the Chain Rule?",
            "options": ["$\\frac{g'(x)}{\\sqrt{1 - x^2}}$", "$\\frac{g'(x)}{\\sqrt{1 - (g(x))^2}}$", "$\\frac{g(x)}{\\sqrt{1 - x^2}}$", "$\\frac{1}{\\sqrt{1 - (g(x))^2}}$"],
            "correctAnswer": 1,
            "solution": "By the Chain Rule, $\\frac{d}{dx}[\\sin^{-1}(g(x))] = \\frac{g'(x)}{\\sqrt{1 - (g(x))^2}}$."
        },
        // 47
        {
            "type": "mcq",
            "text": "What is the derivative of $\\tan^{-1}(g(x))$ using the Chain Rule?",
            "options": ["$\\frac{g'(x)}{1 + (g(x))^2}$", "$\\frac{g(x)}{1 + x^2}$", "$\\frac{g'(x)}{1 + x^2}$", "$\\frac{1}{1 + (g(x))^2}$"],
            "correctAnswer": 0,
            "solution": "By the Chain Rule, $\\frac{d}{dx}[\\tan^{-1}(g(x))] = \\frac{g'(x)}{1 + (g(x))^2}$."
        },
        // 48
        {
            "type": "mcq",
            "text": "If $u, v, w$ are differentiable functions of $x$, the Product Rule extended to three functions $(uvw)'$ is:",
            "options": ["$u'vw + uv'w + uvw'$", "$u'v'w'$", "$uvw(u' + v' + w')$", "$u(vw)' + v(uw)'$"],
            "correctAnswer": 0,
            "solution": "The extended product rule is $\\frac{d}{dx}[uvw] = u'vw + uv'w + uvw'$."
        },
        // 49
        {
            "type": "mcq",
            "text": "Which of the following statements about $\\frac{d}{dx}[\\sec^{-1} x]$ is correct regarding its domain?",
            "options": ["It is defined for all real $x$", "It is defined for $|x| > 1$", "It is defined for $x \\geq 0$", "It is defined for x &ne; 0"],
            "correctAnswer": 1,
            "solution": "The derivative formula contains $\\sqrt{x^2 - 1}$, which requires $|x| > 1$ for real values."
        },
        // 50
        {
            "type": "mcq",
            "text": "For $f(x) = x^x$, which differentiation technique is most appropriate?",
            "options": ["Product Rule", "Quotient Rule", "Logarithmic Differentiation", "Implicit Differentiation"],
            "correctAnswer": 2,
            "solution": "Since the variable appears in both the base and the exponent, Logarithmic Differentiation is the standard method for $x^x$."
        },
        // 51
        {
            "type": "mcq",
            "text": "What is the derivative of $x$ with respect to $x$?",
            "options": ["0", "1", "$x$", "$\\ln x$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[x] = 1$."
        },
        // 52
        {
            "type": "mcq",
            "text": "If $y = f^{-1}(x)$ and $f'(y) = 0$, what happens to $dy/dx$?",
            "options": ["It becomes $0$", "It becomes $1$", "It is undefined (infinite)", "It becomes $\\infty$"],
            "correctAnswer": 2,
            "solution": "Since $\\frac{dy}{dx} = \\frac{1}{f'(y)}$, if the denominator is $0$, the derivative is undefined (approaches infinity)."
        },
        // 53
        {
            "type": "mcq",
            "text": "The derivative of a function $u$ with respect to another function $v$ is $\\frac{du}{dv}$. If $\\frac{dv}{dx} = 0$, then $\\frac{du}{dv}$ is:",
            "options": ["$0$", "$\\frac{du}{dx}$", "Undefined", "$1$"],
            "correctAnswer": 2,
            "solution": "Since $\\frac{du}{dv} = \\frac{du/dx}{dv/dx}$, if $dv/dx = 0$, the division is undefined."
        },
        // 54
        {
            "type": "mcq",
            "text": "What is the derivative of $\\log_{10} x$?",
            "options": ["$\\frac{1}{x \\ln 10}$", "$\\frac{\\ln 10}{x}$", "$\\frac{1}{x}$", "$\\frac{10}{x}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\log_a x] = \\frac{1}{x \\ln a}$. For $a=10$, $\\frac{1}{x \\ln 10}$."
        },
        // 55
        {
            "type": "mcq",
            "text": "What is the derivative of $\\log_a |g(x)|$?",
            "options": ["$\\frac{g'(x)}{g(x)}$", "$\\frac{g'(x)}{g(x) \\ln a}$", "$\\frac{\\ln a \\cdot g'(x)}{g(x)}$", "$\\frac{1}{g(x) \\ln a}$"],
            "correctAnswer": 1,
            "solution": "$\\frac{d}{dx}[\\log_a |g(x)|] = \\frac{g'(x)}{g(x) \\ln a}$."
        },
        // 56
        {
            "type": "mcq",
            "text": "If $x = a \\cos \\theta$, what does $\\sqrt{a^2 - x^2}$ simplify to?",
            "options": ["$a \\sin \\theta$", "$a \\cos \\theta$", "$a \\tan \\theta$", "$a \\sec \\theta$"],
            "correctAnswer": 0,
            "solution": "Substituting $x = a \\cos \\theta$, we get $\\sqrt{a^2 - a^2 \\cos^2 \\theta} = \\sqrt{a^2 \\sin^2 \\theta} = a \\sin \\theta$."
        },
        // 57
        {
            "type": "mcq",
            "text": "If $x = a \\tan \\theta$, what does $\\sqrt{a^2 + x^2}$ simplify to?",
            "options": ["$a \\sin \\theta$", "$a \\cos \\theta$", "$a \\sec \\theta$", "$a \\csc \\theta$"],
            "correctAnswer": 2,
            "solution": "Substituting $x = a \\tan \\theta$, we get $\\sqrt{a^2 + a^2 \\tan^2 \\theta} = \\sqrt{a^2 \\sec^2 \\theta} = a \\sec \\theta$."
        },
        // 58
        {
            "type": "mcq",
            "text": "If $x = a \\sec \\theta$, what does $\\sqrt{x^2 - a^2}$ simplify to?",
            "options": ["$a \\sin \\theta$", "$a \\cos \\theta$", "$a \\tan \\theta$", "$a \\cot \\theta$"],
            "correctAnswer": 2,
            "solution": "Substituting $x = a \\sec \\theta$, we get $\\sqrt{a^2 \\sec^2 \\theta - a^2} = \\sqrt{a^2 \\tan^2 \\theta} = a \\tan \\theta$."
        },
        // 59
        {
            "type": "mcq",
            "text": "The substitution $x^2 = a^2 \\cos 2\\theta$ is used to simplify which of the following expressions?",
            "options": ["$\\sqrt{a^2 - x^2}$", "$\\sqrt{a^2 + x^2}$", "$\\sqrt{\\frac{a^2 - x^2}{a^2 + x^2}}$", "$\\sqrt{x^2 - a^2}$"],
            "correctAnswer": 2,
            "solution": "$x^2 = a^2 \\cos 2\\theta$ is specifically used for $\\sqrt{\\frac{a^2 - x^2}{a^2 + x^2}}$."
        },
        // 60
        {
            "type": "mcq",
            "text": "If $f(x) = e^{\\ln x}$ for $x > 0$, what is $\\frac{d}{dx}[f(x)]$?",
            "options": ["$\\frac{1}{x}$", "$1$", "$e^x$", "$0$"],
            "correctAnswer": 1,
            "solution": "$e^{\\ln x} = x$ for $x > 0$. Therefore, $\\frac{d}{dx}[x] = 1$."
        },
        // 61
        {
            "type": "mcq",
            "text": "Which fundamental differentiation rule is applied when differentiating $\\frac{d}{dx}\\left[\\frac{u}{v}\\right]$?",
            "options": ["Product Rule", "Quotient Rule", "Chain Rule", "Power Rule"],
            "correctAnswer": 1,
            "solution": "The Quotient Rule is specifically used for differentiating the ratio of two functions."
        },
        // 62
        {
            "type": "mcq",
            "text": "When applying the Chain Rule to $\\frac{d}{dx} [\\cos(\\ln x)]$, what is the derivative of the outer function evaluated at the inner function?",
            "options": ["$-\\sin(\\ln x)$", "$-\\sin(\\ln x) \\cdot \\frac{1}{x}$", "$\\sin(\\ln x)$", "$\\frac{1}{x}$"],
            "correctAnswer": 0,
            "solution": "Outer function is $\\cos(\\cdot)$, whose derivative is $-\\sin(\\cdot)$. Evaluated at the inner function $\\ln x$, it is $-\\sin(\\ln x)$."
        },
        // 63
        {
            "type": "mcq",
            "text": "For $y = f(x)^2$, applying the Chain Rule yields $y' = 2 f(x) f'(x)$. What is $y'$ if $f(x) = \\tan x$?",
            "options": ["$2 \\tan x \\sec^2 x$", "$2 \\sec^2 x$", "$2 \\tan x$", "$\\tan^2 x \\sec^2 x$"],
            "correctAnswer": 0,
            "solution": "$y' = 2 \\cdot \\tan x \\cdot \\frac{d}{dx}[\\tan x] = 2 \\tan x \\cdot \\sec^2 x$."
        },
        // 64
        {
            "type": "mcq",
            "text": "What is the derivative of the constant function $f(x) = \\pi^2$?",
            "options": ["$2\\pi$", "$0$", "$\\pi^2$", "$1$"],
            "correctAnswer": 1,
            "solution": "Any constant, whether numerical or symbolic (like $\\pi^2$), has a derivative of $0$."
        },
        // 65
        {
            "type": "mcq",
            "text": "In implicit differentiation of $x^2 + y^2 = 1$, what is $\\frac{d}{dx}[y^2]$?",
            "options": ["$2y$", "$2y \\frac{dy}{dx}$", "$2x$", "$0$"],
            "correctAnswer": 1,
            "solution": "When differentiating implicitly, $y$ is treated as a function of $x$, so $\\frac{d}{dx}[y^2] = 2y \\frac{dy}{dx}$."
        },
        // 66
        {
            "type": "mcq",
            "text": "Which of the following is NOT a valid application of the Power Rule $\\frac{d}{dx}[x^n] = n x^{n-1}$?",
            "options": ["$\\frac{d}{dx}[x^3] = 3x^2$", "$\\frac{d}{dx}[x^{-2}] = -2x^{-3}$", "$\\frac{d}{dx}[\\sqrt{x}] = \\frac{1}{2} x^{-1/2}$", "$\\frac{d}{dx}[a^x] = x a^{x-1}$"],
            "correctAnswer": 3,
            "solution": "The Power Rule applies to $x^n$, where $x$ is the base. $a^x$ is exponential, not a power function, so its derivative is $a^x \\ln a$."
        },
        // 67
        {
            "type": "mcq",
            "text": "What is the derivative of $\\log_a (e^x)$?",
            "options": ["$\\frac{1}{x \\ln a}$", "$\\frac{1}{\\ln a}$", "$\\frac{x}{\\ln a}$", "$\\frac{e^x}{\\ln a}$"],
            "correctAnswer": 1,
            "solution": "$\\log_a (e^x) = x \\log_a e = \\frac{x}{\\ln a}$. Differentiating gives $\\frac{1}{\\ln a}$."
        },
        // 68
        {
            "type": "mcq",
            "text": "For $y = \\ln |\\sin x|$, what is $\\frac{dy}{dx}$?",
            "options": ["$\\cot x$", "$\\tan x$", "$\\frac{1}{\\sin x}$", "$\\frac{\\cos x}{\\sin^2 x}$"],
            "correctAnswer": 0,
            "solution": "$\\frac{d}{dx}[\\ln |\\sin x|] = \\frac{1}{\\sin x} \\cdot \\cos x = \\cot x$."
        },
        // 69
        {
            "type": "mcq",
            "text": "If $x = t^2$ and $y = t^3$, what is $\\frac{dy}{dx}$ using parametric differentiation?",
            "options": ["$\\frac{3t}{2}$", "$\\frac{2t}{3}$", "$3t^2$", "$2t$"],
            "correctAnswer": 0,
            "solution": "$\\frac{dy}{dx} = \\frac{dy/dt}{dx/dt} = \\frac{3t^2}{2t} = \\frac{3t}{2}$."
        },
        // 70
        {
            "type": "mcq",
            "text": "The substitution $x = a \\sin \\theta$ is primarily used to simplify which algebraic form before differentiating?",
            "options": ["$\\sqrt{a^2 - x^2}$", "$\\sqrt{a^2 + x^2}$", "$\\sqrt{x^2 - a^2}$", "$\\frac{1}{a^2 + x^2}$"],
            "correctAnswer": 0,
            "solution": "$x = a \\sin \\theta$ is the optimal substitution for $\\sqrt{a^2 - x^2}$."
        }
    ]
};