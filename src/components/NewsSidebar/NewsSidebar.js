import React from 'react';
import Videolink from '../Videolink/Videolink';
import Membershipbox from '../../components/Welcome/Membershipbox/Membershipbox';
import TrendingPost from '../TrendingPost/TrendingPost';


const NewsSidebar = () => {
    return (
        <div className="col-lg-4 col-md-12">
            <div className="news-sidebar">
                <TrendingPost />
                <Videolink />
                <Membershipbox />
            </div>
        </div>
    );
};

export default NewsSidebar;