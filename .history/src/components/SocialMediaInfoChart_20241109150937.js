import React, { useState } from 'react';
import './Chart.css';

const platformData = [
    { platform: "Facebook", imageUrl: "/img/facebook.png", grade: "A+", description: "Facebook's privacy policy has improved significantly over recent years." },
    { platform: "Google", imageUrl: "/img/google.png", grade: "B-", description: "Google has a moderate privacy score due to data collection practices." },
    { platform: "Twitter", imageUrl: "/img/twitter.png", grade: "C+", description: "Twitter has been criticized for its handling of user data." },
    { platform: "Instagram", imageUrl: "/img/instagram.png", grade: "D-", description: "Instagram's privacy policy has raised concerns about data sharing." },
    { platform: "TikTok", imageUrl: "/img/tiktok.png", grade: "E+", description: "TikTok's data collection practices are considered invasive by some experts." }
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
    const [hoveredPlatform, setHoveredPlatform] = useState(null);

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
                        onMouseEnter={() => setHoveredPlatform(platform)}
                        onMouseLeave={() => setHoveredPlatform(null)}
                    />
                ))}
                {hoveredPlatform && (
                    <div className="tooltip" style={{ left: gradePositions[hoveredPlatform.grade] }}>
                        {hoveredPlatform.description}
                    </div>
                )}
            </div>
            <div className="platform-icons">
                {platformData.map((platform, index) => (
                    <img
                        key={index}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        className="bottom-icon"
                        onMouseEnter={() => setHoveredPlatform(platform)}
                        onMouseLeave={() => setHoveredPlatform(null)}
                    />
                ))}
            </div>
            <div className="description">
                <p>Here you can see the social media platforms graded based on their privacy policies and user-friendliness. The chart above provides a visual representation of each platform's grade, while the icons below show the individual platforms. Hover over each icon to learn more.</p>
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

.tooltip {
    position: absolute;
    top: -100px;
    transform: translateX(-50%);
    background-color: #FFFFFF;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    font-size: 0.9rem;
    color: #333;
    text-align: center;
    width: 200px;
    z-index: 10;
}
