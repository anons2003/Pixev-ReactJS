import React, { useState } from "react";
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import ProductOne from "../../components/product/product-one";
import Footer from "../../components/footer";

import client1 from '../../assets/images/client/01.jpg'
import bg from '../../assets/images/blog/single.jpg'
import officeImage from '../../assets/images/svg/office-desk.svg'
import cart from '../../assets/images/svg/products-to-cart-or-basket.svg'

import { activityData, followerData, nftData } from "../../data/data";

export default function CreatorProfile() {
  let [file, setFile] = useState(client1);
  let [file2, setFile2] = useState(bg);
  let [activeTab, setActiveTab] = useState(1);

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
}
function handleChange2(e) {
  setFile2(URL.createObjectURL(e.target.files[0]));
}
  return (
    <>
    <Navbar/>
      <section className="bg-creator-profile">
        <div className="container">
            <div className="profile-banner">
                <input id="pro-banner" name="profile-banner" type="file" className="d-none" onChange={(e)=>handleChange2(e)} />
                <div className="position-relative d-inline-block">
                    <img src={file2} className="rounded-md shadow-sm img-fluid" id="profile-banner" alt=""/>
                    <label className="icons position-absolute bottom-0 end-0" htmlFor="pro-banner"><span className="btn btn-icon btn-sm btn-pills btn-primary"><i className="uil uil-camera fs-6"></i></span></label>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col">
                    <div className="text-center mt-n80">
                        <div className="profile-pic">
                            <input id="pro-img" name="profile-image" type="file" className="d-none" onChange={(e)=>handleChange(e)} />
                            <div className="position-relative d-inline-block">
                                <img src={file} className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm" id="profile-image" alt=""/>
                                <label className="icons position-absolute bottom-0 end-0" htmlFor="pro-img"><span className="btn btn-icon btn-sm btn-pills btn-primary"><i className="uil uil-camera fs-6"></i></span></label>
                            </div>
                        </div>

                        <div className="content mt-3">
                            <h5 className="mb-3">streetboyyy</h5>
                            <small className="text-muted px-2 py-1 rounded-lg shadow">bhcedeh5sdijuj-husac4saiu <Link to="#" className="text-primary h5 ms-1"><i className="uil uil-copy"></i></Link></small>

                            <h6 className="mt-3 mb-0">Artist, UX / UI designer, and Entrepreneur</h6>

                            <div className="mt-4">
                                <Link to="/creator-profile-edit" className="btn btn-pills btn-outline-primary mx-1">Edit Profile</Link>
                                <Link to="/upload-work" className="btn btn-pills btn-icon btn-outline-primary mx-1"><i className="uil uil-folder-upload"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-12">
                    <ul className="nav nav-tabs border-bottom">
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Created</button>
                        </li>
                        
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>Liked</button>
                        </li>

                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>On Sale</button>
                        </li>

                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 4 ? 'active' : ''}`} onClick={()=>setActiveTab(4)}>Collection</button>
                        </li>

                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 5 ? 'active' : ''}`} onClick={()=>setActiveTab(5)}>Activites</button>
                        </li>

                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 6 ? 'active' : ''}`} onClick={()=>setActiveTab(6)}>Followers</button>
                        </li>

                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 7 ? 'active' : ''}`} onClick={()=>setActiveTab(7)}>About</button>
                        </li>
                    </ul>

                    <div className="tab-content mt-4 pt-2">
                      {activeTab === 1 && (
                        <div className="tab-pane fade show active">
                            <ProductOne filter={false}/>
                        </div>
                      )}
                      {activeTab === 2 && (
                        <div className="tab-pane fade show active">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-8 text-center">
                                    <img src={officeImage} className="img-fluid" alt=""/>

                                    <div className="content">
                                        <h5 className="mb-4">No Items</h5>
                                        <p className="text-muted">Show your appreciation for other's work by liking the shots you love. We'll collect all of your likes here for you to revisit anytime.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )}
                      {activeTab === 3 && (
                        <div className="tab-pane fade show active">
                            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                              {nftData.slice(0,3).map((item,index) =>{
                                return(
                                  <div className="col" key={index}>
                                    <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <div className="d-flex align-items-center">
                                                <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                                <Link to="#" className="text-dark small creator-name h6 mb-0 ms-2">{item.title}</Link>
                                            </div>
                                        </div>
            
                                        <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                                            <Link to={`/item-detail-one/${item.id}`}><img src={item.product}className="img-fluid" alt=""/></Link>
                                            <div className="position-absolute top-0 start-0 m-2">
                                                <Link to="#" className="badge badge-link bg-primary">{item.tag}</Link>
                                            </div>
                                            <div className="position-absolute top-0 end-0 m-2">
                                                <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                                            </div>                                
                                        </div>
            
                                        <div className="card-body content position-relative p-0 mt-3">
                                            <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>
            
                                            <div className="d-flex align-items-center justify-content-between mt-3">
                                                <div className="">
                                                    <small className="mb-0 d-block fw-semibold">Current Bid:</small>
                                                    <small className="rate fw-bold">{item.value}</small>
                                                </div>
                                                <Link to={`/item-detail-one/${item.id}`} className="btn btn-icon btn-pills btn-primary"><i className="uil uil-shopping-bag"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>
                        </div>
                      )}
                      {activeTab === 4 && (
                        <div className="tab-pane fade show active">
                            <div className="row justify-content-center">
                                <div className="col-lg-5 col-md-8 text-center">
                                    <img src={cart} className="img-fluid" alt=""/>

                                    <div className="content mt-4">
                                        <h5 className="mb-4">No Collection</h5>
                                        <p className="text-muted">Save interesting shots into personalized collections, and discover new and interesting recommendations along the way.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )}
                      {activeTab === 5 && (
                        <div className="tab-pane fade show active">
                            <div className="row g-4">
                              {activityData.map((item,index) =>{
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

                            <div className="row">
                                <div className="col-12 text-center mt-4">
                                    <Link to="#" className="btn btn-link primary text-dark">Load More <i className="uil uil-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                      )}
                      {activeTab === 6 && (
                        <div className="tab-pane fade show active">
                            <h5 className="mb-4">6 Followers</h5>
                            <div className="row g-4">
                              {followerData.map((item,index)=>{
                                return(
                                  <div className="col-md-6" key={index}>
                                      <div className="p-4 rounded-md shadow users user-primary">
                                          <div className="d-flex align-items-center">
                                              <div className="position-relative">
                                                  <img src={item.clientImg} className="avatar avatar-md-md rounded-pill shadow-sm img-thumbnail" alt=""/>
                                                  <div className="position-absolute bottom-0 end-0">
                                                      <Link to="#" className="btn btn-icon btn-pills btn-sm btn-primary"><i className="uil uil-plus"></i></Link>
                                                  </div>
                                              </div>

                                              <div className="content ms-3">
                                                  <h6 className="mb-0"><Link to="/creator-profile" className="text-dark name">{item.name}</Link></h6>
                                                  <small className="text-muted d-flex align-items-center"><i className="uil uil-map-marker fs-5 me-1"></i>{item.location}</small>
                                              </div>
                                          </div>

                                          <div className="border-top my-4"></div>
                                          <div className="row row-cols-xl-6 g-3">
                                            {item.images.map((img, index)=>{
                                                return(
                                                  <div className="col" key={index}>
                                                      <Link to="/item-detail-one" className="user-item"><img src={img} className="img-fluid rounded-md shadow-sm" alt=""/></Link>
                                                  </div>
                                                )
                                            })}
                                          </div>
                                      </div>
                                  </div>
                                )
                              })}
                            </div>
                        </div>
                      )}
                      {
                        activeTab === 7 && (
                          <div className="tab-pane fade show active">
                              <h5 className="mb-4">Calvin Carlo</h5>

                              <p className="text-muted mb-0">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                          </div>
                        )
                      }
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
