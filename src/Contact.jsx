import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
function Contact() {

      const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
      });

        // 2. State for Loading/Error Status
        const [status, setStatus] = useState('');
      
        // 3. Handle Input Changes
        const handleChange = (e) => {
          setFormData({ ...formData, [e.target.name]: e.target.value });
        };


         const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Submitting...');

    // **** Backend/Email Integration Logic ****
    // यहाँ आपको अपने Backend Service (जैसे Formspree, Netlify Forms, या आपकी API) 
    // का उपयोग करके डेटा भेजना होगा।
    
    try {
const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Message Sent Successfully! We will contact you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' }); // Reset form
      } else {
        setStatus('Submission Failed. Please try again or call us.');


      }
    } catch (error) {
      console.error('Submission Error:', error);
      setStatus('An error occurred. Check your network or contact support.');
    }
  };

  return (
     <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-info">
            <h2>Let's Talk Business!</h2>
            <p>
              Ready to kickstart your next software project or IT solution?
              Get in touch today and let's bring your ideas to life!
            </p>
            <div className="info-item">📞 Call Us: 8826248376</div>
            <div className="info-item">📍 Address: Ratiya Marg, Sangam Vihar, Delhi</div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Send a Message</h3>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="subject"
              placeholder="Service"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" disabled={status === "Submitting..."}>
              {status === "Submitting..." ? "Sending..." : "Send Message"}
            </button>

            {status && status !== "Submitting..." && (
              <p
                className={`status-message ${
                  status.includes("Successfully") ? "success" : "error"
                }`}
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </section>
  )
}

export default Contact