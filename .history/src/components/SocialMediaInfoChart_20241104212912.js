import React, { useState } from 'react';

const SocialMediaInfoChart = () => {
    const data = [
        { platform: "Facebook", infoCount: 10, infoCollected: ["Location", "Interests", "Posts", "Friends", "Messages"] },
        { platform: "Google", infoCount: 9, infoCollected: ["Search History", "Location", "Interests"] },
        { platform: "Twitter", infoCount: 7, infoCollected: ["Tweets", "Location", "Engagement Metrics"] },
        { platform: "Instagram", infoCount: 8, infoCollected: ["Photos", "Videos", "Interactions"] },
        { platform: "TikTok", infoCount: 6, infoCollected: ["Videos", "Location", "Device Info"] }
    ];

    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredData(
            data.filter(d => d.platform.toLowerCase().includes(query))
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
            <div className="search-results">
                {filteredData.map((platform) => (
                    <div key={platform.platform} className="platform-info">
                        <h4>{platform.platform}</h4>
                        <p>Info Count: {platform.infoCount}</p>
                        <p>Info Collected: {platform.infoCollected.join(", ")}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SocialMediaInfoChart;
