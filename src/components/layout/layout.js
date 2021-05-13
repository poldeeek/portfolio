import React from "react";
import PropTypes from "prop-types";

import "./layout.scss";
import Footer from "../footer/footer";
import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <>
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
