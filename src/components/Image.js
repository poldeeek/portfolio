import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby'; // to query for image data
import Img from 'gatsby-image';

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

    const fluid = allImageSharp.nodes.find(
        (n) => n.fluid && n.fluid.originalName === `${fileName}.webp`
    ).fluid;

    return (
        <div>
            <Img fluid={fluid} alt={alt} className={className} loading='lazy' />
        </div>
    );
};

Image.propTypes = {
    fileName: PropTypes.string.isRequired,
    alt: PropTypes.string,
    className: PropTypes.string,
};

export default Image;
