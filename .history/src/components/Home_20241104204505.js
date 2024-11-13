// Home.js
import React from 'react';
import Chart from './Chart';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <p className="company-name">Company Name</p>
            <div className="chart-wrapper">
                <Chart />
            </div>
        </div>
    );
};

export default Home;
