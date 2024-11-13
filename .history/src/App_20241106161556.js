import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
// Import other pages here...

function App() {
    return (
        <Router>
            <div>
                <Navbar /> {/* Place Navbar here once */}
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* Add other routes as needed */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
