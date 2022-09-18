import React from "react";
import Gallery from "react-grid-gallery";
import "../Gallery.css";
import photo1 from "../../../assets/images/home/hero.jpg";
import photo2 from "../../../assets/images/home/hero.jpg";
import photo3 from "../../../assets/images/home/hero.jpg";
import photo4 from "../../../assets/images/home/hero.jpg";

import thumbnail from "../../../assets/images/home/gallery-thumbnail.jpg";

function Latestevent() {
  const Latesteventphotos = [
    {
      src: photo1,
      thumbnail: thumbnail,
      thumbnailWidth: 320,
      thumbnailHeight: 212,

      caption: "Fotografia da Viagem de Portugual - Algar de Benagil",
    },
        {
      src: photo2,
      thumbnail: thumbnail,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil",
    },
    {
      src: photo3,
      thumbnail: thumbnail,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil)",
    },
    {
      src: photo4,
      thumbnail: thumbnail,
      thumbnailWidth: 320,
      thumbnailHeight: 212,
      caption: "Fotografia da Viagem de Portugual - Algar de Benagil",
    },
    
  ];

  return (
    <div className="PortfolioPage pt-5 pb-5">
   
       <h2 className="text-center heading"> Latest Event Pictures (Trainings / Events / Felicitations etc.)</h2>
        <div className="ListPhotos">
          <Gallery
            images={Latesteventphotos}
            margin={10}
            maxRows={3}
            backdropClosesModal={true}
          />
        </div>
      
    </div>
  );
}

export default Latestevent;