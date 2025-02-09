import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Cart({ cartItems }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // To check user authentication
  const [cart, setCart] = useState(cartItems); // Local state to manage cart items
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Make a call to your backend to verify if the user is authenticated
        const response = await fetch('http://localhost:3001/cart', { // Change endpoint if needed
          method: 'GET',
          credentials: 'include', // Include cookies
        });

        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          throw new Error('Unauthorized');
        }
      } catch (error) {
        console.error('Authentication failed:', error);
        navigate('/login'); // Redirect to login page if not authenticated
      }
    };

    checkAuth();
  }, [navigate]);

  // Calculate the total price of the cart items
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  // Update quantity in the local cart state
  const updateQuantity = (index, delta) => {
    const updatedCart = [...cart]; // Copy the cart array to avoid direct mutation
    if (updatedCart[index]) {
      updatedCart[index].quantity = Math.max(updatedCart[index].quantity + delta, 0);
      if (updatedCart[index].quantity === 0) {
        updatedCart.splice(index, 1); // Remove item if quantity is 0
      }
    }
    setCart(updatedCart); // Update the local state with the new cart
  };

  if (!isAuthenticated) {
    return null; // Return nothing until authentication is verified
  }

  return (
    <>
      <Navbar />
      <div className="mt-32 p-6 max-w-4xl mx-auto border rounded-lg shadow-lg bg-white">
        <h2 className="text-2xl font-bold text-center mb-6">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <div>
            <div className="space-y-4">
              {cart.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between border-b py-4"
                >
                  <div className="flex items-center space-x-4">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-sm text-gray-500">Rs {item.price} each</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="text-xl text-gray-500 hover:text-gray-700"
                      >
                        -
                      </button>
                      <span className="text-xl">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="text-xl text-gray-500 hover:text-gray-700"
                      >
                        +
                      </button>
                    </div>
                    <p className="text-xl font-semibold">
                      Rs {item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t pt-4">
              <div className="flex justify-between">
                <h3 className="text-xl font-semibold">Total</h3>
                <p className="text-xl font-semibold">Rs {calculateTotal()}</p>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Cart;
