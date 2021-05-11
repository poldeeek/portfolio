import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./header.scss";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  let icon = (
    <FaBars className='navbarIcon' onClick={() => setShowNavbar(!showNavbar)} />
  );

  if (showNavbar) {
    icon = (
      <FaTimes
        className='navbarIcon'
        onClick={() => setShowNavbar(!showNavbar)}
      />
    );
  }

  return (
    <header>
      <h2 className='bold'>
        <a href='#about' className='secondary-color'>
          Paweł Polak
        </a>
      </h2>
      {icon}
      <nav className={`${showNavbar ? "active" : ""}`}>
        <ul>
          <li>
            <a
              className='active'
              href='#about'
              onClick={() => setShowNavbar(false)}
            >
              O mnie
            </a>
          </li>
          <li>
            <a href='#technologies' onClick={() => setShowNavbar(false)}>
              Technologie
            </a>
          </li>
          <li>
            <a href='#experience' onClick={() => setShowNavbar(false)}>
              Doświadczenie
            </a>
          </li>
          <li>
            <a href='#projects' onClick={() => setShowNavbar(false)}>
              Projekty
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
