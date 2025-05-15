import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import CreaterTwo from '../../components/creater/creater-two'
import LiveAuctionTwo from '../../components/live-auction-two'
import Blog from '../../components/blog'
import Services from '../../components/services'
import Footer from '../../components/footer'

import { slideOne, slideTwo } from '../../data/data'

export default function IndexFive() {
  return (
    <>
    <Navbar/>
    <section className="bg-half-174">
      <div className="container-fluid">
          <div className="row">
              <div className="col-12">
                  <div className="slider">
                      <div className="slide-track">
                        {slideOne.map((item,index)=>{
                          return(
                            <div className="slide mx-2" key={index}>
                                <div className="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                                    <div className="nft-image position-relative overflow-hidden">
                                        <img src={item} className="img-fluid" alt=""/>
                                        <div className="bid-btn">
                                            <Link to="item-detail-one" className="btn btn-pills"><i className="mdi mdi-gavel fs-5 align-middle me-1"></i> Bid</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                          )
                        })}
                      </div>
                  </div>
              </div>

              <div className="col-12">
                  <div className="slider2">
                      <div className="slide-track">
                        {slideTwo.map((item,index)=>{
                          return(
                              <div className="slide mx-2" key={index}>
                                  <div className="card bg-white nft-items nft-margin-minus nft-primary rounded-md shadow overflow-hidden mb-3">
                                      <div className="nft-image position-relative overflow-hidden">
                                          <img src={item} className="img-fluid" alt=""/>
                                          <div className="bid-btn">
                                              <Link to="item-detail-one" className="btn btn-pills"><i className="mdi mdi-gavel fs-5 align-middle me-1"></i> Bid</Link>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          )
                        })}
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row">
          <div className="col-12">
              <div className="section-title">
                  <h4 className="title mb-2">Best Creators & Sellers</h4>
                  <p className="text-muted mb-0">Best sellers of the week's NFTs</p>
              </div>
          </div>
        </div>
        <CreaterTwo/>
      </div>

      <div className="container mt-100 mt-60">
          <LiveAuctionTwo/>
      </div>

      <div className="container mt-100 mt-60">
          <Blog/>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Create and sell your NFTs</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great artists of all Superex with their fans and unique token collectors!</p>
                  </div>
              </div>
          </div>
          <Services/>
      </div>
    </section>
    <Footer/>
    </>
  )
}
