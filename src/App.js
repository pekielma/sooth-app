import './App.css';
import Index from './views/homePage';
import Navbar from './components/navbar/navbar';
import ProductsOverview from './views/productsOverview/productsOverview';

function App() {
  return (
    <div className="App">
    <Navbar />
    <Index />
    <ProductsOverview />

    </div>
  );
}

export default App;
