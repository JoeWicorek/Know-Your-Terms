import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './WhatNow.css'; 
import { FaArrowRight, FaArrowLeft, FaShieldAlt, FaUserSecret, FaBook, FaLock, FaGlobe, FaMobileAlt } from 'react-icons/fa';

function WhatNow() {
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        // Trigger animation after component mounts
        setTimeout(() => {
            setAnimateIn(true);
        }, 100);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        autoplay: true,
        autoplaySpeed: 8000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerPadding: '0',
                }
            }
        ]
    };

    const resources = [
        {
            type: 'video',
            title: 'Understanding Digital Privacy',
            description: 'Learn about the importance of digital privacy and how to protect your personal information online.',
            source: 'https://www.youtube.com/embed/yzyafieRcWE?si=2GKOpVxeqSUE3B1S&amp;start=35',
            icon: <FaUserSecret />
        },
        {
            type: 'article',
            title: 'Reducing Your Digital Footprint',
            description: 'Simple steps for reducing your digital footprint on social media platforms.',
            source: 'https://www.thecyberhelpline.com/helpline-blog/2024/5/14/simple-steps-for-reducing-your-digital-footprint-on-social-media',
            icon: <FaShieldAlt />
        },
        {
            type: 'article',
            title: 'Stop Apps From Collecting Your Data',
            description: 'Take these steps to stop apps from collecting your personal data.',
            source: 'https://www.pcmag.com/explainers/take-these-steps-to-stop-apps-from-collecting-your-data-now',
            icon: <FaMobileAlt />
        },
        {
            type: 'article',
            title: 'Who Owns Your Personal Data?',
            description: 'Understanding who owns the personal data you share with online services.',
            source: 'https://getterms.io/blog/who-owns-the-personal-data-you-collect-from-users',
            icon: <FaBook />
        },
        {
            type: 'article',
            title: 'Prevent Apps From Accessing Your Data',
            description: 'Practical tips on how to prevent apps from accessing your personal information.',
            source: 'https://blog.credo.com/2023/11/02/how-to-prevent-apps-from-accessing-your-personal-data/',
            icon: <FaLock />
        },
        {
            type: 'article',
            title: 'Best Private Browsers',
            description: 'Stop trackers with the best private browsers available today.',
            source: 'https://www.pcmag.com/picks/stop-trackers-dead-the-best-private-browsers',
            icon: <FaGlobe />
        }
    ];

    return (
        <div className="whatnow-page">
            <div className={`whatnow-hero ${animateIn ? 'animate-in' : ''}`}>
                <h1 className="whatnow-hero-title">Take Control of Your <span className="highlight">Digital Presence</span></h1>
                <p className="whatnow-hero-subtitle">
                    Resources to help you manage your online privacy and digital footprint
                </p>
            </div>

            <div className={`whatnow-container ${animateIn ? 'animate-in' : ''}`}>
                <div className="whatnow-intro">
                    <h2 className="section-title">Educational Resources</h2>
                    <div className="divider"></div>
                    <p className="whatnow-description">
                        Browse through our curated collection of videos and articles to learn how to better 
                        protect your privacy online and understand the implications of the terms you agree to.
                    </p>
                </div>

                <div className="slider-container">
                    <Slider {...settings}>
                        {resources.map((resource, index) => (
                            <div key={index} className="slide-item">
                                <div className="resource-card">
                                    <div className="resource-header">
                                        <div className="resource-icon">
                                            {resource.icon}
                                        </div>
                                        <div className="resource-type">
                                            {resource.type === 'video' ? 'Video' : 'Article'}
                                        </div>
                                    </div>
                                    <h3 className="resource-title">{resource.title}</h3>
                                    <p className="resource-description">{resource.description}</p>
                                    <div className="resource-content">
                                        <iframe
                                            src={resource.source}
                                            title={resource.title}
                                            className="resource-iframe"
                                            frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

            <div className={`action-section ${animateIn ? 'animate-in' : ''}`}>
                <div className="action-content">
                    <h2 className="action-title">Ready to Take Action?</h2>
                    <p className="action-description">
                        Now that you've learned about digital privacy and terms of service, 
                        it's time to take control of your online presence.
                    </p>
                    <div className="action-steps">
                        <div className="action-step">
                            <div className="step-number">1</div>
                            <div className="step-content">
                                <h3>Audit Your Accounts</h3>
                                <p>Review which platforms you're using and consider which ones truly add value to your life.</p>
                            </div>
                        </div>
                        <div className="action-step">
                            <div className="step-number">2</div>
                            <div className="step-content">
                                <h3>Adjust Privacy Settings</h3>
                                <p>Go through each platform and optimize your privacy settings to limit data collection.</p>
                            </div>
                        </div>
                        <div className="action-step">
                            <div className="step-number">3</div>
                            <div className="step-content">
                                <h3>Use Privacy Tools</h3>
                                <p>Consider using privacy-focused browsers, VPNs, and other tools to protect your data.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`whatnow-footer ${animateIn ? 'animate-in' : ''}`}>
                <h2 className="footer-title">EMPOWER YOUR DIGITAL DECISIONS</h2>
                <p className="footer-subtitle">Knowledge is the first step toward digital autonomy</p>
            </div>
        </div>
    );
}

// Custom arrow components
function SampleNextArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-next-arrow`} onClick={onClick}>
            <FaArrowRight />
        </div>
    );
}

function SamplePrevArrow(props) {
    const { className, onClick } = props;
    return (
        <div className={`${className} custom-prev-arrow`} onClick={onClick}>
            <FaArrowLeft />
        </div>
    );
}

export default WhatNow;
