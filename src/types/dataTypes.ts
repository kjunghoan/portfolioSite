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
  image: string | null;
  link: string;
  tags: Tag[];
  type: 'config' | 'full-stack' | 'front-end' | 'back-end' | 'other';
}

interface SkillBase {
  title: string;
  link: string;
}

export interface SkillContent extends SkillBase {
  logo: string;
  type:
    | 'language'
    | 'framework'
    | 'library'
    | 'database'
    | 'cloud'
    | 'tool'
    | 'misc'
    | 'platform'
    | 'other'
    | 'version_control'
    | 'text_editor'
    | 'orm'
    | 'proxy'
    | 'backend_service';
}

export interface Tag extends SkillBase {
  color: string;
}

// Combined interface with all properties
export interface CombinedSkill {
  title: string;
  link: string;
  logo: string;
  type:
    | 'language'
    | 'framework'
    | 'library'
    | 'database'
    | 'cloud'
    | 'tool'
    | 'misc'
    | 'platform'
    | 'other'
    | 'version_control'
    | 'text_editor'
    | 'orm'
    | 'proxy'
    | 'backend_service';
  color: string;
}
