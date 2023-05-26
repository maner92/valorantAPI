import axios from "axios";
import React, { useState, useEffect } from "react";
import AppLayout from "../Layouts/AppLayout";
import Carousel from "../Components/Carousel";
import CardImage from "../Components/CardImage";

const url = "https://valorant-api.com/v1/maps";

function Maps() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    axios.get(url).then((response) => {
      setMaps(response.data.data);
    });
  }, []);

  if (maps.length === 0) return null;

  return (
    <AppLayout>
      <Carousel maps={maps}></Carousel>
    </AppLayout>
  );
}

export default Maps;
