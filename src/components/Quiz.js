import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import { FaShieldAlt, FaGavel, FaFileContract } from 'react-icons/fa';

const Quiz = () => {
  return (
    <div className="page-wrapper">
      <div className="quiz-container">
        <h1>Knowledge Quizzes</h1>
        
        <div className="quiz-description">
          <p>Test your understanding of digital rights, privacy policies, and terms of service with our interactive quizzes. Each quiz is designed to help you learn more about how your data is used online and what rights you have as a user.</p>
        </div>

        <div className="quiz-options-grid">
          <Link to="/privacy-challenge" className="quiz-option-card">
            <div className="option-icon">
              <FaShieldAlt size={30} />
            </div>
            <div className="option-content">
              <h3>Privacy Policy Challenge</h3>
              <p>Test your knowledge of privacy policies and learn how to identify concerning clauses that may affect your data privacy.</p>
              <span className="option-cta">Start Quiz &rarr;</span>
            </div>
          </Link>

          <Link to="/digital-rights-assessment" className="quiz-option-card">
            <div className="option-icon">
              <FaGavel size={30} />
            </div>
            <div className="option-content">
              <h3>Digital Rights Assessment</h3>
              <p>Evaluate your understanding of digital rights and learn how to protect yourself online.</p>
              <span className="option-cta">Start Quiz &rarr;</span>
            </div>
          </Link>

          <Link to="/terms-quiz" className="quiz-option-card">
            <div className="option-icon">
              <FaFileContract size={30} />
            </div>
            <div className="option-content">
              <h3>Terms of Service Quiz</h3>
              <p>Challenge yourself to understand the common terms and conditions you agree to when using online services.</p>
              <span className="option-cta">Start Quiz &rarr;</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
