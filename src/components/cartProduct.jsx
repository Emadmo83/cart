import { useContext, useEffect, useState } from "react";
import { cartContext } from "../context/cartcontext";
import LoadingCartProduct from "./loading/loadingCartProduct";

const CartProduct = ({ id }) => {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(0);

  const cart = useContext(cartContext);

  useEffect(() => {
    cart.getProductsData(id).then((res) => {
      setData(res.data);
      cart.setCartIsLoading(false);
    });
  }, [cart.items]);

  return (
    <>
      {cart.cartIsLoading ? (
        <LoadingCartProduct />
      ) : (
        <div style={{ direction: "rtl" }} class="row mb-3">
          <div className="col-3 text-center">
            <img
              className="border"
              style={{
                borderRadius: "10px",
                width: "80%",
                height: "80%",
              }}
              src={data.image}
            />
          </div>
          <div className="col-9 text-end">
            <h4 className="">{data.title}</h4>

            <button
              onClick={() => {
                cart.deleteFromCart(id);
                cart.setCartIsLoading(true);
              }}
              className="btn btn-danger my-2"
            >
              delete
            </button>
            <p style={{ display: "inline", margin: "10px" }}>
              quantity : <big>{cart.getProductQuantity(id)}</big>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default CartProduct;
