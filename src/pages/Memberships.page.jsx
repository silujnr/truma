import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import MembershipForm from '../components/MembershipForm/MembershipForm';
import Membershippagecontent from '../components/membershippage/Membershippagecontent/Membershippagecontent';



const Memberships = () => {
    return (
        <>
            <BannerTwo pageTitle="Memberships" title="Memberships" bgimg={require('../assets/images/MEMBERSHIPS.jpg')}/>
            <div className="container">
                <Membershippagecontent />
            <div className="contact-page-form mb-5">
                                {/* Contact Form  */}
                                <MembershipForm />
                            </div>
            </div>
        </>
    );
};

export default Memberships;