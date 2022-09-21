import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactSidebar from '../components/ContactSidebar/ContactSidebar';

const contactInfo = {
    numberOne: "+91 90377 01777",
    numberTwo: "",
    emailOne: "traumacarekozhikode@gmail.com",
    emailTwo: "",
    locationOne: "Near Police Club, Pavamani Road, Kozhikode 673001",
    locationTwo: ""
};

const Contact = () => {
    return (
        <>
            <BannerTwo pageTitle="Contact Us" title="Contact" />
            <section className="contact-page-section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="sub-title-2"><span>Contact Us</span></div>
                            <h3 className="sec-title">Get In Touch With Us </h3>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="contact-page-form">
                                {/* Contact Form  */}
                                <ContactForm />
                            </div>
                        </div>

                        {/* Contact sidebar  */}
                        <ContactSidebar contactInfo={contactInfo} />

                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="quomodo-map grayscale">
                            <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31304.708529709933!2d75.783498!3d11.254895!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4001e754443180f2!2sPOLICE%20CLUB!5e0!3m2!1sen!2sus!4v1648402972793!5m2!1sen!2sus"  loading="lazy" scrolling="no" ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Contact;