import React from 'react'
import { Link } from 'react-router-dom';
import '../team.css';
import f1 from '../../Team/Patrons/images/1.-M-K RAGHAVAN-crop.jpg';
import f2 from '../../Team/Patrons/images/2-A-PRADEEP-KUMAR-crop.jpg';
import f3 from '../../Team/Patrons/images/3-jacob-punnoose-crop.jpg';
import f4 from '../../Team/Patrons/images/4-S-SREEJITH-crop.jpg';
import f5 from '../../Team/Patrons/images/5-chandrashekhar-crop.jpg';
import f6 from '../../Team/Patrons/images/6-Adv-Thomas-MAthew-crop.jpg';
import f7 from '../../Team/Patrons/images/7-darius-phiroze-crop.jpg';
import f8 from '../../Team/Patrons/images/8-Dr-HAROON-PILLAY-crop.jpg';


const Patron = [
    {
        id: 1,
        name: 'M. K. Raghavan ',
        designation: '(Member of Indian Parliament)',
        image: f1,
        link: '/'
    },
    {
        id: 2,
        name: 'A. Pradip Kumar',
        designation: '(Former Member of Legislative Assembly Kerala)',
        image: f2,
        link: '/'
    },
    {
        id: 3,
        name: 'Jacob Punnoose IPS',
        designation: '(Director General of Police)',
        image: f3,
        link: '/'
    },
    {
        id: 4,
        name: 'S. Sreejith IPS',
        designation: '(Additional Director General of Police, Kerala)',
        image: f4,
        link: '/'
    },
    {
        id: 5,
        name: 'WG. CDR. Chandrasekhar',
        designation: '',
        image: f5,
        link: '/'
    },
    {
        id: 6,
        name: 'Adv. Thomas Mathew',
        designation: '',
        image: f6,
        link: '/'
    },
    {
        id: 7,
        name: 'Darius P. Marshall',
        designation: '',
        image: f7,
        link: '/'
    },
    {
        id: 8,
        name: 'Dr. Haroon Pillay',
        designation: '',
        image: f8,
        link: '/'
    }

];

const Patrons = () => {
    return (
        <section className="team-section">
            <div className="container">
            <h4>Patrons</h4>
                <div className="row">
                    {
                        Patron?.map(Patron => {
                            return (
                                <div key={Patron?.id} className="col-lg-3 col-md-3">
                                    <div className="team-member">
                                        <img src={Patron?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{Patron?.designation}</p>
                                            <h4><Link to={Patron?.link}>{Patron?.name}</Link></h4>
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

export default Patrons;