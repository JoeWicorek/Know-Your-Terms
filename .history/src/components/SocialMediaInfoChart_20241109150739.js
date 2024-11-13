import React from 'react';
import './Chart.css';

const platformData = [
    { platform: "Facebook", imageUrl: "/img/facebook.png", grade: "A+" },
    { platform: "Google", imageUrl: "/img/google.png", grade: "B-" },
    { platform: "Twitter", imageUrl: "/img/twitter.png", grade: "C+" },
    { platform: "Instagram", imageUrl: "/img/instagram.png", grade: "D-" },
    { platform: "TikTok", imageUrl: "/img/tiktok.png", grade: "E+" }
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
