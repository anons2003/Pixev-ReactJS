import React, { useEffect, useState } from 'react'
import { Link,useParams } from 'react-router-dom'

import nftImage from '../../assets/images/items/item-detail-1.jpg'
import clientImg from '../../assets/images/client/09.jpg'

import LiveAuctionTwo from '../../components/live-auction-two'
import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import { activityData, bidsData, nftData } from '../../data/data'

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
    const data = nftData.find((item) => item.id === parseInt(id))

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
                      <img src={data?.product ? data.product : nftImage} className="img-fluid rounded-md shadow" alt=""/>
                  </div>
              </div>

              <div className="col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="ms-lg-5">
                      <div className="title-heading">
                          <h4 className="h3 fw-bold mb-0">Wolf with Skull <span className="text-gradient-primary">Orange</span> <br/> <span className="text-gradient-primary">Illustration</span> T-shirt Tattoo</h4>
                      </div>

                      <div className="row">
                          <div className="col-md-6 mt-4 pt-2">
                              <h6>Current Bid</h6>
                              <h4 className="mb-0">4.85 ETH</h4>
                              <small className="mb-0 text-muted">$450.48USD</small>
                          </div>

                          <div className="col-md-6 mt-4 pt-2">
                              <h6>Auction Ending In</h6>
                              <h4 id="auction-item-8" className="fw-bold mb-0">{days} : {hours} : {minutes} : {seconds}</h4>
                          </div>

                          <div className="col-12 mt-4 pt-2">
                              <Link to="#" className="btn btn-l btn-pills btn-primary me-2" onClick={()=>setShow(true)}><i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</Link>
                              <Link to="#" className="btn btn-l btn-pills btn-primary" onClick={()=>setShow2(true)}><i className="mdi mdi-cart fs-5 me-2"></i> Buy Now</Link>
                          </div>
                      </div>

                      <div className="row mt-4 pt-2">
                          <div className="col-12">
                              <ul className="nav nav-tabs border-bottom">
                                  <li className="nav-item">
                                      <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Details</button>
                                  </li>
                                  
                                  <li className="nav-item">
                                      <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>Bids</button>
                                  </li>
      
                                  <li className="nav-item">
                                      <button className={`nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>Activity</button>
                                  </li>
                              </ul>
      
                              <div className="tab-content mt-4 pt-2">
                                {activeTab === 1 && (
                                  <div className="tab-pane fade show active">
                                      <p className="text-muted">Hey guys! New exploration about NFT Marketplace Web Design, this time I'm inspired by one of my favorite NFT website called Superex (with crypto payment)! What do you think?</p>
                                      <p className="text-muted">What does it mean? Biomechanics is the study of the structure, function and motion of the mechanical aspects of biological systems, at any level from whole organisms to organs, cells and cell organelles, using the methods of mechanics. Biomechanics is a branch of biophysics.</p>
                                      <h6>Owner</h6>
      
                                      <div className="creators creator-primary d-flex align-items-center">
                                          <div className="position-relative">
                                              <img src={data?.creater1 ? data?.creater1 : clientImg} className="avatar avatar-md-sm shadow-md rounded-pill" alt=""/>
                                              <span className="verified text-primary">
                                                  <i className="mdi mdi-check-decagram"></i>
                                              </span>
                                          </div>
          
                                          <div className="ms-3">
                                              <h6 className="mb-0"><Link to="/creators" className="text-dark name">{data?.createrName ? data?.createrName :'PandaOne'}</Link></h6>
                                          </div>
                                      </div>
                                  </div>
                                )}
                                {activeTab === 2 && (
                                  <div className="tab-pane fade show active">
                                    {bidsData.map((item,index)=>{
                                      return(
                                        <div className="creators creator-primary d-flex align-items-center mt-4" key={index}>
                                            <div className="position-relative">
                                                <img src={item.image} className="avatar avatar-md-sm shadow-md rounded-pill" alt=""/>
                                            </div>
            
                                            <div className="ms-3">
                                                <h6 className="mb-0">{item.title1} <span className="text-muted">by</span> <Link to="/creator-profile" className="text-dark name">{item.title2}</Link></h6>
                                                <small className="text-muted">{item.time}</small>
                                            </div>
                                        </div>
                                      )
                                    })}
                                  </div>
                                )}
                                {activeTab === 3 && (
                                  <div className="tab-pane fade show active">
                                      <div className="row g-4">
                                        {activityData.slice(0,3).map((item,index)=>{
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
                                                          <small className="text-muted d-block mt-1">{item.name} <Link to="#" className="link fw-bold">{item.name2}</Link></small>
                                                          
                                                          <small className="text-muted d-block mt-1">{item.time}</small>
                                                      </span>
                                                  </div>
                                              </div>
                                            </div>
                                          )
                                        })}
                                      </div>
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
    <Footer/>
      <Modal show={show} onHide={()=>setShow(false)}>
        <Modal.Header>
          <Modal.Title className="modal-title d-flex w-100">
            <h5 className="modal-title" id="bidtitle">Place a Bid</h5>
            <button type="button" className="btn btn-close" onClick={()=>setShow(false)}><i className="uil uil-times fs-4 text-muted"></i></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <form>
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4">
                            <label className="form-label fw-bold">Your Bid Price <span className="text-danger">*</span></label>
                            <input name="name" id="name" type="text" className="form-control" placeholder="00.00 ETH"/>
                            <small className="text-muted"><span className="text-dark">Note:</span> Bid price at least 1 ETH</small>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="mb-4">
                            <label className="form-label fw-bold">Enter Your QTY <span className="text-danger">*</span></label>
                            <input name="email" id="email" type="email" className="form-control" placeholder="0"/>
                            <small className="text-muted"><span className="text-dark">Note:</span> Max. Qty 5</small>
                        </div> 
                    </div>
                </div>
            </form>

            <div className="pt-3 border-top">
                <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> You must bid at least:</p>
                    <p className="text-primary"> 1.22 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Service free:</p>
                    <p className="text-primary"> 0.05 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Total bid amount:</p>
                    <p className="text-primary mb-0"> 1.27 ETH </p>
                </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-pills btn-primary" onClick={()=>{setShow(false)}}><i className="mdi mdi-gavel fs-5 me-2"></i> Place a Bid</button>
        </Modal.Footer>
      </Modal>

      <Modal show={show2} onHide={()=>setShow2(false)}>
        <Modal.Header>
          <Modal.Title className="modal-title d-flex w-100">
            <h5 className="modal-title" id="bidtitle">Checkout</h5>
            <button type="button" className="btn btn-close" onClick={()=>setShow2(false)}><i className="uil uil-times fs-4 text-muted"></i></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <form>
                <div className="row">
                    <div className="col-12">
                        <div className="mb-4">
                            <label className="form-label fw-bold">Your Price <span className="text-danger">*</span></label>
                            <input name="name" id="name" type="text" className="form-control" defaultValue="1.5ETH"/>
                        </div>
                    </div>
                </div>
            </form>

            <div className="py-3 border-top">
                <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> You must bid at least:</p>
                    <p className="text-primary"> 1.22 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Service free:</p>
                    <p className="text-primary"> 0.05 ETH </p>
                </div>
                <div className="d-flex justify-content-between">
                    <p className="fw-bold small"> Total bid amount:</p>
                    <p className="text-primary mb-0"> 1.27 ETH </p>
                </div>
            </div>

            <div className="bg-soft-danger p-3 rounded shadow">
                <div className="d-flex align-items-center">
                    <i className="uil uil-exclamation-circle h2 mb-0 me-2"></i>
                    <div className="flex-1">
                        <h6 className="mb-0">This creator is not verified</h6>
                        <small className="mb-0">Purchase this item at your own risk</small>
                    </div>
                </div>
            </div>
            
            <div className="mt-4">
                <button className="btn btn-pills btn-primary w-100" data-bs-target="#buyNftSuccess" data-bs-toggle="modal"><i className="mdi mdi-cart fs-5 me-2"></i> Continue</button>
                <form>
                    <div className="form-check align-items-center d-flex mt-2">
                        <input className="form-check-input mt-0" type="checkbox" value="" id="AcceptT&C"/>
                        <label className="form-check-label text-muted ms-2" htmlFor="AcceptT&C">I Accept <Link to="#" className="text-primary">Terms And Condition</Link></label>
                    </div>
                </form>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
