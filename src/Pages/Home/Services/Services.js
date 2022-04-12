import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.scss'
const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('Services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    }, []);
    return (
        <div className='services'>
            <h1 className='service-title'>services we offer</h1>
            <div className="service-container">
                {
                    services.map(service => <Service service={service} key={service.id}/>)
                }
            </div>
        </div>
    );
};

export default Services;