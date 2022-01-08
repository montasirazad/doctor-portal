import React from 'react';
import doctor from '../../../images/doctor.png'
import doctorSmall from '../../../images/doctor-small.png'
import appointment from '../../../images/appointment-bg.png'
import './Appointment.css'

const Appointment = () => {
    return (
        <div className=' d-flex test'>


            <div >
                <img id='doctor' className='img-fluid' src={doctor} alt="" />
            </div>

            <div className='mt-5 align-items-center'>
                <h5>APPOINTMENT</h5>
                <h4 className='text-white'>Make an appointment <br /> Today</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam consectetur quaerat,<br />
                    aliquid harum autem quos sint blanditiis accusantium vel ut.</p>
                    <button className='btn btn-primary'>Learn More</button>
            </div>

        </div>
    );
};

export default Appointment;