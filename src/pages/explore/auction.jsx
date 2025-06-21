import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import Subscription from '../../components/subscription'
import Footer from '../../components/footer'

import { resourceData } from '../../data/data'
import LikeButton from '../../components/LikeButton'

import bg1 from '../../assets/images/bg/01.jpg'

export default function Auction() {
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
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">Featured Resources</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Discover our most popular and trending digital resources</p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">Featured</li>
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
        <div className="container">            <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                {productData.slice(8,16).map((item,index)=>(
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
                                            <small className="mb-0 d-block fw-semibold">Price:</small>
                                            <small className="rate fw-bold">{item.value}</small>
                                        </div>
                                        <Link to={`/item-detail-one/${item.id}`} className="btn btn-icon btn-pills btn-primary"><i className="uil uil-download-alt"></i></Link>
                                    </div>                                </div>
                            </div>
                    </div>
                ))}
            </div>

            <div className="row justify-content-center mt-4">
                <div className="col">
                    <div className="text-center">
                        <Link to="#" className="btn btn-primary rounded-md"><i className="uil uil-process mdi-spin me-1"></i> Load More</Link>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <Subscription/>
    <Footer/>
    </>
  )
}
