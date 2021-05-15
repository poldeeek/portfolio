// project name attribute has to be the same as the name of the file without ext
// for example photo 'image.png' - project name - image

// add new project as first in array
import { githubIcon, liveIcon } from './icons';

const projects = [
    {
        name: 'Portfolio',
        description: 'Moje portfolio',
        links: [
            {
                name: 'github',
                label: 'GitHub',
                href: 'https://github.com/poldeeek/portfolio',
                icon: githubIcon.icon,
            },
            {
                name: 'live',
                label: 'Live',
                href: 'https://pawel-portfolio.netlify.app/',
                icon: liveIcon.icon,
            },
        ],
        technologies: ['Gatsby.js', 'SCSS'],
    },
    {
        name: 'DarkSociety',
        description: 'Aplikacja typu social media',
        links: [
            {
                name: 'github',
                label: 'GitHub',
                href: 'https://github.com/poldeeek/social_media_app',
                icon: githubIcon.icon,
            },
        ],
        technologies: ['React.js', 'TypeScript', 'SCSS', 'Node.js', 'MongoDB'],
    },
    {
        name: 'Sportim',
        description: 'Aplikacja do tworzenia wydarzeń sportowych',
        links: [
            {
                name: 'github',
                label: 'GitHub',
                href: 'https://github.com/poldeeek/sportim',
                icon: githubIcon.icon,
            },
        ],
        technologies: ['React.js', 'Firebase'],
    },
];

export default projects;
