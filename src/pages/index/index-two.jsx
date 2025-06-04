import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import ProductTwo from '../../components/product/product-two';
import CreaterTwo from '../../components/creater/creater-two';
import PopularCollection from '../../components/popular-collection';
import Footer from '../../components/footer';

import { resourceData } from '../../data/data'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function IndexTwo() {
  
  const settings = {
    container: '.tiny-five-item',
    controls: false,
    mouseDrag: true,
    loop: true,
    rewind: true,
    autoplay: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 3000,
    navPosition: "bottom",
    speed: 400,
    gutter: 12,
    responsive: {
        1025: {
            items: 5
        },

        992: {
            items: 3
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
    <div className="round-effect">
        <div className="primary-round opacity-3"></div>
        <div className="gradient-round opacity-3"></div>
    </div>
    <Navbar/>
      <section className="bg-half-174">
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <div className="tiny-five-item">
                      <TinySlider settings={settings}>
                        {resourceData.slice(0,8).map((item,index)=>{
                          return(
                            <div className="tiny-slide" key={index}>
                              <div className="card bg-white nft-items nft-primary rounded-md shadow-md overflow-hidden mx-2 my-3">
                                  <div className="nft-image position-relative overflow-hidden">
                                      <Link to={`/item-detail-one/${item.id}`}><img src={item.product} className="img-fluid" alt=""/></Link>
                                      <div className="position-absolute top-0 start-0 m-3">
                                          <Link to="#" className="badge badge-link bg-primary">{item.tag}</Link>
                                      </div>
                                      <div className="position-absolute top-0 end-0 m-3">
                                          <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                                      </div>                                
                                  </div>
      
                                  <div className="card-body content position-relative">
                                      <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>
      
                                      <div className="d-flex align-items-center justify-content-between mt-3">
                                          <div className="">
                                              <small className="mb-0 d-block fw-semibold">Current Bid:</small>
                                              <small className="rate fw-bold">{item.value}</small>
                                          </div>
                                          <Link to={`/item-detail-one/${item.id}`} className="btn btn-icon btn-pills btn-primary"><i className="uil uil-shopping-bag"></i></Link>
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
        </div>
        
        <div className="container mt-100 mt-60">
            <ProductTwo/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-12">
                    <div className="section-title">
                        <h4 className="title mb-2">Best Creators & Sellers</h4>
                        <p className="text-muted mb-0">Best sellers of the week's digital resources</p>
                    </div>
                </div>
            </div>

            <CreaterTwo/>
        </div>

        <div className="container mt-100 mt-60">
            <PopularCollection/>
        </div>
      </section>
      <Footer/>
    </>
  )
}
