import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';

export default function SearchComponent({ isInNavbar = false, placeholder = "Search resources..." }) {
    const [query, setQuery] = useState('');
    const [showSuggestions, setShowSuggestions] = useState(false);
    const [suggestions, setSuggestions] = useState([]);
    const [quickResults, setQuickResults] = useState([]);
    const searchRef = useRef(null);
    const navigate = useNavigate();
    
    const { performSearch, quickSearch, getSuggestions } = useSearch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowSuggestions(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);

        if (value.trim() === '') {
            setSuggestions([]);
            setQuickResults([]);
            setShowSuggestions(false);
            return;
        }

        // Get suggestions and quick results
        const newSuggestions = getSuggestions(value);
        const newQuickResults = quickSearch(value);
        
        setSuggestions(newSuggestions);
        setQuickResults(newQuickResults);
        setShowSuggestions(true);
    };

    const handleSearch = (searchQuery = query) => {
        if (searchQuery.trim() === '') return;
        
        setShowSuggestions(false);
        performSearch(searchQuery);
        
        // Navigate to search results page
        navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleSearch();
        }
    };

    const handleSuggestionClick = (suggestion) => {
        let searchTerm = '';
        
        switch (suggestion.type) {
            case 'category':
                searchTerm = suggestion.value;
                break;
            case 'tag':
                searchTerm = suggestion.value;
                break;
            case 'author':
                searchTerm = suggestion.value;
                break;
            default:
                searchTerm = suggestion.value;
        }
        
        setQuery(searchTerm);
        handleSearch(searchTerm);
    };

    const handleQuickResultClick = () => {
        setShowSuggestions(false);
    };

    if (isInNavbar) {
        return (
            <div className="dropdown" ref={searchRef}>
                <div className="search-bar">
                    <div className="menu-search mb-0">
                        <form className="searchform" onSubmit={(e) => { e.preventDefault(); handleSearch(); }}>
                            <input 
                                type="text" 
                                className="form-control border rounded shadow" 
                                value={query}
                                onChange={handleInputChange}
                                onKeyPress={handleKeyPress}
                                onFocus={() => query && setShowSuggestions(true)}
                                placeholder={placeholder}
                            />
                            <button type="submit" className="search-submit">
                                <i className="uil uil-search"></i>
                            </button>
                        </form>
                    </div>
                </div>
                
                {showSuggestions && (query || suggestions.length > 0 || quickResults.length > 0) && (
                    <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-2 p-0 d-block" style={{width:'400px', maxHeight: '400px', overflowY: 'auto'}}>
                        {/* Quick Results */}
                        {quickResults.length > 0 && (
                            <div className="p-2">
                                <h6 className="dropdown-header text-muted mb-2">Quick Results</h6>
                                {quickResults.map((item, index) => (
                                    <Link 
                                        key={index}
                                        to={`/item-detail-one/${item.id}`}
                                        className="dropdown-item d-flex align-items-center p-2 rounded"
                                        onClick={handleQuickResultClick}
                                    >
                                        <img 
                                            src={item.product} 
                                            alt={item.name}
                                            className="avatar avatar-sm-sm rounded me-3"
                                            style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                        />
                                        <div>
                                            <div className="fw-semibold text-dark">{item.name}</div>
                                            <small className="text-muted">by {item.createrName}</small>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                        
                        {/* Suggestions */}
                        {suggestions.length > 0 && (
                            <div className="p-2">
                                {quickResults.length > 0 && <hr className="my-2"/>}
                                <h6 className="dropdown-header text-muted mb-2">Suggestions</h6>
                                {suggestions.map((suggestion, index) => (
                                    <button 
                                        key={index}
                                        className="dropdown-item d-flex align-items-center p-2 rounded border-0 bg-transparent w-100 text-start"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        <i className={`uil ${
                                            suggestion.type === 'category' ? 'uil-tag-alt' :
                                            suggestion.type === 'tag' ? 'uil-label' : 'uil-user'
                                        } me-2 text-primary`}></i>
                                        <span className="text-dark">{suggestion.label}</span>
                                        <small className="text-muted ms-auto">{suggestion.type}</small>
                                    </button>
                                ))}
                            </div>
                        )}
                        
                        {/* View All Results */}
                        {query && (
                            <div className="p-2">
                                <hr className="my-2"/>
                                <button 
                                    className="dropdown-item d-flex align-items-center justify-content-center p-2 rounded border-0 bg-transparent w-100 text-primary fw-semibold"
                                    onClick={() => handleSearch()}
                                >
                                    <i className="uil uil-search me-2"></i>
                                    View all results for "{query}"
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }

    // For full page search
    return (
        <div className="search-container" ref={searchRef}>
            <div className="input-group">
                <input 
                    type="text" 
                    className="form-control form-control-lg border-end-0" 
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => query && setShowSuggestions(true)}
                    placeholder={placeholder}
                />
                <button 
                    className="btn btn-primary px-4" 
                    type="button"
                    onClick={() => handleSearch()}
                >
                    <i className="uil uil-search fs-5"></i>
                </button>
            </div>
            
            {showSuggestions && (suggestions.length > 0 || quickResults.length > 0) && (
                <div className="suggestions-dropdown bg-white shadow rounded border mt-2 p-3" style={{position: 'absolute', width: '100%', zIndex: 1000, maxHeight: '400px', overflowY: 'auto'}}>
                    {/* Quick Results */}
                    {quickResults.length > 0 && (
                        <div className="mb-3">
                            <h6 className="text-muted mb-2">Quick Results</h6>
                            <div className="row g-2">
                                {quickResults.map((item, index) => (
                                    <div key={index} className="col-12">
                                        <Link 
                                            to={`/item-detail-one/${item.id}`}
                                            className="d-flex align-items-center p-2 rounded bg-light text-decoration-none"
                                            onClick={handleQuickResultClick}
                                        >
                                            <img 
                                                src={item.product} 
                                                alt={item.name}
                                                className="rounded me-3"
                                                style={{width: '50px', height: '50px', objectFit: 'cover'}}
                                            />
                                            <div>
                                                <div className="fw-semibold text-dark">{item.name}</div>
                                                <small className="text-muted">by {item.createrName} • {item.tag}</small>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                    
                    {/* Suggestions */}
                    {suggestions.length > 0 && (
                        <div>
                            {quickResults.length > 0 && <hr className="my-3"/>}
                            <h6 className="text-muted mb-2">Suggestions</h6>
                            <div className="d-flex flex-wrap gap-2">
                                {suggestions.map((suggestion, index) => (
                                    <button 
                                        key={index}
                                        className="btn btn-sm btn-outline-secondary d-flex align-items-center"
                                        onClick={() => handleSuggestionClick(suggestion)}
                                    >
                                        <i className={`uil ${
                                            suggestion.type === 'category' ? 'uil-tag-alt' :
                                            suggestion.type === 'tag' ? 'uil-label' : 'uil-user'
                                        } me-1`}></i>
                                        {suggestion.label}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
