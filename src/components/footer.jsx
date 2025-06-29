import React,{useState} from 'react'
import { Link } from 'react-router-dom'

import appImg from '../assets/images/app.png'
import playstore from '../assets/images/playstore.png'
import logopixel from '../assets/images/logopixel.svg'

export default function Footer() {
    let [visible, setVisible] = useState(false)

    const toggleVisible = () => { 
        const scrolled = document.documentElement.scrollTop; 
        if (scrolled > 300){ 
          setVisible(true) 
        }  
        else if (scrolled <= 300){ 
          setVisible(false) 
        } 
      }; 
      
      const scrollToTop = () =>{ 
        window.scrollTo({ 
          top: 0,  
          behavior: 'smooth'
        }); 
      }; 
      
      window.addEventListener('scroll', toggleVisible); 
  return (
    <>
    <footer className="bg-footer">
        <div className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-7 col-md-6">
                        <h5 className="text-light fw-normal title-dark">Download the Pixev app to explore premium digital resources</h5>
                        
                        <div className="mt-4">
                            <Link to=""><img src={appImg} height="40" className="rounded shadow" alt=""/></Link>
                            <Link to="" className="ms-2"><img src={playstore} height="40" className="rounded shadow" alt=""/></Link>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-5 col-md-6 mt-4 mt-sm-0">
                        <h5 className="text-light fw-normal title-dark">Join Pixev community</h5>

                        <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4 ">
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-facebook-f"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-instagram"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-linkedin"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-dribbble"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-twitter"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-skype"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-telegram"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-slack"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-tumblr"></i></Link></li>
                            <li className="list-inline-item lh-1"><Link to="" className="rounded"><i className="uil uil-whatsapp"></i></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="footer-py-60 footer-border">
                        <div className="row">
                            <div className="col-lg-4 col-12 mb-0 mb-md-4 pb-0 pb-md-2">                                <Link to="#" className="logo-footer">
                                    <img src={logopixel} alt=""/>
                                </Link>
                                <p className="para-desc mb-0 mt-4">Discover, download and create with premium digital resources, templates, and creative assets from top designers worldwide.</p>
                            
                                
                            </div>
                            
                            <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Pixev</h5>
                                <ul className="list-unstyled footer-list mt-4">                                    <li><Link to="/explore-two" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Browse Resources</Link></li>
                                    <li className='ms-0'><Link to="/auction" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Premium Assets</Link></li>
                                    <li className='ms-0'><Link to="/activity" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Recent Downloads</Link></li>
                                    <li className='ms-0'><Link to="/wallet" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> My Account</Link></li>
                                    <li className='ms-0'><Link to="/creators" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Authors</Link></li>
                                </ul>
                            </div>
                            
                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Community</h5>
                                <ul className="list-unstyled footer-list mt-4">
                                    <li><Link to="/aboutus" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> About Us</Link></li>
                                    <li className='ms-0'><Link to="/blogs" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Blog</Link></li>
                                    <li className='ms-0'><Link to="/terms" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Terms & Conditions</Link></li>
                                    <li className='ms-0'><Link to="/privacy" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Privacy Policy</Link></li>
                                    <li className='ms-0'><Link to="/login" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Login</Link></li>
                                    <li className='ms-0'><Link to="mailto:contact@example.com" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Subscribe</Link></li>
                                    <li className='ms-0'><Link to="/contact" className="text-foot"><i className="uil uil-angle-right-b me-1"></i> Contact</Link></li>
                                </ul>
                            </div>
        
                            <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                                <h5 className="footer-head">Newsletter</h5>
                                <p className="mt-4">Sign up and receive the latest tips via email.</p>
                                <form>
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="foot-subscribe mb-3">
                                                <label className="form-label">Write your email <span className="text-danger">*</span></label>
                                                <div className="form-icon position-relative">
                                                    <i className="uil uil-envelope icons fs-5 mb-2"></i>
                                                    <input type="email" name="email" id="emailsubscribe" className="form-control ps-5 rounded" placeholder="Your email : " required/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="d-grid">
                                                <input type="submit" id="submitsubscribe" name="send" className="btn btn-soft-primary" value="Subscribe"/>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="footer-py-30 footer-bar">
            <div className="container text-center">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <div className="text-sm-start">
                            <p className="mb-0">© {new Date().getFullYear()} Pixev. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://www.facebook.com/suunhi.6623" target="_blank" className="text-reset">Pixev</Link>.</p>
                        </div>
                    </div>

                    <div className="col-sm-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
                        <ul className="list-unstyled footer-list text-sm-end mb-0">
                            <li className="list-inline-item mb-0"><Link to="/privacy" className="text-foot me-2">Privacy</Link></li>
                            <li className="list-inline-item mb-0"><Link to="/terms" className="text-foot me-2">Terms</Link></li>
                            <li className="list-inline-item mb-0"><Link to="/helpcenter-overview" className="text-foot me-2">Help Center</Link></li>
                            <li className="list-inline-item mb-0"><Link to="/contact" className="text-foot">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <Link to="#" id="back-to-top" onClick={()=>scrollToTop()} className="back-to-top rounded-pill fs-5" style={{display: visible ? 'inline' : 'none'}}><i className="uil uil-arrow-up"></i></Link>
    </>
  )
}
