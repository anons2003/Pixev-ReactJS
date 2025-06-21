import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/images/bg/01.jpg'

import Navbar from '../../components/navbar'
import CategoryBreadcrumb from '../../components/CategoryBreadcrumb'
import CategoryNavigator from '../../components/CategoryNavigator'
import AdvancedFilters from '../../components/AdvancedFilters'
import LikeButton from '../../components/LikeButton'
import Subscription from '../../components/subscription'
import Footer from '../../components/footer'

import { resourceData } from '../../data/data'

export default function ExploreOne() {
  let [selectedCategory, setSelectedCategory] = useState(null)
  let [filters, setFilters] = useState({
    category: null,
    priceRange: null,
    sortBy: 'latest',
    author: null
  })

  // Apply filters to data
  const getFilteredData = () => {
    let filtered = resourceData;

    // Filter by category (from both category filter and quick category)
    const activeCategory = filters.category || selectedCategory;
    if (activeCategory) {
      filtered = filtered.filter((item) => item.category === activeCategory);
    }

    // Filter by price range
    if (filters.priceRange) {
      filtered = filtered.filter(item => {
        if (filters.priceRange === 'free') {
          return item.value === 'Free';
        } else if (filters.priceRange === 'premium') {
          return item.value === 'Premium';
        } else if (filters.priceRange === 'low') {
          const price = parseFloat(item.value.replace('$', ''));
          return !isNaN(price) && price <= 25;
        } else if (filters.priceRange === 'medium') {
          const price = parseFloat(item.value.replace('$', ''));
          return !isNaN(price) && price > 25 && price <= 50;
        } else if (filters.priceRange === 'high') {
          const price = parseFloat(item.value.replace('$', ''));
          return !isNaN(price) && price > 50;
        }
        return true;
      });
    }

    // Filter by author
    if (filters.author) {
      filtered = filtered.filter(item => 
        item.createrName.toLowerCase().includes(filters.author.toLowerCase())
      );
    }

    // Sort results
    switch (filters.sortBy) {
      case 'latest':
        filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case 'popular':
        filtered = filtered.sort((a, b) => b.id - a.id);
        break;
      case 'price-low':
        filtered = filtered.sort((a, b) => {
          const priceA = a.value === 'Premium' ? 999 : (a.value === 'Free' ? 0 : parseFloat(a.value.replace('$', '')));
          const priceB = b.value === 'Premium' ? 999 : (b.value === 'Free' ? 0 : parseFloat(b.value.replace('$', '')));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => {
          const priceA = a.value === 'Premium' ? 999 : (a.value === 'Free' ? 0 : parseFloat(a.value.replace('$', '')));
          const priceB = b.value === 'Premium' ? 999 : (b.value === 'Free' ? 0 : parseFloat(b.value.replace('$', '')));
          return priceB - priceA;
        });
        break;
      case 'name':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return filtered;
  };

  const filteredData = getFilteredData();

  const matchCategory = (category) => {
    setSelectedCategory(category)
    // Reset advanced filters when using quick category
    setFilters(prev => ({ ...prev, category: null }))
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    // Reset quick category when using advanced filters
    if (newFilters.category !== null) {
      setSelectedCategory(null)
    }
  }
  return (
    <>
    <Navbar navlight={true}/>    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <CategoryBreadcrumb currentPath="/explore-one" />
    </section>
    <div className="position-relative">            
        <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>    <section className="section">
        <div className="container">
            {/* Category Navigator */}
            <CategoryNavigator />
            
            {/* Advanced Filters */}
            <AdvancedFilters onFilterChange={handleFilterChange} />

            <div className="row justify-content-center mb-4 pb-2">
                <div className="col filters-group-wrap">
                    <div className="filters-group">                        <ul className="container-filter mb-0 categories-filter text-center list-unstyled filter-options">
                            <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === null ? 'active' : ''}`} onClick={()=>matchCategory(null)}><i className="uil uil-browser"></i> All</li>
                            <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'templates' ? 'active' : ''}`} onClick={()=>matchCategory('templates')}><i className="uil uil-apps"></i> Templates</li>
                            <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'graphics' ? 'active' : ''}`} onClick={()=>matchCategory('graphics')}><i className="uil uil-chart-pie-alt"></i> Graphics</li>
                            <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'photos' ? 'active' : ''}`} onClick={()=>matchCategory('photos')}><i className="uil uil-camera"></i> Photos</li>
                            <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'fonts' ? 'active' : ''}`} onClick={()=>matchCategory('fonts')}><i className="uil uil-text"></i> Fonts</li>
                            <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'ui-kits' ? 'active' : ''}`} onClick={()=>matchCategory('ui-kits')}><i className="uil uil-mobile-android"></i> UI Kits</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Results summary */}
            <div className="row mb-3">
                <div className="col-12">
                    <div className="d-flex justify-content-between align-items-center">
                        <h6 className="text-muted mb-0">
                            Showing {filteredData.length} result{filteredData.length !== 1 ? 's' : ''}
                            {(selectedCategory || filters.category || filters.priceRange || filters.author) && (
                                <span className="ms-2">
                                    {selectedCategory && <span className="badge bg-primary me-1">{selectedCategory}</span>}
                                    {filters.category && <span className="badge bg-primary me-1">{filters.category}</span>}
                                    {filters.priceRange && <span className="badge bg-success me-1">{filters.priceRange}</span>}
                                    {filters.author && <span className="badge bg-info me-1">by {filters.author}</span>}
                                </span>
                            )}
                        </h6>
                        <small className="text-muted">
                            Sorted by {filters.sortBy.replace('-', ' ')}
                        </small>
                    </div>
                </div>
            </div>

            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4" id="grid">
              {filteredData.map((item,index)=>{
                return(
                    <div className="col picture-item" key={index}>
                        <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                            <div className="nft-image position-relative overflow-hidden">
                                <img src={item.product} className="img-fluid" alt=""/>                                <div className="position-absolute top-0 end-0 m-2">
                                    <LikeButton 
                                        itemId={item.id}
                                        className="like-icon shadow-sm"
                                        showAnimation={true}
                                    />
                                </div><div className="bid-btn">
                                    <Link to={`/item-detail-one/${item.id}`} className="btn btn-pills"><i className="mdi mdi-crown fs-5 align-middle me-1"></i> Premium</Link>
                                </div>
                            </div>

                            <div className="card-body content position-relative">
                                <div className="img-group">
                                    <Link to="/creator-profile" className="user-avatar">
                                        <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"/>
                                    </Link>
                                    <Link to="/creator-profile" className="user-avatar ms-n3">
                                        <img src={item.creater2} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"/>
                                    </Link>
                                    <Link to="/creator-profile" className="user-avatar ms-n3">
                                        <img src={item.creater3} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-md rounded-circle"/>
                                    </Link>
                                </div>                                <div className="mt-2">
                                    <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>

                                    <div className="d-flex justify-content-between mt-2">
                                        <small className="rate fw-bold"><span className="badge bg-primary">Premium</span></small>
                                        <small className="text-dark fw-bold">{item.tag}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
              })}
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col">
                    <div className="text-center">
                        <Link to="#" className="btn btn-primary rounded-md"><i className="uil uil-process mdi-spin me-1"></i> Load More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Subscription/>
    <Footer/>
    </>
  )
}
