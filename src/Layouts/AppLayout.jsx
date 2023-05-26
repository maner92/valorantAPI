import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout(props) {
  return (
    <div>
      <NavBar />
      <div className="">
        <div className="lg:h-1/2 md:h-96 sm:h-64">{props.children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
