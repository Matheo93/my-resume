import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/styles.css';

// Renommez cette fonction pour éviter les conflits
function MyApp() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => window.location.href = '/index.html'} />
        <Route path="/portfolio-details" component={() => window.location.href = '/portfolio-details.html'} />
      </Switch>
    </Router>
  );
}

export default MyApp;
