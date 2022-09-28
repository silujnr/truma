import React from 'react'
import { Link } from 'react-router-dom';
import './homebanner.css';
import slideone from  '../Homebanner/images/slideshow/slideshow01.jpg'
import slidetwo from  '../Homebanner/images/slideshow/slideshow02.jpg'
import slidethree from  '../Homebanner/images/slideshow/slideshow03.jpg'
import slidefour from  '../Homebanner/images/slideshow/slideshow04.jpg'
import slidefive from  '../Homebanner/images/slideshow/slideshow05.jpg'
import '../../Sponsor/Sponsor.css';

import Slider from "react-slick";
const images = [
    {
        id: 1,
        image: slideone,
        link: '#',
        title:'You can’t',
        subtitle:'always be strong.',
        description:'We’ll help You.',
        buttontext:'Explore our Services',
        buttonlink:"#"
    },
    {
        id: 2,
        image: slidetwo,
        link: '#',
        title:'Always be strong.',
        subtitle:'',
        description:'We’ll help You.',
        buttontext:'Explore our Services',
        buttonlink:"#"
    },
    {
        id: 3,
        image: slidethree,
        link: '#',
        title:'Always be strong.',
        subtitle:'',
        description:'We’ll help You.',
        buttontext:'Explore our Services',
        buttonlink:"#"
    },
    {
        id: 4,
        image: slidefour,
        link: '#',
        title:'Always be strong.',
        subtitle:'',
        description:'We’ll help You.',
        buttontext:'Explore our Services',
        buttonlink:"#"
    },
    {
        id: 5,
        image: slidefive,
        link: '#',
        title:'Always be strong.',
        subtitle:'',
        description:'We’ll help You.',
        buttontext:'Explore our Services',
        buttonlink:"#"
    },
]
const slidersettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    centerMode: false, 
     responsive: [
 
        {
            breakpoint: 1024,
            settings: {
                dots: true,

                arrows: false,
            }
        },
        {
            breakpoint: 640,
            settings: {    dots: true,

                arrows: false,
            }
        },
        {
            breakpoint: 600,
            settings: {    dots: true,

                arrows: false,
            }
        }
    ]
   
};
const Homebanner = ({  classes = "homebanner" }) => {
    return (
        <Slider className={classes} images={images} settings={slidersettings}>
            {
                images?.map((image, index) => {
                    return (
                        <div className="banner-slide" key={index} >
                            <Link to={image?.link}>
                               <img src={image?.image} alt="" />
                            </Link>
                            <div className="container position-relative">
                            <div className="flex-caption">
                                    <div className="title">{image?.title}</div>
                                    <div className="sub-title">{image?.subtitle}</div>
                                    <div className="description">{image?.description}</div>
                                   <Link to={image?.buttonlink}>
                                   <span className="slider-icon">Explore our Services</span>
                                   </Link>
                                    
                                </div>
                            </div>
                            
                        </div>
                    )
                })
            }
        </Slider>
    );
};

export default Homebanner;