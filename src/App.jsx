import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import SideProjects from './components/SideProjects';
import Publications from './components/Publications';
import Contact from './components/Contact';
import ExperienceTimeline from './components/ExperienceTimeline';
import Process from './components/Process';
import FloatingCTA from './components/FloatingCTA';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services />
      <ExperienceTimeline/>
      <Process/>
      <FAQ/>
      <Projects />
      <SideProjects />
      <Publications />
      <Contact />
      {/* <FloatingCTA/> */}
      <Footer/>
      {/* <Chatbot/> */}
    </div>
  );
}
export default App;
