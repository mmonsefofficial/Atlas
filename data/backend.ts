import { RoadmapTopic } from "@/types/roadmap";

export const backendRoadmap: RoadmapTopic[] = [
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
                    HTTP & HTTPS
   =============================================*/
  {
    id: "http-https",
    logo: "/logos/http.svg",
    title: "HTTP & HTTPS",
    description: "Learn how browsers and servers communicate using the HTTP protocol and how HTTPS secures data over the Internet.",
    difficulty: "Beginner",
    duration: "1 Week",
    learningPath: [
      "What is HTTP?",
      "HTTP Request & Response",
      "URL Structure",
      "HTTP Methods (GET, POST, PUT, PATCH, DELETE)",
      "Status Codes",
      "Headers",
      "Query Parameters",
      "Request Body",
      "Cookies",
      "Sessions",
      "HTTPS",
      "SSL/TLS",
      "Caching",
      "Content Types (JSON, HTML, XML)",
      "REST Fundamentals"
    ],
    documentation: [
      {
      id:"mdn-http",
      title: "MDN HTTP",
      url:"https://developer.mozilla.org/en-US/docs/Web/HTTP",
      recommended:true,
      },
      {
        id:"http-mdn-messages",
        title:"MDN HTTP Messages",
        url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Messages",
      },
      {
        id:"cloudflare-https",
        title:"Cloudflare Learning Center",
        url:"https://www.cloudflare.com/learning/ssl/what-is-https/",
      },
    ],
    videos:[
      {
        id:"http-fcc",
        title:"HTTP Crash Course",
        duration:"40m",
        url:"https://youtu.be/iYM2zFP3Zn0",
      },
      {
        id:"http-traversy",
        title:"HTTP Crash Course & Exploration",
        duration:"5h",
        url:"https://youtu.be/2JYT5f2isg4?si=gsZicUTpa3ZRrJ4k",
      },
      {
        id:"http-networkchuck",
        title:"HTTP vs HTTPS Explained",
        duration:"7m",
        url:"https://youtu.be/hExRDVZHhig",
      },
    ],

    practice: [
  {
    id:"httpbin",
    title: "HTTPBin",
    description: "Test HTTP requests and responses.",
    url: "https://httpbin.org/",
  },
  {
    id:"postman-echo",
    title: "Postman Echo",
    description: "Practice making HTTP requests.",
    url: "https://postman-echo.com/",
  },
  {
    id:"reqres",
    title: "ReqRes",
    description: "Fake REST API for testing HTTP requests.",
    url: "https://reqres.in/",
  },
],
    
    projects: [
      {
        title:"Build an HTTP Request Tester",
        difficulty:"Beginner",
      },
      {
        title:"REST API Client",
        difficulty:"Intermediate",
      },
      {
        title:"Mini Postman Clone",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Postman",
        url:"https://www.postman.com/",
      },
      {
        title:"Hoppscotch",
        url:"https://hoppscotch.io/",
      },
      {
        title:"Bruno",
        url:"https://www.usebruno.com/",
      },
    ],

  },
  /*===============================================
                    Operating Systems
   =============================================*/
  {
    id: "operating-systems",
    logo: "/logos/os.svg",
    title: "Operating Systems",
    description: "Understand how operating systems manage processes, memory, files, and resources to run backend applications efficiently.",
    difficulty: "Beginner",
    duration: "1 Week",
    learningPath: [
      "What's an Operating System?",
      "Kernel vs User Space",
      "Processes",
      "Threads",
      "Memory Management",
      "File Systems",
      "Permissions",
      "Environment Variables",
      "Input / Output",
      "System Calls",
      "Process Scheduling",
      "Networking Basics",
    ],
    documentation: [
      {
      id:"mdn-os",
      title: "MDN - Client vs Server",
      url:"https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Server-side/First_steps/Client-Server_overview",
      recommended:true,
      },
      {
      id:"linuxjourney",
      title: "Linux Journey",
      url:"https://linuxjourney.com/",
      recommended:true,
      },
      {
        id:"redhat-linux",
        title:"Red Hat Linux Resources",
        url:"https://www.redhat.com/en/topics/linux",
      },
    ],
    videos:[
      {
        id:"fcc-os",
        title:"Operating Systems Full Course",
        duration:"14m",
        url:"https://youtu.be/26QPDBe-NB8",
      },
      {
        id:"gatesmashers-os",
        title:"Operating System Crash Course",
        duration:"3h",
        url:"https://youtu.be/ROjZy1WbCIA",
      },
      {
        id:"fireship-linux",
        title:"Linux in 100 Seconds",
        duration:"2m",
        url:"https://youtu.be/rrB13utjYV4",
      },
    ],

    practice: [
  {
    id:"linuxjourney-practice",
    title: "Linux Journey",
    description: "Learn Linux fundamentals interactively.",
    url: "https://linuxjourney.com",
  },
  {
    id:"overthewire",
    title: "OverTheWire",
    description: "Practice Linux commands through security-based challenges.",
    url: "https://overthewire.org/wargames/",
  },
  {
    id:"katacoda",
    title: "Killercoda",
    description: "Interactive Linux terminal enviroments.",
    url: "https://killercoda.com/",
  },
],
    
    projects: [
      {
        title:"Explore Linux File System",
        difficulty:"Beginner",
      },
      {
        title:"Build a Bash Automation Script",
        difficulty:"Intermediate",
      },
      {
        title:"Create a process Monitoring Tool",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Ubuntu",
        url:"https://ubuntu.com/",
      },
      {
        title:"Windows Terminal",
        url:"https://learn.microsoft.com/windows/terminal/",
      },
      {
        title:"WSL (Windows Subsystem for Linux)",
        url:"https://learn.microsoft.com/windows/wsl/",
      },
    ],

  },
  /*===============================================
                    Terminal
   =============================================*/
  {
  id: "terminal",
  logo: "/logos/terminal.svg",
  title: "Terminal (CLI)",
  description: "Master the command line to navigate your system, manage files, automate tasks, and work efficiently as a backend developer.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "What is the Terminal?",
    "Bash vs PowerShell",
    "Navigating Directories",
    "Working with Files",
    "Creating & Removing Files",
    "Copying & Moving Files",
    "Viewing File Contents",
    "Searching Files",
    "Permissions",
    "Environment Variables",
    "Pipes & Redirection",
    "Package Managers",
    "Shell Aliases",
    "Basic Shell Scripting",
  ],

  documentation: [
    {
      id: "microsoft-terminal",
      title: "Microsoft Terminal Documentation",
      url: "https://learn.microsoft.com/windows/terminal/",
      recommended: true,
    },
    {
      id: "gnu-bash",
      title: "GNU Bash Manual",
      url: "https://www.gnu.org/software/bash/manual/bash.html",
    },
    {
      id: "linuxjourney-cli",
      title: "Linux Journey - Command Line",
      url: "https://linuxjourney.com/",
    },
  ],

  videos: [
    {
      id: "fcc-linux-cli",
      title: "Linux Command Line Full Course",
      duration: "5h",
      url: "https://youtu.be/ZtqBQ68cfJc",
    },
    {
      id: "networkchuck-terminal",
      title: "Linux Terminal Commands for Beginners",
      duration: "6h",
      url: "https://youtu.be/sWbUDq4S6Y8",
    },
    {
      id: "fireship-cli",
      title: "Command line Crash Course",
      duration: "45m",
      url: "https://youtu.be/uwAqEzhyjtw",
    },
  ],

  practice: [
    {
      id: "linuxjourney",
      title: "Linux Journey",
      description: "Practice Linux commands interactively.",
      url: "https://linuxjourney.com/",
    },
    {
      id: "overthewire-bandit",
      title: "OverTheWire - Bandit",
      description: "Practice Linux terminal skills through challenges.",
      url: "https://overthewire.org/wargames/bandit/",
    },
    {
      id: "cmdchallenge",
      title: "Command Challenge",
      description: "Interactive command line exercises.",
      url: "https://cmdchallenge.com/",
    },
  ],

  projects: [
    {
      title: "Organize Files With Terminal Commands",
      difficulty: "Beginner",
    },
    {
      title: "Build a Backup Script",
      difficulty: "Intermediate",
    },
    {
      title: "Create a Simple Bash Automation Tool",
      difficulty: "Advanced",
    },
    
  ],

  tools: [
    {
      title: "Windows Terminal",
      url: "https://learn.microsoft.com/windows/terminal/",
    },
    {
      title: "Git Bash",
      url: "https://git-scm.com/downloads",
    },
    {
      title: "Oh My Posh",
      url: "https://ohmyposh.dev/",
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
  description: "Learn Git to track changes, manage versions, and collaborate efficiently on backend projects.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "What is Version Control?",
    "Installing Git",
    "Git Configuration",
    "Repositories",
    "Working Directory",
    "Staging Area",
    "Commits",
    "Viewing History",
    "Branches",
    "Merging",
    "Resolving Merge Conflicts",
    "Tags",
    "Git Ignore",
    "Git Best Practices",
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
      recommended: true,
    },
    {
      id: "progit",
      title: "Pro Git Book",
      url: "https://git-scm.com/book/en/v2",
      
    },
  ],

  videos: [
    {
      id: "fcc-git",
      title: "Git & GitHub for Beginners",
      duration: "1h",
      url: "https://youtu.be/RGOj5yH7evk",
    },
    {
      id: "git-traversy",
      title: "Git Crash Course",
      duration: "32m",
      url: "https://youtu.be/SWYqp7iY_Tc",
    },
    {
      id: "git-programming",
      title: "Git Tutorial for Beginners",
      duration: "1h",
      url: "https://youtu.be/8JJ101D3knE",
    },
  ],

  practice: [
    {
      id: "learngitbranching",
      title: "Learn Git Branching",
      description: "Interactive Git exercise with visual branching.",
      url: "https://learngitbranching.js.org/",
    },
    {
      id: "ohmygit",
      title: "Oh My Git!",
      description: "A game to learn Git interactively.",
      url: "https://ohmygit.org/",
    },
    {
      id: "gitexercises",
      title: "Git Exercises",
      description: "Practical real Git Commands.",
      url: "https://gitexercises.fracz.com/",
    },
  ],

  projects: [
    {
      title: "Version Control a Node.js project",
      difficulty: "Beginner",
    },
    {
      title: "Practice Branching & Merge Conflicts",
      difficulty: "Intermediate",
    },
    {
      title: "Collaborate on a Backend API with Git",
      difficulty: "Advanced",
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
    {
      title: "GitKraken",
      url: "https://www.gitkraken.com/",
    },
  ],
},
 /*===============================================
                  GitHiub
   =============================================*/
  {
  id: "github",
  logo: "/logos/github.svg",
  title: "GitHub",
  description: "Learn how to host repositories, collaborate with other developers, and contribute to open-source projects using GitHub.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "Creating a GitHub Account",
    "Repositories",
    "Cloning Repositories",
    "Push & Pull",
    "Forking Repositories",
    "Pull Requests",
    "Issues",
    "README Files",
    "GitHub Pages",
    "Releases",
    "GitHub Actions Basics",
    "Open Source Contributions",
    "Repository Security",
    "GitHub Pages Practices",
  ],

  documentation: [
    {
      id: "github-docs",
      title: "GitHub Documentation",
      url: "https://docs.github.com/",
      recommended: true,
    },
    {
      id: "github-skills-docs",
      title: "GitHub Skills",
      url: "https://skills.github.com/",
      recommended: true,
    },
    {
      id: "github-actions-docs",
      title: "GitHub Actions Documentation",
      url: "https://docs.github.com/actions",
      
    },
  ],

  videos: [
    {
      id: "github-fcc",
      title: "GitHub Crash Course",
      duration: "1h",
      url: "https://youtu.be/Ez8F0nW6S-w",
    },
    {
      id: "github-traversy",
      title: "GitHub Tutorial for Beginners",
      duration: "20m",
      url: "https://youtu.be/0fKg7e37bQE",
    },
    {
      id: "github-actions",
      title: "GitHub Actions",
      duration: "12m",
      url: "https://youtu.be/eB0nUzAI7M8",
    },
  ],

  practice: [
    {
      id: "github-skills",
      title: "GitHub Skills",
      description: "Interactive course to learn GitHub.",
      url: "https://skills.github.com/",
    },
    {
      id: "good-first-issues",
      title: "Good First Issues",
      description: "Find beginner-friendly open-source issues.",
      url: "https://goodfirstissues.com/",
    },
    {
      id: "first-contributions",
      title: "First Contributions",
      description: "Make your frist open-source contribution.",
      url: "https://firstcontributions.github.io/",
    },
  ],

  projects: [
    {
      title: "Host a Backend API Repository",
      difficulty: "Beginner",
    },
    {
      title: "Collaborate with a Team Using Pull Requests",
      difficulty: "Intermediate",
    },
    {
      title: "Contribute to an Open Source Backend Project",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "GitHub Desktop",
      url: "https://desktop.github.com/",
    },
    {
      title: "GitHub CLI",
      url: "https://cli.github.com/",
    },
    {
      title: "GitHub",
      url: "https://github.com/",
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
                    Postman
   =============================================*/
  {
  id: "postman",
  logo: "/logos/postman.svg",
  title: "Postman",
  description: "Learn how to test, debug, and document APIs efficiently using Postman, the industry's most popular API platform.",
  difficulty: "Beginner",
  duration: "1 Weeks",

  learningPath: [
    "What is Postman?",
    "Installing Postman",
    "Workspaces",
    "Collections",
    "Creating Requests",
    "HTTP Methods",
    "Headers",
    "Query Parameters",
    "Request Body",
    "Authorization",
    "Environment Variables",
    "Collection Variables",
     "Pre-request Scripts",
     "Tests",
     "Importing APIs",
     "Exporting Collections",
     "API Documentation",
     "Mock Servers",
     "Best Practices",
  ],

  documentation: [
    {
      id: "postman-docs",
      title: "Postman Documentation",
      url: "https://learning.postman.com/",
      recommended: true,
    },
    {
      id: "postman-api",
      title: "Postman API Platform",
      url: "https://www.postman.com/api-platform/",
      recommended: true,
    },
    {
      id: "postman-collections",
      title: "Working with Collections",
      url: "https://learning.postman.com/docs/collections/collections-overview/",
      
    },
  ],

  videos: [
    {
      id: "postman-fcc",
      title: "Postman Beginner Course",
      duration: "2h",
      url: "https://youtu.be/VywxIQ2ZXw4",
    },
    {
      id: "postman-netninja",
      title: "Postman Crash Course",
      duration: "0.1h",
      url: "https://youtu.be/CLG0ha_a0q8",
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
      id: "reqres",
      title: "Reqres",
      description: "Send CRUD requests to a fake REST API.",
      url: "https://reqres.in/",
    },
    {
      id: "dummyjson",
      title: "DummyJSON",
      description: "Test authentication and CRUD endpoints.",
      url: "https://dummyjson.com/",
    },
  ],

  projects: [
    {
      title: "Test a Todo API",
      difficulty: "Beginner",
    },
    {
      title: "Build a Complete API Collection",
      difficulty: "Intermediate",
    },
    {
      title: "Document an Express REST API",
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
      title: "Insomnia",
      url: "https://insomnia.rest/",
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
                    PostgreSQL
   =============================================*/
   {
  id: "postgresql",
  logo: "/logos/postgresql.svg",
  title: "PostgreSQL",
  description: "Learn postgreSQL, one of the world's most powerful open-source relational databases used in modern backend development.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "What is PostgreSQL?",
    "Installing PostgreSQL",
    "pgAdmin",
    "Creating Databases",
    "Creating Tables",
    "Data Types",
    "Constraints",
    "Primary Keys",
    "Foregin Keys",
    "Relationships",
    "CRUD Operations",
    "Indexes",
     "Views",
     "Functions",
     "Triggers",
     "Transactions",
     "Backups & Restore",
     "Connecting PostgreSQL with Node.js",
     "Using PostgreSQL with Express",
     "PostgreSQL Best Practices",
  ],

  documentation: [
    {
      id: "postgres-docs",
      title: "PostgreSQL Documentation",
      url: "https://www.postgresql.org/docs/",
      recommended: true,
    },
    {
      id: "postgres-tutorial",
      title: "PostgreSQL Tutorial",
      url: "https://www.postgresqltutorial.com/",
      recommended: true,
    },
    {
      id: "node-postgres",
      title: "node-postgres Documentation",
      url: "https://node-postgres.com/",
      
    },
  ],

  videos: [
    {
      id: "postgres-fcc",
      title: "PostgreSQL Full Course",
      duration: "3h",
      url: "https://youtu.be/SpfIwlAYaKk",
    },
    {
      id: "postgres-netninja",
      title: "PostgreSQL Tutorial",
      duration: "4h",
      url: "https://youtu.be/qw--VYLpxG4",
    },
    {
      id: "postgres-programming",
      title: "PostgreSQL Crash Course",
      duration: "1h 30m",
      url: "https://youtu.be/eMIxuk0nOkU",
    },
  ],

  practice: [
    {
      id: "pgexercises",
      title: "PG Exercises",
      description: "Interactive PostgreSQL practice problems.",
      url: "https://pgexercises.com/",
    },
    {
      id: "sqlbolt",
      title: "SQLBolt",
      description: "Practice SQL concepts used in PostgreSQL.",
      url: "https://sqlbolt.com/",
    },
    {
      id: "leetcode-db",
      title: "LeetCode Database",
      description: "Practice SQL interview questions.",
      url: "https://leetcode.com/problemset/database/",
    },
  ],

  projects: [
    {
      title: "Student Management Database",
      difficulty: "Beginner",
    },
    {
      title: "Inventory Managment System",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce Backend with PostgreSQL",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "PostgreSQL",
      url: "https://www.postgresql.org/",
    },
    {
      title: "pgAdmin",
      url: "https://www.pgadmin.org/",
    },
    {
      title: "DBeaver",
      url: "https://dbeaver.io/",
    },
    
  ],
},
/*===============================================
                    MongoDB
   =============================================*/
   {
  id: "mongodb",
  logo: "/logos/mongodb.svg",
  title: "MongoDB",
  description: "Learn MongoDB, the most popular NoSQL database for modern JavaScript and Node.js applications.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to NoSQL",
    "What is MongoDB?",
    "Installing MongoDB",
    "MongoDB Atlas",
    "Compass",
    "Databases",
    "Collections",
    "Documents",
    "BSON",
    "CRUD Operations",
    "Filtering Documents",
    "Sorting",
     "Projection",
     "Indexes",
     "Aggregation Pipeline",
     "Schema Design",
     "Relationships",
     "Embedding vs Referencing",
     "Connecting MongoDB with Node.js",
     "MongoDB Best Practices",
  ],

  documentation: [
    {
      id: "mongodb-docs",
      title: "MongoDB Documentation",
      url: "https://www.mongodb.com/docs/",
      recommended: true,
    },
    {
      id: "mongodb-university",
      title: "MongoDB University",
      url: "https://learn.mongodb.com/",
      recommended: true,
    },
    {
      id: "mongodb-node-driver",
      title: "MongoDB Node.js Driver",
      url: "https://www.mongodb.com/docs/drivers/node/",
      
    },
  ],

  videos: [
    {
      id: "fcc-mongodb",
      title: "MongoDB Full Course",
      duration: "1h",
      url: "https://youtu.be/c2M-rlkkT5o",
    },
    {
      id: "netninja-mongodb",
      title: "MongoDB Tutorial",
      duration: "10m",
      url: "https://youtu.be/hmGz79ae2AY?si=CmVSOOl7u8N8_JLk",
    },
    {
      id: "brocode-mongodb",
      title: "MongoDB Crash Course",
      duration: "36m",
      url: "https://youtu.be/-56x56UppqQ",
    },
  ],

  practice: [
    {
      id: "mongodb-playground",
      title: "MongoDB Playground",
      description: "Experiment with MongoDB queries directly.",
      url: "https://www.mongodb.com/products/tools/compass",
    },
    {
      id: "mongodb-atlas",
      title: "MongoDB Atlas",
      description: "Practice using a cloud-hosted MongoDB database.",
      url: "https://www.mongodb.com/atlas",
    },
    {
      id: "exercism",
      title: "Exercism JavaScript",
      description: "Build projects that integrate MongoDB.",
      url: "https://exercism.org/tracks/javascript",
    },
  ],

  projects: [
    {
      title: "Notes API",
      difficulty: "Beginner",
    },
    {
      title: "Blog Backend with MongoDB",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce Database",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "MongoDB",
      url: "https://www.mongodb.com/",
    },
    {
      title: "MongoDB Compass",
      url: "https://www.mongodb.com/products/compass",
    },
    {
      title: "MongoDB Atlas",
      url: "https://www.mongodb.com/atlas",
    },
    
  ],
},
/*===============================================
                    Mongoose
   =============================================*/
   {
  id: "mongoose",
  logo: "/logos/mongoose.svg",
  title: "Mongoose",
  description: "Learn Mongoose, the most popular Object Data Modeling(ODM) library for MongoDB and Node.js.",
  difficulty: "Intermediate",
  duration: "1 Weeks",

  learningPath: [
    "What is Mongoose?",
    "Installing Mongoose",
    "Connecting to MongoDB",
    "Schemas",
    "Models",
    "Documents",
    "CRUD Operations",
    "Schema Types",
    "Validation",
    "Default Values",
    "Virtuals",
     "Middleware (Hooks)",
     "Population",
     "Indexes",
     "Timestamps",
     "Transactions",
     "Error Handling",
     "Best Practices",
  ],

  documentation: [
    {
      id: "mongoose-docs",
      title: "Mongoose Documentation",
      url: "https://mongoosejs.com/docs/",
      recommended: true,
    },
    {
      id: "mogoose-guides",
      title: "Mongoose Guides",
      url: "https://mongoosejs.com/docs/guides.html",
      recommended: true,
    },
    {
      id: "mongodb-driver",
      title: "MongoDB Node Driver",
      url: "https://www.mongodb.com/docs/drivers/node/",
      
    },
  ],

  videos: [
    {
      id: "mongoose-fcc",
      title: "Mongoose Crash Course",
      duration: "30m",
      url: "https://youtu.be/DZBGEVgL2eE",
    },
    {
      id: "mongoose-netninja",
      title: "Mongoose Tutorial",
      duration: "30m",
      url: "https://youtu.be/2QQGWYe7IDU",
    },
    {
      id: "mongoose-traversy",
      title: "Mongoose Basics",
      duration: "7m",
      url: "https://youtu.be/98BzS5Oz5E4",
    },
  ],

  practice: [
    {
      id: "mongoose-project",
      title: "MongoDB Atlas",
      description: "Practice connecting Mongoose with a cloud database.",
      url: "https://www.mongodb.com/atlas",
    },
    {
      id: "mongoose-docs-examples",
      title: "Official Examples",
      description: "Build small apps following the official docs.",
      url: "https://mongoosejs.com/docs/examples.html",
    },

  ],

  projects: [
    {
      title: "Note API using Mongoose",
      difficulty: "Beginner",
    },
    {
      title: "Blog Backend",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce Database Models",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Mongoose",
      url: "https://mongoosejs.com/",
    },
    {
      title: "MongoDB Compass",
      url: "https://www.mongodb.com/products/compass",
    },
    {
      title: "MongoDB Atlas",
      url: "https://www.mongodb.com/atlas",
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
                  Backend Secuity
   =============================================*/
   {
  id: "backend-security",
  logo: "/logos/security.svg",
  title: "Backend Security",
  description: "Learn how to secure backend applications against common vulnerabilities and follow industry best practices.",
  difficulty: "Advanced",
  duration: "2 Weeks",

  learningPath: [
    "Security Fundamentals",
    "HTTPS & SSL/TLS",
    "Environment Variables",
    "Helmet.js",
    "CORS",
    "Input Validation",
    "Data Sanitization",
    "Password policies",
    "Rate Limiting",
    "API Keys",
    "Cross-Site Scripting (XSS)",
    "Cross-Site Request Forgery (CSRF)",
     "SQL Injection",
     "NoSQL Injection",
     "Brute Force Protection",
     "Secure Cookies",
     "HTTP Security Headers",
     "Logging & Monitoring",
     "OWASP Top 10",
     "Backend Security Best Practices",
  ],

  documentation: [
    {
      id: "owasp",
      title: "OWASP Top 10",
      url: "https://owasp.org/www-project-top-ten/",
      recommended: true,
    },
    {
      id: "helmet-docs",
      title: "Helmet.js Documentation",
      url: "https://helmetjs.github.io/",
      recommended: true,
    },
    {
      id: "express-security",
      title: "Express Security Best Practices",
      url: "https://expressjs.com/en/advanced/best-practice-security.html",
      
    },
  ],

  videos: [
    {
      id: "security-fcc",
      title: "Web Security Fundamentals",
      duration: "7m",
      url: "https://youtu.be/inWWhr5tnEA",
    },
    {
      id: "helmet-course",
      title: "Secure Express Apps",
      duration: "1h 30m",
      url: "https://youtu.be/6FOq4cUdH8k",
    },
    {
      id: "owasp-course",
      title: "OWASP Top 10 Explained",
      duration: "15h",
      url: "https://youtu.be/3Kq1MIfTWCE",
    },
  ],

  practice: [
    {
      id: "owasp-webgoat",
      title: "OWASP WebGoat",
      description: "Practice identifying and fixing web security vulnerabilities.",
      url: "https://owasp.org/www-project-webgoat/",
    },
    {
      id: "juice-shop",
      title: "OWASP Juice Shop",
      description: "Deliberately vulnerable web application for security practice.",
      url: "https://owasp.org/www-project-juice-shop/",
    },
    {
      id: "portswigger",
      title: "PortSwigger Web Security Academy",
      description: "Hands-on labs covering real-world web vulnerabilities.",
      url: "https://portswigger.net/web-security",
    },
  ],

  projects: [
    {
      title: "Secure Express API",
      difficulty: "Intermediate",
    },
    {
      title: "JWT Authentication with Security Layers",
      difficulty: "Advanced",
    },
    {
      title: "Production-ready Secure Backend",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Helmet.js",
      url: "https://helmetjs.github.io/",
    },
    {
      title: "Express Rate Limit",
      url: "https://www.npmjs.com/package/express-rate-limit",
    },
    {
      title: "OWASP ZAP",
      url: "https://www.zaproxy.org/",
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

];