import React, { useState, useEffect } from 'react';
import './Quiz.css';
import { FaArrowLeft, FaArrowRight, FaCheck, FaTimes, FaInfoCircle, FaFileContract } from 'react-icons/fa';

const TermsQuiz = () => {
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
      question: "Which of these clauses from Facebook's Terms of Service is most concerning for user privacy?",
      options: [
        "We collect information about how you use our Products, such as the types of content you view or engage with...",
        "We use the information we have to deliver our Products, including to personalize features and content...",
        "We collect information about the people, accounts, hashtags and Facebook groups, and Pages you are connected to...",
        "When you share and communicate using our Products, you choose the audience for what you share..."
      ],
      correctAnswer: 2,
      explanation: "The clause about collecting information about people, accounts, and groups you're connected to is particularly concerning because it extends data collection beyond your own activities to your entire social network, creating a comprehensive profile of your relationships and associations."
    },
    {
      question: "Which of these common Terms of Service clauses gives companies the most control over your content?",
      options: [
        "Force Majeure clauses that protect companies from liability during extraordinary events",
        "Arbitration clauses that require disputes to be resolved outside of court",
        "Worldwide, non-exclusive, royalty-free license to use your content in any way they choose",
        "Clauses that allow companies to change their terms at any time without notice"
      ],
      correctAnswer: 2,
      explanation: "A 'worldwide, non-exclusive, royalty-free license' essentially gives companies complete freedom to use, modify, distribute, and even profit from your content without compensating you or seeking additional permission. This type of clause is common in social media platforms."
    },
    {
      question: "What does it typically mean when a Terms of Service includes an 'indemnification' clause?",
      options: [
        "The company will defend you in court if their service causes harm to others",
        "You agree to defend the company if your use of their service leads to a lawsuit",
        "The company promises to keep your data secure and private",
        "You can't sue the company for damages above a certain amount"
      ],
      correctAnswer: 1,
      explanation: "An indemnification clause typically means you agree to defend the company and pay for any legal costs if your use of their service results in a lawsuit against them. This shifts potential legal burdens from the company to you as the user."
    },
    {
      question: "Which of these statements about Terms of Service is FALSE?",
      options: [
        "Terms of Service are legally binding contracts",
        "You can negotiate Terms of Service with most online platforms",
        "Companies can change their Terms of Service at any time",
        "Not reading the Terms of Service doesn't exempt you from them"
      ],
      correctAnswer: 1,
      explanation: "It's false that you can negotiate Terms of Service with most online platforms. These are typically 'take it or leave it' contracts of adhesion where users have no bargaining power to modify the terms. Your only options are to accept the terms as written or not use the service."
    },
    {
      question: "What is a 'clickwrap agreement'?",
      options: [
        "A contract that requires you to physically sign a document",
        "A contract that requires you to click 'I Agree' to indicate consent",
        "A contract that automatically applies when you visit a website",
        "A contract that only applies to paid services"
      ],
      correctAnswer: 1,
      explanation: "A clickwrap agreement requires users to take an affirmative action (clicking 'I Agree' or a similar button) to indicate they consent to the terms. Courts generally find these more enforceable than 'browsewrap' agreements, which claim to apply automatically when you visit a site."
    },
    {
      question: "Which of these is a red flag in a company's Terms of Service?",
      options: [
        "A privacy policy that explains what data is collected",
        "A clause stating the governing law for the agreement",
        "A mandatory arbitration clause with class action waiver",
        "A clause defining acceptable use of the service"
      ],
      correctAnswer: 2,
      explanation: "A mandatory arbitration clause with class action waiver is a red flag because it prevents you from suing the company in court and from joining with other users in class action lawsuits. This significantly limits your ability to seek remedies if the company violates your rights."
    },
    {
      question: "What does it mean when a Terms of Service includes a 'severability' clause?",
      options: [
        "The company can terminate your account at any time",
        "You can cancel your subscription without penalty",
        "If one part of the agreement is found invalid, the rest still applies",
        "The agreement expires after a certain period"
      ],
      correctAnswer: 2,
      explanation: "A severability clause means that if a court finds one provision of the Terms of Service to be unenforceable or invalid, the rest of the agreement remains in effect. This protects the company by ensuring the entire agreement isn't voided if one part is problematic."
    },
    {
      question: "Which of these companies is known for having particularly lengthy Terms of Service?",
      options: [
        "Apple",
        "Microsoft",
        "Google",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "All of these companies (Apple, Microsoft, and Google) are known for having exceptionally lengthy Terms of Service. Apple's terms are estimated to be over 7,000 words, Microsoft's over 15,000 words, and Google's various terms collectively exceed 20,000 words, making them practically impossible for average users to read fully."
    },
    {
      question: "What is 'browsewrap'?",
      options: [
        "A type of web browser that automatically accepts all cookies",
        "Terms that claim to apply simply by browsing a website, without explicit consent",
        "A feature that summarizes Terms of Service for users",
        "A plugin that blocks websites with unfair Terms of Service"
      ],
      correctAnswer: 1,
      explanation: "Browsewrap refers to Terms of Service that claim to apply automatically when you browse a website, without requiring any explicit action from you to indicate consent. Courts have increasingly questioned the enforceability of browsewrap agreements because users may not be aware they exist."
    },
    {
      question: "Which of these clauses might you find in a Terms of Service that could limit your legal rights?",
      options: [
        "A clause specifying which country's laws govern the agreement",
        "A clause limiting liability to the amount you paid for the service",
        "A clause requiring disputes to be resolved in a specific location",
        "All of the above"
      ],
      correctAnswer: 3,
      explanation: "All of these clauses can limit your legal rights. Choice of law clauses may apply laws unfavorable to consumers; liability limitations can prevent full recovery for damages; and forum selection clauses may require you to travel to distant locations to pursue legal action, making it impractical to do so."
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
      return "Outstanding! You're a Terms of Service expert!";
    } else if (percentage >= 70) {
      return "Great job! You have a solid understanding of Terms of Service agreements.";
    } else if (percentage >= 50) {
      return "Good effort! You're on your way to understanding Terms of Service better.";
    } else {
      return "Keep learning! Understanding Terms of Service is important for protecting your rights online.";
    }
  };

  return (
    <div className={`quiz-container ${animateIn ? 'animate-in' : ''}`}>
      <div className="quiz-header">
        <h1>Terms of Service Quiz</h1>
        <p className="quiz-description">
          Test your knowledge of Terms of Service agreements and learn how to identify concerning clauses.
        </p>
      </div>

      {showScore ? (
        <div className="score-section">
          <h2>Quiz Complete!</h2>
          <div className="score-display">
            <div className="score-circle">
              <span className="score-number">{score}</span>
              <span className="score-total">/{questions.length}</span>
            </div>
          </div>
          <p className="score-message">{getScoreMessage()}</p>
          <p className="score-explanation">
            Understanding Terms of Service agreements is crucial in today's digital world. 
            These documents define your legal relationship with online services and can significantly impact your rights.
          </p>
          <div className="rights-tips">
            <h3><FaFileContract /> Tips for Dealing with Terms of Service</h3>
            <ul>
              <li>Look for plain language summaries of Terms of Service</li>
              <li>Pay attention to clauses about data usage, content ownership, and dispute resolution</li>
              <li>Use tools like ToS;DR (Terms of Service; Didn't Read) to get quick assessments</li>
              <li>Be wary of services that frequently change their terms without notice</li>
              <li>Consider the trade-offs between convenience and privacy/rights</li>
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

export default TermsQuiz;
