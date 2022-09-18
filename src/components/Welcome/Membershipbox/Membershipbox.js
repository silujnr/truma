import React from 'react'
import { Link } from 'react-router-dom';
import '../ChairmanMessage/ChairmanMessage.css';
import membericon from '../../../components/Welcome/ChairmanMessage/images/membership-icon.png';
const Membershipbox = () => {
    return (
        <div className="appointment-block">
                        <div className="appointment-content-box">
                            <div className="appointment-icon">
                            <img src={membericon} alt="" />
                            </div>
                            <span className="heading">Trauma Care Calicut</span>
                            <p>Become a Member</p>
                            
                            <Link to="/memberships" className="quomodo-btn w-100">Membership Now</Link>
                        </div>
        </div>
    );
};

export default Membershipbox;