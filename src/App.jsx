import React, {useState} from 'react'
import './App.css';
import Index from './views/homePage';
import Navbar from './components/navbar/Navbar.jsx';
import ProductsOverview from './views/productsOverview/productsOverview';
import CartModal from './components/CartModal/CartModal'


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => {
    setIsOpen(!isOpen)
    console.log('isOpen', isOpen)
  }

  return (
    <div className="App">
    <Navbar openModal={openModal}/>
    <CartModal open={isOpen}/>
    <Index />
    <ProductsOverview />

    </div>
  );
}

export default App;
