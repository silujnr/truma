import React from 'react'
import { Link } from 'react-router-dom';
import './ProgramDisaster.css';
import PROGRAMDISASTER1 from '../ProgramDisaster/images/PROGRAM-DISASTER-1.jpg';
import PROGRAMDISASTER2 from '../ProgramDisaster/images/PROGRAM-DISASTER-2.jpg';
import PROGRAMDISASTER3 from '../ProgramDisaster/images/PROGRAM-DISASTER-3.jpg';
import PROGRAMDISASTER4 from '../ProgramDisaster/images/PROGRAM-DISASTER-4.jpg';

const ProgramDisasters = [
    {
        id: 1,
        name: 'Disaster 1',
        designation: 'Program',
        image: PROGRAMDISASTER1,
        link: '/'
    },
    {
        id: 2,
        name: 'Disaster 2',
        designation: 'Program',
        image: PROGRAMDISASTER2,
        link: '/'
    },
    {
        id: 3,
        name: 'Disaster 3',
        designation: 'Program',
        image: PROGRAMDISASTER3,
        link: '/'
    },
    {
        id: 4,
        name: 'Disaster 4',
        designation: 'Program',
        image: PROGRAMDISASTER4,
        link: '/'
    }
];

const ProgramDisaster = () => {
    return (
        <section className="team-section">
            <div className="container">
            <div className="col-lg-12 programcontent-block mb-3 p-0">
                <h2>Disaster Team Active Response</h2>
                <p>Trauma Care accident emergency service focuses on providing immediate relief to the road accident victims and this service is rendered in conjunction with the City Traffic Police. The disaster team immediately rushes to the accident site following any accident call reported through the Traffic emergency number. An ambulance with the necessary medical equipment and a trained paramedical medical staff will rush to the spot and provide the basic first aid to the victim If a victim is unconscious then he/she will be admitted into the nearby hospital. The Disaster team also takes the responsibility of informing the family members about the victim's condition.</p>
           </div>
            <h4>Disaster Programs</h4>
            <p>TRACK disaster response team is trained for responding to disasters immediately in the case of a natural calamity, a road accident or any other disastrous situation that may affect the society and common man. These trained volunteers can hold the situation from deteriorating till professional forces like the Fire & Rescue and Police Departments reach the spot. Then the volunteers shift their role to assisting the government agencies.</p>
            <p className='mb-5'>Disaster response team is generally the Primary Response Team and the First Respondents in a calamitous situation based on the skill and expertise they have acquired through the training provided by TRACK.</p>
                <div className="row">
                              

                    {
                        ProgramDisasters?.map(ProgramDisasters => {
                            return (
                                <div key={ProgramDisasters?.id} className="col-lg-3 col-md-6">
                                    <div className="team-member">
                                        <img src={ProgramDisasters?.image} alt="" />
                                        {/* <div className="team-detail">
                                            <p className="designation">{ProgramDisasters?.designation}</p>
                                            <h4><Link to={ProgramDisasters?.link}>{ProgramDisasters?.name}</Link></h4>
                                        </div> */}
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

export default ProgramDisaster;