import product1 from "../../assets/product1.webp";
import { useCart } from "../CartContext";
import {Link} from "react-router-dom";

const CartList = () => {
  const { cart, addToCart } = useCart();
  const handleIncreaseQuantity = (item) => {
    addToCart(item, 1);
  };

  const handleDecreaseQuantity = (item) => {
    addToCart(item, -1);
  };

  return (
    <div className="cart-main-products-container">
      {!cart.cart.length ? (
        <div className="cart-main-products-empty-container">
        <p className="cart-main-products-empty-text">No products in your cart. Start adding them now!</p>
        <Link
          to={"/shop"}
          className="product-footer-buttons-buy"
        >
          Add Product
        </Link>
        </div>
      ) : (
        cart.cart.map((item, index) => {
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
                    <button
                      className="cart-main-product-info-count-button"
                      onClick={() => handleDecreaseQuantity(item)}
                    >
                      -
                    </button>
                    <p className="cart-main-product-info-count-number">
                      {item.quantity}
                    </p>
                    <button
                      className="cart-main-product-info-count-button"
                      onClick={() => handleIncreaseQuantity(item)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
};
export default CartList;
