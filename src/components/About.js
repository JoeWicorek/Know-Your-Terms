import React, { useEffect, useState } from 'react';
import './About.css';
import { 
  FaShieldAlt, 
  FaBalanceScale, 
  FaSearch, 
  FaFileAlt, 
  FaCheckCircle, 
  FaArrowRight, 
  FaLightbulb, 
  FaUsers 
} from 'react-icons/fa';

function About() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Add animation on scroll effect
  useEffect(() => {
    // Set initial load animation
    setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate');
    animatedElements.forEach(el => observer.observe(el));

    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div className={`about-container ${isLoaded ? 'page-loaded' : ''}`}>
      <div className="hero-section animate">
        <div className="hero-background"></div>
        <h1 className="title">What Are You <span className="highlight">Really</span> Agreeing To?</h1>
        <p className="subtitle">Understanding the fine print in the digital age</p>
        <div className="hero-decoration">
          <div className="hero-circle"></div>
          <div className="hero-circle"></div>
          <div className="hero-circle"></div>
        </div>
      </div>
      
      <section className="mission-section animate">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our Mission</h2>
            <div className="divider"></div>
          </div>
          <p className="mission-text">
            Know Your Terms sets out to help you better understand the fine print in digital agreements. 
            We believe in <strong className="accent-text">transparency</strong> and <strong className="accent-text">accessibility</strong>. 
            Our platform analyzes and grades website Terms of Service agreements based on key factors 
            that impact your digital rights and privacy.
          </p>
          <div className="mission-cards">
            <div className="mission-card animate" style={{animationDelay: '0.1s'}}>
              <div className="card-icon">
                <FaShieldAlt />
              </div>
              <h3>Protect Your Rights</h3>
              <p>We help you understand what rights you're giving away when clicking "I Accept"</p>
            </div>
            <div className="mission-card animate" style={{animationDelay: '0.2s'}}>
              <div className="card-icon">
                <FaSearch />
              </div>
              <h3>Increase Transparency</h3>
              <p>We break down complex legal jargon into understandable ratings and explanations</p>
            </div>
            <div className="mission-card animate" style={{animationDelay: '0.3s'}}>
              <div className="card-icon">
                <FaBalanceScale />
              </div>
              <h3>Promote Fairness</h3>
              <p>We advocate for balanced agreements that respect both users and service providers</p>
            </div>
          </div>
        </div>
      </section>

      <section className="rating-section animate">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our Rating System</h2>
            <div className="divider"></div>
          </div>
          <p className="rating-intro">
            Our letter-grade system provides a quick, clear indication of how well a site respects your digital rights.
            It helps you make informed choices about the websites you use.
          </p>
          
          <div className="grade-scale-container">
            <div className="grade-scale"></div>
            <div className="grades">
              <div className="grade-item animate" style={{animationDelay: '0.1s'}}>
                <span className="grade grade-a">A+</span>
                <p>Excellent</p>
              </div>
              <div className="grade-item animate" style={{animationDelay: '0.2s'}}>
                <span className="grade grade-b">B</span>
                <p>Good</p>
              </div>
              <div className="grade-item animate" style={{animationDelay: '0.3s'}}>
                <span className="grade grade-c">C</span>
                <p>Average</p>
              </div>
              <div className="grade-item animate" style={{animationDelay: '0.4s'}}>
                <span className="grade grade-d">D</span>
                <p>Poor</p>
              </div>
              <div className="grade-item animate" style={{animationDelay: '0.5s'}}>
                <span className="grade grade-f">F</span>
                <p>Failing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="criteria-section animate">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Evaluation Criteria</h2>
            <div className="divider"></div>
          </div>
          <p className="criteria-intro">
            We evaluate Terms of Service based on five key criteria that determine how user-friendly and respectful they are:
          </p>
          
          <div className="criteria-cards">
            <div className="criteria-card animate" style={{animationDelay: '0.1s'}}>
              <div className="criteria-icon">
                <FaSearch />
              </div>
              <h3>Clarity</h3>
              <p>Are terms written in plain, understandable language without excessive legal jargon?</p>
              <div className="criteria-hover">
                <FaLightbulb className="hover-icon" />
              </div>
            </div>
            
            <div className="criteria-card animate" style={{animationDelay: '0.2s'}}>
              <div className="criteria-icon">
                <FaFileAlt />
              </div>
              <h3>Transparency</h3>
              <p>Is data collection, usage, and sharing clearly explained and justified?</p>
              <div className="criteria-hover">
                <FaLightbulb className="hover-icon" />
              </div>
            </div>
            
            <div className="criteria-card animate" style={{animationDelay: '0.3s'}}>
              <div className="criteria-icon">
                <FaBalanceScale />
              </div>
              <h3>Fairness</h3>
              <p>Does the agreement balance user and provider rights without one-sided terms?</p>
              <div className="criteria-hover">
                <FaLightbulb className="hover-icon" />
              </div>
            </div>
            
            <div className="criteria-card animate" style={{animationDelay: '0.4s'}}>
              <div className="criteria-icon">
                <FaCheckCircle />
              </div>
              <h3>Accessibility</h3>
              <p>Is the ToS easy to find, navigate, and understand for the average user?</p>
              <div className="criteria-hover">
                <FaLightbulb className="hover-icon" />
              </div>
            </div>
            
            <div className="criteria-card animate" style={{animationDelay: '0.5s'}}>
              <div className="criteria-icon">
                <FaShieldAlt />
              </div>
              <h3>Accountability</h3>
              <p>Are the provider's responsibilities clearly outlined with proper recourse for users?</p>
              <div className="criteria-hover">
                <FaLightbulb className="hover-icon" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="team-section animate">
        <div className="section-content">
          <div className="section-header">
            <h2 className="section-title">Our Approach</h2>
            <div className="divider"></div>
          </div>
          <div className="team-content">
            <div className="team-image animate" style={{animationDelay: '0.2s'}}>
              <div className="team-image-container">
                <FaUsers className="team-icon" />
              </div>
            </div>
            <div className="team-text animate" style={{animationDelay: '0.3s'}}>
              <p className="team-intro">
                Our team of legal experts and digital rights advocates carefully reviews each Terms of Service document.
                We analyze the language, structure, and content to provide you with accurate, unbiased ratings that help
                you make informed decisions about the digital services you use.
              </p>
              
              <div className="cta-container">
                <a href="/" className="cta-button">
                  Explore Website Ratings
                  <FaArrowRight className="cta-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer animate">
        <div className="footer-content">
          <h2 className="footer-title">KNOW YOUR TERMS</h2>
          <p className="footer-subtitle">Understanding what you're really agreeing to</p>
          <div className="footer-decoration">
            <div className="footer-line"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default About;
