import React from 'react'
import Navbar from '../components/navbar'
import bg1 from '../assets/images/bg/01.jpg'
import { Link } from 'react-router-dom'
import { collectionData } from '../data/data'
import Footer from '../components/footer'
export default function Collections() {
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'bottom'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark">Collections</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">Explore the latest NFTs digital product</p>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Collections</li>
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
          <div className="row g-4">
            {collectionData.map((item,index)=>{
              return(
                <div className="col-lg-4 col-md-6" key={index}>
                    <div className="card collections collection-primary rounded-md shadow p-2 pb-0">
                        <div className="row g-2">
                            <div className="col-12">
                                <img src={item.image1} className="img-fluid shadow-sm rounded-md" alt=""/>
                            </div>

                            <div className="col-4">
                                <img src={item.image2} className="img-fluid shadow-sm rounded-md" alt=""/>
                            </div>

                            <div className="col-4">
                                <img src={item.image3} className="img-fluid shadow-sm rounded-md" alt=""/>
                            </div>

                            <div className="col-4">
                                <img src={item.image4} className="img-fluid shadow-sm rounded-md" alt=""/>
                            </div>
                        </div>

                        <div className="content text-center p-4 mt-n5">
                            <div className="position-relative d-inline-flex">
                                <img src={item.client} className="avatar avatar-small rounded-pill img-thumbnail shadow-md" alt=""/>
                                <span className="verified text-primary">
                                    <i className="mdi mdi-check-decagram"></i>
                                </span>
                            </div>
                            
                            <div className="mt-2">
                                <Link to="/explore-four" className="text-dark title h5">{item.name}</Link>
                                
                                <p className="text-muted mb-0 small">{item.item}</p>
                            </div>
                        </div>
                    </div>
                </div>
              )
            })}
          </div>
      </div>
    </section>
    <Footer/>
    </>
  )
}
