import react from "react";
import "./weather.css";

export default function weathrt() {
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
      <h1>Tehran</h1>
      <ul>
        <li>
          <span>Wednesday 16:54</span>{" "}
        </li>
        <li>
          {" "}
          <span>Mostly cloudy</span>
        </li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <img
            src="https://assets.msn.com/weathermapdata/1/static/weather/Icons/taskbar_v10/Condition_Card/D200PartlySunnyV2.svg"
            alt="Mostly Cloudy"
            className="float-left"
          />{" "}
          <span className="temperature"> 12</span>
          <span className="unit">° C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation</li>
            <li>Humidity: 70%</li>
            <li>Wind: 13 km/h%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
