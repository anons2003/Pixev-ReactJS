import { useState } from 'react';
import { Link } from 'react-router-dom'

import bg1 from '../assets/images/bg/01.jpg'
import logoDark from '../assets/images/logo-dark.png'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import Modal from 'react-bootstrap/Modal';

import { walletData } from '../data/data'

export default function Wallet() {
  const [show, setShow] = useState(false);
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">Wallet Connect</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Please check all Wallets and connect with your wallet</p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Superex</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">WALLET</li>
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
            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
              {walletData.map((item,index)=>{
                return(
                  <div className="col" key={index}>
                    <div className="card wallet wallet-primary rounded-md shadow">
                      {item.tag && (
                        <div className="ribbon ribbon-right ribbon-primary overflow-hidden"><span className="text-center d-block shadow small fw-bold">Popular</span></div>
                      )}
                        <div className={item.bgColor}></div>
                        <div className="position-relative">
                            <div className="position-absolute top-0 start-50 translate-middle">
                                <img src={item.image} className="avatar avatar-md-md rounded-pill shadow-sm p-3 bg-light" alt=""/>
                            </div>
                            
                            <div className="content text-center p-4">
                                <h5 className="mt-4 pt-2 mb-0">{item.name}</h5>
                                <p className="text-muted mt-3 mb-0">{item.desc} <Link to="#" className="link fw-semibold" onClick={()=>setShow(true)}>here <i className="uil uil-arrow-right"></i></Link></p>
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
    <Modal
        show={show}
        onHide={()=>setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className='d-flex w-100'>
            <h5 className="modal-title"><img src={logoDark} alt=""/></h5>
            <button type="button" className="btn-close d-flex align-items-center text-dark" onClick={()=>setShow(false)}><i className="uil uil-times fs-4 text-muted"></i></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <div className="form-floating mb-2">
                  <input type="email" className="form-control" id="LoginEmail" placeholder="name@example.com"/>
                  <label htmlFor="LoginEmail">Email Address:</label>
              </div>
              <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="LoginPassword" placeholder="Password"/>
                  <label htmlFor="LoginPassword">Password:</label>
              </div>
          
              <div className="d-flex justify-content-between">
                  <div className="mb-3">
                      <div className="form-check align-items-center d-flex mb-0">
                          <input className="form-check-input mt-0" type="checkbox" value="" id="RememberMe"/>
                          <label className="form-check-label text-muted ms-2" htmlFor="RememberMe">Remember me</label>
                      </div>
                  </div>
                  <small className="text-muted mb-0"><Link to="/reset-password" className="text-muted fw-semibold">Forgot password ?</Link></small>
              </div>

              <button className="btn btn-primary rounded-md w-100" type="submit">Sign in</button>

              <div className="col-12 text-center mt-4">
                  <small><span className="text-muted me-2">Don't have an account ?</span> <Link to="/signup" className="text-dark fw-bold">Sign Up</Link></small>
              </div>
          </form>
        </Modal.Body>
       
      </Modal>
    </>
  )
}
