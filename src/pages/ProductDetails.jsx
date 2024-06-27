import { useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "../context/cartcontext";
import Navbar from "../components/navbar";
import AddToCartBtn from "../components/addToCartBtn";

const Productdetails = () => {
  const [data, setData] = useState({});
  const [quantity, setQuantity] = useState(0);
  const cart = useContext(cartContext);
  const params = useParams();

  useEffect(() => {
    cart.getProductsData(params.id).then((res) => {
      setData(res.data);
    });
  }, []);
  return (
    <div className="container-fluid bg-light">
      <div
        style={{ direction: "rtl", minHeight: "100vh" }}
        className="container "
      >
        <Navbar />
        <div className="row">
          <div className="col-md-5 text-center">
            <img
              src={data.image}
              className="img-fluid border rounded-3 p-4 bg-white"
            />
          </div>
          <div style={{ direction: "rtl" }} className="col-md-7">
            <div className="row">
              <h2>{data.title}</h2>
            </div>
            <div className="row">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Productdetails;
