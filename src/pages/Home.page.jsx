import React from 'react';
import Homebanner from '../components/Sliders/Homebanner/Homebanner';
import Welcome from '../components/Welcome/Welcome';
//import Sponsor from '../components/Sponsor/Sponsor';
//import Sponsorheading from '../components/Sponsor/Sponsorheading/Sponsorheading';
import BlogOne from '../components/Blogs/BlogOne/BlogOne';
import MoveTop from '../components/MoveTop/MoveTop';
import StrategyOne from '../components/Strategies/StrategyOne/StrategyOne';
import ChairmanMessage from '../components/Welcome/ChairmanMessage/ChairmanMessage';


const Home = () => {
    return (
        <>
            <Homebanner />
           <div className="home-top-section">
            <Welcome />
             <StrategyOne />
           </div> 
            <ChairmanMessage />
           <BlogOne />
           {/* <Sponsorheading/> */}
            {/* <Sponsor/> */}
            <MoveTop />
        </>
    );
};

export default Home;