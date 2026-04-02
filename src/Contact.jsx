import React, { useState } from "react";
import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false); // ✅ better control

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Submitting...");

    try {
      const response = await fetch(
        "https://portfolio-258z.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("Message Sent Successfully! We will contact you soon.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("Submission Failed. Please try again.");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      setStatus("Server error. Please try again later.");
    } finally {
      setLoading(false); // ✅ always stop loading
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-info">
          <h2>Let's Talk Business!</h2>
          <p>
            Ready to kickstart your next software project or IT solution?
            Get in touch today and let's bring your ideas to life!
          </p>

          <div className="info-item">📞 Call Us: 8826248376</div>
          <div className="info-item">
            📍 Address: Ratiya Marg, Sangam Vihar, Delhi
          </div>
          <div className="info-item">📧 Email: support@yourdomain.com</div>
        </div>

        {/* RIGHT SIDE FORM */}
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
            placeholder="Service (e.g. Web Dev, App Dev)"
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Describe your project..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Message"}
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
  );
}

export default Contact;