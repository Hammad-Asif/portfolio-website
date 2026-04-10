import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const ExperienceTimeline = () => {
  const experiences = [
    {
      "company": "Toptal",
      "location": "Remote",
      "startDate": "2026-01-01T00:00:00.000Z",
      "endDate": "",
      "description": "Open to freelance opportunities in full-stack web development and AI integration through Toptal's vetted network.",
      "current": false,
      "achievements": [
      ]
    }, {
      "company": "Scanify Dev",
      "location": "Remote",
      "startDate": "2025-07-01T00:00:00.000Z",
      "endDate": "2025-11-30T00:00:00.000Z",
      "description": "Contributed to an AI-powered Shopify theme generation platform that used OpenAI APIs to automatically create store content and images for ecommerce clients.",
      "current": false,
      "achievements": [
        "Integrated and maintained OpenAI API features in live production app",
        "Resolved Python FastAPI backend bugs affecting AI feature delivery",
        "Improved stability of OpenAI-powered content and image generation"
      ]
    },
    {
      "company": "Turing.com",
      "location": "Remote",
      "startDate": "2024-04-01T00:00:00.000Z",
      "endDate": "2025-05-31T00:00:00.000Z",
      "description": "Contributed to a Google-commissioned project through Turing to improve Gemini's data analysis reasoning capabilities.",
      "current": false,
      "achievements": [
        "Contributed to Google x Turing project to train Gemini AI",
        "Created supervised fine-tuning (SFT) datasets for data analytics tasks",
        "Performed RLHF annotation and human-in-the-loop evaluation",
        "Designed prompt evaluation frameworks for model assessment"
      ]
    },
    {
      "company": "Recursive Data Ltd.",
      "location": "Multan, Pakistan",
      "startDate": "2023-07-01T00:00:00.000Z",
      "endDate": "2024-03-30T00:00:00.000Z",
      "description": "Contributed to multiple short-term projects spanning web scraping, browser automation, and AI integration.",
      "current": false,
      "achievements": [
        "Built a unified parcel tracking platform that scrapes real-time delivery data across multiple courier sites and Airtable using a single tracking ID.",
        "Integrated ChatGPT into a mobile app, enabling intelligent conversational features within the existing product.",
        "Developed a real-time price comparison tool that scrapes and aggregates product listings across Amazon, eBay, and multiple ecommerce platforms simultaneously.",
      ]
    },
    {
      "company": "Zaytrics (Pvt.) Limited",
      "location": "Islamabad, Pakistan",
      "startDate": "2021-01-01T00:00:00.000Z",
      "endDate": "2023-06-30T00:00:00.000Z",
      "description": "Independently built and deployed multiple production AI systems as client-facing APIs.",
      "current": false,
      achievements: [
        "Built TenderML solo - 95% accuracy PDF classification deployed on AWS EC2",
        "Built GCP InsightDocs solo - Google Cloud Document AI extraction pipeline",
        "Deployed FastAPI systems on AWS EC2 with Ray cluster autoscaling",
        "Contributed backend and API components to VOIP call center (team project)"
      ]
    }
  ]


  const formatDate = (dateString) => {
    if (!dateString) return 'Present';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };


  return (
    <section id="experience" className="section experience-timeline">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">My Journey</p>
          <h2 className="section-title">Work <span className="gradient-text">Experience</span></h2>
          <p className="section-description">
            Over 5 years of professional experience building digital products.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-content">
                <div className="timeline-dot"></div>
                <div className={`timeline-card ${exp.current ? 'current' : ''}`}>
                  <div className="timeline-header">
                    <div className="timeline-icon">
                      <FaBriefcase />
                    </div>
                    <div className="timeline-info">
                      <h3>{exp.title}</h3>
                      <p className="company">{exp.company}</p>
                    </div>
                  </div>

                  <div className="timeline-meta">
                    <span className="meta-item">
                      <FaCalendarAlt />
                      {formatDate(exp.startDate)} - {formatDate(exp.endDate)}
                    </span>
                    {exp.location && (
                      <span className="meta-item">
                        <FaMapMarkerAlt />
                        {exp.location}
                      </span>
                    )}
                  </div>

                  <p className="timeline-description">{exp.description}</p>
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                  {exp.technologies && exp.technologies.length > 0 && (
                    <div className="timeline-tech">
                      {exp.technologies.map((tech, idx) => (
                        <span key={idx} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  )}

                  {exp.current && (
                    <div className="current-badge">
                      <span className="badge">Current</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default ExperienceTimeline;