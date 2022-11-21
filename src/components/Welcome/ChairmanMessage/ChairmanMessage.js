import React from 'react'
import './ChairmanMessage.css';

// import Membershipbox from '../../Welcome/Membershipbox/Membershipbox';
import chimg from '../../../assets/images/PradipKumar.jpg';

const ChairmanMessage = () => {
    return (
        <section className="ChairmanMessage-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        {/* <!-- About Content Start --> */}
                        <div className="ChairmanMessage-content">
                            <h3 className="sec-title">
                                President's Message
                            </h3>
                            <p className="sec-desc">
                                Trauma Care  Kozhikode TRACK, having completed its 25 years of service and having been able to extend its support to tens of thousands of citizens in need, supported by selfless volunteers from different walks of life, from medical professionals, police officers and social leaders to common man, it is indeed my honour to have had this opportunity to be part of this unparalleled organization as one of its founding members and having had the privilege to lead a team of enthusiastic and socially committed individuals driven by passion and their sense of social responsibility
                            </p>
                            <p>As the society and its needs grow and the changing times demanding continuous revision of strategies and technology, I urge improved participation from all people – professionals, entrepreneurs, industrialists, young professionals, veteran specialists, students etc., in the services provided by TRACK, for us now and for a better tomorrow.</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div classNameˀ="team-member">
                            <div classNameˀ="team-detail">
                                <img src={chimg} alt="" className="img-fluid mb-2" />
                                <p classNameˀ="designation">Commandent Retd.</p>
                                <h4><a href="/">Adv. Pradip Kumar C. M.</a></h4>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChairmanMessage;

