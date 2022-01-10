import React from 'react';
import './BookingCard.css'
const BookingCard = ({ bookingData }) => {
    return (
        <div className="card  border-warning p-5 text-center mt-5 col-md-4 d-flex justify-content-center booking-card" >

            <h5 className="card-title">{bookingData.subject}</h5>
            <p className="card-text">{bookingData.time}</p>
            <p>{bookingData.space}</p>
            <button className='btn btn-outline-primary'>BOOK APPOINTMENT</button>
        </div>

    );
};

export default BookingCard;