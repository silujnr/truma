import React from 'react'
import { Link } from 'react-router-dom';
import '../team.css';
import f1 from '../../Team/RP/images/1-President-Pradip-Kumar.jpg';
import f2 from '../../Team/RP/images/MOHAMMED-NAJEEB.jpg';
import f3 from '../../Team/RP/images/Dr-Haroon.jpg';
import f4 from '../../Team/RP/images/Prabhavathi-KS.jpg';
import f5 from '../../Team/RP/images/PMJOSEPH-SAJU.jpg';
import f6 from '../../Team/RP/images/img-placeholder.jpg';
import f7 from '../../Team/RP/images/vijaya-kumar.jpg';
import f8 from '../../Team/RP/images/img-placeholder.jpg';




const rpimages = [
    {
        id: 1,
        name: 'Adv. PRADIP KUMAR C. M. (Commandant (Retd.)',
        designation: 'Commandant retd.',
        image: f1,
        link: '/'
    },
    {
        id: 2,
        name: 'Dr. MOHAMMED NAJEEB',
        designation: 'Former Deputy Transport Commissioner Kerala',
        image: f2,
        link: '/'
    },
    {
        id: 3,
        name: 'Dr. HAROON PILLAI',
        designation: 'Neuro Surgeon',
        image: f3,
        link: '/'
    },
    {
        id: 4,
        name: 'Dr. PRABHAVATHY. K. S',
        designation: 'Psychiatrist, Head of The Department, Govt. Medical College, Kozhikode',
        image: f4,
        link: '/'
    },
    {
        id: 5,
        name: 'P M JOSEPH SAJU',
        designation: 'Deputy Superintendent of Police, Vigilance Cell, High Court, Ernakulam, Kozhikode',
        image: f5,
        link: '/'
    },
    {
        id: 6,
        name: 'M V L R Anjaneyalu',
        designation: 'Professor, Department of Civil Engineering, NIT Calicut',
        image: f6,
        link: '/'
    },
    {
        id: 7,
        name: 'N Vijayakumar',
        designation: 'Former Coordinator NATPAC',
        image: f7,
        link: '/'
    },
    {
        id: 8,
        name: 'LAWELLMAN',
        designation: 'Asst. Professor, Govt. Law College, Kozhikode',
        image: f8,
        link: '/'
    }
]

const RP = () => {
    return (
        <section className="skills-section">
            <div className="container">
            <h4>Research and Policy Wing</h4>
                <div className="row">
                    {
                        rpimages?.map(rpimages => {
                            return (
                                <div key={rpimages?.id} className="col-lg-3 col-md-3">
                                    <div className="team-member">
                                        <img src={rpimages?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{rpimages?.designation}</p>
                                            <h4><Link to={rpimages?.link}>{rpimages?.name}</Link></h4>
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

export default RP;