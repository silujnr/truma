import DonationImg1 from '../../components/Gallery/images/mainimage/GALLERY-PAGE-10.jpg';

import React from 'react'
const DonationsContent = () => {
    return (
        <section className="about-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- About Image Start --> */}
                        <div className="about-thumb">
                            <img className='shadow mb-2' src={DonationImg1} alt="" />
                           
                        </div>
                        {/* <!-- About Image End --> */}
                    </div>
                    <div className="col-lg-6 col-md-6">
                        {/* <!-- About Content Start --> */}
                        <div className="ab-content">
                            <div className="sub-title"><span className="border-left"></span>Donations</div>
                            <h3 className="sec-title">
                            Contribution Guidelines
                            </h3>
                            
<p>Contributions & Donations should be given with due respect for the wishes and authority of the recipient, and in conformity with government policies.</p>
<p>Contributions and Donations can be made in the form of funds, support items, equipment, venue sponsorships, event sponsorships etc. that can be discussed with ‘TRACK’ team and confirmed</p>



                           
                            
                        </div>
                        {/* <!-- About Content End --> */}
                    </div>
                </div>
            <div className="row">
<div className="col-lg-12">
<p>All contributors and donors should ensure the quality of items contributed/donated. Quality checks shall be conducted by competent team for and on behalf of ‘TRACK’</p>
<p>Identity of the Contributor / Donor can be kept a controlled from being public, but shall be recorded with the official register of ‘TRACK’</p>
<p>Contributions can be made in the name of individuals, institutions, companies, enterprises, organizations, societies, or associations. In any case of contribution and donation, the principal coordinating organization shall be ‘TRACK’</p>
<p>Contributor / Donor benefits in terms of marketing shall be discussed in detail with ‘TRACK’ authorities and are subject to statutory and Government laws and regulations</p>
</div>
            </div>
            </div>
        </section>
    );
};

export default DonationsContent;










