import React, { useState } from "react";
import './Home.css';
import WebsiteRatingGraph from "./WebsiteRatingGraph"; // Graph component
import websiteData from "../data/websiteData"; // Website data file

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedWebsite, setSelectedWebsite] = useState(null);

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    // Find the website that matches the search query
    const matchedWebsite = websiteData.find((site) =>
      site.name.toLowerCase().includes(query)
    );
    setSelectedWebsite(matchedWebsite || null);
  };

  return (
    <div className="home-container">
       
      {/* Search Box */}
      <input
        type="text"
        className="search-box"
        placeholder="Search for a website..."
        value={searchQuery}
        onChange={handleSearch}
      />
      
      {/* Graph */}
      <div className="chart-wrapper">
      <div className="chart-container">
      <WebsiteRatingGraph
        data={websiteData}
        selectedWebsite={selectedWebsite}
      />
      </div>
      </div>
      
      {/* Info Card */}
      {selectedWebsite && (
        <div className="info-card">
          <h2>{selectedWebsite.name}</h2>
          <img
            src={selectedWebsite.icon}
            alt={`${selectedWebsite.name} logo`}
            style={{ width: "50px", height: "50px" }}
          />
          <p><strong>Rating:</strong> {selectedWebsite.rating}</p>
          <p>{selectedWebsite.description}</p>
        </div>
      )}
     </div>
    )
  };
export default Home;
