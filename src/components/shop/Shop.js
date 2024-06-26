import NavIcons from "../navbar/NavIcons";
import { Link } from "react-router-dom";
import "./shop.css";
import { useEffect, useMemo, useState } from "react";
import { useLikes } from "../../contexts/LikesContext";
const Shop = () => {
  const { likes, likeItem } = useLikes();
  const [products, setProducts] = useState([]);
  // console.log("prod", products);
  const addedLikes = useMemo(() => {
    return likes.likes.map((addedItem) => addedItem.code);
  }, [likes.likes]);

  const handleLikeItem = (item, like) => {
    likeItem({ ...item, like });
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://shop-backend-uedl.onrender.com/api/products/",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const clothes = await response.json();
        // console.log('clothens',clothes);
        setProducts(clothes);
      } catch (error) {
        console.error("error fetching data: ", error);
      }
    })();
  }, []);

  return (
    <div className="shop-container">
      <header aria-label="Header" className="header-shop">
        <div className="header-search-container">
          <div className="header-search header-search-shop">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="header-search-icon"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              type="search"
              className="header-search-input header-search-input-shop"
              placeholder="Search Product"
            ></input>
          </div>
          <div className="header-filters">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="header-filters-icon"
            >
              <path d="M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z" />
            </svg>
          </div>
        </div>
      </header>
      <main aria-label="Main content" className="main-container-shop">
        {products.map((product) => (
          <Link
            to={`/product/${product.code}`}
            key={product.code}
            state={{ product }}
            // style={linkStyle}

            className="main-shop-product-wrapper"
          >
            <img
              src={product.galleryImages[0]}
              alt="product"
              className="main-shop-image"
            />
            <div
              className="main-popular-products-image-icon"
              onClick={(e) => {
                e.preventDefault();
                handleLikeItem(product, true);
              }}
            >
              {addedLikes.includes(product.code) ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  style={{ fill: "#ea5e5c" }}
                >
                  <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
                </svg>
              )}
            </div>
            <p className="main-popular-products-image-name">{product.name}</p>
            <p className="main-popular-products-image-cost">
              {product.price}
            </p>
          </Link>
        ))}
      </main>
      <nav aria-label="Nav" className="nav">
        <NavIcons className="shop-nav" />
      </nav>
    </div>
  );
};
export default Shop;
