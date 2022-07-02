import React, { useState } from "react";
import axios from "axios";
import "./WeatherApp.css";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast.js";

export default function CurrentWeather(props) {
  const [CurrentWeatherData, setCurrentWeatherData] = useState({
    ready: false,
  });
  const [city, setCity] = useState(props.defaultCity);
  const [unit, setUnit] = useState("metric");

  function setMetric(event) {
    event.preventDefault();
    setUnit("metric");
  }

  function setImperial(event) {
    event.preventDefault();
    setUnit("imperial");
  }

  function handleResponse(response) {
    setCurrentWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      timezone: response.data.timezone,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "03cb8d16f9a2b4cc3c8597d68446f50d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (CurrentWeatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="Search">
            <div className="container">
              <div className="row">
                <div className="col-sm-6 form-floating mb-3">
                  <input
                    className="form-control"
                    type="search"
                    autoComplete="off"
                    onChange={handleCityChange}
                  />
                  <label for="floatingInput">Change location</label>
                </div>
                <div className="col-sm-2">
                  <input
                    type="submit"
                    value="Search"
                    className="btn btn-outline-secondary btn-lg"
                    id="search-button"
                  />
                </div>
                <div class="col-sm-2">
                  <input
                    type="button"
                    value="Current location"
                    className="btn btn-outline-secondary btn-sm"
                    id="current-location-button"
                  />
                </div>
                <div className="col-sm-2" id="temperature-conversion">
                  <span className="units">
                    <a
                      href="/"
                      id="celsius-link"
                      className="active"
                      onClick={setMetric}
                    >
                      °C
                    </a>{" "}
                    |{" "}
                    <a href="/" id="fahrenheit-link" onClick={setImperial}>
                      °F
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </form>
        <WeatherInfo data={CurrentWeatherData} unit={unit} />
        <WeatherForecast coordinates={CurrentWeatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
