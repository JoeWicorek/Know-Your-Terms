import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
      <div style={{
        minHeight: '100vh',
        backgroundColor: '#121212',
        color: '#F0F4F8',
        padding: '20px',
        fontFamily: 'Inter, Segoe UI, Roboto, sans-serif'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px',
          backgroundColor: '#1E1E1E',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
        }}>
          <h1 style={{ 
            textAlign: 'center', 
            marginBottom: '30px',
            fontSize: '2.5rem',
            fontWeight: '700',
            color: '#F0F4F8'
          }}>Privacy Challenge Results</h1>
          
          <div style={{ 
            textAlign: 'center', 
            marginBottom: '40px',
            padding: '30px',
            backgroundColor: '#242424',
            borderRadius: '8px'
          }}>
            <div style={{
              display: 'inline-block',
              padding: '15px 30px',
              backgroundColor: percentage >= 80 ? 'rgba(76, 175, 80, 0.2)' : 
                              percentage >= 60 ? 'rgba(255, 193, 7, 0.2)' : 
                              'rgba(244, 67, 54, 0.2)',
              borderRadius: '50px',
              marginBottom: '20px'
            }}>
              <h2 style={{
                fontSize: '2rem',
                marginBottom: '5px',
                color: percentage >= 80 ? '#4CAF50' : 
                       percentage >= 60 ? '#FFC107' : 
                       '#F44336'
              }}>
                {score} out of {questions.length} ({percentage}%)
              </h2>
            </div>
            
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              marginBottom: '30px',
              color: '#B0B8C4'
            }}>
              {percentage >= 80 ? (
                'Excellent! You have a strong understanding of privacy policies and their implications.'
              ) : percentage >= 60 ? (
                'Good work! You understand many privacy policy concerns, but there\'s still more to learn.'
              ) : (
                'Privacy policies can be complex. Keep learning to better protect your personal data online.'
              )}
            </p>
            
            <div style={{ marginTop: '30px' }}>
              <button 
                onClick={handleRestartClick} 
                style={{
                  display: 'inline-block',
                  backgroundColor: '#4FB0C6',
                  color: 'white',
                  padding: '12px 25px',
                  borderRadius: '30px',
                  border: 'none',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  margin: '10px 15px',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#7CCBD7';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#4FB0C6';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
                }}
              >
                Restart Challenge
              </button>
              <Link 
                to="/quiz" 
                style={{
                  display: 'inline-block',
                  backgroundColor: '#242424',
                  color: '#F0F4F8',
                  padding: '12px 25px',
                  borderRadius: '30px',
                  border: '1px solid #4FB0C6',
                  fontSize: '1rem',
                  fontWeight: '600',
                  cursor: 'pointer',
                  margin: '10px 15px',
                  textDecoration: 'none',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = '#2A2A2A';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                  e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = '#242424';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
                }}
              >
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
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#121212',
      color: '#F0F4F8',
      padding: '20px',
      fontFamily: 'Inter, Segoe UI, Roboto, sans-serif'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px',
        backgroundColor: '#1E1E1E',
        borderRadius: '12px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)'
      }}>
        <h1 style={{ 
          textAlign: 'center', 
          marginBottom: '30px',
          fontSize: '2.5rem',
          fontWeight: '700',
          color: '#F0F4F8'
        }}>Privacy Policy Challenge</h1>
        
        <div style={{ 
          marginBottom: '30px',
          backgroundColor: '#242424',
          borderRadius: '30px',
          padding: '3px',
          position: 'relative'
        }}>
          <div style={{
            width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`,
            height: '10px',
            backgroundColor: '#4FB0C6',
            borderRadius: '30px',
            transition: 'width 0.5s ease'
          }}></div>
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '0',
            fontSize: '0.9rem',
            color: '#B0B8C4'
          }}>
            Question {currentQuestionIndex + 1} of {questions.length}
          </div>
        </div>
        
        <div style={{ 
          backgroundColor: '#242424',
          borderRadius: '8px',
          padding: '30px',
          marginBottom: '30px'
        }}>
          <h2 style={{
            fontSize: '1.5rem',
            marginBottom: '20px',
            color: '#F0F4F8',
            fontWeight: '600'
          }}>{currentQuestion.question}</h2>
          
          <div style={{ marginTop: '25px' }}>
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(currentQuestionIndex, index)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  backgroundColor: selectedAnswer === index 
                    ? index === currentQuestion.correctAnswer 
                      ? 'rgba(76, 175, 80, 0.2)' 
                      : 'rgba(244, 67, 54, 0.2)' 
                    : '#1E1E1E',
                  color: selectedAnswer === index 
                    ? index === currentQuestion.correctAnswer 
                      ? '#4CAF50' 
                      : '#F44336' 
                    : '#F0F4F8',
                  padding: '15px 20px',
                  borderRadius: '8px',
                  border: selectedAnswer === index 
                    ? index === currentQuestion.correctAnswer 
                      ? '1px solid #4CAF50' 
                      : '1px solid #F44336' 
                    : '1px solid #333',
                  fontSize: '1rem',
                  marginBottom: '12px',
                  cursor: isAnswered ? 'default' : 'pointer',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)'
                }}
                onMouseOver={(e) => {
                  if (!isAnswered) {
                    e.currentTarget.style.backgroundColor = '#2A2A2A';
                    e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
                  }
                }}
                onMouseOut={(e) => {
                  if (!isAnswered) {
                    e.currentTarget.style.backgroundColor = '#1E1E1E';
                    e.currentTarget.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.2)';
                  }
                }}
                disabled={isAnswered}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        
        {isAnswered && (
          <div style={{ 
            backgroundColor: isCorrect ? 'rgba(76, 175, 80, 0.1)' : 'rgba(244, 67, 54, 0.1)',
            borderLeft: isCorrect ? '4px solid #4CAF50' : '4px solid #F44336',
            padding: '20px',
            borderRadius: '0 8px 8px 0',
            marginBottom: '30px'
          }}>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.6',
              color: '#B0B8C4'
            }}>
              <span style={{ 
                fontWeight: 'bold',
                color: isCorrect ? '#4CAF50' : '#F44336',
                marginRight: '10px'
              }}>
                {isCorrect ? '✓ Correct!' : '✗ Incorrect.'}
              </span>
              {currentQuestion.explanation}
            </p>
          </div>
        )}
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '30px'
        }}>
          <button 
            onClick={handlePrevClick} 
            disabled={currentQuestionIndex === 0}
            style={{
              backgroundColor: currentQuestionIndex === 0 ? '#333' : '#242424',
              color: currentQuestionIndex === 0 ? '#666' : '#F0F4F8',
              padding: '12px 25px',
              borderRadius: '30px',
              border: currentQuestionIndex === 0 ? 'none' : '1px solid #4FB0C6',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: currentQuestionIndex === 0 ? 'default' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: currentQuestionIndex === 0 ? 0.5 : 1,
              boxShadow: currentQuestionIndex === 0 ? 'none' : '0 4px 10px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              if (currentQuestionIndex !== 0) {
                e.currentTarget.style.backgroundColor = '#2A2A2A';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (currentQuestionIndex !== 0) {
                e.currentTarget.style.backgroundColor = '#242424';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
              }
            }}
          >
            ← Previous
          </button>
          
          <button 
            onClick={handleNextClick} 
            disabled={!isAnswered}
            style={{
              backgroundColor: !isAnswered ? '#333' : '#4FB0C6',
              color: 'white',
              padding: '12px 25px',
              borderRadius: '30px',
              border: 'none',
              fontSize: '1rem',
              fontWeight: '600',
              cursor: !isAnswered ? 'default' : 'pointer',
              transition: 'all 0.3s ease',
              opacity: !isAnswered ? 0.5 : 1,
              boxShadow: !isAnswered ? 'none' : '0 4px 10px rgba(0, 0, 0, 0.3)'
            }}
            onMouseOver={(e) => {
              if (isAnswered) {
                e.currentTarget.style.backgroundColor = '#7CCBD7';
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 15px rgba(0, 0, 0, 0.4)';
              }
            }}
            onMouseOut={(e) => {
              if (isAnswered) {
                e.currentTarget.style.backgroundColor = '#4FB0C6';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
              }
            }}
          >
            {currentQuestionIndex === questions.length - 1 ? 'See Results' : 'Next Question →'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyChallenge;
