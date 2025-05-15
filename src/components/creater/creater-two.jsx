import React from 'react'
import { Link } from 'react-router-dom'
import {createrData} from '../../data/data'

export default function CreaterTwo() {
  return (
        <div className="row">
            {createrData.map((item, index)=>{
            return(
                <div className="col-lg-3 col-md-4 mt-5" key={index}>
                    <div className="creators creator-primary d-flex align-items-center">
                        <span className="fw-bold text-muted">{item.no}</span>

                        <div className="d-flex align-items-center ms-3">
                            <div className="position-relative d-inline-flex">
                                <img src={item.image} className="avatar avatar-md-sm shadow-md rounded-pill" alt=""/>
                                {item.status && (
                                    <span className="verified text-primary">
                                        <i className="mdi mdi-check-decagram"></i>
                                    </span>
                                )}
                                {item.status && (
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
  )
}
