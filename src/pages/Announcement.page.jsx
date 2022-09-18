import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import DonationsContent from '../components/DonationsContent/DonationsContent';
import AnnouncementsNotices from '../components/DonationsContent/AnnouncementsNotices/AnnouncementsNotices';


const Announcement = () => {
    return (
        <>
            <BannerTwo pageTitle="Announcement" title="Announcement" />
            <DonationsContent />
            <AnnouncementsNotices />
           
        </>
    );
};

export default Announcement;