import React from "react";
import "../styles/Footer.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="left-footer">
          <span className="footer-text">© 2025 LogicLab</span>
        </div>
        <div className="footer-middle">
          <img src="logo_orange.png" className="footer-logo"></img>
        </div>
        <div className="footer-icons">
          {/* Placeholder for a custom icon */}
          <i className="footer-icon bi bi-instagram"></i>
          <i className="footer-icon bi bi-github"></i>
          <i className="footer-icon bi bi-youtube"></i>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
