import "./dashboard.css";
import headerPhoto from "../../assets/headerPhoto.png";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import NavIcons from "../navbar/NavIcons";

const Dashboard = () => {
  return (
    <div className="container">
      <header aria-label="Header" className="header">
        <div className="header-search-container">
          <div className="header-search">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="header-search-icon"
              viewBox="0 0 512 512"
            >
              <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
            </svg>
            <input
              type="search"
              className="header-search-input"
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
        <div className="sale-container">
          <div className="sale-text-button-container">
            <p className="sale-text">Super Sale Discount 40%</p>
            <button className="sale-button">
              Get Now
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="sale-button-icon"
              >
                <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
          </div>
          <img src={headerPhoto} className="sale-background" alt="sale" />
        </div>
      </header>
      <main aria-label="Main content" className="main-container">
        <div className="main-product-list">
          <div className="main-product-list-element"></div>
          <div className="main-product-list-element"></div>
          <div className="main-product-list-element"></div>
          <div className="main-product-list-element"></div>
          <div className="main-product-list-element"></div>
          <div className="main-product-list-element"></div>
          <div className="main-product-list-element"></div>
          <div className="main-product-list-element"></div>
        </div>
        <div className="main-popular-products-container">
          <h2>Popular Products</h2>
          <div className="main-popular-products-images-container">
            <div className="main-popular-products-image-text">
              <div
                className="main-popular-products-image"
                style={{ backgroundImage: `url(${product1})` }}
              ></div>
              <p className="main-popular-products-image-name">
                Grey Elegant Coat
              </p>
              <p className="main-popular-products-image-cost">$ 800.00</p>
            </div>
            <div className="main-popular-products-image-text">
              <div
                className="main-popular-products-image"
                style={{ backgroundImage: `url(${product2})` }}
              ></div>
              <p className="main-popular-products-image-name">
                Dark Grey Minimalist
              </p>
              <p className="main-popular-products-image-cost">$ 400.00</p>
            </div>
            <div className="main-popular-products-image-text">
              <div
                className="main-popular-products-image"
                style={{ backgroundImage: `url(${product2})` }}
              ></div>
              <p className="main-popular-products-image-name">
                Dark Grey Minimalist
              </p>
              <p className="main-popular-products-image-cost">$ 400.00</p>
            </div>
            <div className="main-popular-products-image-text">
              <div
                className="main-popular-products-image"
                style={{ backgroundImage: `url(${product2})` }}
              ></div>
              <p className="main-popular-products-image-name">
                Dark Grey Minimalisttttt
              </p>
              <p className="main-popular-products-image-cost">$ 400.00</p>
            </div>
          </div>
        </div>
      </main>
      <nav aria-label="Nav" className="nav">
        <NavIcons/>
      </nav>
    </div>
  );
};
export default Dashboard;
