import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div>
      <h1>
        <span id="temperature-display">{Math.round(props.celsius)}</span>
        <span className="TemperatureUnits" id="units">
          °C
        </span>
      </h1>
    </div>
  );
}
