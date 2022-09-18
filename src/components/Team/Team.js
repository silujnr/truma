import React from 'react'
import { Link } from 'react-router-dom';
import './team.css';
import teamOne from '../Team/images/team/Dr-Haroon.jpg';
import teamTwo from '../Team/images/team/Sri-K-T-Raghunath.jpg';
import teamThree from '../Team/images/team/Sri-N-Gopalakrishnan.jpg';
import teamfour from '../Team/images/team/team-4.jpg';

const teams = [
    {
        id: 1,
        name: 'Dr. Haroon',
        designation: 'Founder',
        image: teamOne,
        link: '/'
    },
    {
        id: 2,
        name: 'Sri K T Raghunath',
        designation: 'CEO',
        image: teamTwo,
        link: '/'
    },
    {
        id: 3,
        name: 'Sri N Gopalakrishnan',
        designation: 'Consultant',
        image: teamThree,
        link: '/'
    },
    {
        id: 4,
        name: 'John Doe',
        designation: 'Consultant',
        image: teamfour,
        link: '/'
    }
];

const Team = () => {
    return (
        <section className="team-section">
            <div className="container">
            <h4>Office Bearers</h4>
                <div className="row">
                
                    {/* <!-- Team Member start --> */}

                    {
                        teams?.map(team => {
                            return (
                                <div key={team?.id} className="col-lg-3 col-md-6">
                                    <div className="team-member">
                                        <img src={team?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{team?.designation}</p>
                                            <h4><Link to={team?.link}>{team?.name}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    {/* <!-- Team Member End --> */}

                </div>
            </div>
        </section>
    );
};

export default Team;