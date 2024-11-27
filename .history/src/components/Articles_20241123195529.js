import React, { useState } from 'react';
import './Nav.css';

function DigitalFootprintQuiz() {
    // State to manage quiz answers
    const [answers, setAnswers] = useState({
        facebook: false,
        instagram: false,
        twitter: false,
        google: false,
        tiktok: false,
        linkedin: false,
        snapchat: false,
        whatsapp: false,
    });

    const [score, setScore] = useState(null);

    // Data collection practices for each app (based on publicly available information)
    const dataCollection = {
        facebook: ['PII', 'Location', 'Behavioral', 'Contacts', 'Media'],
        instagram: ['PII', 'Location', 'Behavioral', 'Media'],
        twitter: ['PII', 'Behavioral', 'Location'],
        google: ['PII', 'Location', 'Behavioral', 'Contacts', 'Media'],
        tiktok: ['PII', 'Location', 'Behavioral', 'Media'],
        linkedin: ['PII', 'Behavioral', 'Location'],
        snapchat: ['PII', 'Location', 'Behavioral', 'Media'],
        whatsapp: ['PII', 'Contacts', 'Media'],
    };

    // Handle change in checkboxes
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setAnswers({
            ...answers,
            [name]: checked,
        });
    };

    // Calculate score based on answers and data collection practices
    const calculateScore = () => {
        let totalScore = 0;

        Object.keys(answers).forEach((app) => {
            if (answers[app]) {
                totalScore += dataCollection[app].length * 5; // Each type of data collected adds 5 points
            }
        });

        setScore(totalScore);
    };

    // Get a grade based on the score
    const getGrade = () => {
        if (score === null) return '';

        if (score <= 20) return 'Low Exposure';
        if (score <= 50) return 'Moderate Exposure';
        return 'High Exposure';
    };

    return (
        <div style={{ width: '60%', margin: '0 auto', paddingTop: '20px' }}>
            <h2>How Much of Your Digital Information Is Out There?</h2>
            <p>Check the apps you use to see how much of your digital footprint is exposed.</p>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="facebook"
                        checked={answers.facebook}
                        onChange={handleChange}
                    />
                    Facebook
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="instagram"
                        checked={answers.instagram}
                        onChange={handleChange}
                    />
                    Instagram
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="twitter"
                        checked={answers.twitter}
                        onChange={handleChange}
                    />
                    Twitter
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="google"
                        checked={answers.google}
                        onChange={handleChange}
                    />
                    Google (Gmail, YouTube, Maps, etc.)
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="tiktok"
                        checked={answers.tiktok}
                        onChange={handleChange}
                    />
                    TikTok
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="linkedin"
                        checked={answers.linkedin}
                        onChange={handleChange}
                    />
                    LinkedIn
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="snapchat"
                        checked={answers.snapchat}
                        onChange={handleChange}
                    />
                    Snapchat
                </label>
            </div>

            <div style={{ marginBottom: '15px' }}>
                <label>
                    <input
                        type="checkbox"
                        name="whatsapp"
                        checked={answers.whatsapp}
                        onChange={handleChange}
                    />
                    WhatsApp
                </label>
            </div>

            <button onClick={calculateScore} style={{ marginTop: '20px', padding: '10px 20px' }}>
                Get Your Score
            </button>

            {score !== null && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Your Digital Footprint Exposure Score: {score}</h3>
                    <p>Your exposure level is: <strong>{getGrade()}</strong></p>
                </div>
            )}
        </div>
    );
}

export default DigitalFootprintQuiz;
