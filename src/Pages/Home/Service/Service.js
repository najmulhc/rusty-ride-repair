import React from 'react';
import './Service.scss'
const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <div className='single-service'>
            <img className='service-image' src={img} alt="" />
            <h3  className='service-title'>{name}</h3>
            <p className='service-description'>{description}</p>
            <button>Hire Us!</button>
        </div>
    );
};

export default Service;