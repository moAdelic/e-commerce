import './App.css';
import Cart from './Components/Cart';
import CategoryProducts from './Components/CategoryProducts';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ProductDetails from './Components/ProductDetails';
import ProductsList from './Components/ProductsList';
import { Route, Routes } from 'react-router-dom';
import CartProvider from './context/CartContext';
import SearchProducts from './Components/SearchProducts';

function App() {

  window.onscroll = ()=> {
    if(window.scrollY > 2500) 
      document.querySelector(".scroll-btn").classList.remove("d-none");
    else 
      document.querySelector(".scroll-btn").classList.add("d-none");
  }

  return (
    <div className="App position-relative">
      <CartProvider>
          <Navbar/>
          <Cart/>
          <Routes>
            <Route path='/' element={<> <Home/> <ProductsList/> </>}/>
            <Route path='/:category' element={<CategoryProducts />} />
            <Route path='/products/:id' element={<ProductDetails />} />
            <Route path='/search/:val' element={<SearchProducts/>} />
          </Routes>
      </CartProvider>
      
      <button
      className='scroll-btn position-fixed z-3 d-none text-center btn btn-primary d-flex justify-content-center align-items-center p-2 text-white'
      style={{width: "30px", height: "30px", right: "20px", bottom: "20px", transition: ".3s"}}
      onClick={()=> {window.scrollTo({top: 0, behavior: "smooth"})}}
      >
        up
      </button>
    </div>
  );
}

export default App;
