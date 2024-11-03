import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components in Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartWithImages() {
    // Replace this with your actual data
    const data = [
        {
            platform: "Facebook",
            infoCount: 10,
            imageSrc: "/path/to/facebook.png"
        },
        {
            platform: "Google",
            infoCount: 9,
            imageSrc: "/path/to/google.png"
        },
        {
            platform: "Twitter",
            infoCount: 7,
            imageSrc: "/path/to/twitter.png"
        },
        {
            platform: "Instagram",
            infoCount: 8,
            imageSrc: "/path/to/instagram.png"
        },
        {
            platform: "TikTok",
            infoCount: 6,
            imageSrc: "/path/to/tiktok.png"
        }
    ];

    // Set up chart options and add plugins
    const options = {
        responsive: true,
        plugins: {
            legend: { display: false },
            tooltip: {
                callbacks: {
                    label: (context) => `Info Count: ${context.raw}`
                }
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                max: 12
            }
        }
    };

    // Configure the data for the chart
    const chartData = {
        labels: data.map(item => item.platform),
        datasets: [
            {
                label: "Info Count",
                data: data.map(item => item.infoCount),
                backgroundColor: "rgba(75, 192, 192, 0.6)"
            }
        ]
    };

    // Define a custom plugin to add images
    const imagePlugin = {
        id: "customImagePlugin",
        afterDatasetDraw(chart, args, options) {
            const { ctx, chartArea: { top, left, right, bottom, width, height }, scales: { x, y } } = chart;

            data.forEach((item, index) => {
                const img = new Image();
                img.src = item.imageSrc;
                const xPos = x.getPixelForValue(index);
                const yPos = y.getPixelForValue(item.infoCount) - 25; // Adjust the y position for image placement

                // Draw the image when it loads
                img.onload = () => {
                    ctx.drawImage(img, xPos - 15, yPos, 30, 30); // Adjust x/y and size as needed
                };
            });
        }
    };

    return (
        <div>
            <Bar options={options} data={chartData} plugins={[imagePlugin]} />
        </div>
    );
}

export default ChartWithImages;
