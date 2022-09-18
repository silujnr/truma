import React from 'react'
import skillImg from '../../../assets/images/home/skill.jpg';




const SkillOne = () => {
    return (
        <section className="skills-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- Call To Action start --> */}
                        <div className="skill-content">
                            <div className="sub-title"><span className="border-left"></span>Official</div>
                            <h3 className="sec-title">
                            Contrary to popular belief
	                        </h3>
                            <p className="sec-desc">
                                A consultant is someone who has some level of expertise that a particular group of people find valuable, and people within that group are willing to pay the consultant.
	                        </p>
                            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                            
                        </div>
                        {/* <!-- Call To Action End --> */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {/* <!--  Skill Image start --> */}
                        <div className="skill-thumb">
                            <div className="angle-top"></div>
                            <img src={skillImg} alt="" />
                            <div className="angle-bottom"></div>
                        </div>
                        {/* <!-- Skill Image End --> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillOne;