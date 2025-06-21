import React from 'react';
import { Link } from 'react-router-dom';
import { getCategoryByPath } from '../data/browseResourcesData';

export default function CategoryBreadcrumb({ currentPath, customTitle = null }) {
    const category = getCategoryByPath(currentPath);
    
    const title = customTitle || (category ? category.name : 'Unknown Page');
    const icon = category ? category.icon : 'uil-folder';
    const color = category ? category.color : 'primary';

    return (
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <div className="mb-3">
                            <i className={`uil ${icon} display-4 text-${color}`}></i>
                        </div>
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">
                            {title}
                        </h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">
                            {category ? category.description : 'Explore our digital resources'}
                        </p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item">
                            <Link to="/">
                                <i className="uil uil-home me-1"></i>
                                Pixev
                            </Link>
                        </li>
                        <li className="breadcrumb-item">
                            <Link to="/explore-one">
                                <i className="uil uil-apps me-1"></i>
                                Browse Resources
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {category && (
                                <i className={`uil ${category.icon} me-1`}></i>
                            )}
                            {title}
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}
