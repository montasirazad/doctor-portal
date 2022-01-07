import React from 'react';
import chair from '../../../images/chair.png'

const HeaderMain = () => {
    return (
        <main style={{ height: '600px' }} className='row d-flex align-items-center'>

            <div className="col-4 offset-md-1">
                <h1>Your new smile <br /> starts here</h1>
                <p className='text-primary'>Lorem ipsum dolor sit amet consectetur,
                    adipisicing elit. Cumque totam tenetur accusantium ipsa rem repellat!</p>
                <button className='btn btn-primary'>GET APPOINTMENT</button>
            </div>

            <div className="col-md-6">
                <img src={chair} alt="" className="img-fluid" />
            </div>
        </main>
    );
};

export default HeaderMain;