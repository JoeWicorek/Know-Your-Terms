import React, { useState } from "react";
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
    <div>
      <h1></h1>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search for a website..."
        value={searchQuery}
        onChange={handleSearch}
        style={{
          margin: "20px auto",
          display: "block",
          width: "80%",
          padding: "10px",
          fontSize: "16px",
        }}
      />

      {/* Graph */}
      <WebsiteRatingGraph
        data={websiteData}
        selectedWebsite={selectedWebsite}
      />

      {/* Info Card */}
      {selectedWebsite && (
        <div
          style={{
            border: "1px solid #ddd",
            borderRadius: "5px",
            padding: "10px",
            margin: "20px auto",
            width: "80%",
            textAlign: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
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
  );
};

export default Home;
