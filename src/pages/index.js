import * as React from "react";

import Layout from "../components/layout/layout";
import About from "../components/about/about";
import Technologies from "../components/technologies/technologies";
import Experience from "../components/experience/experience";
import Projects from "../components/projects/projects";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <About />
      <Technologies />
      <Experience />
      <Projects />
    </Layout>
  );
};

export default IndexPage;
