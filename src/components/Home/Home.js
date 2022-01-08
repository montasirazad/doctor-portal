import React from 'react';
import Contact from '../Contact/Contact';
import Appointment from './Appointment/Appointment';
import Blog from './Blog/Blog';
import Doctors from './Doctors/Doctors';
import FeatureService from './FeatureService/FeatureService';
import Footer from './Footer/Footer';
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
            <Doctors />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;