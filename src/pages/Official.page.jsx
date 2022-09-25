import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import MainContent from '../components/Official/MainContent/MainContent';
import AffiliationAchievements from '../components/Official/AffiliationAchievements/AffiliationAchievements';
//import Team from '../components/Team/Team';
import MissionVisionValue from '../components/Official/MissionVisionValue/MissionVisionValue';

import Founders from '../components/Team/Founders/Founders';
import Exofficiopatrons from '../components/Team/Exofficiopatrons/Exofficiopatrons';
import Patrons from '../components/Team/Patrons/Patrons';
import Enlightener from '../components/Team/Enlightener/Enlightener';
import Directors from '../components/Team/Directors/Directors';
import Officebearers from '../components/Team/Officebearers/Officebearers';


const Official = () => {
    return (
        <>
            <BannerTwo pageTitle="Official" title="Official" />
            <MainContent />
            <AffiliationAchievements />
            
            {/* <Team /> */}

            <Founders />
            <Exofficiopatrons />
            <Patrons />
            <Enlightener />
            <Directors />
            <Officebearers />
            <MissionVisionValue />
        </>
    );
};

export default Official;