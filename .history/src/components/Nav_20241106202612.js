import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import logo from './img/logo.png'; // Adjust the path as needed to point to img folder

function Nav() {
    return (
        <nav className="navbar-container">
            <div className="navbar-company-name">
                <img src={logo} alt="Logo" className="logo" />
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

export default Nav;
