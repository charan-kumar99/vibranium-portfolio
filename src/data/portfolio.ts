// ============================================================================
// CHARAN KUMAR — VIBRANIUM PORTFOLIO
// Single source of truth for all portfolio content.
// All data verified from https://charan-kumar99.github.io
// ============================================================================

export interface Profile {
  name: string;
  title: string;
  subtitle: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  website: string;
  bio: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  description?: string;
}

export interface SkillGroup {
  category: string;
  emoji: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tags: string[];
  description: string;
  challenge?: string;
  implementation?: string;
  technologies: string[];
  github?: string;
  live?: string;
  isPrivate?: boolean;
  visual: 'repository' | 'database' | 'finance' | 'analytics' | 'voice' | 'document' | 'portfolio' | 'platform' | 'banking';
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  location?: string;
  details?: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
  area: string;
}

export interface Interest {
  name: string;
  icon: string;
  detail?: string;
}

export interface SimulatorStep {
  id: string;
  label: string;
  description: string;
  component: string;
  color: 'violet' | 'cyan' | 'silver';
}

export interface SimulatorFlow {
  id: string;
  title: string;
  project: string;
  steps: SimulatorStep[];
}

// ─── PROFILE ───────────────────────────────────────────────────────────────
export const profile: Profile = {
  name: 'Charan Kumar',
  title: 'Software Developer',
  subtitle: 'Software Engineer',
  location: 'Udupi, Karnataka, India',
  email: 'charansuvarna99@gmail.com',
  phone: '+91 9380455922',
  github: 'https://github.com/charan-kumar99',
  linkedin: 'https://www.linkedin.com/in/charan-kumar99/',
  website: 'https://charan-kumar99.github.io',
  bio: [
    "I'm a versatile Software Developer currently building scalable backend APIs at AGREMATE Private Limited — India's smart property management platform. Working with ASP.NET Core, Clean Architecture, Docker, and Swagger to power digital rental agreements, automated payments, and community management for properties across India.",
    "Previously developed critical RTGS/NEFT payment processing systems using Microservices Architecture at NTSIPL, serving multiple banks and vendors. Proven expertise in full-stack development, database management across PostgreSQL, MySQL, Oracle Database, and SQL Server, and REST API development.",
    "Passionate about building secure, scalable solutions and continuously expanding technical knowledge while pursuing an MCA alongside full-time employment."
  ],
};

// ─── SKILLS ────────────────────────────────────────────────────────────────
export const skillGroups: SkillGroup[] = [
  {
    category: 'Languages',
    emoji: '💻',
    skills: [
      { name: 'C#', description: 'Primary language for backend development' },
      { name: 'Java', description: 'Enterprise application development' },
      { name: 'JavaScript', description: 'Frontend and full-stack development' },
      { name: 'C', description: 'Systems programming fundamentals' },
      { name: 'HTML5', description: 'Semantic web structure' },
      { name: 'CSS3', description: 'Modern styling and animations' },
      { name: 'Dart', description: 'Cross-platform mobile development' },
      { name: 'Python', description: 'Scripting, automation, and AI' },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    emoji: '🚀',
    skills: [
      { name: 'ASP.NET Core', description: 'Backend API framework for building robust services' },
      { name: 'Flutter', description: 'Cross-platform mobile UI framework' },
      { name: 'Blazor', description: 'Interactive web UIs with C#' },
      { name: 'Razor Pages', description: '.NET server-rendered web pages' },
      { name: 'React', description: 'Component-based frontend library' },
      { name: 'Bootstrap 5', description: 'Responsive UI framework' },
      { name: 'Flask', description: 'Python micro web framework' },
      { name: 'Chart.js', description: 'Data visualization library' },
    ],
  },
  {
    category: 'Databases',
    emoji: '🗄',
    skills: [
      { name: 'PostgreSQL', description: 'Advanced open-source relational database' },
      { name: 'MySQL', description: 'Widely-used relational database' },
      { name: 'Oracle Database', description: 'Enterprise-grade RDBMS' },
      { name: 'SQL Server', description: 'Microsoft relational database' },
      { name: 'SQLite', description: 'Lightweight embedded database' },
      { name: 'Redis', description: 'In-memory data store and cache' },
    ],
  },
  {
    category: 'Tools & Platforms',
    emoji: '🔧',
    skills: [
      { name: 'Jira', description: 'Agile project management' },
      { name: 'Azure DevOps', description: 'CI/CD pipelines and DevOps' },
      { name: 'CI/CD Pipelines', description: 'Automated build and deploy' },
      { name: 'Docker', description: 'Containerized deployments' },
      { name: 'Git', description: 'Version control system' },
      { name: 'GitHub', description: 'Code hosting and collaboration' },
      { name: 'Postman', description: 'API testing and documentation' },
      { name: 'Swagger', description: 'OpenAPI specification tooling' },
      { name: 'VS Code', description: 'Primary code editor' },
      { name: 'Visual Studio', description: '.NET IDE' },
      { name: 'Serilog', description: 'Structured logging for .NET' },
      { name: 'Razorpay', description: 'Payment gateway integration' },
    ],
  },
  {
    category: 'Architecture & Concepts',
    emoji: '🏗',
    skills: [
      { name: 'Clean Architecture', description: 'Separation of concerns pattern' },
      { name: 'Microservices', description: 'Distributed service architecture' },
      { name: 'REST APIs', description: 'HTTP-based service interfaces' },
      { name: 'Entity Framework Core', description: 'ORM for .NET data access' },
      { name: 'LINQ', description: 'Language-integrated queries' },
      { name: 'Agile/Scrum', description: 'Iterative development methodology' },
    ],
  },
];

// ─── PROJECTS ──────────────────────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 'devlens',
    title: 'DevLens Analyzer',
    category: 'AI & Automation',
    tags: ['C#', 'GitHub API', 'Google Gemini', 'React', 'Caching'],
    description: 'A repository analysis platform that examines GitHub projects, calculates engineering metrics across 40+ dimensions, and generates AI-assisted architectural insights using Google Gemini.',
    challenge: 'Building a comprehensive code analysis engine that can parse diverse repository structures and generate meaningful, actionable insights across multiple programming languages.',
    implementation: 'Integrated GitHub API for repository data extraction, built a multi-dimensional metrics engine, and connected Google Gemini for AI-powered architectural analysis with intelligent caching.',
    technologies: ['C#', 'GitHub API', 'Google Gemini', 'Data Visualization', 'Caching'],
    github: 'https://github.com/charan-kumar99/DevLens',
    visual: 'repository',
  },
  {
    id: 'migration-master',
    title: 'Migration Master',
    category: 'Databases',
    tags: ['C#', 'PostgreSQL', 'Binary COPY'],
    description: 'A PostgreSQL migration tool focused on efficient data transfer using Binary COPY protocol for high-performance database migration workflows.',
    challenge: 'Achieving fast, reliable data migration between PostgreSQL databases while maintaining data integrity and minimizing downtime.',
    implementation: 'Leveraged PostgreSQL Binary COPY protocol for bulk data transfer, providing significantly faster migration compared to traditional row-by-row approaches.',
    technologies: ['C#', 'PostgreSQL', 'Binary COPY Protocol'],
    github: 'https://github.com/charan-kumar99/MigrationMaster',
    visual: 'database',
  },
  {
    id: 'advanced-portfolio',
    title: 'Advanced Developer Portfolio',
    category: 'Web',
    tags: ['Next.js', 'React', 'Three.js', 'R3F', 'GROQ'],
    description: 'An interactive portfolio exploring advanced visual effects, 3D rendering, AI integrations, and developer-oriented interface features.',
    technologies: ['Next.js', 'React', 'Framer Motion', 'Three.js', 'React Three Fiber', 'GROQ'],
    github: 'https://github.com/charan-kumar99/charan-kumar99.github.io',
    live: 'https://charan-kumar99.github.io',
    visual: 'portfolio',
  },
  {
    id: 'money-mate',
    title: 'Money Mate Finance',
    category: 'Full-Stack',
    tags: ['Python', 'Flask', 'Finance'],
    description: 'A finance-oriented application focused on budgeting, transactions, and financial data organization built with Flask.',
    technologies: ['Python', 'Flask', 'SQLite', 'HTML/CSS', 'JavaScript'],
    github: 'https://github.com/charan-kumar99/MoneyMate',
    visual: 'finance',
  },
  {
    id: 'cricket-analyzer',
    title: 'Cricket Performance Analyzer',
    category: 'Analytics',
    tags: ['JavaScript', 'Chart.js', 'Analytics'],
    description: 'A cricket performance analysis tool that calculates statistics and presents performance data through interactive charts.',
    technologies: ['JavaScript', 'Chart.js', 'HTML/CSS'],
    github: 'https://github.com/charan-kumar99/CricketAnalyzer',
    visual: 'analytics',
  },
  {
    id: 'orion',
    title: 'Orion Assistant',
    category: 'AI & Automation',
    tags: ['Python', 'Flask', 'Voice', 'AI'],
    description: 'An assistant project focused on speech-driven interaction and task automation using Python and Flask.',
    technologies: ['Python', 'Flask', 'Speech Recognition', 'pyttsx3'],
    github: 'https://github.com/charan-kumar99/Orion',
    visual: 'voice',
  },
  {
    id: 'vaulta',
    title: 'Vaulta Document Manager',
    category: 'Web',
    tags: ['PWA', 'IndexedDB', 'PDF.js'],
    description: 'A document-management Progressive Web App featuring browser-based document workflows using IndexedDB and PDF.js.',
    technologies: ['PWA', 'IndexedDB', 'PDF.js', 'JavaScript'],
    github: 'https://github.com/charan-kumar99/Vaulta',
    visual: 'document',
  },
  {
    id: 'agremate-platform',
    title: 'AGREMATE Property Platform',
    category: 'Backend',
    tags: ['ASP.NET Core', 'PostgreSQL', 'Docker', 'Clean Architecture'],
    description: "India's smart property management platform — digital rental agreements, automated payments via Razorpay, and community management for properties across India.",
    technologies: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Docker', 'Clean Architecture', 'Swagger', 'Razorpay', 'Serilog'],
    isPrivate: true,
    visual: 'platform',
  },
  {
    id: 'rtgs-neft',
    title: 'RTGS/NEFT Banking System',
    category: 'Backend',
    tags: ['ASP.NET Core', 'Microservices', 'SQL Server', 'Enterprise'],
    description: 'Critical RTGS/NEFT payment processing system using Microservices Architecture, serving multiple banks and vendors for real-time and batch fund transfers.',
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Microservices', 'Entity Framework Core'],
    isPrivate: true,
    visual: 'banking',
  },
];

// ─── EXPERIENCE ────────────────────────────────────────────────────────────
export const experience: Experience[] = [
  {
    company: 'AGREMATE Private Limited',
    role: 'Software Developer',
    period: 'Jun 2026 – Present',
    location: 'India',
    description: "Building scalable backend APIs for India's smart property management platform.",
    responsibilities: [
      'Developing RESTful APIs with ASP.NET Core and Clean Architecture',
      'Building property management features: digital rental agreements, automated payments, community management',
      'Integrating Razorpay payment gateway for automated rent collection',
      'Managing PostgreSQL databases with Entity Framework Core',
      'Containerizing applications with Docker',
      'Implementing structured logging with Serilog',
      'API documentation with Swagger/OpenAPI',
    ],
    technologies: ['ASP.NET Core', 'C#', 'PostgreSQL', 'Docker', 'Clean Architecture', 'Swagger', 'Razorpay', 'Serilog', 'Entity Framework Core'],
  },
  {
    company: 'NTSIPL',
    role: 'Trainee Engineer- DotNet',
    period: 'Sep 2025 – Jun 2026',
    location: 'India',
    description: 'Developed critical RTGS/NEFT payment processing systems using Microservices Architecture, serving multiple banks and enterprise vendors.',
    responsibilities: [
      'Built and maintained RTGS/NEFT payment processing microservices with ASP.NET Core and C#',
      'Developed and integrated services serving multiple partner banks and enterprise vendors',
      'Implemented Microservices Architecture patterns, Clean Architecture, and RESTful APIs',
      'Managed relational database persistence with SQL Server and Entity Framework Core',
      'Collaborated in an Agile/Scrum environment with CI/CD delivery using Azure DevOps',
      'Adhered to enterprise development standards, secure coding practices, and code reviews',
    ],
    technologies: ['ASP.NET Core', 'C#', 'SQL Server', 'Microservices', 'Entity Framework Core', 'Azure DevOps'],
  },
];

// ─── EDUCATION ─────────────────────────────────────────────────────────────
export const education: Education[] = [
  {
    institution: 'MIT, Jaipur',
    degree: 'Master of Computer Applications (MCA)',
    period: 'Nov 2025 – Present',
    location: 'Jaipur, Rajasthan',
  },
  {
    institution: 'Udupi College of Professional Studies',
    degree: 'Bachelor of Computer Applications (BCA)',
    period: '2022 – 2025',
    location: 'Udupi, Karnataka',
  },
];

// ─── CERTIFICATIONS ────────────────────────────────────────────────────────
export const certifications: Certification[] = [
  {
    title: 'Data Analytics Internship',
    issuer: 'Internship Program',
    area: 'Data Analytics',
  },
  {
    title: 'Web Development Internship',
    issuer: 'Internship Program',
    area: 'Web Development',
  },
  {
    title: 'Python Internship',
    issuer: 'Internship Program',
    area: 'Python',
  },
  {
    title: 'Cybersecurity Training',
    issuer: 'Training Program',
    area: 'Cybersecurity',
  },
  {
    title: 'AI & Big Data Training',
    issuer: 'Training Program',
    area: 'AI & Big Data',
  },
  {
    title: 'Skill Development Program',
    issuer: 'Development Program',
    area: 'Professional Development',
  },
  {
    title: "NCC 'A' Certificate",
    issuer: 'National Cadet Corps',
    area: 'Leadership & Discipline',
  },
];

// ─── INTERESTS ─────────────────────────────────────────────────────────────
export const interests: Interest[] = [
  { name: 'NCC', icon: '🎖️', detail: 'Best Cadet Award recipient' },
  { name: 'Cricket', icon: '🏏', detail: 'Team captain' },
  { name: 'Volleyball', icon: '🏐', detail: 'Team captain' },
  { name: 'Kabaddi', icon: '🤾', detail: 'Active player' },
  { name: 'Chess', icon: '♟️', detail: 'Strategic thinking' },
  { name: 'Technology Exploration', icon: '🔬', detail: 'Always learning new frameworks' },
  { name: 'Creative Coding', icon: '🎨', detail: 'Merging art and engineering' },
  { name: 'AI Experimentation', icon: '🤖', detail: 'Exploring intelligent systems' },
];

// ─── PROJECT SIMULATOR FLOWS ──────────────────────────────────────────────
export const simulatorFlows: SimulatorFlow[] = [
  {
    id: 'aspnet-api',
    title: 'ASP.NET Core API Workflow',
    project: 'AGREMATE Platform',
    steps: [
      { id: 'client', label: 'Client App', description: 'Mobile or web client sends an HTTP request to the API endpoint.', component: 'Frontend', color: 'cyan' },
      { id: 'endpoint', label: 'API Controller', description: 'ASP.NET Core controller receives the request and validates the route.', component: 'API Layer', color: 'violet' },
      { id: 'middleware', label: 'Middleware Pipeline', description: 'Authentication, authorization, and logging middleware process the request.', component: 'Middleware', color: 'silver' },
      { id: 'service', label: 'Application Service', description: 'Business logic layer processes the domain operation using Clean Architecture.', component: 'Business Logic', color: 'violet' },
      { id: 'efcore', label: 'Entity Framework Core', description: 'ORM translates domain operations into SQL queries.', component: 'Data Access', color: 'cyan' },
      { id: 'database', label: 'PostgreSQL Database', description: 'Relational database executes the query and returns results.', component: 'Database', color: 'violet' },
      { id: 'response', label: 'API Response', description: 'Serialized JSON response is returned to the client through the pipeline.', component: 'API Layer', color: 'cyan' },
    ],
  },
  {
    id: 'devlens-flow',
    title: 'DevLens Analysis Pipeline',
    project: 'DevLens Analyzer',
    steps: [
      { id: 'input', label: 'Repository URL', description: 'User submits a GitHub repository URL for analysis.', component: 'Frontend', color: 'cyan' },
      { id: 'github-api', label: 'GitHub API', description: 'Fetches repository metadata, file tree, commit history, and language stats.', component: 'External API', color: 'violet' },
      { id: 'metrics', label: 'Metrics Engine', description: 'Calculates 40+ engineering metrics across code quality, structure, and activity.', component: 'Analysis', color: 'violet' },
      { id: 'cache', label: 'Cache Layer', description: 'Checks and stores results in cache to avoid redundant API calls.', component: 'Caching', color: 'silver' },
      { id: 'gemini', label: 'Google Gemini', description: 'AI generates architectural insights, suggestions, and code quality assessment.', component: 'AI Engine', color: 'cyan' },
      { id: 'dashboard', label: 'Results Dashboard', description: 'Interactive dashboard displays metrics, charts, and AI-generated insights.', component: 'Frontend', color: 'violet' },
    ],
  },
  {
    id: 'migration-flow',
    title: 'Binary COPY Migration',
    project: 'Migration Master',
    steps: [
      { id: 'source', label: 'Source Database', description: 'Connects to the source PostgreSQL database and reads table schema.', component: 'Source DB', color: 'cyan' },
      { id: 'schema', label: 'Schema Analysis', description: 'Analyzes table structures, constraints, and dependencies for migration planning.', component: 'Analysis', color: 'violet' },
      { id: 'binary-read', label: 'Binary COPY OUT', description: 'Uses PostgreSQL Binary COPY protocol to export data in binary format.', component: 'Data Transfer', color: 'violet' },
      { id: 'transform', label: 'Data Transform', description: 'Applies any necessary data transformations during transit.', component: 'Processing', color: 'silver' },
      { id: 'binary-write', label: 'Binary COPY IN', description: 'Writes data to target database using Binary COPY for maximum throughput.', component: 'Data Transfer', color: 'cyan' },
      { id: 'verify', label: 'Verification', description: 'Validates row counts and data integrity between source and target.', component: 'Validation', color: 'violet' },
    ],
  },
];

// ─── TERMINAL COMMANDS ─────────────────────────────────────────────────────
export const terminalCommands: Record<string, string> = {
  help: `Available commands:
  about       — Learn about Charan Kumar
  skills      — View technical skills
  projects    — List featured projects
  experience  — Professional experience
  education   — Academic background
  contact     — Get in touch
  github      — Open GitHub profile
  linkedin    — Open LinkedIn profile
  clear       — Clear terminal
  
  Type any command to get started.`,

  about: `╔══════════════════════════════════════════════╗
║  CHARAN KUMAR — Software Developer          ║
╠══════════════════════════════════════════════╣
║  ROLE     .NET Developer | Full-Stack Dev   ║
║  COMPANY  AGREMATE Private Limited          ║
║  FOCUS    Backend APIs, Clean Architecture  ║
║  LOCATION Udupi, Karnataka, India           ║
╚══════════════════════════════════════════════╝

Currently building scalable property management
APIs with ASP.NET Core, Docker & PostgreSQL.
Previously developed RTGS/NEFT banking systems
using Microservices Architecture at NTSIPL.`,

  skills: `┌─ LANGUAGES ──────────────────────────────────┐
│  C# · Java · JavaScript · Python · Dart · C │
├─ FRAMEWORKS ─────────────────────────────────┤
│  ASP.NET Core · React · Flutter · Blazor     │
│  Flask · Razor Pages · Bootstrap · Chart.js  │
├─ DATABASES ──────────────────────────────────┤
│  PostgreSQL · SQL Server · MySQL · Oracle    │
│  SQLite · Redis                              │
├─ TOOLS ──────────────────────────────────────┤
│  Docker · Git · Azure DevOps · Jira          │
│  Postman · Swagger · Serilog · Razorpay      │
├─ ARCHITECTURE ───────────────────────────────┤
│  Clean Architecture · Microservices · REST   │
│  Entity Framework Core · LINQ · Agile/Scrum  │
└──────────────────────────────────────────────┘`,

  projects: `[ 9 FEATURED PROJECTS ]

01 │ DevLens Analyzer      │ AI & Automation
02 │ Migration Master      │ Database Engineering
03 │ Advanced Portfolio    │ Creative Engineering
04 │ Money Mate Finance    │ Full-Stack Application
05 │ Cricket Analyzer      │ Analytics
06 │ Orion Assistant       │ AI & Automation
07 │ Vaulta Doc Manager    │ Web Application (PWA)
08 │ AGREMATE Platform     │ Backend (Private)
09 │ RTGS/NEFT System      │ Backend (Private)

Type a project name for details.`,

  experience: `──── PROFESSIONAL TIMELINE ────────────────────

▸ AGREMATE Private Limited
  Software Developer │ Jun 2026 – Present
  Property management APIs, Clean Architecture,
  Docker, PostgreSQL, Razorpay integration

▸ NTSIPL
  Trainee Engineer- DotNet │ Sep 2025 – Jun 2026
  RTGS/NEFT banking microservices, SQL Server,
  Entity Framework Core, Azure DevOps CI/CD`,

  education: `──── ACADEMIC BACKGROUND ──────────────────────

🎓 Master of Computer Applications (MCA)
   MIT, Jaipur │ Nov 2025 – Present

🎓 Bachelor of Computer Applications (BCA)
   Udupi College of Professional Studies
   2022 – 2025`,

  contact: `──── ESTABLISH CONNECTION ─────────────────────

📧  charansuvarna99@gmail.com
📱  +91 9380455922
🔗  github.com/charan-kumar99
🔗  linkedin.com/in/charan-kumar99
🌐  charan-kumar99.github.io`,
};

// ─── NAV ITEMS ─────────────────────────────────────────────────────────────
export const navItems = [
  { id: 'hero', label: 'HOME' },
  { id: 'about', label: 'ABOUT' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'projects', label: 'PROJECTS' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'certifications', label: 'CERTIFICATIONS' },
  { id: 'contact', label: 'CONTACT' },
] as const;

// ─── PROJECT FILTER CATEGORIES ─────────────────────────────────────────────
export const projectFilters = [
  'All',
  'Backend',
  'Full-Stack',
  'Databases',
  'AI & Automation',
  'Analytics',
  'Web',
] as const;
