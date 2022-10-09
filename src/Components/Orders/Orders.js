import React, { useState } from "react";
import { useLoaderData, Link } from "react-router-dom";
import { removeFromDb, deleteShoppingCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";

const Orders = () => {
  const { products, initialCart } = useLoaderData(); //{ products, initialCart }
  // console.log(products);
  const [cart, setCart] = useState(initialCart);
  // remove all product from cart
  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    removeFromDb(id);
  };
  return (
    <div className="shop-container">
      <div className="orders-container">
        {cart.map((product) => (
          <ReviewItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          ></ReviewItem>
        ))}
        {cart.length === 0 && (
          <h2>
            No Items For Review <Link to={"/"}>Shop More</Link>{" "}
          </h2>
        )}
      </div>
      <div className="order-summery">
        <Cart clearCart={clearCart} cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Orders;
