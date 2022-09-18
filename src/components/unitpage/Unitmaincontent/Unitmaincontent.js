import React from 'react'
import mainImg from '../Unitmaincontent/images/unit.jpg';




const Unitmaincontent = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                       
                        <div className="skill-content">
                            <div className="sub-title"><span className="border-left"></span>UNITS</div>
                            <h4 className="sec-title">
                            Trauma Care as a policy believes in spreading the message of “Saving the Lives” by empowering local units through guidance and training.	                        </h4>
                            
                           
                            
                        </div>
                       
                    </div>
                    <div className="col-lg-8 col-md-8">
                       
                        <div className="skill-thumb">
                            <div className="angle-top"></div>
                            <img src={mainImg} alt="" />
                            <div className="angle-bottom"></div>
                        </div>
                       
                    </div>
                </div>
                <div className='row mt-5'>
                    <div className='col-12'> 
                    <p className="sec-desc">
                            In this way we have spread our message throughout the whole state of Kerala. Regional units are created in various districts of Malabar and are closely associated with us. Trauma Care Kasargod, Trauma Care Kannur, Trauma Care Malappuram, Trauma Care Wayanad are given parental guidance by Trauma Care. Apart from this, some units in local areas of Kozhikode, Wayanad & Malappuram district are directly controlled by Trauma Care Kozhikode.
                               </p>
                </div></div>
            </div>
        </section>
    );
};
export default Unitmaincontent;