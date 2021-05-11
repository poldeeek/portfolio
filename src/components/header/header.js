import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./header.scss";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);

  let icon = (
    <FaBars className="navbarIcon" onClick={() => setShowNavbar(!showNavbar)} />
  );

  if (showNavbar) {
    icon = (
      <FaTimes
        className="navbarIcon"
        onClick={() => setShowNavbar(!showNavbar)}
      />
    );
  }

  return (
    <header>
      <h2 className="bold">Paweł Polak</h2>
      {icon}
      <nav className={`${showNavbar ? "active" : ""}`}>
        <ul>
          <li>
            <a className="active" href="#">
              O mnie
            </a>
          </li>
          <li>
            <a href="#">Doświadczenie</a>
          </li>
          <li>
            <a href="#">Projekty</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
