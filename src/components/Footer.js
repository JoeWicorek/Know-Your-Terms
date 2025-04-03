import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>Know Your Terms</h3>
          <p>Helping you understand the digital agreements you accept every day.</p>
        </div>
        
        <div className="footer-section">
          <h4>Navigation</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/quiz">Quizzes</Link></li>
            <li><Link to="/whatnow">What Now?</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><Link to="/privacy-challenge">Privacy Challenge</Link></li>
            <li><Link to="/digital-rights-assessment">Digital Rights</Link></li>
            <li><Link to="/terms-quiz">Terms of Service Quiz</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Know Your Terms. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
