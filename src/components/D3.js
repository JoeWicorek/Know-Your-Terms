import React, { useEffect } from 'react';
import * as d3 from 'd3';
import data from '../data/socialMediaData.json'; // Adjust the path accordingly

const SocialMediaChart = () => {
    useEffect(() => {
        const width = 800;
        const height = 600;
        const margin = { top: 20, right: 20, bottom: 50, left: 50 };

        const svg = d3.select("#chart")
            .attr("width", width)
            .attr("height", height);

        // Create scales based on reliability and bias
        const xScale = d3.scaleLinear()
            .domain([-30, 30]) // Replace with actual range of bias scores
            .range([margin.left, width - margin.right]);

        const yScale = d3.scaleLinear()
            .domain([0, 50]) // Replace with actual range of reliability scores
            .range([height - margin.bottom, margin.top]);

        // Add axes
        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(xScale));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(yScale));

        // Plot images
        svg.selectAll("image")
            .data(data)
            .enter()
            .append("image")
            .attr("xlink:href", d => d.logo)
            .attr("x", d => xScale(d.bias) - 15) // Center image
            .attr("y", d => yScale(d.reliability) - 15) // Center image
            .attr("width", 30)
            .attr("height", 30);

    }, []);

    return <svg id="chart"></svg>;
};

export default SocialMediaChart;
