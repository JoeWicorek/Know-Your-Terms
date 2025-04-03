import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';  
import Home from './components/Home';
import About from './components/About';
import QuizPage from './components/QuizPage';  
import PrivacyChallenge from './components/PrivacyChallenge';
import DigitalRightsAssessment from './components/DigitalRightsAssessment';
import TermsOfServiceQuiz from './components/TermsOfServiceQuiz';
import WhatNow from './components/WhatNow';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/privacy-challenge" element={<PrivacyChallenge />} />
            <Route path="/digital-rights-assessment" element={<DigitalRightsAssessment />} />
            <Route path="/terms-quiz" element={<TermsOfServiceQuiz />} />
            <Route path="/whatnow" element={<WhatNow />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
