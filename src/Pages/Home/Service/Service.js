import React from 'react';
import { Link } from 'react-router-dom';
const Service = ({service}) => {
    const {name, description, img} = service;
    return (
        <div className='col-md-6 col-lg-4 col-sm-12'>
          <div className="card p-3" >
            <img src={img} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
        </div>
    );
};

export default Service;