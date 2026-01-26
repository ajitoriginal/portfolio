// ===========================================
// PORTFOLIO DATA - Centralized Configuration
// ===========================================

// Personal Information
export const personalInfo = {
  name: 'Ajit Singh',
  title: 'Software Development Engineer (Full Stack)',
  description: 'Building scalable web applications with modern technologies. Passionate about creating efficient, user-friendly solutions.',
  email: 'ajitsinghoriginal@gmail.com',
  location: 'New Delhi, IN',
  resumeFileName: 'Ajit_Singh_CV.pdf',
};

// Social Links
export const socialLinks = {
  github: 'https://github.com/ajitoriginal',
  linkedin: 'https://www.linkedin.com/in/ajit-original/',
  email: 'mailto:ajitsinghoriginal@gmail.com',
};

// Navigation Menu Items
export const menuItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Posts', href: `${import.meta.env.BASE_URL}posts.html`, external: true },
  { name: 'Contact', href: '#contact' },
];

// About Section - Stats
export const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '10+', label: 'Projects Completed' },
  { value: '15+', label: 'Technologies' },
  { value: '3+', label: 'Happy Companies' },
];

// About Section - Bio Paragraphs
export const aboutBio = [
  'Results-driven Software Engineer with <strong>4+ years of experience</strong> in building and optimizing scalable full-stack web applications. Proven expertise in integrating real-time communication tools, automating financial workflows, and deploying robust cloud-based solutions.',
  'Adept at designing RESTful APIs, optimizing MongoDB queries, and delivering high-performance user interfaces. Collaborative team player with strong communication and leadership skills, committed to agile practices and continuous improvement.',
];

// Skills Data
export const skills = [
  { name: 'Node.js', color: '#339933', url: 'https://nodejs.org' },
  { name: 'Python', color: '#3776AB', url: 'https://www.python.org', isImage: true },
  { name: 'MongoDB', color: '#47A248', url: 'https://www.mongodb.com' },
  { name: 'React', color: '#61DAFB', url: 'https://react.dev' },
  { name: 'JavaScript', color: '#F7DF1E', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', color: '#3178C6', url: 'https://www.typescriptlang.org' },
  { name: 'HTML', color: '#E34F26', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', color: '#1572B6', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'Redux', color: '#764ABC', url: 'https://redux.js.org' },
  { name: 'MySQL', color: '#4479A1', url: 'https://www.mysql.com' },
  { name: 'C++', color: '#00599C', url: 'https://isocpp.org' },
  { name: 'WebSockets', color: '#010101', url: 'https://socket.io' },
  { name: 'Git', color: '#F05032', url: 'https://git-scm.com' },
  { name: 'Docker', color: '#2496ED', url: 'https://www.docker.com' },
  { name: 'Linux', color: '#FCC624', url: 'https://www.linux.org' },
  { name: 'JIRA', color: '#0052CC', url: 'https://www.atlassian.com/software/jira' },
  { name: 'AWS', color: '#FF9900', url: 'https://aws.amazon.com' },
];

// Projects Data
export const projects = [
  {
    title: 'Tech Media Platform',
    description:
      'A professional networking platform for developers featuring public profiles showcasing skills and GitHub projects, social features for sharing insights via posts, likes, and comments, and real-time community engagement built with the MERN stack.',
    technologies: ['Node.js', 'React', 'Redux', 'MongoDB'],
    github: 'https://github.com/ajitoriginal/TechMedia',
    live: 'https://tech-media-platform-ui.onrender.com/',
    gradient: 'var(--gradient-1)',
  },
];

// Posts/Blog Data
export const posts = [
  {
    id: 1,
    title: 'Building Scalable Microservices with Node.js',
    excerpt:
      'Learn how to design and implement microservices architecture using Node.js, Docker, and Kubernetes for production-ready applications.',
    date: 'Dec 15, 2024',
    readTime: '8 min read',
    category: 'Backend',
    tags: ['Node.js', 'Microservices', 'Docker'],
    gradient: 'var(--gradient-primary)',
    featured: true,
  },
  {
    id: 2,
    title: 'React Performance Optimization Techniques',
    excerpt:
      'Discover advanced techniques to optimize React applications including memoization, code splitting, and lazy loading strategies.',
    date: 'Dec 10, 2024',
    readTime: '6 min read',
    category: 'Frontend',
    tags: ['React', 'Performance', 'Optimization'],
    gradient: 'var(--gradient-secondary)',
    featured: true,
  },
  {
    id: 3,
    title: 'Complete Guide to REST API Design',
    excerpt:
      'Best practices for designing RESTful APIs that are scalable, maintainable, and developer-friendly with real-world examples.',
    date: 'Dec 5, 2024',
    readTime: '10 min read',
    category: 'API Design',
    tags: ['REST', 'API', 'Backend'],
    gradient: 'var(--gradient-accent)',
    featured: false,
  },
  {
    id: 4,
    title: 'MongoDB Schema Design Patterns',
    excerpt:
      'Explore common schema design patterns in MongoDB and learn when to embed vs reference documents for optimal performance.',
    date: 'Nov 28, 2024',
    readTime: '7 min read',
    category: 'Database',
    tags: ['MongoDB', 'NoSQL', 'Database'],
    gradient: 'var(--gradient-success)',
    featured: false,
  },
  {
    id: 5,
    title: 'WebSocket vs Server-Sent Events',
    excerpt:
      'A deep dive into real-time communication protocols, comparing WebSockets and SSE with use cases and implementation examples.',
    date: 'Nov 20, 2024',
    readTime: '5 min read',
    category: 'Real-time',
    tags: ['WebSocket', 'SSE', 'Real-time'],
    gradient: 'var(--gradient-primary)',
    featured: false,
  },
  {
    id: 6,
    title: 'Authentication Strategies in Modern Web Apps',
    excerpt:
      'Comprehensive guide to implementing JWT, OAuth 2.0, and session-based authentication with security best practices.',
    date: 'Nov 15, 2024',
    readTime: '9 min read',
    category: 'Security',
    tags: ['Authentication', 'JWT', 'Security'],
    gradient: 'var(--gradient-secondary)',
    featured: false,
  },
];

// Contact Info
export const contactInfo = [
  {
    type: 'email',
    title: 'Email',
    value: 'ajitsinghoriginal@gmail.com',
    link: 'mailto:ajitsinghoriginal@gmail.com',
  },
  {
    type: 'location',
    title: 'Location',
    value: 'New Delhi, IN',
    link: null,
  },
];
