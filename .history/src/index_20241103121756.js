import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Make sure this matches your App component's filename


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
