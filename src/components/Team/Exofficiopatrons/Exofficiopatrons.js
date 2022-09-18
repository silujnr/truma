import React from 'react'
import { Link } from 'react-router-dom';
import '../team.css';
import f1 from '../../Team/Exofficiopatrons/images/1Mayor-Beena-Philip-crop.jpg';
import f2 from '../../Team/Exofficiopatrons/images/2-Ashok-Yadhav-IPS-crop.jpg';
import f3 from '../../Team/Exofficiopatrons/images/3-Dr-NARASIMHUGARI-T-L-REDDY-IAS-crop.jpg';


const Exofficiopatron = [
    {
        id: 1,
        name: 'Beena Philip',
        designation: 'W. Mayor of Calicut',
        image: f1,
        link: '/'
    },
    {
        id: 2,
        name: 'Ashok Yadhav IPS',
        designation: 'Inspector General of Police (North Zone)',
        image: f2,
        link: '/'
    },
    {
        id: 3,
        name: 'Adv. Pradip Kumar C. M.',
        designation: 'District Collector Kozhikode',
        image: f3,
        link: '/'
    }
   

];

const Exofficiopatrons = () => {
    return (
        <section className="team-section">
            <div className="container">
            <h4>EX-OFFICIO PATRONS</h4>
                <div className="row">
                    {
                        Exofficiopatron?.map(Exofficiopatron => {
                            return (
                                <div key={Exofficiopatron?.id} className="col-lg-3 col-md-3">
                                    <div className="team-member">
                                        <img src={Exofficiopatron?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{Exofficiopatron?.designation}</p>
                                            <h4><Link to={Exofficiopatron?.link}>{Exofficiopatron?.name}</Link></h4>
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

export default Exofficiopatrons;