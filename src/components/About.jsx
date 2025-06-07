import React from 'react';
import { Brain, Code, Database, Cloud } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Specialized in NLP, LLM training, and intelligent system design with 4+ years of experience."
    },
    {
      icon: <Code size={32} />,
      title: "Full-Stack Development",
      description: "Proficient in modern web technologies including React, Node.js, Python, and API development."
    },
    {
      icon: <Database size={32} />,
      title: "Data Engineering",
      description: "Expert in data analysis, mining, and building scalable data pipelines for production systems."
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      description: "Experienced with AWS, Docker, CI/CD pipelines, and cloud-native application deployment."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              <strong>MS in Data Science</strong> graduate with 4+ years of hands-on experience crafting intelligent solutions
              that bridge the gap between complex AI research and real-world applications. Currently at <strong>Turing</strong>,
              I architect NLP systems and train LLMs that power next-generation data analytics platforms.
            </p>
            <p className="about-description">
              My passion lies in transforming raw data into actionable intelligence through cutting-edge machine learning,
              robust full-stack development, and scalable cloud architectures. I thrive in collaborative environments
              where innovation meets practical implementation.
            </p>
          </div>
        </div>

        <div className="about-highlights">
          <div className="grid grid-2">
            {highlights.map((highlight, index) => (
              <div key={index} className="highlight-card card">
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <h3 className="highlight-title">{highlight.title}</h3>
                <p className="highlight-description">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
