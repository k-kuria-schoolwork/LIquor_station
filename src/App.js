import './App.css';
import { Routes, Route} from 'react-router-dom';
import Home from './Components/Home';
import Category from './Components/Category';
import Products from './Components/Products';
import data from './data';
import SingleProduct from './Components/SingleProduct';
import { CartProvider } from 'react-use-cart';
import Cart from './Components/Cart';
import Checkout from './Components/Checkout';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <CartProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/cart' element={<Cart />} ></Route>
        <Route path='/categories' element={<Category />} />
        <Route path='/products/:category' element={<Products data={data} />} ></Route>
        <Route path='/products/:category/:productId' element={<SingleProduct data={data} />} ></Route>
      <Route path='/checkout' element={<Checkout />} />
      </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
