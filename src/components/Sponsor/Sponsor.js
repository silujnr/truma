import React from 'react'
import './Sponsor.css';


import partnerOneImage from  '../../components/Sponsor/images/client-logo/1.png';
import partnerTwoImage from '../../components/Sponsor/images/client-logo/2.png';
import partnerThreeImage from '../../components/Sponsor/images/client-logo/3.png';

import ThemeSlider from '../../components/Sliders/ThemeSlider/ThemeSlider';


const partners = [
    {
        id: 1,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 2,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 3,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 4,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 5,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 6,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 7,
        image: partnerTwoImage,
        link: '#'
    },
    {
        id: 8,
        image: partnerThreeImage,
        link: '#'
    },
    {
        id: 9,
        image: partnerOneImage,
        link: '#'
    },
    {
        id: 10,
        image: partnerTwoImage,
        link: '#'
    }
];

const settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: true,
    centerMode: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        },

    ]
};

const Sponsor = () => {
    return (

            <ThemeSlider images={partners} classes="client-logo owl-carousel mb-65" settings={settings} />
    
            );
};
export default Sponsor;

