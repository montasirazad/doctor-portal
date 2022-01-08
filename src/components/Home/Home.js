import React from 'react';
import Appointment from './Appointment/Appointment';
import FeatureService from './FeatureService/FeatureService';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
            <Appointment />
        </div>
    );
};

export default Home;