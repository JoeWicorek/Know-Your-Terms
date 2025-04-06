import React, { useState, useEffect, useRef } from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchBar.css';

const SearchBar = ({ onSearch, websiteData }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const searchRef = useRef(null);
  
  // Handle input change and update suggestions
  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    
    if (value.trim().length > 0) {
      // Generate suggestions from website data
      const matches = websiteData
        .filter(website => 
          website.name.toLowerCase().includes(value.toLowerCase()) ||
          (website.categories && website.categories.some(category => 
            category.toLowerCase().includes(value.toLowerCase())
          ))
        )
        .slice(0, 5)
        .map(website => website.name);
      
      // Add categories as suggestions
      const categoryMatches = new Set();
      websiteData.forEach(website => {
        if (website.categories) {
          website.categories.forEach(category => {
            if (category.toLowerCase().includes(value.toLowerCase())) {
              categoryMatches.add(category);
            }
          });
        }
      });
      
      // Combine unique suggestions
      const allSuggestions = [...new Set([...matches, ...categoryMatches])].slice(0, 5);
      setSuggestions(allSuggestions);
    } else {
      setSuggestions([]);
    }
    
    // If empty, reset search
    if (value.trim() === '') {
      onSearch('');
    }
  };
  
  // Handle search submission
  const handleSearch = () => {
    if (searchTerm.trim()) {
      onSearch(searchTerm);
      setSuggestions([]);
    }
  };
  
  // Handle suggestion click
  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    onSearch(suggestion);
    setSuggestions([]);
  };
  
  // Handle key press events
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };
  
  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setSuggestions([]);
        setIsFocused(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  return (
    <div className="search-wrapper" ref={searchRef}>
      <div className={`search-bar ${isFocused ? 'focused' : ''}`}>
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search for websites, apps, or categories..."
          value={searchTerm}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          onFocus={() => setIsFocused(true)}
          aria-label="Search"
        />
        {searchTerm && (
          <button 
            className="clear-button"
            onClick={() => {
              setSearchTerm('');
              onSearch('');
              setSuggestions([]);
            }}
            aria-label="Clear search"
          >
            ×
          </button>
        )}
        <button 
          className="search-button"
          onClick={handleSearch}
          disabled={!searchTerm.trim()}
          aria-label="Search button"
        >
          Search
        </button>
      </div>
      
      {suggestions.length > 0 && (
        <div className="suggestions-container">
          {suggestions.map((suggestion, index) => (
            <div 
              key={index}
              className="suggestion-item"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              <FaSearch className="suggestion-icon" />
              <span>{suggestion}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
