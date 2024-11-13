import React, { useState } from 'react';

const platformData = [
    { platform: "Facebook", imageUrl: "/path/to/facebook-image.png" },
    { platform: "Google", imageUrl: "/path/to/google-image.png" },
    { platform: "Twitter", imageUrl: "/path/to/twitter-image.png" },
    { platform: "Instagram", imageUrl: "/path/to/instagram-image.png" },
    { platform: "TikTok", imageUrl: "/path/to/tiktok-image.png" }
];

const SocialMediaInfoChart = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(platformData);

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredData(
            platformData.filter(d => d.platform.toLowerCase().includes(query))
        );
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
                            style={{ width: '100px', height: '100px', objectFit: 'contain' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaInfoChart;
