import React from 'react';
import { FaLightbulb, FaCode, FaCheckCircle, FaRocket } from 'react-icons/fa';

const Process = () => {
  const steps = [
    {
      icon: <FaLightbulb />,
      title: 'Discovery & Planning',
      description: 'Understanding your goals, target audience, and project requirements to create a comprehensive roadmap.'
    },
    {
      icon: <FaCode />,
      title: 'Design & Development',
      description: 'Building your solution with clean code, modern technologies, and iterative feedback loops.'
    },
    {
      icon: <FaCheckCircle />,
      title: 'Testing & QA',
      description: 'Rigorous testing across devices and browsers to ensure flawless performance and user experience.'
    },
    {
      icon: <FaRocket />,
      title: 'Launch & Support',
      description: 'Deploying your project and providing ongoing maintenance, updates, and technical support.'
    }
  ];

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">How I Work</p>
          <h2 className="section-title">My Development <span className="gradient-text">Process</span></h2>
          <p className="section-description">
            A proven methodology that ensures quality delivery, transparent communication, and client satisfaction.
          </p>
        </div>

        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="card process-card">
              <div className="process-number">{index + 1}</div>
              <h3 className="process-title">{step.title}</h3>
              <p className="process-description">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;