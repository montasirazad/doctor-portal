import React from 'react';
import FeatureServiece from './FeatureService/FeatureServiece';
import Header from './Header/Header';
import Services from './Services/Services';

const Home = () => {
    return (
        <div>
            <Header />
            <Services />
            <FeatureServiece/>
        </div>
    );
};

export default Home;