import React from 'react';
import { Link } from 'react-router-dom';
import './welcome.css';
import img1 from '../Gallery/images/mainimage/GALLERY-PAGE-71.jpg';
import img2 from '../Gallery/images/mainimage/GALLERY-PAGE-51.jpg';
const Welcome = () => {
    return (
        <section className="welcome-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <!-- About Content Start --> */}
                        <div className="welcome-content">

                            <div className='row mb-3'>
                                <div className='col-md-4 col-sm-12'>
                                    <h3 className="sec-title"> Welcome to <span>Trauma Care</span> Calicut</h3>
                                    <Link className="greenbtn" to="/about">About us <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                </div>
                                <div className='col-md-8 col-sm-12'>
                                    <p className="sec-desc">Trauma care is the care given to patients with severe injury primarily caused by automobile crashes, knife wounds, falls, burns etc. The survival of a trauma patient is dependent on immediate response and medical care at the scene of the injury, rapid transport from the scene of the injury to a qualified trauma medical facility, qualified trauma medical facilities capable of delivering immediate medical care and ongoing treatment for the injured person. Unlike other medical problems, a trauma victim’s care cannot be reviewed. The survival of the trauma patient is wholly influenced by the decisions taken in the most expedient manner.</p>
                                </div>
                            </div>
                            
                            <div className='row mb-3'>
                                <div>
                                <p className="sec-desc">Trauma Care Kozhikode (TRACK) pioneered educating “First Respondents” to shift accident victims without losing time, and without causing further injury, to Hospitals through its volunteer training camps. These volunteers are made free of legal complications which could follow. In association with the Police Department, Motor Vehicles Department & Medical Professionals, “TRACK” has been training volunteers in Basic Life Support (BLS), Road Safety & Situational Leadership since 1998.</p>
                                </div>

                            </div>
                            
                            <div className='row mb-4 align-items-center'>
                                <div className='col-md-6'>
                                <img src={img1} alt="" className='img-fluid rounded shadow'/>    
                                 </div>
                                <div className='col-md-6'>
                                    <p className='sec-desc'>Various disasters, manmade and natural alike strike the world incessantly. Underdeveloped countries like India, without the support systems for countering and managing such disasters, suffer a lot in human life loss and property loss. Thousands of lives could be saved if proper training is given to volunteers to mitigate the effects of the calamities.</p>
                                </div>
                            </div>
                            <div className='row mb-4 align-items-center'>
                                <div className='col-md-6'><p className='sec-desc'>In 2003, against the background of one of the worst earthquakes in history, that struck Gujarat in 2001, TRACK ventured into the important area of training local volunteers in Disaster Management.</p> </div>
                                <div className='col-md-6'> <img src={img2} alt="" className='img-fluid rounded shadow'/>    </div>
                            </div>
                           
                        </div>
                        
                        {/* <!-- About Content End --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Welcome;