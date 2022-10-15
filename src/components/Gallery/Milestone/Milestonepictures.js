import React from "react";
import Gallery from "react-grid-gallery";
import "../Gallery.css";

import Milestoneimage from "./MilestoneImage";
function Milestonepictures () {
  
 return (
   
    <div className="PortfolioPage pt-5 pb-5">
   
       <h2 className="text-center heading">Milestone's</h2>
        <div className="ListPhotos">
          <Gallery
            images={Milestoneimage}
            margin={10}
            backdropClosesModal={true}
            showLightboxThumbnails={true}
            preloadNextImage={true}
            
          />
        </div>
    </div>
  );
}

export default Milestonepictures;