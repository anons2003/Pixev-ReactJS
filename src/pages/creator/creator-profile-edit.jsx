import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import Footer from "../../components/footer";

import bg1 from '../../assets/images/bg/01.jpg'
import client1 from '../../assets/images/client/01.jpg'

export default function CreatorProfileEdit() {
  const [file, setFile] = useState(client1);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
}
  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")`, backgroundPosition:'bottom'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">
                      <h5 className="heading fw-semibold sub-heading text-white title-dark">Edit Profile</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">Edit your profile</p>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Profile Edit</li>
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
            <div className="col-lg-9">
                <h5>You can set preferred display name, create your branded profile URL and manage other personal settings.</h5>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-8 col-md-7 col-12 order-2 order-md-1 mt-4 pt-2">
                <div className="rounded-md shadow">
                    <div className="p-4 border-bottom">
                        <h5 className="mb-0">Edit Profile :</h5>
                    </div>

                    <div className="p-4">
                        <form className="profile-edit">
                            <div className="row">
                                <div className="col-12 mb-4">
                                    <label className="form-label h6">Display Name</label>
                                    <input name="name" id="first" type="text" className="form-control" placeholder="streetboyyy"/>
                                </div>

                                <div className="col-12 mb-4">
                                    <label className="form-label h6">URL</label>
                                    <div className="form-icon">
                                        <input name="url" id="pixev-url" type="url" className="form-control" placeholder="https://pixev.exe/streetboyyy"/>
                                    </div>
                                </div>

                                <div className="col-12 mb-4">
                                    <label className="form-label h6">Bio</label>
                                    <textarea name="comments" id="comments" rows="3" className="form-control" placeholder="I'm a Digital Artist. Digital Art with over 3 years of experience. Experienced with all stages of the Art cycle for dynamic projects."></textarea>
                                </div>

                                <div className="col-12 mb-4">
                                    <label className="form-label h6">Twitter Account</label>
                                    <p className="text-muted">Link your twitter account to gain more trust on the Marketplace</p>
                                    <div className="form-icon">
                                        <input name="url" id="twitter-url" type="url" className="form-control" placeholder="https://twitter.com/streetboyyy"/>
                                    </div>
                                </div>

                                <div className="col-12 mb-4">
                                    <label className="form-label h6">Website</label>
                                    <div className="form-icon">
                                        <input name="url" id="web-url" type="url" className="form-control" placeholder="https://streetboyyy.com/"/>
                                    </div>
                                </div>

                                <div className="col-12 mb-4">
                                    <label className="form-label h6">Email</label>
                                    <input name="email" id="email" type="email" className="form-control" placeholder="streetboyyy@example.com"/>
                                </div>
                            </div>

                            
                            <div className="row">
                                <div className="col-12">
                                    <button type="submit" id="submit" name="send" className="btn btn-primary rounded-md">Update Profile</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="rounded-md shadow mt-4">
                    <div className="p-4 border-bottom">
                        <h5 className="mb-0">Account Notifications :</h5>
                    </div>

                    <div className="p-4">
                        <div className="d-flex justify-content-between pb-4">
                            <h6 className="mb-0">When someone mentions me</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="noti1"/>
                                <label className="form-check-label" htmlFor="noti1"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-4 border-top">
                            <h6 className="mb-0">When someone follows me</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti2"/>
                                <label className="form-check-label" htmlFor="noti2"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-4 border-top">
                            <h6 className="mb-0">When shares my activity</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="noti3"/>
                                <label className="form-check-label" htmlFor="noti3"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-4 border-top">
                            <h6 className="mb-0">When someone messages me</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="noti4"/>
                                <label className="form-check-label" htmlFor="noti4"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-md shadow mt-4">
                    <div className="p-4 border-bottom">
                        <h5 className="mb-0">Marketing Notifications :</h5>
                    </div>

                    <div className="p-4">
                        <div className="d-flex justify-content-between pb-4">
                            <h6 className="mb-0">There is a sale or promotion</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="noti5"/>
                                <label className="form-check-label" htmlFor="noti5"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-4 border-top">
                            <h6 className="mb-0">Company news</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="noti6"/>
                                <label className="form-check-label" htmlFor="noti6"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-4 border-top">
                            <h6 className="mb-0">Weekly jobs</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti7"/>
                                <label className="form-check-label" htmlFor="noti7"></label>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between py-4 border-top">
                            <h6 className="mb-0">Unsubscribe News</h6>
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" defaultChecked id="noti8"/>
                                <label className="form-check-label" htmlFor="noti8"></label>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rounded-md shadow mt-4">
                    <div className="p-4 border-bottom">
                        <h5 className="mb-0 text-danger">Delete Account :</h5>
                    </div>

                    <div className="p-4">
                        <h6 className="mb-0">Do you want to delete the account? Please press below "Delete" button</h6>
                        <div className="mt-4">
                            <button className="btn btn-danger">Delete Account</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-lg-4 col-md-5 col-12 order-1 order-md-2 mt-4 pt-2">
                <div className="card ms-lg-5">
                    <div className="profile-pic">
                        <input id="pro-img" name="profile-image" type="file" className="d-none" onChange={(e)=>handleChange(e)} />
                        <div className="position-relative d-inline-block">
                            <img src={file} className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm" id="profile-image" alt=""/>
                            <label className="icons position-absolute bottom-0 end-0" htmlFor="pro-img"><span className="btn btn-icon btn-sm btn-pills btn-primary"><i className="uil uil-camera fs-6"></i></span></label>
                        </div>
                    </div>

                    <div className="mt-4">
                        <p className="text-muted mb-0">We recommend an image of at least 400X400. GIFs work too.</p>
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
