import React from 'react'
import { Link } from 'react-router-dom'
import { blogData } from '../data/data'

export default function Blog() {
  return (
    <>
    <div className="row justify-content-center">
        <div className="col">
            <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Latest Blogs</h4>
                <p className="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great artists of all Superex with their fans and unique token collectors!</p>
            </div>
        </div>
    </div>

    <div className="row g-4">
        {blogData.slice(0,3).map((item,index)=>{
            return(
                <div className="col-lg-4 col-md-6" key={index}>
                    <div className="card blog blog-primary shadow rounded-md overflow-hidden">
                        <div className="position-relative">
                            <img src={item.image} className="img-fluid rounded-md" alt=""/>
                            <div className="position-absolute top-0 end-0 m-3">
                                <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                            </div>
                        </div>
                        <div className="card-body position-relative p-4">
                            <Link to="" className="badge tag gradient rounded-md fw-bold">{item.tag}</Link>

                            <ul className="list-unstyled mt-2">
                                <li className="list-inline-item text-muted small me-3"><i className="uil uil-calendar-alt text-dark h6 me-1"></i>{item.date}</li>
                                <li className="list-inline-item text-muted small"><i className="uil uil-clock text-dark h6 me-1"></i>5 min read</li>
                            </ul>
                            <Link to="/blog-detail" className="text-dark title h5 mt-3">{item.title}</Link>
                            
                            <div className="mt-3 d-flex justify-content-between align-items-center">
                                <Link to="/blog-detail" className="btn btn-link text-muted">Read more<i className="uil uil-arrow-right fs-5"></i></Link>
                                <span className="text-muted fs-6">by <Link to="/creator-profile" className="link">{item.auther}</Link></span>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}
