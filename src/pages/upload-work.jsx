import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useUser } from '../contexts/UserContext'
import { useUserResources } from '../contexts/UserResourcesContext'

import Navbar from '../components/navbar'
import bg1 from '../assets/images/bg/01.jpg'
import work from '../assets/images/work/1.jpg'
import client from '../assets/images/client/01.jpg'
import Footer from "../components/footer";

// Add CSS for loading animation
const styles = `
  .spin {
    animation: spin 2s linear infinite;
  }
  
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  .upload-progress {
    transition: all 0.3s ease;
  }
`;

export default function UploadWork() {
  const { user } = useUser();
  const { addResource } = useUserResources();
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const [fileObj, setFileObj] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'Templates',
    license: 'Standard License',
    tags: '',
    price: 'Free'
  });

  function handleFileChange(e) {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      // Check file size (50MB limit)
      if (selectedFile.size > 50 * 1024 * 1024) {
        alert('File size must be less than 50MB');
        return;
      }
      
      setFile(URL.createObjectURL(selectedFile));
      setFileObj(selectedFile);
    }
  }

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    
    if (!user) {
      alert('Please login to upload resources');
      navigate('/login');
      return;
    }

    if (!fileObj) {
      alert('Please select a file to upload');
      return;
    }

    if (!formData.title.trim()) {
      alert('Please enter a resource title');
      return;
    }

    setIsUploading(true);

    // Create new resource object
    const newResource = {
      title: formData.title,
      name: formData.title,
      description: formData.description,
      category: formData.category.toLowerCase(),
      license: formData.license,
      tags: formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      price: formData.price,
      value: formData.price,
      product: file, // Store the blob URL for now
      fileName: fileObj.name,
      fileSize: fileObj.size,
      fileType: fileObj.type,
      createrName: user.name,
      creatorUsername: user.username,
      creater1: client, // Default avatar
      creater2: client,
      creater3: client,
      author: user.name,
      tag: formData.category,
      date: new Date().toLocaleDateString(),
      showDate: true
    };

    // Use the context to add resource
    addResource(newResource)
      .then((savedResource) => {
        alert('Resource uploaded successfully!');
        
        // Reset form
        setFormData({
          title: '',
          description: '',
          category: 'Templates',
          license: 'Standard License',
          tags: '',
          price: 'Free'
        });
        setFile("");
        setFileObj(null);

        // Navigate to profile
        navigate('/creator-profile');
      })
      .catch((error) => {
        console.error('Upload failed:', error);
        alert('Failed to upload resource. Please try again.');
      })
      .finally(() => {
        setIsUploading(false);
      });
  }
  return (
    <>
    <style>{styles}</style>
    <Navbar navlight={true}/>

    <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url('${bg1}')`, backgroundPosition:'bottom'}}>
      <div className="bg-overlay bg-gradient-overlay-2"></div>
      <div className="container">
          <div className="row mt-5 justify-content-center">
              <div className="col-12">
                  <div className="title-heading text-center">                      <h5 className="heading fw-semibold sub-heading text-white title-dark">Submit Your Resource</h5>
                      <p className="text-white-50 para-desc mx-auto mb-0">Share your creative digital resources with the community</p>
                  </div>
              </div>
          </div>

          <div className="position-middle-bottom">
              <nav aria-label="breadcrumb" className="d-block">
                  <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                      <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Submit Resource</li>
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
              <div className="col-lg-3 col-md-4 order-2 order-md-1 mt-4 pt-2 mt-sm-0 pt-sm-0">
                  <div className="card creators creator-primary rounded-md shadow overflow-hidden sticky-bar">
                      <div className="py-5" style={{backgroundImage:`url("${work}")`}}></div>
                      <div className="position-relative mt-n5">
                          <img src={client} className="avatar avatar-md-md rounded-pill shadow-sm bg-light img-thumbnail mx-auto d-block" alt=""/>
                          
                          <div className="content text-center pt-2 p-4">
                              <h6 className="mb-0">Steven Townsend</h6>
                              <small className="text-muted">@StreetBoy</small>

                              <ul className="list-unstyled mb-0 mt-3" id="navmenu-nav">
                                  <li className="px-0 ms-0">
                                      <Link to="/creator-profile" className="d-flex align-items-center text-dark">
                                          <span className="fs-6 mb-0"><i className="uil uil-user"></i></span>
                                          <small className="d-block fw-semibold mb-0 ms-2">Profile</small>
                                      </Link>
                                  </li>
                                  
                                  <li className="px-0 ms-0 mt-2">
                                      <Link to="/creator-profile-edit" className="d-flex align-items-center text-dark">
                                          <span className="fs-6 mb-0"><i className="uil uil-setting"></i></span>
                                          <small className="d-block fw-semibold mb-0 ms-2">Settings</small>
                                      </Link>
                                  </li>
                                  
                                  <li className="px-0 ms-0 mt-2">
                                      <Link to="/lock-screen" className="d-flex align-items-center text-dark">
                                          <span className="fs-6 mb-0"><i className="uil uil-sign-in-alt"></i></span>
                                          <small className="d-block fw-semibold mb-0 ms-2">Logout</small>
                                      </Link>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>

              <div className="col-lg-9 col-md-8 order-1 order-md-2">
                  <div className="card rounded-md shadow p-4">
                      <div className="row">
                          <div className="col-lg-5">
                              <div className="d-grid">
                                  <p className="fw-semibold mb-4">Upload your digital resource here. Click "Upload File" to begin.</p>
                                  <div className="preview-box d-block justify-content-center rounded-md shadow overflow-hidden bg-light text-muted p-2 text-center small" style={{minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                                    {file === '' ? (
                                      <div>
                                        <i className="uil uil-cloud-upload display-4 text-muted mb-3"></i>
                                        <p className="mb-0">Supports JPG, PNG, AI, PSD, SVG, MP4, and ZIP files.</p>
                                        <small className="text-muted">Max file size: 50MB</small>
                                      </div>
                                    ) : (
                                      <div className="position-relative w-100">
                                        {fileObj?.type.startsWith('image/') ? (
                                          <img src={file} className="img-fluid rounded" alt="Preview" style={{maxHeight: '180px'}}/>
                                        ) : (
                                          <div className="text-center">
                                            <i className="uil uil-file display-4 text-primary mb-2"></i>
                                            <p className="mb-1 fw-semibold">{fileObj?.name}</p>
                                            <small className="text-muted">{(fileObj?.size / 1024 / 1024).toFixed(2)} MB</small>
                                          </div>
                                        )}
                                        <button 
                                          type="button" 
                                          className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 m-2"
                                          onClick={() => {setFile(""); setFileObj(null);}}
                                        >
                                          <i className="uil uil-times"></i>
                                        </button>
                                      </div>
                                    )}
                                  </div>
                                  <input 
                                    type="file" 
                                    id="input-file" 
                                    name="input-file" 
                                    accept="image/*,.psd,.ai,.svg,.zip,.mp4" 
                                    onChange={(e)=>handleFileChange(e)} 
                                    hidden 
                                  />
                                  <label className="btn-upload btn btn-primary rounded-md mt-4" htmlFor="input-file">
                                    <i className="uil uil-cloud-upload me-2"></i>
                                    {file ? 'Change File' : 'Upload File'}
                                  </label>
                              </div>
                          </div>

                          <div className="col-lg-7 mt-4 mt-lg-0">
                              <div className="ms-lg-4">
                                  <form onSubmit={handleSubmit}>
                                      <div className="row">
                                          <div className="col-12 mb-4">
                                              <label className="form-label fw-bold">Resource Title <span className="text-danger">*</span></label>
                                              <input 
                                                name="title" 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Enter resource title" 
                                                value={formData.title}
                                                onChange={handleInputChange}
                                                required
                                              />
                                          </div>

                                          <div className="col-12 mb-4">
                                              <label className="form-label fw-bold">Description :</label>
                                              <textarea 
                                                name="description" 
                                                rows="4" 
                                                className="form-control" 
                                                placeholder="Describe your resource and its uses" 
                                                value={formData.description}
                                                onChange={handleInputChange}
                                                required
                                              ></textarea>
                                          </div>
  
                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold">Category :</label>
                                              <select 
                                                name="category"
                                                className="form-control"
                                                value={formData.category}
                                                onChange={handleInputChange}
                                              >
                                                  <option value="Templates">Templates</option>
                                                  <option value="Graphics">Graphics</option>
                                                  <option value="Photos">Photos</option>
                                                  <option value="Fonts">Fonts</option>
                                                  <option value="UI Kits">UI Kits</option>
                                                  <option value="Audio">Audio</option>
                                                  <option value="Video">Video</option>
                                              </select>
                                          </div>
  
                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold">License Type :</label>
                                              <select 
                                                name="license"
                                                className="form-control"
                                                value={formData.license}
                                                onChange={handleInputChange}
                                              >
                                                  <option value="Standard License">Standard License</option>
                                                  <option value="Extended License">Extended License</option>
                                                  <option value="Commercial Use">Commercial Use</option>
                                              </select>
                                          </div>

                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold">Price :</label>
                                              <select 
                                                name="price"
                                                className="form-control"
                                                value={formData.price}
                                                onChange={handleInputChange}
                                              >
                                                  <option value="Free">Free</option>
                                                  <option value="Premium">Premium</option>
                                                  <option value="$9">$9</option>
                                                  <option value="$19">$19</option>
                                                  <option value="$29">$29</option>
                                                  <option value="$39">$39</option>
                                                  <option value="$49">$49</option>
                                              </select>
                                          </div>

                                          <div className="col-md-6 mb-4">
                                              <label className="form-label fw-bold">Tags :</label>
                                              <input 
                                                name="tags" 
                                                type="text" 
                                                className="form-control" 
                                                placeholder="Add relevant tags (comma separated)" 
                                                value={formData.tags}
                                                onChange={handleInputChange}
                                              />
                                              <small className="text-muted">e.g. design, template, modern, creative</small>
                                          </div>
  
                                          <div className="col-lg-12">
                                              <button 
                                                type="submit" 
                                                className="btn btn-primary rounded-md"
                                                disabled={isUploading || !fileObj}
                                              >
                                                {isUploading ? (
                                                  <>
                                                    <i className="uil uil-spinner spin me-2"></i>
                                                    Uploading...
                                                  </>
                                                ) : (
                                                  <>
                                                    <i className="uil uil-cloud-upload me-2"></i>
                                                    Submit Resource
                                                  </>
                                                )}
                                              </button>
                                              
                                              {!user && (
                                                <p className="text-muted mt-2 mb-0">
                                                  <i className="uil uil-info-circle me-1"></i>
                                                  Please <Link to="/login" className="text-primary">login</Link> to upload resources
                                                </p>
                                              )}
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
