import React from 'react'
import { Link } from "react-scroll";

import Navbar from '../../components/navbar'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footer';
import Accordion from '../../components/accordion'

import bg1 from '../../assets/images/bg/02.jpg'

export default function HelpcenterFaqs() {
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'center'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark">Frequently Asked Questions</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">Please check How it works in digital arts?</p>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                      <li className="breadcrumb-item"><Link to="/helpcenter-overview">Help Center</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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
          <div className="row justify-content-center">
              <div className="col-lg-4 col-md-5 col-12 d-none d-md-block">
                  <div className="rounded shadow p-4 sticky-bar">
                      <ul className="list-unstyled sidebar-nav mb-0 py-0" id="navmenu-nav">
                          <li className="navbar-item p-0"><Link to="getstart" spy={true} activeclassname="active" smooth={true} duration={500} className="h6 text-dark navbar-link">Getting started</Link></li>
                          <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="policy" className="h6 text-dark navbar-link">Safety, Security, and Policies</Link></li>
                          <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="use" className="h6 text-dark navbar-link">Using Pixev Digital Resources</Link></li>
                          <li className="navbar-item mt-3 p-0 ms-0"><Link spy={true} activeclassname="active" smooth={true} duration={500} to="support" className="h6 text-dark navbar-link">Support Questions</Link></li>
                      </ul>
                  </div>
              </div>

              <div className="col-lg-8 col-md-7 col-12">
                  <div className="section-title" id="getstart">
                      <h5 className='mb-4'>Getting started</h5>
                      <Accordion/>
                  </div>


                  <div className="section-title mt-5" id="policy">
                      <h5 className='mb-4'>Safety, Security, and Policies</h5>
                      <Accordion/>
                  </div>


                  <div className="section-title mt-5" id="use">
                      <h5 className='mb-4'>Using Pixev Digital Resources</h5>
                      <Accordion/>
                  </div>


                  <div className="section-title mt-5" id="support">
                      <h5 className='mb-4'>Support Questions</h5>
                      <Accordion/>
                  </div>

              </div>
          </div>
      </div>

      <ContactUs/>
    </section>
    <Footer/>
    </>
  )
}
