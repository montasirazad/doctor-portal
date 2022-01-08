import React from 'react';
import './Opinion.css'

const opinion = ({ opinion }) => {
    return (
        <div className='justify-content-center text-secondary opinion'>
            <p>{opinion.opinion}</p>

            <div className='justify-content-start'>
                <img src={opinion.img} alt="" />
                <h6 className='mt-3 ml-3 '>{opinion.name}</h6> 
                
            </div>
            <p>{opinion.location}</p>
            

        </div>
    );
};

export default opinion;