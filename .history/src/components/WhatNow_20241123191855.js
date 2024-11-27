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
        slidesToShow: 3,
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
                        src={`${process.env.PUBLIC_URL}/img/facebook.png`}
                        alt="Facebook Logo"
                        style={{ width: '300px', height: '400px', objectFit: 'cover' }}
                    />
                    <div className="content">
                        <h3>Running Wild</h3>
                        <a
                            href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x400" alt="Slide 2" />
                    <div className="content">
                        <h3>The Challenge</h3>
                        <a
                            href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x400" alt="Slide 3" />
                    <div className="content">
                        <h3>Explorer</h3>
                        <a
                            href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
                <div className="card">
                    <img src="https://via.placeholder.com/300x400" alt="Slide 4" />
                    <div className="content">
                        <h3>Adventure</h3>
                        <a
                            href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button>Watch Now</button>
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
