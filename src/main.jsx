import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Hammad from "./pages/Hammad.jsx";
import Nathan from "./pages/Nathan.jsx";
import Bintang from "./pages/Bintang.jsx";
import Raihan from "./pages/Raihan.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Hammad" element={<Hammad />} />
        <Route path="/Nathan" element={<Nathan />} />
        <Route path="/Bintang" element={<Bintang />} />
        <Route path="/Raihan" element={<Raihan />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);