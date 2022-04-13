import React from 'react';
import { useParams } from 'react-router';

const ServiceDetail = () => {
    // the params will we get from the navigateToServiceDetail function in service.js that will allow us to get the id we set on app.js route
    const {serviceId} = useParams();
    return (
        <div>
            <h2>Welcome to service detail page {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;