import React, { useState } from 'react';
import './chart.css';

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
        <div className="chart-container" style={{ position: 'relative', width: '80%', margin: '0 auto', padding: '40px', border: '1px solid #2D79BE', borderRadius: '20px' }}>
            <div className="grade-scale" style={{ position: 'relative', height: '10px', background: 'linear-gradient(to right, #4CAF50, #CDDC39, #FFEB3B, #FFC107, #FF5722)', borderRadius: '5px', margin: '50px 0' }}>
                {Object.keys(gradePositions).map((grade) => (
                    <span key={grade} className="grade-label" style={{ position: 'absolute', left: gradePositions[grade], top: '-25px', transform: 'translateX(-50%)', fontWeight: 'bold', color: '#000' }}>{grade}</span>
                ))}
                {platformData.map((platform) => (
                    <img
                        key={platform.platform}
                        src={platform.imageUrl}
                        alt={platform.platform}
                        className="platform-icon"
                        style={{ position: 'absolute', left: gradePositions[platform.grade], top: '-40px', transform: 'translateX(-50%)', cursor: 'pointer', width: '50px', height: '50px' }}
                    />
                ))}
            </div>
            <div className="description" style={{ textAlign: 'center', marginTop: '40px', color: '#2D79BE' }}>
                <p>Description</p>
            </div>
        </div>
    );
};

export default SocialMediaGradeChart;
