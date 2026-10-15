export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: "fullstack" | "frontend" | "backend" | "all";
  tags: string[];
  features: string[];
  architecture: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  level: number;
  icon: string;
  description: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: SkillItem[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  description: string[];
  technologies: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const portfolioData = {
  personal: {
    name: "Prince Tuyizere",
    title: "Information Technology Student & Software Developer",
    tagline: "Passionate about Java, Web Design (HTML/CSS/PHP), Next.js & Node.js to solve real-world problems.",
    status: "IT Student at Rwanda Polytechnic (RP-Kigali College)",
    bio: "Hello! My name is Prince Tuyizere, and I am an Information Technology student at Rwanda Polytechnic, RP-Kigali College, in Rwanda. I am passionate about software development, web design, and technology. I enjoy learning new programming skills and developing systems that solve real-world problems.",
    careerGoal: "My goal is to become a professional software developer, improve my programming skills, and create innovative technology solutions that help people and communities.",
    location: "Kigali, Rwanda (RP-Kigali College)",
    email: "Tuyizereprince04@gmail.com",
    github: "https://github.com/Prince-TP",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    yearsExperience: "Academic",
    projectsCompleted: "Core Systems",
    happyClients: "100%",
    codeContributions: "Active"
  },

  about: {
    heading: "Creating innovative technology solutions that help people and communities.",
    summary: "I am an Information Technology student at Rwanda Polytechnic, RP-Kigali College, dedicated to mastering software development, object-oriented programming, and modern web architectures.",
    careerGoal: "My goal is to become a professional software developer, improve my programming skills, and create innovative technology solutions that help people and communities.",
    highlights: [
      {
        title: "Object-Oriented Programming (Java)",
        desc: "Developing desktop and system applications with clean OOP principles, robust business logic, and problem-solving architectures.",
        icon: "Server"
      },
      {
        title: "Web Design (HTML & CSS)",
        desc: "Creating the structure of web pages and designing attractive, responsive, and mobile-friendly websites.",
        icon: "Layout"
      },
      {
        title: "Backend & Databases (PHP & Node.js)",
        desc: "Developing server-side applications, processing data securely, and connecting dynamic websites to databases.",
        icon: "Zap"
      },
      {
        title: "Modern Web (Next.js & JavaScript)",
        desc: "Expanding into modern web frameworks, component-based architectures, and real-time interactive user experiences.",
        icon: "Cloud"
      }
    ]
  },

  skills: [
    {
      category: "Core Skills & Languages",
      description: "Fundamental languages for web design, server logic, and object-oriented systems",
      skills: [
        { name: "Java", level: 90, icon: "Terminal", description: "Developing applications using object-oriented programming." },
        { name: "HTML", level: 95, icon: "Globe", description: "Creating the structure of web pages." },
        { name: "CSS", level: 92, icon: "Palette", description: "Designing attractive and responsive websites." },
        { name: "PHP", level: 88, icon: "Server", description: "Developing server-side applications and connecting websites to databases." },
        { name: "JavaScript", level: 85, icon: "FileCode", description: "Adding client-side interactivity, DOM handling, and dynamic behaviors." }
      ]
    },
    {
      category: "Modern Web & Backend",
      description: "Full-stack development using Next.js and Node.js",
      skills: [
        { name: "Next.js", level: 86, icon: "Globe", description: "App Router, Server-Side Rendering (SSR), and modern React components." },
        { name: "Node.js", level: 85, icon: "Cpu", description: "Server-side JavaScript runtime, API endpoints, and asynchronous processing." },
        { name: "MySQL & Database Design", level: 88, icon: "Database", description: "Relational table schemas, queries, data relationships, and connectivity." },
        { name: "Tailwind CSS", level: 90, icon: "Palette", description: "Utility-first modern styling for clean, responsive interfaces." }
      ]
    },
    {
      category: "Software Engineering & Tools",
      description: "Engineering methodologies, version control, and problem solving",
      skills: [
        { name: "Object-Oriented Design (OOP)", level: 92, icon: "Layers", description: "Encapsulation, inheritance, polymorphism, and modular architectures." },
        { name: "Git & GitHub", level: 88, icon: "GitBranch", description: "Source code version control, repository management, and collaboration." },
        { name: "System Design & Modeling", level: 85, icon: "Box", description: "Structuring real-world systems, requirements analysis, and ER diagrams." },
        { name: "Problem Solving", level: 94, icon: "CheckCircle", description: "Analytical thinking and algorithmic problem-solving for real-world needs." }
      ]
    }
  ] as SkillCategory[],

  projects: [
    {
      id: "hostel-application-system",
      title: "Hostel Application System",
      tagline: "Java Object-Oriented Software for Automated Student Accommodation",
      description: "I developed a Hostel Application System using Java to help students apply for hostel accommodation. The project aims to make the hostel application process easier, more organized, and efficient.",
      fullDescription: "I developed a Hostel Application System using Java to help students apply for hostel accommodation. The project aims to make the hostel application process easier, more organized, and efficient. It helps demonstrate my skills in software development, system design, and problem-solving using Object-Oriented Programming (OOP) in Java with database record persistence.",
      category: "backend",
      tags: ["Java", "OOP", "System Design", "Database", "Hostel Management", "Software Development"],
      features: [
        "Online/Desktop student application workflow for hostel accommodation",
        "Automated room allocation algorithm ensuring transparent and organized placement",
        "Warden & Administrator management console for tracking applications and room capacities",
        "Rigorous data validation ensuring zero duplicate room assignments or booking conflicts",
        "Clean record-keeping and instant status generation for applying students"
      ],
      architecture: [
        "Object-Oriented Programming (OOP) layered architecture in Java",
        "Model-View-Controller (MVC) separation of business logic, models, and UI",
        "Relational database integration for storing student profiles and rooms",
        "Robust input sanitization and exception handling preventing crashes"
      ],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=1200&q=80",
      githubUrl: "https://github.com/Prince-TP",
      liveUrl: "https://github.com/Prince-TP",
      featured: true
    }
  ] as Project[],

  experience: [
    {
      period: "2024 - Present",
      role: "Information Technology Student",
      company: "Rwanda Polytechnic (RP-Kigali College)",
      location: "Kigali, Rwanda",
      type: "Academic Program",
      description: [
        "Pursuing diploma studies in Information Technology, focusing on software development, web design, and database systems.",
        "Engineered the Hostel Application System in Java using Object-Oriented Programming to streamline accommodation for students.",
        "Built server-side web applications using PHP and MySQL, connecting frontend interfaces to relational database backends.",
        "Designed accessible, attractive, and responsive websites using modern HTML and CSS standards."
      ],
      technologies: ["Java", "OOP", "HTML", "CSS", "PHP", "MySQL", "Git"]
    },
    {
      period: "2023 - 2024",
      role: "Aspiring Software Developer & Project Builder",
      company: "Personal & Academic Projects",
      location: "Kigali, Rwanda",
      type: "Practical Experience",
      description: [
        "Developed software problem-solving skills through hands-on system building and coding challenges.",
        "Practiced object-oriented design patterns, encapsulation, and modular code architecture in Java.",
        "Expanded into modern web development with JavaScript, Node.js, and Next.js to build interactive solutions."
      ],
      technologies: ["Java", "HTML/CSS", "PHP", "JavaScript", "Node.js", "Problem Solving"]
    }
  ] as ExperienceItem[],

  testimonials: [
    {
      name: "Academic Mentor",
      role: "Lecturer in Information Technology",
      company: "RP-Kigali College",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      quote: "Prince is a dedicated Information Technology student who demonstrates strong curiosity and problem-solving skills. His Hostel Application System in Java showed great grasp of OOP and practical software development.",
      rating: 5
    },
    {
      name: "Engineering Peer",
      role: "IT Colleague",
      company: "Rwanda Polytechnic",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      quote: "Collaborating with Prince is always inspiring. He is passionate about writing clean code in Java and PHP, and he always focuses on creating technology that makes a positive difference for our community.",
      rating: 5
    }
  ] as Testimonial[]
};
