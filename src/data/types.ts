export interface IProject {
  description: string;
  links: Array<{
    name: string;
    label: string;
    href: string;
    icon: Function;
  }>;
  name: string;
  technologies: Array<string>;
}

export interface ITechnology {
  name: string;
  icon?: Function;
  href?: string;
}

export interface IJob {
  name: string;
  company: string;
  technologies: Array<string>;
  duration: string;
}

export interface ISchool {
  duringTime: string;
  faculty: string;
  schoolName: string;
}

export interface ILanguage {
  name: string;
  level: string;
}
