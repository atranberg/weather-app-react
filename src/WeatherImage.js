import React from "react";

export default function WeatherImage(props) {
  const weatherDescription = props.data.weather[0].main;

  if (weatherDescription.includes("Clouds")) {
    return (
      <img
        src=".images/scatteredClouds.png"
        alt="clouds"
        id="weather-image-display"
      />
    );
  } else if (weatherDescription.includes("Clear")) {
    return (
      <img src=".images/clearSky.png" alt="clear" id="weather-image-display" />
    );
  } else if (weatherDescription.includes("Drizzle")) {
    return (
      <img
        src=".images/showerRain.png"
        alt="drizzle"
        id="weather-image-display"
      />
    );
  } else if (weatherDescription.includes("Rain")) {
    return <img src=".images/rain.png" alt="rain" id="weather-image-display" />;
  } else if (weatherDescription.includes("Thunderstorm")) {
    return (
      <img
        src=".images/thunderstorm.png"
        alt="thunderstorm"
        id="weather-image-display"
      />
    );
  } else if (weatherDescription.includes("Snow")) {
    return <img src=".images/snow.png" alt="snow" id="weather-image-display" />;
  } else {
    return <img src=".images/mist.png" alt="mist" id="weather-image-display" />;
  }
}
