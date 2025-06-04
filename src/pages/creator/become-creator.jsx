import React,{useState} from 'react'
import Navbar from '../../components/navbar'
import bg1 from '../../assets/images/client/creator.png'
import Footer from '../../components/footer';

export default function BecomeCreator() {

  const [file, setFile] = useState('');

  function handleChange(e) {
    setFile(URL.createObjectURL(e.target.files[0]));
}
  return (
    <>
    <Navbar/>
    <section className="bg-half-170 d-table w-100 bg-light">
      <div className="container">
          <div className="row mt-5 align-items-center">
              <div className="col-lg-4 col-md-6">
                  <img src={bg1} className="img-fluid" alt=""/>
              </div>

              <div className="col-lg-8 col-md-6 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="title-heading">
                      <h6>Join with Pixev!</h6>
                      <h5 className="heading fw-bold title-dark mb-4">Start Your <br/><span className="text-gradient-primary">Journey</span></h5>
                      <p className="text-muted mb-0 para-desc">We are a huge marketplace dedicated to connecting great artists of all Pixev with their fans and unique token collectors!</p>
                  </div>
              </div>
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
            <div className="col">
                <div className="section-title text-center mb-4 pb-2">
                    <h4 className="title mb-3">Fill the form</h4>
                    <p className="text-muted mb-0 para-desc mx-auto">We are a huge marketplace dedicated to connecting great designers and developers of all Pixev with their customers and digital resource collectors!</p>
                </div>
            </div>
        </div>
        <div className="row justify-content-center mt-4 pt-2">
            <div className="col-lg-10">
                <div className="card p-4 rounded-md shadow">
                    <div className="row">
                        <div className="col-md-5">
                            <div className="d-grid">                                <p className="fw-semibold">Upload your DIGITAL RESOURCE here, Please click "Upload Files" Button.</p>
                                <div className="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small">
                                {file === '' ? 'Supports ZIP, PSD, AI, Sketch files. Max file size : 50MB.' : (
                                  <img src={file} className="img-fluid" alt=""/>
                                )}
                                </div>
                                <input type="file" id="input-file" name="input-file" accept="image/*" onChange={(e)=>handleChange(e)} hidden />
                                <label className="btn-upload btn btn-primary rounded-md mt-4" htmlFor="input-file">Upload Image</label>
                            </div>
                        </div>

                        <div className="col-md-7 mt-4 mt-sm-0">
                            <div className="ms-md-4">
                                <form>
                                    <div className="row">
                                        <div className="col-12 mb-4">
                                            <label className="form-label">Display Name</label>
                                            <input name="name" id="first" type="text" className="form-control" placeholder="streetboyyy"/>
                                        </div>
    
                                        <div className="col-12 mb-4">
                                            <label className="form-label">URL</label>
                                            <div className="form-icon">
                                                <input name="url" id="pixev-url" type="url" className="form-control" placeholder="https://pixev.exe/streetboyyy"/>
                                            </div>
                                        </div>                                        <div className="col-12 mb-4">
                                            <label className="form-label">Bio</label>
                                            <textarea name="comments" id="comments" rows="3" className="form-control" placeholder="I'm a Digital Designer. Specializing in web design, UI/UX, and digital assets with over 3 years of experience. Experienced with all stages of the design cycle for creative projects."></textarea>
                                        </div>

                                        <div className="col-12 mb-4">
                                            <label className="form-label d-block">Portfolio Website</label>
                                            <small className="text-muted d-block">Link your portfolio website to showcase your work</small>                                            <div className="form-icon mt-3">
                                                <input name="url" id="portfolio-url" type="url" className="form-control" placeholder="https://yourportfolio.com"/>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <button type="submit" className="btn btn-primary rounded-md">Create Designer Account</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section>
  <Footer/>              
    </>
  )
}
