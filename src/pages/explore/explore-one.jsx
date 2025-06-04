import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/images/bg/01.jpg'

import Navbar from '../../components/navbar'
import Subscription from '../../components/subscription'
import Footer from '../../components/footer'

import { resourceData } from '../../data/data'

export default function ExploreOne() {
  let [selectedCategory, setSelectedCategory] = useState(null)

  const filteredData = selectedCategory ? resourceData.filter((item)=>item.category === selectedCategory) : resourceData

  const matchCategory = (category) => {
    setSelectedCategory(category)
  }
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">Resource Library</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Explore premium digital resources for your creative projects</p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Explore</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div className="position-relative">            
        <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section">
        <div className="container">
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

            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 g-4" id="grid">
              {filteredData.map((item,index)=>{
                return(
                    <div className="col picture-item" key={index}>
                        <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                            <div className="nft-image position-relative overflow-hidden">
                                <img src={item.product} className="img-fluid" alt=""/>
                                <div className="position-absolute top-0 end-0 m-2">
                                    <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                                </div>                                <div className="bid-btn">
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
