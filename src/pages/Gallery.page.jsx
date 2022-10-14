import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';
// import Latestevent from '../components/Gallery/Latestevent/Latestevent';
// import Meetingpictures from '../components/Gallery/Meetingpictures/Meetingpictures';
import Activitypictures from '../components/Gallery/Activitypictures/Activitypictures';

const Gallery = () => {
    return (
        <>
            <BannerTwo pageTitle="Gallery" title="Gallery" bgimg={require('../assets/images/GALLERY.jpg')} />
            {/* <Latestevent />
            <Meetingpictures /> */}
           <Activitypictures />
          
        </>
    );
};

export default Gallery;