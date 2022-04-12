import React from 'react';
import Exparts from '../Experts/Exparts';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import './Home.scss'
const Home = () => {
    return (
        <div>
            <Banner/>
            <Services/>
            <Exparts/>
        </div>
    );
};

export default Home;