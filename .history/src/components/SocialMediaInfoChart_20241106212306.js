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
                <div className="grade-line" style={{ position: 'relative', height: '10px', background: 'linear-gradient(to right, #4CAF50, #CDDC39, #FFEB3B, #FFC107, #FF5722)', borderRadius: '5px', margin: '20px 0' }}>
                    {Object.keys(gradePositions).map((grade) => (
                        <span key={grade} className="grade-label" style={{ position: 'absolute', left: gradePositions[grade], top: '-25px', transform: 'translateX(-50%)' }}>{grade}</span>
                    ))}
                </div>
                {platformData.map((platform) => (
                    <img
                        key={platform.platform}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        className="platform-icon"
                        style={{ position: 'absolute', left: gradePositions[platform.grade], top: '30px', transform: 'translateX(-50%)', cursor: 'pointer' }}
                        onClick={() => handleImageClick(platform.platform)}
                    />
                ))}
            </div>
            {selectedPlatform && (
                <div className="platform-info" style={{ marginTop: '50px' }}>
                    <h4>{selectedPlatform}</h4>
                </div>
            )}
        </div>
    );
};

export default SocialMediaInfoChart;
