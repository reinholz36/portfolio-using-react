import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
      <header className="bg-secondary mb-4 py-2 flex-row align-center">
          <div className="container flex-row justify-space-between-lg justify-center align-center">
              <Link to="/">
                  <h1>Reinholz</h1>
              </Link>

              <nav className='text-center'>
                <Link to="/aboutme">About Me</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contactme">Contact Me</Link>
                <Link to="/resume">Resume</Link>
              </nav>
          </div>
      </header>
    );
  }
  
  export default Header;