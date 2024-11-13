import React, { useState } from 'react';
import './search.css';

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

const SocialMediaInfoChart = () => {
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    const handleImageClick = (platform) => {
        setSelectedPlatform(platform === selectedPlatform ? null : platform);
    };

    return (
        <div className="chart-container">
            <div className="grade-scale">
                <img
                    src=""
                    alt="Rank Scale"
                    className="rank-scale-image"
                />
                {platformData.map((platform) => (
                    <img
                        key={platform.platform}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        className="platform-icon"
                        style={{ left: gradePositions[platform.grade], cursor: 'pointer' }}
                        onClick={() => handleImageClick(platform.platform)}
                    />
                ))}
            </div>
            {selectedPlatform && (
                <div className="platform-info">
                    <h4>{selectedPlatform}</h4>
                </div>
            )}
        </div>
    );
};

export default SocialMediaInfoChart;
