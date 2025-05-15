import React from 'react'
import { services } from '../data/data'

export default function Services() {
  return (
        <div className="row">
            {services.map((item,index) =>{
              return(
                  <div className="col-lg-3 col-md-6 col-12" key={index}>
                      <div className="card border-0 text-center features feature-primary feature-clean">
                          <div className="icons text-center mx-auto">
                              <i className={`d-block rounded-md h3 mb-0 ${item.icon}`}></i>
                          </div>

                          <div className="content mt-4 pt-2">
                              <h5 className="mb-3">{item.title}</h5>
                              <p className="text-muted mb-0">{item.desc}</p>
                          </div>
                      </div>
                  </div>
              )
            })}
          </div>
  )
}
