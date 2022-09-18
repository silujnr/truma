import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import MainContent from '../components/Official/MainContent/MainContent';
import AffiliationAchievements from '../components/Official/AffiliationAchievements/AffiliationAchievements';
import Team from '../components/Team/Team';
import MissionVisionValue from '../components/Official/MissionVisionValue/MissionVisionValue';



const Official = () => {
    return (
        <>
            <BannerTwo pageTitle="Official" title="Official" />
            <MainContent />
            <AffiliationAchievements />
            
            <Team />
            <MissionVisionValue />
        </>
    );
};

export default Official;