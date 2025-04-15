import {
  AboutMeContent,
  ContactContent,
  ProjectContent,
  SkillContent,
} from '@/types/dataTypes';
import data from './data.json' assert { type: 'json' };

export const aboutMeContent: AboutMeContent = data.aboutMe;
export const contactContent: ContactContent[] = data.contact;
export const projectsContent: ProjectContent[] = data.projects;
export const skillsContent: SkillContent[] = data.skills;
