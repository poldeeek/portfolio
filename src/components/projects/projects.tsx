import React from 'react';

import projects from '../../data/projects';
import Project from './project';

import { IProject } from '../../data/types';

const Projects: React.FC = () => {
  if (projects.length === 0) return null;
  return (
    <section className='projects darker-bg' id='projects'>
      <h1 className='half-margin'>Projekty</h1>
      <div>
        {projects &&
          projects.map((project: IProject) => {
            return <Project project={project} key={project.name} />;
          })}
      </div>
    </section>
  );
};

export default Projects;
