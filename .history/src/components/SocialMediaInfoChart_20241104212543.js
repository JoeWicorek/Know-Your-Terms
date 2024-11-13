import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';

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

        // Create tooltips
        const tooltip = d3.select("body").append("div")
            .style("position", "absolute")
            .style("background", "white")
            .style("border", "1px solid black")
            .style("padding", "5px")
            .style("display", "none");

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
            .attr("fill", "#69b3a2")
            .on("mouseover", (event, d) => {
                tooltip.style("display", "block")
                    .html(`<strong>${d.platform}</strong><br>Info Count: ${d.infoCount}<br>Info Collected:<br>${d.infoCollected.join(", ")}`)
                    .style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mousemove", (event) => {
                tooltip.style("left", (event.pageX + 5) + "px")
                    .style("top", (event.pageY - 28) + "px");
            })
            .on("mouseout", () => tooltip.style("display", "none"));

    }, [filteredData]);

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
            <svg id="chart"></svg>
        </div>
    );
};

export default SocialMediaInfoChart;
