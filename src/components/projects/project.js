import React from "react";

import Image from "../Image";
import { githubIcon } from "../../data/stack";

const Project = ({ project }) => {
  const { description, links, name, technologies } = project;
  const Github = githubIcon.icon;
  return (
    <div className='project'>
      <div className='project__text'>
        <h3>{name}</h3>
        <div className='project__desc'>{description}</div>
        {technologies &&
          technologies.map((technology) => {
            return (
              <span key={technology} className='project__technology'>
                {technology}
              </span>
            );
          })}
        {links &&
          links.map((link) => {
            return (
              <a
                key={link.github}
                href={link.github}
                className={`project__link project__link--${
                  Object.getOwnPropertyNames(link)[0]
                }`}
              >
                <Github />
                {githubIcon.name}
              </a>
            );
          })}
      </div>
      <Image fileName='DarkSociety' className='project__photo' />
    </div>
  );
};

export default Project;
