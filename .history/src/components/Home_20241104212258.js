import React from 'react';
import Chart from './Chart';
import './Home.css';
import ProductCard from './ProductCard'; // Import the ProductCard component

const Home = () => {
    return (
        <div className="home-container">
            <p className="company-name">KNOW YOUR TERMS</p>
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
    );
};

export default Home;
