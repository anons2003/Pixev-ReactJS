import React from 'react'
import Navbar from '../../components/navbar'

import bg1 from '../../assets/images/bg/02.jpg'
import { Link } from 'react-router-dom'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footer'

export default function HelpcenterSupportRequest() {
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'center'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark mb-0">Submit your Support Request</h5>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                      <li className="breadcrumb-item"><Link to="/helpcenter-overview">Help Center</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Support</li>
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
              <div className="col-lg-7 col-12">
                  <div className="rounded p-4 shadow">
                      <div className="row">
                          <div className="col-12">
                              <form>
                                  <div className="row">
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                              <input name="name" id="name" type="text" className="form-control" placeholder="First Name :" required/>
                                          </div>
                                      </div>
                                      <div className="col-md-6">
                                          <div className="mb-3">
                                              <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                              <input name="email" id="email" type="email" className="form-control" placeholder="Your email :" required/>
                                          </div> 
                                      </div>
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label className="form-label">Subject</label>
                                              <input name="subject" id="subject" className="form-control" placeholder="Your subject :" required/>
                                          </div>
                                      </div>
                                      <div className="col-md-12">
                                          <div className="mb-3">
                                              <label className="form-label">Comments</label>
                                              <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Your Message :"></textarea>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="row">
                                      <div className="col-sm-12">
                                          <input type="submit" id="submit" name="send" className="btn btn-primary" value="Send Request"/>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>
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
