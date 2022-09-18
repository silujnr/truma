import { useState } from 'react';
import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo.png';
import MainMenu from '../../MainMenus/MainMenu';
import './Header.css';

const HeaderOne = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);

    const handleShowHideMobileMenu = () => {
        setShowMobileMenu(props => !props);
    }

    return (
        <header className="header-02">
            <div className="container">

                <div className="row">
                    
                    <div className="col position-relative p-0">
                        <div className="top-header-bar">
                            <p> <i className="fa fa-clock-o" aria-hidden="true"></i> Registered under the Societies Registration Act XXI of 1860 No. 384/1998.</p>
                            <Link className="header-phone" to="tel:1234567890"><span><i className="fa fa-phone" aria-hidden="true"></i> 1234567890</span></Link>
                        </div>
                        <nav className="navbar navbar-expand-lg">
                        {/* <!-- logo Start--> */}
                        <Link className="navbar-brand" to="/">
                            <img src={logo} alt="" />
                        </Link>
                        {/* <!-- logo End--> */}

                            {/* <!-- Moblie Btn Start --> */}
                            <button onClick={handleShowHideMobileMenu} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown"
                                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            {/* <!-- Moblie Btn End --> */}

                            {/* <!-- Nav Menu Start --> */}
                            <div className={`collapse navbar-collapse ${showMobileMenu ? 'show' : ''}`} id="navbarNavDropdown">
                                <MainMenu />
                            </div>
                            {/* <!-- Nav Menu End --> */}


                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default HeaderOne;