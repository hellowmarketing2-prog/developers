import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/projects";
import Home from "./pages/Home.jsx";
import Contact from "./pages/Contact.jsx"
import '@fortawesome/fontawesome-free/css/all.min.css';


import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/About" element={<Navigate to="/about" replace />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/services" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Redirect any unknown route to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
