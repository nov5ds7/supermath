// Fuel File: Mock Test 1
window.testBank = window.testBank || {};

window.testBank['test_01'] = {
    title: "Mock Test 1 (JN20)",
    timeLimitMins: 30,
    questions: [
        {
            type: "mcq",
            text: "Let A and B be the points (A has positive ordinate) common to the ellipse E: x<sup>2</sup> + 4y<sup>2</sup> = 20, hyperbola H: 4y<sup>2</sup> - x<sup>2</sup> = 20. Four lines two from each focus of the hyperbola are drawn that touch the ellipse at P, Q R and S in quadrants I, IV, III and II respectively. Then, the area of the hexagon APQBRS is:",
            options: ["4(&radic;5 + 1)", "8(&radic;5 + 1)", "8(&radic;5 + 2)", "4(&radic;5 + 2)"],
            correctAnswer: 1, // Option 2
            solution: "<b>Step 1: Simplify Equations</b><br>Ellipse (E): x<sup>2</sup>/20 + y<sup>2</sup>/5 = 1. <br>Hyperbola (H): y<sup>2</sup>/5 - x<sup>2</sup>/20 = 1.<br><br><b>Step 2: Foci of Hyperbola</b><br>For H, a<sup>2</sup> = 5 (y-axis is transverse), b<sup>2</sup> = 20.<br>Eccentricity e = &radic;(1 + b<sup>2</sup>/a<sup>2</sup>) = &radic;(1 + 20/5) = &radic;5.<br>Foci are at (0, &plusmn;ae) &rarr; (0, &plusmn;5).<br><br><b>Step 3: Tangents to Ellipse</b><br>Let tangent be y = mx &plusmn; &radic;(a<sup>2</sup>m<sup>2</sup> + b<sup>2</sup>). Here a<sup>2</sup>=20, b<sup>2</sup>=5.<br>Passes through focus (0,5): 5 = &plusmn;&radic;(20m<sup>2</sup> + 5) &rarr; 25 = 20m<sup>2</sup> + 5 &rarr; 20m<sup>2</sup> = 20 &rarr; m = &plusmn;1.<br>Tangents are y = x + 5, y = -x + 5, y = x - 5, y = -x - 5.<br>Solving with E, contact points are P(4,1), Q(4,-1), R(-4,-1), S(-4,1).<br><br><b>Step 4: Find A and B</b><br>Solve E and H simultaneously: (x<sup>2</sup> + 4y<sup>2</sup>) + (4y<sup>2</sup> - x<sup>2</sup>) = 20 + 20 &rarr; 8y<sup>2</sup> = 40 &rarr; y = &plusmn;&radic;5.<br>A = (0, &radic;5) and B = (0, -&radic;5).<br><br><b>Step 5: Area Calculation</b><br>The hexagon is symmetric about the y-axis. The right half forms a polygon with vertices (0,&radic;5), P(4,1), Q(4,-1), (0,-&radic;5).<br>Area of right half = Area of triangle + Rectangle + Triangle = [0.5 &times; 4 &times; (&radic;5 - 1)] + [4 &times; 2] + [0.5 &times; 4 &times; (&radic;5 - 1)] = 4&radic;5 + 4.<br>Total Area = 2 &times; (4&radic;5 + 4) = <b>8(&radic;5 + 1)</b>."
        },
        {
            type: "numerical",
            text: "Let the hyperbola H: x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup> = 1 and the ellipse E: 3x<sup>2</sup> + 4y<sup>2</sup> = 12 be such that the length of latus rectum of H is equal to the length of latus rectum of E. If e<sub>H</sub> and e<sub>E</sub> are the eccentricities of H and E, respectively, then the value of 12(e<sub>H</sub><sup>2</sup> + e<sub>E</sub><sup>2</sup>) is equal to:",
            correctAnswer: "42",
            solution: "<b>Step 1: Properties of Ellipse E</b><br>E: x<sup>2</sup>/4 + y<sup>2</sup>/3 = 1. Here a<sup>2</sup> = 4, b<sup>2</sup> = 3.<br>Length of Latus Rectum (LR) = 2b<sup>2</sup>/a = 2(3)/2 = 3.<br>Eccentricity e<sub>E</sub><sup>2</sup> = 1 - b<sup>2</sup>/a<sup>2</sup> = 1 - 3/4 = 1/4.<br><br><b>Step 2: Properties of Hyperbola H</b><br>H: x<sup>2</sup>/a<sup>2</sup> - y<sup>2</sup>/1 = 1. Here transverse axis is a, conjugate b<sup>2</sup> = 1.<br>LR of H = 2b<sup>2</sup>/a = 2(1)/a = 2/a.<br>Given LR of H = LR of E &rarr; 2/a = 3 &rarr; a = 2/3.<br>Eccentricity e<sub>H</sub><sup>2</sup> = 1 + b<sup>2</sup>/a<sup>2</sup> = 1 + 1/(4/9) = 1 + 9/4 = 13/4.<br><br><b>Step 3: Final Calculation</b><br>12(e<sub>H</sub><sup>2</sup> + e<sub>E</sub><sup>2</sup>) = 12(13/4 + 1/4) = 12(14/4) = 3 &times; 14 = <b>42</b>."
        },
        {
            type: "numerical",
            text: "Let C be the largest circle centered at (2, 0) and inscribed in the ellipse x<sup>2</sup>/36 + y<sup>2</sup>/16 = 1. If (1, &alpha;) lies on C, then 10&alpha;<sup>2</sup> is equal to:",
            correctAnswer: "118",
            solution: "<b>Step 1: Equation of Normal</b><br>Ellipse: x<sup>2</sup>/36 + y<sup>2</sup>/16 = 1 (a=6, b=4). Let contact point be P(6cos&theta;, 4sin&theta;).<br>The normal at P passes through the circle's center (2,0) for maximum inscribed radius.<br>Normal eq: ax/cos&theta; - by/sin&theta; = a<sup>2</sup> - b<sup>2</sup> &rarr; 6x/cos&theta; - 4y/sin&theta; = 20.<br>Passing through (2,0): 12/cos&theta; = 20 &rarr; cos&theta; = 12/20 = 3/5. Therefore, sin&theta; = 4/5.<br><br><b>Step 2: Find Contact Point and Radius</b><br>P = (6(3/5), 4(4/5)) = (18/5, 16/5).<br>Radius squared (R<sup>2</sup>) = Distance from (2,0) to P = (18/5 - 2)<sup>2</sup> + (16/5 - 0)<sup>2</sup> = (8/5)<sup>2</sup> + (16/5)<sup>2</sup> = 64/25 + 256/25 = 320/25 = 64/5.<br><br><b>Step 3: Evaluate point on circle</b><br>Circle equation: (x - 2)<sup>2</sup> + y<sup>2</sup> = 64/5.<br>Point (1, &alpha;) lies on it: (1 - 2)<sup>2</sup> + &alpha;<sup>2</sup> = 64/5 &rarr; 1 + &alpha;<sup>2</sup> = 64/5 &rarr; &alpha;<sup>2</sup> = 59/5.<br>Result: 10&alpha;<sup>2</sup> = 10(59/5) = <b>118</b>."
        },
        {
            type: "numerical",
            text: "The locus of the point of intersection of the lines (&radic;3)kx + ky - 4&radic;3 = 0 and &radic;3x - y - 4(&radic;3)k = 0 is a conic, whose eccentricity is:",
            correctAnswer: "2",
            solution: "<b>Step 1: Eliminate parameter k</b><br>Line 1: k(&radic;3x + y) = 4&radic;3<br>Line 2: &radic;3x - y = 4&radic;3k<br><br><b>Step 2: Multiply the equations</b><br>Multiply LHS with LHS and RHS with RHS:<br>[k(&radic;3x + y)] &times; [&radic;3x - y] = 4&radic;3 &times; 4&radic;3k<br>k(3x<sup>2</sup> - y<sup>2</sup>) = 48k.<br>Dividing by k (assuming k &ne; 0), we get 3x<sup>2</sup> - y<sup>2</sup> = 48.<br><br><b>Step 3: Identify the conic</b><br>x<sup>2</sup>/16 - y<sup>2</sup>/48 = 1. This is a hyperbola.<br>Here a<sup>2</sup> = 16, b<sup>2</sup> = 48.<br>Eccentricity e = &radic;(1 + b<sup>2</sup>/a<sup>2</sup>) = &radic;(1 + 48/16) = &radic;(1 + 3) = &radic;4 = <b>2</b>."
        },
        {
            type: "numerical",
            text: "Consider ellipses E<sub>k</sub>: kx<sup>2</sup> + k<sup>2</sup>y<sup>2</sup> = 1, k=1, 2, ..., 20. Let C<sub>k</sub> be the circle which touches the four chords joining the end points (one on minor axis and another on major axis) of the ellipse E<sub>k</sub>. If r<sub>k</sub> is the radius of the circle C<sub>k</sub> then the value of &sum;<sub>k=1</sub><sup>20</sup> 1/r<sub>k</sub><sup>2</sup> is:",
            correctAnswer: "3080",
            solution: "<b>Step 1: Understand the Chord</b><br>Ellipse E<sub>k</sub>: x<sup>2</sup>/(1/k) + y<sup>2</sup>/(1/k<sup>2</sup>) = 1.<br>Endpoints on axes: (1/&radic;k, 0) and (0, 1/k).<br>Equation of chord joining them: x/(1/&radic;k) + y/(1/k) = 1 &rarr; &radic;kx + ky - 1 = 0.<br><br><b>Step 2: Radius of Circle C<sub>k</sub></b><br>Circle touches these symmetric chords and is centered at the origin.<br>Radius r<sub>k</sub> = perpendicular distance from (0,0) to chord.<br>r<sub>k</sub> = |-1| / &radic;((&radic;k)<sup>2</sup> + k<sup>2</sup>) = 1 / &radic;(k + k<sup>2</sup>).<br>Therefore, 1/r<sub>k</sub><sup>2</sup> = k<sup>2</sup> + k.<br><br><b>Step 3: Sum the Series</b><br>Sum = &sum; (k<sup>2</sup> + k) from k=1 to 20.<br>&sum;k<sup>2</sup> = n(n+1)(2n+1)/6 = 20(21)(41)/6 = 2870.<br>&sum;k = n(n+1)/2 = 20(21)/2 = 210.<br>Total Sum = 2870 + 210 = <b>3080</b>."
        },
        {
            type: "numerical",
            text: "The area (in sq. units) of the quadrilateral formed by the tangents at the end points of the latus rectum to the ellipse x<sup>2</sup>/9 + y<sup>2</sup>/5 = 1 is:",
            correctAnswer: "27",
            solution: "<b>Step 1: Properties of the Ellipse</b><br>a<sup>2</sup> = 9, b<sup>2</sup> = 5. <br>Eccentricity e = &radic;(1 - 5/9) = 2/3.<br>Foci are at (&plusmn;ae, 0) = (&plusmn;2, 0).<br>Endpoints of latus rectum in Quad 1 is P(ae, b<sup>2</sup>/a) = (2, 5/3).<br><br><b>Step 2: Tangent Equation</b><br>Tangent at P(2, 5/3): xx<sub>1</sub>/a<sup>2</sup> + yy<sub>1</sub>/b<sup>2</sup> = 1 &rarr; 2x/9 + (5/3)y/5 = 1 &rarr; 2x/9 + y/3 = 1.<br>Intercepts of this tangent: x-int = 9/2, y-int = 3.<br><br><b>Step 3: Area of Quadrilateral</b><br>Due to symmetry, the four tangents form a rhombus. <br>Area = 4 &times; (Area of triangle formed by axes in Quad 1)<br>Area = 4 &times; (0.5 &times; x-intercept &times; y-intercept) = 2 &times; (9/2) &times; 3 = <b>27</b>."
        },
        {
            type: "numerical",
            text: "Let a and b, respectively, be the semi-transverse and semi-conjugate axes of a hyperbola whose eccentricity satisfies the equation 9e<sup>2</sup> - 18e + 5 = 0. If S(5,0) is a focus and 5x = 9 is the corresponding directrix of this hyperbola, then |a<sup>2</sup> - b<sup>2</sup>| = ",
            correctAnswer: "7",
            solution: "<b>Step 1: Find Eccentricity</b><br>Solve 9e<sup>2</sup> - 18e + 5 = 0 &rarr; (3e - 1)(3e - 5) = 0.<br>e = 1/3 or e = 5/3. Since it's a hyperbola, e > 1, so e = 5/3.<br><br><b>Step 2: Find a and b</b><br>Focus (ae, 0) = (5, 0) &rarr; a(5/3) = 5 &rarr; a = 3.<br>Check directrix: x = a/e = 3 / (5/3) = 9/5. Matches 5x = 9.<br>Calculate b<sup>2</sup>: b<sup>2</sup> = a<sup>2</sup>(e<sup>2</sup> - 1) = 9(25/9 - 1) = 25 - 9 = 16.<br><br><b>Step 3: Final calculation</b><br>|a<sup>2</sup> - b<sup>2</sup>| = |9 - 16| = |-7| = <b>7</b>."
        },
        {
            type: "numerical",
            text: "The locus of the foot of perpendicular drawn from the centre of the ellipse x<sup>2</sup> + 3y<sup>2</sup> = 6 on any tangent to it is (x<sup>2</sup> + y<sup>2</sup>)<sup>2</sup> = ax<sup>2</sup> + by<sup>2</sup> where a, b &isin; N then a<sup>2</sup> + b<sup>2</sup> = ",
            correctAnswer: "40",
            solution: "<b>Step 1: Standardize Ellipse Equation</b><br>x<sup>2</sup>/6 + y<sup>2</sup>/2 = 1. Here a'<sup>2</sup> = 6, b'<sup>2</sup> = 2.<br><br><b>Step 2: Equation of Tangent and Perpendicular</b><br>Let tangent be x cos&alpha; / &radic;6 + y sin&alpha; / &radic;2 = 1.<br>Perpendicular from center (0,0) to tangent: Slope is sin&alpha;/cos&alpha; ... actually standard formula for locus of foot of perpendicular from center is (x<sup>2</sup> + y<sup>2</sup>)<sup>2</sup> = a'<sup>2</sup>x<sup>2</sup> + b'<sup>2</sup>y<sup>2</sup>.<br>Substituting our values: (x<sup>2</sup> + y<sup>2</sup>)<sup>2</sup> = 6x<sup>2</sup> + 2y<sup>2</sup>.<br><br><b>Step 3: Compare and Calculate</b><br>Given locus is (x<sup>2</sup> + y<sup>2</sup>)<sup>2</sup> = ax<sup>2</sup> + by<sup>2</sup>.<br>Comparing, a = 6, b = 2.<br>a<sup>2</sup> + b<sup>2</sup> = 36 + 4 = <b>40</b>."
        },
        {
            type: "numerical",
            text: "Let A and B be two distinct points on the parabola y<sup>2</sup> = 4x. If the axis of the parabola touches a circle of radius of one unit having AB as its diameter. Then the slope of the joining A and B can be:",
            correctAnswer: "2",
            solution: "<b>Step 1: Understand the Geometry</b><br>Let A = (t<sub>1</sub><sup>2</sup>, 2t<sub>1</sub>) and B = (t<sub>2</sub><sup>2</sup>, 2t<sub>2</sub>).<br>Circle diameter is AB. Length of AB = 2 (since radius is 1).<br>Center of circle is midpoint of AB. y-coordinate of center = (2t<sub>1</sub> + 2t<sub>2</sub>)/2 = t<sub>1</sub> + t<sub>2</sub>.<br>Axis of parabola (y=0) touches the circle, so the y-coordinate of the center must equal the radius (which is 1).<br>Thus, |t<sub>1</sub> + t<sub>2</sub>| = 1.<br><br><b>Step 2: Distance Formula</b><br>AB<sup>2</sup> = (t<sub>2</sub><sup>2</sup> - t<sub>1</sub><sup>2</sup>)<sup>2</sup> + (2t<sub>2</sub> - 2t<sub>1</sub>)<sup>2</sup> = 4 (diameter squared).<br>(t<sub>2</sub> - t<sub>1</sub>)<sup>2</sup>(t<sub>1</sub> + t<sub>2</sub>)<sup>2</sup> + 4(t<sub>2</sub> - t<sub>1</sub>)<sup>2</sup> = 4.<br>Since (t<sub>1</sub> + t<sub>2</sub>)<sup>2</sup> = 1, we get: (t<sub>2</sub> - t<sub>1</sub>)<sup>2</sup>(1 + 4) = 4 &rarr; (t<sub>2</sub> - t<sub>1</sub>)<sup>2</sup> = 4/5.<br><br><b>Step 3: Slope calculation</b><br>Slope of AB = (2t<sub>2</sub> - 2t<sub>1</sub>) / (t<sub>2</sub><sup>2</sup> - t<sub>1</sub><sup>2</sup>) = 2 / (t<sub>1</sub> + t<sub>2</sub>).<br>Since |t<sub>1</sub> + t<sub>2</sub>| = 1, Slope = &plusmn;2. The positive slope is <b>2</b>."
        },
        {
            type: "mcq",
            text: "If two distinct chords of a parabola y<sup>2</sup> = 4kx drawn from the point (k, 2k) are bisected by the line x + y - 1 = 0 then the length of the latus rectum can be:",
            options: ["4", "3", "5", "6"],
            correctAnswer: 1, // Option 2
            solution: "<b>Step 1: Midpoint Chord Equation (T = S1)</b><br>Let midpoint of a chord on the line be (&alpha;, 1-&alpha;).<br>Chord equation: y(1-&alpha;) - 2k(x + &alpha;) = (1-&alpha;)<sup>2</sup> - 4k&alpha;.<br><br><b>Step 2: Chord passes through (k, 2k)</b><br>Substitute x=k, y=2k into the chord equation:<br>2k(1-&alpha;) - 2k(k + &alpha;) = (1-&alpha;)<sup>2</sup> - 4k&alpha;.<br>2k - 2k&alpha; - 2k<sup>2</sup> - 2k&alpha; = 1 - 2&alpha; + &alpha;<sup>2</sup> - 4k&alpha;.<br>&alpha;<sup>2</sup> - 2&alpha; + (1 + 2k<sup>2</sup> - 2k) = 0.<br><br><b>Step 3: Distinct Chords Condition</b><br>For two distinct chords, this quadratic in &alpha; must have two distinct real roots.<br>Discriminant &gt; 0 &rarr; 4 - 4(1 + 2k<sup>2</sup> - 2k) &gt; 0<br>1 - (1 + 2k<sup>2</sup> - 2k) &gt; 0 &rarr; 2k - 2k<sup>2</sup> &gt; 0 &rarr; 2k(1 - k) &gt; 0.<br>Thus, k &isin; (0, 1).<br><br><b>Step 4: Latus Rectum</b><br>Length of LR = 4k.<br>Since 0 &lt; k &lt; 1, the LR must be in the range (0, 4).<br>Looking at the options, only <b>3</b> falls in this range."
        }
    ]
};
