import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'
import BlogInfo from '../BlogInfo/BlogInfo';
const blogInfos = [{
    name: 'Winston Harry',
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
const Blog = () => {
    return (
        <div>
            <div className='text-center'>
                <h3 className='text-primary'>OUR BLOG</h3> <br />
                <h1>From Our Blog</h1>
            </div>

           

            <div className='d-flex flex-wrap flex-row justify-content-around p-5'>
            {
                blogInfos.map( blogInfo => <BlogInfo key={blogInfo.img} blogInfo={blogInfo}></BlogInfo>)
            }
            </div>
        </div>
    );
};

export default Blog;