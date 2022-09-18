import React from 'react'
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
// import { Link } from 'react-router-dom';

const Video = ({ videoLink, title = "" }) => {
    const [isOpen, setOpen] = useState(false);
    return (
<React.Fragment>  
              <button onClick={() => setOpen(true)} className="popup-video" ><i className="fa fa-play"></i><span>{title}</span></button>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId={(videoLink)} onClose={() => setOpen(false)} />
        </React.Fragment>
    );
};

export default Video;