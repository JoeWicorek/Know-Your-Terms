import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const PrivacyChallenge = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Which of the following clauses from Facebook's privacy policy is most concerning?",
      options: [
        "We collect information about how you use our Products, such as the types of content you view or engage with",
        "We use the information we have to deliver our Products, including to personalize features and content",
        "We collect information about the people, accounts, hashtags, Facebook groups, and Pages you are connected to",
        "We use your profile picture in connection with ads, offers and other sponsored content that you follow or engage with"
      ],
      correctAnswer: 3,
      explanation: "The clause about using your profile picture for advertising without explicit consent for each use is concerning because it uses your likeness for commercial purposes without your specific approval for each instance."
    },
    {
      question: "What does it mean when a privacy policy states they share data with 'third-party partners'?",
      options: [
        "They only share anonymized, aggregated data that can't identify you",
        "They only share your data with companies they own",
        "They can share your personal information with other companies",
        "They only share technical information like device IDs"
      ],
      correctAnswer: 2,
      explanation: "When a company mentions sharing with 'third-party partners,' it typically means they can share your personal information with other companies they do business with, which could include advertisers, analytics providers, or business partners."
    },
    {
      question: "Which of these statements about data retention in privacy policies is most concerning?",
      options: [
        "We retain your data for as long as your account is active",
        "We retain your data for as long as necessary to provide our services",
        "We retain your data indefinitely, even after account deletion",
        "We retain your data in accordance with legal obligations"
      ],
      correctAnswer: 2,
      explanation: "Indefinite data retention, even after you've deleted your account, is concerning because it means the company maintains a record of your activities and information without a clear timeline for deletion, potentially exposing your data to future risks."
    },
    {
      question: "What does 'pseudonymized data' in a privacy policy typically mean?",
      options: [
        "Your data is completely anonymous and cannot be traced back to you",
        "Your data is encrypted and cannot be accessed by anyone",
        "Your data is labeled with an identifier instead of your name but could still be linked to you",
        "Your data is deleted after a short period of time"
      ],
      correctAnswer: 2,
      explanation: "Pseudonymized data replaces direct identifiers (like your name) with codes or IDs, but the company still maintains the ability to re-identify you by connecting these codes back to your personal information, meaning it's not truly anonymous."
    },
    {
      question: "Which of these statements about location tracking is most concerning?",
      options: [
        "We collect location data when you use location-based features",
        "We collect your precise location when the app is in use",
        "We collect your location even when the app is closed or not in use",
        "We collect your general location based on your IP address"
      ],
      correctAnswer: 2,
      explanation: "Collecting location data even when an app is closed or not in use is concerning because it means the app is tracking your movements at all times, potentially creating a detailed map of your daily routines without active consent."
    },
    {
      question: "What does it mean when a privacy policy mentions 'inferred data' or 'derived data'?",
      options: [
        "Data you've explicitly provided to the service",
        "Data collected from public sources",
        "Data created by analyzing your behavior and making predictions about you",
        "Data shared by other users about you"
      ],
      correctAnswer: 2,
      explanation: "Inferred or derived data refers to information a company creates about you through analysis of your behaviors, preferences, and characteristics. This can include sensitive predictions about your personality, future behaviors, or personal attributes that you never explicitly shared."
    },
    {
      question: "Which of these privacy policy statements about cookies is most concerning?",
      options: [
        "We use cookies to remember your login status",
        "We use cookies to track your browsing activity across other websites",
        "We use cookies to store your site preferences",
        "We use cookies to ensure the website functions properly"
      ],
      correctAnswer: 1,
      explanation: "Tracking your browsing activity across other websites (through third-party cookies) is concerning because it creates a detailed profile of your online behavior beyond the original website, often without clear consent for this extended tracking."
    }
  ];

  const handleAnswerClick = (questionIndex, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionIndex]: answerIndex
    });
  };

  const handleNextClick = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevClick = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRestartClick = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const calculateScore = () => {
    let score = 0;
    Object.keys(selectedAnswers).forEach(questionIndex => {
      if (selectedAnswers[questionIndex] === questions[questionIndex].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);
    
    return (
      <div className="page-wrapper">
        <div className="quiz-container">
          <h1>Privacy Challenge Results</h1>
          
          <div className="results-container">
            <h2>Your Score: {score} out of {questions.length} ({percentage}%)</h2>
            
            {percentage >= 80 ? (
              <p>Excellent! You have a strong understanding of privacy policies and their implications.</p>
            ) : percentage >= 60 ? (
              <p>Good work! You understand many privacy policy concerns, but there's still more to learn.</p>
            ) : (
              <p>Privacy policies can be complex. Keep learning to better protect your personal data online.</p>
            )}
            
            <div className="button-container">
              <button onClick={handleRestartClick} className="quiz-button">
                Restart Challenge
              </button>
              <Link to="/quiz" className="quiz-button">
                Back to Quizzes
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestionIndex];
  const isAnswered = selectedAnswer !== undefined;
  const isCorrect = isAnswered && selectedAnswer === currentQuestion.correctAnswer;

  return (
    <div className="page-wrapper">
      <div className="quiz-container">
        <h1>Privacy Policy Challenge</h1>
        
        <div className="progress-bar">
          <div 
            className="progress" 
            style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
          ></div>
        </div>
        
        <div className="question-container">
          <h2>Question {currentQuestionIndex + 1} of {questions.length}</h2>
          <p className="question">{currentQuestion.question}</p>
          
          <div className="options-container">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(currentQuestionIndex, index)}
                className={`option-button ${
                  selectedAnswer === index 
                    ? index === currentQuestion.correctAnswer 
                      ? 'correct' 
                      : 'incorrect' 
                    : ''
                }`}
                disabled={isAnswered}
              >
                {option}
              </button>
            ))}
          </div>
          
          {isAnswered && (
            <div className="explanation">
              <p>
                {isCorrect ? '✓ Correct! ' : '✗ Incorrect. '}
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>
        
        <div className="navigation-buttons">
          <button 
            onClick={handlePrevClick} 
            disabled={currentQuestionIndex === 0}
            className="quiz-button"
          >
            Previous
          </button>
          
          <button 
            onClick={handleNextClick} 
            disabled={!isAnswered}
            className="quiz-button primary"
          >
            {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyChallenge;
