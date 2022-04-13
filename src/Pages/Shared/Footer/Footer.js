import React from 'react';
import './Footer.scss';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div>
            <p className='text-center my-2'>©Copyright Rusty Ride Repair {year}. All rights reserved </p>
        </div>
    );
};

export default Footer;