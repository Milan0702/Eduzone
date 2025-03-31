import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate();

  // Mock data for resources - in a real app, this would come from an API
  const resources = [
    { id: 1, title: 'Python Basics', category: 'python', path: '/python' },
    { id: 2, title: 'Python Data Structures', category: 'python', path: '/python' },
    { id: 3, title: 'HTML Introduction', category: 'fsd', path: '/fsd' },
    { id: 4, title: 'CSS Styling', category: 'fsd', path: '/fsd' },
    { id: 5, title: 'JavaScript Fundamentals', category: 'fsd', path: '/fsd' },
    { id: 6, title: 'Technical Communication', category: 'etc', path: '/etc' },
    { id: 7, title: 'Presentation Skills', category: 'etc', path: '/etc' },
    { id: 8, title: 'HTML Quiz', category: 'quiz', path: '/quiz1' },
  ];

  const handleSearch = (e) => {
    const searchValue = e.target.value;
    setSearchTerm(searchValue);

    if (searchValue.length > 1) {
      const filteredSuggestions = resources
        .filter(resource => 
          resource.title.toLowerCase().includes(searchValue.toLowerCase()) ||
          resource.category.toLowerCase().includes(searchValue.toLowerCase())
        )
        .slice(0, 5); // Limit to 5 suggestions
      
      setSuggestions(filteredSuggestions);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  };

  const handleSuggestionClick = (path) => {
    setShowSuggestions(false);
    navigate(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (searchTerm.length > 0) {
      // If user's search matches a suggestion, navigate to it
      const matchingSuggestion = suggestions[0];
      if (matchingSuggestion) {
        navigate(matchingSuggestion.path);
      }
    }
    
    setShowSuggestions(false);
  };

  return (
    <div className="position-relative">
      <form onSubmit={handleSubmit} className="d-flex">
        <input
          type="text"
          className="form-control me-2"
          placeholder="Search for courses, quizzes..."
          value={searchTerm}
          onChange={handleSearch}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
          onFocus={() => searchTerm.length > 1 && setSuggestions.length > 0 && setShowSuggestions(true)}
          style={{ 
            borderColor: 'var(--light-hover)',
            fontSize: '0.9rem',
            boxShadow: 'none'
          }}
        />
        <button className="btn" type="submit" style={{ backgroundColor: 'var(--primary)', color: 'white' }}>
          <i className="fas fa-search"></i>
        </button>
      </form>
      
      {showSuggestions && suggestions.length > 0 && (
        <div className="position-absolute start-0 end-0 mt-1 shadow-sm rounded" style={{ zIndex: 1000, backgroundColor: 'var(--light)' }}>
          <ul className="list-group">
            {suggestions.map(resource => (
              <li 
                key={resource.id} 
                className="list-group-item list-group-item-action"
                onClick={() => handleSuggestionClick(resource.path)}
                style={{ 
                  cursor: 'pointer',
                  border: 'none',
                  borderBottom: '1px solid var(--light-hover)',
                  backgroundColor: 'var(--light)'
                }}
              >
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ color: 'var(--dark)' }}>{resource.title}</span>
                  <span className="badge rounded-pill" style={{ 
                    backgroundColor: 
                      resource.category === 'python' ? 'var(--python-color)' :
                      resource.category === 'fsd' ? 'var(--fsd-color)' :
                      resource.category === 'etc' ? 'var(--etc-color)' :
                      'var(--secondary)'
                  }}>
                    {resource.category}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SearchBar; 