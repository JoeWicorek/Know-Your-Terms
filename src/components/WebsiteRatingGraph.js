import React, { useEffect, useState } from "react";
import { Scatter } from "react-chartjs-2";
import {
  Chart,
  ScatterController,
  PointElement,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
Chart.register(ScatterController, PointElement, LinearScale, Tooltip, Legend);

// Custom plugin for gradient bar
const gradientBarPlugin = {
  id: "gradientBar",
  afterDraw(chart) {
    const { ctx, chartArea, scales } = chart;

    // Ensure the chart is rendered
    if (!chartArea || !scales.x) return;
    console.log("Gradient plugin triggered!");
    console.log("Chart Area:", chartArea);
console.log("Scales:", scales);

    // Create gradient
    const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
    gradient.addColorStop(0, "green");
    gradient.addColorStop(0.5, "yellow");
    gradient.addColorStop(1, "red");

    ctx.save();
    ctx.fillStyle = gradient;

    // Draw the gradient bar
    const gradientHeight = 20; // Height of the gradient bar
    const yPos = scales.x.bottom - 7; // Position just below the x-axis
    ctx.fillRect(chartArea.left, yPos, chartArea.width, gradientHeight);
    console.log(`Drawing gradient at Y: ${yPos}, Height: ${gradientHeight}`);

    ctx.restore();
  },
};

Chart.register(gradientBarPlugin);

const grades = ["A+", "B-", "C+", "D-", "E+", "F-"];
const gradePositions = grades.reduce((acc, grade, index) => {
  acc[grade] = index + 1;
  return acc;
}, {});

// Preprocess images to ensure consistent size
const preprocessImage = (img, targetSize = 128, highlight = false) => {
  const canvas = document.createElement("canvas");
  canvas.width = targetSize;
  canvas.height = targetSize;
  const ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, targetSize, targetSize);

    // Add a highlight effect if needed
    if (highlight) {
      ctx.shadowBlur = 10;
      ctx.shadowColor = "#007bff"; // Highlight color
      ctx.fillStyle = "#ffffff"; // Background for border effect
      ctx.fillRect(0, 0, targetSize, targetSize);
    }

  // Calculate scaling while maintaining aspect ratio
  const scale = Math.min(targetSize / img.width, targetSize / img.height);
  const scaledWidth = img.width * scale;
  const scaledHeight = img.height * scale;

  // Center the scaled image
  const xOffset = (targetSize - scaledWidth) / 2;
  const yOffset = (targetSize - scaledHeight) / 2;

  ctx.drawImage(img, xOffset, yOffset, scaledWidth, scaledHeight);
  return canvas;
};

const WebsiteRatingGraph = ({ data,selectedWebsite }) => {
  const [imageElements, setImageElements] = useState({});
  const minSize = 10; // Minimum icon size
  const maxSize = 30; // Maximum icon size
  const scaleFactor = 0.5; // Scaling factor for size reduction
  const spacingFactor = 2; // Spacing multiplier for y-values

  useEffect(() => {
    const preloadFavicons = async () => {
      const images = {};
      await Promise.all(
        data.map((website) =>
          new Promise((resolve) => {
            const faviconUrl = `https://www.google.com/s2/favicons?sz=128&domain=${website.domain}`;
            const img = new Image();
            img.src = faviconUrl;
            img.onload = () => {
              // Preprocess the image for consistent size
              images[website.name] = preprocessImage(img, 128); // Resize to 128x128
              resolve();
            };
            img.onerror = () => {
              console.warn(`Favicon not found for ${website.name}, using circle.`);
              resolve();
            };
          })
        )
      );
      setImageElements(images);
    };

    preloadFavicons().catch((err) => console.error("Error loading favicons:", err));
  }, [data]);

  const calculatePointRadius = () => {
    const listLength = data.length;
    const dynamicSize = maxSize - listLength * scaleFactor;
    return Math.max(minSize, Math.min(maxSize, dynamicSize)); // Ensure size stays within bounds
  };

  const calculateYValue = (index, yBounds = 9) => {
    const offset = index * spacingFactor;
    const rawValue = index % 2 === 0 ? offset : -offset;
    return Math.max(-yBounds, Math.min(yBounds, rawValue)); // Clamp to bounds
  };

  const chartData = {
    datasets: data.map((website, index) => ({
      label: website.name,
      data: [
        {
          x: gradePositions[website.rating],
          y: calculateYValue(index),
        },
      ],
      pointStyle: 
      selectedWebsite?.name === website.name
      ? preprocessImage(imageElements[website.name], 150, true) // Highlighted logo
      : imageElements[website.name] || "circle", // Default logo or fallback
      pointRadius: calculatePointRadius(website), // Dynamic size
      backgroundColor: selectedWebsite?.name === website.name ? "#007bff" : "#cccccc", // Highlight color
      borderColor: selectedWebsite?.name === website.name ? "#0056b3" : "#888888", // Border color
      borderWidth: selectedWebsite?.name === website.name ? 3 : 1, // Thicker border for selected
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      gradientBar: true, // Explicitly enable the gradient bar plugin
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const datasetIndex = tooltipItem.datasetIndex;
            const dataIndex = tooltipItem.dataIndex;
            const website = data[datasetIndex];
            return `${website.name}: ${website.rating}`;
          },
        },
      },
    },
    scales: {
      x: {
        min: 0.5,
        max: grades.length + 0.5,
        ticks: {
          callback: (value) => grades[value - 1],
          font: {
            size: 18,
            weight: "bold",
          },
          color: "black",
        },
        grid: { drawOnChartArea: false },
      },
      y: {
        min: -9,
        max: 9,
        grid: {
          display: false,
          drawBorder: false,
          color: (context) =>
            context.tick.value === 0 ? "black" : "transparent",
        },
        ticks: { display: false },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  

  return (
    <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
      <Scatter data={chartData} options={chartOptions} />
    </div>
  );
};

export default WebsiteRatingGraph;
