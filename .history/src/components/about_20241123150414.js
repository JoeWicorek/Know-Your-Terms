
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
    </div>
  );
}

export default About;
