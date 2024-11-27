import React from 'react';
import './App.css';  // Import global styles here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';  // Use Nav instead of Navbar
import Home from './components/Home';
import Quiz from './components/quiz';
import WhatNow from './components/WhatNow';
import About from './components/About';
import websiteData from './data/websiteData';

function App() {
    return (
        <Router>
            <div>
                <Nav /> {/* Render Nav here */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/whatnow" element={<WhatNow />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
