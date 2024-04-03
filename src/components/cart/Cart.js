import NavIcons from "../navbar/NavIcons";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import BackIcon from "../../const/icons/BackIcon";
import DotsIcon from "../../const/icons/DotsIcon";
import CartList from "./CartList";
import { useState } from "react";
import { useCart } from "../../contexts/CartContext";
const Cart = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { clearCart } = useCart();

  const handleClearCart = () => {
    clearCart();
  };

  return (
    <div className="cart-container">
      <header aria-label="Header" className="product-header-cart">
          <button
            className="product-header-buttons-back"
            onClick={() => navigate(-1)}
          >
            <BackIcon className="product-header-buttons-back-icon" />
          </button>
          <h2 className="product-header-buttons-title">My Cart</h2>
          <button
            className="product-header-buttons-share"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
            style={{
              borderRadius: isOpen ? "50% 50% 0 0" : "50%",
            }}
          >
            <DotsIcon className={"product-header-buttons-share-icon"} />
          </button>
          <div
            className="cart-dropdown"
            style={{ height: isOpen ? "40px" : 0 }}
            onClick={handleClearCart}
          >
            {isOpen && "Clear Cart"}
          </div>
      </header>
      <main aria-label="Main" className="cart-main">
        <CartList />
      </main>
      <nav aria-label="Nav" className="nav nav-desktop">
        <NavIcons />
      </nav>
    </div>
  );
};
export default Cart;
