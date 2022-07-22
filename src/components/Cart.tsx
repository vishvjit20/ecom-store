import "./cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = JSON.parse(localStorage.getItem("cart")!);
  return (
    <>
      {!cartItems.length ? (
        <h1>Cart is Empty</h1>
      ) : (
        <div className="cart">
          {cartItems?.map((cartItem: any) => (
            <div className="item" key={cartItem?.id}>
              <img src={cartItem.image} alt="" />
              <p>
                Total : {cartItem.quantity} X {cartItem.price} ={" "}
                {cartItem.total}
              </p>
              <p>{cartItem.category}</p>
              <Link to={`/product/${cartItem?.id}/order`}>Checkout </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Cart;
