import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import "./Destination.css";


const Destination = () => {
  const [location, setLocation] = useState({});
  
  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pure-meadow-98314.herokuapp.com/destination/${id}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

 
  return (
    <div className="tourDetailsSection">
      <div className="tourDetailsHeader">
        <h1 className="text-center"> Tour Package Details</h1>
      </div>
      <div className="container  mx-auto row justify-content-center align-items-center">
        <div className="tourDetails col-lg-12 col-sm-12">
          <div className="image">
            <img src={location.image} alt="" />
          </div>
          <div className="tourDetailsContent">
            <h2 className="mb-3">
              {location.place}, {location.country}
            </h2>
            <h4>Overview</h4>
            <p>{location.description}</p>
          </div>
          <Link to="/register">
            <strong> Please Register </strong>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Destination;
