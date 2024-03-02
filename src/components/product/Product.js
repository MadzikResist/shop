import "./product.css";
import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ImageSlider from "../ImageSlider";
import ShareIcon from "../../const/icons/ShareIcon";
import BackIcon from "../../const/icons/BackIcon";
import CartIcon from "../../const/icons/CartIcon";
import { useCart } from "../../contexts/CartContext";
import { useLikes } from "../../contexts/LikesContext";

const Product = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { product: item } = location.state;
  const [selectedSize, setSelectedSize] = useState(item.sizes[0]);
  const [disableButton, setDisableButton] = useState(false);
  const [isAdded, setIsAdded] = useState(false);
  const { cart, addToCart } = useCart();
  const { likes, likeItem } = useLikes();

  const addedItems = useMemo(() => {
    return cart.cart.map((addedItem) => addedItem.id);
  }, [cart.cart]);
  const addedLikes = useMemo(() => {
    return likes.likes.map((addedItem) => addedItem.id);
  }, [likes.likes]);
  const handleLikeItem = (item, like) => {
    likeItem({ ...item, like });
  };
  useEffect(() => {
    if (addedItems.includes(item.id)) {
      setDisableButton(true);
    } else {
      setDisableButton(false);
    }
  }, [disableButton, addedItems, item.id]);

  const handleAddToCart = (item) => {
    const itemWithSize = { ...item, size: selectedSize };

    const existingItem = addedItems.find(
      (addedItem) =>
        addedItem.id === itemWithSize.id && addedItem.size === selectedSize,
    );

    if (existingItem) {
      addToCart(itemWithSize, existingItem.quantity);
    } else {
      addToCart(itemWithSize);
    }
  };

  const handleSizeClick = (size) => {
    if (item.sizes?.includes(size)) {
      setSelectedSize(size);
    }
  };

  const renderSize = (size) => {
    const isSizeAvailable = item.sizes?.includes(size);
    return (
      <div
        key={size}
        onClick={() => handleSizeClick(size)}
        className="product-main-size"
        style={{
          color: isSizeAvailable ? "#000" : undefined,
          backgroundColor: selectedSize === size ? "#48e788" : undefined,
          pointerEvents: isSizeAvailable ? "default" : "none",
        }}
      >
        {size}
      </div>
    );
  };

  return (
    <div className="product-container">
      <header className="product-header">
        <div className="product-header-buttons">
          <button
            className="product-header-buttons-back"
            onClick={() => navigate(-1)}
          >
            <BackIcon className={"product-header-buttons-back-icon"} />
          </button>
          <h2 className="product-header-buttons-title">Product Details</h2>
          <button className="product-header-buttons-share">
            <ShareIcon className={"product-header-buttons-share-icon"} />
          </button>
        </div>
      </header>
      <main aria-label="Main" className="product-main">
        <ImageSlider photos={item.photos} />
        <div className="product-main-info-container">
          <div style={{ width: "100%" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <div>
                <p className="product-main-title">{item.name}</p>
                <p className="product-main-price">{item.price}</p>
              </div>
              {addedLikes.includes(item.id) ? (
                <div className="product-main-like-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLikeItem(item, true);
                    }}
                    style={{ fill: "#ea5e5c" }}
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                  </svg>
                </div>
              ) : (
                <div className="product-main-like-icon-container">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLikeItem(item, true);
                    }}
                  >
                    <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div className="product-main-hr" />
            <div className="product-main-size-container">
              <p className="product-main-size-title">Size</p>
              <div className="product-main-sizes">
                {["XS", "S", "M", "L", "XL"].map(renderSize)}
              </div>
            </div>
          </div>
          <div className="product-footer-container">
            <Link
              to={"/cart"}
              className="product-footer-buttons-buy"
              onClick={() => {
                setIsAdded(!isAdded);
                handleAddToCart(item);
              }}
            >
              Buy Now
            </Link>
            <button
              className="product-footer-buttons-myCart"
              onClick={() => {
                setIsAdded(!isAdded);
                handleAddToCart(item);
              }}
              // style={{opacity: disableButton ? "30%" : "100%" }}
            >
              <CartIcon />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};
export default Product;
