import React, { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio Website');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:Hammadasif1437@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  };

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: "Hammadasif1437@gmail.com",
      link: "mailto:Hammadasif1437@gmail.com"
    },
    {
      icon: <Linkedin size={24} />,
      label: "LinkedIn",
      value: "Muhammad Hammad Asif",
      link: "https://www.linkedin.com/in/hammad-asif/"
    },
    {
      icon: <Github size={24} />,
      label: "GitHub",
      value: "hammad-asif",
      link: "https://github.com/hammad-asif"
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: "Available for Remote Work",
      link: null
    }
  ];

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">
          Let's discuss how we can work together on your next project
        </p>
        
        <div className="contact-content">
          <div className="grid grid-2">
            {/* Contact Information */}
            <div className="contact-info">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                I'm always interested in new opportunities and exciting projects. 
                Whether you have a question or just want to say hi, feel free to reach out!
              </p>
              
              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <div key={index} className="contact-item">
                    <div className="contact-icon">
                      {info.icon}
                    </div>
                    <div className="contact-text">
                      <div className="contact-label">{info.label}</div>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="contact-value"
                          target={info.link.startsWith('http') ? '_blank' : '_self'}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : ''}
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="contact-value">{info.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="availability-status">
                <div className="status-indicator"></div>
                <span>Available for new opportunities</span>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="contact-form-container">
              <h3 className="contact-form-title">Send a Message</h3>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-input"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-input"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-input"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-textarea"
                    rows="5"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary form-submit">
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p>&copy; 2024 Muhammad Hammad Asif. All rights reserved.</p>
            <p>Built with React & Modern Web Technologies</p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Contact;
