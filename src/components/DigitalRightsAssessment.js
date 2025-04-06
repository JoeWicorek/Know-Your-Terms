import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          }}>Digital Rights Assessment Results</h1>
          
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
                'Excellent! You have a strong understanding of digital rights and their importance in today\'s online world.'
              ) : percentage >= 60 ? (
                'Good work! You understand many digital rights concepts, but there\'s still more to learn.'
              ) : (
                'Digital rights can be complex. Keep learning to better understand your rights in the digital world.'
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
                Restart Assessment
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
        }}>Digital Rights Assessment</h1>
        
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

export default DigitalRightsAssessment;
