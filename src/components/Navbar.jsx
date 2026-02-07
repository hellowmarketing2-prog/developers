import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Tumhara diya hua CSS
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      {/* Neural Network & Particles */}
      <div className="bb-neural-network"></div>
      <div className="bb-particles-container"></div>

      {/* Navbar */}
      <nav className="bb-navbar">
        <div className="bb-nav-container">
          {/* Logo */}
          <div className="bb-nav-logo">
            <Link to="/" className="bb-logo-link">
              <div className="bb-logo-icon">
                <i className="fas fa-robot"></i>
              </div>
              <span className="bb-logo-text">
                Bot<span className="bb-highlight">Builders</span> &{" "}
                <span className="bb-highlight">Branders</span>
              </span>
            </Link>
          </div>

          {/* Navigation Menu */}
          <ul className={`bb-nav-menu ${mobileOpen ? "active" : ""}`}>
            <li className="bb-nav-item">
              <Link to="/" className="bb-nav-link">
                <div className="bb-link-wrapper">
                  <i className="fas fa-home"></i>
                  <span>Home</span>
                </div>
              </Link>
            </li>

            <li className="bb-nav-item">
              <Link to="/about" className="bb-nav-link">
                <div className="bb-link-wrapper">
                  <i className="fas fa-user"></i>
                  <span>About</span>
                </div>
              </Link>
            </li>

            <li className="bb-nav-item">
              <Link to="/skills" className="bb-nav-link">
                <div className="bb-link-wrapper">
                  <i className="fas fa-cogs"></i>
                  <span>Services</span>
                </div>
              </Link>
            </li>

            <li className="bb-nav-item">
              <Link to="/projects" className="bb-nav-link">
                <div className="bb-link-wrapper">
                  <i className="fas fa-project-diagram"></i>
                  <span>Projects</span>
                </div>
              </Link>
            </li>

            <li className="bb-nav-item">
              <Link to="/contact" className="bb-nav-link">
                <div className="bb-link-wrapper">
                  <i className="fas fa-envelope"></i>
                  <span>Contact</span>
                </div>
              </Link>
            </li>

            {/* Theme Toggle Button */}
            <li className="bb-nav-item">
              <button onClick={toggleTheme} className="bb-theme-toggle" title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
                <i className={theme === 'light' ? 'fas fa-moon' : 'fas fa-sun'}></i>
              </button>
            </li>
          </ul>

          {/* Mobile Menu Toggle */}
          <div
            className={`bb-mobile-menu-toggle ${mobileOpen ? "active" : ""}`}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <div className="bb-ai-burger">
              <span className="bb-bar"></span>
              <span className="bb-bar"></span>
              <span className="bb-bar"></span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
