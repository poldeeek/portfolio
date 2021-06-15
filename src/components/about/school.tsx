import React from 'react';
// import PropTypes from 'prop-types';

import { FaGraduationCap } from '../../data/icons';

import { ISchool } from '../../data/types';

interface ISchoolProps {
  school: ISchool;
}

const School: React.FC<ISchoolProps> = ({ school }) => {
  const { duringTime, faculty, schoolName } = school;
  return (
    <div className='school'>
      <FaGraduationCap className='about__additional__icon' />
      <div className='school__info'>
        <p className='faculty'>{faculty}</p>
        <p>{duringTime}</p>
        <p className='school-name'>{schoolName}</p>
      </div>
    </div>
  );
};

/*
School.propTypes = {
    school: PropTypes.shape({
        duringTime: PropTypes.string.isRequired,
        faculty: PropTypes.string.isRequired,
        schoolName: PropTypes.string.isRequired,
    }),
};
*/

export default School;
