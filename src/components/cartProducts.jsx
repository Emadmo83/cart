import CartProduct from "./cartProduct";
import { useContext } from "react";
import { cartContext } from "../context/cartcontext";

const CartProducts = () => {
  const cart = useContext(cartContext);

  return (
    <>
      {cart.items.length ? (
        cart.items.map((item, index) => (
          <CartProduct id={item.id} key={index} />
        ))
      ) : (
        <h3 className="text-center">cart is empty</h3>
      )}
    </>
  );
};

export default CartProducts;
