import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingAllData = [
    {
        id: '1',
        subject: 'Teeth Orthodontics',
        time: '8:00 AM - 9:00 AM',
        space: '10 spaces available'
    }, {
        id: '2',
        subject: 'Cosmetic Dentistry',
        time: '10:05 AM - 11:30 AM',
        space: '10 spaces available'
    }, {
        id: '3',
        subject: 'Teeth Cleaning',
        time: '5:00 PM - 6:30 PM',
        space: '10 spaces available'
    }, {
        id: '4',
        subject: 'Cavity Protection',
        time: '7:00 AM - 8:30AM',
        space: '10 spaces available'
    }, {
        id: '5',
        subject: 'Teeth Orthodontics',
        time: '9:00 AM - 9:30',
        space: '10 spaces available'
    }, {
        id: '6',
        subject: 'Teeth Orthodontics',
        time: '10:00 AM - 12:00 AM',
        space: '10 spaces available'
    }
]

const BookAppointment = ({ date }) => {
    return (
        <section  >
            <h2 className='text-center text-primary'>Available appointment on {date.toDateString()}</h2>

            <div className='row m-3  d-flex justify-content-center' >
                {
                    bookingAllData.map(bookingData => <BookingCard key={bookingData.id} bookingData={bookingData}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;