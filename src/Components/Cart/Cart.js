import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart, clearCart, children } = props;
  //   console.log(cart);

  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (let product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping;
  }
  const tax = (total * 0.1).toFixed(2);
  const totalTax = parseFloat(tax);
  const grandTotal = total + shipping + totalTax;

  // remove all selected product handler
  // const removeAllProductHandler = () => {
  //   localStorage.removeItem("shopping-cart");
  // };
  return (
    <div className="cart">
      <h2>Cart Summery</h2>
      <p>
        Selected Items : <span className="cart-info">{quantity}</span>
      </p>
      <p>
        Total Price : <span className="cart-info">${total}</span>
      </p>
      <p>
        Total Shipping Cost : <span className="cart-info">${shipping}</span>
      </p>
      <p>
        Tax : <span className="cart-info">${totalTax}</span>
      </p>
      <h4>
        Grand Total :<span className="cart-info">${grandTotal}</span>
      </h4>

      <button className="btn-clear-cart" onClick={clearCart}>
        Clear Cart
      </button>
      {children}
    </div>
  );
};

export default Cart;
