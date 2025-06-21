import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'

import logopixel from '../../assets/images/logopixel.svg'
import client from '../../assets/images/client/01.jpg'
import BackToHome from '../../components/back-to-home'

export default function LockScreen() {
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { user, login } = useUser();
    const navigate = useNavigate();

    // If no user is logged in, redirect to login
    React.useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!password) {
            setError('Password is required');
            return;
        }
        
        setIsLoading(true);
        setError('');
        
        try {
            // Simulate password verification
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            // For demo purposes, any password will work
            // In real app, you'd verify against user's actual password
            if (password.length >= 3) {
                // Unlock and redirect to dashboard
                navigate('/');
            } else {
                setError('Incorrect password');
            }
        } catch (error) {
            setError('Authentication failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDifferentUser = () => {
        // Logout current user and go to login
        navigate('/login');
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
                              <form onSubmit={handleSubmit}>
                                  <div className="row">
                                      <div className="col-lg-12">
                                          <div className="mb-3 text-center">
                                              <img src={client} className="avatar avatar-md-md rounded-pill mx-auto d-block shadow" alt=""/>

                                              <div className="mt-3">
                                                  <h5 className="mb-1">{user?.name || 'Calvin Carlo'}</h5>
                                                  <p className="text-muted small">{user?.email || 'calvin@pixev.com'}</p>
                                              </div>
                                          </div>
                                      </div>
                                      
                                      <div className="col-12">
                                          <div className="form-floating mb-3">
                                              <input 
                                                  type="password" 
                                                  className={`form-control ${error ? 'is-invalid' : ''}`}
                                                  id="LoginPassword" 
                                                  placeholder="Password" 
                                                  value={password}
                                                  onChange={(e) => {
                                                      setPassword(e.target.value);
                                                      setError('');
                                                  }}
                                                  required
                                              />
                                              <label htmlFor="LoginPassword">Password:</label>
                                              {error && <div className="invalid-feedback">{error}</div>}
                                          </div>
                                      </div>
                                  
                                      <div className="col-lg-12">
                                          <div className="d-flex justify-content-between">
                                              <div className="mb-3">
                                                  <div className="form-check align-items-center d-flex mb-0">
                                                      <input 
                                                          className="form-check-input mt-0" 
                                                          type="checkbox" 
                                                          id="RememberMe" 
                                                          checked={rememberMe}
                                                          onChange={(e) => setRememberMe(e.target.checked)}
                                                      />
                                                      <label className="form-check-label text-muted ms-2" htmlFor="RememberMe">Remember me</label>
                                                  </div>
                                              </div>
                                              <small className="text-muted mb-0"><Link to="/reset-password" className="text-muted fw-semibold">Forgot password ?</Link></small>
                                          </div>
                                      </div>
                                      <div className="col-lg-12 mb-3">
                                          <div className="d-grid">
                                              <button 
                                                  className="btn btn-primary rounded-md" 
                                                  type="submit"
                                                  disabled={isLoading}
                                              >
                                                  {isLoading ? 'Unlocking...' : 'Unlock'}
                                              </button>
                                          </div>
                                      </div>
                                      <div className="col-lg-12">
                                          <div className="text-center">
                                              <button 
                                                  type="button"
                                                  className="btn btn-link text-muted small"
                                                  onClick={handleDifferentUser}
                                              >
                                                  Sign in as different user
                                              </button>
                                          </div>
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
