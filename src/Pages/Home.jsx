import React, { useEffect, useState } from "react";
import AppLayout from "../Layouts/AppLayout";
import axios from "axios";

function Home() {
  return (
    <AppLayout>
      <section className="Home">
        <h3>Hello Home</h3>
      </section>
    </AppLayout>
  );
}

export default Home;
