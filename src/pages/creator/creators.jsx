import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import bg1 from '../../assets/images/bg/01.jpg'

import { createrData } from '../../data/data'

export default function Creators() {
  return (
    <>
    <Navbar navlight={true}/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'bottom'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark">Creators</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">All Featured Creators</p>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Superex</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Creators</li>
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
          <div className="row row-cols-lg-4 row-cols-md-3 row-cols-sm-2 row-cols-1 g-4 justify-content-center">
            {createrData.map((item,index) =>{
              return(
                  <div className="col" key={index}>
                      <div className="card creators creators-two creator-primary rounded-md shadow overflow-hidden">
                          <div className="py-5" style={{backgroundImage:`url('${item.bgImage}')`}}></div>
                          <div className="position-relative mt-n5">
                              <img src={item.image} className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block" alt=""/>
                              
                              <div className="content text-center pt-2 p-4">
                                  <Link to="/creator-profile" className="text-dark h6 name d-block mb-0">{item.name}</Link>
                                  <small className="text-muted">{item.title}</small>

                                  <div className="mt-3">
                                      <Link to="#" className="btn btn-pills btn-soft-primary">Follow</Link>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>

          <div className="row">
              <div className="col-12 mt-4 pt-2">
                  <ul className="pagination justify-content-center mb-0">
                      <li className="page-item">
                          <Link className="page-link" to="#" aria-label="Previous">
                              <span aria-hidden="true"><i className="uil uil-arrow-left fs-5"></i></span>
                          </Link>
                      </li>
                      <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                      <li className="page-item active"><Link className="page-link" to="#">2</Link></li>
                      <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                      <li className="page-item">
                          <Link className="page-link" to="#" aria-label="Next">
                              <span aria-hidden="true"><i className="uil uil-arrow-right fs-5"></i></span>
                          </Link>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
