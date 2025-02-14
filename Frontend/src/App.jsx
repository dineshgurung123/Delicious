import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './Home/Home';
import Food from './componentss/Food.jsx';
import SingleFood from './componentss/SingleFood.jsx';
import AddFood from './componentss/AddFood.jsx';
import Edit from './componentss/Edit.jsx';
import Login from './componentss/Login.jsx';
import Cart from './componentss/Cart.jsx';
import Register from './componentss/Register.jsx';

function App() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food addToCart={addToCart} />} />
          <Route path="/:id" element={<SingleFood />} />
          <Route path="/addFood" element={<AddFood />} />
          <Route path="/edit/:id" element={<Edit />} />
          <Route path="/login" element={<Login />} />
          {/* Pass the cart state to the Cart component */}
          <Route path="/cart" element={<Cart cartItems={cart} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
