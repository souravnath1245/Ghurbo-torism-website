import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import "./Destination.css";
import DatePicker from "react-datepicker";

const Destination = () => {
  const [location, setLocation] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:4000/destination/${id}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleFormSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const date = startDate;

    const user = { name, email, phone ,date};
    console.log(user);

    fetch("http://localhost:4000/destination/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Successfully added");
          //    e.target.reset();
        }
      });

    e.preventDefault();
  };
  return (
    <div className="tourDetailsSection">
      <div className="tourDetailsHeader">
        <h1 className="text-center"> Tour Package Details</h1>
      </div>
      <div className="container  mx-auto row justify-content-center align-items-center">
        <div className="tourDetails col-lg-8">
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
        </div>
        <div className="package col-lg-4">
          <div className="packageHeader">
            <h1>Book This package</h1>
          </div>
          <div className="packageForm">
            <form onSubmit={handleFormSubmit}>
              <input ref={nameRef} type="text" placeholder="Your Name" />
              <br />
              <input ref={emailRef} type="email" placeholder="Your Email" />
              <br />

              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart // tells this DatePicker that it is part of a range*
                startDate={startDate}
              />
              <input ref={phoneRef} type="number" placeholder="Phone" />
              <br />
              <input type="submit" value="submit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
