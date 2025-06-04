import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { resourceData } from '../../data/data'

export default function ProductOne({filter}) {
    const [productData, setProductData] = useState(resourceData);
    
    useEffect(()=>{
        const interval = setTimeout(()=>{
            remainingDays()
        },100)
        return () => clearInterval(interval) 
    })

    const remainingDays = () => {
        const formattedData = resourceData.map((item) => ({
            ...item,
            remaining: calculateDays(item.date),
        }));
        setProductData(formattedData);
    }


    const calculateDays = (date) => {
        let startDate = new Date(date);
        let currentDate = new Date();
        const diff = startDate.getTime() - currentDate.getTime();

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { hours, minutes, seconds, days }
    }

    const [selectedCategory, setSelectedCategory] = useState(null);

    const filteredData = selectedCategory

    ? productData.filter((item) => item.category === selectedCategory)
    : productData;

    const matchCategory = (category) => {
        setSelectedCategory(category);
    };
  return (
    <>
    {filter === false ? "" : (
        <div className="row justify-content-center mt-4 mb-5">
            <div className="col filters-group-wrap">
                <div className="filters-group">
                    <ul className="container-filter mb-0 categories-filter text-center list-unstyled filter-options">
                        <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === null ? 'active' : ''}`} onClick={() => matchCategory(null)}><i className="uil uil-browser"></i> All</li>
                        <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'games' ? 'active' : ''}`} onClick={() => matchCategory('games')}><i className="uil uil-volleyball"></i> Games</li>
                        <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'art' ? 'active' : ''}`} onClick={() => matchCategory('art')}><i className="uil uil-chart-pie-alt"></i> Art</li>
                        <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'music' ? 'active' : ''}`} onClick={() => matchCategory('music')}><i className="uil uil-music"></i> Music</li>
                        <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'video' ? 'active' : ''}`} onClick={() => matchCategory('video')}><i className="uil uil-camera-plus"></i> Video</li>
                        <li className={`list-inline-item categories position-relative text-dark ${selectedCategory === 'memes' ? 'active' : ''}`} onClick={() => matchCategory('memes')}><i className="uil uil-rocket"></i> Memes</li>
                    </ul>
                </div>
            </div>
        </div>
    )}

    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4" id="grid">
        {filteredData.slice(0,12).map((item,index)=>{
            return(
                <div className="col picture-item" key={index}>
                    <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                        <div className="d-flex justify-content-between">
                            <div className="img-group">
                                <Link to="/creator-profile" className="user-avatar">
                                    <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                </Link>
                                <Link to="/creator-profile" className="user-avatar ms-n3">
                                    <img src={item.creater2} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                </Link>
                                <Link to="/creator-profile" className="user-avatar ms-n3">
                                    <img src={item.creater3} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                </Link>
                            </div>
                            
                            <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                        </div>

                        <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                            <Link to={`/item-detail-one/${item.id}`}><img src={item.product} className="img-fluid" alt=""/></Link>
                            <div className="position-absolute top-0 start-0 m-2">
                                <Link to="#" className="badge badge-link bg-primary">{item.tag}</Link>
                            </div>

                            <div className="position-absolute top-0 end-0 m-2">
                                <Link to={`/item-detail-one/${item.id}`} className="btn btn-pills btn-icon"><i className="uil uil-shopping-cart-alt"></i></Link>
                            </div>
                            {item.showDate && (
                                <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                                    <i className="uil uil-clock"></i> <small id="auction-item-1" className="fw-bold">{item.remaining?.days + " : " + item.remaining?.hours + " : " + item.remaining?.minutes + " : " + item.remaining?.seconds}</small>
                                </div>
                            )}
                        </div>

                        <div className="card-body content position-relative p-0 mt-3">
                            <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>

                            <div className="d-flex justify-content-between mt-2">
                                <small className="rate fw-bold">{item.value}</small>
                                <small className="text-dark fw-bold">1 out of 10</small>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>

    </>
  )
}
