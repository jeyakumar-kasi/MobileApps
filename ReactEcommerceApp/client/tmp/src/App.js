import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductList from "./components/ProductList";
import Cart from "./components/cart/Cart";
import Navbar from "./components/Navbar";

function App(props) {

  return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
             <Route exact path="/" component={ProductList} />
             <Route path="/my-cart" component={Cart} />
          </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
