import NavIcons from "../navbar/NavIcons";
import { useLocation, useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  return (
    <div className="account-container">
      <nav aria-label="Nav" className="nav">
        <NavIcons />
      </nav>
      <header aria-label="Header" className="product-header">
        <div className="product-header-buttons">
          <button
            className="product-header-buttons-back"
            onClick={() => navigate(-1)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
              className="product-header-buttons-back-icon"
            >
              <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </button>
          <h2 className="product-header-buttons-title">Product Details</h2>
          <button className="product-header-buttons-share">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="product-header-buttons-share-icon"
            >
              <path d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
};
export default Account;
