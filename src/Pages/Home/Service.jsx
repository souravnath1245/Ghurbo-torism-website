import React, { useEffect, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://pure-meadow-98314.herokuapp.com/destination")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="service" className="serviceSection my-4">
      <h3 className="serviceHeader my-4 text-center"> Service</h3>
      <div className="serviceContent">
        {services.slice(0, 6).map((service) => (
          <div className="content py-3" key={service._id}>
            <div className="image text-center">
              <img src={service.image} alt="" />
            </div>
            <h3 className="serviceTitle mx-auto">
              {service.place}, {service.country}
            </h3>
            <p className="servicePara mx-auto ">
              {service.description.slice(0, 200)}
            </p>
            <div className="button ms-lg-4">
              <Link to={`destination/${service._id}`}>
                <button className=" btn btn-warning ">Add to Cart</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
