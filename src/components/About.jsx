import React from 'react';
import { Brain, Code, Database, Cloud } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Brain size={32} />,
      title: "AI & Machine Learning",
      description: "Experienced in NLP pipelines, ML model training, prompt engineering, RLHF annotation, and AI model evaluation on Google-commissioned projects."
    },
    {
      icon: <Code size={32} />,
      title: "Full-Stack Development",
      description: "Proficient in Python FastAPI and Flask backends, Node.js, REST API design, and React frontends — with production deployments on AWS."
    },
    {
      icon: <Database size={32} />,
      title: "Data Engineering",
      description: "Experienced in building data pipelines, text classification systems, PDF processing tools, and extractive/abstractive summarization models."
    },
    {
      icon: <Cloud size={32} />,
      title: "Cloud & DevOps",
      description: "Deployed production systems on AWS EC2 with Ray cluster autoscaling, Docker, CI/CD pipelines, and Google Cloud Document AI."
    }
  ];

  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              <strong>MS in Data Science</strong> graduate with 4+ years of experience building production ML systems, NLP pipelines, and scalable REST APIs. I specialize in AI integration — connecting large language models and machine learning into real backend systems that clients can use.
            </p>
            <p className="about-description">
              I have independently architected and deployed end-to-end AI systems — from document classification platforms on AWS to Google Cloud document extraction pipelines and OpenAI-powered applications. I hold an MS in Data Science and have published NLP research. I work best with teams that need someone who owns both the AI and the engineering layer of a product.
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
