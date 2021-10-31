import React from "react";

const Adventure = () => {
  return (
    <div id="adventure" className="adventureSection">
        <div className="adventureHeader">
            <h1 className="text-center ">Adventure</h1>
        </div>
      <div className="row ">
        <div className="leftDiv row justify-content-center  align-items-center col-lg-6 col-sm-12">
          <div className="adventureContent text-center ">
            <h1>Dare to Explore</h1>
            <p>
              Exploring means learning. Bring new experiences from each journey.
              Meet different cultures, traditions and landscapes. Choose your
              next destination and start your trip.
            </p>
            <a href="https://wanderers.qodeinteractive.com/tour-search-page/?view_type=standard" alt="More about advanture" target="_blank" className="text-uppercase">
              See More
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-sm-12">
          <div className="adventureImage">
            <img className="img-fluid"
              src="https://wanderers.qodeinteractive.com/wp-content/uploads/2018/02/h1-img-5.jpg?id=170"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;
