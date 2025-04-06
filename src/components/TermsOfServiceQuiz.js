import React, { useState } from 'react';
import { Link } from 'react-router-dom';

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
          }}>Terms of Service Quiz Results</h1>
          
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
                'Great job! You have a strong understanding of Terms of Service agreements.'
              ) : percentage >= 60 ? (
                'Good work! You understand the basics of Terms of Service agreements, but there\'s still more to learn.'
              ) : (
                'You might want to review Terms of Service concepts. Understanding these agreements is important for protecting your rights online.'
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
                Restart Quiz
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
        }}>Terms of Service Quiz</h1>
        
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

export default TermsOfServiceQuiz;
