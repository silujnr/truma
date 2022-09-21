import React from 'react'
import { Link } from 'react-router-dom';
import '../team.css';
import f1 from '../../Team/Founders/images/1-radhakrisnan-crop.jpg';
import f2 from '../../Team/Founders/images/2-john-jacob-crop.jpg';
import f3 from '../../Team/Founders/images/3-Pradip-Kumar-crop.jpg';
import f4 from '../../Team/Founders/images/4-janardhanan-crop.jpg';
import f5 from '../../Team/Founders/images/5-K-T-Raghunath-crop.jpg';
import f6 from '../../Team/Founders/images/6-Dr-lokesh.jpg';
import f7 from '../../Team/Founders/images/7-Dr-kn-pillai-crop.jpg';
import f8 from '../../Team/Founders/images/8-satheeshan-p-k.jpg';
import f9 from '../../Team/Founders/images/9-chandrashekhar-crop.jpg';
import f10 from '../../Team/Founders/images/10-N-Gopalakrishnan-crop.jpg';
import f11 from '../../Team/Founders/images/11-Dr-KG-Alexander-crop.jpg';
import f12 from '../../Team/Founders/images/12-Dr.-T-K-JAYARAJ-crop.jpg';


const founder = [
    {
        id: 1,
        name: 'E. K. Radhakrishnan',
        designation: '',
        image: f1,
        link: '/'
    },
    {
        id: 2,
        name: 'John Jacob',
        designation: '',
        image: f2,
        link: '/'
    },
    {
        id: 3,
        name: 'Adv. Pradip Kumar C. M.',
        designation: 'Commandent Retd',
        image: f3,
        link: '/'
    },
    {
        id: 4,
        name: 'P. M. Janardhanan',
        designation: '',
        image: f4,
        link: '/'
    },
    {
        id: 5,
        name: 'K. T. Raghunath',
        designation: '',
        image: f5,
        link: '/'
    },
    {
        id: 6,
        name: 'Dr. Lokeshan Nair',
        designation: '',
        image: f6,
        link: '/'
    },
    {
        id: 7,
        name: 'Dr. K. N. Pillai',
        designation: '',
        image: f7,
        link: '/'
    },
    {
        id: 8,
        name: 'Satheeshan P. K.',
        designation: '',
        image: f8,
        link: '/'
    },
    {
        id: 9,
        name: 'WG.CDR. Chandrasekhar',
        designation: '',
        image: f9,
        link: '/'
    },
    {
        id: 10,
        name: 'N. GopalaKrishnan ',
        designation: '',
        image: f10,
        link: '/'
    },
    {
        id: 11,
        name: 'Dr. K. G. Alexander',
        designation: '',
        image: f11,
        link: '/'
    },
    {
        id: 12,
        name: 'Dr. T. K. Jayaraj',
        designation: '',
        image: f12,
        link: '/'
    }

];

const Founders = () => {
    return (
        <section className="team-section">
            <div className="container">
            <h4>Founders</h4>
                <div className="row">
                    {
                        founder?.map(founder => {
                            return (
                                <div key={founder?.id} className="col-lg-3 col-md-3">
                                    <div className="team-member">
                                        <img src={founder?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{founder?.designation}</p>
                                            <h4><Link to={founder?.link}>{founder?.name}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }


                </div>
            </div>
        </section>
    );
};

export default Founders;