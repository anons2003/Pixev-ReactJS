import React from 'react';

export default function MenuIndicator({ 
    category, 
    currentPath, 
    isCompact = false 
}) {
    if (!category) return null;

    const formatCount = (count) => {
        if (count >= 1000) {
            return (count / 1000).toFixed(1) + 'k';
        }
        return count.toString();
    };

    if (isCompact) {
        return (
            <span className={`badge bg-${category.color} ms-2 small`}>
                {formatCount(category.itemCount)}+
            </span>
        );
    }

    return (
        <div className="menu-indicator d-flex align-items-center gap-2">
            <span className={`badge bg-${category.color} small`}>
                {formatCount(category.itemCount)}+ items
            </span>
            {category.isPopular && (
                <span className="badge bg-danger small">
                    <i className="uil uil-fire me-1"></i>Hot
                </span>
            )}
        </div>
    );
}
