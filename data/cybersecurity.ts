import { RoadmapTopic } from "@/types/roadmap";

export const cybersecurityRoadmap: RoadmapTopic[] = [
  /*===============================================
                    Internet
   =============================================*/
  {
    id: "internet",
    logo: "/logos/internet.svg",
    title: "Internet",
    description: "Understand how the internet works, how devices communicate, and how data travels across networks.",
    difficulty: "Beginner",
    duration: "1 Week",
    learningPath: [
      "What is the Internet?",
      "Clients and Servers",
      "IP Addresses",
      "Ports",
      "DNS",
      "HTTP vs HTTPS",
      "Routers",
      "Switches",
      "Packets",
      "Latency",
      "Bandwidth",
      "Internet Service Providers (ISPs)",
    ],
    documentation: [
      {
      id:"mdn-http",
      title: "MDN Web Docs - Overview of HTTP",
      url:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview",
      recommended:true,
      },
      {
        id:"cloudflare-learning",
        title:"Cloudflare Learning Center",
        url:"https://www.cloudflare.com/learning/",
      },
      {
        id:"rfc9110",
        title:"HTTP Semantics (RFC 9110)",
        url:"https://www.rfc-editor.org/rfc/rfc9110",
      },
    ],
    videos:[
      {
        id:"fcc-internet",
        title:"How the Internet Works?",
        duration:"1h 42m",
        url:"https://www.youtube.com/watch?v=zN8YNNHcaZc",
      },
      {
        id:"khan-internet",
        title:"How the Internet Works - Khan Academy",
        duration:"30m",
        url:"https://www.khanacademy.org/computing/code-org/computers-and-the-internet/internet-works",
      },
    ],

    practice: [
  {
    id:"cloudflare-learning-practice",
    title: "Cloudflare Learning Center",
    description: "Read beginner-friendly networking and Internet concepts.",
    url: "https://www.cloudflare.com/learning/",
  },
  {
    id:"khanacademy",
    title: "Khan Academy",
    description: "Interactive lessons explaining Internet fundamentals.",
    url: "https://www.khanacademy.org/computing/code-org/computers-and-the-internet/internet-works",
  },
  {
    id:"internetfundamentals",
    title: "Internet Fundamentals",
    description: "Free beginner course explaining how the web and Internet work.",
    url: "https://internetfundamentals.com/",
  },
],
    
    projects: [
      {
        title:"Draw how data travels from your browser to Google",
        difficulty:"Beginner",
      },
      {
        title:"Explain the lifecycle of opening a website",
        difficulty:"Intermediate",
      },
      {
        title:"Create a presentation explaining DNS, HTTP, and routing",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Wireshark",
        url:"https://www.wireshark.org/",
      },
      {
        title:"Chrome DevTools (Network Tab)",
        url:"https://developer.chrome.com/docs/devtools/network/",
      },
      {
        title:"PingPlotter",
        url:"https://www.pingplotter.com/",
      },
    ],

  },
  /*===============================================
                    Networking
   =============================================*/
  {
    id: "networking",
    logo: "/logos/networking.svg",
    title: "Networking Fundamentals",
    description: "Learn the foundations of computer networking, including network devices, topologies, protocols, and communication between systems.",
    difficulty: "Beginner",
    duration: "2 Weeks",
    learningPath: [
      "What is a Computer Network?",
      "Types of Networks (LAN, WAN, MAN, PAN)",
      "Network Topologies",
      "Network Devices",
      "MAC Address",
      "IP Address",
      "Ports",
      "TCP vs UDP",
      "Network Protocols",
      "Subnetting Basics",
      "Packet Switching",
      "Client-Server vs Peer-to-Peer",
   
    ],
    documentation: [
      {
      id:"cisco-networking-basics",
      title: "Cisco Skills for All - Networking Basics",
      url:"https://skillsforall.com/course/networking-basics",
      recommended:true,
      },
      {
        id:"cloudflare-networking",
        title:"Cloudflare Learning Center - Networking",
        url:"https://www.cloudflare.com/learning/network-layer/",
      },
      {
        id:"redhat-networking",
        title:"Red Hat - Introduction to Networking",
        url:"https://www.redhat.com/en/topics/networking/what-is-networking",
      },
    ],
    videos:[
      {
        id:"networkchuck-networking",
        title:"Networking Fundamentals Course - NetworkChuck",
        duration:"10h",
        url:"https://youtu.be/qiQR5rTSshw",
      },
      {
        id:"profmesser-networking",
        title:"CompTIA Network+ (N10-009) Complete Course - Professor Messer",
        duration:"Playlist",
        url:"https://www.youtube.com/playlist?list=PLG49S3nxzAnl_tQe3kvnmeMid0mjF8Le8",
      },
    ],

    practice: [
  {
    id:"packettracer",
    title: "Cisco Packet Tracer",
    description: "Simulate networks and practice configuring devices.",
    url: "https://www.netacad.com/courses/packet-tracer",
  },
  {
    id:"skillsforall",
    title: "Cisco Skills for All Labs",
    description: "Interactive networking labs from Cisco.",
    url: "https://skillsforall.com/",
  },
  {
    id:"tryhackme-network",
    title: "TryHackMe- Intro to Networking",
    description: "Hands-on networking labs designed for cybersecurity beginners.",
    url: "https://tryhackme.com/",
  },
],
    
    projects: [
      {
        title:"Build a small LAN using Cisco Packet Tracer",
        difficulty:"Beginner",
      },
      {
        title:"Configure routes and switches for a small office network",
        difficulty:"Intermediate",
      },
      {
        title:"Design a secure enterprise network topology",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Cisco Packet Tracer",
        url:"https://www.netacad.com/courses/packet-tracer",
      },
      {
        title:"Wireshark",
        url:"https://www.wireshark.org/",
      },
      {
        title:"GNS3",
        url:"https://www.gns3.com/",
      },
    ],

  },
  /*===============================================
                    OSI MODEL
   =============================================*/
  {
    id: "osi-model",
    logo: "/logos/osi.svg",
    title: "OSI Model",
    description: "Understand the seven-layer OSI model, how data flows through networks, and the role of each layer in communication.",
    difficulty: "Beginner",
    duration: "1 Week",
    learningPath: [
      "Introduction to the OSI Model",
      "Physical Layer",
      "Data Link Layer",
      "Network Layer",
      "Transport Layer",
      "Session Layer",
      "Presentation Layer",
      "Application Layer",
      "Encapsulation & Decapsulation",
      "OSI vs TCP/IP Model",
    ],
    documentation: [
      {
      id:"cisco-osi",
      title: "Cisco Skills for All - OSI Model",
      url:"https://skillsforall.com/",
      recommended:true,
      },
      {
      id:"cloudflare",
      title: "cloudflare-osi",
      url:"https://www.cloudflare.com/learning/ddos/glossary/open-systems-interconnection-model-osi/",
      recommended:true,
      },
      {
        id:"geeksforgeeks-osi",
        title:"GeeksforGeeks - OSI Model",
        url:"https://www.geeksforgeeks.org/open-systems-interconnection-model-osi/",
      },
    ],
    videos:[
      {
        id:"powercert-osi",
        title:"OSI Model Explained",
        duration:"17m",
        url:"https://youtu.be/vv4y_uOneC0",
      },
      {
        id:"profmesser-osi",
        title:"OSI Model - Professor Messer",
        duration:"19m",
        url:"https://youtu.be/HEEnLZV2wGI",
      },
      
    ],

    practice: [
  {
    id:"packettracer",
    title: "Cisco Packet Tracer",
    description: "Visualize communication through the OSI layers.",
    url: "https://www.netacad.com/courses/packet-tracer",
  },
  {
    id:"tryhackme-networking",
    title: "TryHackMe - Networking",
    description: "Practice identifying protocols and OSI layers.",
    url: "https://tryhackme.com/",
  },
  {
    id:"quizlet-osi",
    title: "Quizlet - OSI FlashCards",
    description: "Memorize the seven OSI layers.",
    url: "https://quizlet.com/",
  },
],
    
    projects: [
      {
        title:"Draw the complete OSI Model diagram",
        difficulty:"Beginner",
      },
      {
        title:"Analyze packet flow through every OSI layer",
        difficulty:"Intermediate",
      },
      {
        title:"Compare OSI and TCP/IP models with real protocols",
        difficulty:"Advanced",
      },
    ],

    tools:[
      {
        title:"Wireshark",
        url:"https://www.wireshark.org/",
      },
      {
        title:"Cisco Packet Tracer",
        url:"https://www.netacad.com/courses/packet-tracer",
      },
      {
        title:"draw.io",
        url:"https://app.diagrams.net/",
      },
    ],

  },
  /*===============================================
                  TCP/IP
   =============================================*/
  {
  id: "tcp-ip",
  logo: "/logos/tcp-ip.png",
  title: "TCP/IP",
  description: "Learn the TCP/IP protocol suite, how devices communicate across the Internet, and the protocols that power modern networking.",
  difficulty: "Beginner",
  duration: "1 Week",

  learningPath: [
    "Introduction to TCP/IP",
    "TCP/IP Layers",
    "TCP vs UDP",
    "IP Addressing",
    "IPv4 vs IPv6",
    "Subnet Masks",
    "Default Gateway",
    "DNS",
    "ARP",
    "ICMP",
    "Common Ports",
  ],

  documentation: [
    {
      id: "cloudflare-tcp",
      title: "Cloudflare Learning Center - TCP/IP",
      url: "https://www.cloudflare.com/learning/ddos/glossary/tcp-ip/",
      recommended: true,
    },
    {
      id: "cisco-network",
      title: "Cisco Skills for All",
      url: "https://skillsforall.com/",
    },
    {
      id: "rfc9293",
      title: "RFC 9293 - Transmission Control Protocol (TCP)",
      url: "https://www.rfc-editor.org/rfc/rfc9293",
    },
  ],

  videos: [
    {
      id: "powercert-tcp",
      title: "TCP/IP Explained",
      duration: "20m",
      url: "https://youtu.be/TNQsmPf24go",
    },
    {
      id: "networkchuck-tcp",
      title: "TCP vs UDP Explained",
      duration: "5m",
      url: "https://youtu.be/uwoD5YsGACg",
    },
  ],

  practice: [
    {
      id: "packettracer",
      title: "Cisco Packet Tracer",
      description: "Practice IP addressing and network communication.",
      url: "https://www.netacad.com/courses/packet-tracer",
    },
    {
      id: "tryhackme-network",
      title: "TryHackMe - Network Fundamentals",
      description: "Hands-on networking labs using TCP/IP.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox-academy",
      title: "Hack The Box Academy",
      description: "Interactive networking fundamentals modules.",
      url: "https://academy.hackthebox.com/",
    },
  ],

  projects: [
    {
      title: "Configure IPv4 addressing for a small network",
      difficulty: "Beginner",
    },
    {
      title: "Analyze TCP and UDP traffic with Wireshark",
      difficulty: "Intermediate",
    },
    {
      title: "Design a subnetting plan for a company network",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Wireshark",
      url: "https://www.wireshark.org/",
    },
    {
      title: "Cisco Packet Tracer",
      url: "https://www.netacad.com/courses/packet-tracer",
    },
    {
      title: "Nmap",
      url: "https://nmap.org/",
    },
  ],
},
 /*===============================================
                  Linux
   =============================================*/
  {
  id: "linux",
  logo: "/logos/linux.svg",
  title: "Linux",
  description: "Learn Linux fundamentals, command-line usage, file systems, permissions, networking, and administration skills essential for cybersecurity.",
  difficulty: "Beginner",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Linux",
    "Linux Distributions",
    "Installing Linux",
    "Linux File System",
    "Basic Terminal Commands",
    "Working with Files & Directories",
    "Permissions & Ownership",
    "Users & Groups",
    "Package Managers",
    "Processes & Services",
    "Networking Commands",
    "Shell Scripting Basics",
    "SSH",
    "Logs",
    "System Monitoring",
  ],

  documentation: [
    {
      id: "linuxjourney",
      title: "Linux Journey",
      url: "https://linuxjourney.com/",
      recommended: true,
    },
    {
      id: "ubuntu-docs",
      title: "Ubuntu Documentation",
      url: "https://ubuntu.com/tutorials",
      recommended: true,
    },
    {
      id: "redhat-linux",
      title: "Red Hat Linux Documentation",
      url: "https://docs.redhat.com/",
      
    },
  ],

  videos: [
    {
      id: "fcc-linux",
      title: "Linux for Beginners",
      duration: "6h",
      url: "https://youtu.be/sWbUDq4S6Y8",
    },
    {
      id: "networkchuck-linux",
      title: "Linux Beginners Course",
      duration: "5h 30m",
      url: "https://youtu.be/WMy3OzvBWc0",
    },
  ],

  practice: [
    {
      id: "overthewire",
      title: "OverTheWire: Bandit",
      description: "Learn Linux through hands-on security challenges.",
      url: "https://overthewire.org/wargames/bandit/",
    },
    {
      id: "tryhackme-linux",
      title: "TryHackMe - Linux Fundamentals",
      description: "Interactive Linux labs designed for cybersecurity.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox-linux",
      title: "Hack The Box Academy",
      description: "Practice Linux administration and commands.",
      url: "https://academy.hackthebox.com/",
    },
  ],

  projects: [
    {
      title: "Build your own Linux lab in VirtualBox",
      difficulty: "Beginner",
    },
    {
      title: "Create Bash scripts to automate daily tasks",
      difficulty: "Intermediate",
    },
    {
      title: "Secure a Linux server using SSH, UFW, and Fail2Ban",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Ubuntu",
      url: "https://ubuntu.com/download",
    },
    {
      title: "VirtualBox",
      url: "https://www.virtualbox.org/",
    },
    {
      title: "VMware Workstation Player",
      url: "https://www.vmware.com/products/workstation-player.html",
    },
  ],
},
 /*===============================================
                Windows
   =============================================*/
  {
  id: "windows",
  logo: "/logos/windows.svg",
  title: "Windows",
  description: "Learn Windows administration, security features, networking, and system management skills required for modern cybersecurity.",
  difficulty: "Beginner",
  duration: "2 Weeks",

  learningPath: [
    "Windows Architecture",
    "File System (NTFS)",
    "Windows Registry",
    "Users & Groups",
    "Permissions",
    "Windows Services",
    "Task Scheduler",
    "Windows Networking",
    "Windows Firewall",
    "PowerShell Basics",
    "Windows Event Logs",
    "Windows Defender",
    "Remote Desktop (RDP)",
    "System Monitoring",
    "Windows Security Best Practices",
  ],

  documentation: [
    {
      id: "microsoft-learn",
      title: "Microsoft Learn - Windows",
      url: "https://learn.microsoft.com/en-us/windows/",
      recommended: true,
    },
    {
      id: "windows-security",
      title: "Microsoft Windows Security Documentation",
      url: "https://learn.microsoft.com/en-us/windows/security/",
      recommended: true,
    },
    {
      id: "powershell-docs",
      title: "Microsoft PowerShell Documentation",
      url: "https://learn.microsoft.com/en-us/powershell/",
      
    },
  ],

  videos: [
    {
      id: "johnhammond-windows",
      title: "Windows Fundamentals for Hackers",
      duration: "Playlist",
      url: "https://www.youtube.com/results?search_query=John+Hammond+Windows+Fundamentals",
    },
    {
      id: "networkchuck-powershell",
      title: "PowerShell for Beginners",
      duration: "3m",
      url: "https://www.youtube.com/results?search_query=NetworkChuck+PowerShell",
    },
  ],

  practice: [
    {
      id: "tryhackme-windows",
      title: "TryHackMe - Windows Fundamentals",
      description: "Hands-on Windows labs for cybersecurity beginners.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox-windows",
      title: "Hack The Box Academy",
      description: "Practice Windows administration and security.",
      url: "https://academy.hackthebox.com/",
    },
    {
      id: "microsoft-learn-labs",
      title: "Microsoft Learn Labs",
      description: "Interactive Windows and PowerShell exercises.",
      url: "https://learn.microsoft.com/en-us/training/",
    },
  ],

  projects: [
    {
      title: "Configure a Secure Windows Virtual Machine",
      difficulty: "Beginner",
    },
    {
      title: "Analyze Windows Event Logs using Event Viewer",
      difficulty: "Intermediate",
    },
    {
      title: "Harden Windows using Group Policies and Windows Defender",
      difficulty: "Advanced",
    },
    
  ],

  tools: [
    {
      title: "Windows 11 Evaluation",
      url: "https://www.microsoft.com/en-us/evalcenter/",
    },
    {
      title: "PowerShell",
      url: "https://learn.microsoft.com/en-us/powershell/",
    },
    {
      title: "Sysinternals Suite",
      url: "https://learn.microsoft.com/en-us/sysinternals/",
    },
  ],
},
 /*===============================================
                Command Line
   =============================================*/
   {
  id: "command-line",
  logo: "/logos/terminal.svg",
  title: "Command Line",
  description: "Master the Linux Bash shell and Windows PowerShell to efficiently manage systems, automate tasks, and perform security operations.",
  difficulty: "Beginner",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to Command Line",
    "Navigating the File System",
    "Creating, Moving & Deleting Files",
    "Searching Files",
    "Viewing File Contents",
    "File Permissions",
    "Environment Variables",
    "Input & Output Redirection",
    "Pipes",
    "Text Processing (grep, find, awk, sed)",
    "Package Managers",
    "Aliases",
    "PowerShell Basics",
    "Command History",
    "Automation with Scripts",
  ],

  documentation: [
    {
      id: "gnu-bash",
      title: "GNU Bash Manual",
      url: "https://www.gnu.org/software/bash/manual/bash.html",
      recommended: true,
    },
     {
      id: "microsoft-powershell",
      title: "Microsoft PowerShell Documentation",
      url: "https://learn.microsoft.com/en-us/powershell/",
      
    },
     {
      id: "linuxcommand",
      title: "The Linux Command",
      url: "https://linuxcommand.org/",
      
    },
  ],

  videos: [
    {
      id: "fcc-linux-terminal",
      title: "Linux Command Line Full Course",
      duration: "5h",
      url: "https://youtu.be/ZtqBQ68cfJc",
    },
    {
      id: "networkchuck-terminal",
      title: "Learn the Linux Terminal",
      duration: "1h 14m",
      url: "https://youtu.be/oxuRxtrO2Ag",
    },
  ],

  practice: [
    {
      id: "overthewire-bandit",
      title: "OverTheWire - Bandit",
      description: "Master Linux commands through hands-on challenges.",
      url: "https://overthewire.org/wargames/bandit/",
    },
     {
      id: "cmdchallenge",
      title: "Command Challenge",
      description: "Interactive command-line exercises.",
      url: "https://cmdchallenge.com/",
    },
    {
      id: "tryhackme-linux",
      title: "TryHackMe - Linux Fundamentals",
      description: "Practice Bash commands in real Linux environments.",
      url: "https://tryhackme.com/",
    },
  ],

  projects: [
    {
      title: "Write a Backup Bash Script",
      difficulty: "Beginner",
    },
    {
      title: "Automate User Creation with Bash",
      difficulty: "Intermediate",
    },
    {
      title: "Create a System Monitoring Script using Bash & PowerShell",
      difficulty: "Advanced",
    },
    
  ],

  tools: [
    {
      title: "Windows Terminal",
      url: "https://app.microsoft.com/detail/9N0DX20HK701",
    },
    {
      title: "PowerShell",
      url: "https://learn.microsoft.com/en-us/powershell",
    },
    {
      title: "Git Bash",
      url: "https://git-scm.com/downloads",
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
  description: "Learn Git version control to manage code, collaborate with teams, and maintain security tools and automation scripts.",
  difficulty: "Beginner",
  duration: "1 Week",

  learningPath: [
    "Introduction to Git",
    "Installing Git",
    "Git Configuration",
    "Repositories",
    "Git Init",
    "Git Clone",
    "Git Status",
    "Git Add",
    "Git Commit",
    "Git Log",
    "Git Branches",
    "Git Merge",
     "Git Rebase Basics",
    "GitHub Basics",
    "Pull Requests",
    "Resolving Merge Conflicts",
  ],

  documentation: [
    {
      id: "git-scm",
      title: "Git Official Documentation",
      url: "https://git-scm.com/docs/",
      recommended: true,
    },
    {
      id: "progit",
      title: "Pro Git Book",
      url: "https://git-scm.com/book/en/v2",
    },
    {
      id: "github-docs",
      title: "GitHub Docs",
      url: "https://docs.github.com/",
    },
  ],

  videos: [
    {
      id: "fcc-git",
      title: "Git and GitHub for Beginners",
      duration: "1h 8m",
      url: "https://youtu.be/RGOj5yH7evk",
    },
    {
      id: "programmingwithmosh-git",
      title: "Git Tutorial for Beginners - Programming with Mosh",
      duration: "1h 9m",
      url: "https://youtu.be/8JJ101D3knE",
    },
  ],

  practice: [
    {
      id: "learngitbranching",
      title: "Learn Git Branching",
      description: "Interactive Git visualization and exercises.",
      url: "https://learngitbranching.js.org/",
    },
    {
      id: "github-skills",
      title: "GitHub Skills",
      description: "Hands-on GitHub courses directly on GitHub.",
      url: "https://skills.github.com/",
    },
    {
      id: "codeacademy-git",
      title: "Codeacademy Git Course",
      description: "Practice common Git workflows interactively.",
      url: "https://www.codecademy.com/learn/learn-git",
    },
  ],

  projects: [
    {
      title: "Craete your first GitHub repository",
      difficulty: "Beginner",
    },
    {
      title: "Manage a cybersecurity notes repository with Git",
      difficulty: "Intermediate",
    },
    {
      title: "Collaborate on an open-source security tool using Pull Requests",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Git",
      url: "https://git-scm.com/downloads",
    },
    {
      title: "GitHub Desktop",
      url: "https://desktop.github.com/",
    },
    {
      title: "VS Code",
      url: "https://code.visualstudio.com/",
    },
  ],
},
/*===============================================
                Python
   =============================================*/
   {
  id: "python",
  logo: "/logos/python.svg",
  title: "Python",
  description: "Learn Python programming for cybersecurity, automation, networking, penetration testing, and security tool development.",
  difficulty: "Beginner",
  duration: "4 Weeks",

  learningPath: [
    "Installing Python",
    "Variables & Data Types",
    "Operators",
    "Input & Output",
    "Conditional Statements",
    "Loops",
    "Functions",
    "Modules & Packages",
    "File Handling",
    "Exception Handling",
    "Object-Oriented Programming (OOP)",
    "Working with APIs",
     "Networking with Python",
    "Regular Expressions",
    "Automation Scripts",
    "Virtual Environments",
    "Useful Security Libraries (requests, scapy, paramiko)",
  ],

  documentation: [
    {
      id: "python-docs",
      title: "Python Official Documentation",
      url: "https://docs.python.org/3/",
      recommended: true,
    },
    {
      id: "realpython",
      title: "Real Python",
      url: "https://realpython.com/",
    },
    {
      id: "automate-book",
      title: "Automate the Boring Stuff with Python",
      url: "https://automatetheboringstuff.com/",
    },
  ],

  videos: [
    {
      id: "fcc-python",
      title: "Python for Beginners",
      duration: "4h 26m",
      url: "https://youtu.be/rfscVS0vtbw",
    },
    {
      id: "brocode-python",
      title: "Python Full Course for Beginners",
      duration: "12h",
      url: "https://youtu.be/XKHEtdqhLK8",
    },
  ],

  practice: [
    {
      id: "hackerrank-python",
      title: "HackerRank - Python",
      description: "Practice Python programming challenges.",
      url: "https://www.hackerrank.com/domains/tutorials/10-days-of-python",
    },
    {
      id: "leetcode-python",
      title: "LeetCode",
      description: "Solve programming problems using Python.",
      url: "https://leetcode.com/",
    },
     {
      id: "tryhackme-python",
      title: "TryHackMe - Python Basics",
      description: "Apply Python in cybersecurity labs.",
      url: "https://tryhackme.com/",
    },
  ],

  projects: [
    {
      title: "Build a Port Scanner",
      difficulty: "Beginner",
    },
    {
      title: "Create a Network Scanner",
      difficulty: "Intermediate",
    },
    {
      title: "Develop a Password Strength Analyzer",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Python",
      url: "https://www.python.org/downloads/",
    },
    {
      title: "VS Code",
      url: "https://code.visualstudio.com/",
    },
    {
      title: "PyCharm Community",
      url: "https://www.jetbrains.com/pycharm/download/",
    },
    
  ],
},
/*===============================================
                Web Fundamentals
   =============================================*/
   {
  id: "web",
  logo: "/logos/web.svg",
  title: "Web Fundamentals",
  description: "Learn how websites work, how browsers communicate with servers, and the core technologies behind modern web applications before studying web security.",
  difficulty: "Beginner",
  duration: "1 Week",

  learningPath: [
    "How the Web Works",
    "Clients & Servers",
    "HTTP & HTTPS",
    "Request & Response Lifecycle",
    "HTTP Methods",
    "HTTP Headers",
    "Cookies",
    "Sessions",
    "REST APIs",
    "JSON",
    "HTML Basics",
    "CSS Basics",
     "JavaScript Basics",
     "Browser Developer Tools",
     "Same-Origin Policy (Introduction)",
  ],

  documentation: [
    {
      id: "mdn-web",
      title: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
      recommended: true,
    },
    {
      id: "http-mdn",
      title: "MDN - HTTP",
      url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
      
    },
    {
      id: "Owasp-web",
      title: "OWASP Web Security Testing Guide",
      url: "https://owasp.org/www-project-web-security-testing-guide/",
      
    },
  ],

  videos: [
    {
      id: "fcc-http",
      title: "HTTP Crash Course",
      duration: "40m",
      url: "https://youtu.be/iYM2zFP3Zn0",
    },
    {
      id: "howthewebworls",
      title: "How the Web Works",
      duration: "13m",
      url: "https://youtu.be/hJHvdBlSxug?si=o7GCJBpCrlB6uH6n",
    },
  ],

  practice: [
    {
      id: "portswigger-labs",
      title: "PostWigger Web Security Academy",
      description: "Hands-on web security labs beginning with HTTP fundamentals.",
      url: "https://portswigger.net/web-security",
    },
    {
      id: "tryhackme-http",
      title: "TryHackMe - HTTP in Detail",
      description: "Learn HTTP through practical labs.",
      url: "https://tryhackme.com/",
    },
    {
      id: "developer-tools",
      title: "Chrome DevTools",
      description: "Inspect requests, responses, cookies, storage, and JavaScript.",
      url: "https://developer.chrome.com/docs/devtools/",
    },
  ],

  projects: [
    {
      title: "Inspect every request made by a website using DevTools",
      difficulty: "Beginner",
    },
    {
      title: "Build and analyze a simple REST API using Postman",
      difficulty: "Intermediate",
    },
    {
      title: "Map the authentication flow of a real web application",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Google Chrome",
      url: "https://www.google.com/chrome/",
    },
    {
      title: "Postman",
      url: "https://www.postman.com/downloads/",
    },
    {
      title: "Chrome DevTools",
      url: "https://developer.chrome.com/docs/devtools/",
    },
    
  ],
},
/*===============================================
                    Cryptography
   =============================================*/
  {
  id: "cryptography",
  logo: "/logos/cryptography.svg",
  title: "Cryptography",
  description: "Learn the principles of modern cryptography, including encryption, hashing, digital signatures, certificates, and secure communication used throughout cybersecurity.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Introducion to Cryptography",
    "Plaintext vs Ciphertext",
    "Symmetric Encryption",
    "Asymmetric Encryption",
    "Public & Private Keys",
    "Hash Functions",
    "Password Hashing",
    "Salting",
    "Digital Signatures",
    "Certificates",
    "Public Key Infrastructure (PKI)",
    "TLS & SSL",
     "Key Exchange",
     "Common Cryptographic Algorithms",
     "Cryptographic Best Practices",
  ],

  documentation: [
    {
      id: "owasp-crypto",
      title: "OWASP Cryptography Storage Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Cryptographic_Storage_Cheat_Sheet.html",
      recommended: true,
    },
    {
      id: "nist-crypto",
      title: "NIST Cryptographic Standards",
      url: "https://csrc.nist.gov/projects/cryptographic-standards-and-guidelines",
      
    },
    {
      id: "cloudflare-https",
      title: "Cloudflare Learning Center - HTTPS & Encryption",
      url: "https://www.cloudflare.com/learning/ssl/what-happens-in-a-tls-handshake/",
      
    },
  ],

  videos: [
    {
      id: "computerphile-crypto",
      title: "Cryptography Series - Computerphile",
      duration: "Playlist",
      url: "https://www.youtube.com/playlist?list=PLzH6n4zXuckquVnQ0KlMDxyT5YE-sA8Ps",
    },
    {
      id: "hussien-tls",
      title: "TLS Handshake Explained - Hussein Nasser",
      duration: "25m",
      url: "https://youtu.be/AlE5X1NlHgg",
    },
  ],

  practice: [
    {
      id: "cryptohack",
      title: "CryptoHack",
      description: "Hands-on cryptography challenges from beginner to advanced.",
      url: "https://cryptohack.org/",
    },
    {
      id: "tryhackme-crypto",
      title: "TryHackMe - Cryptography",
      description: "Practice encryption and hashing through cybersecurity labs.",
      url: "https://tryhackme.com/",
    },
    {
      id: "portswigger-auth",
      title: "PortSwigger Web Security Academy",
      description: "Explore real-world authentication and cryptography concepts.",
      url: "https://portswigger.net/web-security",
    },
  ],

  projects: [
    {
      title: "Build a File Encryption Tool using Python",
      difficulty: "Beginner",
    },
    {
      title: "Implement Password Hashing with bcrypt",
      difficulty: "Intermediate",
    },
    {
      title: "Create a Secure Login System using JWT and HTTPS",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "OpenSSL",
      url: "https://www.openssl.org/",
    },
    {
      title: "CyberChef",
      url: "https://gchq.github.io/CyberChef/",
    },
    {
      title: "Hashcat",
      url: "https://hashcat.net/hashcat/",
    },
    
  ],
},
/*===============================================
                  Authentication
   =============================================*/
   {
  id: "authentication",
  logo: "/logos/auth.svg",
  title: "Authentication",
  description: "Learn how users prove their identity, how authentication systems work, and how to secure them against common attacks.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Authentication vs Authorization",
    "Passwords",
    "Password Policies",
    "Password Managers",
    "Multi-Factor Authentication (MFA)",
    "One-Time Passwords (OTP)",
    "Session Authentication",
    "Cookies & Sessions",
    "JSON Web Tokens (JWT)",
    "OAuth 2.0",
    "OpenID Connect (OIDC)",
    "SAML",
     "Single Sign-On (SSO)",
     "Authentication Attacks",
     "Authentication Best Practices",
  ],

  documentation: [
    {
      id: "owasp-auth-cheat-sheet",
      title: "OWASP Authentication Cheat Sheet",
      url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
      recommended: true,
    },
    {
      id: "auth0-authentication",
      title: "Auth0 - Authentication & Authorization",
      url: "https://auth0.com/docs/get-started/identity-fundamentals/authentication-and-authorization",
      recommended: true,
    },
    {
      id: "oauth-spec",
      title: "OAuth 2.0 Framework (RFC 6749)",
      url: "https://datatracker.ietf.org/doc/html/rfc6749",
    },
  ],

  videos: [
    {
      id: "hussein-auth",
      title: "Authentication vs Authorization",
      duration: "21m",
      url: "https://youtu.be/h6wBYWWdyYQ",
    },
    {
      id: "jwt-webdevsimplified",
      title: "JWT Authentication Explained - Web Dev Simplified",
      duration: "28m",
      url: "https://youtu.be/mbsmsi7l3r4",
    },
  ],

  practice: [
    {
      id: "portswigger-auth-labs",
      title: "PortSwigger Web Security Academy - Authentication",
      description: "Practice exploiting authentication vulnerabilities.",
      url: "https://portswigger.net/web-security/authentication",
    },
    {
      id: "tryhackme-auth",
      title: "TryHackMe Authentication Labs",
      description: "Hands-on authentication and session management exercieses.",
      url: "https://tryhackme.com/",
    },
    {
      id: "jwt-io",
      title: "JWT.io",
      description: "Decode, inspect, and experiment with JSON Web Tokens.",
      url: "https://jwt.io/",
    },
  ],

  projects: [
    {
      title: "Build a Secure Login System with Password Hashing",
      difficulty: "Beginner",
    },
    {
      title: "Implement JWT Authentication in a REST API",
      difficulty: "Intermediate",
    },
    {
      title: "Build an OAuth 2.0 Login using Google or GitHub",
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
      url: "https://www.postman.com/downloads/",
    },
    {
      title: "Burp Suite Community Edition",
      url: "https://portswigger.net/burp/communitydownload",
    },
    
  ],
},
/*===============================================
                  Firewalls
   =============================================*/
   {
  id: "firewalls",
  logo: "/logos/firewall.svg",
  title: "FireWalls",
  description: "Learn how firewalls inspect, filter, and control network traffic to protect systems from unauthorized access and cyber attacks.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to FireWalls",
    "How FireWalls Work",
    "Packet Filtering",
    "Stateful Inspection",
    "Application Layer FireWalls",
    "Next-Generation FireWalls (NGFW)",
    "Host-Based vs Network FireWalls",
    "FireWall Rules",
    "Inbound vs Outbound Traffic",
    "Network Address Translation (NAT)",
    "Windows Defender FireWall",
    "Linux UFW",
     "iptables & nftables Basics",
     "FireWall Logging",
     "FireWall Best Practices",
  ],

  documentation: [
    {
      id: "cisco-firewalls",
      title: "Cisco FireWall Learning Resources",
      url: "https://www.cisco.com/site/us/en/products/security/firewalls/index.html",
      recommended: true,
    },
    {
      id: "microsoft-firewall",
      title: "Microsoft Defender FireWall Documentation",
      url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/",
    },
    {
      id: "ubuntu-ufw",
      title: "Ubuntu UFW Documentation",
      url: "https://help.ubuntu.com/community/UFW",
    },
  ],

  videos: [
    {
      id: "powercert-firewall",
      title: "FireWalls Explained",
      duration: "7m",
      url: "https://youtu.be/kDEX1HXybrU",
    },
    {
      id: "networkchuck-firewall",
      title: "How Firewalls Actually Work",
      duration: "28m",
      url: "https://www.youtube.com/results?search_query=NetworkChuck+Firewall",
    },
  ],

  practice: [
    {
      id: "tryhackme-firewalls",
      title: "TryHackMe - Firewalls",
      description: "Practice firewall concepts and traffic filtering through interactive labs.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox-network",
      title: "Hack The Box Academy",
      description: "Hands-on networking and firewall exercises.",
      url: "https://academy.hackthebox.com/",
    },
    {
      id: "ufw-guide",
      title: "DigitalOcean UFW Essentials",
      description: "Learn to configure uncomplicated firewalls on Linux servers.",
      url: "https://www.digitalocean.com/community/tutorials/ufw-essentials-common-firewall-rules-and-commands",
    },
  ],

  projects: [
    {
      title: "Configure a Linux Firewall using UFW",
      difficulty: "Beginner",
    },
    {
      title: "Create Firewall Rules for a Small Office Network",
      difficulty: "Intermediate",
    },
    {
      title: "Deploy and Test pfSense as a Network Firewall",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "pfSense CE",
      url: "https://www.pfsense.org/download/",
    },
    {
      title: "Windows Defender Firewall",
      url: "https://learn.microsoft.com/en-us/windows/security/operating-system-security/network-security/windows-firewall/",
    },
    {
      title: "Wireshark",
      url: "https://www.wireshark.org/",
    },
    
  ],
},
/*===============================================
                Wireshark
   =============================================*/
   {
  id: "wireshark",
  logo: "/logos/wireshark.svg",
  title: "Wireshark",
  description: "Learn how to capture, inspect, and analyze network traffic using Wireshark to troubleshoot networks and investigate security incidents.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to Packet Analysis",
    "Installing Wireshark",
    "Capturing Network Traffic",
    "Network Interfaces",
    "Packets vs Frames",
    "Packet Structure",
    "Display Filters",
    "Capture Filters",
    "Following TCP Streams",
    "Analyzing HTTP Traffic",
    "Analyzing DNS Traffic",
    "Analyzing TLS Traffic",
     "Exporting Objects",
     "Statistics & Conversations",
     "Finding Suspicious Traffic",
     "Analyzing PCAP Files",
  ],

  documentation: [
    {
      id: "wireshark-docs",
      title: "Wireshark User Guide",
      url: "https://www.wireshark.org/docs/wsug_html_chunked/",
      recommended: true,
    },
    {
      id: "wireshark-display-filters",
      title: "Wireshark Display Filter Reference",
      url: "https://www.wireshark.org/docs/dfref/",
    },
    {
      id: "wireshark-sample-captures",
      title: "Wireshark Sample Captures",
      url: "https://wiki.wireshark.org/SampleCaptures",
    },
  ],

  videos: [
    {
      id: "chrisgreer-wireshark",
      title: "Wireshark Masterclass - Chris Greer",
      duration: "Playlist",
      url: "https://youtube.com/playlist?list=PLW8bTPfXNGdC5Co0VnBK1yVzAwSSphzpJ&si=KIUzCh3uAxDrcm4w",
    },
    {
      id: "networkchuck-wireshark",
      title: "Learn Wireshark in One Hour",
      duration: "20m",
      url: "https://youtu.be/qTaOZrDnMzQ?si=0JDakmj8RrwjvX4Q",
    },
  ],

  practice: [
    {
      id: "tryhackme-wireshark",
      title: "TryHackMe - Wireshark",
      description: "Analyze packet captures in guided cybersecurity labs.",
      url: "https://tryhackme.com/",
    },
    {
      id: "wireshark-samples",
      title: "Wireshark Sample PCAP Files",
      description: "Practice analyzing real packet captures.",
      url: "https://wiki.wireshark.org/SampleCaptures",
    },
    {
      id: "malware-traffic",
      title: "Malware Traffic Analysis",
      description: "Analyza real-world malicious PCAP files.",
      url: "https://www.malware-traffic-analysis.net/",
    },
  ],

  projects: [
    {
      title: "Capture and Analyze Your Home Network Traffic",
      difficulty: "Beginner",
    },
    {
      title: "Investigate a Suspicious PCAP File",
      difficulty: "Intermediate",
    },
    {
      title: "Perform a Complete Network Traffic Investigation",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Wireshark",
      url: "https://www.wireshark.org/download.html",
    },
    {
      title: "tcpdump",
      url: "https://www.tcpdump.org/",
    },
    {
      title: "NetworkMiner",
      url: "https://www.netresec.com/?page=NetworkMiner",
    },
    
  ],
},
/*===============================================
                    NMAP
   =============================================*/
   {
  id: "nmap",
  logo: "/logos/nmap.svg",
  title: "Nmap",
  description: "Learn how to discover hosts, scan ports, identify services, detect operating systems, and automate reconnaissance using Nmap.",
  difficulty: "Intermediate",
  duration: "2 Weeks",

  learningPath: [
    "Introduction to Nmap",
    "Installing Nmap",
    "Host Discovery",
    "Port Scanning",
    "TCP Connect Scan",
    "SYN Scan",
    "UDP Scan",
    "Version Detection",
    "Operating System Detection",
    "Timing Templates",
    "Nmap Scripting Engine (NSE)",
    "Firewall Evasion Basics",
     "Output Formats",
     "Scanning Best Practices",
     "Common Nmap Commands",
  ],

  documentation: [
    {
      id: "nmap-book",
      title: "Nmap Network Scanning (Official Book)",
      url: "https://nmap.org/book/",
      recommended: true,
    },
    {
      id: "nmap-reference",
      title: "Nmap Reference Guide",
      url: "https://nmap.org/docs.html",
    },
    {
      id: "nse-docs",
      title: "Nmap Scripting Engine Documentation",
      url: "https://nmap.org/book/nse.html",
    },
  ],

  videos: [
    {
      id: "networkchuck-nmap",
      title: "Nmap Tutorial for Beginners",
      duration: "17m",
      url: "https://youtu.be/4t4kBkMsDbQ?si=_GoU1qGoIZ_jS7eS",
    },
    {
      id: "johnhammond-nmap",
      title: "Nmap Full Course",
      duration: "Playlist",
      url: "https://youtu.be/JHAMj2vN2oU?si=tkchkbo8Vqp2hmAX",
    },
  ],

  practice: [
    {
      id: "tryhackme-nmap",
      title: "TryHackMe - Nmap",
      description: "Practice host discovery, port scanning, and enumeration.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox-nmap",
      title: "Hack The Box Academy - Nmap",
      description: "Hands-on Nmap modules used in penetration testing.",
      url: "https://academy.hackthebox.com/",
    },
    {
      id: "nmap-cheastsheet",
      title: "Nmap Cheat Sheet",
      description: "Quick reference for the most common Nmap commands.",
      url: "https://github.com/jasonniebauer/nmap-cheatsheet",
    },
  ],

  projects: [
    {
      title: "Scan Your Home Network",
      difficulty: "Beginner",
    },
    {
      title: "Enumerate Services on a Linux Server",
      difficulty: "Intermediate",
    },
    {
      title: "Perform a Full Network Reconnaissance Using NSE Scripts",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Nmap",
      url: "https://nmap.org/download.html",
    },
    {
      title: "Zenmap",
      url: "https://nmap.org/zenmap/",
    },
    {
      title: "Wireshark",
      url: "https://www.wireshark.org/",
    },
    
  ],
},
/*===============================================
                  BURP SUITE
   =============================================*/
   {
  id: "burp-suite",
  logo: "/logos/burpsuite.svg",
  title: "Burp Suite",
  description: "Learn how to intercept, inspect, modify, and test web application traffic using Burp Suite, the industry-Standard toolkit for web security testing.",
  difficulty: "Intermediate",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Burp Suite",
    "Installing Burp Suite",
    "Proxy",
    "Intercepting HTTP Requests",
    "HTTP History",
    "Repeater",
    "Intruder",
    "Decoder",
    "Comparer",
    "Sequencer",
    "Target Scope",
    "Session Handling",
     "Extensions (BApp Store)",
     "Using Burp with HTTPS",
     "Burp Workflow",
  ],

  documentation: [
    {
      id: "portswigger-docs",
      title: "Burp Suite Documentation",
      url: "https://portswigger.net/burp/documentation",
      recommended: true,
    },
    {
      id: "portswigger-academy",
      title: "PortSwigger Web Security Academy",
      url: "https://portswigger.net/web-security",
    },
    {
      id: "burp-bapp",
      title: "Burp Suit BApp Store",
      url: "https://portswigger.net/bappstore",
    },
  ],

  videos: [
    {
      id: "david-bombal-burp",
      title: "Burp Suite Tutorial for Beginners - David Bombal",
      duration: "1h 6m",
      url: "https://www.youtube.com/watch?v=IWWYNDiwYOA",
    },
    {
      id: "cryptocat-burp",
      title: "Introduction to Burp Suite (for Beginners) - CryptoCat",
      duration: "30m",
      url: "https://www.youtube.com/watch?v=24dUQ1LvopE",
    },
  ],

  practice: [
    {
      id: "posrtswigger-labs",
      title: "PortSwigger Web Security Academy",
      description: "Hands-on labs covering every Burp Suite features.",
      url: "https://portswigger.net/web-security",
    },
    {
      id: "tryhackme-burp",
      title: "TryHackMe - Burp Suite",
      description: "Interactive Burp Suite labs for beginners.",
      url: "https://tryhackme.com/",
    },
    {
      id: "juice-shop",
      title: "OWASP Juice Shop",
      description: "Practice intercepting and analyzing requests in a deliberately vulnerable web application.",
      url: "https://owasp.org/www-project-juice-shop/",
    },
  ],

  projects: [
    {
      title: "Intercept and Modify HTTP Requests",
      difficulty: "Beginner",
    },
    {
      title: "Analyze Authentication and Session Cookies",
      difficulty: "Intermediate",
    },
    {
      title: "Perform a Complete Assessment of OWASP Juice Shop Using Burp Suite",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Burp Suite Community Edition",
      url: "https://portswigger.net/burp/communitydownload",
    },
    {
      title: "Firefox Developer Edition",
      url: "https://www.mozilla.org/firefox/developer/",
    },
    {
      title: "OWASP Juice Shop",
      url: "https://owasp.org/www-project-juice-shop/",
    },
    
  ],
},
/*===============================================
                OWASP TOP 10
   =============================================*/
   {
  id: "owasp-top-10",
  logo: "/logos/owasp.svg",
  title: "OWASP Top 10",
  description: "Learn the most critical web application security risks and how attackers exploit them, based on the OWASP Top 10 industry standard.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to OWASP",
    "Broken Access Control",
    "Cryptographic Failures",
    "Injection",
    "Insecure Design",
    "Security Misconfiguration",
    "Vulnerable and Outdated Components",
    "Identification and Authentication Failures",
    "Software and Data Integrity Failures",
    "Security Logging and Monitoring Failures",
    "Server-Side Request Forgery (SSRF)",
    "OWASP Top 10 Labs",
     "Common Mitigations",
     "Secure Development Practices",
     "Real-World Case Studies",
  ],

  documentation: [
    {
      id: "owasp-top10",
      title: "OWASP Top 10 (Official)",
      url: "https://owasp.org/www-project-top-ten/",
      recommended: true,
    },
    {
      id: "owasp-web-security-testing",
      title: "OWASP Web Security Testing Guide",
      url: "https://owasp.org/www-project-web-security-testing-guide/",
    },
    {
      id: "portswigger-web-security",
      title: "PortSwigger Web Security Academy",
      url: "https://portswigger.net/web-security",
    },
  ],

  videos: [
    {
      id: "hacker-sploit-owasp",
      title: "OWASP Top 10 - 2021 Edition",
      duration: "17m",
      url: "https://www.youtube.com/watch?v=0Bf9WikzsUI",
    },
    {
      id: "awesome-owasp",
      title: "OWASP Top 10 Explained",
      duration: "10m",
      url: "https://www.youtube.com/watch?v=U_tsCjOrcK4",
    },
  ],

  practice: [
    {
      id: "portswigger-labs",
      title: "PortSwigger Web Security Academy",
      description: "Hands-on labs covering every OWASP Top 10 vulnerability.",
      url: "https://portswigger.net/web-security",
    },
    {
      id: "juice-shop",
      title: "OWASP Juice Shop",
      description: "Practice exploiting and fixing OWASP top 10 vulnerabilities.",
      url: "https://owasp.org/www-project-juice-shop/",
    },
    {
      id: "webgoat",
      title: "OWASP WebGoat",
      description: "Interactive lessons covering common web vulnerabilities.",
      url: "https://owasp.org/www-project-webgoat/",
    },
  ],

  projects: [
    {
      title: "Identify OWASP Top 10 Risks in OWASP Juice Shop",
      difficulty: "Beginner",
    },
    {
      title: "Perform a Web Application Security Assessment",
      difficulty: "Intermediate",
    },
    {
      title: "Write a Professional Penetration Testing Report",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Burp Suite Community Edition",
      url: "https://portswigger.net/burp/communitydownload",
    },
    {
      title: "OWASP Juice Shop",
      url: "https://owasp.org/www-project-juice-shop/",
    },
    {
      title: "OWASP WebGoat",
      url: "https://owasp.org/www-project-webgoat/",
    },
    
  ],
},
/*===============================================
                Web Security
   =============================================*/
   {
  id: "web-security",
  logo: "/logos/web-security.svg",
  title: "Web Security",
  description: "Understand how modern web applications are secured by learning browser security, APIs, HTTPS, CORS, CSP, cookies, sessions, and common attack vectors.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "HTTP vs HTTPS",
    "TLS & SSL",
    "Cookies",
    "Sessions",
    "Same-Origin Policy",
    "Cross-Origin Resource Sharing (CORS)",
    "Content Security Policy (CSP)",
    "HTTP Security Headers",
    "Cross-Site Request Forgery (CSRF)",
    "Cross-Site Scripting (XSS)",
    "SQL Injection",
    "File Upload Security",
     "API Security Basics",
     "JWT Security",
     "Rate Limiting",
     "WebSockets Security",
     "GraphQl Security Basics",
     "Secure Authentication Flow",
     "Secure Deployment",
     "Web Security Best Practices",
  ],

  documentation: [
    {
      id: "owasp-web-security-testing-guide",
      title: "OWASP Web Security Testing Guide",
      url: "https://owasp.org/www-project-web-security-testing-guide/",
      recommended: true,
    },
    {
      id: "portswigger-web-security",
      title: "PortSwigger Web Security Academy",
      url: "https://portswigger.net/web-security",
    },
    {
      id: "mdn-web-security",
      title: "MDN Web Security",
      url: "https://developer.mozilla.org/en-US/docs/Web/Security",
    },
  ],

  videos: [
    {
      id: "intro-web-security",
      title: "Introduction to Web Security",
      duration: "12m",
      url: "https://youtu.be/GdMTzcn5F0c?si=um2yKwcq4imzLMUY",
    },
    {
      id: "david-web-security",
      title: "PortSwigger Web Security",
      duration: "16m",
      url: "https://youtu.be/rY-7gT4S048?si=iDK_5VrGxbapX2l_",
    },
  ],

  practice: [
    {
      id: "portswigger-labs",
      title: "PortSwigger Web Security Academy",
      description: "Hands-on labs covering every OWASP Top 10 vulnerability.",
      url: "https://portswigger.net/web-security",
    },
    {
      id: "juice-shop",
      title: "OWASP Juice Shop",
      description: "Practice exploiting and fixing OWASP top 10 vulnerabilities.",
      url: "https://owasp.org/www-project-juice-shop/",
    },
    {
      id: "webgoat",
      title: "OWASP WebGoat",
      description: "Interactive lessons covering common web vulnerabilities.",
      url: "https://owasp.org/www-project-webgoat/",
    },
  ],

  projects: [
    {
      title: "Secure a Login System Against Common Attacks",
      difficulty: "Beginner",
    },
    {
      title: "Aduit a REST API for Security Issues",
      difficulty: "Intermediate",
    },
    {
      title: "Perform a Complete Web Application Security Assessment",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Burp Suite Community Edition",
      url: "https://portswigger.net/burp/communitydownload",
    },
    {
      title: "OWASP Juice Shop",
      url: "https://www.zaproxy.org/",
    },
    {
      title: "OWASP ZAP",
      url: "https://owasp.org/www-project-webgoat/",
    },
    
  ],
},
/*===============================================
              ACTIVE DIRECTORY
   =============================================*/
   {
  id: "active-directory",
  logo: "/logos/active-directory.svg",
  title: "Active Directory",
  description: "Learn how Windows enterprise networks are managed using Active Directory, including domains, users, groups, policies, authentication, and common attack techniques.",
  difficulty: "Intermediate",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to Active Directory",
    "Domains & Forests",
    "Domain Controllers",
    "Users & Groups",
    "Organizational Units (OUs)",
    "Group Policy (GPO)",
    "DNS in Active Directory",
    "Kerberos Authentication",
    "LDAP Basics",
    "NTLM Authentication",
    "Domain Enumeration",
    "BloodHound Basics",
     "Common AD Attacks",
     "Active Directory Hardening",
     "AD Lab Setup",
  ],

  documentation: [
    {
      id: "microsoft-ad",
      title: "Microsoft Learn - Active Directory",
      url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/",
      recommended: true,
    },
    {
      id: "ad-overview",
      title: "Active Directory Domain Services Overview",
      url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
    },
    {
      id: "ired-ad",
      title: "Active Directory Attacks",
      url: "https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse",
    },
  ],

  videos: [
    {
      id: "john-hammond-ad",
      title: "Active Directory for Beginners",
      duration: "21m",
      url: "https://youtu.be/pKtDQtsubio?si=_wuT9FrNDfiqFMbX",
    },
    {
      id: "tcm-ad",
      title: "Active Directory Fundamentals",
      duration: "5h 15m",
      url: "https://youtu.be/VXxH4n684HE?si=fjeOzAniWw6tAQAF",
    },
  ],

  practice: [
    {
      id: "tryhackme-ad",
      title: "TryHackMe - Active Directory",
      description: "Hands-on Active Directory labs from beginner to advanced.",
      url: "https://tryhackme.com/",
    },
    {
      id: "htp-ad",
      title: "Hack The Box Academy - Active Directory",
      description: "Enterprise Active Directory labs.",
      url: "https://academy.hackthebox.com/",
    },
    {
      id: "detectionlab",
      title: "Detection Lab",
      description: "Build your own Windows Active Directory lab.",
      url: "https://github.com/clong/DetectionLab",
    },
  ],

  projects: [
    {
      title: "Build your First Active Directory Lab",
      difficulty: "Beginner",
    },
    {
      title: "Enumerate an Active Directory Environment",
      difficulty: "Intermediate",
    },
    {
      title: "Perform a Complete Active Directory Security Assessment",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "BloodHound",
      url: "https://github.com/SpecterOps/BloodHound",
    },
    {
      title: "SharpHound",
      url: "https://github.com/SpecterOps/SharpHound",
    },
    {
      title: "RSAT",
      url: "https://learn.microsoft.com/en-us/windows-server/remote/remote-server-administration-tools",
    },
    
  ],
},
/*===============================================
                METASPLOIT
   =============================================*/
   {
  id: "metasploit",
  logo: "/logos/metasploit.svg",
  title: "Metasploit",
  description: "Learn how to use the Metasploit Framework to discover, exploit, validate, and report vulnerabilities in authorized penetration testing environments.",
  difficulty: "Advanced",
  duration: "3 Weeks",

  learningPath: [
    "Introduction to Metasploit",
    "Installing Metasploit",
    "Metasploit Architecture",
    "MSF Console Basics",
    "Modules",
    "Payloads",
    "Auxiliary Modules",
    "Encoders",
    "Exploit Modules",
    "Post Exploitation Modules",
    "Meterpreter",
    "Working with Sessions",
     "Database Integration",
     "Searching & Using Exploits",
     "Exploiting Vulnerable Machines",
     "Reporting & Cleanup",
  ],

  documentation: [
    {
      id: "rapid7-docs",
      title: "Rapid7 Metasploit Documentation",
      url: "https://docs.rapid7.com/metasploit/",
      recommended: true,
    },
    {
      id: "rapid7-unleashed",
      title: "Metasploit Unleashed",
      url: "https://www.offsec.com/metasploit-unleashed/",
    },
    {
      id: "metasploit-github",
      title: "Metasploit Framework GitHub",
      url: "https://github.com/rapid7/metasploit-framework",
    },
  ],

  videos: [
    {
      id: "metasploit-course",
      title: "Metasploit for Beginners",
      duration: "23m",
      url: "https://youtu.be/8lR27r8Y_ik?si=QXUj4_hkJc8ndiVM",
    },
    {
      id: "meterpreter-course",
      title: "Meterpreter % Post Exploitation",
      duration: "20m",
      url: "https://youtu.be/xsyeL6xWWy4?si=wnO3qVKmP1yQhFCi",
    },
  ],

  practice: [
    {
      id: "tryhackme-metasploit",
      title: "TryHackMe - Metasploit",
      description: "Learn exploitation using Metasploit in safe lab environments.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox-metasploit",
      title: "Hack The Box Academy - Metasploit",
      description: "Practice using Metasploit during penetration testing labs.",
      url: "https://academy.hackthebox.com/",
    },
    {
      id: "metasploitable2",
      title: "Metasploitable 2",
      description: "A deliberately vulnerable virtual machine for learning exploitation.",
      url: "https://sourceforge.net/projects/metasploitable/",
    },
  ],

  projects: [
    {
      title: "Exploit Metasploitable 2 Using Metasploit",
      difficulty: "Beginner",
    },
    {
      title: "Perform Vulnerability Validation After Nmap Enumeration",
      difficulty: "Intermediate",
    },
    {
      title: "Complete Penetration Test Against a Vulnerable Lab",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Metasploit Framework",
      url: "https://www.metasploit.com/",
    },
    {
      title: "Metasploitable 2",
      url: "https://sourceforge.net/projects/metasploitable/",
    },
    {
      title: "Kali Linux",
      url: "https://www.kali.org/",
    },
    
  ],
},
/*===============================================
                Privilege-escalation
   =============================================*/
   {
  id: "privilege-escalation",
  logo: "/logos/privilege-escalation.png",
  title: "Privilege Escalation",
  description: "Learn how privilege escalation works on Linux and Windows systems bu identifying common misconfigurations and understanding how to secure them.",
  difficulty: "Advanced",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to Privilege Escalation",
    "Linux User & Permission Model",
    "Windows User & Permission Model",
    "Linux Enumeration",
    "Windows Enumeration",
    "SUID & SGID Binaries",
    "Linux Capabilities",
    "Cron Jobs",
    "PATH Hijacking",
    "Kernel Exploits Basics",
    "Windows Services",
    "Registry Misconfigurations",
     "DLL Hijacking",
     "Always Install Elevated",
     "Scheduled Tasks",
     "Credential Hunting",
     "Automated Enumeration Tools",
     "Privilege Escalation Mitigation",
  ],

  documentation: [
    {
      id: "gtfobins",
      title: "GTFOBins",
      url: "https://gtfobins.github.io/",
      recommended: true,
    },
    {
      id: "lolbas",
      title: "LOLBAS Project",
      url: "https://lolbas-project.github.io/",
    },
    {
      id: "iredteam-privesc",
      title: "ired.team - Privilege Escalation",
      url: "https://www.ired.team/",
    },
  ],

  videos: [
    {
      id: "linux-privesc",
      title: "Linux Privilege Escalation",
      duration: "3h",
      url: "https://youtu.be/ZTnwg3qCdVM?si=iOwJFDs_ojOeeEyK",
    },
    {
      id: "windows-privesc",
      title: "Windows Privilege Escalation",
      duration: "3h 12m",
      url: "https://youtu.be/uTcrbNBcoxQ?si=iHqOQ1rjnbjGkm3d",
    },
  ],

  practice: [
    {
      id: "tryhackme-privesc",
      title: "TryHackMe - Linux & Windows Privilege Escalation",
      description: "Guided Privilege Escalation labs.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox-privesc",
      title: "Hack The Box Academy - Privilege Escalation",
      description: "Professional privilege escalation modules.",
      url: "https://academy.hackthebox.com/",
    },
    {
      id: "vulnhub",
      title: "VulnHub",
      description: "Practice Linux and Windows privilege escalation on vulnerable virtual machines.",
      url: "https://www.vulnhub.com/",
    },
  ],

  projects: [
    {
      title: "Enumerate a Linux System for Privilege Escalation",
      difficulty: "Beginner",
    },
    {
      title: "Exploit Common Windows Misconfigurations",
      difficulty: "Intermediate",
    },
    {
      title: "Perform Complete Linux & Windows Privilege Escalation in a Lab",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "LinPEAS",
      url: "https://github.com/peass-ng/PEASS-ng",
    },
    {
      title: "WinPEAS",
      url: "https://github.com/peass-ng/PEASS-ng",
    },
    {
      title: "LinEnum",
      url: "https://github.com/rebootuser/LinEnum",
    },
    
  ],
},
/*===============================================
                Coud security
   =============================================*/
   {
  id: "cloud-security",
  logo: "/logos/cloud-security.svg",
  title: "Cloud Security",
  description: "Learn how to secure cloud environments by understanding identity management, networking, storage, monitoring, and cloud-specific attack techniques across AWS, Azure, and Google Cloud.",
  difficulty: "Advanced",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to Cloud Computing",
    "Cloud Service Models (IaaS, PaaS, SaaS)",
    "Deployment Models",
    "Shared Responsibility Model",
    "AWS Fundamentals",
    "Azure Fundamentals",
    "Google Cloud Fundamentals",
    "Identity & Access Management (IAM)",
    "Cloud Networking",
    "Storage Security",
    "Secrets Management",
    "Cloud Logging & Monitoring",
     "Container Security",
     "Kubernetes Security Basics",
     "Serverless Security",
     "Cloud Misconfigurations",
     "Cloud Incident Response",
     "Cloud Security Best Practices",
  ],

  documentation: [
    {
      id: "aws-security",
      title: "AWS Security Documentation",
      url: "https://docs.aws.amazon.com/security/",
      recommended: true,
    },
    {
      id: "azure-security",
      title: "Microsoft Azure Security Documentation",
      url: "https://learn.microsoft.com/en-us/azure/security/",
    },
    {
      id: "gcp-security",
      title: "Google Cloud Security Documentation",
      url: "https://cloud.google.com/security",
    },
  ],

  videos: [
    {
      id: "aws-security-course",
      title: "AWS Cloud Security Fundamentals",
      duration: "27m",
      url: "https://youtu.be/XsRBDJ5hcdg?si=8M5qm2WqzUn2XRAO",
    },
    {
      id: "cloud-security-overview",
      title: "Cloud Security Explained",
      duration: "16m",
      url: "https://youtu.be/sF014G2BUXM?si=BjVtaGuv7JdEe8I6",
    },
  ],

  practice: [
    {
      id: "aws-skills-builder",
      title: "AWS Skill Builder",
      description: "Hands-on AWS cloud security labs.",
      url: "https://explore.skillbuilder.aws/",
    },
    {
      id: "microsoft-learn",
      title: "Microsoft Learn",
      description: "Interactive Azure security learning paths.",
      url: "https://learn.microsoft.com/training/",
    },
    {
      id: "google-cloud-skills-boost",
      title: "Google Cloud Skills Boost",
      description: "Hands-on Google Cloud Security labs.",
      url: "https://www.cloudskillsboost.google/",
    },
  ],

  projects: [
    {
      title: "Secure an AWS S3 Bucket",
      difficulty: "Beginner",
    },
    {
      title: "Configure IAM Roles & Least Privilege Access",
      difficulty: "Intermediate",
    },
    {
      title: "Deploy and Secure a Multi-Cloud Application",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "AWS CLI",
      url: "https://aws.amazon.com/cli/",
    },
    {
      title: "Azure CLI",
      url: "https://learn.microsoft.com/en-us/cli/azure/",
    },
    {
      title: "Google Cloud CLI",
      url: "https://cloud.google.com/sdk",
    },
    
  ],
},
/*===============================================
          Digital Forensics
   =============================================*/
   {
  id: "digital-forensics",
  logo: "/logos/digital-forensics.svg",
  title: "Digital Forensics",
  description: "Learn how to investigate cyber incidents by collecting, preserving, analyzing, and reporting digital evidence from computers, networks, and memory..",
  difficulty: "Advanced",
  duration: "4 Weeks",

  learningPath: [
    "Introduction to Digital Forensics",
    "Forensics Process",
    "Chain of Custody",
    "Evidence Collection",
    "Disk Imaging",
    "File Systems",
    "File Recovery",
    "Windows Artifacts",
    "Linux Artifacts",
    "Memory Forensics",
    "Network Forensics",
    "Log Analysis",
     "Timeline Analysis",
     "Malware Analysis Basics",
     "Incident Response",
     "Forensics Reporting",
  ],

  documentation: [
    {
      id: "sans-forensics",
      title: "SANS Digital Forensics",
      url: "https://www.sans.org/digital-forensics/",
      recommended: true,
    },
    {
      id: "autopsy-docs",
      title: "Autopsy Documentation",
      url: "https://sleuthkit.org/autopsy/docs/",
    },
    {
      id: "volatility-docs",
      title: "Volatility Documentation",
      url: "https://volatility3.readthedocs.io/",
    },
  ],

  videos: [
    {
      id: "digital-forensics-course",
      title: "Digital Forensics Full Course",
      duration: "2h 25m",
      url: "https://www.youtube.com/live/SEzeyvqgHzc?si=oWEgGPw8XIIJkVcY",
    },
    {
      id: "memory-forensics",
      title: "Memory Forensics with Volatility",
      duration: "32m",
      url: "https://youtu.be/Uk3DEgY5Ue8?si=XNszzb8xPAFLk2ff",
    },
  ],

  practice: [
    {
      id: "tryhackme-forensics",
      title: "TryHackMe - Digital Forensics",
      description: "Hands-on Digital forensics and incident response labs.",
      url: "https://tryhackme.com/",
    },
    {
      id: "blue-team-labs",
      title: "Blue Team Labs Online",
      description: "Practice forensic investigations and DFIR scenarios.",
      url: "https://blueteamlabs.online/",
    },
    {
      id: "cyberdefenders",
      title: "Cyber Defenders",
      description: "Real-World forensic and incident response challenges.",
      url: "https://cyberdefenders.org/",
    },
  ],

  projects: [
    {
      title: "Investigate a Compromised Windows Machine",
      difficulty: "Beginner",
    },
    {
      title: "Analyze a Memory Dump Using Volatility",
      difficulty: "Intermediate",
    },
    {
      title: "Complete a Full Digital Forensics Investigation and Report",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "Autopsy",
      url: "https://www.autopsy.com/",
    },
    {
      title: "Volatility 3",
      url: "https://github.com/volatilityfoundation/volatility3",
    },
    {
      title: "FTK Imager",
      url: "https://www.exterro.com/ftk-product-downloads",
    },
    
  ],
},
/*===============================================
                Capture the flag
   =============================================*/
   {
  id: "ctf",
  logo: "/logos/ctf.svg",
  title: "Capture The Flag (CTF)",
  description: "Apply your cybersecurity knowledge by solving real-world Capture The Flag challenges across web security, cryptography, reverse engineering, digital forensics, OSINT, binary exploitation, and networking.",
  difficulty: "Advanced",
  duration: "6 Weeks",

  learningPath: [
    "Introduction to CTFs",
    "CTF Categories",
    "Web Exploitation",
    "Cryptography Challenges",
    "Reverse Engineering",
    "Binary Exploitation",
    "Digital Forensics Challenges",
    "OSINT",
    "Steganography",
    "Networking Challenges",
    "Linux Privilege Escalation",
    "Windows Privilege Escalation",
     "Scripting for CTF",
     "Time Management",
     "Writeups & Learning from Solutions",
     "Competitive Teamwork",
  ],

  documentation: [
    {
      id: "ctf101",
      title: "CTF101",
      url: "https://ctf101.org/",
      recommended: true,
    },
    {
      id: "picoctf-guide",
      title: "picoCTF Learning Guide",
      url: "https://picoctf.org/",
    },
    {
      id: "hacktricks",
      title: "HackTricks",
      url: "https://book.hacktricks.wiki/",
    },
  ],

  videos: [
    {
      id: "ctf-course",
      title: "Beginner CTF Walkthrough",
      duration: "22m",
      url: "https://youtu.be/P07NH5F-t3s?si=xbPmqUAJ8nlQZz9E",
    },
    {
      id: "ctf-writeups",
      title: "CTF Challenge Walkthroughs",
      duration: "15m",
      url: "https://youtu.be/JwM8oqPJlDU?si=w7TP9e5bHHwUB7wO",
    },
  ],

  practice: [
    {
      id: "pioctf",
      title: "picoCTF",
      description: "One of the best beginner-friendly Capture The Flag platforms.",
      url: "https://play.picoctf.org/",
    },
    {
      id: "tryhackme",
      title: "TryHackMe",
      description: "Hands-on cybersecurity learning paths and CTF-style rooms.",
      url: "https://tryhackme.com/",
    },
    {
      id: "hackthebox",
      title: "Hack The Box",
      description: "Realistic penetration testing labs and competitive challenges.",
      url: "https://www.hackthebox.com/",
    },
  ],

  projects: [
    {
      title: "Complete Your First Beginner CTF",
      difficulty: "Beginner",
    },
    {
      title: "Solve Challenges from Every CTF Category",
      difficulty: "Intermediate",
    },
    {
      title: "Participate in an Online CTF Competiton and Publish Writeups",
      difficulty: "Advanced",
    },
  ],

  tools: [
    {
      title: "CyberChef",
      url: "https://gchq.github.io/CyberChef/",
    },
    {
      title: "Ghidra",
      url: "https://ghidra-sre.org/",
    },
    {
      title: "pwndbg",
      url: "https://github.com/pwndbg/pwndbg",
    },
    
  ],
},

];