import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css'; // Custom styles

function WhatNow() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    return (
        <div style={{ width: '80%', margin: '0 auto', paddingTop: '50px' }}>
            <Slider {...settings}>
                <div className="card">
                    <img 
                        src="/images/covid-tracker.jpg" 
                        alt="COVID Data Tracker" 
                        className="card-image"
                    />
                    <h3>COVID Data Tracker</h3>
                    <p>Get the latest updates on COVID-19 data in the United States, including case counts and vaccination statistics.</p>
                    <a
                        href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="read-more-button">Visit Website</button>
                    </a>
                </div>
                <div className="card">
                    <img 
                        src="/images/healthdata.jpg" 
                        alt="Health Data Interactive Visuals" 
                        className="card-image"
                    />
                    <h3>Health Data Interactive Visuals</h3>
                    <p>Explore interactive data visuals provided by the Institute for Health Metrics and Evaluation.</p>
                    <a
                        href="https://www.healthdata.org/data-tools-practices/interactive-data-visuals/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="read-more-button">Visit Website</button>
                    </a>
                </div>
                <div className="card">
                    <img 
                        src="/images/ai-industries.jpg" 
                        alt="How AI is Changing Industries" 
                        className="card-image"
                    />
                    <h3>How AI is Changing Industries</h3>
                    <p>Learn how Artificial Intelligence is transforming industries such as healthcare, finance, and education.</p>
                    <a
                        href="https://example.com/some-article"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="read-more-button">Visit Website</button>
                    </a>
                </div>
                <div className="card">
                    <img 
                        src="/images/adventure-modern.jpg" 
                        alt="Adventure in the Modern Age" 
                        className="card-image"
                    />
                    <h3>Adventure in the Modern Age</h3>
                    <p>Discover how adventure and exploration have evolved with new technologies and cultural shifts.</p>
                    <a
                        href="https://example.com/adventure-article"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="read-more-button">Visit Website</button>
                    </a>
                </div>
                <div className="card">
                    <img 
                        src="/images/digital-footprint.jpg" 
                        alt="How to Delete Your Digital Footprint" 
                        className="card-image"
                    />
                    <h3>How to Delete Your Digital Footprint</h3>
                    <p>Learn actionable steps to delete your digital footprint and protect your personal information online.</p>
                    <a
                        href="https://www.aura.com/learn/how-to-delete-your-digital-footprint"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="read-more-button">Visit Website</button>
                    </a>
                </div>
                <div className="card">
                    <img 
                        src="/images/cleanup-digital-footprint.jpg" 
                        alt="Tips to Clean Up Your Digital Footprint" 
                        className="card-image"
                    />
                    <h3>Tips to Clean Up Your Digital Footprint</h3>
                    <p>Find practical tips on how to clean up your digital footprint and maintain better online privacy.</p>
                    <a
                        href="https://www.keepersecurity.com/blog/2023/01/30/tips-to-clean-up-your-digital-footprint/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="read-more-button">Visit Website</button>
                    </a>
                </div>
            </Slider>
        </div>
    );
}

// Custom arrow components
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} custom-arrow`} onClick={onClick} />;
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return <div className={`${className} custom-arrow`} onClick={onClick} />;
}

export default WhatNow;
