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
                    <div className="article-content">
                        <h3>Impact of Social Media on Society</h3>
                        <p>
                            Social media has significantly changed the way we communicate, interact, and even form relationships.
                            With the rise of platforms like Facebook, Twitter, and Instagram, there has been a lot of debate about the
                            positives and negatives of these changes...
                        </p>
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
                        <h3>The Challenge of Data Privacy</h3>
                        <p>
                            As our online presence grows, so does the concern over data privacy. Many people are unaware of
                            the extent to which companies collect, store, and use their personal data. Ensuring data security has
                            become a crucial issue in the digital age...
                        </p>
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
                        <h3>How AI is Changing Industries</h3>
                        <p>
                            Artificial Intelligence (AI) is transforming industries across the board. From healthcare to education, AI's
                            ability to analyze data and provide insights is making processes faster and more efficient...
                        </p>
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
                        <h3>Adventure and Exploration in the Modern Age</h3>
                        <p>
                            The thrill of adventure is still alive today, with many taking part in thrilling outdoor activities
                            and exploring the unknown. Technology has opened up new possibilities for explorers to find
                            and document their journeys...
                        </p>
                        <a
                            href="https://covid.cdc.gov/covid-data-tracker/#datatracker-home"
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
