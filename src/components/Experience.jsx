import React from 'react';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "Machine Learning Engineer / AI Developer",
      company: "Turing.com",
      location: "Remote",
      period: "April 2024 – Present",
      type: "Full-time",
      achievements: [
        "Spearheaded the development and optimization of a cutting-edge LLM-based system designed to train data analysts by integrating intelligent query understanding and adaptive learning pathways.",
        "Engineered robust NLP pipelines to transform unstructured business queries into actionable data insights using state-of-the-art language models.",
        "Collaborated with cross-functional teams to fine-tune LLM models on domain-specific datasets, significantly improving response accuracy and contextual relevance for real-world data analytics tasks.",
        "Designed and executed prompt-engineering strategies to enhance model performance, tailored to specific analytical intents and workflows in a multimodal AI pipeline.",
        "Led evaluation of generated outputs across different models using custom scoring metrics and human-in-the-loop feedback systems to determine the most contextually accurate responses."
      ],
      technologies: ["Python", "LLMs", "NLP", "TensorFlow", "FastAPI", "AWS"]
    },
    {
      title: "Full-Stack Software Developer",
      company: "Zaytrics (Pvt.) Limited",
      location: "Islamabad, Pakistan",
      period: "January 2021 – June 2023",
      type: "Full-time",
      achievements: [
        "Developed intelligent PDF processing tools in Python to extract highlighted text and implemented header/footer detection and removal algorithms for cleaner document parsing.",
        "Built and trained machine-learning models for text classification using TF-IDF, Word2Vec, SVM, and Random Forest, tailored for domain-specific content.",
        "Implemented extractive summarization using Latent Semantic Analysis (LSA) and abstractive summarization with Seq2Seq (Encoder-Decoder) models trained on the CNN/DailyMail dataset.",
        "Designed and deployed RESTful APIs using Python (Flask) and Node.js (Express), integrating with React.js front-ends and custom stored procedures for generating dynamic CSV reports.",
        "Created secure and scalable cloud deployments using AWS EC2 and FastAPI (Ray Cluster) for high-performance AI inference workloads."
      ],
      technologies: ["Python", "React.js", "Flask", "Node.js", "MySQL", "AWS", "Machine Learning"]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">
          My journey in building intelligent applications and data-driven solutions
        </p>
        
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-card card">
                <div className="experience-header">
                  <div className="experience-title-section">
                    <h3 className="experience-title">{exp.title}</h3>
                    <div className="experience-company">
                      <Briefcase size={16} />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="experience-meta">
                    <div className="experience-period">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="experience-location">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                
                <div className="experience-content">
                  <ul className="experience-achievements">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="achievement-item">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="experience-technologies">
                    <h4 className="tech-title">Key Technologies:</h4>
                    <div className="tech-tags">
                      {exp.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
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

export default Experience;
