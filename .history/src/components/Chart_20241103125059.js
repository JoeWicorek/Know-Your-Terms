import React, { useEffect } from 'react';
import * as d3 from 'd3';
import socialMediaData from '../data/socialMediaData.json'; // Adjust the path accordingly

const Chart = () => {
    useEffect(() => {
        const svg = d3.select("#chart");
        svg.selectAll("*").remove(); // Clear previous content

        const sortedData = socialMediaData.sort((a, b) => b.infoCount - a.infoCount);
        const width = 800;
        const height = 600;

        const x = d3.scaleBand()
            .domain(sortedData.map(d => d.platform))
            .range([0, width])
            .padding(0.1);

        const y = d3.scaleLinear()
            .domain([0, d3.max(sortedData, d => d.infoCount)])
            .nice()
            .range([height, 0]);

        svg.append("g")
            .attr("transform", `translate(0, ${height})`)
            .call(d3.axisBottom(x));

        svg.append("g")
            .call(d3.axisLeft(y));

        svg.selectAll(".bar")
            .data(sortedData)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", d => x(d.platform))
            .attr("width", x.bandwidth())
            .attr("y", d => y(d.infoCount))
            .attr("height", d => height - y(d.infoCount))
            .attr("fill", "#69b3a2");
    }, []);

    return <svg id="chart" width="800" height="600"></svg>;
};

export default Chart;
