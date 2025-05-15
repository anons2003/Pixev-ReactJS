import React, { useEffect, useState, useRef } from 'react'
import { Link } from 'react-router-dom'

import logoDark from '../assets/images/logo-dark.png'
import logoLight from '../assets/images/logo-light.png'
import logoWhite from '../assets/images/logo-white.png'
import client1 from '../assets/images/client/01.jpg'
import Modal from 'react-bootstrap/Modal';
import mataMask from '../assets/images/wallet/metamask.5801d957d27c65deeef0.png'

import { ethers } from "ethers";

export default function Navbar({navlight, gradient}) {
    const [show, setShow] = useState(false);
    let [manu, setManu] = useState();
    let [submenu, setSubManu] = useState();
    let [toggle, setToggle] = useState(false)
    let [search, setSearch] = useState(false)
    let [user, setUser] = useState(false)
    let [scrolling, setScrolling] = useState(false);

    const [data, setdata] = useState({
        address: "",
        Balance: null,
    });

    let current = window.location.pathname
    let searchRef = useRef(null)
    let userRef = useRef(null)

    useEffect(()=>{
        setManu(current);
        setSubManu(current)

        const handleScroll = () => {
            const isScrolling = window.scrollY > 50;
            setScrolling(isScrolling);
        };

        const searchOutClick = (event) =>{
            if(searchRef.current && !searchRef.current.contains(event.target)) {
                setSearch(false)
            }
        }

        const userOutClick = (event) => {
            if(userRef.current && !userRef.current.contains(event.target)){
                setUser(false)
            }
        }

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', searchOutClick)
        window.addEventListener('click', userOutClick)
        window.scrollTo(0, 0)
        

        return()=>{
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', searchOutClick)
            window.removeEventListener('click', userOutClick)
        }
    },[current])

    const btnhandler = () => {
        if (window.ethereum) {
            window.ethereum
                .request({ method: "eth_requestAccounts" })
                .then((res) =>
                    accountChangeHandler(res[0])
                );
        } else {
            setShow(true)
        }
    };

    const getbalance = (address) => {
        window.ethereum
            .request({
                method: "eth_getBalance",
                params: [address, "latest"],
            })
            .then((balance) => {
                setdata({
                    Balance:
                        ethers.utils.formatEther(balance),
                });
            });
    };

    const accountChangeHandler = (account) => {
        setdata({
            address: account,
        });
        getbalance(account);
    };

  return (
        <header id="topnav" className={`defaultscroll sticky ${scrolling ? 'nav-sticky' : ''} ${gradient ? 'gradient' : ''}`}>
            <div className="container">
                {navlight ? (
                    <Link className="logo" to="/">
                        <span className="logo-light-mode">
                            <img src={logoDark} height="26" className="l-dark" alt=""/>
                            <img src={logoWhite} height="26" className="l-light" alt=""/>
                        </span>
                        <img src={logoLight} height="26" className="logo-dark-mode" alt=""/>
                    </Link>
                    ) : (
                        <Link className="logo" to="/">
                        <img src={logoDark} height="26" className="logo-light-mode" alt=""/>
                        <img src={logoLight} height="26" className="logo-dark-mode" alt=""/>
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
                                <div className="dropdown-menu dd-menu d-block dropdown-menu-end bg-white shadow rounded border-0 mt-3 p-0 end-0" style={{width:'300px'}}>
                                    <div className="search-bar">
                                        <div id="itemSearch" className="menu-search mb-0">
                                            <form className="searchform">
                                                <input type="text" className="form-control border rounded shadow" name="s" id="s" placeholder="Search..."/>
                                                <input type="submit" id="searchItemsubmit" value="Search"/>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>

                    <li className="list-inline-item mb-0 me-1">
                        <Link id="connectWallet" onClick={()=>btnhandler()}>
                            <span className="btn-icon-dark"><span className="btn btn-icon btn-pills btn-primary"><i className="uil uil-wallet fs-6"></i></span></span>
                            <span className="btn-icon-light"><span className="btn btn-icon btn-pills btn-light"><i className="uil uil-wallet fs-6"></i></span></span>
                        </Link>
                    </li>
                    
                    <li className="list-inline-item mb-0" ref={userRef}>
                        <div className="dropdown dropdown-primary">
                            <button type="button" className="btn btn-pills dropdown-toggle p-0" onClick={()=>setUser(!user)}><img src={client1} className="rounded-pill avatar avatar-sm-sm" alt=""/></button>
                            {user && (
                                <div className="dropdown-menu dd-menu dropdown-menu-end bg-white shadow border-0 mt-3 pb-3 pt-0 overflow-hidden rounded d-block  end-0" style={{width:'200px'}}>
                                    <div className="position-relative">
                                        <div className="pt-5 pb-3 bg-gradient-primary"></div>
                                        <div className="px-3">
                                            <div className="d-flex align-items-end mt-n4">
                                                <img src={client1} className="rounded-pill avatar avatar-md-sm img-thumbnail shadow-md" alt=""/>
                                                <h6 className="text-dark fw-bold mb-0 ms-1">Calvin Carlo</h6>
                                            </div>
                                            <div className="mt-2">
                                                <small className="text-start text-dark d-block fw-bold">Wallet:</small>
                                                <div className="d-flex justify-content-between align-items-center">
                                                    <small id="myPublicAddress" className="text-muted">qhut0...hfteh45</small>
                                                    <Link to="" className="text-primary"><span className="uil uil-copy"></span></Link>
                                                </div>
                                            </div>
                                            
                                            <div className="mt-2">
                                                <small className="text-dark">Balance: <span className="text-primary fw-bold">0.00045ETH</span></small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-2">
                                        <Link className="dropdown-item small fw-semibold text-dark d-flex align-items-center" to="/creator-profile"><span className="mb-0 d-inline-block me-1"><i className="uil uil-user align-middle h6 mb-0 me-1"></i></span> Profile</Link>
                                        <Link className="dropdown-item small fw-semibold text-dark d-flex align-items-center" to="/creator-profile-edit"><span className="mb-0 d-inline-block me-1"><i className="uil uil-cog align-middle h6 mb-0 me-1"></i></span> Settings</Link>
                                        <div className="dropdown-divider border-top"></div>
                                        <Link className="dropdown-item small fw-semibold text-dark d-flex align-items-center" to="/lock-screen"><span className="mb-0 d-inline-block me-1"><i className="uil uil-sign-out-alt align-middle h6 mb-0 me-1"></i></span> Logout</Link>
                                    </div>
                                </div>
                            )}
                        </div>
                    </li>
                </ul>
        
                <div id="navigation" style={{display : toggle ? 'block' : 'none'}}>
                    <ul className={`navigation-menu nav-left ${navlight ? 'nav-light' : ''}`}>
                        <li className={`has-submenu parent-parent-menu-item ${['/', '/home-item','/index-two','/index-three','/index-four','/index-five'].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(submenu === '/home-item' ? '' : '/home-item' )}>Home</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/', '/home-item','/index-two','/index-three','/index-four','/index-five'].includes(submenu) ? 'open' : ''}`}>
                                {/* <li className="megamenu-head">LTR Home Pages</li> */}
                                <li className={`ms-0 ${manu === '/' ? 'active' : ''}`}><Link to="/" className="sub-menu-item">Home One</Link></li>
                                <li className={`ms-0 ${manu === '/index-two' ? 'active' : ''}`}><Link to="/index-two" className="sub-menu-item">Home Two</Link></li>
                                <li className={`ms-0 ${manu === '/index-three' ? 'active' : ''}`}><Link to="/index-three" className="sub-menu-item">Home Three</Link></li>
                                <li className={`ms-0 ${manu === '/index-four' ? 'active' : ''}`}><Link to="/index-four" className="sub-menu-item">Home Four</Link></li>
                                <li className={`ms-0 ${manu === '/index-five' ? 'active' : ''}`}><Link to="/index-five" className="sub-menu-item">Home Five</Link></li>
                            </ul>
                        </li>
                        
                        <li className={`has-submenu parent-parent-menu-item ${['/explore-item', '/explore-one', '/explore-two', '/explore-three','/explore-four','/auction','/item-detail-one','/item-detail-two'].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(submenu === '/explore-item' ? '' : '/explore-item')}>Explore</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/explore-item', '/explore-one', '/explore-two', '/explore-three','/explore-four','/auction','/item-detail-one','/item-detail-two'].includes(submenu) ? 'open' : ''}`}>
                                <li className={`ms-0 ${manu === '/explore-one' ? 'active' : ''}`}><Link to="/explore-one" className="sub-menu-item"> Explore One</Link></li>
                                <li className={`ms-0 ${manu === '/explore-two' ? 'active' : ''}`}><Link to="/explore-two" className="sub-menu-item"> Explore Two</Link></li>
                                <li className={`ms-0 ${manu === '/explore-three' ? 'active' : ''}`}><Link to="/explore-three" className="sub-menu-item"> Explore Three</Link></li>
                                <li className={`ms-0 ${manu === '/explore-four' ? 'active' : ''}`}><Link to="/explore-four" className="sub-menu-item"> Explore Four</Link></li>
                                <li className={`ms-0 ${manu === '/auction' ? 'active' : ''}`}><Link to="/auction" className="sub-menu-item">Live Auction</Link></li>
                                <li className={`ms-0 ${manu === '/item-detail-one' ? 'active' : ''}`}><Link to="/item-detail-one" className="sub-menu-item"> Item Detail One</Link></li>
                                <li className={`ms-0 ${manu === '/item-detail-two' ? 'active' : ''}`}><Link to="/item-detail-two" className="sub-menu-item"> Item Detail Two</Link></li>
                            </ul>
                        </li>
                        
                        <li className={manu === '/activity' ? 'active' : ''}><Link to="/activity" className="sub-menu-item"> Activity</Link></li>

                        <li className={manu === '/wallet' ? 'active' : ''}><Link to="/wallet" className="sub-menu-item">Wallet</Link></li>

                        <li className={`has-submenu parent-parent-menu-item ${['/page-item','/aboutus','/creator-item','/creators','/creator-profile','/creator-profile-edit','/become-creator','/collections','/blog-item','/blogs','/blog-sidebar','/blog-detail','/auth-item','/login','/signup','/reset-password','/lock-screen','/special-item','/comingsoon','/maintenance','/error','/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request','/upload-work','/terms','/privacy','/changelog'].includes(manu) ? 'active' : ''}`}>
                            <Link to="#" onClick={()=>setSubManu(submenu === '/page-item' ? '' : '/page-item')}>Pages</Link><span className="menu-arrow"></span>
                            <ul className={`submenu ${['/page-item','/aboutus','/creator-item','/creators','/creator-profile','/creator-profile-edit','/become-creator','/collections','/blog-item','/blogs','/blog-sidebar','/blog-detail','/auth-item','/login','/signup','/reset-password','/lock-screen','/special-item','/comingsoon','/maintenance','/error','/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request','/upload-work','/terms','/privacy','/changelog'].includes(submenu) ? 'open' : ''}`}>
                                <li><Link to="/aboutus" className="sub-menu-item">About Us</Link></li>
                                <li className={`has-submenu parent-menu-item ms-0 ${['/creator-item','/creators','/creator-profile','/creator-profile-edit','/become-creator'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(submenu === '/creator-item' ? '' : '/creator-item')}> Creator </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/creator-item','/creators','/creator-profile','/creator-profile-edit','/become-creator'].includes(submenu) ? 'open' : ''}`}>
                                        <li className={`ms-0 ${manu === '/creators' ? 'active' : ''}`}><Link to="/creators" className="sub-menu-item"> Creators</Link></li>
                                        <li className={`ms-0 ${manu === '/creator-profile' ? 'active' : ''}`}><Link to="/creator-profile" className="sub-menu-item"> Creator Profile</Link></li>
                                        <li className={`ms-0 ${manu === '/creator-profile-edit' ? 'active' : ''}`}><Link to="/creator-profile-edit" className="sub-menu-item"> Profile Edit</Link></li>
                                        <li className={`ms-0 ${manu === '/become-creator' ? 'active' : ''}`}><Link to="/become-creator" className="sub-menu-item"> Become Creator</Link></li>
                                    </ul>
                                </li>
                                <li className={`ms-0 ${manu === '/collections' ? 'active' : ''}`}><Link to="/collections" className="sub-menu-item">Collections</Link></li>
                                <li className={`has-submenu parent-menu-item ms-0 ${['/blog-item','/blogs','/blog-sidebar','/blog-detail'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(submenu === '/blog-item' ? '' : '/blog-item')}> Blog </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/blog-item','/blogs','/blog-sidebar','/blog-detail'].includes(submenu) ? 'open' : ''}`}>
                                        <li className={`ms-0 ${manu === '/blogs' ? 'active' : ''}`}><Link to="/blogs" className="sub-menu-item"> Blogs</Link></li>
                                        <li className={`ms-0 ${manu === '/blog-sidebar' ? 'active' : ''}`}><Link to="/blog-sidebar" className="sub-menu-item"> Blog with sidebar</Link></li>
                                        <li className={`ms-0 ${manu === '/blog-detail' ? 'active' : ''}`}><Link to="/blog-detail" className="sub-menu-item"> Blog Detail</Link></li>
                                    </ul> 
                                </li>
                                <li className={`has-submenu parent-menu-item ms-0 ${['/auth-item','/login','/signup','/reset-password','/lock-screen'].includes(manu)? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(submenu === '/auth-item' ? '' : '/auth-item' )}> Auth Pages </Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/auth-item','/login','/signup','/reset-password','/lock-screen'].includes(submenu)? 'open' : ''}`}>
                                        <li className='ms-0'><Link to="/login" className="sub-menu-item"> Login</Link></li>
                                        <li className='ms-0'><Link to="/signup" className="sub-menu-item"> Signup</Link></li>
                                        <li className='ms-0'><Link to="/reset-password" className="sub-menu-item"> Forgot Password</Link></li>
                                        <li className='ms-0'><Link to="/lock-screen" className="sub-menu-item"> Lock Screen</Link></li>
                                    </ul> 
                                </li>
                                <li className={`has-submenu parent-menu-item ms-0 ${['/special-item','/comingsoon','/maintenance','/error'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(submenu === '/special-item' ? '' : '/special-item')}> Special</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/special-item','/comingsoon','/maintenance','/error'].includes(submenu) ? 'open' : ''}`}>
                                        <li className='ms-0'><Link to="/comingsoon" className="sub-menu-item"> Coming Soon</Link></li>
                                        <li className='ms-0'><Link to="/maintenance" className="sub-menu-item"> Maintenance</Link></li>
                                        <li className='ms-0'><Link to="/error" className="sub-menu-item"> 404!</Link></li>
                                    </ul> 
                                </li>
                                <li className={`has-submenu parent-menu-item ms-0 ${['/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request'].includes(manu) ? 'active' : ''}`}><Link to="#" onClick={()=>setSubManu(submenu === '/help-item' ? '' : '/help-item')}> Help Center</Link><span className="submenu-arrow"></span>
                                    <ul className={`submenu ${['/help-item','/helpcenter-overview','/helpcenter-faqs','/helpcenter-guides','/helpcenter-support-request'].includes(submenu) ? 'open' : ''}`}>
                                        <li className={`ms-0 ${manu === '/helpcenter-overview' ? 'active' : ''}`}><Link to="/helpcenter-overview" className="sub-menu-item"> Overview</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-faqs' ? 'active' : ''}`}><Link to="/helpcenter-faqs" className="sub-menu-item"> FAQs</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-guides' ? 'active' : ''}`}><Link to="/helpcenter-guides" className="sub-menu-item"> Guides</Link></li>
                                        <li className={`ms-0 ${manu === '/helpcenter-support-request' ? 'active' : ''}`}><Link to="/helpcenter-support-request" className="sub-menu-item"> Support</Link></li>
                                    </ul> 
                                </li>
                                <li className={`ms-0 ${manu === '/upload-work' ? 'active' : ''}`}><Link to="/upload-work" className="sub-menu-item">Upload Works</Link></li>
                                <li className={`ms-0 ${manu === '/terms' ? 'active' : ''}`}><Link to="/terms" className="sub-menu-item">Terms Policy</Link></li>
                                <li className={`ms-0 ${manu === '/privacy' ? 'active' : ''}`}><Link to="/privacy" className="sub-menu-item">Privacy Policy</Link></li>
                            </ul>
                        </li>
                        
                        <li className={manu === '/contact' ? 'active' : ''}><Link to="/contact" className="sub-menu-item">Contact</Link></li>
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
