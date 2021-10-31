import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router";
import DatePicker from "react-datepicker";
import { useHistory, useLocation } from "react-router";


import "./Destination.css";
import useAuth from "../../Hooks/useAuth";

const Destination = () => {
  const [location, setLocation] = useState({});
  const history = useHistory();
  const location2 = useLocation();
  const redirect_uri = location2.state?.from || "/home";

  const { users } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const { id } = useParams();

  useEffect(() => {
    fetch(`https://pure-meadow-98314.herokuapp.com/destination/${id}`)
      .then((res) => res.json())
      .then((data) => setLocation(data));
  }, []);

  const handleFormSubmit = (e) => {
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const date = startDate;

    const user = { name, email, phone, date };
    // console.log(user);

    fetch("https://pure-meadow-98314.herokuapp.com/destination/users", {
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
      })
      .then((result) => {
        history.push(redirect_uri);
      });

    e.preventDefault();
  };
  const backToHome = () => {
    history.replace("/home");
  };

  return (
    <div className="tourDetailsSection">
      <h1>id</h1>
      <div className="tourDetailsHeader">
        <h1 className="text-center"> Tour Package Details</h1>
      </div>
      <div className="container  mx-auto row justify-content-center align-items-center">
        <div className="tourDetails col-lg-7 col-sm-12">
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
        <div className="package col-lg-5 col-sm-10 mx-auto ">
          <div className="packageHeader">
            <h1>Book This package</h1>
          </div>
          <div className="packageForm">
            <form onSubmit={() => handleFormSubmit(location._id)}>
              <input ref={nameRef} type="text" value={users.displayName} />
              <br />
              <input ref={emailRef} type="email" value={users.email} />
              <br />

              <DatePicker
                className="datePicker"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                selectsStart // tells this DatePicker that it is part of a range*
                startDate={startDate}
              />
              <input ref={phoneRef} type="number" placeholder="Phone" />
              <br />
              <input
                className="formSubmit btn btn-warning"
                type="submit"
                value="submit"
              />
            </form>
            <p onClick={backToHome}> Back to Home</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
