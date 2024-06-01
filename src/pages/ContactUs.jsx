import React from 'react'
import { Layout } from '../components/layouts/Layout'
import bg from '../images/bg.jpg';
import Contact from '../style/Contact.css';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';



const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Disabling the submit button unless the recaptcha is used. 
  const [verified, setVerified] = useState(false);
  const onChange = (value) => {
    console.log("Captcha value:", value);
    setVerified(true);
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    alert("Form Succesfully Submitted");

  };

  return (
    <Layout>
      <div className='contact' style={{ backgroundImage: `url(${bg})` }}>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h2>Contact Us</h2>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
            onChange={onChange}
          />
          <button type="submit" disabled={!verified}>Submit</button>
        </form>
      </div>
    </Layout>
  );
};

export default ContactUs
