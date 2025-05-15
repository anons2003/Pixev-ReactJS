import React from 'react'
import { Link } from 'react-router-dom'

export default function ContactUs() {
  return (
    <>
        <div className="container mt-100 mt-60">
          <div className="row justify-content-center">
              <div className="col-12">
                  <div className="section-title text-center">
                      <h6 className="text-muted fw-normal mb-3">Contact us and we'll get back to you as soon as we can.</h6>
                      <h4 className="title mb-4">Can't find your answer?</h4>
                      <div className="mt-4 pt-2">
                          <Link to="/contact" className="btn btn-primary rounded-md">Help Center</Link>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}
