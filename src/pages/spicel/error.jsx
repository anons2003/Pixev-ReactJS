import React from 'react'
import { Link } from 'react-router-dom'
import logopixel from '../../assets/images/logopixel.svg'

import error from '../../assets/images/error.png'
import BackToHome from '../../components/back-to-home'

export default function Error() {
  return (
    <>
    <section className="position-relative bg-soft-primary">
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 p-0">
                  <div className="d-flex flex-column min-vh-100 p-4">
                      <div className="text-center">                          <Link to="/">
                            <img src={logopixel} className="error-dark" alt=""/>
                            <img src={logopixel} className="error-light" alt=""/>
                            </Link>
                      </div>

                      <div className="title-heading text-center my-auto">
                          <img src={error} className="img-fluid" alt=""/>
                          <h1 className="heading sub-heading mb-3 mt-5 text-dark">Page Not Found?</h1>
                          <p className="text-muted">Whoops, this is embarassing. <br/> Looks like the page you were looking for wasn't found.</p>
                          
                          <div className="mt-4">
                              <Link to="/" className="back-button btn btn-primary">Back to Home</Link>
                          </div>
                      </div>

                      <div className="text-center">
                          <small className="mb-0 text-muted">© {new Date().getFullYear()} Pixev. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://www.facebook.com/suunhi.6623" target="_blank" className="text-reset">Pixev</Link>.</small>
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
