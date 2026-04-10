import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { to: 'services', label: 'Services' },
    { to: 'experience', label: 'Experience' },
    { to: 'faq', label: 'FAQ\'s' },
    { to: 'projects', label: 'Work Projects' },
    { to: 'side-projects', label: 'Side Projects' },
    { to: 'contact', label: 'Contact' }
  ];

  const services = [
    'Web Development',
    'AI Development',
    'Python Scripting',
    'API Development',
    'DevOps & Deployment'
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3>Hammad.</h3>
            <p>
              I build scalable MERN stack, Python & AI-powered solutions that turn complex business challenges into elegant digital products.
            </p>
            <div className="footer-social">
              <a href="https://github.com/Hammad-Asif" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/hammad-asif/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={`#${link.to}`}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Services</h4>
            <ul>
              {services.map((service, index) => (
                <li key={index}>
                  <a href="#services">{service}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-links">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:Hammadcto786@gmail.com">Hammadcto786@gmail.com</a></li>
              <li><a href="tel:+923087724490">+92 308 7724490</a></li>
              <li>Pakistan (Available Worldwide - Remote)</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Hammad. All rights reserved. Built with ReactJS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;