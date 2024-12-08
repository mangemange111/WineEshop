import React from "react";
import "./WineCard.css";
import { useCart } from "../context/CartContext";

const getRandomPrice = () => {
  return (Math.random() * 500).toFixed(2);
};

const WineCard = ({ wine }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(wine);
  };

  const randomPrice = React.useMemo(() => getRandomPrice(), []);

  return (
    <div className="wine-card">
      <div className="wine-card-image">
        <img src={wine.image} alt={wine.wine} />
      </div>
      <div className="wine-card-content">
        <h3 className="wine-card-title">{wine.wine}</h3>
        <p className="wine-card-price">${randomPrice}</p>
        <p className="wine-card-location">{wine.location}</p>
        <button onClick={handleAddToCart} className="add-to-cart-btn">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default WineCard;
