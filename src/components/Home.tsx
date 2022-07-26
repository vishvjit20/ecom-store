import "./home.css";
import { useHistory } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProduct } from "../actions/productAction";
import Navigation from "../pages/Navigation";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const history = useHistory();
  const dispatch = useDispatch();
  const productsData = useSelector((state: any) => state?.products);

  useEffect(() => {
    dispatch(getAllProducts());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setProducts(productsData.products);
    setFilterProducts(productsData.products);
    const categorySet: any = new Set();
    productsData?.products?.forEach((product: any) => {
      if (!categorySet.has(product?.category)) {
        categorySet.add(product?.category);
      }
    });

    setCategories(Array.from(categorySet));
  }, [productsData]);

  const handleFilterCategories = (category: any) => {
    let filteredProducts: any = products?.filter(
      (product: any) => product.category === category
    );
    setFilterProducts(filteredProducts);
  };

  return (
    <>
      <Navigation />
      <div className="home">
        <div className="left-side-bar">
          <h4>Categories</h4>
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
            className="filter"
            onClick={() => {
              setFilterProducts(products);
            }}
          >
            Clear Filter
          </button>
        </div>
        <div className="products">
          {filterProducts?.map((product: any, key: number) => (
            <div className="product-box" key={key}>
              <div className="product-heading">{product.title}</div>
              <div className="product-img">
                <img
                  src={product.image}
                  alt=""
                  onClick={() => {
                    dispatch(getProduct(product));
                    history.push(`/product/${product.id}`);
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
