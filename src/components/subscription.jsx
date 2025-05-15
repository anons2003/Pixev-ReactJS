import React from 'react'
import { Link } from 'react-router-dom'

import cta from '../assets/images/cta.png'

export default function Subscription() {
  return (
    <section className="section pt-0 pt-sm-5 mt-0 mt-sm-5">
        <div className="container">
            <div className="bg-black rounded-md p-md-5 p-4">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="app-subscribe text-center text-md-start">
                                <img src={cta} className="img-fluid" height="120" alt=""/>
                            </div>
                        </div>

                        <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                            <div className="section-title text-center text-md-start ms-xl-5 ms-md-4">
                                <h4 className="display-6 fw-bold text-white title-dark mb-0">Get <span className="text-gradient-primary fw-bold">Free collections </span> <br/> with your subscription</h4>
                            
                                <div className="mt-4">
                                    <Link to="" className="btn btn-link primary text-white title-dark">Subscribe Now <i className="uil uil-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
