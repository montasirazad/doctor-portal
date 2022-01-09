import React from 'react';
import chair from '../../../images/chair.png';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const AppointmentHeader = ({handleDateChange}) => {

    

    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center'>

            <div className="col-4 offset-md-1">
                <h1 className='text-primary'>Appointment</h1>
                <div>
                    <Calendar
                        onChange={handleDateChange}
                        value={new Date()}
                    />
                </div>

            </div>

            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default AppointmentHeader;