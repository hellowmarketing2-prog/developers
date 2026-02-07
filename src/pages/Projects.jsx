// import React from "react";
// import "./projets.css"
import "./projects.css"


function ProjectsHeader() {
  return (
    <>
      {/* Page Header */}
      <section className="page-header">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">
            My Projects
          </h1>

          <p
            className="page-subtitle"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Showcasing my work and creative solutions
          </p>
        </div>
      </section>

      {/* Project Filters */}
      <section className="project-filters">
        <div className="container">
          <div className="filter-buttons" data-aos="fade-up">
            <button className="filter-btn active" data-filter="all">
              All Projects
            </button>

            <button className="filter-btn" data-filter="ml">
              Machine Learning
            </button>

            <button className="filter-btn" data-filter="ai">
              AI & RAG
            </button>

            <button className="filter-btn" data-filter="nlp">
              NLP
            </button>

            <button className="filter-btn" data-filter="healthcare">
              Healthcare AI
            </button>
          </div>
        </div>
      </section>






















      <section className="projects-section">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          A showcase of my AI & Web Development projects
        </p>

        <div className="projects-grid">

          {/* PROJECT 1 */}
          <div className="project-card" data-category="ml ai" data-aos="fade-up">
            <div className="project-image">
              <img src="/public/Email.webp" alt="Email Generator" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="email-writer.html" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Umar-Ai-Devs/Iris-Flower-Classifier-App" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Email Generator</h3>
              <p>ML classification system using Random Forest algorithm for email generation.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Scikit-learn</span>
                <span>Streamlit</span>
                <span>Pandas</span>
              </div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project-card" data-category="ai rag" data-aos="fade-up" data-aos-delay="100">
            <div className="project-image">
              <img src="/public/typing.png" alt="Typing Test" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="dummy3.html" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="dummy3.html" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Typing Test</h3>
              <p>LangChain-powered chatbot reading PDF rules, providing context-aware responses.</p>
              <div className="project-tech">
                <span>LangChain</span>
                <span>ChromaDB</span>
                <span>Groq</span>
                <span>Streamlit</span>
              </div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="project-card" data-category="ml healthcare" data-aos="fade-up" data-aos-delay="200">
            <div className="project-image">
              <img src="/public/email-sender.jpg" alt="Email Sender" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="email-sender.html" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Umar-Ai-Devs/breast-cancer-prediction" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Email Sender</h3>
              <p>Logistic Regression ML model for email-based predictions and automation.</p>
              <div className="project-tech">
                <span>Python</span>
                <span>Streamlit</span>
                <span>Machine Learning</span>
              </div>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="project-card" data-category="ml analytics" data-aos="fade-up" data-aos-delay="300">
            <div className="project-image">
              <img src="/public/coustomer.jpg" alt="Customer Analytics" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://customer-segmentation-app-co4kcwq7emoec2pdjv5ghw.streamlit.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Umar-Ai-Devs/Customer-Segmentation-App" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Customer Analytics Platform</h3>
              <p>K-Means clustering for customer segmentation with interactive dashboard.</p>
              <div className="project-tech">
                <span>K-Means</span>
                <span>Analytics</span>
                <span>Python</span>
                <span>Streamlit</span>
              </div>
            </div>
          </div>

          {/* PROJECT 5 */}
          <div className="project-card" data-category="ml security" data-aos="fade-up" data-aos-delay="400">
            <div className="project-image">
              <img src="/public/anomaly.png" alt="Anomaly Detection" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://fraud-detection-app-wlp3fg2qklohwyocxwi5xg.streamlit.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Umar-Ai-Devs/Fraud-Detection-App" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>Anomaly Detection System</h3>
              <p>Isolation Forest algorithm detecting fraudulent transactions with real-time monitoring.</p>
              <div className="project-tech">
                <span>Anomaly Detection</span>
                <span>Security</span>
                <span>Python</span>
                <span>Real-time</span>
              </div>
            </div>
          </div>

          {/* PROJECT 6 */}
          <div className="project-card" data-category="nlp security" data-aos="fade-up" data-aos-delay="500">
            <div className="project-image">
              <img src="/public/npl.jpg" alt="Spam Email Classifier" />
              <div className="project-overlay">
                <div className="project-links">
                  <a href="https://spam-vs-ham-email-classifier-uugi3u4ca2jw8f6dmu8i99.streamlit.app/" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                  <a href="https://github.com/Umar-Ai-Devs/Spam-vs-Ham-Email-Classifier" className="project-link" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="project-content">
              <h3>NLP Email Security</h3>
              <p>Naive Bayes classifier for spam detection and email filtering.</p>
              <div className="project-tech">
                <span>NLP</span>
                <span>Text Classification</span>
                <span>Python</span>
                <span>Security</span>
              </div>
            </div>
          </div>

          {/* PROJECTS 7–12 */}
          {[
            {
              img: "conversational.jpg",
              title: "Conversational AI Chatbot",
              desc: "LangChain + Groq chatbot with memory, context-aware responses.",
              tech: ["LangChain", "Groq", "Streamlit", "AI"],
              live: "https://chatbot01-p4pczgbwdsbcmhaackf3sv.streamlit.app/",
              git: "https://github.com/Umar-Ai-Devs/chatbot_01"
            },
            {
              img: "ai.jpg",
              title: "AI Chatbot Web App",
              desc: "Smart AI chatbot integrated into web interface.",
              tech: ["Python", "Flask", "OpenAI", "JS"]
            },
            {
              img: "personal.jpg",
              title: "Personal Portfolio Website",
              desc: "Responsive portfolio with modern UI/UX.",
              tech: ["HTML", "CSS", "JS", "Tailwind"]
            },
            {
              img: "e-.jpg",
              title: "E-commerce Mini Website",
              desc: "Online store with cart and checkout simulation.",
              tech: ["HTML", "CSS", "JS", "LocalStorage"]
            },
            {
              img: "to-do.png",
              title: "To-Do Web App",
              desc: "Task manager with CRUD operations.",
              tech: ["Python", "Flask", "SQLite", "HTML/CSS"]
            },
            {
              img: "weather.jpg",
              title: "Weather & News Dashboard",
              desc: "Live weather and news dashboard.",
              tech: ["HTML", "CSS", "JS", "API"]
            }
          ].map((project, i) => (
            <div className="project-card" key={i} data-aos="fade-up">
              <div className="project-image">
                <img src={`/public/${project.img}`} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    {project.live && (
                      <a href={project.live} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fas fa-external-link-alt"></i>
                      </a>
                    )}
                    {project.git && (
                      <a href={project.git} className="project-link" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>

                <div className="project-tech">
                  {project.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>













     <section className="project-stats">
        <div className="container">
          <div className="stats-grid" data-aos="fade-up">

            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-robot"></i>
              </div>
              <h3>7+</h3>
              <p>AI/ML Projects</p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>95%+</h3>
              <p>Model Accuracy</p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-clock"></i>
              </div>
              <h3>3+</h3>
              <p>Years AI Experience</p>
            </div>

            <div className="stat-item">
              <div className="stat-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>100%</h3>
              <p>Production Ready</p>
            </div>

          </div>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Have a Project in Mind?</h2>
            <p>
              I'm always excited to work on new and challenging projects.
              Let's discuss your ideas and bring them to life together.
            </p>
            <div className="cta-buttons">
              <a href="contact.html" className="btn btn-primary">
                Start a Project
              </a>
              <a href="about.html" className="btn btn-outline">
                Learn More About Me
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">

            <div className="footer-section">
              <h3>Portfolio</h3>
              <p>Creating amazing digital experiences with passion and dedication.</p>
              <div className="footer-social">
                <a href="https://github.com/Umar-Ai-Devs" className="social-link">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/umar-ai-devs" className="social-link">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#" className="social-link">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="mailto:umaraidevs@gmail.com" className="social-link">
                  <i className="fas fa-envelope"></i>
                </a>
              </div>
            </div>

            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="skills.html">Skills</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact</a></li>
              </ul>
            </div>

            <div className="footer-section">
              <h4>Contact Info</h4>
              <div className="contact-info">
                <p><i className="fas fa-envelope"></i> umaraidevs@gmail.com</p>
                <p><i className="fas fa-phone"></i> +92 0303 3418886</p>
                <p><i className="fas fa-map-marker-alt"></i> Faisalabad, Pakistan</p>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Portfolio. All rights reserved.</p>
          </div>
        </div>
      </footer>















    </>
  );
}

export default ProjectsHeader;










