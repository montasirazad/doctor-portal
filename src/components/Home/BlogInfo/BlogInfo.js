import React from 'react';
import './BlogInfo.css'

const BlogInfo = ({blogInfo}) => {
    return (
         
            <div className='d-flex flex-wrap flex-row justify-content-center text-secondary blogInfo'>
            <div>
            <p>{blogInfo.opinion}</p>
            </div>

            <div className='d-flex flex-column'>
                <img src={blogInfo.img} alt="" />
                <h6 className='ml-3 '>{blogInfo.name}</h6> 
                <p>{blogInfo.location}</p>
            </div> 
            
            

        </div>
         
    );
};

export default BlogInfo;