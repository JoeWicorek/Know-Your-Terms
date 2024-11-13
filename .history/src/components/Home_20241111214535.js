import React from 'react';
import './Home.css';
import ProductCard from './ProductCard';
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

    );
};

export default Home;
