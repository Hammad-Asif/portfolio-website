import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Qualification from './components/Qualification';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';
import Publications from './components/Publications';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Qualification />
      <Projects />
      <SideProjects />
      <Publications />
      <Contact />
    </div>
  );
}

export default App;
