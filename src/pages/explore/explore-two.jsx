import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/images/bg/01.jpg'

import Navbar from '../../components/navbar'
import Subscription from '../../components/subscription'
import Footer from '../../components/footer'

import { resourceData } from '../../data/data'

import Select from 'react-select';

export default function ExploreTwo() {
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
  const product = [
    { value: '3', label: 'Premium Resources' },
    { value: '1', label: 'Most Popular' },
    { value: '2', label: 'Recently Added' },
  ]
  const product2 = [
    { value: '1', label: 'Templates' },
    { value: '2', label: 'Graphics' },
    { value: '3', label: 'Photos' },
    { value: '4', label: 'Fonts' },
  ]
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">Digital Resources</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Explore premium digital resources and templates</p>
                    </div>
                </div>
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
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="features-absolute">
                        <div className="row justify-content-center" id="reserve-form">
                            <div className="col-xl-10 mt-lg-5">
                                <div className="card bg-white feature-top border-0 shadow rounded p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="row g-lg-0">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="filter-search-form position-relative filter-border">
                                                        <i className="uil uil-search icons"></i>
                                                        <input name="name" type="text" id="search-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search resources..."/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                                    <div className="filter-search-form bg-light position-relative filter-border">
                                                        <i className="uil uil-usd-circle icons"></i>
                                                        <Select options={product} />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                                    <div className="filter-search-form bg-light position-relative filter-border">
                                                        <i className="uil uil-window icons"></i>
                                                        <Select options={product2} />
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                                    <input type="submit" id="search" name="search" style={{height:'60px'}} className="btn btn-primary rounded-md searchbtn submit-btn w-100" value="Search"/>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1">
              {productData.map((item,index)=>{
                return(
                    <div className="col mt-4 pt-2" key={index}>
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
                            </div>                            <div className="position-absolute top-0 end-0 m-2">
                                <Link to={`/item-detail-one/${item.id}`} className="btn btn-pills btn-primary btn-sm">Premium</Link>
                            </div>
                            {item.showDate && (
                                <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                                    <i className="uil uil-clock"></i> <small id="auction-item-1" className="fw-bold">{item.remaining?.days + " : " + item.remaining?.hours + " : " + item.remaining?.minutes + " : " + item.remaining?.seconds}</small>
                                </div>
                            )}
                        </div>

                        <div className="card-body content position-relative p-0 mt-3">
                            <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>                            <div className="d-flex justify-content-between mt-2">
                                <small className="rate fw-bold">Premium</small>
                                <small className="text-dark fw-bold">{item.category}</small>
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
