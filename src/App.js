import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import "./styles/styles.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          component={() => (window.location.href = "/index.html")}
        />
        <Route
          path="/portfolio-details"
          component={() => (window.location.href = "/portfolio-details.html")}
        />
      </Switch>
    </Router>
  );
}

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
