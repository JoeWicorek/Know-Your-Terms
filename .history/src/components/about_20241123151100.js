/* About.css */

.about-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px;
  font-family: 'Arial', sans-serif;
  line-height: 1.6;
  color: #333;
  background-color: #FFFFFF;
  text-align: center;
}

.title {
  font-size: 2.5em;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
  color: #2D789E;
}

.highlight {
  color: #79B4D1;
  font-style: italic;
}

.mission {
  text-align: center;
  margin-bottom: 40px;
}

.mission h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #2D789E;
}

.mission p {
  font-size: 1.1em;
  color: #52A7D2;
  max-width: 600px;
  margin: 0 auto;
}

.link {
  color: #007BFF;
  text-decoration: underline;
}

.letter-grades {
  text-align: center;
  margin-bottom: 40px;
}

.letter-grades h2 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #2D789E;
}

.letter-grades p {
  font-size: 1.1em;
  margin-bottom: 30px;
  color: #52A7D2;
  max-width: 600px;
  margin: 0 auto;
}

.grades {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  gap: 10px;
  max-width: 600px;
  margin: 20px auto;
}

.grade {
  font-size: 1.2em;
  font-weight: bold;
  color: #1E1E1E;
  background-color: #E0EAF2;
  padding: 10px;
  border-radius: 10px;
  width: 50px;
  text-align: center;
}

.grade-scale {
  position: relative;
  height: 20px;
  background: linear-gradient(to right, #4CAF50, #CDDC39, #FFEB3B, #FFC107, #FF5722);
  border-radius: 10px;
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}

.grade-factors {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  gap: 20px;
  max-width: 600px;
  margin: 20px auto;
}

.grade-factors li {
  list-style-type: none;
  font-size: 1.2em;
  font-weight: bold;
  color: #1E1E1E;
  background-color: #E0EAF2;
  padding: 10px;
  border-radius: 50%;
  width: 80px;
  text-align: center;
}

.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  padding: 20px;
  background-color: #2D789E;
}

.footer .title {
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 1.75em;
  color: #FFFFFF;
}

/* About.js */

import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-container">
      <h1 className="title">What Are You <span className="highlight">Really</span> Agreeing To?</h1>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Know Your Terms sets out to help you better understand the fine print in digital agreements. We believe in <strong>transparency</strong> and <strong>accessibility</strong>. We analyze and grade website Terms of Service agreements. These evaluations are based on factors like <a href="#" className="link">Clarity</a>, <a href="#" className="link">Transparency</a>, <a href="#" className="link">Fairness</a>, <a href="#" className="link">Accessibility</a>, and <a href="#" className="link">Accountability</a>.
        </p>
      </section>

      <section className="letter-grades">
        <h2>Letter Grades</h2>
        <p>
          Our letter-grade system provides a quick, clear indication of how well a site respects your digital rights. It helps you make informed choices about the websites you use. The grades offer a simple way to understand complex terms.
        </p>
        <div className="grade-scale"></div>
        <div className="grades">
          <span className="grade">A+</span>
          <span className="grade">B</span>
          <span className="grade">C</span>
          <span className="grade">D</span>
          <span className="grade">F</span>
        </div>
        <p>
          This grade system is determined by five characteristics in the evaluated terms of agreement: Clarity, Transparency, Fairness, Accessibility, and Accountability.
        </p>
        <ul className="grade-factors">
          <li>Clarity</li>
          <li>Transparency</li>
          <li>Fairness</li>
          <li>Accessibility</li>
          <li>Accountability</li>
        </ul>
      </section>

      <footer className="footer">
        <h2 className="title">WHAT ARE YOU REALLY AGREEING TO?</h2>
      </footer>
    </div>
  );
}

export default About;
