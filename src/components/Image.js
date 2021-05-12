import { useStaticQuery, graphql } from "gatsby"; // to query for image data
import React, { useState, useEffect } from "react";
import Img from "gatsby-image";

const Image = ({ fileName, alt, className }) => {
  const { allImageSharp } = useStaticQuery(graphql`
    query {
      allImageSharp {
        nodes {
          fluid(maxWidth: 1600) {
            originalName
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  const [hasMounted, setHasMounted] = useState(false);
  console.log(allImageSharp.nodes);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  const fluid = allImageSharp.nodes.find(
    (n) => n.fluid.originalName === `${fileName}.png`
  ).fluid;

  return (
    <div>
      <Img fluid={fluid} alt={alt} className={className} />
    </div>
  );
};

export default Image;
