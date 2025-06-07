import React from 'react';
import { Brain, Code, Database, Server, Globe, Settings } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Brain size={32} />,
      title: "Machine Learning & AI",
      skills: [
        "Natural Language Processing",
        "Information Retrieval",
        "Deep Learning & Neural Networks",
        "TensorFlow & Keras",
        "Scikit-Learn & NLTK",
        "LLM Training & Fine-tuning",
        "Text Summarization (LSA, Seq2Seq)",
        "Computer Vision"
      ]
    },
    {
      icon: <Code size={32} />,
      title: "Programming Languages",
      skills: [
        "Python (Advanced)",
        "JavaScript (ES6+)",
        "PHP",
        "C# & .NET",
        "C++",
        "SQL",
        "HTML5 & CSS3",
        "TypeScript"
      ]
    },
    {
      icon: <Globe size={32} />,
      title: "Frontend Development",
      skills: [
        "React.js & Redux",
        "Modern JavaScript",
        "Responsive Web Design",
        "CSS3 & Sass",
        "HTML5 Semantic Markup",
        "UI/UX Design Principles",
        "Cross-browser Compatibility",
        "Performance Optimization"
      ]
    },
    {
      icon: <Server size={32} />,
      title: "Backend Development",
      skills: [
        "FastAPI & Flask",
        "Node.js & Express",
        "RESTful API Design",
        "GraphQL",
        "Microservices Architecture",
        "Authentication & Authorization",
        "API Documentation",
        "Server-side Optimization"
      ]
    },
    {
      icon: <Database size={32} />,
      title: "Databases & Data",
      skills: [
        "MySQL & PostgreSQL",
        "MongoDB & NoSQL",
        "Redis Caching",
        "Firebase",
        "Data Analysis & Mining",
        "pandas & NumPy",
        "Data Visualization",
        "ETL Processes"
      ]
    },
    {
      icon: <Settings size={32} />,
      title: "DevOps & Tools",
      skills: [
        "AWS (EC2, S3, Lambda)",
        "Docker & Containerization",
        "CI/CD Pipelines",
        "Git & GitHub",
        "Linux/Unix Systems",
        "Agile & Scrum",
        "Technical Documentation",
        "Performance Monitoring"
      ]
    }
  ];

  return (
    <section id="skills" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>
        <p className="section-subtitle">
          A comprehensive overview of my technical skills and areas of expertise
        </p>
        
        <div className="skills-grid">
          <div className="grid grid-3">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category card">
                <div className="skill-icon">
                  {category.icon}
                </div>
                <h3 className="skill-title">{category.title}</h3>
                <div className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
