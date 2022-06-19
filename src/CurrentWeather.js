import React, { useState } from "react";
import axios from "axios";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [CurrentWeatherData, setCurrentWeatherData] = useState({
    ready: false,
  });
  function handleResponse(response) {
    console.log(response.data);
    setCurrentWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
      description: response.data.weather[0].description,
    });
  }

  if (CurrentWeatherData.ready) {
    return (
      <div className="container">
        <div className="CurrentWeather">
          <div className="imageContainer">
            <img
              src="https://images.unsplash.com/photo-1496450681664-3df85efbd29f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80"
              alt="overcast"
              id="weather-image-display"
            />
            <div className="centered">
              <h2>
                <strong>
                  <span id="city-display">{CurrentWeatherData.city}</span>
                </strong>
              </h2>
              <div className="mainIcon">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
                  alt="sunny"
                  id="weather-icon"
                />
              </div>
              <h1>
                <span id="temperature-display">
                  {Math.round(CurrentWeatherData.temperature)}
                </span>
                <span className="TemperatureUnits" id="units">
                  °C
                </span>
              </h1>
              <h3 className="text-capitalize">
                <span id="weather-description-display">
                  {CurrentWeatherData.description}
                </span>
              </h3>
              <h4>
                <span id="date-display">Saturday 28 May 2022</span> |{" "}
                <span id="time-display">13:45</span>
              </h4>
            </div>
          </div>
        </div>

        <div className="SunWind">
          <div className="row">
            <div className="col-3">
              <div className="sunriseLabel">Sunrise</div>
              <div className="sunriseTime">
                <span id="sunrise-time">06:32</span>
              </div>
            </div>

            <div className="col-3">
              <div className="sunset-information">
                <div className="sunsetLabel">Sunset</div>
                <div className="sunsetTime">
                  <span id="sunsetTime">22:13</span>
                </div>
              </div>
            </div>

            <div className="col-6">
              <div className="windSpeedInformation">
                <div className="windSpeedLabel">Wind speed</div>
                <div className="windSpeed">
                  <span id="windSpeed">{CurrentWeatherData.wind}</span> m/s
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "03cb8d16f9a2b4cc3c8597d68446f50d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
