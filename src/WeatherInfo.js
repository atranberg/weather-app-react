import React from "react";
import FormattedDate from "./FormattedDate";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";

export default function WeatherInfo(props) {
  let unit = props.unit;
  let temperature = props.data.temperature;

  if (unit === "metric") {
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
                  src={props.data.icon}
                  alt={props.data.description}
                  id="weather-icon"
                />
              </div>
              <div className="temperatureDisplay">
                <h1>
                  {Math.round(temperature)}°{unit === "metric" ? "C" : "F"}
                </h1>
              </div>
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
              <Sunrise
                timestamp={props.data.sunrise}
                timezone={props.data.timezone}
              />
            </div>

            <div className="col-3">
              <div className="sunset-information">
                <div className="sunsetLabel">Sunset</div>
                <div className="sunsetTime">
                  <Sunset
                    timestamp={props.data.sunset}
                    timezone={props.data.timezone}
                  />
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
  if (unit === "imperial") {
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
                  src={props.data.icon}
                  alt={props.data.description}
                  id="weather-icon"
                />
              </div>
              <div className="temperatureDisplay">
                <h1>
                  {Math.round((temperature * 9) / 5 + 32)}°
                  {unit === "metric" ? "C" : "F"}
                </h1>
              </div>
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
              <Sunrise timestamp={props.data.sunrise} />
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
}
