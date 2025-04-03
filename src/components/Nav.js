import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Nav.css';
import { FaHome, FaInfoCircle, FaClipboardCheck, FaLightbulb, FaBars, FaTimes, FaShieldAlt } from 'react-icons/fa';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    // Set initial load animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);
    
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isLoaded ? 'nav-loaded' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <FaShieldAlt className="logo-icon" />
          <span className="logo-text">Know Your Terms</span>
        </Link>

        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FaTimes className="menu-icon-svg" /> : <FaBars className="menu-icon-svg" />}
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item" style={{ animationDelay: '0.1s' }}>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              <FaHome className="nav-icon" />
              <span>Home</span>
              <span className="nav-link-highlight"></span>
            </Link>
          </li>
          <li className="nav-item" style={{ animationDelay: '0.2s' }}>
            <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
              <FaInfoCircle className="nav-icon" />
              <span>About</span>
              <span className="nav-link-highlight"></span>
            </Link>
          </li>
          <li className="nav-item" style={{ animationDelay: '0.3s' }}>
            <Link to="/quiz" className={`nav-link ${location.pathname === '/quiz' ? 'active' : ''}`}>
              <FaClipboardCheck className="nav-icon" />
              <span>Quiz</span>
              <span className="nav-link-highlight"></span>
            </Link>
          </li>
          <li className="nav-item" style={{ animationDelay: '0.4s' }}>
            <Link to="/whatnow" className={`nav-link ${location.pathname === '/whatnow' ? 'active' : ''}`}>
              <FaLightbulb className="nav-icon" />
              <span>What Now?</span>
              <span className="nav-link-highlight"></span>
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="nav-background">
        <div className="nav-glow"></div>
      </div>
    </nav>
  );
};

export default Nav;
