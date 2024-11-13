// Home.js
import React from 'react';
import Chart from './Chart'; // Import the Chart component
import './Home.css'; // Import Home CSS
import './Chart.css'; // Import Chart CSS (if needed)

const Home = () => {
    return (
        <div className="home-container">
            <p className="company-name">KNOW YOUR TERMS</p>
            <div className="chart-wrapper">
                <Chart /> {/* Render the Chart component here */}
            </div>
            <div className="recent-news">
                <h2>Recent News</h2>
                <ul>
                    <li>News article 1</li>
                    <li>News article 2</li>
                    <li>News article 3</li>
                    {/* Add more articles as needed */}
                </ul>
            </div>
        </div>
    );
};

export default Home;
