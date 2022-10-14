import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import DonationsContent from '../components/DonationsContent/DonationsContent';
import AnnouncementsNotices from '../components/DonationsContent/AnnouncementsNotices/AnnouncementsNotices';


const Donations = () => {
    return (
        <>
            <BannerTwo pageTitle="Donations" title="Donations" bgimg={require('../assets/images/DONATIONS.jpg')} />
            <DonationsContent />
            <AnnouncementsNotices />
        </>
    );
};

export default Donations;