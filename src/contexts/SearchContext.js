import React, { createContext, useContext, useState } from 'react';
import { resourceData } from '../data/data';

const SearchContext = createContext();

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error('useSearch must be used within a SearchProvider');
    }
    return context;
};

export const SearchProvider = ({ children }) => {
    const [searchResults, setSearchResults] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [filters, setFilters] = useState({
        category: null,
        priceRange: null,
        sortBy: 'latest', // latest, popular, price-low, price-high, name
        author: null
    });
    const [isSearching, setIsSearching] = useState(false);

    // Hàm search chính
    const performSearch = (query, customFilters = null) => {
        setIsSearching(true);
        setSearchQuery(query);
        
        const activeFilters = customFilters || filters;
        
        let results = resourceData;

        // Filter by search query
        if (query && query.trim() !== '') {
            results = results.filter(item => 
                item.name.toLowerCase().includes(query.toLowerCase()) ||
                item.createrName.toLowerCase().includes(query.toLowerCase()) ||
                item.tag.toLowerCase().includes(query.toLowerCase()) ||
                item.category.toLowerCase().includes(query.toLowerCase())
            );
        }

        // Filter by category
        if (activeFilters.category && activeFilters.category !== 'all') {
            results = results.filter(item => item.category === activeFilters.category);
        }

        // Filter by price range
        if (activeFilters.priceRange) {
            results = results.filter(item => {
                if (activeFilters.priceRange === 'free') {
                    return item.value === 'Free';
                } else if (activeFilters.priceRange === 'premium') {
                    return item.value === 'Premium';
                } else if (activeFilters.priceRange === 'low') {
                    const price = parseFloat(item.value.replace('$', ''));
                    return !isNaN(price) && price <= 25;
                } else if (activeFilters.priceRange === 'medium') {
                    const price = parseFloat(item.value.replace('$', ''));
                    return !isNaN(price) && price > 25 && price <= 50;
                } else if (activeFilters.priceRange === 'high') {
                    const price = parseFloat(item.value.replace('$', ''));
                    return !isNaN(price) && price > 50;
                }
                return true;
            });
        }

        // Filter by author
        if (activeFilters.author) {
            results = results.filter(item => 
                item.createrName.toLowerCase().includes(activeFilters.author.toLowerCase())
            );
        }

        // Sort results
        switch (activeFilters.sortBy) {
            case 'latest':
                results = results.sort((a, b) => new Date(b.date) - new Date(a.date));
                break;
            case 'popular':
                results = results.sort((a, b) => b.id - a.id); // Assume higher ID = more popular
                break;
            case 'price-low':
                results = results.sort((a, b) => {
                    const priceA = a.value === 'Premium' ? 999 : (a.value === 'Free' ? 0 : parseFloat(a.value.replace('$', '')));
                    const priceB = b.value === 'Premium' ? 999 : (b.value === 'Free' ? 0 : parseFloat(b.value.replace('$', '')));
                    return priceA - priceB;
                });
                break;
            case 'price-high':
                results = results.sort((a, b) => {
                    const priceA = a.value === 'Premium' ? 999 : (a.value === 'Free' ? 0 : parseFloat(a.value.replace('$', '')));
                    const priceB = b.value === 'Premium' ? 999 : (b.value === 'Free' ? 0 : parseFloat(b.value.replace('$', '')));
                    return priceB - priceA;
                });
                break;
            case 'name':
                results = results.sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        setSearchResults(results);
        setIsSearching(false);
        
        return results;
    };

    // Hàm update filters
    const updateFilters = (newFilters) => {
        const updatedFilters = { ...filters, ...newFilters };
        setFilters(updatedFilters);
        
        // Re-search with new filters if there's an active query
        if (searchQuery) {
            performSearch(searchQuery, updatedFilters);
        }
    };

    // Hàm reset search
    const resetSearch = () => {
        setSearchQuery('');
        setSearchResults([]);
        setFilters({
            category: null,
            priceRange: null,
            sortBy: 'latest',
            author: null
        });
        setIsSearching(false);
    };

    // Hàm quick search (cho navbar)
    const quickSearch = (query) => {
        if (query.trim() === '') {
            setSearchResults([]);
            return [];
        }
        
        const results = resourceData.filter(item => 
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.createrName.toLowerCase().includes(query.toLowerCase()) ||
            item.tag.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 5); // Chỉ lấy 5 kết quả đầu tiên cho quick search
        
        return results;
    };

    // Get suggestions dựa trên input
    const getSuggestions = (query) => {
        if (query.trim() === '') return [];
        
        const suggestions = [];
        const lowercaseQuery = query.toLowerCase();
        
        // Add category suggestions
        const categories = ['templates', 'graphics', 'photos', 'fonts', 'ui-kits'];
        categories.forEach(cat => {
            if (cat.includes(lowercaseQuery)) {
                suggestions.push({ type: 'category', value: cat, label: cat.charAt(0).toUpperCase() + cat.slice(1) });
            }
        });
        
        // Add tag suggestions
        const uniqueTags = [...new Set(resourceData.map(item => item.tag))];
        uniqueTags.forEach(tag => {
            if (tag.toLowerCase().includes(lowercaseQuery) && suggestions.length < 8) {
                suggestions.push({ type: 'tag', value: tag, label: tag });
            }
        });
        
        // Add author suggestions
        const uniqueAuthors = [...new Set(resourceData.map(item => item.createrName))];
        uniqueAuthors.forEach(author => {
            if (author.toLowerCase().includes(lowercaseQuery) && suggestions.length < 8) {
                suggestions.push({ type: 'author', value: author, label: `by ${author}` });
            }
        });
        
        return suggestions.slice(0, 8);
    };

    const contextValue = {
        searchResults,
        searchQuery,
        filters,
        isSearching,
        performSearch,
        updateFilters,
        resetSearch,
        quickSearch,
        getSuggestions
    };

    return (
        <SearchContext.Provider value={contextValue}>
            {children}
        </SearchContext.Provider>
    );
};
