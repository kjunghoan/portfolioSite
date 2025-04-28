export interface AboutMeContent {
  heading: string;
  subHeading: string;
  image: string;
  content: string[];
}

export interface ContactContent {
  pointOfContact: string;
  logo: string;
  link: string;
}

export interface ProjectContent {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: Tag[];
  type: string;
}

// export interface SkillContent {
//   title: string;
//   logo: string;
//   type: string;
// }

export interface Tag {
  name: string;
  color: string;
}
