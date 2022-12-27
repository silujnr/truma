import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import RP from '../components/Team/RP/RP';



const Researchpolicy = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="Research and Policy Wing" title="Research and Policy Wing" bgimg={require('../assets/images/page-banner.jpg')}/>

        <RP />
           

        </>
    );
};

export default Researchpolicy;
