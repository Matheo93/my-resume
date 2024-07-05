import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
      </Routes>
      <div className="App">
        <Header />
        <main>
          <About />
          <Experience />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

function PortfolioDetails() {
  window.location.href = "/portfolio-details.html";
  return null;
}

export default App;
