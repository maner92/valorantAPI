import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

function AppLayout(props) {
  return (
    <div>
      <NavBar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-screen">{props.children}</div>
      </div>

      <Footer />
    </div>
  );
}

export default AppLayout;
