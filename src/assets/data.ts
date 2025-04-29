import {
  AboutMeContent,
  ContactContent,
  ProjectContent,
  CombinedSkill,
} from '@/types/dataTypes';

export const aboutMeContent: AboutMeContent = {
  heading: 'Jung Hoan Kim',
  subHeading: 'Software Engineer',
  image: '/assets/images/profile-placeholder.svg',
  content: [
    'lorem ipsum dolor sit amet consectetur adipiscing elit. quisque faucibus ex sapien vitae pellentesque sem placerat. in id cursus mi pretium tellus duis convallis. tempus leo eu aenean sed diam urna tempor. pulvinar vivamus fringilla lacus nec metus bibendum egestas. iaculis massa nisl malesuada lacinia integer nunc posuere. ut hendrerit semper vel class aptent taciti sociosqu. ad litora torquent per conubia nostra inceptos himenaeos.',
    'lorem ipsum dolor sit amet consectetur adipiscing elit. quisque faucibus ex sapien vitae pellentesque sem placerat. in id cursus mi pretium tellus duis convallis. tempus leo eu aenean sed diam urna tempor. pulvinar vivamus fringilla lacus nec metus bibendum egestas. iaculis massa nisl malesuada lacinia integer nunc posuere. ut hendrerit semper vel class aptent taciti sociosqu. ad litora torquent per conubia nostra inceptos himenaeos.',
  ],
};

export const contactContent: ContactContent[] = [
  {
    pointOfContact: 'Email',
    logo: '/assets/icons/email.svg',
    link: 'mailto:kjunggoan@gmail.com',
  },
  {
    pointOfContact: 'LinkedIn',
    logo: '/assets/icons/linkedin.svg',
    link: 'https://www.linkedin.com/in/kjunghoan',
  },
  {
    pointOfContact: 'GitHub',
    logo: '/assets/icons/github.svg',
    link: 'https://github.com/kjunghoan',
  },
];

export const skills: Record<string, CombinedSkill> = {
  // Languages
  typescript: {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    logo: '/assets/skills/typescript.svg',
    type: 'language',
    color: '#007ACC',
  },
  javascript: {
    title: 'JavaScript',
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    logo: '/assets/skills/javascript.svg',
    type: 'language',
    color: '#F7DF1E',
  },
  python: {
    title: 'Python',
    link: 'https://www.python.org/',
    logo: '/assets/skills/python.svg',
    type: 'language',
    color: '#3776AB',
  },
  java: {
    title: 'Java',
    link: 'https://www.java.com/',
    logo: '/assets/skills/java.svg',
    type: 'language',
    color: '#007396',
  },
  lua: {
    title: 'Lua',
    link: 'https://www.lua.org/',
    logo: '/assets/skills/lua.svg',
    type: 'language',
    color: '#2C2D72',
  },

  // Frameworks
  react: {
    title: 'React',
    link: 'https://reactjs.org/',
    logo: '/assets/skills/react.svg',
    type: 'framework',
    color: '#61DAFB',
  },
  nextjs: {
    title: 'Next.js',
    link: 'https://nextjs.org/',
    logo: '/assets/skills/nextjs.svg',
    type: 'framework',
    color: '#000000',
  },
  spring: {
    title: 'Spring',
    link: 'https://spring.io/',
    logo: '/assets/skills/spring.svg',
    type: 'framework',
    color: '#6DB33F',
  },
  express: {
    title: 'Express',
    link: 'https://expressjs.com/',
    logo: '/assets/skills/express.svg',
    type: 'framework',
    color: '#000000',
  },
  tailwind: {
    title: 'Tailwind CSS',
    link: 'https://tailwindcss.com/',
    logo: '/assets/skills/tailwind.svg',
    type: 'framework',
    color: '#38B2AC',
  },
  sass: {
    title: 'Sass',
    link: 'https://sass-lang.com/',
    logo: '/assets/skills/sass.svg',
    type: 'framework',
    color: '#CC6699',
  },

  // Databases
  postgresql: {
    title: 'PostgreSQL',
    link: 'https://www.postgresql.org/',
    logo: '/assets/skills/postgresql.svg',
    type: 'database',
    color: '#336791',
  },
  mongodb: {
    title: 'MongoDB',
    link: 'https://www.mongodb.com/',
    logo: '/assets/skills/mongodb.svg',
    type: 'database',
    color: '#47A248',
  },
  mysql: {
    title: 'MySQL',
    link: 'https://www.mysql.com/',
    logo: '/assets/skills/mysql.svg',
    type: 'database',
    color: '#4479A1',
  },
  prisma: {
    title: 'Prisma',
    link: 'https://www.prisma.io/',
    logo: '/assets/skills/prisma.svg',
    type: 'database',
    color: '#2D3748',
  },
  pinecone: {
    title: 'Pinecone',
    link: 'https://www.pinecone.io/',
    logo: '/assets/skills/pinecone.svg',
    type: 'database',
    color: '#000000',
  },

  // Cloud
  aws: {
    title: 'AWS',
    link: 'https://aws.amazon.com/',
    logo: '/assets/skills/aws.svg',
    type: 'cloud',
    color: '#FF9900',
  },
  firebase: {
    title: 'Firebase',
    link: 'https://firebase.google.com/',
    logo: '/assets/skills/firebase.svg',
    type: 'cloud',
    color: '#FFCA28',
  },

  // Tools
  docker: {
    title: 'Docker',
    link: 'https://www.docker.com/',
    logo: '/assets/skills/docker.svg',
    type: 'tool',
    color: '#2496ED',
  },
  git: {
    title: 'Git',
    link: 'https://git-scm.com/',
    logo: '/assets/skills/git.svg',
    type: 'tool',
    color: '#F05032',
  },
  nvim: {
    title: 'Neovim',
    link: 'https://neovim.io/',
    logo: '/assets/skills/neovim.svg',
    type: 'tool',
    color: '#57A143',
  },
  vite: {
    title: 'Vite',
    link: 'https://vitejs.dev/',
    logo: '/assets/skills/vite.svg',
    type: 'tool',
    color: '#646CFF',
  },
  threejs: {
    title: 'Three.js',
    link: 'https://threejs.org/',
    logo: '/assets/skills/threejs.svg',
    type: 'tool',
    color: '#000000',
  },

  // Miscellaneous
  proxmox: {
    title: 'Proxmox',
    link: 'https://www.proxmox.com/',
    logo: '/assets/skills/proxmox.svg',
    type: 'misc',
    color: '#8B0000',
  },
  ceph: {
    title: 'Ceph',
    link: 'https://ceph.io/',
    logo: '/assets/skills/ceph.svg',
    type: 'misc',
    color: '#000000',
  },
  zmk: {
    title: 'ZMK',
    link: 'https://zmk.dev/',
    logo: '/assets/skills/zmk.svg',
    type: 'misc',
    color: '#000000',
  },
  lazy: {
    title: 'Lazy',
    link: 'https://github.com/folke/lazy.nvim',
    logo: '/assets/skills/lazy.svg',
    type: 'tool',
    color: '#2C2D72',
  },
  yarn: {
    title: 'Yarn',
    link: 'https://yarnpkg.com/',
    logo: '/assets/skills/yarn.svg',
    type: 'tool',
    color: '#2C8EBB',
  },
};

export const projectsContent: ProjectContent[] = [
  {
    title: 'NeoVim Config',
    description:
      'A neovim configuration that I use for my development. It is built using Lua and Lazy.',
    image: 'null', // TODO: add image
    link: 'https://github.com/kjunghoan/nvim',
    type: 'config',
    tags: [skills.lua, skills.nvim, skills.lazy],
  },
  // {
  //   title: '',
  //   description:
  //     '',
  //   image: '',
  //   link: '',
  //   type: '',
  //   tags: [],
  // },
  {
    title: 'Alki',
    description:
      'Alki is a platform that uses spaced repetition to helps students and engineers study data-structures and algorithms. It provides a variety of resources and tools to help students study effectively.',
    image: 'null', //TODO: add image
    link: 'https://www.alkiprep.com/',
    type: 'full-stack',
    tags: [skills.react, skills.typescript, skills.spring, skills.mongodb],
  },
  {
    title: 'PortfolioSite',
    description:
      'A portfolio site to showcase my projects and skills. It is built using React and tailwindcss.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/portfolioSite',
    type: 'front-end',
    tags: [
      skills.react,
      skills.typescript,
      skills.tailwind,
      skills.threejs,
      skills.vite,
    ],
  },
  {
    title: 'ZMK Config (Corne 42)',
    description:
      'A ZMK configuration for my Corne 42 keyboard. This is my primary keyboard for day to day work.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/zmk-config',
    type: 'config',
    tags: [skills.zmk],
  },
  {
    title: 'Apt World',
    description:
      'A debian package to see what the user has explicitly installed on their system.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/apt-world-kjh',
    type: 'other',
    tags: [skills.python],
  },
  {
    title: 'Git Config',
    description: 'A git configuration that I use for my development.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/git',
    type: 'config',
    tags: [skills.git],
  },
  {
    title: 'Toolbox',
    description:
      'A collection of docker compose files that I tend to use or reference for my projects.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/tools',
    type: 'other',
    tags: [skills.docker],
  },
  {
    title: 'Rag Chat',
    description:
      'A chat application that uses LLMs along with a vector store to generate responses.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/rag',
    type: 'full-stack',
    tags: [skills.react, skills.typescript, skills.pinecone, skills.postgresql],
  },
  {
    title: 'Ecommerce Microservices Backend',
    description:
      'A microservices backend for an e-commerce application. It is built using Spring and uses Keycloak for auth.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/microservice-new',
    type: 'back-end',
    tags: [skills.spring, skills.mysql, skills.mongodb],
  },
  {
    title: 'Inventory Management App',
    description: 'A serverless inventory management app',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/inventory-management-app',
    type: 'front-end',
    tags: [skills.react, skills.firebase, skills.nextjs],
  },
  {
    title: 'Echos',
    description:
      'A location based note app similar to placing messages in a bottle or geocaching.',
    image: 'null', //TODO: add image
    link: 'https://github.com/kjunghoan/echos',
    type: 'full-stack',
    tags: [
      skills.typescript,
      skills.react,
      skills.nextjs,
      skills.postgresql,
      skills.prisma,
      skills.sass,
    ],
  },
];
