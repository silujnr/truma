import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import LatestActivities from '../components/ActivityContent/LatestActivities/LatestActivities';
import Mom from '../components/ActivityContent/Mom/Mom';


const Activities = () => {
    return (
        <>
            <BannerTwo pageTitle="Activities" title="Activities" bgimg={require('../assets/images/ACTIVITIES.jpg')} />
            <LatestActivities />
            <Mom />
        </>
    );
};
export default Activities;