import React from 'react';

import './technologies.scss';

import { frontend, backend, database, additional } from '../../data/stack';
import TechnologiesList from './technologiesList';

const Technologies = () => {
    return (
        <section className='darker-bg' id='technologies'>
            <h1 className='half-margin'>Technologie</h1>
            <div>
                <TechnologiesList title='Frontend' technologies={frontend} />
                <TechnologiesList title='Backend' technologies={backend} />
                <TechnologiesList title='Bazy danych' technologies={database} />
                <TechnologiesList title='Dodatkowo' technologies={additional} />
            </div>
        </section>
    );
};

export default Technologies;
