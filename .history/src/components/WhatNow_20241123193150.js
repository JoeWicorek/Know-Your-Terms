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
                    <iframe
                        src="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
                        title="COVID Data Tracker"
                        style={{
                            width: '60%',
                            height: '600px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '10px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://www.apu.apus.edu/area-of-study/business-and-management/resources/how-social-media-sites-affect-society/"
                        title="Impact of Social Media on Society"
                        style={{
                            width: '90%',
                            height: '300px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '10px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://example.com/some-article" // Replace with the actual URL of the article you want to display
                        title="How AI is Changing Industries"
                        style={{
                            width: '90%',
                            height: '300px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '10px auto',
                            display: 'block',
                        }}
                    />
                </div>
                <div className="card">
                    <iframe
                        src="https://example.com/adventure-article" // Replace with the actual URL of the article you want to display
                        title="Adventure in the Modern Age"
                        style={{
                            width: '90%',
                            height: '300px',
                            border: 'none',
                            borderRadius: '10px',
                            margin: '10px auto',
                            display: 'block',
                        }}
                    />
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
