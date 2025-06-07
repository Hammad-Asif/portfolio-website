import React, { useEffect, useState } from 'react';
import { Download, Mail, Github, Linkedin, ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className={`hero-content ${isVisible ? 'fade-in-up' : ''}`}>
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Available for new opportunities</span>
          </div>

          <h1 className="hero-title">
            Hi, I'm <span className="hero-name">Muhammad Hammad Asif</span>
          </h1>

          <div className="hero-subtitle-container">
            <p className="hero-subtitle">AI Engineer & Full-Stack Developer</p>
          </div>

          <p className="hero-description">
            Transforming complex data into intelligent solutions with 4+ years of expertise in NLP, LLM training, and scalable web applications.
          </p>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects Completed</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">2</span>
              <span className="stat-label">Companies</span>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={scrollToContact}>
              <Mail size={20} />
              Get In Touch
            </button>
            <a
              href="/resume.pdf"
              className="btn btn-secondary"
              download="Muhammad_Hammad_Asif_Resume.pdf"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>

          <div className="hero-social">
            <a
              href="https://www.linkedin.com/in/hammad-asif/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://github.com/hammad-asif"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              aria-label="GitHub Profile"
            >
              <Github size={24} />
            </a>
            <a
              href="mailto:Hammadasif1437@gmail.com"
              className="social-link"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      <div className="scroll-indicator-container">
        <button className="scroll-indicator float" onClick={scrollToAbout} aria-label="Scroll to about section">
          <ChevronDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
