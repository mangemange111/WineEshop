import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useCart } from "../context/CartContext";
import "./Navbar.css";

export default function Navbar() {
  const { cartItems } = useCart();

  return (
    <nav className="navbar">
      <div className="logo">WINERY.</div>
      <img src="/navimg.webp" alt="winery logo" className="nav-image" />
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/whites">White Wines</Link>
        </li>
        <li>
          <Link to="/reds">Red Wines</Link>
        </li>
      </ul>
      <div className="cart">
        <Link to="/cart">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cartItems.length}</span>
        </Link>
      </div>
    </nav>
  );
}
