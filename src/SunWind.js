import React from "react";
import "./SunWind.css";

export default function SunWind() {
  let otherWeatherData = {
    sunrise: "06:32",
    sunset: "21:46",
    wind: 4,
  };

  return (
    <div className="SunWind">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="sunriseLabel">Sunrise</div>
            <div className="sunriseTime">
              <span id="sunrise-time">{otherWeatherData.sunrise}</span>
            </div>
          </div>

          <div className="col-3">
            <div className="sunset-information">
              <div className="sunsetLabel">Sunset</div>
              <div className="sunsetTime">
                <span id="sunsetTime">{otherWeatherData.sunset}</span>
              </div>
            </div>
          </div>

          <div className="col-6">
            <div className="windSpeedInformation">
              <div className="windSpeedLabel">Wind speed</div>
              <div className="windSpeed">
                <span id="windSpeed">{otherWeatherData.wind}</span> m/s
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
