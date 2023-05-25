import React from "react";

function Carousel({ maps }) {
  console.log(maps);
  return (
    <div className="carousel w-full">
      {maps.map((map, i) => (
        <div
          key={map.uuid}
          id={`slide${i}`}
          className="carousel-item relative w-full"
        >
          <img src={map.splash} className="w-full" />
          <h1>{map.displayName}</h1>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
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
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
