import React from "react";
import ReactDOM from "react-dom/client";
import WeatherApp from "./WeatherApp";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WeatherApp defaultCity="Borås" />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
