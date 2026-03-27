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
      title: "Gemini AI Trainer — Google x Turing Project",
      company: "Turing.com",
      shortDescription: "Contributed to a Google-commissioned project through Turing to improve Gemini's data analysis reasoning — creating training datasets, evaluation frameworks, and RLHF annotations.",
      fullDescription: "As part of a Google x Turing collaboration, worked on improving Gemini's ability to handle real-world data analysis tasks. Responsibilities included designing prompt evaluation frameworks to assess model responses across different analytical scenarios, creating high-quality supervised fine-tuning (SFT) datasets tailored to data analytics workflows, and performing RLHF (Reinforcement Learning from Human Feedback) annotation to align model outputs with business logic and analytical accuracy. Applied human-in-the-loop feedback methodology to iteratively improve model performance across multimodal AI workflows.",
      icon: <Brain size={32} />,
      technologies: ["Python", "Gemini", "Prompt Engineering", "RLHF", "SFT", "Data Annotation", "Human-in-the-loop", "Data Analytics"],
      achievements: [
        "Contributed to Google-commissioned Gemini AI improvement project",
        "Created SFT datasets for data analytics task training",
        "Performed RLHF annotation to align model outputs with business logic",
        "Designed prompt evaluation frameworks across analytical scenarios",
        "Applied human-in-the-loop methodology for iterative improvement"
      ],
      category: "AI/Machine Learning",
      type: "Work Project"
    },
    {
      id: 'tenderml',
      title: "TenderML - AI Document Classification System",
      company: "Zaytrics (Pvt.) Limited",
      shortDescription: "Independently built from scratch — an AI system for real-time text classification and information extraction from German construction tender PDFs with 95% accuracy. Sole developer from ML training to production API deployment.",
      fullDescription: "Built a comprehensive AI system utilizing Support Vector Machines (SVM) to classify text within PDF documents containing German construction tender information. Processed over 1000 documents with varying formats but consistent contextual content. Employed tree data structures post-classification with DFS traversal for specific information identification. Implemented filtering mechanisms to refine extracted data and deployed the solution using FASTAPI on Ray cluster hosted on AWS EC2 with autoscaling capabilities.",
      icon: <FileText size={32} />,
      technologies: ["Python", "SVM", "FASTAPI", "AWS EC2", "Ray Cluster", "PDF Processing", "Machine Learning"],
      achievements: [
        "Built entirely solo — from ML model training to production API deployment",
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
      shortDescription: "Independently built from scratch — a comprehensive document analysis solution using Google Cloud Document AI and OCR. Sole developer, delivered as a client-facing API integrated into the client's existing system.",
      fullDescription: "Developed a full-stack solution utilizing Google Cloud Document AI and OCR for automated key-value extraction from PDF files and images. Built ReactJS frontend with document viewer and sidebar displaying extracted information. Implemented Flask Python backend for server-side logic and GCP service communication. The system provides users with an intuitive interface to view original documents while accessing comprehensive extracted data summaries.",
      icon: <Cloud size={32} />,
      technologies: ["ReactJS", "Flask", "Python", "Google Cloud Document AI", "OCR", "GCP"],
      achievements: [
        "Built entirely solo — complete end-to-end ownership from development to deployment",
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
      shortDescription: "Dutch-origin subscription-based VOIP SAAS platform unifying call center operations. Contributed Python backend and API components as part of a cross-functional development team.",
      fullDescription: "Built a comprehensive call center solution providing web-based calling, VOIP integration, real-time sales monitoring, agent performance tracking, callback handling, and administrative control with role-based access rights. The system centralizes all communication and management functions, enabling organizations to streamline call center workflows and sales operations on a single platform. Features intuitive dashboards for both agents and administrators to enhance productivity and communication efficiency.",
      icon: <Phone size={32} />,
      technologies: ["ReactJS", "Flask", "Node.js", "Python", "MySQL", "MongoDB", "Firebase", "VOIP"],
      achievements: [
        "Contributed Python backend and API components to team project",
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
      shortDescription: "Real-time voice comparison system for VOIP communications. Collaborated as part of the Zaytrics development team on this audio processing feature.",
      fullDescription: "Embedded within CHappie, this system performs real-time voice comparison between agents and customers during VOIP communication. Utilizes advanced audio processing techniques to separate voices and compares agent speech with predefined contracts to ensure rule compliance. Implements sophisticated speech recognition and rule verification mechanisms for immediate feedback and security enhancement.",
      icon: <Monitor size={32} />,
      technologies: ["Python", "FASTAPI", "AWS EC2", "Ray Cluster", "Audio Processing", "Speech Recognition"],
      achievements: [
        "Collaborated on real-time voice separation and analysis system",
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
    },
    {
      id: 'scanify-shopify',
      title: "AI Shopify Theme Generator — OpenAI Integration",
      company: "Scanify Dev (Freelance)",
      shortDescription: "Contributed to an AI-powered platform that generates Shopify store themes using OpenAI APIs — automating content and image creation for ecommerce stores. Worked on the Python FastAPI backend in a live production environment.",
      fullDescription: "Worked as a freelance backend developer on a production application that uses OpenAI APIs to automatically generate Shopify store themes, including AI-generated content and images tailored to each store's niche. The platform was built on a Python FastAPI backend. Responsibilities included resolving backend bugs that affected AI feature stability, improving OpenAI API integration reliability, and ensuring consistent delivery of AI-powered content and image generation features for active ecommerce clients.",
      icon: <Monitor size={32} />,
      technologies: ["Python", "FastAPI", "OpenAI API", "REST APIs", "Backend Development", "AI Integration"],
      achievements: [
        "Maintained and improved OpenAI API integrations in live production app",
        "Resolved Python FastAPI backend bugs affecting AI feature delivery",
        "Worked on real ecommerce product actively used by clients",
        "Gained production experience with OpenAI image and text generation APIs"
      ],
      category: "AI/Machine Learning",
      type: "Freelance Project"
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
