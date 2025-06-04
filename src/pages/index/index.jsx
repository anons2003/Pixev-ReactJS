import React,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'

import Navbar from '../../components/navbar'
import BestCreater from '../../components/creater/best-creater'
import ProductOne from '../../components/product/product-one'
import LiveAuction from '../../components/live-auction'
import Blog from '../../components/blog'
import Footer from '../../components/footer'


import bg1 from '../../assets/images/bg/bg01.png'
import client1 from '../../assets/images/client/08.jpg'
import client2 from '../../assets/images/client/05.jpg'
import client3 from '../../assets/images/client/06.jpg'
import heroImg from '../../assets/images/gif/4.gif'
import community from '../../assets/images/svg/community.png'
import united from '../../assets/images/svg/united.png'

import { TypeAnimation } from 'react-type-animation';


export default function Index() {
    
    let clientGroup = [
        client1,client2,client3
    ]

    let [days, setDays] = useState(0);
    let [hours, setHours] = useState(0);
    let [minutes, setMinutes] = useState(0);
    let [seconds, setSeconds] = useState(0);
    let deadline = "December, 31, 2024";

    let getTime = () => {
      let time = Date.parse(deadline) - Date.now();
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    };
    useEffect(() => {
      let interval = setInterval(() => getTime(deadline), 1000);
      return () => clearInterval(interval);
      
    })

  return (
    <>
    <Navbar navlight={true}/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'center'}}>
        <div className="bg-overlay bg-gradient-primary opacity-8"></div>
        <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">                    <div className="title-heading">
                        <h6 className="text-light title-dark fw-normal">Discover, Download & Create Amazing</h6>
                        <h4 className="heading text-white title-dark fw-bold mb-3">Premium Digital Resources for <br/>
                            <TypeAnimation
                                sequence={[
                                    'Web Design',1000, 'Graphics',1000,'Templates',1000,'UI/UX',1000,'Development',1000
                                ]}
                                wrapper="span"
                                speed={10}
                                cursor={false}
                                repeat={Infinity}
                                className='typewrite'
                            />
                        </h4>
                        <p className="text-white-50 para-desc mb-0 mb-0">We are a huge marketplace dedicated to connecting talented designers and developers with creative professionals seeking high-quality digital assets!</p>
                    
                        <div className="mt-4 pt-2">
                            <Link to="/aboutus" className="btn btn-pills btn-outline-light-white">Explore Resources</Link>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                    <div className="card bg-white nft-items nft-primary img-skewed rounded-md shadow overflow-hidden mb-1 p-3">
                        <div className="d-flex justify-content-between">
                            <div className="img-group ms-3">
                                {clientGroup.map((item,index) => {
                                    return(
                                        <Link to="/creator-profile" className="user-avatar ms-n3" key={index}>
                                            <img src={item} alt="user" className="avatar avatar-sm-sm img-thumbnail border-0 shadow-sm rounded-circle"/>
                                        </Link>
                                    )
                                })}
                            </div>
                            
                            <span className="like-icon shadow-sm"><Link to="#" className="text-muted icon"><i className="mdi mdi-18px mdi-heart mb-0"></i></Link></span>
                        </div>

                        <div className="nft-image rounded-md mt-3 position-relative overflow-hidden shadow">
                            <Link to="/item-detail-one"><img src={heroImg} className="img-fluid" alt=""/></Link>                            <div className="position-absolute top-0 start-0 m-2">
                                <Link to="#" className="badge badge-link bg-primary">Premium</Link>
                            </div>

                            <div className="position-absolute top-0 end-0 m-2">
                                <Link to="/item-detail-one" className="btn btn-pills btn-icon"><i className="uil uil-download-alt"></i></Link>
                            </div>

                            <div className="position-absolute bottom-0 start-0 m-2 bg-gradient-primary text-white title-dark rounded-pill px-3 h5">
                                <i className="uil uil-star"></i> <small className="fw-bold">Featured Resource</small>
                            </div>
                        </div>

                        <div className="card-body content position-relative p-0 mt-3">
                            <Link to="/item-detail-one" className="title text-dark h5">Deep Sea Phantasy</Link>

                            <div className="d-flex justify-content-between mt-2">
                                <small className="rate fw-bold">20.5 ETH</small>
                                <small className="text-dark fw-bold">1 out of 10</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="section">
       <BestCreater/>

        <div className="container mt-100 mt-60">
            <div className="row justify-content-center">
                <div className="col">                    <div className="section-title text-center mb-4 pb-2">
                        <h4 className="title mb-4">Trending Digital Resources</h4>
                        <p className="text-muted para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting talented designers and developers with creative professionals seeking high-quality digital assets!</p>
                    </div>
                </div>
            </div>

            <ProductOne/>
        </div>

        <div className="container-fluid mt-100 mt-60">
            <div className="row px-0">
                <div className="bg-half-100 bg-gradient-primary">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col">                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title text-white title-dark mb-4">Join the fastest growing Digital Resources marketplace <br/> with more than 10,000+ premium assets</h4>
                                    <p className="text-white-50 para-desc mb-0 mx-auto">We are a huge marketplace dedicated to connecting talented designers and developers with creative professionals seeking high-quality digital assets!</p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6 mt-4 pt-2">                                <div className="card p-4 rounded-md shadow bg-white">
                                    <h4 className="mb-4">Join our community</h4>
                                    <p className="text-muted mb-0">We are a huge marketplace dedicated to connecting talented designers and developers with creative professionals.</p>

                                    <div className="mt-3">
                                        <Link to="/aboutus" className="btn btn-link primary text-dark">Read More <i className="uil uil-arrow-right"></i></Link>
                                    </div>
                                    <div className="py-4"></div>
                                    <div className="position-absolute bottom-0 end-0">
                                        <img src={community} className="avatar avatar-medium opacity-05" alt=""/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-md-6 mt-4 pt-2">                                <div className="card p-4 rounded-md shadow bg-white">
                                    <h4 className="mb-4">Learn more about Pixev</h4>
                                    <p className="text-muted mb-0">We are a huge marketplace dedicated to connecting talented designers and developers with creative professionals.</p>

                                    <div className="mt-3">
                                        <Link to="/aboutus" className="btn btn-link primary text-dark">Read More <i className="uil uil-arrow-right"></i></Link>
                                    </div>
                                    <div className="py-4"></div>
                                    <div className="position-absolute bottom-0 end-0">
                                        <img src={united} className="avatar avatar-medium opacity-05" alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="container mt-100 mt-60">
            <LiveAuction/>
        </div>

        <div className="container mt-100 mt-60">
            <Blog/>
        </div>
    </section>
    <Footer/>

    </>
  )
}
