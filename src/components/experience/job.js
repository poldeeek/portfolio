import React from "react";

import "./experience.scss";

const Job = ({ job }) => {
  const { name, company, duration } = job;
  return (
    <div className='job'>
      <div className='job__name'>{name}</div>
      <div className='job__company'>{company}</div>
      <div className='job__duration'>{duration}</div>
    </div>
  );
};

export default Job;
