import React from "react";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
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
                <span id="city-display">{props.data.city}</span>
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
                {Math.round(props.data.temperature)}
              </span>
              <span className="TemperatureUnits" id="units">
                °C
              </span>
            </h1>
            <h3 className="text-capitalize">
              <span id="weather-description-display">
                {props.data.description}
              </span>
            </h3>
            <h4>
              <FormattedDate date={props.data.date} />
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
                <span id="windSpeed">{props.data.wind}</span> m/s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
