import React from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import BestCreater from '../../components/creater/best-creater'
import PruductOne from '../../components/product/product-one'
import Footer from '../../components/footer'

import Select from 'react-select';
import { collectionData } from '../../data/data'

export default function IndexFour() {
  const product = [
    { value: '3', label: 'Auction Product' },
    { value: '1', label: 'On Sale' },
    { value: '3', label: 'Offers' },
  ]
  const product2 = [
    { value: '1', label: 'Games' },
    { value: '2', label: 'Music' },
    { value: '3', label: 'Videos' },
    { value: '4', label: 'Memes' },
  ]
  return (
    <>
    <Navbar/>
      <section className="bg-half-100 d-table w-100 pb-0">
        <div className="container position-relative" style={{zIndex:'1'}}>
            <div className="bg-half-100 rounded-md shadow-sm position-relative overflow-hidden">
                <div className="bg-video-wrapper">
                    <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0" title='superex'></iframe>
                </div>
                <div className="bg-overlay bg-linear-gradient-2"></div>
                <div className="row justify-content-center my-5">
                    <div className="col-12">
                        <div className="title-heading text-center px-4">
                            <h4 className="display-6 text-white title-dark fw-medium mb-3">The way to Find <br/> any <span className="text-gradient-primary">Digital</span> Content</h4>
                            <p className="text-white title-dark mb-0">Discover limited-edition digital arts. Create, Sell and Buy now.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="features-absolute">
                        <div className="row justify-content-center" id="reserve-form">
                            <div className="col-xl-10 mt-lg-5">
                                <div className="card bg-white feature-top border-0 shadow rounded p-3">
                                    <form action="#">
                                        <div className="registration-form text-dark text-start">
                                            <div className="row g-lg-0">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="filter-search-form position-relative filter-border">
                                                        <i className="uil uil-search icons"></i>
                                                        <input name="name" type="text" id="search-keyword" className="form-control filter-input-box bg-light border-0" placeholder="Search your keaywords"/>
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-md-6 mt-3 mt-md-0">
                                                    <div className="filter-search-form bg-light position-relative filter-border">
                                                        <i className="uil uil-usd-circle icons"></i>
                                                        <Select options={product} />
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                                    <div className="filter-search-form bg-light position-relative filter-border">
                                                        <i className="uil uil-window icons"></i>
                                                        <Select options={product2} />
                                                    </div>
                                                </div>

                                                <div className="col-lg-3 col-md-6 mt-3 mt-lg-0">
                                                    <input type="submit" id="search" name="search" style={{height:'60px'}} className="btn btn-primary rounded-md searchbtn submit-btn w-100" value="Search"/>
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
        </div>

        <div className="container mt-4 pt-2 mt-lg-0 pt-lg-0">
            <PruductOne filter={false}/>
        </div>
        <div className='mt-100 mt-60'>
          <BestCreater/>
        </div>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col-12">
                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-2">Popular Collection</h4>
                        <p className="text-muted mb-0">Best Collection of the week's NFTs</p>
                    </div>
                </div>
            </div>

            <div className="row">
              {collectionData.slice(0,3).map((item,index)=>{
                return(
                    <div className="col-lg-4 col-md-6 mt-4 pt-2" key={index}>
                      <div className="card bg-white collections collection-primary rounded-md shadow p-2 pb-0">
                          <div className="row g-2">
                              <div className="col-12">
                                  <img src={item.image1} className="img-fluid shadow-sm rounded-md" alt=""/>
                              </div>

                              <div className="col-4">
                                  <img src={item.image2} className="img-fluid shadow-sm rounded-md" alt=""/>
                              </div>

                              <div className="col-4">
                                  <img src={item.image3} className="img-fluid shadow-sm rounded-md" alt=""/>
                              </div>

                              <div className="col-4">
                                  <img src={item.image4} className="img-fluid shadow-sm rounded-md" alt=""/>
                              </div>
                          </div>

                          <div className="content text-center p-4 mt-n5">
                              <div className="position-relative d-inline-flex">
                                  <img src={item.client} className="avatar avatar-small rounded-pill img-thumbnail shadow-md" alt=""/>
                                  <span className="verified text-primary">
                                      <i className="mdi mdi-check-decagram"></i>
                                  </span>
                              </div>

                              <div className="mt-2">
                                  <Link to="/explore-four" className="text-dark title h5">{item.name}</Link>
                                  <p className="text-muted mb-0 small">{item.item}</p>
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
    </>
  )
}
