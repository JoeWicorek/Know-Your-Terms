import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { FaArrowLeft, FaArrowRight, FaCheck, FaTimes, FaInfoCircle, FaShieldAlt } from 'react-icons/fa';

const RightsAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  const questions = [
    {
      question: "Which of the following is a fundamental digital right you should expect from online services?",
      options: [
        "The right to have all your data stored indefinitely",
        "The right to access and download your personal data",
        "The right to have your data shared with marketing partners",
        "The right to have your browsing history tracked across all sites"
      ],
      correctAnswer: 1,
      explanation: "The right to access and download your personal data is a fundamental digital right established by regulations like GDPR in Europe. This allows you to know what information companies have about you and potentially transfer it to other services."
    },
    {
      question: "What does 'data portability' refer to?",
      options: [
        "The ability of companies to transfer your data to their partners",
        "The right to have your data deleted upon request",
        "The ability to access your data from any device",
        "The right to obtain and reuse your personal data across different services"
      ],
      correctAnswer: 3,
      explanation: "Data portability refers to your right to receive your personal data in a structured, commonly used format that you can transfer to another service provider. This prevents vendor lock-in and gives you more control over your data."
    },
    {
      question: "Which of the following statements about Terms of Service agreements is most accurate?",
      options: [
        "They are legally binding contracts that you cannot negotiate",
        "They only apply if you explicitly agree to them by clicking 'I Agree'",
        "They are legally binding contracts that can be enforced even if you don't read them",
        "They are optional guidelines that companies hope you'll follow"
      ],
      correctAnswer: 2,
      explanation: "Terms of Service are legally binding contracts that can be enforced even if you don't read them. Courts have generally held that by using a service, you implicitly agree to its terms, whether or not you've read them in detail."
    },
    {
      question: "What is the 'right to be forgotten'?",
      options: [
        "The right to use services anonymously",
        "The right to have your personal data deleted upon request",
        "The right to be excluded from marketing emails",
        "The right to use a pseudonym online"
      ],
      correctAnswer: 1,
      explanation: "The 'right to be forgotten' (or right to erasure) is the right to have your personal data deleted upon request when there's no compelling reason for a company to continue processing it. This is a key component of privacy regulations like GDPR."
    },
    {
      question: "Which of these practices violates your digital rights according to most privacy regulations?",
      options: [
        "A company collecting data necessary to provide their service",
        "A company using cookies with your consent",
        "A company selling your personal data to third parties without your explicit consent",
        "A company using anonymized data for improving their service"
      ],
      correctAnswer: 2,
      explanation: "Selling your personal data to third parties without your explicit consent violates your digital rights under regulations like GDPR and CCPA. Companies must obtain clear consent before sharing your personal information for commercial purposes."
    },
    {
      question: "What does 'informed consent' mean in the context of digital rights?",
      options: [
        "Agreeing to terms after being forced to read the entire document",
        "Understanding exactly how your data will be used before agreeing",
        "Consenting to a service after being informed it exists",
        "Agreeing to terms after watching an informational video"
      ],
      correctAnswer: 1,
      explanation: "Informed consent means you understand how your data will be collected, used, and shared before you agree to it. Companies should explain their data practices in clear, accessible language rather than hiding them in complex legal terms."
    },
    {
      question: "Which of the following is NOT typically covered by a website's Terms of Service?",
      options: [
        "How the company will use your personal data",
        "Intellectual property rights for content you create",
        "Dispute resolution procedures",
        "Your political opinions and beliefs"
      ],
      correctAnswer: 3,
      explanation: "Your political opinions and beliefs are not typically covered by Terms of Service agreements. While ToS documents cover how services work, user responsibilities, and company rights, they don't generally dictate your personal beliefs or political views."
    },
    {
      question: "What is 'dark pattern' design in digital services?",
      options: [
        "Using dark mode interfaces to reduce eye strain",
        "Designing websites with black backgrounds for aesthetic purposes",
        "Interface designs that trick users into making unintended choices",
        "Using encryption to hide user data from hackers"
      ],
      correctAnswer: 2,
      explanation: "Dark patterns are user interface designs that trick users into making choices they wouldn't otherwise make, such as signing up for newsletters, purchasing add-ons, or sharing more personal data than intended. These deceptive practices undermine user autonomy and informed consent."
    },
    {
      question: "What does the California Consumer Privacy Act (CCPA) give consumers the right to do?",
      options: [
        "Sue any company that collects their data",
        "Know what personal data is being collected about them and request its deletion",
        "Access any website without accepting cookies",
        "Demand monetary compensation for their data"
      ],
      correctAnswer: 1,
      explanation: "The CCPA gives California consumers the right to know what personal information is collected about them, the right to delete this information, the right to opt out of the sale of their personal information, and the right to non-discrimination for exercising these rights."
    },
    {
      question: "Which of these statements about arbitration clauses in Terms of Service is most accurate?",
      options: [
        "They benefit consumers by providing faster resolution of disputes",
        "They are illegal in most countries",
        "They typically prevent users from participating in class-action lawsuits",
        "They only apply to businesses, not individual users"
      ],
      correctAnswer: 2,
      explanation: "Arbitration clauses typically prevent users from participating in class-action lawsuits and require disputes to be resolved through private arbitration rather than court. This often benefits companies as arbitration can be less transparent and may result in smaller settlements."
    }
  ];

  const handleAnswerOptionClick = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setShowExplanation(true);
    
    if (answerIndex === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    setShowExplanation(false);
    setSelectedAnswer(null);
    
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowExplanation(false);
      setSelectedAnswer(null);
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  const getScoreMessage = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 90) {
      return "Excellent! You're a digital rights champion!";
    } else if (percentage >= 70) {
      return "Great job! You have a solid understanding of your digital rights.";
    } else if (percentage >= 50) {
      return "Good effort! You're on your way to understanding your digital rights better.";
    } else {
      return "Keep learning! Understanding your digital rights is important for protecting yourself online.";
    }
  };

  return (
    <div className={`quiz-container ${animateIn ? 'animate-in' : ''}`}>
      <div className="quiz-header">
        <h1>Digital Rights Assessment</h1>
        <p className="quiz-description">
          Test your knowledge of digital rights and how Terms of Service agreements impact them.
        </p>
      </div>

      {showScore ? (
        <div className="score-section">
          <h2>Assessment Complete!</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/{questions.length}</span>
            </div>
          </div>
          <p className="score-message">{getScoreMessage()}</p>
          <p className="score-explanation">
            Understanding your digital rights is essential in today's connected world. 
            By knowing your rights, you can make more informed decisions about the services you use and how your data is handled.
          </p>
          <div className="rights-tips">
            <h3><FaShieldAlt /> Tips to Protect Your Digital Rights</h3>
            <ul>
              <li>Read Terms of Service and Privacy Policies before agreeing</li>
              <li>Use privacy-focused browsers and search engines</li>
              <li>Regularly review and adjust privacy settings on your accounts</li>
              <li>Exercise your right to access and delete your data</li>
              <li>Support organizations that advocate for digital rights</li>
            </ul>
          </div>
          <div className="quiz-navigation">
            <button className="quiz-button restart-button" onClick={restartQuiz}>
              Take Again
            </button>
            <a href="#/" className="quiz-button home-button">
              Back to Home
            </a>
          </div>
        </div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].question}</div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((answerOption, index) => (
              <button
                key={index}
                className={`answer-button ${
                  selectedAnswer === index
                    ? index === questions[currentQuestion].correctAnswer
                      ? 'correct'
                      : 'incorrect'
                    : ''
                } ${selectedAnswer !== null ? 'disabled' : ''}`}
                onClick={() => handleAnswerOptionClick(index)}
                disabled={selectedAnswer !== null}
              >
                {answerOption}
                {selectedAnswer === index && (
                  <span className="answer-icon">
                    {index === questions[currentQuestion].correctAnswer ? (
                      <FaCheck />
                    ) : (
                      <FaTimes />
                    )}
                  </span>
                )}
              </button>
            ))}
          </div>
          
          {showExplanation && (
            <div className="explanation-section">
              <div className="explanation-header">
                <FaInfoCircle />
                <span>Explanation</span>
              </div>
              <p>{questions[currentQuestion].explanation}</p>
            </div>
          )}
          
          <div className="quiz-navigation">
            <button
              className="quiz-button prev-button"
              onClick={handlePrevQuestion}
              disabled={currentQuestion === 0}
            >
              <FaArrowLeft /> Previous
            </button>
            
            {selectedAnswer !== null && (
              <button
                className="quiz-button next-button"
                onClick={handleNextQuestion}
              >
                {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'} <FaArrowRight />
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default RightsAssessment;
