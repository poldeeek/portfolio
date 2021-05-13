import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import "./header.scss";

const Header = () => {
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = (event) => {
      const about = document.querySelector("#about").getBoundingClientRect();
      const technologies = document
        .querySelector("#technologies")
        .getBoundingClientRect();
      const experience = document
        .querySelector("#experience")
        .getBoundingClientRect();
      const projects = document
        .querySelector("#projects")
        .getBoundingClientRect();

      // check the #about
      if (about.height / 2 - 200 <= about.y * -1) {
        //check the #technologies
        if (technologies.height / 2 - 200 <= technologies.y * -1) {
          //check the #experience
          if (experience.height / 2 - 200 <= experience.y * -1) {
            //check the #projects
            if (projects.height / 2 - 200 <= projects.y * -1) {
            } else {
              setActiveSection("projects");
            }
          } else {
            setActiveSection("experience");
          }
        } else {
          setActiveSection("technologies");
        }
      } else {
        setActiveSection("about");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
              className={activeSection === "about" ? `activeLink` : null}
              href='#about'
              onClick={() => setShowNavbar(false)}
            >
              O mnie
            </a>
          </li>
          <li>
            <a
              className={activeSection === "technologies" ? `activeLink` : null}
              href='#technologies'
              onClick={() => setShowNavbar(false)}
            >
              Technologie
            </a>
          </li>
          <li>
            <a
              className={activeSection === "experience" ? `activeLink` : null}
              href='#experience'
              onClick={() => setShowNavbar(false)}
            >
              Doświadczenie
            </a>
          </li>
          <li>
            <a
              className={activeSection === "projects" ? `activeLink` : null}
              href='#projects'
              onClick={() => setShowNavbar(false)}
            >
              Projekty
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
