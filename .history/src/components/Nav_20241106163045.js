import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar'; // Ensure the path is correct

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/articles" element={<Articles />} />
                <Route path="/whatnow" element={<WhatNow />} />
            </Routes>
        </Router>
    );
}

export default App;
