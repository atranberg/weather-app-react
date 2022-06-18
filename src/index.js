import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import Search from "./Search.js";
import CurrentWeather from "./CurrentWeather.js";
import SunWind from "./SunWind.js";
import Footer from "./Footer.js";
import reportWebVitals from "./reportWebVitals";

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
      <SunWind />
      <Footer />
    </div>
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
