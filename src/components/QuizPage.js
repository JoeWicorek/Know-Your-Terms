import React from 'react';
import { Link } from 'react-router-dom';
import { FaShieldAlt, FaGavel, FaFileContract } from 'react-icons/fa';

const QuizPage = () => {
  // Define inline styles to match the rest of the application
  const styles = {
    pageWrapper: {
      minHeight: '100vh',
      backgroundColor: '#121212', // Match dark-bg from App.css
      padding: '20px'
    },
    quizContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px',
      color: '#F0F4F8' // Match text-light from App.css
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#F0F4F8', // Match text-light from App.css
      fontSize: '2.5rem'
    },
    description: {
      textAlign: 'center',
      marginBottom: '40px',
      color: '#B0B8C4', // Match text-medium from App.css
      maxWidth: '800px',
      marginLeft: 'auto',
      marginRight: 'auto',
      fontSize: '1.1rem',
      lineHeight: '1.6'
    },
    optionsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '30px',
      marginTop: '40px'
    },
    optionCard: {
      backgroundColor: '#242424', // Match dark-card from App.css
      borderRadius: '12px', // Match border-radius from App.css
      padding: '30px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.25)', // Match card-shadow from App.css
      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      textDecoration: 'none',
      color: '#F0F4F8', // Match text-light from App.css
      height: '100%',
      minHeight: '250px',
      position: 'relative',
      overflow: 'hidden'
    },
    optionCardHover: {
      transform: 'translateY(-5px)',
      boxShadow: '0 12px 30px rgba(0, 0, 0, 0.35)'
    },
    optionIcon: {
      fontSize: '2.5rem',
      marginBottom: '20px',
      color: '#4FB0C6', // Match accent from App.css
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '70px',
      height: '70px',
      backgroundColor: 'rgba(79, 176, 198, 0.1)', // Slightly transparent accent color
      borderRadius: '50%'
    },
    optionContent: {
      flex: 1
    },
    optionHeading: {
      marginTop: 0,
      marginBottom: '15px',
      fontSize: '1.5rem',
      color: '#F0F4F8' // Match text-light from App.css
    },
    optionText: {
      marginBottom: '20px',
      color: '#B0B8C4', // Match text-medium from App.css
      lineHeight: '1.6'
    },
    optionCta: {
      display: 'inline-block',
      fontWeight: 'bold',
      color: '#4FB0C6', // Match accent from App.css
      marginTop: 'auto'
    }
  };

  // Function to handle card hover effect
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.35)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.25)';
  };

  return (
    <div style={styles.pageWrapper}>
      <div style={styles.quizContainer}>
        <h1 style={styles.heading}>Knowledge Quizzes</h1>
        
        <div style={styles.description}>
          <p>Test your understanding of digital rights, privacy policies, and terms of service with our interactive quizzes. Each quiz is designed to help you learn more about how your data is used online and what rights you have as a user.</p>
        </div>

        <div style={styles.optionsGrid}>
          <Link 
            to="/privacy-challenge" 
            style={styles.optionCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.optionIcon}>
              <FaShieldAlt size={30} />
            </div>
            <div style={styles.optionContent}>
              <h3 style={styles.optionHeading}>Privacy Policy Challenge</h3>
              <p style={styles.optionText}>Test your knowledge of privacy policies and learn how to identify concerning clauses that may affect your data privacy.</p>
              <span style={styles.optionCta}>Start Quiz →</span>
            </div>
          </Link>

          <Link 
            to="/digital-rights-assessment" 
            style={styles.optionCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.optionIcon}>
              <FaGavel size={30} />
            </div>
            <div style={styles.optionContent}>
              <h3 style={styles.optionHeading}>Digital Rights Assessment</h3>
              <p style={styles.optionText}>Evaluate your understanding of digital rights and learn how to protect yourself online.</p>
              <span style={styles.optionCta}>Start Quiz →</span>
            </div>
          </Link>

          <Link 
            to="/terms-quiz" 
            style={styles.optionCard}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div style={styles.optionIcon}>
              <FaFileContract size={30} />
            </div>
            <div style={styles.optionContent}>
              <h3 style={styles.optionHeading}>Terms of Service Quiz</h3>
              <p style={styles.optionText}>Challenge yourself to understand the common terms and conditions you agree to when using online services.</p>
              <span style={styles.optionCta}>Start Quiz →</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
