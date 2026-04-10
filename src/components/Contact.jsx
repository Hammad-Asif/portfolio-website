import React, { useState } from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import axios from 'axios';
import { toast } from 'react-toastify';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('/api/contact/submit', formData);
      toast.success(response.data.message);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    } catch (error) {
      toast.error(error.response?.data?.message || 'Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      detail: 'Hammadcto786@gmail.com',
      link: 'mailto:Hammadcto786@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      detail: '+92 308 7724490',
      link:null
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      detail: 'Pakistan (Available Worldwide - Remote)',
      link: null
    },
    {
      icon: <FaClock />,
      title: 'Response Time',
      detail: 'Within 24 hours',
      link: null
    }
  ];

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-info">
          <p className="section-subtitle">Get In Touch</p>
          <h2>Let's Build Something <span className="gradient-text">Amazing Together</span></h2>
          <p>
            Have a project in mind? I'd love to hear about it. Fill out the form and I'll get back to you 
            within 24 hours with a free consultation and quote.
          </p>

          <div className="contact-details">
            {contactInfo.map((item, index) => (
              <div key={index} className="contact-item">
                <div className="contact-item-icon">{item.icon}</div>
                <div className="contact-item-content">
                  <h4>{item.title}</h4>
                  {item.link ? (
                    <a href={item.link}>{item.detail}</a>
                  ) : (
                    <p>{item.detail}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+92 300 1234567"
              />
            </div>
            <div className="form-group">
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="service">Service Required *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="AI Development">AI Development</option>
                <option value="Python Scripting">Python Scripting</option>
                <option value="API Development">API Development</option>
                <option value="DevOps & Deployment">DevOps & Deployment</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="budget">Budget Range</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
              >
                <option value="">Select budget range</option>
                <option value="Less than $1,000">Less than $1,000</option>
                <option value="$1,000 - $5,000">$1,000 - $5,000</option>
                <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                <option value="$25,000+">$25,000+</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="message">Project Details *</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell me about your project, goals, and timeline..."
              required
            />
          </div>

          <button type="submit" className="form-submit" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message & Get Free Quote'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;