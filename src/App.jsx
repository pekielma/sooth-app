import React, { useState } from "react";
import "./App.scss";
import Index from "./views/homePage";
import Navbar from "./components/navbar/navbar";
import ProductsOverview from "./views/productsOverview/productsOverview";
import CartModal from "./components/CartModal/CartModal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [cart, setCart] = useState([]);

  const openModal = () => {
    setIsOpen(!isOpen);
  };

  const addToCart = (item) => {
    const cartArray = [...cart];
    cartArray.unshift(item);
    setCart(cartArray);
  };

  const removeFromCart = (item) => {
    const cartArray = [];
    cartArray.remove(item);
    setCart(cartArray);
  };

  return (
    <div className="App">
      <Navbar openModal={openModal} />
      <CartModal
        openModal={openModal}
        removeFromCart={removeFromCart}
        cart={cart}
        setIsOpen={setIsOpen}
        open={isOpen}
      />
      <Index />
      <ProductsOverview addToCart={addToCart} />
    </div>
  );
}

export default App;
