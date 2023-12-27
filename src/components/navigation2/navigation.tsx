import React, { useEffect, useState } from 'react';
import { CalendarOutline, HomeOutline, LibraryOutline } from 'react-ionicons';

import Link from 'next/link';

const Navigation = () => {
  const [activeLink, setActiveLink] = useState('home');

  return (
    <nav>
      <ul>
        <li className={activeLink === 'home' ? 'list active' : 'list'}>
          <Link
            className={activeLink ? 'active' : ''}
            href="#home"
            onClick={() => setActiveLink('home')}
          >
            <span className="icon">
              <HomeOutline />
            </span>
            <span className="text">Home</span>
          </Link>
        </li>
        <li className={activeLink === 'recent' ? 'list active' : 'list'}>
          <Link
            className={activeLink ? 'active' : ''}
            href="#recent"
            onClick={() => setActiveLink('recent')}
          >
            <span className="icon">
              <CalendarOutline />
            </span>
            <span className="text">Recent</span>
          </Link>
        </li>
        <li className={activeLink === 'library' ? 'list active' : 'list'}>
          <Link
            className={activeLink ? 'active' : ''}
            href="#library"
            onClick={() => setActiveLink('library')}
          >
            <span className="icon">
              <LibraryOutline />
            </span>
            <span className="text">Library</span>
          </Link>
        </li>
        <div className="indicator"></div>
      </ul>
    </nav>
  );
};

export default Navigation;

