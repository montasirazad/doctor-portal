import React from 'react';
import Appointment from './Appointment/Appointment';
import Blog from './Blog/Blog';
import FeatureService from './FeatureService/FeatureService';
import Header from './Header/Header';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
            <Appointment />
            <Testimonial />
            <Blog />
        </div>
    );
};

export default Home;