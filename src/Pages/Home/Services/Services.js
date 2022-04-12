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
        <div>
            <h1>services we offer</h1>
            {
                services.map(service => <Service service={service} key={service.id}/>)
            }
        </div>
    );
};

export default Services;