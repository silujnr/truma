import React from "react";
import Gallery from "react-grid-gallery";
import "../Gallery.css";

import GalleryImages from "../Activitypictures/GalleryImage";
function Activitypictures () {
  
 return (
   
    <div className="PortfolioPage pt-5 pb-5">
   
       <h2 className="text-center heading">Activity Pictures of ‘TRACK’ in Action</h2>
        <div className="ListPhotos">
          <Gallery
            images={GalleryImages}
            margin={10}
            backdropClosesModal={true}
            showLightboxThumbnails={true}
            preloadNextImage={true}
            
          />
        </div>
    </div>
  );
}

export default Activitypictures;