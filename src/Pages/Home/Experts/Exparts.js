import React, { useEffect, useState } from "react";
import Expert from "../Expert/Expert";
import "./Exparts.scss";
const Exparts = () => {
  const [experts, setExperts] = useState([]);
  useEffect(() => {
    fetch("https://api.jsonbin.io/b/625564d0d8a4cc06909f9723")
      .then((res) => res.json())
      .then((data) => setExperts(data));
  }, []);
  return (
    <div className="container" id="experts">
      <h1 className="text-center  text-success">Our Experts</h1>
      <div className="row g-3">
        {experts.map((expert) => (
          <Expert expert={expert} key={expert.id}/>
        ))}
      </div>
    </div>
  );
};

export default Exparts;
