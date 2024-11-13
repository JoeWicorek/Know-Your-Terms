import React from 'react';
import './Chart.css';

const platformData = [
    { platform: "Facebook", imageUrl: "/path/to/facebook-image.png", grade: "A+" },
    { platform: "Google", imageUrl: "/path/to/google-image.png", grade: "B-" },
    { platform: "Twitter", imageUrl: "/path/to/twitter-image.png", grade: "C+" },
    { platform: "Instagram", imageUrl: "/path/to/instagram-image.png", grade: "D-" },
    { platform: "TikTok", imageUrl: "/path/to/tiktok-image.png", grade: "E+" }
];

const gradePositions = {
    "A+": "10%",
    "B-": "25%",
    "C+": "40%",
    "D-": "55%",
    "E+": "70%",
    "F-": "85%"
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
                <p>Description</p>
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
    background-color: #FFFFFF;
}

.grade-scale {
    position: relative;
    height: 40px;
    background: linear-gradient(to right, #4CAF50, #CDDC39, #FFEB3B, #FFC107, #FF5722);
    border-radius: 20px;
    margin: 100px auto;
    width: 80%;
}

.grade-label {
    position: absolute;
    top: -30px;
    transform: translateX(-50%);
    font-weight: bold;
    color: #000;
}

.platform-icon {
    position: absolute;
    top: -60px;
    transform: translateX(-50%);
    cursor: pointer;
    width: 40px;
    height: 40px;
}

.platform-icons {
    position: relative;
    margin-top: 40px;
    display: flex;
    justify-content: space-around;
}

.bottom-icon {
    width: 60px;
    height: 60px;
    cursor: pointer;
}

.description {
    text-align: center;
    margin-top: 20px;
    color: #2D79BE;
}