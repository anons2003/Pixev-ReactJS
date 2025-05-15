import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import bg1 from '../assets/images/bg/01.jpg'

import { activityData, activityFilter } from '../data/data'

export default function Activity() {
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">Activity</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Please check all digital activities</p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Superex</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">FAQS</li>
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
                <div className="col-lg-7 col-md-7">
                    <div className="me-lg-4">
                        <div className="row g-4">
                            {activityData.map((item,index)=>{
                                return(
                                    <div className="col-12" key={index}>
                                        <div className="card activity activity-primary rounded-md shadow p-4">
                                            <div className="d-flex align-items-center">
                                                <div className="position-relative">
                                                    <img src={item.image} className="avatar avatar-md-md rounded-md shadow-md" alt=""/>
        
                                                    <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                                        <i className={item.icon}></i>
                                                    </div>
                                                </div>
                                                    
                                                <span className="content ms-3">
                                                    <Link to="#" className="text-dark title mb-0 h6 d-block">{item.title}</Link>
                                                    <small className="text-muted d-block mt-1">{item.name}<Link to="#" className="link fw-bold">{item.name2}</Link></small>
                                                    
                                                    <small className="text-muted d-block mt-1">{item.time}</small>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                        <div className="row">
                            <div className="col-12 text-center mt-4">
                                <Link to="#" className="btn btn-link primary text-dark">Load More <i className="uil uil-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-5 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="sticky-bar">
                        <h5 className="mb-0">Filters</h5>
                        <div className="p-4 rounded-md shadow mt-4">
                            <div className="tagcloud">
                                {activityFilter.map((item,index)=>{
                                    return(
                                        <Link to="#" className="d-inline-flex align-items-center rounded-md text-capitalize" key={index}><i className={item.icon}></i> {item.title}</Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}
