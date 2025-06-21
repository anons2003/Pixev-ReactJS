import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../contexts/FavoritesContext';

export default function LikeButton({ 
    itemId,
    itemData = {},
    className = "like-icon shadow-sm",
    size = "18px"
}) {
    const { toggleFavorite, isFavorite } = useFavorites();
    const [isAnimating, setIsAnimating] = useState(false);
    
    // Use the isFavorite function from context for consistency
    const isLiked = isFavorite(itemId);

    const handleToggleFavorite = async (e) => {
        e.preventDefault();
        e.stopPropagation();

        setIsAnimating(true);
        setTimeout(() => setIsAnimating(false), 600);

        console.log(`Toggling favorite for item: ${itemId} (type: ${typeof itemId})`);

        // Tạo item data mặc định nếu không có
        const defaultItemData = {
            id: itemId,
            title: itemData.title || itemData.name || `Item ${itemId}`,
            price: itemData.price || itemData.value || '$0',
            image: itemData.image || itemData.product || '/default-image.jpg',
            creator: itemData.creator || itemData.createrName || 'Unknown',
            ...itemData
        };

        const success = await toggleFavorite(itemId, defaultItemData);
        if (success) {
            console.log(`Successfully ${isLiked ? 'removed' : 'added'} item ${itemId} ${isLiked ? 'from' : 'to'} favorites`);
        }
    };

    return (
        <span className={className}>
            <Link 
                to="#" 
                className={`${isLiked ? 'text-danger' : 'text-muted'} icon`}
                onClick={handleToggleFavorite}
            >
                <i 
                    className={`mdi mdi-${size} ${isLiked ? 'mdi-heart' : 'mdi-heart-outline'} mb-0 ${isAnimating ? 'animate-heart' : ''}`}
                ></i>
            </Link>
        </span>
    );
}
