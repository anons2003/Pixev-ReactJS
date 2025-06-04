import React from 'react'
import { Link } from 'react-router-dom'

import BackToHome from '../../components/back-to-home'

import bg1 from '../../assets/images/bg/03.jpg'
import logopixel from '../../assets/images/logopixel.svg'

export default function Comingsoon() {
  return (
    <>
      <section className="position-relative zoom-image">
        <div className="bg-overlay image-wrap" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}></div>
        <div className="bg-overlay"></div>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 p-0">
                    <div className="d-flex flex-column min-vh-100 p-4">
                        <div className="text-center">
                            <Link to="/"><img src={logopixel} alt=""/></Link>
                        </div>

                        <div className="title-heading text-center my-auto">
                            <h4 className="coming-soon fw-bold display-5 text-white title-dark text-uppercase">Coming Soon</h4>
                            <p className="text-white title-dark para-desc mx-auto mb-0">Our design projects are fresh and simple and will benefit your business greatly. Learn more about our work!</p>
        
                            <div className="subcribe-form mt-4 pt-2">
                                <form>
                                    <input type="email" id="email" className="bg-white opacity-6 rounded shadow" required placeholder="Type your Email.."/>
                                    <button type="submit" className="btn btn-primary" style={{top:'2.5px'}}>Notify Me</button>
                                </form>
                            </div>
        
                            <p className="text-white title-dark mt-2"><span className="text-danger fw-bold">*</span>Notify me when website is launched</p>
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
