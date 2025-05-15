import React from 'react'
import { Link } from 'react-router-dom'
import { collectionData } from '../data/data'

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

export default function PopularCollection() {
    const settings = {
        container: '.tiny-three-item-nav-arrow',
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
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
  return (
    <>
    <div className="row justify-content-center">
        <div className="col-12">
            <div className="section-title text-center mb-4 pb-2">
                <h4 className="title mb-2">Popular Collection</h4>
                <p className="text-muted mb-0">Best Collection of the week's NFTs</p>
            </div>
        </div>
    </div>

    <div className="row">
        <div className="col">
            <div className="tiny-three-item-nav-arrow">
            <TinySlider settings={settings}>
                {collectionData.map((item,index)=>{
                    return(
                    <div className="tiny-slide" key={index}>
                        <div className="card bg-white collections collection-primary rounded-md shadow p-2 pb-0 m-1">
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
            </TinySlider>    
            </div>
        </div>
    </div>
    </>
  )
}
