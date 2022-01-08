import React from 'react';

const Contact = () => {
    return (
        <form className='border border-primary mt-4 p-5 text-center' style={{ width: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
           
            <div className="mb-3 mt-5">

                <input type="email" className="form-control" placeholder='Email Address' />

            </div>

            <div className="mb-3">

                <input type="text" className="form-control" placeholder='Subject' />

            </div>

            <div>
                <input style={{ width: '800px', height: '200px' }} type="text" className="form-control" placeholder='Your Message' />
            </div> <br />
            
            <button type="submit" className="btn btn-primary">Submit</button>
            
        </form>
        
    );
};

export default Contact;