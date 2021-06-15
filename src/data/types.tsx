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
