import React from 'react';

const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <div>
            <img src={img} alt="" />
            <h3>Service Name: {name}</h3>
            <p>{description}</p>

        </div>
    );
};

export default Service;