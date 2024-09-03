import React from "react";
import FormattedDate from "./formattedDate";
//import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./weatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />{" "}
        </li>
        <li>
          {" "}
          <span className="text-capitalize">{props.data.description}</span>
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="float-left">
            <weatherIcon code={props.data.icon} size={52} />
          </div>
          <div>
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}</li>
            <li>Wind: {props.data.wind} km/h%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
