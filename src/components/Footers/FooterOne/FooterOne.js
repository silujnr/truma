import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import facebookicon from '../../../components/Footers/FooterOne/images/facebook-icon.png';
import blogicon from '../../../components/Footers/FooterOne/images/blog-icon.png';
import linkedinicon from '../../../components/Footers/FooterOne/images/linkedin-icon.png';
import youtubeicon from '../../../components/Footers/FooterOne/images/youtube-icon.png';
import twittericon from '../../../components/Footers/FooterOne/images/twitter-icon.png';

import silverjubileebadge from '../FooterOne/images/silver-jubilee-badge.png';
const FooterOne = () => {
    return (
        <footer className="footer-01">

           
            <div className="container">
                <div className="row top-footer">
                <div className="col-lg-4 text-white">
                    <span className="font-weight-bold">Call Us</span>
                    <p> +91 90377 01777</p>
                </div>
                <div className="col-lg-8 text-white d-lg-flex justify-content-between">
                    <div>
                        <span className="font-weight-bold">Email</span>
                        <p>traumacarekozhikode@gmail.com</p>
                    </div>
                    
                    <div>
                        <span className="font-weight-bold">Our Location</span>
                        <p>Police Club, Pavamani Road, Calicut </p>
                    </div>
                </div>
                
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-4 d-flex pl-0">
                    <Link className="footer-logo mb-4 d-block" to="/">
                            <img src={logo} alt="" width="100px" />
                        </Link>
                        <p className="text-white text-left pl-2"> Trauma Care Kozhikode is an independent, non-profit organisation functioning above political, communal and economic interest. </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                           
                            <div className="d-flex">
                            <ul className="w-50">
                            <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/programs">Programes</Link></li>
                                
                            </ul>
                            <ul className="w-50">
                                <li><Link to="/memberships">Memberships</Link></li>
                                <li><Link to="/donations">Donations</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/milestone">Milestone</Link></li>
                                
                            </ul>
                            </div>
                        </aside>
                        {/* <!-- Navigation Menu End --> */}
                    </div>
                    <div className="col-lg-2 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                           
                            <ul>
                                <li><Link to="/units">Units</Link></li>
                                <li><Link to="/announcement">Announcement</Link></li>
                                <li><Link to="/Official">Official</Link></li>
                                <li><Link to="/activities">Activities</Link></li>
                            </ul>
                        </aside>
                        {/* <!-- Navigation Menu End --> */}
                    </div>
                   
                   
                </div>
                
            </div>
            
                <div className="copyright-box">
                    <div className="container">
    {/* <!-- Copyright --> */}
                <div className="row">
                    <div className="col-lg-12">
                        <div className="copyright d-lg-flex justify-content-between">

                        <div><p>Copyright © 2022. All rights reserved by Trauma Care Kozhikode.</p></div>
                           <div>
                            <span className="text-white mr-2">Follow Us:</span>
                                <ul>
                                    <li><a href="https://www.facebook.com/profile.php?id=100068389803162"> <img src={facebookicon} alt="" /></a></li>
                                    <li><Link to="/"> <img src={blogicon} alt="" /></Link></li>
                                    <li><Link to="/"> <img src={linkedinicon} alt="" /></Link></li>
                                    <li><Link to="/"> <img src={youtubeicon} alt="" /></Link></li>
                                    <li><Link to="/"> <img src={twittericon} alt="" /></Link></li>
                                </ul>
                           </div>
                           
                            
                        </div>
                    </div>
                </div>
</div>
                </div>
            <img className="silverjubileebadgeimg" src={silverjubileebadge} alt="Silver Jubilee Badge" />
        </footer>
    );
};

export default FooterOne;