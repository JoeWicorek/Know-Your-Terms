import React from 'react';
import './Chart.css';

const platformData = [
    { platform: "Facebook", imageUrl: "/path/to/facebook-logo.png", grade: "A+" },
    { platform: "Google", imageUrl: "/path/to/google-logo.png", grade: "B-" },
    { platform: "Twitter", imageUrl: "/path/to/twitter-logo.png", grade: "C+" },
    { platform: "Instagram", imageUrl: "/path/to/instagram-logo.png", grade: "D-" },
    { platform: "TikTok", imageUrl: "/path/to/tiktok-logo.png", grade: "E+" }
];

const gradePositions = {
    "A+": "5%",
    "B-": "20%",
    "C+": "40%",
    "D-": "60%",
    "E+": "80%",
    "F-": "95%"
};

const SocialMediaGradeChart = () => {
    return (
        <div className="chart-container">
            <div className="grade-scale">
                {Object.keys(gradePositions).map((grade) => (
                    <span key={grade} className="grade-label" style={{ left: gradePositions[grade] }}>{grade}</span>
                ))}
                {platformData.map((platform) => (
                    <img
                        key={platform.platform}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        className="platform-icon"
                        style={{ left: gradePositions[platform.grade] }}
                    />
                ))}
            </div>
            <div className="platform-icons">
                {platformData.map((platform, index) => (
                    <img
                        key={index}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        className="bottom-icon"
                    />
                ))}
            </div>
            <div className="description">
                <p>Here you can see the social media platforms graded based on their privacy policies and user-friendliness. The chart above provides a visual representation of each platform's grade, while the icons below show the individual platforms. Click on each icon to learn more.</p>
            </div>
        </div>
    );
};

export default SocialMediaGradeChart;

/* Chart.css */
.chart-container {
    position: relative;
    width: 100%;
    max-width: 1306px;
    height: 825px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #2D79BE;
    border-radius: 20px;
    background-color: #F9F9F9;
}

.grade-scale {
    position: relative;
    height: 40px;
    background: linear-gradient(to right, #4CAF50, #CDDC39, #FFEB3B, #FFC107, #FF5722);
    border-radius: 20px;
    margin: 80px auto;
    width: 90%;
}

.grade-label {
    position: absolute;
    top: -30px;
    transform: translateX(-50%);
    font-weight: bold;
    color: #333;
    font-size: 1rem;
}

.platform-icon {
    position: absolute;
    top: -60px;
    transform: translateX(-50%);
    cursor: pointer;
    width: 50px;
    height: 50px;
    transition: transform 0.3s ease;
}

.platform-icon:hover {
    transform: translateX(-50%) scale(1.1);
}

.platform-icons {
    position: relative;
    margin-top: 50px;
    display: flex;
    justify-content: space-around;
}

.bottom-icon {
    width: 60px;
    height: 60px;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.bottom-icon:hover {
    transform: scale(1.1);
}

.description {
    text-align: center;
    margin-top: 30px;
    color: #2D79BE;
    font-size: 1.2rem;
    line-height: 1.5;
}
