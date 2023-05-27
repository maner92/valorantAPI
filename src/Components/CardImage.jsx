import React from "react";
import { mapsDescription as data } from "../data/MapsDescription";

function CardImage({ maps }) {
  console.log(data);
  return (
    <div className="flex flex-wrap justify-center">
      {maps.map(
        (map, i) =>
          i !== 8 && (
            <div
              key={map.uuid}
              className="card m-10 lg:card-side bg-base-200 shadow-xl"
            >
              <figure className="w-80">
                <img src={map.displayIcon} alt="Album" />
              </figure>
              <div className="card-body w-96">
                <h1 className="card-title text-white font-bold text-6xl">
                  {map.displayName}
                </h1>
                <h1 className="card-title text-white text-xl">
                  {map.coordinates}
                </h1>
                <div className="card-title text-white text-xl max-w-lg text-justify">
                  {data[i].description}
                </div>
              </div>
            </div>
          )
      )}
    </div>
  );
}

export default CardImage;
