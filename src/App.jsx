import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layouts/AppLayout";
import Home from "./Pages/Home";
import Maps from "./Pages/Maps";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Maps" element={<Maps />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
