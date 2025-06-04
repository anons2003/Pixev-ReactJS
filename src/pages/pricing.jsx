import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { subscriptionPlans, resourceCategories } from '../data/data';

export default function Pricing() {
    const [billingPeriod, setBillingPeriod] = useState('monthly');

    const filteredPlans = subscriptionPlans.filter(plan => {
        if (billingPeriod === 'monthly') {
            return plan.id !== 3; // Hide annual plan
        } else {
            return plan.id !== 2; // Hide monthly premium plan
        }
    });

    return (
        <>
            <div className="relative">
                <div className="layout-top-spacing">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-12">
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title mb-4">Choose Your Plan</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">
                                        Get unlimited access to thousands of premium digital resources. 
                                        Start with our free plan or upgrade for unlimited downloads.
                                    </p>
                                </div>
                            </div>
                        </div>

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
                                            Yearly <span className="badge badge-success ms-2">Save 17%</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Pricing Cards */}
                        <div className="row">
                            {filteredPlans.map((plan) => (
                                <div key={plan.id} className="col-lg-4 col-md-6 mt-4 pt-2">
                                    <div className={`card pricing-rates border-0 ${plan.popular ? 'bg-light position-relative' : ''} shadow rounded text-center`}>
                                        {plan.popular && (
                                            <div className="ribbon ribbon-right ribbon-warning overflow-hidden">
                                                <span className="text-center d-block shadow small h6">Popular</span>
                                            </div>
                                        )}
                                        <div className="card-body py-5">
                                            <h6 className="title fw-bold mb-4">{plan.name}</h6>
                                            <div className="d-flex justify-content-center mb-4">
                                                <span className="price h1 mb-0">{plan.price}</span>
                                                <span className="h6 align-self-end ms-1">/{plan.period.split(' ')[1] || plan.period}</span>
                                            </div>
                                            {plan.originalPrice && (
                                                <div className="mb-3">
                                                    <span className="text-muted text-decoration-line-through">{plan.originalPrice}</span>
                                                    <span className="badge bg-soft-success text-success ms-2">{plan.savings}</span>
                                                </div>
                                            )}
                                            <p className="text-muted">{plan.description}</p>
                                            
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
                                            
                                            <Link to={plan.id === 1 ? "/login" : "/register"} className={`btn btn-${plan.color} btn-block`}>
                                                {plan.buttonText}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* What's Included Section */}
                        <div className="row justify-content-center mt-5 pt-5">
                            <div className="col-12">
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title mb-4">What's Included</h4>
                                    <p className="text-muted para-desc mx-auto mb-0">
                                        Access thousands of premium digital resources across multiple categories
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            {resourceCategories.map((category) => (
                                <div key={category.id} className="col-lg-3 col-md-6 mt-4 pt-2">
                                    <div className="card border-0 text-center features feature-clean">
                                        <div className="icons text-primary text-center mx-auto">
                                            <i className={`${category.icon} d-block rounded h3 mb-0`}></i>
                                        </div>
                                        <div className="content mt-3">
                                            <h5 className="fw-bold">{category.name}</h5>
                                            <p className="text-muted mt-3">{category.description}</p>
                                            <span className="badge bg-soft-primary text-primary">{category.count} resources</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* FAQ Section */}
                        <div className="row justify-content-center mt-5 pt-5">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-4 pb-2">
                                    <h4 className="title mb-4">Frequently Asked Questions</h4>
                                </div>
                                
                                <div className="accordion" id="pricingFAQ">
                                    <div className="accordion-item rounded mt-2">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button border-0 bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne">
                                                Can I cancel my subscription anytime?
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#pricingFAQ">
                                            <div className="accordion-body text-muted">
                                                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your current billing period.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item rounded mt-2">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
                                                Do you offer a free trial?
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                                            <div className="accordion-body text-muted">
                                                Yes! We offer a 7-day free trial for all Premium plans. No credit card required to start.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item rounded mt-2">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree">
                                                Can I use the resources commercially?
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                                            <div className="accordion-body text-muted">
                                                Yes, Premium subscribers get commercial licenses for all resources. Free plan users get personal licenses only.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="accordion-item rounded mt-2">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour">
                                                What happens to my downloads if I cancel?
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#pricingFAQ">
                                            <div className="accordion-body text-muted">
                                                All files you've downloaded remain yours to keep and use according to the license you had when you downloaded them.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
