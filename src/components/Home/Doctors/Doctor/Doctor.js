import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneSquare } from '@fortawesome/free-solid-svg-icons'
import './doctor.css'



const Doctor = ({ doctor }) => {
    return (
        <div className='col-md-3 doctor-container'>

            <img className='img-fluid' src={doctor.img} alt="" />



            <h6 className='mt-2' >{doctor.name}</h6>
            <div className='d-flex p-2'>
                <FontAwesomeIcon className='text-primary me-1' style={{ fontSize: '2em' }} icon={faPhoneSquare}></FontAwesomeIcon>
                <p>{doctor.phn}</p>

            </div>
        </div>
    );
};

export default Doctor;