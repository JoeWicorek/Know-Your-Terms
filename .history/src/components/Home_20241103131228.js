// Home.js

import React from 'react';
import SocialMediaInfoChart from './components/SocialMediaInfoChart';

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Home Page</h1>
            <p>Here you can find information about social media data collection.</p>
            <Chart /> {/* Render the Chart component here */}
        </div>
    );
};

export default Home;
