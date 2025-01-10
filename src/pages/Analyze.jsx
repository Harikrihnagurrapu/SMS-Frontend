import React, { useState } from "react";
import "../styles/Analyze.css";
import { FaFileUpload, FaChartBar } from "react-icons/fa";
import { BiLink } from "react-icons/bi";

const Analyze = () => {
  const [inputMode, setInputMode] = useState("csv");
  const [file, setFile] = useState(null);
  const [url, setUrl] = useState("");
  const [selectedPostType, setSelectedPostType] = useState("");
  const [insights, setInsights] = useState("");

  const handleFileUpload = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
    setInsights(""); // Clear previous insights when a new file is uploaded
  };

  const generateInsights = () => {
    if (inputMode === "csv" && !file) {
      alert("Please upload a CSV file.");
      return;
    }
    if (inputMode === "url" && !url) {
      alert("Please provide a URL.");
      return;
    }

    // Mock insights generation based on post type
    const mockInsights = `
      Selected Post Type: ${selectedPostType}
      Total Posts Analyzed: ${Math.floor(Math.random() * 100) + 1}
      Average Likes: ${Math.random().toFixed(2) * 100}
      Average Comments: ${Math.random().toFixed(2) * 50}
    `;

    setInsights(mockInsights);
  };

  return (
    <div className="analyze-page">
      <h1>Analyze Engagement Data</h1>
      <div className="input-section">
        <div className="input-toggle">
          <button
            className={`toggle-option ${inputMode === "csv" ? "active" : ""}`}
            onClick={() => setInputMode("csv")}
          >
            <FaFileUpload className="icon" /> Upload CSV
          </button>
          <button
            className={`toggle-option ${inputMode === "url" ? "active" : ""}`}
            onClick={() => setInputMode("url")}
          >
            <BiLink className="icon" /> Provide URL
          </button>
        </div>

        {inputMode === "csv" ? (
          <div className="input-container">
            <input
              type="file"
              id="file-upload"
              accept=".csv"
              onChange={handleFileUpload}
              className="file-input"
            />
          </div>
        ) : (
          <div className="input-container">
            <input
              type="text"
              id="url-input"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="url-input"
            />
          </div>
        )}

        <div className="actions-section">
          <div className="dropdown">
            <label htmlFor="postType">Select Post Type:</label>
            <select
              id="postType"
              value={selectedPostType}
              onChange={(e) => setSelectedPostType(e.target.value)}
            >
              <option value="">Choose Type</option>
              <option value="carousel">Carousel</option>
              <option value="reels">Reels</option>
              <option value="static">Static Images</option>
            </select>
          </div>
          <button onClick={generateInsights} className="insights-button">
            <FaChartBar size={16} className="icon" />
            Generate Insights
          </button>
        </div>
      </div>
      {insights && (
        <div className="insights-display">
          <h2>Insights</h2>
          <pre>{insights}</pre>
        </div>
      )}
    </div>
  );
};

export default Analyze;
