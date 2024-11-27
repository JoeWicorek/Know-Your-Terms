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
                    <div className="article-content">
                        <h3>COVID Data Tracker</h3>
                        <p>Get the latest updates on COVID-19 data in the United States, including case counts and vaccination statistics.</p>
                        <a
                            href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="article-content">
                        <h3>Impact of Social Media on Society</h3>
                        <p>Explore how social media affects our relationships, communication, and mental health in modern society.</p>
                        <a
                            href="https://www.apu.apus.edu/area-of-study/business-and-management/resources/how-social-media-sites-affect-society/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="article-content">
                        <h3>How to Delete Your Digital Footprint</h3>
                        <p>Learn actionable steps to delete your digital footprint and protect your personal information online.</p>
                        <a
                            href="https://www.aura.com/learn/how-to-delete-your-digital-footprint"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Read More</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <div className="article-content">
                        <h3>Tips to Clean Up Your Digital Footprint</h3>
                        <p>Find practical tips on how to clean up your digital footprint and maintain better online privacy.</p>
                        <a
                            href="https://www.keepersecurity.com/blog/2023/01/30/tips-to-clean-up-your-digital-footprint/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Read More</button>
                        </a>
                    </div>
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
