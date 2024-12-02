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

// Completely reworked gradient bar plugin
const gradientBarPlugin = {
  id: "gradientBar",
  beforeDatasetsDraw(chart) {
    const { ctx, chartArea, scales } = chart;
    if (!chartArea || !scales.x) return;
<<<<<<< HEAD
    
=======
    //console.log("Gradient plugin triggered!");
    //console.log("Chart Area:", chartArea);
    //console.log("Scales:", scales);

    // Create gradient
>>>>>>> b55a953695c41f579cfbadcff8b7783e8c4ce7ed
    const gradient = ctx.createLinearGradient(chartArea.left, 0, chartArea.right, 0);
    gradient.addColorStop(0, "#98D8A1");    // Light green
    gradient.addColorStop(0.25, "#B6E6AA"); // Green-yellow
    gradient.addColorStop(0.5, "#FEDD8E");  // Yellow
    gradient.addColorStop(0.75, "#FEB17E"); // Orange
    gradient.addColorStop(1, "#FE8B7E");    // Light red

    const yPos = chartArea.top + (chartArea.height / 2);
    
    ctx.save();
    ctx.fillStyle = gradient;
<<<<<<< HEAD
    const gradientHeight = 6;
    ctx.fillRect(chartArea.left, yPos - (gradientHeight/2), chartArea.right - chartArea.left, gradientHeight);
=======

    // Draw the gradient bar
    const gradientHeight = 20; // Height of the gradient bar
    const yPos = scales.x.bottom - 7; // Position just below the x-axis
    ctx.fillRect(chartArea.left, yPos, chartArea.width, gradientHeight);
    //console.log(`Drawing gradient at Y: ${yPos}, Height: ${gradientHeight}`);

>>>>>>> b55a953695c41f579cfbadcff8b7783e8c4ce7ed
    ctx.restore();
  }
};

Chart.register(gradientBarPlugin);

const grades = ["A+", "A", "B+", "B", "B-", "C+", "C", "C-", "D+", "D", "D-", "E+", "F-"];
const gradePositions = grades.reduce((acc, grade, index) => {
  acc[grade] = index + 1;
  return acc;
}, {});

// Preprocess images to ensure consistent size
const preprocessImage = (img, targetSize = 96, highlight = false) => {
  const canvas = document.createElement("canvas");
  canvas.width = targetSize;
  canvas.height = targetSize;
  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, targetSize, targetSize);

  if (highlight) {
    ctx.shadowBlur = 15;
    ctx.shadowColor = "rgba(0, 123, 255, 0.6)";
    ctx.beginPath();
    ctx.arc(targetSize/2, targetSize/2, targetSize/2 - 5, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(0, 123, 255, 0.1)";
    ctx.fill();
  }

  const scale = Math.min(targetSize / img.width, targetSize / img.height) * 0.85;
  const scaledWidth = img.width * scale;
  const scaledHeight = img.height * scale;

  const xOffset = (targetSize - scaledWidth) / 2;
  const yOffset = (targetSize - scaledHeight) / 2;

  ctx.drawImage(img, xOffset, yOffset, scaledWidth, scaledHeight);
  return canvas;
};

const WebsiteRatingGraph = ({ data, selectedWebsite }) => {
  const [hoveredWebsite, setHoveredWebsite] = useState(null);
  const [imageElements, setImageElements] = useState({});
<<<<<<< HEAD
=======
  const minSize = 10; // Minimum icon size
  const maxSize = 30; // Maximum icon size
  const scaleFactor = 0.5; // Scaling factor for size reduction
  const spacingFactor = 2; // Spacing multiplier for y-values
  console.log(data)
>>>>>>> b55a953695c41f579cfbadcff8b7783e8c4ce7ed

  useEffect(() => {
    const loadImages = () => {
      const loadedImages = {};
      
      data.forEach((website) => {
        const img = new Image();
        
        img.onload = () => {
          loadedImages[website.name] = img;
          setImageElements(prev => ({...prev, [website.name]: img}));
        };

        img.src = `https://${website.domain}/favicon.ico`;

        img.onerror = () => {
          const fallbackImg = new Image();
          fallbackImg.onload = () => {
            loadedImages[website.name] = fallbackImg;
            setImageElements(prev => ({...prev, [website.name]: fallbackImg}));
          };
          fallbackImg.onerror = () => {
            console.warn(`Failed to load favicon for ${website.name}`);
          };
          fallbackImg.src = `https://www.google.com/s2/favicons?domain=${website.domain}`;
        };
      });
    };

    loadImages();
  }, [data]);

  const calculateYValue = (index, totalItems) => {
    return index % 2 === 0 ? 0.6 : -0.6;
  };

  const chartData = {
    datasets: data.map((website, index) => ({
      label: website.name,
      data: [
        {
          x: gradePositions[website.rating],
          y: calculateYValue(index, data.length),
        },
      ],
      pointStyle: function(context) {
        const img = imageElements[website.name];
        const isHighlighted = hoveredWebsite === website.name || selectedWebsite?.name === website.name;
        if (img) {
          if (!img._processed) {
            img._processed = {};
          }
          if (!img._processed[isHighlighted]) {
            img._processed[isHighlighted] = preprocessImage(img, 96, isHighlighted);
          }
          return img._processed[isHighlighted];
        }
        return 'circle';
      },
      pointRadius: 45,
      backgroundColor: 'transparent',
      borderColor: selectedWebsite?.name === website.name ? "#007bff" : "rgba(0,0,0,0.2)",
      borderWidth: selectedWebsite?.name === website.name ? 2 : 1,
    })),
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 150,  // More space for search bar
        bottom: 100
      }
    },
    plugins: {
      gradientBar: true,
      legend: { display: false },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        titleColor: '#000',
        bodyColor: '#000',
        borderColor: '#ddd',
        borderWidth: 1,
        padding: 10,
      },
    },
    scales: {
      x: {
        min: 0.5,
        max: grades.length + 0.5,
        ticks: {
          callback: (value) => grades[value - 1],
          font: {
            size: 13,
            weight: "500",
            family: "'Arial', sans-serif"
          },
          color: "#666",
          padding: 5,
        },
        grid: {
          display: false
        },
        border: {
          display: false
        },
      },
      y: {
        min: -1,
        max: 1,
        grid: {
          display: false
        },
        border: {
          display: false
        },
        ticks: {
          display: false
        }
      },
    },
  };

  return (
    <div style={{ 
      width: "100%", 
      height: "500px",
      margin: "0 auto",
      marginTop: "20px",
      padding: "20px",
      backgroundColor: "transparent",
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Scatter 
        data={chartData} 
        options={chartOptions}
        redraw={false}
      />
    </div>
  );
};

export default WebsiteRatingGraph;
