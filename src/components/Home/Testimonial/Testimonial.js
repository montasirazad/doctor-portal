import React from 'react';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import Opinion from '../Opinion/Opinion';

const testimonialDetail = [{
    name: 'Winston Herry',
    location: 'california',
    img: people1,
    opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestias, modi ab ipsa aspernatur itaque.'
},
{
    name: 'Lucy clara',
    location: 'california',
    img: people2,
    opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestias, modi ab ipsa aspernatur itaque.'
},
{
    name: 'Ema watson',
    location: 'california',
    img: people3,
    opinion: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo molestias, modi ab ipsa aspernatur itaque.'
}

]

const Testimonial = () => {
    return (
        <div >
            <div className="m-5">
                <h5>TESTIMONIAL</h5> <br />
                <h2>What's Our Patients <br /> Says</h2>
            </div>

            <div className="d-flex flex-row flex-wrap justify-content-around ">
                 
                {
                     testimonialDetail.map(opinion => <Opinion key={opinion.img} opinion={opinion}></Opinion> )
                }
            </div>

        </div>
    );
};

export default Testimonial;