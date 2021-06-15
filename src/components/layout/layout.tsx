import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/main.scss';

import Footer from '../footer/footer';
import Header from '../header/header';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='layout'>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
