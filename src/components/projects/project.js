import React from 'react';

import Image from '../Image';

const Project = ({ project }) => {
    const { description, links, name, technologies } = project;

    return (
        <div className='project'>
            <div className='project__article'>
                <div className='project__article__describe'>
                    <h3>{name}</h3>
                    <div className='project__article__describe__text'>
                        {description}
                    </div>
                </div>
                <Image
                    fileName={name}
                    className='project__article__describe__photo'
                />
            </div>
            <div className='project__info'>
                {technologies &&
                    technologies.map((technology) => {
                        return (
                            <span
                                key={technology}
                                className='project__info__technology'>
                                {technology}
                            </span>
                        );
                    })}
                <div className='project__info__links'>
                    {links &&
                        links.map((link) => {
                            const Icon = link.icon;
                            return (
                                <a
                                    aria-label={link.name}
                                    key={link.name}
                                    href={link.href}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={`project__info__links__link`}>
                                    <Icon />
                                    {link.label}
                                </a>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default Project;
