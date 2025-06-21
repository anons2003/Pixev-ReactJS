import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useSearch } from '../contexts/SearchContext';
import LikeButton from '../components/LikeButton';

import Navbar from '../components/navbar';
import SearchComponent from '../components/SearchComponent';
import Footer from '../components/footer';

import bg1 from '../assets/images/bg/01.jpg';

export default function SearchResults() {
    const [searchParams] = useSearchParams();
    const { searchResults, filters, updateFilters, performSearch, isSearching } = useSearch();
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(12);
    
    const query = searchParams.get('q') || '';

    useEffect(() => {
        if (query) {
            performSearch(query);
        }
    }, [query, performSearch]);

    // Pagination logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = searchResults.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(searchResults.length / itemsPerPage);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleFilterChange = (filterType, value) => {
        updateFilters({ [filterType]: value });
        setCurrentPage(1); // Reset to first page when filter changes
    };

    const categories = [
        { value: 'all', label: 'All Categories' },
        { value: 'templates', label: 'Templates' },
        { value: 'graphics', label: 'Graphics' },
        { value: 'photos', label: 'Photos' },
        { value: 'fonts', label: 'Fonts' },
        { value: 'ui-kits', label: 'UI Kits' }
    ];

    const priceRanges = [
        { value: null, label: 'All Prices' },
        { value: 'free', label: 'Free' },
        { value: 'premium', label: 'Premium' },
        { value: 'low', label: 'Under $25' },
        { value: 'medium', label: '$25 - $50' },
        { value: 'high', label: 'Over $50' }
    ];

    const sortOptions = [
        { value: 'latest', label: 'Latest' },
        { value: 'popular', label: 'Most Popular' },
        { value: 'name', label: 'Name A-Z' },
        { value: 'price-low', label: 'Price: Low to High' },
        { value: 'price-high', label: 'Price: High to Low' }
    ];

    return (
        <>
            <Navbar navlight={true} />
            
            {/* Hero Section */}
            <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'bottom'}}>
                <div className="bg-overlay bg-gradient-overlay-2"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-lg-8">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold sub-heading text-white title-dark">
                                    {query ? `Search Results for "${query}"` : 'Search Resources'}
                                </h5>
                                <p className="text-white-50 para-desc mx-auto mb-4">
                                    {searchResults.length > 0 
                                        ? `Found ${searchResults.length} results` 
                                        : 'Find the perfect digital resources for your projects'
                                    }
                                </p>
                                
                                {/* Search Component */}
                                <div className="position-relative">
                                    <SearchComponent placeholder="Search resources, authors, tags..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                                <li className="breadcrumb-item"><Link to="/explore-one">Explore</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Search Results</li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>

            <div className="position-relative">            
                <div className="shape overflow-hidden text-white">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>

            {/* Results Section */}
            <section className="section">
                <div className="container">
                    {/* Filters Bar */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <div className="d-flex flex-wrap align-items-center justify-content-between">
                                <div className="d-flex flex-wrap gap-3 mb-3 mb-md-0">
                                    {/* Category Filter */}
                                    <select 
                                        className="form-select form-select-sm" 
                                        style={{width: 'auto'}}
                                        value={filters.category || 'all'}
                                        onChange={(e) => handleFilterChange('category', e.target.value === 'all' ? null : e.target.value)}
                                    >
                                        {categories.map(cat => (
                                            <option key={cat.value} value={cat.value}>{cat.label}</option>
                                        ))}
                                    </select>

                                    {/* Price Filter */}
                                    <select 
                                        className="form-select form-select-sm" 
                                        style={{width: 'auto'}}
                                        value={filters.priceRange || ''}
                                        onChange={(e) => handleFilterChange('priceRange', e.target.value || null)}
                                    >
                                        {priceRanges.map(range => (
                                            <option key={range.value || 'all'} value={range.value || ''}>{range.label}</option>
                                        ))}
                                    </select>
                                </div>

                                <div className="d-flex align-items-center gap-3">
                                    {/* Sort */}
                                    <select 
                                        className="form-select form-select-sm" 
                                        style={{width: 'auto'}}
                                        value={filters.sortBy}
                                        onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                                    >
                                        {sortOptions.map(option => (
                                            <option key={option.value} value={option.value}>{option.label}</option>
                                        ))}
                                    </select>

                                    {/* Results count */}
                                    <span className="text-muted">
                                        {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Loading State */}
                    {isSearching && (
                        <div className="text-center py-5">
                            <div className="spinner-border text-primary" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                            <p className="mt-3 text-muted">Searching...</p>
                        </div>
                    )}

                    {/* Results Grid */}
                    {!isSearching && (
                        <>
                            {currentItems.length > 0 ? (
                                <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4">
                                    {currentItems.map((item, index) => (
                                        <div className="col" key={index}>
                                            <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                                                <div className="nft-image position-relative overflow-hidden">
                                                    <img src={item.product} className="img-fluid" alt={item.name}/>
                                                    <div className="position-absolute top-0 end-0 m-2">
                                                        <LikeButton 
                                                            itemId={item.id}
                                                            itemData={{
                                                                id: item.id,
                                                                title: item.name,
                                                                price: item.value,
                                                                image: item.product,
                                                                creator: 'Creator',
                                                                category: item.category
                                                            }}
                                                        />
                                                    </div>
                                                    <div className="bid-btn">
                                                        <Link to={`/item-detail-one/${item.id}`} className="btn btn-pills">
                                                            <i className="mdi mdi-crown fs-5 align-middle me-1"></i> 
                                                            {item.value === 'Premium' ? 'Premium' : item.value}
                                                        </Link>
                                                    </div>
                                                </div>

                                                <div className="card-body content position-relative">
                                                    <div className="img-group">
                                                        <Link to="/creator-profile" className="user-avatar">
                                                            <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"/>
                                                        </Link>
                                                        <Link to="/creator-profile" className="user-avatar ms-n3">
                                                            <img src={item.creater2} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"/>
                                                        </Link>
                                                        <Link to="/creator-profile" className="user-avatar ms-n3">
                                                            <img src={item.creater3} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"/>
                                                        </Link>
                                                    </div>

                                                    <div className="mt-2">
                                                        <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>

                                                        <div className="d-flex justify-content-between mt-2">
                                                            <small className="rate fw-bold">
                                                                <span className={`badge ${item.value === 'Premium' ? 'bg-primary' : item.value === 'Free' ? 'bg-success' : 'bg-warning'}`}>
                                                                    {item.value}
                                                                </span>
                                                            </small>
                                                            <small className="text-dark fw-bold">{item.tag}</small>
                                                        </div>
                                                        
                                                        <div className="mt-1">
                                                            <small className="text-muted">by {item.createrName}</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-5">
                                    <i className="uil uil-search display-4 text-muted mb-3"></i>
                                    <h4>No results found</h4>
                                    <p className="text-muted">
                                        {query 
                                            ? `Sorry, we couldn't find any results for "${query}". Try adjusting your search or filters.`
                                            : 'Start typing to search for resources.'
                                        }
                                    </p>
                                    <Link to="/explore-one" className="btn btn-primary">
                                        Browse All Resources
                                    </Link>
                                </div>
                            )}

                            {/* Pagination */}
                            {totalPages > 1 && (
                                <div className="row justify-content-center mt-5">
                                    <div className="col-auto">
                                        <nav aria-label="Search results pagination">
                                            <ul className="pagination">
                                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                                    <button 
                                                        className="page-link" 
                                                        onClick={() => paginate(currentPage - 1)}
                                                        disabled={currentPage === 1}
                                                    >
                                                        Previous
                                                    </button>
                                                </li>
                                                
                                                {[...Array(totalPages)].map((_, index) => {
                                                    const pageNumber = index + 1;
                                                    if (
                                                        pageNumber === 1 || 
                                                        pageNumber === totalPages || 
                                                        (pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1)
                                                    ) {
                                                        return (
                                                            <li key={pageNumber} className={`page-item ${currentPage === pageNumber ? 'active' : ''}`}>
                                                                <button 
                                                                    className="page-link" 
                                                                    onClick={() => paginate(pageNumber)}
                                                                >
                                                                    {pageNumber}
                                                                </button>
                                                            </li>
                                                        );
                                                    } else if (
                                                        pageNumber === currentPage - 2 || 
                                                        pageNumber === currentPage + 2
                                                    ) {
                                                        return (
                                                            <li key={pageNumber} className="page-item disabled">
                                                                <span className="page-link">...</span>
                                                            </li>
                                                        );
                                                    }
                                                    return null;
                                                })}
                                                
                                                <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                                    <button 
                                                        className="page-link" 
                                                        onClick={() => paginate(currentPage + 1)}
                                                        disabled={currentPage === totalPages}
                                                    >
                                                        Next
                                                    </button>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </section>

            <Footer />
        </>
    );
}
