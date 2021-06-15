import React from 'react';
// import PropTypes from 'prop-types';
import '../../styles/main.scss';

import Footer from '../footer/footer';
import Header from '../header/header';

interface ILayout {
  children?: React.ReactNode;
}

const Layout: React.FC<ILayout> = ({ children }) => {
  return (
    <>
      <Header />
      <main className='layout'>{children}</main>
      <Footer />
    </>
  );
};

/*
Layout.propTypes = {
  children: PropTypes.node.isRequired
};
*/

export default Layout;
