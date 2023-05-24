import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout(props) {
  const [drawer, setDrawer] = useState(true);

  const toggleDrawer = () => {
    setDrawer(!drawer);
  };
  return (
    <div>
      <NavBar toggleDrawer={toggleDrawer} drawer={drawer} />
      <div
        className={`flex-1 ${
          drawer ? "w-full" : "w-5/6"
        } transition-all duration-300`}
      >
        {props.children}
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
