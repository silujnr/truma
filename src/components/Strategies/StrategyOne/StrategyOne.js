import { Link } from 'react-router-dom';import React from 'react'
import './strategyOne.css';
import arrowImg from '../../../components/Strategies/StrategyOne/images/more-arrow-circle.png';

import strategyImg1 from '../../../components/Strategies/StrategyOne/images/mission.jpg';
import strategyImg2 from '../../../components/Strategies/StrategyOne/images/activities.jpg';
import strategyImg3 from '../../../components/Strategies/StrategyOne/images/people.jpg';


const strategies = [
    {
        id: 1,
        image: strategyImg1,
        tag: 'Our Mission',
        title: 'Click here to Know More',
        link: '#'
    },
    {
        id: 2,
        image: strategyImg2,
        tag: 'Our Activities',
        title: 'Click here to Know More',
        link: '/activities'
    },
    {
        id: 3,
        image: strategyImg3,
        tag: 'The People',
        title: 'Click here to Know More',
        link: '#'
    }
];

const StrategyOne = () => {
    return (
        <section className="Strategy-section">
            {/* <!-- Shape --> */}
            
            <div className="container">
               
                <div className="row">

                    {/* <!--  Strategy Item Start --> */}
                    {
                        strategies?.map(strategy => {
                            return (
                                <div key={strategy?.id} className="col-lg-4 col-md-4">

                                    <div className="strategy-item">
                                        <div className="st-thumb">
                                            <img src={strategy?.image} alt="" />
                                        </div>
                                        <div className="st-details">
                                            <span>{strategy?.tag}</span>
                                            <p><Link to={strategy?.link}>{strategy.title}</Link></p>
                                            <span className="arrow-circle"><Link to={strategy?.link}><img src={arrowImg} alt="" /></Link></span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                    {/* <!--  Strategy Item End --> */}
                </div>
            </div>
        </section>
    );
};

export default StrategyOne;

