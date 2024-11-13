// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';  // Ensure this path is correct

function Navbar() {
    return (
        <nav className="navbar-container">
            <div className="company-name">
                KNOW<br />YOUR<br />TERMS
            </div>
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
