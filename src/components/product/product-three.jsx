import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { resourceData } from '../../data/data'

export default function ProductThree() {
    let [selectCategory, setSelectCategory] = useState(null)
    
    const fileterData = selectCategory ? resourceData.filter((item)=> item.category === selectCategory) : resourceData;

    const matchCategory = (category) =>{
        setSelectCategory(category)
    }
  return (
    <>
          <div className="row align-items-end mb-5 pb-3">
              <div className="col-lg-4">
                  <div className="section-title mb-4 mb-lg-0">
                      <h4 className="title mb-2">Newest Items</h4>
                      <p className="text-muted mb-0">Best sellers of the week's Digital Resources</p>
                  </div>
              </div>

              <div className="col-lg-8 filters-group-wrap">
                  <div className="filters-group">
                      <ul className="container-filter mb-0 categories-filter text-lg-end list-unstyled filter-options">
                          <li className={`list-inline-item categories position-relative text-dark ${selectCategory === null ? 'active' : ''}`} onClick={()=>matchCategory(null)}><i className="uil uil-browser"></i> All</li>
                          <li className={`list-inline-item categories position-relative text-dark ${selectCategory === 'games' ? 'active' : ''}`} onClick={()=>matchCategory('games')}><i className="uil uil-volleyball"></i> Games</li>
                          <li className={`list-inline-item categories position-relative text-dark ${selectCategory === 'art' ? 'active' : ''}`} onClick={()=>matchCategory('art')}><i className="uil uil-chart-pie-alt"></i> Art</li>
                          <li className={`list-inline-item categories position-relative text-dark ${selectCategory === 'music' ? 'active' : ''}`} onClick={()=>matchCategory('music')}><i className="uil uil-music"></i> Music</li>
                          <li className={`list-inline-item categories position-relative text-dark ${selectCategory === 'video' ? 'active' : ''}`} onClick={()=>matchCategory('video')}><i className="uil uil-camera-plus"></i> Video</li>
                          <li className={`list-inline-item categories position-relative text-dark ${selectCategory === 'memes' ? 'active' : ''}`} onClick={()=>matchCategory('memes')}><i className="uil uil-rocket"></i> Memes</li>
                      </ul>
                  </div>
              </div>
          </div>

        <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4" id="grid">
            {fileterData.slice(0,8).map((item,index)=>{
                return(
                    <div className="col picture-item" key={index}>
                        <div className="card bg-white nft-items nft-primary rounded-md shadow overflow-hidden mb-1">
                            <div className="nft-image position-relative overflow-hidden">
                                <Link to={`/item-detail-one/${item.id}`}><img src={item.product} className="img-fluid" alt=""/></Link>
                                <div className="position-absolute top-0 start-0 m-3">
                                    <Link to="#" className="badge badge-link bg-primary">{item.tag}</Link>
                                </div>
                                <div className="position-absolute top-0 end-0 m-3">
                                    <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                                </div>                                
                            </div>

                            <div className="card-body content position-relative">
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

        <div className="row">
            <div className="col mt-4">
                <div className="text-center">
                    <Link to="/explore-two" className="btn btn-primary rounded-md">View More <i className="uil uil-arrow-right"></i></Link>
                </div>
            </div>
        </div>
    </>
  )
}
