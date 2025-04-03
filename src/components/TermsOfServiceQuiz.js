import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';

const TermsOfServiceQuiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Which of the following is a red flag in a Terms of Service agreement?",
      options: [
        "The company provides a summary of key terms at the beginning of the document",
        "The agreement states the company can change terms without notifying users",
        "The document includes contact information for customer support",
        "The agreement specifies which country's laws govern the terms"
      ],
      correctAnswer: 1,
      explanation: "Terms that allow companies to change the agreement without notification are problematic because users may be bound by terms they never agreed to and weren't informed about."
    },
    {
      question: "What does an arbitration clause in a Terms of Service typically mean?",
      options: [
        "The company will mediate any disputes between users",
        "You can sue the company in your local court",
        "You waive your right to join a class action lawsuit",
        "The company will pay for legal representation if you have a dispute"
      ],
      correctAnswer: 2,
      explanation: "Arbitration clauses typically prevent users from filing or joining class action lawsuits and require disputes to be settled through private arbitration, which often favors the company."
    },
    {
      question: "Which of these statements about data ownership in Terms of Service is most concerning?",
      options: [
        "The company will store your data securely on their servers",
        "The company will delete your data upon account closure",
        "The company grants you a license to use their platform",
        "The company claims an irrevocable right to use any content you upload"
      ],
      correctAnswer: 3,
      explanation: "When a company claims irrevocable rights to your content, they can continue to use, modify, or profit from your content even after you delete it or close your account."
    },
    {
      question: "What does it mean when a Terms of Service includes an 'indemnification clause'?",
      options: [
        "The company will compensate you if their service causes you harm",
        "You agree to pay for the company's legal defense if your actions lead to a lawsuit against them",
        "The company guarantees the service will be available 99.9% of the time",
        "You can request compensation if the service is unavailable"
      ],
      correctAnswer: 1,
      explanation: "An indemnification clause shifts legal responsibility to you, meaning you might have to pay for the company's legal fees and damages if your use of their service results in a lawsuit against them."
    },
    {
      question: "Which of these Terms of Service provisions is most likely to be unenforceable in court?",
      options: [
        "Requirements to provide accurate personal information",
        "Prohibition against using the service for illegal activities",
        "Waiver of all legal rights, including those guaranteed by law",
        "Age restrictions for using the service"
      ],
      correctAnswer: 2,
      explanation: "Terms that attempt to waive rights that are guaranteed by law (such as consumer protection laws) are typically unenforceable, as companies cannot contract around mandatory legal protections."
    },
    {
      question: "What should you be concerned about if a Terms of Service has a 'unilateral modification' clause?",
      options: [
        "The company can change the terms at any time without notice",
        "The company can modify your content without permission",
        "The company can transfer ownership to another entity",
        "The company can restrict your access based on geographic location"
      ],
      correctAnswer: 0,
      explanation: "Unilateral modification clauses allow companies to change their terms whenever they want, often without notifying users. This means you could be bound by terms you never agreed to and weren't aware had changed."
    },
    {
      question: "Which of these is NOT typically included in a Terms of Service agreement?",
      options: [
        "Intellectual property rights",
        "Limitation of liability",
        "Guaranteed refund policy",
        "Acceptable use policy"
      ],
      correctAnswer: 2,
      explanation: "While many Terms of Service include information about refunds, they rarely guarantee refunds. Instead, they typically outline limited circumstances under which refunds might be issued, or state that all sales are final."
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
          <h1>Terms of Service Quiz Results</h1>
          
          <div className="results-container">
            <h2>Your Score: {score} out of {questions.length} ({percentage}%)</h2>
            
            {percentage >= 80 ? (
              <p>Great job! You have a strong understanding of Terms of Service agreements.</p>
            ) : percentage >= 60 ? (
              <p>Good work! You understand the basics of Terms of Service agreements, but there's still more to learn.</p>
            ) : (
              <p>You might want to review Terms of Service concepts. Understanding these agreements is important for protecting your rights online.</p>
            )}
            
            <div className="button-container">
              <button onClick={handleRestartClick} className="quiz-button">
                Restart Quiz
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
        <h1>Terms of Service Quiz</h1>
        
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

export default TermsOfServiceQuiz;
