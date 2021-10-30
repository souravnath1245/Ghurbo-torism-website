import React, { useRef } from "react";
import "./add.css";

const AddNewService = () => {
  const countryRef = useRef();
  const placeRef = useRef();
  const descriptionRef = useRef();
  const imageRef = useRef();
  const handleSubmit = (e) => {
    const country = countryRef.current.value;
    const place = placeRef.current.value;
    const description = descriptionRef.current.value;
    const image = imageRef.current.value;
    const newUser = { country, place, description, image };

    fetch("https://pure-meadow-98314.herokuapp.com/destination", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newUser),
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
    <div className="container formSection">
      <div className="addFormSection mx-auto">
        <h1 className="text-center">Add Destination</h1>
        <div className="destinationSection mx-auto">
          <form onSubmit={handleSubmit} className="row justify-content-center ">
            <div className="col-lg-5">
              <label htmlFor="name">Country Name</label> <br />
              <input ref={countryRef} type="text" name="" id="" />
              <br />
              <label htmlFor="name">Description</label>
              <br />
              <textarea ref={descriptionRef} name="" id=""></textarea>
              <br />
            </div>
            <div className="col-lg-5">
              <label htmlFor="name">Place Name</label> <br />
              <input ref={placeRef} type="text" name="" id="" />
              <br />
              <label htmlFor="name">Image Url</label>
              <br />
              <input ref={imageRef} type="text" name="" id="" />
              <br />
            </div>
            <input className="submit" type="submit" value="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddNewService;
