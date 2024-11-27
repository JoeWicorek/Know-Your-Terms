import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function WhatNow() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div style={{ width: '80%', margin: '0 auto' }}>
            <h1>WhatNow</h1>
            <Slider {...settings}>
                <div>
                    <img src="https://via.placeholder.com/800x300" alt="Slide 1" />
                </div>
                <div>
                    <img src="https://www.apu.apus.edu/area-of-study/business-and-management/resources/how-social-media-sites-affect-society/800x300" alt="Slide 2" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x300" alt="Slide 3" />
                </div>
                <div>
                    <img src="https://via.placeholder.com/800x300" alt="Slide 4" />
                </div>
            </Slider>
        </div>
    );
}

export default WhatNow;
