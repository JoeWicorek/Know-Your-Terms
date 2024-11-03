// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';      // Import Home component
import Article from './components/Article'; // Import Article component

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/article" component={Article} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
