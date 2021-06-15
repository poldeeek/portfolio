// add new job as first in array

type IJobs = Array<{
  name: string;
  company: string;
  technologies: Array<string>;
  duration: string;
}>;

const jobs: IJobs = [
  {
    name: 'Full-Stack Web Developer',
    company: 'Photocrowd Ltd',
    technologies: ['React.js', 'Less', 'React Relay', 'GraphQL', 'Django'],
    duration: 'grudzień 2020 - marzec 2021'
  }
];

export default jobs;
