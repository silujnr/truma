import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import facebookicon from '../../../components/Footers/FooterOne/images/facebook-icon.png';
import blogicon from '../../../components/Footers/FooterOne/images/blog-icon.png';
import linkedinicon from '../../../components/Footers/FooterOne/images/linkedin-icon.png';
import youtubeicon from '../../../components/Footers/FooterOne/images/youtube-icon.png';
import twittericon from '../../../components/Footers/FooterOne/images/twitter-icon.png';

const FooterOne = () => {
    return (
        <footer className="footer-01">

           
            <div className="container">
                <div className="row top-footer">
                <div className="col-lg-4 text-white">
                    <span className="font-weight-bold">Call Us</span>
                    <p> +91 9037701777</p>
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
                    <div className="col-lg-4 col-md-4">
                    <Link className="footer-logo mb-4 d-block" to="/">
                            <img src={logo} alt="" />
                        </Link>
                        <p className="text-white text-left"> Trauma Care Kozhikode is an independent, non-profit organisation functioning above political, communal and economic interest. </p>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                            <h3 className="widget-title">Quick Menu</h3>
                            <div className="d-flex">
                            <ul className="w-50">
                            <li><Link to="/contact">Contact Us</Link></li>
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/programs">Programes</Link></li>
                                <li><Link to="/donations">Donate</Link></li>
                                <li><Link to="/anappeal">An Appeal</Link></li>
                            </ul>
                            <ul className="w-50">
                                <li><Link to="/memberships">Memberships</Link></li>
                                <li><Link to="/donations">Donations</Link></li>
                                <li><Link to="/gallery">Gallery</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/announcement">Announcement</Link></li>
                            </ul>
                            </div>
                        </aside>
                        {/* <!-- Navigation Menu End --> */}
                    </div>
                    <div className="col-lg-2 col-md-6">
                        {/* <!-- Navigation Menu Start --> */}
                        <aside className="widget">
                            <h3 className="widget-title">Others</h3>
                            <ul>
                                <li><Link to="/units">Units</Link></li>
                                <li><Link to="/affiliations">Affiliations</Link></li>
                                <li><Link to="/officeBearers">Office Bearers</Link></li>
                                <li><Link to="/recognitions">Recognitions</Link></li>
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

                        <div><p>Copyright © 2022. All rights reserved by Trauma Care.</p></div>
                           <div>
                            <span className="text-white mr-2">Follow Us:</span>
                                <ul>
                                    <li><Link to="/"> <img src={facebookicon} alt="" /></Link></li>
                                    <li><Link to="/"> <img src={blogicon} alt="" /></Link></li>
                                    <li><Link to="/"> <img src={linkedinicon} alt="" /></Link></li>
                                    <li><Link to="/"> <img src={youtubeicon} alt="" /></Link></li>
                                    <li><Link to="/"> <img src={twittericon} alt="" /></Link></li>
                                </ul>
                           </div>
                           
                            
                        </div>
                    </div>
                </div>
                {/* <!-- Copryright --> */}
</div>
                </div>
            
        </footer>
    );
};

export default FooterOne;