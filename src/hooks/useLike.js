import { useContext } from 'react';
import { useFavorites } from '../contexts/FavoritesContext';

export const useLike = (itemId, itemData = {}) => {
  const { favorites, toggleFavorite } = useFavorites();
  
  const isLiked = favorites.some(fav => fav.id === itemId);
  
  const handleLike = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Tạo item data mặc định nếu không có
    const defaultItemData = {
      id: itemId,
      title: `Item ${itemId}`,
      price: '$0',
      image: '/default-image.jpg',
      creator: 'Unknown',
      ...itemData
    };
    
    toggleFavorite(defaultItemData);
  };
  
  return {
    isLiked,
    handleLike,
    likeClass: isLiked ? 'text-danger' : 'text-muted'
  };
};
