import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Landing from "./Pages/Landing/Landing"
import Order from "./Pages/Orders/Orders"
import SignIn from "./Pages/Auth/SignUp"
import Payment from "./Pages/Payment/Payment"
import Cart from "./Pages/Cart/Cart"
import Results from './Pages/Results/Results';
import ProductDetail from './Pages/ProductDetail/ProductDetail';
function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/Auth" element={<SignIn/>} />
        <Route path="/Payment" element={< Payment/>} />
        <Route path="/Orders" element={<Order/>} />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/Cart" element={<Cart />} />
       

      </Routes>
    </Router>
  );
}

export default Routing;