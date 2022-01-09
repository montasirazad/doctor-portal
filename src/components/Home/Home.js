import React from 'react';
import Contact from '../Contact/Contact';
import Blog from './Blog/Blog';
import Doctors from './Doctors/Doctors';
import FeatureService from './FeatureService/FeatureService';
import Footer from '../Shared/Footer/Footer';
import Header from './Header/Header';
import Schedule from './Schedule/Schedule';
import Services from './Services/Services';
import Testimonial from './Testimonial/Testimonial';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureService />
            <Schedule />
            <Testimonial />
            <Blog />
            <Doctors />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;