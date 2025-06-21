import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useUser } from '../contexts/UserContext';
import { useSubscription, SUBSCRIPTION_PLANS } from '../contexts/SubscriptionContext';

import Navbar from '../components/navbar';
import Footer from '../components/footer';

import bg1 from '../assets/images/bg/01.jpg';

export default function Pricing() {
    const { user } = useUser();
    const { subscribeToPlan, getSubscriptionInfo, isProcessing } = useSubscription();
    const navigate = useNavigate();
    const [billingPeriod, setBillingPeriod] = useState('monthly');
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const currentSubscription = getSubscriptionInfo();

    const handleSubscribe = async (planId) => {
        if (!user) {
            navigate('/login');
            return;
        }

        if (planId === 'free') {
            // Free plan doesn't need payment
            return;
        }

        setSelectedPlan(planId);
        setShowPaymentModal(true);
    };

    const processPayment = async () => {
        try {
            const result = await subscribeToPlan(selectedPlan);
            setShowPaymentModal(false);
            alert(`Successfully subscribed to ${result.plan.name}! You now have access to premium features.`);
            navigate('/creator-profile');
        } catch (error) {
            alert(`Subscription failed: ${error.message}`);
        }
    };

    const getPlansToShow = () => {
        if (billingPeriod === 'monthly') {
            return [SUBSCRIPTION_PLANS.FREE, SUBSCRIPTION_PLANS.PREMIUM_MONTHLY];
        } else {
            return [SUBSCRIPTION_PLANS.FREE, SUBSCRIPTION_PLANS.PREMIUM_YEARLY];
        }
    };

    const isCurrentPlan = (planId) => {
        return currentSubscription?.plan?.id === planId;
    };

    return (
        <>
            <Navbar navlight={true}/>
            
            <section className="bg-half-170 d-table w-100" style={{backgroundImage:`url('${bg1}')`, backgroundPosition:'bottom'}}>
                <div className="bg-overlay bg-gradient-overlay-2"></div>
                <div className="container">
                    <div className="row mt-5 justify-content-center">
                        <div className="col-12">
                            <div className="title-heading text-center">
                                <h5 className="heading fw-semibold sub-heading text-white title-dark">Choose Your Plan</h5>
                                <p className="text-white-50 para-desc mx-auto mb-0">Get unlimited access to thousands of premium digital resources</p>
                            </div>
                        </div>
                    </div>

                    <div className="position-middle-bottom">
                        <nav aria-label="breadcrumb" className="d-block">
                            <ul className="breadcrumb breadcrumb-muted mb-0 p-0">
                                <li className="breadcrumb-item"><Link to="/">Pixev</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Pricing</li>
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
                    {/* Current Subscription Status */}
                    {currentSubscription && (
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-8">
                                <div className="alert alert-info border-0 shadow rounded-md">
                                    <div className="d-flex align-items-center">
                                        <i className="uil uil-check-circle display-6 text-primary me-3"></i>
                                        <div>
                                            <h6 className="mb-1">Current Plan: {currentSubscription.plan.name}</h6>
                                            <p className="mb-0 text-muted">
                                                {currentSubscription.plan.id === 'free' ? 
                                                    `Remaining downloads today: ${currentSubscription.remainingDownloads}` :
                                                    currentSubscription.daysLeft ? 
                                                        `${currentSubscription.daysLeft} days remaining` : 
                                                        'Unlimited access'
                                                }
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Billing Period Toggle */}
                    <div className="row justify-content-center mb-5">
                        <div className="col-lg-6">
                            <div className="d-flex justify-content-center">
                                <div className="btn-group" role="group">
                                    <button 
                                        type="button" 
                                        className={`btn ${billingPeriod === 'monthly' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setBillingPeriod('monthly')}
                                    >
                                        Monthly
                                    </button>
                                    <button 
                                        type="button" 
                                        className={`btn ${billingPeriod === 'yearly' ? 'btn-primary' : 'btn-outline-primary'}`}
                                        onClick={() => setBillingPeriod('yearly')}
                                    >
                                        Yearly <span className="badge bg-success ms-2">Save 13%</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Pricing Cards */}
                    <div className="row justify-content-center">
                        {getPlansToShow().map((plan) => (
                            <div className="col-lg-4 col-md-6 mt-4 pt-2" key={plan.id}>
                                <div className={`card pricing pricing-primary rounded-md shadow ${isCurrentPlan(plan.id) ? 'border-primary' : ''}`}>
                                    {plan.yearlyDiscount && (
                                        <div className="ribbon ribbon-top-right">
                                            <span>{plan.yearlyDiscount}</span>
                                        </div>
                                    )}
                                    
                                    <div className="card-body py-5">
                                        <div className="text-center">
                                            <h6 className="title fw-bold text-uppercase text-primary mb-4">{plan.name}</h6>
                                            <div className="d-flex justify-content-center mb-4">
                                                <span className="price h1 mb-0">${plan.price}</span>
                                                <span className="h6 align-self-end mb-1">
                                                    {plan.id !== 'free' ? '/mo' : ''}
                                                </span>
                                            </div>
                                            
                                            {plan.monthlyPrice && plan.monthlyPrice !== plan.price && (
                                                <p className="text-muted">
                                                    Billed ${plan.price} {plan.id.includes('yearly') ? 'yearly' : 'monthly'}
                                                </p>
                                            )}

                                            <ul className="list-unstyled mb-4">
                                                {plan.features.map((feature, index) => (
                                                    <li key={index} className="h6 text-muted mb-0">
                                                        <span className="text-primary h5 me-2">
                                                            <i className="uil uil-check-circle align-middle"></i>
                                                        </span>
                                                        {feature}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="mt-4">
                                                {isCurrentPlan(plan.id) ? (
                                                    <button className="btn btn-success rounded-md w-100" disabled>
                                                        <i className="uil uil-check me-1"></i>
                                                        Current Plan
                                                    </button>
                                                ) : (
                                                    <button 
                                                        className={`btn ${plan.id === 'free' ? 'btn-outline-primary' : 'btn-primary'} rounded-md w-100`}
                                                        onClick={() => handleSubscribe(plan.id)}
                                                        disabled={isProcessing}
                                                    >
                                                        {isProcessing ? (
                                                            <>
                                                                <i className="uil uil-spinner spin me-1"></i>
                                                                Processing...
                                                            </>
                                                        ) : (
                                                            plan.id === 'free' ? 'Current Plan' : 'Get Started'
                                                        )}
                                                    </button>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Payment Modal */}
                    {showPaymentModal && (
                        <div className="modal fade show d-block" style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title">Complete Payment</h5>
                                        <button 
                                            type="button" 
                                            className="btn-close" 
                                            onClick={() => setShowPaymentModal(false)}
                                        ></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="text-center mb-4">
                                            <i className="uil uil-credit-card display-4 text-primary"></i>
                                            <h6 className="mt-3">
                                                Subscribe to {SUBSCRIPTION_PLANS[selectedPlan?.toUpperCase()]?.name}
                                            </h6>
                                            <p className="text-muted">
                                                Amount: ${SUBSCRIPTION_PLANS[selectedPlan?.toUpperCase()]?.price}
                                            </p>
                                        </div>
                                        
                                        <div className="alert alert-warning">
                                            <i className="uil uil-info-circle me-2"></i>
                                            <strong>Demo Payment:</strong> This is a demo. Click "Complete Payment" to simulate a successful payment.
                                        </div>

                                        <div className="d-grid gap-2">
                                            <button 
                                                className="btn btn-primary"
                                                onClick={processPayment}
                                                disabled={isProcessing}
                                            >
                                                {isProcessing ? (
                                                    <>
                                                        <i className="uil uil-spinner spin me-1"></i>
                                                        Processing Payment...
                                                    </>
                                                ) : (
                                                    'Complete Payment'
                                                )}
                                            </button>
                                            <button 
                                                className="btn btn-outline-secondary"
                                                onClick={() => setShowPaymentModal(false)}
                                                disabled={isProcessing}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            <Footer/>
        </>
    );
}
