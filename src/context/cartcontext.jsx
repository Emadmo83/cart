import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const cartContext = createContext({});

export function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [cartIsLoading, setCartIsLoading] = useState(true);


  /////////////////funtions/////////////////
  async function getProductsData(id = "") {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    return response;
  }

  function getProductQuantity(id) {
    const quantity = cartProducts.find((item) => item.id === id)?.quantity;

    if (quantity === undefined) {
      return 0;
    } else {
      return quantity;
    }
  }

  function addProductToCart(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 0) {
      setCartProducts([...cartProducts, { id: id, quantity: 1 }]);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    }
  }

  function deleteFromCart(id) {
    console.log(id);
    setCartProducts((cartProducts) =>
      cartProducts.filter((item) => {
        return item.id != id;
      })
    );
  }

  function decrementProduct(id) {
    const quantity = getProductQuantity(id);

    if (quantity === 1) {
      deleteFromCart(id);
    } else {
      setCartProducts(
        cartProducts.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
      );
    }
  }

  /////////////////end of functions//////////////////

  const contextValue = {
    cartIsLoading,
    setCartIsLoading,
    items: cartProducts,
    getProductsData,
    getProductQuantity,
    addProductToCart,
    deleteFromCart,
    decrementProduct,
  };
  return (
    <cartContext.Provider value={contextValue}>{children}</cartContext.Provider>
  );
}
