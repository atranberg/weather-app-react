import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        <div className="WeatherForecast">
          <div className="row">
            <div className="col-2">
              <WeatherForecastDay data={forecast[1]} />
            </div>
            <div className="col-2">
              <WeatherForecastDay data={forecast[2]} />
            </div>
            <div className="col-2">
              <WeatherForecastDay data={forecast[3]} />
            </div>
            <div className="col-2">
              <WeatherForecastDay data={forecast[4]} />
            </div>
            <div className="col-2">
              <WeatherForecastDay data={forecast[5]} />
            </div>
            <div className="col-2">
              <WeatherForecastDay data={forecast[6]} />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "03cb8d16f9a2b4cc3c8597d68446f50d";
    let lat = props.coordinates.lat;
    let lon = props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
