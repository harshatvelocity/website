import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/website">Home</Link></li>
          <li><Link to="/website/about">About</Link></li>
          <li><Link to="/website/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;