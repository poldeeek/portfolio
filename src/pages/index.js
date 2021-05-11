import * as React from "react";

import Layout from "../components/layout/layout";
import About from "../components/about/about";

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <About />
    </Layout>
  );
};

export default IndexPage;
