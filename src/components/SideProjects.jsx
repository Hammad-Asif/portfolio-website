import React, { useState } from 'react';
import { ShoppingCart, Smartphone, Code, Package, FileText, ChevronDown, ChevronUp } from 'lucide-react';

const SideProjects = () => {
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleProject = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const sideProjects = [
    {
      id: 'ecommerce-price-comparison',
      title: "Real-time Ecommerce Price Comparison Tool",
      shortDescription: "Comprehensive web scraping tool that compares prices across multiple ecommerce platforms including Amazon and eBay in real-time.",
      fullDescription: "The tool is designed to scrape data from various Ecommerce websites, including but not limited to Amazon, eBay, and other relevant platforms. The focus is on extracting information based on unique product identifiers and names, allowing users to compare prices effortlessly. The system employs web scraping techniques to fetch up-to-date information from diverse Ecommerce websites. Regular and automated data updates ensure that users have access to the latest pricing information. This project is a powerful and efficient Real-time Ecommerce Price Comparison Tool, empowering users and buyers to make well-informed online purchasing decisions by easily comparing prices across multiple platforms.",
      icon: <ShoppingCart size={32} />,
      technologies: ["Python", "Web Scraping", "BeautifulSoup", "Selenium", "Data Processing", "API Integration"],
      achievements: [
        "Real-time price comparison across multiple platforms",
        "Automated data updates for latest pricing information",
        "Product identification using unique identifiers",
        "User-friendly interface for price comparison",
        "Comprehensive features promoting transparency",
        "Simplified online shopping experience"
      ],
      category: "Web Scraping",
      status: "Completed"
    },
    {
      id: 'foodscan-saas',
      title: "FoodScanSAAS - Mobile Application",
      shortDescription: "SAAS mobile application that scans food barcodes to provide detailed ingredient information and definitions using ChatGPT integration.",
      fullDescription: "FoodScanSAAS is a Software as a Service (SAAS) mobile application designed to simplify the process of understanding food items by scanning their barcodes. The app provides users with detailed information about the ingredients present in the scanned food products, along with their definitions. One of the key features of the application is its integration with ChatGPT, enhancing the user experience by providing accurate and comprehensive ingredient definitions through natural language processing. The app empowers users to make informed and healthier food choices, enhances transparency in understanding packaged food content, and offers a convenient solution for individuals with dietary restrictions or allergies.",
      icon: <Smartphone size={32} />,
      technologies: ["Mobile Development", "Barcode Scanning", "ChatGPT API", "Natural Language Processing", "SAAS Architecture"],
      achievements: [
        "Barcode scanning for instant food identification",
        "ChatGPT integration for ingredient definitions",
        "Detailed nutritional information display",
        "Support for dietary restrictions and allergies",
        "Enhanced transparency in food content",
        "Convenient mobile-first user experience"
      ],
      category: "Mobile Development",
      status: "Completed"
    },
    {
      id: 'flowsketch-js',
      title: "FlowSketchJS – Lightweight Diagramming Library",
      shortDescription: "Pure JavaScript graphics library for rendering interactive flow diagrams directly in browsers without external dependencies.",
      fullDescription: "FlowSketchJS is a lightweight, pure JavaScript graphics library designed to empower websites with the ability to render simple flow diagrams directly in the browser. The library enables developers to create interactive diagrams using customizable shapes and text, without relying on external frameworks or plugins. This solution streamlines visual communication for web applications, particularly in educational tools, dashboards, and process visualization interfaces. The library provides a modern, efficient approach to diagram creation with zero dependencies.",
      icon: <Code size={32} />,
      technologies: ["JavaScript", "HTML5 Canvas", "SVG", "DOM Manipulation", "Graphics Programming"],
      achievements: [
        "Zero-dependency lightweight library",
        "Interactive diagram creation capabilities",
        "Customizable shapes and text elements",
        "Browser-native implementation",
        "Suitable for educational and dashboard applications",
        "Streamlined visual communication solution"
      ],
      category: "JavaScript Library",
      status: "Completed"
    },
    {
      id: 'order-tracking-system',
      title: "Order Tracking Web Scraping System",
      shortDescription: "Python-based centralized platform for real-time order tracking across multiple online platforms using web scraping and Airtable integration.",
      fullDescription: "The Order Tracking Web Scraping System is a Python-based web scraping project designed to provide users with a centralized platform for real-time tracking of their orders placed on various online platforms. The system utilizes web scraping techniques to extract order-related information from the client's personal website and aggregates the data seamlessly using Airtable. This web-based solution enables users to track their orders conveniently, even when delivered through different courier services, providing a unified tracking experience across multiple platforms.",
      icon: <Package size={32} />,
      technologies: ["Python", "Web Scraping", "Airtable API", "Data Aggregation", "Real-time Processing"],
      achievements: [
        "Centralized order tracking across platforms",
        "Real-time order status updates",
        "Seamless Airtable data aggregation",
        "Multi-courier service support",
        "Automated data extraction and processing",
        "Unified tracking experience for users"
      ],
      category: "Web Scraping",
      status: "Completed"
    },
    {
      id: 'text-summarization',
      title: "Abstractive and Extractive Summarization System",
      shortDescription: "Bachelor's degree final project combining deep learning and LSA techniques for comprehensive text summarization with C# frontend integration.",
      fullDescription: "This project represents the culmination of the Bachelor's degree and focuses on abstractive and extractive summarization. For abstractive summarization, a deep learning neural network was trained on the CNN/Dailymail dataset using bidirectional LSTM. The model was designed to perform text summarization tasks using a machine translation algorithm. For extractive summarization, Latent Semantic Analysis (LSA) was employed to generate summaries of generic text using Singular Value Decomposition (SVD). The entire system was developed using Python Flask and connected to a C# n-tier application for Windows, facilitating communication between the backend and frontend components.",
      icon: <FileText size={32} />,
      technologies: ["Python", "Flask", "TensorFlow", "LSTM", "LSA", "SVD", "C#", "CNN/DailyMail Dataset"],
      achievements: [
        "Bidirectional LSTM for abstractive summarization",
        "LSA implementation for extractive summarization",
        "CNN/DailyMail dataset training and optimization",
        "Machine translation approach for text summarization",
        "C# n-tier application integration",
        "Comprehensive NLP and ML demonstration"
      ],
      category: "Machine Learning",
      status: "Completed"
    }
  ];

  const getCategoryColor = (category) => {
    switch (category) {
      case 'Web Scraping':
        return '#10b981';
      case 'Mobile Development':
        return '#f59e0b';
      case 'JavaScript Library':
        return '#8b5cf6';
      case 'Machine Learning':
        return '#3b82f6';
      case 'Web Development':
        return '#06b6d4';
      default:
        return '#6b7280';
    }
  };

  return (
    <section id="side-projects" className="section">
      <div className="container">
        <h2 className="section-title">Side Projects</h2>
        <p className="section-subtitle">
          Personal projects and innovative solutions developed in my spare time
        </p>
        
        <div className="projects-grid">
          <div className="grid grid-1">
            {sideProjects.map((project) => (
              <div key={project.id} className="project-card card">
                <div className="project-header">
                  <div className="project-icon" style={{ color: getCategoryColor(project.category) }}>
                    {project.icon}
                  </div>
                  <div className="project-title-section">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-meta">
                      <span 
                        className="project-category"
                        style={{ backgroundColor: getCategoryColor(project.category) }}
                      >
                        {project.category}
                      </span>
                      <span className="project-status">{project.status}</span>
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

export default SideProjects;
