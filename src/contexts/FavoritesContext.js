import React, { createContext, useContext, useState, useEffect } from 'react';
import { useUser } from './UserContext';

const FavoritesContext = createContext();

export const useFavorites = () => {
    const context = useContext(FavoritesContext);
    if (!context) {
        throw new Error('useFavorites must be used within a FavoritesProvider');
    }
    return context;
};

export const FavoritesProvider = ({ children }) => {
    const [favorites, setFavorites] = useState(new Set());
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();

    // Load favorites from localStorage when component mounts
    useEffect(() => {
        console.log('Loading favorites for user:', user);
        if (user) {
            const storageKey = `favorites_${user.email}`;
            console.log('Storage key:', storageKey);
            const savedFavorites = localStorage.getItem(storageKey);
            console.log('Raw saved favorites:', savedFavorites);
            
            if (savedFavorites) {
                try {
                    const parsedFavorites = JSON.parse(savedFavorites);
                    console.log('Parsed favorites:', parsedFavorites);
                    // Normalize all IDs to strings for consistency
                    const normalizedFavorites = parsedFavorites.map(id => String(id));
                    console.log('Normalized favorites:', normalizedFavorites);
                    setFavorites(new Set(normalizedFavorites));
                    console.log('Set favorites to:', new Set(normalizedFavorites));
                } catch (error) {
                    console.error('Error parsing favorites from localStorage:', error);
                    setFavorites(new Set());
                }
            } else {
                console.log('No saved favorites found, setting empty set');
                setFavorites(new Set());
            }
        } else {
            console.log('No user, clearing favorites');
            setFavorites(new Set());
        }
    }, [user]);

    // Save favorites to localStorage whenever favorites change
    useEffect(() => {
        if (user && favorites.size >= 0) {
            const favoritesArray = [...favorites];
            localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favoritesArray));
            console.log('Saved favorites to localStorage:', favoritesArray);
        }
    }, [favorites, user]);

    // Toggle favorite status of an item
    const toggleFavorite = async (itemId, itemData = null) => {
        if (!user) {
            alert('Please login to add favorites');
            return false;
        }

        setIsLoading(true);
        
        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 500));
            
            const newFavorites = new Set(favorites);
            
            // Ensure itemId is consistent type (convert to string)
            const normalizedId = String(itemId);
            
            if (newFavorites.has(normalizedId)) {
                newFavorites.delete(normalizedId);
                console.log(`Removed item ${normalizedId} from favorites`);
            } else {
                newFavorites.add(normalizedId);
                console.log(`Added item ${normalizedId} to favorites (data:`, itemData, ')');
            }
            
            setFavorites(newFavorites);
            
            // TODO: Replace with actual API call
            // const response = await fetch(`/api/favorites/${normalizedId}`, {
            //     method: newFavorites.has(normalizedId) ? 'DELETE' : 'POST',
            //     headers: {
            //         'Authorization': `Bearer ${user.token}`,
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify(itemData)
            // });
            
            return true;
        } catch (error) {
            console.error('Error toggling favorite:', error);
            return false;
        } finally {
            setIsLoading(false);
        }
    };

    // Check if item is favorited
    const isFavorite = (itemId) => {
        const normalizedId = String(itemId);
        return favorites.has(normalizedId);
    };

    // Get all favorite items
    const getFavorites = () => {
        return [...favorites];
    };

    // Get favorites count
    const getFavoritesCount = () => {
        return favorites.size;
    };

    // Clear all favorites
    const clearFavorites = () => {
        setFavorites(new Set());
        if (user) {
            localStorage.removeItem(`favorites_${user.email}`);
        }
    };

    // Add multiple favorites (bulk operation)
    const addMultipleFavorites = (itemIds) => {
        const newFavorites = new Set([...favorites, ...itemIds]);
        setFavorites(newFavorites);
    };

    // Remove multiple favorites (bulk operation)
    const removeMultipleFavorites = (itemIds) => {
        const newFavorites = new Set(favorites);
        itemIds.forEach(id => newFavorites.delete(id));
        setFavorites(newFavorites);
    };

    // Get favorites with item details (for favorites page)
    const getFavoritesWithDetails = (allItems) => {
        const favoriteIds = [...favorites];
        console.log('Favorite IDs:', favoriteIds);
        console.log('All items sample:', allItems.slice(0, 3).map(item => ({ id: item.id, type: typeof item.id })));
        
        // Ensure both IDs are compared as the same type
        return allItems.filter(item => {
            // Convert both to string for comparison to handle type mismatches
            const itemIdStr = String(item.id);
            const isFavorited = favoriteIds.some(favId => String(favId) === itemIdStr);
            if (isFavorited) {
                console.log(`Found favorited item: ${item.id} (${item.name || item.title})`);
            }
            return isFavorited;
        });
    };

    const contextValue = {
        favorites: [...favorites],
        isLoading,
        toggleFavorite,
        isFavorite,
        getFavorites,
        getFavoritesCount,
        clearFavorites,
        addMultipleFavorites,
        removeMultipleFavorites,
        getFavoritesWithDetails
    };

    return (
        <FavoritesContext.Provider value={contextValue}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContext;
