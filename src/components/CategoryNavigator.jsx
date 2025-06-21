import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { browseResourcesData, getCategoryByPath } from '../data/browseResourcesData';

export default function CategoryNavigator({ showDescription = true }) {
    const location = useLocation();
    const currentCategory = getCategoryByPath(location.pathname);
    
    return (
        <div className="category-navigator bg-light rounded-lg p-4 mb-4">
            <div className="row align-items-center">
                <div className="col-md-8">
                    <h6 className="mb-3 text-muted">Browse by Category</h6>
                    <div className="d-flex flex-wrap gap-2">
                        {browseResourcesData.map((category) => {
                            const isActive = currentCategory?.id === category.id;
                            return (
                                <Link
                                    key={category.id}
                                    to={category.path}
                                    className={`btn btn-sm d-flex align-items-center ${
                                        isActive 
                                            ? `btn-${category.color}` 
                                            : `btn-outline-${category.color}`
                                    }`}
                                    style={{
                                        textDecoration: 'none',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <i className={`uil ${category.icon} me-2`}></i>
                                    {category.name}
                                    {isActive && (
                                        <i className="uil uil-check-circle ms-2"></i>
                                    )}
                                </Link>
                            );
                        })}
                    </div>
                </div>
                
                {showDescription && currentCategory && (
                    <div className="col-md-4 text-md-end mt-3 mt-md-0">
                        <div className={`alert alert-${currentCategory.color} alert-sm mb-0`}>
                            <div className="d-flex align-items-center">
                                <i className={`uil ${currentCategory.icon} me-2 fs-5`}></i>
                                <div>
                                    <div className="fw-semibold">{currentCategory.name}</div>
                                    <small>{currentCategory.description}</small>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            
            {/* Quick Stats */}
            <div className="row mt-4">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="d-flex gap-4">
                            <small className="text-muted">
                                <i className="uil uil-files-landscapes me-1"></i>
                                <strong>500+</strong> Resources
                            </small>
                            <small className="text-muted">
                                <i className="uil uil-users-alt me-1"></i>
                                <strong>50+</strong> Authors
                            </small>
                            <small className="text-muted">
                                <i className="uil uil-star me-1"></i>
                                <strong>4.8</strong> Average Rating
                            </small>
                        </div>
                        
                        <div className="d-flex gap-2">
                            <Link to="/search" className="btn btn-sm btn-outline-primary">
                                <i className="uil uil-search me-1"></i>
                                Advanced Search
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
