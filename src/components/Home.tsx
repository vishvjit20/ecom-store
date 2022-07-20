import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    (async () => {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
    })();
  }, []);

  useEffect(() => {
    const categorySet: any = new Set();
    products.forEach((product: any) => {
      if (!categorySet.has(product?.category)) {
        categorySet.add(product?.category);
      }
    });

    setCategories(Array.from(categorySet));
  }, [products]);

  const handleFilterCategories = () => {};

  return (
    <div className="home">
      <div className="left-side-bar">
        {categories.map((category) => {
          return (
            <div className="category" onClick={handleFilterCategories}>
              {category}
            </div>
          );
        })}

        <button>CLear Filter</button>
      </div>
      <div className="products">
        {products.map((product: any) => (
          <div className="product">
            <strong>{product.title}</strong>
            <img src={product.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
