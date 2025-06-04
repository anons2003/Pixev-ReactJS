import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/images/bg/01.jpg'

import Navbar from '../../components/navbar'
import Subscription from '../../components/subscription'
import Footer from '../../components/footer'

import { resourceData } from '../../data/data'

export default function ExploreFour() {
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
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="sticky-bar">
                        <h5 className="mb-0">Resource Filters</h5>
                        <div className="p-4 rounded-md shadow mt-4">
                            <div>
                                <h6>Orders By:</h6>
                                <form>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="NewOrder"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="NewOrder">Newest</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="TrendOrder"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="TrendOrder">Trending</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="OldOrder"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="OldOrder">Oldest</label>
                                    </div>
                                </form>
                            </div>
                              <div className="mt-4">
                                <h6>Catagories By:</h6>
                                <form>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="TemplatesCatagory"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="TemplatesCatagory">Templates</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="GraphicsCatagory"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="GraphicsCatagory">Graphics</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="PhotosCatagory"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="PhotosCatagory">Photos</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="FontsCatagory"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="FontsCatagory">Fonts</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="UIKitsCatagory"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="UIKitsCatagory">UI Kits</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="AudioCatagory"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="AudioCatagory">Audio</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="VideoCatagory"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="VideoCatagory">Video</label>
                                    </div>
                                </form>
                            </div>

                            <div className="mt-4">
                                <h6>Authors By:</h6>
                                <form>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="AllAuthors"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="AllAuthors">All Authors</label>
                                    </div>
                                    <div className="form-check align-items-center d-flex mb-0">
                                        <input className="form-check-input" type="checkbox" value="" id="VerifyAuthors"/>
                                        <label className="form-check-label fw-bold ms-2" htmlFor="VerifyAuthors">Verified Authors</label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-9 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                    <div className="row row-cols-xl-3 row-cols-lg-2 row-cols-1">
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
                                  </div>                                  <div className="position-absolute top-0 end-0 m-2">
                                      <Link to={`/item-detail-one/${item.id}`} className="btn btn-pills btn-primary btn-sm">Premium</Link>
                                  </div>
                                  {item.showDate && (
                                      <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                                          <i className="uil uil-clock"></i> <small id="auction-item-1" className="fw-bold">{item.remaining?.days + " : " + item.remaining?.hours + " : " + item.remaining?.minutes + " : " + item.remaining?.seconds}</small>
                                      </div>
                                  )}
                              </div>

                              <div className="card-body content position-relative p-0 mt-3">
                                  <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>                                  <div className="d-flex justify-content-between mt-2">
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
            </div>
        </div>
    </section>
    <Subscription/>
    <Footer/>
    </>
  )
}
