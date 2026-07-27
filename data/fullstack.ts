import { RoadmapTopic } from "@/types/roadmap";
export const fullStackRoadmap : RoadmapTopic[]=[
    /*===============================================
                    Internet
   =============================================*/
  {
    id: "internet",
    logo: "/logos/internet.svg",
    title: "Internet",
    description: "Learn how Internet works, how computers communicate, and how data travels across the web before diving into backend development.",
    difficulty: "Beginner",
    duration: "1 Week",
    learningPath: [
      "What is the Internet?",
      "How the Internet Works",
      "Clients and Servers",
      "IP Addresses",
      "Domain Names",
      "DNS (Domain Name System)",
      "Ports",
      "Packets",
      "Routers",
      "ISP (Internet Service Provider)",
      "Latency & Bandwidth",
      "How Websites Load",
    ],
    documentation: [
      {
      id:"mdn-http-overview",
      title: "MDN - How the Web Works",
      url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Howto/Web_mechanics/How_does_the_Internet_work",
      recommended:true,
      },
      {
        id:"cloudflare-learning",
        title:"Cloudflare Learning Center",
        url:"https://www.cloudflare.com/learning/",
      },
      {
        id:"cs-fyi-internet",
        title:"CS.fyi - How does the Internet work?",
        url:"https://cs.fyi/guide/how-does-internet-work",
      },
    ],
    videos:[
      {
        id:"fcc - internet",
        title:"How the Internet Works",
        duration:"1h 43m",
        url:"https://youtu.be/zN8YNNHcaZc",
      },
      {
        id:"code-org-internet",
        title:"How the Internet Actually Works",
        duration:"3m",
        url:"https://youtu.be/Dxcc6ycZ73M",
      },
      {
        id:"networkchuck-internet",
        title:"How the Internet Actually Works",
        duration:"9m",
        url:"https://youtu.be/x3c1ih2NJEg",
      },
    ],

    practice: [
  {
    id:"dns-checker",
    title: "DNS Checker",
    description: "Explore DNS records and propagation around the world.",
    url: "https://dnschecker.org/",
  },
  {
    id:"cloudflare-dns",
    title: "Cloudflare DNS Checker",
    description: "Practice looking up DNS records.",
    url: "https://one.one.one.one/help/",
  },
  {
    id:"iplocation",
    title: "IP Location",
    description: "Explore IP addresses and their geographical locations.",
    url: "https://www.iplocation.net/",
  },
],
    
    projects: [
      {
        title:"Explain How a Website Loads",
        difficulty:"Beginner",
      },
      {
        title:"Build a DNS Lookup Tool using an API",
        difficulty:"Intermediate",
      },
      {
        title:"Visualize the journey of an HTTP Request",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Wireshark",
        url:"https://www.wireshark.org/",
      },
      {
        title:"Ping",
        url:"https://en.wikipedia.org/wiki/Ping_(networking_utility)",
      },
      {
        title:"Tracerouter",
        url:"https://en.wikipedia.org/wiki/Traceroute",
      },
    ],

  },
  /*===============================================
                    HTML
   =============================================*/
  {
    id: "html",
    logo: "/logos/html.svg",
    title: "HTML",
    description: "Learn how to build the structure of every website.",
    difficulty: "Beginner",
    duration: "1 Week",
    learningPath: [
      "HTML Basics",
      "Elements",
      "Attributes",
      "Headings",
      "Paragraphs",
      "Links",
      "Images",
      "Lists",
      "Tables",
      "Forms",
      "Semantic HTML",
      "Accessibility",
    ],
    documentation: [
      {
      id:"mdn",
      title: "MDN Web Docs",
      url:"https://developer.mozilla.org/en-US/docs/Web/HTML",
      recommended:true,
      },
      {
        id:"w3schools",
        title:"W3Schools",
        url:"https://www.w3schools.com/html/",
      },
    ],
    videos:[
      {
        id:"fcc",
        title:"freeCodeCamp HTML Course",
        duration:"4h",
        url:"https://youtu.be/kUMe1FH4CHE?si=7xG6n09_tVSqLBoq&t=1",
      },
      {
        id:"ssd",
        title:"SuperSimpleDev HTML",
        duration:"3h",
        url:"https://youtu.be/G3e-cpL7ofc?si=JKjGUvy9vszK6a70",
      },
    ],

    practice: [
  {
    id:"frontendmentor",
    title: "Frontend Mentor",
    description: "Build real-world frontend projects from professional designs.",
    url: "https://www.frontendmentor.io/",
  },
  {
    id:"codepen",
    title: "CodePen",
    description: "Experiment with HTML, CSS, and JavaScript in your browser.",
    url: "https://codepen.io/",
  },
  {
    id:"scrimba",
    title: "Scrimba",
    description: "Interactive coding exercises and mini projects.",
    url: "https://scrimba.com/",
  },
],
    
    projects: [
      {
        title:"Personal Portfolio",
        difficulty:"Beginner",
      },
      {
        title:"Google Homepage Clone",
        difficulty:"Intermediate",
      },
      {
        title:"Restaurant Landing Page",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Visual Studio Code",
        url:"https://code.visualstudio.com/",
      },
      {
        title:"Live Server",
        url:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
      },
      {
        title:"HTML Validator",
        url:"https://validator.w3.org/",
      },
    ],

  },
  /*===============================================
                    CSS
   =============================================*/
  {
    id: "css",
    logo: "/logos/css.svg",
    title: "CSS",
    description: "Learn how to style modern, responsive, and beautiful websites.",
    difficulty: "Beginner",
    duration: "2 Week",
    learningPath: [
      "CSS Basics",
      "Selectors",
      "Colors",
      "Units",
      "Typography",
      "Box Model",
      "Display",
      "Position",
      "Flexbox",
      "CSS Grid",
      "Media Queries",
      "Transitions",
      "Animations",
      "Responsive Design",
    ],
    documentation: [
      {
      id:"mdn-css",
      title: "MDN Web Docs",
      url:"https://developer.mozilla.org/en-US/docs/Web/CSS",
      recommended:true,
      },
      {
        id:"w3schools",
        title:"W3Schools CSS",
        url:"https://www.w3schools.com/css/",
      },
      {
        id:"css-tricks",
        title:"CSS Tricks",
        url:"https://css-tricks.com/",
      },
    ],
    videos:[
      {
        id:"fcc-css",
        title:"freeCodeCamp CSS Course",
        duration:"11h",
        url:"https://youtu.be/OXGznpKZ_sA",
      },
      {
        id:"ssd-css",
        title:"SuperSimpleDev CSS & HTML Course",
        duration:"6h",
        url:"https://youtu.be/G3e-cpL7ofc",
      },
    ],

    practice: [
  {
    id:"frontend-mentor",
    title: "Frontend Mentor",
    description: "Build responsive websites from real design files.",
    url: "https://www.frontendmentor.io/",
  },
  {
    id:"cssbattle",
    title: "CSSBattle",
    description: "Improve your CSS skills through visual challenges.",
    url: "https://cssbattle.dev/",
  },
  {
    id:"codepen",
    title: "CodePen",
    description: "Experiment with CSS directly in the browser.",
    url: "https://codepen.io/",
  },
],
    
    projects: [
      {
        title:"Resposive Portfolio",
        difficulty:"Beginner",
      },
      {
        title:"Product Landing Page",
        difficulty:"Intermediate",
      },
      {
        title:"Pricing Page",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Visual Studio Code",
        url:"https://code.visualstudio.com/",
      },
      {
        title:"Live Server",
        url:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",
      },
      {
        title:"Chrome DevTools",
        url:"https://developer.chrome.com/docs/devtools",
      },
    ],

  },
  /*===============================================
                    Javascript
   =============================================*/
  {
    id: "javascript",
    logo: "/logos/javascript.svg",
    title: "JavaScript",
    description: "Learn the programming language that powers interactive and dynamic websites.",
    difficulty: "Beginner",
    duration: "4 Week",
    learningPath: [
      "Introduction to JavaScript",
      "Variables",
      "Data Types",
      "Operators",
      "Conditionals",
      "Loops",
      "Functions",
      "Scope",
      "Arrays",
      "Objects",
      "DOM Manipulation",
      "Events",
      "ES6+ Features",
      "Asynchronous JavaScript",
      "Promises",
      "Async / Await",
      "Fetch API",
      "Modules",
      "Error Handling",
      "Debugging",
    ],
    documentation: [
      {
      id:"mdn-javascript",
      title: "MDN Web Docs",
      url:"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      recommended:true,
      },
      {
      id:"javascript-info",
      title: "JavaScript.info",
      url:"https://javascript.info/",
      recommended:true,
      },
      {
        id:"w3schools-javascript",
        title:"W3Schools JavaScript",
        url:"https://www.w3schools.com/js/",
      },
    ],
    videos:[
      {
        id:"fcc-javascript",
        title:"freeCodeCamp JavaScript Course",
        duration:"4h",
        url:"https://youtu.be/PkZNo7MFNFg",
      },
      {
        id:"supersimpledev-javascript",
        title:"SuperSimpleDev JavaScript Course",
        duration:"22h",
        url:"https://youtu.be/EerdGm-ehJQ",
      },
      {
        id:"bro-code-javascript",
        title:"Bro Code JavaScript Full Course",
        duration:"12h",
        url:"https://youtu.be/lfmg-EJ8gm4",
      },
    ],

    practice: [
  {
    id:"javascript30",
    title: "JavaScript30",
    description: "Build 30 JavaScript projects using only HTML, CSS, and JavaScript.",
    url: "https://javascript30.com/",
  },
  {
    id:"frontend-mentor",
    title: "Frontend Mentor",
    description: "Practice JavaScript with real frontend challenges.",
    url: "https://www.frontendmentor.io/",
  },
  {
    id:"codewars",
    title: "CodeWars",
    description: "Solve JavaScript coding challenges to improve problem-solving skills.",
    url: "https://www.codewars.com/",
  },
],
    
    projects: [
      {
        title:"Calculator",
        difficulty:"Beginner",
      },
      {
        title:"Weather App (API)",
        difficulty:"Intermediate",
      },
      {
        title:"Movie Search App",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Visual Studio Code",
        url:"https://code.visualstudio.com/",
      },
      {
        title:"Chrome DevTools",
        url:"https://developer.chrome.com/docs/devtools/",
      },
      {
        title:"Node.js",
        url:"https://nodejs.org/",
      },
    ],

  },
  /*===============================================
                    Git
   =============================================*/
  {
  id: "git",
  logo: "/logos/git.svg",
  title: "Git",
  description: "Learn version control to track changes and collaborate on software projects.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "What is Git?",
    "Installing Git",
    "Git Configuration",
    "Repositories",
    "Commits",
    "Branches",
    "Merging",
    "Resolving Merge Conflicts",
    "Git Log",
    "Git Ignore",
    "Tags",
    "Best Practices",
  ],

  documentation: [
    {
      id: "git-docs",
      title: "Official Git Documentation",
      url: "https://git-scm.com/doc",
      recommended: true,
    },
    {
      id: "atlassian-git",
      title: "Atlassian Git Tutorials",
      url: "https://www.atlassian.com/git/tutorials",
    },
  ],

  videos: [
    {
      id: "fcc-git",
      title: "Git & GitHub for Beginners",
      duration: "1h",
      url: "https://youtu.be/RGOj5yH7evk",
    },
  ],

  practice: [
    {
      id: "learngitbranching",
      title: "Learn Git Branching",
      description: "Interactive Git exercises.",
      url: "https://learngitbranching.js.org/",
    },
  ],

  projects: [
    {
      title: "Manage a Portfolio Repository",
      difficulty: "Beginner",
    },
    {
      title: "Practice Branching & Merging",
      difficulty: "Intermediate",
    },
    
  ],

  tools: [
    {
      title: "Git",
      url: "https://git-scm.com/",
    },
    {
      title: "Git Bash",
      url: "https://git-scm.com/downloads",
    },
    
  ],
},
 /*===============================================
                    GitHub
   =============================================*/
  {
  id: "github",
  logo: "/logos/github.svg",
  title: "GitHub",
  description: "Host your projects online and collaborate with developers worldwide.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "Creating a GitHub Account",
    "Repositories",
    "Push & Pull",
    "Pull Requests",
    "Issues",
    "Forking",
    "GitHub Pages",
    "README Files",
    "Releases",
    "GitHub Actions Basics",
  ],

  documentation: [
    {
      id: "github-docs",
      title: "GitHub Docs",
      url: "https://docs.github.com/",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "github-course",
      title: "GitHub Crash Course",
      duration: "1h",
      url: "https://youtu.be/Ez8F0nW6S-w",
    },
  ],

  practice: [
    {
      id: "github-skills",
      title: "GitHub Skills",
      description: "Interactive GitHub courses.",
      url: "https://skills.github.com/",
    },
  ],

  projects: [
    {
      title: "Host your Portfolio",
      difficulty: "Beginner",
    },
    {
      title: "Open Source Contribution",
      difficulty: "Intermediate",
    },
    
  ],

  tools: [
    {
      title: "GitHub Desktop",
      url: "https://desktop.github.com/",
    },
  ],
},
 /*===============================================
                    TypeScript
   =============================================*/
  {
  id: "typescript",
  logo: "/logos/typescript.svg",
  title: "TypeScript",
  description: "Write safer and more maintainable JavaScript with static typing.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Why TypeScript?",
    "Installation",
    "Basic Types",
    "Interfaces",
    "Type Aliases",
    "Functions",
    "Objects",
    "Arrays",
    "Enums",
    "Generics",
    "Union Types",
    "Classes",
     "Modules",
    "Type Inference",
    "Type Assertions",
    "Working with React",
  ],

  documentation: [
    {
      id: "typescript-docs",
      title: "TypeScript Documentation",
      url: "https://www.typescriptlang.org/docs/",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "typescript-fcc",
      title: "TypeScript Full Course",
      duration: "5h",
      url: "https://youtu.be/30LWjhZzg50",
    },
    {
      id: "typescript-netninja",
      title: "TypeScript Basics Tutorial",
      duration: "0.12h",
      url: "https://youtu.be/ahCwqrYpIuM",
    },
  ],

  practice: [
    {
      id: "typescript-playground",
      title: "TypeScript Playground",
      description: "Practice TypeScript directly in the browser.",
      url: "https://www.typescriptlang.org/play",
    },
  ],

  projects: [
    {
      title: "Typed Todo App",
      difficulty: "Intermediate",
    },
    {
      title: "Expense Tracker",
      difficulty: "Intermediate",
    },
    {
      title: "Weather Dashboard",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "TypeScript",
      url: "https://www.typescriptlang.org/",
    },
    {
      title: "VS Code",
      url: "https://code.visualstudio.com/",
    },
    
  ],
},
/*===============================================
                    npm
   =============================================*/
  {
  id: "npm",
  logo: "/logos/npm.svg",
  title: "npm",
  description: "Learn how to manage packages, dependencies, and Sripts using npm, the world's largest software registry.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "What is npm?",
    "Installing Packages",
    "Local vs Global Packages",
    "package.json",
    "package-lock.json",
    "Semantic Versioning",
    "Dependencies",
    "npm Scripts",
    "Running Scripts",
    "Updating Packages",
    "Uninstalling Packages",
    "Publishing Packages",
     "npm Best Practices",
  ],

  documentation: [
    {
      id: "npm-docs",
      title: "npm Documentation",
      url: "https://docs.npmjs.com/",
      recommended: true,
    },
    {
      id: "npm-cli",
      title: "npm CLI Commands",
      url: "https://docs.npmjs.com/cli",
      recommended: true,
    },
    {
      id: "node-packages",
      title: "Node.js Package Manager Guide",
      url: "https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager",
     
    },
  ],

  videos: [
    {
      id: "npm-fcc",
      title: "npm Crash Course",
      duration: "45m",
      url: "https://youtu.be/jHDhaSSKmB0",
    },
  ],

  practice: [
    {
      id: "npmjs",
      title: "npm Registry",
      description: "Explore and install open-source packages.",
      url: "https://www.npmjs.com/",
    },
    {
      id: "node-school",
      title: "NodeSchool",
      description: "Practice Node.js and npm interactively.",
      url: "https://nodeschool.io/",
    },
    {
      id: "exercism-js",
      title: "Exercism JavaScript",
      description: "Practice using packages while solving exercises.",
      url: "https://exercism.org/tracks/javascript",
    },
  ],

  projects: [
    {
      title: "Create Your First Node Project",
      difficulty: "Beginner",
    },
    {
      title: "Build a CLI Tool with npm Scripts",
      difficulty: "Intermediate",
    },
    {
      title: "Publish Your First npm Package",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "npm",
      url: "https://www.npmjs.com/",
    },
    {
      title: "Node.js",
      url: "https://nodejs.org/",
    },
    {
      title: "npm Package Explorer",
      url: "https://www.npmjs.com/search",
    },
    
  ],
},
/*===============================================
                    React
   =============================================*/
   {
  id: "react",
  logo: "/logos/react.svg",
  title: "React",
  description: "Build fast, interactive, and scalable user interfaces with world's most popular frontend library.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "What is React?",
    "Setting up React Project",
    "JSX",
    "Components",
    "Props",
    "State",
    "Events",
    "Conditional Rendering",
    "Lists & Keys",
    "Forms",
    "Hooks",
    "useState",
     "useEffect",
    "Context API",
    "React Router",
    "Custom Hooks",
    "Performance Optimization",
    "Best Practices",
  ],

  documentation: [
    {
      id: "react-docs",
      title: "React Documentation",
      url: "https://react.dev/",
      recommended: true,
    },
    {
      id: "react-beta-learn",
      title: "React Learn",
      url: "https://react.dev/learn",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "react-fcc",
      title: "React Course - freeCodeCamp",
      duration: "12h",
      url: "https://youtu.be/bMknfKXIFA8",
    },
    {
      id: "react-supersimpledev",
      title: "React Full Course",
      duration: "5h",
      url: "https://youtu.be/CgkZ7MvWUAA",
    },
  ],

  practice: [
    {
      id: "frontendmentor-react",
      title: "Frontend Mentor",
      description: "Build real React applications from professional designs.",
      url: "https://www.frontendmentor.io/",
    },
    {
      id: "scrimba-react",
      title: "Scrimba React Course",
      description: "Interactive React coding exercises.",
      url: "https://scrimba.com/learn-react-c0e",
    },
  ],

  projects: [
    {
      title: "Movie App",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce Store",
      difficulty: "Advanced",
    },
    {
      title: "Task Management App",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "React Developer Tools",
      url: "https://react.dev/learn/react-developer-tools",
    },
    {
      title: "VS Code",
      url: "https://code.visualstudio.com/",
    },
    {
      title: "Vite",
      url: "https://vitejs.dev/",
    },
    
  ],
},
/*===============================================
                    Next.js
   =============================================*/
   {
  id: "nextjs",
  logo: "/logos/nextjs.svg",
  title: "Next.js",
  description: "Build production-ready React applications with routing, server rendering, and powerful developer tools.",
  difficulty: "Advanced",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Next.js",
    "App Router",
    "Pages & Layouts",
    "Routing",
    "Server Components",
    "Client Components",
    "Data Fetching",
    "Metadata",
    "Images & Fonts",
    "API Routes",
    "Authentication",
    "Deployment with Vercel",
     "Performance Optimization",
  ],

  documentation: [
    {
      id: "next-docs",
      title: "Next.js Documentation",
      url: "https://nextjs.org/docs",
      recommended: true,
    },
    {
      id: "next-learn",
      title: "Learn Next.js",
      url: "https://nextjs.org/learn",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "next-fcc",
      title: "Next.js Full Course",
      duration: "5h",
      url: "https://youtu.be/Zq5fmkH0T78",
    },
    {
      id: "next-netninja",
      title: "Next.js Tutorial",
      duration: "0.1h",
      url: "https://youtu.be/Sklc_fQBmcs",
    },
  ],

  practice: [
    {
      id: "nextjs-dashboard",
      title: "Next.js Learn Dashboard",
      description: "Official interactive Next.js project.",
      url: "https://nextjs.org/learn/dashboard-app",
    },
  ],

  projects: [
    {
      title: "Personal Blog",
      difficulty: "Intermediate",
    },
    {
      title: "Developer portfolio",
      difficulty: "Intermediate",
    },
    {
      title: "Full Stack Dashboard",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Next.js",
      url: "https://nextjs.org/",
    },
    {
      title: "VS Code",
      url: "https://code.visualstudio.com/",
    },
    {
      title: "Vercel",
      url: "https://vercel.com/",
    },
    
  ],
},
/*===============================================
                    Node.js
   =============================================*/
   {
  id: "nodejs",
  logo: "/logos/nodejs.svg",
  title: "Node.js",
  description: "Learn Node.js to build fast, scalable backend applications using JavaScript outside the browser.",
  difficulty: "Beginner",
  duration: "2 Weeks",

  learningPath: [
    "What is Node.js?",
    "Installing Node.js",
    "Node REPL",
    "Running JavaScript with Node",
    "The V8 Engine",
    "Node Architecture",
    "Modules",
    "CommonJS",
    "ES Modules",
    "package.json",
    "The Process Object",
    "Environment Variables",
    "Global Objects",
    "File System (fs)",
    "Path Module",
    "OS Module",
    "Events",
    "EventEmitter",
    "Streams",
    "Buffers",
    "Creating an HTTP Server",
    "Debugging Node.js",
    "Node.js Best Practices",
  ],

  documentation: [
    {
      id: "node-docs",
      title: "Node.js Documentation",
      url: "https://nodejs.org/docs/latest/api/",
      recommended: true,
    },
    {
      id: "node-learn",
      title: "Learn Node.js",
      url: "https://nodejs.org/en/learn",
      recommended: true,
    },
    {
      id: "mdn-node",
      title: "MDN - Express / Node Introduction",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
      
    },
  ],

  videos: [
    {
      id: "fcc-node",
      title: "Node.js Course for Beginners",
      duration: "8h",
      url: "https://youtu.be/Oe421EPjeBE",
    },
    {
      id: "netninja-node",
      title: "Node.js Tutorial",
      duration: "1h",
      url: "https://youtu.be/TlB_eWDSMt4",
    },
    {
      id: "brocode-node",
      title: "Node.js Full Course",
      duration: "2h",
      url: "https://youtu.be/32M1al-Y6Ag",
    },
  ],

  practice: [
    {
      id: "exercism-node",
      title: "Exercism",
      description: "Practice Node.js through coding exercies.",
      url: "https://exercism.org/tracks/javascript",
    },
    {
      id: "codecrafters-node",
      title: "CodeCrafters",
      description: "Build real backend tools using Node.js.",
      url: "https://codecrafters.io/",
    },
    {
      id: "hackerrank-node",
      title: "HackerRank Node.js",
      description: "Solve backend-focused Node.js problems.",
      url: "https://www.hackerrank.com/domains/tutorials/10-days-of-javascript",
    },
  ],

  projects: [
    {
      title: "Simple HTTP Server",
      difficulty: "Beginner",
    },
    {
      title: "File Manager CLI",
      difficulty: "Intermediate",
    },
    {
      title: "REST API Without Express",
      difficulty: "Advanced",
    },
    
  ],

  tools: [
    {
      title: "Node.js",
      url: "https://nodejs.org/",
    },
    {
      title: "nvm (Node Version Manager)",
      url: "https://github.com/nvm-sh/nvm",
    },
    {
      title: "VS Code",
      url: "https://code.visualstudio.com/",
    },
    
  ],
},
/*===============================================
                    Express.js
   =============================================*/
   {
  id: "expressjs",
  logo: "/logos/express.svg",
  title: "Express.js",
  description: "Build fast, scalable web servers and RESTful APIs using Express.js, the most popular Node.js framework.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "What is Express.js?",
    "Installing Express",
    "Creating Your First Server",
    "Routing",
    "Request Object",
    "Response Object",
    "Middleware",
    "Built-in Middleware",
    "Custom Middleware",
    "Serving Static Files",
    "Route Parameters",
    "Query Parameters",
     "Handling Forms & JSON",
    "Express Router",
    "Environment Variables",
    "Error Handling",
    "MVC Project Structure",
    "Building REST APIs",
    "Logging",
    "Security Middleware",
    "Express Best Practices",
  ],

  documentation: [
    {
      id: "express-docs",
      title: "Express.js Documentation",
      url: "https://expressjs.com/",
      recommended: true,
    },
    {
      id: "express-guide",
      title: "Express.js Guide",
      url: "https://expressjs.com/en/guide/routing.html",
      recommended: true,
    },
     {
      id: "mdn-express",
      title: "MDN Express Tutorial",
      url: "https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs",
      
    },
  ],

  videos: [
    {
      id: "express-fcc",
      title: "Express.js Course",
      duration: "1h",
      url: "https://youtu.be/L72fhGm1tfE",
    },
    {
      id: "express-netninja",
      title: "Express.js Tutorial",
      duration: "1h",
      url: "https://youtu.be/b8ZUb_Okxro",
    },
    {
      id: "express-traversy",
      title: "Express Crash Course",
      duration: "40m",
      url: "https://youtu.be/SccSCuHhOw0",
    },
  ],

  practice: [
    {
      id: "express-official",
      title: "Express Examples",
      description: "Official Express.js example applications.",
      url: "https://expressjs.com/en/starter/examples.html",
    },
    {
      id: "postman",
      title: "Postman",
      description: "Test every API endpoint you build.",
      url: "https://www.postman.com/",
    },
    {
      id: "hoppscotch",
      title: "Hoppscotch",
      description: "Lightweight API testing platform.",
      url: "https://hoppscotch.io/",
    },
  ],

  projects: [
    {
      title: "Simple REST API",
      difficulty: "Beginner",
    },
    {
      title: "Blog Backend API",
      difficulty: "Intermediate",
    },
    {
      title: "Authentication API with Express",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Express.js",
      url: "https://expressjs.com/",
    },
    {
      title: "postman",
      url: "https://www.postman.com/",
    },
 
    
  ],
},
/*===============================================
                    SQL
   =============================================*/
   {
  id: "sql",
  logo: "/logos/sql.svg",
  title: "SQL",
  description: "Learn Structured Query Language (SQL) to store, retrieve, update, and manage data inside relational databases.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to Databases",
    "What is SQL?",
    "Relational Databases",
    "Tables",
    "Rows & Columns",
    "Primary Keys",
    "Foreign Keys",
    "Data Types",
    "SELECT",
    "WHERE",
    "ORDER BY",
    "LIMIT",
     "INSERT",
     "UPDATE",
     "DELETE",
     "Aggregate Functions",
     "GROUP BY",
     "HAVING",
     "JOINs",
     "Subqueries",
     "Indexes",
     "Views",
     "Transactions",
     "Normalization",
     "SQL Best Practices",
  ],

  documentation: [
    {
      id: "postgres-sql",
      title: "PostgreSQL SQL Documentation",
      url: "https://www.postgresql.org/docs/current/sql.html",
      recommended: true,
    },
    {
      id: "sqlbolt",
      title: "SQLBolt",
      url: "https://sqlbolt.com/",
      recommended: true,
    },
    {
      id: "w3schools-sql",
      title: "W3Schools SQL",
      url: "https://www.w3schools.com/sql/",
      
    },
  ],

  videos: [
    {
      id: "fcc-sql",
      title: "SQL Full Course",
      duration: "4h",
      url: "https://youtu.be/HXV3zeQKqGY",
    },
    {
      id: "programming-sql",
      title: "SQL Tutorial for Beginners",
      duration: "3h",
      url: "https://youtu.be/7S_tz1z_5bA",
    },
    {
      id: "brocode-sql",
      title: "SQL Full Course",
      duration: "3h",
      url: "https://youtu.be/5OdVJbNCSso",
    },
  ],

  practice: [
    {
      id: "sqlbot-practice",
      title: "SQLBolt",
      description: "Interactive SQL lessons with exercises.",
      url: "https://sqlbolt.com/",
    },
    {
      id: "sqlzoo",
      title: "SQLZoo",
      description: "Practice SQL using real database examples.",
      url: "https://sqlzoo.net/",
    },
    {
      id: "leetcode-sql",
      title: "LeetCode SQL",
      description: "Solve SQL interview problems.",
      url: "https://leetcode.com/problemset/database/",
    },
  ],

  projects: [
    {
      title: "Student Database",
      difficulty: "Beginner",
    },
    {
      title: "Library Managment Database",
      difficulty: "Intermediate",
    },
    {
      title: "Online Store Database",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "DB Fiddle",
      url: "https://www.db-fiddle.com/",
    },
    {
      title: "SQLite Online",
      url: "https://sqliteonline.com/",
    },
    {
      title: "DBeaver",
      url: "https://dbeaver.io/",
    },
    
  ],
},
/*===============================================
                    Prisma ORM
   =============================================*/
   {
  id: "prisma",
  logo: "/logos/prisma.svg",
  title: "Prisma ORM",
  description: "Learn Prisma ORM to interact with databases using a modern, type-safe, and developer-friendly approach.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "What is Prisma?",
    "Installing Prisma",
    "Prisma CLI",
    "Initializing Prisma",
    "schema.prisma",
    "Datasource",
    "Generators",
    "Models",
    "Relations",
    "Migrations",
    "Prisma Client",
    "CRUD Operations",
    "Filtering",
     "Sorting",
     "Pagination",
     "Transactions",
     "Seeding the Database",
     "Working with PostgreSQL",
     "Working with MongoDB",
     "Prisma Studio",
     "Best Practices",
  ],

  documentation: [
    {
      id: "prisma-docs",
      title: "Prisma Documentation",
      url: "https://www.prisma.io/docs",
      recommended: true,
    },
    {
      id: "prisma-learn",
      title: "Prisma Learn",
      url: "https://www.prisma.io/learn",
      recommended: true,
    },
    {
      id: "prisma-reference",
      title: "Prisma Client Reference",
      url: "https://www.prisma.io/docs/orm/reference/prisma-client-reference",
      
    },
  ],

  videos: [
    {
      id: "prisma-fcc",
      title: "Prisma ORM Crash Course",
      duration: "1h",
      url: "https://youtu.be/RebA5J-rlwg",
    },
    {
      id: "prisma-webdev",
      title: "Prisma Tutorial",
      duration: "3m",
      url: "https://youtu.be/rLRIB6AF2Dg?si=mzb3qClIb5N9kHGs",
    },

  ],

  practice: [
    {
      id: "prisma-examples",
      title: "Prisma Examples",
      description: "Official example projects using prisma.",
      url: "https://github.com/prisma/prisma-examples",
    },
    {
      id: "prisma-learn-course",
      title: "Prisma Learn",
      description: "Interactive Prisma tutorials.",
      url: "https://www.prisma.io/learn",
    },
  ],

  projects: [
    {
      title: "Student Management API",
      difficulty: "Beginner",
    },
    {
      title: "Task Management Backend",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce Backend using Prisma",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Prisma",
      url: "https://www.prisma.io/",
    },
    {
      title: "Prisma Studio",
      url: "https://www.prisma.io/studio",
    },
    {
      title: "PostgreSQL",
      url: "https://www.postgresql.org/",
    },
    
  ],
},
/*===============================================
            Authentication & Authorization
   =============================================*/
   {
  id: "authentication",
  logo: "/logos/auth.svg",
  title: "Authentication & Authorization",
  description: "Learn how to securely authenticate users, protect routes, and manage permissions in modern backend applications.",
  difficulty: "Advanced",
  duration: "3 Weeks",

  learningPath: [
    "Authentication & Authorization",
    "Password Hashing",
    "bcrypt",
    "JWT (JSON Web Tokens)",
    "Access Tokens",
    "Refresh Tokens",
    "Cookies",
    "Sessions",
    "HTTP-only Cookies",
    "Protecting Routes",
    "Authentication Middleware",
    "Role-Based Access Control (RBAC)",
     "Permissions",
     "OAuth 2.0",
     "Google Athentication",
     "GitHub Authentication",
     "Email Verification",
     "Password Reset",
     "Account Activation",
     "Logout",
     "Token Expiration",
     "Security Best Practice",
  ],

  documentation: [
    {
      id: "jwt-io",
      title: "JWT.io",
      url: "https://jwt.io/",
      recommended: true,
    },
    {
      id: "passportjs",
      title: "Passport.js Documentation",
      url: "https://www.passportjs.org/docs/",
      recommended: true,
    },
    {
      id: "oauth",
      title: "OAuth 2.0",
      url: "https://oauth.net/2/",
      
    },
  ],

  videos: [
    {
      id: "jwt-course",
      title: "JWT Authentication Crash Course",
      duration: "27m",
      url: "https://youtu.be/mbsmsi7l3r4",
    },
    {
      id: "auth-node",
      title: "Node.js Authentication",
      duration: "1h",
      url: "https://youtu.be/favjC6EKFgw",
    },
    {
      id: "passport-course",
      title: "Passport.js Tutorial",
      duration: "6h 30m",
      url: "https://youtu.be/F-sFp_AvHc8",
    },
  ],

  practice: [
    {
      id: "jwt-playground",
      title: "JWT Debugger",
      description: "Decode and inspect JWT tokens.",
      url: "https://jwt.io/",
    },
    {
      id: "oauth-playground",
      title: "OAuth Playground",
      description: "Experiment with OAuth flows.",
      url: "https://developers.google.com/oauthplayground",
    },
    {
      id: "auth0-lab",
      title: "Auth0 Learning",
      description: "Practice implementing authentication.",
      url: "https://developer.auth0.com/",
    },
  ],

  projects: [
    {
      title: "JWT Login System",
      difficulty: "Beginner",
    },
    {
      title: "Authentication API",
      difficulty: "Intermediate",
    },
    {
      title: "Complete User Management System",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "JWT.io",
      url: "https://jwt.io/",
    },
    {
      title: "Postman",
      url: "https://www.postman.com/",
    },
    {
      title: "Passport.js",
      url: "https://www.passportjs.org/",
    },
    
  ],
},
/*===============================================
                    REST APIs
   =============================================*/
   {
  id: "rest-apis",
  logo: "/logos/rest-api.svg",
  title: "REST APIs",
  description: "Learn how to design, build, and consume RESTful APIs that power modern web and mobile applications.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "What is an API?",
    "REST Architecture",
    "Resources",
    "Endpoints",
    "HTTP Methode",
    "Request Body",
    "Query Parameters",
    "Route Parameters",
    "Headers",
    "Status Codes",
    "Authentication Basics",
    "JSON",
     "CRUD Operations",
     "API Versioning",
     "Pagination",
     "Filtering",
     "Sorting",
     "Rate Limiting",
     "Error Handling",
     "REST AAPI Best Practices",
  ],

  documentation: [
    {
      id: "mdn-fetch",
      title: "MDN Fetch API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API",
      recommended: true,
    },
    {
      id: "restfulapi",
      title: "REST API Tutorial",
      url: "https://restfulapi.net/",
      recommended: true,
    },
    {
      id: "http-mdn",
      title: "MDN HTTP Documentation",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
   
    },
  ],

  videos: [
    {
      id: "api-fcc",
      title: "APIs for Beginners",
      duration: "2h",
      url: "https://youtu.be/GZvSYJDk-us",
    },
    {
      id: "rest-webdesimplified",
      title: "REST APIs Explained",
      duration: "12m",
      url: "https://youtu.be/-MTSQjw5DrM",
    },
    {
      id: "rest-traversy",
      title: "REST API Crash Course",
      duration: "18m",
      url: "https://youtu.be/Q-BpqyOT3a8",
    },
  ],

  practice: [
    {
      id: "jsonplaceholder",
      title: "JSONplaceholder",
      description: "Practice sending requests to a fake REST API.",
      url: "https://jsonplaceholder.typicode.com/",
    },
    {
      id: "dummyjson",
      title: "DummyJSON",
      description: "Mock API with users, products, and posts.",
      url: "https://dummyjson.com/",
    },
    {
      id: "reqres",
      title: "ReqRes",
      description: "Fake REST API for frontend and backend testing.",
      url: "https://reqres.in/",
    },
  ],

  projects: [
    {
      title: "Todo REST API",
      difficulty: "Beginner",
    },
    {
      title: "Student Management API",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce REST API",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "postman",
      url: "https://www.postman.com/",
    },
    {
      title: "Hoppscotch",
      url: "https://hoppscotch.io/",
    },
    {
      title: "Insomnia",
      url: "https://insomnia.rest/",
    },
    
  ],
},
/*===============================================
                WebSockets
   =============================================*/
   {
  id: "websockets",
  logo: "/logos/socketio.svg",
  title: "WebSockets",
  description: "Learn how to build real-time applications using WebSockets and Sockets.IO with Node.js.",
  difficulty: "Advanced",
  duration: "2 Weeks",

  learningPath: [
    "What are WebSockets?",
    "HTTP vs WebSockets",
    "Socket.IO",
    "Client & Server Setup",
    "Events",
    "Emitting Events",
    "Listening for Events",
    "Rooms",
    "Namespaces",
    "Broadcasting",
    "Private Messaging",
    "Real-time Notifications",
     "Live Chat Applications",
     "Presence Detection",
     "Handling Disconnections",
     "Scaling Socket.IO",
     "WebSocket Security",
     "Best Practices",
  ],

  documentation: [
    {
      id: "socketio-docs",
      title: "Socket.IO Documentation",
      url: "https://socket.io/docs/v4/",
      recommended: true,
    },
    {
      id: "mdn-websocket",
      title: "MDN WebSocket API",
      url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
      recommended: true,
    },
    {
      id: "ws-library",
      title: "ws Documentation",
      url: "https://github.com/websockets/ws",
      
    },
  ],

  videos: [
    {
      id: "socketio-fcc",
      title: "Socket.IO Crash Course",
      duration: "27m",
      url: "https://youtu.be/ZKEqqIO7n-k",
    },
    {
      id: "socketio-chat",
      title: "Build a Real-time Chat App",
      duration: "1h",
      url: "https://youtu.be/jD7FnbI76Hg",
    },
    {
      id: "socketio-node",
      title: "Socket.IO with Node.js",
      duration: "9m",
      url: "https://youtu.be/1BfCnjr_Vjg",
    },
  ],

  practice: [
    {
      id: "socketio-examples",
      title: "Socket.IO Examples",
      description: "Official examples demonstrating real-time communication.",
      url: "https://socket.io/get-started/chat",
    },
    {
      id: "github-socket",
      title: "Socket.IO GitHub",
      description: "Explore community examples and source code.",
      url: "https://github.com/socketio/socket.io",
    },
    {
      id: "replit",
      title: "Replit",
      description: "Deploy and test real-time applications online.",
      url: "https://replit.com/",
    },
  ],

  projects: [
    {
      title: "Real-time Chat Application",
      difficulty: "Beginner",
    },
    {
      title: "Live Notification System",
      difficulty: "Intermediate",
    },
    {
      title: "Collaborative Whiteboard",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Socket.IO",
      url: "https://socket.io/",
    },
    {
      title: "Postman WebSockets",
      url: "https://learning.postman.com/docs/sending-requests/websocket/websocket/",
    },
    {
      title: "Node.js",
      url: "https://nodejs.org/",
    },
    
  ],
},
/*===============================================
                    Redis
   =============================================*/
   {
  id: "redis",
  logo: "/logos/redis.svg",
  title: "Redis",
  description: "Learn Redis, the in-memory data store used for cashing, sessions, queues, and highr-performance backend applications.",
  difficulty: "Advanced",
  duration: "1 Weeks",

  learningPath: [
    "What is Redis?",
    "Installing Redis",
    "Redis CLI",
    "Keys",
    "Strings",
    "Lists",
    "Sets",
    "Hashes",
    "Sorted Sets",
    "Expiration (TTL)",
    "Caching",
     "Session Storage",
     "Rate Limiting",
     "Pub/Sub",
     "Connecting Redis with Node.js",
     "Redis Best Practices",
  ],

  documentation: [
    {
      id: "redis-docs",
      title: "Redis Documentation",
      url: "https://redis.io/docs/",
      recommended: true,
    },
    {
      id: "redis-node",
      title: "Node Redis Documentation",
      url: "https://redis.js.org/",
      recommended: true,
    },
    {
      id: "redis-learn",
      title: "Redis Learn",
      url: "https://redis.io/learn/",
      
    },
  ],

  videos: [
    {
      id: "redis-fcc",
      title: "Redis Course for Beginners",
      duration: "40m",
      url: "https://youtu.be/Hbt56gFj998",
    },
    {
      id: "redis-traversy",
      title: "Redis Crash Course",
      duration: "27m",
      url: "https://youtu.be/jgpVdJB2sKQ",
    },
    {
      id: "redis-node-course",
      title: "Redis with Node.js",
      duration: "18m",
      url: "https://youtu.be/oaJq1mQ3dFI?si=SMTsGXeJ1Y5b-Gg3",
    },
  ],

  practice: [
    {
      id: "redis-try",
      title: "Redis Try Free",
      description: "Practice Redis online without installation.",
      url: "https://redis.io/try-free/",
    },
    {
      id: "redis-university",
      title: "Redis University",
      description: "Interactive Redis learning platform.",
      url: "https://university.redis.com/",
    },
    {
      id: "redis-labs",
      title: "Redis Examples",
      description: "Hands-on Redis examples and tutorials.",
      url: "https://redis.io/docs/latest/develop/",
    },
  ],

  projects: [
    {
      title: "API Response Cache",
      difficulty: "Beginner",
    },
    {
      title: "Session Managment System",
      difficulty: "Intermediate",
    },
    {
      title: "Real-time Chat Cache & Pub/Sub",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Redis",
      url: "https://redis.io/",
    },
    {
      title: "Redis Insight",
      url: "https://redis.io/insight/",
    },
    {
      title: "Node Redis",
      url: "https://redis.js.org/",
    },
    
  ],
},
/*===============================================
                  File Uploads
   =============================================*/
   {
  id: "file-uploads",
  logo: "/logos/fileupload.svg",
  title: "File Upload",
  description: "Learn how to upload, validate, store, and manage files securely in backend applications.",
  difficulty: "Intermediate",
  duration: "1 Weeks",

  learningPath: [
    "Introduction to File Uploads",
    "multipart/form-data",
    "Uploading Files with Express",
    "Multer",
    "Storage Engines",
    "Disk Storage",
    "Memory Storage",
    "Uploading Images",
    "Uploading Documents",
    "Multiple File Uploads",
    "File Validation",
    "File Size Limits",
     "Cloudinary",
     "AWS S3 Basics",
     "Serving Static Files",
     "Image Optimization",
     "Secure File Uploads",
     "File Upload Best Practices",
  ],

  documentation: [
    {
      id: "multer-docs",
      title: "Multer Documentation",
      url: "https://github.com/expressjs/multer",
      recommended: true,
    },
    {
      id: "cloudinary-docs",
      title: "Cloudinary Documentation",
      url: "https://cloudinary.com/documentation",
      recommended: true,
    },
    {
      id: "aws-s3-docs",
      title: "Amazon S3 Documentation",
      url: "https://docs.aws.amazon.com/s3/",
      
    },
  ],

  videos: [
    {
      id: "multer-course",
      title: "File Uploads with Multer",
      duration: "17m",
      url: "https://youtu.be/EVOFt8Its6I",
    },
    {
      id: "cloudinary-node",
      title: "Node.js Image Upload with Cloudinary",
      duration: "19m",
      url: "https://youtu.be/7lhUsK-FxYI",
    },
    {
      id: "aw3-s3-upload",
      title: "Uploading Files to AWS S3",
      duration: "40m",
      url: "https://youtu.be/eQAIojcArRY",
    },
  ],

  practice: [
    {
      id: "cloudinary",
      title: "Cloudinary",
      description: "Practice uploading and managing images in the cloud.",
      url: "https://cloudinary.com/",
    },
    {
      id: "aws-free",
      title: "AWS Free Tier",
      description: "Practice storing uploaded files using Amazon S3.",
      url: "https://aws.amazon.com/free/",
    },
    {
      id: "multer-examples",
      title: "Multer Examples",
      description: "Practice building upload endpoints with Multer.",
      url: "https://github.com/expressjs/multer",
    },
  ],

  projects: [
    {
      title: "Profile Picture Upload API",
      difficulty: "Beginner",
    },
    {
      title: "Image Gallery Backend",
      difficulty: "Intermediate",
    },
    {
      title: "Cloud File Storage API",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Multer",
      url: "https://github.com/expressjs/multer",
    },
    {
      title: "Cloudinary",
      url: "https://cloudinary.com/",
    },
    {
      title: "Amazon S3",
      url: "https://aws.amazon.com/s3/",
    },
    
  ],
},
/*===============================================
                  Testing
   =============================================*/
   {
  id: "testing",
  logo: "",
  title: "Testing",
  description: "Learn how to write reliable tests for backend applications using Jest, Supertest, and testing best practices.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to Testing",
    "Why Testing Matters",
    "Unit Testing",
    "Integration Testing",
    "End-to-End Testing",
    "Installing Jest",
    "Writing Your First Test",
    "Matchers",
    "Test Suites",
    "Setup & Teardown",
    "Mock Functions",
    "Mocking Modules",
     "Supertest",
     "Testing Express APIs",
     "Testing Authentication",
     "Testing Databases",
     "Test Coverage",
     "Test-Driven Development (TDD)",
     "Continuous Testing",
     "Testing Best Practices",
  ],

  documentation: [
    {
      id: "jest-docs",
      title: "Jest Documentation",
      url: "https://jestjs.io/docs/getting-started",
      recommended: true,
    },
    {
      id: "supertest",
      title: "Supertest Documentation",
      url: "https://github.com/ladjs/supertest",
      recommended: true,
    },
    {
      id: "testing-library",
      title: "Testing Library",
      url: "https://testing-library.com/",
      
    },
  ],

  videos: [
    {
      id: "jest-course",
      title: "Jest Full Course",
      duration: "1h",
      url: "https://youtu.be/7r4xVDI2vho",
    },
    {
      id: "supertest-course",
      title: "Testing Express APIs with Supertest",
      duration: "12m",
      url: "https://youtu.be/FKnzS_icp20",
    },
    {
      id: "testing-node",
      title: "Node.js Testing Tutorial",
      duration: "40m",
      url: "https://youtu.be/r9HdJ8P6GQI",
    },
  ],

  practice: [
    {
      id: "jest-examples",
      title: "Jest Examples",
      description: "Practice writing unit tests with official examples.",
      url: "https://github.com/jestjs/jest",
    },
    {
      id: "supertest-examples",
      title: "Supertest Examples",
      description: "Build and test Express APIs.",
      url: "https://github.com/ladjs/supertest",
    },
    {
      id: "node-testing",
      title: "Node.js Testing Guide",
      description: "Hands-on backend testing examples.",
      url: "https://nodejs.org/en/learn/test-runner",
    },
  ],

  projects: [
    {
      title: "Unit Test a Utility Library",
      difficulty: "Beginner",
    },
    {
      title: "Test an Express REST API",
      difficulty: "Intermediate",
    },
    {
      title: "Complete Backend Test Suite",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Jest",
      url: "https://jestjs.io/",
    },
    {
      title: "Supertest",
      url: "https://github.com/ladjs/supertest",
    },
    {
      title: "Postman",
      url: "https://www.postman.com/",
    },
    
  ],
},
/*===============================================
                Docker
   =============================================*/
   {
  id: "docker",
  logo: "/logos/docker.svg",
  title: "Docker",
  description: "Learn Docker to package, run, and deploy backend applications consistently across different environments.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "What is Docker?",
    "Containers vs Virtual Machines",
    "Installing Docker",
    "Docker Desktop",
    "Docker CLI",
    "Images",
    "Containers",
    "Docker Hub",
    "Dockerfile",
    "Building Images",
    "Running Containers",
    "Volumes",
     "Networks",
     "Environment Variables",
     "Docker Compose",
     "Dockerizing a Node.js App",
     "Dockerizing PostgreSQL",
     "Dockerizing MongoDB",
     "Multi-stage Builds",
     "Docker Best Practices",
  ],

  documentation: [
    {
      id: "docker-docs",
      title: "Docker Documentation",
      url: "https://docs.docker.com/",
      recommended: true,
    },
    {
      id: "docker-get-started",
      title: "Docker Getting Started",
      url: "https://docs.docker.com/get-started/",
      recommended: true,
    },
    {
      id: "docker-compose",
      title: "Docker Compose",
      url: "https://docs.docker.com/compose/",
      
    },
  ],

  videos: [
    {
      id: "docker-fcc",
      title: "Docker Full Course",
      duration: "2h",
      url: "https://youtu.be/fqMOX6JJhGo",
    },
    {
      id: "docker-traversy",
      title: "Docker Crash Course",
      duration: "3h",
      url: "https://youtu.be/3c-iBn73dDE",
    },
    {
      id: "docker-node",
      title: "Dockerize a Node.js Application",
      duration: "1h",
      url: "https://youtu.be/pg19Z8LL06w",
    },
  ],

  practice: [
    {
      id: "docker-playground",
      title: "Play with Docker",
      description: "Practice Docker online without installing it.",
      url: "https://labs.play-with-docker.com/",
    },
    {
      id: "docker-hub",
      title: "Docker Hub",
      description: "Explore and publish Docker images.",
      url: "https://hub.docker.com/",
    },
    {
      id: "docker-samples",
      title: "Docker Samples",
      description: "Official Docker example projects.",
      url: "https://github.com/docker",
    },
  ],

  projects: [
    {
      title: "Dockerize an Express API",
      difficulty: "Beginner",
    },
    {
      title: "Node.js + PostgreSQl with Docker Compose",
      difficulty: "Intermediate",
    },
    {
      title: "Full MERN Stack with Docker",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Docker",
      url: "https://www.docker.com/",
    },
    {
      title: "Docker Desktop",
      url: "https://www.docker.com/products/docker-desktop/",
    },
    {
      title: "Docker Hub",
      url: "https://hub.docker.com/",
    },
    
  ],
},
/*===============================================
                  CI/CD
   =============================================*/
   {
  id: "ci-cd",
  logo: "/logos/github-actions.svg",
  title: "CI/CD",
  description: "Learn Continuous Integration and Continuous Deployment to automatically build, test, and deploy backend applications.",
  difficulty: "Advanced",
  duration: "1 Weeks",

  learningPath: [
    "What is CI/CD?",
    "Continuous Integration",
    "Continuous Deployment",
    "GitHub Actions",
    "Workflow Files",
    "Jobs",
    "Steps",
    "Runners",
    "Secrets",
    "Environment Variables",
    "Running Tests Automatically",
    "Build Pipelines",
     "Deploy Pipelines",
     "Notifications",
     "Best Practices",
  ],

  documentation: [
    {
      id: "github-actions",
      title: "GitHub Actions Documentation",
      url: "https://docs.github.com/actions",
      recommended: true,
    },
    {
      id: "github-workflows",
      title: "GitHub Workflow Syntax",
      url: "https://docs.github.com/actions/using-workflows/workflow-syntax-for-github-actions",
      recommended: true,
    },
    {
      id: "azure-cicd",
      title: "CI/CD Concepts",
      url: "https://learn.microsoft.com/azure/devops/pipelines/",
      
    },
  ],

  videos: [
    {
      id: "github-actions-course",
      title: "GitHub Actions Full Course",
      duration: "32m",
      url: "https://youtu.be/R8_veQiYBjI",
    },
    {
      id: "cicd-node",
      title: "CI/CD for Node.js",
      duration: "12m",
      url: "https://youtu.be/mFFXuXjVgkU",
    },
  ],

  practice: [
    {
      id: "github-actions-lab",
      title: "GitHub Actions",
      description: "Practice creating CI/CD workflows.",
      url: "https://github.com/features/actions",
    },
    {
      id: "github-skills-actions",
      title: "GitHub Skills",
      description: "Interactive GitHub Actions course.",
      url: "https://skills.github.com/",
    },

  ],

  projects: [
    {
      title: "Automatic Testing Pipeline",
      difficulty: "Intermediate",
    },
    {
      title: "Automatic Docker Build Pipeline",
      difficulty: "Advanced",
    },
    {
      title: "CI/CD for a Production API",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "GitHub Actions",
      url: "https://github.com/features/actions",
    },
    {
      title: "GitHub",
      url: "https://github.com/",
    },
    {
      title: "Docker",
      url: "https://www.docker.com/",
    },
    
  ],
},
/*===============================================
                    Deployment
   =============================================*/
   {
  id: "deployment",
  logo: "",
  title: "Deployment",
  description: "Learn how to deploy backend applications to production, manage servers, configure domains, and keep your APIs running reliably.",
  difficulty: "Advanced",
  duration: "2 Weeks",

  learningPath: [
    "Production vs Development",
    "Preparing for Deployment",
    "Environment Variables",
    "Build Process",
    "Choosing a Hosting Provider",
    "Render",
    "Railway",
    "Fly.io",
    "DigitalOcean",
    "Virtual Private Servers (VPS)",
    "Node.js Process Management",
    "PM2",
     "Reverse Proxy with Nginx",
     "Custom Domains",
     "HTTPS & SSL Certificates",
     "Connecting a Database",
     "Monitoring",
     "Logging",
     "Scaling Applications",
     "Performance Optimization",
     "Production Best Practices",
  ],

  documentation: [
    {
      id: "render-docs",
      title: "Render Documentation",
      url: "https://render.com/docs",
      recommended: true,
    },
    {
      id: "railway-docs",
      title: "Railway Documentation",
      url: "https://docs.railway.app/",
      recommended: true,
    },
    {
      id: "digitalocean-docs",
      title: "DigitalOcean Documentation",
      url: "https://docs.digitalocean.com/",
      
    },
    {
      id: "nginx-docs",
      title: "NGINX Documentation",
      url: "https://nginx.org/en/docs/",
      
    },
  ],

  videos: [
    {
      id: "render-deploy",
      title: "Deploy a Node.js API on Render",
      duration: "20m",
      url: "https://youtu.be/l134cBAJCuc",
    },
    {
      id: "railway-course",
      title: "Deploy Backend with Railway",
      duration: "7m",
      url: "https://youtu.be/JQIKobOcQ9k?si=DmHnI-asNZ7paoKY",
    },
    {
      id: "nginx-course",
      title: "NGINX Crash Course",
      duration: "2m",
      url: "https://youtu.be/JKxlsvZXG7c",
    },
  ],

  practice: [
    {
      id: "railway",
      title: "Railway",
      description: "Deploy Node.js applications with managed databases.",
      url: "https://railway.app/",
    },
    {
      id: "render",
      title: "Render",
      description: "Deploy backend APIs for free.",
      url: "https://render.com/",
    },
    {
      id: "flyio",
      title: "Fly.io",
      description: "Deploy applications globally.",
      url: "https://fly.io/",
    },
  ],

  projects: [
    {
      title: "Deploy an Express REST API",
      difficulty: "Beginner",
    },
    {
      title: "Deploy a Full Authentication Backend",
      difficulty: "Intermediate",
    },
    {
      title: "Production-ready Backend With Docker & CI/CD",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Render",
      url: "https://render.com/",
    },
    {
      title: "Railway",
      url: "https://railway.app/",
    },
    {
      title: "PM2",
      url: "https://pm2.keymetrics.io/",
    },
    {
      title: "NGINX",
      url: "https://nginx.org/",
    },
    
  ],
},
/*==============================================
            System DESIGN Basics
===============================================*/
{
  id: "system-design",
  logo: "",
  title: "System Design Basics",
  description: "Learn the fundamental concepts behind designing scalable, reliable, and distributed software systems.",
  difficulty: "Advanced",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to System Design",
    "Scalability",
    "Latency vs Throughput",
    "Load Balancers",
    "Caching",
    "Content Delivery Networks (CDNs)",
    "Databases (SQL vs NoSQL)",
    "Database Replication & Sharding",
    "Message Queues",
    "Microservices vs Monolith",
    "API Gateway",
    "CAP Theorem",
     "Consistency & Availability",
     "High Availability",
     "Fault Toleracne",
     "System Design Case Studies",
  ],

  documentation: [
    {
      id: "system-design-primer",
      title: "System Design Primer (GitHub)",
      url: "https://github.com/donnemartin/system-design-primer",
      recommended: true,
    },
    {
      id: "bytebytego-101",
      title: "System Design 101",
      url: "https://github.com/ByteByteGoHq/system-design-101",
      recommended: true,
    },
    {
      id: "aws-architecture-center",
      title: "AWS Architecture Center",
      url: "https://aws.amazon.com/architecture/",
      
    },

  ],

  videos: [
    {
      id: "gaurav-sen",
      title: "System Design Basics",
      duration: "1h 30m",
      url: "https://youtube.com/playlist?list=PLMCXHnjXnTnvo6alSjVkgxV-VH6EPyvoX&si=zKz4QnE0sXcCTru9",
    },
    {
      id: "bytebytego",
      title: "ByteByteGo System Design",
      duration: "Playlist",
      url: "https://www.youtube.com/@ByteByteGo",
    },
    {
      id: "fcc-system-design",
      title: "System Design Full Course",
      duration: "1h",
      url: "https://youtu.be/F2FmTdLtb_4?si=TUabDF_Jyd6ctZiy",
    },
  ],

  practice: [
    {
      id: "hellointerview",
      title: "Hello Interview",
      description: "Practice real-world system design interview questions.",
      url: "https://www.hellointerview.com/",
    },
    {
      id: "excalidraw",
      title: "Excalidraw",
      description: "Draw and communicate system architecture diagrams.",
      url: "https://excalidraw.com/",
    },
    {
      id: "drawio",
      title: "Draw.io",
      description: "Create professional architecture and infrastructure diagrams.",
      url: "https://app.diagrams.net/",
    },
  ],

  projects: [
    {
      title: "Design a URL Shortener",
      difficulty: "Beginner",
    },
    {
      title: "Design a Chat App",
      difficulty: "Intermediate",
    },
    {
      title: "Design a Video Streaming Platform",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Excalidraw",
      url: "https://excalidraw.com/",
    },
    {
      title: "Draw.io",
      url: "https://app.diagrams.net/",
    },
    {
      title: "Lucidchart",
      url: "https://www.lucidchart.com/",
    },
    
  ],
},
/*==============================================
     Build&Deploy a full stack project
===============================================*/
{
  id: "fullstack-project",
  logo: "",
  title: "Build & Deploy a Full Stack Project",
  description: "Apply everything you've learned by building, testing, and deploying a production-ready fullstack application.",
  difficulty: "Advanced",
  duration: "3 Weeks",

  learningPath: [
    "Project Planning",
    "Designing the Database",
    "Authentication",
    "Building the Backend API",
    "Building the Frontend",
    "Connecting Frontend & Backend API",
    "State Management",
    "File Uploads",
    "Validation & Error Handling",
    "Testing",
    "Dockerizing the Application",
    "Deployment",
     "Monitoring",
     "Performance Optimization",
     "Project Presentation",
  ],

  documentation: [
    {
      id: "nextjs-docs",
      title: "Next.js Documentation",
      url: "https://nextjs.org/docs",
      recommended: true,
    },
    {
      id: "vercel-docs",
      title: "Vercel Documentation",
      url: "https://vercel.com/docs",
      recommended: true,
    },
    {
      id: "docker-docs",
      title: "Docker Documentation",
      url: "https://docs.docker.com/",
      
    },

  ],

  videos: [
    {
      id: "jsmastery-fullstack",
      title: "Build & Deploy a Full stack App",
      duration: "8h",
      url: "https://www.youtube.com/results?search_query=JavaScript+Mastery+Full+Stack+Project",
    },
    {
      id: "fcc-nextjs",
      title: "Next.js Full Course",
      duration: "2h 40m",
      url: "https://youtu.be/1WmNXEVia8I?si=AUTN2RunMzXb6jFC",
    },
  ],

  practice: [
    {
      id: "frontendmentor",
      title: "Frontend Mentor",
      description: "Build production-quality frontend interfaces.",
      url: "https://www.frontendmentor.io/",
    },
    {
      id: "devchallenges",
      title: "DevChallenges",
      description: "Practice building complete web applications.",
      url: "https://devchallenges.io/",
    },
    {
      id: "github",
      title: "GitHub",
      description: "Host, manage, and showcase your final project.",
      url: "https://github.com/",
    },
  ],

  projects: [
    {
      title: "Task Management Application",
      difficulty: "Beginner",
    },
    {
      title: "E-Commerce Platform",
      difficulty: "Intermediate",
    },
    {
      title: "Learning Management System(LMS)",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
    },
    {
      title: "Postman",
      url: "https://www.postman.com/",
    },
    {
      title: "Docker Desktop",
      url: "https://www.docker.com/products/docker-desktop/",
    },
    {
      title: "Vercel",
      url: "https://vercel.com/",
    },
    {
      title: "github",
      url: "https://github.com/",
    },
    
  ],
},

];