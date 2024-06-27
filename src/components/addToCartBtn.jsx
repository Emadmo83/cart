const AddToCartBtn = ({ quantity, addToCartFn, id, decrementFromCart }) => {
  return (
    <>
      {quantity ? (
        <>
          <button
            onClick={() => {
              addToCartFn(id);
            }}
            className="btn btn-primary"
          >
            +
          </button>{" "}
          <span className="mx-2">{quantity}</span>{" "}
          <button
            onClick={() => {
              decrementFromCart(id);
            }}
            className="btn btn-danger"
          >
            -
          </button>
        </>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => {
            addToCartFn(id);
          }}
        >
          add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
