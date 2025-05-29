import React from 'react';
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
            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            <li><a href="mailto:your.email@example.com">Email</a></li>
            <li><a href="https://318543188562259968.hello.cv" target="_blank" rel="noopener noreferrer">Hello.CV</a></li>
            <li><a href="https://github.com/diyagangwar1" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          </ul>
        </div>
        {/* Column 2: Projects */}
        <div>
          <h4>PROJECTS</h4>
          <ul>
            <li><a href="/tinyml">TinyML</a></li>
            <li><a href="/valuevision">ValueVision</a></li>
            <li><a href="/dell">Dell</a></li>
            <li><a href="/mimente">MiMente</a></li>
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
