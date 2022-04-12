import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';
import './Exparts.scss'
const Exparts = () => {
    const [experts, setExperts] = useState([]);
    useEffect( () => {
        fetch('https://api.jsonbin.io/b/625564d0d8a4cc06909f9723')
        .then(res => res.json())
        .then(data => setExperts(data))
    },[]);
    console.log(experts);
    return (
        <div>
             <h1 className='text-center fw-1'>Our expert</h1>
             <div className="row">
                 {
                     experts.map(expert => <Expert expert={expert} />)
                 }
             </div>
        </div>
    );
};

export default Exparts;