import Product from "./prosuct";
import { useState, useEffect, useContext } from "react";
import { cartContext } from "../context/cartcontext";
import LoadingProducts from "./loading/loadingProducts";

const Products = () => {
  const cart = useContext(cartContext);
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    const response = cart.getProductsData();
    response.then((res) => {
      setProducts(res.data);
      setIsLoaded(true);
    });
  }, []);
  
  return (
    <>
      <div className="row">
        {isLoaded ? (
          products.map((product, index) => (
            <Product key={index} data={product} />
          ))
        ) : (
          <LoadingProducts />
        )}
      </div>
    </>
  );
};

export default Products;
