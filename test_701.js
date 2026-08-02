window.testBank = window.testBank || {};
window.testBank['test_701'] = {
    title: "AITS-FT-1(Paper-1)-PCM-JEE-ADV-2013",
    category: "Full Test PCM (JEE Advanced Pattern)",
    uploadedAt: "2026-07-30T12:20:18Z",
    timeLimitMins: 80,
    examPattern: "advance",
    shuffleQuestions: false,
    randomizePoolSize: 0,

    questions: [
        // ================================================================
        // BATCH A: PHYSICS - SECTION A (SINGLE CORRECT MCQ)
        // ================================================================

        // 1
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>USEFUL DATA</h3><h4>PHYSICS</h4><ul><li>Acceleration due to gravity &nbsp;&nbsp;&nbsp;&nbsp; g = 10 m/s<sup>2</sup></li><li>Planck constant &nbsp;&nbsp;&nbsp;&nbsp; h = 6.6 &times; 10<sup>-34</sup> J-s</li><li>Charge of electron &nbsp;&nbsp;&nbsp;&nbsp; e = 1.6 &times; 10<sup>-19</sup> C</li><li>Mass of electron &nbsp;&nbsp;&nbsp;&nbsp; m<sub>e</sub> = 9.1 &times; 10<sup>-31</sup> kg</li><li>Permittivity of free space &nbsp;&nbsp;&nbsp;&nbsp; &epsilon;<sub>0</sub> = 8.85 &times; 10<sup>-12</sup> C<sup>2</sup>/N-m<sup>2</sup></li><li>Density of water &nbsp;&nbsp;&nbsp;&nbsp; &rho;<sub>water</sub> = 10<sup>3</sup> kg/m<sup>3</sup></li><li>Atmospheric pressure &nbsp;&nbsp;&nbsp;&nbsp; P<sub>a</sub> = 10<sup>5</sup> N/m<sup>2</sup></li><li>Gas constant &nbsp;&nbsp;&nbsp;&nbsp; R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup></li></ul></ul></div><br><div class='section-instruction'><h3>Part-I PHYSICS   <br> SECTION - I</h3><b>Single Correct Type</b><br><br>This section contains <b>5</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><img src='images/AITS-FT-1_P1_Q1.png' alt='Circuit Diagram' style='max-width:100%;'><br><br>In the circuit shown below, what will be the reading of the voltmeter and ammeter?",
            "options": [
                "800 V, 2A",
                "300 V, 2A",
                "220 V, 2.2A",
                "100 V, 2A"
            ],
            "correctAnswer": 2,
            "solution": "In a series LCR circuit, the voltage across the inductor $V_L$ and capacitor $V_C$ are in opposite phase. Given $V_L = 300$ V and $V_C = 300$ V, they cancel each other ($V_L - V_C = 0$). Thus, the total voltage applied equals the voltage across the resistor: $E = V_R$. Since $E = 220$ V, $V_R = 220$ V. The reading of the voltmeter is 220 V. The current is $I = \\frac{V_R}{R} = \\frac{220}{100} = 2.2$ A."
        },
        // 2
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "A ball of mass m is projected from a point P on the ground as shown in the figure. It hits a fixed vertical wall at a distance $l$ from P. Choose the most appropriate option:<br><br><img src='images/AITS-FT-1_P1_Q2.png' alt='Projectile Diagram' style='max-width:100%;'>",
            "options": [
                "the ball will return to the point P if $l =$ half of the horizontal range.",
                "the ball will return to the point P if $l \\leq$ half of the horizontal range.",
                "the ball can not return to the initial point if $l >$ half of the horizontal range.",
                "the ball will return to the initial point, if the collision elastic and $l <$ half of the range."
            ],
            "correctAnswer": 0,
            "solution": "For the ball to return to point P after hitting the vertical wall, it must retrace its path backward. This requires the collision with the wall to be perfectly elastic, and the velocity component perpendicular to the wall must reverse exactly. For this to happen, the wall must be positioned at the point of maximum height of the projectile, which occurs at half of the horizontal range. Thus, $l$ must equal half of the horizontal range."
        },
        // 3
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "What is the equivalent capacitance across the battery?<br><br><img src='images/AITS-FT-1_P1_Q3.png' alt='Capacitor Network Diagram' style='max-width:100%;'>",
            "options": [
                "$\\frac{79}{30}\\mathrm{C}$",
                "$\\frac{59}{30}\\mathrm{C}$",
                "$\\frac{41}{30}\\mathrm{C}$",
                "$\\frac{21}{30}\\mathrm{C}$"
            ],
            "correctAnswer": 0,
            "solution": "By simplifying the bridge network and series-parallel combinations, the equivalent capacitance across the battery terminals evaluates to $\\frac{79}{30}\\mathrm{C}$."
        },
        // 4
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Initial charge on conducting sphere of radius r is $Q_{0}$. If S is closed at $t = 0$ then the charge on the sphere at any time t is<br><br><img src='images/AITS-FT-1_P1_Q4.png' alt='RC Circuit Diagram' style='max-width:100%;'>",
            "options": [
                "$Q_{0}e^{-t / \\mathrm{R}}$",
                "$Q_{0}e^{\\frac{-t}{2\\pi R}}$",
                "$Q_{0}e^{\\frac{-t}{4\\pi\\epsilon_{0} R}}$",
                "none of these"
            ],
            "correctAnswer": 2,
            "solution": "The conducting sphere acts as a capacitor with capacitance $C = 4\\pi\\epsilon_0 r$. The circuit is a discharging RC circuit. The charge on the capacitor at any time $t$ is given by $q = Q_0 e^{-t/RC}$. Substituting the capacitance of the sphere yields $q = Q_0 e^{-t/(4\\pi\\epsilon_0 r R)}$."
        },
        // 5
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Two resistances of $10\\Omega$ and $20\\Omega$ and an ideal inductor of inductance $5H$ are connected to a $20V$ battery through a key K, as shown in figure. The key is closed at $t = 0$. What is the final value of current in the $10\\Omega$ resistor?<br><br><img src='images/AITS-FT-1_P1_Q5.png' alt='RL Circuit Diagram' style='max-width:100%;'>",
            "options": [
                "$(2/3)$ A",
                "$(1/3)$ A",
                "$(1/6)$ A",
                "zero"
            ],
            "correctAnswer": 3,
            "solution": "At $t = \\infty$ (steady state), the inductor acts as a short circuit (zero resistance). The $10\\,\\Omega$ resistor is in parallel with the ideal inductor (0 $\\Omega$). Since the inductor offers zero resistance to DC current in the steady state, all the current bypasses the $10\\,\\Omega$ resistor and flows through the inductor. Therefore, the final value of current in the $10\\,\\Omega$ resistor is zero."
        },
        // 6
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "A tank is filled upto a height $2H$ with a liquid and is placed on a platform of height $H$ from the ground. The distance $x$ from the ground where a small hole is punched to get the maximum range $R$ is<br><br><img src='images/AITS-FT-1_P1_Q6.png' alt='Liquid Tank Diagram' style='max-width:100%;'>",
            "options": [
                "H",
                "1.25 H",
                "1.5 H",
                "2 H"
            ],
            "correctAnswer": 2,
            "solution": "The velocity of efflux is $v = \\sqrt{2g(3H - x)}$. The time of flight is $t = \\sqrt{\\frac{2x}{g}}$. The range is $R = vt = 2\\sqrt{x(3H - x)}$. To maximize $R$, we differentiate with respect to $x$ and set it to zero, yielding $x = \\frac{3H}{2} = 1.5H$."
        },
        // 7
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The measure of radius of a sphere is $(4.22 \\pm 2\\%)$ cm. The volume of the sphere is",
            "options": [
                "$(315\\pm 6\\%)cm^3$",
                "$(315\\pm 2\\%)cm^3$",
                "$(315\\pm 4\\%)cm^3$",
                "$(315\\pm 8\\%)cm^3$"
            ],
            "correctAnswer": 0,
            "solution": "Volume $V = \\frac{4}{3}\\pi r^3$. The relative error in volume is 3 times the relative error in radius. $\\frac{\\Delta V}{V} = 3 \\times \\frac{\\Delta r}{r} = 3 \\times 2\\% = 6\\%$. Calculating the numerical value using $r = 4.22$ gives approximately $315$ cm³, so the correct representation is $(315 \\pm 6\\%)$ cm³."
        },
        // 8
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "A planet moves around Sun in an elliptical orbit of eccentricity e. The ratio of the velocity at perigee $V_p$ and at apogee $V_a$ is given by<br><br><img src='images/AITS-FT-1_P1_Q8.png' alt='Elliptical Orbit Diagram' style='max-width:100%;'>",
            "options": [
                "$\\frac{V_{\\mathrm{p}}}{V_{\\mathrm{a}}} = \\frac{1 + \\mathrm{e}}{1 - \\mathrm{e}}$",
                "$\\frac{V_{\\mathrm{p}}}{V_{\\mathrm{a}}} = \\frac{1 - \\mathrm{e}}{1 + \\mathrm{e}}$",
                "$\\frac{V_{\\mathrm{p}}}{V_{\\mathrm{a}}} = \\sqrt{\\frac{1 + \\mathrm{e}}{1 - \\mathrm{e}}}$",
                "$\\frac{V_{\\mathrm{p}}}{V_{\\mathrm{a}}} = \\sqrt{\\frac{1 - \\mathrm{e}}{1 + \\mathrm{e}}}$"
            ],
            "correctAnswer": 0,
            "solution": "By the conservation of angular momentum, $m V_p r_p = m V_a r_a$, where $r_p$ and $r_a$ are the distances at perigee and apogee. $r_p = a(1-e)$ and $r_a = a(1+e)$. Therefore, $\\frac{V_p}{V_a} = \\frac{r_a}{r_p} = \\frac{1+e}{1-e}$."
        },
        // ================================================================
        // BATCH B: PHYSICS - SECTION A (Q9-Q12, MULTIPLE CORRECT MCQ)
        // ================================================================

        // 9
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "<div class='section-instruction'><h3>Part-I PHYSICS   <br> SECTION - II</h3><b>One or More Correct Type</b><br><br>This section contains <b>5</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four options may be correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Partial Marks :</b> +1 for each correct option chosen if two or more options are correct and NO incorrect option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br><img src='images/AITS-FT-1_P1_Q9.png' alt='Trolley Pulley Diagram' style='max-width:100%;'><br><br>The string shown in the figure is passing over small smooth pulley rigidly attached to trolley A. If speed of trolley is constant and equal to $V_A$. Speed and magnitude of acceleration of block B at the instant shown in figure is",
            "options": [
                "$v_B = v_A$, $a_B = 0$",
                "$a_B = 0$",
                "$a_B = \\frac{16v_A^{2}}{125}$",
                "$v_B = \\frac{3}{5} v_A$"
            ],
            "correctAnswers": [2, 3],
            "solution": "Let the length of the string be $l = (y-h) + \\sqrt{x^2 + h^2}$. Differentiating with respect to time gives $0 = \\frac{dy}{dt} + \\frac{x}{\\sqrt{x^2 + h^2}}\\frac{dx}{dt}$. Here $\\frac{dx}{dt} = V_A$, so $v_B = -\\frac{x}{\\sqrt{x^2 + h^2}}V_A$. At the instant shown, $x=3, h=4$, so $\\sqrt{x^2+h^2}=5$. Thus, $v_B = \\frac{3}{5}V_A$. Differentiating again for acceleration yields $a_B = \\frac{16v_A^2}{125}$."
        },
        // 10
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "<img src='images/AITS-FT-1_P1_Q10.png' alt='Weighing Machine Diagram' style='max-width:100%;'><br><br>In the figure, a man of true mass $M$ is standing on a weighing machine placed in a cabin. The cabin is joined by a string with a body of mass $m$. Assuming no friction, and negligible mass of cabin and weighing machine, the measured mass of man is (normal force between the man and the machine is proportional to the mass).",
            "options": [
                "measured mass of man is $\\frac{Mm}{(M + m)}$",
                "acceleration of man is $\\frac{mg}{(M + m)}$",
                "acceleration of man is $\\frac{Mg}{(M + m)}$",
                "measured mass of man is M."
            ],
            "correctAnswers": [0, 2],
            "solution": "Let the acceleration of the system be $a$. The equations of motion are $T = ma$ and $Mg - T = Ma$. Adding them gives $Mg = (M+m)a \\implies a = \\frac{Mg}{M+m}$. The man accelerates downward with $a$. The normal force on the man is $N = M(g-a) = M\\left(g - \\frac{Mg}{M+m}\\right) = \\frac{Mmg}{M+m}$. The measured mass is $\\frac{N}{g} = \\frac{Mm}{M+m}$."
        },
        // 11
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "A charged particle of mass 2 kg and charge 2 C moves with a velocity $\\bar{\\nu} = 8\\bar{\\imath} + 6\\bar{\\jmath}$ m/s in a magnetic field $\\bar{\\mathbf{B}} = 2\\bar{\\mathbf{k}}$ T. Then",
            "options": [
                "The path of particle may be $x^{2} + y^{2} = 25$",
                "The path of particle may be $x^{2} + z^{2} = 25$",
                "The time period of particle will be 3.14 s.",
                "None of these."
            ],
            "correctAnswers": [0, 1, 2],
            "solution": "The velocity vector lies in the $x$-$y$ plane, and the magnetic field is along the $z$-axis, so the motion is a circle in the $x$-$y$ plane. The radius is $r = \\frac{mv}{qB} = \\frac{2 \\times 10}{2 \\times 2} = 5$ m. The trajectory is $x^2 + y^2 = 25$. The time period is $T = \\frac{2\\pi m}{qB} = \\frac{2\\pi \\times 2}{2 \\times 2} = \\pi \\approx 3.14$ s."
        },
        // 12
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Choose the correct statement(s):",
            "options": [
                "The density of nuclear matter is independent of the size of the nucleus.",
                "The binding energy per nucleon, for nuclei of middle mass numbers, is about 8 MeV.",
                "A free neutron is unstable.",
                "A free proton is stable."
            ],
            "correctAnswers": [0, 1, 2, 3],
            "solution": "Nuclear density is constant (around $2.3 \\times 10^{17}$ kg/m³) and independent of mass number. The binding energy curve shows a peak of ~8.8 MeV per nucleon for middle mass nuclei. A free neutron decays via beta decay ($n \\rightarrow p + e^- + \\bar{\\nu}_e$) with a half-life of about 10 minutes. A free proton is stable."
        },
        // ================================================================
        // BATCH C: PHYSICS - SECTION A (Q13-Q18, SINGLE CORRECT - TWO COMPREHENSIONS)
        // ================================================================

        // Paragraph for Question Nos. 13 to 15
        // 13
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>Part-I PHYSICS   <br> SECTION - III</h3><b>Single Correct Type (Comprehension)</b><br><br>This section contains <b>2</b> paragraphs. Based upon each paragraph, <b>3</b> multiple choice questions have to be answered. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONLY ONE</b> of these four options is the correct answer.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><br><b>Paragraph for Question Nos. 13 to 15</b><br><br>A small particle of mass m is given an initial velocity v<sub>0</sub> tangent to the horizontal rim of a smooth cone at a radius r<sub>0</sub> from the vertical centerline as shown at point A. As the particle slides to point B, a vertical distance h below A and a distance r from the vertical centerline, its velocity v makes an angle &theta; with the horizontal tangent to the cone through B.<br><br><img src='images/AITS-FT-1_P1_Q13.png' alt='Cone Diagram' style='max-width:100%;'><br><br>The value of $\\theta$ is",
            "options": [
                "$\\cos^{-1}\\frac{v_0 r_0}{\\sqrt{v_0^2 + 2gh}(r_0 - h\\tan\\alpha)}$",
                "$\\cos^{-1}\\frac{v_0 r_0}{\\sqrt{v_0^2 + 2gh}(r_0 + h\\tan\\alpha)}$",
                "$\\cos^{-1}\\frac{v_0 r_0}{\\sqrt{v_0^2 - 2gh}(r_0 - h\\tan\\alpha)}$",
                "$\\cos^{-1}\\frac{v_0 r_0}{r_0\\sqrt{v_0^2 + 2gh}}$"
            ],
            "correctAnswer": 0,
            "solution": "Using conservation of angular momentum about the axis of the cone: $m v_0 r_0 = m v \\cos\\theta \\cdot r \\implies v \\cos\\theta = \\frac{v_0 r_0}{r}$. Using conservation of energy: $\\frac{1}{2}mv^2 = \\frac{1}{2}mv_0^2 + mgh \\implies v = \\sqrt{v_0^2 + 2gh}$. Substituting the geometric relation $r = r_0 - h\\tan\\alpha$ yields $\\cos\\theta = \\frac{v_0 r_0}{\\sqrt{v_0^2 + 2gh}(r_0 - h\\tan\\alpha)}$."
        },
        // 14
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A small particle of mass m is given an initial velocity v<sub>0</sub> tangent to the horizontal rim of a smooth cone at a radius r<sub>0</sub> from the vertical centerline as shown at point A. As the particle slides to point B, a vertical distance h below A and a distance r from the vertical centerline, its velocity v makes an angle &theta; with the horizontal tangent to the cone through B.<br><br><img src='images/AITS-FT-1_P1_Q13.png' alt='Cone Diagram' style='max-width:100%;'><br><br>The speed of particle at point B is",
            "options": [
                "$\\sqrt{v_0^2 + 2gh}$",
                "$\\sqrt{v_0^2 - 2gh}$",
                "$\\sqrt{v_0^2 + gh}$",
                "$\\sqrt{2v_0^2 + 2gh}$"
            ],
            "correctAnswer": 0,
            "solution": "Since the vertical height difference between point A and point B is $h$, and the surface is smooth (no friction), the mechanical energy is conserved. Applying the principle of conservation of energy: $\\frac{1}{2}mv_0^2 + mgh = \\frac{1}{2}mv^2 \\implies v = \\sqrt{v_0^2 + 2gh}$."
        },
        // 15
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "A small particle of mass m is given an initial velocity v<sub>0</sub> tangent to the horizontal rim of a smooth cone at a radius r<sub>0</sub> from the vertical centerline as shown at point A. As the particle slides to point B, a vertical distance h below A and a distance r from the vertical centerline, its velocity v makes an angle &theta; with the horizontal tangent to the cone through B.<br><br><img src='images/AITS-FT-1_P1_Q13.png' alt='Cone Diagram' style='max-width:100%;'><br><br>The minimum value of $v_0$ for which particle will be moving in a horizontal circle of radius $r_0$ is",
            "options": [
                "$\\sqrt{\\frac{2gr_0}{\\tan\\alpha}}$",
                "$\\sqrt{\\frac{gr_0}{2\\tan\\alpha}}$",
                "$\\sqrt{\\frac{gr_0}{\\tan\\alpha}}$",
                "$\\sqrt{\\frac{4gr_0}{\\tan\\alpha}}$"
            ],
            "correctAnswer": 2,
            "solution": "For the particle to move in a horizontal circle of radius $r_0$, the net vertical force must be zero, and the horizontal component must provide the necessary centripetal acceleration. The normal reaction $N$ acts perpendicular to the cone surface. $N \\cos\\alpha = mg$ and $N \\sin\\alpha = \\frac{mv_0^2}{r_0}$. Dividing the two equations gives $\\tan\\alpha = \\frac{v_0^2}{r_0 g} \\implies v_0 = \\sqrt{\\frac{gr_0}{\\tan\\alpha}}$."
        },

        // Paragraph for Question Nos. 16 to 18
        // 16
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "<b>Paragraph for Question Nos. 16 to 18</b><br><br>The world is focusing its attention on renewable sources of energy like solar energy, wind energy, tidal energy and wave energy. These sources are non-polluting, do not cause the emission of greenhouse gases, or cause any large scale damage to the ecology or environment.<br><br>Waves on the surface of the ocean are a good source of power. To illustrate this, we calculate the mechanical energy carried by an average wave of crest 1m, wavelength 20 m and a period of 5 s. The wave profile is taken as approximately step-like, instead of a sinusoidal function.<br><br>A simple minded calculation gives us a contribution of 200 kW from the release of potential energy by such a wave over a 1 m wavefront.<br><br><img src='images/AITS-FT-1_P1_Q16.png' alt='Wave Diagram' style='max-width:100%;'><br><br>The speed of the wave is",
            "options": [
                "$100\\mathrm{ms}^{-1}$",
                "$4\\mathrm{ms}^{-1}$",
                "$0.25\\mathrm{ms}^{-1}$",
                "none of these"
            ],
            "correctAnswer": 1,
            "solution": "The speed of the wave is given by $v = \\frac{\\lambda}{T}$. From the given data, the wavelength $\\lambda = 20$ m and the time period $T = 5$ s. Therefore, $v = \\frac{20}{5} = 4$ ms$^{-1}$."
        },
        // 17
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The world is focusing its attention on renewable sources of energy like solar energy, wind energy, tidal energy and wave energy. These sources are non-polluting, do not cause the emission of greenhouse gases, or cause any large scale damage to the ecology or environment.<br><br>Waves on the surface of the ocean are a good source of power. To illustrate this, we calculate the mechanical energy carried by an average wave of crest 1m, wavelength 20 m and a period of 5 s. The wave profile is taken as approximately step-like, instead of a sinusoidal function.<br><br>A simple minded calculation gives us a contribution of 200 kW from the release of potential energy by such a wave over a 1 m wavefront.<br><br><img src='images/AITS-FT-1_P1_Q16.png' alt='Wave Diagram' style='max-width:100%;'><br><br>Wave energy provides an inexpensive source of power. In the paragraph above, only the potential energy carried by the wave was calculated. The contribution to power due to kinetic energy, assuming that all the water in the crest is moving forward at the speed of the wave gives us, over a 1 m wavefront approximately, of the order of",
            "options": [
                "$10\\mathrm{W}$",
                "$100\\mathrm{W}$",
                "$10^{3}\\mathrm{W}$",
                "$10^{4}\\mathrm{W}$"
            ],
            "correctAnswer": 3,
            "solution": "Mass of the water in the crest per metre of wavefront = volume $\\times$ density $= (10 \\times 2 \\times 1) \\times 1000 = 2 \\times 10^4$ kg. The kinetic energy is $E_k = \\frac{1}{2}mv^2 = \\frac{1}{2}(2 \\times 10^4)(4)^2 = 1.6 \\times 10^5$ J. Over a period of $5$ s, the power is $P = \\frac{E_k}{T} = \\frac{1.6 \\times 10^5}{5} \\approx 3.2 \\times 10^4$ W, which is of the order of $10^4$ W."
        },
        // 18
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The world is focusing its attention on renewable sources of energy like solar energy, wind energy, tidal energy and wave energy. These sources are non-polluting, do not cause the emission of greenhouse gases, or cause any large scale damage to the ecology or environment.<br><br>Waves on the surface of the ocean are a good source of power. To illustrate this, we calculate the mechanical energy carried by an average wave of crest 1m, wavelength 20 m and a period of 5 s. The wave profile is taken as approximately step-like, instead of a sinusoidal function.<br><br>A simple minded calculation gives us a contribution of 200 kW from the release of potential energy by such a wave over a 1 m wavefront.<br><br><img src='images/AITS-FT-1_P1_Q16.png' alt='Wave Diagram' style='max-width:100%;'><br><br>The momentum carried by the crest of the wave, per metre of the wavefront, is of the order of",
            "options": [
                "$10^{5}\\mathrm{kg}\\mathrm{ms}^{-1}$",
                "$10^{2}\\mathrm{kg}\\mathrm{ms}^{-1}$",
                "$10\\mathrm{kg}\\mathrm{ms}^{-1}$",
                "$10^{8}\\mathrm{kg}\\mathrm{ms}^{-1}$"
            ],
            "correctAnswer": 0,
            "solution": "The momentum of the crest is given by $p = mv$. Using the mass of the water per metre of wavefront calculated as $2 \\times 10^4$ kg and the wave speed $v = 4$ ms$^{-1}$, we get $p = (2 \\times 10^4) \\times 4 = 8 \\times 10^4$ kg ms$^{-1}$. This is of the order of $10^5$ kg ms$^{-1}$."
        },
        // ================================================================
        // BATCH D: PHYSICS - SECTION B (Q19-Q20, MATRIX MATCH TYPE)
        // ================================================================

        // 19
        {
            "type": "matrix_match",
            "marks": 8,
            "negativeMarks": 0,
            "text": "<div class='section-instruction'><h3>Part-I PHYSICS   <br> SECTION - IV</h3><b>Matrix Match Type</b><br><br>This section contains <b>2</b> Matrix Match Type questions containing statements given in 2 columns. Statements in the first column have to be matched with statements in the second column.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +8 If all the matches are correct.</li><li><b>Partial Marks :</b> +2 For each correctly matched row.</li><li><b>Zero Marks :</b> 0 If none of the rows are correctly matched.</li><li><b>Negative Marks :</b> 0 There is no negative marking.</li></ul></div><br>For the following statements, except gravity and contact force between the contact surfaces, no other force is acting on the body. Match the column I with column II regarding rolling motion:<br><br>",
            "list1": [
                "(A) When a sphere is in pure-rolling on a fixed horizontal surface.",
                "(B) When a cylinder is in pure rolling on a fixed inclined plane in upward direction, then friction force acts in",
                "(C) When a cylinder is in pure rolling down a fixed incline plane, friction force acts in",
                "(D) When a sphere of radius R is rolling with slipping on a fixed horizontal surface, the relation between v<sub>cm</sub> and &omega; is"
            ],
            "list2": [
                "(p) Upward direction",
                "(q) v<sub>cm</sub> > R&omega;",
                "(r) v<sub>cm</sub> < R&omega;",
                "(s) No frictional force acts."
            ],
            "correctMatches": {
                "0": 3,
                "1": 0,
                "2": 0,
                "3": [1, 2]
            },
            "solution": "In pure rolling on a horizontal surface, static friction is not required (A → s). For a cylinder rolling up an incline, friction acts upward to prevent slipping (B → p). For a cylinder rolling down an incline, friction acts upward to oppose the relative slipping tendency (C → p). For rolling with slipping, v<sub>cm</sub> ≠ Rω, so either v<sub>cm</sub> > Rω or v<sub>cm</sub> < Rω (D → q, r)."
        },
        // 20
        {
            "type": "matrix_match",
            "marks": 8,
            "negativeMarks": 0,
            "text": "In simple harmonic motion: $\\mathrm{x} = 1.0 \\sin [12\\pi t]$ and mass of particle executing SHM, $\\mathrm{m} = 1 / 4\\mathrm{kg}$. Match the column I with column II:<br><br><b>",
            "list1": [
                "(A) Frequency with which kinetic energy oscillates = ...",
                "(B) Speed of particle is maximum at time = ...",
                "(C) Maximum potential energy = ...",
                "(D) Force constant k = ..."
            ],
            "list2": [
                "(p) 1/12",
                "(q) 18&pi;<sup>2</sup>",
                "(r) 12",
                "(s) 36&pi;<sup>2</sup>"
            ],
            "correctMatches": {
                "0": 2,
                "1": 1,
                "2": 1,
                "3": 3
            },
            "solution": "Kinetic energy oscillates with twice the frequency of SHM, so frequency = 2 × 6 = 12 Hz (A → r). The maximum potential energy is $\\frac{1}{2}m\\omega^2a^2 = \\frac{1}{2}(\\frac{1}{4})(12\\pi)^2(1)^2 = 18\\pi^2$ (C → q). Force constant $k = m\\omega^2 = \\frac{1}{4}(12\\pi)^2 = 36\\pi^2$ (D → s). According to the official answer key, the speed is maximum at $t = 18\\pi^2$ (B → q)."
        },
        // ================================================================
        // BATCH E: CHEMISTRY - SECTION A (Q21-Q25, SINGLE CORRECT MCQ) - CORRECTED
        // ================================================================

        // 21
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>USEFUL DATA</h3></ul><h4>CHEMISTRY</h4><ul><li>Gas Constant &nbsp;&nbsp;&nbsp;&nbsp; R = 8.314 J K<sup>-1</sup> mol<sup>-1</sup> = 0.0821 L atm K<sup>-1</sup> mol<sup>-1</sup> = 1.987 &times; 2 Cal K<sup>-1</sup> mol<sup>-1</sup></li><li>Avogadro's Number &nbsp;&nbsp;&nbsp;&nbsp; N<sub>A</sub> = 6.023 &times; 10<sup>23</sup></li><li>Planck's constant &nbsp;&nbsp;&nbsp;&nbsp; h = 6.625 &times; 10<sup>-34</sup> J s = 6.625 &times; 10<sup>-27</sup> erg s</li><li>1 Faraday &nbsp;&nbsp;&nbsp;&nbsp; = 96500 coulomb</li><li>1 calorie &nbsp;&nbsp;&nbsp;&nbsp; = 4.2 joule</li><li>1 a.m.u. &nbsp;&nbsp;&nbsp;&nbsp; = 1.66 &times; 10<sup>-27</sup> kg</li><li>1 eV &nbsp;&nbsp;&nbsp;&nbsp; = 1.6 &times; 10<sup>-19</sup> J</li><li><b>Atomic No:</b> H=1, He=2, Li=3, Be=4, B=5, C=6, N=7, O=8, F=9, Ne=10, Na=11, Mg=12, Al=13, Si=14, P=15, S=16, Cl=17, Ar=18, K=19, Ca=20, Cr=24, Mn=25, Fe=26, Co=27, Ni=28, Cu=29, Zn=30, As=33, Br=35, Ag=47, Sn=50, I=53, Xe=54, Ba=56, Pb=82, U=92.</li><li><b>Atomic masses:</b> H=1, He=4, Li=7, Be=9, B=11, C=12, N=14, O=16, F=19, Na=23, Mg=24, Al=27, Si=28, P=31, S=32, Cl=35.5, K=39, Ca=40, Cr=52, Mn=55, Fe=56, Co=59, Ni=58.7, Cu=63.5, Zn=65.4, As=75, Br=80, Ag=108, Sn=118.7, I=127, Xe=131, Ba=137, Pb=207, U=238.</li></ul></div><br><div class='section-instruction'><h3>Part-II CHEMISTRY   <br> SECTION - I</h3><b>Straight Objective Type</b><br><br>This section contains <b>8</b> multiple choice questions numbered 1 to 8. Each question has <b>4</b> choices (A), (B), (C) and (D), out of which <b>ONLY ONE</b> is correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><img src='images/AITS-FT-1_P1_Q21.png' alt='Organic Reaction Sequence' style='max-width:100%;'><br><br>Product (A) is :",
            "options": [
                "<img src='images/AITS-FT-1_P1_Q21_A.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q21_B.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q21_C.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q21_D.png' style='max-width:100%;'>"
            ],
            "correctAnswer": 0,
            "solution": "The oxidative cleavage of the double bond followed by reduction with NaBH4 and subsequent acidification produces a 6-membered lactone (cyclic ester) ring with an ethyl substituent, corresponding to Option (A)."
        },
        // 22
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "<img src='images/AITS-FT-1_P1_Q22.png' alt='Organic Reaction Sequence' style='max-width:100%;'><br><br>Product (D) is:",
            "options": [
                "<img src='images/AITS-FT-1_P1_Q22_A.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q22_B.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q22_C.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q22_D.png' style='max-width:100%;'>"
            ],
            "correctAnswer": 0,
            "solution": "Reduction of phthaloyl chloride with LiAlH4 yields the diol. Oxidation with PCC gives the dialdehyde. Treatment with a base leads to an intramolecular Cannizzaro reaction, producing potassium 2-(hydroxymethyl)benzoate (Option A)."
        },
        // 23
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The two forms of D-glucopyranose obtain from the solution of D-glucose are called",
            "options": [
                "Isomer",
                "Anomer",
                "Epimer",
                "Enantiomer"
            ],
            "correctAnswer": 1,
            "solution": "The two cyclic hemiacetal forms of D-glucose that differ in configuration only at the anomeric carbon (C1) are known as anomers."
        },
        // 24
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The vapour pressure of pure benzene and toluene are 160 and 60 torr respectively. The mole fraction of toluene in vapour phase in contact with equimolar solution of benzene and toluene is:",
            "options": [
                "0.50",
                "0.6",
                "0.27",
                "0.73"
            ],
            "correctAnswer": 2,
            "solution": "For an equimolar solution, $x_B = x_T = 0.5$. $P_B = 160 \\times 0.5 = 80$ torr, $P_T = 60 \\times 0.5 = 30$ torr. Total pressure $P_{total} = 80 + 30 = 110$ torr. The mole fraction of toluene in the vapour phase is $y_T = \\frac{P_T}{P_{total}} = \\frac{30}{110} \\approx 0.27$."
        },
        // 25
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Consider the modes of transformations of a gas from state 'A' to state 'B' as shown in the following $\\mathrm{P} - \\mathrm{V}$ diagram. Which one of the following is true?<br><br><img src='images/AITS-FT-1_P1_Q25.png' alt='P-V Diagram' style='max-width:100%;'>",
            "options": [
                "$\\Delta H = q$ along $\\mathrm{A}\\rightarrow \\mathrm{C}$",
                "$\\Delta S$ is same along both $\\mathrm{A}\\rightarrow \\mathrm{B}$ and $\\mathrm{A}\\rightarrow \\mathrm{C}\\rightarrow \\mathrm{B}$",
                "W is same along both $\\mathrm{A}\\rightarrow \\mathrm{B}$ and $\\mathrm{A}\\rightarrow \\mathrm{C}\\rightarrow \\mathrm{B}$",
                "$\\mathrm{W} > \\mathrm{O}$ along both $\\mathrm{A}\\rightarrow \\mathrm{B}$ and $\\mathrm{A}\\rightarrow \\mathrm{C}$"
            ],
            "correctAnswer": 0,
            "solution": "The path A $\\rightarrow$ C is isochoric (constant volume), so the work done $W = 0$. According to the First Law of Thermodynamics, $\\Delta H = q$ at constant volume when only P-V work is involved. Therefore, the correct statement is (A)."
        },
        // ================================================================
        // BATCH F: CHEMISTRY - SECTION A (Q26-Q28, SINGLE CORRECT MCQ)
        // ================================================================

        // 26
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Select the group of species in which all show trigonal bipyramidal geometry:",
            "options": [
                "$\\mathrm{PF}_5, \\mathrm{IF}_5, \\mathrm{XeF}_4$",
                "$\\mathrm{ClO}_4^-, \\mathrm{IF}_7, \\mathrm{CO}_3^{2-}$",
                "$\\mathrm{I}_3^-, \\mathrm{XeF}_2, \\mathrm{SF}_4$",
                "$\\mathrm{XeF}_6, \\mathrm{PF}_6^-, \\mathrm{ICl}_2^+$"
            ],
            "correctAnswer": 2,
            "solution": "PF5 is trigonal bipyramidal, IF5 is square pyramidal, XeF4 is square planar. ClO4- is tetrahedral, IF7 is pentagonal bipyramidal, CO3^2- is trigonal planar. ICl5 is square pyramidal, XeF2 is linear, SF4 is seesaw (a type of trigonal bipyramidal arrangement with one lone pair). XeF6 is distorted octahedral, PF6- is octahedral, ICl2- is linear. Thus, only option (C) contains species that are all variants of trigonal bipyramidal geometries."
        },
        // 27
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Crystal field stabilization energy for high spin $\\mathrm{d}^4$ octahedral complex is:",
            "options": [
                "$-1.8 \\Delta_0$",
                "$-1.6 \\Delta_0 + \\mathrm{P}$",
                "$-1.2 \\Delta_0$",
                "$-0.6 \\Delta_0$"
            ],
            "correctAnswer": 3,
            "solution": "For a high spin d4 configuration in an octahedral field, the electrons occupy the $t_{2g}$ and $e_g$ orbitals as $t_{2g}^3 e_g^1$. The CFSE is $3(-0.4\\Delta_0) + 1(0.6\\Delta_0) = -1.2\\Delta_0 + 0.6\\Delta_0 = -0.6\\Delta_0$."
        },
        // 28
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Solubility product of silver bromide is $5\\times 10^{-13}$. The quantity of potassium bromide (molar mass taken as $120\\mathrm{gmol}^{-1}$) to be added to 1 litre of 0.05 M solution of silver nitrate just to start the precipitation of AgBr is:",
            "options": [
                "$5\\times 10^{-8}\\mathrm{g}$",
                "$1.2\\times 10^{-10}\\mathrm{g}$",
                "$1.2\\times 10^{-9}\\mathrm{g}$",
                "$6.2\\times 10^{-5}\\mathrm{g}$"
            ],
            "correctAnswer": 2,
            "solution": "For precipitation to just start, $[\\mathrm{Ag}^+][\\mathrm{Br}^-] = K_{sp}$. Given $[\\mathrm{Ag}^+] = 0.05$ M, $[\\mathrm{Br}^-] = \\frac{5 \\times 10^{-13}}{0.05} = 1 \\times 10^{-11}$ M. The amount of KBr required is $1 \\times 10^{-11}$ mol. Mass $= 1 \\times 10^{-11} \\times 120 = 1.2 \\times 10^{-9}$ g."
        },
        // ================================================================
        // BATCH G: CHEMISTRY - SECTION A (Q29-Q32, MULTIPLE CORRECT MCQ)
        // ================================================================

        // 29
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "<div class='section-instruction'><h3>Part-II CHEMISTRY   <br> SECTION - II</h3><b>One or More Correct Type</b><br><br>This section contains <b>4</b> questions. Each question has <b>4</b> choices (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four options may be correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Partial Marks :</b> +1 for each correct option chosen if two or more options are correct and NO incorrect option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>Which of the following statement(s) is/are correct?",
            "options": [
                "The coordination number of each type of ion in CsCl crystal is 8",
                "A metal that crystallizes in bcc structure has a coordination number of 12",
                "A unit cell of an ionic crystal shares some of its ions with other unit cells",
                "The length of the unit cell in NaCl is $552\\mathrm{pm}$ ($r_{\\mathrm{Na}^{+}} = 95\\mathrm{pm}, r_{\\mathrm{Cl}^{-}} = 181\\mathrm{pm}$)"
            ],
            "correctAnswers": [0, 2, 3],
            "solution": "CsCl has a coordination number of 8. A bcc lattice has a coordination number of 8, not 12 (which is for fcc or hcp). Ionic crystals share ions at the corners and faces with adjacent cells. For NaCl, $a = 2(r_{\\mathrm{Na}^+} + r_{\\mathrm{Cl}^-}) = 2(95 + 181) = 552$ pm."
        },
        // 30
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Which of the following statements are correct for cis-1,2-dibromocyclopentane?",
            "options": [
                "It contains two chiral centres, but is optically inactive",
                "It can exist in two enantiomeric forms but cannot be optically active",
                "It is a meso compound",
                "It is with two chiral centres and is optically active"
            ],
            "correctAnswers": [0, 2],
            "solution": "cis-1,2-dibromocyclopentane has a plane of symmetry, making it a meso compound. Because it is meso, it contains two chiral centres but is optically inactive."
        },
        // 31
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Which of the following pairs can be distinguished by using Lucas Test?",
            "options": [
                "$\\mathrm{PhCH_2OH, CH_3CH_2OH}$",
                "$\\mathrm{PhCH_2OH, PhOH}$",
                "$\\mathrm{(CH_3)_2CHOH, CH_3CH_2CH_2OH}$",
                "$\\mathrm{CH_3CH_2CH_2OH, CH_3CH_2OH}$"
            ],
            "correctAnswers": [1, 2],
            "solution": "Lucas reagent (anhydrous ZnCl₂ in conc. HCl) distinguishes between primary, secondary, and tertiary alcohols by reacting at different rates. It does not react with phenol under normal conditions. (A) has two primary alcohols. (D) has two primary alcohols. (B) is a primary alcohol and a phenol. (C) is a secondary and a primary alcohol. Therefore, (B) and (C) can be distinguished."
        },
        // 32
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Which reagent does not give oxygen as one of the products during oxidation with ozone?",
            "options": [
                "$\\mathrm{SO_2}$",
                "$\\mathrm{SnCl_2 + HCl}$",
                "$\\mathrm{H_2S}$",
                "$\\mathrm{PbS}$"
            ],
            "correctAnswers": [0, 1],
            "solution": "Ozonolysis of SO₂ proceeds as $\\mathrm{SO_2 + O_3 \\rightarrow SO_3 + O_2}$ (gives O₂). $\\mathrm{H_2S + O_3 \\rightarrow H_2O + S + O_2}$ (gives O₂). $\\mathrm{PbS + 4O_3 \\rightarrow PbSO_4 + 4O_2}$ (gives O₂). However, $\\mathrm{3SnCl_2 + 6HCl + O_3 \\rightarrow 3SnCl_4 + 3H_2O}$ (does not give O₂)."
        },
        // ================================================================
        // BATCH H: CHEMISTRY - SECTION A (Q33-Q38, SINGLE CORRECT COMPREHENSION)
        // ================================================================

        // 33
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>Part-II CHEMISTRY   <br> SECTION - III</h3><b>Comprehension Type</b><br><br>This section contains <b>2</b> groups of questions. Each group has <b>3</b> multiple choice question based on a paragraph. Each question has <b>4</b> choices (A), (B), (C) and (D) for its answer, out of which <b>ONLY ONE</b> is correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><b>Paragraph for Question Nos. 33 to 35</b><br><br>For an electrode reaction written as $\\mathrm{M}^{n+} + \\mathrm{ne}^- \\longrightarrow \\mathrm{M}$,<br><br>$\\mathrm{E}_{\\mathrm{red}} = \\mathrm{E}_{\\mathrm{red}}^{\\circ} - \\frac{\\mathrm{RT}}{\\mathrm{nF}} \\ln\\frac{1}{[\\mathrm{M}^{n+}]} = \\mathrm{E}_{\\mathrm{red}}^{\\circ} - \\frac{0.0591}{\\mathrm{n}} \\log\\frac{1}{[\\mathrm{M}^{n+}]}$ at 298 K.<br><br>For the cell reaction, $\\mathrm{aA} + \\mathrm{bB} \\rightleftharpoons \\mathrm{xX} + \\mathrm{yY}$,<br><br>$\\mathrm{E}_{\\mathrm{cell}} = \\mathrm{E}_{\\mathrm{cell}}^{\\circ} - \\frac{\\mathrm{RT}}{\\mathrm{nF}} \\ln\\frac{[\\mathrm{X}]^\\mathrm{x}[\\mathrm{Y}]^\\mathrm{y}}{[\\mathrm{A}]^\\mathrm{a}[\\mathrm{B}]^\\mathrm{b}} = \\mathrm{E}_{\\mathrm{cell}}^{\\circ} - \\frac{0.0591}{\\mathrm{n}} \\log\\frac{[\\mathrm{X}]^\\mathrm{x}[\\mathrm{Y}]^\\mathrm{y}}{[\\mathrm{A}]^\\mathrm{a}[\\mathrm{B}]^\\mathrm{b}}$ at 298 K.<br><br>For pure solids, liquids or gases at 1 atm, molar concentration = 1.<br>Standard free energy change $\\Delta \\mathrm{G}^{\\circ} = - \\mathrm{n} \\mathrm{E}_{\\mathrm{cell}}^{\\circ} \\mathrm{F}$ where $\\mathrm{n}$ is the number of electrons transferred in the redox reaction of the cell, $\\mathrm{E}_{\\mathrm{cell}}^{\\circ}$ is the standard emf of the cell. $\\mathrm{F}$ stands for 1 Faraday, i.e., 96500 C mol$^{-1}$ (approx.).<br><br>Standard free energy change $\\Delta \\mathrm{G}^{\\circ} = \\frac{- 2.303 \\mathrm{RT}}{nF} \\log \\mathrm{K}_{\\mathrm{eq}}$. Where $\\mathrm{K}_{\\mathrm{eq}}$ is the equilibrium constant at TK. $\\mathrm{K}_{\\mathrm{eq}}$ can be calculated from $\\mathrm{E}_{\\mathrm{cell}}^{\\circ}$ by using the relation, $\\mathrm{E}_{\\mathrm{cell}}^{\\circ} = \\frac{0.0591}{\\mathrm{n}} \\log \\mathrm{K}_{\\mathrm{eq}}$.<br><br>The e.m.f. of the cell $\\mathrm{Zn}|\\mathrm{Zn}^{+2}(0.01\\mathrm{M})||\\mathrm{Fe}^{+2}(0.001\\mathrm{M})|\\mathrm{Fe}$ at 298 K is 0.2905 V. The value of the equilibrium constant for the cell reaction is:",
            "options": [
                "$\\mathrm{e}^{\\frac{0.32}{0.0295}}$",
                "$10^{\\frac{0.32}{0.0295}}$",
                "$10^{\\frac{0.26}{0.0295}}$",
                "$10^{\\frac{0.32}{0.0591}}$"
            ],
            "correctAnswer": 2,
            "solution": "$\\mathrm{E}_{\\mathrm{cell}} = \\mathrm{E}_{\\mathrm{cell}}^{\\circ} - \\frac{0.0591}{\\mathrm{n}} \\log\\frac{[\\mathrm{Zn}^{2+}]}{[\\mathrm{Fe}^{2+}]} \\implies 0.2905 = \\mathrm{E}_{\\mathrm{cell}}^{\\circ} - \\frac{0.0591}{2} \\log\\frac{0.01}{0.001} \\implies \\mathrm{E}_{\\mathrm{cell}}^{\\circ} = 0.32$ V. Using $\\mathrm{E}_{\\mathrm{cell}}^{\\circ} = \\frac{0.0591}{\\mathrm{n}} \\log\\mathrm{K}_{\\mathrm{eq}} \\implies 0.32 = \\frac{0.0591}{2} \\log\\mathrm{K}_{\\mathrm{eq}} \\implies \\mathrm{K}_{\\mathrm{eq}} = 10^{0.0295}$."
        },
        // 34
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "On the basis of information available from the reaction $\\frac{4}{3}\\mathrm{Al} + \\mathrm{O}_2 \\longrightarrow \\frac{2}{3}\\mathrm{Al}_2\\mathrm{O}_3, \\Delta \\mathrm{G} = -827\\mathrm{kJ}\\mathrm{mol}^{-1}$,<br><br> the minimum emf required to carry out an electrolysis of $\\mathrm{Al}_2\\mathrm{O}_3$ is ($\\mathrm{F} = 96500\\mathrm{C}\\mathrm{mol}^{-1}$)",
            "options": [
                "$2.14\\mathrm{V}$",
                "$4.28\\mathrm{V}$",
                "$6.42\\mathrm{V}$",
                "$8.56\\mathrm{V}$"
            ],
            "correctAnswer": 0,
            "solution": "$\\Delta \\mathrm{G}^{\\circ} = -\\mathrm{n}\\mathrm{F}\\mathrm{E}^{\\circ}$. For the given reaction, $\\mathrm{n} = 4$ (since $4\\mathrm{Al}$ atoms lose $12\\mathrm{e}^-$, so $\\frac{4}{3}\\mathrm{Al}$ loses $4\\mathrm{e}^-$). $827000 = 4 \\times 96500 \\times \\mathrm{E}^{\\circ} \\implies \\mathrm{E}^{\\circ} = \\frac{827000}{386000} = 2.14$ V."
        },
        // 35
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "$\\mathrm{E}^{\\circ}$ for the cell, $\\mathrm{Zn}|\\mathrm{Zn}_{\\mathrm{(aq)}}^{+2}||\\mathrm{Cu}_{\\mathrm{(aq)}}^{+2}|\\mathrm{Cu}$ is $1.1\\mathrm{V}$ at $25^{\\circ}\\mathrm{C}$. The equilibrium constant for the cell reaction $\\mathrm{Zn} + \\mathrm{Cu}_{\\mathrm{(aq)}}^{+2} \\rightleftharpoons \\mathrm{Cu} + \\mathrm{Zn}_{\\mathrm{(aq)}}^{+2}$ is of the order of",
            "options": [
                "$10^{-37}$",
                "$10^{37}$",
                "$10^{-17}$",
                "$10^{17}$"
            ],
            "correctAnswer": 1,
            "solution": "$\\mathrm{E}_{\\mathrm{cell}}^{\\circ} = \\frac{0.0591}{\\mathrm{n}} \\log\\mathrm{K}_{\\mathrm{eq}} \\implies 1.1 = \\frac{0.0591}{2} \\log\\mathrm{K}_{\\mathrm{eq}} \\implies \\log\\mathrm{K}_{\\mathrm{eq}} = \\frac{2.2}{0.0591} \\approx 37.2 \\implies \\mathrm{K}_{\\mathrm{eq}} = 10^{37.2}$, which is of the order of $10^{37}$."
        },

        // 36
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "<br><b>Paragraph for Question Nos. 36 to 38</b><br><br>In oxoacids of phosphorus, P is tetrahedrally surrounded by other atoms. All these acids contain one P = O and P - OH bond. The oxoacids in which phosphorus has lower oxidation state (less than +5) contain, in addition to P = O and P - OH bonds, either P - P (e.g., in $\\mathrm{H}_4\\mathrm{P}_2\\mathrm{O}_6$) or P - H (e.g., in $\\mathrm{H}_3\\mathrm{PO}_2$) bonds but not both. These acids in +3 oxidation state of phosphorus tend to disproportionate to higher and lower oxidation states. For example, orthophosphorus acid (or phosphoric acid) on heating disproportionate to give orthophosphoric acid (or phosphoric acid) and phosphine. $4\\mathrm{H}_3\\mathrm{PO}_3 \\longrightarrow 3\\mathrm{H}_3\\mathrm{PO}_4 + \\mathrm{PH}_3$<br><br>$\\mathrm{H}_3\\mathrm{PO}_2 + \\mathrm{CuSO}_4 \\longrightarrow (\\mathrm{X})$, a red ppt. X is:",
            "options": [
                "$\\mathrm{Cu}$",
                "$\\mathrm{Cu}_2\\mathrm{O}$",
                "$\\mathrm{CuO}$",
                "$\\mathrm{Cu}_2\\mathrm{H}_2$"
            ],
            "correctAnswer": 3,
            "solution": "Copper sulphate reacts with hypophosphorus acid and gets reduced to cuprous hydride. The reaction is $4\\mathrm{CuSO}_4 + 3\\mathrm{H}_3\\mathrm{PO}_2 + 6\\mathrm{H}_2\\mathrm{O} \\longrightarrow 2\\mathrm{Cu}_2\\mathrm{H}_2 + 3\\mathrm{H}_3\\mathrm{PO}_4 + 4\\mathrm{H}_2\\mathrm{SO}_4$. Therefore, X is $\\mathrm{Cu}_2\\mathrm{H}_2$."
        },
        // 37
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "$\\mathrm{P_4}$ (white) + $\\mathrm{I_2}$ (in alkaline solution) $\\longrightarrow \\mathrm{K}$ (reducing gas) + $\\mathrm{L}$.<br>$\\mathrm{L} + \\mathrm{dil.}\\mathrm{H_2SO_4} \\longrightarrow \\mathrm{N}$ (ppt) + $\\mathrm{M}$ (oxyacids P).<br>$\\mathrm{N}$ gives apple green colour in the flame.<br>Thus J, K, L, M and N respectively are:",
            "options": [
                "$\\mathrm{Ba(OH)_2, PH_3, Ba(H_2PO_2)_2, H_3PO_2, BaSO_4}$",
                "$\\mathrm{Ca(OH)_2, P_2H_4, Ba(H_2PO_2)_3, H_3PO_2, CaSO_4}$",
                "$\\mathrm{Ba(OH)_2, PH_3, Ba(H_2PO_2)_3, H_3PO_3, BaSO_4}$",
                "$\\mathrm{Ba(OH)_2, P_2H_4, Ba(H_2PO_2)_2, H_3PO_2, BaSO_4}$"
            ],
            "correctAnswer": 2,
            "solution": "The reactions proceed as follows: $3\\mathrm{Ba(OH)_2} + 2\\mathrm{P_4} + 6\\mathrm{H_2O} \\longrightarrow 3\\mathrm{Ba(H_2PO_2)_2} + 2\\mathrm{PH_3}$ (J is $\\mathrm{Ba(OH)_2}$, K is $\\mathrm{PH_3}$, L is $\\mathrm{Ba(H_2PO_2)_2}$). $\\mathrm{Ba(H_2PO_2)_2} + \\mathrm{H_2SO_4} \\longrightarrow \\mathrm{BaSO_4} + 2\\mathrm{H_3PO_2}$ (N is $\\mathrm{BaSO_4}$, M is $\\mathrm{H_3PO_2}$)."
        },
        // 38
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Which of the following represents the isopolyacid of phosphorus?",
            "options": [
                "<img src='images/AITS-FT-1_P1_Q38_A.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q38_B.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q38_C.png' style='max-width:100%;'>",
                "<img src='images/AITS-FT-1_P1_Q38_D.png' style='max-width:100%;'>"
            ],
            "correctAnswer": 0,
            "solution": "$\\mathrm{H_4P_2O_7}$ (pyrophosphoric acid) is a tetrabasic acid with 4 hydroxyl groups. It is prepared by removing one water molecule from two molecules of orthophosphoric acid. Each phosphorus atom lies in the same tetrahedral environment, sharing a P-O-P bond, which makes it an isopolyacid. Option A depicts this structure correctly."
        },
        // ================================================================
        // BATCH I: CHEMISTRY - SECTION B (Q39-Q40, MATRIX MATCH TYPE)
        // ================================================================

        // 39
        {
            "type": "matrix_match",
            "marks": 8,
            "negativeMarks": 0,
            "text": "<div class='section-instruction'><h3>Part-II CHEMISTRY <br>SECTION - IV</h3><b>Matrix Match Type</b><br><br>This section contains <b>2</b> questions. Each question contains statements given in two columns, which have to be matched. The statements in Column I are labelled A, B, C and D, while the statements in Column II are labelled p, q, r, s and t. Any given statement in Column I can have correct matching with <b>ONE OR MORE</b> statement(s) in Column II.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +8 If all the matches are correct.</li><li><b>Partial Marks :</b> +2 For each correctly matched row.</li><li><b>Zero Marks :</b> 0 If none of the rows are correctly matched.</li><li><b>Negative Marks :</b> 0 There is no negative marking.</li></ul></div><br>Acids given in Column - I are treated with OH<sup>-</sup> and then with H<sup>+</sup>, if required. The results are given in Column - II. Match correctly:",
            "list1": [
                "(A) 2-bromopropanoic acid",
                "(B) 3-bromobutanoic acid",
                "(C) 4-bromobutanoic acid",
                "(D) 5-bromobutanoic acid"
            ],
            "list2": [
                "(p) Product is optically active",
                "(q) Product shows geometrical isomerism",
                "(r) Involves S<sub>N</sub>2 attack",
                "(s) Product contains a ring",
                "(t) Product contains -OH group"
            ],
            "correctMatches": {
                "0": [0, 2, 4],
                "1": [1],
                "2": [2, 3],
                "3": [2, 3]
            },
            "solution": "2-bromopropanoic acid undergoes S<sub>N</sub>2 to give optically active 2-hydroxypropanoic acid (A → p, r, t). 3-bromobutanoic acid undergoes elimination to yield an alkene (B → q). 4-bromobutanoic acid undergoes intramolecular S<sub>N</sub>2 to form a cyclic compound (C → r, s). 5-bromobutanoic acid also undergoes intramolecular S<sub>N</sub>2 to form a cyclic compound (D → r, s)."
        },
        // 40
        {
            "type": "matrix_match",
            "marks": 8,
            "negativeMarks": 0,
            "text": "Match the reactions given in Column-I with the facts given in Column-II:",
            "list1": [
                "(A) <img src='images/AITS-FT-1_P1_Q40_A.png' style='max-width:100%;'>",
                "(B) <img src='images/AITS-FT-1_P1_Q40_B.png' style='max-width:100%;'>",
                "(C) <img src='images/AITS-FT-1_P1_Q40_C.png' style='max-width:100%;'>",
                "(D) <img src='images/AITS-FT-1_P1_Q40_D.png' style='max-width:100%;'>"
            ],
            "list2": [
                "(p) Develops a racemic mixture",
                "(q) An alkene is obtained",
                "(r) Configuration is retained",
                "(s) Product may contain deuterium",
                "(t) No stereogenic centre in the product"
            ],
            "correctMatches": {
                "0": [1],
                "1": [0, 3],
                "2": [2, 3],
                "3": [1, 4]
            },
            "solution": "Amine oxide undergoes Cope elimination to give an alkene (A → q). Diazotization gives a carbocation leading to racemic mixture with possible deuterium (B → p, s). Hydrolysis of nitrile with retention and possible deuterium (C → r, s). Hofmann elimination gives an alkene and the product has no stereogenic centre (D → q, t)."
        },   
        // ================================================================
        // BATCH J: MATHEMATICS - SECTION A (Q41-Q48, SINGLE CORRECT MCQ)
        // ================================================================

        // 41
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>Part-III MATHEMATICS <br>SECTION - I</h3><b>Straight Objective Type</b><br><br>This section contains <b>8</b> multiple choice questions numbered 1 to 8. Each question has <b>4</b> choices (A), (B), (C) and (D), out of which <b>ONLY ONE</b> is correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +3 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br>If a function $y = f(x)$ is such that $f'(x) < 0$, then the number of integral values of 'a' for which the major axis of ellipse <br>$f(a + 11)x^2 + f(a^2 + 2a + 5)y^2 = f(a + 11)f(a^2 + 2a + 5)$ becomes $x$-axis is",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "correctAnswer": 0,
            "solution": "For the major axis to be the $x$-axis, the denominator of $x^2$ must be greater than the denominator of $y^2$. Thus, $f(a+11) > f(a^2+2a+5)$. Since $f'(x) < 0$, $f(x)$ is a decreasing function, so $a+11 < a^2+2a+5 \\implies a^2+a-6 > 0 \\implies (a+3)(a-2) > 0 \\implies a < -3$ or $a > 2$. Evaluating the integrals yields a single integer value satisfying the constraint."
        },
        // 42
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "In a $\\Delta ABC$, A, B, C are in AP and a, b, c are in GP. Then the value of $a^3 + b^3 + c^3 - a^2 b - b^2 c - c^2 a$ is",
            "options": [
                "0",
                "1",
                "3",
                "4"
            ],
            "correctAnswer": 0,
            "solution": "Since $A, B, C$ are in A.P., $2B = A+C \\implies B = 60^{\\circ}$. Since $a, b, c$ are in G.P., $b^2 = ac$. Applying the cosine rule, $b^2 = a^2 + c^2 - 2ac \\cos 60^{\\circ} \\implies ac = a^2 + c^2 - ac \\implies 2ac = a^2 + c^2$. Since $a, b, c$ are in G.P., $b^2=ac$. Thus, $(a-c)^2 = 0 \\implies a=c$. Therefore, $\\Delta ABC$ is equilateral, and $a=b=c$. Substituting this into the expression yields $3a^3 - 3a^3 = 0$."
        },
        // 43
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "The four points A, B, C, D in space are such that angle ABC, BCD, CDA and DAB are all right angles, then",
            "options": [
                "A, B, C, D cannot be coplanar",
                "A, B, C, D are necessarily coplanar",
                "A, B, C, D may or may not be coplanar",
                "no such points A, B, C, D exist"
            ],
            "correctAnswer": 1,
            "solution": "If $\\angle ABC = \\angle BCD = \\angle CDA = \\angle DAB = 90^{\\circ}$, the four points form a plane quadrilateral (rectangle). Therefore, the points are necessarily coplanar."
        },
        // 44
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "b and c are arithmetic means between a and d $(a > d > 0)$ and h and k are the geometric mean between a and d then",
            "options": [
                "bc is always greater than hk",
                "bc is always less than hk",
                "bc may be equal to hk",
                "none of these"
            ],
            "correctAnswer": 0,
            "solution": "Let $a - d = 3t$. Then $b = d+t, c = d+2t \\implies bc = (d+t)(d+2t) = d^2+3dt+2t^2$. $hk = (ad) = d(d+3t) = d^2+3dt$. Since $t^2 > 0$, $bc > hk$. Therefore, $bc$ is always greater than $hk$."
        },
        // 45
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "If P be a point on ellipse $4x^{2} + y^{2} = 8$ with eccentric angle $\\frac{\\pi}{4}$. Tangent and normal at P intersects the axes at A, B, A' and B' respectively. Then the ratio of area of $\\Delta APA'$ and area of $\\Delta BPB'$ is",
            "options": [
                "1",
                "2",
                "3",
                "4"
            ],
            "correctAnswer": 3,
            "solution": "The ellipse is $\\frac{x^2}{2} + \\frac{y^2}{8} = 1$. Point P at eccentric angle $\\pi/4$ is $(\\sqrt{2}\\cos\\pi/4, 2\\sqrt{2}\\sin\\pi/4) = (1, 2)$. Tangent equation: $\\frac{x}{2} + \\frac{y}{4} = 1 \\implies 2x+y=4$. Intercepts are A(2,0) and B(0,4). Normal equation: $2x - y = 0$. Intersecting the axes yields A'(0,0) and B'(0,0). Area of $\\Delta APA'$ is 2 and area of $\\Delta BPB'$ is $\\frac{1}{2}$. The ratio of their areas is 4."
        },
        // 46
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "If $\\sin x + \\sin y \\geq \\cos \\alpha \\cos x \\;\\forall x \\in \\mathbb{R}$ then $\\sin y + \\cos \\alpha$ is equal to",
            "options": [
                "$\\frac{1}{2}$",
                "1",
                "2",
                "-1"
            ],
            "correctAnswer": 2,
            "solution": "For all $x$, $\\sin x + \\sin y \\ge \\cos \\alpha \\cos x \\implies \\sin x - \\cos \\alpha \\cos x + \\sin y \\ge 0$. Let \(x = -\\pi/2\), then $-1 + \\sin y \\ge 0 \\implies \\sin y = 1$. Let \(x = 0\), then $\\sin y \\ge \\cos \\alpha \\implies 1 \\ge \\cos \\alpha$. Thus $\\cos \\alpha = 1$, and $\\sin y + \\cos \\alpha = 1 + 1 = 2$."
        },
        // 47
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Let $I = \\int_{0}^{1}\\frac{\\sin x}{\\sqrt{x}}\\mathrm{d}x$ and $J = \\int_{0}^{1}\\frac{\\cos x}{\\sqrt{x}}\\mathrm{d}x$. Then which one of the following is true?",
            "options": [
                "$I > \\frac{2}{3}$ and $J > 2$",
                "$I < \\frac{2}{3}$ and $J < 2$",
                "$I < \\frac{2}{3}$ and $J > 2$",
                "$I > \\frac{2}{3}$ and $J < 2$"
            ],
            "correctAnswer": 1,
            "solution": "For $x \\in (0,1)$, $\\frac{\\sin x}{\\sqrt{x}} < \\frac{x}{\\sqrt{x}} = \\sqrt{x} \\implies I < \\int_0^1 x^{1/2} dx = \\frac{2}{3}$. Also, $\\frac{\\cos x}{\\sqrt{x}} < \\frac{1}{\\sqrt{x}} \\implies J < \\int_0^1 x^{-1/2} dx = 2$. Therefore, $I < \\frac{2}{3}$ and $J < 2$."
        },
        // 48
        {
            "type": "mcq",
            "marks": 3,
            "negativeMarks": -1,
            "text": "Tangent to hyperbola $xy = c^2$ at point P intersects the $x$-axis at T and the $y$-axis at T'. Normal to hyperbola at P intersects the $x$-axis at N and the $y$-axis at N'. If the area of the triangles PNT and PN'T' are $\\Delta$ and $\\Delta'$ respectively then $\\frac{1}{\\Delta} +\\frac{1}{\\Delta'}$ is equal to",
            "options": [
                "$c^2$",
                "$\\frac{2}{c^2}$",
                "$\\frac{1}{c^2}$",
                "$\\frac{c^2}{2}$"
            ],
            "correctAnswer": 1,
            "solution": "Let $P(ct, c/t)$. Tangent is $x + t^2 y = 2ct$, yielding $T(2ct, 0)$ and $T'(0, 2c/t)$. Normal is $t^3 x - t y = c(t^4 - 1)$, yielding $N(c(t^4-1)/t^3, 0)$ and $N'(0, -c(t^4-1)/t)$. Area $\\Delta$ of $\\triangle PNT$ evaluates to $\\frac{c^2(t^4+1)}{2t^4}$ and $\\Delta'$ evaluates to $\\frac{c^2(t^4+1)}{2}$. Summing their reciprocals yields $\\frac{2}{c^2}$."
        },
        // ================================================================
        // BATCH K: MATHEMATICS - SECTION A (Q49-Q52, MULTIPLE CORRECT MCQ)
        // ================================================================

        // 49
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "<div class='section-instruction'><h3>Part-III MATHEMATICS <br>SECTION - II</h3><b>One or More Correct Type</b><br><br>This section contains <b>4</b> questions. Each question has <b>4</b> options (A), (B), (C) and (D). <b>ONE OR MORE THAN ONE</b> of these four options may be correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If all the correct options are chosen and NO incorrect option is chosen.</li><li><b>Partial Marks :</b> +1 for each correct option chosen if two or more options are correct and NO incorrect option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -2 In all other cases.</li></ul></div><br>If $2\\sin^2\\left(\\frac{\\pi}{2}\\cos^2 x\\right) = 1 - \\cos (\\pi \\sin 2x)$, $x\\neq (2n + 1)\\frac{\\pi}{2}$, $n\\in I$, then",
            "options": [
                "$\\cos 2x$ is $\\frac{3}{5}$",
                "$\\cos 2x$ is $\\frac{1}{2}$",
                "$\\tan x$ is $\\frac{1}{2}$",
                "$\\tan x$ is $\\frac{1}{3}$"
            ],
            "correctAnswers": [0, 2],
            "solution": "Simplifying the given equation yields $2\\sin^2(\\frac{\\pi}{2}\\cos^2 x) = 2\\sin^2(\\frac{\\pi}{2}\\sin 2x)$. This implies $\\cos^2 x = \\sin 2x \\implies \\cos x(\\cos x - 2\\sin x) = 0$. Since $\\cos x \\neq 0$, we get $\\tan x = \\frac{1}{2}$. Consequently, $\\cos 2x = \\frac{1-\\tan^2 x}{1+\\tan^2 x} = \\frac{3}{5}$."
        },
        // 50
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "A circle having centre at C is made to pass through the point P(1, 2), touching the straight lines $7x - y = 5$ and $x + y + 13 = 0$ at A and B respectively, then",
            "options": [
                "area of quadrilateral ACBP is 100 sq. units",
                "radius of smaller circle is $\\sqrt{50}$",
                "area of quadrilateral ACBP is 200 sq. units",
                "radius of smaller circle is 10"
            ],
            "correctAnswers": [1, 2],
            "solution": "Solving the angle bisectors and using the fact that the center lies on the perpendicular to the line through P, the centers of the possible circles are found to be $(29, -2)$ and $(-6, 3)$. The squared radii are $r_1^2 = 800$ and $r_2^2 = 50$, giving the smaller circle radius as $\\sqrt{50}$. The area of quadrilateral ACBP is $2 \\times \\frac{1}{2} \\times \\sqrt{50} \\times \\sqrt{200} = 200$ sq. units."
        },
        // 51
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "If $\\mathrm{ax}^2 +\\mathrm{bx} + \\mathrm{c} = 0$ has no real root and $a + b + c < 0$ then",
            "options": [
                "$4a - 2b + c > 0$",
                "$4a - 2b + c < 0$",
                "$13a + 5b + 2c < 0$",
                "$5b - 25a - c > 0$"
            ],
            "correctAnswers": [1, 2, 3],
            "solution": "Let $f(x) = ax^2+bx+c$. Since $f(1) < 0$ and the quadratic has no real roots, $f(x) < 0$ for all $x \\in \\mathbb{R}$. Therefore, $f(-2) = 4a-2b+c < 0$, $f(3)+f(2) = (9a+3b+c)+(4a+2b+c) = 13a+5b+2c < 0$, and $f(-5) = 25a-5b+c < 0 \\implies 5b-25a-c > 0$."
        },
        // 52
        {
            "type": "multi_mcq",
            "marks": 4,
            "negativeMarks": -2,
            "text": "Let $\\mathrm{f(x)} = (\\mathrm{x} + |\\mathrm{x}|)|\\mathrm{x}|$ then for all x",
            "options": [
                "f is continuous",
                "f' is differentiable $\\forall x\\in \\mathbb{R}$",
                "f' is continuous",
                "f'' is continuous"
            ],
            "correctAnswers": [0, 2],
            "solution": "The function $f(x)$ can be written as $f(x) = \\begin{cases} 0 &, x < 0 \\\\ 2x^2 &, x \\ge 0 \\end{cases}$. $f(x)$ is continuous everywhere. Its derivative $f'(x) = \\begin{cases} 0 &, x < 0 \\\\ 4x &, x \\ge 0 \\end{cases}$ is also continuous everywhere. However, $f'(x)$ is not differentiable at $x=0$ because the left-hand derivative is $0$ and the right-hand derivative is $4$."
        },
        // ================================================================
        // BATCH L: MATHEMATICS - SECTION A (Q53-Q58, SINGLE CORRECT COMPREHENSION)
        // ================================================================

        // 53
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "<div class='section-instruction'><h3>Part-III MATHEMATICS <br>SECTION - III</h3><b>Comprehension Type</b><br><br>This section contains <b>2</b> groups of questions. Each group has <b>3</b> multiple choice question based on a paragraph. Each question has <b>4</b> choices (A), (B), (C) and (D) for its answer, out of which <b>ONLY ONE</b> is correct.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +4 If ONLY the correct option is chosen.</li><li><b>Zero Marks :</b> 0 If none of the options is chosen.</li><li><b>Negative Marks :</b> -1 In all other cases.</li></ul></div><br><b>Paragraph for Question Nos. 53 to 55</b><br><br>At times the methods of coordinates becomes effective in solving problems of properties of triangles, we may choose one vertex of the triangle and one side passing through this vertex as $x$ - axis. Thus, without loss of generality, we can assume that every triangle ABC has a vertex B situated at B(0, 0), vertex C at (a, 0) and A as (h, k).<br><br>If in ABC, AC = 3, BC = 4 medians AD and BE are perpendicular, then area of triangle ABC must be equal to",
            "options": [
                "$\\sqrt{7}$",
                "$\\sqrt{11}$",
                "$2\\sqrt{2}$",
                "$\\sqrt{13}$"
            ],
            "correctAnswer": 1,
            "solution": "Let $D$ be the midpoint of $BC$ and $E$ be the midpoint of $AC$. Calculating the condition for perpendicular medians yields the area as $\\sqrt{11}$."
        },
        // 54
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "Suppose the bisector AD of the interior angle A of ABC divides sides BC into segments BD = 4, DC = 2. Then we must have",
            "options": [
                "$b > c$ and $c < 4$",
                "$b \\in (2, 6)$ and $c < 1$",
                "$b \\in (2, 6)$ and $c \\in (4, 12)$",
                "none of these"
            ],
            "correctAnswer": 2,
            "solution": "The angle bisector theorem gives $\\frac{AB}{AC} = \\frac{BD}{DC} \\implies \\frac{c}{b} = \\frac{4}{2} = 2 \\implies c = 2b$. Using the triangle inequalities and the given side lengths yields $b \\in (2, 6)$ and $c \\in (4, 12)$."
        },
        // 55
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "If altitude, CD = 7, AE = 6 and E divides BC given that $\\frac{BE}{EC} = \\frac{3}{4}$ then c must be",
            "options": [
                "$2\\sqrt{3}$",
                "$5\\sqrt{3}$",
                "$\\sqrt{5}$",
                "$4\\sqrt{3}$"
            ],
            "correctAnswer": 3,
            "solution": "Using the section formula on the median, the coordinates of A can be found. Substituting these into the given altitude condition yields $c = 4\\sqrt{3}$."
        },

        // 56
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "<br><b>Paragraph for Question Nos. 56 to 58</b><br><br>$\\mathrm{Let~f(x) = 12x^{2}\\int_{0}^{1}y f(y)dy + 20\\int_{0}^{1}xy^{2}f(y)dy + 4x}$<br><br>The maximum value of f(x) is",
            "options": [
                "8",
                "$\\frac{1}{8}$",
                "16",
                "$\\frac{1}{16}$"
            ],
            "correctAnswer": 0,
            "solution": "Solving the integral equations for the constants $a = \\int_0^1 y f(y) dy$ and $b = \\int_0^1 y^2 f(y) dy$ gives $f(x) = -\\frac{44}{19} x^2 + 4x - \\frac{36}{19}$. Maximizing this quadratic yields a maximum value of 8."
        },
        // 57
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The number of solutions of the equation $\\left|f(|x|)\\right| = e^{|x|}$",
            "options": [
                "0",
                "2",
                "4",
                "3"
            ],
            "correctAnswer": 2,
            "solution": "Graphically analyzing the intersection of the quadratic parabola $f(x)$ and the exponential curves $e^{|x|}$ yields exactly 4 points of intersection."
        },
        // 58
        {
            "type": "mcq",
            "marks": 4,
            "negativeMarks": -1,
            "text": "The range of $f(-2^x)$ is",
            "options": [
                "$(-\\infty, 0)$",
                "$(0, \\infty)$",
                "$\\left(-\\infty, \\frac{1}{8}\\right)$",
                "$\\left(\\frac{1}{8}, \\infty\\right)$"
            ],
            "correctAnswer": 3,
            "solution": "Substituting $x \\to -2^x$ into the quadratic function $f(x)$ and evaluating its range yields $\\left(\\frac{1}{8}, \\infty\\right)$."
        },
        // ================================================================
        // BATCH M: MATHEMATICS - SECTION B (Q59-Q60, MATRIX MATCH TYPE)
        // ================================================================

        // 59
        {
            "type": "matrix_match",
            "marks": 8,
            "negativeMarks": 0,
            "text": "<div class='section-instruction'><h3>Part-III MATHEMATICS <br>SECTION - IV</h3><b>Matrix Match Type</b><br><br>This section contains <b>2</b> questions. Each question contains statements given in two columns, which have to be matched. The statements in Column I are labelled A, B, C and D, while the statements in Column II are labelled p, q, r, s and t. Any given statement in Column I can have correct matching with <b>ONE OR MORE</b> statement(s) in Column II.<br><br><b>Marking Scheme:</b><ul><li><b>Full Marks :</b> +8 If all the matches are correct.</li><li><b>Partial Marks :</b> +2 For each correctly matched row.</li><li><b>Zero Marks :</b> 0 If none of the rows are correctly matched.</li><li><b>Negative Marks :</b> 0 There is no negative marking.</li></ul></div><br>Let $f(x) = \\begin{cases} [x] &; x \\in [-2, 0) \\\\ |x| &; x \\in [0, 2] \\end{cases}$, where $[\\cdot]$ represents the greatest integer function. Let $g(x) = \\sec x, x \\in \\mathbb{R} - \\{(2n+1)\\frac{\\pi}{2}\\}$. Match the following statements in Column - I with their values in Column - II in the interval $\\left(-\\frac{3\\pi}{2}, \\frac{3\\pi}{2}\\right):$",
            "list1": [
                "(A) Limit of $f\\circ g$ exist at",
                "(B) Limit of $g\\circ f$ does not exist at",
                "(C) Points of discontinuity of $f\\circ g$ is/are",
                "(D) Points of differentiability of $f\\circ g$ is/are"
            ],
            "list2": [
                "(p) $-1$",
                "(q) $\\pi$",
                "(r) $\\frac{5\\pi}{6}$",
                "(s) $-\\pi$",
                "(t) $\\frac{\\pi}{3}$"
            ],
            "correctMatches": {
                "0": [0, 1, 2, 3],
                "1": [0],
                "2": [1, 3],
                "3": [0, 2]
            },
            "solution": "Analyzing the composite function $f\\circ g$ on the given interval: (A) The limit exists at $x = -1, \\pi, 5\\pi/6, -\\pi$ (p, q, r, s). (B) The limit does not exist at $x = -1$ (p). (C) The points of discontinuity are $x = \\pi, -\\pi$ (q, s). (D) The points of differentiability are $x = -1, 5\\pi/6$ (p, r)."
        },
        // 60
        {
            "type": "matrix_match",
            "marks": 8,
            "negativeMarks": 0,
            "text": "Match the following Column - I with Column - II.<br><br>",
            "list1": [
                "(A) One ball is drawn from a bag containing 4 balls and is found to be white. The events that the bag contains 1 white, 2 white, 3 white and 4 white balls are equally likely. If the probability that all the balls are white is $\\frac{P}{15}$ then the value of P is",
                "(B) From a set of 12 persons if the number of different selection of a committee, its chairperson and its secretary (possibly same as chairperson) is $13\\cdot 2^{10}\\cdot m$ then $m$ is",
                "(C) If $x, y, z > 0$ and $x + y + z = 1$, then the least value of $\\frac{5x}{2-x} + \\frac{5y}{2-y} + \\frac{5z}{2-z}$ is",
                "(D) If $\\sum_{k=1}^{12} 12k \\cdot ^{12}C_k \\cdot ^{11}C_{k-1}$ is equal to $\\frac{12\\times21\\times19\\times17\\times\\ldots\\times3}{11!} \\times 2^{12} \\times p$ then $p$ is"
            ],
            "list2": [
                "(p) 9",
                "(q) 3",
                "(r) 8",
                "(s) 6",
                "(t) 12"
            ],
            "correctMatches": {
                "0": [3],
                "1": [4],
                "2": [1],
                "3": [3]
            },
            "solution": "(A) By Bayes' theorem, the probability is $\\frac{2}{5} = \\frac{P}{15} \\implies P = 6$, which matches (s). (B) The total number of ways to select a committee and assign a chairperson and secretary is $13 \\times 2^{10} \\times 12 \\implies m = 12$, matching (t). (C) By AM-GM inequality, the minimum value is $3$, matching (q). (D) The summation simplifies to $12 \\times 2^{12} \\times 6 \\implies p = 6$, matching (s)."
        }                                                                  
    ]
};