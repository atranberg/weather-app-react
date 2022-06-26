import React from "react";

export default function Sunset(props) {
  let sunsetTime = new Date((props.timestamp + (props.timezone - 7200)) * 1000);
  let sunsetHours = sunsetTime.getHours();
  let sunsetMinutes = sunsetTime.getMinutes();

  if (sunsetHours < 10) {
    sunsetHours = `0${sunsetHours}`;
  }

  if (sunsetMinutes < 10) {
    sunsetMinutes = `0${sunsetMinutes}`;
  }

  return (
    <div>
      {sunsetHours}:{sunsetMinutes}
    </div>
  );
}
