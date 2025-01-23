export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Skill',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'Wanderlust - Travel Experience Platform',
      desc: 'Wanderlust is a dynamic platform for travelers to discover, plan, and share unique travel experiences. With features like personalized recommendations, real-time itinerary updates, and community engagement, Wanderlust brings your travel dreams to life.',
      subdesc:
      'Built with modern technologies like Next.js, Tailwind CSS, TypeScript, and Convex, Wanderlust is designed for seamless user experiences and high performance across devices.',
    href: 'https://majorproject-1-s930.onrender.com',
    texture: '/textures/project/project.mp4',
    logo: '/assets/projectLogo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Node.js',
        path: '/assets/nodeJs.svg',
      },
      {
        id: 2,
        name: 'MongoDb',
        path: '/assets/mongoDb.svg',
      },
      {
        id: 3,
        name: 'Bootstrap',
        path: '/assets/Bootstrap.svg',
      },
      {
        id: 4,
        name: 'Ejs',
        path: '/assets/ejs.svg',
      },
      {
        id: 5,
        name: 'ExoressJs',
        path: '/assets/expressJs.svg',
      },
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const skills = [
  {
    id: 1,
    name: "JavaScript",
    title: "Dynamic and Interactive Programming Language",
    icon: "/assets/javaScripts.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Node.js",
    title: "Efficient Backend JavaScript Runtime",
    icon: "/assets/nodeJs.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "MongoDB",
    title: "Flexible NoSQL Database",
    icon: "/assets/mongoDb.svg",
    animation: "salute",
  },
  {
    id: 4,
    name: "React.js",
    title: "Component-Based Frontend Library",
    icon: "/assets/react.svg",
    animation: "victory",
  },
  {
    id: 5,
    name: "EJS",
    title: "Dynamic Template Engine",
    icon: "/assets/ejs.svg",
    animation: "salute",
  },
  {
    id: 6,
    name: "Bootstrap",
    title: "Bootstrap",
    icon: "/assets/Bootstrap.svg",
    animation: "clapping",
  },
  
  {
    id: 7,
    name: "Java",
    title: "Robust Object-Oriented Programming Language",
    icon: "/assets/java.svg",
    animation: "clapping",
  },
  {
    id: 8,
    name: "HTML & CSS",
    title: "Foundational Technologies for Web Development",
    icon: "/assets/html.png",
    animation: "salute",
  },
];
