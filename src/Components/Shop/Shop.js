import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, storedCartDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const products = useLoaderData();
  // const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   // console.log("fetch first line");
  //   fetch("products.json")
  //     .then((res) => res.json())
  //     .then((data) => setProducts(data));
  // }, []);
  useEffect(() => {
    const previousAddedProduct = [];
    const storedDb = storedCartDb();
    for (const id in storedDb) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedDb[id];
        addedProduct.quantity = quantity;
        previousAddedProduct.push(addedProduct);
      }
    }
    setCart(previousAddedProduct);
  }, [products]);

  const handlerAddToCart = (selectedProduct) => {
    // console.log(selectedProduct);
    let newCart = [];

    let existsProduct = cart.find(
      (product) => product.id === selectedProduct.id
    );
    if (!existsProduct) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      let restProduct = cart.filter(
        (product) => product.id !== selectedProduct.id
      );
      existsProduct.quantity = existsProduct.quantity + 1;
      newCart = [...restProduct, existsProduct];
    }

    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            id={product.id}
            key={product.id}
            handlerAddToCart={handlerAddToCart}
            product={product}
          ></Product>
        ))}
      </div>
      <div className="order-summery">
        <Cart cart={cart}></Cart>
      </div>
    </div>
  );
};

export default Shop;
