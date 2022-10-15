import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import Milestonepictures from '../components/Gallery/Milestone/Milestonepictures';
const Milestone = () => {
    return (
        <>
            <BannerTwo pageTitle="Milestone's" title="Milestone's" bgimg={require('../assets/images/page-banner.jpg')} />
            <Milestonepictures />
        </>
    );
};

export default Milestone;