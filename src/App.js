import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Footer from './components/Footer';
import './styles/styles.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
        <Experience />
      </main>
      <Footer />
    </div>
  );
}

export default App;
