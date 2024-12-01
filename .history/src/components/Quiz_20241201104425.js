import React, { useState } from 'react';
import './DigitalFootprintQuiz.css'; // Assuming you move styles to a CSS file

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
        <div className="quiz-container">
            <h2 className="quiz-title">How Much of Your Digital Information Is Out There?</h2>
            <p className="quiz-description">Check the apps you use to see how much of your digital footprint is exposed.</p>

            <div className="quiz-options">
                {Object.keys(answers).map((app) => (
                    <div key={app} className="quiz-option">
                        <label className="quiz-label">
                            <input
                                type="checkbox"
                                name={app}
                                checked={answers[app]}
                                onChange={handleChange}
                                className="quiz-checkbox"
                            />
                            {app.charAt(0).toUpperCase() + app.slice(1)}
                        </label>
                    </div>
                ))}
            </div>

            <button onClick={calculateScore} className="quiz-button">
                Get Your Score
            </button>

            {score !== null && (
                <div className="quiz-result">
                    <h3>Your Digital Footprint Exposure Score: <span className="score">{score}</span></h3>
                    <p>Your exposure level is: <strong className="exposure-level">{getGrade()}</strong></p>
                </div>
            )}
        </div>
    );
}

export default DigitalFootprintQuiz;
