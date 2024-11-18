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

// Custom PointElement for rendering icons
class CustomPoint extends PointElement {
  draw(ctx) {
    const { x, y, options } = this;
    const { pointStyle, radius } = options;

    if (pointStyle instanceof HTMLCanvasElement) {
      const size = radius * 2; // Diameter of the icon
      ctx.save();
      ctx.drawImage(pointStyle, x - radius, y - radius, size, size);
      ctx.restore();
    } else {
      // Fallback for default circle rendering
      super.draw(ctx);
    }
  }
}

// Register the custom point element
Chart.register(CustomPoint);

const grades = ["A+", "B-", "C+", "D-", "E+", "F-"];
const gradePositions = grades.reduce((acc, grade, index) => {
  acc[grade] = index + 1;
  return acc;
}, {});

// Preprocess images to ensure consistent size
const preprocessImage = (img, targetSize = 128) => {
  const canvas = document.createElement("canvas");
  canvas.width = targetSize;
  canvas.height = targetSize;
  const ctx = canvas.getContext("2d");

  // Clear the canvas
  ctx.clearRect(0, 0, targetSize, targetSize);

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

const WebsiteRatingGraph = ({ data }) => {
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
      pointStyle: imageElements[website.name] || "circle", // Use favicon or fallback to circle
      pointRadius: calculatePointRadius(), // Dynamic size
    })),
  };

  const chartOptions = {
    plugins: {
      legend: { display: false },
      tooltip: {
        enabled: true,
        callbacks: {
          label: function (tooltipItem) {
            const datasetIndex = tooltipItem.datasetIndex; // Index of the dataset
            const dataIndex = tooltipItem.dataIndex; // Index of the point in the dataset
            const website = data[datasetIndex]; // Access website data directly
            return `${website.name}: ${website.rating}`;
          },
        },
      },
      afterDraw: (chart) => {
        const { ctx, chartArea, scales } = chart;

        // Exit if chartArea is undefined (chart not rendered yet)
        if (!chartArea) {
          return;
        }

        const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
        gradient.addColorStop(0, "green");
        gradient.addColorStop(0.5, "yellow");
        gradient.addColorStop(1, "red");

        ctx.save();
        ctx.fillStyle = gradient;

        // Draw the gradient bar just above the x-axis labels
        const gradientHeight = 10; // Height of the gradient
        const yPos = scales.x.bottom + 5; // Position just below the x-axis
        ctx.fillRect(chartArea.left, yPos, chartArea.width, gradientHeight);

        ctx.restore();
      },
    },
    scales: {
      x: {
        min: 0.5,
        max: grades.length + 0.5,
        ticks: {
          callback: (value) => grades[value - 1], // Show grade labels
        },
        grid: { drawOnChartArea: false }, // Hide gridlines
      },
      y: {
        min: -9,
        max: 9,
        grid: {
          drawBorder: true, // Show y-axis border
          color: (context) => (context.tick.value === 0 ? "black" : "transparent"), // Highlight x-axis
        },
        ticks: { display: false }, // Hide y-axis ticks
      },
    },
    responsive: true,
    maintainAspectRatio: false, // Allow resizing
  };

  return (
    <div style={{ width: "100%", height: "500px", margin: "0 auto" }}>
      <Scatter data={chartData} options={chartOptions} />
    </div>
  );
};

export default WebsiteRatingGraph;
