import React,{useState} from 'react'
import { Link,useParams } from 'react-router-dom'

import Navbar from '../../components/navbar'
import Footer from '../../components/footer'

import logoIcon from '../../assets/images/icon-logo-48.png'
import blog from '../../assets/images/blog/single.jpg'
import blog2 from '../../assets/images/blog/10.jpg'

import { blogData } from '../../data/data'

import ModalVideo from 'react-modal-video';
import '../../../node_modules/react-modal-video/scss/modal-video.scss'

export default function BlogDetail() {
  const [isOpen, setOpen] = useState(false);
  const params = useParams()
  const id = params.id
  const data = blogData.find((item)=>item.id === parseInt(id))
  return (
   <>
   <Navbar gradient={true} navlight={true}/>

    <section className="section mt-5">
      <div className="container">
          <div className="row mt-5 mt-lg-0 justify-content-center">
              <div className="col-lg-8">
                  <div className="title-heading">
                      <h4 className="heading sub-heading fw-bold mb-3">{data?.title ? data.title : 'Heres a quick guide about how to make money selling your artworks with Superex!'}</h4>
                      <p className="text-muted fs-5 mb-0">The NFT space has made unprecedented progress since we first launched Superex in late 2021, as it hit several major milestones in the past…</p>
                  
                      <div className="d-flex align-items-center mt-4">
                          <img src={logoIcon} className="rounded-pill shadow-md" alt=""/>

                          <div className="content ms-2">
                              <Link to="#" className="h6 text-dark d-block mb-0">Superex NFT</Link>
                              <small className="text-muted mb-0">{data?.date ? data.date : '19th June 2022'}, 8 min read</small>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-12 mt-5">
                  <div className="position-relative">
                      <img src={blog} className="img-fluid rounded-md shadow-md" alt=""/>
                      <div className="play-icon">
                          <Link to="#" onClick={() => setOpen(true)} className="play-btn lightbox">
                              <i className="mdi mdi-play text-primary rounded-circle bg-white shadow-lg icons"></i>
                          </Link>
                      </div>
                      <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="yba7hPeTSjk"
                        onClose={() => setOpen(false)} 
                    />
                  </div>
              </div>

              <div className="col-lg-8 mt-5">
                  <p className="text-muted">However, as the space keeps expanding and people proceed to mint thousands of NFTs every day, an important question arises - how do we make sure that all that creative work remains accessible over time?</p>

                  <p className="text-muted">Earlier this year, as NFTs began hitting the mainstream, the industry faced a major technical problem. As highlighted by some analysts, most of the JPEGs (or other file formats) that serve as the media basis for their respective NFTs weren't stored on the chain itself. Instead, NFTs often simply redirected to a URL where the corresponding media was hosted - in most cases, that was a separate domain that belonged to either the creator or the platform where that NFT was minted.</p>

                  <p className="text-muted">But what happens when those domains go down? With that discovery, it became apparent that some NFTs have a single point of failure, which, in turn, could significantly impact their longevity and value.</p>

                  <p className="text-muted mb-0">In light of that, numerous projects and organisations have begun working on a potential fix. In a recent Clubhouse session, we brought those pioneering protocols and projects - Protocol Labs (an open-source lab that is working on Filecoin, IPFS and libp2p), Async.art, Fleek and Arweave - together to have a constructive discussion about the future of NFT metadata. Here's a concise recap of the main ideas that were discussed there.</p>

                  <div className="px-4 py-5 rounded-md bg-soft-primary text-center mt-4">
                      <h4 className="mb-0">" Thinking about giving the gift of an NFT? What to know about digital tokens "</h4>
                  </div>

                  <div className="mt-4">
                      <img src={data?.image ? data.image : blog2} className="img-fluid rounded-md shadow" alt=""/>
                  </div>

                  <h5 className="mt-4 mb-0">What's an NFT?</h5>
                  <p className="text-muted mt-4">This is the part that takes a bit of open-mindedness. An NFT is a unique digital token, with most using the ethereum blockchain to digitally record transactions. It's not a cryptocurrency like bitcoin or ether, because those are fungible -- exchangeable for another bitcoin or cash. NFTs are recorded in a digital ledger in the same way as cryptocurrency, so there's a listing of who owns each one.</p>

                  <p className="text-muted mb-0">What makes an NFT unique is the digital asset tied to the token. This can be an image, video, tweet or piece of music that's uploaded to a marketplace, which creates the NFT to be sold.</p>
              </div>
          </div>
      </div>
    </section>
    <Footer/>
   </>
  )
}
