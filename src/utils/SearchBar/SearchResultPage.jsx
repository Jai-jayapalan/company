import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

import { searchIndex } from '../../data/searchData'
import './SearchBar.css'

const SearchResultsPage = () => {
  const location = useLocation();
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const searchQuery = searchParams.get('q') || '';
    setQuery(searchQuery);

    if (searchQuery) {
      // Simple client-side search (replace with API call if needed)
      const matchedResults = searchIndex.filter(item => {
        const searchLower = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(searchLower) ||
          item.keywords.some(kw => kw.toLowerCase().includes(searchLower))
        );
      });
      setResults(matchedResults);
    }
  }, [location.search]);

  return (
    <div className="search-results-page">
      <h1>Search Results for "{query}"</h1>
      
      {results.length > 0 ? (
        <div className="results-grid">
          {results.map(result => (
            <div key={result.id} className="result-card">
              <h3><a href={result.url}>{result.title}</a></h3>
              <div className="keywords">
                {result.keywords.map((keyword, i) => (
                  <span key={i} className="keyword">{keyword}</span>
                ))}
              </div>
              <a href={result.url} className="view-link">View Page</a>
            </div>
          ))}
        </div>
      ) : (
        <div className="no-results">
          <p>No results found for "{query}"</p>
          <p>Try different keywords or check out our <a href="/services">services</a> and <a href="/courses">courses</a>.</p>
        </div>
      )}
    </div>
  )
}

export default SearchResultsPage