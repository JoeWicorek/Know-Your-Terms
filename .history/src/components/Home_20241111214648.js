import React from 'react';
import './Home.css';
import SocialMediaInfoChart from './SocialMediaInfoChart'; // Assuming this is the only chart you want to keep

const Home = () => {
    return (
        <div className="home-container">
            {/* Main content below navbar */}
            <div className="main-content">
                {/* Sidebar container for the search */}
                <div className="sidebar">
                    {/* Keep only one chart component */}
                    <SocialMediaInfoChart />
                </div>

                {/* Main chart and news section */}
                <div className="chart-section">
                    <div className="chart-wrapper">
                        {/* Removed <Chart /> to avoid duplicate charts */}
                    </div>
                    <div className="recent-news">
                        <h2>Recent News</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
