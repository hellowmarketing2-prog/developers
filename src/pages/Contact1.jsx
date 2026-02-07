// import React from "react";
import "./Contact.css"; // your custom CSS for contact page

function Contact() {
  return (
    <>
      {/* ===== PAGE HEADER ===== */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">Get In Touch</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="200">
            Let's work together to bring your ideas to life
          </p>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section className="contact-section">
        <div className="container">
          <div className="contact-content">

            {/* ===== CONTACT INFO ===== */}
            <div className="contact-info" data-aos="fade-right">
              <h2>Let's Start a Conversation</h2>
              <p>
                I'm always interested in new opportunities and exciting projects.
                Whether you have a question or just want to say hi, I'll try my
                best to get back to you!
              </p>

              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <p>umaraidevs@gmail.com</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <p>+92 0303 3418886</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p>FAISALABAD, PAKISTAN</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-clock"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Available</h4>
                    <p>Mon - Fri, 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="social-links">
                <h4>Follow Me</h4>
                <div className="social-icons">
                  <a href="https://github.com/Umar-Ai-Devs" className="social-link" title="GitHub">
                    <i className="fab fa-github"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/umar-ai-devs" className="social-link" title="LinkedIn">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href="#" className="social-link" title="Twitter">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.instagram.com/umar_ai_devs/" className="social-link" title="Instagram">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* ===== CONTACT FORM ===== */}
            <div className="contact-form-container" data-aos="fade-left">
              <form className="contact-form" id="contactForm">
                <div className="form-group">
                  <label htmlFor="name">Full Name *</label>
                  <input type="text" id="name" name="name" required />
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address *</label>
                  <input type="email" id="email" name="email" required />
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject *</label>
                  <input type="text" id="subject" name="subject" required />
                  <span className="error-message"></span>
                </div>

                <div className="form-group">
                  <label htmlFor="budget">Project Budget</label>
                  <select id="budget" name="budget">
                    <option value="">Select Budget Range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-10k">$5,000 - $10,000</option>
                    <option value="10k-25k">$10,000 - $25,000</option>
                    <option value="25k-50k">$25,000 - $50,000</option>
                    <option value="over-50k">Over $50,000</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    required
                    placeholder="Tell me about your project..."
                  ></textarea>
                  <span className="error-message"></span>
                </div>

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="newsletter" name="newsletter" />
                    <span className="checkmark"></span>
                    Subscribe to my newsletter for updates
                  </label>
                </div>

                <button type="submit" className="btn btn-primary btn-full">
                  <span className="btn-text">Send Message</span>
                  <span className="btn-loading">
                    <i className="fas fa-spinner fa-spin"></i>
                    Sending...
                  </span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>















{/* 
      const FaqMapFooter = () => {
  const [openIndex, setOpenIndex] = useState(null);

      const faqs = [
      {
        question: "How long does a typical project take?",
      answer:
      "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while a full-stack application can take 2-6 months. I'll provide a detailed timeline during our initial consultation.",
    },
      {
        question: "Do you work with clients remotely?",
      answer:
      "Yes! I work with clients worldwide and have extensive experience with remote collaboration. I use various tools for communication, project management, and code sharing to ensure smooth workflow.",
    },
      {
        question: "What's included in your development services?",
      answer:
      "My services include design, development, testing, deployment, and post-launch support. I also provide documentation, training, and maintenance services to ensure your project's long-term success.",
    },
      {
        question: "Do you provide ongoing maintenance and support?",
      answer:
      "Absolutely! I offer various maintenance packages to keep your application updated, secure, and performing optimally. This includes bug fixes, security updates, feature enhancements, and performance monitoring.",
    },
      {
        question: "What technologies do you specialize in?",
      answer:
      "I specialize in modern web technologies including React, Vue.js, Node.js, Python, and various databases. I also work with mobile development using React Native and Flutter. Check my skills page for a complete list.",
    },
      ];

  const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
  }; */}













      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Quick answers to common questions</p>
          </div>
          {/* <div className="faq-container" data-aos="fade-up" data-aos-delay="200">
            {faqs.map((faq, index) => (
              <div className="faq-item" key={index}>
                <div
                  className="faq-question"
                  onClick={() => toggleFaq(index)}
                >
                  <h4>{faq.question}</h4>
                  <i
                    className={`fas fa-chevron-${openIndex === index ? "up" : "down"}`}
                  ></i>
                </div>
                {openIndex === index && (
                  <div className="faq-answer">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Find Me</h2>
            <p className="section-subtitle">Located in the heart of the city</p>
          </div>
          <div className="map-container" data-aos="fade-up" data-aos-delay="200">
            <div className="map-placeholder">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Interactive Map</h3>
              <p>FAISALABAD, PAKISTAN</p>
              <small>Map integration would go here</small>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Start Your Project?</h2>
            <p>
              Let's discuss your ideas and create something amazing together.
              I'm just one message away!
            </p>
            <div className="cta-buttons">
              <a href="#contactForm" className="btn btn-primary">
                Send Message
              </a>
              <a href="projects.html" className="btn btn-outline">
                View My Work
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Portfolio</h3>
              <p style={{ color: "white" }}>
                Creating amazing digital experiences with passion and dedication.
              </p>
              <div className="footer-social">
                <a
                  href="https://github.com/Umar-Ai-Devs"
                  className="social-link"
                >
                  <i className="fab fa-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/umar-ai-devs"
                  className="social-link"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  style={{ color: "white" }}
                  href="https://www.facebook.com/profile.php?id=61585355743404"
                  aria-label="Facebook"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
            <div className="footer-section">
              <h4 style={{ color: "white" }}>Quick Links</h4>
              <ul>
                <li style={{ color: "white" }}>
                  <a href="index.html">Home</a>
                </li>
                <li style={{ color: "white" }}>
                  <a href="about.html">About</a>
                </li>
                <li style={{ color: "white" }}>
                  <a href="skills.html">Skills</a>
                </li>
                <li style={{ color: "white" }}>
                  <a href="projects.html">Projects</a>
                </li>
                <li style={{ color: "white" }}>
                  <a href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4 style={{ color: "white" }}>Contact Info</h4>
              <div className="contact-info">
                <p style={{ color: "white" }}>
                  <i className="fas fa-envelope"></i> umaraidevs@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone"></i> +92 0303 3418886
                </p>
                <p style={{ color: "white" }}>
                  <i className="fas fa-map-marker-alt"></i> FAISALABAD, PAKISTAN
                </p>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p style={{ color: "white" }}>&copy; 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Contact;





















