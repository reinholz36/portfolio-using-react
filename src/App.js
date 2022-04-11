import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
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
  if (currentPage === 'Portfolio') {
    return <Project />
  }
  
}

const pageChange = (page) => setCurrentPage(page);


  return (
  <>
  <header>
  <Header currentPage={currentPage} pageChange={pageChange}/>
  </header>

  <main>
    {selectedPage()}
  </main>
 
  <footer>
  <Footer />
  </footer>
  </>
  );
}

