import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register necessary components in Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartWithImages() {
    const data = [
        { platform: "Facebook", infoCount: 10, imageSrc: "/img/facebook.png" },
        { platform: "Google", infoCount: 9, imageSrc: "/img/google.png" },
        { platform: "Twitter", infoCount: 7, imageSrc: "/img/twitter.png" },
        { platform: "Instagram", infoCount: 8, imageSrc: "/img/instagram.png" },
        { platform: "TikTok", infoCount: 6, imageSrc: "/img/tiktok.png" }
    ];


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

    const chartData = {
        labels: data.map(item => item.platform),
        datasets: [
            {
                label: "Info Count",
                data: data.map(item => item.infoCount),
                backgroundColor: "transparent"  // Make the bars transparent
            }
        ]
    };

    // Custom plugin to add images
    const imagePlugin = {
        id: "customImagePlugin",
        afterDatasetDraw(chart) {
            const { ctx, scales: { x, y } } = chart;

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
