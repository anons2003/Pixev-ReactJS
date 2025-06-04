import React from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/images/bg/bg02.png'

import Navbar from '../../components/navbar'
import CreaterThree from '../../components/creater/creater-three'
import ProductThree from '../../components/product/product-three'
import LiveAuctionTwo from '../../components/live-auction-two'
import Blog from '../../components/blog'
import Footer from '../../components/footer'

import Services from '../../components/services'

export default function IndexThree() {
  return (
    <>
    <Navbar navlight={true}/>

    <section className="bg-half-260 d-flex align-items-center bg-dark" style={{backgroundPosition:'top center', backgroundImage:`url('${bg1}')`}}>
      <div className="container z-index-1">
          <div className="background-lines">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
          </div>
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h4 className="heading text-white mb-4 title-dark fw-bold">The Biggest <br/> Collections of Digital Resources</h4>
                      <p className="text-white title-dark mb-0 para-desc mx-auto">We are a huge marketplace dedicated to connecting great artists of all Pixev with their fans and unique token collectors!</p>
                  
                      <div className="mt-4 pt-2">
                          <Link to="/aboutus" className="btn btn-primary rounded-md">Discover Now</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>

    <section className="section">
      <div className="container">
          <Services/>
      </div>
      
      <div className="container mt-100 mt-60">
          <CreaterThree/>
      </div>

      <div className="container mt-100 mt-60">
          <ProductThree/>
      </div>
      
      <div className="container mt-100 mt-60">
          <div className="row">
              <div className="col">
                  <div className="section-two rounded-md shadow bg-gradient-primary px-md-5 px-4">
                      <div className="row align-items-end">
                          <div className="col-md-8">
                              <div className="section-title text-md-start text-center">
                                  <h6 className="text-white-50 mb-1">Join with Pixev Community</h6>
                                  <h4 className="title text-white title-dark mb-4">Become a Creator!</h4>

                                  <p className="text-white-50 para-desc mb-0">We are a huge marketplace dedicated to connecting great artists of all Pixev with their fans and unique token collectors!</p>
                              </div>
                          </div>

                          <div className="col-md-4 mt-4 pt-2 mt-sm-0 pt-sm-0">
                              <div className="text-md-end text-center">
                                  <Link to="/become-creator" className="btn btn-primary rounded-md">Click here <i className="uil uil-arrow-right"></i></Link>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
            <LiveAuctionTwo/>
      </div>

      <div className="container mt-100 mt-60">
            <Blog/>
      </div>
    </section>
    <Footer/>
    </>
  )
}
