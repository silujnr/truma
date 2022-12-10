import React from 'react'
import { Link } from 'react-router-dom';
import './TrainingPrograms.css';
import PROGRAMDISASTER1 from '../TrainingPrograms/images/PROGRAM-FA-TRAINING-1.jpg';
import PROGRAMDISASTER2 from '../TrainingPrograms/images/PROGRAM-FIRE-FIGHTING-TRAINING.jpg';
import PROGRAMDISASTER3 from '../TrainingPrograms/images/PROGRAM-TRAINING-1.jpg';
import PROGRAMDISASTER4 from '../TrainingPrograms/images/PROGRAM-TRAINING-2.jpg';
import PROGRAMDISASTER5 from '../TrainingPrograms/images/PROGRAM-TRAINING-3.jpg';
import PROGRAMDISASTER6 from '../TrainingPrograms/images/PROGRAM-TRAINING-4.jpg';


import roadsafety1 from '../TrainingPrograms/images/roadsafety/PROGRAM-ROAD-SAFETY-1.jpg';
import roadsafety2 from '../TrainingPrograms/images/roadsafety/PROGRAM-ROAD-SAFETY-2.jpg';
import roadsafety3 from '../TrainingPrograms/images/roadsafety/PROGRAM-ROAD-SAFETY-3.jpg';
import roadsafety4 from '../TrainingPrograms/images/roadsafety/PROGRAM-ROAD-SAFETY-4.jpg';

const TrainingProgram = [
    {
        id: 1,
        name: 'Basic Life Support Training',
        designation: 'Program',
        image: PROGRAMDISASTER1,
        link: '/'
    },
    {
        id: 2,
        name: 'Disaster Management Training Practical',
        designation: 'Program',
        image: PROGRAMDISASTER2,
        link: '/'
    },
    {
        id: 3,
        name: 'Situational Leadership Training',
        designation: 'Program - 1',
        image: PROGRAMDISASTER3,
        link: '/'
    },
    {
        id: 4,
        name: 'Disaster Management Training Practical',
        designation: 'Program - 2',
        image: PROGRAMDISASTER4,
        link: '/'
    }
    ,
    {
        id: 5,
        name: 'Road Safety Training',
        designation: 'Program - 3',
        image: PROGRAMDISASTER5,
        link: '/'
    }
    ,
    {
        id: 6,
        name: 'Disaster Management Training',
        designation: 'Program - 4',
        image: PROGRAMDISASTER6,
        link: '/'
    }
];

const Roadsafety = [
    {
        id: 1,
        name: 'ROAD SAFETY ',
        designation: 'Program - 1',
        image: roadsafety1,
        link: '/'
    },
    {
        id: 2,
        name: 'ROAD SAFETY',
        designation: 'Program - 2',
        image: roadsafety2,
        link: '/'
    },
    {
        id: 3,
        name: 'ROAD SAFETY',
        designation: 'Program - 3',
        image: roadsafety3,
        link: '/'
    },
    {
        id: 4,
        name: 'ROAD SAFETY',
        designation: 'Program - 4',
        image: roadsafety4,
        link: '/'
    }
   
    
];
const TrainingPrograms = () => {
    return (
        <section className="team-section">
            <div className="container">
            <div className="col-lg-12 programcontent-block mb-3 p-0">
            <h2>Training Programs</h2>
            <p>The training in disaster management is of utmost importance to save lives of accident victims and many lives can be saved by giving proper training to provide first aid. The life of the victim lies in a delicate balance and the time is of critical importance. To expedite the Trauma Care, training programmes are held at the behest of ‘TRACK’ and classes are given to volunteers, college students, Teachers, drivers and the general public. Prevention of accidents is also outlined in our training programmes. Handling of the accident victims by the rescuers, prevention of loss of blood, first aid etc are also tackled in the classes.</p>
           </div>
            <h4>Training Programs</h4>
                <div className="row mb-5">
                    {
                        TrainingProgram?.map(TrainingProgram => {
                            return (
                                <div key={TrainingProgram?.id} className="col-lg-3 col-md-6">
                                    <div className="team-member">
                                        <img src={TrainingProgram?.image} alt="" />
                                        <div className="team-detail">
                                           
                                            <h4><Link to={TrainingProgram?.link}>{TrainingProgram?.name}</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <h4>Road Safety</h4>
                    <p className='mb-4'>Road Safety Training Volunteers trained by TRACK give necessary help and aid to the victims of road accidents at the site of the accidents as well as help them to get shifted to hospitals immediately for treatment. TRACK is able to do this service because of the numerical strength of the volunteers who can be present at almost any site.</p> 
                <div className="row">
                    {
                        Roadsafety?.map(Roadsafety => {
                            return (
                                <div key={Roadsafety?.id} className="col-lg-3 col-md-6">
                                    <div className="team-member">
                                        <img src={Roadsafety?.image} alt="" />
                                        {/* <div className="team-detail">
                                            <p className="designation">{Roadsafety?.designation}</p>
                                            <h4><Link to={Roadsafety?.link}>{Roadsafety?.name}</Link></h4>
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

export default TrainingPrograms;