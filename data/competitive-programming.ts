import { RoadmapTopic } from "@/types/roadmap";

export const competitiveProgrammingRoadmap: RoadmapTopic[] = [
  /*===============================================
        Competitive programming fundamentals
   =============================================*/
  {
    id: "competitive-programming-fundamentals",
    logo: "",
    title: "Competitive Programming Fundamentals",
    description: "Learn the fundamentals of Competitive Programming, understand online judges, programming contests, and develop the problem-solving mindset required for ICPC, IOI, Codeforces, and technical interviews.",
    difficulty: "Beginner",
    duration: "2 Weeks",
    learningPath: [
      "What is Competitive Programming?",
      "Benefits of Competitive Programming",
      "Contest Formats (ICPC, IOI, Codeforces, Atcoder)",
      "Choosing a programming Language",
      "Setting Up Your Development Environment",
      "Reading Problems Statements",
      "Input & Output",
      "Constraints",
      "Time Limits",
      "Memory Limits",
      "Time Complexity Basics",
      "Space Complexity Basics",
      "Fast Input & Output",
      "Debugging Strategies",
      "Handling Edge Cases",
      "Testing Your Solutions",
      "Competitive Programming Workflow",
      "Problem Solving Mindset",
    ],
    documentation: [
      {
      id:"cp-algorithms",
      title: "CP-Algorithms",
      url:"https://cp-algorithms.com/",
      recommended:true,
      },
      {
        id:"usaco-guide",
        title:"USACO Guide",
        url:"https://usaco.guide/",
      },
      {
        id:"codeforces-help",
        title:"Codeforces Help",
        url:"https://codeforces.com/help",
      },
      {
        id:"cppreference",
        title:"cppreference",
        url:"https://en.cppreference.com/",
      },
    ],
    videos:[
      {
        id:"cp-introduction",
        title:"Competitive Programming Roadmap",
        duration:"1h",
        url:"https://youtu.be/bSdp2WeyuJY?si=PlSdtknI8ybnbDK3",
      },
      {
        id:"icpc-introduction",
        title:"Introduction to ICPC & Competitive Programming",
        duration:"9m",
        url:"https://youtu.be/l1dllAFcKzE?si=pKoEsppGIRv_q9x8",
      },
    ],

    practice: [
  {
    id:"codeforces",
    title: "Codeforces",
    description: "The World's largest competitive programming platform.",
    url: "https://codeforces.com/",
  },
  {
    id:"atcoder",
    title: "AtCoder",
    description: "Excellent contests with high-quality problem sets.",
    url: "https://atcoder.jp/",
  },
  {
    id:"cses",
    title: "CSES Problem Set",
    description: "Structured problems organized by topic.",
    url: "https://cses.fi/problemset/",
  },
  {
    id:"kattis",
    title: "Kattis",
    description: "Programming challenges used by universities worldwide.",
    url: "https://open.kattis.com/",
  },
],
    
    projects: [
      {
        title:"Solve Your First 20 Competitive Programming Problems",
        difficulty:"Beginner",
      },
      {
        title:"Participate in Your First Online Contest",
        difficulty:"Beginner",
      },
      {
        title:"Create Your Own Competitive Programming Template",
        difficulty:"Intermediate",
      },
    ],

    tools:[
      {
        title:"Visual Studio Code",
        url:"https://code.visualstudio.com/",
      },
      {
        title:"Codeforces",
        url:"https://codeforces.com/",
      },
      {
        title:"AtCoder",
        url:"https://atcoder.jp/",
      },
      {
        title:"CSES Problem Set",
        url:"https://cses.fi/problemset/",
      },
    ],

  },
  /*===============================================
           C++ for competitive programming
   =============================================*/
  {
    id: "cpp-for-competitive-programming",
    logo: "/logos/cpp.svg",
    title: "C++ for Competitive Programming",
    description: "Master modern C++ and the Standard Template Library (STL) used by competitive programmers. Learn efficient coding techniques, containers, algorithms, and best practices for solving programming contest problems",
    difficulty: "Beginner",
    duration: "3 Weeks",
    learningPath: [
      "Why C++ for CCompetitive Programming?",
      "Setting Up GCC & G++",
      "Fast Input & Output",
      "Namespaces",
      "Data Types",
      "Type Aliases",
      "Macros",
      "Functions",
      "Recursion",
      "Vectors",
      "Paris",
      "Tuples",
      "Arrays",
      "Strings",
      "Maps",
    "Unordered Maps",
    "Sets",
    "Unoredered Sets",
    "Queues",
    "Priority Queues",
    "Stacks",
    "Deque",
    "Iterators",
    "STL Algorithms",
    "Sorting",
    "Binary Search",
    "Lambda Functions",
    "Custom Comparators",
    "Competitive Programming Templates",
    "Common STL Tricks"
    ],
    documentation: [
      {
      id:"cppreference",
      title: "cppreference",
      url:"https://en.cppreference.com/",
      recommended:true,
      },
      {
        id:"cplusplus",
        title:"cplusplus",
        url:"https://cplueplus.com/reference/",
      },
      {
        id:"gcc",
        title:"GNU GCC Documentation",
        url:"https://gcc.gnu.org/onlinedocs/",
      },
      {
        id:"cp-algorithms-stl",
        title:"CP-Algorithms",
        url:"https://cp-algorithms.com/",
      },
    ],
    videos:[
      {
        id:"cpp-stl",
        title:"C++ STL for Competitive Programming",
        duration:"1h 7m",
        url:"https://youtu.be/RRVYpIET_RU?si=bbeSuAMtDVmQcIrl",
      },
      {
        id:"cpp-fast",
        title:"Modern C++ for Competitive Programming",
        duration:"7m",
        url:"https://youtu.be/bVKHRtafgPc?si=DoQkhA5vOPiAWjGt",
      },
    ],

    practice: [
  {
    id:"cses-intro",
    title: "CSES Introductory Problems",
    description: "Practice basic C++ implementation problems.",
    url: "https://cses.fi/problemset/",
  },
  {
    id:"codeforces-a",
    title: "Codesforces",
    description: "Solve beginner problems using STL.",
    url: "https://codeforces.com",
  },
  {
    id:"atcoder-beginner",
    title: "AtCoder Beginner Contests",
    description: "Practice STL through beginner contests.",
    url: "https://atcoder.jp/",
  },
],
    
    projects: [
      {
        title:"Build Your Personal Competitive Programming Template",
        difficulty:"Beginner",
      },
      {
        title:"Solve 30 STL-Based Problems",
        difficulty:"Intermediate",
      },
      {
        title:"Complete the CSES Introductory Problems Set",
        difficulty:"Intermediate",
      },
    ],

    tools:[
      {
        title:"Visual Studio Code",
        url:"https://code.visualstudio.com/",
      },
      {
        title:"GCC Compiler",
        url:"https://gcc.gnu.org/",
      },
      {
        title:"cppreference",
        url:"https://en.cppreference.com/",
      },
      {
        title:"Codeforces",
        url:"https://codeforces.com/",
      },
    ],

  },
  /*===============================================
           Complexity Analysis
   =============================================*/
  {
    id: "complexity-analysis",
    logo: "",
    title: "Complexity Analysis",
    description: "Learn how to analyze the efficiency of algorithms using time and space complexity. Master Big O notation and understand how constraints determine the optimal solution in competitive programming.",
    difficulty: "Beginner",
    duration: "2 Weeks",
    learningPath: [
      "Why Complexity Matters",
      "Algorithm Efficiency",
      "Time Complexity",
      "Space Complexity",
      "Big O Notation",
      "Big Ω (Omega)",
      "Big Θ (Theta)",
      "Best, Average & Worst Cases",
      "Amortized Analysis",
      "Logarithmic Complexity",
      "Nested Loops Analysis",
      "Recurrence Relations",
      "Master Theorem (Introduction)",
      "Complexity of STL Containers",
      "Complexity of STL Algorithms",
      "Reading Constraints",
      "Choosing the Right Algorithm",
      "Common Complexity Patterns",
      "Avoiding Time Limit Exceeded (TLE)",
      "Practice Complexity Estimation",
    ],
    documentation: [
      {
      id:"cp-algorithms-complexity",
      title: "CP-Algorithms",
      url:"https://cp-algorithms.com/",
      recommended:true,
      },
      {
      id:"usaco-complexity",
      title: "USACO Guide",
      url:"https://usaco.guide/",
      
      },
      {
        id:"big-o-cheatsheet",
        title:"Big-O Cheat Sheet",
        url:"https://www.bigocheatsheet.com/",
      },
      {
        id:"cppreference",
        title:"cppreference",
        url:"https://en.cppreference.com/",
      },
    ],
    videos:[
      {
        id:"big-o",
        title:"Big O Notation Explained",
        duration:"20m",
        url:"https://youtu.be/BgLTDT03QtU?si=pQHn52MHvjLXipoi",
      },
      {
        id:"complexity-analysis",
        title:"Time & Space Complexity",
        duration:"35m",
        url:"https://youtu.be/FPu9Uld7W-E?si=0-e3RV47fTOa_91L",
      },
    ],

    practice: [
  {
    id:"cses-intro",
    title: "CSES Problem Set",
    description: "Estimate complexity before solving each problem.",
    url: "https://cses.fi/problemset/",
  },
  {
    id:"codeforces",
    title: "Codeforces",
    description: "Practice choosing algorithms based on constraints.",
    url: "https://codeforces.com/",
  },
  {
    id:"atcoder",
    title: "AtCoder",
    description: "Analyze solution complexity for beginner contests.",
    url: "https://atcoder.jp/",
  },
],
    
    projects: [
      {
        title:"Analyze the Complexity of 50 Algorithms",
        difficulty:"Beginner",
      },
      {
        title:"Solve Problems Under Different Constraints",
        difficulty:"Intermediate",
      },
      {
        title:"Build a Personal Complexity Cheat Sheet",
        difficulty:"Intermediate",
      },
    ],

    tools:[
      {
        title:"Big-O Cheat Sheet",
        url:"https://www.bigocheatsheet.com/",
      },
      {
        title:"CP-Algorithms",
        url:"https://cp-algorithms.com/",
      },
      {
        title:"USACO Guide",
        url:"https://usaco.guide/",
      },
    ],

  },
  /*===============================================
            Math for Comp-Programming
   =============================================*/
  {
  id: "mathematics",
  logo: "",
  title: "Mathematics for Competitive Programming",
  description: "Build the mathematical foundation required for competitive programming. Learn number theory, modular arithemtic, combinatorics, and mathematical techniques commonly used in ICPC, Codeforces, and algorithmic problem solving.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Mathematical Thinking",
    "Divisibility",
    "Prime Numbers",
    "Prime Factorization",
    "Sieve of Eratosthenes",
    "Linear Sieve",
    "Greatest Common Divisor (GCD)",
    "Least Common Multiple",
    "Euclidean Algorithm",
    "Extended Euclidean Algorithm",
    "Modular Arithmetic",
    "Fast Modular Exponentiation",
    "Modular Inverse",
    "Euler's Totient Function",
    "Fermat's Little Theorem",
    "Chinese Remainder Theorem (Introduction)",
    "Permutations",
    "Combinations",
    "Binomial Coefficients",
    "Pascal's Triangle",
    "Inclusion-Exclusion Principle",
    "Pigeonhole Principle",
    "Catalan Numbers",
    "Matrix Exponentiation",
    "Fibonacci Optimization",
    "Mathematicals Problem Solving Techniques",
  ],

  documentation: [
    {
      id: "cp-algorithms-math",
      title: "CP-Algorithms - Mathematics",
      url: "https://cp-algorithms.com/algebra/",
      recommended: true,
    },
    {
      id: "usaco-math",
      title: "USACO Guide - Mathematics",
      url: "https://usaco.guide/",
    },
    {
      id: "cp-handbook",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
    },
    {
      id: "mathworld",
      title: "Wolfram MathWorld",
      url: "https://mathworld.wolfram.com/",
    },
  ],

  videos: [
    {
      id: "cp-number-theory",
      title: "Number Theory for Competitive Programming",
      duration: "37m",
      url: "https://youtu.be/KOzByAdxVZ8?si=Pf6jZro84Uaz5CNM",
    },
    {
      id: "modular-arithmetic",
      title: "Modular Arthimetic",
      duration: "15m",
      url: "https://youtu.be/RCq5TYMZEwg?si=HajYvVS9tbMc-jSW",
    },
  ],

  practice: [
    {
      id: "cses-math",
      title: "CSES Mathematics Problems",
      description: "Practice fundamental mathematics and number theory problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces",
      title: "Codeforces",
      description: "Solve math-tagged competitive programming problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder",
      title: "AtCoder",
      description: "Practice mathematical algorithms in contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "project-euler",
      title: "Project Euler",
      description: "Improve mathematical problem-solving skills.",
      url: "https://projecteuler.net/",
    },
  ],

  projects: [
    {
      title: "Implement a Complete Number Theory Library",
      difficulty: "Intermediate",
    },
    {
      title: "Solve 50 Math-Based Competitive Programming Problems",
      difficulty: "Intermediate",
    },
    {
      title: "Create a Modular Arithmetic Utility Library",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
    },
    {
      title: "Wolfram MathWorld",
      url: "https://mathworld.wolfram.com/",
    },
    {
      title: "Project Euler",
      url: "https://projecteuler.net/",
    },
  ],
},
 /*===============================================
             Bit Manipulation
   =============================================*/
  {
  id: "bit-manipulation",
  logo: "",
  title: "Bit Manipulation",
  description: "Master binary operations, bitmasking, and low-level optimization techniques used extensively in competitive programming. Learn how to solve problems efficiently using bitwise operations and bitmask dynamic programming.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Binary Number System",
    "Binary Representation",
    "Bitwise AND (&)",
    "Bitwise OR (|)",
    "Bitwise XOR (^)",
    "Bitwise NOT (~)",
    "Left Shift (<<)",
    "Right Shift (>>)",
    "Checking a Bit",
    "Setting a Bit",
    "Clearing a Bit",
    "Toggling a Bit",
    "Counting Set Bits",
    "Built-in Bit Functions",
    "Power of Two Tricks",
    "Least Significant Bit (LSB)",
    "Most Significant Bit (MSB)",
    "Bitmasking",
    "Subset Enumeration",
    "Submask Enumeration",
    "Gray Code",
    "XOR Properties",
    "Bitmask Dynamic Programming",
    "Common Bit Manipulation Tricks",
  ],

  documentation: [
    {
      id: "cp-algorithms-bit",
      title: "CP-Algorithms - Bit Manipulation",
      url: "https://cp-algorithms.com/algebra/bit-manipulation.html",
      recommended: true,
    },
     {
      id: "usaco-bit",
      title: "USACO Guide - Bitwise Operations",
      url: "https://usaco.guide/",
      
    },
     {
      id: "cppreference-bitset",
      title: "cppreference - std::bitset",
      url: "https://en.cppreference.com/w/cpp/utility/bitset",
      
    },
    {
      id: "gcc-builtins",
      title: "GCC Built-in Functions",
      url: "https://gcc.gnu.org/onlinedocs/gcc/Other-Builtins.html",
      
    },
  ],

  videos: [
    {
      id: "bitwise-operations",
      title: "Bit Manipulation for Competitive Programming",
      duration: "12m",
      url: "https://youtu.be/xXKL9YBWgCY?si=I8I0N6xsqppvvbzZ",
    },
    {
      id: "bitmask-dp",
      title: "Bitmasking & Bitmask Dynamic Programming",
      duration: "5m",
      url: "https://youtu.be/JvsGLRxK4NQ?si=fQV_8RTkL6JvKHji",
    },
  ],

  practice: [
    {
      id: "cses-bit",
      title: "CSES Problem Set",
      description: "Practice binary and bitmask-based problems.",
      url: "https://cses.fi/problemset/",
    },
     {
      id: "codeforces-bit",
      title: "Codeforces",
      description: "Solve bit manipulation tagged problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-bit",
      title: "AtCoder",
      description: "Practice bitwise techniques in contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "leetcode-bit",
      title: "LeetCode",
      description: "Practice classic bit manipulation interview problems.",
      url: "https://leetcode.com/problemset/",
    },
  ],

  projects: [
    {
      title: "Build a Bit Manipulation Utility Library",
      difficulty: "Intermediate",
    },
    {
      title: "Solve 40 Bit Manipulation Problems",
      difficulty: "Intermediate",
    },
    {
      title: "Implement Bitmask Dynamic Programming Solutions",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "cppreference",
      url: "https://en.cppreference.com/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
 /*===============================================
           Brute force & Backtracking 
   =============================================*/
  {
  id: "brute-force-backtracking",
  logo: "",
  title: "Brute Force & Backtracking",
  description: "Learn exhaustive search techniques, recursion, and backtracking algorithms used to solve combinatorial optimization and state-space search problems in competitive programming.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Brute Force Fundamentals",
    "Complete Search",
    "Exhaustive Search",
    "When to Use Brute Force",
    "Recursion Fundamentals",
    "Recursive Thinking",
    "Recursive Tree Analysis",
    "Base Cases",
    "Backtracking Fundamentals",
    "Decision Trees",
    "State Space Search",
    "Pruning Techniques",
    "Generating Subsets",
    "Generating Permutations",
    "Generating Combinations",
    "N-Queens Problem",
    "Sudoku Solver",
    "Knight's Tour",
    "Branch & Bound (Introduction)",
    "Recursive Optimization",
    "Common Backtracking Patterns",
  ],

  documentation: [
    {
      id: "cp-backtracking",
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
      recommended: true,
    },
    {
      id: "usaco-recursion",
      title: "USACO Guide",
      url: "https://usaco.guide/",
      
    },
    {
      id: "cppreference-recursion",
      title: "cppreference",
      url: "https://en.cppreference.com/",
      recommended: true,
    },
    {
      id: "geeks-backtracking",
      title: "GeeksforGeeks - Backtracking",
      url: "https://www.geeksforgeeks.org/backtracking-algorithms/",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "backtracking-course",
      title: "Backtracking Algorithms",
      duration: "14m",
      url: "https://youtu.be/Zq4upTEaQyM?si=YObPEDujfWCsQlb8",
    },
    {
      id: "recursion-course",
      title: "Recursion for Competitve Programming",
      duration: "22m",
      url: "https://youtu.be/yVdKa8dnKiE?si=hXphgFJ6jqmZOh9o",
    },
  ],

  practice: [
    {
      id: "cses-backtracking",
      title: "CSES Problem Set",
      description: "Practice recursion and complete search problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-backtracking",
      title: "Codeforces",
      description: "Solve brute force and backtracking tagged problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-backtracking",
      title: "AtCoder",
      description: "Practice recursive search techniques.",
      url: "https://atcoder.jp/",
    },
    {
      id: "leetcode-backtracking",
      title: "LeetCode",
      description: "Master classic recursion and backtracking problems.",
      url: "https://leetcode.com/problemset/",
    },
  ],

  projects: [
    {
      title: "Build a Recursive Algorithms Library",
      difficulty: "Beginner",
    },
    {
      title: "Implement 10 Classic Backtracking Algorithms",
      difficulty: "Intermediate",
    },
    {
      title: "Solve 50 Brute Force & Backtracking Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
    },
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
  ],
},
 /*===============================================
            Sorting & searching
   =============================================*/
   {
  id: "sorting-searching",
  logo: "",
  title: "Sorting & Searching",
  description: "Master the most fundamental algorithms used in Competitive Programming. Learn sorting algorithms, binary search techniques, two pointers, sliding window, and efficient searching strategies used in programming contests.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Why Sorting Matters",
    "Bubble Sort",
    "Insertion Sort",
    "Merge Sort",
    "Quick Sort",
    "Heap Sort",
    "Counting Sort",
    "Radix Sort",
    "Stable vs Unstable Sorting",
    "STL sort()",
    "Custom Comparators",
    "Binary Search",
    "Binary Search on Answer",
    "Lower Bound",
    "Upper Bound",
    "Ternary Search",
    "Two Pointers Technique",
    "Sliding Window Technique",
    "Meet in the Middle (Introduction)",
    "Searching in Sorted Arrays",
    "Searching in Rotated Arrays",
    "Sorting Tricks",
    "Common Competitive Programming Patterns",
  ],

  documentation: [
    {
      id: "cp-sort-search",
      title: "CP-Algorithms - Sorting & Searching",
      url: "https://cp-algorithms.com/",
      recommended: true,
    },
    {
      id: "usaco-sort-search",
      title: "USACO Guide - Sorting & Searching",
      url: "https://usaco.guide/",
    },
    {
      id: "cppreference-sort",
      title: "cppreference - std::sort",
      url: "https://en.cppreference.com/w/cpp/algorithm/sort",
    },
    {
      id: "cppreference-binary-search",
      title: "cppreference - Binary Search Algorithms",
      url: "https://en.cppreference.com/w/cpp/algorithm/lower_bound",
    },
  ],

  videos: [
    {
      id: "sorting-cp",
      title: "Sorting Algorithms for Competitive Programming",
      duration: "1h 7m",
      url: "https://youtu.be/RRVYpIET_RU?si=dsFR5w9QK9RETI_f",
    },
    {
      id: "binary-search-cp",
      title: "Binary Search & Two Pointers",
      duration: "27m",
      url: "https://youtu.be/GU7DpgHINWQ?si=8gIB3Q52xAz2--b3",
    },
  ],

  practice: [
    {
      id: "cses-sort",
      title: "CSES Sorting and Searching",
      description: "Practice one of the best collections of sorting and searching problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-sort",
      title: "Codeforces",
      description: "Solve sorting, binary search, and two pointers problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-sort",
      title: "AtCoder",
      description: "Practice efficient searching techniques through contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "leetcode-binary-search",
      title: "LeetCode",
      description: "Practice binary search, sliding window, and sorting problems.",
      url: "https://leetcode.com/problemset/",
    },
  ],

  projects: [
    {
      title: "Implement Every Major Sorting Algorithm",
      difficulty: "Beginner",
    },
    {
      title: "Build a Binary Search Algorithm Library",
      difficulty: "Intermediate",
    },
    {
      title: "Solve 75 Sorting & Searching Problems",
      difficulty: "Advanced",
    },
    
  ],

  tools: [
    {
      title: "cppreference",
      url: "https://en.cppreference.com/",
    },
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
 /*===============================================
           perfix sums & difference arrays
   =============================================*/
  {
  id: "prefix-sums-difference-arrays",
  logo: "",
  title: "Prefix Sums & Difference Arrays",
  description: "Master prefix sums, suffix sums, difference arrays, and range query techniques that transform inefficient solutions into optimal algorithms for competitive programming.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Prefix Sums",
    "Building Prefix Sum Arrays",
    "Range Sum Queries",
    "2D Prefix Sums",
    "Prefix XOR",
    "Prefix GCD",
    "Prefix Minimum",
    "Prefix Maximum",
    "Suffix Arrays",
    "Difference Arrays",
    "Range Update Queries",
    "Offline Range Queries",
     "Coordinate Compression",
    "Sweep Line Basics",
    "Prefix Hashing (Introduction)",
    "Applications in Competitive Programming",
    "Common Prefix Sum Patterns",
    "Optimization Techniques",
  ],

  documentation: [
    {
      id: "cp-prefix",
      title: "CP-Algorithms - Prefix Sums",
      url: "https://cp-algorithms.com/",
      recommended: true,
    },
    {
      id: "usaco-prefix",
      title: "USACO Guide - Prefix Sums",
      url: "https://usaco.guide/",
    },
    {
      id: "cses-book",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
    
    },
    {
      id: "geeks-prefix",
      title: "GeeksforGeeks - Prefix Sum",
      url: "https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/",
    
    },
  ],

  videos: [
    {
      id: "prefix-sums",
      title: "Prefix Sums & Range Queries",
      duration: "20m",
      url: "https://youtu.be/PhgtNY_-CiY?si=vB0gRY3pTBE3kcQ_",
    },
    {
      id: "difference-array",
      title: "Difference Arrays Explained",
      duration: "11m",
      url: "https://youtu.be/R-PBfqsRGP0?si=6841OUhnm1M_SIy_",
    },
  ],

  practice: [
    {
      id: "cses-prefix",
      title: "CSES Problem Set",
      description: "Practice prefix sums and range query problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-prefix",
      title: "Codeforces",
      description: "Solve prefix sum and difference array problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-prefix",
      title: "AtCoder",
      description: "Practice cumulative sum techniques in contests.",
      url: "https://atcoder.jp/",
    },
     {
      id: "leetcode-prefix",
      title: "LeetCode",
      description: "Master prefix sums through interview-style problems.",
      url: "https://leetcode.com/problemset/",
    },
  ],

  projects: [
    {
      title: "Build a Prefix Sum Utility Library",
      difficulty: "Beginner",
    },
    {
      title: "Implement 2D Prefix Sum Algorithms",
      difficulty: "Intermediate",
    },
    {
      title: "Solve 50 Range Query Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
     {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
         Greedy Algorithms
   =============================================*/
   {
  id: "greedy-algorithms",
  logo: "",
  title: "Greedy Algorithms",
  description: "Learn how to solve optimization problems by making locally optimal decisions. Master greedy strategies, proofs of correctness, and common patterns frequently used in competitive programming contests.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to Greedy Algorithms",
    "Greedy Choice Property",
    "Optimal Substructure",
    "When Greedy Works",
    "Sorting-Based Greedy",
    "Interval Scheduling",
    "Activity Selection",
    "Fractional Knapsack",
    "Jop Sequencing",
    "Minimum Platforms",
    "Coin Change (Greedy vs Dynamic Programming)",
    "Huffman Coding",
     "Minimum Spanning Tree (Greedy Preview)",
    "Exchange Argument",
    "Proof of Correctness",
    "Recognizing Greedy Problems",
    "Common Greedy Patterns",
    "Greedy Pitfalls",
    "Greedy in Competitive Programming",
    "Contest Problem Solving",
  ],

  documentation: [
    {
      id: "cp-greedy",
      title: "CP-Algorithms - Greedy Algorithms",
      url: "https://cp-algorithms.com/",
      recommended: true,
    },
    {
      id: "usaco-greedy",
      title: "USACO Guide - Greedy",
      url: "https://usaco.guide/",
      
    },
    {
      id: "cses-book-greedy",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
    {
      id: "geeks-greedy",
      title: "GeeksforGeeks - Greedy Algorithms",
      url: "https://www.geeksforgeeks.org/greedy-algorithms/",
      
    },
  ],

  videos: [
    {
      id: "greedy-intro",
      title: "Greedy Algorithms Explained",
      duration: "12m",
      url: "https://youtu.be/ARvQcqJ_-NY?si=8MsZJ8Scgvlfi8FQ",
    },
    {
      id: "greedy-cp",
      title: "Greedy Algorithms for Competitive Programming",
      duration: "45m",
      url: "https://youtu.be/W1hdYdsqBJo?si=cedDLt-jFVBGF2XB",
    },
  ],

  practice: [
    {
      id: "cses-greedy",
      title: "CSES Problem Set",
      description: "Practice interval scheduling and greedy optimization problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-greedy",
      title: "Codeforces",
      description: "Solve greedy-tagged contest problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-greedy",
      title: "AtCoder",
      description: "Practice greedy strategies in beginner and regular contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "leetcode",
      title: "LeetCode",
      description: "Strengthen greedy intuition through interview-style questions.",
      url: "https://leetcode.com/problemset/",
    },
  ],

  projects: [
    {
      title: "Implement 10 Classic Greedy Algorithms",
      difficulty: "Beginner",
    },
    {
      title: "Solve 50 Greedy Programming Problems",
      difficulty: "Intermediate",
    },
    {
      title: "Build a Greedy Algorithm Cheat Sheet with Proofs",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
            Dynamic Programming
   =============================================*/
   {
  id: "dynamic-programming-1",
  logo: "",
  title: "Dynamic Programming",
  description: "Master the fundamentals of Dynamic Programming (DP), one of the most important techniques in Competitive Programming. Learn how to identify DP problems, define states, build transitions, and optimize recursive solutions.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Introduction to Dynamic Programming",
    "When to Use Dynamic Programming",
    "Overlapping Subproblems",
    "Optimal Substructure",
    "Recursion Review",
    "Memoization",
    "Tabulation",
    "Top-Down vs Bottom-Up",
    "State Definition",
    "State Transition",
    "Base Cases",
    "Space Optimization",
     "1D Dynamic Programming",
     "2D Dynamic Programming",
     "Fibonacci DP",
     "Climbing Stairs",
     "House Robber",
     "Coin Change",
     "Subset Sum",
     "Partition Equal Subset Sum",
     "0/1 Knapsack",
     "Longest Increasing Subsequence (LIS)",
     "Longest Common Subsequence (LCS)",
     "Edit Distance",
     "Common Dynamic Programming Patterns",
  ],

  documentation: [
    {
      id: "cp-dp",
      title: "CP-Algorithms - Dynamic Programming",
      url: "https://cp-algorithms.com/dynamic_programming/intro-to-dp.html",
      recommended: true,
    },
    {
      id: "usaco-dp",
      title: "USACO Guide - Dynamic Programming",
      url: "https://usaco.guide/gold/dp-intro",
      
    },
    {
      id: "atcoder-dp",
      title: "AtCoder Eductional DP Contest",
      url: "https://atcoder.jp/contests/dp",
      
    },
    {
      id: "cp-handbook",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
  ],

  videos: [
    {
      id: "dp-intro",
      title: "Dynamic Programming for Beginners",
      duration: "15m",
      url: "https://youtu.be/vYquumk4nWw?si=rk29WvlkLLaVWyWQ",
    },
    {
      id: "dp-patterns",
      title: "Dynamic Programming Patterns",
      duration: "28m",
      url: "https://youtu.be/mBNrRy2_hVs?si=KAOYUZULY7Qy-a2O",
    },
  ],

  practice: [
    {
      id: "atcoder-dp-contest",
      title: "AtCoder Eductional DP Contest",
      description: "The best structured Dynamic Programming problem set.",
      url: "https://atcoder.jp/contests/dp",
    },
     {
      id: "cses-dp",
      title: "CSES Dynamic Programming",
      description: "Practice classic Dynamic Programming problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-dp",
      title: "Codeforces",
      description: "Solve Dynamic Programming tagged problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "leetcode-dp",
      title: "LeetCode",
      description: "Practice common Dynamic Programming interview questions.",
      url: "https://leetcode.com/problemset/",
    },
  ],

  projects: [
    {
      title: "Implement 15 Classic Dynamic Programming Algorithms",
      difficulty: "Intermediate",
    },
    {
      title: "Solve the Complete AtCoder Educational DP Contest",
      difficulty: "Advanced",
    },
    {
      title: "Build Your Personal Dynamic Programming Pattern Library",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "AtCoder Educational DP Contest",
      url: "https://atcoder.jp/contests/dp",
    },
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
  ],
},
/*===============================================
             Dynamic Programming II
   =============================================*/
  {
  id: "dynamic-programming-2",
  logo: "",
  title: "Dynamic Programming II",
  description: "Take your Dynamic Programming skills to the next level by mastering advanced DP techniques used in ICPC World Finals, Codeforces Div.1, AtCoder Grand Contests, and Olympiad-level programming.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Review of Dynamic Programing Fundamentals",
    "State Compression",
    "Bitmask Dynamic Programming",
    "Digit Dynamic Programming",
    "Interval Dynamic Programming",
    "Tree Dynamic Programming",
    "Rerooting Dynamic Programming",
    "Dynamic Programming on DAGs",
    "Probability Dynamic Programming",
    "Profile Dynamic Programming",
    "SOS Dynamic Programming",
    "Broken Profile Dynamic Programming",
     "Knapsack & Conquer DP Optimization",
     "Knuth Optimization",
     "Convex Hull Trick",
     "Alien Trick (Parametric DP)",
     "DP with Monotonic Queue",
     "DP with Bitsets",
     "Advanced Dynamic Programming Patterns",
     "Recognizing Hidden DP Problems",
     "Competitive Programming Case Studies",
  ],

  documentation: [
    {
      id: "cp-advanced-dp",
      title: "CP-Algorithms - Dynamic Programming",
      url: "https://cp-algorithms.com/dynamic_programming/",
      recommended: true,
    },
    {
      id: "usaco-advanced-dp",
      title: "USACO Guide - Advanced Dynamic Programming",
      url: "https://usaco.guide/",
     
    },
    {
      id: "atcoder-dp",
      title: "AtCoder Educational DP Contest",
      url: "https://atcoder.jp/contests/dp",
     
    },
    {
      id: "cp-handbook-dp",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
     
    },
  ],

  videos: [
    {
      id: "advanced-dp",
      title: "Advanced Dynamic Programming",
      duration: "5m",
      url: "https://youtu.be/CiIa0Wut6dc?si=R7kwQahkx5FYmpiy",
    },
    {
      id: "digit-dp",
      title: "Digit DP & Bitmask DP",
      duration: "16m",
      url: "https://youtu.be/bjucBkxrMBs?si=lsb9VzJ59socgKq7",
    },
  ],

  practice: [
    {
      id: "atcoder-dp-advanced",
      title: "AtCoder Educational DP Contest",
      description: "Complete all advanced DP tasks.",
      url: "https://atcoder.jp/contests/dp",
    },
    {
      id: "cses-dp-advanced",
      title: "CSES Dynamic Programming",
      description: "Practice increasingly difficult DP problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-dp-advanced",
      title: "Codeforces",
      description: "Solve advanced DP problems from Div.2 and Div.1 contests.",
      url: "https://codeforces.com/",
    },
     {
      id: "ojuz-dp",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level Dynamic Programming problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Implement Advanced Dynamic Programming Templates",
      difficulty: "Advanced",
    },
    {
      title: "Solve 75 Advanced DP Problems",
      difficulty: "Advanced",
    },
    {
      title: "Create Your Dynamic Programming Pattern Handbook",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "AtCoder Educational DP Contest",
      url: "https://atcoder.jp/contests/dp",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    
  ],
},
/*===============================================
           Graph Algorithms
   =============================================*/
   {
  id: "graph-algorithms-1",
  logo: "",
  title: "Graph Algorithms",
  description: "Learn the foundations of graph theory and master graph traversal algorithms such as DFS and BFS. These algorithms are essential for solving connectivity, traversal, and shortest-path problems in competitive programming.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to Graph Theory",
    "Graph Terminology",
    "Directed vs Undirected Graphs",
    "Weighted vs Unweighted Graphs",
    "Graph Representation",
    "Adjacency Matrix",
    "Adjacency List",
    "Edge List",
    "Depth-First Search (DFS)",
    "Breadth-First Search (BFS)",
    "Connected Components",
    "Graph Traversal Techniques",
     "Cycle Detection",
     "Bipartite Graph Checking",
     "Topological Sorting",
     "Kahn's Algorithm",
     "DFS Topological Sort",
     "Flood Fill Algorithm",
     "Grid Graph Traversal",
     "Multi-Source BFS",
     "Graph Modeling",
     "Common Graph Problem Patterns",
  ],

  documentation: [
    {
      id: "cp-graphs",
      title: "CP-Algorithms - Graph Algorithms",
      url: "https://cp-algorithms.com/graph/",
      recommended: true,
    },
    {
      id: "usaco-graphs",
      title: "USACO Guide - Graphs",
      url: "https://usaco.guide/",
     
    },
    {
      id: "cses-book-graphs",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
    {
      id: "cppreference-queue",
      title: "cppreference - Queue & Stack",
      url: "https://en.cppreference.com/",
      
    },
  ],

  videos: [
    {
      id: "dfs-bfs",
      title: "DFS & BFS for Competitive Programming",
      duration: "42m",
      url: "https://youtu.be/awqss7Kjt2Y?si=5UN4xuFJVPTrn7WE",
    },
    {
      id: "graph-intro",
      title: "Introduction to Graph Algorithms",
      duration: "16m",
      url: "https://youtu.be/LFKZLXVO-Dg?si=eSIsYl-kMjEG-rRU",
    },
  ],

  practice: [
    {
      id: "cses-graphs",
      title: "CSES Graph Algorithms",
      description: "One of the best collections of graph problems for beginners.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-graphs",
      title: "Codeforces",
      description: "Practice DFS, BFS, and graph traversal problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-graphs",
      title: "AtCoder",
      description: "Practice graph algorithms through contest problems.",
      url: "https://atcoder.jp/",
    },
    {
      id: "ojuz-graphs",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level graph problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Build a Graph Algorithms Library",
      difficulty: "Intermediate",
    },
    {
      title: "Implement DFS, BFS & Topological Sort from Scratch",
      difficulty: "Intermediate",
    },
    {
      title: "Solve 75 Graph Traversal Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
            Graph Algorithms II
   =============================================*/
   {
  id: "graph-algorithms-2",
  logo: "",
  title: "Graph Algorithms II",
  description: "Master shortest path algorithms, minimum spanning trees, and disjoint set data structures. These algorithms are among the most frequently used in ICPC, Codeforces, AtCoder, and technical interviews.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Shortest Path Problems",
    "Single Source vs All-Pairs Shortest Paths",
    "Breadth-First Search Shortest Path",
    "0-1 BFS",
    "Dijkstra's Algorithm",
    "Bellman-Ford Algorithm",
    "Floyd-Warshall Algorithm",
    "Path Reconstruction",
    "Negative Cycles",
    "Minimum Spanning Tree (MST)",
    "Prim's Algorithm",
    "Kruskal's Algorithm",
     "Disjoint Set Union (Union Find)",
     "Union by Rank",
     "Path Compression",
     "Dense vs Sparse Graphs",
     "Choosing the Right Graph Algorithm",
     "Common Graph Optimization Techniques",
     "Contest Graph Patterns",
     "Real Competitive Programming Case Studies",
  ],

  documentation: [
    {
      id: "cp-shortest-path",
      title: "CP-Algorithms - Shortest Paths",
      url: "https://cp-algorithms.com/graph/",
      recommended: true,
    },
    {
      id: "cp-dsu",
      title: "CP-Algorithms - Disjoint Set Union",
      url: "https://cp-algorithms.com/data_structures/disjoint_set_union.html",
     
    },
    {
      id: "usaco-advanced-graphs",
      title: "USACO Guide - Graphs",
      url: "https://usaco.guide/",
      
    },
    {
      id: "cp-handbook-graphs",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
  ],

  videos: [
    {
      id: "shortest-paths",
      title: "Shortest Path Algorithms",
      duration: "18m",
      url: "https://youtu.be/XB4MIexjvY0?si=xsOGPlJFzXipB25q",
    },
    {
      id: "mst-dsu",
      title: "Minimum Spanning Tree & Disjoint Set Union",
      duration: "26m",
      url: "https://youtu.be/eTaWFhPXPz4?si=3FNsbEWiEmRE_OeQ",
    },
  ],

  practice: [
    {
      id: "cses-advanced-graphs",
      title: "CSES Graph Algorithms",
      description: "Practice shortest paths, MSTs, and graph optimization problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-advanced-graphs",
      title: "Codeforces",
      description: "Solve advanced graph theory problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-advanced-graphs",
      title: "AtCoder",
      description: "Practice weighted graph algorithms through contests.",
      url: "https://atcoder.jp/",
    },
  ],

  projects: [
    {
      title: "Build a Complete Graph Algorithms Library",
      difficulty: "Advanced",
    },
    {
      title: "Implement Every Major Shortest Path Algorithm",
      difficulty: "Advanced",
    },
    {
      title: "Solve 75 Weighted Graph Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
          Advanced graph algorithms
   =============================================*/
   {
  id: "advanced-graph-algorithms",
  logo: "",
  title: "Advanced Graph Algorithms",
  description: "Master advanced graph techniques used in ICPC World Finals, IOI, Codeforces Div.1, and AtCoder Grand Contests. Learn advanced connectivity algorithms, Lowest Common Ancestor, Heavy-Light Decomposition, Network Flow, and graph optimization techniques.",
  difficulty: "Advanced",
  duration: "6 Weeks",

  learningPath: [
    "Review of Graph Theory",
    "Strongly Connected Components (SCC)",
    "Kosaraju's Algorithm",
    "Bridges in Graphs",
    "Articulation Points",
    "Biconnected Components",
    "Bridge Tree",
    "Lowest Common Ancestor (LCA)",
    "Binary Lifting",
    "Euler Tour Technique",
    "Heavy-Light Decomposition",
    "Centroid Decomposition",
     "Maximum Bipartite Matching",
     "Hopcroft-Karp Algorithm",
     "Maximum Flow",
     "Ford-Fulkerson Algorithm",
     "Edmonds-Karp Algorithm",
     "Dinic's Algorithm",
     "Minimum Cut",
     "Flow with Lower Bounds",
     "Network Flow Applications",
     "Graph Condensation",
     "Advanced Contest Graph Patterns",
  ],

  documentation: [
    {
      id: "cp-advanced-graphs",
      title: "CP-Algorithms - Graph Algorithms",
      url: "https://cp-algorithms.com/graph/",
      recommended: true,
    },
    {
      id: "cp-flow",
      title: "CP-Algorithms - Network Flow",
      url: "https://cp-algorithms.com/graph/edmonds_karp.html",
     
    },
    {
      id: "usaco-advanced-graphs",
      title: "USACO Guide - Advanced Graphs",
      url: "https://usaco.guide/",
      
    },
    {
      id: "cp-handbook-graphs",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
  ],

  videos: [
    {
      id: "advanced-graphs",
      title: "Advanced Graph Algorithms",
      duration: "6h 44m",
      url: "https://youtu.be/09_LlHjoEiY?si=OH4s-yEmgpYYU8UD",
    },
    {
      id: "network-flow",
      title: "Network Flow for Competitive Programming",
      duration: "1h",
      url: "https://youtu.be/lgfqN4rsVvU?si=PfLG91ReKAt5bNzk",
    },
  ],

  practice: [
    {
      id: "cses-advanced",
      title: "CSES Advanced Graph Problems",
      description: "Practice SCC, LCA, and advanced graph algorithms.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-advanced",
      title: "Codeforces",
      description: "Solve advanced graph problems from Div.1 and Div.2 contests.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-advanced",
      title: "AtCoder",
      description: "Practice advanced graph techniques in ABC, ARC, and AGC contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "ojuz-advanced",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level graph problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Build an Advanced Graph Algorithms Library",
      difficulty: "Advanced",
    },
    {
      title: "Implement LCA, HLD, SCC & Network Flow from Scratch",
      difficulty: "Advanced",
    },
    {
      title: "Solve 100 Advanced Graph Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
            TREES
   =============================================*/
   {
  id: "trees",
  logo: "",
  title: "Trees",
  description: "Master tree data structures and algorithms used extensively in Competitive Programming. Learn tree traversals, Lowest Common Ancestor (LCA), tree dynamic programming, subtree queries, Heavy-Light Decomposition, and advanced tree techniques commonly used in ICPC, Codeforces, and AtCoder",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Introduction to Trees",
    "Tree Terminology",
    "Rooted Trees",
    "Binary Trees",
    "Binary Search Trees",
    "N-ary Trees",
    "Tree Representation",
    "DFS on Trees",
    "BFS on Trees",
    "Preorder Traversal",
    "Inorder Traversal",
    "Postorder Traversal",
     "Tree Height & Depth",
     "Tree Diameter",
     "Tree Centers",
     "Lowest Common Ancestor (LCA)",
     "Binary Lifting",
     "Euler Tour Technique",
     "Subtree Queries",
     "Tree Dynamic Programming",
     "Rerooting DP",
     "Fenwick Tree on Euler Tour",
     "Segment Tree on Trees",
     "Heavy-Light Decomposition",
     "Virtual Trees",
     "Contest Tree Patterns",
  ],

  documentation: [
    {
      id: "cp-trees",
      title: "CP-Algorithms - Trees",
      url: "https://cp-algorithms.com/graph/",
      recommended: true,
    },
    {
      id: "cp-lca",
      title: "CP-Algorithms - Lowest Common Ancestor",
      url: "https://cp-algorithms.com/graph/lca.html",
     
    },
    {
      id: "usaco-trees",
      title: "USACO Guide - Trees",
      url: "https://usaco.guide/",
    },
    {
      id: "cp-handbook-trees",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
  ],

  videos: [
    {
      id: "trees-course",
      title: "Trees for Competitive Programming",
      duration: "1h 48m",
      url: "https://youtu.be/fAAZixBzIAI?si=EXCYR1eDAQI81DBV",
    },
    {
      id: "tree-dp",
      title: "Tree DP & Binary Lifting",
      duration: "35m",
      url: "https://youtu.be/38yRq24Zpu4?si=3z18hwFYWcEahXlO",
    },
  ],

  practice: [
    {
      id: "cses-trees",
      title: "CSES Tree Algorithms",
      description: "Practice classic tree problems including LCA, subtree queries, and tree diameter.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-trees",
      title: "Codeforces",
      description: "Solve tree and graph-tagged competitive programming problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-trees",
      title: "AtCoder",
      description: "Practice advanced tree algorithms through contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "ojuz-trees",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level tree problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Build a Complete Tree Algorithms Library",
      difficulty: "Advanced",
    },
    {
      title: "Implement LCA, Tree DP, Euler Tour & HLD from Scratch",
      difficulty: "Advanced",
    },
    {
      title: "Solve 100 Tree Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},

/*===============================================
            Strings
   =============================================*/
   {
  id: "strings",
  logo: "",
  title: "Strings",
  description: "Master string algorithms used in Competitive Programming. Learn pattern matching, string hashing, tries, suffix structures, palindromes, and advanced text-processing algorithms used in ICPC, Codeforces, AtCoder, and IOI.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Introduction to Strings",
    "Character Arrays",
    "STL String",
    "String Manipulation",
    "Lexicographical Ordering",
    "Frequency Counting",
    "Prefix Function (KMP)",
    "Knuth-Morris-Pratt Algorithm",
    "Z Algorithm",
    "Rabin-Karp Algorithm",
    "Rolling Hash",
    "Polynomial Hashing",
     "Double Hashing",
     "Trie (Prefix Tree)",
     "Compressed Trie",
     "Suffix Array",
     "LCP Array",
     "Suffix Tree",
     "Aho-Corasick Algorithm",
     "Manacher's Algorithm",
     "Palindromic Tree (Eetree)",
     "String Dynamic Programming",
     "Pattern Matching Techniques",
     "Contest String Patterns",
  ],

  documentation: [
    {
      id: "cp-strings",
      title: "CP-Algorithms - String Processing",
      url: "https://cp-algorithms.com/string/",
      recommended: true,
    },
    {
      id: "cp-kmp",
      title: "CP-Algorithms - Prefix Function (KMP)",
      url: "https://cp-algorithms.com/string/prefix-function.html",
     
    },
    {
      id: "usaco-strings",
      title: "USACO Guide - String Algorithms",
      url: "https://usaco.guide/",
      
    },
    {
      id: "cp-handbook-strings",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
  ],

  videos: [
    {
      id: "string-algorithms",
      title: "String Algorithms for Competitive Programming",
      duration: "1h 26m",
      url: "https://youtu.be/ZnAyhsMJdTk?si=Bq1n4fyldh66__pi",
    },
    {
      id: "kmp-z-hashing",
      title: "KMP, Z Algorithm & String Hashing",
      duration: "43m",
      url: "https://youtu.be/io9yJ-KelgE?si=mC_VjPzlhKUUjY_O",
    },
  ],

  practice: [
    {
      id: "cses-strings",
      title: "CSES String Algorithms",
      description: "Practice pattern matching, hashing, and suffix array problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-strings",
      title: "Codeforces",
      description: "Solve String-tagged competitive programming problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-strings",
      title: "AtCoder",
      description: "Practice advanced string algorithms through contests.",
      url: "https://atcoder.jp/",
    },
     {
      id: "ojuz-strings",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level string problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Build a Complete String Algorithms Library",
      difficulty: "Advanced",
    },
    {
      title: "Implement KMP, Trie, Rolling Hash & Suffix Array from Scratch",
      difficulty: "Advanced",
    },
    {
      title: "Solve 100 String Algorithm Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
            Advanced Data Dtructures
   =============================================*/
   {
  id: "advanced-data-structures",
  logo: "",
  title: "Advanced Data Structures",
  description: "Master the advanced data structures used in high-level Competitive Programming contests. Learn efficient range queries, updates, order statistics, and powerful techniques that appear in ICPC, Codeforces Div.1, AtCoder, IOI.",
  difficulty: "Advanced",
  duration: "6 Weeks",

  learningPath: [
    "Review of STL Data Structures",
    "Stack",
    "Queue",
    "Deque",
    "Priority Queue",
    "Binary Indexed Tree (Fenwick Tree)",
    "Fenwick Tree Applications",
    "Segment Tree",
    "Segment Tree Variants",
    "Lazy Propagation",
    "Sprase Table",
    "Disjoint Set Union Review",
     "Ordered Set (PBDS)",
     "Policy-Based Data Structures",
     "Treap",
     "AVL Tree",
     "Red-Black Tree",
     "Splay Tree",
     "Persistent Segment Tree",
     "Merge Sort Tree",
     "Wavelet Tree",
     "Square Root Decomposition",
     "Mo's Algorithm",
     "Advanced Range Query Problems",
     "Choosing the Right Data Structure",
     "Contest Data Structure Patterns",
  ],

  documentation: [
    {
      id: "cp-ds",
      title: "CP-Algorithms - Data Structures",
      url: "https://cp-algorithms.com/data_structures/",
      recommended: true,
    },
    {
      id: "cp-segment-tree",
      title: "CP-Algorithms - Segment Tree",
      url: "https://cp-algorithms.com/data_structures/segment_tree.html",
     
    },
    {
      id: "cp-fenwick",
      title: "CP-Algorithms - Fenwick Tree",
      url: "https://cp-algorithms.com/data_structures/fenwick.html",
      
    },
    {
      id: "usaco-ds",
      title: "USACO Guide - Advanced Data Structures",
      url: "https://usaco.guide/",
      
    },
  ],

  videos: [
    {
      id: "segment-tree",
      title: "Segment Tree & Lazy Propagation",
      duration: "21m",
      url: "https://youtu.be/rwXVCELcrqU?si=SzSEEGr1sJjsVFU9",
    },
    {
      id: "advanced-ds",
      title: "Advanced Data Structures for Competitive Programming",
      duration: "9m",
      url: "https://youtu.be/QSMulpBPDe0?si=3wmqoo00pKNeJCUW",
    },
  ],

  practice: [
    {
      id: "cses-range",
      title: "CSES Range Queries",
      description: "Practice Fenwick Trees, Segment Trees, and Sparse Tables.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-ds",
      title: "Codeforces",
      description: "Solve advanced data structure problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-ds",
      title: "AtCoder",
      description: "Practice advanced range query techniques.",
      url: "https://atcoder.jp/",
    },
    {
      id: "ojuz-ds",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level data structure problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Build an Advanced Data Structures Library",
      difficulty: "Advanced",
    },
    {
      title: "Implement Fenwick Tree, Segment Tree & PBDS from Scratch",
      difficulty: "Advanced",
    },
    {
      title: "Solve 100 advanced Data Structure Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
          Computational Geometry
   =============================================*/
   {
  id: "computational-geometry",
  logo: "",
  title: "Computational Geometry",
  description: "Learn computational geometry algorithms used in ICPC, IOI, and advanced programming contests. Master geometric primitives, convex hulls, line intersections, polygon algorithms, and precision handling.",
  difficulty: "Advanced",
  duration: "5 Weeks",

  learningPath: [
    "Geometry Fundamentals",
    "Coordinate Geometry",
    "Points & Vectors",
    "Vector Operations",
    "Dot Product",
    "Cross Product",
    "Distance Between Points",
    "Lines & Line Equations",
    "Line Segments",
    "Orientation Test (CCW)",
    "Line Intersection",
    "Segment Intersection",
     "Polygon Representation",
     "Polygon Area (Shoelace Formula)",
     "Point in Polygon",
     "Convex Hull",
     "Graham Scan",
     "Monotonic Chain Algorithm",
     "Rotating Calipers",
     "Closest Pair of Points",
     "Sweep Line Algorithm",
     "Circle Geometry",
     "Half Plane Intersection",
     "Geometry Precision & EPS",
     "Common Geometry Contest Patterns",
  ],

  documentation: [
    {
      id: "cp-geometry",
      title: "CP-Algorithms - Geometry",
      url: "https://cp-algorithms.com/geometry/",
      recommended: true,
    },
    {
      id: "usaco-geometry",
      title: "USACO Guide - Geometry",
      url: "https://usaco.guide/",
     
    },
    {
      id: "kactl-geometry",
      title: "KACTL Geometry Library",
      url: "https://github.com/kth-competitive-programming/kactl",
      
    },
    {
      id: "cp-handbook-geometry",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      
    },
  ],

  videos: [
    {
      id: "geometry-intro",
      title: "Computational Geometry for Competitive Programming",
      duration: "Playlist",
      url: "https://youtube.com/playlist?list=PLMDFPuH4ZxUGe-qreA6cde5g7PywDvrsD&si=TGz5p-0a9ix8IkBJ",
    },
    {
      id: "convex-hull",
      title: "Convex Hull & Geometry Algorithms",
      duration: "37m",
      url: "https://youtu.be/G51AjY8tIcA?si=DCrlA8Z1tkJlPEjQ",
    },
  ],

  practice: [
    {
      id: "cses-geometry",
      title: "CSES Geometry Problems",
      description: "Practice computational geometry fundamentals.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-geometry",
      title: "Codeforces",
      description: "Solve geometry-tagged competitive programming problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-geometry",
      title: "AtCoder",
      description: "Practice geometry algorithms through contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "ojuz-geometry",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level geometry problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Build a Complete Computational Geometry Library",
      difficulty: "Advanced",
    },
    {
      title: "Implement Convex Hull, Line Sweep & Closest Pair Algorithms",
      difficulty: "Advanced",
    },
    {
      title: "Solve 75 Geometry Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "KACTL",
      url: "https://github.com/kth-competitive-programming/kactl",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
  ],
},
/*===============================================
           Advanced Techniques
   =============================================*/
   {
  id: "advanced-techniques",
  logo: "",
  title: "Advanced Techniques",
  description: "Master advanced algorithmic techniques that frequently appear in ICPC World Finals, IOI, Codeforces Div.1, and AtCoder Grand Contests. Learn optimization strategies, offline processing, advanced searching, randomized algorithms, and mathematicals techniques for solving the hardest competitive programming problems.",
  difficulty: "Advanced",
  duration: "6 Weeks",

  learningPath: [
    "Algorithmic Problem Solving Strategies",
    "Divide and Conquer",
    "Meet in the Middle",
    "Square Root Decomposition",
    "Mo's Algorithm",
    "Offline Algorithms",
    "Coordinate Compression",
    "Sweep Line Technique",
    "Binary Search on Answer",
    "Parallel Binary Search",
    "Ternary Search",
    "Randomized Algorithms",
     "Randomized Hashing",
     "Fast Fourier Transform (FFT)",
     "Number Theoretic Transform (NTT)",
     "Matrix Exponentiation",
     "Linear Recurrence Optimization",
     "Convex Hull Trick",
     "Li Chao Tree",
     "Game Theory Fundamentals",
     "Sprague-Grundy Theorem",
     "Probability & Expected Value",
     "Interactive Problems",
     "Optimization Techniques",
     "Advanced Contest Patterns",
  ],

  documentation: [
    {
      id: "cp-advanced",
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
      recommended: true,
    },
    {
      id: "usaco-advanced",
      title: "USACO Guide - Advanced Topics",
      url: "https://usaco.guide/",
     
    },
    {
      id: "kactl",
      title: "KACTL (KTH Competitive Programming Library)",
      url: "https://github.com/kth-competitive-programming/kactl",
    },
    {
      id: "cp-handbook",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
    },
  ],

  videos: [
    {
      id: "advanced-techniques-course",
      title: "Advanced Competitive Programming Techniques",
      duration: "10m",
      url: "https://youtu.be/bVKHRtafgPc?si=6iOTy7yQ5wpuZtN1",
    },
    {
      id: "fft-mo-cp",
      title: "FFT Algorithm",
      duration: "28m",
      url: "https://youtu.be/h7apO7q16V0?si=ZLfiMKBCSKLlNzmy",
    },
    {
      id: "mo-cp",
      title: "Mo's Algorithm",
      duration: "1h 29m",
      url: "https://www.youtube.com/live/BJhzd_VG61k?si=4GRhKpaWUeJACltk",
    },
  ],

  practice: [
    {
      id: "cses-advanced",
      title: "CSES Problem Set",
      description: "Practice advanced algorithmic techniques and optimization problems.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "codeforces-advanced",
      title: "Codeforces",
      description: "Solve Div.1 and advanced algorithmic problems.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder-advanced",
      title: "AtCoder",
      description: "Practice advanced contest algorithms through ARC and AGC contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "ojuz-advanced",
      title: "OJ.uz",
      description: "Challenge yourself with Olympiad-level optimization and advanced algorithm problems.",
      url: "https://oj.uz/",
    },
  ],

  projects: [
    {
      title: "Build an Advanced Competitive Programming Library",
      difficulty: "Advanced",
    },
    {
      title: "Implement FFT, Mo's Algorithm & Convex Hull Trick from Scratch",
      difficulty: "Advanced",
    },
    {
      title: "Solve 100 Advanced Algorithm Problems",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com",
    },
    {
      title: "KACTL",
      url: "https://github.com/kth-competitive-programming/kactl",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
  ],
},
/*===============================================
      Contests  & Competitive programming preparation
   =============================================*/
   {
  id: "contest-preparation",
  logo: "",
  title: "Contests  & Competitive Programming Preparation",
  description: "Prepare for real programming contests by learning contest strategies, efficient debugging, fast coding techniques, teamwork, and systematic rating improvement. This roadmap prepares you for Codeforces, AtCoder, ICPC, IOI, Meta Hacker Cup, Google Code Jam archives, and other prestigious competitions.",
  difficulty: "Advanced",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to Competitive Programming",
    "Contest Workflow",
    "Reading Problems Efficiently",
    "Problem Classification",
    "Choosing the First Problem",
    "Time Management",
    "Fast Input & Output",
    "Competitive Programming Templates",
    "Building Your Personal CP Library",
    "Debugging Under Pressure",
    "Handling Edge Cases",
    "Stress Management During Contests",
     "Virtual Contests",
     "Upsolving",
     "Code Review",
     "Rating Improvement Strategy",
     "Codeforces Roadmap",
     "AtCoder Difficulty Progression",
     "CSES Progression",
     "ICPC Individual Preparation",
     "ICPC Team Strategy",
     "Communication During Team Contests",
     "Notebook Preparation (ICPC Notebook)",
     "IOI Preparation Strategy",
     "Meta Hacker Cup Preparation",
     "Google Code Jam Archive Practice",
     "Common Contest Mistakes",
     "Performance Analysis",
     "Long-Term Training Plan",
     "Becoming an Elite Competitive Programmer"
  ],

  documentation: [
    {
      id: "cp-handbook",
      title: "Competitive Programmer's Handbook",
      url: "https://cses.fi/book/book.pdf",
      recommended: true,
    },
    {
      id: "cp-algorithms",
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
     
    },
    {
      id: "usaco-guide",
      title: "USACO Guide",
      url: "https://usaco.guide/",
      
    },
    {
      id: "icpc-reference",
      title: "ICPC Team Notebook Reference",
      url: "https://github.com/kth-competitive-programming/kactl",
      
    },
  ],

  videos: [
    {
      id: "contest-strategy",
      title: "Competitive Programming Contest Strategy",
      duration: "1m",
      url: "https://youtu.be/cB5jSWxYmrs?si=3JMIwcDJifLOrcEQ",
    },
    {
      id: "cp-training",
      title: "How to Improve Your Competitive Programming Rating",
      duration: "4m",
      url: "https://youtu.be/UwHqsX2JIYA?si=1Qz-x1W0hKg3m5lL",
    },
  ],

  practice: [
    {
      id: "codeforces",
      title: "Codeforces",
      description: "Participate in regular Div.1-Div.4 contests and virtual contests.",
      url: "https://codeforces.com/",
    },
    {
      id: "atcoder",
      title: "AtCoder",
      description: "Participate ABC, ARC, and AGC contests.",
      url: "https://atcoder.jp/",
    },
    {
      id: "cses",
      title: "CSES Problem Set",
      description: "Complete the entire CSES problem set as a milestone.",
      url: "https://cses.fi/problemset/",
    },
    {
      id: "ojuz",
      title: "OJ.uz",
      description: "Solve Olympiad-level programming problems.",
      url: "https://oj.uz/",
    },
    {
      id: "usaco",
      title: "USACO Training",
      description: "Develop algorithmic thinking through structured training.",
      url: "https://usaco.guide/",
    },
  ],

  projects: [
    {
      title: "Build Your Personal Competitive Programming Template",
      difficulty: "Advanced",
    },
    {
      title: "Create a Complete ICPC Notebook",
      difficulty: "Advanced",
    },
    {
      title: "Complete the Entire CSES Problem Set",
      difficulty: "Advanced",
    },
    {
      title: "Reach Expert (1600+) on Codeforces",
      difficulty: "Advanced",
    },
    {
      title: "Participate in 100 Rated Contests",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Codeforces",
      url: "https://codeforces.com/",
    },
    {
      title: "AtCoder",
      url: "https://atcoder.jp/",
    },
    {
      title: "CSES Problem Set",
      url: "https://cses.fi/problemset/",
    },
    {
      title: "USACO Guide",
      url: "https://usaco.guide/",
    },
    {
      title: "CP-Algorithms",
      url: "https://cp-algorithms.com/",
    },
    {
      title: "KACTL",
      url: "https://github.com/kth-competitive-programming/kactl",
    },
  ],
},

];