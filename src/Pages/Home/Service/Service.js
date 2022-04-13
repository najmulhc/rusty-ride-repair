import React from 'react';
import { useNavigate } from 'react-router';
const Service = ({service}) => {
    const {name, description, img} = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = id => {
      //setting dynamic url for specific service
      navigate('/service/'+id);
    } 
    return (
        <div className='col-md-6 col-lg-4 col-sm-12'>
          <div className="card p-3" >
            <img src={img} className="card-img-top img-fluid" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <button className='btn btn-success' onClick={() => navigateToServiceDetail(service.id)}  >Details</button>
            </div>
          </div>
        </div>
    );
};

export default Service;