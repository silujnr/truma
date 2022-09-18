import React from 'react'
import { Link } from 'react-router-dom';
import '../team.css';
import f1 from '../../Team/Enlightener/images/1-Adv-Mohandas-crop.jpg';
import f2 from '../../Team/Enlightener/images/2-yousuf-siddique-crop.jpg';


const Enlightener = [
    {
        id: 1,
        name: 'Late Adv. V. P. Mohandas',
        designation: '',
        image: f1,
        link: '/'
    },
    {
        id: 2,
        name: 'Late Yousuf Siddique',
        designation: '(Joint Regional Transport Officer)',
        image: f2,
        link: '/'
    }

];

const Enlighteners = () => {
    return (
        <section className="team-section">
            <div className="container">
            <h4>Enlighteners</h4>
                <div className="row">
                    {
                        Enlightener?.map(Enlightener => {
                            return (
                                <div key={Enlightener?.id} className="col-lg-3 col-md-3">
                                    <div className="team-member">
                                        <img src={Enlightener?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{Enlightener?.designation}</p>
                                            <h4><Link to={Enlightener?.link}>{Enlightener?.name}</Link></h4>
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

export default Enlighteners;