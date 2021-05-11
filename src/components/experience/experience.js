import React from "react";
import jobs from "../../data/jobs";

import "./experience.scss";
import Job from "./job";

const Experience = () => {
  return (
    <section className='experience' id='experience'>
      <h1 className='half-margin'>Doświadczenie</h1>
      {jobs.map((job) => (
        <Job job={job} key={job.company} />
      ))}
    </section>
  );
};

export default Experience;
