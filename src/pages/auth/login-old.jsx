import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';

import bg1 from '../../assets/images/bg/01.jpg'
import logopixel from '../../assets/images/logopixel.svg'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showDemo, setShowDemo] = useState(true);
  
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Basic validation
    const newErrors = {};
    if (!formData.email) {
      newErrors.email = 'Email is required';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const result = await login(formData.email, formData.password);
    
    if (result.success) {
      navigate('/');
    } else {
      setErrors({ general: result.message });
    }
  };

  const fillDemoCredentials = (credentials) => {
    setFormData({
      email: credentials.email,
      password: credentials.password
    });
    setErrors({});
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
                          {/* Demo Credentials Panel */}
                          {showDemo && (
                              <div className="demo-credentials mb-4 p-3 bg-light rounded-md">
                                  <div className="d-flex justify-content-between align-items-center mb-2">
                                      <h6 className="mb-0 text-muted">Demo Accounts:</h6>
                                      <button 
                                          type="button" 
                                          className="btn-close btn-sm" 
                                          onClick={() => setShowDemo(false)}
                                      ></button>
                                  </div>
                                  <div className="row g-2">
                                      {demoCredentials.map((cred, index) => (
                                          <div key={index} className="col-md-6 col-lg-4">
                                              <button
                                                  type="button"
                                                  className="btn btn-outline-primary btn-sm w-100"
                                                  onClick={() => fillDemoCredentials(cred)}
                                              >
                                                  {cred.role}
                                              </button>
                                          </div>
                                      ))}
                                  </div>
                                  <small className="text-muted d-block mt-2">
                                      Click any button above to fill login credentials automatically
                                  </small>
                              </div>
                          )}

                          <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                              <form onSubmit={handleSubmit}>
                                  <h5 className="mb-4">Login</h5>
                                  
                                  {errors.general && (
                                      <div className="alert alert-danger" role="alert">
                                          {errors.general}
                                      </div>
                                  )}
                                  
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="form-floating mb-2">
                                              <input 
                                                  type="email" 
                                                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                  id="LoginEmail" 
                                                  name="email"
                                                  value={formData.email}
                                                  onChange={handleInputChange}
                                                  placeholder="name@example.com"
                                              />
                                              <label htmlFor="LoginEmail">Email Address:</label>
                                              {errors.email && (
                                                  <div className="invalid-feedback">
                                                      {errors.email}
                                                  </div>
                                              )}
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="form-floating mb-3">
                                              <input 
                                                  type="password" 
                                                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                  id="LoginPassword" 
                                                  name="password"
                                                  value={formData.password}
                                                  onChange={handleInputChange}
                                                  placeholder="Password"
                                              />
                                              <label htmlFor="LoginPassword">Password:</label>
                                              {errors.password && (
                                                  <div className="invalid-feedback">
                                                      {errors.password}
                                                  </div>
                                              )}
                                          </div>
                                      </div>
                              
                                      <div className="col-lg-12">
                                          <div className="d-flex justify-content-between">
                                              <div className="mb-3">
                                                  <div className="form-check align-items-center d-flex mb-0">
                                                      <input className="form-check-input mt-0" type="checkbox" value="" id="RememberMe"/>
                                                      <label className="form-check-label text-muted ms-2" for="RememberMe">Remember me</label>
                                                  </div>
                                              </div>
                                              <small className="text-muted mb-0"><Link to="/reset-password" className="text-muted fw-semibold">Forgot password ?</Link></small>
                                          </div>
                                      </div>
                  
                                      <div className="col-lg-12">
                                          <button className="btn btn-primary rounded-md w-100" type="submit">Sign in</button>
                                      </div>
  
                                      <div className="col-12 text-center mt-4">
                                          <small><span className="text-muted me-2">Don't have an account ?</span> <Link to="/signup" className="text-dark fw-bold">Sign Up</Link></small>
                                      </div>
                                  </div>
                              </form>
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
