import React from 'react';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cartItems } = useCart();

  const getTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h1 className="cart-title">Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img src={item.image} alt={item.wine} />
              <div className="cart-item-details">
                <h3>{item.wine}</h3>
                <p>${item.price}</p>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: ${getTotal()}</h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;