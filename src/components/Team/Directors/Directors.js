import React from 'react'
import { Link } from 'react-router-dom';
import '../team.css';
import f1 from '../../Team/Directors/images/1-a-akbar-crop.jpg';
import f2 from '../../Team/Directors/images/2-Dr-V-R-Rajendran-Medical-College-Principal-crop.jpg';
import f3 from '../../Team/Directors/images/3.-Regional-Transport-Officer.jpg';

const Director = [
    {
        id: 1,
        name: 'A. Akbar',
        designation: 'City Police Commissioner (Kozhikode)',
        image: f1,
        link: '/'
    },
    {
        id: 2,
        name: 'Dr. V. R. Rajendran ',
        designation: 'Principal Medical College (Kozhikode)',
        image: f2,
        link: '/'
    },
    {
        id: 3,
        name: 'P. R. Sumesh',
        designation: 'Regional Transport Officer Kozhikode.',
        image: f3,
        link: '/'
    }

];

const Directors = () => {
    return (
        <section className="team-section">
            <div className="container">
            <h4>Directors</h4>
                <div className="row">
                    {
                        Director?.map(Director => {
                            return (
                                <div key={Director?.id} className="col-lg-3 col-md-3">
                                    <div className="team-member">
                                        <img src={Director?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{Director?.designation}</p>
                                            <h4><Link to={Director?.link}>{Director?.name}</Link></h4>
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

export default Directors;