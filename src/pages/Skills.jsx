import React from "react";
import "./Skills.css";

const Skills = () => {
  // Services data
  const services = [
    {
      icon: "fas fa-brain",
      title: "AI & ML Solutions",
      description: "Develop predictive and deep learning models for real-world applications — healthcare, finance, and automation — with measurable outcomes.",
      features: ["Machine Learning", "Deep Learning", "Neural Networks", "Model Training"]
    },
    {
      icon: "fas fa-robot",
      title: "AI Agents & Automation",
      description: "Build intelligent AI agents using LangChain, CrewAI, and RAG to automate workflows, reduce manual effort, and increase productivity.",
      features: ["LangChain", "CrewAI", "RAG Systems", "Workflow Automation"]
    },
    {
      icon: "fas fa-code",
      title: "Python Development",
      description: "Write clean, maintainable Python code and develop robust APIs for scalable AI applications and backend integration.",
      features: ["Python", "FastAPI", "Django", "Flask"]
    },
    {
      icon: "fas fa-globe",
      title: "Web Development",
      description: "Create responsive web apps and dashboards with integrated AI features using modern frameworks and technologies.",
      features: ["React", "JavaScript", "HTML/CSS", "Responsive Design"]
    },
    {
      icon: "fas fa-cloud-upload-alt",
      title: "Cloud & Deployment",
      description: "Deploy AI systems using AWS, Docker, and cloud platforms, ensuring performance, scalability, and reliability.",
      features: ["AWS", "Docker", "CI/CD", "Cloud Services"]
    },
    {
      icon: "fas fa-database",
      title: "Data Engineering",
      description: "Design and implement data pipelines, vector databases, and data processing systems for AI applications.",
      features: ["SQL", "MongoDB", "Vector DBs", "Data Processing"]
    }
  ];

  // Technical skills
  const technicalSkills = [
    { name: "Python", level: 95, category: "Programming" },
    { name: "JavaScript", level: 90, category: "Programming" },
    { name: "React", level: 88, category: "Frontend" },
    { name: "Machine Learning", level: 92, category: "AI/ML" },
    { name: "Deep Learning", level: 85, category: "AI/ML" },
    { name: "LangChain", level: 90, category: "AI/ML" },
    { name: "FastAPI", level: 88, category: "Backend" },
    { name: "Docker", level: 82, category: "DevOps" },
    { name: "AWS", level: 80, category: "Cloud" },
    { name: "SQL", level: 85, category: "Database" },
    { name: "MongoDB", level: 83, category: "Database" },
    { name: "Git", level: 90, category: "Tools" }
  ];

  // Tools & Technologies
  const tools = [
    { name: "TensorFlow", icon: "🧠" },
    { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "📊" },
    { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" },
    { name: "OpenAI", icon: "🤖" },
    { name: "Hugging Face", icon: "🤗" },
    { name: "Streamlit", icon: "⚡" },
    { name: "VS Code", icon: "💻" },
    { name: "Jupyter", icon: "📓" },
    { name: "Postman", icon: "📮" },
    { name: "GitHub", icon: "🐙" }
  ];

  return (
    <div className="skills-page">
      {/* Hero Section */}
      <section className="skills-hero">
        <div className="container">
          <h1 className="page-title" data-aos="fade-up">My Services & Skills</h1>
          <p className="page-subtitle" data-aos="fade-up" data-aos-delay="200">
            Delivering production-ready AI solutions and modern web applications
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">What I Do</h2>
            <p className="section-description">
              Specialized services to bring your ideas to life
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => (
              <div 
                className="service-card" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                <div className="service-icon">
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="technical-skills-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Technical Skills</h2>
            <p className="section-description">
              Proficiency in modern technologies and frameworks
            </p>
          </div>

          <div className="skills-container">
            {technicalSkills.map((skill, index) => (
              <div 
                className="skill-item" 
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <div className="skill-header">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skill-category">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies Section */}
      <section className="tools-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">Tools & Technologies</h2>
            <p className="section-description">
              Technologies I work with daily
            </p>
          </div>

          <div className="tools-grid">
            {tools.map((tool, index) => (
              <div 
                className="tool-card" 
                key={index}
                data-aos="zoom-in"
                data-aos-delay={index * 50}
              >
                <span className="tool-icon">{tool.icon}</span>
                <span className="tool-name">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="skills-cta">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Ready to Work Together?</h2>
            <p>
              Let's discuss how my skills can help bring your project to life
            </p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">Get In Touch</a>
              <a href="/projects" className="btn btn-outline">View Projects</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
