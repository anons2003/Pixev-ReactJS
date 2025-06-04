import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'

import resourceImage from '../../assets/images/items/item-detail-1.jpg'
import clientImg from '../../assets/images/client/09.jpg'

import LiveAuctionTwo from '../../components/live-auction-two'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import { activityData, bidsData, resourceData } from '../../data/data'

import Modal from 'react-bootstrap/Modal';

export default function ItemDetailOne() {
    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let [activeTab, setActiveTab] = useState(1)
    let [show, setShow] = useState(false);
    let [show2, setShow2] = useState(false);
    const params = useParams()
    const id = params.id
    const data = resourceData.find((item) => item.id === parseInt(id))

    let deadline = "December, 31, 2024";
    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
      let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
    })

  return (
    <>
    <Navbar/>

    <section className="bg-item-detail d-table w-100">
      <div className="container">
          <div className="row">
              <div className="col-md-6">
                  <div className="sticky-bar">
                      <img src={data?.product ? data.product : resourceImage} className="img-fluid rounded-md shadow" alt=""/>
                  </div>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="ms-lg-5">
                      <div className="title-heading">
                          <h4 className="h3 fw-bold mb-0">Modern Web Design Template<br/> <span className="text-gradient-primary">Professional</span> <span className="text-gradient-primary">Responsive</span> Layout</h4>
                      </div>                      <div className="row">                          <div className="col-md-6 mt-4 pt-2">
                              <h6>Access Level</h6>
                              <div className="d-flex align-items-center">
                                  <span className="badge bg-soft-primary text-primary fs-6 me-2">Premium</span>
                                  <small className="text-muted">Subscription required</small>
                              </div>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <h6>File Formats</h6>
                              <h4 className="fw-bold mb-0">HTML, CSS, JS</h4>
                          </div>                          <div className="col-12 mt-4 pt-2">
                              <Link to="/pricing" className="btn btn-l btn-pills btn-primary me-2"><i className="mdi mdi-crown fs-5 me-2"></i> Get Premium Access</Link>
                              <Link to="#" className="btn btn-l btn-pills btn-outline-primary" onClick={()=>setShow(true)}><i className="mdi mdi-eye fs-5 me-2"></i> Preview</Link>
                          </div>
                          
                          <div className="col-12 mt-3">
                              <div className="alert alert-info">
                                  <i className="mdi mdi-information-outline me-2"></i>
                                  <strong>Premium subscribers</strong> get unlimited downloads of all resources with commercial licenses included.
                              </div>
                          </div>
                      </div>

                      <div className="row mt-4 pt-2">
                          <div className="col-12">
                              <ul className="nav nav-tabs border-bottom">
                                  <li className="nav-item">
                                      <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Details</button>
                                  </li>
                                    <li className="nav-item">
                                      <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>Reviews</button>
                                  </li>
      
                                  <li className="nav-item">
                                      <button className={`nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>Downloads</button>
                                  </li>
                              </ul>
      
                              <div className="tab-content mt-4 pt-2">                                {activeTab === 1 && (
                                  <div className="tab-pane fade show active">
                                      <p className="text-muted">Modern, responsive web design template perfect for businesses, portfolios, and creative agencies. Built with clean HTML5, CSS3, and JavaScript for optimal performance.</p>
                                      <p className="text-muted">What's included: Full HTML template with multiple pages, responsive CSS framework, JavaScript components, font files, and detailed documentation for easy customization.</p>
                                      
                                      <h6>Features:</h6>
                                      <ul className="list-unstyled text-muted">
                                          <li className="mb-1"><i className="uil uil-check-circle text-success me-2"></i>Fully Responsive Design</li>
                                          <li className="mb-1"><i className="uil uil-check-circle text-success me-2"></i>Clean & Modern Layout</li>
                                          <li className="mb-1"><i className="uil uil-check-circle text-success me-2"></i>Cross-browser Compatible</li>
                                          <li className="mb-1"><i className="uil uil-check-circle text-success me-2"></i>Easy to Customize</li>
                                          <li className="mb-1"><i className="uil uil-check-circle text-success me-2"></i>SEO Optimized</li>
                                      </ul>
                                      
                                      <h6>Author</h6>
      
                                      <div className="creators creator-primary d-flex align-items-center">
                                          <div className="position-relative">
                                              <img src={data?.creater1 ? data?.creater1 : clientImg} className="avatar avatar-md-sm shadow-md rounded-pill" alt=""/>
                                              <span className="verified text-primary">
                                                  <i className="mdi mdi-check-decagram"></i>
                                              </span>
                                          </div>
          
                                          <div className="ms-3">
                                              <h6 className="mb-0"><Link to="/creators" className="text-dark name">{data?.createrName ? data?.createrName :'WebDesigner'}</Link></h6>
                                              <small className="text-muted">Verified Designer</small>
                                          </div>
                                      </div>
                                  </div>
                                )}                                {activeTab === 2 && (
                                  <div className="tab-pane fade show active">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="d-flex me-3">
                                            <i className="mdi mdi-star text-warning"></i>
                                            <i className="mdi mdi-star text-warning"></i>
                                            <i className="mdi mdi-star text-warning"></i>
                                            <i className="mdi mdi-star text-warning"></i>
                                            <i className="mdi mdi-star text-warning"></i>
                                        </div>
                                        <span className="text-muted">4.9 (156 reviews)</span>
                                    </div>
                                    
                                    <div className="review-item mb-4 pb-4 border-bottom">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={clientImg} className="avatar avatar-md-sm rounded-pill me-3" alt=""/>
                                            <div>
                                                <h6 className="mb-0">Sarah Johnson</h6>
                                                <small className="text-muted">5 days ago</small>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="d-flex">
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-warning"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mb-0">Excellent template! Very clean code and easy to customize. Perfect for my client's website project.</p>
                                    </div>
                                    
                                    <div className="review-item mb-4">
                                        <div className="d-flex align-items-center mb-3">
                                            <img src={clientImg} className="avatar avatar-md-sm rounded-pill me-3" alt=""/>
                                            <div>
                                                <h6 className="mb-0">Mike Chen</h6>
                                                <small className="text-muted">1 week ago</small>
                                            </div>
                                            <div className="ms-auto">
                                                <div className="d-flex">
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-warning"></i>
                                                    <i className="mdi mdi-star text-muted"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-muted mb-0">Great design and responsive layout. Documentation could be more detailed but overall very satisfied.</p>
                                    </div>
                                  </div>
                                )}                                {activeTab === 3 && (
                                  <div className="tab-pane fade show active">
                                      <div className="bg-soft-primary p-4 rounded mb-4">
                                          <h6 className="mb-3">Download Information</h6>
                                          <div className="row">
                                              <div className="col-md-6">
                                                  <small className="text-muted d-block">File Size:</small>
                                                  <span className="fw-semibold">12.4 MB</span>
                                              </div>
                                              <div className="col-md-6">
                                                  <small className="text-muted d-block">Downloads:</small>
                                                  <span className="fw-semibold">2,847 times</span>
                                              </div>
                                              <div className="col-md-6 mt-3">
                                                  <small className="text-muted d-block">Last Updated:</small>
                                                  <span className="fw-semibold">March 15, 2024</span>
                                              </div>
                                              <div className="col-md-6 mt-3">
                                                  <small className="text-muted d-block">License:</small>
                                                  <span className="fw-semibold">Standard License</span>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <h6 className="mb-3">What You'll Get:</h6>
                                      <ul className="list-unstyled">
                                          <li className="mb-2"><i className="uil uil-file-alt text-primary me-2"></i>HTML Files (5 pages)</li>
                                          <li className="mb-2"><i className="uil uil-file-alt text-primary me-2"></i>CSS Stylesheets</li>
                                          <li className="mb-2"><i className="uil uil-file-alt text-primary me-2"></i>JavaScript Files</li>
                                          <li className="mb-2"><i className="uil uil-folder text-primary me-2"></i>Images & Assets</li>
                                          <li className="mb-2"><i className="uil uil-file-alt text-primary me-2"></i>Documentation</li>
                                      </ul>
                                  </div>
                                )}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
          <LiveAuctionTwo/>
      </div>
    </section>
    <Footer/>      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header>
          <Modal.Title className="modal-title d-flex w-100">
            <h5 className="modal-title" id="previewtitle">Preview Template</h5>
            <button type="button" className="btn btn-close" onClick={()=>setShow(false)}><i className="uil uil-times fs-4 text-muted"></i></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="text-center">
                <iframe 
                    src="https://via.placeholder.com/800x600/f8f9fa/6c757d?text=Template+Preview" 
                    className="w-100 border-0 rounded" 
                    height="400"
                    title="Template Preview">
                </iframe>
                <p className="text-muted mt-3">This is a preview of the template. Subscribe to Premium for full access to all files and features.</p>
            </div>
          </div>
        </Modal.Body>        <Modal.Footer>
          <Link to="/pricing" className="btn btn-pills btn-primary" onClick={()=>setShow(false)}><i className="mdi mdi-crown fs-5 me-2"></i> Get Premium Access</Link>
        </Modal.Footer>
      </Modal>      <Modal show={show2} onHide={()=>setShow2(false)}>
        <Modal.Header>
          <Modal.Title className="modal-title d-flex w-100">
            <h5 className="modal-title" id="subscriptiontitle">Premium Subscription Required</h5>
            <button type="button" className="btn btn-close" onClick={()=>setShow2(false)}><i className="uil uil-times fs-4 text-muted"></i></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <div className="text-center mb-4">
                <i className="mdi mdi-crown h1 text-primary"></i>
                <h6 className="mt-3">Unlock Unlimited Access</h6>
                <p className="text-muted">Get access to this template and thousands more with a Premium subscription.</p>
            </div>

            <div className="bg-soft-primary p-4 rounded mb-4">
                <h6 className="mb-3">Premium Benefits:</h6>
                <ul className="list-unstyled mb-0">
                    <li className="mb-2"><i className="mdi mdi-check text-success me-2"></i>Unlimited downloads</li>
                    <li className="mb-2"><i className="mdi mdi-check text-success me-2"></i>Commercial licenses included</li>
                    <li className="mb-2"><i className="mdi mdi-check text-success me-2"></i>High-quality files</li>
                    <li className="mb-2"><i className="mdi mdi-check text-success me-2"></i>Priority support</li>
                    <li className="mb-0"><i className="mdi mdi-check text-success me-2"></i>No attribution required</li>
                </ul>
            </div>

            <div className="d-flex justify-content-between align-items-center p-3 border rounded">
                <div>
                    <h6 className="mb-0">Premium Monthly</h6>
                    <small className="text-muted">Cancel anytime</small>
                </div>
                <div className="text-end">
                    <h5 className="mb-0 text-primary">$29<small>/month</small></h5>
                    <small className="text-success">7-day free trial</small>
                </div>
            </div>
            
            <div className="mt-4">
                <Link to="/pricing" className="btn btn-pills btn-primary w-100" onClick={()=>setShow2(false)}><i className="mdi mdi-crown fs-5 me-2"></i> Start Free Trial</Link>
                <p className="text-center text-muted mt-2 small">Already have an account? <Link to="/login" className="text-primary">Sign in</Link></p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
