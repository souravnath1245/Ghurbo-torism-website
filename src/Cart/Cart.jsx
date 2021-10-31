import React from "react";

const Cart = (props) => {
  const { cart } = props;

  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }

  // const shipping = total > 0 ? 15 : 0;
  // const tax = (total + shipping) * 0.10;
  // const grandTotal = total + shipping + tax;
  return (
    <div>
      <h3>Order Summary</h3>
      <h5>Items Ordered: {totalQuantity}</h5>
      <br />
      <h4 className=" my-4">Sorry, I Could not finish the work due to lack of time.</h4>

      {/* <p>Total: {total.toFixed(2)}</p>
            <p>Shipping: {shipping}</p>
            <p>tax: {tax.toFixed(2)}</p>
            <p>Grand Total: {grandTotal.toFixed(2)}</p>
            {props.children} */}
    </div>
  );
};

export default Cart;