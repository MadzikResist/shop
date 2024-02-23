import product1 from "../../assets/product1.webp";
import { useCart } from "../CartContext";

const CartList = () => {
  const { cart } = useCart();
  return (
    <div className="cart-main-products-container">
      {cart.cart.map((item, index) => {
        return (
          <div className="cart-main-product" key={item.id}>
            <div
              className="cart-main-product-photo"
              style={{ backgroundImage: `url(${product1})` }}
            ></div>
            <div className="cart-main-product-info-container">
              <div>
                <p className="cart-main-product-info-title">{item.name}</p>
                <p className="cart-main-product-info-color-size">
                  color, {item.size}
                </p>
              </div>
              <div className="cart-main-product-info-price-count">
                <p className="cart-main-product-info-price">{item.price}</p>
                <div className="cart-main-product-info-count">
                  <button className="cart-main-product-info-count-button">
                    -
                  </button>
                  <p className="cart-main-product-info-count-number">1</p>
                  <button className="cart-main-product-info-count-button">
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default CartList;
