import React from "react";

import Image from "../Image";
import { githubIcon } from "../../data/stack";

const Project = ({ project }) => {
  const { description, links, name } = project;
  const Github = githubIcon.icon;
  return (
    <div className='project'>
      <div className='project__text'>
        <h3>{name}</h3>
        <p>{description}</p>
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
