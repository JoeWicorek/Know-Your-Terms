import React from 'react';
import './About.css'; // Assuming you have a CSS file for styling

function About() {
  return (
    <div className="about-container">
      <h1 className="title">What Are You <span className="highlight">Really</span> Agreeing To?</h1>
      
      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Know Your Terms sets out to help you better understand the fine print in digital agreements.
          We believe in <strong>transparency</strong> and <strong>accessibility</strong>, so we analyze and grade website Terms of Service agreements
          based on factors like <a href="#">12345</a>.
        </p>
      </section>

      <section className="letter-grades">
        <h2>Letter Grades</h2>
        <p>
          Our letter-grade system provides a quick, clear indication of how well a site respects your digital rights,
          helping you make informed choices.
        </p>
        <div className="grades">
          <span>A+</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
          <span>F</span>
        </div>
        <p>
          This grade system is determined by five characteristics in the evaluated terms of agreement.
        </p>
        <ul>
          <li>One</li>
          <li>Two</li>
          <li>Three</li>
          <li>Four</li>
          <li>Five</li>
        </ul>
      </section>
    </div>
  );
}

export default About;
