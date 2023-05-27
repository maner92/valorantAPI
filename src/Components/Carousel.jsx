import React, { useState } from "react";
import CardImage from "./CardImage";

function Carousel(props) {
  return (
    <div className="carousel h-[60rem]">
      {props.items.map((map, i) => (
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
              href={`#slide${i === 0 ? props.items.length - 1 : i - 1}`}
              className="btn btn-circle"
            >
              ❮
            </a>
            <a
              href={`#slide${i === props.items.length - 1 ? 0 : i + 1}`}
              className="btn btn-circle"
            >
              ❯
            </a>

            {/* <div className="absolute top-96 right-5">
              <a>
                <button className="btn btn-primary">Button</button>
              </a>
            </div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carousel;
