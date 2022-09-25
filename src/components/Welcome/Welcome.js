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
                                    <h3 className="sec-title"> Welcome to <span>Trauma Care</span> KOZHIKODE (TRACK)</h3>
                                    <Link className="greenbtn" to="/official">About us <i className="fa fa-arrow-right" aria-hidden="true"></i></Link>
                                </div>
                                <div className='col-md-8 col-sm-12'>
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