import React from 'react'
import pageBanner from '../../../assets/images/page-banner.jpg';
import Breadcrumb from '../../Breadcrumb/Breadcrumb';



const BannerTwo = ({ pageTitle = '', title = '' }) => {
    return (
        <section className="page-banner" style={{ backgroundImage: `url(${pageBanner})` }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-content">
                            {/* Breadcrumb section */}
                            <Breadcrumb title={title} />
                            <h2>{pageTitle}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BannerTwo;