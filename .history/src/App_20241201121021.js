import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="quiz-nav">
            <h1>Quiz Application</h1> {/* This is where you change the name */}
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/quiz">Quiz</Link></li>
                <li><Link to="/whatnow">What Now?</Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
