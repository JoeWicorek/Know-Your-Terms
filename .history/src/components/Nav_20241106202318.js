import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import colorImage from '../Img/color.png'; // Adjust the path as needed

function Nav() {
    return (
        <nav className="navbar-container">
            {/* Image at the top */}
            <img src={colorImage} alt="Logo" className="navbar-logo" />
            
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

export default Nav;
