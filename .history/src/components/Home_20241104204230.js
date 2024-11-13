// Home.js
import React from 'react';
import Chart from './Chart'; // Import the Chart component
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="home-container">
            <p>Company Name</p>
            <Chart /> {/* Render the Chart component here */}
        </div>
    );
};

export default Home;
