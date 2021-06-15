import React from 'react';
// import PropTypes from 'prop-types';

import { ITechnology } from '../../data/types';

interface ITechnologiesList {
  title: string;
  technologies: ITechnology[];
}

const TechnologiesList: React.FC<ITechnologiesList> = ({
  title,
  technologies
}) => {
  if (technologies.length === 0) {
    return null;
  }

  return (
    <div className='technologies-container'>
      <h3>{title}</h3>
      <div className='technologies-list'>
        {technologies.map((technology: ITechnology) => {
          const Icon = technology.icon ? technology.icon : null;
          return (
            <a
              aria-label={technology.name}
              href={technology.href}
              target='_blank'
              rel='noreferrer'
              className='technologies-list__technology'
              key={technology.name}>
              {Icon && <Icon className='technologies-list__technology__icon' />}
              <div>{technology.name}</div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

/*
TechnologiesList.propTypes = {
  title: PropTypes.string.isRequired,
  technologies: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.func,
      href: PropTypes.string
    })
  )
};
*/

export default TechnologiesList;
