import NavIcons from "../navbar/NavIcons";
import product1 from "../../assets/product1.webp";
import product2 from "../../assets/product2.webp";
import { images } from "../../const/images";
import {Link} from "react-router-dom";
const Shop = () => {

  return (
    <div className="shop-container">
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
      </header>
      <main aria-label="Main content" className="main-container">
        <div className="main-popular-products-images-container ">
          {images.map((item) => (
            <Link to={`/product/${item.id}`}  key={item.id} style={{textDecoration: 'none', color: 'black'}}>
              <div className="main-popular-products-image-text">
                <div className="main-popular-products-image-text">
                  <div
                    className="main-popular-products-image"
                    style={{backgroundImage: `url(${item.photo})`}}
                  ></div>
                  <p className="main-popular-products-image-name">
                    {item.name}
                  </p>
                  <p className="main-popular-products-image-cost">{item.price}</p>
                </div>
              </div>
            </Link>

          ))}
        </div>
      </main>
      <nav aria-label="Nav" className="nav">
        <NavIcons/>
      </nav>
    </div>
  );
};
export default Shop;
