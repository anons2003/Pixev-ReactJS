import React from 'react'
import { Link } from 'react-router-dom'
import { createrData } from '../../data/data'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function BestCreater() {
    const settings = {
        container: '.tiny-five-item-nav-arrow',
        controls: true,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        controlsText: ['<i class="mdi mdi-chevron-left "></i>', '<i class="mdi mdi-chevron-right"></i>'],
        nav: false,
        speed: 400,
        gutter: 10,
        responsive: {
            992: {
                items: 5
            },

            767: {
                items: 3
            },

            320: {
                items: 1
            },
        },
      };
  return (
    <div className="container">
            <div className="row align-items-end mb-4 pb-2">
                <div className="col-md-8">
                    <div className="section-title">
                        <h4 className="title mb-2">Best Creators & Sellers</h4>
                        <p className="text-muted mb-0">Best sellers of the week's NFTs</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="text-end d-md-block d-none">
                        <Link to="/creators" className="btn btn-link primary text-dark">See More <i className="uil uil-arrow-right"></i></Link>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-12 mt-3">
                    <div className="tiny-five-item-nav-arrow">
                        <TinySlider settings={settings}>
                            {createrData.map((item,index)=>{
                                return(
                                    <div className="tiny-slide" key={index}>
                                        <div className="card creators creators-two creator-primary rounded-md shadow overflow-hidden mx-2 my-3">
                                            <div className="py-5" style={{backgroundImage:`url(${item.bgImage})`}}></div>
                                            <div className="position-relative mt-n5">
                                                <img src={item.image} className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block" alt=""/>
                                                
                                                <div className="content text-center pt-2 p-4">
                                                    <Link to="/creator-profile" className="text-dark h6 name d-block mb-0">{item.name}</Link>
                                                    <small className="text-muted">{item.title}</small>

                                                    <div className="mt-3">
                                                        <Link to="#" className="btn btn-pills btn-soft-primary">Follow</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </TinySlider>    
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="text-center d-md-none d-block">
                        <Link to="/creators" className="btn btn-link primary text-dark">See More <i className="uil uil-arrow-right"></i></Link>
                    </div>
                </div>
            </div>
        </div>
  )
}
