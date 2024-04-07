import { useCart } from "../../contexts/CartContext";
import { Link } from "react-router-dom";

const CartList = () => {
  const { cart, addToCart } = useCart();
  const handleIncreaseQuantity = (item) => {
    addToCart(item, item.quantity + 1);
  };
  // console.log(cart.cart)
  const handleDecreaseQuantity = (item) => {
    addToCart(item, item.quantity - 1);
  };
  return (
    <div className="cart-main-products-container">
      {!cart.cart.length ? (
        <div className="cart-main-products-empty-container">
          <p className="cart-main-products-empty-text">
            No products in your cart. Start adding them now!
          </p>
          <Link to={"/store"} className="product-footer-buttons-buy">
            Add Product
          </Link>
        </div>
      ) : (
        cart.cart.map((item, index) => {
          return (
            <div className="cart-main-product" key={`${item.id}-${item.size}`}>
              <img
                src={item.galleryImages[0]}
                alt="product"
                className="cart-main-product-photo"
              />
              <div className="cart-main-product-info-container">
                <div>
                  <p className="cart-main-product-info-title">{item.name}</p>
                  <p className="cart-main-product-info-color-size">
                    {/*color, */}
                    size: {item.size}
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
