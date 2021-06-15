import React from 'react';
// import PropTypes from 'prop-types';

import { IJob } from '../../data/types';

interface IJobProps {
  job: IJob;
}

const Job: React.FC<IJobProps> = ({ job }) => {
  const { name, company, duration, technologies } = job;
  return (
    <div className='job'>
      <div className='job__name'>{name}</div>
      <div className='job__technologies'>
        {technologies &&
          technologies.map((technology, i) => {
            return (
              <span
                key={technology}
                className={`job__technologies__technology ${
                  i === technologies.length - 1
                    ? 'job__technologies__technology__last'
                    : ''
                }`}>
                {technology}
              </span>
            );
          })}
      </div>
      <div className='job__company'>{company}</div>
      <div className='job__duration'>{duration}</div>
    </div>
  );
};

/*
Job.propTypes = {
  job: PropTypes.shape({
    name: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    technologies: PropTypes.arrayOf(PropTypes.string)
  })
};
*/

export default Job;
