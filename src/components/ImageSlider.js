import { useState } from "react";

const ImageSlider = ({ photos }) => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === photos.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? photos.length - 1 : current - 1);
  };

  return (
    <div className="slider">
      <div className="left-arrow" onClick={prevSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
        </svg>
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
        </svg>
      </div>
      {photos.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div
                className="image"
                style={{ backgroundImage: `url(${slide.url})` }}
              ></div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
