import { PortfolioData } from '@/types';

export const portfolioData: PortfolioData = {
    personal: {
        name: 'Arham Topiwala',
        title: 'Full Stack Web Developer',
        subtitle: 'Full Stack Web Developer | Scalable Applications | RESTful API Integrations | Performance Optimization',
        bio: 'Full Stack Web Development professional with 2 years of experience in web design and development and data management & systems. Expert in RESTful API integrations and responsive UI engineering.',
        avatar: '/about/arfazrll.webp',
        location: 'Ahmedabad, Gujarat',
        email: 'topiwalaarham07@gmail.com',
        phone: '+91-95129 59909',
        resumeUrl: '/resume',
        website: 'https://github.com/Arham43-ops',
        languages: [{ name: 'English', level: 'Native' }],
        socialLinks: [
            { platform: 'GitHub', url: 'https://github.com/Arham43-ops', icon: 'github', username: 'Arham43-ops' },
            { platform: 'LinkedIn', url: 'https://linkedin.com/in/arham', icon: 'linkedin', username: 'arham' },
            { platform: 'Instagram', url: 'https://www.instagram.com/wanderlust._.43/', icon: 'instagram', username: 'wanderlust._.43' },
        ],
    },
    projects: [
        {
            id: 'project-glassmorphism-portfolio', slug: 'glassmorphism-portfolio', title: 'Glassmorphism Portfolio',
            description: 'Interactive personal portfolio built with HTML, CSS and JavaScript featuring glassmorphism UI, aurora animations, custom cursor interactions, 3D technology visuals and responsive design.',
            longDescription: 'A polished portfolio website centered around glassmorphism, animated backgrounds, interactive UI elements and responsive presentation.',
            techStack: ['HTML5', 'CSS3', 'JavaScript', 'Three.js', 'Glassmorphism'], tools: ['VS Code', 'GitHub', 'Font Awesome'], status: 'completed',
            repoUrl: 'https://github.com/Arham43-ops/Glassmorphism_Portfolio', demoUrl: '#', startDate: '2025-01-01', role: 'Frontend Developer', customTimeline: 'Portfolio Project', team: 'Personal Project',
            highlights: ['Glassmorphism UI', 'Aurora Background', '3D Tech Cube', 'Custom Cursor', 'Responsive Design'], category: 'Frontend & UI Engineering'
        },
        {
            id: 'project-langsphere', slug: 'langsphere', title: 'LangSphere — AI Language Learning App',
            description: 'Android language-learning application powered by Groq Llama 3 with AI conversations, gamified progression, Firebase leaderboards and Room offline persistence.',
            longDescription: 'LangSphere combines conversational AI, gamification and offline-first Android architecture to create a modern language-learning experience.',
            techStack: ['Kotlin', 'Android', 'Groq AI', 'Llama 3', 'Firebase', 'Room', 'Retrofit', 'Hilt', 'MVVM', 'Material 3'], tools: ['Android Studio', 'Gradle', 'GitHub'], status: 'completed',
            repoUrl: 'https://github.com/Arham43-ops/langsphere-android-app', demoUrl: '#', startDate: '2025-01-01', role: 'Lead Architect & Core Engineer', customTimeline: 'Android Application', team: 'LangSphere Team',
            highlights: ['AI Tutor', 'Dynamic Challenges', 'XP & Streaks', 'Live Leaderboards', 'Offline Learning'], category: 'Android & AI'
        },
        {
            id: 'project-phisguard', slug: 'phisguard', title: 'PhisGuard — AI-Powered Phishing Sentinel',
            description: 'Hybrid cybersecurity platform combining external threat-intelligence APIs with a local RandomForest model for phishing analysis, prediction, email inspection and risk scoring.',
            longDescription: 'PhisGuard analyzes URLs and emails using threat intelligence aggregation and local machine learning, wrapped in a glassmorphism security experience.',
            techStack: ['Python', 'Flask', 'Scikit-Learn', 'RandomForest', 'JavaScript', 'Three.js', 'Chart.js', 'BeautifulSoup4'], tools: ['VS Code', 'GitHub', 'VirusTotal', 'URLScan', 'Safe Browsing APIs'], status: 'completed',
            repoUrl: 'https://github.com/Arham43-ops/PhisGaurd', demoUrl: '#', startDate: '2026-01-01', role: 'Full Stack & AI Engineer', customTimeline: '2026', team: 'Personal / Academic Project',
            highlights: ['Hybrid AI Detection', 'Threat Intelligence', 'ML Risk Prediction', 'EML Analysis', 'Security Dashboard'], category: 'Cybersecurity & AI'
        },
        {
            id: 'project-stockeasy', slug: 'stockeasy', title: 'StockEasy — Online Stock Exchange Platform',
            description: 'Django stock exchange platform with real-time market data, portfolios, watchlists, trading workflows, IPO management, analytics and AI-powered utilities.',
            longDescription: 'StockEasy provides live market data, stock discovery, buy/sell flows, portfolio management, administration, IPO workflows and analytics in a full-stack Django platform.',
            techStack: ['Python', 'Django', 'MySQL', 'JavaScript', 'Streamlit', 'yfinance', 'Redis'], tools: ['VS Code', 'GitHub', 'MySQL', 'Streamlit'], status: 'completed',
            repoUrl: 'https://github.com/Arham43-ops/StockEasy', demoUrl: '#', startDate: '2025-07-20', endDate: '2025-10-07', role: 'Full Stack Developer', customTimeline: 'Jul 2025 - Oct 2025', team: 'Arham & Venisha',
            highlights: ['Real-Time yfinance Data', 'Stock Trading', 'Portfolio & Watchlist', 'IPO Management', 'AI Chatbot', 'Analytics'], category: 'FinTech & Data'
        },
        {
            id: 'project-habit-tracker', slug: 'android-habit-tracker', title: 'Android Habit Tracker',
            description: 'Modern Kotlin habit-tracking app with habit management, daily completion, streaks, progress analytics, reminders, flexible scheduling, dark mode and local persistence.',
            longDescription: 'An Android habit formation application using MVVM, Material Design 3, Room, Hilt and Kotlin Coroutines/Flow.',
            techStack: ['Kotlin', 'Android', 'MVVM', 'Material 3', 'Room', 'Hilt', 'Coroutines', 'Flow'], tools: ['Android Studio', 'Gradle', 'GitHub'], status: 'completed',
            repoUrl: 'https://github.com/Arham43-ops/Android_Habit-Tracker', demoUrl: '#', startDate: '2025-01-01', role: 'Android Developer', customTimeline: 'Android Application', team: 'Personal Project',
            highlights: ['Habit CRUD', 'Daily Tracking', 'Progress Analytics', 'Flexible Scheduling', 'Reminders', 'Dark Mode'], category: 'Android Development'
        },
        {
            id: 'project-flipkart-clone', slug: 'flipkart-clone', title: 'Flipkart Clone — E-commerce Platform',
            description: 'Django e-commerce platform with authentication, product catalog, reviews, wishlist, cart, checkout, order tracking, administration and responsive UI.',
            longDescription: 'A comprehensive marketplace-style Django application covering customer shopping workflows and administrative product, inventory and order management.',
            techStack: ['Python', 'Django 5.2', 'HTML5', 'CSS3', 'Bootstrap', 'JavaScript', 'AJAX'], tools: ['VS Code', 'GitHub', 'Pillow', 'openpyxl', 'ReportLab'], status: 'completed',
            repoUrl: 'https://github.com/Arham43-ops/Flipkart_Clone', demoUrl: '#', startDate: '2024-01-01', role: 'Full Stack Developer', customTimeline: 'E-commerce Project', team: 'Personal Project',
            highlights: ['Product Catalog', 'Cart & Checkout', 'Order Tracking', 'Wishlist', 'Reviews', 'Admin Analytics'], category: 'E-commerce & Django'
        },
        {
            id: 'project-domain-management', slug: 'domain-management-system', title: 'Domain Management System',
            description: 'Java-based domain management application for organizing domain records and supporting structured administrative workflows.',
            longDescription: 'A domain management system focused on centralizing domain information and providing structured administrative operations.',
            techStack: ['Java', 'Database Management', 'CRUD Workflows', 'Web Application'], tools: ['VS Code', 'GitHub'], status: 'completed',
            repoUrl: 'https://github.com/Arham43-ops/Domain-Management-System', demoUrl: '#', startDate: '2024-01-01', role: 'Full Stack Developer', customTimeline: 'Domain Management Application', team: 'Personal Project',
            highlights: ['Domain Records', 'Administrative Workflows', 'CRUD Operations', 'Structured Data'], category: 'Web Applications'
        }
    ],
    experiences: [
        { id: 'prof-1', company: 'ICAT Internship Studio', position: 'Web Design and Development Intern', description: 'Architecting responsive web interfaces, modular REST APIs and performance improvements.', responsibilities: ['Responsive interface engineering', 'RESTful API development', 'Performance optimization', 'Accessibility and security audits', 'Agile collaboration'], skills: ['JavaScript', 'React.js', 'CSS3', 'RESTful APIs', 'Performance Optimization', 'WCAG Accessibility', 'Agile/Scrum'], startDate: '2025-10-01', endDate: '2026-02-01', isOngoing: false, location: 'Remote / Hybrid', type: 'internship', logo: '/experience/icat-logo.png' },
        { id: 'prof-2', company: 'Injala Pvt. Ltd', position: 'Data Management & Systems Specialist (Contract)', description: 'Executing data ingestion and automated validation workflows.', responsibilities: ['Data ingestion and validation', 'Data cleansing', 'Verification protocols', 'Technical documentation'], skills: ['Data Management', 'PostgreSQL', 'SQL', 'Data Cleansing', 'ETL Processing'], startDate: '2025-07-01', endDate: '2025-08-01', isOngoing: false, location: 'Ahmedabad, India', type: 'contract', logo: '/experience/injala-logo.png' },
        { id: 'prof-3', company: 'Genuine Bags', position: 'E-Commerce Operations & Digital Platforms Specialist', description: 'Managing e-commerce workflows, digital catalogs and automation.', responsibilities: ['Product catalog deployment', 'Inventory synchronization', 'Digital order processing', 'Marketplace content management'], skills: ['E-Commerce Platforms', 'Metadata Architecture', 'Automation Scripts', 'Inventory Optimization'], startDate: '2024-06-01', endDate: '2025-07-01', isOngoing: false, location: 'Ahmedabad, India', type: 'full-time', logo: '/experience/genuine-bags-storefront.png' }
    ],
    education: [{ id: 'edu-1', institution: 'L. J. University', degree: 'Bachelor of Science', major: 'Information Technology (BSc IT)', startDate: '2023-08-01', endDate: '2026-06-01', isOngoing: false, gpa: '6.5/8', location: 'Ahmedabad, India', activities: ['Web Development Engineering', 'Database Schema & Query Optimization', 'RESTful API Labs'], achievements: ['Specialized in Full Stack Web Development and Data Systems', 'Engineered modular backend & responsive UI projects'] }],
    achievements: [
        { id: 'ach-cert-01', title: 'AI Infrastructure and Operations Fundamentals', issuer: 'NVIDIA', date: '2026-01-01', description: 'Certificate in AI infrastructure and operations fundamentals.', category: 'certification', image: '/Certificate/AI Infrastructure and Operations Fundamentals.png' },
        { id: 'ach-cert-02', title: 'AI and Machine Learning Algorithms and Techniques', issuer: 'Microsoft', date: '2026-01-01', description: 'Certificate covering AI and machine learning algorithms and techniques.', category: 'certification', image: '/Certificate/AI and Machine Learning Algorithms and Techniques.png' },
        { id: 'ach-cert-03', title: 'Accelerate Your Job Search with AI', issuer: 'Google', date: '2026-01-01', description: 'Certificate for accelerating job-search workflows with AI.', category: 'certification', image: '/Certificate/Accelerate Your Job Search with AI.png' },
        { id: 'ach-cert-04', title: 'Advanced Ethical Hacking & Cybersecurity', issuer: 'Coursera', date: '2026-01-01', description: 'Certificate in advanced ethical hacking and cybersecurity.', category: 'certification', image: '/Certificate/Advanced Ethical Hacking & Cybersecurity.png' },
        { id: 'ach-cert-05', title: 'Website Design and Development Internship', issuer: 'ICAT Internship Studio', date: '2026-02-01', description: 'Certificate for completing the Website Design and Development Internship.', category: 'certification', image: '/Certificate/Arham Topiwala - Website Design and Development Internship - Internship.png' },
        { id: 'ach-cert-06', title: 'Website Design and Development Internship — Offer Letter', issuer: 'ICAT Internship Studio', date: '2025-10-01', description: 'Official internship offer letter for the Website Design and Development Internship.', category: 'certification', image: '/Certificate/Arham Topiwala - Website Design and Development Internship - Offer Letter.png' },
        { id: 'ach-cert-07', title: 'Website Design and Development Internship — Training', issuer: 'ICAT Internship Studio', date: '2026-02-01', description: 'Training certificate associated with the Website Design and Development Internship.', category: 'certification', image: '/Certificate/Arham Topiwala - Website Design and Development Internship - Training.png' },
        { id: 'ach-cert-08', title: 'Building AI Chatbots', issuer: 'Coursera', date: '2025-01-01', description: 'Certificate for building AI-powered chatbots.', category: 'certification', image: '/Certificate/Chatbots.png' },
        { id: 'ach-cert-09', title: 'Create Interactive Dashboards with Streamlit and Python', issuer: 'Coursera', date: '2025-01-01', description: 'Certificate in creating interactive dashboards with Streamlit and Python.', category: 'certification', image: '/Certificate/Create Interactive Dashboards with Streamlit and Python.png' },
        { id: 'ach-cert-10', title: 'Ethical Hacking Specialization', issuer: 'Coursera', date: '2025-01-01', description: 'Certificate for completing the Ethical Hacking Specialization.', category: 'certification', image: '/Certificate/Ethical Hacking Specialization.png' },
        { id: 'ach-cert-11', title: 'Fast Prototyping of GenAI Apps with Streamlit', issuer: 'Coursera', date: '2025-01-01', description: 'Certificate in rapid prototyping of generative AI applications with Streamlit.', category: 'certification', image: '/Certificate/Fast Prototyping of GenAI Apps with Streamlit.png' },
        { id: 'ach-cert-12', title: 'Game Developers and Esports Organizations', issuer: 'Coursera', date: '2025-01-01', description: 'Certificate covering game developers and esports organizations.', category: 'certification', image: '/Certificate/Game Developers and Esports Organizations.png' },
        { id: 'ach-cert-13', title: 'IBM Generative AI for Cybersecurity Professionals', issuer: 'IBM', date: '2025-01-01', description: 'Certificate in generative AI applications for cybersecurity professionals.', category: 'certification', image: '/Certificate/IBM Generative AI for Cybersecurity Professionals.png' },
        { id: 'ach-cert-14', title: 'Introduction to Networking', issuer: 'Cisco', date: '2025-01-01', description: 'Certificate covering foundational computer networking concepts.', category: 'certification', image: '/Certificate/Introduction to Networking.png' },
        { id: 'ach-cert-15', title: 'Oracle Cloud Infrastructure AI Foundations', issuer: 'Oracle', date: '2025-01-01', description: 'Oracle Cloud Infrastructure AI Foundations certificate.', category: 'certification', image: '/Certificate/Oracle Cloud and AI.png' },
        { id: 'ach-cert-16', title: 'Oracle Cloud Infrastructure Generative AI Professional', issuer: 'Oracle', date: '2025-01-01', description: 'Oracle Cloud Infrastructure Generative AI Professional credential.', category: 'certification', image: '/Certificate/Oracle Cloud Infrastructure Generative AI Professional.png' },
        { id: 'ach-cert-17', title: 'Oracle Cloud and AI', issuer: 'Oracle', date: '2025-01-01', description: 'Certificate covering Oracle Cloud and AI concepts.', category: 'certification', image: '/Certificate/Oracle Cloud and AI.png' },
        { id: 'ach-cert-18', title: 'System & Network Security Essentials', issuer: 'Coursera', date: '2025-01-01', description: 'Certificate in system and network security essentials.', category: 'certification', image: '/Certificate/System & Network Security Essentials.png' },
        { id: 'ach-cert-19', title: 'JavaScript Intermediate Certificate', issuer: 'HackerRank', date: '2025-01-01', description: 'Intermediate JavaScript certification.', category: 'certification', image: '/Certificate/javascript_intermediate certificate.png' },
        { id: 'ach-cert-20', title: 'Software Engineer Certificate', issuer: 'HackerRank', date: '2025-01-01', description: 'Software engineering certification.', category: 'certification', image: '/Certificate/software_engineer certificate.png' },
        { id: 'ach-award-01', title: 'Coursera Recognition — Learning Marathon Champion', issuer: 'Coursera', date: '2026-09-10', description: 'Certificate of Recognition awarded as a champion in the Learning Marathon category for extraordinary time investment and dedication to continuous learning on Coursera.', category: 'award', image: '/Certificate/COURSERA-RECOGNITION-CERTIFICATE.svg' },
        { id: 'ach-competition-01', title: 'L J Innovation Village', issuer: 'L. J. University', date: '2026-01-01', description: 'Project showcase and participation at L J Innovation Village with PhisGaurd, an AI-powered cyber-hacking prevention helper.', category: 'competition', image: '/gallery/new-photo-3.jpeg' },
        { id: 'ach-competition-02', title: 'Poster Presentation', issuer: 'L. J. University', date: '2026-01-01', description: 'Poster presentation on the Dark Web ecosystem, challenges, and potential implications.', category: 'competition', image: '/gallery/new-photo-2.jpeg' }
    ],
    techStack: [
        { name: 'JavaScript (ES6+)', icon: 'https://cdn.simpleicons.org/javascript', category: 'language' }, { name: 'TypeScript', icon: 'https://cdn.simpleicons.org/typescript', category: 'language' }, { name: 'HTML5', icon: 'https://cdn.simpleicons.org/html5', category: 'language' }, { name: 'CSS3', icon: 'https://cdn.simpleicons.org/css3', category: 'language' }, { name: 'Python', icon: 'https://cdn.simpleicons.org/python', category: 'language' }, { name: 'SQL', icon: 'https://cdn.simpleicons.org/sqlite', category: 'language' }, { name: 'React.js', icon: 'https://cdn.simpleicons.org/react', category: 'framework' }, { name: 'Next.js', icon: 'https://cdn.simpleicons.org/nextdotjs', category: 'framework' }, { name: 'Node.js', icon: 'https://cdn.simpleicons.org/nodedotjs', category: 'framework' }, { name: 'Express.js', icon: 'https://cdn.simpleicons.org/express', category: 'framework' }, { name: 'TailWind CSS', icon: 'https://cdn.simpleicons.org/tailwindcss', category: 'library' }, { name: 'Bootstrap', icon: 'https://cdn.simpleicons.org/bootstrap', category: 'library' }, { name: 'MySQL', icon: 'https://cdn.simpleicons.org/mysql', category: 'database' }, { name: 'PostgreSQL', icon: 'https://cdn.simpleicons.org/postgresql', category: 'database' }, { name: 'MongoDB', icon: 'https://cdn.simpleicons.org/mongodb', category: 'database' }, { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'tool' }, { name: 'Vercel', icon: 'https://cdn.simpleicons.org/vercel', category: 'cloud' }, { name: 'Netlify', icon: 'https://cdn.simpleicons.org/netlify', category: 'cloud' }
    ],
    hardSkills: [
        { name: 'Full Stack Web Development', level: 'expert', category: 'software', description: 'Web design, responsive UI engineering and data management systems.' }, { name: 'RESTful API Integrations', level: 'expert', category: 'software', description: 'Engineering modular RESTful API endpoints and backend communication layers.' }, { name: 'Web Performance Optimization', level: 'expert', category: 'software', description: 'Performance tuning, code splitting and image optimization.' }, { name: 'Database Management & Schema Design', level: 'advanced', category: 'data', description: 'Relational and NoSQL database design with query optimization.' }, { name: 'Data Cleansing & ETL Processing', level: 'advanced', category: 'data', description: 'Validation scripts, bulk verification and ETL workflows.' }, { name: 'AI & Machine Learning Integration', level: 'intermediate', category: 'ai', description: 'LLM APIs, prompt engineering and ML-powered applications.' }, { name: 'Cloud & DevOps', level: 'intermediate', category: 'devops', description: 'Docker, deployment workflows and CI/CD fundamentals.' }, { name: 'WCAG Accessibility & Security Standards', level: 'advanced', category: 'software', description: 'Accessibility, security and cross-browser standards.' }
    ],
    softSkills: [
        { name: 'Problem Solving', description: 'Efficient debugging, performance tuning and architectural troubleshooting' }, { name: 'Agile / Scrum Methodologies', description: 'Iterative sprint cycles, code reviews and collaborative development' }, { name: 'Technical Documentation', description: 'API, workflow and data documentation' }, { name: 'Cross-Browser Stability & UX', description: 'Seamless user experiences across platforms' }, { name: 'Data Accuracy & Verification', description: 'Rigorous validation and enterprise data management' }
    ],
    tools: [
        { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Visual_Studio_Code_1.35_icon.svg', category: 'ide' }, { name: 'Git', icon: 'https://cdn.simpleicons.org/git', category: 'devops' }, { name: 'GitHub', icon: 'https://cdn.simpleicons.org/github', category: 'devops' }, { name: 'Postman', icon: 'https://cdn.simpleicons.org/postman', category: 'devops' }, { name: 'Docker', icon: 'https://cdn.simpleicons.org/docker', category: 'devops' }, { name: 'npm/yarn', icon: 'https://cdn.simpleicons.org/npm', category: 'productivity' }, { name: 'Webpack', icon: 'https://cdn.simpleicons.org/webpack', category: 'devops' }
    ],
    faqs: [
        { question: 'What services do you offer?', answer: 'Full Stack Web Development, RESTful API Engineering, Performance Optimization, Database Management and AI LLM API Integrations.' },
        { question: 'Are you available for positions or collaborations?', answer: 'Yes. I am seeking Full Stack Web Developer roles, remote/hybrid contracts and software engineering opportunities.' }
    ],
    blogs: [
        { id: 'blog-1', slug: 'optimizing-web-performance-38-percent-boost', title: 'Accelerating Page Load Velocities by 38%: A Performance Engineering Guide', excerpt: 'How code splitting, image optimization and performance tuning improve Core Web Vitals.', content: 'Detailed techniques for web performance optimization...', image: '/blog/performance.webp', date: '2026-02-01', category: 'software-development', tags: ['Performance', 'Web', 'Optimization'], author: { name: 'Arham Topiwala', avatar: '/about/arfazrll.webp' }, readTime: '8 min read' },
        { id: 'blog-2', slug: 'hybrid-ai-phishing-detection', title: 'Hybrid AI Threat Detection: Combining Intelligence APIs with Local ML', excerpt: 'Designing a resilient phishing detection pipeline that blends external intelligence with local machine learning.', content: 'Hybrid cybersecurity architecture...', image: '/blog/security.webp', date: '2026-01-15', category: 'applied-ai', tags: ['AI', 'Cybersecurity', 'ML'], author: { name: 'Arham Topiwala', avatar: '/about/arfazrll.webp' }, readTime: '10 min read' },
        { id: 'blog-3', slug: 'building-realtime-fintech-platform', title: 'Building a Real-Time FinTech Platform with Django', excerpt: 'Lessons from building StockEasy around live market data, portfolio workflows and administration.', content: 'FinTech system design...', image: '/blog/fintech.webp', date: '2025-11-01', category: 'software-development', tags: ['Django', 'FinTech', 'APIs'], author: { name: 'Arham Topiwala', avatar: '/about/arfazrll.webp' }, readTime: '9 min read' },
        { id: 'blog-4', slug: 'ai-native-mobile-learning', title: 'Designing AI-Native Mobile Learning Experiences', excerpt: 'How conversational AI, gamification and offline persistence work together in Android apps.', content: 'AI mobile application design...', image: '/blog/mobile-ai.webp', date: '2025-10-15', category: 'applied-ai', tags: ['Android', 'AI', 'Kotlin'], author: { name: 'Arham Topiwala', avatar: '/about/arfazrll.webp' }, readTime: '7 min read' },
        { id: 'blog-5', slug: 'secure-ecommerce-django', title: 'Engineering a Secure Django E-Commerce Workflow', excerpt: 'Architecture patterns for authentication, orders, inventory and admin workflows.', content: 'Django e-commerce engineering...', image: '/blog/ecommerce.webp', date: '2025-09-01', category: 'software-development', tags: ['Django', 'E-commerce', 'Security'], author: { name: 'Arham Topiwala', avatar: '/about/arfazrll.webp' }, readTime: '8 min read' },
        { id: 'blog-6', slug: 'domain-management-at-scale', title: 'A Practical Domain Management System Architecture', excerpt: 'Organizing domain records and administration workflows with maintainable architecture.', content: 'Domain management architecture...', image: '/blog/domain.webp', date: '2025-08-20', category: 'software-development', tags: ['Web', 'Database', 'CRUD'], author: { name: 'Arham Topiwala', avatar: '/about/arfazrll.webp' }, readTime: '6 min read' }
    ],
    gallery: [],
};
