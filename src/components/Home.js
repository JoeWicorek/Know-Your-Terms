import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import './WebsiteCards.css';
import WebsiteRatingGraph from './WebsiteRatingGraph';
import SearchBar from './SearchBar';
import { FaGlobe, FaShieldAlt, FaFileAlt, FaUserLock, FaAccessibleIcon, FaBalanceScale } from 'react-icons/fa';

// Sample website data
const websiteData = [
  {
    id: 1,
    name: 'Facebook',
    url: 'https://www.facebook.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png',
    rating: 'D',
    overallScore: 1.5,
    categories: ['Social Media', 'Advertising'],
    description: 'Facebook\'s Terms of Service are lengthy and complex, with numerous clauses about data collection and usage that may be difficult for the average user to fully understand.',
    criteria: {
      clarity: 2,
      transparency: 1,
      fairness: 1,
      accessibility: 2,
      accountability: 1
    }
  },
  {
    id: 2,
    name: 'Google',
    url: 'https://www.google.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png',
    rating: 'C',
    overallScore: 2.2,
    categories: ['Search Engine', 'Advertising'],
    description: 'Google\'s Terms of Service are relatively clear but still contain broad data collection policies that may not be immediately apparent to users.',
    criteria: {
      clarity: 3,
      transparency: 2,
      fairness: 2,
      accessibility: 3,
      accountability: 1
    }
  },
  // Add more websites as needed
  {
    id: 3,
    name: 'Apple',
    url: 'https://www.apple.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1200px-Apple_logo_black.svg.png',
    rating: 'B',
    overallScore: 3.4,
    categories: ['Technology', 'Hardware', 'Software'],
    description: 'Apple\'s Terms of Service are better than most, with clearer language and more transparent data practices, though they still contain some complex legal terminology.',
    criteria: {
      clarity: 4,
      transparency: 3,
      fairness: 3,
      accessibility: 4,
      accountability: 3
    }
  },
  {
    id: 4,
    name: 'Amazon',
    url: 'https://www.amazon.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png',
    rating: 'C',
    overallScore: 2.4,
    categories: ['E-commerce', 'Cloud Services'],
    description: 'Amazon\'s Terms of Service are quite lengthy and contain numerous clauses about data usage and third-party sharing that may be concerning to privacy-conscious users.',
    criteria: {
      clarity: 2,
      transparency: 2,
      fairness: 3,
      accessibility: 3,
      accountability: 2
    }
  },
  {
    id: 5,
    name: 'Twitter',
    url: 'https://twitter.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/1200px-Logo_of_Twitter.svg.png',
    rating: 'C',
    overallScore: 2.6,
    categories: ['Social Media', 'News'],
    description: 'Twitter\'s Terms of Service have improved over time, but still contain broad rights to user content and data collection practices.',
    criteria: {
      clarity: 3,
      transparency: 3,
      fairness: 2,
      accessibility: 3,
      accountability: 2
    }
  },
  {
    id: 6,
    name: 'Microsoft',
    url: 'https://www.microsoft.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png',
    rating: 'B',
    overallScore: 3.2,
    categories: ['Software', 'Cloud Services'],
    description: 'Microsoft has made efforts to simplify their Terms of Service and provide clearer explanations of data practices, though some policies remain complex.',
    criteria: {
      clarity: 3,
      transparency: 3,
      fairness: 3,
      accessibility: 4,
      accountability: 3
    }
  },
  {
    id: 7,
    name: 'Netflix',
    url: 'https://www.netflix.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1200px-Netflix_2015_logo.svg.png',
    rating: 'B',
    overallScore: 3.0,
    categories: ['Streaming', 'Entertainment'],
    description: 'Netflix has relatively straightforward Terms of Service compared to many tech companies, with clearer language about subscription terms and content usage.',
    criteria: {
      clarity: 4,
      transparency: 3,
      fairness: 3,
      accessibility: 3,
      accountability: 2
    }
  },
  {
    id: 8,
    name: 'Instagram',
    url: 'https://www.instagram.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/1200px-Instagram_logo_2016.svg.png',
    rating: 'D',
    overallScore: 1.8,
    categories: ['Social Media', 'Photo Sharing'],
    description: 'As a Facebook-owned company, Instagram\'s Terms of Service share many of the same issues with broad data collection and content licensing terms.',
    criteria: {
      clarity: 2,
      transparency: 1,
      fairness: 2,
      accessibility: 2,
      accountability: 2
    }
  },
  {
    id: 9,
    name: 'Spotify',
    url: 'https://www.spotify.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1200px-Spotify_logo_without_text.svg.png',
    rating: 'C',
    overallScore: 2.8,
    categories: ['Music Streaming', 'Entertainment'],
    description: 'Spotify\'s Terms of Service are average in terms of clarity and fairness, with some complex sections regarding user content and data collection.',
    criteria: {
      clarity: 3,
      transparency: 3,
      fairness: 3,
      accessibility: 3,
      accountability: 2
    }
  },
  {
    id: 10,
    name: 'TikTok',
    url: 'https://www.tiktok.com',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/1200px-TikTok_logo.svg.png',
    rating: 'F',
    overallScore: 1.0,
    categories: ['Social Media', 'Video Sharing'],
    description: 'TikTok\'s Terms of Service have raised significant concerns regarding data collection, sharing practices, and broad content licenses.',
    criteria: {
      clarity: 1,
      transparency: 1,
      fairness: 1,
      accessibility: 1,
      accountability: 1
    }
  },
  {
    id: 11,
    name: 'Reddit',
    url: 'https://www.reddit.com',
    logo: 'https://cdn-icons-png.flaticon.com/512/1384/1384876.png',
    rating: 'C',
    overallScore: 2.4,
    categories: ['Social Media', 'Forum'],
    description: 'Reddit\'s Terms of Service are relatively straightforward but still grant the platform broad rights to user content and data.',
    criteria: {
      clarity: 3,
      transparency: 2,
      fairness: 2,
      accessibility: 3,
      accountability: 2
    }
  },
  {
    id: 12,
    name: 'LinkedIn',
    url: 'https://www.linkedin.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/1200px-LinkedIn_logo_initials.png',
    rating: 'C',
    overallScore: 2.6,
    categories: ['Professional Networking', 'Social Media'],
    description: 'LinkedIn\'s Terms of Service contain extensive data collection and sharing provisions, though they are somewhat clearer than some other social networks.',
    criteria: {
      clarity: 3,
      transparency: 2,
      fairness: 3,
      accessibility: 3,
      accountability: 2
    }
  }
];

function Home() {
  const [filteredWebsites, setFilteredWebsites] = useState(websiteData);
  const [selectedWebsite, setSelectedWebsite] = useState(null);
  const [animateIn, setAnimateIn] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [noResults, setNoResults] = useState(false);
  
  const websiteCardsRef = useRef([]);
  const criteriaItemsRef = useRef([]);

  // Handle search from SearchBar component
  const handleSearch = (searchTerm) => {
    setIsSearching(true);
    
    // Scroll to results section
    setTimeout(() => {
      const websitesSection = document.querySelector('.websites-section');
      if (websitesSection) {
        websitesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    
    setTimeout(() => {
      if (!searchTerm || searchTerm.trim() === '') {
        setFilteredWebsites(websiteData);
        setNoResults(false);
        setIsSearching(false);
        return;
      }
      
      const searchTermLower = searchTerm.toLowerCase();
      
      // Filter websites based on search term
      const filtered = websiteData.filter(website => 
        website.name.toLowerCase().includes(searchTermLower) ||
        (website.url && website.url.toLowerCase().includes(searchTermLower)) ||
        (website.categories && website.categories.some(category => 
          category.toLowerCase().includes(searchTermLower)
        )) ||
        (website.description && website.description.toLowerCase().includes(searchTermLower))
      );
      
      setFilteredWebsites(filtered);
      setNoResults(filtered.length === 0);
      setIsSearching(false);
    }, 600); // Longer delay to show loading state
  };

  // Handle website selection
  const handleWebsiteSelect = (website) => {
    setSelectedWebsite(website);
    
    // Scroll to selected website details
    setTimeout(() => {
      const selectedWebsiteElement = document.querySelector('.selected-website');
      if (selectedWebsiteElement) {
        selectedWebsiteElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  // Animation on mount
  useEffect(() => {
    setAnimateIn(true);
    
    // Apply animation delays to website cards
    websiteCardsRef.current.forEach((card, index) => {
      if (card) {
        card.style.setProperty('--animation-delay', index);
      }
    });
    
    // Apply animation delays to criteria items
    criteriaItemsRef.current.forEach((item, index) => {
      if (item) {
        item.style.setProperty('--animation-delay', index);
      }
    });
    
    // Set width for progress bars based on criteria values
    if (selectedWebsite && selectedWebsite.criteria) {
      Object.entries(selectedWebsite.criteria).forEach(([key, value], index) => {
        const item = criteriaItemsRef.current[index];
        if (item) {
          const progressBar = item.querySelector('.criteria-progress-bar');
          if (progressBar) {
            progressBar.style.setProperty('--width', `${(value / 5) * 100}%`);
          }
        }
      });
    }
  }, [selectedWebsite]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Close suggestions when clicking outside
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Get logo URL with fallback
  const getLogoUrl = (website) => {
    if (website.logo) {
      return website.logo;
    } else if (website.url) {
      // Try to get logo from Clearbit
      const domain = website.url.replace(/^https?:\/\//, '').replace(/^www\./, '').split('/')[0];
      return `https://logo.clearbit.com/${domain}?size=120`;
    }
    return '';
  };

  // Handle image loading error
  const handleImageError = (e, websiteName) => {
    // Create a canvas for the fallback image
    const canvas = document.createElement('canvas');
    const size = 120;
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    
    // Get the first letter of the website name
    const initial = websiteName ? websiteName.charAt(0).toUpperCase() : 'W';
    
    // Create a gradient background based on the initial
    let gradient;
    switch (initial) {
      case 'F': // Facebook
        gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#3b5998');
        gradient.addColorStop(1, '#4267B2');
        break;
      case 'G': // Google
        gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#4285F4');
        gradient.addColorStop(0.33, '#34A853');
        gradient.addColorStop(0.66, '#FBBC05');
        gradient.addColorStop(1, '#EA4335');
        break;
      case 'T': // Twitter
        gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#1DA1F2');
        gradient.addColorStop(1, '#5EAADE');
        break;
      case 'A': // Apple, Amazon
        gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#555555');
        gradient.addColorStop(1, '#000000');
        break;
      default:
        gradient = ctx.createLinearGradient(0, 0, size, size);
        gradient.addColorStop(0, '#2D789E');
        gradient.addColorStop(1, '#4A90E2');
    }
    
    // Draw a circle with the gradient
    ctx.beginPath();
    ctx.arc(size/2, size/2, size/2 - 2, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.fill();
    
    // Add a subtle highlight
    const highlight = ctx.createRadialGradient(size * 0.3, size * 0.3, size * 0.1, size * 0.5, size * 0.5, size);
    highlight.addColorStop(0, 'rgba(255, 255, 255, 0.2)');
    highlight.addColorStop(1, 'rgba(255, 255, 255, 0)');
    ctx.fillStyle = highlight;
    ctx.fill();
    
    // Add the initial letter
    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 60px Inter, Arial, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(initial, size/2, size/2);
    
    // Set the canvas as the image source
    e.target.src = canvas.toDataURL('image/png');
    
    // Remove the data-failed attribute to prevent blue background
    e.target.removeAttribute('data-failed');
    
    // Add a class to indicate this is a custom fallback
    e.target.classList.add('custom-fallback');
  };

  // Get grade letter based on score
  const getGradeLetter = (score) => {
    if (score >= 4.5) return 'A+';
    if (score >= 4.0) return 'A';
    if (score >= 3.5) return 'A-';
    if (score >= 3.0) return 'B+';
    if (score >= 2.5) return 'B';
    if (score >= 2.0) return 'B-';
    if (score >= 1.5) return 'C+';
    if (score >= 1.0) return 'C';
    if (score >= 0.5) return 'D';
    return 'F';
  };

  // Get CSS class for grade
  const getGradeClass = (score) => {
    if (score >= 3.5) return 'grade-a';
    if (score >= 2.5) return 'grade-b';
    if (score >= 1.5) return 'grade-c';
    if (score >= 0.5) return 'grade-d';
    return 'grade-f';
  };

  // Get icon for criteria
  const getCriteriaIcon = (criteriaKey) => {
    switch (criteriaKey.toLowerCase()) {
      case 'clarity':
        return <FaFileAlt className="criteria-icon" />;
      case 'transparency':
        return <FaGlobe className="criteria-icon" />;
      case 'fairness':
        return <FaBalanceScale className="criteria-icon" />;
      case 'accessibility':
        return <FaAccessibleIcon className="criteria-icon" />;
      case 'accountability':
        return <FaUserLock className="criteria-icon" />;
      default:
        return <FaShieldAlt className="criteria-icon" />;
    }
  };

  // Get description for criteria based on score
  const getCriteriaDescription = (criteriaKey, score) => {
    const descriptions = {
      clarity: [
        "Extremely confusing and filled with legal jargon.",
        "Difficult to understand with many complex terms.",
        "Moderately clear but still contains some complex language.",
        "Generally clear and understandable for most users.",
        "Very clear and written in plain, accessible language."
      ],
      transparency: [
        "Hides important information about data collection and usage.",
        "Vague about how user data is collected and used.",
        "Provides basic information about data practices.",
        "Clearly explains most data collection and usage practices.",
        "Fully transparent about all data collection and usage."
      ],
      fairness: [
        "Contains many one-sided or exploitative terms.",
        "Includes several terms that favor the company over users.",
        "Has a mix of balanced and company-favoring terms.",
        "Generally fair with few concerning clauses.",
        "Balanced and fair to both users and the company."
      ],
      accessibility: [
        "Very difficult to find and read the terms.",
        "Terms are available but not easily accessible.",
        "Terms can be found with some effort.",
        "Terms are easy to find and review.",
        "Terms are prominently displayed and easy to navigate."
      ],
      accountability: [
        "No clear process for addressing issues or concerns.",
        "Limited accountability for company actions.",
        "Basic mechanisms for addressing user concerns.",
        "Clear processes for addressing issues and company accountability.",
        "Strong accountability measures and user recourse options."
      ]
    };
    
    const index = Math.min(Math.max(Math.floor(score) - 1, 0), 4);
    return descriptions[criteriaKey.toLowerCase()][index] || "No description available.";
  };

  return (
    <div className="home-container">
      {/* Hero Section with Integrated Search */}
      <div className="hero-section">
        <h1 className="hero-title">Know Your <span className="highlight">Terms</span></h1>
        <p className="hero-subtitle">
          Understand what you're agreeing to when you click "I Accept" on Terms of Service agreements
        </p>
        
        {/* New Search Bar Component */}
        <div className="hero-search">
          <SearchBar onSearch={handleSearch} websiteData={websiteData} />
          
          {/* Search Results Info */}
          {isSearching ? (
            <div className="search-results-info">
              <span>Searching...</span>
            </div>
          ) : filteredWebsites.length !== websiteData.length && filteredWebsites.length > 0 ? (
            <div className="search-results-info">
              <span>Found {filteredWebsites.length} result{filteredWebsites.length !== 1 ? 's' : ''}</span>
            </div>
          ) : null}
        </div>
        
        <div className="hero-cta">
          <button 
            className="btn btn-primary animated-button"
            onClick={() => {
              const ratingSection = document.getElementById('rating-graph-section');
              if (ratingSection) {
                ratingSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }}
          >
            Explore Ratings
          </button>
        </div>
      </div>

      {/* Website Rating Graph Section */}
      <div id="rating-graph-section" className="graph-section">
        <h2 className="section-title">Website Privacy Rating Graph</h2>
        <p className="section-description">
          Explore how popular websites rate in terms of their privacy policies and terms of service.
        </p>
        <div className="graph-wrapper">
          <WebsiteRatingGraph />
        </div>
      </div>

      {/* Popular Websites Section with Better Image Handling */}
      <div className="websites-section">
        <h2 className="website-ratings-title">
          {filteredWebsites.length !== websiteData.length && filteredWebsites.length > 0 
            ? `Search Results (${filteredWebsites.length})` 
            : 'Website Ratings'}
        </h2>
        <p className="website-ratings-subtitle">
          Browse through our database of websites and their Terms of Service ratings
        </p>
        <div className="websites-grid">
          {filteredWebsites.map((website, index) => (
            <div 
              key={website.id} 
              className="website-card"
              style={{ '--animation-delay': index }}
              onClick={() => handleWebsiteSelect(website)}
            >
              <div className="website-card-content">
                <div 
                  className="website-logo-container"
                  data-initial={website.name.charAt(0).toUpperCase()}
                >
                  <img 
                    src={getLogoUrl(website)}
                    alt={`${website.name} logo`}
                    className="website-logo"
                    onError={(e) => handleImageError(e, website.name)}
                  />
                </div>
                <div className="website-card-info">
                  <h3 className="website-name">{website.name}</h3>
                  <span className={`rating-badge grade-${website.rating.toLowerCase().charAt(0)}`}>
                    {website.rating}
                  </span>
                </div>
              </div>
            </div>
          ))}
          
          {filteredWebsites.length === 0 && (
            <div className="no-results">
              <p>No websites match your search criteria.</p>
              <button 
                className="btn btn-secondary"
                onClick={() => {
                  setFilteredWebsites(websiteData);
                  setNoResults(false);
                }}
              >
                Show All Websites
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Selected Website Information */}
      {selectedWebsite && (
        <div className="selected-website">
          <div className="selected-website-header">
            <div 
              className="selected-website-logo-container"
              data-initial={selectedWebsite.name.charAt(0).toUpperCase()}
            >
              <img 
                src={getLogoUrl(selectedWebsite)}
                alt={`${selectedWebsite.name} logo`}
                className="selected-website-logo"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('show-fallback');
                }}
              />
            </div>
            <div className="selected-website-info">
              <h2 className="selected-website-name">{selectedWebsite.name}</h2>
              <a href={selectedWebsite.url} target="_blank" rel="noopener noreferrer" className="selected-website-url">
                {selectedWebsite.url.replace(/^https?:\/\//, '')}
              </a>
              <div className="selected-website-categories">
                {selectedWebsite.categories.map((category, index) => (
                  <span key={index} className="category-tag">{category}</span>
                ))}
              </div>
            </div>
            <div className={`selected-website-grade ${getGradeClass(selectedWebsite.overallScore)}`}>
              {selectedWebsite.rating}
            </div>
          </div>
          
          <p className="selected-website-description">
            {selectedWebsite.description}
          </p>
          
          <div className="criteria-grid">
            {Object.entries(selectedWebsite.criteria).map(([key, value]) => (
              <div 
                key={key} 
                className="criteria-item"
                ref={el => {
                  if (el && !criteriaItemsRef.current.includes(el)) {
                    criteriaItemsRef.current.push(el);
                  }
                }}
              >
                <h3 className="criteria-title">
                  {getCriteriaIcon(key)}
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </h3>
                <div className="criteria-rating">
                  <span className="criteria-value">{value}</span>
                  <span className="criteria-max">/5</span>
                </div>
                <div className="criteria-progress">
                  <div 
                    className="criteria-progress-bar" 
                    style={{ width: `${(value / 5) * 100}%` }}
                  ></div>
                </div>
                <p className="criteria-description">
                  {getCriteriaDescription(key, value)}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 className="cta-title">Take Control of Your <span className="orange-accent">Digital Footprint</span></h2>
        <p className="cta-description">
          Learn more about how to protect your privacy and understand the terms you're agreeing to online.
        </p>
        <div className="quiz-cards-container">
          <Link to="/quizzes" className="quiz-card main-quiz-card">
            <div className="quiz-card-icon">
              <FaShieldAlt />
            </div>
            <div className="quiz-card-content">
              <h3>Explore All Quizzes</h3>
              <p>Test your knowledge about digital rights, privacy policies, and terms of service.</p>
              <span className="quiz-card-cta">Start Now →</span>
            </div>
          </Link>
          
          <div className="quiz-cards-grid">
            <Link to="/quizzes/privacy-policy-challenge" className="quiz-card">
              <div className="quiz-card-icon">
                <FaUserLock />
              </div>
              <div className="quiz-card-content">
                <h3>Privacy Challenge</h3>
                <p>Identify concerning privacy policy clauses.</p>
                <span className="quiz-card-cta">Take Challenge →</span>
              </div>
            </Link>
            
            <Link to="/quizzes/digital-rights-assessment" className="quiz-card">
              <div className="quiz-card-icon">
                <FaShieldAlt />
              </div>
              <div className="quiz-card-content">
                <h3>Digital Rights Assessment</h3>
                <p>Learn about your rights in the digital world.</p>
                <span className="quiz-card-cta">Start Assessment →</span>
              </div>
            </Link>
            
            <Link to="/quizzes/terms-of-service-quiz" className="quiz-card">
              <div className="quiz-card-icon">
                <FaFileAlt />
              </div>
              <div className="quiz-card-content">
                <h3>Terms of Service Quiz</h3>
                <p>Understand the legal implications of ToS.</p>
                <span className="quiz-card-cta">Start Quiz →</span>
              </div>
            </Link>
            
            <Link to="/about" className="quiz-card">
              <div className="quiz-card-icon">
                <FaGlobe />
              </div>
              <div className="quiz-card-content">
                <h3>About the Project</h3>
                <p>Learn more about Know Your Terms.</p>
                <span className="quiz-card-cta">Read More →</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
