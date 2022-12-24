import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import './App.css'
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import DisplayCategory from "./components/DisplayCategory";
import Account from "./components/Account";
function App() {
 
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" exact element={<ProductListing/>}/>
        <Route path="/product/:productId" exact element={<ProductDetails/>}/>
        <Route path="/cart" exact element={<Cart/>}/>
        <Route>404 Not Found</Route>
        <Route path="categories/:type" element={<DisplayCategory/>}></Route>
        <Route path="/login" element={<Account/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
