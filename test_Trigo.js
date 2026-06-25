const testData = {
  testMetadata: {
    testName: "Trigonometric Ratios, Identities, Equations & Inequalities",
    subject: "Mathematics",
    targetExams: ["IIT-JEE Mains", "IIT-JEE Advanced", "EAMCET"],
    totalQuestions: 15,
    durationMinutes: 60,
    totalMarks: 60,
    markingScheme: {
      correct: 4,
      incorrect: -1,
      unattempted: 0
    },
    instructions: "Read all questions carefully. Standard +4/-1 marking applies. Ensure you check the domain constraints for trigonometric equations before selecting your final answer."
  },
  questions: [
    // --- TRIGONOMETRIC RATIOS & IDENTITIES ---
    {
      id: 1,
      category: "Identities & Standard Values",
      question: "What is the exact value of $\\cos 36^\\circ$?",
      options: [
        "$\\frac{\\sqrt{5} - 1}{4}$",
        "$\\frac{\\sqrt{5} + 1}{4}$",
        "$\\frac{\\sqrt{10 - 2\\sqrt{5}}}{4}$",
        "$\\frac{\\sqrt{10 + 2\\sqrt{5}}}{4}$"
      ],
      correctIndex: 1,
      explanation: "Standard value recall: $\\cos 36^\\circ = \\frac{\\sqrt{5} + 1}{4}$. This is a crucial value frequently used alongside $\\sin 18^\\circ = \\frac{\\sqrt{5} - 1}{4}$."
    },
    
    // ... [Insert the rest of the 14 questions from the previous array here] ...
    
    {
      id: 15,
      category: "Equations with Domain Constraints",
      question: "How many solutions exist for the equation $\\sin x = \\frac{x}{10}$?",
      options: [
        "3",
        "5",
        "7",
        "Infinite"
      ],
      correctIndex: 2,
      explanation: "Graphing $y = \\sin x$ and $y = x/10$, the line passes through the origin and intersects the sine wave. Since $10 \\approx 3\\pi$, the line will intersect the peaks and troughs up to $x \approx \\pm 3\\pi$. Counting the intersections graphically yields exactly 7 solutions."
    }
  ]
};

// Export for your specific environment
// export default testData; 
// or let it sit globally if you are just using a standard <script src="trigTest.js"></script> tag in your index.html