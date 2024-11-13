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
            </div>
            {hoveredPlatform && (
                <div className="tooltip" style={{ left: gradePositions[hoveredPlatform.grade] }}>
                    {hoveredPlatform.description}
                </div>
            )}
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
