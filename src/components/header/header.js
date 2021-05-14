import React, { useState, useEffect } from 'react';
import { debounce } from 'lodash-es';

import { FaBars, FaTimes } from '../../data/icons';

const Header = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const [activeSection, setActiveSection] = useState('about');

    useEffect(() => {
        const handleScroll = debounce(() => {
            const elementsId = [
                'about',
                'technologies',
                'experience',
                'projects',
            ];
            const elements = elementsId.map((id) =>
                document.getElementById(id)
            );

            for (let i = 0; i < elements.length; i++) {
                const element = elements[i];
                const rect = element.getBoundingClientRect();

                if (!(rect.height / 2 - 200 <= rect.y * -1)) {
                    setActiveSection(elementsId[i]);
                    break;
                }
            }
        }, 100);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    let icon = (
        <FaBars
            className='navbarIcon'
            onClick={() => setShowNavbar(!showNavbar)}
        />
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
            <nav className={`${showNavbar ? 'active' : ''}`}>
                <ul>
                    <li>
                        <a
                            className={
                                activeSection === 'about' ? `activeLink` : null
                            }
                            href='#about'
                            onClick={() => setShowNavbar(false)}>
                            O mnie
                        </a>
                    </li>
                    <li>
                        <a
                            className={
                                activeSection === 'technologies'
                                    ? `activeLink`
                                    : null
                            }
                            href='#technologies'
                            onClick={() => setShowNavbar(false)}>
                            Technologie
                        </a>
                    </li>
                    <li>
                        <a
                            className={
                                activeSection === 'experience'
                                    ? `activeLink`
                                    : null
                            }
                            href='#experience'
                            onClick={() => setShowNavbar(false)}>
                            Doświadczenie
                        </a>
                    </li>
                    <li>
                        <a
                            className={
                                activeSection === 'projects'
                                    ? `activeLink`
                                    : null
                            }
                            href='#projects'
                            onClick={() => setShowNavbar(false)}>
                            Projekty
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
