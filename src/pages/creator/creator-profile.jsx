import React, { useState } from "react";
import { Link } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { useFavorites } from '../../contexts/FavoritesContext'
import { useUserResources } from '../../contexts/UserResourcesContext'
import { useSubscription } from '../../contexts/SubscriptionContext'

import Navbar from '../../components/navbar'
import LikeButton from '../../components/LikeButton';
import Footer from "../../components/footer";

import client1 from '../../assets/images/client/01.jpg'
import bg from '../../assets/images/blog/single.jpg'
import officeImage from '../../assets/images/svg/office-desk.svg'
import cart from '../../assets/images/svg/products-to-cart-or-basket.svg'

import { activityData, resourceData, demoUsers } from "../../data/data";

export default function CreatorProfile() {
  const { user, login } = useUser();
  const { getFavoritesWithDetails, getFavoritesCount } = useFavorites();
  const { userResources, getTotalEarnings } = useUserResources();
  const { userSubscription, subscribeToPlan, getRemainingDownloads, downloadHistory } = useSubscription();
  
  let [file, setFile] = useState(client1);
  let [file2, setFile2] = useState(bg);
  let [activeTab, setActiveTab] = useState(1);
  const [notification, setNotification] = useState(null);
  
  // Get favorite items with full details
  const favoriteItems = getFavoritesWithDetails(resourceData);
  
  // Debug logging
  console.log('Current user:', user);
  console.log('User subscription:', userSubscription);
  console.log('User resources:', userResources);
  console.log('Download history:', downloadHistory);
  console.log('Remaining downloads:', getRemainingDownloads());
  console.log('All resource data (first 3):', resourceData.slice(0, 3));
  console.log('Favorites count:', getFavoritesCount());
  console.log('Favorite items found:', favoriteItems.length, favoriteItems);
  // Demo user logins
  const handleDemoLogin = (userType = 'free') => {
    const demoEmail = userType === 'free' ? 'demo-free@pixev.com' : 'demo-premium@pixev.com';
    const demoUserData = demoUsers[demoEmail];
    
    if (demoUserData) {
      // Clear any existing data first
      localStorage.removeItem(`favorites_${demoEmail}`);
      localStorage.removeItem(`downloads_${demoEmail}`);
      localStorage.removeItem(`userResources_${demoEmail}`);
      
      // Set demo data
      localStorage.setItem(`favorites_${demoEmail}`, JSON.stringify(demoUserData.favorites));
      localStorage.setItem(`downloads_${demoEmail}`, JSON.stringify(demoUserData.downloadHistory));
      localStorage.setItem(`userResources_${demoEmail}`, JSON.stringify(demoUserData.uploads));
      
      // Login the demo user
      login(demoEmail, demoUserData);
      
      // Show notification
      showNotification(
        `Logged in as ${userType === 'free' ? 'Free' : 'Premium'} Demo User! Explore the features.`,
        'success'
      );
      
      if (userType === 'premium') {
        // Auto-subscribe to premium for the premium demo user
        setTimeout(() => {
          subscribeToPlan('premium_monthly').catch(console.error);
        }, 1000);
      }
    }
  };
  
  // Show notification helper
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Clear storage function for debugging
  const handleClearStorage = () => {
    if (user) {
      localStorage.removeItem(`favorites_${user.email}`);
      localStorage.removeItem(`downloads_${user.email}`);
      localStorage.removeItem(`userResources_${user.email}`);
    }
    window.location.reload();
  };
  // Redirect to login if no user
  if (!user) {
    return (
      <>
        <Navbar/>
        <section className="bg-half-170 d-table w-100" style={{background: `url(${bg}) center center`}}>
          <div className="bg-overlay bg-gradient-overlay"></div>
          <div className="container">
            <div className="row mt-5 justify-content-center">
              <div className="col-12 text-center">                  <div className="section-title text-center">
                    <h4 className="title text-white title-dark mb-4">Please Login</h4>
                    <p className="text-white-50 para-desc mx-auto mb-0">You need to login to view your profile.</p>
                    <div className="mt-4">
                      <Link to="/login" className="btn btn-primary me-2">Login Now</Link>                      <div className="d-inline-block">
                        <button onClick={() => handleDemoLogin('free')} 
                                className="btn btn-outline-light me-2"
                                title="Demo Free User: Limited downloads, basic features">
                          <i className="mdi mdi-account me-1"></i>Demo Free User
                        </button>
                        <button onClick={() => handleDemoLogin('premium')} 
                                className="btn btn-warning"
                                title="Demo Premium User: Unlimited downloads, premium features">
                          <i className="mdi mdi-crown me-1"></i>Demo Premium User
                        </button>
                      </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
}
function handleChange2(e) {
  setFile2(URL.createObjectURL(e.target.files[0]));
}
  return (
    <>
    <Navbar/>
      {/* Notification Toast */}
      {notification && (
        <div className={`position-fixed top-0 end-0 m-4 alert alert-${notification.type === 'success' ? 'success' : 'info'} alert-dismissible fade show`} 
             style={{zIndex: 9999, minWidth: '300px'}} role="alert">
          <i className={`mdi ${notification.type === 'success' ? 'mdi-check-circle' : 'mdi-information'} me-2`}></i>
          {notification.message}
          <button type="button" className="btn-close" onClick={() => setNotification(null)}></button>
        </div>
      )}
      
      <section className="bg-creator-profile">
        <div className="container">
            <div className="profile-banner">
                <input id="pro-banner" name="profile-banner" type="file" className="d-none" onChange={(e)=>handleChange2(e)} />
                <div className="position-relative d-inline-block">
                    <img src={file2} className="rounded-md shadow-sm img-fluid" id="profile-banner" alt=""/>
                    <label className="icons position-absolute bottom-0 end-0" htmlFor="pro-banner"><span className="btn btn-icon btn-sm btn-pills btn-primary"><i className="uil uil-camera fs-6"></i></span></label>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col">
                    <div className="text-center mt-n80">
                        <div className="profile-pic">
                            <input id="pro-img" name="profile-image" type="file" className="d-none" onChange={(e)=>handleChange(e)} />
                            <div className="position-relative d-inline-block">
                                <img src={file} className="avatar avatar-medium img-thumbnail rounded-pill shadow-sm" id="profile-image" alt=""/>
                                <label className="icons position-absolute bottom-0 end-0" htmlFor="pro-img"><span className="btn btn-icon btn-sm btn-pills btn-primary"><i className="uil uil-camera fs-6"></i></span></label>
                            </div>
                        </div>                        <div className="content mt-3">
                            <h5 className="mb-3">{user?.username || 'streetboyyy'}</h5>
                            <div className="d-flex align-items-center justify-content-center mb-3">
                                <small className="text-muted px-3 py-2 rounded-lg shadow bg-light d-flex align-items-center">
                                    <i className="uil uil-envelope me-2 text-primary"></i>
                                    {user?.email || 'user@pixev.com'}
                                </small>
                            </div>                            <h6 className="mt-3 mb-0">{user?.description || 'Artist, UX / UI designer, and Entrepreneur'}</h6>
                            
                            {/* Subscription Status */}
                            <div className="mt-3 mb-3">
                                <div className={`badge ${userSubscription?.plan?.id === 'free' ? 'bg-soft-info text-info' : 'bg-soft-warning text-warning'} fs-6`}>
                                    <i className={`mdi ${userSubscription?.plan?.id === 'free' ? 'mdi-account' : 'mdi-crown'} me-1`}></i>
                                    {userSubscription?.plan?.name || 'Free Plan'}
                                </div>
                                {userSubscription?.plan?.id !== 'free' && (
                                    <small className="text-muted d-block mt-1">
                                        {getRemainingDownloads() === Infinity ? 'Unlimited downloads' : `${getRemainingDownloads()} downloads remaining today`}
                                    </small>
                                )}
                            </div>

                            <div className="row mt-4">
                                <div className="col-3 text-center">
                                    <h6 className="counter-value fw-semibold mb-0">{userResources.length}</h6>
                                    <span className="counter-head text-muted small">Created</span>
                                </div>
                                <div className="col-3 text-center">
                                    <h6 className="counter-value fw-semibold mb-0">{getFavoritesCount()}</h6>
                                    <span className="counter-head text-muted small">Liked</span>
                                </div>
                                <div className="col-3 text-center">
                                    <h6 className="counter-value fw-semibold mb-0">{downloadHistory?.length || 0}</h6>
                                    <span className="counter-head text-muted small">Downloads</span>
                                </div>
                                <div className="col-3 text-center">
                                    <h6 className="counter-value fw-semibold mb-0">${getTotalEarnings()}</h6>
                                    <span className="counter-head text-muted small">Earnings</span>
                                </div>
                            </div>

                            <div className="mt-4">
                                <Link to="/creator-profile-edit" className="btn btn-pills btn-outline-primary mx-1">Edit Profile</Link>
                                <Link to="/upload-work" className="btn btn-pills btn-primary mx-1">
                                    <i className="uil uil-cloud-upload me-1"></i>Upload Work
                                </Link>
                                {userSubscription?.plan?.id === 'free' && (
                                    <Link to="/pricing" className="btn btn-pills btn-warning mx-1">
                                        <i className="mdi mdi-crown me-1"></i>Upgrade
                                    </Link>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="container mt-100 mt-60">
            <div className="row">
                <div className="col-12">                    <ul className="nav nav-tabs border-bottom">
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 1 ? 'active' : ''}`} onClick={()=>setActiveTab(1)}>Created</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 2 ? 'active' : ''}`} onClick={()=>setActiveTab(2)}>
                                Liked 
                                {getFavoritesCount() > 0 && (
                                    <span className="badge bg-primary ms-2">{getFavoritesCount()}</span>
                                )}
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 3 ? 'active' : ''}`} onClick={()=>setActiveTab(3)}>
                                Downloads
                                {downloadHistory?.length > 0 && (
                                    <span className="badge bg-success ms-2">{downloadHistory.length}</span>
                                )}
                            </button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 4 ? 'active' : ''}`} onClick={()=>setActiveTab(4)}>Subscription</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 5 ? 'active' : ''}`} onClick={()=>setActiveTab(5)}>Activities</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${activeTab === 6 ? 'active' : ''}`} onClick={()=>setActiveTab(6)}>Debug</button>
                        </li>
                    </ul>

                    <div className="tab-content mt-4 pt-2">                      {activeTab === 1 && (
                        <div className="tab-pane fade show active">
                            {userResources.length > 0 ? (
                                <>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">{userResources.length} Created Resources</h5>
                                        <Link to="/upload-work" className="btn btn-sm btn-primary">
                                            <i className="uil uil-plus me-1"></i>Upload New
                                        </Link>
                                    </div>
                                    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                                        {userResources.map((item, index) => (
                                            <div className="col" key={index}>
                                                <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                                            <Link to="#" className="text-dark small creator-name h6 mb-0 ms-2">{item.createrName}</Link>
                                                        </div>
                                                        <LikeButton 
                                                            itemId={item.id}
                                                            className="like-icon shadow-sm"
                                                            showAnimation={true}
                                                        />
                                                    </div>
                        
                                                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                                                        <Link to={`/item-detail-one/${item.id}`}>
                                                            {item.fileType?.startsWith('image/') ? (
                                                                <img src={item.product} className="img-fluid" alt=""/>
                                                            ) : (
                                                                <div className="d-flex align-items-center justify-content-center bg-light" style={{height: '200px'}}>
                                                                    <div className="text-center">
                                                                        <i className="uil uil-file display-4 text-primary mb-2"></i>
                                                                        <p className="mb-0 small">{item.fileName}</p>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </Link>
                                                        <div className="position-absolute top-0 start-0 m-2">
                                                            <Link to="#" className="badge badge-link bg-primary">{item.tag}</Link>
                                                        </div>
                                                        <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3">
                                                            <i className="uil uil-download-alt"></i> 
                                                            <small className="fw-bold">{item.value}</small>
                                                        </div>
                                                    </div>
                        
                                                    <div className="card-body content position-relative p-0 mt-3">
                                                        <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>
                                                        
                                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                                            <div className="">
                                                                <small className="mb-0 d-block fw-semibold">Price:</small>
                                                                <small className="rate fw-bold">{item.value}</small>
                                                            </div>
                                                            <div className="text-end">
                                                                <small className="text-muted d-block">Uploaded</small>
                                                                <small className="fw-bold">{new Date(item.uploadDate).toLocaleDateString()}</small>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-md-8 text-center">
                                        <img src={cart} className="img-fluid" alt=""/>
                                        <div className="content">
                                            <h5 className="mb-4">No Resources Created Yet</h5>
                                            <p className="text-muted">Start sharing your creative work with the community. Upload your first resource to get started.</p>
                                            <div className="mt-4">
                                                <Link to="/upload-work" className="btn btn-pills btn-primary">
                                                    <i className="uil uil-cloud-upload me-2"></i>Upload Your First Resource
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                      )}{activeTab === 2 && (
                        <div className="tab-pane fade show active">                            <div className="mb-3 p-3 bg-light rounded">
                                <small className="text-muted">Debug Info:</small><br/>
                                <small>User: {user?.email || 'Not logged in'}</small><br/>
                                <small>Total Resource Items: {resourceData.length}</small><br/>
                                <small>Favorites Count: {getFavoritesCount()}</small><br/>
                                <small>Matching Items Found: {favoriteItems.length}</small><br/>
                                <small>LocalStorage: {user ? localStorage.getItem(`favorites_${user.email}`) || 'Empty' : 'No user'}</small><br/>
                                <button onClick={handleClearStorage} className="btn btn-sm btn-outline-danger mt-2">Clear Storage & Reload</button>
                            </div>
                            
                            {favoriteItems.length > 0 ? (
                                <>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">{getFavoritesCount()} Liked Items</h5>
                                        <small className="text-muted">Your favorite resources</small>
                                    </div>
                                    <div className="row row-cols-xl-4 row-cols-lg-3 row-cols-sm-2 row-cols-1 g-4">
                                        {favoriteItems.map((item, index) => (
                                            <div className="col" key={index}>
                                                <div className="card nft-items nft-primary nft-auction rounded-md shadow overflow-hidden mb-1 p-3">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <div className="d-flex align-items-center">
                                                            <img src={item.creater1} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                                            <Link to="#" className="text-dark small creator-name h6 mb-0 ms-2">{item.createrName}</Link>
                                                        </div>
                                                        <LikeButton 
                                                            itemId={item.id}
                                                            className="like-icon shadow-sm"
                                                            showAnimation={true}
                                                        />
                                                    </div>
                        
                                                    <div className="nft-image rounded-md mt-3 position-relative overflow-hidden">
                                                        <Link to={`/item-detail-one/${item.id}`}><img src={item.product} className="img-fluid" alt=""/></Link>
                                                        <div className="position-absolute top-0 start-0 m-2">
                                                            <Link to="#" className="badge badge-link bg-primary">{item.tag}</Link>
                                                        </div>
                                                    </div>
                        
                                                    <div className="card-body content position-relative p-0 mt-3">
                                                        <Link to={`/item-detail-one/${item.id}`} className="title text-dark h6">{item.name}</Link>
                        
                                                        <div className="d-flex align-items-center justify-content-between mt-3">
                                                            <div className="">
                                                                <small className="mb-0 d-block fw-semibold">Price:</small>
                                                                <small className="rate fw-bold">{item.value}</small>
                                                            </div>
                                                            <Link to={`/item-detail-one/${item.id}`} className="btn btn-icon btn-pills btn-primary"><i className="uil uil-shopping-bag"></i></Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-md-8 text-center">
                                        <img src={officeImage} className="img-fluid" alt=""/>
                                        <div className="content">
                                            <h5 className="mb-4">No Liked Items Yet</h5>
                                            <p className="text-muted">Show your appreciation for other's work by liking the shots you love. We'll collect all of your likes here for you to revisit anytime.</p>
                                            <div className="mt-4">
                                                <Link to="/explore-one" className="btn btn-pills btn-primary">Browse Resources</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                      )}                      {activeTab === 3 && (
                        <div className="tab-pane fade show active">
                            {downloadHistory && downloadHistory.length > 0 ? (
                                <>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <h5 className="mb-0">{downloadHistory.length} Downloads</h5>
                                        <small className="text-muted">Your download history</small>
                                    </div>
                                    <div className="row g-3">
                                        {downloadHistory.map((download, index) => {
                                            const resource = resourceData.find(r => r.id === download.resourceId);
                                            return (
                                                <div className="col-12" key={index}>
                                                    <div className="card border-0 shadow-sm p-3">
                                                        <div className="row align-items-center">
                                                            <div className="col-auto">
                                                                {resource && (
                                                                    <img src={resource.product} className="rounded" style={{width: '60px', height: '60px', objectFit: 'cover'}} alt=""/>
                                                                )}
                                                            </div>
                                                            <div className="col">
                                                                <h6 className="mb-1">{download.resourceName}</h6>
                                                                <div className="d-flex flex-wrap gap-2">
                                                                    <small className="text-muted">
                                                                        <i className="mdi mdi-calendar me-1"></i>
                                                                        {download.downloadDate}
                                                                    </small>
                                                                    <small className="text-muted">
                                                                        <i className="mdi mdi-file-outline me-1"></i>
                                                                        {download.fileSize}
                                                                    </small>
                                                                    <span className={`badge ${download.category === 'templates' ? 'bg-primary' : download.category === 'graphics' ? 'bg-success' : 'bg-info'}`}>
                                                                        {download.category}
                                                                    </span>
                                                                </div>
                                                            </div>
                                                            <div className="col-auto">
                                                                <Link to={`/item-detail-one/${download.resourceId}`} className="btn btn-sm btn-outline-primary">
                                                                    <i className="mdi mdi-eye me-1"></i>View
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <div className="row justify-content-center">
                                    <div className="col-lg-5 col-md-8 text-center">
                                        <img src={cart} className="img-fluid" alt=""/>
                                        <div className="content">
                                            <h5 className="mb-4">No Downloads Yet</h5>
                                            <p className="text-muted">Start exploring and downloading creative resources. Your download history will appear here.</p>
                                            <div className="mt-4">
                                                <Link to="/explore-one" className="btn btn-pills btn-primary">Browse Resources</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                      )}                      {activeTab === 4 && (
                        <div className="tab-pane fade show active">
                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="card shadow border-0 p-4 mb-4">
                                        <div className="d-flex align-items-center justify-content-between mb-3">
                                            <h5 className="mb-0">Current Subscription</h5>
                                            <div className={`badge ${userSubscription?.plan?.id === 'free' ? 'bg-soft-info text-info' : 'bg-soft-warning text-warning'} fs-6`}>
                                                <i className={`mdi ${userSubscription?.plan?.id === 'free' ? 'mdi-account' : 'mdi-crown'} me-1`}></i>
                                                {userSubscription?.plan?.name || 'Free Plan'}
                                            </div>
                                        </div>
                                        
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <div className="border rounded p-3 bg-light">
                                                    <h6 className="mb-2">Downloads</h6>
                                                    <p className="mb-0 text-muted">
                                                        {userSubscription?.plan?.id === 'free' 
                                                            ? `${getRemainingDownloads()} of ${userSubscription?.plan?.dailyDownloads || 3} remaining today`
                                                            : 'Unlimited downloads'
                                                        }
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="border rounded p-3 bg-light">
                                                    <h6 className="mb-2">Price</h6>
                                                    <p className="mb-0 text-muted">
                                                        {userSubscription?.plan?.price === 0 ? 'Free' : `$${userSubscription?.plan?.price}/month`}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-12">
                                                <div className="border rounded p-3 bg-light">
                                                    <h6 className="mb-2">Features</h6>
                                                    <div className="d-flex flex-wrap gap-2">
                                                        {userSubscription?.plan?.features?.map((feature, index) => (
                                                            <span key={index} className="badge bg-primary">{feature}</span>
                                                        )) || <span className="text-muted">Basic features included</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {userSubscription?.plan?.id === 'free' && (
                                            <div className="mt-4 text-center">
                                                <h6 className="mb-3">Upgrade to Premium</h6>
                                                <p className="text-muted mb-3">Get unlimited downloads, premium resources, and more!</p>
                                                <Link to="/pricing" className="btn btn-warning">
                                                    <i className="mdi mdi-crown me-2"></i>Upgrade Now
                                                </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <div className="col-lg-4">
                                    <div className="card shadow border-0 p-4">
                                        <h6 className="mb-3">Usage Statistics</h6>
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between mb-1">
                                                <small>Downloads this month</small>
                                                <small className="fw-semibold">{downloadHistory?.length || 0}</small>
                                            </div>
                                            <div className="progress" style={{height: '6px'}}>
                                                <div className="progress-bar bg-primary" style={{width: `${Math.min((downloadHistory?.length || 0) / 20 * 100, 100)}%`}}></div>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between mb-1">
                                                <small>Liked items</small>
                                                <small className="fw-semibold">{getFavoritesCount()}</small>
                                            </div>
                                            <div className="progress" style={{height: '6px'}}>
                                                <div className="progress-bar bg-success" style={{width: `${Math.min(getFavoritesCount() / 10 * 100, 100)}%`}}></div>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-3">
                                            <div className="d-flex justify-content-between mb-1">
                                                <small>Uploaded resources</small>
                                                <small className="fw-semibold">{userResources.length}</small>
                                            </div>
                                            <div className="progress" style={{height: '6px'}}>
                                                <div className="progress-bar bg-warning" style={{width: `${Math.min(userResources.length / 5 * 100, 100)}%`}}></div>
                                            </div>
                                        </div>
                                        
                                        <hr/>
                                        <small className="text-muted">Member since: {user?.joinDate || 'Recently'}</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )}
                      {activeTab === 5 && (
                        <div className="tab-pane fade show active">
                            <div className="row g-4">
                              {activityData.map((item,index) =>{
                                return(
                                  <div className="col-12" key={index}>
                                    <div className="card activity activity-primary rounded-md shadow p-4">
                                        <div className="d-flex align-items-center">
                                            <div className="position-relative">
                                                <img src={item.image} className="avatar avatar-md-md rounded-md shadow-md" alt=""/>

                                                <div className="position-absolute top-0 start-0 translate-middle px-1 rounded-lg shadow-md bg-white">
                                                    <i className={item.icon}></i>
                                                </div>
                                            </div>
                                                
                                            <span className="content ms-3">
                                                <Link to="#" className="text-dark title mb-0 h6 d-block">{item.title}</Link>
                                                <small className="text-muted d-block mt-1">{item.name} <Link to="#" className="link fw-bold">{item.name2}</Link></small>
                                                
                                                <small className="text-muted d-block mt-1">{item.time}</small>
                                            </span>
                                        </div>
                                    </div>
                                  </div>
                                )
                              })}
                            </div>

                            <div className="row">
                                <div className="col-12 text-center mt-4">
                                    <Link to="#" className="btn btn-link primary text-dark">Load More <i className="uil uil-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                      )}                      {activeTab === 6 && (
                        <div className="tab-pane fade show active">
                            <h5 className="mb-4">Debug Information</h5>
                            <div className="row g-3">
                                <div className="col-12">
                                    <div className="card border-0 shadow-sm p-4">
                                        <h6 className="mb-3">User Information</h6>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <small className="text-muted d-block">Email:</small>
                                                <code>{user?.email || 'Not logged in'}</code>
                                            </div>
                                            <div className="col-md-6">
                                                <small className="text-muted d-block">Username:</small>
                                                <code>{user?.username || 'N/A'}</code>
                                            </div>
                                            <div className="col-md-6">
                                                <small className="text-muted d-block">Subscription Plan:</small>
                                                <code>{userSubscription?.plan?.name || 'Free'}</code>
                                            </div>
                                            <div className="col-md-6">
                                                <small className="text-muted d-block">Remaining Downloads:</small>
                                                <code>{getRemainingDownloads() === Infinity ? 'Unlimited' : getRemainingDownloads()}</code>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm p-4">
                                        <h6 className="mb-3">Storage Data</h6>
                                        <div className="mb-2">
                                            <small className="text-muted d-block">Favorites LocalStorage:</small>
                                            <textarea className="form-control form-control-sm" rows="3" readOnly 
                                                value={user ? localStorage.getItem(`favorites_${user.email}`) || 'Empty' : 'No user'} />
                                        </div>
                                        <div className="mb-2">
                                            <small className="text-muted d-block">Downloads LocalStorage:</small>
                                            <textarea className="form-control form-control-sm" rows="3" readOnly 
                                                value={user ? localStorage.getItem(`downloads_${user.email}`) || 'Empty' : 'No user'} />
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-md-6">
                                    <div className="card border-0 shadow-sm p-4">
                                        <h6 className="mb-3">Statistics</h6>
                                        <div className="row g-2">
                                            <div className="col-6">
                                                <small className="text-muted d-block">Total Resources:</small>
                                                <code>{resourceData.length}</code>
                                            </div>
                                            <div className="col-6">
                                                <small className="text-muted d-block">Favorites Count:</small>
                                                <code>{getFavoritesCount()}</code>
                                            </div>
                                            <div className="col-6">
                                                <small className="text-muted d-block">Downloads Count:</small>
                                                <code>{downloadHistory?.length || 0}</code>
                                            </div>
                                            <div className="col-6">
                                                <small className="text-muted d-block">Uploads Count:</small>
                                                <code>{userResources.length}</code>
                                            </div>
                                        </div>
                                          <div className="mt-3">
                                            <h6 className="mb-2">Quick Actions</h6>
                                            <button onClick={handleClearStorage} className="btn btn-sm btn-outline-danger me-2">
                                                <i className="mdi mdi-delete me-1"></i>Clear Storage & Reload
                                            </button>
                                            <button onClick={() => console.log('Current user data:', { user, userSubscription, downloadHistory, favoriteItems })} className="btn btn-sm btn-outline-info me-2">
                                                <i className="mdi mdi-console me-1"></i>Log to Console
                                            </button>
                                            <button onClick={() => handleDemoLogin('free')} className="btn btn-sm btn-outline-primary me-2">
                                                <i className="mdi mdi-account me-1"></i>Switch to Free Demo
                                            </button>
                                            <button onClick={() => handleDemoLogin('premium')} className="btn btn-sm btn-warning">
                                                <i className="mdi mdi-crown me-1"></i>Switch to Premium Demo
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      )}
                      {
                        activeTab === 7 && (
                          <div className="tab-pane fade show active">
                              <h5 className="mb-4">Calvin Carlo</h5>

                              <p className="text-muted mb-0">I have started my career as a trainee and prove my self and achieve all the milestone with good guidance and reach up to the project manager. In this journey, I understand all the procedure which make me a good developer, team leader, and a project manager.</p>
                          </div>
                        )
                      }
                    </div>
                </div>
            </div>
        </div>
      </section>
      <Footer/>
    </>
  )
}
