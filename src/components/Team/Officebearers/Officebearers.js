import React from 'react'
import { Link } from 'react-router-dom';
import '../team.css';
import f1 from '../../Team/Officebearers/images/1-President-Pradip-Kumar.jpg';
import f2 from '../../Team/Officebearers/images/2-Dr-lokeshan-Nair-crop.jpg';
import f3 from '../../Team/Officebearers/images/3-K-Rajagopal.jpg';
import f4 from '../../Team/Officebearers/images/4-K-T-RAJEEV.jpg';
import f5 from '../../Team/Officebearers/images/5-Dr-Alphonsa-Mathew.jpg';
import f6 from '../../Team/Officebearers/images/6-Sreesh-Kumar-M-C.jpg';
import f7 from '../../Team/Officebearers/images/7-HEMAPALAN-P.jpg';
import f8 from '../../Team/Officebearers/images/8-Ar-A-K-Prasanth-crop.jpg';
import f9 from '../../Team/Officebearers/images/9-Dr-K-G-Alexander.jpg';
import f10 from '../../Team/Officebearers/images/10-Dr-Prabhavathi-K-S.jpg';
import f11 from '../../Team/Officebearers/images/11-P-K-Krishnanunni-Raja.jpg';
import f12 from '../../Team/Officebearers/images/12-K-P-Chandran.jpg';
import f13 from '../../Team/Officebearers/images/13-balakrishna eradi-crop.jpg';
import f14 from '../../Team/Officebearers/images/14-Gopiraj-C.jpg';
import f15 from '../../Team/Officebearers/images/15-Arun-Gopal-Menon.jpg';
import f16 from '../../Team/Officebearers/images/16-VIJAYAN-P-M.jpg';

const Officebearer = [
    {
        id: 1,
        name: 'Adv. PRADIP KUMAR C. M. (Commandant (Retd.))',
        designation: 'President',
        phone:'9446683335',
        image: f1,
        link: '/'
    },
    {
        id: 2,
        name: 'Dr. K. LOKESHAN NAIR',
        designation: 'Vice President',
        phone:'9539046750',
        image: f2,
        link: '/'
    },
    {
        id: 3,
        name: 'Ln. K. RAJAGOPALAN',
        designation: 'Secretary',
        phone:'9447121321',
        image: f3,
        link: '/'
    },{
        id: 4,
        name: 'Ln. K. T. RAJIV',
        designation: 'Joint Secretaries',
        phone:'',
        image: f4,
        link: '/'
    },{
        id: 5,
        name: 'Dr. ALPHONSA MATHEW',
        designation: 'Joint Secretaries',
        phone:'',
        image: f5,
        link: '/'
    }
    ,{
        id: 6,
        name: 'SREESH KUMAR M. C.',
        designation: 'Treasurer',
        phone:'9447311310',
        image: f6,
        link: '/'
    },{
        id: 7,
        name: 'HEMAPALAN P',
        designation: 'Executive Members',
        phone:'',
        image: f7,
        link: '/'
    }
    ,{
        id: 8,
        name: 'Ar. A. K. PRASANTH',
        designation: 'Executive Members',
        phone:'',
        image: f8,
        link: '/'
    }
    ,{
        id: 9,
        name: 'Dr. K. G. ALEXANDER',
        designation: 'Executive Members',
        phone:'',
        image: f9,
        link: '/'
    }
    ,{
        id: 10,
        name: 'Dr. PRABHAVATHI K S',
        designation: 'Executive Members',
        phone:'',
        image: f10,
        link: '/'
    }
    ,{
        id: 11,
        name: 'P. K. KRISHNANUNNI RAJA',
        designation: 'Executive Members',
        phone:'',
        image: f11,
        link: '/'
    }
    ,{
        id: 12,
        name: ' K. P. CHANDRAN',
        designation: 'Executive Members',
        phone:'',
        image: f12,
        link: '/'
    }
    ,{
        id: 13,
        name: 'BALAKRISHNA ERADY T. M.',
        designation: 'Executive Members',
        phone:'',
        image: f13,
        link: '/'
    }
    ,{
        id:14,
        name: 'GOPIRAJ C',
        designation: 'Executive Members',
        phone:'',
        image: f14,
        link: '/'
    }
    ,{
        id: 15,
        name: 'ARUN GOPAL MENON',
        designation: 'Executive Members',
        phone:'',
        image: f15,
        link: '/'
    },{
        id: 16,
        name: 'VIJAYAN P. M. . (Sub Inspector of Police (Retd))',
        designation: 'Administrative Officer',
        phone:' 9495611573',
        image: f16,
        link: '/'
    }
];

const Officebearers = () => {
    return (
        <section className="team-section">
            <div className="container">
            <h4>CURRENT Office Bearer</h4>
                <div className="row">
                    {
                        Officebearer?.map(Officebearer => {
                            return (
                                <div key={Officebearer?.id} className="col-lg-3 col-md-3">
                                    <div className="team-member">
                                        <img src={Officebearer?.image} alt="" />
                                        <div className="team-detail">
                                            <p className="designation">{Officebearer?.designation}</p>
                                            <h4><Link to={Officebearer?.link}>{Officebearer?.name}</Link></h4>
                                        </div>
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

export default Officebearers;