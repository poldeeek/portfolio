import React from "react";

import "./experience.scss";

const Job = ({ job }) => {
  const { name, company, duration } = job;
  return (
    <div className='job'>
      <div>{name}</div>
      <div>{company}</div>
      <div>{duration}</div>
    </div>
  );
};

export default Job;
