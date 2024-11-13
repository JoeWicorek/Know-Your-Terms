import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="navbar-container">
            <div className="navbar-company-name">
                <img src="/group-3/img/logo.png" alt="Logo" className="logo" />
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
