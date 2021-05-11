import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import React from "react";
import Img from "gatsby-image";
import { FaGithub, FaEnvelope } from "react-icons/fa";
import "./about.scss";

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
    <div className="about">
      <div className="about__profile">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="about__profile__photo"
        />
        <div className="about__profile__title">
          <h2>Paweł Polak</h2>
          <p className="about__profile__title__">
            Absolwent informatyki inżynierskiej
          </p>
          <p className="about__profile__title__university">
            Uniwersytetu Mikołaja Kopernia w Toruniu
          </p>
          <div className="about__profile__icons">
            <a href="mailto:pawelp258@gmail.com" target="_blank">
              <FaEnvelope className="about__profile__icon" />
            </a>
            <a href="https://github.com/poldeeek" target="_blank">
              <FaGithub className="about__profile__icon" />
            </a>
          </div>
        </div>
      </div>
      <section>
        <h1>O mnie</h1>
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
    </div>
  );
};

export default About;
