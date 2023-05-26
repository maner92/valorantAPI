import React, { useState } from "react";
import CardImage from "./CardImage";

function Carousel({ maps }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? maps.length - 1 : prevSlide - 1
    );
  };

  console.log(maps);
  return (
    <div className="carousel h-[40rem]">
      {maps.map((map, i) => (
        <div
          key={map.uuid}
          id={`slide${i}`}
          className="carousel-item relative w-full  "
        >
          <img src={map.splash} className="w-full" />
          <div className="absolute top-5 left-5">
            <h1 className="text-white font-bold text-8xl mb-5 ml-5">
              {map.displayName}
            </h1>
          </div>

          <div className="absolute flex justify-between transform -translate-y-3/4 left-5 right-5 top-1/2">
            <a
              href={`#slide${i === 0 ? maps.length - 1 : i - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${i === maps.length - 1 ? 0 : i + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>

            <div className="absolute top-72 right-5">
              <a>
                <button className="btn btn-primary">Button</button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
