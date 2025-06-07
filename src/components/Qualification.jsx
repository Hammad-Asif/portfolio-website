import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Qualification = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experiences = [
    {
      title: "Machine Learning Engineer / AI Developer",
      company: "Turing.com",
      location: "Remote",
      period: "April 2024 – Present",
      description: "Spearheaded development of cutting-edge LLM-based systems for training data analysts. Engineered robust NLP pipelines and fine-tuned models on domain-specific datasets.",
      achievements: [
        "Developed intelligent query understanding systems",
        "Implemented adaptive learning pathways",
        "Led model evaluation using custom scoring metrics"
      ]
    },
    {
      title: "Full-Stack Software Developer",
      company: "Zaytrics (Pvt.) Limited",
      location: "Islamabad, Pakistan",
      period: "January 2021 – June 2023",
      description: "Built intelligent PDF processing tools and machine learning models for text classification. Designed RESTful APIs and deployed scalable cloud solutions.",
      achievements: [
        "Achieved 95% accuracy in document classification",
        "Deployed solutions on AWS with autoscaling",
        "Developed comprehensive call center platforms"
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
