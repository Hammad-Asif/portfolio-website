import React, { useState } from 'react';
import { FaChevronDown, FaQuestion } from 'react-icons/fa';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is your typical development process?',
      answer: 'My development process follows an agile methodology: 1) Discovery & Planning - Understanding your requirements and goals. 2) Design & Prototyping - Creating wireframes and mockups. 3) Development - Building the solution in iterative sprints. 4) Testing - Thorough QA testing across devices. 5) Deployment - Launching to production. 6) Support - Ongoing maintenance and updates.'
    },
    {
      question: 'How long does it take to build a web application?',
      answer: 'Timeline depends on project complexity: Simple websites (1-3 pages): 1-2 weeks. Medium complexity applications (dashboards, e-commerce): 4-8 weeks. Complex enterprise applications: 8-16+ weeks. I provide detailed timelines during the proposal phase after understanding your specific requirements.'
    },
    {
      question: 'Do you provide ongoing support and maintenance?',
      answer: 'Yes! All projects include a free support period after launch (1-3 months depending on the package). After the free period, I offer affordable monthly maintenance plans that include bug fixes, security updates, performance monitoring, and minor feature additions.'
    },
    {
      question: 'What technologies do you specialize in?',
      answer: 'I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and also work extensively with Python, Flask/FastAPI, AI/ML Development, LLM Integerations and AWS. For AI projects, I use various ML frameworks. I choose the best technology stack based on your project requirements.'
    },
    {
      question: 'Can you work with my existing team?',
      answer: 'Absolutely! I offer flexible engagement models including full project ownership, team augmentation, and technical consulting. I can integrate with your existing workflows using tools like Jira, Slack, and GitHub. I\'m comfortable working in both independent and collaborative environments.'
    },
    {
      question: 'What is your payment structure?',
      answer: 'I typically work with a milestone-based payment structure: 30% upfront to begin the project, 40% at the midpoint delivery, and 30% upon completion. For larger projects, we can arrange monthly billing. I accept bank transfers, PayPal, and Wise.'
    },
    {
      question: 'Do you sign NDAs and confidentiality agreements?',
      answer: 'Yes, I understand the importance of protecting your intellectual property. I\'m happy to sign NDAs before discussing project details. All project code and data are kept strictly confidential and are never shared with third parties.'
    },
    {
      question: 'What if I need changes after the project is complete?',
      answer: 'Post-launch changes are handled through our support agreement. Bug fixes are covered during the free support period. For feature additions, I provide a separate quote. I also offer monthly retainer packages for ongoing development needs.'
    },
    {
      question: 'Can you help with AI/ML integration in my existing application?',
      answer: 'Yes! I specialize in integrating AI capabilities into existing applications. This includes adding chatbots, recommendation systems, predictive analytics, image recognition, natural language processing, and more. I can assess your current system and recommend the best AI solutions for your needs.'
    },
    {
      question: 'How do we communicate during the project?',
      answer: 'I believe in transparent communication. We\'ll have regular check-ins via video calls (weekly or bi-weekly), daily progress updates via your preferred channel (Slack, email), and access to a project management board. I\'m available during business hours (PKT) and flexible for timezone differences.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-header">
          <p className="section-subtitle">Questions?</p>
          <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
          <p className="section-description">
            Find answers to common questions about my services and process.
          </p>
        </div>

        <div className="faq-grid">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <div className="faq-question-icon">
                  <FaQuestion />
                </div>
                <h3>{faq.question}</h3>
                <div className="faq-toggle-icon">
                  <FaChevronDown />
                </div>
              </div>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <p>Still have questions?</p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>

    </section>
  );
};

export default FAQ;