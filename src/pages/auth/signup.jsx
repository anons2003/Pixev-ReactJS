import React from 'react'
import { Link } from 'react-router-dom'

import logopixel from '../../assets/images/logopixel.svg'
import BackToHome from '../../components/back-to-home'

export default function Signup() {
  return (
   <>
    <section className="position-relative">
      <div className="bg-video-wrapper">
          <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0" title='pixev'></iframe>
      </div>
      <div className="bg-overlay bg-linear-gradient-2"></div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 p-0">
                  <div className="d-flex flex-column min-vh-100 p-4">
                      <div className="text-center">
                          <Link to="/"><img src={logopixel} alt=""/></Link>
                      </div>

                      <div className="title-heading text-center my-auto">
                          <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                              <form>
                                  <h5 className="mb-4">Register Your Account</h5>
                      
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="form-floating mb-2">
                                              <input type="text" className="form-control" id="RegisterName" placeholder="Harry" required/>
                                              <label htmlFor="RegisterName">First Name</label>
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="form-floating mb-2">
                                              <input type="email" className="form-control" id="RegisterEmail" placeholder="name@example.com" required/>
                                              <label htmlFor="RegisterEmail">Email Address</label>
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="form-floating mb-3">
                                              <input type="password" className="form-control" id="RegisterPassword" placeholder="Password" required/>
                                              <label htmlFor="RegisterPassword">Password</label>
                                          </div>
                                      </div>
                                  
                                      <div className="col-lg-12">
                                          <div className="form-check align-items-center d-flex mb-3">
                                              <input className="form-check-input mt-0" type="checkbox" value="" id="AcceptT&C"/>
                                              <label className="form-check-label text-muted ms-2" htmlFor="AcceptT&C">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                                          </div>
                                      </div>
                      
                                      <div className="col-lg-12">
                                          <button className="btn btn-primary rounded-md w-100" type="submit">Register</button>
                                      </div>

                                      <div className="col-12 text-center mt-4">
                                          <small><span className="text-muted me-2">Already have an account ? </span> <Link to="/login" className="text-dark fw-bold">Sign in</Link></small>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>

                      <div className="text-center">
                          <small className="mb-0 text-light title-dark">© {new Date().getFullYear()} Pixev. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://www.facebook.com/suunhi.6623" target="_blank" className="text-reset">Pixev</Link>.</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <BackToHome/>
   </>
  )
}
