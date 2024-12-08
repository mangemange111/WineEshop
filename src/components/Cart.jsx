import React from "react";
import { useCart } from "../context/CartContext";
import { cartFunctions } from "../Hooks/CartFunctions";
import "./Cart.css";

const Cart = () => {
  const { cartItems } = useCart();
  const { addCart, reduceCart, removeItem, clearCart, getTotal } =
    cartFunctions();

  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        <button onClick={clearCart} className="clear-cart-btn">
          Clear Cart
        </button>
      </div>
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
                <div className="quantity-controls">
                  <button onClick={() => reduceCart(index)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => addCart(index)}>+</button>
                  <button
                    title="Remove item"
                    onClick={() => removeItem(index)}
                    className="remove-btn"
                  >
                    X
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>
              Total: ${getTotal()}
              <button className="cart-checkout">Order & Pay</button>
            </h3>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
