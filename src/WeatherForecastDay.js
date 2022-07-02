import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function icon() {
    let forecastIcon = `http://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
    return (
      <img
        src={forecastIcon}
        alt={props.data.weather[0].description}
        id="weather-icon"
      />
    );
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div className="forecastIcon">{icon()}</div>
      <div className="forecastTemperature">
        <span className="forecastTemperatureMax">
          <strong>{maxTemperature()}</strong>
        </span>{" "}
        | {}
        <span className="forecastTemperatureMin">{minTemperature()}</span>
      </div>
    </div>
  );
}
