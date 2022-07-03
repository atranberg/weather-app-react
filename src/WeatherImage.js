import React from "react";

export default function WeatherImage(props) {
  let description = props.weatherDescription;

  if (description.includes("Clouds")) {
    return (
      <img
        src=".images/scatteredClouds.png"
        alt="clouds"
        id="weather-image-display"
      />
    );
  } else if (description.includes("Clear")) {
    return (
      <img src=".images/clearSky.png" alt="clear" id="weather-image-display" />
    );
  } else if (description.includes("Drizzle")) {
    return (
      <img
        src=".images/showerRain.png"
        alt="drizzle"
        id="weather-image-display"
      />
    );
  } else if (description.includes("Rain")) {
    return <img src=".images/rain.png" alt="rain" id="weather-image-display" />;
  } else if (description.includes("Thunderstorm")) {
    return (
      <img
        src=".images/thunderstorm.png"
        alt="thunderstorm"
        id="weather-image-display"
      />
    );
  } else if (description.includes("Snow")) {
    return <img src=".images/snow.png" alt="snow" id="weather-image-display" />;
  } else {
    return <img src=".images/mist.png" alt="mist" id="weather-image-display" />;
  }
}
