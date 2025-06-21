import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import SearchComponent from './SearchComponent'
import BrowseResourcesMenu from './BrowseResourcesMenu'
import useNavbarLogic from '../hooks/useNavbarLogic'

import logopixel from '../assets/images/logopixel.svg'
import Modal from 'react-bootstrap/Modal';
import mataMask from '../assets/images/wallet/metamask.5801d957d27c65deeef0.png'
import userAvatar from '../assets/images/client/01.jpg'

export default function Navbar({navlight, gradient}) {
    const [show, setShow] = useState(false);
    const { user, logout } = useUser();
    const current = window.location.pathname;
    
    // Use custom hook for navbar logic
    const {
        manu,
        submenu,
        setSubManu,
        toggle,
        setToggle,
        search,
        setSearch,
        userDropdown,
        setUserDropdown,
        scrolling,
        toggleSubmenu,
        isPageInCategory
    } = useNavbarLogic(current);

    let searchRef = useRef(null)
    let userRef = useRef(null)

    useEffect(()=>{
        const searchOutClick = (event) =>{
            if(searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch(false)
            }
        };

        const userOutClick = (event) => {
            if(userRef.current && !userRef.current.contains(event.target)){
                setUserDropdown(false)
            }
        };

        window.addEventListener('click', searchOutClick)
        window.addEventListener('click', userOutClick)
        window.scrollTo(0, 0)
        
        return()=>{
            window.removeEventListener('click', searchOutClick)
            window.removeEventListener('click', userOutClick)
        }
    },[current, setSearch, setUserDropdown])

    const handleLogout = () => {
        logout();
        setUserDropdown(false);
        window.location.href = '/';
    };

  return (
        <header id="topnav" className={`defaultscroll sticky ${scrolling ? 'nav-sticky' : ''} ${gradient ? 'gradient' : ''}`}>
            <div className="container">                {navlight ? (
                    <Link className="logo" to="/">
                        <span className="logo-light-mode">
                            <img src={logopixel} height="26" className="l-dark" alt=""/>
                            <img src={logopixel} height="26" className="l-light" alt=""/>
                        </span>
                        <img src={logopixel} height="26" className="logo-dark-mode" alt=""/>
                    </Link>
                    ) : (
                        <Link className="logo" to="/">
                        <img src={logopixel} height="26" className="logo-light-mode" alt=""/>
                        <img src={logopixel} height="26" className="logo-dark-mode" alt=""/>
                    </Link>
                )}
                

                

                <div className="menu-extras">
                    <div className="menu-item">
                        <Link className={`navbar-toggle ${toggle ? 'open' : ''}`} id="isToggle" onClick={(e)=>{setToggle(!toggle)}} >
                            <div className="lines">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </div>

                <ul className="buy-button list-inline mb-0">
                    <li className="list-inline-item mb-0 me-1" ref={searchRef}>
                        <div className="dropdown">
                            {navlight ? (
                                <button type="button" className="btn dropdown-toggle p-0" onClick={(e)=>{setSearch(!search)}} >
                                    <i className="uil uil-search text-white title-dark btn-icon-light fs-5 align-middle"></i>
                                    <i className="uil uil-search text-dark btn-icon-dark fs-5 align-middle"></i>
                                </button>
                                ) : (
                                <button type="button" className="btn dropdown-toggle p-0"onClick={(e)=>{setSearch(!search)}} >
                                    <i className="uil uil-search text-dark fs-5 align-middle"></i>
                                </button>
                            )}
                            
                            {search && (
                                <div className="dropdown-menu dd-menu d-block dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0 end-0" style={{width:'350px'}}>
                                    <SearchComponent isInNavbar={true} placeholder="Search resources..." />
                                </div>
                            )}
                        </div>
                    </li>

                      <li className="list-inline-item mb-0" ref={userRef}>
                        {user ? (
                            <div className="dropdown dropdown-primary">
                                <button type="button" className="btn btn-pills dropdown-toggle p-0" onClick={()=>setUserDropdown(!userDropdown)}>
                                    <img 
                                        src={userAvatar} 
                                        className="avatar avatar-sm-sm rounded-pill" 
                                        alt="User Avatar"
                                        style={{width: '32px', height: '32px', objectFit: 'cover'}}
                                    />
                                </button>
                                {userDropdown && (
                                    <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-2 pt-0 overflow-hidden rounded d-block end-0" style={{width:'220px'}}>
                                        {/* Header Section */}
                                        <div className="position-relative">
                                            <div className="pt-4 pb-3 bg-gradient-primary"></div>
                                            <div className="px-3 pb-3">
                                                <div className="d-flex align-items-center mt-n4">
                                                    <div className="me-3">
                                                        <img 
                                                            src={userAvatar} 
                                                            className="avatar avatar-md-sm rounded-pill shadow-md border border-white" 
                                                            alt="User Avatar"
                                                            style={{width: '40px', height: '40px', objectFit: 'cover'}}
                                                        />
                                                    </div>
                                                    <div className="flex-grow-1">
                                                        <h6 className="text-white fw-bold mb-1">{user?.username || 'User'}</h6>
                                                        <small className="text-dark d-block" style={{fontSize: '11px'}}>
                                                            {user?.email || 'user@example.com'}
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Menu Items */}
                                        <div className="px-2">
                                            <Link 
                                                className="dropdown-item rounded py-2 px-3 d-flex align-items-center text-decoration-none" 
                                                to="/creator-profile"
                                                onClick={() => setUserDropdown(false)}
                                            >
                                                <i className="uil uil-user text-primary me-2 fs-6"></i>
                                                <span className="fw-semibold text-dark">My Account</span>
                                            </Link>
                                            
                                            <Link 
                                                className="dropdown-item rounded py-2 px-3 d-flex align-items-center text-decoration-none" 
                                                to="/creator-profile-edit"
                                                onClick={() => setUserDropdown(false)}
                                            >
                                                <i className="uil uil-cog text-success me-2 fs-6"></i>
                                                <span className="fw-semibold text-dark">Settings</span>
                                            </Link>

                                            <hr className="dropdown-divider my-2"/>
                                            
                                            <button 
                                                className="dropdown-item rounded py-2 px-3 d-flex align-items-center border-0 bg-transparent w-100 text-start" 
                                                onClick={handleLogout}
                                            >
                                                <i className="uil uil-sign-out-alt text-danger me-2 fs-6"></i>
                                                <span className="fw-semibold text-dark">Logout</span>
                                            </button>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <Link to="/login" className="btn btn-pills btn-primary">
                                <i className="uil uil-user me-1"></i>Login
                            </Link>
                        )}
                    </li>
                </ul>
        
                <div id="navigation" style={{display : toggle ? 'block' : 'none'}}>
                    <ul className={`navigation-menu nav-left ${navlight ? 'nav-light' : ''}`}>
                        <li className={`${manu === '/' ? 'active' : ''}`}>
                            <Link to="/" className="sub-menu-item">Home</Link>
                        </li>
                        <BrowseResourcesMenu 
                            submenu={submenu}
                            setSubManu={setSubManu}
                            manu={manu}
                            currentPath={current}
                            isMobile={false}
                        />
                        
                        <li className={manu === '/pricing' ? 'active' : ''}><Link to="/pricing" className="sub-menu-item">Pricing</Link></li>

                        <li className={`ms-0 ${manu === '/aboutus' ? 'active' : ''}`}><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>

                        <li className={`ms-0 ${manu === '/blogs' ? 'active' : ''}`}><Link to="/blogs" className="sub-menu-item">Blog</Link></li>

                        {/* More menu dropdown for guest users */}
                        {!user && (
                            <li className={`has-submenu parent-parent-menu-item ${isPageInCategory(['/contact', '/helpcenter-faqs', '/terms', '/privacy']) ? 'active' : ''}`}>
                                <Link to="#" onClick={() => toggleSubmenu('/more-menu')}>More</Link>
                                <span className="menu-arrow"></span>
                                <ul className={`submenu ${submenu === '/more-menu' ? 'open' : ''}`}>
                                    <li className={`ms-0 ${manu === '/contact' ? 'active' : ''}`}><Link to="/contact" className="sub-menu-item">Contact</Link></li>
                                    <li className={`ms-0 ${manu === '/helpcenter-faqs' ? 'active' : ''}`}><Link to="/helpcenter-faqs" className="sub-menu-item">FAQs</Link></li>
                                    <li className={`ms-0 ${manu === '/terms' ? 'active' : ''}`}><Link to="/terms" className="sub-menu-item">Terms</Link></li>
                                    <li className={`ms-0 ${manu === '/privacy' ? 'active' : ''}`}><Link to="/privacy" className="sub-menu-item">Privacy</Link></li>
                                </ul>
                            </li>
                        )}

                        {/* My Account dropdown for logged-in users */}
                        {user && (
                            <li className={`has-submenu parent-parent-menu-item ${isPageInCategory(['/activity', '/wallet', '/upload-work']) ? 'active' : ''}`}>
                                <Link to="#" onClick={() => toggleSubmenu('/my-account-menu')}>My Account</Link>
                                <span className="menu-arrow"></span>
                                <ul className={`submenu ${submenu === '/my-account-menu' ? 'open' : ''}`}>
                                    <li className={`ms-0 ${manu === '/activity' ? 'active' : ''}`}><Link to="/activity" className="sub-menu-item">My Downloads</Link></li>
                                    <li className={`ms-0 ${manu === '/wallet' ? 'active' : ''}`}><Link to="/wallet" className="sub-menu-item">Account Settings</Link></li>
                                    <li className={`ms-0 ${manu === '/upload-work' ? 'active' : ''}`}><Link to="/upload-work" className="sub-menu-item">Submit Resources</Link></li>
                                </ul>
                            </li>
                        )}

                        {/* Community dropdown for logged-in users */}
                        {user && (
                            <li className={`has-submenu parent-parent-menu-item ${isPageInCategory(['/creators', '/collections']) ? 'active' : ''}`}>
                                <Link to="#" onClick={() => toggleSubmenu('/community-menu')}>Community</Link>
                                <span className="menu-arrow"></span>
                                <ul className={`submenu ${submenu === '/community-menu' ? 'open' : ''}`}>
                                    <li className={`ms-0 ${manu === '/creators' ? 'active' : ''}`}><Link to="/creators" className="sub-menu-item">Authors</Link></li>
                                    <li className={`ms-0 ${manu === '/collections' ? 'active' : ''}`}><Link to="/collections" className="sub-menu-item">Resource Bundles</Link></li>
                                </ul>
                            </li>
                        )}

                        {/* Contact for logged-in users */}
                        {user && (
                            <li className={manu === '/contact' ? 'active' : ''}><Link to="/contact" className="sub-menu-item">Contact</Link></li>
                        )}
                    </ul>
                </div>
            </div>
         <Modal show={show} onHide={()=>setShow(false)}>
         <Modal.Body className='text-center'>
            <img src={mataMask} className="avatar avatar-md-md rounded-circle shadow-sm " alt=""/>

            <div className="content mt-4">
                <h5 className="text-danger mb-4">Error!</h5>

                <p className="text-muted">Please Download MetaMask and create your profile and wallet in MetaMask. Please click and check the details,</p>

                <Link to="https://metamask.io/" className="btn btn-link primary text-primary fw-bold" target="_blank">MetaMask</Link>
            </div>
         </Modal.Body>
       </Modal>
        </header>
  )
}
