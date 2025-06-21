import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { resourceData } from '../../data/data';
import LikeButton from '../LikeButton';

export default function ProductTwo() {

    let [selectedCategory, setSelectedCategory] = useState(null);
    const filterData = selectedCategory ? resourceData.filter((item) => item.category === selectedCategory) : resourceData
    
    const matchCategory = (category)=>{
        setSelectedCategory(category)
    }
  return (
    <>
    <div className="row align-items-end">
        <div className="col-md-8">
            <div className="section-title mb-4 pb-2">
                <h4 className="title mb-2">Explore Your Items</h4>
                <p className="text-muted mb-0">Explore the latest Digital Resources</p>
            </div>
        </div>

        <div className="col-md-4">
            <div className="text-end d-md-block d-none">
                <Link to="/explore-one" className="btn btn-link primary text-dark">See More <i className="uil uil-arrow-right"></i></Link>
            </div>
        </div>
    </div>

    <div className="row justify-content-center mb-4 pb-2">
        <div className="col filters-group-wrap">
            <div className="filters-group">
                <ul className="container-filter mb-0 categories-filter list-unstyled filter-options">
                    <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === null ? 'active' : ''}`} onClick={()=>matchCategory(null)}><i className="uil uil-browser"></i> All</li>
                    <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'games' ? 'active' : ''}`} onClick={()=>matchCategory('games')}><i className="uil uil-volleyball"></i> Games</li>
                    <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'art' ? 'active' : ''}`} onClick={()=>matchCategory('art')}><i className="uil uil-chart-pie-alt"></i> Art</li>
                    <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'music' ? 'active' : ''}`} onClick={()=>matchCategory('music')}><i className="uil uil-music"></i> Music</li>
                    <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'video' ? 'active' : ''}`} onClick={()=>matchCategory('video')}><i className="uil uil-camera-plus"></i> Video</li>
                    <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'memes' ? 'active' : ''}`} onClick={()=>matchCategory('memes')}><i className="uil uil-rocket"></i> Memes</li>
                </ul>
            </div>
        </div>
    </div>

    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4" id="grid">        {filterData.slice(0,8).map((item,index)=>{
            return(
                <div className="col picture-item" data-groups='["games"]' key={index}>
                    <div className="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                        <div className="nft-image position-relative overflow-hidden">
                            <img src={item.product} className="img-fluid" alt=""/>
                            <div className="position-absolute top-0 end-0 m-2">
                                <LikeButton 
                                    itemId={item.id}
                                    itemData={{
                                        id: item.id,
                                        title: item.name,
                                        price: item.price,
                                        image: item.product,
                                        creator: 'Creator',
                                        category: item.category
                                    }}
                                />
                            </div>

                            <div className="bid-btn">
                                <Link to={`/item-detail-one/${item.id}`} className="btn btn-pills"><i className="mdi mdi-gavel fs-5 align-middle me-1"></i> Bid</Link>
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
                            </div>

                            <div className="mt-2">
                                <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">Deep Sea Phantasy</Link>

                                <div className="d-flex justify-content-between mt-2">
                                    <small className="rate fw-bold">20.5 ETH</small>
                                    <small className="text-dark fw-bold">1 out of 10</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>

    <div className="row justify-content-center">
        <div className="col">
            <div className="text-center d-block d-md-none mt-4">
                <Link to="/explore-one" className="btn btn-link primary text-dark">See More <i className="uil uil-arrow-right"></i></Link>
            </div>
        </div>
    </div>
    </>
  )
}
