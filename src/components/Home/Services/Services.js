import React from 'react';
import Fluoride from '../../../images/fluoride.png'
import Cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride,
    },
    {
        name: 'Cavity Feeling',
        img: Cavity,
    },
    {
        name: 'Teeth Whitening',
        img: Whitening,
    }
]

const Services = () => {
    return (
        <section className='services-container mt-5 '>
            <div className='text-center'>
                <h5 style={{ color: '#1CC7C1' }}>OUR SERVICES</h5>
                <h2>Services We Provide</h2>
            </div>

            <div className='d-flex justify-content-center '>
                <div className='w-75 row'>
                    {
                        serviceData.map(service => <ServiceDetail key={service.img} service={service} ></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;