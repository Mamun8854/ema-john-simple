import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Product.css";

const Product = (props) => {
  //   const { name, price, img } = props;
  //   console.log(props);
  const { img, name, price, seller, ratings } = props.product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p>
          <span className="product-name">{name}</span>
        </p>
        <p>price : ${price}</p>
        <p>Seller : {seller}</p>
        <p>Ratings : {ratings} star</p>
      </div>
      <button
        onClick={() => props.handlerAddToCart(props.product)}
        className="btn-cart"
      >
        <p>Add To Cart</p>
        <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
      </button>
    </div>
  );
};

export default Product;
