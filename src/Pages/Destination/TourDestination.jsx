import React, { useState , useEffect } from "react";


const TourDestination = () => {
  const [destination, setDestination] = useState([]);
 
  useEffect(() => {
    fetch("https://pure-meadow-98314.herokuapp.com/destination")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  const handleAddToCart=(id)=>{
    console.log(id);
    
  }
 
  return (
    <div>
      <div id="service" className="row serviceSection my-4">
          <h1 className=" text-center">Destination</h1>
        <div className="col-lg-12 col-sm-12 col-12 mx-auto destinationContent">
          {destination.map((service) => (
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
                
                  <button onClick={()=>handleAddToCart(service._id)} className="btn btn-warning">Add To Cart</button>
               
              </div>
            </div>
          ))}
        </div>
        

      </div>
    </div>
  );
};

export default TourDestination;
