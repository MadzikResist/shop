import NavIcons from "../navbar/NavIcons";
import { useNavigate } from "react-router-dom";
import './cart.css'
import BackIcon from "../../const/icons/BackIcon";
import DotsIcon from "../../const/icons/DotsIcon";
import CartList from "./CartList";
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
            <BackIcon className="product-header-buttons-back-icon"/>
          </button>
          <h2 className="product-header-buttons-title">My Cart</h2>
          <button className="product-header-buttons-share">
            <DotsIcon className={"product-header-buttons-share-icon"}/>
          </button>
        </div>
      </header>
      <main aria-label="Main" className="cart-main">
        <CartList/>
      </main>
      <nav aria-label="Nav" className="nav">
        <NavIcons />
      </nav>
    </div>
  );
};
export default Cart;
