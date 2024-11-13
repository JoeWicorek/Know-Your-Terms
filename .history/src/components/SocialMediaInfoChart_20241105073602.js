import React, { useState } from 'react';

const platformData = [
    { platform: "Facebook", imageUrl: "/path/to/facebook-image.png", infoCount: 10, infoCollected: ["Location", "Interests", "Posts", "Friends", "Messages"] },
    { platform: "Google", imageUrl: "/path/to/google-image.png", infoCount: 9, infoCollected: ["Search History", "Location", "Interests"] },
    { platform: "Twitter", imageUrl: "/path/to/twitter-image.png", infoCount: 7, infoCollected: ["Tweets", "Location", "Engagement Metrics"] },
    { platform: "Instagram", imageUrl: "/path/to/instagram-image.png", infoCount: 8, infoCollected: ["Photos", "Videos", "Interactions"] },
    { platform: "TikTok", imageUrl: "/path/to/tiktok-image.png", infoCount: 6, infoCollected: ["Videos", "Location", "Device Info"] }
];

const SocialMediaInfoChart = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(platformData);
    const [selectedPlatform, setSelectedPlatform] = useState(null); // Track the selected platform

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredData(
            platformData.filter(d => d.platform.toLowerCase().includes(query))
        );
    };

    const handleImageClick = (platform) => {
        setSelectedPlatform(platform === selectedPlatform ? null : platform); // Toggle display on click
    };

    return (
        <div>
            <input
                type="text"
                placeholder="Search for a platform (e.g., Twitter)"
                value={searchQuery}
                onChange={handleSearchChange}
                style={{ marginBottom: '20px', padding: '8px', width: '300px' }}
            />
            <div className="image-grid">
                {filteredData.map((platform) => (
                    <div key={platform.platform} className="platform-image">
                        <img
                            src={platform.imageUrl}
                            alt={platform.platform}
                            style={{ width: '100px', height: '100px', objectFit: 'contain', cursor: 'pointer' }}
                            onClick={() => handleImageClick(platform.platform)}
                        />
                        {selectedPlatform === platform.platform && (
                            <div className="platform-info" style={{ display: selectedPlatform === platform.platform ? 'block' : 'none' }}>
                                <h4>{platform.platform}</h4>
                                <p>Info Count: {platform.infoCount}</p>
                                <p>Info Collected: {platform.infoCollected.join(", ")}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaInfoChart;
