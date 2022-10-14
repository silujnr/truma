import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import AboutpageContent from '../components/Abouts/AboutpageContent/AboutpageContent';


const About = () => {
    return (
        <>
            <BannerTwo pageTitle="About Us" title="About" bgimg={require('../assets/images/page-banner.jpg')}/>
            <AboutpageContent />
        </>
    );
};

export default About;