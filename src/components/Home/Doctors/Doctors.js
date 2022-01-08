import React from 'react';
import doctor from '../../../images/doctor-small.png'
import Doctor from './Doctor/Doctor';

const doctors = [
    {
        name: 'Dr. Peter',
        img: doctor,
        phn: '013365566544',
        id: '1'
    }, {
        name: 'Dr. Peter',
        img: doctor,
        phn: '013365566544',
        id: '2'
    }, {
        name: 'Dr. Peter',
        img: doctor,
        phn: '013365566544',
        id: '3'
    }
]

const Doctors = () => {
    return (
        <div>
            <div>
                <h1 className='text-success text-center'>Our Doctors</h1>
            </div>

            <div className='d-flex mt-5 justify-content-center flex-wrap'>
                {doctors.map(doctor => <Doctor key={doctor.id} doctor={doctor}></Doctor>)}
            </div>
        </div>
    );
};

export default Doctors;