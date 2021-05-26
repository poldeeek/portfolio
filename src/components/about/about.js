import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import { FaEnvelope, FaGithub, MdLanguage } from '../../data/icons';

import education from '../../data/education';
import languages from '../../data/languages';

import School from './school';

const About = () => {
    const data = useStaticQuery(graphql`
        query PhotoAndCV {
            photo: file(relativePath: { eq: "avatar.webp" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cv: file(relativePath: { eq: "cv_pawel_polak.pdf" }) {
                publicURL
            }
        }
    `);

    return (
        <div className='about' id='about'>
            <div className='about__profile'>
                <Img
                    fluid={data.photo.childImageSharp.fluid}
                    className='about__profile__photo'
                    loading='lazy'
                />
                <div className='about__profile__title'>
                    <h2 className='about__profile__title__name'>Paweł Polak</h2>
                    <span>Inżynier informatyki</span>
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
                        <a
                            href={data.cv.publicURL}
                            download
                            className='about__profile__icon'>
                            CV
                        </a>
                    </div>
                </div>
            </div>
            <div className='about__biography'>
                <h1 className='half-margin'>O mnie</h1>
                <article>
                    <p>
                        Ukończyłem studia inżynierskie na kierunku informatyki,
                        na wydziale Matematyki i Informatyki Uniwersytetu
                        Mikołaja Kopernika w Toruniu.
                    </p>
                    <p>Cały czas rozwijam się jako fullstack web developer.</p>
                    <p>
                        Moje doświadczenie opiera się o rok tworzenia własnych
                        projektów oraz 4 miesiącach pracy jako fullstack
                        developer. W pracy byłem odpowiedzialny głównie za
                        poprawienie starego kodu oraz tworzenie nowych
                        funkcjonalności po stronie frontendu (React.js) wraz z
                        testami. Zadania polegały również na wprowadzaniu
                        drobnych poprawek oraz pisaniu testów po stronie
                        backendu (Django).
                    </p>
                    <p>
                        Aktualnie uczę się pisać witryny internetowe przy pomocy
                        technologii Gatsby.js jako frontend oraz systemu
                        Wordpress jako backend.
                    </p>
                </article>
                <div className='about__additional'>
                    <div className='about__education'>
                        <h3>Edukacja</h3>
                        {education &&
                            education.map((school) => (
                                <School
                                    school={school}
                                    key={school.schoolName}
                                />
                            ))}
                    </div>
                    <div className='about__languages'>
                        <h3>Języki obce</h3>
                        {languages &&
                            languages.map((lang) => (
                                <div
                                    className='about__languages__lang'
                                    key={lang.name}>
                                    <MdLanguage className='about__additional__icon' />
                                    <span>{lang.name}</span> {lang.level}
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
