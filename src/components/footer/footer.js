import React from "react";
import { IoIosArrowUp } from "react-icons/io";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className='footer'>
      &copy; Paweł Polak
      <a aria-label='Go up' href='#about'>
        <IoIosArrowUp className='footer__icon' />
      </a>
    </footer>
  );
};

export default Footer;
