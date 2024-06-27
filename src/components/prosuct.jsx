import { useContext } from "react";
import { cartContext } from "../context/cartcontext";
import { Link } from "react-router-dom";
import AddToCartBtn from "./addToCartBtn";

const Product = ({ data }) => {
  const cart = useContext(cartContext);
  const quantity = cart.getProductQuantity(data.id)
  return (
    <div className="col-sm-12 col-md-6 col-lg-4 col-xl-3 g-2">
      <div className="card align-items-center" style={{ width: "100%" }}>
        <Link to={`/${data.id}`}>
          <img
            style={{ width: "250px", height: "300px" }}
            className="card-img-top"
            src={data.image}
            alt="Card image cap"
          />
        </Link>
        <div className="card-body text-center">
          <h4 className="card-title">{data.title}</h4>
          <p>{data.price}$</p>
          <AddToCartBtn id={data.id} quantity={quantity} decrementFromCart={cart.decrementProduct} addToCartFn={cart.addProductToCart} />
          {/* <button
            className="btn btn-primary"
            onClick={() => cart.addProductToCart(data.id)}
          >
            add to cart
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Product;
