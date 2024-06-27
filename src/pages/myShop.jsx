import Products from "../components/prosucts";
import Navbar from "../components/navbar";
import { useContext } from "react";
import { cartContext } from "../context/cartcontext";
const MyShop = () => {
  const cart = useContext(cartContext)
  return (
    <>
      <div className='bg-light container-fluid'>
        <div className="container">
          <Navbar />
          <Products />
        </div>
      </div>
    </>
  );
};

export default MyShop;
