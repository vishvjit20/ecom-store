import { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import "./product.css";

const Product = () => {
  const product = useSelector((state: any) => state?.products?.product);
  const [quantity, setQuantity] = useState<number>(1);
  const MAX_QUANTITY = 50;
  const history = useHistory();
  const increaseQuantity = () => {
    if (quantity < MAX_QUANTITY) setQuantity(quantity + 1);
  };
  const reduceQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };
  const addToCart = () => {
    const cartItem = JSON.parse(localStorage.getItem("cart")!);
    const currentCartValue = cartItem?.filter(
      (item: any) => item.id === product?.id
    );

    const remainingCartItems =
      cartItem?.filter((item: any) => item?.id !== product?.id) || [];
    // debugger;
    if (currentCartValue?.length > 0) {
      let newQuantity: number = quantity + currentCartValue[0]?.quantity;
      let cartObj = {
        id: product?.id,
        quantity: newQuantity,
        category: product?.category,
        price: product?.price,
        total: newQuantity * product?.price,
        image: product?.image,
      };
      localStorage.setItem(
        "cart",
        JSON.stringify([...remainingCartItems, cartObj])
      );
      setTimeout(() => {
        history.push("/product/add-to-cart");
      }, 1000);
    } else {
      const newQuantity = quantity ? quantity : 1;
      let cartObj = {
        id: product?.id,
        quantity: newQuantity,
        category: product?.category,
        price: product?.price,
        total: newQuantity * product?.price,
        image: product?.image,
      };
      localStorage.setItem(
        "cart",
        JSON.stringify([...remainingCartItems, cartObj])
      );
    }
  };
  return (
    <div className="product">
      <div className="product-left">
        <img src={product?.image} alt={product.title} />
      </div>
      <div className="product-right">
        <h1>{product?.title}</h1>
        <h3>Category : {product?.category}</h3>
        <h4>Description : </h4>
        <p>{product?.description}</p>
        <div>
          <b>Price : </b> {product?.price}
        </div>
        <div>
          <b>Rating : </b> {product?.rating?.rate}
        </div>
        <div>
          <p>Quantity : </p>
          <div className="add-qty">
            <button onClick={reduceQuantity}>-</button>
            {`  ${quantity}  `}
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
        <div>
          <button className="add-to-cart-btn" onClick={addToCart}>
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
