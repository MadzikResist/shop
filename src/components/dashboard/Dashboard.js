import "./dashboard.css";
import headerPhoto from "../../assets/headerPhoto.png";
import NavIcons from "../navbar/NavIcons";
import { Link } from "react-router-dom";
import RightAngleIcon from "../../const/icons/RightAngleIcon";
import FiltersIcon from "../../const/icons/FiltersIcon";
import SearchIcon from "../../const/icons/SearchIcon";
import { useEffect, useState } from "react";
import SliderPopularProducts from "./SliderPopularProducts";

const Dashboard = () => {
  const [popularProducts, setPopularProducts] = useState([]);
  const [selectedPopularCategory, setSelectedPopularCategory] =
    useState("women");

  const handleChangePopularCategory = () => {
    if (selectedPopularCategory === "women") {
      setSelectedPopularCategory("men");
    } else {
      setSelectedPopularCategory("women");
    }
  };
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://shop-backend-uedl.onrender.com/api/products/popularProducts",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        const popularProductsData = await response.json();
        setPopularProducts(popularProductsData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    })();
  }, []);

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
              to={"/store"}
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
        {/*TODO*/}
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
          <div className="main-popular-products-categories">
            <button
              className="main-popular-products-categories-button"
              style={{
                backgroundColor:
                  selectedPopularCategory === "women" ? "#000" : "#fff",
                color: selectedPopularCategory === "women" ? "#fff" : "#000",
              }}
              onClick={handleChangePopularCategory}
            >
              Women
            </button>
            <button
              className="main-popular-products-categories-button"
              style={{
                backgroundColor:
                  selectedPopularCategory === "men" ? "#000" : "#fff",
                color: selectedPopularCategory === "men" ? "#fff" : "#000",
              }}
              onClick={handleChangePopularCategory}
            >
              Men
            </button>
          </div>
          <SliderPopularProducts photos={popularProducts} />
        </div>
      </main>
    </div>
  );
};
export default Dashboard;
