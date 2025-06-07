import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      degree: "Master of Science in Data Science",
      institution: "Air University",
      location: "Islamabad, Pakistan",
      period: "2020 – 2023",
      type: "Graduate Degree",
      description: "Advanced coursework in machine learning, statistical analysis, data mining, and artificial intelligence. Focused on practical applications of data science in real-world scenarios.",
      highlights: [
        "Advanced Machine Learning & Deep Learning",
        "Statistical Analysis & Data Mining",
        "Natural Language Processing",
        "Big Data Analytics",
        "Research Methodology",
        "Thesis on Text Similarity Metrics for Summarization"
      ]
    },
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Air University",
      location: "Islamabad, Pakistan",
      period: "2016 – 2020",
      type: "Undergraduate Degree",
      description: "Comprehensive foundation in computer science fundamentals, software engineering principles, and programming methodologies. Strong emphasis on problem-solving and algorithmic thinking.",
      highlights: [
        "Data Structures & Algorithms",
        "Software Engineering Principles",
        "Database Management Systems",
        "Web Development Technologies",
        "Object-Oriented Programming",
        "Computer Networks & Security"
      ]
    }
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">
          Academic foundation in computer science and data science
        </p>
        
        <div className="education-timeline">
          {education.map((edu, index) => (
            <div key={index} className="education-item">
              <div className="education-card card">
                <div className="education-header">
                  <div className="education-icon">
                    <GraduationCap size={32} />
                  </div>
                  <div className="education-title-section">
                    <h3 className="education-degree">{edu.degree}</h3>
                    <div className="education-institution">
                      {edu.institution}
                    </div>
                    <div className="education-meta">
                      <div className="education-period">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="education-location">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  <div className="education-type">
                    {edu.type}
                  </div>
                </div>
                
                <div className="education-content">
                  <p className="education-description">{edu.description}</p>
                  
                  <div className="education-highlights">
                    <h4 className="highlights-title">Key Areas of Study:</h4>
                    <div className="highlights-grid">
                      {edu.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="highlight-item">
                          <span className="highlight-bullet">•</span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
