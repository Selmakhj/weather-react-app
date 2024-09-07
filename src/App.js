import React from "react";
import Weather from "./weather";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div class="container">
        <Weather defaultCity="Tehran" />
        <footer>
          This project was coded by Selma Khajeh and is{" "}
          <a
            href="https://github.com/Selmakhj/weather-react-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://weather-react-app-ap8v.onrender.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Render
          </a>
        </footer>
      </div>
    </div>
  );
}
