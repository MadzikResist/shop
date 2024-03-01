import "./dashboard.css";
import headerPhoto from "../../assets/headerPhoto.png";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import NavIcons from "../navbar/NavIcons";
import { Link } from "react-router-dom";
import RightAngleIcon from "../../const/icons/RightAngleIcon";
import FiltersIcon from "../../const/icons/FiltersIcon";
import SearchIcon from "../../const/icons/SearchIcon";

const Dashboard = () => {
  return (
    <div className="container">
      <nav aria-label="Nav" className="nav">
        <NavIcons />
      </nav>
      <header className="header">
        <div className="header-search-container">
          <div className="header-search">
            <SearchIcon className={"header-search-icon"} />
            <input
              type="search"
              className="header-search-input"
              placeholder="Search Product"
            ></input>
          </div>
          <div className="header-filters">
            <FiltersIcon className={"header-filters-icon"} />
          </div>
        </div>
        <div className="sale-container">
          <div className="sale-text-button-container">
            <p className="sale-text">Super Sale Discount 40%</p>
            <Link
              to={"/shop"}
              style={{ textDecoration: "none", cursor: "pointer" }}
            >
              <button className="sale-button">
                Get Now
                <RightAngleIcon className={"sale-button-icon"} />
              </button>
            </Link>
          </div>
          <img src={headerPhoto} className="sale-background" alt="sale" />
        </div>
      </header>
      <main aria-label="Main content" className="main-container">
        <p className="main-text">
          Explore a unique world of inspiring products designed with you in
          mind. Join our community of satisfied customers and embark on a new,
          exciting journey through the realm of extraordinary products.
        </p>
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
          <h2 className="main-popular-products-text">Popular Products</h2>
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
    </div>
  );
};
export default Dashboard;
