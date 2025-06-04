import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { resourceData } from '../data/data'


export default function LiveAuction() {
    const [productData, setProductData] = useState(resourceData);
    
    useEffect(()=>{
        const interval = setTimeout(()=>{
            remainingDays()
        },100)
        return () => clearInterval(interval) 
    })

    const remainingDays = () => {
        const formattedData = resourceData.map((item) => ({
            ...item,
            remaining: calculateDays(item.date),
        }));
        setProductData(formattedData);
    }

    const calculateDays = (date) => {
        let startDate = new Date(date);
        let currentDate = new Date();
        const diff = startDate.getTime() - currentDate.getTime();

        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        return { hours, minutes, seconds, days }
    }

  return (
    <>
    <div className="row justify-content-center">
        <div className="col">            <div className="section-title text-center mb-5 pb-3">
                <h4 className="title mb-4">Trending Resources</h4>
                <p className="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting talented designers and developers with creative professionals seeking high-quality digital assets!</p>
            </div>
        </div>
    </div>

    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
        {productData.slice(0,4).map((item,index)=>{
            return(
                <div className="col" key={index}>
                    <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                        <div className="d-flex justify-content-between">
                            <div className="img-group">
                                <Link to="/creator-profile" className="user-avatar">
                                    <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                </Link>
                                <Link to="/creator-profile" className="user-avatar ms-n3">
                                    <img src={item.creater2} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                </Link>
                                <Link to="/creator-profile" className="user-avatar ms-n3">
                                    <img src={item.creater3} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                </Link>
                            </div>
                            
                            <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                        </div>

                        <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                            <Link to={`/item-detail-one/${item.id}`}><img src={item.product} className="img-fluid" alt=""/></Link>
                            <div className="position-absolute top-0 start-0 m-2">
                                <Link to="#" className="badge badge-link bg-primary">{item.tag}</Link>
                            </div>                            <div className="position-absolute top-0 end-0 m-2">
                                <Link to={`/item-detail-one/${item.id}`} className="btn btn-pills btn-primary btn-sm">Premium</Link>
                            </div>
                                <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                                    <i className="uil uil-clock"></i> <small id="auction-item-1" className="fw-bold">{item.remaining?.days + " : " + item.remaining?.hours + " : " + item.remaining?.minutes + " : " + item.remaining?.seconds}</small>
                                </div>
                        </div>

                        <div className="card-body content position-relative p-0 mt-3">
                            <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>                            <div className="d-flex justify-content-between mt-2">
                                <small className="rate fw-bold">Premium</small>
                                <small className="text-dark fw-bold">{item.category}</small>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}
