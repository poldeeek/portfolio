import * as React from "react";

import Layout from "../components/layout/layout";
import About from "../components/about/about";
import Technologies from "../components/technologies/technologies";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <About />
      <Technologies />
    </Layout>
  );
};

export default IndexPage;
