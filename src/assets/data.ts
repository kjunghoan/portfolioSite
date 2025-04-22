import {
  AboutMeContent,
  ContactContent,
  ProjectContent,
  SkillContent,
  Tag,
} from '@/types/dataTypes';

interface TagCollection {
  [key: string]: Tag;
}
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

export const tags: TagCollection = {
  lua: {
    name: 'Lua',
    color: '#2C2D72',
  },
  nvim: {
    name: 'Neovim',
    color: '#57A143',
  },
  lazy: {
    name: 'Lazy',
    color: '#2C2D72',
  },
  react: {
    name: 'React',
    color: '#61DAFB',
  },
  spring: {
    name: 'Spring',
    color: '#6DB33F',
  },
  typescript: {
    name: 'TypeScript',
    color: '#007ACC',
  },
  mongodb: {
    name: 'MongoDB',
    color: '#47A248',
  },
  tailwind: {
    name: 'Tailwind CSS',
    color: '#38B2AC',
  },

  threejs: {
    name: 'Three.js',
    color: '#000000',
  },
  vite: {
    name: 'Vite',
    color: '#646464',
  },
  postgresql: {
    name: 'PostgreSQL',
    color: '#336791',
  },
  nextjs: {
    name: 'Next.js',
    color: '#000000',
  },
  express: {
    name: 'Express',
    color: '#000000',
  },
  mysql: {
    name: 'MySQL',
    color: '#4479A1',
  },
  yarn: {
    name: 'Yarn',
    color: '#2C8EBB',
  },
  docker: {
    name: 'Docker',
    color: '#2496ED',
  },
  aws: {
    name: 'AWS',
    color: '#FF9900',
  },
  proxmox: {
    name: 'Proxmox',
    color: '#8B0000',
  },
  ceph: {
    name: 'Ceph',
    color: '#000000',
  },
};

export const projectsContent: ProjectContent[] = [
  {
    title: 'NeoVim Config',
    description:
      'A neovim configuration that I use for my development. It is built using Lua and Lazy.',
    image: '',
    link: 'https://github.com/kjunghoan/nvim',
    type: 'config',
    tags: [tags.lua, tags.nvim, tags.lazy],
  },
  {
    title: 'Alki',
    description:
      'Alki is a platform that uses spaced repetition to helps students and engineers study data-structures and algorithms. It provides a variety of resources and tools to help students study effectively.',
    image: '/assets/images/alki.png',
    link: 'https://www.alkiprep.com/',
    type: 'full-stack',
    tags: [tags.react, tags.typescript, tags.spring, tags.mongodb],
  },
  {
    title: 'PortfolioSite',
    description:
      'A portfolio site to showcase my projects and skills. It is built using React and tailwindcss.',
    image: '/assets/images/alki.png',
    link: 'https://github.com/kjunghoan/portfolioSite',
    type: 'frontend',
    tags: [tags.react, tags.typescript, tags.tailwind, tags.threejs, tags.vite],
  },
];
export const skillsContent: SkillContent[] = [];
