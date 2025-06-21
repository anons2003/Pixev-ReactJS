import React from 'react'
import { Link } from 'react-router-dom'

import bg1 from '../../assets/images/bg/02.jpg'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'
import LikeButton from '../../components/LikeButton'

import { blogData } from '../../data/data';

export default function Blogs() {
  return (
    <>

    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">Blog & News</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Our Latest Blog and News in Grid Layouts</p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Blogs</li>
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
        <div className="container">            <div className="row g-4">
                {blogData.map((item,index)=>(
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                                <div className="position-relative">
                                    <img src={item.image} className="img-fluid rounded-md" alt=""/>
                                    <div className="position-absolute top-0 end-0 m-3">
                                        <LikeButton 
                                            itemId={item.id}
                                            itemData={{
                                                id: item.id,
                                                title: item.title,
                                                price: 'Free',
                                                image: item.image,
                                                creator: item.author,
                                                category: item.tag
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="card-body position-relative p-4">
                                    <Link to="" className="badge tag gradient rounded-md fw-bold">{item.tag}</Link>

                                    <ul className="list-unstyled mt-2">
                                        <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>{item.date}</li>
                                        <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                                    </ul>
                                    <Link to={`/blog-detail/${item.id}`} className="text-dark title h5 mt-3">{item.title}</Link>
                                    
                                    <div className="mt-3 d-flex justify-content-between align-items-center">
                                        <Link to={`/blog-detail/${item.id}`} className="btn btn-link text-muted">Read more <i className="mdi mdi-arrow-right"></i></Link>
                                        <span className="text-muted fs-6">by <Link to="/creator-profile" className="link">{item.auther}</Link></span>                                    </div>
                                </div>
                            </div>
                        </div>
                ))}
            </div>
    
            <div className="row">
                <div className="col mt-4">
                    <div className="text-center">
                        <Link to="#" className="btn btn-primary rounded-md">Load More <i className="uil uil-process mdi-spin ms-1"></i></Link>
                    </div>
                </div>
            </div>
        </div>
    </section>
   <Footer/>     
    </>
  )
}
