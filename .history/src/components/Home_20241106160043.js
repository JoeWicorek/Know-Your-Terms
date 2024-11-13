import React from 'react';
import Chart from './Chart';
import './Home.css';
import ProductCard from './ProductCard';
import SocialMediaInfoChart from './SocialMediaInfoChart';

const Home = () => {
    return (
        <div className="home-container">
            {/* Navbar */}
            <nav>
                <div className="company-name">KNOW YOUR TERMS</div>
                <ul>
                    <li><a href="#about">ABOUT US</a></li>
                    <li><a href="#what-now">WHAT NOW?</a></li>
                    <li><a href="#home">HOME</a></li>
                </ul>
            </nav>
            
            <div className="main-content">
                {/* Sidebar container for the search */}
                <div className="sidebar">
                    <h3>Search Information</h3>
                    <SocialMediaInfoChart />
                </div>

                {/* Main chart and news section */}
                <div className="chart-section">
                    <div className="chart-wrapper">
                        <Chart />
                    </div>
                    <div className="recent-news">
                        <h2>Recent News</h2>
                        <div className="news-grid">
                            <ProductCard 
                                label="Breaking News" 
                                title="Facebook's New Policy Update" 
                                description="Facebook's recent changes in their privacy policy have raised concerns about data collection practices." 
                            />
                            <ProductCard 
                                label="Trending" 
                                title="Social Media and User Information" 
                                description="An analysis of how social media platforms, including Facebook and others, handle user data." 
                            />
                            <ProductCard 
                                label="Update" 
                                title="New Social Media App Gains Traction" 
                                description="A new social media platform is challenging the giants with promises of better privacy and user control." 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
