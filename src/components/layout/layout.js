import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import "./layout.scss";
import Footer from "../footer/footer";
import Header from "../header/header";
import Seo from "../seo";

const Layout = ({ children }) => {
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
    <>
      <Seo lang={"pl-PL"} title={data.site.siteMetadata.title} />
      <Header />
      <main className='layout'>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
