import React from 'react'
import BannerTwo from '../components/Banners/BannerTwo/BannerTwo';

import ProgramContent from '../components/Programs/ProgramContent/ProgramsContent';
import TrainingPrograms from '../components/Programs/TrainingPrograms/TrainingPrograms'
import ProgramDisaster from '../components/Programs/ProgramDisaster/ProgramDisaster'

const Programs = () => {
    return (
        <>
            {/* Page Banner section  */}
            <BannerTwo pageTitle="Programs" title="Programs" bgimg={require('../assets/images/PROGRAMS.jpg')}/>
            <div className="container">
                <div className="row pt-5 pb-5">
                    <TrainingPrograms/>
                    <ProgramContent />
                    <ProgramDisaster/>
                </div>
            </div>
        </>
    );
};

export default Programs;