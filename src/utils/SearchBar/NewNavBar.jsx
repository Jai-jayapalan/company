import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'

import { searchIndex } from '../../data/searchData'

const NewNavBar = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const searchRef = useRef()
    const navigate = useNavigate()
  
    useEffect(() => {
      const handleClickOutside = (e) => {
        if(searchRef.current && !searchRef.current.contains(e.target)){
          setShowResults(false)
        }
      }
      document.addEventListener('mousedown', handleClickOutside)
      return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])
  
    const handleSearchChange = (e) => {
      const query = e.target.value;
      setSearchQuery(query)
  
      if(query.length > 1){
        const results = searchIndex.filter(item => 
            item.title.toLowerCase().includes(query.toLowerCase()) ||
            item.keywords.some(keyword => 
              keyword.toLowerCase().includes(query.toLowerCase())
          )
        );
        setSearchResults(results)
        setShowResults(true)
      } else {
        setSearchResults([])
        setShowResults(false)
      }
    }
    
    const handleSearchSubmit = (e) => {
      e.preventDefault();
      if (searchQuery.trim()) {
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
        setSearchQuery('');
        setShowResults(false);
      }
    };
    
    const clearSearch = () => {
      setSearchQuery('');
      setSearchResults([]);
      setShowResults(false);
    };
  
    return (
      <>
        <div className="search-container" ref={searchRef}>
        <form className="search-box" onSubmit={handleSearchSubmit}>
            <input
              type="text" 
              id="search-input" 
              name="search" 
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
              onFocus={()=> searchQuery.length > 1 && setShowResults(true)}
              autoComplete='off'
            />
            {
              searchQuery? (
                <button type="button" className="clear-btn" onClick={clearSearch}>
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              ) : (
                <button type="submit">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              )
            }
        </form>
        {
          showResults && searchResults.length > 0 && (
            <div className="search-results-dropdown">
              {searchResults.map(result => (
                <a 
                  key={result.id} 
                  href={result.url}
                  className="search-result-item"
                  onClick={() => setShowResults(false)}
                >
                  <div className="search-result-title">{result.title}</div>
                  <div className="search-result-keywords">
                    {result.keywords.slice(0, 3).map((kw, i) => (
                      <span key={i} className="keyword-tag">{kw}</span>
                    ))}
                  </div>
                </a>
              ))}
              <div className="search-all-results">
                <a href={`/search?q=${encodeURIComponent(searchQuery)}`}>
                  See all results for "{searchQuery}"
                </a>
              </div>
            </div>
          )
        }
      </div>
      </>
    )
  }

export default NewNavBar