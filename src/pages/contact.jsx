import React,{useState} from 'react'
import Navbar from '../components/navbar'

import bg1 from '../assets/images/bg/01.jpg'
import image from '../assets/images/svg/office-desk.svg'
import { Link } from 'react-router-dom'
import Footer from '../components/footer'
import Modal from 'react-bootstrap/Modal';

export default function Contact() {
  const [show, setShow] = useState(false);
  return (
    <>
    <Navbar navlight={true}/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'bottom'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark">Contact Us</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">Get in Touch !</p>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">About us</li>
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
              <div className="col-lg-4 col-md-6">
                  <div className="card border-0 text-center features feature-primary feature-clean">
                      <div className="icons text-center mx-auto">
                          <i className="uil uil-phone d-block rounded-md h3 mb-0"></i>
                      </div>                      <div className="content mt-4 px-4">
                          <h5 className="fw-bold">Phone</h5>
                          <p className="text-muted">Start working with Pixev that can provide everything</p>
                          <Link to="tel:+152534-468-854" className="text-primary">+152 534-468-854</Link>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                  <div className="card border-0 text-center features feature-primary feature-clean">
                      <div className="icons text-center mx-auto">
                          <i className="uil uil-envelope d-block rounded-md h3 mb-0"></i>
                      </div>                      <div className="content mt-4 px-4">
                          <h5 className="fw-bold">Email</h5>
                          <p className="text-muted">Start working with Pixev that can provide everything</p>
                          <Link to="mailto:contact@example.com" className="text-primary">contact@example.com</Link>
                      </div>
                  </div>
              </div>
              
              <div className="col-lg-4 col-md-6 mt-4 mt-lg-0 pt-2 pt-lg-0">
                  <div className="card border-0 text-center features feature-primary feature-clean">
                      <div className="icons text-center mx-auto">
                          <i className="uil uil-map-marker d-block rounded-md h3 mb-0"></i>
                      </div>
                      <div className="content mt-4 px-4">
                          <h5 className="fw-bold">Location</h5>
                          <p className="text-muted">C/54 Northwest Freeway, Suite 558, <br/>Houston, USA 485</p>
                          <Link to="#" onClick={()=>setShow(true)} className="video-play-icon text-primary lightbox">View on Google map</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>

      <div className="container mt-100 mt-60">
        <div className="row align-items-center">
          <div className="col-lg-5 col-md-6 pt-2 pt-sm-0 order-2 order-md-1">
            <div className="card shadow rounded border-0">
              <div className="card-body py-5">
                <h4 className="card-title">Get In Touch !</h4>
                  <div className="custom-form mt-3">
                    <form>
                      <div className="row">
                          <div className="col-md-6">
                              <div className="mb-3">
                                  <label className="form-label">Your Name <span className="text-danger">*</span></label>
                                  <input name="name" id="name" type="text" className="form-control" placeholder="Enter Your Name :" required />
                              </div>
                          </div>

                          <div className="col-md-6">
                              <div className="mb-3">
                                  <label className="form-label">Your Email <span className="text-danger">*</span></label>
                                  <input name="email" id="email" type="email" className="form-control" placeholder="Enter Your Email :" required />
                              </div> 
                          </div>

                          <div className="col-12">
                              <div className="mb-3">
                                  <label className="form-label">Subject</label>
                                  <input name="subject" id="subject" className="form-control" placeholder="Type Subject :" required />
                              </div>
                          </div>

                          <div className="col-12">
                              <div className="mb-3">
                                  <label className="form-label">Comments <span className="text-danger">*</span></label>
                                  <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Enter Your Message :"></textarea>
                              </div>
                          </div>
                      </div>
                      <div className="row">
                          <div className="col-12">
                              <div className="d-grid">
                                  <button type="submit" id="submit" name="send" className="btn btn-primary rounded-md">Send Message</button>
                              </div>
                          </div>
                      </div>
                    </form>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-lg-7 col-md-6 order-1 order-md-2">
              <div className="card border-0">
                  <div className="card-body p-0">
                      <img src={image} className="img-fluid d-block mx-auto" style={{maxWidth:'550px'}} alt=""/>
                  </div>
              </div>
          </div>
        </div>
      </div>
    </section>

    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0">
          <div className="card map border-0">
            <div className="card-body p-0">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0'}} title='pixev' allowFullScreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    <Modal show={show} onHide={()=>setShow(false)} size='lg'>
      <Modal.Body>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin" style={{border:'0',width:'100%', height:''}} title='pixev' allowFullScreen></iframe>
      </Modal.Body>
    </Modal>
    </>
  )
}
