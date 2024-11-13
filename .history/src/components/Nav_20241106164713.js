import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import colorImage from '../assets/color.png';  // Adjust path based on your folder structure

function Navbar() {
    return (
        <nav className="navbar-container">
            {/* Image at the top */}
            <img src={colorImage} alt="Color" className="navbar-logo" />
            
            {/* Company name */}
            <div className="navbar-company-name">
                KNOW<br />YOUR<br />TERMS
            </div>

            {/* Navigation links */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/whatnow">WhatNow</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
