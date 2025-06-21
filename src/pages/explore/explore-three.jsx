import React from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/images/bg/01.jpg'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import Navbar from '../../components/navbar'
import Subscription from '../../components/subscription'
import Footer from '../../components/footer'

import { resourceData } from '../../data/data'
import LikeButton from '../../components/LikeButton'

export default function ExploreThree() {
  const settings = {
    container: '.tiny-four-item-nav-arrow',
    controls: true,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
    nav: false,
    speed: 400,
    gutter: 12,
    responsive: {
        992: {
            items: 4
        },

        767: {
            items: 2
        },

        320: {
            items: 1
        },
    },
  };
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
                <div className="col-12">
                    <div className="tiny-four-item-nav-arrow">
                      <TinySlider settings={settings}>                        {resourceData.map((item,index)=>{
                          return(
                              <div className="tiny-slide" key={index}>
                                  <div className="card nft-items nft-primary rounded-md shadow overflow-hidden m-1">
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
                                              <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>                                              <div className="d-flex justify-content-between mt-2">
                                                  <small className="rate fw-bold">Premium</small>
                                                  <small className="text-dark fw-bold">{item.category}</small>
                                              </div>

                                              <div className="text-end mt-3">
                                                  <Link to={`/item-detail-one/${item.id}`} className="btn btn-sm rounded-md btn-primary">Premium</Link>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          )
                        })}
                      </TinySlider>
                    </div>
                </div>
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
