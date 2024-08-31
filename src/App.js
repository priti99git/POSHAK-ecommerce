
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';

import './App.css';
import Home from './Componentt/Home';
import Navbar from './Componentt/Navbar';
import { Route,  Routes} from 'react-router-dom';
import Products from './Componentt/Products';
import Product from './Componentt/Product';
import About from './Componentt/About';
import Contact from './Componentt/Contact';
import Footer from './Componentt/Footer';
import Cart from './Componentt/Cart';



function App() {
  return (
    
    <div className="App">
      <Navbar></Navbar>
     
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/products" element={<Products/>} />
        <Route exact path="/products/:id" element={<Product/>} />  
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/contact" element={<Contact/>} />
        <Route exact path="/cart" element={<Cart/>} />
      </Routes>
      <Footer/>
  
    </div>
  );
}

export default App;
