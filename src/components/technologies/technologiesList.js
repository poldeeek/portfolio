import React from "react";

import "./technologies.scss";

const TechnologiesList = ({ title, technologies }) => {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <div className='technologies-container'>
      <h3>{title}</h3>
      <div className='technologies-list'>
        {technologies.map((technology) => {
          const Icon = technology.icon ? technology.icon : null;
          return (
            <a
              aria-label={technology.name}
              href={technology.href}
              target='_blank'
              rel='noreferrer'
              className='technologies-list__technology'
              key={technology.name}
            >
              {Icon && <Icon className='technologies-list__technology__icon' />}
              <div>{technology.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default TechnologiesList;
