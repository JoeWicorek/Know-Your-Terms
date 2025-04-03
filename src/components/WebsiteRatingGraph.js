import React, { useState, useEffect } from 'react';
import './WebsiteRatingGraph.css';
import websiteData from '../data/websiteData';

const WebsiteRatingGraph = () => {
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [loadedImages, setLoadedImages] = useState({});

  // Load images on component mount
  useEffect(() => {
    const loadImages = async () => {
      const images = {};
      for (const site of websiteData) {
        try {
          // Use the logo property directly from websiteData
          images[site.name] = site.logo;
        } catch (error) {
          console.error(`Failed to load image for ${site.name}:`, error);
        }
      }
      setLoadedImages(images);
    };

    loadImages();
  }, []);

  // Map ratings to positions on the y-axis (0-100%)
  const getPositionForRating = (rating) => {
    const ratingMap = {
      'A+': 95, 'A': 90, 'A-': 85,
      'B+': 80, 'B': 75, 'B-': 70,
      'C+': 65, 'C': 60, 'C-': 55,
      'D+': 50, 'D': 45, 'D-': 40,
      'F+': 30, 'F': 20, 'F-': 10
    };
    return ratingMap[rating] || 50;
  };

  // Get color class based on rating
  const getColorClassForRating = (rating) => {
    if (rating.startsWith('A')) return 'grade-a';
    if (rating.startsWith('B')) return 'grade-b';
    if (rating.startsWith('C')) return 'grade-c';
    if (rating.startsWith('D')) return 'grade-d';
    return 'grade-f';
  };

  // Handle website dot click
  const handleWebsiteClick = (website) => {
    setSelectedWebsite(website === selectedWebsite ? null : website);
  };

  return (
    <div className="graph-container">
      <h2>Website Privacy Rating Graph</h2>
      <p className="graph-description">
        This graph shows how various popular websites rate in terms of their privacy policies and terms of service. 
        Click on any website to see more details about their rating.
      </p>
      
      <div className="graph">
        <div className="grade-scale">
          <span className="grade-marker" style={{ left: '10%' }}>F</span>
          <span className="grade-marker" style={{ left: '30%' }}>D</span>
          <span className="grade-marker" style={{ left: '50%' }}>C</span>
          <span className="grade-marker" style={{ left: '70%' }}>B</span>
          <span className="grade-marker" style={{ left: '90%' }}>A</span>
        </div>
        
        <div className="websites-container">
          {websiteData.map((website, index) => {
            const xPosition = 10 + (index * (80 / (websiteData.length - 1 || 1)));
            const yPosition = 100 - getPositionForRating(website.rating);
            const colorClass = getColorClassForRating(website.rating);
            
            return (
              <div
                key={website.name}
                className={`website-dot ${colorClass}`}
                style={{
                  left: `${xPosition}%`,
                  top: `${yPosition}%`
                }}
                onClick={() => handleWebsiteClick(website)}
              >
                <div className="website-logo-container">
                  {loadedImages[website.name] ? (
                    <img 
                      src={loadedImages[website.name]} 
                      alt={`${website.name} logo`} 
                      className="website-logo"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                  ) : (
                    <div className="website-fallback">
                      {website.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div 
                    className="website-fallback" 
                    style={{ display: 'none' }}
                  >
                    {website.name.charAt(0).toUpperCase()}
                  </div>
                </div>
                <span className="website-label">{website.name}</span>
              </div>
            );
          })}
        </div>
        
        {selectedWebsite && (
          <div className="website-tooltip">
            <h3>{selectedWebsite.name}</h3>
            <p>Website: <a href={selectedWebsite.url} target="_blank" rel="noopener noreferrer">{selectedWebsite.url.replace(/^https?:\/\//, '')}</a></p>
            <div className={`grade-badge ${getColorClassForRating(selectedWebsite.rating)}`}>
              Grade: {selectedWebsite.rating}
            </div>
            
            <div className="criteria-list">
              <h4>Rating Criteria:</h4>
              <ul>
                {Object.entries(selectedWebsite.criteria).map(([key, value]) => (
                  <li key={key}><strong>{key.charAt(0).toUpperCase() + key.slice(1)}:</strong> {value}/5</li>
                ))}
              </ul>
            </div>
            
            <button className="view-details-btn" onClick={() => window.open(selectedWebsite.url, '_blank')}>
              View Website
            </button>
          </div>
        )}
      </div>
      
      <div className="graph-legend">
        <div className="legend-item">
          <div className="legend-color grade-a"></div>
          <span>A: Excellent</span>
        </div>
        <div className="legend-item">
          <div className="legend-color grade-b"></div>
          <span>B: Good</span>
        </div>
        <div className="legend-item">
          <div className="legend-color grade-c"></div>
          <span>C: Average</span>
        </div>
        <div className="legend-item">
          <div className="legend-color grade-d"></div>
          <span>D: Poor</span>
        </div>
        <div className="legend-item">
          <div className="legend-color grade-f"></div>
          <span>F: Very Poor</span>
        </div>
      </div>
    </div>
  );
};

export default WebsiteRatingGraph;
