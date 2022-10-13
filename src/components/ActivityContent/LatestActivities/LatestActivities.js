
import React from 'react';
import './LatestActivities.css'
import actImg from '../../ActivityContent/LatestActivities/images/ACTIVITIES-PAGE.jpeg';


const LatestActivities = () => {
    return (
        <section className="about-section pt-5 pb-0">
            <div className="container">
                <div className="row">
                    
                    <div className="col-lg-12">
                        {/* <!-- About Content Start --> */}
                        <div className="ab-content">
                            <div className="sub-title"><span className="border-left"></span>Activities</div>
                            
                           <ul className="latestactivities">

                           <li>Weekly training sessions in Road Safety awareness, first aid & situational leadership for the general public since 1998 to create volunteers</li>
<li> 3 day Residential camps in Disaster Management for local self governments, corporates, NGOs and public for volunteers</li>
<li>Leadership training for students and young volunteers.</li>
<li>Blood Donation Camps.</li>
<li>Observation of the World Day of Remembrance for Road Traffic Victims as per UN directions to create awareness on road traffic accidents.</li>


                            <li>
                            01-04-1998 Inauguration of Trauma Care Kozhikode  
                            </li>
                            <li>
                            Trauma Care first volunteers meet at Town Hall Kozhikode on 15-02-1999 (Mon) at 6pm</li>
                            <li>
Inauguration by Worshipful Mayor Kozhikode Corporation</li>
<li>
2000th volunteer I.D Card distributed by Sri. Jacob Punnoos IPS, IGP North Zone to Best Auto, LMV and HMV Drivers and best Traffic personnel in presence of District Collector and President Chamber Of Commerce
                            </li>
                           </ul>
                            
                            
                        </div>
                        <img className='shadow mb-2 w-100' src={actImg} alt="" />
                        {/* <!-- About Content End --> */}
                    </div>
                </div>
            </div>
           
               
           
        </section>




    );
};

export default LatestActivities;