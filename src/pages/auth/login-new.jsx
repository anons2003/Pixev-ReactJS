import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../../contexts/UserContext';

import bg1 from '../../assets/images/bg/01.jpg'
import logopixel from '../../assets/images/logopixel.svg'

export default function Login() {
    const [email, setEmail] = useState('');
    const { login, isLoading, demoUsers } = useUser();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            login(email);
            setTimeout(() => {
                navigate('/');
            }, 600);
        }
    };

    const handleDemoLogin = (demoEmail) => {
        setEmail(demoEmail);
        login(demoEmail);
        setTimeout(() => {
            navigate('/');
        }, 600);
    };

    return (
        <>
            <section className="bg-home zoom-image d-flex align-items-center">
                <div className="bg-overlay image-wrap" style={{backgroundImage:`url(${bg1})`, backgroundPosition:'bottom'}}></div>
                <div className="bg-overlay bg-gradient-overlay-2"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="p-4 bg-white rounded shadow-md mx-auto w-100" style={{maxWidth:'400px'}}>
                                <form onSubmit={handleSubmit}>
                                    <Link to="/"><img src={logopixel} className="mb-4 d-block mx-auto" alt=""/></Link>
                                    <h5 className="mb-3 text-center">Login to Pixev</h5>
                                    
                                    <div className="form-floating mb-2">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            id="LoginEmail" 
                                            placeholder="name@example.com"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />
                                        <label htmlFor="LoginEmail">Email Address:</label>
                                    </div>
                                    
                                    <button 
                                        className="btn btn-primary rounded-md w-100 mb-3" 
                                        type="submit"
                                        disabled={isLoading}
                                    >
                                        {isLoading ? 'Signing in...' : 'Sign in'}
                                    </button>

                                    <div className="text-center mb-3">
                                        <small className="text-muted">Quick Demo Login:</small>
                                    </div>
                                    
                                    {demoUsers.map((user) => (
                                        <button
                                            key={user.id}
                                            type="button"
                                            className="btn btn-outline-primary btn-sm w-100 mb-2"
                                            onClick={() => handleDemoLogin(user.email)}
                                            disabled={isLoading}
                                        >
                                            Login as {user.name} ({user.role})
                                        </button>
                                    ))}

                                    <div className="col-12 text-center mt-4">
                                        <small><span className="text-muted me-2">Don't have an account ?</span> <Link to="/signup" className="text-dark fw-bold">Sign Up</Link></small>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="position-absolute bottom-0 start-50 translate-middle-x">
                    <small className="mb-0 text-light title-dark">© {new Date().getFullYear()} Pixev. Design & Develop with <i className="mdi mdi-heart text-danger"></i> by <Link to="https://www.facebook.com/suunhi.6623" target="_blank" className="text-reset">Pixev</Link>.</small>
                </div>
            </section>
        </>
    );
}
