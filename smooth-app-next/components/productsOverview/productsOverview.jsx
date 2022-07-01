import React, { useEffect } from "react";
import style from "./productsOverview.module.scss";
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
    <div className={style.productsOverview}>
      <div className={style.productsTitle}>
        <hr />
        <h2>Solutions for all skin health</h2>
        <p>Explore our innovative skincare products</p>
        <hr />
      </div>
      <div className={style.productsSection}>
        <div className={style.links}>
          <a href="../homePage">Most Popular</a>
          <a href="../homePage">Shop all products</a>
        </div>
        <div className={style.cards}>
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
