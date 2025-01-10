import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="part">
        <img src="logo_white.png" className="teamLogo"></img>
        <div className="teamName">
          Logic<span>Lab</span>
        </div>
      </div>
      <ul className="navbar-list">
        <li>
          <Link to="/" className="navbar-link">
            Home
          </Link>
        </li>
        <li>
          <Link to="/analyze" className="navbar-link">
            Analyze
          </Link>
        </li>
        {/* <li>
          <Link to="/reports" className="navbar-link">
            Reports
          </Link>
        </li> */}
        <li>
          <Link to="/about" className="navbar-link">
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
