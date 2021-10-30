import React, { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import { useHistory } from "react-router";
import useAuth from "../Hooks/useAuth";
import "./login.css";

const Registation = () => {
  const history = useHistory();
  const { users } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

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
      });

    e.preventDefault();
  };
  const backToHome = () => {
    history.replace("/home");
  };
  return (
    <div>
      <div className="package col-lg-5 mx-auto">
        <div className="packageHeader">
          <h1>Book This package</h1>
        </div>
        <div className="packageForm">
          <form onSubmit={handleFormSubmit}>
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
          <p onClick={backToHome} > Back to Home</p>
        </div>
      </div>
    </div>
  );
};

export default Registation;
