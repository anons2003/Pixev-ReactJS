import React from 'react'
import { Link } from 'react-router-dom'

import logoWhite from '../../assets/images/logo-white.png'
import client from '../../assets/images/client/01.jpg'
import BackToHome from '../../components/back-to-home'

export default function LockScreen() {
  return (
    <>
    <section className="position-relative">
      <div className="bg-video-wrapper">
          <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0" title='superex'></iframe>
      </div>
      <div className="bg-overlay bg-linear-gradient-2"></div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 p-0">
                  <div className="d-flex flex-column min-vh-100 p-4">
                      <div className="text-center">
                          <Link to="/"><img src={logoWhite} alt=""/></Link>
                      </div>

                      <div className="title-heading text-center my-auto">
                          <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                              <form>
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="mb-3 text-center">
                                              <img src={client} className="avatar avatar-md-md rounded-pill mx-auto d-block shadow" alt=""/>

                                              <div className="mt-3">
                                                  <h5 className="mb-1">Calvin Carlo</h5>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="col-12">
                                          <div className="form-floating mb-3">
                                              <input type="password" className="form-control" id="LoginPassword" placeholder="Password" required/>
                                              <label for="LoginPassword">Password:</label>
                                          </div>
                                      </div>
                                  
                                      <div className="col-lg-12">
                                          <div className="d-flex justify-content-between">
                                              <div className="mb-3">
                                                  <div className="form-check align-items-center d-flex mb-0">
                                                      <input className="form-check-input mt-0" type="checkbox" value="" id="RememberMe" required/>
                                                      <label className="form-check-label text-muted ms-2" for="RememberMe">Remember me</label>
                                                  </div>
                                              </div>
                                              <small className="text-muted mb-0"><Link to="/reset-password" className="text-muted fw-semibold">Forgot password ?</Link></small>
                                          </div>
                                      </div>
                                      <div className="col-lg-12 mb-0">
                                          <div className="d-grid">
                                              <button className="btn btn-primary rounded-md">Login</button>
                                          </div>
                                      </div>
                                  </div>
                              </form>
                          </div>
                      </div>

                      <div className="text-center">
                          <small className="mb-0 text-light title-dark">© {new Date().getFullYear()} Superex. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Shreethemes</Link>.</small>
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
