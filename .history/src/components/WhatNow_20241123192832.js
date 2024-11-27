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
                        <h3>Impact of Social Media on Society</h3>
                        <p>
                            Social media has significantly changed the way we communicate, interact, and even form relationships. Platforms like Facebook, Twitter, and Instagram have become an integral part of our daily lives, and their impact is visible in the way we maintain social connections. 
                            
                            On one hand, social media provides a powerful tool for staying in touch with friends and family, meeting new people, and forming communities. However, there are concerns about how it impacts mental health, privacy, and the spread of misinformation. The influence of these platforms on self-image, particularly among young users, has been a subject of research and debate. 

                            Despite the benefits, it's crucial to approach social media with caution, setting boundaries to protect our mental and emotional well-being. Understanding its role in society can help us make better, more informed decisions on how to use these tools responsibly.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="article-content">
                        <h3>The Challenge of Data Privacy</h3>
                        <p>
                            Data privacy has become a hot topic as more aspects of our lives move online. We often share personal information without fully realizing how it might be used by companies, governments, or even malicious actors. 

                            Many users are unaware of the privacy policies that govern their data, and the implications can be significant. Companies track behavior, interests, and even purchase histories to create detailed user profiles. While this data is used to improve user experiences and for targeted marketing, it also raises concerns about user privacy, data breaches, and identity theft.

                            To address these challenges, awareness is key. Users must take steps to understand privacy policies, limit the data they share, and advocate for stronger privacy regulations that protect individual rights.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="article-content">
                        <h3>How AI is Changing Industries</h3>
                        <p>
                            Artificial Intelligence (AI) is rapidly transforming a wide range of industries. In healthcare, AI tools are being used to diagnose diseases, analyze medical data, and even assist in surgeries. In education, AI-powered systems are personalizing learning experiences for students, adapting to individual needs to maximize learning outcomes.

                            Industries like finance, retail, and transportation are also experiencing significant changes. AI helps analyze vast datasets to predict market trends, optimize supply chains, and improve customer experiences. Automation through AI technologies is reshaping the workforce and has the potential to increase efficiency, but it also raises questions about job displacement.

                            The key challenge is to ensure that the benefits of AI are widely shared, and that potential downsides, such as job losses and biases in AI algorithms, are properly addressed.
                        </p>
                    </div>
                </div>
                <div className="card">
                    <div className="article-content">
                        <h3>Adventure and Exploration in the Modern Age</h3>
                        <p>
                            The spirit of adventure has evolved with technology, making the world more accessible. Satellite mapping, travel blogs, and adventure vlogs provide inspiration and practical information for those seeking new experiences. More people are venturing into places that were previously hard to reach, equipped with the latest gear and gadgets to make exploration safer and more efficient.

                            However, the rise in adventure tourism also comes with responsibilities. Protecting natural environments and respecting local cultures are essential parts of being an explorer today. Sustainable travel practices and awareness of the impact on local ecosystems are critical as more individuals take to the outdoors.

                            Modern adventure is about more than the thrill; it’s about understanding our place in the world and connecting with nature in a meaningful way.
                        </p>
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
