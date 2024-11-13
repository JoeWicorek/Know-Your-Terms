import React from 'react';
import './Nav.css'; // Add a separate CSS file for navbar styling

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="company-name">
                KNOW<br />YOUR<br />TERMS
            </div>
            <nav>
                <ul>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#what-now">WHAT NOW?</a></li>
                    <li><a href="#home">HOME</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;
