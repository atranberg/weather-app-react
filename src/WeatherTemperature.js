import React from "react";

export default function WeatherTemperature(props) {
  return (
    <span>
      {" "}
      <h1>
        <span id="temperature-display">
          {Math.round(props.data.temperature)}
        </span>
        <span className="TemperatureUnits" id="units">
          °C
        </span>
      </h1>
    </span>
  );
}
