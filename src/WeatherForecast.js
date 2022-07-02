import React from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "03cb8d16f9a2b4cc3c8597d68446f50d";
  let lat = props.coordinates.lat;
  let lon = props.coordinates.lon;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col-2">
          <div className="forecastDay">Thu</div>
          <div className="forecastIcon">icon</div>
          <div className="forecastTemperature">
            <span className="forecastTemperatureMax">
              <strong>30°</strong>
            </span>{" "}
            | {}
            <span className="forecastTemperatureMin">19°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
