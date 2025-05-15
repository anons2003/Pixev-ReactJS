import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Navbar from '../components/navbar'
import bg1 from '../assets/images/bg/01.jpg'
import work from '../assets/images/work/1.jpg'
import client from '../assets/images/client/01.jpg'
import Footer from "../components/footer";

export default function UploadWork() {
  const [file, setFile] = useState("");

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
}
  return (
    <>
    <Navbar navlight={true}/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url('${bg1}')`, backgroundPosition:'bottom'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark">Upload Your Work</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">Add your digital art and work</p>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Superex</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">FAQs</li>
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
              <div className="col-lg-3 col-md-4 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="card creators creator-primary rounded-md shadow overflow-hidden sticky-bar">
                      <div className="py-5" style={{backgroundImage:`url("${work}")`}}></div>
                      <div className="position-relative mt-n5">
                          <img src={client} className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block" alt=""/>
                          
                          <div className="content text-center pt-2 p-4">
                              <h6 className="mb-0">Steven Townsend</h6>
                              <small className="text-muted">@StreetBoy</small>

                              <ul className="list-unstyled mb-0 mt-3" id="navmenu-nav">
                                  <li className="px-0 ms-0">
                                      <Link to="/creator-profile" className="d-flex align-items-center text-dark">
                                          <span className="fs-6 mb-0"><i className="uil uil-user"></i></span>
                                          <small className="d-block fw-semibold mb-0 ms-2">Profile</small>
                                      </Link>
                                  </li>
                                  
                                  <li className="px-0 ms-0 mt-2">
                                      <Link to="/creator-profile-edit" className="d-flex align-items-center text-dark">
                                          <span className="fs-6 mb-0"><i className="uil uil-setting"></i></span>
                                          <small className="d-block fw-semibold mb-0 ms-2">Settings</small>
                                      </Link>
                                  </li>
                                  
                                  <li className="px-0 ms-0 mt-2">
                                      <Link to="/lock-screen" className="d-flex align-items-center text-dark">
                                          <span className="fs-6 mb-0"><i className="uil uil-sign-in-alt"></i></span>
                                          <small className="d-block fw-semibold mb-0 ms-2">Logout</small>
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-9 col-md-8 order-1 order-md-2">
                  <div className="card rounded-md shadow p-4">
                      <div className="row">
                          <div className="col-lg-5">
                              <div className="d-grid">
                                  <p className="fw-semibold mb-4">Upload your ART here, Please click "Upload Image" Button.</p>
                                  <div className="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small">{file === '' ? 'Supports JPG, PNG and MP4 videos. Max file size : 10MB.' : (
                                  <img src={file} className="img-fluid" alt=""/>
                                )}</div>
                                  <input type="file" id="input-file" name="input-file" accept="image/*" onChange={(e)=>handleChange(e)} hidden />
                                  <label className="btn-upload btn btn-primary rounded-md mt-4" htmlFor="input-file">Upload Image</label>
                              </div>
                          </div>

                          <div className="col-lg-7 mt-4 mt-lg-0">
                              <div className="ms-lg-4">
                                  <form>
                                      <div className="row">
                                          <div className="col-12 mb-4">
                                              <label className="form-label fw-bold">Art Title <span className="text-danger">*</span></label>
                                              <input name="name" id="name" type="text" className="form-control" placeholder="Title :" required/>
                                          </div>

                                          <div className="col-12 mb-4">
                                              <label className="form-label fw-bold"> Description : </label>
                                              <textarea name="comments" id="comments" rows="4" className="form-control" placeholder="Description :" required></textarea>
                                          </div>
  
                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold">Type :</label>
                                              <select className="form-control">
                                                  <option>GIFs</option>
                                                  <option>Music</option>
                                                  <option>Video</option>
                                                  <option>Tech</option>
                                              </select>
                                          </div>
  
                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold"> Rate : </label>
                                              <input name="time" type="text" className="form-control" id="time" defaultValue="0.004ETH" required/>
                                          </div>

                                          <div className="col-12">
                                              <h6>Auction :</h6>
                                          </div>

                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold"> Starting Date : </label>
                                              <input name="date" type="text" className="form-control start" placeholder="Select date :" required/>
                                          </div>
          
                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold"> Expiration date : </label>
                                              <input name="date" type="text" className="form-control end" placeholder="Select date :" required/>
                                          </div>
  
                                          <div className="col-lg-12">
                                              <button type="submit" className="btn btn-primary rounded-md">Create Item</button>
                                          </div>
                                      </div>
                                  </form>
                              </div>
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
