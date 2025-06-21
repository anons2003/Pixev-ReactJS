import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'

import logopixel from '../../assets/images/logopixel.svg'
import BackToHome from '../../components/back-to-home'

export default function Signup() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false
    });
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useUser();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email';
        }
        
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        
        if (!formData.acceptTerms) {
            newErrors.acceptTerms = 'You must accept the terms and conditions';
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        setIsLoading(true);
        
        try {
            // Simulate registration process
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Auto login after successful registration
            login(formData.email);
            
            // Redirect to home page
            setTimeout(() => {
                navigate('/');
            }, 600);
            
        } catch (error) {
            console.error('Registration error:', error);
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
                      </div>

                      <div className="title-heading text-center my-auto">                          <div className="form-signin px-4 py-5 bg-white rounded-md shadow-sm">
                              <form onSubmit={handleSubmit}>
                                  <h5 className="mb-4">Register Your Account</h5>
                      
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="form-floating mb-2">
                                              <input 
                                                  type="text" 
                                                  className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                                  id="RegisterName" 
                                                  name="name"
                                                  placeholder="Harry" 
                                                  value={formData.name}
                                                  onChange={handleInputChange}
                                                  required
                                              />
                                              <label htmlFor="RegisterName">First Name</label>
                                              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="form-floating mb-2">
                                              <input 
                                                  type="email" 
                                                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                                  id="RegisterEmail" 
                                                  name="email"
                                                  placeholder="name@example.com" 
                                                  value={formData.email}
                                                  onChange={handleInputChange}
                                                  required
                                              />
                                              <label htmlFor="RegisterEmail">Email Address</label>
                                              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="form-floating mb-2">
                                              <input 
                                                  type="password" 
                                                  className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                                  id="RegisterPassword" 
                                                  name="password"
                                                  placeholder="Password" 
                                                  value={formData.password}
                                                  onChange={handleInputChange}
                                                  required
                                              />
                                              <label htmlFor="RegisterPassword">Password</label>
                                              {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                                          </div>
                                      </div>

                                      <div className="col-lg-12">
                                          <div className="form-floating mb-3">
                                              <input 
                                                  type="password" 
                                                  className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                                                  id="ConfirmPassword" 
                                                  name="confirmPassword"
                                                  placeholder="Confirm Password" 
                                                  value={formData.confirmPassword}
                                                  onChange={handleInputChange}
                                                  required
                                              />
                                              <label htmlFor="ConfirmPassword">Confirm Password</label>
                                              {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                                          </div>
                                      </div>                                      <div className="col-lg-12">
                                          <div className="form-check align-items-center d-flex mb-3">
                                              <input 
                                                  className={`form-check-input mt-0 ${errors.acceptTerms ? 'is-invalid' : ''}`}
                                                  type="checkbox" 
                                                  name="acceptTerms"
                                                  id="AcceptT&C"
                                                  checked={formData.acceptTerms}
                                                  onChange={handleInputChange}
                                              />
                                              <label className="form-check-label text-muted ms-2" htmlFor="AcceptT&C">
                                                  I Accept <Link to="/terms" className="text-primary" target="_blank">Terms And Condition</Link> and <Link to="/privacy" className="text-primary" target="_blank">Privacy Policy</Link>
                                              </label>
                                          </div>
                                          {errors.acceptTerms && <div className="text-danger small">{errors.acceptTerms}</div>}
                                      </div>
                      
                                      <div className="col-lg-12">
                                          <button 
                                              className="btn btn-primary rounded-md w-100" 
                                              type="submit"
                                              disabled={isLoading}
                                          >
                                              {isLoading ? 'Creating Account...' : 'Register'}
                                          </button>
                                      </div>

                                      <div className="col-12 text-center mt-4">
                                          <small><span className="text-muted me-2">Already have an account ? </span> <Link to="/login" className="text-dark fw-bold">Sign in</Link></small>
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
