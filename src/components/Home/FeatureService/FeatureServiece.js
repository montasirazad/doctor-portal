import React from 'react';
import Treatment from '../../../images/treatment.png'
const FeatureServiece = () => {
    return (
        <section className='d-flex  flex-wrap justify-content-center mt-5 gap-5'>

            <div className='col-md-4 text-center'>
                <img style={{ height: '400px', width: '400px' }} className='img-fluid' src={Treatment} alt="" />
            </div>


            <div className='col-md-4 justify-content-start p-3'>
                <h3>Exceptional Dental Care <br /> On Your Terms</h3>
                <p className='text-secondary'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                     Tempora, corporis dolores voluptatem molestias, voluptate 
                     officiis veritatis dignissimos velit culpa quaerat 
                     repellendus accusamus eos doloribus nemo placeat 
                     debitis dicta optio quam maxime deserunt animi! 
                     Sequi placeat culpa suscipit consequuntur aliquam maiores.</p>
                     <button className='btn btn-danger'>Learn More</button>

            </div>

        </section>
    );
};

export default FeatureServiece;