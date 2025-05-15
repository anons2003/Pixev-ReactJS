import React from 'react'
import { Link } from 'react-router-dom'
import { createrData } from '../../data/data'

export default function CreaterThree() {
  return (
    <>
        <div className="row justify-content-center">
              <div className="col">
                  <div className="section-title text-center mb-5 pb-3">
                      <h4 className="title mb-4">Popular Creators</h4>
                      <p className="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting great artists of all Superex with their fans and unique token collectors!</p>
                  </div>
              </div>
        </div>

        <div className="row g-4">
            {createrData.map((item,index) =>{
                return(
                    <div className="col-lg-3 col-md-4" key={index}>
                        <div className="creators creator-primary creators-two bg-white d-flex align-items-center p-3 rounded-md shadow">
                            <div className="d-flex align-items-center">
                                <div className="position-relative d-inline-flex">
                                    <img src={item.image} className="avatar avatar-md-sm shadow-md rounded-pill" alt=""/>
                                    {item.status === 'active' && (
                                        <span className="verified text-primary">
                                            <i className="mdi mdi-check-decagram"></i>
                                        </span>
                                    )}
                                    {item.status=== 'active' && (
                                        <span className="online text-success">
                                            <i className="mdi mdi-circle"></i>
                                        </span>
                                    )}
                                </div>

                                <div className="ms-3">
                                    <h6 className="mb-0"><Link to="/creators" className="text-dark name">{item.name}</Link></h6>
                                    <small className="text-muted">{item.value}</small>
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
