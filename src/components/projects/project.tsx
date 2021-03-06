import React from 'react';
// import PropTypes from 'prop-types';

import Image from '../Image';

import { IProject } from '../../data/types';
import { ITechnology } from '../../data/types';

interface IProjectProps {
  project: IProject;
}

const Project: React.FC<IProjectProps> = ({ project }) => {
  const { description, links, name, technologies } = project;

  return (
    <div className='project'>
      <div className='project__article'>
        <div className='project__article__describe'>
          <h3>{name}</h3>
          <div className='project__article__describe__text'>{description}</div>
        </div>
        <Image fileName={name} className='project__article__describe__photo' />
      </div>
      <div className='project__info'>
        {technologies &&
          technologies.map((technology: ITechnology) => {
            return (
              <span key={technology} className='project__info__technology'>
                {technology}
              </span>
            );
          })}
        <div className='project__info__links'>
          {links &&
            links.map((link: Object) => {
              const Icon = link.icon;
              return (
                <a
                  aria-label={link.name}
                  key={link.name}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className={`project__info__links__link`}>
                  <Icon />
                  {link.label}
                </a>
              );
            })}
        </div>
      </div>
    </div>
  );
};

/*
Project.propTypes = {
  project: PropTypes.exact({
    description: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        href: PropTypes.string.isRequired,
        icon: PropTypes.func
      })
    ),
    name: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string).isRequired
  }).isRequired
};
*/

export default Project;
