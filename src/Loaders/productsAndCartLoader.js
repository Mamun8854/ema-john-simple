import { storedCartDb } from "../utilities/fakedb";

export const productsAndCartLoader = async () => {
  // Get Products
  const productsData = await fetch("products.json");
  const products = await productsData.json();

  //   Get saved Data
  const savedData = storedCartDb();
  const previousCart = [];
  for (const id in savedData) {
    const addedProducts = products.find((product) => product.id === id);

    const quantity = savedData[id];
    addedProducts.quantity = quantity;
    previousCart.push(addedProducts);
    // console.log(id, quantity);
  }

  return { products, previousCart };
};
