import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const businessInfo = [
    {
        title: 'Opening Hour',
        description: 'We are open 7days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit our Location',
        description: 'Brooklyn,NY-1003',
        icon: faMapMarker,
        background: 'dark'
    }, {
        title: 'Call us now',
        description: '+0134554546466',
        icon: faPhone,
        background: 'primary'
    }
]

const BusinessInfo = () => {
    return (
        <section className='d-flex justify-content-center '>
            <div className='w-75 row'>
                {
                    businessInfo.map(info => <InfoCard info={info}></InfoCard>)
                }
            </div>
        </section>
    );
};

export default BusinessInfo;