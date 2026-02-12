// import React from "react";
// import "./projets.css"
import "./projects.css"
const base = import.meta.env.BASE_URL;


function ProjectsHeader() {
  const base = import.meta.env.BASE_URL;
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
                <img src="data:image/jpeg;base64,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" alt="Email Generator" />
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
                <img src="data:image/jpeg;base64,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" alt="Typing Test" />
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
                <img src={`${base}email-sender.jpg`} alt="Email Sender" />
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
                <img src={`${base}coustomer.jpg`} alt="Customer Analytics" />
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
                <img src={`${base}anomaly.png`} alt="Anomaly Detection" />
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
                <img src={`${base}npl.jpg`} alt="Spam Email Classifier" />
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
                img: "data:image/jpeg;base64,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",
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
                  <img src={`/${project.img}`} alt={project.title} />
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










