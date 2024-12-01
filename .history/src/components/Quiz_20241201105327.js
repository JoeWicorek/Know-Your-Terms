import React, { useState } from 'react';
import './DigitalFootprintQuiz.css';

function TermsOfServiceQuiz() {
    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    // Platform data
    const platforms = {
        Meta: {
            clarity: 3,
            transparency: 3,
            fairness: 4,
            accessibility: 2,
            accountability: 4,
        },
        TikTok: {
            clarity: 3,
            transparency: 3,
            fairness: 4,
            accessibility: 3,
            accountability: 4,
        },
        Pinterest: {
            clarity: 2,
            transparency: 3,
            fairness: 3,
            accessibility: 2,
            accountability: 2,
        },
        ChatGPT: {
            clarity: 2,
            transparency: 2,
            fairness: 3,
            accessibility: 2,
            accountability: 3,
        },
        Instagram: {
            clarity: 2,
            transparency: 3,
            fairness: 3,
            accessibility: 2,
            accountability: 4,
        },
        Gmail: {
            clarity: 2,
            transparency: 3,
            fairness: 3,
            accessibility: 2,
            accountability: 3,
        },
        Flo: {
            clarity: 3,
            transparency: 3,
            fairness: 3,
            accessibility: 3,
            accountability: 3,
        },
    };

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setAnswers({ ...answers, [name]: checked });
    };

    const calculateScore = () => {
        let totalScore = 0;
        let selectedPlatforms = 0;

        Object.keys(answers).forEach((platform) => {
            if (answers[platform]) {
                selectedPlatforms++;
                const { clarity, transparency, fairness, accessibility, accountability } = platforms[platform];
                totalScore += clarity + transparency + fairness + accessibility + accountability;
            }
        });

        const averageScore = selectedPlatforms ? totalScore / (selectedPlatforms * 5) : 0;
        setScore(averageScore);
    };

    const getGrade = () => {
        if (score === null) return '';
        if (score <= 2) return 'A';
        if (score <= 2.5) return 'B';
        if (score <= 3.5) return 'C';
        if (score <= 4.5) return 'D';
        return 'F';
    };

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">Terms of Service: Platform Evaluation</h2>
            <p className="quiz-description">Select the platforms you want to evaluate based on their terms of service.</p>

            <div className="quiz-options">
                {Object.keys(platforms).map((platform) => (
                    <div key={platform} className="quiz-option">
                        <label className="quiz-label">
                            <input
                                type="checkbox"
                                name={platform}
                                checked={!!answers[platform]}
                                onChange={handleChange}
                                className="quiz-checkbox"
                            />
                            {platform}
                        </label>
                    </div>
                ))}
            </div>

            <button onClick={calculateScore} className="quiz-button">
                Get Your Evaluation Score
            </button>

            {score !== null && (
                <div className="quiz-result">
                    <h3>Your Average Score: <span className="score">{score.toFixed(2)}</span></h3>
                    <p>Your overall grade: <strong className="grade">{getGrade()}</strong></p>
                    <h4>Breakdown by Selected Platforms:</h4>
                    <ul>
                        {Object.keys(answers).map(
                            (platform) =>
                                answers[platform] && (
                                    <li key={platform}>
                                        {platform}: Average Score - {Object.values(platforms[platform]).reduce((a, b) => a + b) / 5}
                                    </li>
                                )
                        )}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default TermsOfServiceQuiz;
