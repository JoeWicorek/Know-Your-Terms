import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

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
    const [selectedPlatform, setSelectedPlatform] = useState(null);

    useEffect(() => {
        const width = 600;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 40, left: 40 };

        d3.select("#chart").selectAll("*").remove(); // Clear existing chart

        const svg = d3.select("#chart")
            .attr("width", width)
            .attr("height", height);

        // Create x and y scales
        const xScale = d3.scaleBand()
            .domain(filteredData.map(d => d.platform))
            .range([margin.left, width - margin.right])
            .padding(0.1);

        const yScale = d3.scaleLinear()
            .domain([0, d3.max(filteredData, d => d.infoCount) + 1])
            .range([height - margin.bottom, margin.top]);

        // Add axes
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale));

        // Draw bars
        svg.selectAll(".bar")
            .data(filteredData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => xScale(d.platform))
            .attr("y", d => yScale(d.infoCount))
            .attr("width", xScale.bandwidth())
            .attr("height", d => height - margin.bottom - yScale(d.infoCount))
            .attr("fill", "#69b3a2");

    }, [filteredData]); // Re-run useEffect when filteredData changes

    const handleSearchChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        setFilteredData(
            platformData.filter(d => d.platform.toLowerCase().includes(query))
        );
    };

    const handleImageClick = (platform) => {
        setSelectedPlatform(platform === selectedPlatform ? null : platform);
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
                        <div className="image-container" onClick={() => handleImageClick(platform.platform)}>
                            <img
                                src={platform.imageUrl}
                                alt={platform.platform}
                                style={{ width: '100px', height: '100px', objectFit: 'contain', cursor: 'pointer' }}
                            />
                        </div>
                        {selectedPlatform === platform.platform && (
                            <div className="platform-info">
                                <h4>{platform.platform}</h4>
                                <p>Info Count: {platform.infoCount}</p>
                                <p>Info Collected: {platform.infoCollected.join(", ")}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <svg id="chart"></svg>
        </div>
    );
};

export default SocialMediaInfoChart;
