import React from 'react';

import { FaGraduationCap } from '../../data/icons';

const School = ({ school }) => {
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

export default School;
