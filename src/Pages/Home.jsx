import React, { useEffect, useState } from "react";
import AppLayout from "../Layouts/AppLayout";
import axios from "axios";
const url1 = "https://www.mediawiki.org/wiki/Special:MyLanguage/API:Main_page";
function Home() {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    axios.get(url1).then((response) => {
      setMaps(response.data.data);
    });
  }, []);

  if (maps.length === 0) return null;
  console.log(maps);
  return (
    <AppLayout>
      <section className="Home">
        <h3>Hello Home</h3>
      </section>
    </AppLayout>
  );
}

export default Home;
