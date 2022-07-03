import React from "react";
import scatteredClouds from "./images/scatteredClouds.jpg";
import clearSky from "./images/clearSky.jpg";
import showerRain from "./images/showerRain.jpg";
import rain from "./images/rain.jpg";
import thunderstorm from "./images/thunderstorm.jpg";
import snow from "./images/snow.jpg";
import mist from "./images/mist.jpg";

export default function WeatherImage(props) {
  let description = props.weatherDescription;

  if (description.includes("Clouds")) {
    return (
      <img src={scatteredClouds} alt="clouds" id="weather-image-display" />
    );
  } else if (description.includes("Clear")) {
    return <img src={clearSky} alt="clear" id="weather-image-display" />;
  } else if (description.includes("Drizzle")) {
    return <img src={showerRain} alt="drizzle" id="weather-image-display" />;
  } else if (description.includes("Rain")) {
    return <img src={rain} alt="rain" id="weather-image-display" />;
  } else if (description.includes("Thunderstorm")) {
    return (
      <img src={thunderstorm} alt="thunderstorm" id="weather-image-display" />
    );
  } else if (description.includes("Snow")) {
    return <img src={snow} alt="snow" id="weather-image-display" />;
  } else {
    return <img src={mist} alt="mist" id="weather-image-display" />;
  }
}
