import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaGavel, FaFileContract } from 'react-icons/fa';
import './QuizPage.css';

const QuizPage = () => {
  useEffect(() => {
    // Add animation class after component mounts
    const timer = setTimeout(() => {
      document.querySelector('.quiz-page-container').classList.add('loaded');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="quiz-page-container">
      <div className="quiz-page-hero">
        <h1 className="quiz-page-title">Knowledge <span className="highlight">Quizzes</span></h1>
        <p className="quiz-page-subtitle">Test your understanding of digital rights, privacy policies, and terms of service with our interactive quizzes.</p>
      </div>

      <div className="quiz-page-content">
        <div className="quiz-page-description">
          <p>Each quiz is designed to help you learn more about how your data is used online and what rights you have as a user.</p>
        </div>

        <div className="quiz-cards">
          <Link to="/quizzes/privacy-policy-challenge" className="quiz-card">
            <div className="quiz-card-icon">
              <FaShieldAlt />
            </div>
            <div className="quiz-card-content">
              <h3>Privacy Policy Challenge</h3>
              <p>Test your knowledge of privacy policies and learn how to identify concerning clauses that may affect your data privacy.</p>
              <span className="quiz-card-cta">Start Quiz →</span>
            </div>
          </Link>

          <Link to="/quizzes/digital-rights-assessment" className="quiz-card">
            <div className="quiz-card-icon">
              <FaGavel />
            </div>
            <div className="quiz-card-content">
              <h3>Digital Rights Assessment</h3>
              <p>Evaluate your understanding of digital rights and learn how to protect yourself online.</p>
              <span className="quiz-card-cta">Start Quiz →</span>
            </div>
          </Link>

          <Link to="/quizzes/terms-of-service-quiz" className="quiz-card">
            <div className="quiz-card-icon">
              <FaFileContract />
            </div>
            <div className="quiz-card-content">
              <h3>Terms of Service Quiz</h3>
              <p>Challenge yourself to understand the common terms and conditions you agree to when using online services.</p>
              <span className="quiz-card-cta">Start Quiz →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
