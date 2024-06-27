import { Modal, Button } from "react-bootstrap";
import { useState , useContext } from "react";
import CartProducts from "./cartProducts";
import { NavLink, useParams } from "react-router-dom";
import { cartContext } from "../context/cartcontext";

const Navbar = () => {
  const [modalShow, setModalShow] = useState(false);

  const cart = useContext(cartContext)

  const params = useParams();

  return (
    <>
      <div
        style={{ direction: "rtl" }}
        className="d-flex justify-content-between border-secondary border-bottom mb-3"
      >
        <button
          className="btn border border-secondary my-2"
          onClick={() => setModalShow(true)}
        >
          <i class="fa-solid fa-cart-shopping"></i> <big>cart</big>
        </button>
        {params.id ? (
          <NavLink to="/" className="text-dark nav-link my-auto">
            <big>home</big> <i class="fa-solid fa-backward"></i>
          </NavLink>
        ) : (
          ""
        )}
        <Modal size="lg" show={modalShow} onHide={() => setModalShow(false)}>
          <Modal.Header className="justify-content-center">
            <Modal.Title>cart</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <CartProducts />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {setModalShow(false)
              cart.setCartIsLoading(true)
            }}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
