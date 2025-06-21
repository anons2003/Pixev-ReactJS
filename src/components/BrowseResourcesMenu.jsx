import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { browseResourcesData, getCategoryByPath } from '../data/browseResourcesData';
import MenuIndicator from './MenuIndicator';

export default function BrowseResourcesMenu({ 
    submenu, 
    setSubManu, 
    manu,
    currentPath,
    isMobile = false 
}) {
    const [hoveredCategory, setHoveredCategory] = useState(null);
    const currentCategory = getCategoryByPath(currentPath);
    
    const handleCategoryClick = (categoryPath) => {
        if (isMobile) {
            setSubManu(''); // Close mobile menu after selection
        }
    };

    return (
        <li className={`has-submenu parent-parent-menu-item ${browseResourcesData.some(item => item.path === manu) ? 'active' : ''}`}>
            <Link 
                to="#" 
                onClick={() => setSubManu(submenu === '/browse-resources' ? '' : '/browse-resources')}
                className="d-flex align-items-center"
            >
                <span>Browse Resources</span>
                <MenuIndicator 
                    category={currentCategory} 
                    currentPath={currentPath}
                    isCompact={!isMobile}
                />
            </Link>
            <span className="menu-arrow"></span>
            
            <ul className={`submenu browse-resources-menu ${submenu === '/browse-resources' ? 'open' : ''}`}>
                {/* Header */}
                <li className="submenu-header">
                    <div className="px-3 py-2 border-bottom">
                        <h6 className="text-muted mb-0 small text-uppercase fw-bold">
                            Choose Category
                        </h6>
                        {currentCategory && (
                            <small className="text-white-50 d-block mt-1">
                                Currently viewing: {currentCategory.name}
                            </small>
                        )}
                    </div>
                </li>

                {/* Category Items */}
                {browseResourcesData.map((category) => (
                    <li 
                        key={category.id} 
                        className={`ms-0 browse-category-item ${manu === category.path ? 'active' : ''} ${hoveredCategory === category.id ? 'hovered' : ''}`}
                        onMouseEnter={() => !isMobile && setHoveredCategory(category.id)}
                        onMouseLeave={() => !isMobile && setHoveredCategory(null)}
                    >
                        <Link 
                            to={category.path} 
                            className="sub-menu-item d-flex align-items-start p-3"
                            onClick={() => handleCategoryClick(category.path)}
                        >
                            {/* Category Icon */}
                            <div className={`category-icon bg-soft-${category.color} me-3 rounded-circle d-flex align-items-center justify-content-center`} 
                                 style={{width: '40px', height: '40px', minWidth: '40px'}}>
                                <i className={`uil ${category.icon} text-${category.color} fs-5`}></i>
                            </div>
                            
                            {/* Category Content */}
                            <div className="flex-grow-1">
                                <div className="d-flex align-items-center justify-content-between mb-1">
                                    <h6 className="mb-0 fw-semibold text-dark">{category.name}</h6>
                                    <div className="d-flex align-items-center gap-2">
                                        {category.isPopular && (
                                            <span className="badge bg-danger small">Hot</span>
                                        )}
                                        {manu === category.path && (
                                            <i className="uil uil-check-circle text-success"></i>
                                        )}
                                    </div>
                                </div>
                                
                                <p className="text-muted mb-1 small" style={{fontSize: '12px', lineHeight: '1.3'}}>
                                    {category.description}
                                </p>
                                
                                <div className="d-flex align-items-center justify-content-between">
                                    <small className={`text-${category.color} fw-semibold`} style={{fontSize: '11px'}}>
                                        {category.itemCount.toLocaleString()} items available
                                    </small>
                                    <i className={`uil uil-arrow-right text-${category.color} transition-transform`} 
                                       style={{fontSize: '12px', transition: 'transform 0.2s ease'}}></i>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
                
                {/* Quick Stats Footer */}
                <li className="submenu-footer border-top">
                    <div className="px-3 py-2">
                        <div className="row g-2 text-center">
                            <div className="col-6">
                                <small className="text-muted d-block">Total Resources</small>
                                <small className="text-primary fw-bold">
                                    {browseResourcesData.reduce((total, cat) => total + cat.itemCount, 0).toLocaleString()}+
                                </small>
                            </div>
                            <div className="col-6">
                                <small className="text-muted d-block">Categories</small>
                                <small className="text-success fw-bold">
                                    {browseResourcesData.length}
                                </small>
                            </div>
                        </div>
                        
                        {/* Quick Actions */}
                        <div className="mt-2 pt-2 border-top">
                            <div className="d-flex gap-2">
                                <Link to="/search" className="btn btn-sm btn-outline-primary flex-fill">
                                    <i className="uil uil-search me-1"></i>
                                    Search All
                                </Link>
                                <Link to="/explore-one" className="btn btn-sm btn-outline-secondary flex-fill">
                                    <i className="uil uil-eye me-1"></i>
                                    Browse All
                                </Link>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </li>
    );
}
