import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import ContactUs from '../../components/contact-us'
import Accordion from '../../components/accordion'
import Footer from '../../components/footer'

import bg1 from '../../assets/images/bg/02.jpg'

import { helpcenterServices } from '../../data/data'

export default function HelpcenterOverview() {
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'center'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-lg-12 text-center">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark"> Hello! <br/> How can we help you? </h5>

                      <div className="subcribe-form mt-4 pt-2">
                          <form>
                              <div className="mb-0">
                                  <input type="text" id="help" name="name" className="border bg-white rounded-pill opacity-7" required="" placeholder="Search your questions or topic..."/>
                                  <button type="submit" className="btn btn-pills btn-primary">Search</button>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Superex</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Help Center</li>
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
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="mb-4 title">Find the help you need</h4>
                      <p className="para-desc mx-auto text-muted">We are a huge marketplace dedicated to connecting great artists of all Superex with their fans and unique token collectors!</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
            {
              helpcenterServices.map((item,index)=>{
                return(
                  <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                    <div className="card border-0 text-center features feature-primary feature-clean px-md-4">
                        <div className="icons text-center mx-auto">
                            <i className={`d-block rounded-md h3 mb-0 ${item.icon}`}></i>
                        </div>
                        <div className="content mt-4">
                            <Link to={item.link} className="title h5 text-dark">{item.title}</Link>
                            <p className="text-muted mt-3 mb-0">{item.desc}</p>
                        </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center mb-4 pb-2">
                      <h4 className="mb-4">Get Started</h4>
                      <p className="para-desc mx-auto text-muted">We are a huge marketplace dedicated to connecting great artists of all Superex with their fans and unique token collectors!</p>
                  </div>
              </div>
          </div>

          <div className="row justify-content-center">
              <div className="col-lg-9 mt-4 pt-2">
                  <Accordion/>
              </div>
          </div>
      </div>

      <ContactUs/>
    </section>
    <Footer/>
    </>
  )
}
