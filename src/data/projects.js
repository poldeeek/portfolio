// project name attribute has to be the same as the name of the file without ext
// for example photo 'image.png' - project name - image

// add new project as first in array

const projects = [
  {
    name: "Portfolio",
    description: "Moje portfolio",
    links: [
      {
        github: "https://github.com/poldeeek/portfolio",
        live: "https://github.com/poldeeek/portfolio",
      },
    ],
    technologies: ["Gatsby.js", "SCSS"],
  },
  {
    name: "DarkSociety",
    description: "Aplikacja typu social media",
    links: [
      {
        github: "https://github.com/poldeeek/social_media_app",
      },
    ],
    technologies: ["React.js", "TypeScript", "SCSS", "Node.js", "MongoDB"],
  },
  {
    name: "Sportim",
    description: "Aplikacja do tworzenia wydarzeń sportowych",
    links: [
      {
        github: "https://github.com/poldeeek/sportim",
      },
    ],
    technologies: ["React.js", "Firebase"],
  },
];

export default projects;
