import React from 'react';
import { FaCode, FaMobileAlt, FaPalette, FaServer, FaRocket, FaBrain, FaPython, FaRobot } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: 'Web Development',
      description: 'Custom web applications built with modern technologies for optimal performance and scalability.',
      features: ['React/NodeJS Applications', 'Progressive Web Apps', 'E-commerce Solutions', 'CMS Development']
    },
    {
      icon: <FaBrain />,
      title: 'AI Development',
      description: 'Intelligent solutions powered by machine learning, natural language processing, and LLM',
      features: ['Machine Learning Models', 'NLP & Chatbots', 'AI Integration & APIs']
    },
    {
      icon: <FaPython />,
      title: 'Python Scripting',
      description: 'Custom Python scripts for automation, data processing, web scraping, and workflow optimization.',
      features: ['Web Scraping & Data Mining', 'Task Automation', 'Data Analysis & Visualization', 'API Development']
    },
    {
      icon: <FaServer />,
      title: 'API Development',
      description: 'Robust and scalable RESTful APIs endpoints for seamless integrations.',
      features: ['RESTful API Design', 'Third-party Integrations', 'API Documentation']
    },
    {
      icon: <FaRocket />,
      title: 'DevOps & Deployment',
      description: 'Streamlined deployment pipelines and cloud infrastructure management for reliable applications.',
      features: ['CI/CD Setup', 'Cloud Deployment', 'Docker Containerization', 'Monitoring & Logging']
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">What I Offer</p>
          <h2 className="section-title">Services That Drive <span className="gradient-text">Results</span></h2>
          <p className="section-description">
            From concept to deployment, I provide end-to-end development solutions tailored to your business needs.
          </p>
        </div>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="card service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;