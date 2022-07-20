import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  useEffect(() => {
    (async () => {
      let { data } = await axios.get("https://fakestoreapi.com/products");
      setProducts(data);
      setFilterProducts(data);
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

  const handleFilterCategories = (category: any) => {
    let filteredProducts: any = products.filter(
      (product: any) => product.category === category
    );
    setFilterProducts(filteredProducts);
  };

  console.log(filterProducts);

  return (
    <div className="home">
      <div className="left-side-bar">
        {categories.map((category) => {
          return (
            <div
              className="category"
              onClick={() => handleFilterCategories(category)}
            >
              {category}
            </div>
          );
        })}

        <button
          onClick={() => {
            setFilterProducts(products);
          }}
        >
          CLear Filter
        </button>
      </div>
      <div className="products">
        {filterProducts.map((product: any, key: number) => (
          <div className="product" key={key}>
            <strong>{product.title}</strong>
            <img src={product.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
