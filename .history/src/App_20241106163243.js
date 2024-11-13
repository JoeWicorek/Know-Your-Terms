import React from 'react';
import './App.css';  // Import global styles here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';  // Update the path if needed
import Home from './components/Home';
import Articles from './components/Articles';
import WhatNow from './components/WhatNow';
import About from './components/About';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
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
