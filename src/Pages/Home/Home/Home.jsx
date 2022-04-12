import React from 'react';
import Exparts from '../Experts/Exparts';
import Services from '../Services/Services';
import './Home.scss'
const Home = () => {
    return (
        <div>
            <p>welcome to our page</p>
            <Services/>
            <Exparts/>
        </div>
    );
};

export default Home;