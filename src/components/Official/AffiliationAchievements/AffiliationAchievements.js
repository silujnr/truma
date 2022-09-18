import React from 'react'
import achivementImg from '../images/Achievement.jpg';




const AffiliationAchievements = () => {
    return (
        <section className="">
            <div className="container">
                <div className="row mb-5">
                <div className="col-lg-4 col-md-4">
                            <img className='shadow img-fluid' src={achivementImg} alt="" />
                    </div>
                    <div className="col-lg-8 col-md-8">
                        {/* <!-- Call To Action start --> */}
                        <div className="skill-content pt-0">
                            <div className="sub-title"><span className="border-left"></span>Official</div>
                            <h3 className="sec-title">Affiliation </h3>
                           <p>TRACK is closely associated with governmental departments like Police, Motor Vehicle Department, Fire & Rescue, Medical Services, Forest, Disaster Management agencies, District Administration and Local Self Government. TRACK coordinates services of various Non-governmental organizations in the field of road traffic activities and disaster management.</p>
                            
                        </div>
                       
                    </div>
                    
                </div>
            </div>
        </section>
    );
};

export default AffiliationAchievements;