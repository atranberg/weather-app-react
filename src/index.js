import React from "react";
import ReactDOM from "react-dom/client";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import Footer from "./Footer";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Search />
    <CurrentWeather defaultCity="Borås" />
    <Footer />
  </React.StrictMode>
);

reportWebVitals();
