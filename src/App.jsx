import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.scss";
import Index from "./views/homePage";
import Navbar from "./components/navbar/navbar";
import ProductsOverview from "./views/productsOverview/productsOverview";
import CartModal from "./components/CartModal/CartModal";
import Consultations from "./views/consultations/consultations";
import Login from "./views/login/Login";
import { auth } from "./base";

import Signup from "./views/signup/Signup";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  
  console.log('isLoggedIn', isLoggedIn)



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
      <Navbar isLoggedIn={isLoggedIn} openModal={openModal} />
      <CartModal
        openModal={openModal}
        removeFromCart={removeFromCart}
        cart={cart}
        setIsOpen={setIsOpen}
        open={isOpen}
      />
      <Routes> 

      <Route path="/" element={
      <>
      <Index />
      <ProductsOverview addToCart={addToCart} />
      </>
      } 
      />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      <Route path="/consultations" element={<Consultations />} />
      </Routes>
    </div>
  );
}

export default App;
