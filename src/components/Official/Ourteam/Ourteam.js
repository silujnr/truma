import React from 'react'
import './MissionVisionValue.css';

import VISION from '../../Gallery/images/mainimage/GALLERY-PAGE-14.jpg';
import mission  from '../../Gallery/images/mainimage/GALLERY-PAGE-63.jpg';





const MissionVisionValue = () => {
    return (
        <section className="missionVisionValue-section">
            <div className="container">
                <div className='row mb-5'>
                   <div className='col-md-12'>

                   
                    <h4>ACHIEVEMENTS</h4>
                    <p>Trauma care Kozhikode was started at a time when the general public was shying away from attending road traffic victims due to fear of legal complications that followed.</p>
                    <p>TRACK has spread the message of “Saving a Life” through various activities and volunteer training programs. Slowly this message of “Saving a Life” has spread throughout Kerala State. Kerala society has wholeheartedly accepted this message. The Government, Police Department & Motor Vehicles Department and various other organizations have accepted this message. Road traffic accident awareness and help programs were undertaken by various organizations and government agencies throughout the state. Volunteer training programs were begun by Police, Motor Vehicle departments, local governments and various other organizations.</p>
                    <p>Trauma Care Kozhikode itself has trained 54000 volunteers in this field so far. We were not only the first in initiating such programs; no other NGO has equalled or surpassed our achievements in this field.</p>
                    <p>Now in Kerala state no victim of road traffic accidents goes unattended on public roads. We are proud to proclaim that this is a major achievement of our program.</p>
                    <p>In 2001, the state of Gujarat faced a massive earthquake which caused about 30000 deaths and a massive destruction of property. India had never faced such a disaster. The idea of facing such calamities was not in the vision of even governments. Trauma Care society has undertaken a mission to equip the common man at a modest level to face such disasters by training volunteers. It was actually a vision not undertaken by any other organization in India or even government agencies.</p>
                    <p>Succeeding years proved that our vision and mission were in the right direction. The last 25 years have seen disasters strike on a regular basis and on an immense scale throughout the world including India.</p>
                    <p>Climatic conditions which are largely disturbed due to human actions have resulted in frequent disasters. The massive floods faced by Kerala state during 2018 & 2019 can be taken as an example of this. The corona episode from which the world is yet to get relieved also can be taken as an example.</p>
                    <p>Trauma Care Society from 2003 onwards with this mission started training in Disaster Management for public volunteers as First Respondents at a modest level. We were assisted in this field by trainers from the Fire and Rescue department of Kerala, Police Department, Medical Professionals, Chemical Engineers, Electrical Safety Experts and various other experts in Disaster Management. We have conducted on a regular basis 3 days residential Camps for this purpose and trained Local Self Government volunteers, Corporates & institutional teams and volunteers from the general public. By this training, a moderate number of trained people are there to attend to any type of disasters in Kozhikode and adjoining areas of Malabar, Kerala State. These trained volunteers were very much present and active in all the major disasters which struck the Malabar region of Kerala during the last several years. The massive floods of 2018 & 2019 which struck Kerala State proved the mettle of these volunteers. A major disaster which sent shock wave through Kerala was the Kadalundy Disaster, in which crowded train fell into the Kadalundy River. The service of our volunteers was praised by everybody during that period.</p>
                    <p>Now we are the only organization, accepted as a training agency in Disaster Management by Local Self Government, District Administration, the Kozhikode Municipal Corporation, various other organizations and NGOs.</p>
                    <p>During the pandemic our volunteers have actively participated in assisting government agencies under their guidance in reaching the needy. Our trained volunteers were in the field from the distribution of medicines to the disposal of dead bodies.</p>
                </div></div>






                <div className='row mb-5'>
                    <div className="col-md-4">
                    <img src={mission} alt="" className='img-fluid rounded shadow'/>  

                    </div>
                    <div className='col-md-8'>
                        <h4>VISION</h4>
                        <p>Apart from the mission this organization has already undertaken, we wish to go forward with a new vision in mind. There are many issues in society which are being swept under the carpet or being neglected like the needs of the elderly population in the society and the lack of universal medical aid. These issues need to be brought to the fore front and to be given attention.</p>
                        <p>The real problems of the society are neglected by the present destructive leadership in the society who aim for their political and personal end only. TRACK aims to find out, train and motivate a new generation of leaders who can lead the society in a creative and constructive way.</p>
                    </div>
                </div>
                    <div className='row mb-5'>
                        <div className='col-md-8'>
                            <h4>MISSION</h4>
                            <ul>
                            <li>To render assistance to victims of road accidents, primarily by for shifting them to a place where they can receive professional help.</li>
                            <li>To bring about an overall reduction in the number of road traffic accidets by spreading awareness among the public through training programs.</li>
                            <li>To spread awareness among the public about disaster and crisis management, including the need for preparedness to face disasters and to train them to manage disasters minimizing casualties and loss.</li>
                            <li>To render assistance to the society in disaster management and empower the local community during disasters.</li>
                            <li>To spread awareness that leadership is necessary in all situations and walks of life, and to provide training, to the public and motivate them to fulfill their social responsibilities.</li>
                            <li>In a Kerala heading towards a demography of the aged and a migrating youth, preparing volunteers to render assistance in emergencies involving the old and infirm</li>
                            </ul>
                        </div>
                        <div className='col-md-4'>
                            <img src={VISION} alt="" className='img-fluid rounded shadow'/>  
                        </div>
                    </div>

                
            </div>
           
               
           
        </section>

    );
};

export default MissionVisionValue;