import React from 'react';

import { IoIosArrowUp } from '../../data/icons';

const Footer: React.FC = () => {
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
