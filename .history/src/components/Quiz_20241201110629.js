import React, { useState } from 'react';
import './TermsOfServiceQuiz.css';

function TermsOfServiceQuiz() {
    const [answers, setAnswers] = useState({});
    const [percentage, setPercentage] = useState(null);

    // Platform data categorized
    const platforms = {
        "Popular Social Platforms": {
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
        },
        "Other Platforms": {
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
        },
    };

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setAnswers({ ...answers, [name]: checked });
    };

    const calculatePercentage = () => {
        const maxScore = 25; // 5 criteria, each with max score of 5
        const minScore = 5; // 5 criteria, each with min score of 1

        let totalPercentage = 0;
        let selectedPlatforms = 0;

        Object.keys(answers).forEach((platform) => {
            if (answers[platform]) {
                selectedPlatforms++;
                const { clarity, transparency, fairness, accessibility, accountability } = Object.values(platforms)
                    .flatMap((category) => Object.entries(category))
                    .find(([key]) => key === platform)[1];

                const actualScore = clarity + transparency + fairness + accessibility + accountability;
                const platformPercentage = ((maxScore - actualScore) / (maxScore - minScore)) * 100;
                totalPercentage += platformPercentage;
            }
        });

        setPercentage(selectedPlatforms ? totalPercentage / selectedPlatforms : 0);
    };

    const getGrade = () => {
        if (percentage === null) return '';
        if (percentage >= 90) return 'A';
        if (percentage >= 80) return 'B';
        if (percentage >= 70) return 'C';
        if (percentage >= 60) return 'D';
        return 'F';
    };

    return (
        <div className="quiz-container">
            <h2 className="quiz-title">Terms of Service: Platform Evaluation</h2>
            <p className="quiz-description">Select the platforms you want to evaluate based on their terms of service.</p>

            {/* Render categorized platform options */}
            {Object.entries(platforms).map(([category, platforms]) => (
                <div key={category} className="quiz-group">
                    <h3 className="quiz-group-title">{category}</h3>
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
                </div>
            ))}

            <button onClick={calculatePercentage} className="quiz-button">
                Get Your Evaluation Percentage
            </button>

            {percentage !== null && (
                <div className="quiz-result">
                    <h3>Your Average Percentage: <span className="percentage">{percentage.toFixed(2)}%</span></h3>
                    <p>Your overall grade: <strong className="grade">{getGrade()}</strong></p>
                </div>
            )}
        </div>
    );
}

export default TermsOfServiceQuiz;
