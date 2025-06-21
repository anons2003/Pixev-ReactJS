import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logopixel from '../../assets/images/logopixel.svg'
import BackToHome from '../../components/back-to-home'

export default function ResetPassword() {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!email) {
            setError('Email is required');
            return;
        }
        
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            setError('Please enter a valid email address');
            return;
        }
        
        setIsLoading(true);
        setError('');
        
        try {
            // Simulate password reset email sending
            await new Promise(resolve => setTimeout(resolve, 2000));
            setIsSuccess(true);
        } catch (error) {
            setError('Failed to send reset email. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };
  return (
    <>
    <section className="position-relative">
      <div className="bg-video-wrapper">
          <iframe src="https://player.vimeo.com/video/502163294?background=1&autoplay=1&loop=1&byline=0&title=0" title='pixev'></iframe>
      </div>
      <div className="bg-overlay bg-linear-gradient-2"></div>
      <div className="container-fluid">
          <div className="row">
              <div className="col-12 p-0">
                  <div className="d-flex flex-column min-vh-100 p-4">
                      <div className="text-center">
                          <Link to="/"><img src={logopixel} alt=""/></Link>
                      </div>                      <div className="title-heading text-center my-auto">
                          <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                              {!isSuccess ? (
                                  <form onSubmit={handleSubmit}>
                                      <h5 className="mb-3">Reset Your Password</h5>

                                      <p className="text-muted">Please enter your email address. You will receive a link to create a new password via email.</p>
                                  
                                      <div className="row">
                                          <div className="col-12">
                                              <div className="form-floating mb-3">
                                                  <input 
                                                      type="email" 
                                                      className={`form-control ${error ? 'is-invalid' : ''}`}
                                                      id="floatingInput" 
                                                      placeholder="name@example.com" 
                                                      value={email}
                                                      onChange={(e) => {
                                                          setEmail(e.target.value);
                                                          setError('');
                                                      }}
                                                      required
                                                  />
                                                  <label htmlFor="floatingInput">Email address</label>
                                                  {error && <div className="invalid-feedback">{error}</div>}
                                              </div>
                                          </div>
                          
                                          <div className="col-12">
                                              <button 
                                                  className="btn btn-primary rounded-md w-100" 
                                                  type="submit"
                                                  disabled={isLoading}
                                              >
                                                  {isLoading ? 'Sending...' : 'Send Reset Link'}
                                              </button>
                                          </div>

                                          <div className="col-12 text-center mt-4">
                                              <small><span className="text-muted me-2">Remember your password ? </span><Link to="/login" className="text-dark fw-bold">Sign in</Link></small>
                                          </div>

                                          <div className="col-12 text-center mt-2">
                                              <small><span className="text-muted me-2">Don't have an account ? </span><Link to="/signup" className="text-dark fw-bold">Sign up</Link></small>
                                          </div>
                                      </div>
                                  </form>
                              ) : (
                                  <div className="text-center">
                                      <div className="mb-4">
                                          <i className="uil uil-check-circle text-success" style={{fontSize: '3rem'}}></i>
                                      </div>
                                      <h5 className="mb-3 text-success">Email Sent!</h5>
                                      <p className="text-muted mb-4">
                                          We've sent a password reset link to <strong>{email}</strong>
                                      </p>
                                      <p className="text-muted small mb-4">
                                          Didn't receive the email? Check your spam folder or 
                                          <button 
                                              className="btn btn-link p-0 ms-1 text-primary"
                                              onClick={() => {
                                                  setIsSuccess(false);
                                                  setEmail('');
                                              }}
                                          >
                                              try again
                                          </button>
                                      </p>
                                      <Link to="/login" className="btn btn-primary rounded-md">
                                          Back to Login
                                      </Link>
                                  </div>
                              )}
                          </div>
                      </div>

                      <div className="text-center">
                          <small className="mb-0 text-light title-dark">© {new Date().getFullYear()} Pixev. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://www.facebook.com/suunhi.6623" target="_blank" className="text-reset">Pixev</Link>.</small>
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
    <BackToHome/>
    </>
  )
}
