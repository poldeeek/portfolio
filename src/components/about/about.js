import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

import { FaEnvelope, FaGithub } from "../../data/icons";
import "./about.scss";

import education from "../../data/education";
import School from "./school";

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
              rel='noreferrer'
            >
              <FaEnvelope className='about__profile__icon' />
            </a>
            <a
              aria-label='GitHub'
              href='https://github.com/poldeeek'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className='about__profile__icon' />
            </a>
          </div>
        </div>
      </div>
      <div className='about__biography'>
        <h1 className='half-margin'>O mnie</h1>
        <article>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p>
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
          <p>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
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
