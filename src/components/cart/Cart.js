import NavIcons from "../navbar/NavIcons";
import { useNavigate } from "react-router-dom";
import './cart.css'
import product1 from '../../assets/product1.webp'
const Cart = () => {
  const navigate = useNavigate();
  return (
    <div className="account-container">
      <header aria-label="Header" className="product-header">
        <div className="product-header-buttons">
          <button
            className="product-header-buttons-back"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="product-header-buttons-back-icon"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <h2 className="product-header-buttons-title">My Cart</h2>
          <button className="product-header-buttons-share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="product-header-buttons-share-icon"
            >
              <path d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
            </svg>
          </button>
        </div>
      </header>
      <main aria-label="Main" className="cart-main">
        <div className="cart-main-products-container">
          <div className="cart-main-product">
            <div
              className="cart-main-product-photo"
              style={{ backgroundImage: `url(${product1})` }}
            ></div>
            <div className="cart-main-product-info-container">
              <div>
                <p className="cart-main-product-info-title">Title</p>
                <p className="cart-main-product-info-color-size">color, size</p>
              </div>
              <div className="cart-main-product-info-price-count">
                <p className="cart-main-product-info-price">$ 200.00</p>
                <div className="cart-main-product-info-count">
                  <button className="cart-main-product-info-count-button">-</button>
                  <p className="cart-main-product-info-count-number">1</p>
                  <button className="cart-main-product-info-count-button">+</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <nav aria-label="Nav" className="nav">
        <NavIcons />
      </nav>
    </div>
  );
};
export default Cart;
