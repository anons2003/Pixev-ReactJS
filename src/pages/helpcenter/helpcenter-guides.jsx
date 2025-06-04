import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import ContactUs from '../../components/contact-us'
import Footer from '../../components/footer'

import bg1 from '../../assets/images/bg/02.jpg'

import { guidenceData } from '../../data/data'

export default function HelpcenterGuides() {
  return (
    <>
    <Navbar navlight={true}/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'center'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark">NFTs Guidance</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">Please check How to buy & Sell NFTs?</p>
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
          <div className="row">
            {
              guidenceData.map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 col-12 mt-4 pt-2" key={index}>
                      <h5>{item.title}</h5>
                      <ul className="list-unstyled mt-4 mb-0">
                        {
                          item.subtitle.map((el,index)=>{
                            return(
                              <li className="mt-2 ms-0" key={index}><Link to="#" className="text-muted"><i className="mdi mdi-arrow-right text-primary me-2"></i>{el}</Link></li>
                            )
                          })
                        }
                      </ul>
                    </div>
                )
              })
            }
          </div>
      </div>

      <ContactUs/>
    </section>
    <Footer/>
    </>
  )
}
