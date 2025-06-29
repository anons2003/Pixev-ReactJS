import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { resourceData } from '../data/data'
import LikeButton from './LikeButton'

export default function LiveAuctionTwo() {
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
    <>            <div className="row justify-content-center">
                <div className="col">
                    <div className="section-title text-center mb-5 pb-3">
                        <h4 className="title mb-4">Featured Resources</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting talented designers and developers with creative professionals seeking high-quality digital assets!</p>
                    </div>
                </div>
            </div>

          <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">            {productData.slice(3,7).map((item,index)=>{
                return(
                    <div className="col" key={index}>
                            <div className="card nft-items nft-primary rounded-md shadow overflow-hidden mb-1 p-3">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                        <Link to="#" className="text-dark small creator-name h6 mb-0 ms-2">{item.title}</Link>
                                    </div>
                                </div>

                                <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                                    <Link to={`/item-detail-one/${item.id}`}><img src={item.product} className="img-fluid" alt=""/></Link>
                                    <div className="position-absolute top-0 start-0 m-2">
                                        <span className="badge badge-link bg-primary">{item.tag}</span>
                                    </div>
                                    <div className="position-absolute top-0 end-0 m-2">
                                        <LikeButton 
                                            itemId={item.id}
                                            itemData={{
                                                id: item.id,
                                                title: item.name,
                                                price: item.price,
                                                image: item.product,
                                                creator: item.title,
                                                category: item.category
                                            }}
                                        />
                                    </div><div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                                    <i className="uil uil-file-download-alt"></i> <small className="fw-bold">Premium</small>
                                    </div>
                                </div>

                                <div className="card-body content position-relative p-0 mt-3">
                                    <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>                                    <div className="d-flex align-items-center justify-content-between mt-3">
                                        <div className="">
                                            <small className="mb-0 d-block fw-semibold">Access:</small>
                                            <small className="rate fw-bold">Premium</small>
                                        </div>
                                        <Link to={`/item-detail-one/${item.id}`} className="btn btn-icon btn-pills btn-primary"><i className="uil uil-download-alt"></i></Link>
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
