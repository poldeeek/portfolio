import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import React from "react";
import Img from "gatsby-image";

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

  console.log(data);

  return (
    <div className="about">
      <div className="about__profile">
        <Img
          fluid={data.file.childImageSharp.fluid}
          className="about__profile__photo"
        />
      </div>
      <section>
        <h2>O mnie</h2>
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
