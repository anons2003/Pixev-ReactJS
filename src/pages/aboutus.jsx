import React from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../assets/images/bg/01.jpg'
import about from '../assets/images/about.jpg'

import Navbar from '../components/navbar'
import Blog from '../components/blog'

import CountUp from 'react-countup';
import { teamData } from '../data/data';
import Footer from '../components/footer';

export default function Aboutus() {
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">Meet Pixev</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Digital resources marketplace where creativity meets quality and all professionals are welcome</p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">ABOUT US</li>
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
          <div className="row align-items-center">
              <div className="col-lg-5 col-md-6">
                  <div className="about-image position-relative">
                      <img src={about} className="img-fluid rounded shadow" alt=""/>
                  </div>
              </div>


              <div className="col-lg-7 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="section-title ms-lg-5">
                      <h6 className="text-primary fw-normal">Creative Vision & Mission</h6>
                      <h4 className="title mb-4">We develop & create <br/> digital art.</h4>
                      <p className="text-muted">Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap html page.</p>
                      <p className="text-muted mb-0">It seems that only fragments of the original text remain in the Lorem Ipsum texts used today. One may speculate that over the course of time certain letters were added or deleted at various positions within the text. This might also explain why one can now find slightly different versions.</p>
                  
                      <div className="mt-4 pt-2">
                          <Link to="#" className="btn btn-primary rounded-md">Read More <i className="uil uil-arrow-right"></i></Link>
                      </div>
                  </div>
              </div>

          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-lg-9">
                  <div className="row">
                      <div className="col-md-4 col-6">
                          <div className="counter-box position-relative text-center">
                              <h4 className="mb-0 display-5 fw-bold title-dark mt-2">$<CountUp className="counter-value" start={0} end={40}/>M</h4>
                              <span className="counter-head fw-semibold text-muted title-dark">Trading volume</span>
                          </div>
                      </div>                      <div className="col-md-4 col-6">
                          <div className="counter-box position-relative text-center">
                              <h4 className="mb-0 display-5 fw-bold title-dark mt-2"><CountUp className="counter-value" start={0} end={200}/></h4>
                              <span className="counter-head fw-semibold text-muted title-dark">Resources created</span>
                          </div>
                      </div>

  
                      <div className="col-md-4 col-6">
                          <div className="counter-box position-relative text-center">
                              <h4 className="mb-0 display-5 fw-bold title-dark mt-2"><CountUp className="counter-value" start={0} end={234}/>K</h4>
                              <span className="counter-head fw-semibold text-muted title-dark">Total users</span>
                          </div>
                      </div>

                  </div>
              </div>

          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="title mb-4">Our Team</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great artists of all Pixev with their fans and unique token collectors!</p>
                  </div>
              </div>

          </div>

          <div className="row">
            {teamData.map((item,index) =>{
              return(
                <div className="col-lg-3 col-md-4 col-12 mt-4 pt-2" key={index}>
                    <div className="card team team-primary text-center">
                        <div className="card-img team-image d-inline-block mx-auto rounded-pill shadow avatar avatar-ex-large overflow-hidden">
                            <img src={item.image} className="img-fluid" alt=""/>
                            <div className="card-overlay avatar avatar-ex-large rounded-pill"></div>

                            <ul className="list-unstyled team-social mb-0">
                                <li className="list-inline-item"><Link to="" className="btn btn-sm btn-pills btn-icon"><i className="uil uil-facebook-f fs-6"></i></Link></li>
                                <li className="list-inline-item"><Link to="" className="btn btn-sm btn-pills btn-icon"><i className="uil uil-instagram fs-6"></i></Link></li>
                                <li className="list-inline-item"><Link to="" className="btn btn-sm btn-pills btn-icon"><i className="uil uil-twitter-alt fs-6"></i></Link></li>
                            </ul>
                        </div>

                        <div className="content mt-3">
                            <Link to="" className="text-dark h6 mb-0 title d-block">{item.name}</Link>
                            <small className="text-muted mb-0 fw-normal">{item.possition}</small>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <Blog/>
      </div>
    </section>
    <Footer/>
    </>
  )
}
