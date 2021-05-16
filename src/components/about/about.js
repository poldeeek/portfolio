import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FaEnvelope, FaGithub } from '../../data/icons';

import education from '../../data/education';
import School from './school';

const About = () => {
    const data = useStaticQuery(graphql`
        query Photo {
            file(relativePath: { eq: "avatar.webp" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return (
        <div className='about' id='about'>
            <div className='about__profile'>
                <Img
                    fluid={data.file.childImageSharp.fluid}
                    className='about__profile__photo'
                    loading='lazy'
                />
                <div className='about__profile__title'>
                    <h2 className='about__profile__title__name'>Paweł Polak</h2>
                    <span>Absolwent informatyki inżynierskiej</span>
                    <span className='about__profile__title__university'>
                        Uniwersytetu Mikołaja Kopernia w Toruniu
                    </span>
                    <div className='about__profile__icons'>
                        <a
                            aria-label='E-mail'
                            href='mailto:pawelp258@gmail.com'
                            target='_blank'
                            rel='noreferrer'>
                            <FaEnvelope className='about__profile__icon' />
                        </a>
                        <a
                            aria-label='GitHub'
                            href='https://github.com/poldeeek'
                            target='_blank'
                            rel='noreferrer'>
                            <FaGithub className='about__profile__icon' />
                        </a>
                    </div>
                </div>
            </div>
            <div className='about__biography'>
                <h1 className='half-margin'>O mnie</h1>
                <article>
                    <p>
                        Jestem absolwentem informatyki inżynierskiej na wydziale
                        Matematyki i Informatyki w Toruniu.
                    </p>
                    <p>Cały czas rozwijam się jako fullstack web developer.</p>
                    <p>
                        Moje doświadczenie opiera się na roku tworzenia własnych
                        komerycjnych projektów oraz 4 miesiące pracy jako
                        fullstack developer. W pracy byłem odpowiedzialny za
                        poprawienie starego kodu oraz tworzenie nowych
                        funkcjonalności po stronie frontendu (React.js) wraz z
                        testami. Zadania polegały również na wprowadzaniu
                        drobnych poprawek oraz pisaniu testów po stronie
                        backendu (Django).
                    </p>
                </article>
                <div className='about__education'>
                    <h3>Edukacja</h3>
                    {education.map((school) => (
                        <School school={school} key={school.schoolName} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
