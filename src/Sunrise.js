import React from "react";

export default function Sunrise(props) {
  let sunriseTime = new Date(
    (props.timestamp + (props.timezone - 7200)) * 1000
  );
  let sunriseHours = sunriseTime.getHours();
  let sunriseMinutes = sunriseTime.getMinutes();

  if (sunriseHours < 10) {
    sunriseHours = `0${sunriseHours}`;
  }

  if (sunriseMinutes < 10) {
    sunriseMinutes = `0${sunriseMinutes}`;
  }

  return (
    <div>
      {sunriseHours}:{sunriseMinutes}
    </div>
  );
}
