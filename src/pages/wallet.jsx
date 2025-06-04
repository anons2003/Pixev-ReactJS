import { useState } from 'react';
import { Link } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'

import bg1 from '../assets/images/bg/01.jpg'
import logopixel from '../assets/images/logopixel.svg'

import Navbar from '../components/navbar'
import Footer from '../components/footer'

import Modal from 'react-bootstrap/Modal';

export default function Wallet() {
  const [show, setShow] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');
  const { user } = useUser();
  
  // Redirect to login if no user
  if (!user) {
    return (
      <div className="container mt-5 pt-5 text-center">
        <h4>Please login to access your account</h4>
        <Link to="/login" className="btn btn-primary mt-3">Login</Link>
      </div>
    );
  }

  return (
    <>
    <Navbar navlight={true}/>
    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url("${bg1}")` , backgroundPosition:'bottom'}}>
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
            <div className="row mt-5 justify-content-center">
                <div className="col-12">
                    <div className="title-heading text-center">
                        <h5 className="heading fw-semibold sub-heading text-white title-dark">My Account</h5>
                        <p className="text-white-50 para-desc mx-auto mb-0">Manage your subscription, downloads, and account settings</p>
                    </div>
                </div>
            </div>

            <div className="position-middle-bottom">
                <nav aria-label="breadcrumb" className="d-block">
                    <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                        <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                        <li className="breadcrumb-item active" aria-current="page">My Account</li>
                    </ul>
                </nav>
            </div>
        </div>
    </section>
    <div className="position-relative">            
        <div className="shape overflow-hidden text-white">
            <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor"></path>
            </svg>
        </div>
    </div>

    <section className="section">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-4">
                    <div className="card rounded shadow p-4 sticky-bar">
                        <div className="text-center">                            <div className="avatar avatar-md-md mx-auto d-block rounded-pill bg-primary text-white">
                                <span className="h4 mb-0">{user.name.charAt(0)}</span>
                            </div>
                            <h6 className="mt-3 mb-0">{user.name}</h6>
                            <p className="text-muted small mb-0">{user.email}</p>
                            <span className="badge bg-soft-success text-success mt-2">{user.plan}</span>
                        </div>
                        
                        <ul className="list-unstyled mt-4 mb-0">
                            <li className="p-0">
                                <Link 
                                    to="#" 
                                    className={`d-flex align-items-center text-dark p-2 rounded ${activeTab === 'overview' ? 'bg-light' : ''}`}
                                    onClick={() => setActiveTab('overview')}
                                >
                                    <i className="uil uil-dashboard me-2"></i> Overview
                                </Link>
                            </li>
                            <li className="p-0 mt-2">
                                <Link 
                                    to="#" 
                                    className={`d-flex align-items-center text-dark p-2 rounded ${activeTab === 'subscription' ? 'bg-light' : ''}`}
                                    onClick={() => setActiveTab('subscription')}
                                >
                                    <i className="uil uil-credit-card me-2"></i> Subscription
                                </Link>
                            </li>
                            <li className="p-0 mt-2">
                                <Link 
                                    to="#" 
                                    className={`d-flex align-items-center text-dark p-2 rounded ${activeTab === 'downloads' ? 'bg-light' : ''}`}
                                    onClick={() => setActiveTab('downloads')}
                                >
                                    <i className="uil uil-download-alt me-2"></i> Download History
                                </Link>
                            </li>
                            <li className="p-0 mt-2">
                                <Link 
                                    to="#" 
                                    className={`d-flex align-items-center text-dark p-2 rounded ${activeTab === 'settings' ? 'bg-light' : ''}`}
                                    onClick={() => setActiveTab('settings')}
                                >
                                    <i className="uil uil-setting me-2"></i> Settings
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                
                <div className="col-lg-9 col-md-8 mt-4 mt-md-0">
                    {activeTab === 'overview' && (
                        <div className="card rounded shadow p-4">
                            <h5 className="mb-4">Account Overview</h5>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <div className="card bg-primary-light border-0 p-3">
                                        <div className="d-flex align-items-center">
                                            <i className="uil uil-download-alt h2 text-primary mb-0"></i>
                                            <div className="ms-3">
                                                <h6 className="mb-0">Downloads This Month</h6>
                                                <h4 className="mb-0 text-primary">{user.downloads}</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 mb-4">
                                    <div className="card bg-success-light border-0 p-3">
                                        <div className="d-flex align-items-center">
                                            <i className="uil uil-check-circle h2 text-success mb-0"></i>
                                            <div className="ms-3">
                                                <h6 className="mb-0">Download Limit</h6>
                                                <h4 className="mb-0 text-success">Unlimited</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                    <h6>Recent Activity</h6>
                                    <div className="list-group list-group-flush">
                                        <div className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-0">Premium UI Kit Bundle</h6>
                                                <small className="text-muted">Downloaded</small>
                                            </div>
                                            <small>2 hours ago</small>
                                        </div>
                                        <div className="list-group-item d-flex justify-content-between align-items-center">
                                            <div>
                                                <h6 className="mb-0">Modern Logo Collection</h6>
                                                <small className="text-muted">Downloaded</small>
                                            </div>
                                            <small>1 day ago</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'subscription' && (
                        <div className="card rounded shadow p-4">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <h5 className="mb-0">Subscription Details</h5>
                                <Link to="/pricing" className="btn btn-outline-primary btn-sm">Upgrade Plan</Link>
                            </div>
                            
                            <div className="card bg-light border-0 p-3">
                                <div className="row align-items-center">
                                    <div className="col-md-8">                                        <h6 className="mb-2">{user.plan}</h6>
                                        <p className="text-muted mb-0">Joined: {user.joinDate}</p>
                                        <p className="text-muted mb-0">Unlimited downloads • Commercial license • Priority support</p>
                                    </div>
                                    <div className="col-md-4 text-md-end">
                                        <h4 className="text-primary mb-0">$29/month</h4>
                                        <button className="btn btn-outline-danger btn-sm mt-2">Cancel Subscription</button>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <h6>Billing History</h6>
                                <div className="table-responsive">
                                    <table className="table table-borderless">
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Description</th>
                                                <th>Amount</th>
                                                <th>Status</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Feb 15, 2025</td>
                                                <td>Premium Monthly Subscription</td>
                                                <td>$29.00</td>
                                                <td><span className="badge bg-soft-success text-success">Paid</span></td>
                                            </tr>
                                            <tr>
                                                <td>Jan 15, 2025</td>
                                                <td>Premium Monthly Subscription</td>
                                                <td>$29.00</td>
                                                <td><span className="badge bg-soft-success text-success">Paid</span></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'downloads' && (
                        <div className="card rounded shadow p-4">
                            <h5 className="mb-4">Download History</h5>
                            <div className="row">
                                <div className="col-12">
                                    <div className="table-responsive">
                                        <table className="table table-borderless">
                                            <thead>
                                                <tr>
                                                    <th>Resource</th>
                                                    <th>Category</th>
                                                    <th>Download Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-primary-light rounded p-2 me-3">
                                                                <i className="uil uil-layers text-primary"></i>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-0">Premium UI Kit Bundle</h6>
                                                                <small className="text-muted">Mobile app components</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>UI Kits</td>
                                                    <td>Feb 28, 2025</td>
                                                    <td><button className="btn btn-outline-primary btn-sm">Re-download</button></td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="d-flex align-items-center">
                                                            <div className="bg-success-light rounded p-2 me-3">
                                                                <i className="uil uil-brush-alt text-success"></i>
                                                            </div>
                                                            <div>
                                                                <h6 className="mb-0">Modern Logo Collection</h6>
                                                                <small className="text-muted">50 premium logos</small>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td>Graphics</td>
                                                    <td>Feb 27, 2025</td>
                                                    <td><button className="btn btn-outline-primary btn-sm">Re-download</button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    
                    {activeTab === 'settings' && (
                        <div className="card rounded shadow p-4">
                            <h5 className="mb-4">Account Settings</h5>
                            <form>
                                <div className="row">                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" className="form-control" defaultValue={user.name} />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label">Email Address</label>
                                        <input type="email" className="form-control" defaultValue={user.email} />
                                    </div>
                                    <div className="col-12 mb-3">
                                        <label className="form-label">Password</label>
                                        <button className="btn btn-outline-secondary d-block">Change Password</button>
                                    </div>
                                    <div className="col-12">
                                        <h6 className="mb-3">Email Preferences</h6>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" id="emailNews" defaultChecked />
                                            <label className="form-check-label" htmlFor="emailNews">
                                                New resources notification
                                            </label>
                                        </div>
                                        <div className="form-check mb-2">
                                            <input className="form-check-input" type="checkbox" id="emailPromotions" />
                                            <label className="form-check-label" htmlFor="emailPromotions">
                                                Promotional emails
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <button className="btn btn-primary me-2">Save Changes</button>
                                        <button className="btn btn-outline-secondary">Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </section>
    <Footer/>
    <Modal
        show={show}
        onHide={()=>setShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title className='d-flex w-100'>
            <h5 className="modal-title"><img src={logopixel} alt=""/></h5>
            <button type="button" className="btn-close d-flex align-items-center text-dark" onClick={()=>setShow(false)}><i className="uil uil-times fs-4 text-muted"></i></button>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
              <div className="form-floating mb-2">
                  <input type="email" className="form-control" id="LoginEmail" placeholder="name@example.com"/>
                  <label htmlFor="LoginEmail">Email Address:</label>
              </div>
              <div className="form-floating mb-3">
                  <input type="password" className="form-control" id="LoginPassword" placeholder="Password"/>
                  <label htmlFor="LoginPassword">Password:</label>
              </div>
          
              <div className="d-flex justify-content-between">
                  <div className="mb-3">
                      <div className="form-check align-items-center d-flex mb-0">
                          <input className="form-check-input mt-0" type="checkbox" value="" id="RememberMe"/>
                          <label className="form-check-label text-muted ms-2" htmlFor="RememberMe">Remember me</label>
                      </div>
                  </div>
                  <small className="text-muted mb-0"><Link to="/reset-password" className="text-muted fw-semibold">Forgot password ?</Link></small>
              </div>

              <button className="btn btn-primary rounded-md w-100" type="submit">Sign in</button>

              <div className="col-12 text-center mt-4">
                  <small><span className="text-muted me-2">Don't have an account ?</span> <Link to="/signup" className="text-dark fw-bold">Sign Up</Link></small>
              </div>
          </form>
        </Modal.Body>
       
      </Modal>
    </>
  )
}
