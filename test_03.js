window.testBank = window.testBank || {};
window.testBank['test_03'] = {
    title: "Theory and formulae Test - Conic Sections",
    category: "Theory and Formulae Tests",
    randomizePoolSize: 30,
    timeLimitMins: 10,
    questions: [
    {
        "type": "mcq",
        "text": "What is the standard equation of a parabola opening rightwards with vertex at origin?",
        "options": [
            "$x^2 = 4ay$",
            "$y^2 = 4ax$",
            "$x^2 = -4ay$",
            "$y^2 = -4ax$"
        ],
        "correctAnswer": 1,
        "solution": "The standard equation of a rightward opening parabola is $y^2 = 4ax$."
    },
    {
        "type": "mcq",
        "text": "For the parabola $y^2 = 4ax$, what are the coordinates of the focus?",
        "options": [
            "$(a, 0)$",
            "$(0, a)$",
            "$(-a, 0)$",
            "$(0, -a)$"
        ],
        "correctAnswer": 0,
        "solution": "The focus of $y^2 = 4ax$ lies on the x-axis at a distance 'a' from the vertex: $(a, 0)$."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the directrix for the parabola $y^2 = 4ax$?",
        "options": [
            "$x = a$",
            "$y = a$",
            "$x = -a$",
            "$y = -a$"
        ],
        "correctAnswer": 2,
        "solution": "The directrix is behind the vertex at distance 'a', hence $x = -a$."
    },
    {
        "type": "mcq",
        "text": "What is the length of the latus rectum of $y^2 = 4ax$?",
        "options": [
            "$a$",
            "$2a$",
            "$4a$",
            "$8a$"
        ],
        "correctAnswer": 2,
        "solution": "The latus rectum length is 4 times the focal distance from vertex: $4a$."
    },
    {
        "type": "mcq",
        "text": "What are the parametric coordinates of any point on the parabola $y^2 = 4ax$?",
        "options": [
            "$(a \\cos t, a \\sin t)$",
            "$(at, 2at)$",
            "$(at^2, 2at)$",
            "$(2at, at^2)$"
        ],
        "correctAnswer": 2,
        "solution": "Substituting $x = at^2$ into $y^2 = 4ax$ yields $y = 2at$. Hence, $(at^2, 2at)$."
    },
    {
        "type": "mcq",
        "text": "What is the condition for the line $y = mx + c$ to be a tangent to $y^2 = 4ax$?",
        "options": [
            "$c = a/m$",
            "$c = am$",
            "$c = a/m^2$",
            "$c = -a/m$"
        ],
        "correctAnswer": 0,
        "solution": "For tangency, the discriminant must be zero, leading to $c = a/m$."
    }
]
};