import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const DigitalRightsAssessment = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "What is the 'Right to be Forgotten'?",
      options: [
        "The right to have your data deleted from a service upon request",
        "The right to use online services anonymously",
        "The right to be excluded from search results",
        "The right to delete your social media accounts"
      ],
      correctAnswer: 0,
      explanation: "The 'Right to be Forgotten' allows individuals to request the removal of their personal data from online services when there's no compelling reason for its continued processing."
    },
    {
      question: "What does the GDPR (General Data Protection Regulation) primarily protect?",
      options: [
        "Copyright of digital content",
        "Personal data of EU citizens and residents",
        "Digital infrastructure from cyber attacks",
        "Children from harmful online content"
      ],
      correctAnswer: 1,
      explanation: "The GDPR is a regulation in EU law on data protection and privacy that primarily protects the personal data of individuals in the European Union and European Economic Area."
    },
    {
      question: "What is 'data portability'?",
      options: [
        "The ability to access the internet from multiple devices",
        "The right to transfer your personal data from one service to another",
        "The process of converting data between different formats",
        "The ability to use cloud storage services"
      ],
      correctAnswer: 1,
      explanation: "Data portability is the right to receive your personal data in a structured, commonly used, machine-readable format, and to transmit that data to another controller without hindrance."
    },
    {
      question: "What is 'net neutrality'?",
      options: [
        "The principle that internet service providers should treat all internet traffic equally",
        "The idea that the internet should be politically neutral",
        "A law requiring websites to be accessible to everyone",
        "The concept that internet access should be free for all"
      ],
      correctAnswer: 0,
      explanation: "Net neutrality is the principle that internet service providers must treat all internet communications equally and not discriminate or charge differently based on user, content, website, platform, application, type of equipment, or method of communication."
    },
    {
      question: "What does 'informed consent' mean in the context of digital rights?",
      options: [
        "Agreeing to terms of service without reading them",
        "Being notified when your data is breached",
        "Understanding what data is collected and how it will be used before agreeing",
        "Consenting to receive marketing emails"
      ],
      correctAnswer: 2,
      explanation: "Informed consent means that individuals must be clearly informed about the collection and use of their personal data in plain language before they agree to it, understanding the implications of their consent."
    },
    {
      question: "What is 'surveillance capitalism'?",
      options: [
        "Government monitoring of citizens for security purposes",
        "An economic system based on the commodification of personal data for profit",
        "The use of cameras in retail stores to prevent theft",
        "Corporate espionage to gain competitive advantages"
      ],
      correctAnswer: 1,
      explanation: "Surveillance capitalism is an economic system centered around the capturing and commodification of personal data for profit, often involving the prediction and modification of human behavior."
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
          <h1>Digital Rights Assessment Results</h1>
          
          <div className="results-container">
            <h2>Your Score: {score} out of {questions.length} ({percentage}%)</h2>
            
            {percentage >= 80 ? (
              <p>Excellent! You have a strong understanding of digital rights and their importance in today's online world.</p>
            ) : percentage >= 60 ? (
              <p>Good work! You understand many digital rights concepts, but there's still more to learn.</p>
            ) : (
              <p>Digital rights can be complex. Keep learning to better understand your rights in the digital world.</p>
            )}
            
            <div className="button-container">
              <button onClick={handleRestartClick} className="quiz-button">
                Restart Assessment
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
        <h1>Digital Rights Assessment</h1>
        
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

export default DigitalRightsAssessment;
