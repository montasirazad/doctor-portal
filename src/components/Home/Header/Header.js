import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';
import NavBar from '../NavBar/NavBar';
import './Hearer.css'

const Header = () => {
    return (
        <div className='header-container'>
            <NavBar />
            <HeaderMain />
            <BusinessInfo />
        </div>
    );
};

export default Header;