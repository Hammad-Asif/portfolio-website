import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Machine Learning Engineer / AI Developer",
      company: "Turing.com",
      location: "Remote",
      period: "April 2024 – May 2025",
      description: "Contributed to a Google-commissioned project through Turing to improve Gemini's data analysis reasoning capabilities. Created SFT datasets, designed prompt evaluation frameworks, and performed RLHF annotation to align model outputs with real-world analytical tasks.",
      achievements: [
        "Contributed to Google x Turing project to train Gemini AI",
        "Created supervised fine-tuning (SFT) datasets for data analytics tasks",
        "Performed RLHF annotation and human-in-the-loop evaluation",
        "Designed prompt evaluation frameworks for model assessment"
      ]
    },
    {
      title: "Freelance AI Integration Developer",
      company: "Scanify Dev",
      location: "Remote",
      period: "July 2025 – November 2025",
      description: "Contributed to an AI-powered Shopify theme generation platform that used OpenAI APIs to automatically create store content and images for ecommerce clients.",
      achievements: [
        "Integrated and maintained OpenAI API features in live production app",
        "Resolved Python FastAPI backend bugs affecting AI feature delivery",
        "Improved stability of OpenAI-powered content and image generation"
      ]
    },
    {
      title: "Full-Stack Software Developer",
      company: "Zaytrics (Pvt.) Limited",
      location: "Islamabad, Pakistan",
      period: "January 2021 – June 2023",
      description: "Independently built and deployed multiple production AI systems as client-facing APIs. Delivered TenderML and GCP InsightDocs as complete end-to-end solo projects, and contributed backend and API components to team projects including a VOIP call center platform.",
      achievements: [
        "Built TenderML solo — 95% accuracy PDF classification deployed on AWS EC2",
        "Built GCP InsightDocs solo — Google Cloud Document AI extraction pipeline",
        "Deployed FastAPI systems on AWS EC2 with Ray cluster autoscaling",
        "Contributed backend and API components to VOIP call center (team project)"
      ]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Air University",
      location: "Islamabad, Pakistan",
      period: "2020 – 2023",
      description: "Advanced coursework in machine learning, statistical analysis, and artificial intelligence with focus on practical applications.",
      highlights: [
        "Thesis on Text Similarity Metrics for Summarization",
        "Advanced Machine Learning & Deep Learning",
        "Natural Language Processing specialization"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Air University",
      location: "Islamabad, Pakistan",
      period: "2016 – 2020",
      description: "Comprehensive foundation in computer science fundamentals, software engineering principles, and programming methodologies.",
      highlights: [
        "Data Structures & Algorithms",
        "Software Engineering Principles",
        "Web Development Technologies"
      ]
    }
  ];

  return (
    <section id="qualification" className="section">
      <div className="container">
        <h2 className="section-title">Qualification</h2>
        <p className="section-subtitle">
          My personal journey through education and professional experience
        </p>
        
        <div className="qualification-tabs">
          <button 
            className={`tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            <Briefcase size={20} />
            Experience
          </button>
          <button 
            className={`tab-btn ${activeTab === 'education' ? 'active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            <GraduationCap size={20} />
            Education
          </button>
        </div>

        <div className="qualification-content">
          {activeTab === 'experience' && (
            <div className="qualification-timeline">
              {experiences.map((exp, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <Briefcase size={16} />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{exp.title}</h3>
                      <div className="timeline-meta">
                        <span className="timeline-company">{exp.company}</span>
                        <div className="timeline-details">
                          <span className="timeline-period">
                            <Calendar size={14} />
                            {exp.period}
                          </span>
                          <span className="timeline-location">
                            <MapPin size={14} />
                            {exp.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="timeline-description">{exp.description}</p>
                    <ul className="timeline-achievements">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex}>{achievement}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="qualification-timeline">
              {education.map((edu, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <GraduationCap size={16} />
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="timeline-title">{edu.degree}</h3>
                      <div className="timeline-meta">
                        <span className="timeline-company">{edu.institution}</span>
                        <div className="timeline-details">
                          <span className="timeline-period">
                            <Calendar size={14} />
                            {edu.period}
                          </span>
                          <span className="timeline-location">
                            <MapPin size={14} />
                            {edu.location}
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="timeline-description">{edu.description}</p>
                    <ul className="timeline-achievements">
                      {edu.highlights.map((highlight, hlIndex) => (
                        <li key={hlIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
