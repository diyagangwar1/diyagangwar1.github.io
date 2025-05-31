import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-top-message">
        <span role="img" aria-label="wave">👋</span> Thanks for stopping by! Here is more of me if you are interested :)
      </div>
      <div className="footer-wide-grid">
        {/* Column 1: Contact */}
        <div>
          <h4>CONTACT</h4>
          <ul>
            <li><a href="https://www.linkedin.com/in/diya-gangwar-a24274208/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:dgangwar@g.hmc.edu">Email</a></li>
            <li><a href="https://319553551689175040.hello.cv" target="_blank" rel="noopener noreferrer">Hello.CV</a></li>
            <li><a href="https://github.com/diyagangwar1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        {/* Column 2: Projects */}
        <div>
          <h4>PROJECTS</h4>
          <ul>
            <li><Link to="/tinyml">TinyML</Link></li>
            <li><Link to="/value-vision">ValueVision</Link></li>
            <li><Link to="/dell">Dell</Link></li>
            <li><Link to="/mimente">MiMente</Link></li>
          </ul>
        </div>
        {/* Column 3: ETC. */}
        <div>
          <h4>ETC.</h4>
          <ul>
            <li>Proudly Built in React</li>
            <li>Last updated June 2025</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
