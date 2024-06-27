import MyShop from "./pages/myShop";
import { Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/cartcontext";
import Productdetails from "./pages/ProductDetails";
import "./styles/main.css";

function App() {
  return (
    <>
      <CartProvider>
        <Routes>
          <Route path="/:id" element={<Productdetails />} />
          <Route index element={<MyShop />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
