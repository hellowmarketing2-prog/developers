// import React from "react";
// import profileImg from "./public/profile.png"; // <-- CHANGE if path different
// import "./effects.css"
import "./About.css"
import "./Sections.css"
function About() {
  return (
    <>
      {/* ABOUT SECTION */}
      <section className="about-section">
        <div className="about-container">

          {/* IMAGE */}
          <div className="about-image">
            <img src="/public/profile.jpeg" alt="Profile" />
            <div className="image-glow"></div>
          </div>

          {/* TEXT */}
          <div className="about-text">
            <h2>Hello, I'm <span>Your Name</span></h2>

            <p className="lead">
              A passionate full-stack developer with a love for creating
              beautiful, functional, and user-friendly digital experiences.
            </p>

            <p>
              My journey in web development started 3 years ago when I discovered
              my passion for turning complex problems into simple, beautiful,
              and intuitive solutions.
            </p>

            <p>
              I believe in writing clean, maintainable code and following best
              practices while staying updated with modern technologies.
            </p>

            {/* STATS */}
            <div className="about-stats">

              <div className="stat-card">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>

              <div className="stat-card">
                <h3>20+</h3>
                <p>Happy Clients</p>
              </div>

              <div className="stat-card">
                <h3>15+</h3>
                <p>Technologies</p>
              </div>

            </div>

            <button className="about-btn">
              Let's Work Together 🚀
            </button>

          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="timeline-section">

        <h2 className="timeline-title">My Journey</h2>

        <div className="timeline">

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Senior Frontend Developer</h3>
              <span>2023 - Present</span>
              <p>
                Leading frontend development, building modern React apps,
                and mentoring developers.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <span>2022 - 2023</span>
              <p>
                Built scalable apps using React, Node.js and MongoDB while
                collaborating with UI teams.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Junior Developer</h3>
              <span>2021 - 2022</span>
              <p>
                Developed responsive websites and strengthened core JavaScript
                skills.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h3>Self-Taught Phase</h3>
              <span>2020 - 2021</span>
              <p>
                Learned web development through courses and built multiple
                personal projects.
              </p>
            </div>
          </div>

        </div>
      </section>










      {/* Skills Overview */}
      <section className="skills-overview">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">What I Do</h2>
            <p className="section-subtitle">My areas of expertise</p>
          </div>

          <div
            className="services-grid"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Frontend Development</h3>
              <p>
                Creating responsive and interactive user interfaces using modern
                frameworks like React, Vue.js, and Angular.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-server"></i>
              </div>
              <h3>Backend Development</h3>
              <p>
                Building robust server-side applications with Node.js, Python,
                and various databases for scalable solutions.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-mobile-alt"></i>
              </div>
              <h3>Mobile Development</h3>
              <p>
                Developing cross-platform mobile applications using React Native
                and Flutter for iOS and Android.
              </p>
            </div>

            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-paint-brush"></i>
              </div>
              <h3>UI/UX Design</h3>
              <p>
                Designing user-friendly interfaces and experiences that are both
                beautiful and functional.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="interests-section">
        <div className="container">
          <div className="section-header" data-aos="fade-up">
            <h2 className="section-title">When I'm Not Coding</h2>
            <p className="section-subtitle">My hobbies and interests</p>
          </div>

          <div
            className="interests-grid"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="interest-item">
              <i className="fas fa-book"></i>
              <h4>Reading</h4>
              <p>Tech blogs, programming books, and design articles</p>
            </div>

            <div className="interest-item">
              <i className="fas fa-camera"></i>
              <h4>Photography</h4>
              <p>Capturing moments and exploring creative perspectives</p>
            </div>

            <div className="interest-item">
              <i className="fas fa-gamepad"></i>
              <h4>Gaming</h4>
              <p>Strategy games and indie game development</p>
            </div>

            <div className="interest-item">
              <i className="fas fa-hiking"></i>
              <h4>Hiking</h4>
              <p>Exploring nature and staying active outdoors</p>
            </div>

            <div className="interest-item">
              <i className="fas fa-music"></i>
              <h4>Music</h4>
              <p>Playing guitar and discovering new artists</p>
            </div>

            <div className="interest-item">
              <i className="fas fa-coffee"></i>
              <h4>Coffee</h4>
              <p>Brewing the perfect cup and visiting local cafes</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content" data-aos="fade-up">
            <h2>Let's Build Something Amazing Together</h2>
            <p>
              I'm always interested in new opportunities and exciting projects.
              Whether you have a question or just want to say hi, I'll try my
              best to get back to you!
            </p>

            <div className="cta-buttons">
              {/* <a href="contact.html" className="btn btn-primary">
                Get In Touch
              
              </a> */}

               {/* <Link to="/Contact" className="bb-nav-link"> */}
                {/* <div className="bb-link-wrapper"> */}
                  {/* <i className="fas fa-user"></i> */}
                  {/* <span></span> */}
                {/* </div> */}
              {/* </Link> */}





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
                Creating amazing digital experiences with passion and
                dedication.
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
                <li>
                  <a href="index.html" style={{ color: "white" }}>
                    Home
                  </a>
                </li>
                <li>
                  <a href="about.html" style={{ color: "white" }}>
                    About
                  </a>
                </li>
                <li>
                  <a href="skills.html">Skills</a>
                </li>
                <li>
                  <a href="projects.html" style={{ color: "white" }}>
                    Projects
                  </a>
                </li>
                <li>
                  <a href="contact.html" style={{ color: "white" }}>
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h4 style={{ color: "white" }}>Contact Info</h4>

              <div className="contact-info">
                <p style={{ color: "white" }}>
                  <i className="fas fa-envelope"></i> umaraidevs@gmail.com
                </p>
                <p style={{ color: "white" }}>
                  <i className="fas fa-phone"></i> +92 0303 3418886
                </p>
                <p style={{ color: "white" }}>
                  <i className="fas fa-map-marker-alt"></i> Faisalabad, Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p style={{ color: "white" }}>
              &copy; 2024 Portfolio. All rights reserved.
            </p>
          </div>
        </div>
      </footer>








    </>
  );
}

export default About;










