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
                <h2>Explore top stories about the company</h2>
                <div className="product-grid">
                    <ProductCard label="New Arrival" productName="Product A" />
                    <ProductCard label="Best Seller" productName="Product B" />
                    <ProductCard label="Limited Stock" productName="Product C" />
                    <ProductCard productName="Product D" />
                </div>
            </div>
        </div>
    );
};

export default Home;
