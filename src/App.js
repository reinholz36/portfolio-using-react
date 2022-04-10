import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import NoMatch from './components/NoMatch';
import Project from './components/Project';


function App() {
  return (
    <Router>
      <div className="flex-column justify-flex-start min-100-vh">
        <Header />
          <div className="container">
            <Routes>
              <Route exact path="/" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/project" component={Project} />
              <Route component={NoMatch} />
            </Routes>
          </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
