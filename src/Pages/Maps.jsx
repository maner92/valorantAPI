import axios from "axios";
import React, { useState, useEffect } from "react";
import AppLayout from "../Layouts/AppLayout";
import Carousel from "../Components/Carousel";
import CardImage from "../Components/CardImage";

const url = "https://valorant-api.com/v1/maps";

function Maps() {
  const [gameMaps, setGamemaps] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setGamemaps(response.data.data);
    });
  }, []);

  if (gameMaps.length === 0) return null;

  return (
    <AppLayout>
      <Carousel items={gameMaps}></Carousel>
      <div className=" justify-center">
        <CardImage maps={gameMaps}></CardImage>
      </div>
    </AppLayout>
  );
}

export default Maps;
