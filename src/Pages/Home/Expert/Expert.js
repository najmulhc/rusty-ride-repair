import React from "react";
import { Link } from "react-router-dom";
const Expert = ({ expert }) => {
  const { name, img, description, position } = expert;
  return (
    <div className="col-md-4 col-lg-3 col-sm-6">
      <div className="card p-3">
        <img src={img} className="card-img-top img-fluid" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h4 className="fw-light">{position}</h4>
          <p className="card-text">{description}</p>
          <Link to="/" className="btn btn-success">
            Hire me!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Expert;
