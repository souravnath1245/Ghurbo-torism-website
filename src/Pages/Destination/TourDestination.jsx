import React, { useState , useEffect } from "react";
import Cart from "../../Cart/Cart";
import useCart from "../../Hooks/useCart";
import {Link} from "react-router-dom"
import { addToDb } from "../../utilities/fakedb";

const TourDestination = () => {
  const [destination, setDestination] = useState([]);
  const [cart, setCart] = useCart(destination)
  useEffect(() => {
    fetch("https://pure-meadow-98314.herokuapp.com/destination")
      .then((res) => res.json())
      .then((data) => setDestination(data));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cart.find(pd => pd.key === product.key);
    let newCart = [];
    if (exists) {
        const rest = cart.filter(pd => pd.key !== product.key);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, product];
    }
    else {
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);
    // save to local storage (for now)
    addToDb(product.key);

}
  return (
    <div>
      <div id="service" className="row serviceSection my-4">
          <h1 className=" text-center">Destination</h1>
        <div className="col-lg-8 col-10 mx-auto destinationContent">
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
                
                  <button onClick={handleAddToCart} className="btn btn-warning">Add To Cart</button>
               
              </div>
            </div>
          ))}
        </div>
        <div className="col-lg-4 col-10 mx-auto destinationCart">
        <Cart cart={cart}>
                        <Link to="/review">
                            <button className="btn-regular">Review Your Order</button>
                        </Link>
         </Cart>
        </div>

      </div>
    </div>
  );
};

export default TourDestination;
