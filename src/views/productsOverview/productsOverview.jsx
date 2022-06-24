import React, { useEffect } from "react";
import "./productsOverview.scss";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/data";
import Cards from "../../components/card/card";

function ProductsOverview(props) {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  });

  return (
    <div className="products-overview">
      <div className="products-title">
        <hr />
        <h2>Solutions for all skin health</h2>
        <p>Explore our innovative skincare products</p>
        <hr />
      </div>
      <div className="products-section">
        <div className="links">
          <a href="../homePage">Most Popular</a>
          <a href="../homePage">Shop all products</a>
        </div>
        <div className="cards">
          {products.map((product) => {
            if (
              (product.category === "women's clothing") &
              (product.price > 10)
            ) {
              return (
                <Cards
                  addToCart={props.addToCart}
                  product={product}
                  img={product.image}
                  title={product.title}
                  price={product.price}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
}

export default ProductsOverview;
