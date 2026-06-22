// Fuel File: test_03
window.testBank = window.testBank || {};

window.testBank['test_03'] = {
    title: "Theory and formulae Test - Conic Sections",
    randomizePoolSize: 30,
    timeLimitMins: 10,
    questions: [
    {
        "type": "mcq",
        "text": "The product of the perpendiculars drawn from the two foci of a hyperbola upon any tangent is equal to:",
        "options": [
            "a<sup>2</sup>",
            "b<sup>2</sup>",
            "ab",
            "a<sup>2</sup> + b<sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "Similar to the ellipse, the product of perpendiculars from the foci to any tangent of a hyperbola is b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the length of the focal chord of y<sup>2</sup> = 4ax making an angle &alpha; with the x-axis?",
        "options": [
            "4a sin<sup>2</sup>&alpha;",
            "4a cos<sup>2</sup>&alpha;",
            "4a cosec<sup>2</sup>&alpha;",
            "4a sec<sup>2</sup>&alpha;"
        ],
        "correctAnswer": 2,
        "solution": "The length of a focal chord at angle &alpha; is 4a cosec<sup>2</sup>&alpha;."
    },
    {
        "type": "mcq",
        "text": "REFLECTION PROPERTY: A ray of light originating from one focus of an ellipse, after reflection from the ellipse, passes through:",
        "options": [
            "The other focus",
            "The center",
            "The vertex",
            "The directrix"
        ],
        "correctAnswer": 0,
        "solution": "Rays from one focus of an ellipse reflect off the curve and perfectly converge at the other focus."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the pair of tangents drawn from an external point (x<sub>1</sub>, y<sub>1</sub>) to a parabola?",
        "options": [
            "SS<sub>1</sub> = T",
            "SS<sub>1</sub> = T<sup>2</sup>",
            "S = T<sup>2</sup>",
            "T = S<sub>1</sub><sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "The combined equation of the pair of tangents from an external point is SS<sub>1</sub> = T<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the area of the triangle formed by three points on a parabola with parameters t<sub>1</sub>, t<sub>2</sub>, t<sub>3</sub>?",
        "options": [
            "a<sup>2</sup> |(t<sub>1</sub>-t<sub>2</sub>)(t<sub>2</sub>-t<sub>3</sub>)(t<sub>3</sub>-t<sub>1</sub>)|",
            "0.5 a<sup>2</sup> |(t<sub>1</sub>-t<sub>2</sub>)(t<sub>2</sub>-t<sub>3</sub>)(t<sub>3</sub>-t<sub>1</sub>)|",
            "2a<sup>2</sup> |(t<sub>1</sub>-t<sub>2</sub>)(t<sub>2</sub>-t<sub>3</sub>)(t<sub>3</sub>-t<sub>1</sub>)|",
            "4a<sup>2</sup> |(t<sub>1</sub>-t<sub>2</sub>)(t<sub>2</sub>-t<sub>3</sub>)(t<sub>3</sub>-t<sub>1</sub>)|"
        ],
        "correctAnswer": 0,
        "solution": "Using the determinant of coordinates for triangle area, it simplifies precisely to a<sup>2</sup> |(t<sub>1</sub>-t<sub>2</sub>)(t<sub>2</sub>-t<sub>3</sub>)(t<sub>3</sub>-t<sub>1</sub>)|."
    },
    {
        "type": "mcq",
        "text": "What is the length of the sub-tangent at any point (x<sub>1</sub>, y<sub>1</sub>) on the parabola y<sup>2</sup> = 4ax?",
        "options": [
            "x<sub>1</sub>",
            "2x<sub>1</sub>",
            "4a",
            "y<sub>1</sub>"
        ],
        "correctAnswer": 1,
        "solution": "The length of the sub-tangent is 2x<sub>1</sub>. It is always bisected at the vertex."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the normal at the parametric point 't' on xy = c<sup>2</sup>?",
        "options": [
            "xt<sup>3</sup> - yt - ct<sup>4</sup> + c = 0",
            "xt<sup>3</sup> - yt = 0",
            "x/t - yt = c",
            "x - yt<sup>2</sup> = c/t"
        ],
        "correctAnswer": 0,
        "solution": "The normal is xt<sup>3</sup> - yt - ct<sup>4</sup> + c = 0."
    },
    {
        "type": "mcq",
        "text": "What is the angle between the asymptotes of the hyperbola?",
        "options": [
            "2 tan<sup>-1</sup>(b/a)",
            "tan<sup>-1</sup>(b/a)",
            "2 tan<sup>-1</sup>(a/b)",
            "tan<sup>-1</sup>(a/b)"
        ],
        "correctAnswer": 0,
        "solution": "Since slopes are &plusmn;b/a, the angle is 2 tan<sup>-1</sup>(b/a) or 2 sec<sup>-1</sup>(e)."
    },
    {
        "type": "mcq",
        "text": "For the standard ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 (a &gt; b), what is the relation between a, b, and eccentricity e?",
        "options": [
            "b<sup>2</sup> = a<sup>2</sup>(e<sup>2</sup> - 1)",
            "a<sup>2</sup> = b<sup>2</sup>(1 - e<sup>2</sup>)",
            "b<sup>2</sup> = a<sup>2</sup>(1 - e<sup>2</sup>)",
            "a<sup>2</sup> = b<sup>2</sup>(e<sup>2</sup> - 1)"
        ],
        "correctAnswer": 2,
        "solution": "For an ellipse, e < 1, so b<sup>2</sup> = a<sup>2</sup>(1 - e<sup>2</sup>)."
    },
    {
        "type": "mcq",
        "text": "What are the coordinates of the foci of x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 (a &gt; b)?",
        "options": [
            "(0, &plusmn;be)",
            "(&plusmn;ae, 0)",
            "(&plusmn;a, 0)",
            "(0, &plusmn;b)"
        ],
        "correctAnswer": 1,
        "solution": "Since the major axis is along the x-axis, foci are at (&plusmn;ae, 0)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent at the parametric point 't' on xy = c<sup>2</sup>?",
        "options": [
            "x/t + yt = 2c",
            "xt + y/t = 2c",
            "x/t - yt = 2c",
            "x/t + yt = c"
        ],
        "correctAnswer": 0,
        "solution": "Substituting x<sub>1</sub>=ct and y<sub>1</sub>=c/t into xy<sub>1</sub>+yx<sub>1</sub>=2c<sup>2</sup> gives x(c/t) + y(ct) = 2c<sup>2</sup> &rarr; x/t + yt = 2c."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the normal to the ellipse at (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "a<sup>2</sup>x/x<sub>1</sub> + b<sup>2</sup>y/y<sub>1</sub> = a<sup>2</sup> + b<sup>2</sup>",
            "a<sup>2</sup>x/x<sub>1</sub> - b<sup>2</sup>y/y<sub>1</sub> = a<sup>2</sup> - b<sup>2</sup>",
            "ax/x<sub>1</sub> - by/y<sub>1</sub> = a - b",
            "x/x<sub>1</sub> - y/y<sub>1</sub> = a<sup>2</sup> - b<sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "The normal equation is a<sup>2</sup>x/x<sub>1</sub> - b<sup>2</sup>y/y<sub>1</sub> = a<sup>2</sup> - b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the sum of the focal distances of any point P on an ellipse?",
        "options": [
            "Length of minor axis (2b)",
            "Distance between foci (2ae)",
            "Length of latus rectum",
            "Length of major axis (2a)"
        ],
        "correctAnswer": 3,
        "solution": "A fundamental property of an ellipse: SP + S'P = 2a (length of major axis)."
    },
    {
        "type": "mcq",
        "text": "What is the condition for y = mx + c to be a tangent to the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "c<sup>2</sup> = a<sup>2</sup>m<sup>2</sup> - b<sup>2</sup>",
            "c<sup>2</sup> = a<sup>2</sup>m<sup>2</sup> + b<sup>2</sup>",
            "c<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>m<sup>2</sup>",
            "c = a/m"
        ],
        "correctAnswer": 1,
        "solution": "Solving line and ellipse yields a quadratic. Setting discriminant to 0 gives c<sup>2</sup> = a<sup>2</sup>m<sup>2</sup> + b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the length of the transverse axis of x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "2b",
            "a",
            "2a",
            "2a/e"
        ],
        "correctAnswer": 2,
        "solution": "The transverse axis lies along the x-axis with length 2a."
    },
    {
        "type": "mcq",
        "text": "What defines a rectangular (equilateral) hyperbola?",
        "options": [
            "a > b",
            "a < b",
            "a = b",
            "a = 2b"
        ],
        "correctAnswer": 2,
        "solution": "A rectangular hyperbola has its transverse and conjugate axes equal in length, so a = b."
    },
    {
        "type": "mcq",
        "text": "What is the distance between the center and a directrix of the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "a/e",
            "ae",
            "a",
            "b/e"
        ],
        "correctAnswer": 0,
        "solution": "The center is at (0,0) and the directrix is at x = a/e. Distance is a/e."
    },
    {
        "type": "mcq",
        "text": "If a point lies outside the ellipse, the value of S<sub>1</sub> (where S = x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> - 1) is:",
        "options": [
            "S<sub>1</sub> < 0",
            "S<sub>1</sub> = 0",
            "S<sub>1</sub> > 0",
            "Undefined"
        ],
        "correctAnswer": 2,
        "solution": "For a point outside the curve, the power of the point S<sub>1</sub> > 0."
    },
    {
        "type": "mcq",
        "text": "What is the locus of the point of intersection of perpendicular tangents to a parabola?",
        "options": [
            "The Axis",
            "The Latus Rectum",
            "The Directrix",
            "The Tangent at Vertex"
        ],
        "correctAnswer": 2,
        "solution": "Perpendicular tangents intersect on the directrix (which acts as the director circle for a parabola)."
    },
    {
        "type": "mcq",
        "text": "What are the coordinates of the foci of x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "(0, &plusmn;be)",
            "(&plusmn;ae, 0)",
            "(&plusmn;a, 0)",
            "(0, &plusmn;b)"
        ],
        "correctAnswer": 1,
        "solution": "The foci lie on the transverse axis (x-axis) at (&plusmn;ae, 0)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the chord of the parabola y<sup>2</sup> = 4ax with a given middle point (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "T = 0",
            "S = S<sub>1</sub>",
            "T = S<sub>1</sub>",
            "SS<sub>1</sub> = T<sup>2</sup>"
        ],
        "correctAnswer": 2,
        "solution": "The equation of a chord with a given middle point for any conic is T = S<sub>1</sub>."
    },
    {
        "type": "mcq",
        "text": "What is the length of the latus rectum for x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "2a<sup>2</sup>/b",
            "2b<sup>2</sup>/a",
            "b<sup>2</sup>/a",
            "a<sup>2</sup>/b"
        ],
        "correctAnswer": 1,
        "solution": "The length of the latus rectum is 2b<sup>2</sup>/a."
    },
    {
        "type": "mcq",
        "text": "What is the condition for the line y = mx + c to be a tangent to y<sup>2</sup> = 4ax?",
        "options": [
            "c = a/m",
            "c = am",
            "c = a/m<sup>2</sup>",
            "c = -a/m"
        ],
        "correctAnswer": 0,
        "solution": "For tangency, the discriminant of the substitution quadratic must be zero, leading to c = a/m."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the chord of contact from an external point (x<sub>1</sub>, y<sub>1</sub>) to the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "xx<sub>1</sub>/a<sup>2</sup> - yy<sub>1</sub>/b<sup>2</sup> = 1",
            "xx<sub>1</sub>/a<sup>2</sup> + yy<sub>1</sub>/b<sup>2</sup> = 1",
            "T = S<sub>1</sub>",
            "SS<sub>1</sub> = T<sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "The chord of contact uses the T=0 form: xx<sub>1</sub>/a<sup>2</sup> + yy<sub>1</sub>/b<sup>2</sup> = 1."
    },
    {
        "type": "mcq",
        "text": "If a normal at t<sub>1</sub> intersects the parabola y<sup>2</sup> = 4ax again at t<sub>2</sub>, what is the relation?",
        "options": [
            "t<sub>2</sub> = -t<sub>1</sub> - 1/t<sub>1</sub>",
            "t<sub>2</sub> = -t<sub>1</sub> - 2/t<sub>1</sub>",
            "t<sub>2</sub> = t<sub>1</sub> + 2/t<sub>1</sub>",
            "t<sub>2</sub> = -t<sub>1</sub> + 2/t<sub>1</sub>"
        ],
        "correctAnswer": 1,
        "solution": "Substituting (at<sub>2</sub><sup>2</sup>, 2at<sub>2</sub>) into normal at t<sub>1</sub> simplifies to t<sub>2</sub> = -t<sub>1</sub> - 2/t<sub>1</sub>."
    },
    {
        "type": "mcq",
        "text": "What are the endpoints of the latus rectum for y<sup>2</sup> = 4ax?",
        "options": [
            "(a, &plusmn;a)",
            "(a, &plusmn;2a)",
            "(&plusmn;a, 2a)",
            "(&plusmn;2a, a)"
        ],
        "correctAnswer": 1,
        "solution": "Substituting x = a into y<sup>2</sup> = 4ax gives y = &plusmn;2a. Endpoints are (a, &plusmn;2a)."
    },
    {
        "type": "mcq",
        "text": "What are the equations of the directrices of x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 (a &gt; b)?",
        "options": [
            "x = &plusmn; ae",
            "y = &plusmn; be",
            "x = &plusmn; a/e",
            "y = &plusmn; b/e"
        ],
        "correctAnswer": 2,
        "solution": "The directrices are vertical lines outside the vertices at x = &plusmn; a/e."
    },
    {
        "type": "mcq",
        "text": "What is the general condition for a second-degree equation ax<sup>2</sup>+2hxy+by<sup>2</sup>+2gx+2fy+c=0 to represent an ellipse?",
        "options": [
            "h<sup>2</sup> = ab and &Delta; &ne; 0",
            "h<sup>2</sup> > ab and &Delta; &ne; 0",
            "h<sup>2</sup> < ab and &Delta; &ne; 0",
            "h<sup>2</sup> < ab and &Delta; = 0"
        ],
        "correctAnswer": 2,
        "solution": "For an ellipse, h<sup>2</sup> < ab and it must not be a degenerate conic (&Delta; &ne; 0)."
    },
    {
        "type": "mcq",
        "text": "What is the length of the sub-normal for a point (x<sub>1</sub>, y<sub>1</sub>) on an ellipse?",
        "options": [
            "|x<sub>1</sub>(1-e<sup>2</sup>)|",
            "|x<sub>1</sub>e<sup>2</sup>|",
            "|y<sub>1</sub>e<sup>2</sup>|",
            "|y<sub>1</sub>(1-e<sup>2</sup>)|"
        ],
        "correctAnswer": 0,
        "solution": "Subnormal = |y<sub>1</sub> &middot; (dy/dx)|. For an ellipse, dy/dx = -b<sup>2</sup>x<sub>1</sub> / a<sup>2</sup>y<sub>1</sub>. Thus subnormal is |b<sup>2</sup>x<sub>1</sub>/a<sup>2</sup>| = |x<sub>1</sub>(1-e<sup>2</sup>)|."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the director circle of x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> - b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = b<sup>2</sup> - a<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = 2a<sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "Locus of perpendicular tangents for a hyperbola is x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> - b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the general condition for a second-degree equation ax<sup>2</sup>+2hxy+by<sup>2</sup>+2gx+2fy+c=0 to represent a hyperbola?",
        "options": [
            "h<sup>2</sup> = ab and &Delta; &ne; 0",
            "h<sup>2</sup> > ab and &Delta; &ne; 0",
            "h<sup>2</sup> < ab and &Delta; &ne; 0",
            "h<sup>2</sup> > ab and &Delta; = 0"
        ],
        "correctAnswer": 1,
        "solution": "For a hyperbola, h<sup>2</sup> > ab and it must not be a degenerate conic (&Delta; &ne; 0)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent at the parametric point 't' on y<sup>2</sup> = 4ax?",
        "options": [
            "y = tx + at<sup>2</sup>",
            "ty = x + at<sup>2</sup>",
            "ty = x - at<sup>2</sup>",
            "y = tx - at<sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "Substituting x<sub>1</sub> = at<sup>2</sup>, y<sub>1</sub> = 2at into yy<sub>1</sub> = 2a(x+x<sub>1</sub>) gives ty = x + at<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the ellipse if its center is (h,k) and major axis is parallel to the x-axis?",
        "options": [
            "(x-h)<sup>2</sup>/a<sup>2</sup> + (y-k)<sup>2</sup>/b<sup>2</sup> = 1",
            "(x-k)<sup>2</sup>/a<sup>2</sup> + (y-h)<sup>2</sup>/b<sup>2</sup> = 1",
            "(y-k)<sup>2</sup>/a<sup>2</sup> + (x-h)<sup>2</sup>/b<sup>2</sup> = 1",
            "(x-h)<sup>2</sup>/b<sup>2</sup> + (y-k)<sup>2</sup>/a<sup>2</sup> = 1"
        ],
        "correctAnswer": 0,
        "solution": "Shifting the origin to (h,k) gives the equation (x-h)<sup>2</sup>/a<sup>2</sup> + (y-k)<sup>2</sup>/b<sup>2</sup> = 1."
    },
    {
        "type": "mcq",
        "text": "What are the equations of the asymptotes of x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "y = &plusmn; (a/b)x",
            "y = &plusmn; (b/a)x",
            "x/a + y/b = 1",
            "x/a - y/b = 1"
        ],
        "correctAnswer": 1,
        "solution": "Setting the RHS to 0 gives x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 0, which factors to y = &plusmn; (b/a)x."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the pair of tangents drawn from an external point (x<sub>1</sub>, y<sub>1</sub>) to an ellipse?",
        "options": [
            "SS<sub>1</sub> = T",
            "SS<sub>1</sub> = T<sup>2</sup>",
            "S = T<sup>2</sup>",
            "T = S<sub>1</sub><sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "The combined equation of the pair of tangents from an external point is SS<sub>1</sub> = T<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "If the chord of contact of tangents from a point P to a parabola is a focal chord, then P must lie on:",
        "options": [
            "The axis",
            "The latus rectum",
            "The directrix",
            "The tangent at vertex"
        ],
        "correctAnswer": 2,
        "solution": "Tangents drawn from any point on the directrix are perpendicular, and their chord of contact always passes through the focus."
    },
    {
        "type": "mcq",
        "text": "What is the general condition for a second-degree equation ax<sup>2</sup>+2hxy+by<sup>2</sup>+2gx+2fy+c=0 to represent a parabola?",
        "options": [
            "h<sup>2</sup> = ab and &Delta; &ne; 0",
            "h<sup>2</sup> > ab and &Delta; = 0",
            "h<sup>2</sup> < ab and &Delta; &ne; 0",
            "h<sup>2</sup> = ab and &Delta; = 0"
        ],
        "correctAnswer": 0,
        "solution": "For a parabola, the second-degree terms form a perfect square (h<sup>2</sup> = ab) and it must not be degenerate (&Delta; &ne; 0)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent at parametric angle &theta; on the hyperbola?",
        "options": [
            "x cos&theta;/a - y sin&theta;/b = 1",
            "x sec&theta;/a - y tan&theta;/b = 1",
            "x tan&theta;/a - y sec&theta;/b = 1",
            "x sec&theta;/a + y tan&theta;/b = 1"
        ],
        "correctAnswer": 1,
        "solution": "Substituting x = a sec&theta; and y = b tan&theta; into T=0 yields x sec&theta;/a - y tan&theta;/b = 1."
    },
    {
        "type": "mcq",
        "text": "For the parabola y<sup>2</sup> = 4ax, what are the coordinates of the focus?",
        "options": [
            "(a, 0)",
            "(0, a)",
            "(-a, 0)",
            "(0, -a)"
        ],
        "correctAnswer": 0,
        "solution": "The focus of y<sup>2</sup> = 4ax lies on the x-axis at a distance 'a' from the vertex: (a, 0)."
    },
    {
        "type": "mcq",
        "text": "What is the point of contact of the tangent y = mx + a/m to the parabola y<sup>2</sup> = 4ax?",
        "options": [
            "(a/m<sup>2</sup>, 2a/m)",
            "(a/m, 2a/m<sup>2</sup>)",
            "(am<sup>2</sup>, 2am)",
            "(-a/m<sup>2</sup>, -2a/m)"
        ],
        "correctAnswer": 0,
        "solution": "Comparing with parametric point (at<sup>2</sup>, 2at), the slope is 1/t. Replacing t = 1/m gives (a/m<sup>2</sup>, 2a/m)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the directrix for the parabola y<sup>2</sup> = 4ax?",
        "options": [
            "x = a",
            "y = a",
            "x = -a",
            "y = -a"
        ],
        "correctAnswer": 2,
        "solution": "The directrix is behind the vertex at distance 'a', hence x = -a."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent to the ellipse at the point (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "xx<sub>1</sub>/a<sup>2</sup> - yy<sub>1</sub>/b<sup>2</sup> = 1",
            "xx<sub>1</sub>/a<sup>2</sup> + yy<sub>1</sub>/b<sup>2</sup> = 1",
            "xx<sub>1</sub>/a + yy<sub>1</sub>/b = 1",
            "xy<sub>1</sub>/a<sup>2</sup> + yx<sub>1</sub>/b<sup>2</sup> = 1"
        ],
        "correctAnswer": 1,
        "solution": "Using T=0, replace x<sup>2</sup> with xx<sub>1</sub> and y<sup>2</sup> with yy<sub>1</sub>: xx<sub>1</sub>/a<sup>2</sup> + yy<sub>1</sub>/b<sup>2</sup> = 1."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the director circle of x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> - b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = ab"
        ],
        "correctAnswer": 1,
        "solution": "The director circle is the locus of intersection of perpendicular tangents: x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "For the hyperbola x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1, what is the equation of the chord joining points with eccentric angles &alpha; and &beta;?",
        "options": [
            "(x/a)cos((&alpha;-&beta;)/2) - (y/b)sin((&alpha;+&beta;)/2) = cos((&alpha;+&beta;)/2)",
            "(x/a)cos((&alpha;+&beta;)/2) - (y/b)sin((&alpha;+&beta;)/2) = cos((&alpha;-&beta;)/2)",
            "(x/a)cos((&alpha;-&beta;)/2) - (y/b)sin((&alpha;+&beta;)/2) = sin((&alpha;+&beta;)/2)",
            "(x/a)cos(&alpha;) - (y/b)sin(&beta;) = 1"
        ],
        "correctAnswer": 0,
        "solution": "For a hyperbola, the chord equation is (x/a)cos((&alpha;-&beta;)/2) - (y/b)sin((&alpha;+&beta;)/2) = cos((&alpha;+&beta;)/2)."
    },
    {
        "type": "mcq",
        "text": "For the standard hyperbola x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1, what is the relation between a, b, and eccentricity e?",
        "options": [
            "b<sup>2</sup> = a<sup>2</sup>(1 - e<sup>2</sup>)",
            "b<sup>2</sup> = a<sup>2</sup>(e<sup>2</sup> - 1)",
            "a<sup>2</sup> = b<sup>2</sup>(1 - e<sup>2</sup>)",
            "a<sup>2</sup> = b<sup>2</sup>(e<sup>2</sup> - 1)"
        ],
        "correctAnswer": 1,
        "solution": "For a hyperbola, e > 1, so b<sup>2</sup> = a<sup>2</sup>(e<sup>2</sup> - 1)."
    },
    {
        "type": "mcq",
        "text": "What is the length of the sub-tangent for a point (x<sub>1</sub>, y<sub>1</sub>) on an ellipse?",
        "options": [
            "|x<sub>1</sub> - a<sup>2</sup>/x<sub>1</sub>|",
            "|a<sup>2</sup>/x<sub>1</sub>|",
            "|x<sub>1</sub>|",
            "|y<sub>1</sub> - b<sup>2</sup>/y<sub>1</sub>|"
        ],
        "correctAnswer": 0,
        "solution": "The tangent meets the x-axis at a<sup>2</sup>/x<sub>1</sub>. The subtangent length is the distance from the projection x<sub>1</sub> to this intercept: |x<sub>1</sub> - a<sup>2</sup>/x<sub>1</sub>|."
    },
    {
        "type": "mcq",
        "text": "If a circle intersects a parabola in four points, the sum of their ordinates (y-coordinates) is:",
        "options": [
            "4a",
            "2a",
            "0",
            "Dependent on the circle's radius"
        ],
        "correctAnswer": 2,
        "solution": "Solving a circle equation with y<sup>2</sup>=4ax gives a degree 4 equation in y with no y<sup>3</sup> term. Hence, the sum of roots is 0."
    },
    {
        "type": "mcq",
        "text": "What is the length of the conjugate axis of x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "2b",
            "b",
            "2a",
            "a"
        ],
        "correctAnswer": 0,
        "solution": "The conjugate axis lies along the y-axis with length 2b."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent at parametric angle &theta; on the ellipse?",
        "options": [
            "x cos&theta;/a + y sin&theta;/b = 1",
            "x sin&theta;/a + y cos&theta;/b = 1",
            "x cos&theta;/a - y sin&theta;/b = 1",
            "ax cos&theta; + by sin&theta; = 1"
        ],
        "correctAnswer": 0,
        "solution": "Substituting x<sub>1</sub> = a cos&theta; and y<sub>1</sub> = b sin&theta; into T=0 gives x cos&theta;/a + y sin&theta;/b = 1."
    },
    {
        "type": "mcq",
        "text": "What is the eccentricity of any rectangular hyperbola?",
        "options": [
            "2",
            "&radic;2",
            "&radic;3",
            "1.5"
        ],
        "correctAnswer": 1,
        "solution": "Since a = b, e = &radic;(1 + b<sup>2</sup>/a<sup>2</sup>) = &radic;(1 + 1) = &radic;2."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent to y<sup>2</sup> = 4ax at the point (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "yy<sub>1</sub> = 2a(x + x<sub>1</sub>)",
            "yy<sub>1</sub> = 4a(x - x<sub>1</sub>)",
            "xx<sub>1</sub> = 2a(y + y<sub>1</sub>)",
            "y = mx + x<sub>1</sub>"
        ],
        "correctAnswer": 0,
        "solution": "Using T = 0 transformation: y<sup>2</sup> &rarr; yy<sub>1</sub> and 2x &rarr; (x + x<sub>1</sub>)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the normal at parametric angle &theta; on the hyperbola?",
        "options": [
            "ax cos&theta; + by cot&theta; = a<sup>2</sup> + b<sup>2</sup>",
            "ax/sec&theta; + by/tan&theta; = a<sup>2</sup> + b<sup>2</sup>",
            "ax cos&theta; - by cot&theta; = a<sup>2</sup> - b<sup>2</sup>",
            "ax/sec&theta; - by/tan&theta; = a<sup>2</sup> - b<sup>2</sup>"
        ],
        "correctAnswer": 0,
        "solution": "Substituting x = a sec&theta; and y = b tan&theta; into the normal equation yields ax cos&theta; + by cot&theta; = a<sup>2</sup> + b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the length of the latus rectum of y<sup>2</sup> = 4ax?",
        "options": [
            "a",
            "2a",
            "4a",
            "8a"
        ],
        "correctAnswer": 2,
        "solution": "The latus rectum length is 4 times the focal distance from vertex: 4a."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the chord of the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 with a given middle point (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "T = 0",
            "S = S<sub>1</sub>",
            "T = S<sub>1</sub>",
            "SS<sub>1</sub> = T<sup>2</sup>"
        ],
        "correctAnswer": 2,
        "solution": "The equation of a chord with a given middle point for any conic is T = S<sub>1</sub>."
    },
    {
        "type": "mcq",
        "text": "What is the length of the latus rectum for x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 (a &gt; b)?",
        "options": [
            "2a<sup>2</sup>/b",
            "2b<sup>2</sup>/a",
            "b<sup>2</sup>/a",
            "a<sup>2</sup>/b"
        ],
        "correctAnswer": 1,
        "solution": "The length of the latus rectum is 2b<sup>2</sup>/a."
    },
    {
        "type": "mcq",
        "text": "If the chord joining t<sub>1</sub> and t<sub>2</sub> is a focal chord of y<sup>2</sup> = 4ax, what is the relation between t<sub>1</sub> and t<sub>2</sub>?",
        "options": [
            "t<sub>1</sub>t<sub>2</sub> = 1",
            "t<sub>1</sub>t<sub>2</sub> = -1",
            "t<sub>1</sub> + t<sub>2</sub> = 0",
            "t<sub>1</sub> + t<sub>2</sub> = 1"
        ],
        "correctAnswer": 1,
        "solution": "A focal chord passes through (a,0). Substituting into the chord equation gives t<sub>1</sub>t<sub>2</sub> = -1."
    },
    {
        "type": "mcq",
        "text": "What is the condition for the point (x<sub>1</sub>, y<sub>1</sub>) to lie outside the parabola y<sup>2</sup> = 4ax?",
        "options": [
            "y<sub>1</sub><sup>2</sup> - 4ax<sub>1</sub> < 0",
            "y<sub>1</sub><sup>2</sup> - 4ax<sub>1</sub> = 0",
            "y<sub>1</sub><sup>2</sup> - 4ax<sub>1</sub> > 0",
            "y<sub>1</sub><sup>2</sup> + 4ax<sub>1</sub> > 0"
        ],
        "correctAnswer": 2,
        "solution": "For a point to lie outside the curve, the power of the point S<sub>1</sub> must be greater than zero."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the chord of contact from an external point (x<sub>1</sub>, y<sub>1</sub>) to the hyperbola x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "xx<sub>1</sub>/a<sup>2</sup> + yy<sub>1</sub>/b<sup>2</sup> = 1",
            "xx<sub>1</sub>/a<sup>2</sup> - yy<sub>1</sub>/b<sup>2</sup> = 1",
            "T = S<sub>1</sub>",
            "SS<sub>1</sub> = T<sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "The chord of contact uses the T=0 form: xx<sub>1</sub>/a<sup>2</sup> - yy<sub>1</sub>/b<sup>2</sup> = 1."
    },
    {
        "type": "mcq",
        "text": "For an ellipse, if the length of the latus rectum is equal to half its minor axis, what is its eccentricity?",
        "options": [
            "&radic;3/2",
            "1/2",
            "&radic;2/2",
            "1/&radic;3"
        ],
        "correctAnswer": 0,
        "solution": "2b<sup>2</sup>/a = b &rarr; 2b = a &rarr; 2a&radic;(1-e<sup>2</sup>) = a &rarr; 4(1-e<sup>2</sup>) = 1 &rarr; e<sup>2</sup> = 3/4 &rarr; e = &radic;3/2."
    },
    {
        "type": "mcq",
        "text": "What is the maximum number of normals that can be drawn from a given point to an ellipse?",
        "options": [
            "1",
            "2",
            "3",
            "4"
        ],
        "correctAnswer": 3,
        "solution": "In general, a maximum of 4 distinct normals can be drawn from a point to an ellipse (or hyperbola)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the pair of tangents drawn from an external point (x<sub>1</sub>, y<sub>1</sub>) to a hyperbola?",
        "options": [
            "SS<sub>1</sub> = T",
            "SS<sub>1</sub> = T<sup>2</sup>",
            "S = T<sup>2</sup>",
            "T = S<sub>1</sub><sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "The combined equation of the pair of tangents from an external point is SS<sub>1</sub> = T<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "The tangent at any point on a parabola bisects the angle between the focal distance of the point and:",
        "options": [
            "The perpendicular to the directrix",
            "The axis of the parabola",
            "The latus rectum",
            "The normal at the vertex"
        ],
        "correctAnswer": 0,
        "solution": "The tangent bisects the angle between the line joining the point to the focus and the perpendicular dropped from the point to the directrix."
    },
    {
        "type": "mcq",
        "text": "What is the point of intersection of tangents drawn at t<sub>1</sub> and t<sub>2</sub> on y<sup>2</sup> = 4ax?",
        "options": [
            "(a(t<sub>1</sub>+t<sub>2</sub>), a(t<sub>1</sub>t<sub>2</sub>))",
            "(at<sub>1</sub>t<sub>2</sub>, a(t<sub>1</sub>+t<sub>2</sub>))",
            "(at<sub>1</sub>t<sub>2</sub>, 2a(t<sub>1</sub>+t<sub>2</sub>))",
            "(2at<sub>1</sub>t<sub>2</sub>, a(t<sub>1</sub>+t<sub>2</sub>))"
        ],
        "correctAnswer": 1,
        "solution": "Solving the tangents t<sub>1</sub>y = x + at<sub>1</sub><sup>2</sup> and t<sub>2</sub>y = x + at<sub>2</sub><sup>2</sup> yields x = at<sub>1</sub>t<sub>2</sub>, y = a(t<sub>1</sub>+t<sub>2</sub>)."
    },
    {
        "type": "mcq",
        "text": "The locus of the foot of the perpendicular drawn from the focus upon any tangent to an ellipse is:",
        "options": [
            "The directrix",
            "The auxiliary circle",
            "The director circle",
            "The major/transverse axis"
        ],
        "correctAnswer": 1,
        "solution": "For central conics, the foot of the perpendicular from a focus to any tangent always lies on the auxiliary circle."
    },
    {
        "type": "mcq",
        "text": "What is the standard equation of a parabola opening rightwards with vertex at origin?",
        "options": [
            "x<sup>2</sup> = 4ay",
            "y<sup>2</sup> = 4ax",
            "x<sup>2</sup> = -4ay",
            "y<sup>2</sup> = -4ax"
        ],
        "correctAnswer": 1,
        "solution": "The standard equation of a rightward opening parabola is y<sup>2</sup> = 4ax."
    },
    {
        "type": "mcq",
        "text": "What is the equation of a parabola with vertex at (h, k) and axis parallel to the x-axis?",
        "options": [
            "(x-h)<sup>2</sup> = 4a(y-k)",
            "(y-k)<sup>2</sup> = 4a(x-h)",
            "(y-h)<sup>2</sup> = 4a(x-k)",
            "(x-k)<sup>2</sup> = 4a(y-h)"
        ],
        "correctAnswer": 1,
        "solution": "A right/left opening parabola shifted to (h,k) has the equation (y-k)<sup>2</sup> = 4a(x-h)."
    },
    {
        "type": "mcq",
        "text": "What are the parametric coordinates of any point on the parabola y<sup>2</sup> = 4ax?",
        "options": [
            "(a cos t, a sin t)",
            "(at, 2at)",
            "(at<sup>2</sup>, 2at)",
            "(2at, at<sup>2</sup>)"
        ],
        "correctAnswer": 2,
        "solution": "Substituting x = at<sup>2</sup> into y<sup>2</sup> = 4ax yields y = 2at. Hence, (at<sup>2</sup>, 2at)."
    },
    {
        "type": "mcq",
        "text": "If the asymptotes of a hyperbola are perpendicular to each other, the hyperbola is:",
        "options": [
            "Degenerate",
            "An ellipse",
            "Rectangular",
            "A parabola"
        ],
        "correctAnswer": 2,
        "solution": "If the asymptotes are perpendicular, the angle is 90&deg;, meaning 2tan<sup>-1</sup>(b/a) = 90&deg; &rarr; b=a. This defines a rectangular hyperbola."
    },
    {
        "type": "mcq",
        "text": "What are the parametric coordinates of the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "(a sec &theta;, b tan &theta;)",
            "(a cos &theta;, b sin &theta;)",
            "(a sin &theta;, b cos &theta;)",
            "(a tan &theta;, b sec &theta;)"
        ],
        "correctAnswer": 1,
        "solution": "Using the trigonometric identity cos<sup>2</sup>&theta; + sin<sup>2</sup>&theta; = 1 gives x = a cos &theta;, y = b sin &theta;."
    },
    {
        "type": "mcq",
        "text": "What is the distance between the two directrices of an ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "2ae",
            "a/e",
            "2a/e",
            "2a"
        ],
        "correctAnswer": 2,
        "solution": "The directrices are x = a/e and x = -a/e, so the distance between them is 2a/e."
    },
    {
        "type": "mcq",
        "text": "What are the parametric coordinates for the rectangular hyperbola xy = c<sup>2</sup>?",
        "options": [
            "(c cos t, c sin t)",
            "(ct, c/t)",
            "(c sec t, c tan t)",
            "(c/t, ct)"
        ],
        "correctAnswer": 1,
        "solution": "Setting x = ct gives y = c<sup>2</sup> / (ct) = c/t. Thus, coordinates are (ct, c/t)."
    },
    {
        "type": "mcq",
        "text": "If e<sub>1</sub> and e<sub>2</sub> are the eccentricities of a hyperbola and its conjugate, what is the relation between them?",
        "options": [
            "e<sub>1</sub><sup>2</sup> + e<sub>2</sub><sup>2</sup> = 1",
            "1/e<sub>1</sub><sup>2</sup> + 1/e<sub>2</sub><sup>2</sup> = 1",
            "e<sub>1</sub> + e<sub>2</sub> = 2",
            "e<sub>1</sub>e<sub>2</sub> = 1"
        ],
        "correctAnswer": 1,
        "solution": "Since e<sub>1</sub><sup>2</sup> = 1 + b<sup>2</sup>/a<sup>2</sup> and e<sub>2</sub><sup>2</sup> = 1 + a<sup>2</sup>/b<sup>2</sup>, solving gives 1/e<sub>1</sub><sup>2</sup> + 1/e<sub>2</sub><sup>2</sup> = 1."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the normal to y<sup>2</sup> = 4ax at the parametric point 't'?",
        "options": [
            "y = -tx + 2at + at<sup>3</sup>",
            "y = tx - 2at - at<sup>3</sup>",
            "ty = -x + 2at + at<sup>3</sup>",
            "x = ty - 2at - at<sup>3</sup>"
        ],
        "correctAnswer": 0,
        "solution": "The normal is perpendicular to tangent ty = x + at<sup>2</sup>. Its slope is -t. Equation: y = -tx + 2at + at<sup>3</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the auxiliary circle of x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 (a &gt; b)?",
        "options": [
            "x<sup>2</sup> + y<sup>2</sup> = b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = ab"
        ],
        "correctAnswer": 1,
        "solution": "The auxiliary circle is described on the major axis as diameter: x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the conjugate hyperbola of x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "x<sup>2</sup>/b<sup>2</sup> - y<sup>2</sup>/a<sup>2</sup> = 1",
            "y<sup>2</sup>/a<sup>2</sup> - x<sup>2</sup>/b<sup>2</sup> = 1",
            "y<sup>2</sup>/b<sup>2</sup> - x<sup>2</sup>/a<sup>2</sup> = 1",
            "x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = -1"
        ],
        "correctAnswer": 2,
        "solution": "The conjugate hyperbola swaps the axes: -x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 or y<sup>2</sup>/b<sup>2</sup> - x<sup>2</sup>/a<sup>2</sup> = 1."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the chord of the hyperbola x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1 with a given middle point (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "T = 0",
            "S = S<sub>1</sub>",
            "T = S<sub>1</sub>",
            "SS<sub>1</sub> = T<sup>2</sup>"
        ],
        "correctAnswer": 2,
        "solution": "The equation of a chord with a given middle point for any conic is T = S<sub>1</sub>."
    },
    {
        "type": "mcq",
        "text": "What is the distance between the two foci of an ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "ae",
            "2ae",
            "a/e",
            "2a/e"
        ],
        "correctAnswer": 1,
        "solution": "The foci are at (ae, 0) and (-ae, 0). The distance between them is 2ae."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the chord of contact from an external point (x<sub>1</sub>, y<sub>1</sub>) to y<sup>2</sup> = 4ax?",
        "options": [
            "yy<sub>1</sub> = 2a(x + x<sub>1</sub>)",
            "yy<sub>1</sub> = 4a(x - x<sub>1</sub>)",
            "xx<sub>1</sub> = 2a(y + y<sub>1</sub>)",
            "yy<sub>1</sub> = a(x + x<sub>1</sub>)"
        ],
        "correctAnswer": 0,
        "solution": "The chord of contact uses the T=0 form: yy<sub>1</sub> = 2a(x + x<sub>1</sub>)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the normal to the hyperbola at (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "a<sup>2</sup>x/x<sub>1</sub> - b<sup>2</sup>y/y<sub>1</sub> = a<sup>2</sup> - b<sup>2</sup>",
            "a<sup>2</sup>x/x<sub>1</sub> + b<sup>2</sup>y/y<sub>1</sub> = a<sup>2</sup> + b<sup>2</sup>",
            "ax/x<sub>1</sub> + by/y<sub>1</sub> = a<sup>2</sup> + b<sup>2</sup>",
            "x/x<sub>1</sub> + y/y<sub>1</sub> = a<sup>2</sup> + b<sup>2</sup>"
        ],
        "correctAnswer": 1,
        "solution": "The normal equation is a<sup>2</sup>x/x<sub>1</sub> + b<sup>2</sup>y/y<sub>1</sub> = a<sup>2</sup> + b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the distance between the two directrices of a hyperbola x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "2ae",
            "2a/e",
            "a/e",
            "ae"
        ],
        "correctAnswer": 1,
        "solution": "The directrices are x = &plusmn;a/e, so the distance is 2a/e."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the normal at parametric angle &theta; on the ellipse?",
        "options": [
            "ax sec&theta; - by cosec&theta; = a<sup>2</sup> - b<sup>2</sup>",
            "ax cos&theta; - by sin&theta; = a<sup>2</sup> - b<sup>2</sup>",
            "ax/sec&theta; - by/cosec&theta; = a<sup>2</sup> - b<sup>2</sup>",
            "x/a sec&theta; - y/b cosec&theta; = 1"
        ],
        "correctAnswer": 0,
        "solution": "Substituting x<sub>1</sub> = a cos&theta;, y<sub>1</sub> = b sin&theta; into the normal equation gives ax sec&theta; - by cosec&theta; = a<sup>2</sup> - b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "The locus of the foot of the perpendicular drawn from the focus upon any tangent to a parabola is:",
        "options": [
            "The directrix",
            "The axis",
            "The tangent at the vertex",
            "The latus rectum"
        ],
        "correctAnswer": 2,
        "solution": "The foot of the perpendicular from the focus to any tangent lies exactly on the tangent at the vertex."
    },
    {
        "type": "mcq",
        "text": "What are the parametric coordinates of the hyperbola x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "(a cos &theta;, b sin &theta;)",
            "(a sec &theta;, b tan &theta;)",
            "(a tan &theta;, b sec &theta;)",
            "(a sin &theta;, b cos &theta;)"
        ],
        "correctAnswer": 1,
        "solution": "Using sec<sup>2</sup>&theta; - tan<sup>2</sup>&theta; = 1, we get x = a sec &theta;, y = b tan &theta;."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the auxiliary circle of x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> + b<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup> - b<sup>2</sup>"
        ],
        "correctAnswer": 0,
        "solution": "The auxiliary circle is described on the transverse axis as diameter: x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "The product of the perpendiculars drawn from the two foci of an ellipse upon any tangent is equal to:",
        "options": [
            "a<sup>2</sup>",
            "b<sup>2</sup>",
            "ab",
            "2ae"
        ],
        "correctAnswer": 1,
        "solution": "A standard property of the ellipse: the product of perpendiculars from foci to any tangent is equal to the square of the semi-minor axis (b<sup>2</sup>)."
    },
    {
        "type": "mcq",
        "text": "The locus of the foot of the perpendicular drawn from the focus upon any tangent to a hyperbola is:",
        "options": [
            "The directrix",
            "The auxiliary circle",
            "The director circle",
            "The transverse axis"
        ],
        "correctAnswer": 1,
        "solution": "For central conics, the foot of the perpendicular from a focus to any tangent always lies on the auxiliary circle."
    },
    {
        "type": "mcq",
        "text": "Which point on the auxiliary circle corresponds to the point (a cos&theta;, b sin&theta;) on the ellipse?",
        "options": [
            "(a cos&theta;, a sin&theta;)",
            "(b cos&theta;, a sin&theta;)",
            "(a sin&theta;, a cos&theta;)",
            "(b sin&theta;, b cos&theta;)"
        ],
        "correctAnswer": 0,
        "solution": "The corresponding point on the auxiliary circle x<sup>2</sup>+y<sup>2</sup>=a<sup>2</sup> shares the same eccentric angle &theta;, so it is (a cos&theta;, a sin&theta;)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent at (x<sub>1</sub>, y<sub>1</sub>) for x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "xx<sub>1</sub>/a<sup>2</sup> + yy<sub>1</sub>/b<sup>2</sup> = 1",
            "xx<sub>1</sub>/a<sup>2</sup> - yy<sub>1</sub>/b<sup>2</sup> = 1",
            "x/x<sub>1</sub> - y/y<sub>1</sub> = 1",
            "x<sub>1</sub>/x - y<sub>1</sub>/y = 1"
        ],
        "correctAnswer": 1,
        "solution": "Using T=0, xx<sub>1</sub>/a<sup>2</sup> - yy<sub>1</sub>/b<sup>2</sup> = 1."
    },
    {
        "type": "mcq",
        "text": "REFLECTION PROPERTY: A ray of light directed towards one focus of a hyperbola, after reflection from the outer surface, will:",
        "options": [
            "Pass through the center",
            "Pass through the same focus",
            "Appear to diverge from the other focus",
            "Become parallel to the transverse axis"
        ],
        "correctAnswer": 2,
        "solution": "For a hyperbola, a ray aimed at one focus reflects such that it appears to have originated from the other focus."
    },
    {
        "type": "mcq",
        "text": "What is the slope of the normal to the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 at the point (x<sub>1</sub>, y<sub>1</sub>)?",
        "options": [
            "a<sup>2</sup>y<sub>1</sub> / b<sup>2</sup>x<sub>1</sub>",
            "-b<sup>2</sup>x<sub>1</sub> / a<sup>2</sup>y<sub>1</sub>",
            "b<sup>2</sup>y<sub>1</sub> / a<sup>2</sup>x<sub>1</sub>",
            "-a<sup>2</sup>x<sub>1</sub> / b<sup>2</sup>y<sub>1</sub>"
        ],
        "correctAnswer": 0,
        "solution": "Slope of tangent is -b<sup>2</sup>x<sub>1</sub> / a<sup>2</sup>y<sub>1</sub>. Slope of normal is the negative reciprocal: a<sup>2</sup>y<sub>1</sub> / b<sup>2</sup>x<sub>1</sub>."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the tangent at (x<sub>1</sub>, y<sub>1</sub>) to the hyperbola xy = c<sup>2</sup>?",
        "options": [
            "xy<sub>1</sub> + yx<sub>1</sub> = c<sup>2</sup>",
            "xy<sub>1</sub> - yx<sub>1</sub> = c<sup>2</sup>",
            "xy<sub>1</sub> + yx<sub>1</sub> = 2c<sup>2</sup>",
            "x/x<sub>1</sub> + y/y<sub>1</sub> = 1"
        ],
        "correctAnswer": 2,
        "solution": "Using T=0, replace xy with (xy<sub>1</sub> + yx<sub>1</sub>)/2. Thus (xy<sub>1</sub> + yx<sub>1</sub>)/2 = c<sup>2</sup> &rarr; xy<sub>1</sub> + yx<sub>1</sub> = 2c<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the equation of a rectangular hyperbola whose asymptotes are the coordinate axes?",
        "options": [
            "x<sup>2</sup> - y<sup>2</sup> = a<sup>2</sup>",
            "xy = c<sup>2</sup>",
            "x<sup>2</sup> + y<sup>2</sup> = a<sup>2</sup>",
            "xy = 0"
        ],
        "correctAnswer": 1,
        "solution": "Rotating the axes by 45 degrees transforms x<sup>2</sup> - y<sup>2</sup> = a<sup>2</sup> into xy = c<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "If the foci of an ellipse are (0, &plusmn;be) and vertices are (0, &plusmn;b), which axis is the major axis?",
        "options": [
            "x-axis",
            "y-axis",
            "Line y = x",
            "Line y = -x"
        ],
        "correctAnswer": 1,
        "solution": "The coordinates indicate the ellipse is elongated along the y-axis, making it the major axis."
    },
    {
        "type": "mcq",
        "text": "The maximum area of a rectangle inscribed in the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1 is:",
        "options": [
            "ab",
            "2ab",
            "4ab",
            "&pi;ab/2"
        ],
        "correctAnswer": 1,
        "solution": "A rectangle formed by points (&plusmn;a cos&theta;, &plusmn;b sin&theta;) has area 4ab cos&theta; sin&theta; = 2ab sin(2&theta;). Max is 2ab."
    },
    {
        "type": "mcq",
        "text": "For the hyperbola x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1, the difference of focal distances of any point P is:",
        "options": [
            "2b",
            "2ae",
            "2a",
            "0"
        ],
        "correctAnswer": 2,
        "solution": "Fundamental property: |SP - S'P| = 2a (length of transverse axis)."
    },
    {
        "type": "mcq",
        "text": "What is the semi-latus rectum of a parabola in relation to the segments of a focal chord?",
        "options": [
            "Arithmetic Mean",
            "Geometric Mean",
            "Harmonic Mean",
            "Root Mean Square"
        ],
        "correctAnswer": 2,
        "solution": "The semi-latus rectum (2a) is the Harmonic Mean of the segments of any focal chord: 2a = 2(SP)(SQ)/(SP+SQ)."
    },
    {
        "type": "mcq",
        "text": "What is the equation of the normal in slope form (slope 'm') for y<sup>2</sup> = 4ax?",
        "options": [
            "y = mx - 2am - am<sup>3</sup>",
            "y = mx + 2am + am<sup>3</sup>",
            "y = mx - am - 2am<sup>3</sup>",
            "y = mx - 2a/m - a/m<sup>3</sup>"
        ],
        "correctAnswer": 0,
        "solution": "Substituting t = -m into the parametric normal yields y = mx - 2am - am<sup>3</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the focal distance of a point (x<sub>1</sub>, y<sub>1</sub>) on the parabola y<sup>2</sup> = 4ax?",
        "options": [
            "x<sub>1</sub> - a",
            "y<sub>1</sub> + a",
            "x<sub>1</sub> + a",
            "y<sub>1</sub> - a"
        ],
        "correctAnswer": 2,
        "solution": "Focal distance = distance to directrix. Directrix is x = -a, so distance = |x<sub>1</sub> - (-a)| = x<sub>1</sub> + a."
    },
    {
        "type": "mcq",
        "text": "For the parabola x<sup>2</sup> = 4ay, what is the equation of the directrix?",
        "options": [
            "x = -a",
            "y = -a",
            "x = a",
            "y = a"
        ],
        "correctAnswer": 1,
        "solution": "For an upward opening parabola x<sup>2</sup> = 4ay, the directrix is horizontal and below the vertex: y = -a."
    },
    {
        "type": "mcq",
        "text": "The portion of a tangent to a conic intercepted between the point of contact and the directrix subtends what angle at the corresponding focus?",
        "options": [
            "45&deg;",
            "60&deg;",
            "90&deg;",
            "180&deg;"
        ],
        "correctAnswer": 2,
        "solution": "The segment of a tangent between the contact point and the directrix always subtends a right angle (90&deg;) at the corresponding focus."
    },
    {
        "type": "mcq",
        "text": "REFLECTION PROPERTY: A ray of light parallel to the axis of a parabola, after reflection from the parabola, passes through:",
        "options": [
            "The vertex",
            "The directrix",
            "The focus",
            "The center"
        ],
        "correctAnswer": 2,
        "solution": "By the reflection property of parabolas, all incoming rays parallel to the axis reflect and converge at the focus."
    },
    {
        "type": "mcq",
        "text": "What is the condition for y = mx + c to be a tangent to x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "c<sup>2</sup> = a<sup>2</sup>m<sup>2</sup> + b<sup>2</sup>",
            "c<sup>2</sup> = b<sup>2</sup>m<sup>2</sup> - a<sup>2</sup>",
            "c<sup>2</sup> = a<sup>2</sup>m<sup>2</sup> - b<sup>2</sup>",
            "c = a/m"
        ],
        "correctAnswer": 2,
        "solution": "Setting the discriminant to 0 gives c<sup>2</sup> = a<sup>2</sup>m<sup>2</sup> - b<sup>2</sup>."
    },
    {
        "type": "mcq",
        "text": "What is the length of the sub-normal at any point on the parabola y<sup>2</sup> = 4ax?",
        "options": [
            "a",
            "2a",
            "4a",
            "2x<sub>1</sub>"
        ],
        "correctAnswer": 1,
        "solution": "The sub-normal of a parabola is constant and is equal to the semi-latus rectum, which is 2a."
    },
    {
        "type": "mcq",
        "text": "What is the area of the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1?",
        "options": [
            "&pi;a<sup>2</sup>",
            "&pi;b<sup>2</sup>",
            "&pi;ab",
            "2&pi;ab"
        ],
        "correctAnswer": 2,
        "solution": "The total area of a standard ellipse is &pi;ab."
    },
    {
        "type": "mcq",
        "text": "For the ellipse x<sup>2</sup>/a<sup>2</sup> + y<sup>2</sup>/b<sup>2</sup> = 1, what is the equation of the chord joining points with eccentric angles &alpha; and &beta;?",
        "options": [
            "(x/a)cos((&alpha;+&beta;)/2) + (y/b)sin((&alpha;+&beta;)/2) = cos((&alpha;-&beta;)/2)",
            "(x/a)cos((&alpha;-&beta;)/2) + (y/b)sin((&alpha;-&beta;)/2) = cos((&alpha;+&beta;)/2)",
            "(x/a)sin((&alpha;+&beta;)/2) + (y/b)cos((&alpha;+&beta;)/2) = sin((&alpha;-&beta;)/2)",
            "(x/a)cos(&alpha;+&beta;) + (y/b)sin(&alpha;+&beta;) = 1"
        ],
        "correctAnswer": 0,
        "solution": "The standard equation of the chord joining &alpha; and &beta; on an ellipse is (x/a)cos((&alpha;+&beta;)/2) + (y/b)sin((&alpha;+&beta;)/2) = cos((&alpha;-&beta;)/2)."
    }
]
};
