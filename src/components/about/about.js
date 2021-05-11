import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import React from "react";
import Img from "gatsby-image";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "./about.scss";

import education from "../../data/education";
import School from "./school";

const About = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  const data = useStaticQuery(graphql`
    query Photo {
      file(relativePath: { eq: "avatar.jpeg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className='about'>
      <div className='about__profile'>
        <Img
          fluid={data.file.childImageSharp.fluid}
          className='about__profile__photo'
        />
        <div className='about__profile__title'>
          <h2 className='about__profile__title__name'>Paweł Polak</h2>
          <span>Absolwent informatyki inżynierskiej</span>
          <span className='about__profile__title__university'>
            Uniwersytetu Mikołaja Kopernia w Toruniu
          </span>
          <div className='about__profile__icons'>
            <a
              href='mailto:pawelp258@gmail.com'
              target='_blank'
              rel='noreferrer'
            >
              <FaEnvelope className='about__profile__icon' />
            </a>
            <a
              href='https://github.com/poldeeek'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub className='about__profile__icon' />
            </a>
          </div>
        </div>
      </div>
      <section>
        <h1 className='half-margin'>O mnie</h1>
        <article>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </article>
      </section>
      <section className='about__education'>
        <h3>Edukacja</h3>
        {education.map((school) => (
          <School school={school} />
        ))}
      </section>
    </div>
  );
};

export default About;
