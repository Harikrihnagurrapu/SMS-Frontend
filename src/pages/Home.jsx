import React from "react";
import {
  FaRegChartBar,
  FaPlayCircle,
  FaImage,
} from "react-icons/fa"; 
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-text">
          <h1>Welcome to Our Social Media Analytics</h1>
          <p>
            Analyze engagement, track trends, and optimize your content
            strategy.
          </p>
          <Link to="/analyze">
            <button className="cta-button">Get Started</button>
          </Link>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <FaRegChartBar className="feature-icon" />
          <h3>Engagement Analysis</h3>
          <p>
            Analyze likes, shares, and comments to understand audience behavior.
          </p>
        </div>
        <div className="feature-card">
          <FaPlayCircle className="feature-icon" />
          <h3>Trend Tracking</h3>
          <p>Stay updated with current trends to create viral content.</p>
        </div>
        <div className="feature-card">
          <FaImage className="feature-icon" />
          <h3>Content Optimization</h3>
          <p>
            Optimize your posts for maximum reach and engagement with our smart
            suggestions.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
