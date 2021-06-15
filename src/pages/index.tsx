import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Layout from '../components/layout/layout';
import About from '../components/about/about';
import Technologies from '../components/technologies/technologies';
import Experience from '../components/experience/experience';
import Projects from '../components/projects/projects';
import Seo from '../components/seo';

const IndexPage: React.FC = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Layout>
      <Seo lang={'pl-PL'} title={data.site.siteMetadata.title} />
      <About />
      <Technologies />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
