import React, { useState } from 'react';
import { useSearch } from '../contexts/SearchContext';

export default function AdvancedFilters({ onFilterChange, currentCategory = null, showSearch = true }) {
    const [localFilters, setLocalFilters] = useState({
        category: currentCategory,
        priceRange: null,
        sortBy: 'latest',
        author: null
    });

    const categories = [
        { value: null, label: 'All Categories' },
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

    const handleFilterChange = (filterType, value) => {
        const newFilters = { ...localFilters, [filterType]: value };
        setLocalFilters(newFilters);
        
        if (onFilterChange) {
            onFilterChange(newFilters);
        }
    };

    const resetFilters = () => {
        const resetFilters = {
            category: currentCategory,
            priceRange: null,
            sortBy: 'latest',
            author: null
        };
        setLocalFilters(resetFilters);
        
        if (onFilterChange) {
            onFilterChange(resetFilters);
        }
    };

    return (
        <div className="advanced-filters bg-light rounded p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <div className="row g-3">
                        {/* Category Filter */}
                        {!currentCategory && (
                            <div className="col-sm-6 col-md-3">
                                <label className="form-label fw-semibold">Category</label>
                                <select 
                                    className="form-select form-select-sm"
                                    value={localFilters.category || ''}
                                    onChange={(e) => handleFilterChange('category', e.target.value || null)}
                                >
                                    {categories.map(cat => (
                                        <option key={cat.value || 'all'} value={cat.value || ''}>
                                            {cat.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        {/* Price Filter */}
                        <div className="col-sm-6 col-md-3">
                            <label className="form-label fw-semibold">Price</label>
                            <select 
                                className="form-select form-select-sm"
                                value={localFilters.priceRange || ''}
                                onChange={(e) => handleFilterChange('priceRange', e.target.value || null)}
                            >
                                {priceRanges.map(range => (
                                    <option key={range.value || 'all'} value={range.value || ''}>
                                        {range.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Sort Filter */}
                        <div className="col-sm-6 col-md-3">
                            <label className="form-label fw-semibold">Sort By</label>
                            <select 
                                className="form-select form-select-sm"
                                value={localFilters.sortBy}
                                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                            >
                                {sortOptions.map(option => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Author Filter */}
                        <div className="col-sm-6 col-md-3">
                            <label className="form-label fw-semibold">Author</label>
                            <input
                                type="text"
                                className="form-control form-control-sm"
                                placeholder="Search by author"
                                value={localFilters.author || ''}
                                onChange={(e) => handleFilterChange('author', e.target.value || null)}
                            />
                        </div>
                    </div>
                </div>

                <div className="col-md-4 text-md-end mt-3 mt-md-0">
                    <button 
                        className="btn btn-outline-secondary btn-sm me-2"
                        onClick={resetFilters}
                    >
                        <i className="uil uil-refresh me-1"></i>
                        Reset
                    </button>
                    
                    <span className="text-muted small">
                        Advanced filters active
                    </span>
                </div>
            </div>

            {/* Quick Filter Tags */}
            <div className="mt-3">
                <div className="d-flex flex-wrap gap-2">
                    <span className="text-muted small me-2">Quick filters:</span>
                    
                    <button 
                        className={`btn btn-sm ${localFilters.priceRange === 'free' ? 'btn-success' : 'btn-outline-success'}`}
                        onClick={() => handleFilterChange('priceRange', localFilters.priceRange === 'free' ? null : 'free')}
                    >
                        Free
                    </button>
                    
                    <button 
                        className={`btn btn-sm ${localFilters.priceRange === 'premium' ? 'btn-primary' : 'btn-outline-primary'}`}
                        onClick={() => handleFilterChange('priceRange', localFilters.priceRange === 'premium' ? null : 'premium')}
                    >
                        Premium
                    </button>
                    
                    <button 
                        className={`btn btn-sm ${localFilters.sortBy === 'popular' ? 'btn-warning' : 'btn-outline-warning'}`}
                        onClick={() => handleFilterChange('sortBy', localFilters.sortBy === 'popular' ? 'latest' : 'popular')}
                    >
                        Popular
                    </button>
                </div>
            </div>
        </div>
    );
}
