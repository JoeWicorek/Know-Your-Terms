import React from 'react';
import './App.css';  // Import global styles here
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';  // Use Nav instead of Navbar
import Home from './components/Home';
import Quiz from './components/Quiz';
import WhatNow from './components/WhatNow';
import About from './components/About';


function App() {
    return (
        <Router>
                <Nav /> {/* Render Nav here */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/quiz" element={<Quiz/>} />
                    <Route path="/whatnow" element={<WhatNow />} />
                </Routes>
        </Router>
    );
}

export default App;
