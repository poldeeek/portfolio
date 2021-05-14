import React from 'react';

import projects from '../../data/projects';
import Project from './project';

const Projects = () => {
    if (projects.length === 0) return null;
    return (
        <section className='projects darker-bg' id='projects'>
            <h1 className='half-margin'>Projekty</h1>
            <div>
                {projects &&
                    projects.map((el) => {
                        return <Project project={el} key={el.name} />;
                    })}
            </div>
        </section>
    );
};

export default Projects;
