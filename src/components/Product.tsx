import { useSelector } from "react-redux";
import "./product.css";

const Product = () => {
  const product = useSelector((state: any) => state?.products?.product);
  return (
    <div className="product">
      <div className="product-left">
        <img src={product?.image} alt={product.title} />
      </div>
      <div className="product-right">
        <h1>{product?.title}</h1>
        <br />
        <br />
        <p>Price : {product?.price}</p>
        <p>{product?.description}</p>
        <h3>Category : {product?.category}</h3>
        <div>
          <p>Rating : {product?.rating?.rate}</p>
          <p>Quantity : </p>
          <button>-</button>
          {1}
          <button>+</button>
        </div>
        <button>Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
