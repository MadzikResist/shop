import "./sliderPopularProducts.css";
import React, {useEffect, useRef, useState} from "react";

const SliderPopularProducts = ({ photos }) => {
  photos = photos.map((product) => product.galleryImages[0]);
  const length = photos.length;
  const [current, setCurrent] = useState(0);

  const refInterval = useRef();
  useEffect(() => {
    refInterval.current = setInterval(() => {
      setCurrent((prevCurrent) =>
        prevCurrent === length - 2 ? 0 : prevCurrent + 1,
      );
    }, 2000);

    return () => clearInterval(refInterval.current);
  }, [length, setCurrent]);
  const nextSlide = () => {
    setCurrent(current === length - 2 ? 0 : current + 1);
    clearInterval(refInterval.current);
  };
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 2 : current - 1);
    clearInterval(refInterval.current);
  };
  if (!Array.isArray(photos) || photos.length <= 0) {
    return null;
  }

  const renderDots = () => {
    return (
      <div className="popular-products-dots-container">
        {Array.from({ length: 5 }, (_, i) => (
          <div
            key={i}
            className="popular-products-one-dot"
            style={{ backgroundColor: current === i ? "#000" : "transparent" }}
            onClick={() => {
              setCurrent(i);
              clearInterval(refInterval.current);
            }}
          ></div>
        ))}
      </div>
    );
  };
  return (
    <>
      <div className="sliderPopularProducts">
        <div className="leftArrowSlider" onClick={prevSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            fill="white"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
          </svg>
        </div>
        <div className="rightArrowSlider" onClick={nextSlide}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 320 512"
            fill="white"
          >
            <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
          </svg>
        </div>
        <div
          style={{
            transform: `translateX(-${current * 50}%)`,
          }}
          className="slidePopularProducts"
        >
          {photos.map((slide, index) => {
            return (
              <div
                className={`slide-popular-product ${index === current ? "active-dashboard" : ""}`}
                key={index}
              >
                <img
                  className="oneSlideProduct"
                  src={photos[index]}
                  alt="Popular product"
                  style={{
                    position: "absolute",
                    left: `${index * 50}%`,
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
      {renderDots()}
    </>
  );
};
export default SliderPopularProducts;
