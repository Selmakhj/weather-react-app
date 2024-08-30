import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setweatherData] = useState({ Ready: false });

  function handleResponse(response) {
    setweatherData({
      Ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      date: "wednesday 09:00",
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.Ready) {
    return (
      <div className="weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Enter a city.."
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary"
                type="Submit"
                value="search"
                w-100
              />
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>
            <span>{weatherData.date}</span>{" "}
          </li>
          <li>
            {" "}
            <span className="text-capitalize">{weatherData.description}</span>
          </li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <img
              src={weatherData.icon}
              alt="Mostly Cloudy"
              className="float-left"
            />{" "}
            <span className="temperature">
              {" "}
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit">° C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}</li>
              <li>Wind: {weatherData.wind} km/h%</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "094780c710fa4efd669f0df8c3991927";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultcity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return "Loading ... ";
}
