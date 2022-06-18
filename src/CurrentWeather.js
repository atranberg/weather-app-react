import React from "react";
import "./CurrentWeather.css";
import ScatteredClouds from "./images/scatteredClouds.jpg";

export default function CurrentWeather() {
  let weatherData = {
    city: "Borås",
    temperature: 19,
    date: "Saturday 28 May 2022",
    time: "13:45",
    description: "Overcast clouds",
    iconUrl: "https://ssl.gstatic.com/onebox/weather/64/cloudy.png",
    weatherImageUrl:
      "https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80",
  };

  return (
    <div className="CurrentWeather">
      <div className="imageContainer">
        <img src={ScatteredClouds} alt="overcast" id="weather-image-display" />
        <div className="centered">
          <h2>
            <strong>
              <span id="city-display">{weatherData.city}</span>
            </strong>
          </h2>
          <div class="mainIcon">
            <img src={weatherData.iconUrl} alt="sunny" id="weather-icon" />
          </div>
          <h1>
            <span id="temperature-display">{weatherData.temperature}</span>
            <span class="TemperatureUnits" id="units">
              °C
            </span>
          </h1>
          <h3>
            <span id="weather-description-display">
              {weatherData.description}
            </span>
          </h3>
          <h4>
            <span id="date-display">{weatherData.date}</span> |{" "}
            <span id="time-display">{weatherData.time}</span>
          </h4>
        </div>
      </div>
    </div>
  );
}
