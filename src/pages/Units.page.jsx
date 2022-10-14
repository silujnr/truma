import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import Unitmaincontent from '../components/unitpage/Unitmaincontent/Unitmaincontent';

const Units = () => {
    return (
        <>
            <BannerTwo pageTitle="Units" title="Units" bgimg={require('../assets/images/page-banner.jpg')} />
            <Unitmaincontent />
        </>
    );
};

export default Units;