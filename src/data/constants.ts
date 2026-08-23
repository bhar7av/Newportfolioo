export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  NEXTJS = "nextjs",
  TAILWIND = "tailwind",
  NODEJS = "nodejs",
  EXPRESS = "express",
  POSTGRES = "postgres",
  MONGODB = "mongodb",
  GIT = "git",
  GITHUB = "github",
  DOCKER = "docker",
  LINUX = "linux",
  GCP = "gcp",
  AWS = "aws",
}

export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};

export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "Python",
    shortDescription: "Primary language for ML, scripting, and backend automation. 🐍🔥",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "C++ & Java",
    shortDescription: "Object-oriented programming, data structures, and system development. 💻🚀",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML5",
    shortDescription: "Responsive page structuring and semantic web layout. 🌐🔥",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS3 & Tailwind",
    shortDescription: "Styling layout grids, utility classes, and custom keyframe animations. 🎨✨",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React & Next.js",
    shortDescription: "Building interactive user interfaces, components, and static web apps. ⚛️",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.NEXTJS]: {
    id: 7,
    name: "nextjs",
    label: "FastAPI & Flask",
    shortDescription: "Developing high-performance REST APIs, webhook integration, and routing. ⚡",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "SQL & Databases",
    shortDescription: "PostgreSQL, SQLite, ChromaDB vector stores, and relational schema querying. 🗄️",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  [SkillNames.NODEJS]: {
    id: 9,
    name: "nodejs",
    label: "Generative AI & RAG",
    shortDescription: "RAG pipelines, Gemini API integration, and vector searches. 🧠",
    color: "#6cc24a",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.EXPRESS]: {
    id: 10,
    name: "express",
    label: "TensorFlow & XGBoost",
    shortDescription: "Training deep learning LSTM models and ensembling regression trees. 📊",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
  [SkillNames.POSTGRES]: {
    id: 11,
    name: "postgres",
    label: "Pandas & NumPy",
    shortDescription: "Structured data analysis, matrix operations, and feature manipulation. 🐼",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
  },
  [SkillNames.MONGODB]: {
    id: 12,
    name: "mongodb",
    label: "Scikit-Learn",
    shortDescription: "Classical machine learning models, model validation, and metrics. 📈",
    color: "#336791",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.GIT]: {
    id: 13,
    name: "git",
    label: "Git",
    shortDescription: "Version control for tracking code history and branching. 🔄",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 14,
    name: "github",
    label: "GitHub & Deployment",
    shortDescription: "Remote hosting, collaborative pull requests, Vercel, and Render. 🐙",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.DOCKER]: {
    id: 20,
    name: "docker",
    label: "OOP & System Design",
    shortDescription: "Encapsulation, inheritance, modular APIs, and relational design. 🧱",
    color: "#2496ed",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  },
  [SkillNames.LINUX]: {
    id: 19,
    name: "linux",
    label: "Linux & Terminal",
    shortDescription: "Bash shell scripting, file management, and dev environment configuration. 🐧",
    color: "#fff",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
  [SkillNames.GCP]: {
    id: 25,
    name: "gcp",
    label: "NLP Research",
    shortDescription: "Parsing natural language into semantic graphs, UMR parsing. 🗣️",
    color: "#4285f4",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.AWS]: {
    id: 22,
    name: "aws",
    label: "C Language",
    shortDescription: "Low-level system programming, memory layouts, and algorithm design. ⚙️",
    color: "#ff9900",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
  },
};

export type Experience = {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  company: string;
  description: string[];
  skills: SkillNames[];
};

export const EXPERIENCE: Experience[] = [
  {
    id: 1,
    startDate: "Apr 2026",
    endDate: "Present",
    title: "Founder & Full-Stack Developer",
    company: "TutorNestJK (EdTech Platform)",
    description: [
      "Founded and independently developed a full-stack EdTech platform connecting students with tutors for personalized academic support.",
      "Designed and implemented the platform website, user workflows, database integration, and deployment infrastructure.",
      "Managed tutor onboarding, student coordination, product development, outreach, and platform operations.",
      "Led product and growth initiatives from initial concept through deployment and operational execution."
    ],
    skills: [
      SkillNames.REACT,
      SkillNames.NEXTJS,
      SkillNames.TAILWIND,
      SkillNames.GIT,
      SkillNames.GITHUB,
    ],
  },
  {
    id: 2,
    startDate: "2025",
    endDate: "2025",
    title: "Research Intern",
    company: "Indian Institute of Technology, Jammu (IIT Jammu)",
    description: [
      "Built a UMR parser for converting natural language into structured semantic graphs.",
      "Developed Python pipelines for structured linguistic processing, data transformation, and NLP workflows.",
      "Contributed to research-oriented workflows involving natural language processing and semantic representation."
    ],
    skills: [
      SkillNames.JS,
      SkillNames.GCP,
      SkillNames.GIT,
    ],
  },
  {
    id: 3,
    startDate: "Dec 2024",
    endDate: "Jan 2025",
    title: "C++ Game Development Intern",
    company: "INTERPE",
    description: [
      "Developed three console-based games using C++ with modular object-oriented design.",
      "Applied OOP, STL, file handling, and core C++ programming concepts during development."
    ],
    skills: [
      SkillNames.TS,
      SkillNames.DOCKER,
      SkillNames.AWS,
    ],
  },
];

export type Education = {
  id: number;
  startDate: string;
  endDate: string;
  degree: string;
  school: string;
  grade: string;
  details: string;
};

export const EDUCATION: Education[] = [
  {
    id: 1,
    startDate: "2024",
    endDate: "2028",
    degree: "B.Tech in Information Technology",
    school: "National Institute of Technology, Srinagar",
    grade: "CGPA: 8.0 (till 3rd sem)",
    details: "Currently pursuing B.Tech in IT. Serving as Class Representative coordinating communication between faculty and IT branch student body. Engaged in competitive programming and front-end development.",
  },
  {
    id: 2,
    startDate: "2024",
    endDate: "2024",
    degree: "Class XII — PCMB",
    school: "BSF Senior Secondary School, Paloura Jammu",
    grade: "Percentage: 86.8%",
    details: "Achieved 15th rank in the highly competitive state-level JK-CET entrance exam. Mentored 25+ CBSE school students in Physics, Chemistry, and Mathematics.",
  },
  {
    id: 3,
    startDate: "2020",
    endDate: "2020",
    degree: "Class X",
    school: "BSF Senior Secondary School, Paloura Jammu",
    grade: "Percentage: 94.6%",
    details: "Top performer at school level with 94.6% in Class X board examinations.",
  },
];

export type Achievement = {
  id: number;
  value: string;
  title: string;
  description: string;
  emoji: string;
};

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 1,
    value: "#15",
    title: "JK-CET Rank",
    description: "15th rank in the highly competitive JK-CET 2024 conducted by JK-BOPE",
    emoji: "🏆",
  },
  {
    id: 2,
    value: "SSB",
    title: "Conference Selected Candidate",
    description: "Selected as Conference Selected Candidate from SSB — demonstrating mental aptitude & leadership",
    emoji: "🎖️",
  },
  {
    id: 3,
    value: "CR",
    title: "Class Representative",
    description: "Leading IT branch student body since Aug 2024 — coordinating faculty-student communication",
    emoji: "👨‍💼",
  },
  {
    id: 4,
    value: "3,000+",
    title: "Content Creator",
    description: "Active creator with 3,000+ followers on Instagram. Proficient in Premiere Pro, CapCut & After Effects",
    emoji: "📱",
  },
  {
    id: 5,
    value: "25",
    title: "Student Mentor",
    description: "Guided 25+ CBSE students (Grades 10-12) in Science subjects, fostering learning & growth",
    emoji: "🎓",
  },
  {
    id: 6,
    value: "94.6%",
    title: "Academic Topper",
    description: "Top performer at school level with 94.6% in Class X board examinations",
    emoji: "⭐",
  },
];

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};
