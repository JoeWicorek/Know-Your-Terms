import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import './Chart.css';

// Register necessary components in Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ChartWithImages() {
    const data = [
        { platform: "Location", infoCount: 10, imageSrc: "/img/facebook.png" },
        { platform: "Precise Location", infoCount: 9, imageSrc: "/img/google.png" },
        { platform: "Coarse Location", infoCount: 8, imageSrc: "/img/twitter.png" },
        { platform: "Contact Info", infoCount: 7, imageSrc: "/img/instagram.png" },
        { platform: "Physical Address", infoCount: 6, imageSrc: "/img/tiktok.png" },
        { platform: "Email Address", infoCount: 5, imageSrc: "/img/facebook.png" },
        { platform: "Name", infoCount: 4, imageSrc: "/img/google.png" },
        { platform: "Phone Number", infoCount: 3, imageSrc: "/img/twitter.png" },
        { platform: "Photos", infoCount: 2, imageSrc: "/img/instagram.png" },
        { platform: "Camera", infoCount: 1, imageSrc: "/img/tiktok.png" },
        { platform: "Microphone", infoCount: 1, imageSrc: "/img/facebook.png" }
    ];

    const [loadedImages, setLoadedImages] = useState([]);

    useEffect(() => {
        // Preload images
        const images = data.map(item => {
            const img = new Image();
            img.src = item.imageSrc;
            return img;
        });

        Promise.all(images.map(img => new Promise(resolve => {
            img.onload = resolve;
        }))).then(() => {
            setLoadedImages(images);
        });
    }, []);

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
                backgroundColor: "transparent",
                borderColor: "rgba(0, 0, 0, 0.1)",
                borderWidth: 1,
            }
        ]
    };

    const imagePlugin = {
        id: "customImagePlugin",
        afterDatasetDraw(chart) {
            const { ctx, scales: { x, y } } = chart;

            loadedImages.forEach((img, index) => {
                const xPos = x.getPixelForValue(index);
                const yPos = y.getPixelForValue(data[index].infoCount) - 30; // Adjust y position slightly higher

                ctx.drawImage(img, xPos - 15, yPos, 30, 30); // Adjust x/y and size as needed
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
