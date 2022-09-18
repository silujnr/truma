import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
import Founders from '../components/Team/Founders/Founders';
import Exofficiopatrons from '../components/Team/Exofficiopatrons/Exofficiopatrons';
import Patrons from '../components/Team/Patrons/Patrons';
import Enlightener from '../components/Team/Enlightener/Enlightener';
import Directors from '../components/Team/Directors/Directors';
import Officebearers from '../components/Team/Officebearers/Officebearers';



const Ourteam = () => {
    return (
        <>
            <BannerTwo pageTitle="Our Team" title="Our Team" />
            <span className='mb-5 d-flex'></span>
            <Founders />
            <Exofficiopatrons />
            <Patrons />
            <Enlightener />
            <Directors />
            <Officebearers />
        </>
    );
};

export default Ourteam;