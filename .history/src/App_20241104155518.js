// App.js

import React from 'react';
import './App.css';  // Import global styles here
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/Home';
import Articles from './components/Articles';
import Resources from './components/What Now';



function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/What Now" element={<Resources />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
