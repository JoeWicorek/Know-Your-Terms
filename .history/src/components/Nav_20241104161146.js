import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';  // Import the CSS file here

function Navbar() {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/articles">Articles</Link></li>
                <li><Link to="/WhatNow">WhatNow</Link></li>
            </ul>
        </nav>
    );
}

export default Navbar;
