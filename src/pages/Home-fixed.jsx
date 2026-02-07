// src/pages/Home.jsx
import React, { useEffect } from "react";
import "./Sections.css"

function Home() {
  useEffect(() => {
    // Chat functionality
    const chatButton = document.getElementById("chatButton");
    const chatPopup = document.getElementById("chatPopup");
    const closeChat = document.getElementById("closeChat");

    const toggleChat = () => {
      chatPopup?.classList.toggle("active");
    };

    const closeChatHandler = () => {
      chatPopup?.classList.remove("active");
    };

    chatButton?.addEventListener("click", toggleChat);
    closeChat?.addEventListener("click", closeChatHandler);

    // Auto change SVG button colors
    let hue = 0;
    const colorInterval = setInterval(() => {
      hue = (hue + 1) % 360;
      if (chatButton) {
        chatButton.style.background = `hsl(${hue}, 100%, 40%)`;
        chatButton.style.boxShadow = `0 5px 15px hsl(${hue}, 100%, 50%), 0 10px 25px hsl(${(hue + 60) % 360}, 100%, 50%)`;
      }
    }, 100);

    return () => {
      chatButton?.removeEventListener("click", toggleChat);
      closeChat?.removeEventListener("click", closeChatHandler);
      clearInterval(colorInterval);
    };
  }, []);

  const sendMessage = () => {
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");
    if (input && chatBox && input.value.trim() !== "") {
      const msg = document.createElement("div");
      msg.textContent = "You: " + input.value;
      msg.style.marginBottom = "5px";
      chatBox.appendChild(msg);
      input.value = "";
      chatBox.scrollTop = chatBox.scrollHeight;
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      sendMessage();
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-container">
          <div className="hero-content" data-aos="fade-up">
            <h1 className="hero-title">
              I build <span className="highlight">production-ready AI applications</span> that solve real business problems
            </h1>
            <p className="hero-subtitle">
              Specialized in Generative AI, LLMs, RAG systems, and intelligent automation that deliver deployable solutions.
            </p>
            <p className="hero-description">
              From prototype to production — developing scalable AI products with fine-tuned models, vector databases, and APIs.
            </p>
            <div className="hero-buttons">
              <a href="#featured-case-studies" className="btn btn-primary">See My Work</a>
              <a href="mailto:umaraidevs@gmail.com?subject=Project Inquiry" className="btn btn-secondary">Hire Me / Book a Call</a>
            </div>
            <div className="hero-social">
              <a href="https://github.com/Umar-Ai-Devs" className="social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/umar-ai-devs" className="social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="mailto:umaraidevs@gmail.com" className="social-link">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
          <div className="hero-image" data-aos="fade-left">
            <div className="image-container">
              <img src="/profile.jpeg" alt="Profile Picture" className="profile-img" />
              <div className="floating-elements">
                <div className="floating-element element-1">
                  <i className="fab fa-python"></i>
                </div>
                <div className="floating-element element-2">
                  <i className="fab fa-js-square"></i>
                </div>
                <div className="floating-element element-3">
                  <i className="fab fa-html5"></i>
                </div>
                <div className="floating-element element-4">
                  <i className="fab fa-css3-alt"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="skills-preview" id="services">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">Delivering production-ready AI systems that drive real-world results</p>
          </div>
          <div className="skills-grid" data-aos="fade-up" data-aos-delay="200">
            <div className="skill-item">
              <i className="fas fa-brain"></i>
              <h4 className="section-title">AI & ML Solutions</h4>
              <p>Develop predictive and deep learning models for real-world applications — healthcare, finance, and automation — with measurable outcomes.</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-robot"></i>
              <h4>AI Agents & Automation</h4>
              <p>Build intelligent AI agents using LangChain, CrewAI, and RAG to automate workflows, reduce manual effort, and increase productivity.</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-code"></i>
              <h4>Python Development & APIs</h4>
              <p>Write clean, maintainable Python code and develop robust APIs for scalable AI applications and backend integration.</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-globe"></i>
              <h4>Web Apps & Dashboards</h4>
              <p>Create responsive web apps and dashboards with integrated AI features using Streamlit, HTML, CSS, and JavaScript.</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-cloud-upload-alt"></i>
              <h4>Deployment & Cloud Integration</h4>
              <p>Deploy AI systems using AWS, Docker, and Hugging Face Spaces, ensuring performance, scalability, and real-world reliability.</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-code"></i>
              <h4>Python Development & APIs</h4>
              <p>Write clean, maintainable Python code and develop robust APIs for scalable AI applications and backend integration.</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-robot"></i>
              <h4>AI Agents & Automation</h4>
              <p>Build intelligent AI agents using LangChain, CrewAI, and RAG to automate workflows, reduce manual effort, and increase productivity.</p>
            </div>
            <div className="skill-item">
              <i className="fas fa-code"></i>
              <h4>Python Development & APIs</h4>
              <p>Write clean, maintainable Python code and develop robust APIs for scalable AI applications and backend integration.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="projects-preview" id="featured-case-studies">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Featured Projects</h2>
            <p className="section-subtitle">Production-ready AI solutions — deployed, interactive, and with source code</p>
            <h4 className="font">The world of AI and Web Development is evolving every day. We leverage innovative tools and advanced algorithms to design smarter websites and intelligent applications that elevate user experiences.</h4>
          </div>
          <div className="projects-grid" data-aos="fade-up" data-aos-delay="200">
            {/* Project 1 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/download8.jpg" alt="Iris Flower Classifier" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://iris-flower-classifier-app-vfjdaodgznqyuvqgg9xych.streamlit.app/" className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/Umar-Ai-Devs/Iris-Flower-Classifier-App" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4>Iris Flower Classifier</h4>
                <p>Random Forest model predicting iris species with 95%+ accuracy — deployed with Streamlit for interactive visualization and real-time testing.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Streamlit</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/download6.jpg" alt="RAG Chatbot" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://appuct-rules-chatbot-katrg3actix4suf6ursrtm.streamlit.app/" className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/Umar-Ai-Devs/Product-Rules-Chatbot" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4>RAG-Powered Chatbot</h4>
                <p>LangChain chatbot using ChromaDB and Groq LLM to read PDFs and answer queries — fully deployed for real-world use and automation of information retrieval.</p>
                <div className="project-tech">
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">ChromaDB</span>
                  <span className="tech-tag">Groq</span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/download5.jpg" alt="Breast Cancer Prediction" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://breast-cancer-prediction-s7htkmy9znfofatmhmsi3i.streamlit.app/" className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/Umar-Ai-Devs/breast-cancer-prediction" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4>Medical AI Diagnostics</h4>
                <p>Logistic Regression model predicting tumor malignancy with 97% accuracy — deployed on Streamlit to support early cancer detection in healthcare workflows.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Scikit-learn</span>
                  <span className="tech-tag">Healthcare AI</span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/images4.png" alt="Customer Segmentation" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://customer-segmentation-app-co4kcwq7emoec2pdjv5ghw.streamlit.app/" className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/Umar-Ai-Devs/Customer-Segmentation-App" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4>Customer Analytics Platform</h4>
                <p>K-Means clustering for customer segmentation, enabling targeted marketing strategies — deployed as an interactive Streamlit app for business analytics teams.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Unsupervised ML</span>
                  <span className="tech-tag">K-Means</span>
                </div>
              </div>
            </div>

            {/* Project 5 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/images3.jpg" alt="Fraud Detection" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://fraud-detection-app-wlp3fg2qklohwyocxwi5xg.streamlit.app/" className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/Umar-Ai-Devs/Fraud-Detection-App" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4>Anomaly Detection System</h4>
                <p>Isolation Forest model detecting fraudulent transactions in real-time — deployed for monitoring and prevention of financial anomalies.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">Anomaly Detection</span>
                  <span className="tech-tag">Real-time Monitoring</span>
                </div>
              </div>
            </div>

            {/* Project 6 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/images2.png" alt="Spam Email Classifier" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="https://spam-vs-ham-email-classifier-uugi3u4ca2jw8f6dmu8i99.streamlit.app/" className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="https://github.com/Umar-Ai-Devs/Spam-vs-Ham-Email-Classifier" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4>NLP Email Security</h4>
                <p>Naive Bayes classifier with CountVectorizer for automated spam detection — deployed and integrated for real-world email filtering.</p>
                <div className="project-tech">
                  <span className="tech-tag">Python</span>
                  <span className="tech-tag">NLP</span>
                  <span className="tech-tag">Text Classification</span>
                </div>
              </div>
            </div>

            {/* Project 7 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/images1.jpg" alt="Multi-Agent AI App" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="#" className="project-link" title="View Live" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h4>Multi-Agent AI Workflow</h4>
                <p>CrewAI multi-agent system automating data research and content generation workflows — deployed for productivity and real-world client tasks.</p>
                <div className="project-tech">
                  <span className="tech-tag">CrewAI</span>
                  <span className="tech-tag">LangChain</span>
                  <span className="tech-tag">Automation</span>
                </div>
              </div>
            </div>

            {/* Project 8 */}
            <div className="project-card">
              <div className="project-image">
                <img src="/e-.jpg" alt="E-commerce Website" />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href="E-comerace.html" className="project-link" title="Live Demo" target="_blank" rel="noopener noreferrer">
                      <i className="fas fa-external-link-alt"></i>
                    </a>
                    <a href="#" className="project-link" title="GitHub" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3>E-commerce Mini Website</h3>
                <p>Small online store with product listings, cart, and responsive checkout simulation.</p>
                <div className="project-tech">
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JS</span>
                  <span className="tech-tag">LocalStorage</span>
                </div>
              </div>
            </div>
          </div>
          <div className="skills-cta" data-aos="fade-up" data-aos-delay="400">
            <a href="projects.html" className="btn btn-primary">View All Projects</a>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="team-header">
            <h2>OUR TEAM</h2>
            <p>"The Minds That Make It Happen – Our Experts Turning Ideas into Reality" ✅.</p>
          </div>
          <div className="team-flex">
            <div className="team-box">
              <img src="/profile.jpeg" alt="Umar Farooq" />
              <div className="team-info">
                <h2>Umar Farooq</h2>
                <h3>AI Developer</h3>
                <p>DIY tote bag drinking vinegar cronut adaptogen squid fanny pack vaporware.</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?id=61575101551673">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3"></path>
                    </svg>
                  </a>
                  <a href="mailto:umaraidevs@gmail.com">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D14836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="#FFF"></rect>
                      <polyline points="22,4 12,13 2,4" fill="none" stroke="#D14836" strokeWidth="2"></polyline>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/umar-ai-devs">
                    <svg width="24" height="24" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                      <rect width="34" height="34" rx="6" ry="6" fill="#0A66C2" />
                      <path d="M9 12h3v12H9V12zm1.5-3.25C10.12 8.75 11 7.87 11 6.75S10.12 4.75 9 4.75 7 5.63 7 6.75s.88 2 2.5 2zM14 12h3v1.72h.04c.42-.79 1.44-1.62 2.96-1.62 3.17 0 3.75 2.08 3.75 4.78V24h-3v-5.5c0-1.31-.03-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89V24h-3V12z" fill="white" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/umar_ai_devs/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                      <path d="M17.5078 6.5L17.4988 6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-box">
              <img src="/umair.jpeg" alt="Umair Ali" />
              <div className="team-info">
                <h2>Umair Ali</h2>
                <h3>GOOGLE & META ADDS</h3>
                <p>Google & Meta Ads Specialist running high-converting ad campaigns. Focused on targeted traffic, leads, and business growth.</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?id=61585355743404">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3"></path>
                    </svg>
                  </a>
                  <a href="mailto:hello.markiting.1@gmail.com">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D14836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="#FFF"></rect>
                      <polyline points="22,4 12,13 2,4" fill="none" stroke="#D14836" strokeWidth="2"></polyline>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_google-one-tap-submit">
                    <svg width="24" height="24" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                      <rect width="34" height="34" rx="6" ry="6" fill="#0A66C2" />
                      <path d="M9 12h3v12H9V12zm1.5-3.25C10.12 8.75 11 7.87 11 6.75S10.12 4.75 9 4.75 7 5.63 7 6.75s.88 2 2.5 2zM14 12h3v1.72h.04c.42-.79 1.44-1.62 2.96-1.62 3.17 0 3.75 2.08 3.75 4.78V24h-3v-5.5c0-1.31-.03-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89V24h-3V12z" fill="white" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/um_air695/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                      <path d="M17.5078 6.5L17.4988 6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-box">
              <img src="/tassawar.jpeg" alt="Tassawar Hussain" />
              <div className="team-info">
                <h2>Tassawar Hussain</h2>
                <h3>GRAPHIC DESIGNER</h3>
                <p>Creative Graphic Designer crafting visually appealing designs. Focused on branding, creativity, and clean visuals.</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?id=61551310876974">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3"></path>
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D14836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="#FFF"></rect>
                      <polyline points="22,4 12,13 2,4" fill="none" stroke="#D14836" strokeWidth="2"></polyline>
                    </svg>
                  </a>
                  <a href="#">
                    <svg width="24" height="24" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                      <rect width="34" height="34" rx="6" ry="6" fill="#0A66C2" />
                      <path d="M9 12h3v12H9V12zm1.5-3.25C10.12 8.75 11 7.87 11 6.75S10.12 4.75 9 4.75 7 5.63 7 6.75s.88 2 2.5 2zM14 12h3v1.72h.04c.42-.79 1.44-1.62 2.96-1.62 3.17 0 3.75 2.08 3.75 4.78V24h-3v-5.5c0-1.31-.03-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89V24h-3V12z" fill="white" />
                    </svg>
                  </a>
                  <a href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                      <path d="M17.5078 6.5L17.4988 6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="team-box">
              <img src="/uzair.jpeg" alt="Aziz Ali" />
              <div className="team-info">
                <h2>Aziz Ali</h2>
                <h3>WEB Developer</h3>
                <p>Web Developer creating modern and responsive websites. Focused on clean design and great user experience.</p>
                <div className="social-icons">
                  <a href="https://www.facebook.com/profile.php?id=61585634939422">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3"></path>
                    </svg>
                  </a>
                  <a href="mailto:hellow.marketing.2@gmail.com">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D14836" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" ry="2" fill="#FFF"></rect>
                      <polyline points="22,4 12,13 2,4" fill="none" stroke="#D14836" strokeWidth="2"></polyline>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/bot-builders-and-branders-3273293a6/">
                    <svg width="24" height="24" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg">
                      <rect width="34" height="34" rx="6" ry="6" fill="#0A66C2" />
                      <path d="M9 12h3v12H9V12zm1.5-3.25C10.12 8.75 11 7.87 11 6.75S10.12 4.75 9 4.75 7 5.63 7 6.75s.88 2 2.5 2zM14 12h3v1.72h.04c.42-.79 1.44-1.62 2.96-1.62 3.17 0 3.75 2.08 3.75 4.78V24h-3v-5.5c0-1.31-.03-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.89V24h-3V12z" fill="white" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/hellow.marketing.2/">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round">
                      <path d="M2.5 12C2.5 7.52166 2.5 5.28249 3.89124 3.89124C5.28249 2.5 7.52166 2.5 12 2.5C16.4783 2.5 18.7175 2.5 20.1088 3.89124C21.5 5.28249 21.5 7.52166 21.5 12C21.5 16.4783 21.5 18.7175 20.1088 20.1088C18.7175 21.5 16.4783 21.5 12 21.5C7.52166 21.5 5.28249 21.5 3.89124 20.1088C2.5 18.7175 2.5 16.4783 2.5 12Z" />
                      <path d="M16.5 12C16.5 14.4853 14.4853 16.5 12 16.5C9.51472 16.5 7.5 14.4853 7.5 12C7.5 9.51472 9.51472 7.5 12 7.5C14.4853 7.5 16.5 9.51472 16.5 12Z" />
                      <path d="M17.5078 6.5L17.4988 6.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chat Button with SVG */}
      <div id="chatButton">
        <svg width="70" height="70" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="bot-svg">
          <line x1="100" y1="40" x2="100" y2="20" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
          <circle cx="100" cy="15" r="8" className="bot-fill" />
          <rect x="40" y="40" width="120" height="100" rx="30" className="bot-fill" />
          <rect x="55" y="55" width="90" height="70" rx="15" fill="#222" />
          <circle cx="80" cy="85" r="8" fill="white" className="blink" />
          <circle cx="120" cy="85" r="8" fill="white" className="blink" />
          <path d="M85 110 Q100 120 115 110" stroke="white" strokeWidth="4" fill="transparent" strokeLinecap="round" />
          <path d="M60 140 Q100 150 140 140 L150 170 H50 L60 140" className="bot-fill" />
        </svg>
      </div>

      {/* Chat Popup */}
      <div id="chatPopup">
        <div id="chatHeader">
          Chat with us
          <span id="closeChat">✖</span>
        </div>
        <div id="chatBox"></div>
        <div id="chatInput">
          <input 
            type="text" 
            id="userInput" 
            placeholder="Type a message..."
            onKeyDown={handleKeyDown}
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-cta">
            <h2>Let's Build Something Powerful Together</h2>
            <p>Looking for a reliable Web Developer who delivers clean code, modern design, and real results? Let's turn your idea into a high-performing website.</p>
            <a href="contact.html" className="cta-btn">Start Your Project</a>
          </div>
          <div className="footer-main">
            <div className="footer-col">
              <h3>Umar AI Devs</h3>
              <p>Professional Web Developer crafting fast, responsive, and scalable websites. I help businesses and startups build a strong online presence with modern technology.</p>
            </div>
            <div className="footer-col">
              <h4>What I Do</h4>
              <ul>
                <li>Custom Website Development</li>
                <li>Frontend & UI Development</li>
                <li>Python & Flask Web Apps</li>
                <li>AI Chatbot Integration</li>
                <li>Website Performance Optimization</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Why Work With Me</h4>
              <ul>
                <li>Clean & Maintainable Code</li>
                <li>Mobile-First & Responsive Design</li>
                <li>Clear Communication</li>
                <li>On-Time Delivery</li>
                <li>Long-Term Support</li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Let's Connect</h4>
              <p>Email: <a href="mailto:umaraidevs@gmail.com">umaraidevs@gmail.com</a></p>
              <p>Phone: +92 303 3418886</p>
              <p>Location: Faisalabad, Pakistan</p>
              <div className="footer-social">
                <a href="https://github.com/Umar-Ai-Devs">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/umar-ai-devs">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://www.facebook.com/profile.php?id=61585355743404" aria-label="Facebook">
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2025 Umar AI Devs. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Button Styles */}
      <style jsx>{`
        #chatButton {
          position: fixed;
          bottom: 30px;
          right: 30px;
          width: 70px;
          height: 70px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          color: #00ffff;
          background: linear-gradient(135deg, #00ffff, #8a2be2);
          border-radius: 50%;
          box-shadow: 0 5px 15px #00ffff, 0 10px 25px #8a2be2;
          z-index: 10000;
          transition: all 0.3s ease;
          animation: float 2s ease-in-out infinite;
        }

        #chatButton:hover {
          transform: scale(1.15);
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        #chatPopup {
          position: fixed;
          bottom: -700px;
          right: 30px;
          width: 400px;
          max-height: 700px;
          background: rgba(0, 0, 0, 0.95);
          backdrop-filter: blur(15px);
          border-radius: 20px 20px 0 0;
          box-shadow: 0 10px 40px rgba(0, 255, 255, 0.2);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: bottom 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          z-index: 9999;
        }

        #chatPopup.active {
          bottom: 30px;
        }

        #chatHeader {
          padding: 15px 20px;
          background: linear-gradient(135deg, #00ffff, #8a2be2);
          color: white;
          font-weight: bold;
          display: flex;
          justify-content: space-between;
          align-items: center;
          text-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
        }

        #closeChat {
          cursor: pointer;
          font-size: 1.1rem;
        }

        #chatBox {
          flex: 1;
          padding: 15px;
          overflow-y: auto;
          color: white;
          font-size: 0.9rem;
        }

        #chatInput {
          display: flex;
          border-top: 1px solid rgba(255, 255, 255, 0.2);
          padding: 10px;
          gap: 5px;
        }

        #chatInput input {
          flex: 1;
          padding: 10px;
          border-radius: 10px;
          border: none;
          outline: none;
          background: rgba(255, 255, 255, 0.1);
          color: white;
        }

        #chatInput button {
          padding: 8px 15px;
          border-radius: 10px;
          border: none;
          cursor: pointer;
          background: #00ffff;
          color: #000;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        #chatInput button:hover {
          background: #8a2be2;
          color: #fff;
        }
      `}</style>
    </div>
  );
}

export default Home;