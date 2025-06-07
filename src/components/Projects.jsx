import React, { useState } from 'react';
import { FileText, Cloud, Phone, Monitor, Shield, Brain, ChevronDown, ChevronUp } from 'lucide-react';

const Projects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 'turing-llm',
      title: "LLM-based Data Analyst Training System",
      company: "Turing.com",
      shortDescription: "Spearheaded development of a cutting-edge LLM-based system designed to train data analysts through intelligent query understanding and adaptive learning pathways.",
      fullDescription: "Engineered robust natural language processing (NLP) pipelines to transform unstructured business queries into actionable data insights using state-of-the-art language models. Collaborated with cross-functional teams to fine-tune LLM models on domain-specific datasets, significantly improving response accuracy and contextual relevance for real-world data analytics tasks. Designed and executed prompt engineering strategies to enhance model performance, tailored to specific analytical intents and workflows in a multimodal AI pipeline. Led evaluation of generated outputs across different models using custom scoring metrics and human-in-the-loop feedback systems to determine the most contextually accurate responses.",
      icon: <Brain size={32} />,
      technologies: ["Python", "LLMs", "NLP", "TensorFlow", "Prompt Engineering", "Machine Learning", "Data Analytics"],
      achievements: [
        "Developed intelligent query understanding system",
        "Implemented adaptive learning pathways",
        "Fine-tuned LLM models on domain-specific datasets",
        "Created custom scoring metrics for model evaluation",
        "Improved response accuracy and contextual relevance"
      ],
      category: "AI/Machine Learning",
      type: "Work Project"
    },
    {
      id: 'tenderml',
      title: "TenderML - AI Document Classification System",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Developed an AI-based system for real-time text classification and information extraction from German construction tender PDFs with 95% accuracy.",
      fullDescription: "Built a comprehensive AI system utilizing Support Vector Machines (SVM) to classify text within PDF documents containing German construction tender information. Processed over 1000 documents with varying formats but consistent contextual content. Employed tree data structures post-classification with DFS traversal for specific information identification. Implemented filtering mechanisms to refine extracted data and deployed the solution using FASTAPI on Ray cluster hosted on AWS EC2 with autoscaling capabilities.",
      icon: <FileText size={32} />,
      technologies: ["Python", "SVM", "FASTAPI", "AWS EC2", "Ray Cluster", "PDF Processing", "Machine Learning"],
      achievements: [
        "Achieved 95% accuracy in document classification",
        "Processed 1000+ German construction tender documents",
        "Implemented tree data structure with DFS for data extraction",
        "Deployed scalable solution on AWS with autoscaling",
        "Real-time processing capabilities"
      ],
      category: "AI/Machine Learning",
      type: "Work Project"
    },
    {
      id: 'gcp-insightdocs',
      title: "GCP InsightDocs - Document Extraction Platform",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Comprehensive document analysis solution using Google Cloud Document AI and OCR for extracting key information from PDFs and images.",
      fullDescription: "Developed a full-stack solution utilizing Google Cloud Document AI and OCR for automated key-value extraction from PDF files and images. Built ReactJS frontend with document viewer and sidebar displaying extracted information. Implemented Flask Python backend for server-side logic and GCP service communication. The system provides users with an intuitive interface to view original documents while accessing comprehensive extracted data summaries.",
      icon: <Cloud size={32} />,
      technologies: ["ReactJS", "Flask", "Python", "Google Cloud Document AI", "OCR", "GCP"],
      achievements: [
        "Automated key-value extraction from documents",
        "Built intuitive document viewer interface",
        "Integrated Google Cloud Document AI services",
        "Developed comprehensive data extraction pipeline",
        "Created user-friendly sidebar for extracted information"
      ],
      category: "Full-Stack Development",
      type: "Work Project"
    },
    {
      id: 'chappie',
      title: "CHappie - VOIP SAAS Call Center Platform",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Dutch-origin subscription-based VOIP SAAS platform unifying call center operations with web-based calling, monitoring, and role-based access control.",
      fullDescription: "Built a comprehensive call center solution providing web-based calling, VOIP integration, real-time sales monitoring, agent performance tracking, callback handling, and administrative control with role-based access rights. The system centralizes all communication and management functions, enabling organizations to streamline call center workflows and sales operations on a single platform. Features intuitive dashboards for both agents and administrators to enhance productivity and communication efficiency.",
      icon: <Phone size={32} />,
      technologies: ["ReactJS", "Flask", "Node.js", "Python", "MySQL", "MongoDB", "Firebase", "VOIP"],
      achievements: [
        "Unified multi-region call center operations",
        "Implemented real-time sales monitoring",
        "Built role-based access control system",
        "Created agent performance tracking",
        "Developed callback handling mechanisms"
      ],
      category: "Full-Stack Development",
      type: "Work Project"
    },
    {
      id: 'voip-voice-comparison',
      title: "VOIP Voice Comparison System",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Real-time voice comparison system for VOIP communications, separating agent and customer voices to ensure contract compliance.",
      fullDescription: "Embedded within CHappie, this system performs real-time voice comparison between agents and customers during VOIP communication. Utilizes advanced audio processing techniques to separate voices and compares agent speech with predefined contracts to ensure rule compliance. Implements sophisticated speech recognition and rule verification mechanisms for immediate feedback and security enhancement.",
      icon: <Monitor size={32} />,
      technologies: ["Python", "FASTAPI", "AWS EC2", "Ray Cluster", "Audio Processing", "Speech Recognition"],
      achievements: [
        "Real-time voice separation and analysis",
        "Contract compliance verification",
        "Advanced audio processing implementation",
        "Immediate feedback system",
        "Enhanced communication security"
      ],
      category: "AI/Audio Processing",
      type: "Work Project"
    },
    {
      id: 'securetrack',
      title: "SecureTrack - Admin Monitoring System",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Real-time admin monitoring system for logging user actions, detecting suspicious behavior, and maintaining audit trails.",
      fullDescription: "Built using Node.js and MongoDB, SecureTrack enhances application security by logging user actions in real-time. Records detailed logs of each operation performed by users within the platform, allowing administrators to trace activities, detect suspicious behavior, and maintain comprehensive audit trails. Provides accountability and foundational security layer for applications requiring user access oversight.",
      icon: <Shield size={32} />,
      technologies: ["Node.js", "JavaScript", "MongoDB", "Real-time Logging", "Security Monitoring"],
      achievements: [
        "Real-time user action logging",
        "Suspicious behavior detection",
        "Comprehensive audit trail maintenance",
        "Enhanced platform security",
        "Improved administrative visibility"
      ],
      category: "Security/Monitoring",
      type: "Work Project"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI/Machine Learning':
        return '#3b82f6';
      case 'Full-Stack Development':
        return '#8b5cf6';
      case 'AI/Audio Processing':
        return '#f59e0b';
      case 'Security/Monitoring':
        return '#ef4444';
      default:
        return '#6b7280';
    }
  };

  return (
    <section id="projects" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
      <div className="container">
        <h2 className="section-title">Professional Projects</h2>
        <p className="section-subtitle">
          Key projects from my professional experience at leading tech companies
        </p>

        <div className="projects-grid">
          <div className="grid grid-1">
            {projects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-header">
                  <div className="project-icon" style={{ color: getCategoryColor(project.category) }}>
                    {project.icon}
                  </div>
                  <div className="project-title-section">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span className="project-company">{project.company}</span>
                      <span
                        className="project-category"
                        style={{ backgroundColor: getCategoryColor(project.category) }}
                      >
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="project-description">{project.shortDescription}</p>

                {expandedProjects[project.id] && (
                  <div className="project-expanded-content">
                    <div className="project-full-description">
                      <h4 className="description-title">Detailed Overview:</h4>
                      <p>{project.fullDescription}</p>
                    </div>

                    <div className="project-achievements">
                      <h4 className="achievements-title">Key Achievements:</h4>
                      <ul className="achievements-list">
                        {project.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="achievement-item">
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <button
                  className="read-more-btn"
                  onClick={() => toggleProject(project.id)}
                >
                  {expandedProjects[project.id] ? (
                    <>
                      <ChevronUp size={16} />
                      Read Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} />
                      Read More
                    </>
                  )}
                </button>

                <div className="project-technologies">
                  <h4 className="tech-title">Technologies Used:</h4>
                  <div className="tech-tags">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
