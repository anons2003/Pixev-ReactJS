import React from 'react';
import { Link } from 'react-router-dom';
import { useLike } from '../hooks/useLike';

export const LikeableProductItem = ({ item, index, renderContent }) => {
  const { isLiked, handleLike, likeClass } = useLike(item.id, {
    id: item.id,
    title: item.name,
    price: item.price || 'Premium',
    image: item.product,
    creator: 'Creator',
    category: item.category
  });

  return renderContent({ item, index, isLiked, handleLike, likeClass });
};

export const LikeableBlogItem = ({ item, index, renderContent }) => {
  const { isLiked, handleLike, likeClass } = useLike(item.id, {
    id: item.id,
    title: item.title,
    price: 'Free',
    image: item.image,
    creator: item.author,
    category: item.tag
  });

  return renderContent({ item, index, isLiked, handleLike, likeClass });
};

export const LikeableSearchItem = ({ item, index, renderContent }) => {
  const { isLiked, handleLike, likeClass } = useLike(item.id, {
    id: item.id,
    title: item.name,
    price: item.value,
    image: item.product,
    creator: 'Creator',
    category: item.category
  });

  return renderContent({ item, index, isLiked, handleLike, likeClass });
};
