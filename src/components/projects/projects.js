import React from 'react';

import projects from '../../data/projects';
import Project from './project';
import './projects.scss';

const Projects = () => {
    if (projects.length === 0) return null;
    console.log(projects);
    return (
        <section className='projects darker-bg' id='projects'>
            <h1 className='half-margin'>Projekty</h1>
            <div>
                {projects &&
                    projects.map((el) => {
                        console.log(el);
                        return <Project project={el} key={el.name} />;
                    })}
            </div>
        </section>
    );
};

export default Projects;
