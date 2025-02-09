import React, { useState } from 'react';
import Cards from './Cards';
import Cart from './Cart';

function ParentComponent() {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart or increase quantity if already in the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemIndex = prevItems.findIndex((cartItem) => cartItem.id === item.id);
      if (itemIndex !== -1) {
        // If the item is already in the cart, increase its quantity
        const updatedItems = [...prevItems];
        updatedItems[itemIndex].quantity += 1;
        return updatedItems;
      } else {
        // If the item is not in the cart, add it with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <div className="flex flex-wrap justify-around">
        {/* Example items passed to Cards */}
        <Cards item={{ id: 1, name: 'Item 1', price: 100, img: '/path/to/img1' }} addToCart={addToCart} />
        <Cards item={{ id: 2, name: 'Item 2', price: 200, img: '/path/to/img2' }} addToCart={addToCart} />
        {/* Add more Cards as needed */}
      </div>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
}

export default ParentComponent;
