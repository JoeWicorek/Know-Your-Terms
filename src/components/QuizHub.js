import React from 'react';
import { Link } from 'react-router-dom';
import './Quiz.css';
import { FaUserLock, FaShieldAlt, FaFileContract } from 'react-icons/fa';

const QuizHub = () => {
  return (
    <div className="page-wrapper">
      <div className="quiz-container">
        <h1 className="heading">Knowledge Quizzes</h1>
        
        <div className="quiz-description">
          <p>Test your knowledge with our interactive quizzes on privacy, digital rights, and terms of service.</p>
        </div>

        <div className="quiz-options-grid">
          <Link to="/privacy-challenge" className="quiz-option-card">
            <div className="option-icon">
              <FaUserLock size={30} />
            </div>
            <div className="option-content">
              <h3 className="option-heading">Privacy Policy Challenge</h3>
              <p className="option-text">Test your knowledge of privacy policies and learn to identify concerning clauses.</p>
              <span className="option-cta">Take the Challenge →</span>
            </div>
          </Link>

          <Link to="/digital-rights-assessment" className="quiz-option-card">
            <div className="option-icon">
              <FaShieldAlt size={30} />
            </div>
            <div className="option-content">
              <h3 className="option-heading">Digital Rights Assessment</h3>
              <p className="option-text">Learn about your digital rights and how to protect them online.</p>
              <span className="option-cta">Start Assessment →</span>
            </div>
          </Link>

          <Link to="/terms-quiz" className="quiz-option-card">
            <div className="option-icon">
              <FaFileContract size={30} />
            </div>
            <div className="option-content">
              <h3 className="option-heading">Terms of Service Quiz</h3>
              <p className="option-text">Understand the legal implications of Terms of Service agreements.</p>
              <span className="option-cta">Start Quiz →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizHub;
