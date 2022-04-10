import React, { useState } from 'react';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
// import NoMatch from './components/NoMatch';
import Project from './components/Project';


export default function App() {
  
const [currentPage, setCurrentPage] = useState('About')

const selectedPage = () => {
  if (currentPage === 'About') {
    return <About />
  }
  if (currentPage === 'Contact') {
    return <Contact />
  }
  if (currentPage === 'Project') {
    return <Project />
  }
  
}

const pageChange = (page) => setCurrentPage(page);

// function App() {
  return (
  <>
  <Header currentPage={currentPage} pageChange={pageChange}/>
  <main>
    {selectedPage()}
  </main>
  <Footer />
  </>
  );
}
// }

// export default App;
