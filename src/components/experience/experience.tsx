import React from 'react';
import jobs from '../../data/jobs';

import Job from './job';
import { IJob } from '../../data/types';

const Experience: React.FC = () => {
  return (
    <section className='experience' id='experience'>
      <h1 className='half-margin'>Doświadczenie</h1>
      {jobs.map((job: IJob) => (
        <Job job={job} key={job.company} />
      ))}
    </section>
  );
};

export default Experience;
