// Home.js
import React from 'react';
import Chart from './Chart'; // Import the Chart component
import './Home.css'; // Import Home CSS
import './Chart.css'; // Import Chart CSS (if needed)

const Home = () => {
    return (
        <div className="home-container">
            <p className="company-name">KNOW YOUR
TERMS</p>
            <div className="chart-wrapper">
                <Chart /> {/* Render the Chart component here */}
            </div>
        </div>
    );
};

export default Home;
