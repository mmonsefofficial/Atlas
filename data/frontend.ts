import { RoadmapTopic } from "@/types/roadmap";

export const frontendRoadmap: RoadmapTopic[] = [
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
                  Responsive Design
   =============================================*/
  {
  id: "responsive-design",
  logo: "",
  title: "Responsive Design",
  description: "Build websites that work perfectly on phones, tables, and desktops.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "Viewport",
    "Fluid Layouts",
    "Media Queries",
    "Responsive Images",
    "Mobile First Design",
    "Breakpoints",
    "Merging",
    "Flexbox Responsiveness",
    "Grid Responsiveness",
  ],

  documentation: [
    {
      id: "mdn-responsive",
      title: "MDN Responsive Design",
      url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "responsive-course",
      title: "Responsive Web Design",
      duration: "4h",
      url: "https://youtu.be/srvUrASNj0s",
    },
  ],

  practice: [
    {
      id: "frontendmentor",
      title: "Frontend Mentor",
      description: "Practice responsive layouts.",
      url: "https://frontendmentor.io",
    },
  ],

  projects: [
    {
      title: "Responsive Landing Page",
      difficulty: "Beginner",
    },
    
  ],

  tools: [
    {
      title: "Chrome DevTools Device Mode",
      url: "https://developer.chrome.com/docs/devtools/device-mode/",
    },
    
  ],
},
 /*===============================================
                    Tailwind CSS
   =============================================*/
   {
  id: "tailwind-css",
  logo: "/logos/tailwind.svg",
  title: "Tailwind CSS",
  description: "Build modern, responsive interfaces quickly using Tailwind CSS utility classes.",
  difficulty: "Intermediate",
  duration: "1 Weeks",

  learningPath: [
    "Installing Tailwind CSS",
    "Utility Classes",
    "Spacing",
    "Typography",
    "Colors",
    "Flexbox",
    "Grid",
    "Responsive Design",
    "Dark Mode",
    "Hover & Focus States",
    "Customization",
    "Configuration File",
    "Plugins",
    "Best Practices",
  ],

  documentation: [
    {
      id: "tailwind-docs",
      title: "Tailwind CSS Documentation",
      url: "https://tailwindcss.com/docs",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "tailwind-fcc",
      title: "Tailwind CSS Full Course",
      duration: "3h",
      url: "https://youtu.be/lCxcTsOHrjo",
    },
    {
      id: "tailwind-fcc",
      title: "Tailwind CSS Tutorial",
      duration: "4h",
      url: "https://youtu.be/ft30zcMlFao",
    },
  ],

  practice: [
    {
      id: "frontendmentor-tailwind",
      title: "Frontend Mentor",
      description: "Build responsive UI challenges using Tailwind CSS.",
      url: "https://www.frontendmentor.io/",
    },
  ],

  projects: [
    {
      title: "Modern Portfolio",
      difficulty: "Intermediate",
    },
    {
      title: "SaaS Landing Page",
      difficulty: "Intermediate",
    },
    {
      title: "Admin Dashboard",
      difficulty: "Advanced",
    },
    
  ],

  tools: [
    {
      title: "Tailwind CSS IntelliSense",
      url: "https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss",
    },
    {
      title: "Tailwind CSS",
      url: "https://tailwindcss.com/",
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
                    Rest APIs
   =============================================*/
  {
  id: "rest-apis",
  logo: "",
  title: "REST APIs",
  description: "Learn how to communicate with servers, fetch data, and build applications powered by real-world APIs.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "What is an API?",
    "HTTP Methods",
    "Status Codes",
    "REST Architecture",
    "JSON",
    "Fetch API",
    "Async / Await",
    "Sending Requests",
    "Receiving Responses",
    "Authentication Basics",
    "API Keys",
    "CRUD Operations",
     "Error Handling",
     "Pagination",
     "Rate Limiting",
     "Working with Public APIs",
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
  ],

  videos: [
    {
      id: "api-fcc",
      title: "APIs for Beginners",
      duration: "2h",
      url: "https://youtu.be/GZvSYJDk-us",
    },
    {
      id: "fetch-api",
      title: "JavaScript Fetch API",
      duration: "0.1h",
      url: "https://youtu.be/cuEtnrL9-H0",
    },
  ],

  practice: [
    {
      id: "jsonplaceholder",
      title: "JSON Placeholder",
      description: "Free fake REST API for testing.",
      url: "https://jsonplaceholder.typicode.com/",
    },
    {
      id: "openweather",
      title: "OpenWeather API",
      description: "Build weather applications.",
      url: "https://openweathermap.org/api",
    },
    {
      id: "dummyjson",
      title: "DummyJSON",
      description: "Mock API for frontend development.",
      url: "https://dummyjson.com/",
    },
  ],

  projects: [
    {
      title: "Weather Application",
      difficulty: "Intermediate",
    },
    {
      title: "Movie Search App",
      difficulty: "Intermediate",
    },
    {
      title: "GitHub User Finder",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Postman",
      url: "https://www.postman.com/",
    },
    {
      title: "Hoppscotch",
      url: "https://hoppscotch.io/",
    },
    {
      title: "JSON Formatter",
      url: "https://jsonformatter.org/",
    },
    
  ],
},
/*===============================================
                    Dployment
   =============================================*/
   {
  id: "deployment",
  logo: "",
  title: "Deployment",
  description: "Learn how to publish your frontend projects so anyone can access them online.",
  difficulty: "Intermediate",
  duration: "1 Weeks",

  learningPath: [
    "What is Deployment?",
    "Production Builds",
    "Environment Variables",
    "Static Hosting",
    "Domain Names",
    "Vercel",
    "Netlify",
    "GitHub Pages",
    "Custom Domains",
    "HTTPS",
    "Performance Optimization",
    "SEO Basics",
     "Monitoring",
  ],

  documentation: [
    {
      id: "vercel-docs",
      title: "Vercel Documentation",
      url: "https://vercel.com/docs",
      recommended: true,
    },
    {
      id: "netlify-docs",
      title: "Netlify Docs",
      url: "https://docs.netlify.com/",
      recommended: true,
    },
    {
      id: "github-pages",
      title: "GitHub Pages",
      url: "https://pages.github.com/",
      recommended: true,
    },
  ],

  videos: [
    {
      id: "vercel-course",
      title: "Deploy your Website with Vercel",
      duration: "0.1h",
      url: "https://youtu.be/Y8ITX0-jcvw?si=EkX1Xp-brompwDzE",
    },
    {
      id: "netlify-course",
      title: "Netlify Crash Course",
      duration: "0.2h",
      url: "https://youtu.be/bjVUqvcCnxM",
    },
  ],

  practice: [
    {
      id: "vercel",
      title: "Vercel",
      description: "Deploy your Next.js applications.",
      url: "https://vercel.com/",
    },
    {
      id: "netlify",
      title: "Netlify",
      description: "Host static frontend websites.",
      url: "https://www.netlify.com/",
    },
    {
      id: "github-pages-hosting",
      title: "GitHub Pages",
      description: "Host static frontend websites for free.",
      url: "https://pages.github.com/",
    },
  ],

  projects: [
    {
      title: "Deploy Your Portfolio",
      difficulty: "Beginner",
    },
    {
      title: "Deploy a React Application",
      difficulty: "Intermediate",
    },
    {
      title: "Deploy a Next.js Project",
      difficulty: "Intermediate",
    },
  ],

  tools: [
    {
      title: "Vercel",
      url: "https://vercel.com/",
    },
    {
      title: "Netlify",
      url: "https://www.netlify.com/",
    },
    {
      title: "GitHub Pages",
      url: "https://pages.github.com/",
    },
    
  ],
},

];