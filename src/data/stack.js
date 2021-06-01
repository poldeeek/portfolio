import {
    SiJavascript,
    SiTypescript,
    SiReact,
    SiGatsby,
    SiCss3,
    SiNodeDotJs,
    SiDjango,
    SiFirebase,
    SiGraphql,
    SiJest,
    DiSass,
    DiLess,
    DiMongodb,
    DiMysql,
} from './icons';

const frontend = [
    {
        name: 'JavaScript',
        icon: SiJavascript,
        href: 'https://www.javascript.com/',
    },
    {
        name: 'TypeScript',
        icon: SiTypescript,
        href: 'https://www.typescriptlang.org/',
    },
    {
        name: 'React.js',
        icon: SiReact,
        href: 'https://pl.reactjs.org/',
    },
    {
        name: 'Jest',
        icon: SiJest,
        href: 'https://jestjs.io/',
    },
    {
        name: 'React Relay',
        href: 'https://relay.dev/',
    },
    {
        name: 'Gatsby.js',
        icon: SiGatsby,
        href: 'https://www.gatsbyjs.com/',
    },
    {
        name: 'CSS',
        icon: SiCss3,
        href: 'https://www.w3.org/Style/CSS/Overview.en.html',
    },
    {
        name: 'SCSS',
        icon: DiSass,
        href: 'https://sass-lang.com/',
    },
    {
        name: 'Less',
        icon: DiLess,
        href: 'https://less.app/',
    },
];

const backend = [
    {
        name: 'Node.js',
        icon: SiNodeDotJs,
        href: 'https://nodejs.org/',
    },
    {
        name: 'Django',
        icon: SiDjango,
        href: 'https://www.djangoproject.com/',
    },
];

const database = [
    {
        name: 'MongoDB',
        icon: DiMongodb,
        href: 'https://www.mongodb.com/',
    },
    {
        name: 'Firebase',
        icon: SiFirebase,
        href: 'https://firebase.google.com/?hl=pl',
    },
    {
        name: 'MySQL',
        icon: DiMysql,
        href: 'https://www.mysql.com/',
    },
];

const additional = [
    {
        name: 'GraphQL',
        icon: SiGraphql,
        href: 'https://graphql.org/',
    },
    {
        name: 'REST API',
        href: 'https://restfulapi.net/',
    },
    {
        name: 'RWD',
        href: 'https://www.w3schools.com/html/html_responsive.asp',
    },
];

export { frontend, backend, database, additional };
