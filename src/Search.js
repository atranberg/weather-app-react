import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 form-floating mb-3">
            <input className="form-control" type="search" autoComplete="off" />
            <label for="floatingInput">Change location</label>
          </div>
          <div className="col-sm-2">
            <button
              type="submit"
              className="btn btn-outline-secondary btn-lg"
              id="search-button"
            >
              Search
            </button>
          </div>
          <div class="col-sm-2">
            <button
              type="button"
              className="btn btn-outline-secondary btn-sm"
              id="current-location-button"
            >
              Current location
            </button>
          </div>
          <div className="col-sm-2" id="temperature-conversion">
            <span className="units">
              <a href="/" id="celsius-link" className="active">
                °C
              </a>{" "}
              |{" "}
              <a href="/" id="fahrenheit-link">
                °F
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
